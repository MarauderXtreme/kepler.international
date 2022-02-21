---
namespace: net-future
permalink: /blog/netz-zukunft
permalink_en: /blog/net-future
category: blog
tags: everyday-life encryption website
---

# The net from the future

Since some time now the future of the web begins.
This article is about the project letsencrypt(link is external).

## What is it about?

Letsencrypt is an initiative that targets to deliver free SSL certificates to a wide audience.
So far nothing new.
For a while now StartSSL offers simple SSL certificates valid for a year.
Still the problem is the huge effort and the difficult handling of openssl for generating certificates and everything needed for them.
Most of the time you let them sign for you a certificate for a year or more.
So you have to search all necessary steps everytime.
Additionaly the parameters are prone to typos.

## Can we do it better?

Yes! You can write yourself some shellscripts that makes it quite easy to maintain your own infrastructure.
Nevertheless it is difficult to migrate those scripts.
So this solution is not optimal but was the only thing that worked.
For a year letsencrypt tries to change that.
How they try to do it?

Imagine you install a small programm on your Server.
After that you only have to type in

```ShellSession
>_ letsencrypt kepler.international
…
```

and some time later you get a valid SLL certificate.
If you want you can let your apache get configured correctly.
That is everything, genius right? That is my opinion too.
This will get reality with letsencrypt very soon.

## When is soon?

Since yesterday the first certificate was issued by the new letsencrypt CA.
Now the beta phase has started.
I already entered my wbsite and my git for it.
Roughly ten weeks from now the intermediate certificates will get cross signed by IdentTrust.
So the certificates issued by letsenrypt will be trusted by nearly every browser.
But this should only be a interim solution until the root certificate gets entered into the browsers trust store.
Matching request where additionaly filed yesterday.

## Who is behind letsencrypt?

It started as an initiative of Mozilla Corporation, Cisco Systems, Inc., Akamai Technologies, Electronic Frontier Foundation, IdenTrust, Inc., and researchers at the University of Michigan.
These are quite some names that makes me confident that this project will suceed.

## Why is encryption important?

The newly published standard HTTP/2.0 makes it mandatory to encrypt web communication.
So free certificates are an important step for making the web better.
Besides it is always a good idea to encrypt the connection to websites.
Edward Snowden says hello.
