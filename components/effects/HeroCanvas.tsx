"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 a;void main(){gl_Position=vec4(a,0,1);}`;

const FRAG = `#version 300 es
precision highp float;
uniform float uResolutionX,uResolutionY,uTime,uOffsetX,uOffsetY,uScale,uUVOffsetX,uUVOffsetY,uRotation;
uniform float uShapeType,uCornerTL,uCornerTR,uCornerBL,uCornerBR,uRefAspect,uColorCount;
uniform vec4 uColor0,uColor1,uColor2,uColor3,uColor4;
uniform float uCount,uSize,uSpeed;
out vec4 fragColor;
const float TWO_PI=6.28318530718;
float hash11(float p){p=fract(p*0.1031);p*=p+33.33;p*=p+p;return fract(p);}
vec3 dither(vec3 c,vec2 f){float n=fract(sin(dot(f,vec2(12.9898,78.233)))*43758.5453);return c+(n-0.5)/128.0;}
vec4 getColor(int i){if(i==0)return uColor0;if(i==1)return uColor1;if(i==2)return uColor2;if(i==3)return uColor3;return uColor4;}
vec2 ballPosition(int idx,float time){float fi=float(idx);float phase1=hash11(fi*73.156)*TWO_PI;float phase2=hash11(fi*91.213)*TWO_PI;float rate1=0.3+hash11(fi*47.834)*0.7;float rate2=0.25+hash11(fi*123.456)*0.75;float radiusX=0.15+hash11(fi*37.891)*0.3;float radiusY=0.15+hash11(fi*59.347)*0.3;float secondary=0.05*sin(time*rate1*1.7+phase2*2.0);return vec2(0.5+radiusX*sin(time*rate1+phase1)+secondary,0.5+radiusY*cos(time*rate2+phase2)+secondary*0.7);}
float ballRadius(int idx,float baseSize){float fi=float(idx);float v=0.6+hash11(fi*17.53)*0.8;return baseSize*0.25*v;}
void main(){
  vec2 fragCoord=vec2(gl_FragCoord.x,uResolutionY-gl_FragCoord.y);
  vec2 rawUV=(fragCoord-vec2(uOffsetX,uOffsetY))/vec2(uResolutionX,uResolutionY);
  vec2 uv=rawUV-0.5;float cosR=cos(uRotation),sinR=sin(uRotation);
  uv=vec2(uv.x*cosR-uv.y*sinR,uv.x*sinR+uv.y*cosR);uv/=max(uScale,0.01);uv+=vec2(uUVOffsetX,uUVOffsetY);uv+=0.5;
  vec4 bgColor=getColor(0);
  int colorCount=int(clamp(uColorCount,2.0,5.0));int ballCount=int(clamp(uCount,2.0,30.0));float ballSize=clamp(uSize,0.05,1.0);float t=uTime*uSpeed*0.5;
  float pixelSize=1.0/min(uResolutionX,uResolutionY);
  vec2 aspectUV=vec2(uv.x*uRefAspect,uv.y);
  int fgColorCount=int(max(float(colorCount-1),1.0));
  float totalInfluence=0.0;vec3 weightedColor=vec3(0.0);float weightedAlpha=0.0;float totalWeight=0.0;float power=2.7;
  for(int i=0;i<30;i++){if(i>=ballCount)break;vec2 bPos=ballPosition(i,t);vec2 bPosAspect=vec2(bPos.x*uRefAspect,bPos.y);float radius=ballRadius(i,ballSize);float dist=length(aspectUV-bPosAspect);float safeDist=max(dist,0.001);float influence=pow(radius/safeDist,power);totalInfluence+=influence;int colorIdx=int(mod(float(i),float(fgColorCount)))+1;vec4 bColor=getColor(colorIdx);weightedColor+=bColor.rgb*influence;weightedAlpha+=bColor.a*influence;totalWeight+=influence;}
  float aaWidth=pixelSize*8.0;float threshold=1.0;float mask=smoothstep(threshold-aaWidth,threshold+aaWidth,totalInfluence);
  vec3 blobColor=(totalWeight>0.001)?weightedColor/totalWeight:vec3(0.5);float blobAlpha=(totalWeight>0.001)?weightedAlpha/totalWeight:1.0;
  float interiorGlow=smoothstep(threshold,threshold*4.0,totalInfluence);blobColor=mix(blobColor,blobColor*1.15,interiorGlow*0.3);
  float edgeDist=abs(totalInfluence-threshold);float edgeHighlight=exp(-edgeDist*15.0)*0.12;blobColor+=edgeHighlight;
  vec4 result;result.rgb=mix(bgColor.rgb,blobColor,mask);result.a=mix(bgColor.a,blobAlpha,mask);
  result.rgb=dither(result.rgb,fragCoord);result=clamp(result,0.0,1.0);
  fragColor=vec4(result.rgb*result.a,result.a);
}`;

