# Visual Practice Card Implementation Rules

Use this checklist whenever a practice card is built from a worksheet, PDF, screenshot, or slide where the math is carried by diagrams, number lines, shaded regions, tables, matching layouts, or other visual objects.

Also follow `Practice-Card-Implementation-Rules.md`, the comprehensive source, assessment, synchronization, and verification guide for all Practice cards. This file remains the specialized source of truth for visual Practice implementation.

## Core Principle

Faithful transcription comes before app design.

Treat every source diagram as math data, not decoration. The app may make the activity interactive, but it must preserve what the original visual objects mean and how they relate to the question.

## Required Workflow

Before implementing a visually based practice card:

1. Render or inspect the original source page visually.
2. Identify every separate visual object in the source.
3. Identify the unit of action: what exactly the student is supposed to choose, match, move, shade, place, or write.
4. Label each source object by position, such as "top number line," "first rectangle," or "bottom table."
5. Determine what math each source object represents.
6. Decide whether the app should keep the objects separate or intentionally combine them.
7. If combining objects, prove the pairing matches the source instruction, not just the page layout.
8. Count the source match/action targets and make sure the app has the same target count.
9. Only then implement the app card.

## Unit Of Action Rule

Before building a matching, sorting, shading, dragging, or fill-in card, explicitly answer:

> What exactly is the student acting on?

Examples:

- Each number line?
- Each shaded region?
- Each rectangle?
- Each table row?
- Each blank?
- Each whole row of objects?
- A deliberately combined diagram?

The unit of action must come from the instruction text and the mathematical structure of the source, not from visual convenience.

Default rule:

> Physical closeness on the page does not mean two objects form one match target.

If a number line and a rectangle appear on the same horizontal row, they are still separate source objects unless the prompt says or clearly implies that the row is one combined diagram.

## Object Count Check

The number of app action targets must equal the number of source action targets.

For matching activities:

- If the source asks students to match 4 number lines and 4 shaded rectangles, the app needs 8 match targets.
- A 4-row app is wrong unless the worksheet explicitly says each row is one diagram.
- If the source has 6 blanks, the app should have 6 answer fields.
- If the source has 3 draggable labels, the app should expose 3 draggable labels.

Do this check before coding and again during verification.

## Independence Test

For each visual object, ask:

> Could this object be matched, interpreted, placed, shaded, or answered by itself?

If yes, it must stay independent unless the source explicitly combines it with another object.

Examples:

- A number line with a marked point can usually be matched to an expression by itself.
- A shaded rectangle can usually be matched to an expression by itself.
- Two objects sharing a row do not automatically become one combined match target.
- A table row may be one action target only if the task asks the student to complete or interpret that row as a unit.

## Layout Is Not Meaning

Do not infer mathematical pairing from:

- Same row.
- Same column.
- Similar spacing.
- Nearby placement.
- Visual alignment.
- Page layout convenience.

Pairing must come from:

- The instruction text.
- Explicit labels.
- Brackets or connectors that visually bind objects.
- A clear mathematical dependency stated by the source.

When in doubt, keep visual objects separate.

## Source Object Inventory

For each visual object, record:

- Source page and activity number.
- Object type: number line, rectangle, area model, table, graph, equation, etc.
- Source position: first, second, third, top-left, bottom-right, etc.
- Labels visible in the source.
- Shaded amount or marked point.
- Mathematical meaning.
- Whether it is part of a matching set, explanation, example, or answer space.

## Mapping Table

For matching or multi-visual activities, create a source-to-card mapping before coding.

Example:

| Source object | Source position | What it represents | App object | Notes |
| --- | --- | --- | --- | --- |
| Number line 1 | first row left | point at 45/7 | Diagram A number line | Must stay paired with source rectangle 1 only if source says so |
| Rectangle 1 | first row right | 9/7 of 5 | Diagram A rectangle | Do not pair with a different number line |

The mapping must make clear which original visual became which app visual.

For matching cards, use this stricter table:

| Source object | Type | Match group | Correct expression/value | Independent target? | Can expression be reused? | App target |
| --- | --- | --- | --- | --- | --- | --- |
| Number line 1 | number line | number lines | 9/7 x 5 | yes | once within number lines | number-line-target-1 |
| Rectangle 1 | shaded rectangle | rectangles | 9/7 x 5 | yes | once within rectangles | rectangle-target-1 |

This table prevents accidental row-level grouping when the worksheet actually asks students to match each visual object independently.

## Data Fields For Visual Cards

When possible, the app data should store explicit source mapping fields instead of relying on visual guesses.

Useful fields include:

```js
sourcePage: 3,
sourceActivity: "17.1",
sourceNumberLineIndex: 1,
sourceRectangleIndex: 1,
sourceVisualIndex: 1,
expression: "9/7 x 5",
mathValue: "45/7",
sourceLocation: "first row",
reason: "The first source row pairs this number line with this rectangle."
```

## Combining Rules

Do not combine source visuals unless the source activity or the app design explicitly requires it.

If combining is needed:

- Preserve the original relationships between visuals.
- Do not pair a number line with a rectangle just because they appear on the same row.
- Do not pair a number line from one source row with a rectangle from another source row unless the source explicitly asks for that pairing.
- Verify the combined visual represents the same expression, value, and context.
- State which source objects were combined and why.

If the source shows separate diagrams, the safest default is to keep them separate.

## Representation Group Rule

Some worksheets show the same set of expressions represented in more than one way, such as number lines and shaded rectangles.

In that case:

- Treat each representation type as its own match group unless the source says otherwise.
- Allow an expression to be used once in each representation group.
- Do not force one global "use each expression once" rule across different representation groups.

Example:

- A card may have 4 number lines and 4 rectangles.
- The expression `9/7 x 5` may correctly match one number line and one rectangle.
- It should be unavailable after use within the number-line group, but still available in the rectangle group.

## Matching Activity Rules

For matching activities:

- Preserve the original pool of choices.
- Preserve each original diagram as its own object unless a redesign is deliberate.
- Identify whether the student matches individual objects, rows, columns, groups, or combined diagrams.
- Do not pre-label a diagram with the answer expression.
- Do not visually reveal the correct match before the student submits.
- If the student needs to match expressions to diagrams, the diagram should show the visual evidence, not the answer.

