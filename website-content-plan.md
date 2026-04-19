# DeadScroll Website Plan

Status: draft for review

Updated: April 19, 2026

## Goal

Build `deadscroll.app` into a public trust and explanation surface, not just a placeholder privacy page.

The website should:

- explain DeadScroll's core thesis clearly
- show why nudges beat brute blockers for many real-life loops
- explain how the nudge ladder works without exposing exact trigger thresholds
- support trust around Accessibility, Overlay, and privacy
- create a value-first monetization story instead of a paywall-first impression

## Site Principles

- trust infrastructure first, marketing second
- direct, severe, premium tone
- no cute wellness language
- no generic blocker-app language
- explain principles clearly without revealing exact routing logic
- match the app's visual system:
  - Montserrat only
  - bone-white and black palette
  - teal only where safety or privacy is being communicated
  - sharp frames and hard rules
  - left-aligned reading layouts by default

## Recommended Information Architecture

Phase 1 should ship with these public pages:

1. `Home`
2. `How It Works`
3. `Privacy`
4. `Permissions`
5. `Support`

Recommended URLs:

- `/`
- `/how-it-works`
- `/privacy`
- `/permissions`
- `/support`

## Homepage Job

The homepage should answer five questions quickly:

1. What is DeadScroll?
2. Why is it not just another blocker?
3. How do the nudges work?
4. Why does it need sensitive Android permissions?
5. Why should a user trust it before paying for anything?

## Homepage Structure

### 1. Hero

Goal:

- establish the thesis in one screen
- make the product feel deliberate and differentiated

Recommended headline:

`DeadScroll interrupts compulsive app loops before they harden.`

Recommended supporting copy:

`DeadScroll is not a generic blocker. It is an adaptive Android intervention system that introduces friction at the moment a loop is forming, then escalates only when the pattern keeps repeating.`

Recommended CTA set:

- `HOW IT WORKS`
- `WHY IT NEEDS ACCESSIBILITY`
- `READ PRIVACY`

Do not lead with a loud pricing CTA on the first public version.

### 2. Why Nudges Beat Blockers

Goal:

- explain the product philosophy in plain language
- frame DeadScroll as anti-loop, not anti-phone

Key message:

- blockers can be useful for brute interruption
- blockers often act too late
- blockers can feel punitive
- blockers are often bypassed or resented
- DeadScroll aims to intervene earlier, with more context, and with less reactance

Recommended section headline:

`Why DeadScroll nudges instead of just blocking`

Recommended content pattern:

- one sharp intro paragraph
- a 2-column comparison:
  - blocker behavior
  - DeadScroll behavior

### 3. How DeadScroll Works

Goal:

- explain the system simply enough that it feels intentional
- avoid turning the page into a technical spec

Recommended structure:

1. `Entry Visa`
2. `Stage A`
3. `Stage B`
4. `Stage C`

Recommended user-facing explanation:

- first contact creates a pause
- if drift keeps building, the friction gets stronger
- app category and recent behavior shape the intervention
- user-selected severity changes how firm the system feels

Important constraint:

- do not publish exact time thresholds or routing conditions

### 4. Nudge Types

Goal:

- make the product feel tangible
- preview how interventions differ without overwhelming the user

Recommended four-card layout:

1. `Hold`
2. `Breathe`
3. `Cipher`
4. `Stoic Scribe`

Each card should explain:

- what the user does
- what the nudge is trying to interrupt
- why that specific mode exists

### 5. Severity And Escalation

Goal:

- explain that DeadScroll is not random
- explain that severity is a user choice

Recommended content:

- `Gentle`: slower escalation, lighter pressure
- `Mindful`: balanced default
- `Ironclad`: fastest escalation, strongest persistence

Recommended section headline:

`You choose the baseline. DeadScroll chooses the moment.`

### 6. Permissions And Trust

Goal:

- reduce suspicion around Accessibility and Overlay
- show that the website and onboarding tell the same trust story

Recommended content blocks:

- `Accessibility`: detects selected target apps and relevant interaction signals
- `Overlay`: lets DeadScroll interrupt the loop in real time
- `Usage Access`: supports onboarding and certain usage-based surfaces

This section should explicitly say:

- what DeadScroll needs
- why it needs it
- what it does not inspect or sell

CTA from this section:

- `FULL PERMISSIONS EXPLANATION`

### 7. Privacy And Local-First Handling

Goal:

- show restraint and credibility
- avoid overclaiming

Recommended message:

- no account required for core functionality
- core settings and intervention history are intended to stay on device
- third-party technical services may exist in some builds
- no advertising sale of data

This section should link directly to `/privacy`.

### 8. Value-First Monetization

Goal:

- explain the business model without making the product feel like a trap

Recommended public promise:

`DeadScroll should earn payment only after it has already helped.`

Recommended value-first principles:

- no ads
- no sale of personal data
- no paywall before trust is established
- payment should follow demonstrated value, not arrive before it

## Proposed Monetization Specifics

This section is a draft recommendation and needs explicit product approval before it becomes public copy.

Recommended product model for the site narrative:

- free access should let users experience the core intervention system first
- premium should arrive later as an expansion layer, not as the proof of the product
- likely premium candidates:
  - richer nudge library
  - stricter modes and future anti-bypass options
  - deeper analytics and insights
  - future focus windows or routines
  - future premium support or cross-device features if those ever ship

Recommended public framing:

`Use the core system first. If DeadScroll proves its value, then pay for the deeper layers.`

Recommended things to avoid in public copy:

- fake scarcity
- manipulative urgency
- install-first paywall framing
- vague promises about "AI wellness"

## Supporting Pages

### `/how-it-works`

Purpose:

- hold the fuller explanation so the homepage stays sharp

Should include:

- nudge ladder explanation
- category-aware behavior explanation
- severity modes
- examples of nudge types
- short FAQ on why the system varies over time

### `/permissions`

Purpose:

- act as the public trust page for Accessibility, Overlay, and related Android permissions

Should include:

- what each permission does
- why it is needed
- what the app does not do
- how users can revoke access

### `/support`

Purpose:

- provide a durable help and contact surface

Should include:

- support email
- short FAQ
- links to privacy and permissions pages

## Design Direction For The Site

The website should visibly match the app's current design guide:

- Montserrat only
- hard black rule at the top of major pages
- large uppercase headers
- sharp containers instead of soft cards
- no gradients
- no extended serif branding
- use teal only for safety/privacy or regulated reassurance

Recommended homepage mood:

- premium
- monolithic
- editorial
- severe
- precise

Not:

- playful
- bubbly
- startup-generic
- meditation-app soft

## Copy Constraints

Across the whole site:

- say `nudge`, `intervention`, `loop`, `reclaim`, `target app`, `protection`
- avoid cute or motivational filler
- keep paragraphs short
- keep claims specific
- avoid absolute promises unless engineering truth is verified

## Suggested Implementation Order

1. refresh the privacy page and branding
2. build the homepage
3. add the permissions page
4. add the support page
5. add the deeper `how it works` page
6. align cross-links and footer navigation

## Open Review Decisions

Before homepage build begins, confirm:

1. whether the new public wordmark should be pure text, a new image asset, or a combined lockup
2. whether the homepage should lead with `DeadScroll` or the all-caps `DEADSCROLL` treatment
3. whether monetization should be described now as:
   - free core plus premium expansion
   - post-value subscription
   - or a softer "pricing later" placeholder
4. whether the first live homepage should include a download CTA or remain trust-and-explanation first
