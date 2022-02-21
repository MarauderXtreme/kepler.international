---
namespace: root-cert
permalink: /projects/root-zertifikat
permalink_en: /projects/root-certificate
category: projects
last_modified_at: 2015-10-27T00:00:00.00+02:00
tags: administration encryption website
---

# Root Certificate

## Kepler is Root

Recently I created my own "Root-Certificate".
Roughly I signed a certificate by myself and trusted other certificates against it.
Sounded more exciting than it was, didn't it?

## Why such an effort? Why no real oder self-signed one?

1. I have other subdomains so that I would need a multi-domain or wildcard-certificate.
   At this time I can't afford it.
2. It was a nice exercise.
   I learned a bit about certification and SSL.
3. It looks more beautifull.
   Since the certificate is installed there is no need for a security exception.
4. Maybe my friends need a certificate where distrtibuting it isn't hard.

## Do I need it?

**Of course**, it is a **Must-Have**.
Install it in every Browser you get your hands on.
As soon as my certificate reaches half of the world all major browser have to accept me.
**The world will be mine.**

Now back to reality and away from megalomania.
At first the certificate is only useful if you visit a site that is trusted against my root.
At this time it is only kepler.international and its subdomains.
For all users of my [Git][git] and possible a later mail server this certificate could be convenient.
Furthermore for all people with an account on Kepler International the installation is useful.
On occasion I will switch the backend to SSL.

[git]: https://git.kepler.international

## So, where do I find this root thingy?

[Here! Here! Here! Click me!!! I am a link][cert].
You find also a link in the footer of the site.

On this site you will find an overview how-to install a certificate.
At this time it is without pictures.
I hope this is no problem but if, I don't give a fork.

[cert]: http://cert.kepler.international/

{% capture lmad %}{% include date-translator.html date = page.last_modified_at %}{% endcapture %}

## Addendum {{ lmad | normalize_whitespace }}

Since the release of [letsencrypt][letsencrypt], having an own root certificate is obsolote.
I get my certificates from letsencrypt as described [here][blog-le]
Therefore this project has come to an end.

[letsencrypt]: https://letsencrypt.org/
[blog-le]: {{ "/blog/update-net-future" | relative_url }}