## Answer-Revealing Rules

Avoid giving away the answer in:

- Diagram titles.
- Card titles, part-tab labels, tooltips, and accessible names for the active part or any visible sibling part.
- Captions.
- Labels inside the visual.
- Alternative text that classifies a figure instead of describing its observable geometry.
- Pre-filled equations.
- Highlighted correct regions.
- Sample responses shown before submission.
- Measurements that the source expects students to infer from a grid, diagram, or visual relationship.

The card may show structure, context, and manipulatives, but the student should still have to reason.

## Grid-Dependent Visual Rule

If the source visual uses a grid for area, perimeter, length, height, coordinate, or counting reasoning, the grid is part of the math data.

- Keep the relevant grid visible through or around the figure.
- Keep vertices, edges, shaded regions, and labels aligned to the same unit structure shown in the source.
- Do not replace a source grid figure with filled rectangles, decorative blocks, or a simplified composition that hides the unit squares.
- Do not add internal decomposition lines, titles, colors, or labels that the source does not show if they make one solution strategy obvious before the student reasons.
- If the source shows one outlined polygon on a grid, the app should normally show one outlined polygon on a grid, not multiple colored component rectangles.
- If color is added for accessibility or focus, it must not obscure the grid or change which grid squares can be counted.

Example:

- If the source shows an outlined stepped polygon on a square grid with side labels `4`, `3`, `2`, and `6`, the app should preserve the square grid and outline. It should not render two filled rectangles with a hidden grid and a pre-drawn split line.

## Moved Or Equal Pieces Rule

If the source visual asks students to reason from pieces being cut, moved, rearranged, composed, or decomposed, the pieces are part of the math data.

- Preserve the number of visible equal pieces when the source uses countable pieces.
- Preserve the equality of moved pieces by making the removed and attached pieces visibly the same size and shape.
- Do not replace a moved-piece diagram with a solid silhouette if that hides how many pieces moved.
- Do not add captions or labels that explain the conservation idea when the source expects the student to infer it from the pieces.
- If a square is decomposed into 16 equal squares and 4 are moved outside, the app visual should still show 16 equal pieces before and after the move.
- If one square is removed from a region and attached elsewhere, the missing square and attached square must be visually congruent.

## Inferred Measurement Rule

If the source expects students to infer a measurement from a grid or diagram, the app must preserve that inference.

- Do not move an inferred measurement into the prompt.
- Do not label an inferred measurement on the app diagram before the student answers.
- Do not reveal an inferred measurement in a hint before the answer is correct.
- Keep the source's visible labels, grid, and relationships so the student can infer the measurement from the visual object.
- The post-correct sample may name the inferred measurement and explain how it was found.

## Source Photograph And Raster Crop Rule

When the source task depends on a photograph or other raster visual:

- crop only the visual object; keep the problem text, dimensions, directions, and response controls as app-rendered content;
- if source prompt text separates a reference visual from the figures it governs, make separate tight visual-only crops and present all of them together in source order; never crop the intervening prompt or answer-list text into the card;
- place the crop in the active workspace when the student needs it to understand or answer the question;
- do not treat a source-modal link as a replacement for required visual evidence;
- display the crop at or below its natural pixel dimensions unless a higher-resolution render proves enlargement remains sharp;
- do not expand a tall or portrait crop to fill the visual column when doing so makes the active card unnecessarily tall; apply a deliberate maximum display height, preserve the aspect ratio, and center the crop;
- preserve the subject, orientation, and source-relevant geometry without decorative cropping or filters;
- verify in Playwright that the image loads, its rendered dimensions do not exceed the verified sharp size or intentional display cap, and the mobile/desktop layouts do not clip it;
- at the target desktop viewport, verify that an oversized portrait visual does not force the student to scroll merely to move between the visual and its response controls.

Example:

- If the source shows a triangle on a grid with side labels `5` and the student must infer the perpendicular height is `3`, the app diagram should show the grid and the `5` labels, not a dashed segment labeled `height 3`.

## Base And Height Geometry Rule

For base-and-height diagrams, the exact relationship between the selected base, corresponding height, and any extension line is the math.

- Preserve the source's `base` and `height` text labels unless the app interaction explicitly asks students to place those labels.
- Preserve whether the height is solid or dashed.
- Preserve right-angle markers when the source uses them to show perpendicularity.
- Preserve whether a height lands inside the shape, on the edge, outside the shape, or on an extension of the base line.
- Do not assume every segment that represents a corresponding height must touch a polygon vertex. When the source asks which segments `could represent` the height, verify its definition and teacher solution: a perpendicular segment spanning the two parallel lines containing the bases may be valid outside the polygon even when neither endpoint is a vertex.
- Do not replace source base labels with detached base bars unless the source uses detached bars.
- Do not simplify multiple source diagrams into generic shapes when students must decide which height corresponds to the given base.
- When several base/height diagrams share one grid in the source, keep them on one shared grid unless the app design has a clear reason to split them.

Example:

- If the source asks students to select diagrams A-D with correct heights, and diagrams C and D use dashed height segments plus right-angle markers, the app should render those dashed segments and right-angle markers. It should not show four simplified parallelograms with separate base bars.

## Precision Geometry Source Extraction Rule

For a static geometry-identification task, exact coordinates and line relationships can carry the answer. A visually similar reconstruction is not sufficient.

- Prefer a high-resolution visual-only crop from the cited PDF when the student only needs to inspect the source geometry and does not need to manipulate it.
- Apply the same preference to canonical solid examples reused in Vocabulary: crop the exact matching prism, pyramid, cube, or other polyhedron from the curriculum instead of inventing a projection. Remove surrounding activity labels and text, preserve the source's visible-face and hidden-edge convention, and never enlarge the crop beyond its natural dimensions.
- Render the PDF at a verified high resolution and crop only the diagram. Keep the prompt, directions, and response controls as app-rendered content.
- Preserve the source grid, proportions, labels, line endpoints, extensions, dash patterns, right-angle markers, and relative spacing exactly.
- Display the crop at or below its natural pixel dimensions and preserve its intrinsic aspect ratio.
- Reconstruct the diagram only when interaction or accessibility requires it. In that case, map source coordinates and proportions explicitly and compare the rendered result against the source before acceptance.
- Do not accept a reconstruction merely because it contains the expected number of shapes, labels, grid lines, dashed segments, or markers. Structural element counts do not prove geometric fidelity.
- Playwright must verify that the source crop loads, has the expected natural dimensions, is not enlarged, preserves its aspect ratio, and is not clipped on desktop or mobile. Inspect the saved screenshot beside the cited rendered source page.

