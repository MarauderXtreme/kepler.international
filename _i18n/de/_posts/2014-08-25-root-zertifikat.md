---
namespace: root-cert
permalink: /projects/root-zertifikat
permalink_en: /projects/root-certificate
category: projects
last_modified_at: 2015-10-27T00:00:00.00+02:00
tags: administration encryption website
---

# Root Zertifikat

## Kepler ist Root

Ich habe mir vor kurzem ein "Root-Zertifikat" erstellt.
Also grob gesagt, habe ich ein Zertifikat selbst signiert und dagegen andere Zertifikate getrusted.
Hört sich aufregender an, oder?

## Warum der Aufwand? Warum kein Echtes oder Selbstsigniertes?

1. Da ich noch weitere Websiten auf Sub-Domains habe, bräuchte ich ein Wildcard- oder Multidomain Zertifikat.
   Das kann ich mir zur Zeit nicht leisten.
2. Es war eine schöne Übungsaufgabe.
   Ich habe einiges über Zertifizierung und SSL gelernt.
3. Es sieht einfach schöner aus.
   Sobald das Zertifikat installiert ist, ist keine Sicherheitsausnahme mehr nötig.
4. Vielleicht brauchen auch Freunde mal ein Zertifikat, wo das Verbeiten nicht so schwierig ist.

## Brauch ich das?

**Natürlich**, das ist ein **Must-Have**.
Installier es in allen Browsern die dir unter die Finger kommen.
Sobald mein Zertifikat über die halbe Welt verbreitet ist, wird den großen Browserherstellern nichts anderes übrig bleiben, als mich zu akzeptieren.
**Die Welt wird mir gehören.**

So und jetzt mal im Ernst und genug Größenwahn.
Das Zertifikat bringt erstmal nur etwas, wenn Seiten besucht werden, die gegen mein Root getrusted sind.
Das ist bisher nur die Domain kepler.international und ihre Subdomains.
Für alle Nutzer meines [Git][git] und vielleicht auch mal später meines Mail-Servers könnte das Zertifikat von Vorteil sein.
Außerdem wird allen, die einen Account auf Kepler International haben, wärmstens eine Installation ans Herz gelegt.
Ich werde bei Gelegenheit das Backend auf SSL umstellen.

[git]: https://git.kepler.international

## Und wo finde ich das Ding nun?

[Hier! Hier! Hier! Klick mich!!! Ich bin ein Link][cert].
Außerdem findet sich ein Link im Fußbereich der Seite.

Auf der Seite ist auch eine Übersicht, wie ein Zertifikat installiert wird.
Zur Zeit ohne Bilder.
Ich hoffe das stellt kein Problem dar und wenn doch, I don't give a fork.

[cert]: http://cert.kepler.international/

{% capture lmad %}{% include date-translator.html date = page.last_modified_at %}{% endcapture %}

## Nachtrag {{ lmad | normalize_whitespace }}

Da es mittlerweile [letsencrypt][letsencrypt] gibt, ist ein eigenes Root-Zertifikat hinfällig geworden.
Wie [hier][blog-le] zu lesen, beziehe ich meine Zertifikate nun von letsencrypt.
Damit ist dieses Projekt nun beendet.

[letsencrypt]: https://letsencrypt.org/
[blog-le]: /blog/update-netz-zukunft
