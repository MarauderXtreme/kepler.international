---
namespace: feel-offended
permalink: /blog/ich-fuehle-mich-beleidigt
permalink_en: /blog/i-feel-offended
category: blog
tags: website
---

# Ich fühle mich beleidigt

Ich schaue regelmäßig nach, ob auf meiner Website irgendwelche Fehler auftreten und versuche die zu beheben.
Dazu gehören auch Seitenzugriffsfehler.
Wenn Google bestimmte Seiten nicht mehr findet, kann das durchaus tödlich für die ganzen SEO Sachen sein.
Meistens sind es nur die Links zu den CSS Dateien die aus dem Cache gefallen sind und neugeholt werden.
Dadurch kommt es zu Zugriffsfehlern, die nicht weiter beunruhigend sind.

Doch es gibt auch Fehlermeldungen, die mich mehr beunruhigen.
Darunter gehören URLs wie zum Beispiel die, zum registrieren oder zum Anlegen von neuem Inhalt verwendet werden.
Da scheinen einige Leute zu probieren, ob ich meine Seite falsch konfiguriert habe.
Okay.
Come at me bro!

Interessanter finde ich URLs, die, wie sich nach einer kurzen Google Suche zeigt, dazu verwendet werden, um Sicherheitslücken auszunutzen.
Ich halte meine Module immer aktuell und die Lücken, die ausprobiert werden, existieren bei meinem Setup nicht.
Somit muss ich meistens Schmunzeln und mir selbst auf die Schulter klopfen.

Zusätzlich werden auch URLs verwendet, die beispielsweise mit Shopsystemen auf Magentobasis zusammenhängen.
Es ist nun wirklich nicht schwierig herauszufinden, auf welcher Software meine Website basiert.
(siehe Metatags Generator HINT HINT) Trotzdem sehe ich immer wieder Einträge, von URLs die absolut nicht zu meiner Seite passen.

Das wäre an sich nicht so schlimm, wenn da nicht auch die obligatorischen Zugriffsversuche auf wp-admin.php oder Ähnliches wären.

## NICHT WORDPRESS

Leute!
Das ist eine Drupalseite.
Es grenzt schon an Beleidung, mir zu unterstellen, dass ich eine Wordpress Seite betreibe.
Ich habe schon in verschiedenster Weise kund getan, dass ich Drupal verwende und kein Wordpress.
Das hat verschiedene Gründe, unter anderem das ich den Clicky-Bunti Charakter von Wordpress etwas verabscheue.
Ich sehe mich selbst als seriösen Web-Entwickler, der zugeschnittene Lösungen produziert und nicht einfach irgendwelche Drag'n'Drop Lösungen verwendet.
Wordpress ist meiner Meinung nach genau so etwas.

## Fail2Ban them all

Eine gute Sache daran ist, das ich mir überlege, einen fail2ban Mechanismus zu basteln, der automatisch IPs mit Zugriffen auf die üblichen Verdächtigen von Wordpress URLs für eine Zeit X bannt.
Entweder ich programmier ein Modul, welches die Auswertung vornimmt und dann auf eine Hinweis Seite weiterleitet, solange der Bann besteht.
Andererseits könnte ich direkt fail2ban benutzen und schon vorhande Infrastruktur verwende.