## Source-Aligned Annotation Scratchpad Rule

When an exact source visual is the evidence for a numeric or conceptual answer, the app may add an optional drawing layer to support decomposition, enclosure, construction, or comparison reasoning.

- Keep the exact source crop as an immutable image layer. Put all student marks in a transparent SVG or canvas layer with the same intrinsic aspect ratio and coordinate system.
- Measure and record the source crop's natural-pixel grid origin, horizontal and vertical cell size, and usable row/column bounds. Snap endpoints and corners to those recorded intersections rather than approximating from the current browser size.
- When the source has no countable grid, store endpoints directly in the crop's natural-pixel coordinate system and constrain them to the active source figure's recorded bounds. Do not derive permanent marks from rendered CSS pixels.
- Store annotation geometry in source-based coordinates, never CSS pixels: use grid indices for a countable source grid and natural-pixel endpoints for a non-grid diagram. Recompute rendered coordinates through the fixed SVG `viewBox` so resizing cannot shift marks away from the source geometry.
- Preserve the source visual's verified display variant and aspect treatment when adding the annotation wrapper. In particular, a portrait crop must remain portrait and keep its intentional height cap; annotation support must not silently replace it with a generic square workspace.
- Provide only mathematically useful tools for the task, such as line, rectangle, square, erase, undo, and clear. Keep rectangle fills transparent enough that the source polygon, labels, and grid remain visible.
- Audit every exact 2D visual that asks the student to measure, identify a base or corresponding height, decompose or enclose a region, or compare areas. Add an optional annotation scratchpad when marking directly on that visual would materially support the reasoning; do not wait for a student report to discover the missing workspace affordance.
- Annotation is not an automatic decoration for every image. Omit it from classification-only figures, photographs, already-manipulable construction boards, and perspective 3D diagrams when freehand lines would not support a clear mathematical action or could imply false measurements.
- When several parts reuse the same source diagram, make the annotation decision for the whole related set. Give every part that depends on measuring or decomposing that diagram the same aligned coordinate model, while keeping each part's student marks in its own response state unless the source explicitly calls for one shared drawing.
- When repeated source shapes have commensurate dimensions but no printed grid, calibrate the annotation lattice to the smallest repeated length. Line and square marks may then support side-length and area comparison without adding a visible app grid or pre-labeling the size relationships the student is meant to infer.
- Allow as many construction segments as the source reasoning requires. For example, constructing a height for an obtuse triangle may require one segment to extend the line containing the chosen base and a second perpendicular segment from the opposite vertex.
- An optional annotation scratchpad is not an answer target. Its contents must not be graded, required, auto-corrected, or allowed to alter the correctness of the card's explicit response controls.
- A required annotation attempt is a separate assessment posture from an optional scratchpad. Use it only when the source asks for a construction with multiple valid approaches and the app cannot reliably grade one exact geometry. Require at least one mathematically relevant mark before submission, record the attempt without claiming it is correct, and relock any model solution when the marks change.
- Keep a worked construction sequence entirely absent before submission. After a non-empty attempt is submitted, reveal it in a separately labeled `Model solution` region while preserving the student's source-aligned marks for side-by-side comparison.
- When the card also renders a selected, submitted, checked, or model answer segment, keep that overlay in separate state and give it a clearly different line style and color from the student's trial marks. Do not erase, replace, or reinterpret the student's marks when feedback appears.
- Preserve annotation state through normal card rerenders, answer submission, hints, samples, and source-modal use. Erasing or clearing marks must not reset a submitted answer or feedback.
- Make drawing available to pointer and touch users and provide a keyboard path for placing endpoints and removing marks.
- Playwright must draw each supported geometry type, verify exact source-coordinate attributes, exercise erase/undo/clear and keyboard input, rerender the card, and confirm overlay/image bounds remain aligned at desktop and mobile sizes. Submit both correct and incorrect answers with the same marks to prove grading independence.
- For a required annotation attempt, Playwright must also verify that answer-bearing model controls and geometry do not exist before submission, submission is unavailable while the drawing is empty, the model appears only after a non-empty attempt, and editing or clearing the attempt hides the model again.

## App-Added Quantitative Visual Rule

When a source problem is text-only but the app adds a diagram as a reasoning scaffold, the new visual is still mathematical data and must accurately model every stated quantity.

- Record the diagram as an app-provided scaffold in the item audit and implementation notes; do not imply that it was extracted from the source.
- Generate related lengths from one shared unit scale. Do not hand-tune each face or solid independently merely to fill available space.
- Preserve exact on-face dimension ratios. For example, a `3 by 2` face must render with width-to-height ratio `3:2`, and a `1 by 6` face must render with ratio `1:6`.
- For a dimensioned two-dimensional figure, derive both screen dimensions from one square-grid unit. Never reuse a generic fixed-width or fixed-height shape when the stated side lengths have a different ratio.
- Let a proportional app-added figure use the available workspace instead of shrinking it to a generic thumbnail. Fit it with one shared unit scale while preserving room for dimension labels and the most extreme expected ratio.
- Do not add a decorative grid behind a text-only source problem unless students are intended to count or measure against that grid. Use a plain workspace when the grid has no mathematical role.
- When fractional side lengths need a common square grid, normalize both dimensions with a common denominator and store the resulting integer row and column counts in card data. Dense minor grid lines may be visually subdued, but the figure boundary and its width-to-height ratio must remain exact.
- Use one documented projection for related three-dimensional objects. Equal mathematical depths must use the same projected depth vector, and an oblique depth should be moderately foreshortened so it does not appear longer than an on-face unit.
- Keep dimension labels visible and source-faithful, but do not add computed area, volume, or comparison labels that reveal the answer.
- Store source dimensions, unit scale, and projection factors in card data or inspectable SVG attributes so tests can verify the model numerically.
- Playwright must assert the rendered dimension ratios, normalized grid row and column counts, equal-depth projection consistency, and absence of clipping or overflow, then inspect desktop and mobile screenshots. A screenshot that merely looks plausible is not sufficient.

