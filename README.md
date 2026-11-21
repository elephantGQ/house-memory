# House Memory

**House Memory is an early architecture proposal for keeping a source-linked record of a home's hidden systems and repair history.** Before drywall closes, a homeowner or contractor captures photos/video, notes, and measured room anchors for pipes, wiring, shutoffs, and materials. Later, people can search the record and see where each observation came from and how certain its location is.

## MVP scope

- Capture one room at a time: source photos or keyframes, notes, date, a measured baseline, and user-confirmed anchors.
- Save observations with their original source, room-relative coordinates, transform, and confidence/uncertainty.
- Show a simple 2D room plan with links back to evidence. Mark weak or stale locations as **unverified** and offer a rescan.
- Keep a reviewable development workflow: Devin Bot can work from scoped GitHub issues, open pull requests, report checks and known limits, and wait for a human to review.

## Proposed architecture

- **Mobile capture:** Expo / React Native with TypeScript. Start with camera capture, room setup, manual measurements, and anchor confirmation. A small native ARKit adapter can be explored later for device relocalization; it is not required for the first capture flow.
- **API:** Fastify with TypeScript for project, room, scan, anchor, and observation records.
- **Spatial data:** PostgreSQL with PostGIS for room geometry and room-relative observations.
- **Evidence storage:** object storage for original media and derived keyframes; records keep timestamps and source references.
- **Retrieval:** a 2D plan and source-linked evidence first. Any future camera overlay must show uncertainty and fall back to an unverified plan location when relocalization is weak.

## Data model (proposed)

- Project and Room identify the property workspace and measured room outline.
- Scan records a capture session, device metadata, date, and measured baseline.
- Anchor records a user-confirmed point such as a doorway corner, including its measurement source.
- Observation records a pipe, wire, shutoff, or material with source media, room-relative position, transform, and confidence.

## Safety and limits

This is a documentation aid, **not** an inspection, as-built certification, or instruction that a wall is safe to drill or open. Low-confidence or stale records must be labeled unverified. Users should consult qualified professionals before drilling, cutting, or changing building systems.

## Status

Architecture proposal only. The application, API, spatial alignment, and Devin Bot workflow have not been implemented or validated. The first engineering milestone should measure coordinate error against tape-measured fixtures across repeated scans before making accuracy claims.
