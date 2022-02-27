---
namespace: bots-ssh
permalink: /blog/bots-moegen-keine-moderne-ssh-konfiguration
permalink_en: /blog/bots-dont-like-modern-ssh-configuration
languages: ["de"]
category: blog
tags: administration security
---

# Bots mögen keine moderne SSH Konfiguration

Im Zuge meines [DNS Umzugs und der Möglichkeit von SSHFP Records][umzug-domain] sowie meinem neuen Linux Laptop habe ich mich wieder ein bisschen mit Sicherheit, Verschlüsselung und vor allem Härten auseinandergesetzt.
Maßnahmen wie das Anpassen von Webserver Cipher Suiten ist ja mittlerweile recht gängig und auch mit den richtigen [Tools][tls-configurator] einfach zu erreichen und auch zu [prüfen][ssllabs].
Doch auch an anderen Stellen gibt es Cipher Suiten und verschiedene andere Algorithmen die zur Sicherheit und Vertraulichkeit beitragen.
So auch bei SSH.
Da gibt es sowohl die Einstellungen im Client als auch die im Server.
Welche Parameter da sinnvoll sind, ist leider nicht so einfach zu finden.

[umzug-domain]: /blog/umzug-zu-neuem-domainanbieter
[tls-configurator]: https://mozilla.github.io/server-side-tls/ssl-config-generator/
[ssllabs]: https://www.ssllabs.com/ssltest/

## Anfang SSHFP

Ich habe mich als erstes damit beschäftigt, was der SSHFP Record tut und wie ich meinen SSH Client dazu bringe, diese zu berücksichtigen.
Dabei habe ich mich erstmal dazu entschieden "warn" zu benutzen, wie sich später als sinnvoll herausstellte.
Außerdem kann man seinen Klienten dazu bringen, weitere SSH Keys zu lernen.

## Umstrukturierung `ssh_config`

Ich habe ein paar weitere Anpassungen gemacht, vor allem, habe ich die Identitäten vertauscht, sodass mein `ed25519` Key endlich über dem Backup RSA Key benutzt wird.

## Härten der `sshd_config`

Serverseitig habe ich damit begonnen auch den `ed25519` Fingerprint über die anderen Fingerprints auszuliefern.
Außerdem habe ich auch die ganzen Krypto-Suiten, -Algorithmen und Dinge umzustellen.
Ich weiß leider zu wenig über Verschlüsselung, als dass ich entscheiden könnte, welche dieser Dinge besser/sicherer/sinnvoller/effizienter ist.
Leider findet man im Netz nicht viel darüber also habe ich das [bettercrypto Paper][bettercrypto] benutzt.

[bettercrypto]: https://bettercrypto.org/static/applied-crypto-hardening.pdf

## Weniger Fail2Ban Mails

Einen Tag später viel mir auf, dass sich die Anzahl meiner F2B Mail auf ungefähr ein Viertel reduziert hatte.
Das fand ich etwas ungewöhnlich und dachte schon, dass ich beim Härten etwas falsch gemacht hatte.
Doch das genaue Gegenteil ist der Fall.
In meiner `auth.log` habe ich dann festgestellt, dass sehr viele Einträge sich darauf bezogen haben, dass kein passender Algorithmus gefunden wurde.
Somit hat das Härten meiner Konfiguration dazu geführt, dass weniger Bots überhaupt auch nur einen Angriffsversuch starten können.

## Zusammenfassung

Es lohnt sich, etwas Zeit in Sicherheit zu investieren.
Außerdem ist ein Gewinn an Komfort durchaus möglich.
Ich werde wahrscheinlich später noch meine dotfiles auf Github als Repository veröffentlichen.
Wer also an meiner Konfiguration interessiert ist, sollte mein Profil im Auge behalten.
