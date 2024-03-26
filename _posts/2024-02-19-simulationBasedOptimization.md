---
layout: post
lang: de
title: "Simulationsbasierte Optimierung"
description: Präsentation zum aktuellen Stand von simulationsbasierter Optimierung mit Easy2Sim und HeuristicLab
keywords: Simulation, Optimization, Easy2Sim, HeuristicLab, Problem designer
date: 2024-02-19 11:56 +0200
categories:
  - "Konzepte"
  - "UseCases"
  - "Dissemination"
author: akinast
image: /blog/resources/2024-02-19-simulationBasedOptimization/001.jpg
---

Beim ersten Workshop der [COST Aktion CA22137](https://www.cost.eu/actions/CA22137/) gab es eine Menge Vorträge im Bereich Simulation und Optimierung. Das SPA-Team hielt dort einen Vortag zu simulationsbasierter Optimierung.

<!--more-->
Der Vortrag fokussierte die zunehmende Komplexität industrieller Prozesse und die Notwendigkeit, durch simulationsbasierte Optimierung effizientere Lösungen zu finden. Die Hauptpunkte des Vortrags waren:

 * Problembeschreibung <br>
   Anforderungen an eine systematische und strukturierte Problembeschreibung moderner Optimierungsprobleme und Vorteile welche sich daraus ergeben. Diese Problembeschreibungen erlauben eine schnelle Weiterverarbeitung der Daten, insbesondere das Bauen von Simulationsmodellen. Hier wurde ein "Problem designer" vorgestellt, welcher im SPA Projekt für die systematische Erstellung von Problemdateien verwendet wurde.
   
 * Simulation <br>
   Mit einer Einführung in das Thema und den bestehenden Simulationstools führte er das Publikum an das leichtgewichtige Open-Source-Framework [Easy2Sim](https://github.com/prescriptiveanalytics/Easy2Sim) heran, entwickelt im Rahmen des OOE SPA Projekts. Dieses Framework ermöglicht nicht nur eine einfache Simulation, sondern auch eine moderne Schnittstelle zu anderen Softwaretools und eine komponentenbasierte Struktur für die schnelle Entwicklung von Simulationskomponenten.
 
 * Optimierung <br>
   Um konkrete Antworten für komplexe Problemstellungen zu generieren ist oft eine simulationsbasierte Optimierung unumgänglich. Hier werden verschiedene Heuristiken (z.B. HeuristicLab) verwendet, um eine große Anzahl an Lösungen für ein komplexes Simulationsproblem zu generieren. Diese werden dann mit einem Simulationsframework wie Easy2Sim simuliert,  um Aussagen über die Problemstellung zu treffen.
 
 * Visualisierung <br>
   Um informierte Entscheidungsfindung zu ermöglichen muss generiertes Wissen an Benutzer vermittelt werden. Der letzte Punkt des Vortrags beschäftigte sich mit verschiedenen Visualisierungsmöglichkeiten von Ergebnissen einer simulationsbasierten Optimierung. 
<br/>



Bilder des Vortrags:

<br/>

![Simulation_1](/blog/resources/2024-02-19-simulationBasedOptimization/001.jpg)
<br/>

![Simulation_2](/blog/resources/2024-02-19-simulationBasedOptimization/002.jpg)
<br/>

![Simulation_3](/blog/resources/2024-02-19-simulationBasedOptimization/003.jpg)
