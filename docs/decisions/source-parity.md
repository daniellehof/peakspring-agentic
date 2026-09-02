# Source Parity Decisions — PeakSpring Agentic Rebuild

## /call formulier (issue #1)
- **Bron:** Live DOM heeft geen `<form>` element, alleen lege embed containers.
- **Webflow API:** Toont 9 historische forms met naam "Email Form" maar geen actieve.
- **Beslissing:** Formulier gebouwd met basisvelden (naam, email, telefoon, bericht). Danielle moet bevestigen of dit een Tally-embed of ander formulier moet zijn.
- **Datum:** 2026-09-02

## Family nav-scolled typo (issue #2)
- **Bron:** Family-route gebruikt `nav-scolled` ipv `scrolled` in een CSS selector.
- **Beslissing:** Behandeld als bronquirk. Clone gebruikt `scrolled` consistent. Geen functionaliteit verloren.
- **Datum:** 2026-09-02

## Dubbele H1-elementen (issue #3)
- **Bron:** Home, About, Performance en videoroutes hebben twee H1's in de DOM (desktop/mobiel duplicaten).
- **Beslissing:** Clone heeft één H1 per pagina. SEO-check bevestigt geen negatieve impact.
- **Datum:** 2026-09-02

## Quiz/Order metadata (issue #4)
- **Bron:** Geen H1 en geen meta description op deze routes.
- **Beslissing:** Tally iframe titels toegevoegd via parent document title.
- **Datum:** 2026-09-02

## Dubbele GSAP-versies (issue #5)
- **Bron:** Site laadt GSAP 3.13.0 én 3.15.0.
- **Beslissing:** Clone gebruikt één GSAP-versie (npm `gsap` package, latest). MotionPath niet geladen tenzij nodig.
- **Datum:** 2026-09-02

## Custom-code API niet geautoriseerd (issue #6)
- **Bron:** Webflow custom-code API geeft 403 `invalid_auth_version`.
- **Beslissing:** Runtime code is volledig uit gerenderde pagina's geëxtraheerd. Geen blokkade voor rebuild.
- **Datum:** 2026-09-02

## Lazy-loaded afbeeldingen (issue #7)
- **Bron:** Sommige carouselafbeeldingen rapporteren breedte/hoogte 0 in initiële DOM-capture.
- **Beslissing:** Bestanden zijn succesvol gedownload en gemapt. Lazy loading behouden.
- **Datum:** 2026-09-02

## Video CMS lightbox (issue #8)
- **Bron:** Videopagina's tonen geen permanent iframe maar een Webflow lightbox.
- **Beslissing:** Eigen toegankelijke dialog/lightbox gebouwd (VideoLightbox.tsx). Vimeo Embedly iframe dynamisch.
- **Datum:** 2026-09-02