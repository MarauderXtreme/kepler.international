---
namespace: uktools
permalink: /projects/ubuntu-kernel-tools
permalink_en: /projects/ubuntu-kernel-tools
last_modified_at: 2018-08-14T00:00:00.00+02:00
category: projects
tags: software development linux
project:
  state: discontinued
  github: https://github.com/MarauderXtreme/uktools
  languages:
    - gnubash
---

# Ubuntu Kernel Tools

I searched a long time for an easy way to get the most recent [Mainline Kernel][mainline] as the kernel on my Laptop.
Unfortunately there is no real PPA for this kernel so the update process is kind of cumbersome.
The project [ukuu][ukuu] has all the needed functionality but it is a GUI-only programm.
I thought surely there must be an alternative that provides similiar functionality as a commandline tool.
At first I found [Mustafa Hastürks ukupgrade script][ukupgrade].
This had some errors and flaws.
In their forks I found the [TeamVeeBackup one][uktools] that had a few corrections and improvements but still was not completely bug-free.

Despite contrary status in their README both project neither appear to be actively developed any more.
The last commits have been respectively made over a year ago.
I opened two pull requests with the fork since I am more happy with this version.
They unfortunately hvae remained so far without reaction.

This prompted me to merge my pull requests into my own fork and develop it to my own needs.

[mainline]: http://kernel.ubuntu.com/~kernel-ppa/mainline/
[ukuu]: http://www.teejeetech.in/p/ukuu-kernel-upgrade-utility.html
[ukupgrade]: https://github.com/muhasturk/ukupgrade
[uktools]: https://github.com/TeamVee-B/uktools

## uktools

There are two scripts in this [repository][repo].
On one hand ukupgrade which allows via an interactive prompt to choose the current stable or release candidate and if the generic or lowlatency kernel should be installed.
There are some other features but they are not worth mentioning at this point.
On the other hand the script ukpurge which uninstalls the old unused kernel.
Everyone who has run an Ubuntu system for a while probably noticed that old kernel can stack up.
This script fixes it.
Just make sure that you booted the most recent for the script to function correctly.

[repo]: https://github.com/MarauderXtreme/uktools

## For whom?

This projects is aimed at people that like to work a lot with the command line.
I myself did not want another GUI progamm on my system and that is the reason I worked on those scripts.
Everyone that is okay with GUI-only things is advised to use ukuu as it currently offers much more functionality and comfort.

## @TODOs

Currently there is no way to get notified about kernel updates.
For that I want to write a script that gets triggered by a cronjob.
Currently there is only missing a way to show notifications within a system.
Futhermore I will make my fork a standalone repository if my pull requests do not get any activiy.

## Update 14.08.2018

Since the changes by Canonical make it harder to keep the script consistent and robust I finaly decided to disontinue this project.
It should therefore be assumed that the script no longer works with the current kernel structure by now.

I found out that [ukuu][ukuu-site] also provides a CLI and the version checks are way more robust.
So I can only recommend changing to ukuu.

[ukuu-site]: http://www.teejeetech.in/p/ukuu-kernel-upgrade-utility.html
