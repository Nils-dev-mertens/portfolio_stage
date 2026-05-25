---
layout: "../../../layouts/BlogLayout.astro"
title: "Week 16 - Groq validatie v1 & v2, logging systeem en afsluiting stage"
date: "25-05-2026"
summary: "Laatste week van de stage: Groq validatie uitgewerkt van full-JSON aanpak naar sectie-gebaseerde validatie, en een logging systeem gebouwd dat alle JSONs vastlegt en koppelt aan de engine logs."
tags: [groq, validatie, logging, ai, stage]
---

## Context:

Week 16 was de laatste week van mijn stage bij Saply — drie dagen om de Groq validatiestap af te ronden. De focus lag volledig op de validatielogica en het logging systeem. Twee versies zijn uitgewerkt: een eerste aanpak die de volledige JSON in één keer valideerde, en een verbeterde versie die de JSON opsplitst in secties voor hogere kwaliteit.

## Wat heb ik gedaan:

- **Groq validatie — hoe de loop werkt**: de validatieloop vergelijkt per cyclus de input JSON (de ruwe extractie) met de output JSON (het GPT-gegenereerde resultaat). Het model zoekt welke data verloren is gegaan en welke behouden is, en geeft een lijst terug van velden die incorrect zijn en gecorrigeerd moeten worden. Een tweede call past die correcties toe. Daarna triggert de loop opnieuw — dit herhaalt zich totdat de output de validatie doorstaat of het maximale aantal iteraties bereikt is. Het idee is om het model een gefocust, afgebakend probleem te geven zodat het precies kan handelen in plaats van alles tegelijk te proberen.
- **V1 — Full JSON validatie**: de eerste aanpak was om de volledige JSON in één pass door het model te laten reviewen en corrigeren. Dit werkt voor kleine CV's, maar breekt af bij grotere. De context window wordt te groot voor het model om betrouwbaar te verwerken, waardoor de output incorrect of onvolledig uitvalt. In plaats van de taak in één pass af te ronden, moest het model meerdere loops doorlopen — en bleven er daarna nog steeds fouten over.
- **V2 — Sectie-gebaseerde validatie**: net zoals mensen een specifiek woord makkelijker vinden in 20 woorden dan in 1.000, is hetzelfde principe toegepast op de validatie. In plaats van de volledige JSON in één keer door te sturen, wordt deze opgesplitst in secties. Elke sectie is ofwel een array ofwel een losstaand datablok. Arrays worden apart behandeld omdat ze sterk kunnen variëren in grootte en complexiteit. Losstaande velden — typisch contactgegevens — zijn eenvoudig genoeg om samen te behandelen. Zo kan elke lijst of blok dynamisch en onafhankelijk worden gevalideerd. De trade-off is een hoger aantal API calls (O(n) tijdscomplexiteit), maar dat is eenvoudig op te lossen door de calls te paralleliseren. In testing leverde deze aanpak merkbaar betere outputkwaliteit op.
- **Logging systeem gebouwd**: een logging systeem opgezet dat alle JSONs vastlegt die bij het proces betrokken zijn: de input, de output, en de tussenliggende AI calls. Deze logs zijn gekoppeld aan de engine logs, zodat eenvoudig te correleren is welke log entries bij elkaar horen. De validatielogs worden opgeslagen in blob storage in plaats van de database, omdat het om grote hoeveelheden ruwe JSON gaat.

## Blockers:

- **Geen**: de laatste drie dagen verliepen vlot.

## Resultaat:

- Groq validatieloop volledig uitgewerkt: input vs. output vergelijking, foutlijst genereren, corrigerende call, hervalidatie.
- V1 (full JSON) gedocumenteerd en afgewogen: werkt voor kleine CV's, onbetrouwbaar voor grote.
- V2 (sectie-gebaseerd) geïmplementeerd en getest: aanzienlijk betere kwaliteit, paralleliseerbaar.
- Logging systeem live: input, output en AI calls worden vastgelegd en gelinkt aan engine logs via blob storage.

## Reflectie:

De overgang van V1 naar V2 is een patroon dat ik vaker tegenkwam tijdens deze stage: grote problemen opsplitsen in kleinere, beheersbare stukken levert bijna altijd betere resultaten op. Dat geldt voor mensen, maar ook voor AI-modellen. Een model dat gevraagd wordt om één array te controleren presteert fundamenteel anders dan een model dat door een volledige CV moet scannen.

Wat ik ook meeneem: het bewust beperken van output tokens dwingt je om de taak scherper te definiëren. Door het model enkel de incorrecte velden te laten teruggeven in plaats van de volledige gecorrigeerde JSON, wordt de focus aangescherpt. Dat is geen optimalisatie achteraf — het is een ontwerpkeuze die de kwaliteit direct beïnvloedt.

De keuze voor blob storage in plaats van een databasetabel voor de validatielogs voelde in het begin als een concessie, maar is bij nader inzien de juiste keuze voor de huidige fase: de JSON-structuur is nog in beweging, de volume is hoog, en de primaire use case is debugging — niet querien op veldniveau.

## Samenvatting:

- Groq validatieloop uitgewerkt: vergelijking input vs. output → foutlijst → correctie → hervalidatie
- V1 (volledige JSON in één pass): werkt voor kleine CV's, valt af bij grote door te grote context window
- V2 (sectie-gebaseerd): JSON opgesplitst per array en datablok, onafhankelijk gevalideerd, betere kwaliteit
- Parallelisatie als oplossing voor hogere API call-count bij V2
- Logging systeem gebouwd: input, output en AI calls vastgelegd, gekoppeld aan engine logs, opgeslagen in blob storage
- Einde stage bij Saply
