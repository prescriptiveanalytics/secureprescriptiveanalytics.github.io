---
layout: post
lang: de
title: "Dynamische Surrogatmodellierung"
description: Prototypische Implementierung zur datenstrombasierten Surrogatemodellierung
keywords: Surrogate Modeling, Konzept
date: 2024-01-10 11:56 +0200
categories:
  - "Konzepte"
  - "UseCases"
author: jzenisek
image: /blog/resources/2024-01-10-dynamischesurrogatmodellierung/comvesmon-01.png
---

In den letzten Wochen beschäftigte sich das SPA-Team intensiv mit der Implementierung des entwickelten Konzepts zur dynamischen Surrogatemodellierung in einem Echtzeitszenario. Ein erster Software-Prototyp konnte nun fertiggestellt werden.

<!--more-->
Eine Vielzahl von datengetriebenen Problemstellungen aus unterschiedlichen Domänen beschäftigt sich mit sogenannten *Datenströmen* -- kontinuierliche Sequenzen von (zeitlich) aufeinanderfolgenden Datenpunkten. Sei es eine periodisch zu aktualisierende Arbeitsmittelplanung in der produzierenden Industrie, verkehrsabhängige Routenmodifikation in der Transportlogistik oder die Vorhersage von zu erwartender Energieerträge (z.B. durch Photovoltaik) in der Energiewirtschaft; Alle genannten Problemstellungen beinhalten die Analyse von Datenströmen mit einer bestimmten Aktualisierungsrate, und zwar in Echtzeit.

Ein wesentliches Ziel von SPA ist es, ein Konzept und zugehörige Software-Komponenten zu entwickeln, die es ermöglichen sogenannte Surrogatmodelle für jene Datemströme erstellen zu können. Surrogatmodelle -- auch Stellvertretermodelle genannt -- sind maschinell erlernte Systeme (z.B. mathematische Formelbäume, Regelwerke, etc.), die das Verhalten der Datenströme generalisiert abbilden und als Fitnessfunktion in einer nachgeschalteten Komponente zur Optimierung/Lösung der Problemstellungen eingesetzt werden können. Nach intensiver Arbeit in den letzten Wochen, konnte nun ein erster Prototyp präsentiert werden, der eine dynamische und echtzeitfähige Surrogatmodellierung auf Basis von Datenströmen erlaubt. Diese Software verwendet bereits die im Vorjahr entwickelte, domänenspezifische Sprache *"Sidl - Structured Interaction Description Language"* zur Beschreibung der Eingangsdatenströme, sowie die zugehörigen Tools zur Sprachunterstützung. Darüber hinaus kommt in diesem Fall auch die entwickelte Kommunikationsbibliothek *"DAT - Distributed Application Tools"* für den Datenaustausch zum Einsatz. Erste Tests auf dem eigens entwickelten Benchmark-Datensatz "Communicating Vessels Monitoring", der im Rahmen der Konferenz *ISM 2023* präsentiert wurde, zeigten bereits vielversprechende Ergebnisse. Um das Systemverhalten besser und anschaulicher analysieren zu können wurde zudem der Prototyp um eine grafische Komponente auf Basis einer Web-Visualisierung ([GitHub Projekt "dmon"][dmon-github]{:target="_blank"}) ergänzt - siehe Screenshots weiter unten.

In einem nächsten Schritt soll der Software-Prototyp um eine zusätzliche algorithmische Komponente erweitert werden, um Optimierungsfragestellungen lösen zu können. Darüber hinaus werden diese Entwicklungen im diesbezüglichen GitHub-Repository ([siehe SPA GitHub-Organization][spa-github]{:target="_blank"}) Richtung "Production-Stage" vorangetrieben, dokumentiert und sukzessive im Rahmen von wissenschaftlichen Publikationen veröffentlicht.
<br/>

Datenstrom-Monitoring und Online-Surrogatmodellierung für das Benchmarkproblem "Communicating Vessels":

|
- | - 
![comvesmon1](/blog/resources/2024-01-10-dynamischesurrogatmodellierung/comvesmon-02.png "Communicating Vessels Beispiel 1") | ![comvesmon2](/blog/resources/2024-01-10-dynamischesurrogatmodellierung/comvesmon-03.png "Communicating Vessels Beispiel 2")
<br/>Beispiel Screenshot 1 | <br/>Beispiel Screenshot 2

[spa-github]: https://github.com/prescriptiveanalytics/
[dmon-github]: https://github.com/janzenisek/dmon