## Three-Dimensional Visibility Rule

A shaded three-dimensional diagram must use one coherent viewpoint. Face color and edge style are mathematical claims about what the viewer can see from that viewpoint.

- Inventory every face as visible, rear-facing, or occluded before rendering.
- Apply fill only to visible, camera-facing faces. Never fill a rear-facing or occluded face, even with transparency or a subdued color.
- Inventory every edge as visible or hidden from the same viewpoint. Draw visible edges solid. Omit hidden edges when they do not support the task; when hidden structure must be shown, draw those edges dashed.
- Render face fills without automatic outlines, then draw classified edges separately. A shown dashed edge must not have a solid duplicate underneath it.
- For an opaque prism, only one of the two opposite base faces can face the viewer. Fill that base and the visible lateral faces; represent the rear base only with exposed edge segments. Omit occluded segments unless the source or task requires them, in which case draw them dashed.
- Do not infer visibility from array order or color assignment. Store or derive explicit face-visibility and edge-visibility data from the selected projection.
- In Playwright, assert the visible-face inventory, confirm hidden faces have no fill nodes, confirm hidden edges are absent or use a dash pattern, and compare a screenshot for impossible simultaneous face visibility.

## Sample Answer Reveal Rule

Sample responses often contain the full worked answer, so treat them as answer-bearing feedback.

For auto-graded cards:

- Omit `sampleAnswer` entirely when it only repeats the accepted answer or the computation already provided by correct feedback. Do not make students answer correctly merely to unlock the same answer again.
- Audit `sampleAnswer` beside `correctFeedback`, not in isolation. If the green feedback already names the answer, formula, computation, classification, or correction contained in the sample, remove the sample control instead of rephrasing the duplicate.
- Retain a post-correct sample only when it adds a genuinely distinct comparison model: for example, another valid construction, a second worked method not shown in feedback, or a model open response for a task without one exact wording. Record that distinct purpose in the implementation notes.
- Do not show `sampleAnswer` before the student submits a correct response.
- Do not enable a "Show sample" control after an incorrect submission.
- Incorrect feedback may point the student to hints, diagrams, and reasoning prompts, but not to a sample that contains the answer.
- If a student edits any answer after a correct response, hide the sample again and require a new correct submission before it can be shown.

For open-response cards:

- A sample response may unlock after the student saves or submits an attempt, because there is no exact auto-grade answer gate.
- The open-response sample should still be phrased as a comparison model, not as a replacement for the student's work.

Button and feedback behavior should make the lock state clear:

- Before unlock, label the sample control with language such as `Sample unlocks after correct` or `Sample unlocks after response`.
- Disable the locked sample control so it cannot be toggled accidentally.
- After unlock, use normal `Show sample` and `Hide sample` labels.

## Answer-Bearing Source Modal Rule

Some rendered source pages include solution text, completed examples, or worked answers. These pages are useful after the student has reasoned, but they must not reveal answers during an attempt.

If a source page contains visible solution text for an auto-graded card:

- Keep the `Source p.x` control locked until the student submits a correct response.
- Do not unlock the source page merely because the student made an attempt.
- If the student changes the answer after the source was unlocked, close or hide the source modal and lock it again until a new correct submission.
- Do not include feedback text that tells students to use the source preview after an incorrect submission.

If a source page is safe context only and does not reveal the answer:

- The `Source p.x` control may be available before submit.
- The page should open in an in-app modal so the student stays in the practice flow.

Each card should have one source-opening control:

- Do not show both a `Source p.x` link and a separate "Open rendered source preview" link for the same page.
- Do not keep a clickable thumbnail that duplicates the same source-open action.
- If a thumbnail is only decorative or redundant, remove it.
- If a source preview is needed, the single `Source p.x` control should open the in-app modal.

## Interaction Rules

Choose the interaction type from the original activity form:

- Number line problem: let the student choose, drag, or place points on a number line.
- Shading problem: let the student shade or select parts.
- Matching problem: let the student match cards, expressions, or diagrams.
- Fill-in problem: provide inputs in the same mathematical positions as the blanks.
- Open reasoning problem: provide a writing area plus sample response after the student tries.

Do not turn an interactive worksheet task into a passive text card unless there is no reasonable interaction to build.

## Repeated Construction Target Rule

When a source asks for more than one drawing, arrangement, example, method, or construction, preserve that count as independent persistent work.

- Provide one saved workspace state or clearly separated construction state for each requested target; do not make the student erase the first valid response to create the next.
- Give each target its own selection state, submit/check action, status, and specific feedback when the targets can be judged independently.
- Validate the mathematical requirement for every target, such as area, connectivity, overlap, vertex count, or face inventory.
- When the source asks for `different` constructions, compare the completed mathematical objects rather than their screen positions. A translated, rotated, or reflected copy of the same object must not count as a new construction unless the source explicitly treats orientation as the difference being studied.
- Keep completed targets available for review while the student works on later targets.
- Splitting repeated source targets into separate lesson-card parts or separate canonical item IDs does not remove the persistence requirement. Link sibling items explicitly, restore each saved construction from shared app state, and show every correctly completed sibling as a labeled non-editable comparison reference in either switching direction.
- Count all requested constructions in `sourceActionTargets` and `appActionTargets`, and behavior-test that no target can be omitted while still receiving complete/correct status.

For grid polygons, store vertices in source-grid coordinates, preserve their order around the boundary, reject repeated vertices, crossed sides, and flat non-corners, and calculate area from the polygon geometry rather than from a single memorized outline.

When a completed grid polygon must be adjusted to reach a target measurement, keep its numbered vertices available as direct manipulation handles. Snap dragged vertices to grid intersections, prevent two vertices from occupying the same point, update the polygon and its internally calculated measurement during the drag, and provide arrow-key movement for the focused vertex. A committed vertex move must preserve vertex order, retain the existing whole-polygon validity checks, and clear any prior submitted or correct state without erasing the student's construction.

