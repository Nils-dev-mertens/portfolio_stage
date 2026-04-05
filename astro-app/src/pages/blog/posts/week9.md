---
layout: "../../../layouts/BlogLayout.astro"
title: "Week 9 - UI Package, Astro Conversie en Playwright"
date: "04-04-2026"
summary: "Voor het eerst een npm UI-package gebouwd en geïntegreerd. Verantwoordelijkheid voor de Astro-conversie van een Framer-website. Playwright-teststrategie uitgedacht voor CI/CD."
tags: [astro, npm-package, playwright, ui, ci-cd, flowlane]
---

![alt text](./images/fullstackdevexperience.png)

## Context:

Deze week stond in het teken van een nieuwe, grote verantwoordelijkheid: een bestaande Framer-website omzetten naar Astro. Daarnaast heb ik voor het eerst een npm UI-package gebouwd vanuit een React-applicatie en geïntegreerd in onze eigen codebase.

## Wat heb ik gedaan:

- **Astro-conversie toegewezen gekregen**: de CEO wil de bestaande Framer-website omzetten naar Astro. Mijn team heeft weinig kennis van Astro, dus de taak belandt bij mij. De verantwoordelijkheid ging vervolgens van mij naar de CEO, terug naar mij, naar een ingehuurde externe ontwikkelaar, en uiteindelijk terug naar mij, met de CTO als tussenpersoon die final say wil. De CTO heeft zelf aangegeven dat hij webdev met React/Astro/Vite niet volledig beheerst. Met de eerste revisie wil ik evalueren of deze tussenschakel meerwaarde heeft.
- **UI-package gebouwd vanuit een React-applicatie**: voor het eerst een npm-package gemaakt op basis van een bestaande React-codebase. Geleerd over `.npmrc` voor private packages, hoe je een correcte package-configuratie schrijft zodat de juiste bestanden worden meegenomen, en hoe je een pipeline opzet die automatisch een nieuwe versie publiceert bij elke push.
- **Versioning in de pipeline**: als er geen version bump gebeurt, worden wijzigingen niet geaccepteerd door het npm-registry. De pipeline houdt hier rekening mee.
- **CSS-integratie opgelost**: de webpack-configuratie ondersteunde `CSS Modules` niet correct, waardoor ik ben overgeschakeld op gewone CSS-imports. Dit werkt stabiel binnen onze huidige applicatiestructuur.
- **UI-package geïntegreerd in de applicatie**: na het bouwen van de package het aanpassen en integreren in onze bestaande applicatie. Pipelines verder verfijnd en kleine bugs opgelost.
- **Ticketbeheer en communicatie**: beseft dat tickets beter moeten reflecteren wat er werkelijk gebeurt. Tickets worden nu actiever bijgehouden met de juiste status, scope en context. Mijn mening gegeven in situaties en een ander perspectief ingebracht waar nodig.
- **Teststrategie voor Astro en UI uitgedacht**: de CTO wil dat we meer testen schrijven voor de UI met Playwright. Ik ben al vertrouwd met Playwright vanuit een vorige job, wat een voordeel is. Uitgedacht hoe dit in de CI/CD-pipeline past: automatische dagelijkse runs die bij een probleem een rapport genereren of automatisch een ticket aanmaken.
- **Flowlane uitgebreid onderzoek**: mijn sideproject [flowlane](https://github.com/Nils-dev-mertens/flowlane), een CLI-tool voor Azure DevOps die de Ticket → Branch → PR-workflow automatiseert, kan momenteel PR's aanmaken, tickets aanpassen en inline comments toevoegen. Een feature request van de CTO: een interactieve review-experience. Dat werkt relatief eenvoudig via een VS Code-extensie, maar is een stuk complexer voor IntelliJ.

## Blockers:

- De verantwoordelijkheid voor de Astro-conversie werd meerdere keren verschoven, wat de planning en focus bemoeilijkte.
- CSS Modules werkten niet met de bestaande webpack-configuratie, waardoor een alternatieve aanpak nodig was.

## Resultaat:

- Eerste werkende npm UI-package gebouwd, geconfigureerd en geïntegreerd in de applicatie.
- Pipeline opgezet voor automatische versie-updates van de package.
- Astro-conversie opgestart; eerste revisie bepaalt of de huidige workflow met tussenpersoon zinvol is.
- Teststrategie voor Playwright uitgedacht voor gebruik in CI/CD met automatische rapportage.
- Ticketbeheer verbeterd: tickets reflecteren nu beter de werkelijke situatie.

## Volgende stappen:

- Eerste revisie van de Astro-conversie reviewen en evalueren of de tussenpersoon meerwaarde heeft.
- Playwright-teststrategie verder uitwerken en implementeren in de CI/CD-pipeline.
- Flowlane uitbreiden met een interactieve review-functionaliteit, te beginnen met de VS Code-integratie.
- Samenwerking met sales verder verbeteren door inzicht te krijgen in hun noden en sprints gerichter af te bakenen.

## Reflectie:

Het bouwen van een npm-package voelde als een logische stap, maar de details, versioning, private registry, webpack-compatibiliteit, vragen meer aandacht dan verwacht. Dat is precies waar je van leert: niet de grote concepten, maar de kleine configuratiedetails die het verschil maken tussen een package die werkt en een die dat niet doet.

De situatie rond de Astro-conversie toonde hoe verantwoordelijkheden in een team kunnen verschuiven zonder duidelijke regie. In plaats van daar passief in mee te gaan, heb ik mijn positie duidelijker geclaimd en de eerste revisie als objectief meetpunt voorgesteld. Dat voelt als een stap in de juiste richting qua professionele communicatie, iets waar ik de vorige week ook al mee bezig was.

## Samenvatting:

- Eerste npm UI-package gebouwd en geïntegreerd in de applicatie
- Pipeline opgezet voor automatische versioning
- CSS Modules probleem opgelost via reguliere CSS-imports
- Astro-conversie van Framer-website opgestart
- Playwright-teststrategie uitgedacht voor CI/CD met automatische rapportage
- Ticketbeheer en communicatie verbeterd
- Flowlane uitgebreid onderzocht voor interactieve review-feature
