---
namespace: uktools
permalink: /projects/ubuntu-kernel-tools
permalink_en: /projects/ubuntu-kernel-tools
last_modified_at: 2018-08-14T00:00:00.00+02:00
category: projects
tags: software development linux
project:
  state: discontinued
  github: https://github.com/MarauderXtreme/uktools
  languages:
    - gnubash
---

# Ubuntu Kernel Tools

Ich habe lange Zeit nach einer einfachen Möglichkeit gesucht, den Kernel meines Laptops immer mit dem aktuellsten [Mainline Kernel][mainline] zu versorgen.
Da es leider keine PPA für den Kernel gibt, gestaltet sich das updaten etwas schwierig.
Es gibt das Projekt [ukuu][ukuu] welches aber leider nur ein GUI Programm ist aber den vollen Funktionsumfang liefert.
Ich dachte aber es gibt sicher ein Projekt, was die Funktionalität auch als Kommandozeilen Tool anbietet.
Dabei bin ich als Erstes auf [Mustafa Hastürks ukupgrade Skript][ukupgrade] gestoßen.
Das hat aber einige Fehler und Unzulänglichkeiten.
Dabei bin ich auf einen [Fork von TeamVeeBackup][uktools] des Skripts gestoßen, der ein paar Korrekturen und Verbesserungen eingebaut hat aber trotzdem noch nicht komplett fehlerfrei ist.

Trotz gegenteiligem README Status in beiden Projekten scheinen beide nicht mehr aktiv entwickelt zu werden.
Die letzten Commits sind jeweils vor über einem Jahr geschehen.
Bei dem Fork habe ich zwei Pull Request eröffnet, da ich mit der Version zufriedener bin.
Leider sind diese bis jetzt noch ohne Reaktion geblieben.

Das hat mich dazu veranlasst, meine Pull Requests in meinem eigenen Repo zu mergen und es nach meinen Bedürfnissen weiter zu entwickeln.

[mainline]: http://kernel.ubuntu.com/~kernel-ppa/mainline/
[ukuu]: http://www.teejeetech.in/p/ukuu-kernel-upgrade-utility.html
[ukupgrade]: https://github.com/muhasturk/ukupgrade
[uktools]: https://github.com/TeamVee-B/uktools

## uktools

In diesem [Repository][repo] befinden sich zwei Skripte.
Zum einen ukupgrade, welches mit einer interaktiven Eingabe die Möglichkeit bietet, auszuwählen ob der aktuellste Stable oder Release Candidate und ob der Generic oder Lowlatency Kernel installiert werden soll.
Außerdem gibt es ein paar weitere Features, die aber nicht weiter erwähneswert sind.
Zum anderen gibt es das Skript ukpurge, welches die alten nicht mehr benutzten Kernel installiert.
Jeder der schon mal eine Weile ein Ubuntu System hat laufen lassen, wird mitbekommen haben, dass sich nach einer Zeit die alten Kernel stapeln.
Dieses Skript behebt das.
Man sollte nur vorher sicherstellen, dass man auch wirklich den aktuellsten gebootet hat, dass das Skript korrekt funktionieren kann.

[repo]: https://github.com/MarauderXtreme/uktools

## Für wen?

Das Projekt richtet sich an die Leute, die gerne und viel mit der Kommandozeile arbeiten.
Ich selbst, wollte mir nicht noch ein weiteres GUI Programm in das System holen, weswegen ich dieses Skript weiterentwickelt habe.
Jeder der auch mit GUI Programmen zufrieden ist, sei hier nochmal ukuu ans Herz gelegt, da dies zur Zeit, wesentlich mehr Funktionalitäten und Komfort bietet.

## @TODOs

Bisher fehlt eine Möglichkeit, dass man über Kernelupdate, benachrichtigt wird.
Dafür will ich noch ein Shellskript für einen Cronjob schreiben.
Es fehlt nur noch eine Möglichkeit, wie die Nachricht im System angezeigt wird.
Außerdem werde ich wahrscheinlich meinen Fork zu einem eigenständigen Repository machen, wenn meine Pull Requests keine Aktivität erfahren.

## Update 14.08.2018

Da die Änderungen von Canonical es mittlerweile immer schwieriger machen, das Skript konsistent und robust zu halten, habe ich mich entschieden, dass Projekt einzustellen.
Es sollte also davon ausgegangen werden, dass das Skript mittlerweile nicht mehr mit der aktuellen Kernel-Struktur funktioniert.

Ich habe nun festgestellt, dass [ukuu][ukuu-site] auch ein CLI anbietet und die Versions-Überprüfungen wesentlich robuster sind.
Damit kann ich allen nur empfehlen zu ukuu zu wechseln.

[ukuu-site]: http://www.teejeetech.in/p/ukuu-kernel-upgrade-utility.html