Make that behavior the default for every point-built Practice figure: canonical data should explicitly set `allowVertexEditing: true`, and the shared renderer should treat editing as enabled unless a source-specific card opts out. A Playwright check must finish a figure, verify that every numbered vertex remains keyboard- and pointer-movable, move one vertex, and confirm that prior submission state clears without clearing the figure.

Only show the live measurement when the source supplies that value as an exploration aid. If finding the measurement is the student's task, update it internally while the figure changes but display only construction progress, such as the number of vertices placed. An incorrect check may say that the target was not met, but it must not reveal the constructed figure's computed measurement.

Canonical point-construction data should therefore explicitly set `showCalculatedArea: false` by default. Opt in to a live computed measurement only when the cited source itself provides it as an exploration or self-check aid, document why in `visualRules`, and test that both the live display and incorrect feedback follow that source posture.

## Student-Built Net Rule

When a source asks students to draw, assemble, test, or consider a net, distinguish a required construction from an optional reasoning strategy.

- If construction is required, begin with loose faces or a blank construction surface and grade the constructed net as its own source action target.
- If the source only suggests drawing a net when stuck, keep the builder optional and do not require it before the student can submit the source answer and reasoning.
- If that optional net is only a scratchpad for a separately graded calculation, provide loose source-dimension faces that can be dragged, rotated, overlapped, separated, and reset. Do not grade or correct the scratchpad arrangement.
- Never replace a blank or student-created net task with a completed app-added net. A finished net performs the face-selection and arrangement work for the student and can introduce false geometry.
- Generate rectangular faces from one shared dimension scale. Congruent faces must have identical dimensions and appearance, and every joined edge must have the same mathematical length on both faces.
- Let students choose face sizes, rotate them, and join them along complete matching edges. Provide selection, removal, reset, and keyboard-operable controls.
- When the net itself is a required response target, accept every valid arrangement supported by the solid rather than grading against one memorized layout.
- Only for a required or explicitly tested net, validate all of the following: exactly six faces, the complete required face inventory, no overlap, one connected arrangement, complete matching shared edges, consistent prism dimensions, and a fold topology that maps the faces to six different sides.
- Derive the face inventory from all three dimension pairs before merging identical sizes. For a prism with repeated dimensions, aggregate duplicates correctly; for example, a 2-by-2-by-1 prism needs two 2-by-2 square faces and four 2-by-1 rectangular faces, not two of each unique size.
- When the source requests another or different net for the same solid, preserve the first construction and compare canonical face-connection geometry. Translation, rotation, or reflection of the first arrangement is not a different net; require a genuinely different adjacency arrangement and tell the student when only the screen position or orientation changed.
- Keep dimensions readable on narrow or rotated faces without clipping. Use orientation-aware labels and verify selected-face outlines do not hide measurements.
- Do not claim a finished net came from the source when the source item is text-only. Record it as an app-provided construction workspace in the item audit.

For Playwright verification of a required net, construct at least one valid net that differs from any previously displayed static layout, test an invalid shared-edge or face-inventory attempt, and reset the workspace. If two different nets are requested, construct both, assert that both fold validly, assert that the second has a different canonical adjacency signature, and verify that a translated, rotated, or reflected duplicate is rejected. For an ungraded scratchpad, verify that each loose piece can be selected, dragged, keyboard-moved, rotated, overlapped, and reset without changing answer correctness. In both cases, inspect desktop and mobile screenshots for clipped labels, distorted proportions, overflow, and unusably small controls.

## Per-Choice Scratch-Note Rule

When students need to compare calculations for several answer choices, the app may place a compact optional scratch field beside each choice.

- Keep each scratch field visibly paired with its answer choice. Use a two-column row on wide screens and stack the choice above its field on narrow screens.
- Scratch notes are private working space, not answer controls. Accept arbitrary text, do not parse or validate it, and do not require mathematical keywords or a particular format.
- Limit each per-choice scratch field to 100 characters unless a future source task clearly requires more room.
- Typing in a scratch field must not select, deselect, or submit its neighboring choice.
- Preserve every scratch note while the student changes choices, submits, retries, or moves through a card rerender.
- Editing a scratch note after submission must not clear or change the answer verdict, progress, feedback, hint state, or sample state.
- Playwright checks must cover arbitrary text, the character limit, persistence across selection and submission, independence from answer selection, independence from grading, and mobile stacking without overflow.

## Every-Edge Labeling Rule

When the source asks students to label every edge of a net, preserve the exact solid and net and make every visible source edge segment independently selectable.

- Do not collapse the task into one answer per dimension family; the source action target is each visible edge segment.
- Store every edge endpoint and expected label explicitly against the natural-pixel crop, including shared boundaries that appear as one visible segment.
- Use a narrow, transparent hit corridor around each edge so adjacent or crossing targets do not steal one another's clicks.
- Keep assigned labels offset from the edge without covering source geometry, and show a reliable labeled-edge count.
- Verify first, middle, shared, slanted, and last edge targets independently at desktop and mobile sizes.

## Explicit Answer Plus Reasoning Rule

When a source prompt asks for a specific answer and an explanation, the app must provide separate controls for both parts.

- Do not collapse a concrete answer choice into a general reasoning textarea.
- If the prompt asks "greater than, less than, or equal to," provide comparison choices plus a reasoning textarea.
- If the prompt asks "yes or no" and "explain," provide a yes/no choice plus a reasoning textarea.
- If the prompt asks for a number, expression, unit, shape name, or selected statement and also asks students to explain, provide the exact answer control plus a separate reasoning field.
- Keep the answer control before the reasoning field so students first commit to the mathematical claim, then justify it.
- Preserve both source response targets in the interface, but let only the objectively gradable answer control determine correctness, progress, and answer-dependent unlocks. Treat any app validation of the explanation as advisory.
- Playwright checks should verify that the explicit answer controls render, the reasoning textarea renders, and a correct objective answer receives the correct verdict even when the explanation is blank or misses the app's writing check.

Example:

- If the source asks whether Figure A is greater than, less than, or equal to Figure B and then says "Explain your reasoning," the app should show three comparison choices and a reasoning textarea. A single textarea labeled "Your comparison and reasoning" is not enough.

## Writing Area Rule

