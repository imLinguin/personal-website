---
title: Reverse Engineering Galaxy Communication Service - Environment Setup
description: How to setup your environment for reverse engineering Galaxy Communication Service
createdAt: 05.12.2022
image: null
---

Softwer we need:
- Windows 11 VM (Can be any Windows machine or VM)
- [Proxifier](https://www.proxifier.com/) (it's paid but we can use 30 day trial)
- [Custom mitmproxy build](https://github.com/Yepoleb/mitmproxy-crl/tree/crl)
- Official Galaxy client
- Game that makes use of SDK

Everything we are going to do here will happen only in a VM, you can also try to run Galaxy in Wine, however I couldn't find any Proxifier alternatives


### Proxifier setup
Download and install [Proxifier](https://www.proxifier.com/) and add proxy settings as follows

![](/blog/galaxy-comm-serv-re-setup/1.webp)

Add a proxification rule to route all connections from `GalaxyCommunication.exe` through proxy. 

![](/blog/galaxy-comm-serv-re-setup/2.webp)

Also add a rule to prevent loops

Note: Executable can be different for you depending on which Python version you have.

![](/blog/galaxy-comm-serv-re-setup/3.webp)


### Mitmproxy setup
Follow the development setup steps from [CONTRIBUTING.md](https://github.com/Yepoleb/mitmproxy-crl/blob/crl/CONTRIBUTING.md) to install mitmproxy

Now temporarly add proxification rule for your web browser in Proxifier and launch mitmproxy on port we configured.
For me it's `mitmproxy -p 8080`

1. Go to `mitm.it` and download `.pem` and `.p12` certificate formats
2. Open `C:\ProgramData\GOG.com\Galaxy\redists\rootCA.pem` in the text editor
3. Paste `.pem` file contents you downloaded at the end
4. Save changes

### Make Galaxy Communication accept your cert
As for now make sure you are using mitmproxy fork I linked earlier since that one includes CRL support, that's not available upstream currently.

Import `.p12` certificate you downloaded earlier into `Trusted Root Certification Authorities`