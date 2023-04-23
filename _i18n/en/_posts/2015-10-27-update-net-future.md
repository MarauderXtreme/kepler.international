---
namespace: update-net-future
permalink: /blog/update-netz-zukunft
permalink_en: /blog/update-net-future
last_modified_at: 2015-12-28T00:00:00.00+01:00
category: blog
tags: administration encryption website
---

# [UPDATE] Net of the future

Can you remember my blog post to the [net of the future][net-future]?

[net-future]: /blog/netz-zukunft

## I am one of the chosen ones

Yesterday evening I recieved an email that i have been invited to the closed beta of letsencrypt.
Christmas came early this year.
As you can see my site is now only accessible encrypted.
I arrived in the net of the future.
I can now assure you of the integrity and security of my content or something along those lines.

I applied with [kepler.international][kepler] and [git.kepler.international][git].
With that only those two domains are covered by a certificate.
I hope that I can cover more domains later.

[kepler]: https://kepler.international
[git]: https://git.kepler.international

## Exactly to the right time

You do not see a warning message due to an invalid certificate.
On the 19.10.2015 the intermediate certificate of letsencrypt has been cross signed by IdenTrust.
With that it is valid in 99% of browsers.

## Addendum 28.12.2015

The certificates have a 90-day validity.
It is suggested that you as a server administrator renew the certificates every 60 days.
I did this today and extended the certificate to all my active domains.
Only the configuration to upgrade the connection to https is missing now.

You maybe ask yourself why you should renew a certificate every 90 day.
I did the same but the explenation from letsencrypt made sense.
To quickly add new domains to a certificate the old certificate should lose its validity.
Since Certificate Revocation Lists have not really spread you have to create such a crutch.
The argument that it is to elaborate to do does now apply since with a simple:

```ShellSession
>_ ./letsencrypt-auto
…
```

everything is done.
