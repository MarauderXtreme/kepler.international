---
namespace: deploy-code-git
permalink: /tutorials/deploy-code-git
permalink_en: /tutorials/deploy-code-git
category: tutorials
tags: administration programming website
---

# Deploy Code with Git

For a long time we used a rsync script at work to deploy the webserver.
At first there had to be manual adding and removing of parameters to do a dry tun.
So this workflow was not the best.
After I was frustrated by manually editing the script every time I used my shell skillz[sic] to improve the user experience.

The result was a script with configuration options, commandline parameters and auto-completion.
That was quite elaborate and fit well into the workflow.
We would nevertheless still use two technologies to manage out developments.
Git for normal development and rsync for deploy.

After some time I found that redundant too and searched for a possibility to remove rsync completely.

## Git Pull on the server

The first variant that maybe comes to mind ist to checkout the repository on the server and do a pull everytime there is something new.
Looks to be very simple and intuitive.

### Not enough

This option would unfortunately includes that every developer would have to log in to the server and trigger the pull.
For that user would have had to be configured on the server, developers trained and various precautions would be needed so that there could not be incidents.
Is there an option to keep the interaction as low as possible?

## Why not Github Hooks?

Github offers an API to triggers various things to interact with.
The main thing is probably a solution for deployments.
That's why I looked into using this functionality if possible.
The problem with that is that you need an endpoint that Github can communicate with.
I was not keen on programming something myself to provide an endpoint for this deploy communication.
In addition, this is not so easy with certain customers, as they usually only have limited access to servers.

## Why should I care now even remote-ly?

At this point I remembered that you could define multiple remotes to push code to.
Why not simply define the webserver as endpoint and transfert the code there.
No sooner said than done.
I prepared everything on a test system and did the first trials.
I was immediately presented with the next error message.
Git does not like it if you push onto a checkout out repository since there could be changes that have not been merged.
This leads to a rejection message on another deploy.

Only from Git version 2.3 there would be an option to configure a remote to take in updates.
Most linux distribution are a bit conservative when it comes to available software and therefore the software with the hoster is too, this option is not viable.
But maybe one could keep this in mind.
The config is set like this:

```ShellSession
$ git config receive.denyCurrentBranch updateInstead
…
```

## Okay. Further options?

Now the question:
Do I get a bare repository configured in a way that a push to it would also update the server?
I found a possibility with Git hooks.

### Instructions

How does the basic setup look?
Let us assume that the complete Drupal project is hosted in its own repository withour headaches like submodules.
Further there is access to a user who can administer the server or the server is configured to set the correct permissions.

In the first step you create a folder and initialise a bare repo with:

```ShellSession
$ mkdir -p ~/projects/project && cd ~/projects/project
$ git init --bare
Empty git-repository initialised in ~/projects/project
```

Now you have to create and configure a `post-recieve` hook.
It gets triggered as soon the source code is pushed to the repo.
The simplest way it to define `GIT_WORK_TREE=/var/www/PROJECTDIR git checkout -f` in the hook.
So the content of the webroot gets overwritten everytime.
You have to make sure that the permissions on those folders are set correctly.
You can either achieve this by the `setgid` bit or via the initial group of the user that is used to push.

That is all for the configuration of the server.
Now to the configuration if the developer machines.
We have to add an extra remote there.

```ShellSession
$ git remote add live [USER]@[site]:/home/[USER]/bare.git
…
```

Now the webserver can be deployed by `git push live`.

## Wow. That easy?

It is not really a complex thing in itself.
You can add further configuration to it.
For example information texts that show if the process was successful or if error occured.
Since I cannot count on everyone using the correct branch for deployment I created an additional `pre-recieve` hook that checks if the pushed branches matches the current on the server.
If that is not the case the push is rejected and an error message is shown.
So we can prevent that feature or development branches land on the live systems.

## Quellcode

The hools and further instruction with an example are to be found in this [repo][repo].

[repo]: https://git.kepler.international/Marauder/git-hooks
