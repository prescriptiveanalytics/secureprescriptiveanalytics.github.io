---
layout: post
lang: de
title: "Automatische Extraktion von Wissen aus Daten"
description: Automatische Extraktion von Wissen aus den Prozessdaten Daten 
keywords: Wissensextraktion, Ergebnisse
date: 2024-03-12 12:54 +0200
categories:
  - "News"
author: fbachinger
image: /blog/resources/2024-03-12-knowledge-inference/Picture1.png
---

Vorhersagemodelle des maschinellen Lernens haben im Extrapolationsbereich meist keine Information und verhalten sich daher nicht gesteuert. Wissen über Extrapolationsverhalten ist oft nur Schlüsselpersonen und Experten bekannt. 

<!--more-->
Trotz ihrer hohen Genauigkeit im Trainingsbereich der Daten stoßen traditionelle ML-Modelle oft auf Herausforderungen im Extrapolationsbereich. In diesem Bereich liegen keine Trainingsdaten vor, und somit haben die Modelle keine Information über das erwartete Verhalten. 

Eine Lösungsmöglichkeit besteht darin, diese Modelle mit fachspezifischem Wissen zu erweitern, was zu einer erhöhten Vertrauenswürdigkeit der Vorhersagen führt. Wir konzentrieren uns dabei auf eine Kategorie von ML-Algorithmen, die als shape-constrained regression (SCR) bekannt sind. Diese können die Form der Funktion einschränken und so Wissen von Experten einbinden. In SCR-Methoden werden Intervallgrenzen in das Bild der Funktion oder ihre partiellen Ableitungen eingeführt, um die Form der Funktion der ML-Modell-Vorhersage zu kontrollieren.

Das grundlegende Problem bei der Integration von Fachwissen in ML besteht darin, dieses Wissen zuerst zu erlangen. Normalerweise verlassen wir uns dabei auf Experten oder allgemeines Wissen aus dem Fachbereich (z.B. aus Fachbüchern). Doch manchmal sind sich Experten der Existenz bestimmter Interaktionen in ihrem Fachgebiet nicht bewusst, oder sie müssen erst empirische Forschungen durchführen und aufgezeichnete Daten analysieren.

Das trifft insb. auf den SPA-Projektkontext zu. Hier werden Daten automatisch in den Datenströmen der einzelnen Simulationskomponenten generiert und in unseren Datenbanken gesammelt. Auf diesen Daten sollen automatisch Surrogatsmodelle trainiert werden. Bei dem Training dieser Modelle wollen wir also einen höchstmöglichen Grad der Automation erreichen. In vergangen Blog-Posts haben wir bereits hervorgehoben, wie wichtig die Integration von Vorwissen für das automatische Training von ML-Modellen ist. Dieses Wissen soll aber automatisch aus den Daten gewonnen werden.

Darum haben wir einen Ansatz entwickelt, der in der Lage ist, automatisch Wissen aus Daten in einem gegebenen Bereich abzuleiten. Dieser Ansatz wird in der Datenaufbereitungsphase des ML angewendet und unterstützt Datenwissenschaftler dabei, geeignete Einschränkungen zu ermitteln, die anschließend in das Modelltraining integriert werden können. Unser Ansatz nutzt den Umstand, dass bestimmte Interaktionen, wie Positivität oder Monotonie, die für den gesamten Datenbereich gelten, auch für jede gegebene Untergruppe der Daten gelten. 

Wir haben diesen Ansatz erfolgreich auf das AI Feynman Benchmark Datenset angewendet und konnten in 28 von 120 Instanzen die genauen Begrenzungen der ursprünglichen Gleichung ermitteln. Zusätzlich haben wir unsere Ergebnisse und unseren Ansatz vor kurzem auf der [EuroCAST 2024][EuroCAST2024]{:target="_blank"} vorgestellt. 

In zukünftigen Iterationen wollen wir dieses Wissen in unsere domänenspezifischen Sprache *"Sidl - Structured Interaction Description Language"* integrieren und dem Experten für die  Integration in die Modellierung vorschlagen.

![potentialenergy](/blog/resources/2024-03-12-knowledge-inference/Picture2.png "Beispiel für die Wissenextraktion")

Ein Beispiel der AI Feynman Benchmark Daten umfasst die Gleichung mit der Nr. I.13.12. Diese beschreibt die potenzielle Energie eines Objekts m das von seiner Startposition r1 zur Position r2 in Richtung des Objekts M fällt. 

Unser Ansatz kann dabei korrekt feststellen, dass ein höherer Abstand r1 die Energie erhöht. Während ein höherer Abstand r2 die Energie verringert.
<br/>

[EuroCAST2024]: https://eurocast2024.fulp.ulpgc.es/