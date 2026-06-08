# Security Policy

Thanks for helping keep the .NET Conf Africa website and its users safe.

## Supported versions

This project is a continuously deployed website — only the current `dev`
branch (and the live production deployment built from it) receives
security fixes. Older commits, forks, and preview deployments are not
maintained.

## Reporting a vulnerability

**Please do not open a public GitHub issue for security problems.**

Report vulnerabilities privately using GitHub's
[Private vulnerability reporting](https://github.com/dotnetcameroon/dotnet-africa-website/security/advisories/new)
on this repository. If you cannot use that channel, email
[security@dotnetcameroon.org](mailto:security@dotnetcameroon.org) instead.

Include as much of the following as you can:

- A clear description of the issue and its impact.
- Steps to reproduce (URL, payload, request, screenshots).
- The affected commit SHA or page, and the browser/OS where you saw it.
- Any suggested remediation, if you have one.

You should receive an acknowledgement within **3 business days**. We'll
keep you updated as we triage, and aim to ship a fix within **30 days**
for confirmed issues — sooner for anything actively exploitable.

## Scope

In scope:

- The deployed website (production domain) and its source in this repo.
- Build, dependency, or configuration issues that affect the deployed site.

Out of scope:

- Findings that require physical access, social engineering, or a
  compromised user device.
- Reports generated solely by automated scanners with no demonstrated
  impact.
- Missing security headers or best-practice recommendations without a
  concrete exploit.
- Vulnerabilities in third-party services we link to but do not operate.

## Disclosure

We follow coordinated disclosure: please give us a reasonable window to
ship a fix before publishing details. Once a fix is released, we're happy
to credit you in the advisory unless you'd prefer to remain anonymous.

Thanks for reporting responsibly.
