---
namespace: mobile-layout
permalink: /projects/mobiles-layout
permalink_en: /projects/mobile-layout
category: projects
tags: mobile drupal website development
---

# Mobiles Layout

## Endlich Mobil

Ich habe es endlich geschafft, meine Website auf ein mobiles Layout umzustellen.
Eigentlich sollte das schon vor rund einem halben Jahr passieren aber da kamen mir die IHK Prüfungen dazwischen.
Nachdem jetzt das nächste Semester um ist und ich in meinem Urlaub wieder Zeit habe, musste jetzt endlich was passieren.
Google hatte mich schon im Frühling darauf hingewiesen, dass meine Website sehr schlecht mobil optimiert wäre.
Da ich etwas auf das Ranking bei Google gebe und da ich mit dem alten Layout meiner Website nicht mehr wirklich zufrieden war, habe ich eine Aufrischung meines Webauftritts vorgenommen.
Natürlich wollte ich selbst auch ein mobiles Layout für meine Website auch ohne Google Meckerei.

## Spielplatz Foundation

Ich kann es immer noch nicht verstehen, wie man früher sogar spezielle Subdomains eingerichtet, Mobile Detect Libraries installiert und sich auf eine jQuery UI verlassen hat, nur um eine mobile Website für Smartphones ausliefern zu können.
Warum hat es früher keine guten Frameworks gegeben, um mobile Layouts out of the box mitzuentwickeln?
Mittlerweile gibt es sehr potente Frameworks die die komplette Arbeit für einen übernehmen und im Entwicklungsprozess ziemlich straight forward sind.
Mir sind zwei Beispiele näher bekannt und ich habe mich natürlich für eines davon entschieden.
Da wäre zum einen Bootstrap, welches von Twitter entwickelt und gewartet wird.
Auf der anderen Seite steht Foundation von ZURB.
Für Letzteres habe ich mich wiederum entschieden und muss sagen, dass ich es mittlerweile immer bevorzugen würde.
Ich muss meinem Chef danken, dass er mich auf dieses Framework aufmerksam gemacht hat.

## Foundation vs. Bootstrap - FIGHT

Warum nun Foundation ist ziemlich einfach zu erklären.
Vor einem Jahr fand das Software Technologie Projekt über ein komplettes Semester statt.
Dabei ging es darum, eine Webanwendung zu schreiben.
Näheres dazu im [Artikel][swt].
Dort war meine Aufgabe, sich um das Markup und die Gestaltung des Shops zu kümmern.
(Oh, das kam jetzt aber überraschend)
Dafür habe ich mich mit diesen beiden Frameworks beschäftigt, da ich zeigen wollte, dass ich "mobile first" entwickeln kann.
Beim Ausprobieren der beiden Frameworks und der Abwägung, welches nun am Besten passt, viel die Entscheidung letzten Endes auf Foundation.
Grundzipiell sind beide Frameworks gleich mächtig und bieten ähnliche Elemente, die man immer wieder auf Websites verwendet.
Trotzdem gibt es kleine aber feine Unterschiede, die mir die Entscheidung erleichtert haben.

[swt]: /projects/softwaretechnologie-praktikum

## CSS-Klassen

Grundzipiell lag es an den semantisch lesbaren Klassen von Foundation.
Bestes Beipsiel dafür ist die Definition eines Knopfes.
Während es bei Bootstrap Klassen wie `btn-sm btn-success btn` benötigt, ist die Lesbarkeit bei Foundation `small success button` wesentlich besser.
Das zieht sich durch die komplette Klassendefinition durch.
Ich muss zugeben, dass man bei Foundation durch die ausgeschriebenen Klassen manchmal auch die Übersicht verliert.
Das passiert aber meistens nur bei speziellen Elementen, die man dann aber mit Absicht so vollstopft.

## JS Validierung

Bei Bootstrap ist man der Meinung, dass die implementierte Validierung durch die neuen Inputtypen ausreichen sollte.
Das finde ich wirklich eine guten Idee, da HTML5 ja nicht umsonst entwickelt wurde.
Trotzdem ist die Verbreitung der neuen Typen und die feste Definition dieser nicht wirklich vorhanden.
Auch Foundation verfolgt diesen Ansatz, bietet aber zusätzlich noch die Möglichkeit eigene reguläre Ausdrücke zu definieren.
Das wird vor allem nützlich, wenn man spezielle Anforderungen an Passwörter stellen möchte.
Des Weiteren deckt die HTML5 Spezifikation bei weitem nicht alle möglichen Eingabefelder ab, wodurch eigene Muster sehr wichtig werden.

## Foundation Wins

Alles in allem finde ich persönlich, das Foundation besser meinen "Bedürfnissen" angepasst ist.
Jeder sollte für sich entscheiden, welches ihm besser liegt.
Trotzdem sollte Bootstrap nicht einfach aus Popularität gewählt werden.
Ich sehe in letzter Zeit einige Websites die Bootstrap benutzen und ich bekomme das Gefühl, dass es gerade zur Mode wird.

## Drupal Foundation

Wie wäre es anders zu erwarten, gibt es natürlich auch ein Drupaltheme mit Foundation.
Zur Zeit ist die aktuelle Version 5 von Foundation nur als Release Candidate verfügbar, dass sollte aber niemanden abhalten, da es mittlerweile bei vielen produktiv eingesetzt wird.
Es gibt noch ein paar kleine Probleme, vor allem was die Dokumentation betrifft aber die sind mehr oder weniger schnell zu lösen.
Ich wurde beim Bearbeiten meines Themes wieder einmal positiv von Foundation überrascht.
SCSS ist eine wunderbare Sache aber Foundation hebt es nochmal auf eine andere Ebene.
Für alle Elemente die durch das Framework bereitgestellt werden, gibt es eine gewisse Anzahl an Variablen, die es einem ermöglichen, alles auf seinen Geschmack oder Design abzustimmen.
Da ich während des SWT Projektes nur mit reinem CSS gearbeitet habe, ist mir diese Genialität noch nicht aufgefallen.
Definition von eigenen Styles entfällt nahezu komplett.
Man ändert nur eine lange Liste an Variablen und am Ende kommt ein wunderschönes Layout heraus.
Das ist Webdesign, wie ich es als Webdeveloper machen möchte.