Use the input size that matches what the student is expected to type.

- Use compact one-line inputs only for short values such as numbers, units, symbols, names, or brief labels.
- Use a textarea for any response that asks the student to explain, describe, tell why, show reasoning, record a comparison, write a sentence, or choose and justify a unit.
- Do not rely on a long placeholder as the instruction when the field is narrow. Put longer guidance as helper text or nearby instruction, and keep the placeholder short.
- Keep the long-answer prompt visually connected to its row label. Do not use equal-width columns that leave an empty-looking area before the prompt.
- A sentence/reasoning textarea should span enough width to write naturally and should be at least about two to three lines tall.
- During Playwright checks, verify both that placeholder text is not clipped and that sentence/reasoning fields are large enough for actual writing.

## Free-Text Checks Are Advisory

Never let prose validation decide a Practice card's correct/incorrect verdict, progress, sample unlock, follow-up unlock, or source access.

- Grade numeric, selected, matched, table, drawing, and construction controls independently from prose.
- Render prose results in a separate advisory panel after submission. State whether the response passed the app's limited writing check, disclose the checked criteria, and say that this does not change the answer verdict.
- A blank or rejected explanation cannot turn a correct objective answer into an incorrect one. A passing explanation cannot turn a wrong objective answer into a correct one.
- A task whose only response is free text must use neutral language such as `Response recorded`, never `Correct` or `Incorrect`. Its comparison sample may unlock after a response is recorded.
- Tests must cover correct objective plus failing prose, wrong objective plus passing prose, a neutral prose-only submission, and persistence of objective-dependent unlocks while prose is edited.

## Attempt History Readability Rule

Retry history is part of the student's feedback, so it must not hide important math information.

- Do not truncate saved-attempt summaries with ellipses when they contain expressions, labels, selected matches, measurements, or reasoning.
- Let attempt summaries wrap, or move the detailed summary onto its own line under compact metadata such as `Try 1` and `Needs another try`.
- Check both successful and unsuccessful attempts when feedback text can be long.
- During Playwright checks, verify attempt summary elements do not have clipped width or clipped height, and that long math labels are visible without hovering.

## Equation Blank Placement Rule

If a source blank is inside an equation, expression, comparison, or fraction, keep the app input inside that same mathematical structure.

- Do not move an equation blank into a separate answer column when the source shows the blank inline.
- Render the input exactly where the source blank appears, such as `2,000 = [input] x 20`.
- Keep equation pieces, operation symbols, and the inline input visually connected so the student reads one equation, not a label plus a disconnected answer field.
- Use a compact inline input for equation blanks instead of a full-width text field.
- Preserve enough horizontal space so the equation does not wrap awkwardly at normal card widths.
- If the equation is too wide for a narrow viewport, allow controlled horizontal scrolling or a deliberate responsive stack; do not let symbols, fractions, or inputs collide.
- During Playwright checks, inspect every row containing a source `___` blank and verify the input appears at the blank position.

## Table Completion Rule

If the source activity says to complete a table, the app should let the student type directly in the blank table cells.

- Do not render the table as a passive visual and then duplicate the same blanks as detached answer rows underneath.
- Each source blank cell should become one input in that exact cell.
- Filled source cells should stay plain and non-interactive.
- If a table row also asks for an explanation, pattern, or reasoning, keep that writing prompt below the table as a separate textarea.
- Preserve row and column headers so the student can read the input in context.
- After submit, show correct/incorrect feedback on the student-filled cells, not on source-filled cells.
- If a card generates a table from structured data such as `columns` and `knownRows`, build the answer inputs into the generated table instead of using a separate answer list.
- When mapping answer rows to table cells, use any filled source cell that identifies the row, not only measurement values. Row identifiers may be names, activities, counts, steps, labels, or mixed descriptors such as `5 steps`.
- If the source has table blanks plus separate non-table questions, move only the table answers into the cells. Keep separate prompts, such as sensible unit choices or explanations, outside the table.

During Playwright checks for table-completion cards:

- Count the source blank cells and assert the app has the same number of table-cell inputs.
- Assert mapped table-cell answers are not repeated as detached answer rows.
- Fill the table cells, submit, and verify feedback appears on the cells.
- Verify table-cell inputs fit inside the cell without clipped placeholders or overflow.

## Working Context And Usability Rules

Faithful content is not enough if the student has to scroll away from the data needed to answer.

For multi-part activities:

- Keep the facts, table, diagram, number line, or data set needed for the active question visible near the active workspace.
- Do not place a long source question list at the top and then repeat each question below. Use one clear active question at a time.
- Use tabs, segmented controls, or a similar switcher when several questions depend on the same context.
- Preserve the student's answers when switching between questions.
- Show concise completion indicators on the question switcher when a part has been attempted or answered.
- Keep shared context compact, such as a fact strip, mini table, or source diagram summary, so it can stay visible above each active question.
- If a question depends on previous answers, keep the needed prior result or visual visible in that question's workspace.
- If student-created figures must be compared, retain every inactive figure on the same coordinate system when practical, regardless of which figure is currently active. Style inactive figures as labeled, non-interactive reference layers, preserve their student-entered measurements nearby, and reserve handles, hit targets, and keyboard movement for the active figure only. Test switching in both directions.
- When sibling constructions use different coordinate systems or object types, show compact labeled snapshots of correctly completed siblings beside the active workspace instead of forcing incompatible shapes onto one coordinate system. Snapshots must preserve the student's actual saved geometry, contain no editing controls, and appear after switching forward or backward.
- Prefer one focused workspace over a tall stack of all parts when stacking would push important data out of view.
- When separate canonical Practice items from one lesson are grouped into one lesson card, mount only the active item's visual workspace. Switching parts must replace the visual and response panel without changing the part-control position, and returning to a part must restore its prior interactive state.

## Responsive Interaction Layout Rule

Do not preserve side-by-side worksheet layout when it makes the app card cramped or hard to use.

For repeated panels such as Partner A / Partner B, Student A / Student B, or multiple diagrams:

