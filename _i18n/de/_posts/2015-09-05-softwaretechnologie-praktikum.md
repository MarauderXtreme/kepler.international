---
namespace: swt
permalink: /projects/softwaretechnologie-praktikum
permalink_en: /projects/softwaretechnology-internship
category: projects
tags: java development university
---

# Softwaretechnologie Praktikum

## Buchhandlung Schiller

Eine fiktive Buchhandlung namens Schiller ist an unser bunt zusammengewürfeltes Team herangetreten, um von uns eine professionelle Web Application schreiben zu lassen.
Natürlich haben wir uns sofort darauf gestürzt und mit Feuereifer dieses Projekt durchgeführt.
Soweit zur Theorie, kommen wir nun zum tatsächlichen Projekt.

Im dritten Semester stand uns das Softwaretechnologiepraktikum ins Haus.

### Was bedeutet das?

Wir sitzen nahezu ein komplettes Semester an einem Projekt, welches nach dem herkömmliche Projektablauf durchgeführt werden sollte.
Unser Tutor war gleichzeitig Kunde und Ansprechpartner und wir hatten sogar ein "Konkurenz-Team".
Es waren also die Phasen Analyse, Entwurf, Implementation, Test und eine finale Übergabe angesetzt.
Ich werde auf ein paar Sachen aus diesem Projekt eingehen.

## Probleme mit der Software von letztem Jahr

Ein Jahr zuvor, wurde durch eine Gruppe die Software, welche zum Management der SWT-Projekte genutzt wurde, komplett überarbeitet, neugeschrieben und verbessert.
Nachdem es an den Lehrstuhl übergeben wurde, war die Arbeit dieser Gruppe nun beendet.
Als die Zeit nun wieder ran war und die nächste Runde Projekte durchgeführt werden sollte, stellte man fest, dass die Software doch nicht komplett war und damit nicht funktionierte.
Also wurde kurzerhand die alte Anwendung wieder genommen, was natürlich auch Probleme und Nachteile mit sich brachte.
Ein sonst gerne genutztes Angebot für eine selbstgewählte Gruppenzusammenstellung wurde nicht angeboten.
Anscheinend kann der Lehrstuhl, welcher "test-first"-Development predigt, nicht innerhalb eines Semesters abgenommene Software deployen, testen und letzte Fehler ausmerzen.
So also viel dazu.
Das ist die halboffizielle Geschichte, welche im Vorfeld dieses Projekt bekannt wurde.
Das macht doch Spaß auf dieses Projekt.

## Zusammengewürfelte Gruppen

Ich war zunächst skeptisch, da ich in meiner Unizeit schon 1,5x mit der Gruppenwahl daneben gegriffen hatte.
Als erstes war da die Gruppe um die [Emimafia][emimafia] mit einer Person versehen gewesen, die natürlich alles konnte und machte aber nicht wirklich etwas davon verstand.
Lest nochmal in dem Artikel nach, wer gemeint ist.
Das war aber selbstgemachte Plage, da wir dort Gruppen wählen konnten.
Als nächstes folgte das Robolab (coming soon) mit gewürfelten Gruppen.
Dort ging es weiter mit komplett fehlenden Leuten, einer echten Sprachbarriere und Unwissenheit.
Ich wappnete mich schon gegen das Schlimmste.
Doch ich wurde positiv überrascht.
Diese Gruppe hat durchaus gut bei diesem Projekt zusammengearbeitet.
Es gab natürlich Probleme und falsche Auffassungen aber nichts was sich aus der Welt räumen ließ.
Alles in allem bin ich persönlich sehr zufrieden mit der Gruppenzusammenarbeit.

[emimafia]: /projects/emimafia

## Vorbereitungen

