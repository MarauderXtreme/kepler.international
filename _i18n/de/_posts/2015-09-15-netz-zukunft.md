---
namespace: net-future
permalink: /blog/netz-zukunft
permalink_en: /blog/net-future
category: blog
tags: everyday-life encryption website
---

# Netz der Zukunft

Das Netz der Zukunft beginnt seit einer Weile.
Damit meine ich jetzt nicht den schalen Werbeslogan der Drosselkom.
Ich meine das neue Projekt [letsencrypt][letsencrypt].

[letsencrypt]: https://letsencrypt.org/

## Worum geht es?

Letsencrypt ist eine Initiative, welche es sich zum Ziel gesetzt hat, kostenlose SSL Zertifikate zur Verfügung zu stellen.
Das ist prinzipiell nichts neues.
StartSSL bietet schon seit langem einfache SSL Zertifikate für ein Jahr an.
Das Problem ist immer noch der große Aufwand und die schwierige Bedienung von openssl zur Generierung von Zertifikaten und allen was dafür nötig ist.
Meistens lässt man sich für ein Jahr oder länger ein Zertifikat signieren, wodurch man meistens gezwungen ist, die notwendigen Schritte immer wieder nach zu schauen.
Zusätzlich sind die Parameter sehr anfällig für Rechtschreibfehler.

## Kann man das besser machen?

Ja! Man kann sich selbst Shell Skripte schreiben, welche es durchaus einfach machen, seine eigene Infrastruktur aufrecht zu erhalten.
Trotzdem ist es schwer diese Skripte zu migrieren.
Also ist diese Lösung wiederum suboptimal aber das einzige was bisher funktionierte.
Seit einem Jahr gibt es nun Letsencrypt, die sich vorgenommen haben das zu ändern.

## Wie machen die es?

Stell Dir vor, du installierst ein kleines Programm auf deinem Server.
Danach gibst Du nur noch

```ShellSession
>_ letsencrypt kepler.interantional
```

ein und schon bekommst Du kurze Zeit später kostenlos ein gültiges SSL Zertifikat.
Wenn Du willst, kannst Du dir nun sogar den Apache korrekt einrichten lassen.
Das war alles, genial oder? Das finde ich auch.
Genau das wird demnächst Realität mit letsencrypt.

## Wann demnächst?

Seit gestern ist das erste Zertifikat durch die neue letsencrypt CA ausgestellt worden.
Damit ist die Betaphase gestartet.
Ich habe mich schon mit meiner Website und meinem Git angemeldet.
In rund zehn Wochen werden die Intermediate Zertifikate durch IdentTrust quersigniert.
Dadurch werden die Zertifikate, welche von letsencrypt ausgestellt werden, nahezu in jedem Browser akzeptiert.
Das soll aber nur als Zwischenlösung dienen, bis das Rootzertifikat in alle Browser aufgenommen werden.
Entsprechende Anträge wurden gestern gleich mitgestellt.

## Wer steckt hinter letsencrypt?

Anfangs war es eine Initiative von Mozilla Corporation, Cisco Systems, Inc., Akamai Technologies, Electronic Frontier Foundation, IdenTrust, Inc., und Wissenschaftlern der University of Michigan.
Dies sind ziemlich große Namen, was mich zuversichtlich macht, dass dieses Projekt Erfolg haben wird.

## Warum ist Verschlüsselung wichtig?

Um den vor Kurzem verabschiedeten Standard HTTP/2.0 verwenden zu können, wird Verschlüsselung Pflicht.
Somit sind freie Zertifikate ein wichtiger Schritt, um das Web besser zu machen.
Außerdem ist es immer gut, die Verbindung zu Websites zu verschlüsseln.
Edward Snowden lässt grüßen.