const COLORS = ["#0B0A0A", "#E03131", "#1B7A4B", "#E03131"];
const PARAMS = { uCount: 6, uSize: 0.72, uSpeed: 0.34 } as const;
const SCALE = 2.4;

function hexToRgba(h: string): [number, number, number, number] {
  let hex = h.replace("#", "");
  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const a = hex.length >= 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;
  return [r, g, b, a];
}

function compile(gl: WebGL2RenderingContext, src: string, type: number) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(sh) ?? "shader compile error");
  }
  return sh;
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let raf = 0;
    let ro: ResizeObserver | null = null;
    const gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true });

    if (!gl) {
      canvas.style.background =
        "radial-gradient(60% 60% at 75% 25%,#E0313155,transparent),radial-gradient(55% 55% at 15% 90%,#1B7A4B55,transparent),#0B0A0A";
      return;
    }

    try {
      const buf = gl.createBuffer()!;
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
        gl.STATIC_DRAW,
      );

      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl, VERT, gl.VERTEX_SHADER));
      gl.attachShader(prog, compile(gl, FRAG, gl.FRAGMENT_SHADER));
      gl.bindAttribLocation(prog, 0, "a");
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) ?? "link error");
      }
      gl.useProgram(prog);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

      const u: Record<string, WebGLUniformLocation | null> = {};
      const nUniforms = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS) as number;
      for (let i = 0; i < nUniforms; i++) {
        const info = gl.getActiveUniform(prog, i)!;
        u[info.name] = gl.getUniformLocation(prog, info.name);
      }

      const colors = COLORS.map(hexToRgba);
      const t0 = performance.now() / 1000;

      function resize() {
        if (!canvas || !gl) return;
        const r = canvas.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = r.width * dpr;
        canvas.height = r.height * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      ro = new ResizeObserver(resize);
      ro.observe(canvas);
      resize();

      function render(now: number) {
        if (!gl || !canvas) return;
        const t = now / 1000 - t0;
        const w = canvas.width;
        const h = canvas.height;
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        const setF: Array<[WebGLUniformLocation | null, number]> = [
          [u.uResolutionX, w],
          [u.uResolutionY, h],
          [u.uTime, t],
          [u.uOffsetX, 0],
          [u.uOffsetY, 0],
          [u.uScale, SCALE],
          [u.uUVOffsetX, 0],
          [u.uUVOffsetY, 0],
          [u.uRotation, 0],
          [u.uShapeType, 0],
          [u.uCornerTL, 0],
          [u.uCornerTR, 0],
          [u.uCornerBL, 0],
          [u.uCornerBR, 0],
          [u.uRefAspect, w / h],
          [u.uColorCount, colors.length],
        ];
        for (const [loc, val] of setF) if (loc) gl.uniform1f(loc, val);

        for (let i = 0; i < 5; i++) {
          const c = colors[i] ?? [0, 0, 0, 1];
          const loc = u[`uColor${i}`];
          if (loc) gl.uniform4f(loc, c[0], c[1], c[2], c[3]);
        }

        for (const [k, v] of Object.entries(PARAMS)) {
          const loc = u[k];
          if (loc) gl.uniform1f(loc, v);
        }

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        raf = requestAnimationFrame(render);
      }
      raf = requestAnimationFrame(render);
    } catch {
      canvas.style.background =
        "radial-gradient(60% 60% at 75% 25%,#E0313155,transparent),radial-gradient(55% 55% at 15% 90%,#1B7A4B55,transparent),#0B0A0A";
    }

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 z-0 block h-full w-full"
    />
  );
}