- Stack panels vertically when each panel contains its own number line, table, grid, or answer controls.
- Use tabs or switchers when panels are alternatives and the student only needs one active panel at a time.
- Keep side-by-side layout only when each panel remains readable and every control has enough room.
- Buttons must not wrap awkwardly, overflow their card, overlap other text, or become too narrow for their labels.
- Color, spacing, and labels should make nearby number-line zones visually distinct.
- For one-student app use, do not keep "partner" materials side by side unless comparison is the actual math goal.

During Playwright verification, check:

- repeated panels do not overflow their container;
- answer buttons stay inside their row or card;
- labels do not overlap;
- each button's `scrollWidth` and `scrollHeight` fit inside its visible box;
- screenshots are inspected at the same viewport where the student will use the app.

## Line Visual Label Readability Rule

Treat number lines, line plots, coordinate axes, tape-diagram scales, and any tick-marked track as the same family of line visuals for label readability checks.

For every line visual with tick labels, benchmark labels, point labels, or axis labels:

- Keep the tick mark, plotted point, and text label as separate visual elements when the label can be multi-line or stacked.
- Do not put a stacked fraction, mixed number, or long label inside the same cramped flow box as the tick mark.
- Give fraction and mixed-number labels their own readable lane above or below the line.
- Ensure labels do not collide with the line, tick marks, plotted dots, X marks, axis captions, buttons, or input rows.
- Use enough vertical space for the tallest expected label, including values such as `1 3/4`, `5/2`, `19/17`, or `2 1/8`.
- Include line plots in this audit. Do not only check components named "number line."
- If the same data appears in a table and a line plot, verify both render correctly; readable table fractions do not prove the plot labels are readable.

During Playwright verification for line visuals:

- Locate every `.frac` or mixed-number label rendered on or near the line visual.
- Assert each fraction label is outside the line/tick collision zone, usually with its top below the track bottom or its bottom above the track top by a visible gap.
- Assert each label's `scrollWidth` fits inside its visible width and `scrollHeight` fits inside its visible height.
- Assert the label does not overlap adjacent labels, plotted points, X marks, or answer controls.
- Save or inspect a screenshot of the whole line visual, not only the card header or first visible row.

Examples of covered components:

- number-line benchmark labels such as `5/2`;
- source number-line labels such as `19/17`;
- line-plot tick labels such as `1 3/4`, `1 7/8`, and `2 1/2`.

## Multi-Part Instruction Scope Rule

For cards with tabs, switchers, or multiple question parts:

- Do not put part-specific instructions in the shared card header.
- Shared header text must apply correctly to every part.
- If an instruction only applies to some parts, render it inside those parts or make the shared header instruction change with the active part.
- Review every visible sibling tab and its accessible name from every active part. A follow-up tab must remain answer-neutral when the card can be opened directly on that part; do not name a classified solid, computed relationship, or corrected result that another part asks the student to determine.
- Verify each tab or part shows only the instructions needed for that part.
- During Playwright checks, switch through every tab or part and assert the visible instruction text changes appropriately.

Example:

If Q4 and Q5 use a source number line, but Q1-Q3 only use runner facts, this instruction must not appear for Q1-Q3:

> Point P is Priya's distance. Compare each factor to 1, then use the source number line.

It should appear only on Q4/Q5, or the shared caption should change by active tab.

## Hidden Multi-Part Card Rule

A card can be multi-part even if the first implementation does not use tabs yet.

Before rendering a shared caption, header, visual, feedback panel, or answer area, check whether the source contains more than one distinct student task.

Split the card into tabs, segmented controls, or active workspaces when:

- one part uses comparison rows, blanks, expressions, or table entries;
- another part uses a number line, diagram, table, graph, or different visual evidence;
- a sentence such as "use the number line" applies to only some rows, choices, blanks, or questions;
- the source has numbered questions that depend on different data or different visual objects;
- the card combines different actions, such as "complete these statements" and "identify which expression could match this point."

Shared text may only say something that is true for every part. If a sentence applies only to one part, it must live inside that part's tab or active workspace.

When splitting a hidden multi-part card:

- Q1 must not show Q2-only diagrams, captions, hints, reasoning prompts, or feedback.
- Q2 must not show Q1-only rows unless they are needed context.
- Submit, progress, "answered," and completion state must be scoped per part.
- The whole card counts complete only when all required parts are complete.
- Preserved answers must remain visible when switching away and back.
- Playwright must click through every tab or active part and assert that part-specific text appears only in the correct part.

Example:

If a checkpoint has:

1. comparison statements `1a`, `1b`, and `1c`
2. a number-line question about point `Q`

Do not put "Q is to the right of 19/17" in the shared caption. Use tabs or active workspaces:

- Q1 Compare: show only the comparison statements.
- Q2 Find Q: show the number line and Q choices.

The Q-specific sentence belongs only in Q2.

Before calling a multi-part card usable, perform a scroll check:

> Can the student answer the active question while still seeing the facts or visual information needed for that question?

If not, reorganize the card before considering the interaction complete.

## Avoid Native Select Controls

Do not use browser-native `<select>` controls for practice-card interactions.

Use app-styled custom pickers, chips, segmented controls, menus, or buttons instead, even for simple text-only options. Native selects are difficult to style consistently, can render differently across browsers and operating systems, and often look out of place inside visual math cards.

For math-expression choices, a custom picker should:

- Start blank when no answer is selected.
- Show the selected expression inline and readable.
- Render fractions, mixed numbers, symbols, and equations with the app's math formatting.
- Open a styled menu/list of choices.
- Support mouse and keyboard use.
- Disable choices already used within the same match group.
- Allow reuse across different representation groups when mathematically appropriate.
- Use clear ARIA labels and expanded/pressed states.

For simple choices such as `<`, `>`, short labels, or lesson-card options, still use a custom control instead of a native select.

When a custom picker shows math, keep the picker chrome separate from the math markup:

- Use a dedicated value wrapper and a separate caret/icon element.
- Do not use broad selectors such as `.picker span` or `.button span` because they can restyle nested fraction spans and flatten `2/7` into broken text like `2 7 x 3`.
- Style only direct structural classes such as `.picker-value` and `.picker-caret`.
- Leave nested `.frac`, `sup`, mixed-number, and equation spans controlled by the shared math styles.
- Give the value area enough right-side space so placeholder text such as `Choose expression` never overlaps the caret.
- Verify both the blank placeholder state and the selected-expression state.