Schon von Anfang an, wussten wir, dass dieses Projekt durchaus hässlich werden kann.
Im Nachhinein betrachtet, muss ich zugeben, dass es eigentlich nicht ganz so schlimm gewesen ist.
Trotzdem lässt man sich gerne durch Freunde und höhere Semester beeinflussen, wodurch mein Enthusiasmus für dieses Projekt zu wünschen übrig ließ.
Nachdem wir uns kennengelernt hatten und die Aufgabe bekannt war, ging es nun an die Vorbereitungen.
Es war explizit gefordert ein Versionsverwaltungssystem zu verwenden, wobei es uns überlassen war, git oder SVN zu nutzen.
Bevor überhaupt Zweifel aufkamen, habe ich sofort für Git vehement plädiert.
(Man kann schon SVN nutzen, aber dann ist es halt kacke.)
Für das Hosting stand uns [Fusionforge][fusionforge] der TU zur Verfügung.
Ich hatte mit Fusionforge schon beim Robolab gearbeitet und es war weniger schön.
Schon alleine die Tatsache das man explizit https anfordern muss, ansonsten kann keine Verbindung hergestellt werden, ist sehr abschreckend.
Einen Redirect dafür zu konfigurieren ist maximal eine halbe Stunde Internetsuche.
Nachdem ich einige Sachen und Zugriffsrechte für das Projekt eingerichtet hatte, erfuhr ich, dass wir auch Github mit privaten Repositories verwenden dürfen.
Da hab ich mich natürlich ne zweimal bitten lassen und sofort alles umgezogen.
Durch Github wurde das Management ziemlich vereinfacht.
Uns wurde [Webspace][webspace] zur Verfügung gestellt, wo wir unser Projekt und den Verlauf dokumentieren sollten.
Da ich aber zu faul war, jede Woche zwei- oder mehrmals die neuen Dateien hochzuladen und zu verlinken, habe ich ein [öffentliches Repo][public-schiller] bei Github eingerichtet.
Dort sind nahezu alle Dokumente bezüglich des Projektes zu finden.
Im mittlerweile öffentlich gemachten [privaten Repo][bookshop-schiller] ist der Quellcode zu finden.

[fusionforge]: https://fusionforge.zih.tu-dresden.de/
[webspace]: http://group17.kepler.international/
[public-schiller]: https://github.com/MarauderXtreme/public-schiller
[bookshop-schiller]: https://github.com/MarauderXtreme/bookshop-schiller

## Analyse

In der Analysephase haben wir erstmal alle wichtigen Dokumente erstellt.
Darunter waren auch das Pflichtenheft, welches durch die Gruppe selbst erstellt wurde und nicht komplett vorgegeben war.
Dazu kamen einige UML-Diagramme und weitere Dokumente, die wir nach einigen Anlaufschwierigkeiten konsequent in TeX geschrieben haben.
Für die UML-Diagramme mussten wir MagicDraw verwenden, was in den Standardeinstellungen ein proprietäres binäres Dateiformat ausspuckt.
Das lässt sich natürlich wunderbar mit git verarbeiten.`</irony>`
Es gibt aber eine Option, die Diagramme in XML zu exportieren, was natürlich wesentlich angenehmer via git zu händeln ist.

## Entwurf

In der Entwurfsphase ging es zum ersten Mal direkt an Spring und SalesPoint, welches die beiden Java Frameworks waren, die wir für dieses Projekt benutzen sollten.
Die Dokumentation von SalePoint ist sehr dürftig, wodurch sich die Arbeit nur unnötig erschwert.
Spring, hab ich mir sagen lassen, ist ja jetzt mittlerweile das Konzept, welches in Java EE 7 verwendet wird.
Auf jeden Fall ist Spring ziemlich umfangreich und damit auch sehr unübersichtlich für einen absoluten Neuling.
Wir hatten zu Anfang des Projektes zwei Einführungsveranstaltungen mit [Oliver Gierke][oliver-gierke], der zumindest die Veranstaltung richtig gut gemacht hat.
Trotzdem reicht so eine kurze Veranstaltung gerade mal ein paar Grundzüge der beiden Frameworks zu präsentieren.
Damit blieb uns nichts anderes übrig, bei der Beispielanwendung mehr oder weniger abzuschreiben, wodurch einige gute Aspekte von Spring bezüglich Web nicht optimal genutzt wurden.
Des Weiteren waren in der Entwurfsphase die ersten Prototypen zu entwickeln.
Zum Glück hatten wir uns dazu entschieden, sofort alle Prototypen in einen großen zusammen zu bringen, wodurch uns einiges an Arbeit später erspart blieb.
Damit stand auch gleich zu Anfang der nahezu endgültige GUI Prototyp für den ich verantwortlich war.
Ich hatte mich dafür entschieden, mobile first zu entwickeln und habe ZURB Foundation eingesetzt.
Dadurch wurde die Entwicklung der GUI sehr vereinfacht.

