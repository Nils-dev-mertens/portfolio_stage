---
layout: "../../../layouts/BlogLayout.astro"
title: "Week 13 - Incident.io integratie, CV engine feedbackmodule en DDD-frustratie"
date: "04-05-2026"
summary: "Incident.io live als statuspage, verder gewerkt aan de CV engine voor de feedbackmodule, en een eerlijke realisatie: DDD is niks voor mij en Claude inzetten als dagelijkse werktool is gewoon slim."
tags: [incident-io, monitoring, testing, dto, cv-engine, ddd, claude, saply]
---

![alt text](./images/image.png)

## Context:

Week 13 stond in het teken van infrastructuur en kwaliteit. De focus lag op de Incident.io integratie voor monitoring en statuspage, het opstarten van de testing platform documentatie, en het afronden van twee openstaande tickets. Vrijdag was ik afwezig want nationale feestdag.

## Wat heb ik gedaan:

- **Incident.io statuspage opgezet (ticket #713)**: `status.saply.ai` live gezet via Incident.io. Initieel enkel manuele rapportage. Na bevestiging van het startup plan van Guillaume, alle Saply services toegevoegd als componenten met duidelijke, abstracte namen.
- **Heartbeat frequentie aangepast**: van elke minuut naar elke 5 minuten — goed voor ~288 calls per dag. Incident.io checkt de laatste heartbeat, dus meerdere instanties leveren geen dubbele problemen op.
- **Azure DevOps alerts onderzocht**: integratie met Incident.io verkend. Getimeboxed op een halve dag. Incident.io paid plan bleek de cleanste oplossing — goedkoper dan ingenieurstijd verspillen aan een onzekere Azure-setup.
- **Tickets #694 en #870 afgerond**: beide klaar en ingediend voor review op woensdag.
- **Testing suite documentatie opgestart**: begonnen met het documenteren van de testing platform aanpak. Details verder verfijnd in de weekly assessment met Guillaume.
- **Testing platform architectuur besproken**: apart Azure-project via Terraform, storage accounts voor CV uploads, container instances voor testuitvoering, versiegeschiedenis tracken. Evaluatiemethodologie besproken: deterministisch testen vs AI-evaluatie, en waarom non-deterministisch AI vermijden bij het testen van AI.
- **Ticket #806 verdergezet**: opgestart en in progress.
- **CV engine feedbackmodule**: verder gewerkt aan de CV engine in het kader van de feedbackmodule. Logica verfijnd en voortgebouwd op de bestaande structuur.

## Blockers:

- **Incident.io status page on hold**: moest wachten op Guillaume's antwoord van het startup plan vooraleer verder te gaan met de volledige setup. Eenmaal bevestigd, vlot verdergegaan.

## Resultaat:

- Statuspage live op `status.saply.th` met alle Saply services als componenten.
- Heartbeat monitoring operationeel op correcte frequentie.
- Tickets #694 en #870 afgerond en ingediend voor review.
- Testing suite documentatie en architectuur helder op papier.
- Ticket #806 in progress.

## Volgende stappen:

- Testing platform documentatie volledig uitwerken, vragen voorbereiden.
- Secrets toevoegen aan KeyVault voor nieuwe omgevingsvariabelen (OAuthBypass e.a.).
- Terraform configureren voor container app toegang.
- Evaluatiemethodologie voor het testing platform verder onderzoeken.

## Reflectie:

De Incident.io integratie was een goede mix van technische en praktische afwegingen. Het was verleidelijk om de Azure DevOps alerts zelf te bouwen — meer controle, geen externe afhankelijkheid. Maar na het inschatten van de tijdsinvestering was de conclusie snel duidelijk: €14/maand voor een kant-en-klare oplossing is rationeler dan een halve dag of meer spenderen aan iets met een onzeker eindresultaat. Dat soort afwegingen maken is ook een vaardigheid.

De DTO-discussie met Guillaume was interessant. Mijn voorkeur gaat uit naar DTO's omwille van consistentie en structuur. Guillaume gebruikt liever request parameters voor eenvoudige operaties — makkelijker testen via Swagger, minder boilerplate. Uiteindelijk zijn beide aanpakken valabel; consistentie met de rest van de codebase primeert. Goed om die nuance te begrijpen in plaats van vast te houden aan één absolute voorkeur.

Het testing platform is een complexer vraagstuk dan het op het eerste zicht lijkt. Hoe meet je de kwaliteit van AI-output op een betrouwbare manier zonder zelf AI te gebruiken als beoordelaar? Seed setting is niet mogelijk met de huidige modellen, dus een probabilistische drempel (bv. 90% consistentie) is een realistischere aanpak. Dat soort architecturale denkoefeningen zijn precies wat ik boeiend vind aan dit werk.

Verder gewerkt aan de CV engine voor de feedbackmodule. Niks spectaculairs, gewoon verder bouwen — maar het voelt goed om stap voor stap vooruit te gaan op iets dat uiteindelijk echt waarde levert.

Dan DDD. Deze week is het bij mij definitief geland: ik vind Domain-Driven Design echt niet liggen. De theorie klinkt solide, maar in de praktijk voelt het als onnodige complexiteit die meer in de weg staat dan dat het helpt. Aggregate roots, value objects, bounded contexts — op papier logisch, in code eerder frustrerend. Misschien komt het door de schaal van het project, misschien door persoonlijke voorkeur. Maar ik ben iemand die liever direct en pragmatisch werkt, en DDD botst daar constant mee.

Wat ik deze week ook goed besefte: ik moet Claude structureler inzetten als dagelijkse werktool. Niet als backup voor als ik vastzit, maar proactief — voor code review, voor het uitschrijven van logica, voor het versnellen van zaken waar ik anders te lang over nadenk. Ik heb dat al laten zien met remote gebruik, maar er zit nog veel meer marge. Dat is een concrete gewoonte die ik wil verankeren.

## Samenvatting:

- Incident.io statuspage live op `status.saply.th` met alle Saply services
- Heartbeat frequentie aangepast naar elke 5 minuten (~288 calls/dag)
- Azure DevOps alerts verkend, Incident.io paid plan gekozen als cleanste oplossing
- Tickets #694 en #870 afgerond en ingediend voor review
- Testing suite documentatie opgestart, architectuur besproken met Guillaume
- CV engine feedbackmodule verder uitgewerkt
- Ticket #806 in progress
- DDD: conclusie getrokken dat het niet bij mij past
- Claude meer en structureler inzetten als werktool — concrete gewoonte om te verankeren
- Vrijdag afwezig (nationale feestdag)