## Queue Processing And Anti-Hang Rules

When checking many practice cards in sequence, keep the workflow bounded and card-focused.

Before starting a queue, record:

- Total card count.
- Card ids in order.
- Cards explicitly excluded.
- Current resume point.

Process exactly one card at a time:

- Inspect the rendered source page.
- Inspect the app card.
- Identify correctness and usability issues.
- Patch only that card or the shared renderer code needed for that card.
- Report what changed for that card.
- Mark the card complete.
- Move to the next card.

Every progress report should include a resume marker:

- Last completed card id.
- Next card id.
- Number of cards remaining.

After the final queued card is complete, stop card processing immediately. Do not start broad cleanup, broad diffing, unrelated audits, or exploratory commands unless the user asked for them.

All verification must be bounded:

- Use targeted syntax checks.
- Use targeted Playwright checks for changed cards.
- Avoid broad commands with huge output.
- Avoid commands that can wait indefinitely.
- Stop and report if a verification step exceeds a reasonable time.

If a tool hangs or output becomes noisy:

- Stop the tool if possible.
- Report the last completed card.
- Report the next unprocessed card.
- Do not keep issuing unrelated diagnostic commands.

Do not use `git diff` as a default final step unless the workspace is confirmed to be a git repository. If it is not a git repository, skip diff summary and summarize changed files from the work performed.

Playwright checks should be specific:

- Open the topic or practice page.
- Locate the changed card ids.
- Verify expected text and key interactions.
- Take screenshots only for changed cards when useful.
- Close the browser and any local server afterward.

## Visual Verification Checklist

Before calling a card complete:

- The full original problem statement is represented.
- All required diagrams or visual objects are present.
- The diagram layout matches the source closely enough for the student to recognize the task.
- Expression choices, labels, fractions, mixed numbers, and equations render as readable math, not broken stacked fragments.
- Text and math inside chips, buttons, custom pickers, menus, and cards stay within their containers.
- Inline expressions stay inline unless the source intentionally stacks them.
- The app does not reveal the answer too early.
- Any answer feedback appears only after submit.
- The correct/incorrect feedback explains the math, not just the result.
- The implemented visual can be traced back to a specific source object.
- Every countable source object has been enumerated from the final displayed visual, and those counts agree with the alternative text, `visualRules.sourceObjects`, answer key, hints, samples, and feedback. Recalculate the answer from those verified counts; do not inherit counts from an earlier crop, approximation, or draft.

## Required Playwright Verification

After implementing or changing an interactive practice card, test it with Playwright.

The test must navigate through the real app UI, not just load an isolated component:

1. Select the correct global unit focus.
2. Open the correct topic.
3. Switch to the correct mode, such as Practice.
4. Use lesson or section filters if needed.
5. Locate the exact practice card by id or visible title.

The Playwright test should verify:

- The card appears in the expected topic, unit, and lesson.
- The source action target count matches the app target count.
- No answer-revealing text appears before submit.
- Required interactions work, such as custom pickers, dragging, clicking, shading, typing, or submitting.
- Correct and incorrect submissions produce the expected feedback.
- For auto-graded cards, an incorrect submission does not reveal `sampleAnswer` and does not enable the sample button.
- For auto-graded cards, the sample button unlocks only after a correct submission.
- For answer-bearing source pages, an incorrect submission keeps `Source p.x` locked and does not render the source modal trigger.
- For answer-bearing source pages, the `Source p.x` modal opens only after the unlock condition is met.
- If an answer is edited after a sample or source modal has unlocked, the test confirms the sample/source reveal state resets.
- Each card has at most one source-opening control for a given source page.
- Expressions, fractions, and equations are readable and not broken by layout.
- Multi-part cards keep the active question and its required data visible together, usually by testing each tab or active part.
- Duplicated source question lists are absent when the same questions are presented as active tabs or workspaces.
- A screenshot is saved for visual inspection.

Playwright passing is not enough by itself. The saved screenshot must be inspected against the rendered source page.

## Math Layout Checks

For cards that display expression choices, fractions, mixed numbers, equations, or labels:

- Use `×` for multiplication in student-facing text, hints, samples, equation readouts, and SVG labels.
- Do not use a period or dot for multiplication, because it can be confused with a decimal point.
- Keep decimal points only inside decimal numbers such as `7.5`, `1.5`, or `0.5`.
- Keep variables such as `x` only when the source uses `x` as a variable, not as a multiplication sign.
- Check that each expression reads naturally left-to-right.
- Check that multiplication signs and following factors do not wrap under a fraction unless that is intentional.
- Check that fractions are not turned into oversized chips or mini cards.
- Check that custom picker options, selected values, and feedback summaries use readable math formatting.
- Check that custom picker placeholder text does not overlap the caret/icon.
- Check that custom picker selected values preserve stacked fractions and do not flatten internal fraction spans.
- Check that expression-bank chips have reasonable height and width.
- Check that long labels wrap as phrases, not in the middle of mathematical notation.

For Playwright, add at least one layout guard when math choices are shown in chips or buttons:

- Assert each expression choice is visible.
- Assert each expression chip has a reasonable height.
- Assert the rendered text or accessible label contains the full intended expression.
- Save a screenshot after the card first renders, after a picker/menu opens, after an expression is selected, and after submit.

Example failure this should catch:

> A choice intended to read `2/7 x 3` renders as a tall fraction card with `x 3` underneath it.

## Required Implementation Note

Before implementing a visual practice card, write or mentally confirm this sentence:

"This app diagram corresponds to original source page X, activity Y, visual Z, and it represents ___ because ___."

If that sentence cannot be stated confidently, stop and inspect the rendered source again before coding.

## Failure Pattern To Avoid

Do not infer structure from the answer choices alone.

For example, if a worksheet shows four number lines and four rectangles, do not automatically combine them into four app diagrams unless the source clearly pairs each number line with each rectangle. First verify the row structure, positions, labels, and mathematical meaning.

## When Unsure

If a visual mapping is uncertain:

- Render the source page again.
- Compare against the screenshot or PDF.
- Keep the source visuals separate.
- Add a note explaining the uncertainty.
- Ask for clarification only if the source cannot be interpreted from the rendered material.
