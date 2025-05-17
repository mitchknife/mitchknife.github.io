---
company: 'AllDrafts'
role: 'Senior Software Engineer'
dateRange: '2023 => Current'
tech:
  - Node
  - React
  - Lexical
  - Prisma
  - Remix
  - CRDT
  - Prompt Engineering
---

AllDrafts was a year old startup when I started. I am currently working with a small, very talented team to build a new legal tech document editor/generator. As part of a startup I need to have a good understanding of the tradeoffs between "Getting it shipped" and "Doing it right". I work on all aspects of our app, from React magic on the frontend, to a sensible and scalable API on the backend, to getting the whole thing deployed and ensuring our third party services are integrated well and humming along. I also get to wear the designer hat, the product manager hat, and the customer service hat.

- Built a backend service layer that is defined with a separate DSL (similar to OpenApi). Javascript clients, backend http controllers, and API documentation (markdown) are all generated from the one definition file. This allows us to be more intentional about our API design, integrate new routes into the client really fast (no boilerplate code required), and helps us abstract away the HTTP layer so unit tests can focus on testing our business logic with zero setup for mocking HTTP or having to resort to integration tests.
- Integrated a third party accounts/auth/payments provider (Outseta) allowing us to get up and running faster than if we had to roll our own solutions.
- Restructered our monorepo to use isolated projects so we can share common code more easily between our multiple applications (e.g. React frontend app, Fastify backend app, Node job processor).
- Developed my Typescript Fu significantly (I'm not sure I'm at the level of being able to run [Doom using types](https://www.youtube.com/watch?v=0mCsluv5FXA), but I know my way around)
