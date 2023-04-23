---
namespace: update-net-future
permalink: /blog/update-netz-zukunft
permalink_en: /blog/update-net-future
last_modified_at: 2015-12-28T00:00:00.00+01:00
category: blog
tags: administration encryption website
---

# [UPDATE] Netz der Zukunft

Könnt ihr euch noch an meinen Blog Eintrag zum [Netz der Zukunft][net-future] erinnern?

[net-future]: /blog/netz-zukunft

## Ich gehöre zu den Auserwählten

Gestern abend bekam ich eine E-Mail, dass ich in die Closed Beta von letsencrypt eingeladen wurde.
Weihnachten kommt dieses Jahr früh.
Wie ihr sehen könnt, ist meine Website jetzt nur noch verschlüsselt zu erreichen.
Ich bin im Netz der Zukunft angekommen.
Ich kann euch nun die Integrität und Sicherheit meines Inhalts zusichern, oder so.

Ich habe mich mit [kepler.international][kepler] und mit [git.kepler.international][git] beworben.
Somit sind erstmal nur diese beiden Domains durch ein Zertifikat gesichert.
Ich hoffe, dass ich zu einem späteren Zeitpunkt auch weitere Domains mit abdecken kann.

[kepler]: https://kepler.international
[git]: https://git.kepler.international

## Genau zum richtigen Zeitpunkt

Ihr seht keine Warnmeldung aufgrund eines ungültigen Zertifikats mehr.
Am 19.10.2015 wurde das Intermediate Zertifikat von letsencrypt durch IdenTrust quersigniert.
Damit ist es in 99% aller Browser gültig.

## Nachtrag 28.12.2015

Die Zertifikate haben eine 90-Tage Gültigkeit.
Als Serveradministrator ist man dazu angehalten aller 60 Tage das Zertifikat zu erneuern.
Das habe ich heute getan und gleich alle weiteren aktiven Domains unter das Zertifikat gestellt.
Es fehlt nur noch die Konfiguration, dass die Verbindung auf https hochgestuft wird.

Ihr fragt euch möglicherweise, warum man aller 90 Tage sein Zertifikat erneuern soll.
Ich habe mich das auch gefragt aber die Erklärung von letsencrypt leuchtet ein.
Damit schnell neue Domains zu einem Zertifikat hinzugefügt werden können, sollte das alte Zertifikat seine Gültigkeit verlieren.
Da Certificate Revocation Lists noch keine richtige Verbreitung gefunden haben, muss man sich leider noch so eine Krücke schaffen.
Das Argument, dass es zu aufwendig wäre, zieht nicht, da mit einem einfachen

```ShellSession
>_ ./letsencrypt-auto
…
```

alles erledigt ist.
