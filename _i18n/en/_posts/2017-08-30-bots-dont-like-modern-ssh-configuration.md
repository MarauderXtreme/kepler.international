---
namespace: bots-ssh
permalink: /blog/bots-moegen-keine-moderne-ssh-konfiguration
permalink_en: /blog/bots-dont-like-modern-ssh-configuration
category: blog
tags: administration security
---

# Bots do not like modern ssh configurations

In the course of my [DNS move and the possibility of SSHFP records][move-domain] as well as my new Linux laptop, I have been dealing a bit with security, encryption and especially hardening again.
Measures like tinkering with the cipher suites of a webserver is now relative common and with the right [tools][tls-configurator] easy to achieve and to [test][ssllabs].
But other things also have cipher suites and various algorithms that contribute to security and confidentiality.
This is also the case for SSH.
You got settings for the client as well as for the server.
Which parameter makes the most sense is not easily findable.

[move-domain]: /en/blog/relocate-to-new-registrar
[tls-configurator]: https://mozilla.github.io/server-side-tls/ssl-config-generator/
[ssllabs]: https://www.ssllabs.com/ssltest/

## Begin with SSHFP

At first I looked at what SSHFP records do and how I get my SSH client to take them into account.
With that I decided to set it to "warn" what proved valuable later.
You can also bring your clients to learn additional SSH keys.

## Restructure `ssh_config`

I took some amendments.
Especially I switched the identities so that my `ed25519` key is prefered to my backup `RSA` key.

## Hardening the `sshd_config`

On the server side I started to offer the `ed25519` fingerprint over the other fingerprints.
Addtionally I reconfigured all cipher suites, algorithms and things.
I unfortunately know too little about cryptography to decide which things are better/more secure/make more sense/are more efficient.
You cannot find much about that so I used the [bettercrypto paper][bettercrypto].

[bettercrypto]: https://bettercrypto.org/static/applied-crypto-hardening.pdf

## Reduced Fail2Ban mails

The next day I noticed that the amount of F2B mails had been reduced to about a quarter.
I found that a bit odd and suspected that I did something wrong while hardening my configuration.
But the exact opposite is the case.
Within my `auth.log` I could see that many entries refered to, that no matching algorithm could be offered.
The hardening of my configuration lead to way less bots that are able to even try and start an attack.

## Conclusion

It is worth investing some time in security.
A gain in comfort is possible.
I will eventually release my dotfiles on Github as repository.
So if anyone is interested in my configuration should keep an eye out on my profile.
