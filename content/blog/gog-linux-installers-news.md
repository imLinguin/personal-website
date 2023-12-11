---
title: Galaxy like experience for Linux native games
description: Summary of what we know and what amazing things we can do with GOG's offline installers
createdAt: 08.30.2022
---


## What we know

The structure is fairly simple. Shell script with embedded ZIP containing game files.  
If you want to learn more about how they work step by step: [read this](https://yepoleb.github.io/blog/2016/10/09/how-the-gog-linux-installers-work/)


## What we try to achieve

As we also know the GOG support for Linux platform isn't great. Of course they allow you to install native titles and play them. There is one small issue **GAME UPDATES**, when the game gets updated user need to literally redownload whole script and reinstall it. Unlike for Windows GOG doesn't provide any patch archives that allow users to just update necessary files.


Our goal: `Galaxy like experience`  


What does it mean?  
Ability to download individual game files, allowing for future updating or verifying without need to re-download whole game archive.

Normally we would use GOG's micro-service known as `content system` to download and update game files like GOG Galaxy would. That's for example how Heroic Games Launcher downloads games at this moment  
But there isn't a GOG Galaxy for linux so content system doesn't support Linux builds.


## Embedded ZIP

As we know ZIP format supports the archives to be embedded into executables or scripts. The archive doesn't need to start at the beginning of the file and central directory record is stored at the end.

To understand rest of this we need to first take a look at how the ZIP is structured

Here is the table containing basic structure of the archive elements:


| [ZIP File format](https://docs.fileformat.com/compression/zip/) |
| :-------------------------------------------------------------: |
|                       Local File Header 1                       |
|                           File Data 1                           |
|                        Data Descriptor 1                        |
|                       Local File Header 2                       |
|                           File Data 2                           |
|                        Data Descriptor 2                        |
|                                …                                |
|                                …                                |
|                       Local File Header N                       |
|                           File Data N                           |
|                        Data Descriptor N                        |
|                    Archive Decryption Header                    |
|                    Archive Extra Data Record                    |
|                        Central Directory                        |


Each Local File Header contains the `CRC-32` sum that can be used to verify files or differentiate them between game versions.


## HTTP spec and our goal

Luckily for us GOG CDNs support [Range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) http header. That way we can request parts of the file that interest us.

I have working prototype that works with local files, but can be easily changed to work with http requests

Script decompresses game files to `testdir/` in the current path  
you can get [the source here](https://gist.github.com/imLinguin/603c2d879c3db29eb8fff604216adfc4) you can do whatever you want with it


## Summary

With this method we can obtain whole metadata in a few requests `~500KB` and decide what files to request next.

It's not only faster. But also saves a lot of space. With offline installers user has to have more than twice the space required by the game.

Even if GOG doesn't want to support Linux platform entirely. That doesn't stop us from making GOG experience better on our own :)
