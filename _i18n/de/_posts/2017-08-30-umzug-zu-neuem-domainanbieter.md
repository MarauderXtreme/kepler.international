---
namespace: relocate-registrar
permalink: /blog/umzug-zu-neuem-domainanbieter
permalink_en: /blog/relocate-to-new-registrar
category: blog
tags: administration dns linux
---

# Umzug zu neuem Domainanbieter

Ich habe dieses Jahr im Frühling meinen Domainanbieter gewechselt.
Initial bin ich auf Empfehlung von ein paar Freunden zu United Domains (nachfolgend UD oder ud) gegangen und habe mir dort kepler.international als auch kepler.one gekauft.
An sich war ich mit dem Angebot recht zufrieden, doch es gab das ein oder andere Problem.
So sind die DKIM Signing Keys von Fastmail nicht gerade einfach zu hinterlegen gewesen, da UD keine Erstellung von Domains mit Unterstrich-beginnend erlaubt.
Zwar ist der Support sehr schnell und freundlich, da ich nur eine Mail mit Domain und Werten schreiben brauchte, und der Record wurde eingerichtet aber ich wollte etwas mehr Kontrolle.

## Alternative: Selbstmachen

Da ich mich mittlerweile als recht gut im Umgang mit Linux Servern bezeichnen würde, habe ich auch eine Weile darüber nachgedacht, selbst einen DNS Server aufzusetzen und sei es nur um damit Erfahrungen zu sammeln und sich mit der Software auseinander gesetzt zu haben.
Doch nachdem ich mich eine Weile belesen hatte, verwarf ich den Gedanken sehr schnell wieder.
Das Absichern und Up to Date halten eines autoritativen Nameservers hörte sich nach einem riesigen Stück Arbeit an.
Außerdem ist mir das Risiko eines gekaperten Nameservers und die implizierten Gefahren viel zu hoch.

## Alternative: Fastmail

Also habe ich mich nach einem anderen Anbieter umgeschaut.
Da ich bei meinem Mailanbieter beide Domains als eigene Domains hinterlegt habe, gibt es dort auch die Variante, dass Fastmail (nachfolgend FM oder fm) den autoritativen Namerserver stellt und man seine Records direkt bei FM verwaltet.
Da Fastmail auch eine Art Webstorage anbietet, ergibt das sogar Sinn, wenn man alles von Mail bis Website bei FM hat, doch das ist bei mir nicht der Fall.
Ein weiterer Vorteil wäre, dass man sich über sich ändernde DKIM Einstellungen oder Service Records keine Sorgen mehr machen müsste.
Trotzdem hätte ich gerne meine Domainverwaltung lieber bei einem Registrar.

## Alternative: INWX

Nach einer Weile wurde ich durch Freunde auf INWX aufmerksam.
Nachdem ich mich eine Weile lang immer und immer wieder über UD beschwert hatte, zeigte mir Felix bei einer Gelegenheit die Oberfläche sowie die Konfigurationsmöglichkeiten von INWX.
Ich war anfangs etwas skeptisch, doch letzendlich habe ich mich dann doch zu einem Wechsel zu INWX entschieden.

## Der Umzug

Oh Junge.
So ein Umzug ist echt kein Pappenstiel, vor allem, wenn man einige Records besitzt.
Leider bietet INWX keine Möglichkeit wie ud, die Records schon vor Umzug einzurichten, sodass einfach nach Bestätigung des Umzugscodes, die Zonenfiles aktiv geschalten werden müssen.
Aber das ist eher ein kleineres Problem.
Vor allem ist es nicht einfach, so einen Transfer von Seiten ud einzuleiten.
Ich kann es mittlerweile nachvollziehen, warum es so bürokratisch zu gehen muss, da es sich bei einer Domain durchaus um Marke und IP handeln kann.
Trotzdem fand ich es initial etwas viel Bürokratie.
Leider gab es auch ein paar Hindernisse bei INWX.
So kann man nur mit Überweisungen ohne Zuschlag bezahlen.
Paypal wird auch angeboten aber mit einem Zusatzbetrag versehen.
Das ist natürlich unschön aber okay.
Dementsprechend musste ich für den Umzug einen Tag länger warten.
Nachdem die Bazahlung durch war, habe ich den Transfer eingeleitet und sobald es möglich war alle Records wieder eingerichtet.
An sich lief der Umzug trotz aller Stolperfallen alles in Allem reibungslos.

## Vorteil: INWX

Da ich jetzt mehr oder weniger die volle Kontrolle über meine DNS Einträge hatte, habe ich dann auch sehr schnell die fehlenenden Service Einträge von Fastmail nachgeholt.
Dabei ist mir aufgefallen, dass INWX DNSSEC für ein paar TLDs anbietet.
Das begrüße ich natürlich sehr aber habe mich jetzt noch nicht weiter damit beschäftigt.
Außerdem gibt es die Möglichkeit SSHFP Records zu hinterlegen.
Damit kann man die SSH Fingerprints seiner Server hinterlegen und meinen SSH Klienten anweisen, dass gegen zu prüfen.
Für mich als Administrator ist das natürlich ein riesiger Vorteil, da ich einen gewissen Sicherheitszuwachs bekomme.
Das gegenprüfen von Server Keys ist immer ziemlich lästig, vor allem, wenn man sich mit Leuten auseinandersetzen muss, die Keychecking gerne einfach bejahen oder komplett ausgeschaltet haben.
Letzendlich bezahlen ich sogar insgesamt weniger als vorher bei ud, trotzdem eine Domain teurer geworden ist.

## Zusammenfassung

Ich bin mit allem was DNS heißt von UD zu INWX umgezogen und bin vollauf zufrieden.
Nochmal ein Dank an Felix, dass er mir INWX nähergebracht hat.
Ich kann jedem nur Empfehlen sich INWX näher anzusehen und darüber nachzudenken INWX zu nutzen oder auch dahin umzuziehen.