[oliver-gierke]: https://github.com/olivergierke

## Implementation und Tests

Nachdem wir die Zwischenpräsentation hinter uns gebracht hatte, rückte Weihnachten und die Implementationsphase immer näher.
Wir arbeiteten fleißig an den Funktionalitäten, trotzdem explodierten die Arbeitszeiten gegen Ende zur Abgabe für das Cross-Testing.
Letztlich konnten wir aber ein fertiges Produkt der anderen Gruppe zum Cross-Testing übergeben.
Das kann man leider von deren Projekt nicht behaupten.
Als ich das Projekt zum ersten Mal kompilieren wollte, um es mir anzugucken, kamen eine Reihe von Fehlern, die es unmöglich machten, die Anwendung zu testen.
Leider war niemand von der anderen Gruppe erreichbar.
Kurz vor Ende der Phase, bekamen wir noch eine Version, die heroisch von unserem Sekretär innerhalb eines Tages auf Herz und Nieren getestet wurde.
So bekam auch die andere Gruppe ein Feedback zu ihrer Arbeit.

Die Tests wurden leider etwas vernachlässigt und kamen errst etwas spät in das Projekt mit hinein.
Bei bestimmten Sachen ließen sich auch schwer Test schreiben, aufgrund des MVC-Pattern dieses Spring Projektes.
Letzten Endes hatten wir aber eine Reihe von Tests die durch Travis bei jedem Push überprüft wurden.

Leider ist mir selbst etwas spät eingefallen Github Issues für das Tracking aller Features zu benutzen.
Es war etwas schwer meiner Gruppe das Arbeiten mit Issues bei zu bringen aber letzten Endes lief das auch gut.

## Übergabe

In der finalen Phase ist es dann kurz noch etwas hektisch geworden aber nicht lange.
Bei der Präsentation haben wir mit unserem Projekt geglänzt.
Ich persönlich fand unser Abschlussprodukt wesentlich besser entwickelt als das der "Konkurenzfirma" doch das ist meine Meinung.
Leider war noch nicht einmal Frau Demuth selbst bei der Abnahme anwesend, was ich durchaus schade fand.

## Was bleibt?

Letzten Endes wurde dieses Projekt in keinster Weise gewürdigt.
Wir hätten auch gerade das Nötigste machen, müssen und hätten damit bestanden.
Es wurde zwar eine Note vergeben, welche aber nirgends auftaucht.
Es gibt nur bestanden oder nicht.
Im Jahr davor wurde das beste Projekt ausgezeichnet und die Projektteilnehmer bekamen einen Preis.
Dies ist dieses Jahr komplett entfallen.
Ich hätte mir durchaus etwas Anerkennung gewünscht.
Eine Austellung der aktuellen Prjekte für ein halbes Jahr auf einem Server der TU und von mir aus ein Ranking ohne Preis wären echt schön gewesen.
So landet das Projekt jetzt nur im Github Repo und kann vielleicht späteren Semestern helfen.
Einen Pull-Request gab es schon, wodurch dieses Projekt vielleicht doch nicht einschläft.

## Letzer Gedanke

Mir fällt gerade ein, dass unser Tutor uns auf eine Runde in die Bierstube eingeladen hatte, nachdem wir alle bestanden hatten.
Leider ist bis heute nichts daraus geworden.
Vielleicht werde ich einfach einen Issue bei Github erstellen und ihn darauf assignen.
Mal sehen was passiert.
