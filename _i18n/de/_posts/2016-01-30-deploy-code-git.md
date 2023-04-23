---
namespace: deploy-code-git
permalink: /tutorials/deploy-code-git
permalink_en: /tutorials/deploy-code-git
category: tutorials
tags: administration programming website
---

# Deploy Code mit Git

Lange Zeit haben wir auf Arbeit ein rsync Skript dazu benutzt, um den Webserver zu deployen.
Zu Anfang wurde dort immer wieder händisch der Parameter für einen Dry Run hinzugefügt und wieder entfernt.
Der Workflow war somit nicht der Beste.
Nachdem es mich irgendwann genervt hatte, jedes Mal das Skript editieren zu müssen, habe ich meine "Shell Skillz" eingesetzt, um die Benutzung etwas zu verbessern.

Dabei kam ein Skript mit Konfigurationsoptionen, Kommandozeilenparamter und Autovervollständigung heraus.
Das war schon ziemlich weit etnwickelt und ließ sich gut in den Workflow integrieren.
Trotzdem nutzen wir dann zwei Technologien, um unsere Entwicklungen zu verwalten.
Git für die normale Entwicklung und rsync zum Deployen.

Das fand ich nach einer Weile auch redundant und habe nach einer Möglichkeit gesucht, wie ich um rsync zum Deployen herumkomme.

## Git Pull auf dem Server

Die erste Variante, die einem vielleicht einfällt, ist die Möglichkeit, einfach das Repository auf dem Server aus zu checken und jedes mal einen Pull zu machen, sobald es etwas Neues gibt.
Scheint auf den ersten Blick ziemlich einfach und intuitiv zu sein.

### Nicht ausreichend

Diese Option beinhaltet aber leider, dass der jeweilige Entwickler sich auf dem Server anmelden und den Pull auslösen muss.
Damit müssen der Nutzer eingerichtet, die Entwickler geschult und verschiedene Vorkehrungen getroffen werden, damit es dort zu keinen Zwischenfällen kommt.
Gibt es also eine Möglichkeit die Interaktion so gering wie möglich zu halten?

## Why not Github Hooks?

Github bietet eine API, mit der man interagieren kann, um verschiedene Sachen auszulösen.
Am meisten wird da wahrscheinlich eine Lösung zum Deployen angestrebt.
Deswegen hab ich mir angeschaut, ob es möglich wäre, diese Funktionalitäten zu nutzen.
Das Problem dabei ist, dass man auf dem jeweiligen Server einen Endpunkt schaffen muss, mit dem Github kommunizieren kann.
Das bereitet mir leider ein paar Bauchschmerzen, da ich nicht unbedingt selbst etwas programmieren möchte, um einen Endpunkt für Deploykommunikation bereit zu stellen.
Außerdem ist das bei bestimmten Kunden nicht so einfach, da man dort meist nur eingeschränkten Zugriff auf Server besitzt.

## Warum sollte es mich jetzt noch Remote interessieren?

Da fiel mir ein, dass man mit git verschiedene Remotes definieren kann und dorthin seinen Code pushen kann.
Warum dann nicht einfach den Webserver als Endpunkt definieren und seinen Code dorthin schieben.
Gesagt getan.
Ich habe auf einem Testsystem alles soweit umgestellt und die ersten Versuche damit gemacht.
Sofort wurde mir die nächste Fehlermeldung präsentiert.
Git mag es nicht, wenn man auf ein ausgechecktes Repository pushed, da dort gegebenenfalls Änderungen drin sind, die nicht gemerged werden.
Das führt dazu, dass bei einem erneuten Deploy eine rejected Nachricht angezeigt wird.

Erst ab Git Version 2.3 gibt es die Möglichkeit den Remote so einzurichten, dass man den Remote so einrichtet, dass er Updates entgegen nimmt.
Da leider viele Linuxdistributionen etwas stiefmütterlich mit der verfügbaren Software umgehen und dementsprechend auch die Hoster nicht so hinterher sind, fällt diese Option leider auch flach.
Doch man sollte die Möglichkeit im Kopf behalten.
Der Befehl lautet übrigens:

```ShellSession
$ git config receive.denyCurrentBranch updateInstead
…
```

## Okay. Weitere Optionen?

Jetzt war die Frage:
Bekomme ich es hin, ein Bare Repository so zu konfigurieren, dass man durch einen push auch gleichzeitig den Server aktualisiert?
Ich habe eine Möglichkeit in Git Hooks gefunden.

### Anleitung

Wie sieht das Basis Setup aus?
Angenommen, dass komplette Drupalprojekt wird in einem eigenen Git Repository gepflegt ohne Späße wie Submodules.
Desweiteren hat man Zugriff auf einen Benutzer, der den Server administrieren kann oder der Server ist so eingerichtet, dass die Berechtigungen korrekt gesetzt werden.

Im ersten Schritt legt man sich jetzt einen Ordner an und initialisiert ein Bare Repo mit

```ShellSession
$ git init --bare
Leeres Git-Repository in ~/projects/project/ initialisiert
```

in diesem.
Jetzt muss man einen post-receive Hook einrichten.
Dieser wird ausgelöst, sobald der Quellcode auf das Repo gepushed wurden.
Der einfachste Weg ist jetzt ein `GIT_WORK_TREE=/var/www/PROJECTDIR git checkout -f` in dem Hook zu definieren.
Damit wird jedes Mal der Inhalt im Webroot überschrieben.
Hier muss darauf geachtet werden, dass die Berechtigungen der jeweiligen Ordner korrekt gesetzt sind.
Das lässt sich entweder über das setgid Bit oder über die initiale Gruppe des Nutzer mit dem gepushed wird lösen.

Das war soweit die Konfiguration des Servers.
Kommen wir nun zur Konfiguration der Entwicklermaschinen.
Dort muss nun nur noch ein extra Remote hinzugefügt werden.

```ShellSession
$ git remote add live [USER]@[site]:/home/[USER]/bare.git
…
```

Jetzt kann mit git push live der Webserver deployed werden.

## Wow. So einfach?

An sich ist das wirklich keine große Kunst.
Man kann jetzt noch zusätzliche Konfigurationen vornehmen.
Zum Beispiel Hinweistexte, die Informationen dazu geben, ob der Vorgang erfolgreich war oder ob es zu Fehlern kam.
Da ich mich nicht darauf verlassen wollte, das jeder immer nur den korrekten Branch zum deployen nimmt, habe ich einen zusätzlichen pre-receive Hook geschrieben, der überprüft, ob der gepushte Branch mit dem aktuellen auf dem Server übereinstimmt.
Sollte das nicht der Fall sein, wird der Push zurückgewiesen und eine Fehlermeldung angezeigt.
Damit kann man sehr gut verhindern, dass Feature- oder Entwicklungsbranches auf dem Live-System landen.

## Quellcode

Die Hooks und eine weitere Anleitung mit Beispiel sind in diesem [Repo][repo] zu finden.

[repo]: https://git.kepler.international/Marauder/git-hooks
