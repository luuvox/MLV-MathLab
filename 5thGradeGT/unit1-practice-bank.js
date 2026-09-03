window.unit1PracticeBank = [
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-square-cover-comparison",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "1",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Compare the area covered by different-size squares",
    "activityForm": "single-choice visual comparison with optional measurement annotation and reasoning",
    "prompt": "Which square - large, medium, or small - covers more of the plane? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "large",
        "label": "Large squares"
      },
      {
        "id": "medium",
        "label": "Medium squares"
      },
      {
        "id": "small",
        "label": "Small squares"
      }
    ],
    "answerKey": [
      "large"
    ],
    "reasoningPrompt": "Explain how you compared the total area covered by each size of square.",
    "reasoningRequired": false,
    "missingFeedback": "Choose the square size that covers the greatest total area.",
    "correctFeedback": "Correct. Using a small square as 1 area unit, the 5 large squares cover 5 x 9 = 45 units, the 10 medium squares cover 10 x 4 = 40 units, and the 10 small squares cover 10 x 1 = 10 units. The large squares cover the most area.",
    "incorrectFeedback": "Not quite. Compare total covered area, not just the size of one square. Count each size and express every square's area in the same small-square unit.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-01-square-cover-pattern.png",
      "alt": "The exact source pattern containing five large white squares, ten medium green squares, and ten small yellow squares.",
      "naturalWidth": 700,
      "naturalHeight": 515,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 45,
        "originY": 26,
        "cellX": 40.2,
        "cellY": 40.2,
        "columns": 15,
        "rows": 11
      },
      "annotationTools": [
        "line",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 515,
      "annotationInstructions": "Use Line to compare side lengths or Square to trace and compare the three square sizes. Drag between aligned corners. These annotations are optional scratch work and do not affect your submitted answer."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one comparison choice and one available explanation field",
      "sourceObjects": [
        "five large white squares",
        "ten medium green squares",
        "ten small yellow squares"
      ],
      "notes": "Preserves source Problem 1 and uses a high-resolution visual-only crop of the exact square pattern. An optional line-and-square annotation layer is calibrated to the smallest-square lattice so students can compare side lengths and areas without changing the graded choice. The explanation remains available but optional because the app does not reject mathematically valid prose it cannot reliably parse."
    },
    "hints": [
      "Use the smallest square as one area unit.",
      "A medium square covers 4 small-square units, and a large square covers 9 small-square units."
    ],
    "sampleAnswer": "The large squares cover the most. The 5 large squares cover 5 x 9 = 45 small-square units, the 10 medium squares cover 10 x 4 = 40, and the 10 small squares cover 10 x 1 = 10.",
    "implementationNotes": "Directly adapted from Lesson 1 cumulative practice, Problem 1. The exact visual is cropped from the cited PDF; the source prompt is app-rendered text. Optional calibrated line and square annotations support measurement and comparison without affecting grading.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-three-area-12-quadrilaterals",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "2",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Draw three different quadrilaterals with area 12",
    "activityForm": "three independently checked grid constructions",
    "prompt": "Draw three different quadrilaterals, each with an area of 12 square units.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 16,
      "rows": 10,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "retainInactiveDrawings": true,
      "retainCompletedDrawingsOnly": true
    },
    "missingFeedback": "Complete and check all three quadrilateral drawings.",
    "correctFeedback": "Correct. All three drawings are different simple quadrilaterals, and each has area 12 square units.",
    "incorrectFeedback": "One or more drawings still needs revision. Each drawing must have four vertices, no crossing sides, area 12 square units, and a shape different from the other two.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "each independently saved and checked area-12 quadrilateral",
      "sourceObjects": [
        "one square grid",
        "three different student-drawn quadrilaterals"
      ],
      "notes": "Recreates the source grid as an interactive point-construction workspace. It saves three drawings, checks each target independently, and compares shapes up to translation, rotation, and reflection so repositioning one shape does not count as a different quadrilateral."
    },
    "hints": [
      "A 3-by-4 rectangle has area 12, but your other two quadrilaterals must have different outlines.",
      "For a slanted shape, enclose it in a rectangle and subtract the corner regions."
    ],
    "sampleAnswer": "Examples include a 3-by-4 rectangle, a parallelogram with base 4 and height 3, and a different four-sided shape whose decomposed parts total 12 square units.",
    "implementationNotes": "Directly adapts Lesson 1 cumulative practice, Problem 2, with three persistent, independently validated grid drawings instead of one representative construction.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-tiles-plane",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "sourceItem": "Problem 3a",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "3a",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Use rectangle copies to tile a region",
    "activityForm": "interactive rectangle-copy tiling construction",
    "prompt": "Use copies of the 3-by-2 rectangle to show how a rectangle could tile the plane.",
    "responseType": "rectangleTiling",
    "tilingGoal": "cover",
    "answerKey": [],
    "visualModelData": {
      "type": "rectangleTiling",
      "columns": 9,
      "rows": 6,
      "pieceWidth": 3,
      "pieceHeight": 2
    },
    "missingFeedback": "Place rectangle copies in the sample window before submitting.",
    "correctFeedback": "Correct. The rectangle copies cover the entire sample window with no gaps or overlaps, so the arrangement can repeat to tile the plane.",
    "incorrectFeedback": "Keep arranging copies until every square in the sample window is covered exactly once. Rotate a copy when that helps continue the repeating pattern.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one constructed repeating region fully covered by copies of the source 3-by-2 rectangle",
      "sourceObjects": [
        "3-by-2 rectangle copies",
        "square-grid tiling region"
      ],
      "notes": "Turns source Problem 3a into a local construction. A completely covered 9-by-6 window is a finite, inspectable sample of a gap-free repeating tiling."
    },
    "hints": [
      "Try keeping every copy horizontal first.",
      "A 9-by-6 window can be filled by rows of 3-by-2 rectangles."
    ],
    "sampleAnswer": "Three horizontal rectangles fit across each row band, and three row bands fill the 9-by-6 window without gaps or overlaps.",
    "implementationNotes": "Directly adapts Lesson 1 cumulative practice, Problem 3a, as a rectangle-copy placement workspace.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-does-not-tile-plane",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "sourceItem": "Problem 3b",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "3b",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Arrange rectangle copies so they do not tile a region",
    "activityForm": "interactive rectangle-copy non-tiling construction",
    "prompt": "Use copies of the 3-by-2 rectangle to show how a rectangle could not tile the plane.",
    "responseType": "rectangleTiling",
    "tilingGoal": "gap",
    "answerKey": [],
    "visualModelData": {
      "type": "rectangleTiling",
      "columns": 9,
      "rows": 6,
      "pieceWidth": 3,
      "pieceHeight": 2
    },
    "missingFeedback": "Place at least four non-overlapping rectangle copies before submitting.",
    "correctFeedback": "Correct. The copies surround uncovered squares inside their arrangement. Repeating this arrangement preserves a gap, so this particular arrangement does not tile the plane.",
    "incorrectFeedback": "Make one connected-looking arrangement of at least four non-overlapping copies that leaves an uncovered square inside the arrangement's outer bounding rectangle.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one rectangle-copy arrangement with an enclosed gap and no overlaps",
      "sourceObjects": [
        "3-by-2 rectangle copies",
        "square-grid construction region",
        "an intentional uncovered gap"
      ],
      "notes": "Turns source Problem 3b into a checkable construction by requiring a non-overlapping arrangement whose bounding rectangle contains an uncovered square. This checks the student's particular non-tiling arrangement, not a claim that rectangles can never tile."
    },
    "hints": [
      "Use both horizontal and vertical copies.",
      "Arrange copies around at least one uncovered grid square rather than leaving all empty space outside the group."
    ],
    "sampleAnswer": "A valid response places at least four copies around an interior uncovered square, with no two copies overlapping.",
    "implementationNotes": "Directly adapts Lesson 1 cumulative practice, Problem 3b, while making clear that the app checks one non-tiling arrangement rather than the rectangle's overall ability to tile.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-area-meaning-statements",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "4",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Use valid area reasoning",
    "activityForm": "multi-select reasoning",
    "prompt": "The area of this shape is 24 square units. Which statements are true about the area? Select all that apply.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "edgeCount",
        "label": "The area can be found by counting the squares that touch the edge of the shape."
      },
      {
        "id": "cover24",
        "label": "It takes 24 grid squares to cover the shape without gaps and overlaps."
      },
      {
        "id": "outerRectangle",
        "label": "The area can be found by multiplying the side lengths that are 6 units and 4 units."
      },
      {
        "id": "countInside",
        "label": "The area can be found by counting the grid squares inside the shape."
      },
      {
        "id": "addParts",
        "label": "The area can be found by adding 4 × 3 and 6 × 2."
      }
    ],
    "answerKey": [
      "cover24",
      "countInside",
      "addParts"
    ],
    "missingFeedback": "Select at least one statement before submitting.",
    "correctFeedback": "Correct. The shape is covered by 24 unit squares. Counting the squares inside gives 24, and decomposing it into a 4-by-3 rectangle and a 6-by-2 rectangle gives 12 + 12 = 24.",
    "incorrectFeedback": "Not quite. Area counts unit squares inside the boundary. Test each statement by asking whether it counts or decomposes all of the interior exactly once, without gaps or overlaps.",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-01-area-meaning-diagram.png",
      "alt": "The exact source grid diagram of a stepped polygon with side lengths 4, 3, 2, and 6.",
      "naturalWidth": 620,
      "naturalHeight": 555
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 5,
      "appActionTargets": 5,
      "unitOfAction": "each statement A-E about the displayed area model",
      "sourceObjects": [
        "one grid polygon with side lengths 2, 3, 4, and 6",
        "five true-or-false area statements"
      ],
      "notes": "Preserves the source's five-option select-all task and uses a high-resolution visual-only crop of the exact stepped grid polygon."
    },
    "hints": [
      "Area counts the space covered inside the boundary.",
      "Multiplying two labeled lengths only works when they describe a matching rectangle or valid decomposition."
    ],
    "sampleAnswer": "The shape can be covered by 24 unit squares, counted inside, or decomposed into rectangles with areas 4 × 3 and 6 × 2.",
    "implementationNotes": "Directly adapted from Lesson 1 cumulative practice, problem 4. The grid polygon is an exact visual-only crop from the cited PDF page.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-two-area-strategies",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "5",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-003.png",
    "skill": "Show two different ways to find the same area",
    "activityForm": "two independently checked area strategies with annotation",
    "prompt": "Here are two copies of the same figure. Show two different ways for finding the area of the shaded region. All angles are right angles.",
    "responseType": "areaStrategyPair",
    "answerKey": [],
    "strategyChoices": [
      {
        "id": "decompose",
        "label": "Decompose the figure and add the parts"
      },
      {
        "id": "enclose",
        "label": "Enclose the figure and subtract missing parts"
      }
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-01-two-area-strategies.png",
      "alt": "Two exact source copies of the same stepped shaded figure with side lengths 10, 3, 5, 2, 3, 1, 2, and 6.",
      "naturalWidth": 1325,
      "naturalHeight": 470,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 25,
        "cellY": 25,
        "columns": 53,
        "rows": 18
      },
      "annotationTools": [
        "line",
        "rectangle",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 430
    },
    "missingFeedback": "Complete and check both different area strategies.",
    "correctFeedback": "Correct. Both methods give 42 square units, and the two checked methods use different valid strategies.",
    "incorrectFeedback": "Revise the active method. Its area must be 42 square units, and the two completed methods must use different strategies.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "each independently submitted method for one of the two exact source copies",
      "sourceObjects": [
        "two identical stepped shaded figures",
        "all source side labels and right-angle markers",
        "two distinct area strategies"
      ],
      "notes": "Uses a high-resolution visual-only crop of both exact source figures. The app provides annotation tools plus two independently checked strategy-and-area responses, preserving the source requirement to show two different methods."
    },
    "hints": [
      "One method can split the shape into rectangles and add their areas.",
      "A different method can begin with a 10-by-6 rectangle and subtract the missing rectangles."
    ],
    "sampleAnswer": "Method 1: 10 x 3 + 5 x 2 + 2 x 1 = 42. Method 2: 10 x 6 - 5 x 3 - 3 x 1 = 42 square units.",
    "implementationNotes": "Directly adapts Lesson 1 cumulative practice, Problem 5, with the exact two source figures, optional planning annotations, and two independently validated methods.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-fractional-area-comparison",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 1,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-1-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-1-practice",
    "practiceLessonTitle": "Tiling the Plane",
    "practicePartLabel": "6",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-003.png",
    "skill": "Compare fractional areas of a rectangle and square",
    "activityForm": "two area calculations and one comparison",
    "prompt": "Which shape has a larger area: a rectangle that is 7 inches by 3/4 inch, or a square with side length 2 1/2 inches? Show your reasoning.",
    "responseType": "areaComparison",
    "answerKey": [],
    "visualModelData": {
      "type": "areaComparisonShapes"
    },
    "missingFeedback": "Enter both areas and choose which shape has the larger area.",
    "correctFeedback": "Correct. The rectangle's area is 7 x 3/4 = 21/4 = 5 1/4 square inches. The square's area is 2 1/2 x 2 1/2 = 25/4 = 6 1/4 square inches, so the square is larger by 1 square inch.",
    "incorrectFeedback": "Recheck both products using square inches, then compare them. The rectangle uses 7 x 3/4; the square uses 2 1/2 x 2 1/2.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "rectangle area, square area, and larger-shape comparison",
      "sourceObjects": [
        "7-inch by 3/4-inch rectangle",
        "square with side length 2 1/2 inches",
        "area comparison"
      ],
      "notes": "Preserves all source quantities and turns the requested reasoning into two independently visible calculations plus the final comparison, avoiding fragile free-text grading."
    },
    "hints": [
      "Multiply 7 by 3/4 for the rectangle.",
      "Multiply 2 1/2 by itself for the square, then compare the two areas."
    ],
    "sampleAnswer": "Rectangle: 7 x 3/4 = 5 1/4 square inches. Square: 2 1/2 x 2 1/2 = 6 1/4 square inches. The square is larger by 1 square inch.",
    "implementationNotes": "Directly adapts Lesson 1 cumulative practice, Problem 6, with app-rendered dimensions and structured, meaningfully validated reasoning fields.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-diagonal-rectangle-recompose",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 2,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-2-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-2-practice",
    "practiceLessonTitle": "Finding Area by Decomposing and Rearranging",
    "practicePartLabel": "1",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Decompose, rearrange, and compare areas",
    "activityForm": "two-piece recomposition workspace and area comparison",
    "prompt": "The diagonal of a 3-by-2 rectangle is shown. Decompose the rectangle along the diagonal and recompose the two pieces to make a different shape. Then compare the area of the new shape with the area of the original rectangle.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "greater",
        "label": "The new shape has greater area."
      },
      {
        "id": "same",
        "label": "The new shape has the same area."
      },
      {
        "id": "less",
        "label": "The new shape has less area."
      }
    ],
    "answerKey": [
      "same"
    ],
    "requiresCompositionJoin": true,
    "requiredCompositionSide": "leg",
    "reasoningPrompt": "Optional: Explain how the two pieces support your comparison.",
    "reasoningRequired": false,
    "missingFeedback": "Join the two pieces into a new shape and choose an area comparison.",
    "correctFeedback": "Correct. Both the rectangle and the new shape are composed of the same two triangles. Rearranging the pieces changes the outline but does not change their total area of 6 square units.",
    "incorrectFeedback": "Use both triangle pieces to make one joined shape, then track the pieces: no area is added or removed when the two original pieces are rearranged.",
    "visualModelData": {
      "type": "triangleComposition",
      "workspaceVariant": "diagonalRectangle",
      "alt": "A 3-by-2 rectangle split along its diagonal and two movable copies of the resulting right triangle.",
      "direction": "Use both pieces to compose one different shape. Select a piece, then drag it or use the arrow keys. Rotate a selected piece to test complete-side joins.",
      "sourceNote": "The starting diagram and movable pieces use the exact 3-by-2 proportions from the source.",
      "sourceRectangle": {
        "widthUnits": 3,
        "heightUnits": 2
      },
      "pieceLabels": [
        "1",
        "2"
      ],
      "compositionGeometry": {
        "width": 180,
        "height": 120,
        "centerX": 90,
        "centerY": 60,
        "points": "0,0 180,0 180,120",
        "vertices": [
          [
            0,
            0
          ],
          [
            180,
            0
          ],
          [
            180,
            120
          ]
        ],
        "edges": [
          {
            "id": "long-leg",
            "kind": "leg",
            "vertices": [
              0,
              1
            ]
          },
          {
            "id": "short-leg",
            "kind": "leg",
            "vertices": [
              1,
              2
            ]
          },
          {
            "id": "hypotenuse",
            "kind": "hypotenuse",
            "vertices": [
              2,
              0
            ]
          }
        ],
        "boundSize": 180,
        "initialPieces": {
          "copy-a": {
            "x": 105,
            "y": 110,
            "angle": 0
          },
          "copy-b": {
            "x": 435,
            "y": 110,
            "angle": 0
          }
        }
      }
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one two-piece recomposition and one area comparison",
      "sourceObjects": [
        "3-by-2 rectangle on a square grid",
        "diagonal cut",
        "two resulting right triangles"
      ],
      "notes": "Recreates the source's exact 3-by-2 geometry as a local movable two-piece workspace. Submission requires the two pieces to share a complete matching edge, while the comparison is checked independently of optional prose."
    },
    "hints": [
      "Join one complete side of a triangle to a matching side of the other triangle.",
      "The new shape still contains exactly the same two pieces as the original rectangle."
    ],
    "sampleAnswer": "The areas are the same because both shapes are composed of the same two triangles. The original rectangle has area 3 x 2 = 6 square units.",
    "implementationNotes": "Directly adapts Lesson 2 cumulative practice, Problem 1. The construction uses app-rendered source geometry because the pieces must remain movable.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-area-half-units",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 2,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-2-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-2-practice",
    "practiceLessonTitle": "Finding Area by Decomposing and Rearranging",
    "practicePartLabel": "2",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Compare area after rearranging pieces",
    "activityForm": "single choice visual reasoning",
    "prompt": "Priya decomposed a square into 16 smaller, equal-size squares, then cut out 4 of the small squares and attached them around the outside of the original square to make a new figure. How does the area of her new figure compare with that of the original square?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "greater",
        "label": "The area of the new figure is greater."
      },
      {
        "id": "same",
        "label": "The two figures have the same area."
      },
      {
        "id": "originalGreater",
        "label": "The area of the original square is greater."
      },
      {
        "id": "notEnough",
        "label": "We do not know because neither the side length nor the area of the original square is known."
      }
    ],
    "answerKey": [
      "same"
    ],
    "missingFeedback": "Choose one area comparison before submitting.",
    "correctFeedback": "Correct. The new figure uses the same 16 equal-size squares. Four squares were moved, not added or removed, so the two figures have the same area.",
    "incorrectFeedback": "Not quite. Track the pieces rather than the outline: the construction cuts out four equal squares and reattaches those same four squares, so no square is added or removed.",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-02-rearranged-square-diagram.png",
      "alt": "The exact source diagrams of an original 4-by-4 square and a new figure made by moving four equal squares outside.",
      "naturalWidth": 1050,
      "naturalHeight": 575
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "one selected comparison statement about the two displayed figures",
      "sourceObjects": [
        "original 4-by-4 square",
        "new figure made by moving 4 equal squares to the outside",
        "four comparison statements"
      ],
      "notes": "Preserves Lesson 2 practice problem 2 with the same four answer choices and a high-resolution visual-only crop of the exact two source figures."
    },
    "hints": [
      "No pieces are added or removed.",
      "The 4 small squares are moved, so the total covered area stays the same."
    ],
    "sampleAnswer": "The two figures have the same area because the new figure uses the same 16 equal-size squares as the original square.",
    "implementationNotes": "Replaced an inspired numeric area card with the exact Lesson 2 visual comparison action and source-derived figure crop.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-area-one-and-half-figures",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 2,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-2-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-2-practice",
    "practiceLessonTitle": "Finding Area by Decomposing and Rearranging",
    "practicePartLabel": "3",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Compare composed figures using a unit square and half-square triangles",
    "activityForm": "source-faithful multi-select visual comparison",
    "prompt": "The area of the square is 1 square unit. Two small triangles can be put together to make a square or a medium triangle. Which figures also have an area of 1 1/2 square units? Select all that apply.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "a",
        "label": "Figure A"
      },
      {
        "id": "b",
        "label": "Figure B"
      },
      {
        "id": "c",
        "label": "Figure C"
      },
      {
        "id": "d",
        "label": "Figure D"
      }
    ],
    "answerKey": [
      "a",
      "b",
      "c"
    ],
    "missingFeedback": "Select every figure you think has an area of 1 1/2 square units.",
    "correctFeedback": "Correct. A small triangle has area 1/2 square unit, and the medium triangle has area 1 square unit. Figures A, B, and C can each be decomposed or rearranged into 1 1/2 square units; Figure D has more area.",
    "incorrectFeedback": "Not quite. Use the small triangle as 1/2 square unit and the medium triangle as 1 square unit. Decompose or rearrange each labeled figure into those reference pieces.",
    "visualModelData": {
      "type": "sourceVisualGallery",
      "showAll": true,
      "figures": [
        {
          "id": "reference",
          "label": "Area reference pieces",
          "imagePath": "artifacts/unit 1/_practice-crops/lesson-02-area-one-and-half-reference.png",
          "alt": "The exact source unit square, small triangle, and medium triangle.",
          "naturalWidth": 450,
          "naturalHeight": 105
        },
        {
          "id": "figures",
          "label": "Figures A-D",
          "imagePath": "artifacts/unit 1/_practice-crops/lesson-02-area-one-and-half-figures.png",
          "alt": "The exact source figures A, B, C, and D composed from triangular and square pieces.",
          "naturalWidth": 545,
          "naturalHeight": 270
        }
      ]
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "each source Figure A-D considered in one select-all response",
      "sourceObjects": [
        "unit square",
        "small triangle",
        "medium triangle",
        "Figures A-D with all internal boundaries"
      ],
      "notes": "Uses two visual-only crops so the exact source reference pieces and Figures A-D stay visible without cropping PDF prompt or answer text into the card."
    },
    "hints": [
      "Two small triangles cover 1 square unit, so one small triangle covers 1/2 square unit.",
      "Try to see three small-triangle units, or one medium triangle plus one small triangle, in each figure."
    ],
    "sampleAnswer": "Figures A, B, and C. Each has the same area as three small triangles, which is 3 x 1/2 = 1 1/2 square units.",
    "implementationNotes": "Directly adapts Lesson 2 cumulative practice, Problem 3, with exact visual-only crops and all four source choices.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-playground-width",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 2,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-2-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-2-practice",
    "practiceLessonTitle": "Finding Area by Decomposing and Rearranging",
    "practicePartLabel": "4",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Find a missing rectangle dimension from area",
    "activityForm": "numeric missing-dimension response",
    "prompt": "The area of a rectangular playground is 78 square meters. If the length of the playground is 13 meters, what is its width?",
    "responseType": "number",
    "answerKey": [
      "6"
    ],
    "missingFeedback": "Enter the playground width in meters.",
    "correctFeedback": "Correct. Since 13 x 6 = 78, the playground is 6 meters wide.",
    "incorrectFeedback": "Not quite. Find the missing factor in 13 x width = 78, or divide 78 by 13.",
    "visualModelData": {
      "type": "rectangleMissingDimension",
      "length": 13,
      "area": 78,
      "unit": "meters"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric playground width",
      "sourceObjects": [
        "rectangular playground with area 78 square meters and length 13 meters"
      ],
      "notes": "The source is text-only. The app adds a clearly labeled rectangle scaffold without supplying the missing width; all quantities come directly from the source prompt."
    },
    "hints": [
      "Use area = length x width.",
      "Solve 13 x width = 78."
    ],
    "sampleAnswer": "78 / 13 = 6, so the width is 6 meters.",
    "implementationNotes": "Directly adapts Lesson 2 cumulative practice, Problem 4. The app-added rectangle is a non-answer-bearing scaffold for the source quantities.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-irregular-area-reasoning",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 2,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-2-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-2-practice",
    "practiceLessonTitle": "Finding Area by Decomposing and Rearranging",
    "practicePartLabel": "5",
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-003.png",
    "skill": "Explain how to find the area of an irregular rectilinear region",
    "activityForm": "structured multi-select explanation with optional elaboration and source-aligned annotation scratchpad",
    "prompt": "A student said, ‘We cannot find the area of this shaded region because the shape has many different measurements, instead of just a length and a width that we could multiply.’ Which methods explain why the student's statement is incorrect? Select all that apply.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "decompose",
        "label": "Break the region into non-overlapping rectangles, find each rectangle's area, and add the areas."
      },
      {
        "id": "enclose",
        "label": "Enclose the region in a 60-by-30 rectangle, then subtract the areas of the unshaded rectangles."
      },
      {
        "id": "singleProduct",
        "label": "Multiply 60 by 30 and use that product as the shaded area without subtracting anything."
      },
      {
        "id": "impossible",
        "label": "The different side measurements make the shaded area impossible to determine."
      }
    ],
    "answerKey": [
      "decompose",
      "enclose"
    ],
    "reasoningPrompt": "Optional: Describe how one selected method would account for every part of the shaded region exactly once.",
    "reasoningRequired": false,
    "missingFeedback": "Select every method that correctly explains how the shaded area can be found.",
    "correctFeedback": "Correct. The shaded region can be decomposed into rectangles and added, or enclosed in a 60-by-30 rectangle so the unshaded rectangles can be subtracted. Area does not require the entire outline to be one rectangle.",
    "incorrectFeedback": "Not quite. A valid method must account for every shaded part exactly once. Look for both an addition strategy using smaller rectangles and a subtraction strategy using the 60-by-30 enclosing rectangle.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-02-irregular-area-measurements.png",
      "alt": "The exact source shaded rectilinear region with measurements 60, 30, 35, 15, and 10.",
      "naturalWidth": 365,
      "naturalHeight": 205,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 205,
      "annotationGrid": {
        "originX": 28,
        "originY": 27,
        "cellX": 23.75,
        "cellY": 23.6667,
        "columns": 12,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use Line to split the shaded region into rectangles, or Rectangle to trace the 60-by-30 enclosure. Marks snap to 5-unit points and are optional scratch work; they do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one structured explanation identifying every valid area strategy",
      "sourceObjects": [
        "exact shaded rectilinear region",
        "all source side measurements",
        "60-by-30 enclosing dimensions"
      ],
      "notes": "Uses an exact visual-only source crop with an optional annotation layer calibrated to the figure's 5-unit measurement lattice. Students can draw decomposition lines or an enclosing rectangle without changing the graded method choices. The source's open explanation is converted to meaningfully validated method choices, with optional free text for further explanation rather than fragile required prose matching."
    },
    "hints": [
      "The figure can be split along horizontal or vertical edges to make rectangles.",
      "The 60 and 30 labels describe a rectangle that encloses the entire shaded region."
    ],
    "sampleAnswer": "The statement is incorrect because the region can be decomposed into rectangles and their areas added. Another valid method is to subtract the missing rectangles from a 60-by-30 enclosing rectangle.",
    "implementationNotes": "Directly adapts Lesson 2 cumulative practice, Problem 5, preserving the exact source figure while giving the explanation a reliable structured response path and an optional, ungraded source-aligned annotation scratchpad.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-1a",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1A",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "1A",
    "routePart": "problem-1a",
    "skill": "Find the area of stepped region A",
    "activityForm": "numeric area response with optional reasoning and source-grid annotation scratchpad",
    "prompt": "Find the area of shaded region A. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "22"
    ],
    "reasoningPrompt": "Show your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region A before submitting.",
    "correctFeedback": "Correct. Decompose the step into rectangles with areas 2 x 5 = 10, 2 x 4 = 8, and 2 x 2 = 4. Their total is 10 + 8 + 4 = 22 square units.",
    "incorrectFeedback": "Not quite. Split the stepped region into non-overlapping rectangles, find each rectangle's area, and add the areas.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-1a.png",
      "alt": "Exact source Figure A: a stepped shaded region on a square grid.",
      "naturalWidth": 530,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 26,
        "originY": 18,
        "cellX": 57.75,
        "cellY": 57.75,
        "columns": 8,
        "rows": 8
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Draw lines along the exact source grid to split the stepped region into rectangles. Rectangle and Square can also outline pieces. These marks are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 1A",
      "sourceObjects": [
        "exact source Figure A",
        "unit square grid",
        "stepped shaded boundary"
      ],
      "notes": "Uses an exact visual-only crop of Figure A with optional line, rectangle, and square annotations calibrated to the visible unit grid. The app checks the area independently and keeps both annotations and free-form reasoning optional because it cannot reliably validate every correct decomposition."
    },
    "hints": [
      "Try splitting the shape at each inside corner.",
      "One decomposition makes rectangles measuring 2 by 5, 2 by 4, and 2 by 2."
    ],
    "sampleAnswer": "2 x 5 + 2 x 4 + 2 x 2 = 10 + 8 + 4 = 22 square units.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 1A, using the exact source grid figure, an optional source-aligned annotation scratchpad, and an independently checked answer.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-1b",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1B",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "1B",
    "routePart": "problem-1b",
    "skill": "Find the area of frame region B",
    "activityForm": "numeric area response with optional reasoning and source-grid annotation scratchpad",
    "prompt": "Find the area of shaded region B. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "28"
    ],
    "reasoningPrompt": "Show your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region B before submitting.",
    "correctFeedback": "Correct. The outside square has area 6 x 6 = 36 square units. The two 2-by-2 openings have total area 8 square units, so the shaded area is 36 - 8 = 28 square units.",
    "incorrectFeedback": "Not quite. Find the area of the 6-by-6 outside square, then subtract both 2-by-2 openings.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-1b.png",
      "alt": "Exact source Figure B: a shaded 6-by-6 square with two unshaded 2-by-2 square openings.",
      "naturalWidth": 530,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 39,
        "originY": 18,
        "cellX": 57.625,
        "cellY": 57.75,
        "columns": 8,
        "rows": 8
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "rectangle",
      "annotationInstructions": "Use Rectangle or Square to trace the outside region and the two openings, or add grid-aligned planning lines. These marks are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 1B",
      "sourceObjects": [
        "exact source Figure B",
        "6-by-6 square grid",
        "two 2-by-2 openings"
      ],
      "notes": "Uses an exact visual-only crop with optional Rectangle, Square, and Line marks for tracing the outside region, openings, or a subtraction plan."
    },
    "hints": [
      "Count the side length of the outside square on the grid.",
      "Subtract the area of both white squares."
    ],
    "sampleAnswer": "6 x 6 - 2 x (2 x 2) = 36 - 8 = 28 square units.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 1B, including an optional source-aligned annotation scratchpad.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-1c",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1C",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "1C",
    "routePart": "problem-1c",
    "skill": "Find the area of house-shaped region C",
    "activityForm": "numeric area response with optional reasoning and source-grid annotation scratchpad",
    "prompt": "Find the area of shaded region C. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "reasoningPrompt": "Show your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region C before submitting.",
    "correctFeedback": "Correct. The 6-by-2 rectangle has area 12. The roof is two triangles, each with base 3 and height 2, so together they have area 6. The total is 18 square units.",
    "incorrectFeedback": "Not quite. Decompose the figure into the rectangular lower part and the two triangular roof halves.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-1c.png",
      "alt": "Exact source Figure C: a house-shaped shaded region on a square grid.",
      "naturalWidth": 540,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 52,
        "originY": 18,
        "cellX": 57.75,
        "cellY": 57.75,
        "columns": 8,
        "rows": 8
      },
      "annotationTools": [
        "line",
        "rectangle",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Draw a horizontal line where the roof meets the rectangle, then add another line from the roof peak if that helps. These source-grid marks are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 1C",
      "sourceObjects": [
        "exact source Figure C",
        "6-by-2 rectangular lower region",
        "two triangular roof halves"
      ],
      "notes": "Uses an exact visual-only crop with optional source-grid lines and rectangles for separating the lower rectangle and roof triangles. The app checks the area independently of annotations and optional free-form reasoning."
    },
    "hints": [
      "Split the shape along the horizontal line where the roof begins.",
      "The roof can be divided into two triangles with base 3 and height 2."
    ],
    "sampleAnswer": "6 x 2 + 2 x (1/2 x 3 x 2) = 12 + 6 = 18 square units.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 1C, including an optional source-aligned annotation scratchpad.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-2a",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2A",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "2A",
    "routePart": "problem-2a",
    "skill": "Find the area of L-shaped region A",
    "activityForm": "numeric area response with optional reasoning and source-aligned annotation scratchpad",
    "prompt": "Find the area of shaded region A in square centimeters. Show or explain your reasoning.",
    "responseType": "number",
    "answerKey": [
      "28"
    ],
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region A before submitting.",
    "correctFeedback": "Correct. One method is 6 x 4 + 2 x 2 = 24 + 4 = 28 square centimeters. Equivalently, subtract the 4-by-2 missing corner from a 6-by-6 square.",
    "incorrectFeedback": "Not quite. Decompose the L-shape into a 6-by-4 rectangle and a 2-by-2 square, or subtract the missing corner from a 6-by-6 square.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-2a.png",
      "alt": "Exact source Figure A: a 6-centimeter by 6-centimeter L-shaped region with two 2-centimeter labels.",
      "naturalWidth": 600,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 213,
        "originY": 111,
        "cellX": 47.5,
        "cellY": 47.5,
        "columns": 6,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Draw a line from the inside corner to decompose the L-shape, or outline an enclosing rectangle and missing piece. These source-aligned marks are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 2A",
      "sourceObjects": [
        "exact source Figure A",
        "6 cm outside dimensions",
        "two 2 cm step dimensions"
      ],
      "notes": "Uses an exact visual-only crop with every source dimension and right-angle marker intact, plus optional marks calibrated to the source's 2-centimeter measurement steps."
    },
    "hints": [
      "Draw an imaginary horizontal line from the inside corner.",
      "The pieces can be a 6-by-4 rectangle and a 2-by-2 square."
    ],
    "sampleAnswer": "6 x 4 + 2 x 2 = 24 + 4 = 28 square centimeters.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 2A, with an optional source-aligned annotation scratchpad for decomposition or subtraction planning.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-2b",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2B",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "2B",
    "routePart": "problem-2b",
    "skill": "Find the area around a rotated opening",
    "activityForm": "numeric area response with optional reasoning and source-aligned annotation scratchpad",
    "prompt": "Find the area of shaded region B in square centimeters. Show or explain your reasoning.",
    "responseType": "number",
    "answerKey": [
      "34"
    ],
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region B before submitting.",
    "correctFeedback": "Correct. The outside rectangle has area 8 x 5 = 40 square centimeters. The rotated 3-by-2 opening has area 6 square centimeters, so the shaded area is 40 - 6 = 34 square centimeters.",
    "incorrectFeedback": "Not quite. Rotation does not change the opening's area. Subtract the area of the 3-by-2 opening from the 8-by-5 rectangle.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-2b.png",
      "alt": "Exact source Figure B: an 8-centimeter by 5-centimeter shaded rectangle with a rotated 3-centimeter by 2-centimeter rectangular opening.",
      "naturalWidth": 650,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 65,
        "rows": 52
      },
      "annotationTools": [
        "line",
        "rectangle",
        "erase"
      ],
      "defaultAnnotationTool": "rectangle",
      "annotationInstructions": "Outline the outside rectangle or the rotated opening, or add planning lines directly over the exact source figure. These optional marks do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 2B",
      "sourceObjects": [
        "exact source Figure B",
        "8 cm by 5 cm outside rectangle",
        "rotated 3 cm by 2 cm opening"
      ],
      "notes": "Uses an exact visual-only crop without redrawing the rotated opening and adds optional source-coordinate annotations for outlining or planning."
    },
    "hints": [
      "Find the area of the outside rectangle first.",
      "The 3-by-2 opening still has area 6 even though it is rotated."
    ],
    "sampleAnswer": "8 x 5 - 3 x 2 = 40 - 6 = 34 square centimeters.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 2B, with an optional source-aligned annotation scratchpad.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-area-missing-piece",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2C",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "2C",
    "routePart": "problem-2c",
    "skill": "Find area by subtracting a missing piece",
    "activityForm": "missing-piece area with source-aligned annotation scratchpad",
    "prompt": "Find the area of shaded region C. The outside rectangle is 10 cm by 15 cm, and the inside opening is 6 cm by 9 cm.",
    "responseType": "number",
    "answerKey": [
      "96"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-frame-diagram.png",
      "alt": "Source Figure C: a 10 cm by 15 cm shaded rectangle with a 6 cm by 9 cm rectangular opening and right-angle markers.",
      "naturalWidth": 700,
      "naturalHeight": 940,
      "displayVariant": "compactPortrait",
      "displayMaxHeight": 390,
      "annotationGrid": {
        "originX": 197,
        "originY": 83,
        "cellX": 47.2,
        "cellY": 47.2,
        "columns": 10,
        "rows": 15
      },
      "annotationTools": [
        "line",
        "rectangle",
        "erase"
      ],
      "defaultAnnotationTool": "rectangle",
      "annotationInstructions": "Trace the 10-by-15 outside rectangle and the 6-by-9 opening, or add decomposition lines on the source measurement grid. These marks are optional scratch work and do not affect grading."
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": true,
    "reasoningMinLength": 5,
    "reasoningConcepts": [
      [
        "150",
        "54"
      ],
      [
        "10",
        "15",
        "6",
        "9"
      ],
      [
        "subtract"
      ],
      [
        "minus"
      ],
      [
        "difference"
      ]
    ],
    "reasoningValidationGuidance": "write at least 5 characters and show the two rectangle areas or describe subtracting the opening from the outside rectangle",
    "missingFeedback": "Enter the shaded area before submitting.",
    "reasoningRequiredFeedback": "The area answer is correct. Add the source-requested reasoning before submitting again.",
    "reasoningRevisionFeedback": "The area answer is correct, but the explanation needs to show how the opening is removed from the outside rectangle.",
    "correctFeedback": "Correct. The outside rectangle has area 10 × 15 = 150 square centimeters, and the opening has area 6 × 9 = 54 square centimeters. The shaded area is 150 - 54 = 96 square centimeters.",
    "incorrectFeedback": "Not quite. Find the area of the entire outside rectangle and subtract the area of the rectangular opening.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area answer and one required explanation for source Problem 2C",
      "sourceObjects": [
        "Figure C outside 10 cm by 15 cm rectangle",
        "inside 6 cm by 9 cm rectangular opening"
      ],
      "notes": "Uses cumulative-practice Problem 2C and an exact portrait crop that preserves the dimensions, opening, and right-angle markers, with optional measurement-aligned annotations."
    },
    "hints": [
      "Find the area of the 10 by 15 outside rectangle.",
      "Subtract the 6 by 9 rectangular opening."
    ],
    "sampleAnswer": "10 × 15 - 6 × 9 = 150 - 54 = 96 square centimeters.",
    "implementationNotes": "Rebuilt from Lesson 3 cumulative practice, Problem 2C, with an exact source-derived Figure C crop, preserved portrait sizing, and an optional annotation scratchpad.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-area-2d",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2D",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "2D",
    "routePart": "problem-2d",
    "skill": "Find the area of triangular region D",
    "activityForm": "numeric area response with optional reasoning and source-aligned annotation scratchpad",
    "prompt": "Find the area of shaded region D in square centimeters. Show or explain your reasoning.",
    "responseType": "number",
    "answerKey": [
      "40"
    ],
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of shaded region D before submitting.",
    "correctFeedback": "Correct. The base is 8 + 8 = 16 centimeters and the perpendicular height is 5 centimeters. The area is 1/2 x 16 x 5 = 40 square centimeters.",
    "incorrectFeedback": "Not quite. Combine the two 8-centimeter base segments, then use one-half times base times perpendicular height.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-shaded-region-2d.png",
      "alt": "Exact source Figure D: a triangle with two 8-centimeter base segments and a perpendicular height of 5 centimeters.",
      "naturalWidth": 900,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 90,
        "rows": 52
      },
      "annotationTools": [
        "line",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines or squares to plan an area strategy on the exact source triangle. These scratch-work marks do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for source Problem 2D",
      "sourceObjects": [
        "exact source Figure D",
        "two 8 cm base segments",
        "5 cm perpendicular height",
        "right-angle marker"
      ],
      "notes": "Uses an exact visual-only crop preserving the split base, dashed height, and right-angle marker, with optional neutral line and square annotations drawn in source coordinates."
    },
    "hints": [
      "The entire base is made of both labeled 8-centimeter segments.",
      "Use one-half times base times height."
    ],
    "sampleAnswer": "1/2 x (8 + 8) x 5 = 40 square centimeters.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, Problem 2D, with optional source-aligned line and square annotations.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-area-preserved",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "3",
    "routePart": "problem-3",
    "skill": "Compare regions after moving area",
    "activityForm": "single-choice visual reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Two plots of land have very different shapes. Noah says that both plots have the same area. Do you agree with Noah? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Yes, I agree with Noah."
      },
      {
        "id": "disagree",
        "label": "No, I disagree with Noah."
      }
    ],
    "answerKey": [
      "agree"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-03-equal-land-plots-diagram.png",
      "alt": "The exact source diagrams of rectangular Plot A and Plot B with matching triangular protrusion and indentation.",
      "naturalWidth": 760,
      "naturalHeight": 610,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 520,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 76,
        "rows": 61
      },
      "annotationTools": [
        "line",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines or squares to compare the plots or plan how the matching triangular piece could move. These scratch-work marks do not affect grading."
    },
    "reasoningPrompt": "Explain how the shapes support your answer.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningConcepts": [
      [
        "triang",
        "mov"
      ],
      [
        "triang",
        "rearrang"
      ],
      [
        "indent",
        "protrus"
      ],
      [
        "notch",
        "point"
      ],
      [
        "cut",
        "attach"
      ],
      [
        "missing",
        "extra"
      ],
      [
        "same",
        "piece"
      ],
      [
        "same",
        "rectang"
      ]
    ],
    "reasoningValidationGuidance": "describe moving or rearranging a triangular piece, connect the matching indentation and protrusion, or explain how the same piece forms the same rectangle",
    "missingFeedback": "Choose whether you agree with Noah before submitting.",
    "reasoningRequiredFeedback": "Your comparison is correct. Add the source-requested explanation before submitting again.",
    "reasoningRevisionFeedback": "Your comparison is correct, but the explanation needs to identify a valid rearrangement or matching-piece reason.",
    "correctFeedback": "Correct. The triangular protrusion on the left of Plot B fits the congruent triangular indentation on its right. Rearranging that piece makes the same rectangle as Plot A, so the plots have equal area.",
    "incorrectFeedback": "Not quite. Compare the amount of land by imagining a rearrangement: look for matching triangular parts in the outward point and inward indentation of Plot B.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one required explanation for source Problem 3",
      "sourceObjects": [
        "green rectangular plot A",
        "yellow plot B with congruent triangular protrusion and indentation"
      ],
      "notes": "Uses cumulative-practice Problem 3 and a high-resolution visual-only crop that preserves the exact two source plots, with optional neutral line and square annotations for planning the rearrangement."
    },
    "hints": [
      "Compare the triangular point on the left of Plot B with the triangular indentation on the right.",
      "Imagine cutting off one triangle and moving it into the matching space."
    ],
    "sampleAnswer": "Yes. Move the left triangular protrusion into the same-size triangular indentation on the right. Plot B then forms the same rectangle as Plot A, so their areas are equal.",
    "implementationNotes": "Rebuilt from Lesson 3 cumulative practice, Problem 3, with an exact source-derived Plot A and Plot B crop plus optional, ungraded annotation scratch work.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-wall-tiles-4a",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4a",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "4a",
    "routePart": "problem-4a",
    "skill": "Compare tile counts for a fixed wall",
    "activityForm": "agree-or-disagree choice with optional reasoning",
    "prompt": "An 80-inch by 40-inch wall can be tiled with square tiles whose side lengths are 8 inches, 4 inches, or 2 inches. Do you agree that the same number of tiles is needed no matter which tile size is used? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose agree or disagree before submitting.",
    "correctFeedback": "Correct. The number changes with tile size: 50 eight-inch tiles, 200 four-inch tiles, or 800 two-inch tiles cover the same wall.",
    "incorrectFeedback": "Not quite. Smaller square tiles cover less area each, so more of them are needed to cover the same wall.",
    "visualModelData": {
      "type": "wallTileComparison"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one available explanation for source statement 4a",
      "sourceObjects": [
        "80-inch by 40-inch wall",
        "8-inch square tile",
        "4-inch square tile",
        "2-inch square tile"
      ],
      "notes": "Preserves source statement 4a as an independently submitted part. The app supplies a proportional comparison visual and explanatory feedback; prose remains optional to avoid brittle validation."
    },
    "hints": [
      "Compare the area of one tile of each size.",
      "A smaller tile covers less area, so ask what that does to the number needed."
    ],
    "sampleAnswer": "Disagree. The wall needs 50 eight-inch tiles, 200 four-inch tiles, or 800 two-inch tiles.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, statement 4a.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-wall-tiles-4b",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4b",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "4b",
    "routePart": "problem-4b",
    "skill": "Compare wall area across tile sizes",
    "activityForm": "agree-or-disagree choice with optional reasoning",
    "prompt": "Do you agree that the area of the wall being tiled is the same no matter which tile size is used? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "agree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose agree or disagree before submitting.",
    "correctFeedback": "Correct. The wall dimensions do not change, so its area is always 80 x 40 = 3,200 square inches. Tile size changes only how many tiles are needed.",
    "incorrectFeedback": "Not quite. The tile size changes, but the same 80-inch by 40-inch wall is being covered each time.",
    "visualModelData": {
      "type": "wallTileComparison"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one available explanation for source statement 4b",
      "sourceObjects": [
        "fixed 80-inch by 40-inch wall",
        "three square tile sizes"
      ],
      "notes": "Preserves source statement 4b and gives it independent feedback."
    },
    "hints": [
      "Ask whether changing the tiles changes the wall's length or width.",
      "Find 80 x 40."
    ],
    "sampleAnswer": "Agree. The wall is always 80 by 40, so its area remains 3,200 square inches.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, statement 4b.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-wall-tiles-4c",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4c",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "4c",
    "routePart": "problem-4c",
    "skill": "Compare 2-inch and 4-inch square tiles",
    "activityForm": "agree-or-disagree choice with optional reasoning",
    "prompt": "Do you agree that two 2-inch square tiles cover the same area as one 4-inch square tile? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose agree or disagree before submitting.",
    "correctFeedback": "Correct. A 2-inch square tile has area 4 square inches, while a 4-inch square tile has area 16 square inches. Four 2-inch tiles, not two, match one 4-inch tile.",
    "incorrectFeedback": "Not quite. Compare tile areas, not just side lengths: square each side length.",
    "visualModelData": {
      "type": "wallTileComparison"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one available explanation for source statement 4c",
      "sourceObjects": [
        "2-inch square tile",
        "4-inch square tile"
      ],
      "notes": "Preserves source statement 4c and gives the area comparison independent feedback."
    },
    "hints": [
      "Find 2 x 2 and 4 x 4.",
      "How many groups of 4 square inches make 16 square inches?"
    ],
    "sampleAnswer": "Disagree. One 4-inch tile has area 16 square inches, so it matches four 2-inch tiles with area 4 each.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, statement 4c.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-wall-tiles-4d",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4d",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "4d",
    "routePart": "problem-4d",
    "skill": "Compare 4-inch and 8-inch square tiles",
    "activityForm": "agree-or-disagree choice with optional reasoning",
    "prompt": "Do you agree that four 4-inch square tiles cover the same area as one 8-inch square tile? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "agree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose agree or disagree before submitting.",
    "correctFeedback": "Correct. One 8-inch tile has area 64 square inches, and four 4-inch tiles have total area 4 x 16 = 64 square inches.",
    "incorrectFeedback": "Not quite. Compare 8 x 8 with four copies of 4 x 4.",
    "visualModelData": {
      "type": "wallTileComparison"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one available explanation for source statement 4d",
      "sourceObjects": [
        "4-inch square tile",
        "8-inch square tile"
      ],
      "notes": "Preserves source statement 4d and gives the area comparison independent feedback."
    },
    "hints": [
      "Find the area of one tile of each size.",
      "Compare 8 x 8 with 4 x (4 x 4)."
    ],
    "sampleAnswer": "Agree. 8 x 8 = 64 and four 4-inch tiles cover 4 x 16 = 64 square inches.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, statement 4d.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-wall-tiles-4e",
    "section": "A",
    "sectionName": "Reasoning to Find Area",
    "lesson": 3,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-3-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4e",
    "practiceLessonGroup": "lesson-3-practice",
    "practiceLessonTitle": "Reasoning to Find Area",
    "practicePartLabel": "4e",
    "routePart": "problem-4e",
    "skill": "Compare tile counts by area scale",
    "activityForm": "agree-or-disagree choice with optional reasoning",
    "prompt": "Do you agree that using 8-inch square tiles requires one-fourth as many tiles as using 2-inch square tiles? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose agree or disagree before submitting.",
    "correctFeedback": "Correct. An 8-inch tile has 16 times the area of a 2-inch tile, so the wall needs one-sixteenth as many 8-inch tiles: 50 instead of 800.",
    "incorrectFeedback": "Not quite. The side length is four times as large, but area scales in two dimensions. Compare 8 x 8 with 2 x 2.",
    "visualModelData": {
      "type": "wallTileComparison"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one agree/disagree judgment and one available explanation for source statement 4e",
      "sourceObjects": [
        "8-inch square tile",
        "2-inch square tile",
        "fixed wall"
      ],
      "notes": "Preserves source statement 4e and distinguishes side-length scale from area scale."
    },
    "hints": [
      "Compare the areas 8 x 8 and 2 x 2.",
      "If one tile has 16 times the area, how does the number of tiles change?"
    ],
    "sampleAnswer": "Disagree. An 8-inch tile covers 16 times as much area as a 2-inch tile, so 50 eight-inch tiles replace 800 two-inch tiles, which is one-sixteenth as many.",
    "implementationNotes": "Adds full coverage for Lesson 3 cumulative practice, statement 4e.",
    "source": "Cumulative Practice Problems/Grade6-1-3-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-sort",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "1",
    "routePart": "problem-1",
    "skill": "Identify parallelograms",
    "activityForm": "multi-select classification",
    "prompt": "Select all of the parallelograms. For each figure that is not selected, explain how you know it is not a parallelogram.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "Figure A"
      },
      {
        "id": "B",
        "label": "Figure B"
      },
      {
        "id": "C",
        "label": "Figure C"
      },
      {
        "id": "D",
        "label": "Figure D"
      },
      {
        "id": "E",
        "label": "Figure E"
      }
    ],
    "answerKey": [
      "B",
      "C"
    ],
    "missingFeedback": "Select at least one figure before submitting.",
    "correctFeedback": "Correct. Figures B and C each have two pairs of opposite parallel sides. Figure A has only one parallel pair, Figure D has five sides, and Figure E has three sides.",
    "incorrectFeedback": "Not quite. Check every figure for exactly four sides and two pairs of opposite parallel sides. Remember that a rectangle is a parallelogram.",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-parallelogram-sort-diagram.png",
      "alt": "The exact source grid showing five labeled figures A through E for parallelogram classification.",
      "naturalWidth": 1460,
      "naturalHeight": 970
    },
    "reasoningPrompt": "Explain how you ruled out figures that are not parallelograms.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningValidator": "parallelogramRejectedFigures",
    "reasoningValidationGuidance": "state a valid shared reason, such as the unselected figures not having two pairs of opposite parallel sides, or give valid figure-specific reasons",
    "reasoningRequiredFeedback": "The selected figures are correct. Add the source-requested explanation for every figure you rejected.",
    "reasoningRevisionFeedback": "The selected figures are correct, but the explanation needs to use the defining parallelogram property or give valid figure-specific reasons.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 8,
      "appActionTargets": 8,
      "unitOfAction": "five figure selections plus explanations for the three rejected figures A, D, and E",
      "sourceObjects": [
        "five labeled quadrilaterals/figures on a grid"
      ],
      "notes": "Preserves the select-all source activity with an exact visual-only crop of Figures A-E. The selections establish which figures were rejected, so one valid shared explanation may address all of them without repeating their labels."
    },
    "hints": [
      "A parallelogram has two pairs of opposite parallel sides.",
      "Rectangles are parallelograms because opposite sides are parallel."
    ],
    "sampleAnswer": "Figures B and C are parallelograms. Figure C is a rectangle, and rectangles have two pairs of opposite parallel sides.",
    "implementationNotes": "Directly adapted from Lesson 4 cumulative practice, problem 1. Figures A-E use the exact source grid crop.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-parallelogram-rearrange-2a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "2a",
    "routePart": "problem-2a",
    "skill": "Decompose and rearrange a parallelogram",
    "activityForm": "source-aligned annotation attempt followed by a staged model comparison",
    "prompt": "Decompose and rearrange this parallelogram to make a rectangle.",
    "responseType": "annotationAttempt",
    "answerKey": [
      "rearranged"
    ],
    "missingFeedback": "Draw at least one possible cut line on the exact source figure before submitting your attempt.",
    "savedFeedback": "Attempt recorded. Compare your cut line with each model step: decomposing and rearranging preserve the parallelogram's area.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "postAttemptModel": "parallelogramRearrange",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-parallelogram-rearrange-source.png",
      "alt": "The exact source parallelogram on a square grid, with horizontal base 9 units and perpendicular height 5 units.",
      "naturalWidth": 1200,
      "naturalHeight": 600,
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationGrid": {
        "originX": 172,
        "originY": 40,
        "cellX": 75.5,
        "cellY": 75.5,
        "columns": 13,
        "rows": 7
      },
      "displayMaxHeight": 460,
      "annotationInstructions": "Draw one or more possible cut lines on the exact source grid. Your drawing records an attempt; it is not graded as the only valid decomposition."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "decompose the source parallelogram and rearrange its triangular piece",
      "sourceObjects": [
        "source 9-by-5 parallelogram",
        "triangular side piece",
        "equal-area rectangle"
      ],
      "notes": "Keeps the exact source crop visible under a calibrated annotation layer. The staged cut-and-move model remains hidden until the student draws and submits an attempt."
    },
    "hints": [
      "Cut vertically from the upper-left vertex to the base.",
      "Move the separated triangle to the open space on the right."
    ],
    "sampleAnswer": "Cut off the left triangular piece and move it to the right. The pieces form a 9-by-5 rectangle.",
    "implementationNotes": "Uses the exact source crop as an annotation-first attempt surface. A non-empty drawing unlocks the staged model after submission; the app does not falsely grade one cut as uniquely correct.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-area-2b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "2b",
    "routePart": "problem-2b",
    "skill": "Find parallelogram area from a grid",
    "activityForm": "numeric area with optional reasoning and source-grid annotation scratchpad",
    "prompt": "What is the area of the parallelogram? Explain your reasoning.",
    "responseType": "number",
    "answerKey": [
      "45"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of the parallelogram before submitting.",
    "correctFeedback": "Correct. The horizontal base is 9 units and the perpendicular height is 5 units, so the area is 9 x 5 = 45 square units.",
    "incorrectFeedback": "Not quite. Count the horizontal base and the perpendicular height on the source grid, then multiply them.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-parallelogram-rearrange-source.png",
      "alt": "The exact source parallelogram on a square grid.",
      "naturalWidth": 1200,
      "naturalHeight": 600,
      "annotationGrid": {
        "originX": 172,
        "originY": 40,
        "cellX": 75.5,
        "cellY": 75.5,
        "columns": 13,
        "rows": 7
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 460,
      "annotationInstructions": "Use Line to mark a base or perpendicular height. Use Rectangle or Square to outline a decomposition or rearranged region. These annotations are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one area answer and one available explanation for source Problem 2b",
      "sourceObjects": [
        "source parallelogram on a unit grid"
      ],
      "notes": "The exact visual-only source crop preserves the countable base and height. An optional annotation layer is calibrated to the printed unit grid so students can mark a base, height, or decomposition without changing the graded area answer; reasoning remains available but does not use brittle keyword grading."
    },
    "hints": [
      "The bottom horizontal base is 9 units.",
      "The perpendicular distance between the horizontal sides is 5 units."
    ],
    "sampleAnswer": "The parallelogram rearranges into a 9-by-5 rectangle, so its area is 45 square units.",
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 2b, with an optional annotation layer calibrated to the exact printed grid.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-area-3",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "3",
    "routePart": "problem-3",
    "skill": "Choose the corresponding height for area",
    "activityForm": "numeric area with optional calibrated annotation scratchpad",
    "prompt": "Find the area of the parallelogram in square centimeters.",
    "responseType": "number",
    "answerKey": [
      "30"
    ],
    "missingFeedback": "Enter the area of the parallelogram before submitting.",
    "correctFeedback": "Correct. The 10-centimeter base and its 3-centimeter perpendicular height give 10 x 3 = 30 square centimeters. The 3.2-centimeter slanted side is not the corresponding height.",
    "incorrectFeedback": "Not quite. Use the 10-centimeter base and the perpendicular 3-centimeter height, not the 3.2-centimeter slanted side.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-area-dimensions-source.png",
      "alt": "The exact source parallelogram labeled with base 10 centimeters, perpendicular height 3 centimeters, and slanted side 3.2 centimeters.",
      "naturalWidth": 1500,
      "naturalHeight": 520,
      "annotationGrid": {
        "originX": 45,
        "originY": 38,
        "cellX": 78,
        "cellY": 78,
        "columns": 18,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 360,
      "annotationInstructions": "Use Line to trace a usable base or perpendicular height. Rectangle and Square can outline a related area model. The invisible annotation lattice is scaled to 1 centimeter; these marks are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for source Problem 3",
      "sourceObjects": [
        "10-centimeter base",
        "3-centimeter perpendicular height",
        "3.2-centimeter slanted side"
      ],
      "notes": "Uses an exact visual-only source crop so the right-angle marker and distinction between height and slanted side remain intact. The optional annotation lattice uses the source's one-centimeter scale without adding a visible grid or changing the graded numeric answer."
    },
    "hints": [
      "Area uses a base and its perpendicular height.",
      "The dashed 3-centimeter segment meets the 10-centimeter base at a right angle."
    ],
    "sampleAnswer": "10 x 3 = 30 square centimeters.",
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 3, with optional source-scaled line and area-model annotations.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-not-parallelogram-4",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "4",
    "routePart": "problem-4",
    "skill": "Explain why a quadrilateral is not a parallelogram",
    "activityForm": "validated mathematical explanation with optional source-grid annotation scratchpad",
    "prompt": "Explain why this quadrilateral is not a parallelogram.",
    "responseType": "validatedText",
    "responseValidator": "quadrilateralNotParallelogram",
    "inputLabel": "Explain which required pair of opposite sides is not parallel.",
    "inputPlaceholder": "Compare both pairs of opposite sides.",
    "missingFeedback": "Explain why the quadrilateral fails the definition of a parallelogram.",
    "correctFeedback": "Correct. Its top and bottom sides are parallel, but its two slanted opposite sides have different slopes and are not parallel.",
    "incorrectFeedback": "Revise the explanation so it explicitly says that one pair of opposite sides, the two slanted sides, is not parallel or has different slopes.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-not-parallelogram-source.png",
      "alt": "The exact source quadrilateral on a square grid, with parallel horizontal sides and nonparallel slanted sides.",
      "naturalWidth": 1500,
      "naturalHeight": 560,
      "annotationGrid": {
        "originX": 43,
        "originY": 58,
        "cellX": 75.56,
        "cellY": 75.5,
        "columns": 19,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 380,
      "annotationInstructions": "Use Line to extend or compare opposite sides on the exact source grid. Rectangle and Square are available for additional construction. These annotations are optional scratch work and do not affect the response verdict."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one source-requested explanation for Problem 4",
      "sourceObjects": [
        "source quadrilateral on a square grid",
        "two pairs of opposite sides"
      ],
      "notes": "The exact grid is preserved and an optional annotation layer lets students extend or compare opposite sides without changing the response verdict. Validation accepts equivalent language about nonparallel opposite sides, unequal slopes, or only one parallel pair, and the visible label states the passing criterion."
    },
    "hints": [
      "A parallelogram needs two pairs of opposite parallel sides.",
      "Compare the slopes of the left and right slanted sides."
    ],
    "sampleAnswer": "The horizontal sides are parallel, but the two slanted opposite sides have different slopes, so they are not parallel.",
    "implementationNotes": "Adds source-faithful explanation coverage for Lesson 4 cumulative practice, Problem 4, with optional grid-calibrated side-comparison annotations.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shape-area-5a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5, left shape",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "5a",
    "routePart": "problem-5a",
    "skill": "Find polygon area by decomposition",
    "activityForm": "numeric area with optional reasoning and source-grid annotation scratchpad",
    "prompt": "Find the area of the left shaded shape in square units. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "12"
    ],
    "reasoningPrompt": "Show your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of the left shaded shape before submitting.",
    "correctFeedback": "Correct. The shaded region can be decomposed into a central 2-by-2 square and four right triangles, each with area 2, for a total of 12 square units.",
    "incorrectFeedback": "Not quite. Use the grid to separate the center square from the four congruent triangular arms.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-shape-area-5a.png",
      "alt": "The exact left shaded polygon from source Problem 5 on a square grid.",
      "naturalWidth": 670,
      "naturalHeight": 650,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 61,
        "originY": 45,
        "cellX": 74.5,
        "cellY": 74.75,
        "columns": 8,
        "rows": 8
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 500,
      "annotationInstructions": "Use Line to split the shaded region into pieces. Rectangle or Square can outline the center or an enclosing region. These annotations are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one area answer and one available explanation for the left source shape",
      "sourceObjects": [
        "left shaded polygon",
        "unit grid"
      ],
      "notes": "Uses an exact visual-only crop at natural resolution with optional annotations calibrated to the printed unit grid. Students can mark a decomposition or enclosing region without changing the graded area answer, and the source-requested reasoning remains available without brittle keyword validation."
    },
    "hints": [
      "The center is a 2-by-2 square.",
      "Each arm is a right triangle with base 2 and height 2."
    ],
    "sampleAnswer": "The center has area 4 and the four triangles have area 2 each, so the total is 4 + 8 = 12 square units.",
    "implementationNotes": "Adds full coverage for the left figure in Lesson 4 cumulative practice, Problem 5, with optional grid-calibrated decomposition annotations.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shape-area-5b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5, right shape",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "5b",
    "routePart": "problem-5b",
    "skill": "Find polygon area by decomposition",
    "activityForm": "numeric area with optional reasoning and source-grid annotation scratchpad",
    "prompt": "Find the area of the right shaded shape in square units. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "19"
    ],
    "reasoningPrompt": "Show your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of the right shaded shape before submitting.",
    "correctFeedback": "Correct. Splitting at the vertical segment gives a left triangle with area 4 and a right triangle with area 15, for 19 square units total.",
    "incorrectFeedback": "Not quite. Split the shape at its vertical segment and find the area of the triangle on each side.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-04-shape-area-5b.png",
      "alt": "The exact right shaded polygon from source Problem 5 on a square grid.",
      "naturalWidth": 930,
      "naturalHeight": 650,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 82,
        "originY": 44,
        "cellX": 74.545,
        "cellY": 74.75,
        "columns": 11,
        "rows": 8
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 500,
      "annotationInstructions": "Use Line to split the shaded region into simpler figures. Rectangle or Square can outline a related area model. These annotations are optional scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one area answer and one available explanation for the right source shape",
      "sourceObjects": [
        "right shaded polygon",
        "unit grid"
      ],
      "notes": "Uses an exact visual-only crop at natural resolution with optional annotations calibrated to the printed unit grid. Students can mark decomposition lines without changing the graded area answer, and the independent area-and-reasoning action for the second source figure is preserved."
    },
    "hints": [
      "The vertical segment divides the region into two triangles.",
      "The left triangle has base 2 and height 4; the right has base 6 and height 5."
    ],
    "sampleAnswer": "The left triangle has area 4 and the right triangle has area 15, so the total area is 19 square units.",
    "implementationNotes": "Adds full coverage for the right figure in Lesson 4 cumulative practice, Problem 5, with optional grid-calibrated decomposition annotations.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-fraction-area-6a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6a",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "6a",
    "routePart": "problem-6a",
    "skill": "Find rectangle area with fractional side length",
    "activityForm": "numeric fraction area",
    "prompt": "Find the area of a rectangle with side lengths 5 inches and 1/3 inch.",
    "responseType": "number",
    "answerKey": [
      "5/3",
      "1 2/3"
    ],
    "missingFeedback": "Enter the rectangle's area before submitting.",
    "correctFeedback": "Correct. 5 x 1/3 = 5/3, or 1 2/3, square inches.",
    "incorrectFeedback": "Not quite. Multiply 5 by 1/3. You may enter a fraction or mixed number.",
    "visualModelData": {
      "type": "rectangleDimensions",
      "widthLabel": "5 in",
      "heightLabel": "1/3 in",
      "gridColumns": 15,
      "gridRows": 1,
      "gridUnitLabel": "1/3 inch"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one rectangle-area answer for Problem 6a",
      "sourceObjects": [
        "side lengths 5 inches and 1/3 inch"
      ],
      "notes": "The source subproblem is text-only. The app scaffold preserves the exact 5-to-1/3 side ratio on a 15-by-1 square grid; it does not add a computed area."
    },
    "hints": [
      "Area of a rectangle is length times width.",
      "Five groups of one-third make five-thirds."
    ],
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 6a.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-fraction-area-6b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6b",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "6b",
    "routePart": "problem-6b",
    "skill": "Find rectangle area with fractional side length",
    "activityForm": "numeric fraction area",
    "prompt": "Find the area of a rectangle with side lengths 5 inches and 4/3 inches.",
    "responseType": "number",
    "answerKey": [
      "20/3",
      "6 2/3"
    ],
    "missingFeedback": "Enter the rectangle's area before submitting.",
    "correctFeedback": "Correct. 5 x 4/3 = 20/3, or 6 2/3, square inches.",
    "incorrectFeedback": "Not quite. Multiply 5 by 4/3. You may enter a fraction or mixed number.",
    "visualModelData": {
      "type": "rectangleDimensions",
      "widthLabel": "5 in",
      "heightLabel": "4/3 in",
      "gridColumns": 15,
      "gridRows": 4,
      "gridUnitLabel": "1/3 inch"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one rectangle-area answer for Problem 6b",
      "sourceObjects": [
        "side lengths 5 inches and 4/3 inches"
      ],
      "notes": "The source subproblem is text-only. The app scaffold preserves the exact 5-to-4/3 side ratio on a 15-by-4 square grid; it does not add a computed area."
    },
    "hints": [
      "Area of a rectangle is length times width.",
      "Multiply the whole number by the numerator, then keep the denominator."
    ],
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 6b.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-fraction-area-6c",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6c",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "6c",
    "routePart": "problem-6c",
    "skill": "Find rectangle area with two fractional side lengths",
    "activityForm": "numeric fraction area",
    "prompt": "Find the area of a rectangle with side lengths 5/2 inches and 4/3 inches.",
    "responseType": "number",
    "answerKey": [
      "10/3",
      "3 1/3"
    ],
    "missingFeedback": "Enter the rectangle's area before submitting.",
    "correctFeedback": "Correct. 5/2 x 4/3 = 20/6 = 10/3, or 3 1/3, square inches.",
    "incorrectFeedback": "Not quite. Multiply numerators and denominators, then simplify the result.",
    "visualModelData": {
      "type": "rectangleDimensions",
      "widthLabel": "5/2 in",
      "heightLabel": "4/3 in",
      "gridColumns": 15,
      "gridRows": 8,
      "gridUnitLabel": "1/6 inch"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one rectangle-area answer for Problem 6c",
      "sourceObjects": [
        "side lengths 5/2 inches and 4/3 inches"
      ],
      "notes": "The source subproblem is text-only. The app scaffold preserves the exact 5/2-to-4/3 side ratio on a 15-by-8 square grid; it does not add a computed area."
    },
    "hints": [
      "Area of a rectangle is length times width.",
      "Simplify 20/6 by dividing numerator and denominator by 2."
    ],
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 6c.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rectangle-fraction-area-6d",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 4,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-4-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6d",
    "practiceLessonGroup": "lesson-4-practice",
    "practiceLessonTitle": "Parallelograms",
    "practicePartLabel": "6d",
    "routePart": "problem-6d",
    "skill": "Find rectangle area with reciprocal side lengths",
    "activityForm": "numeric fraction area",
    "prompt": "Find the area of a rectangle with side lengths 7/6 inch and 6/7 inch.",
    "responseType": "number",
    "answerKey": [
      "1"
    ],
    "missingFeedback": "Enter the rectangle's area before submitting.",
    "correctFeedback": "Correct. 7/6 x 6/7 = 42/42 = 1 square inch.",
    "incorrectFeedback": "Not quite. The two side lengths are reciprocals; multiply and simplify.",
    "visualModelData": {
      "type": "rectangleDimensions",
      "widthLabel": "7/6 in",
      "heightLabel": "6/7 in",
      "gridColumns": 49,
      "gridRows": 36,
      "gridUnitLabel": "1/42 inch"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one rectangle-area answer for Problem 6d",
      "sourceObjects": [
        "side lengths 7/6 inch and 6/7 inch"
      ],
      "notes": "The source subproblem is text-only. The app scaffold preserves the exact 7/6-to-6/7 side ratio on a 49-by-36 square grid; it does not add a computed area."
    },
    "hints": [
      "Area of a rectangle is length times width.",
      "Cancel the matching factors 7 and 6."
    ],
    "implementationNotes": "Adds full coverage for Lesson 4 cumulative practice, Problem 6d.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-height",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "1",
    "routePart": "problem-1",
    "skill": "Identify correctly labeled heights",
    "activityForm": "multi-select geometry",
    "prompt": "Select all parallelograms that have a correct height labeled for the given base.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "A"
      },
      {
        "id": "B",
        "label": "B"
      },
      {
        "id": "C",
        "label": "C"
      },
      {
        "id": "D",
        "label": "D"
      }
    ],
    "answerKey": [
      "A",
      "C",
      "D"
    ],
    "missingFeedback": "Select at least one diagram before submitting.",
    "correctFeedback": "Correct. In A, C, and D, the labeled height is perpendicular to the given base or to the line containing that base. In B, the segment labeled height is slanted and is not perpendicular to the horizontal base.",
    "incorrectFeedback": "Not quite. A corresponding height must meet the line containing the given base at a right angle. Recheck each diagram, including heights drawn to an extension of the base.",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-correct-heights-diagram.png",
      "alt": "Four source diagrams labeled A through D on one square grid, each showing a parallelogram with a labeled base and height.",
      "naturalWidth": 1315,
      "naturalHeight": 890
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "each labeled parallelogram diagram A-D",
      "sourceObjects": [
        "Diagram A",
        "Diagram B",
        "Diagram C",
        "Diagram D"
      ],
      "notes": "Uses a high-resolution visual-only crop of the exact source grid so the base labels, height segments, extensions, and right-angle markers remain mathematically faithful."
    },
    "hints": [
      "A height must be perpendicular to the selected base or the line containing that base.",
      "A slanted side is not automatically a height."
    ],
    "implementationNotes": "Directly adapted from Lesson 5 cumulative practice, problem 1. The exact A-D source diagram is rendered from the PDF as a visual-only crop; the prompt and response controls remain app text.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-draw-parallelogram-height-2",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "2",
    "routePart": "problem-2",
    "skill": "Draw a corresponding height",
    "activityForm": "graded source-aligned drawing",
    "prompt": "Side b has been chosen as the base. Draw a segment showing the height corresponding to that base.",
    "responseType": "heightDrawing",
    "answerKey": [],
    "missingFeedback": "Draw a height segment on the source grid before submitting.",
    "correctFeedback": "Correct. The segment is perpendicular to base b and connects the line containing b to the opposite side.",
    "incorrectFeedback": "Not quite. Draw a vertical segment from the horizontal line containing base b to the opposite horizontal side. Both endpoints must lie on those two lines.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-draw-height-source.png",
      "alt": "The exact source parallelogram on a square grid with its bottom horizontal side labeled b.",
      "naturalWidth": 700,
      "naturalHeight": 370,
      "annotationGrid": {
        "originX": 104,
        "originY": 50,
        "cellX": 67.25,
        "cellY": 67,
        "columns": 8,
        "rows": 4
      },
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "displayMaxHeight": 370,
      "annotationInstructions": "Draw the required height by dragging between grid intersections. The app checks the segment's direction and endpoints."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one student-drawn corresponding height",
      "sourceObjects": [
        "source parallelogram",
        "base b",
        "square grid"
      ],
      "notes": "Uses the exact visual-only source crop and grades the student's line geometry instead of replacing the drawing task with a choice question."
    },
    "hints": [
      "Because base b is horizontal, its corresponding height must be vertical.",
      "Connect the bottom base line to the opposite horizontal side at a right angle."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 2, as a required source-aligned drawing.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-grid-area-3a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3a",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "3a",
    "routePart": "problem-3a",
    "skill": "Find the area of source parallelogram A",
    "activityForm": "numeric grid area with optional source-grid annotation",
    "prompt": "Find the area of parallelogram A in square units.",
    "responseType": "number",
    "answerKey": [
      "8"
    ],
    "missingFeedback": "Enter the area of parallelogram A before submitting.",
    "correctFeedback": "Correct. 4 x 2 = 8 square units.",
    "incorrectFeedback": "Not quite. Count a base and its perpendicular height on the square grid, then multiply them.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-grid-areas-source.png",
      "alt": "The exact source square grid containing parallelograms A, B, and C for Problem 3.",
      "naturalWidth": 1850,
      "naturalHeight": 520,
      "displayMaxHeight": 360,
      "annotationGrid": {
        "originX": 55,
        "originY": 50,
        "cellX": 77.43,
        "cellY": 77.5,
        "columns": 23,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to mark a base, height, or decomposition. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 3a",
      "sourceObjects": [
        "source parallelogram A",
        "square grid"
      ],
      "notes": "Keeps all three exact source figures visible for comparison and adds optional annotation snapped to the printed square grid while checking this lettered part independently."
    },
    "hints": [
      "A parallelogram's area is base times corresponding height.",
      "Use grid intervals, not the length of a slanted side, for the perpendicular height."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 3a, with optional source-grid annotation that does not affect grading.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-grid-area-3b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3b",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "3b",
    "routePart": "problem-3b",
    "skill": "Find the area of source parallelogram B",
    "activityForm": "numeric grid area with optional source-grid annotation",
    "prompt": "Find the area of parallelogram B in square units.",
    "responseType": "number",
    "answerKey": [
      "10"
    ],
    "missingFeedback": "Enter the area of parallelogram B before submitting.",
    "correctFeedback": "Correct. 5 x 2 = 10 square units.",
    "incorrectFeedback": "Not quite. Count a base and its perpendicular height on the square grid, then multiply them.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-grid-areas-source.png",
      "alt": "The exact source square grid containing parallelograms A, B, and C for Problem 3.",
      "naturalWidth": 1850,
      "naturalHeight": 520,
      "displayMaxHeight": 360,
      "annotationGrid": {
        "originX": 55,
        "originY": 50,
        "cellX": 77.43,
        "cellY": 77.5,
        "columns": 23,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to mark a base, height, or decomposition. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 3b",
      "sourceObjects": [
        "source parallelogram B",
        "square grid"
      ],
      "notes": "Keeps all three exact source figures visible for comparison and adds optional annotation snapped to the printed square grid while checking this lettered part independently."
    },
    "hints": [
      "A parallelogram's area is base times corresponding height.",
      "Use grid intervals, not the length of a slanted side, for the perpendicular height."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 3b, with optional source-grid annotation that does not affect grading.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-grid-area-3c",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3c",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "3c",
    "routePart": "problem-3c",
    "skill": "Find the area of source parallelogram C",
    "activityForm": "numeric grid area with optional source-grid annotation",
    "prompt": "Find the area of parallelogram C in square units.",
    "responseType": "number",
    "answerKey": [
      "8"
    ],
    "missingFeedback": "Enter the area of parallelogram C before submitting.",
    "correctFeedback": "Correct. Using the vertical side as base 2 and the horizontal corresponding height 4 gives 2 x 4 = 8 square units.",
    "incorrectFeedback": "Not quite. Count a base and its perpendicular height on the square grid, then multiply them.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-grid-areas-source.png",
      "alt": "The exact source square grid containing parallelograms A, B, and C for Problem 3.",
      "naturalWidth": 1850,
      "naturalHeight": 520,
      "displayMaxHeight": 360,
      "annotationGrid": {
        "originX": 55,
        "originY": 50,
        "cellX": 77.43,
        "cellY": 77.5,
        "columns": 23,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to mark a base, height, or decomposition. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 3c",
      "sourceObjects": [
        "source parallelogram C",
        "square grid"
      ],
      "notes": "Keeps all three exact source figures visible for comparison and adds optional annotation snapped to the printed square grid while checking this lettered part independently."
    },
    "hints": [
      "A parallelogram's area is base times corresponding height.",
      "Use grid intervals, not the length of a slanted side, for the perpendicular height."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 3c, with optional source-grid annotation that does not affect grading.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-corresponding-height-4",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "4",
    "routePart": "problem-4",
    "skill": "Choose the corresponding height",
    "activityForm": "single-choice geometry",
    "prompt": "If the side that is 6 units long is the base, what is its corresponding height?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "6",
        "label": "6 units"
      },
      {
        "id": "4.8",
        "label": "4.8 units"
      },
      {
        "id": "4",
        "label": "4 units"
      },
      {
        "id": "5",
        "label": "5 units"
      }
    ],
    "answerKey": [
      "4"
    ],
    "missingFeedback": "Choose a corresponding height before submitting.",
    "correctFeedback": "Correct. For the 6-unit base, the perpendicular distance to the opposite side is 4 units.",
    "incorrectFeedback": "Not quite. Match the chosen 6-unit base with the segment that meets its line at a right angle.",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-corresponding-height-source.png",
      "alt": "The exact source parallelogram with side lengths 5 and 6 and perpendicular distances 4 and 4.8.",
      "naturalWidth": 760,
      "naturalHeight": 500
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one corresponding-height choice",
      "sourceObjects": [
        "source parallelogram",
        "side 6",
        "perpendicular distances 4 and 4.8"
      ],
      "notes": "Uses the exact visual-only source crop and preserves all source measurements."
    },
    "hints": [
      "A corresponding height is perpendicular to the chosen base.",
      "The 4.8-unit segment corresponds to a different side."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 4.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-formula-area-5a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "5a",
    "routePart": "problem-5a",
    "skill": "Find the area of source parallelogram A",
    "activityForm": "numeric area with optional diagram annotation",
    "prompt": "Find the area of parallelogram A.",
    "responseType": "number",
    "answerKey": [
      "36"
    ],
    "missingFeedback": "Enter the area of parallelogram A before submitting.",
    "correctFeedback": "Correct. 9 x 4 = 36 square centimeters.",
    "incorrectFeedback": "Not quite. Multiply a base by its corresponding perpendicular height.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-formula-area-5a.png",
      "alt": "The exact source diagram for parallelogram A in Problem 5.",
      "naturalWidth": 700,
      "naturalHeight": 620,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 500,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 35,
        "rows": 31
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark useful measurements or a decomposition on the source diagram. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 5a",
      "sourceObjects": [
        "source parallelogram A",
        "given base and height labels"
      ],
      "notes": "Uses a visual-only crop containing only this source figure and adds optional annotation on a fine invisible square lattice; all response text remains app-rendered."
    },
    "hints": [
      "Area of a parallelogram is base times corresponding height.",
      "Do not substitute a slanted side for the perpendicular height."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 5a, with optional ungraded diagram annotation.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-formula-area-5b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "5b",
    "routePart": "problem-5b",
    "skill": "Find the area of source parallelogram B",
    "activityForm": "numeric area with optional diagram annotation",
    "prompt": "Find the area of parallelogram B.",
    "responseType": "number",
    "answerKey": [
      "20"
    ],
    "missingFeedback": "Enter the area of parallelogram B before submitting.",
    "correctFeedback": "Correct. The perpendicular height is 4 cm, so 5 x 4 = 20 square centimeters; the slanted 5 cm side is not the height for the horizontal base.",
    "incorrectFeedback": "Not quite. Multiply a base by its corresponding perpendicular height.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-formula-area-5b.png",
      "alt": "The exact source diagram for parallelogram B in Problem 5.",
      "naturalWidth": 560,
      "naturalHeight": 620,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 500,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 28,
        "rows": 31
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark useful measurements or a decomposition on the source diagram. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 5b",
      "sourceObjects": [
        "source parallelogram B",
        "given base and height labels"
      ],
      "notes": "Uses a visual-only crop containing only this source figure and adds optional annotation on a fine invisible square lattice; all response text remains app-rendered."
    },
    "hints": [
      "Area of a parallelogram is base times corresponding height.",
      "Do not substitute a slanted side for the perpendicular height."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 5b, with optional ungraded diagram annotation.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-formula-area-5c",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5c",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "5c",
    "routePart": "problem-5c",
    "skill": "Find the area of source parallelogram C",
    "activityForm": "symbolic area expression with optional diagram annotation",
    "prompt": "Find the area of parallelogram C.",
    "responseType": "shortAnswer",
    "answerKey": [
      "bh",
      "b*h",
      "b * h",
      "b x h",
      "b × h",
      "h*b",
      "h * b",
      "h x b",
      "h × b"
    ],
    "inputLabel": "Area expression",
    "inputPlaceholder": "Use b and h",
    "missingFeedback": "Enter the area of parallelogram C before submitting.",
    "correctFeedback": "Correct. Using base b and corresponding height h, the area is b x h, or bh.",
    "incorrectFeedback": "Not quite. Multiply a base by its corresponding perpendicular height.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-05-formula-area-5c.png",
      "alt": "The exact source diagram for parallelogram C in Problem 5.",
      "naturalWidth": 760,
      "naturalHeight": 700,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 500,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 38,
        "rows": 35
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark useful measurements or a decomposition on the source diagram. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one area answer for Problem 5c",
      "sourceObjects": [
        "source parallelogram C",
        "given base and height labels"
      ],
      "notes": "Uses a visual-only crop containing only this source figure and adds optional annotation on a fine invisible square lattice; all response text remains app-rendered."
    },
    "hints": [
      "Area of a parallelogram is base times corresponding height.",
      "Write the product using the labels b and h."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 5c, with optional ungraded diagram annotation.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-statement-6a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6a",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "6a",
    "routePart": "problem-6a",
    "skill": "Evaluate a statement about parallelograms",
    "activityForm": "agree-or-disagree with optional reasoning",
    "prompt": "Do you agree with this statement? A parallelogram has six sides.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose Agree or Disagree before submitting.",
    "correctFeedback": "Correct. A parallelogram is a quadrilateral, so it has 4 sides.",
    "incorrectFeedback": "Not quite. A parallelogram is a quadrilateral, so it has 4 sides.",
    "visualModelData": {
      "type": "parallelogramProperties"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one choice and one available explanation for Problem 6a",
      "sourceObjects": [
        "A parallelogram has six sides."
      ],
      "notes": "Checks each source statement independently. The explanation stays optional because the app does not reject valid prose it cannot reliably parse."
    },
    "hints": [
      "A parallelogram is a four-sided figure with two pairs of parallel opposite sides."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 6a.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-statement-6b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6b",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "6b",
    "routePart": "problem-6b",
    "skill": "Evaluate a statement about parallelograms",
    "activityForm": "agree-or-disagree with optional reasoning",
    "prompt": "Do you agree with this statement? Opposite sides of a parallelogram are parallel.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "agree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose Agree or Disagree before submitting.",
    "correctFeedback": "Correct. Both pairs of opposite sides of every parallelogram are parallel.",
    "incorrectFeedback": "Not quite. Both pairs of opposite sides of every parallelogram are parallel.",
    "visualModelData": {
      "type": "parallelogramProperties"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one choice and one available explanation for Problem 6b",
      "sourceObjects": [
        "Opposite sides of a parallelogram are parallel."
      ],
      "notes": "Checks each source statement independently. The explanation stays optional because the app does not reject valid prose it cannot reliably parse."
    },
    "hints": [
      "A parallelogram is a four-sided figure with two pairs of parallel opposite sides."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 6b.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-statement-6c",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6c",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "6c",
    "routePart": "problem-6c",
    "skill": "Evaluate a statement about parallelograms",
    "activityForm": "agree-or-disagree with optional reasoning",
    "prompt": "Do you agree with this statement? A parallelogram can have one pair or two pairs of parallel sides.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose Agree or Disagree before submitting.",
    "correctFeedback": "Correct. A parallelogram must have 2 pairs of parallel sides; one pair is not enough.",
    "incorrectFeedback": "Not quite. A parallelogram must have 2 pairs of parallel sides; one pair is not enough.",
    "visualModelData": {
      "type": "parallelogramProperties"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one choice and one available explanation for Problem 6c",
      "sourceObjects": [
        "A parallelogram can have one pair or two pairs of parallel sides."
      ],
      "notes": "Checks each source statement independently. The explanation stays optional because the app does not reject valid prose it cannot reliably parse."
    },
    "hints": [
      "A parallelogram is a four-sided figure with two pairs of parallel opposite sides."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 6c.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-statement-6d",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6d",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "6d",
    "routePart": "problem-6d",
    "skill": "Evaluate a statement about parallelograms",
    "activityForm": "agree-or-disagree with optional reasoning",
    "prompt": "Do you agree with this statement? All sides of a parallelogram have the same length.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose Agree or Disagree before submitting.",
    "correctFeedback": "Correct. Opposite sides are equal in length, but all four sides do not have to be equal.",
    "incorrectFeedback": "Not quite. Opposite sides are equal in length, but all four sides do not have to be equal.",
    "visualModelData": {
      "type": "parallelogramProperties"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one choice and one available explanation for Problem 6d",
      "sourceObjects": [
        "All sides of a parallelogram have the same length."
      ],
      "notes": "Checks each source statement independently. The explanation stays optional because the app does not reject valid prose it cannot reliably parse."
    },
    "hints": [
      "A parallelogram is a four-sided figure with two pairs of parallel opposite sides."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 6d.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-statement-6e",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6e",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "6e",
    "routePart": "problem-6e",
    "skill": "Evaluate a statement about parallelograms",
    "activityForm": "agree-or-disagree with optional reasoning",
    "prompt": "Do you agree with this statement? All angles of a parallelogram have the same measure.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "agree",
        "label": "Agree"
      },
      {
        "id": "disagree",
        "label": "Disagree"
      }
    ],
    "answerKey": [
      "disagree"
    ],
    "reasoningPrompt": "Explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Choose Agree or Disagree before submitting.",
    "correctFeedback": "Correct. Opposite angles are equal, but adjacent angles do not have to be equal.",
    "incorrectFeedback": "Not quite. Opposite angles are equal, but adjacent angles do not have to be equal.",
    "visualModelData": {
      "type": "parallelogramProperties"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one choice and one available explanation for Problem 6e",
      "sourceObjects": [
        "All angles of a parallelogram have the same measure."
      ],
      "notes": "Checks each source statement independently. The explanation stays optional because the app does not reject valid prose it cannot reliably parse."
    },
    "hints": [
      "A parallelogram is a four-sided figure with two pairs of parallel opposite sides."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 6e.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-fraction-area-7a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 7a",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "7a",
    "routePart": "problem-7a",
    "skill": "Find the area of six equal triangles",
    "activityForm": "numeric fractional area with optional subdivision annotation",
    "prompt": "A 1-square-meter square is split into 9 identical squares, and each small square is split into 2 identical triangles. What is the area, in square meters, of 6 triangles?",
    "responseType": "number",
    "answerKey": [
      "1/3"
    ],
    "missingFeedback": "Enter the area of 6 triangles before submitting.",
    "correctFeedback": "Correct. The square contains 18 equal triangles, so 6 triangles cover 6/18 = 1/3 square meter.",
    "incorrectFeedback": "Not quite. First find how many equal triangles make the whole 1-square-meter square, then take the fraction represented by 6 triangles.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "assets/practice/triangle-subdivision.svg",
      "alt": "One square meter divided into nine equal squares, with each small square divided diagonally into two equal triangles.",
      "naturalWidth": 430,
      "naturalHeight": 330,
      "displayMaxHeight": 460,
      "annotationGrid": {
        "originX": 88,
        "originY": 26,
        "cellSize": 82,
        "columns": 3,
        "rows": 3
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to group, outline, or compare equal triangles in the subdivision. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one fractional-area answer",
      "sourceObjects": [
        "one square meter",
        "9 identical squares",
        "2 triangles per small square"
      ],
      "notes": "The source explicitly suggests drawing a diagram; the app supplies that same 3-by-3 subdivision without labeling the answer and adds optional annotation snapped to its square cells."
    },
    "hints": [
      "Nine squares split into two triangles each make 18 equal triangles.",
      "Write 6 out of 18 as a fraction and simplify."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 7a, with optional ungraded subdivision annotation.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-count-7b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 5,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-5-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 7b",
    "practiceLessonGroup": "lesson-5-practice",
    "practiceLessonTitle": "Bases and Heights of Parallelograms",
    "practicePartLabel": "7b",
    "routePart": "problem-7b",
    "skill": "Scale an equal-triangle area model",
    "activityForm": "numeric triangle count with optional subdivision annotation",
    "prompt": "Using the same equal triangles, how many triangles are needed to compose a region that is 1 1/2 square meters?",
    "responseType": "number",
    "answerKey": [
      "27"
    ],
    "missingFeedback": "Enter the number of triangles before submitting.",
    "correctFeedback": "Correct. One square meter uses 18 triangles, and one half square meter uses 9 more, for 27 triangles.",
    "incorrectFeedback": "Not quite. Scale the 18 triangles in one square meter by 1 1/2.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "assets/practice/triangle-subdivision.svg",
      "alt": "One square meter divided into nine equal squares, with each small square divided diagonally into two equal triangles.",
      "naturalWidth": 430,
      "naturalHeight": 330,
      "displayMaxHeight": 460,
      "annotationGrid": {
        "originX": 88,
        "originY": 26,
        "cellSize": 82,
        "columns": 3,
        "rows": 3
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to group, outline, or compare equal triangles in the subdivision. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one triangle-count answer",
      "sourceObjects": [
        "one square meter",
        "18 equal triangles",
        "1 1/2 square meters"
      ],
      "notes": "Reuses the source's equal-triangle area model with optional annotation snapped to its square cells while checking Problem 7b independently."
    },
    "hints": [
      "One square meter contains 18 triangles.",
      "Half of 18 is 9."
    ],
    "implementationNotes": "Adds full coverage for Lesson 5 cumulative practice, Problem 7b, with optional ungraded subdivision annotation.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-equal-area-parallelograms-1",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "1",
    "routePart": "problem-1",
    "skill": "Compare parallelogram areas on a grid",
    "activityForm": "multi-select grid comparison with optional annotation and per-choice scratch calculations",
    "prompt": "Which three parallelograms have the same area as each other?",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "A"
      },
      {
        "id": "B",
        "label": "B"
      },
      {
        "id": "C",
        "label": "C"
      },
      {
        "id": "D",
        "label": "D"
      }
    ],
    "choiceScratch": {
      "enabled": true,
      "label": "Scratch calculation (optional)",
      "placeholder": "Write any notes",
      "maxLength": 100
    },
    "answerKey": [
      "A",
      "B",
      "D"
    ],
    "missingFeedback": "Select three parallelograms before submitting.",
    "correctFeedback": "Correct. A, B, and D each have area 15 square units. C is a 4-by-4 rectangle with area 16 square units.",
    "incorrectFeedback": "Not quite. For each figure, choose a convenient base, count its perpendicular height on the grid, and compare the products.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-equal-area-parallelograms.png",
      "alt": "The exact source square grid with parallelograms A, B, C, and D.",
      "naturalWidth": 1050,
      "naturalHeight": 760,
      "displayMaxHeight": 520,
      "annotationGrid": {
        "originX": 28,
        "originY": 23,
        "cellX": 52.37,
        "cellY": 52.31,
        "columns": 19,
        "rows": 13
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to mark bases, heights, or equal-area decompositions. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "each source parallelogram A-D considered in one select-three response",
      "sourceObjects": [
        "Parallelogram A",
        "Parallelogram B",
        "Parallelogram C",
        "Parallelogram D",
        "square grid"
      ],
      "notes": "Uses the exact visual-only source crop so every countable base and perpendicular height stays aligned to the grid, with optional ungraded annotation snapped to that printed grid. Each A-D choice also has a persistent 100-character scratch-calculation field that accepts arbitrary text and never affects selection or grading."
    },
    "hints": [
      "Area is base times perpendicular height.",
      "Do not compare slanted side lengths."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 1, with optional source-grid annotation, persistent ungraded scratch calculations beside choices A-D, and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-greatest-base-height-area-2",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "2",
    "routePart": "problem-2",
    "skill": "Compare base-height products",
    "activityForm": "single-choice decimal products with optional per-choice scratch notes",
    "prompt": "Which pair of base and height produces the greatest area? All measurements are in centimeters.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "A",
        "label": "A. b = 4, h = 3.5"
      },
      {
        "id": "B",
        "label": "B. b = 0.8, h = 20"
      },
      {
        "id": "C",
        "label": "C. b = 6, h = 2.25"
      },
      {
        "id": "D",
        "label": "D. b = 10, h = 1.4"
      }
    ],
    "choiceScratch": {
      "enabled": true,
      "label": "Scratch calculation (optional)",
      "placeholder": "Write any notes",
      "maxLength": 100
    },
    "answerKey": [
      "B"
    ],
    "missingFeedback": "Choose one base-height pair before submitting.",
    "correctFeedback": "Correct. Option B produces 0.8 × 20 = 16 square centimeters, greater than 14, 13.5, and 14.",
    "incorrectFeedback": "Not quite. Multiply each base by its corresponding height and compare all four products.",
    "visualModelData": {
      "type": "baseHeightPairs",
      "pairs": [
        {
          "id": "A",
          "base": "4",
          "height": "3.5"
        },
        {
          "id": "B",
          "base": "0.8",
          "height": "20"
        },
        {
          "id": "C",
          "base": "6",
          "height": "2.25"
        },
        {
          "id": "D",
          "base": "10",
          "height": "1.4"
        }
      ]
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "each source base-height pair compared",
      "sourceObjects": [
        "four source base-height pairs"
      ],
      "notes": "The source problem is text-only. The app comparison board repeats the four given pairs without calculating or highlighting the greatest product. Each choice has an optional 100-character scratch-note field that accepts arbitrary text and never affects grading."
    },
    "hints": [
      "Area of a parallelogram is b × h.",
      "Compute all four products before deciding."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 2, with optional persistent per-choice scratch notes and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-missing-length-3a",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3a",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "3a",
    "routePart": "problem-3a",
    "skill": "Find the missing length in source parallelogram A",
    "activityForm": "numeric missing dimension with optional annotation",
    "prompt": "Parallelogram A has area 10 square units. Find its missing length labeled with a question mark.",
    "responseType": "number",
    "answerKey": [
      "2"
    ],
    "missingFeedback": "Enter the missing length for parallelogram A.",
    "correctFeedback": "Correct. 10 divided by the 5-unit base is 2 units.",
    "incorrectFeedback": "Not quite. Use area = base × corresponding height and divide the area by the known dimension.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-missing-lengths-source.png",
      "alt": "The exact source diagrams A, B, and C with areas, known measurements, and missing lengths.",
      "naturalWidth": 1380,
      "naturalHeight": 660,
      "displayMaxHeight": 420,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 69,
        "rows": 33
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a known base, its corresponding height, or a division plan on the exact source diagrams. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-length answer for Problem 3a",
      "sourceObjects": [
        "source parallelogram A",
        "given area",
        "known corresponding dimension"
      ],
      "notes": "Keeps all three exact source figures visible for comparison while checking this lettered part independently and provides optional ungraded annotation on a fine source-coordinate lattice."
    },
    "hints": [
      "Divide the given area by the known base or corresponding height.",
      "Use a perpendicular height, not an unrelated segment."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 3a, with optional source-diagram annotation and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-missing-length-3b",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3b",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "3b",
    "routePart": "problem-3b",
    "skill": "Find the missing length in source parallelogram B",
    "activityForm": "numeric missing dimension with optional annotation",
    "prompt": "Parallelogram B has area 21 square units. Find its missing length labeled with a question mark.",
    "responseType": "number",
    "answerKey": [
      "3"
    ],
    "missingFeedback": "Enter the missing length for parallelogram B.",
    "correctFeedback": "Correct. 21 divided by the 7-unit height is 3 units.",
    "incorrectFeedback": "Not quite. Use area = base × corresponding height and divide the area by the known dimension.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-missing-lengths-source.png",
      "alt": "The exact source diagrams A, B, and C with areas, known measurements, and missing lengths.",
      "naturalWidth": 1380,
      "naturalHeight": 660,
      "displayMaxHeight": 420,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 69,
        "rows": 33
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a known base, its corresponding height, or a division plan on the exact source diagrams. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-length answer for Problem 3b",
      "sourceObjects": [
        "source parallelogram B",
        "given area",
        "known corresponding dimension"
      ],
      "notes": "Keeps all three exact source figures visible for comparison while checking this lettered part independently and provides optional ungraded annotation on a fine source-coordinate lattice."
    },
    "hints": [
      "Divide the given area by the known base or corresponding height.",
      "Use a perpendicular height, not an unrelated segment."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 3b, with optional source-diagram annotation and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-missing-length-3c",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3c",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "3c",
    "routePart": "problem-3c",
    "skill": "Find the missing length in source parallelogram C",
    "activityForm": "numeric missing dimension with optional annotation",
    "prompt": "Parallelogram C has area 25 square units. Find its missing length labeled with a question mark.",
    "responseType": "number",
    "answerKey": [
      "5"
    ],
    "missingFeedback": "Enter the missing length for parallelogram C.",
    "correctFeedback": "Correct. 25 divided by the 5-unit corresponding height is 5 units; the 2.5-unit segment is not the corresponding height for that base.",
    "incorrectFeedback": "Not quite. Use area = base × corresponding height and divide the area by the known dimension.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-missing-lengths-source.png",
      "alt": "The exact source diagrams A, B, and C with areas, known measurements, and missing lengths.",
      "naturalWidth": 1380,
      "naturalHeight": 660,
      "displayMaxHeight": 420,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 20,
        "columns": 69,
        "rows": 33
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a known base, its corresponding height, or a division plan on the exact source diagrams. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-length answer for Problem 3c",
      "sourceObjects": [
        "source parallelogram C",
        "given area",
        "known corresponding dimension"
      ],
      "notes": "Keeps all three exact source figures visible for comparison while checking this lettered part independently and provides optional ungraded annotation on a fine source-coordinate lattice."
    },
    "hints": [
      "Divide the given area by the known base or corresponding height.",
      "Use a perpendicular height, not an unrelated segment."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 3c, with optional source-diagram annotation and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-dockland-parallelogram-area",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "4",
    "routePart": "problem-4",
    "skill": "Use base and height to find parallelogram area",
    "activityForm": "numeric area",
    "prompt": "The Dockland Building in Hamburg, Germany is shaped like a parallelogram. If the length of the building is 86 meters and its height is 55 meters, what is the area of this face of the building?",
    "responseType": "number",
    "answerKey": [
      "4730"
    ],
    "visualModelData": {
      "type": "sourcePhoto",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-dockland-building.png",
      "alt": "Dockland Building in Hamburg, Germany, with a parallelogram-shaped face.",
      "caption": "Dockland Building, Hamburg, Germany",
      "naturalWidth": 860,
      "naturalHeight": 505
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "missingFeedback": "Enter the area of the building face before submitting.",
    "correctFeedback": "Correct. Using the 86-meter length as the base and the 55-meter corresponding height gives 86 × 55 = 4,730 square meters.",
    "incorrectFeedback": "Not quite. Use the building's 86-meter length as the base and multiply it by the 55-meter perpendicular height.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for the Dockland building face",
      "sourceObjects": [
        "Dockland Building photograph",
        "length 86 meters",
        "height 55 meters"
      ],
      "notes": "The app workspace uses a high-resolution visual-only crop rendered from the cited PDF page and displays it at no more than its natural raster size. The dimensions and question remain app-rendered text."
    },
    "hints": [
      "Use the corresponding height, not a slanted side.",
      "86 × 55 can be found as 86 × 50 plus 86 × 5."
    ],
    "implementationNotes": "Directly adapted from Lesson 6 cumulative practice, Problem 4, with a high-resolution render of the exact source photograph and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-corresponding-height-segments-5",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "5",
    "routePart": "problem-5",
    "skill": "Identify possible corresponding height segments",
    "activityForm": "multi-select geometry with optional annotation",
    "prompt": "Select all segments that could represent a corresponding height if side m is the base.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "e",
        "label": "e"
      },
      {
        "id": "f",
        "label": "f"
      },
      {
        "id": "g",
        "label": "g"
      },
      {
        "id": "h",
        "label": "h"
      },
      {
        "id": "j",
        "label": "j"
      },
      {
        "id": "k",
        "label": "k"
      },
      {
        "id": "n",
        "label": "n"
      }
    ],
    "answerKey": [
      "e",
      "f",
      "j",
      "k"
    ],
    "missingFeedback": "Select at least one segment before submitting.",
    "correctFeedback": "Correct. Segments e, f, j, and k are perpendicular to base m and span the distance between the parallel lines containing m and the opposite side. Segments g and h are perpendicular to side n instead, and n is a side of the parallelogram.",
    "incorrectFeedback": "Not quite. Because m is horizontal, look for every vertical segment that spans the distance between the parallel lines containing m and the opposite side. A segment can represent that height even when it is drawn outside the parallelogram.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-corresponding-heights-source.png",
      "alt": "The exact source parallelogram with base m and candidate segments e, f, g, h, j, k, and n.",
      "naturalWidth": 690,
      "naturalHeight": 390,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 390,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 10,
        "columns": 69,
        "rows": 39
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to trace side m, compare perpendicular segments, or test a possible corresponding height. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 7,
      "appActionTargets": 7,
      "unitOfAction": "each labeled source segment e, f, g, h, j, k, and n",
      "sourceObjects": [
        "base m",
        "segments e, f, g, h, j, k, and n",
        "right-angle markers"
      ],
      "notes": "Uses the exact visual-only source crop so endpoint placement and right-angle markers remain available for the classification, with optional ungraded annotation on a fine source-coordinate lattice. The complete accepted set e, f, j, and k is verified against the official teacher solution; k represents the same perpendicular distance even though it is outside the parallelogram."
    },
    "hints": [
      "Because m is horizontal, its corresponding heights are vertical.",
      "A valid height spans the perpendicular distance between the parallel lines containing base m and the opposite side, and it may be drawn outside the parallelogram."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 5, with the official select-all answer set e, f, j, and k, optional source-diagram annotation, and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-shaded-parallelogram-area-6",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 6,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-6-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-6-practice",
    "practiceLessonTitle": "Area of Parallelograms",
    "practicePartLabel": "6",
    "routePart": "problem-6",
    "skill": "Find a shaded area by subtracting corner triangles",
    "activityForm": "numeric area with optional reasoning and annotation",
    "prompt": "Find the area of the shaded region. All measurements are in centimeters.",
    "responseType": "number",
    "answerKey": [
      "80"
    ],
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the area of the shaded region before submitting.",
    "correctFeedback": "Correct. The outer rectangle is 14 by 10, with area 140. The four corner right triangles have total area 6 + 24 + 6 + 24 = 60, so the shaded area is 80 square centimeters.",
    "incorrectFeedback": "Not quite. Find the 14-by-10 outer rectangle, then subtract the four right-triangle corner areas.",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-06-shaded-region-source.png",
      "alt": "The exact source shaded parallelogram inside a rectangle, with outer side segments labeled 2, 12, 4, and 6.",
      "naturalWidth": 700,
      "naturalHeight": 650,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 520,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 10,
        "columns": 70,
        "rows": 65
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to outline the outer rectangle, separate corner triangles, or plan a subtraction strategy. Your marks are scratch work and do not affect grading."
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric shaded-area answer and one available explanation",
      "sourceObjects": [
        "shaded inner parallelogram",
        "14-by-10 outer rectangle",
        "four corner right triangles",
        "all source measurements"
      ],
      "notes": "Uses the exact visual-only source crop with optional ungraded annotation for decomposition. The source-requested reasoning remains available but optional because the numeric area can be graded reliably without brittle prose matching."
    },
    "hints": [
      "Combine 2 and 12 to get the outer width, and 6 and 4 to get the outer height.",
      "Subtract the four corner right triangles from the outer rectangle."
    ],
    "implementationNotes": "Adds full coverage for Lesson 6 cumulative practice, Problem 6, with optional source-diagram annotation and no redundant answer sample.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-area",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5a",
    "skill": "Calculate area of a parallelogram",
    "activityForm": "numeric area",
    "prompt": "A parallelogram has a base of 12 meters and a height of 1.5 meters. What is its area?",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "visualModelData": {
      "type": "parallelogramArea",
      "base": 12,
      "height": 1.5,
      "unit": "m"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "missingFeedback": "Enter the parallelogram's area before submitting.",
    "correctFeedback": "Correct. The area is base × height, so 12 × 1.5 = 18 square meters.",
    "incorrectFeedback": "Not quite. Multiply the 12-meter base by its 1.5-meter perpendicular height.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for subproblem 5a",
      "sourceObjects": [
        "subproblem 5a parallelogram base and height"
      ],
      "notes": "Implements source Problem 5a as one practice card rather than claiming all of Problem 5. The app-added diagram only restates the given base and height; the source subproblem itself is text-only."
    },
    "hints": [
      "Use base × height.",
      "12 × 1.5 is the same as 12 × 1 + 12 × 0.5."
    ],
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "5a",
    "practicePartOrder": 6,
    "routePart": "problem-5a"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-parallelogram-missing-base",
    "section": "B",
    "sectionName": "Parallelograms",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5c",
    "skill": "Find an unknown base from area and height",
    "activityForm": "numeric missing dimension",
    "prompt": "A parallelogram has area 28 square feet and height 4 feet. What is its base?",
    "responseType": "number",
    "answerKey": [
      "7"
    ],
    "visualModelData": {
      "type": "parallelogramMissing",
      "area": 28,
      "height": 4,
      "unit": "ft"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "missingFeedback": "Enter the missing base before submitting.",
    "correctFeedback": "Correct. Since base × 4 = 28, the base is 28 ÷ 4 = 7 feet.",
    "incorrectFeedback": "Not quite. Divide the 28-square-foot area by the 4-foot height to find the base.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-base answer for subproblem 5c",
      "sourceObjects": [
        "subproblem 5c parallelogram area and height"
      ],
      "notes": "Implements source Problem 5c as one practice card and keeps the unknown-dimension action intact. The app-added diagram only restates the given area and height; the source subproblem itself is text-only."
    },
    "hints": [
      "Area = base × height.",
      "Ask: what number times 4 is 28?"
    ],
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5c.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "5c",
    "practicePartOrder": 8,
    "routePart": "problem-5c"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-equal-area-parts",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1a",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "1a",
    "routePart": "problem-1a",
    "skill": "Compare the areas of two partitioned shapes",
    "activityForm": "single-choice area comparison with optional reasoning",
    "prompt": "The dashed line divides Clare's quadrilateral into a triangle and a rectangle. Do the two resulting shapes have the same area?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "yes",
        "label": "Yes, the two shapes have the same area."
      },
      {
        "id": "no",
        "label": "No, the two shapes have different areas."
      }
    ],
    "answerKey": [
      "yes"
    ],
    "reasoningPrompt": "Explain how the grid supports your answer.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-07-equal-area-parts-source.png",
      "alt": "The exact source quadrilateral on a square grid, divided by a vertical dashed line into a triangle and a rectangle.",
      "naturalWidth": 720,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 60,
        "originY": 33,
        "cellX": 74,
        "cellY": 74,
        "columns": 8,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to count or compare the two areas. Your marks are scratch work and do not affect grading."
    },
    "missingFeedback": "Choose whether the two parts have the same area.",
    "correctFeedback": "Correct. The rectangle is 2 by 4, so its area is 8 square units. The triangle is half of a 4-by-4 square, so its area is also 8 square units.",
    "incorrectFeedback": "Not quite. Use the grid to calculate each part separately: the rectangle is 2 by 4, and the triangle is half of a 4-by-4 square.",
    "hints": [
      "Count the rectangle's base and height, then place the triangle inside a 4-by-4 square."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one same-area decision for Problem 1a",
      "sourceObjects": [
        "source square grid",
        "source quadrilateral",
        "source dashed partition"
      ],
      "notes": "Uses an immutable crop of the exact source diagram with calibrated optional grid annotation. The optional explanation and scratch marks do not affect grading, and no sample repeats the worked correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 1a with source-aligned optional annotation and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-identical-parts",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1b",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "1b",
    "routePart": "problem-1b",
    "skill": "Compare the shapes in a partition",
    "activityForm": "single-choice congruence comparison with optional reasoning",
    "prompt": "Did Clare partition the quadrilateral into two identical shapes?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "yes",
        "label": "Yes, the two shapes are identical."
      },
      {
        "id": "no",
        "label": "No, the two shapes are not identical."
      }
    ],
    "answerKey": [
      "no"
    ],
    "reasoningPrompt": "Describe the two resulting shapes.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-07-equal-area-parts-source.png",
      "alt": "The exact source quadrilateral on a square grid, divided by a vertical dashed line into a triangle and a rectangle.",
      "naturalWidth": 720,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 60,
        "originY": 33,
        "cellX": 74,
        "cellY": 74,
        "columns": 8,
        "rows": 6
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares on the exact source grid to compare the two resulting outlines or areas. Your marks are scratch work and do not affect grading."
    },
    "missingFeedback": "Choose whether the two parts are identical shapes.",
    "correctFeedback": "Correct. Equal area does not make the parts identical: one part is a triangle and the other is a rectangle.",
    "incorrectFeedback": "Not quite. Compare the outlines, not only the areas. One part has three sides and the other has four.",
    "hints": [
      "Identical shapes must have the same outline after a move, turn, or flip."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one identical-shape decision for Problem 1b",
      "sourceObjects": [
        "source square grid",
        "source quadrilateral",
        "source dashed partition"
      ],
      "notes": "Keeps Problem 1b independent from the equal-area decision in 1a while reusing the same exact source evidence and calibrated optional annotation. No sample repeats the correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 1b with source-aligned optional annotation and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-compose-two-copies",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "2",
    "routePart": "problem-2",
    "skill": "Test a two-triangle composition claim",
    "activityForm": "interactive triangle composition",
    "prompt": "Triangle R is a right triangle. Can two copies of Triangle R compose a parallelogram that is not a square?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "yes",
        "label": "Yes"
      },
      {
        "id": "no",
        "label": "No"
      }
    ],
    "answerKey": [
      "yes"
    ],
    "visualModelData": {
      "type": "triangleComposition",
      "sourceReferencePath": "artifacts/unit 1/_practice-crops/lesson-07-compose-triangles-source.png",
      "sourceReferenceWidth": 720,
      "sourceReferenceHeight": 370,
      "piecePoints": "0,0 164,0 164,164",
      "alt": "Two movable, rotatable copies of source Triangle R."
    },
    "reasoningPrompt": "Optional: Explain why your construction is a parallelogram that is not a square.",
    "missingFeedback": "Choose Yes or No before submitting.",
    "correctFeedback": "Correct. Rotate one copy 180 degrees and join the triangles along a leg. The outside boundary has two pairs of opposite parallel sides, and its adjacent sides have different lengths, so it is a parallelogram but not a square.",
    "incorrectFeedback": "Not quite. Joining the hypotenuses makes a square, but that is not the only complete-side join. Rotate one copy 180 degrees and try joining the triangles along a leg.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one tested construction using two copies of Triangle R",
      "sourceObjects": [
        "Triangle R",
        "copy of Triangle R"
      ],
      "notes": "Uses two movable source-traced copies of Triangle R so the student can test complete-side joins. The exploratory construction is separate from the source's Yes/No answer and optional explanation."
    },
    "hints": [
      "Test more than one matching side. After each join, trace the outside boundary and check both pairs of opposite sides."
    ],
    "implementationNotes": "Rebuilt from Lesson 7 cumulative practice, Problem 2, with two draggable, rotatable source-traced triangles, complete-edge snapping, a separate Yes/No response, optional reasoning, and no sample that repeats the correct feedback.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-impossible-composition",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "3",
    "routePart": "problem-3",
    "skill": "Identify parallelograms obtainable from two congruent triangles",
    "activityForm": "single-choice source diagram analysis",
    "prompt": "Two copies of the yellow triangle are used to compose a parallelogram. Which parallelogram cannot result?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "a",
        "label": "A"
      },
      {
        "id": "b",
        "label": "B"
      },
      {
        "id": "c",
        "label": "C"
      },
      {
        "id": "d",
        "label": "D"
      }
    ],
    "answerKey": [
      "c"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-07-three-compositions-source.png",
      "alt": "The exact source yellow triangle and candidate parallelograms A, B, C, and D on square grids.",
      "naturalWidth": 1710,
      "naturalHeight": 590,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 10,
        "columns": 171,
        "rows": 59
      },
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks like tracing-paper strokes to compare the source triangle's side directions and lengths with candidates A-D. Your marks are scratch work and do not affect grading."
    },
    "missingFeedback": "Choose the parallelogram that cannot be composed from two copies of the source triangle.",
    "correctFeedback": "Correct. The three side lengths of the source triangle give three possible complete-side joins. A, B, and D match those outcomes; C does not.",
    "incorrectFeedback": "Not quite. Imagine joining two copies along each of the triangle's three different sides. Compare the two remaining side lengths with each candidate parallelogram.",
    "hints": [
      "A triangle has three sides, so there are three materially different complete-side joins to test."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one impossible-composition choice",
      "sourceObjects": [
        "source scalene triangle",
        "candidate parallelograms A-D",
        "square grids"
      ],
      "notes": "Uses one immutable crop containing all source evidence plus optional natural-pixel line annotation that serves the source's tracing-paper suggestion. The answer was checked against the source teacher solution, and no sample repeats the correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 3 with optional source-aligned tracing marks and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-quadrilateral-cuts",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problems 4a-4b (intentionally combined)",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "4a-b",
    "routePart": "problem-4a-4b",
    "skill": "Construct and classify quadrilaterals made from two identical triangles",
    "activityForm": "three independently checked grid constructions with classifications",
    "prompt": "Draw at least three different quadrilaterals that a single diagonal cuts into two identical triangles. Identify each quadrilateral. At least one must have non-right angles.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "validationMode": "identicalTriangleCuts",
      "columns": 12,
      "rows": 8,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "retainInactiveDrawings": true,
      "retainCompletedDrawingsOnly": true,
      "classificationChoices": [
        {
          "id": "parallelogram",
          "label": "Parallelogram"
        },
        {
          "id": "rectangle",
          "label": "Rectangle"
        },
        {
          "id": "square",
          "label": "Square"
        },
        {
          "id": "rhombus",
          "label": "Rhombus"
        }
      ]
    },
    "missingFeedback": "Complete, classify, and check all three drawings.",
    "correctFeedback": "Correct. Each diagonal divides its quadrilateral into two identical triangles, all three outlines are different, and at least one has non-right angles.",
    "incorrectFeedback": "One or more drawings still needs revision. Each must be a different quadrilateral whose shown diagonal makes two identical triangles, and at least one must have non-right angles.",
    "hints": [
      "Every parallelogram is divided into two identical triangles by either diagonal.",
      "Try a rectangle, then make at least one slanted parallelogram."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 6,
      "appActionTargets": 6,
      "unitOfAction": "three source-order drawings and one classification for each drawing",
      "sourceObjects": [
        "blank square grid",
        "three student-drawn quadrilaterals",
        "three cut lines",
        "three shape names"
      ],
      "notes": "Problems 4a and 4b are intentionally combined because each classification describes the student's own corresponding drawing. Each drawing is still independently selected, classified, and checked. Every other completed drawing remains on the same grid as a labeled, non-editable reference with its diagonal cut, so the student can compare all three outlines in either switching direction. Its construction workspace replaces a generic annotation layer, and no sample repeats the correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problems 4a-4b as one coherent construction-and-classification part with persistent completed-drawing references and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-5a",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "5a",
    "routePart": "problem-5a",
    "skill": "Use area = base x corresponding height",
    "activityForm": "numeric area calculation with a proportional app-provided parallelogram",
    "prompt": "A parallelogram has base 9 units and corresponding height 2/3 unit. What is its area?",
    "responseType": "number",
    "answerKey": [
      "6"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship",
      "showGrid": false,
      "baseUnits": 9,
      "heightUnits": 0.6666666666666666,
      "baseLabel": "base 9 units",
      "heightLabel": "height 2/3 unit",
      "alt": "A large, grid-free proportional parallelogram with base 9 units and corresponding height 2/3 unit."
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. 9 x 2/3 = 6 square units.",
    "incorrectFeedback": "Not quite. Multiply the base 9 by the corresponding height 2/3.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5a",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "The source item is text-only. The app adds a large, plain-background parallelogram whose base and perpendicular height use one scale, so its 9-to-2/3 proportion is exact. Only the two given dimensions are labeled, and no sample repeats the correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 5a with a large grid-free 9-by-2/3 proportional scaffold and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-5b",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "5b",
    "routePart": "problem-5b",
    "skill": "Use area = base x corresponding height",
    "prompt": "A parallelogram has base 9 units and area 12 square units. What is the corresponding height?",
    "activityForm": "numeric missing-height calculation with a proportional app-provided parallelogram",
    "responseType": "number",
    "answerKey": [
      "4/3",
      "1 1/3",
      "1.3333333333333333"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship",
      "showGrid": false,
      "baseUnits": 9,
      "heightUnits": 1.3333333333333333,
      "baseLabel": "base 9 units",
      "heightLabel": "height ?",
      "areaLabel": "Area: 12 square units",
      "alt": "A large, grid-free proportional parallelogram with base 9 units, area 12 square units, and an unknown corresponding height."
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. The height is 12 divided by 9, or 4/3 units.",
    "incorrectFeedback": "Not quite. Divide the area 12 by the base 9.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5b",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "The source item is text-only. The app adds a large, plain-background parallelogram whose hidden geometric height is 12 divided by 9, preserving the exact 9-to-4/3 proportion without displaying the missing height. The visual labels only the given base and area."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 5b with a large grid-free proportional scaffold that keeps the missing height unlabeled and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-5c",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5c",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "5c",
    "routePart": "problem-5c",
    "skill": "Use area = base x corresponding height",
    "prompt": "A parallelogram has area 7 square units and a corresponding height of 1/4 unit. What is the base?",
    "activityForm": "numeric missing-base calculation with a proportional app-provided parallelogram",
    "responseType": "number",
    "answerKey": [
      "28"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship",
      "showGrid": false,
      "baseUnits": 28,
      "heightUnits": 0.25,
      "baseLabel": "base ?",
      "heightLabel": "height 1/4 unit",
      "areaLabel": "Area: 7 square units",
      "alt": "A large, grid-free proportional parallelogram with area 7 square units, corresponding height 1/4 unit, and an unknown base."
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. The base is 7 divided by 1/4, or 28 units.",
    "incorrectFeedback": "Not quite. Divide the area 7 by the height 1/4.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5c",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "The source item is text-only. The app adds a large, plain-background parallelogram whose hidden geometric base is 7 divided by 1/4, preserving the exact 28-to-1/4 proportion without displaying the missing base. Its intentionally very shallow appearance is mathematically faithful."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 5c with a large grid-free proportional scaffold that keeps the missing base unlabeled and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson7-base-n-heights",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-7-practice",
    "practiceLessonTitle": "From Parallelograms to Triangles",
    "practicePartLabel": "6",
    "routePart": "problem-6",
    "skill": "Identify heights corresponding to a slanted base",
    "activityForm": "multi-select source diagram analysis",
    "prompt": "Select all segments that could represent the height if side n is the base.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "e",
        "label": "e"
      },
      {
        "id": "f",
        "label": "f"
      },
      {
        "id": "g",
        "label": "g"
      },
      {
        "id": "h",
        "label": "h"
      },
      {
        "id": "m",
        "label": "m"
      },
      {
        "id": "n",
        "label": "n"
      },
      {
        "id": "j",
        "label": "j"
      },
      {
        "id": "k",
        "label": "k"
      }
    ],
    "answerKey": [
      "g",
      "h"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-07-base-n-heights-source.png",
      "alt": "The exact source parallelogram with side n and candidate segments e, f, g, h, m, j, and k.",
      "naturalWidth": 810,
      "naturalHeight": 570,
      "displayVariant": "compactSquare",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellSize": 10,
        "columns": 81,
        "rows": 57
      },
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test segments perpendicular to side n or compare the labeled candidates. Your marks are scratch work and do not affect grading."
    },
    "missingFeedback": "Select every segment that could be a height corresponding to base n.",
    "correctFeedback": "Correct. Segments g and h are perpendicular to side n and connect a vertex on one n-side to the line containing the opposite n-side.",
    "incorrectFeedback": "Not quite. A corresponding height must be perpendicular to base n and span between the two parallel lines containing the n-sides.",
    "hints": [
      "Use the right-angle marks. The height for base n is not vertical in this drawing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one select-all response for Problem 6",
      "sourceObjects": [
        "source parallelogram",
        "base n",
        "candidate segments e-k",
        "right-angle markers"
      ],
      "notes": "Uses an immutable crop of the exact source geometry, preserves all eight answer options, and adds optional natural-pixel line annotation for testing perpendicular heights. No sample repeats the correct feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 7 Practice Problem 6 with optional source-aligned line annotation and no redundant sample.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Family Support Material",
    "sourceFolder": "Family Support Materials",
    "sourceFile": "Family Support Materials.pdf",
    "sourcePage": 8,
    "sourceItem": "Supplemental family-support triangle",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "Extra",
    "practicePartOrder": 99,
    "routePart": "supplemental-grid-triangle",
    "previewPath": "_rendered-previews/Family Support Materials/Family-Support-Materials/page-008.png",
    "sourcePreviewMode": "afterSubmit",
    "skill": "Calculate area of a triangle",
    "activityForm": "numeric area with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the blue triangle shown on the grid. Use the labeled lengths and the grid to reason.",
    "responseType": "number",
    "answerKey": [
      "7.5",
      "7 1/2",
      "15/2"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-grid-triangle-source.png",
      "alt": "The exact source grid triangle with two sides labeled 5 and an unlabeled perpendicular height that can be inferred from the grid.",
      "naturalWidth": 890,
      "naturalHeight": 500,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 89,
        "rows": 50
      }
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes-with-locked-preview",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric triangle-area answer",
      "sourceObjects": [
        "grid triangle with two sides labeled 5",
        "perpendicular height inferred from the grid"
      ],
      "notes": "The rendered source page contains solution text, so the source modal is locked until after a correct auto-graded response. The card uses an exact visual-only crop and does not label the inferred height before the sample. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "hints": [
      "A triangle is half of a related parallelogram.",
      "Use one labeled side as a base, then count grid squares to find the perpendicular height."
    ],
    "sampleAnswer": "Use the horizontal side as base 5. The grid shows a perpendicular height of 3, so 1/2 × 5 × 3 = 7.5 square units.",
    "implementationNotes": "Uses an exact visual-only crop from Family Support Materials page 8 and preserves the source's inferred-height action. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning. The retained sample adds a worked base-height explanation that is not present in the card's generic correct feedback.",
    "source": "Family Support Materials/Family Support Materials.pdf p.8"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-reasoning",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problems 1a-1b (intentionally combined)",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "1a-b",
    "practicePartOrder": 1,
    "routePart": "problem-1a-1b",
    "skill": "Use two parallelogram strategies",
    "activityForm": "two independently graded strategy questions",
    "prompt": "Diego and Jada each used a parallelogram to find the area of the same right triangle. Answer each strategy question separately.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "diego",
        "label": "Diego's strategy",
        "prompt": "Which calculation uses Diego's rearranged parallelogram to find the triangle's area?",
        "choices": [
          {
            "id": "threeByFour",
            "label": "3 × 4 = 12 square feet"
          },
          {
            "id": "halfThreeByFour",
            "label": "1/2 × 3 × 4 = 6 square feet"
          },
          {
            "id": "threeByEight",
            "label": "3 × 8 = 24 square feet"
          }
        ],
        "correctChoiceId": "threeByFour",
        "correctFeedback": "Correct. Diego rearranged the original triangle into a 3-foot by 4-foot parallelogram, so the same pieces have area 3 × 4 = 12 square feet.",
        "incorrectFeedback": "Look at Diego's final rearranged shape. It uses the same pieces as the original triangle and has base 3 feet and height 4 feet."
      },
      {
        "id": "jada",
        "label": "Jada's strategy",
        "prompt": "Which calculation uses Jada's two-copy parallelogram to find one triangle's area?",
        "choices": [
          {
            "id": "threeByEight",
            "label": "3 × 8 = 24 square feet"
          },
          {
            "id": "halfThreeByEight",
            "label": "1/2 × (3 × 8) = 12 square feet"
          },
          {
            "id": "halfThreeByFour",
            "label": "1/2 × (3 × 4) = 6 square feet"
          }
        ],
        "correctChoiceId": "halfThreeByEight",
        "correctFeedback": "Correct. Jada's parallelogram has two copies of the triangle and area 3 × 8 = 24 square feet, so one triangle has half that area: 12 square feet.",
        "incorrectFeedback": "Jada's parallelogram contains two congruent copies of the original triangle. Find the parallelogram's area, then take half."
      }
    ],
    "answerKey": [
      "diego:threeByFour",
      "jada:halfThreeByEight"
    ],
    "visualModelData": {
      "type": "sourceVisualGallery",
      "figures": [
        {
          "id": "diego",
          "label": "Diego cuts and rearranges one triangle",
          "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-diego-strategy-source.png",
          "alt": "Diego's exact source diagrams showing the 3-by-8 right triangle cut and rearranged into a 3-by-4 parallelogram.",
          "naturalWidth": 1400,
          "naturalHeight": 625
        },
        {
          "id": "jada",
          "label": "Jada joins two copies",
          "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-jada-strategy-source.png",
          "alt": "Jada's exact source diagrams showing one 3-by-8 right triangle and two copies forming a parallelogram.",
          "naturalWidth": 1100,
          "naturalHeight": 645
        }
      ]
    },
    "readyFeedback": "Submit Diego's and Jada's strategy questions separately for feedback.",
    "missingFeedback": "Answer and submit both strategy questions.",
    "correctFeedback": "Correct. Diego preserves area by rearranging one triangle into a 3-by-4 parallelogram. Jada doubles the triangle to make a 3-by-8 parallelogram and then takes half. Both strategies give 12 square feet.",
    "incorrectFeedback": "Review the feedback under each strategy. Diego rearranges one triangle without changing its area; Jada's parallelogram contains two copies.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "two independently submitted strategy calculations, one for Diego and one for Jada",
      "sourceObjects": [
        "Diego's decomposed-and-rearranged parallelogram",
        "Jada's two-copy parallelogram"
      ],
      "notes": "Problems 1a and 1b are intentionally combined because they compare two named strategies for the same source triangle. Each strategy still has its own exact crop, selectable response target, submission, and feedback."
    },
    "hints": [
      "A related parallelogram has twice the triangle's area.",
      "Use the base and height visible in the diagram."
    ],
    "implementationNotes": "Rebuilt from Lesson 8 cumulative practice, Problem 1, with exact source-derived strategy visuals and independently graded questions for parts a and b.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-2a",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2a",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "2a",
    "practicePartOrder": 2,
    "routePart": "problem-2a",
    "skill": "Find triangle area from a square grid",
    "activityForm": "numeric source-diagram area calculation with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the source triangle in square units. Explain or show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "12"
    ],
    "reasoningPrompt": "Explain or show how the grid gives the base, height, or a valid decomposition.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-triangle-area-2a.png",
      "alt": "The exact source square-grid triangle for Problem 2a.",
      "naturalWidth": 660,
      "naturalHeight": 540,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 21,
        "originY": 25,
        "cellX": 74,
        "cellY": 74.17,
        "columns": 8,
        "rows": 6
      }
    },
    "missingFeedback": "Enter the triangle's area before submitting.",
    "correctFeedback": "Correct. The triangle has base 6 and perpendicular height 4, so its area is 1/2 x 6 x 4 = 12 square units.",
    "incorrectFeedback": "Not quite. Count a 6-unit horizontal base and a 4-unit perpendicular height, then take half of their product.",
    "hints": [
      "Use 1/2 x base x corresponding height, or decompose and rearrange the triangle."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for Problem 2a",
      "sourceObjects": [
        "source square grid",
        "source triangle 2a"
      ],
      "notes": "Uses an exact visual-only crop. The explanation remains available but optional because the source permits many valid decompositions that a narrow prose validator could reject. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 2a. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-2b",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "2b",
    "practicePartOrder": 3,
    "routePart": "problem-2b",
    "skill": "Find triangle area from a square grid",
    "activityForm": "numeric source-diagram area calculation with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the source triangle in square units. Explain or show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "6"
    ],
    "reasoningPrompt": "Explain or show how the grid gives the base, height, or a valid decomposition.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-triangle-area-2b.png",
      "alt": "The exact source square-grid triangle for Problem 2b.",
      "naturalWidth": 760,
      "naturalHeight": 500,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 31,
        "originY": 25,
        "cellX": 76,
        "cellY": 76,
        "columns": 9,
        "rows": 5
      }
    },
    "missingFeedback": "Enter the triangle's area before submitting.",
    "correctFeedback": "Correct. The horizontal base is 4 and its perpendicular height is 3, so the area is 1/2 x 4 x 3 = 6 square units.",
    "incorrectFeedback": "Not quite. Use the 4-unit horizontal side as a base and count the 3-unit perpendicular distance to the opposite vertex.",
    "hints": [
      "Use 1/2 x base x corresponding height, or decompose and rearrange the triangle."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area response and one available explanation for Problem 2b",
      "sourceObjects": [
        "source square grid",
        "source triangle 2b"
      ],
      "notes": "Uses an exact visual-only crop. The explanation remains available but optional because the source permits many valid decompositions that a narrow prose validator could reject. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 2b. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-greatest-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "3",
    "practicePartOrder": 4,
    "routePart": "problem-3",
    "skill": "Compare triangle areas using base and height",
    "activityForm": "single-choice source-diagram comparison with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Which of the three source triangles has the greatest area?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "a",
        "label": "Triangle A"
      },
      {
        "id": "b",
        "label": "Triangle B"
      },
      {
        "id": "c",
        "label": "Triangle C"
      },
      {
        "id": "same",
        "label": "All three have the same area"
      }
    ],
    "answerKey": [
      "same"
    ],
    "reasoningPrompt": "Explain how the grid supports your comparison.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-08-greatest-area-source.png",
      "alt": "The exact source square grid with triangles A, B, and C.",
      "naturalWidth": 1650,
      "naturalHeight": 850,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 165,
        "rows": 85
      }
    },
    "missingFeedback": "Choose the triangle with the greatest area, or choose that all three are equal.",
    "correctFeedback": "Correct. Each triangle has a 5-unit base and a corresponding height of 4 units, so each area is 1/2 x 5 x 4 = 10 square units.",
    "incorrectFeedback": "Not quite. For each triangle, choose the 5-unit side as a base and count the 4-unit perpendicular distance to the opposite vertex.",
    "hints": [
      "A triangle's slant does not change the area when its base and corresponding height stay the same."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one greatest-area comparison and one available explanation",
      "sourceObjects": [
        "source triangles A-C",
        "shared square grid"
      ],
      "notes": "Keeps all three source triangles visible together and does not add answer-bearing base or height labels. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 3. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-compose-d",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 4, Triangle D",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "4D",
    "practicePartOrder": 5,
    "routePart": "problem-4d",
    "skill": "Compose a parallelogram from two identical triangles",
    "activityForm": "interactive copy-and-compose construction",
    "prompt": "Move and rotate an identical copy of source Triangle D so the two copies together form a parallelogram.",
    "responseType": "compositionJoin",
    "answerKey": [],
    "visualModelData": {
      "type": "triangleComposition",
      "compositionGeometry": {
        "width": 180,
        "height": 150,
        "centerX": 90,
        "centerY": 75,
        "points": "0,150 90,0 180,150",
        "vertices": [
          [
            0,
            150
          ],
          [
            90,
            0
          ],
          [
            180,
            150
          ]
        ],
        "boundSize": 180,
        "edges": [
          {
            "id": "side-1",
            "kind": "side",
            "vertices": [
              0,
              1
            ]
          },
          {
            "id": "side-2",
            "kind": "side",
            "vertices": [
              1,
              2
            ]
          },
          {
            "id": "side-3",
            "kind": "side",
            "vertices": [
              2,
              0
            ]
          }
        ]
      },
      "pieceLabels": [
        "D",
        "D'"
      ],
      "direction": "Select a copy, drag or use arrow keys to move it, and use quarter turns as needed. Join one pair of complete matching sides.",
      "alt": "Two movable, rotatable copies of source Triangle D.",
      "sourceNote": "The triangle outline is traced from source Triangle D; the second piece is its identical copy.",
      "referenceCompositionItemIds": [
        "u1-practice-lesson8-compose-d",
        "u1-practice-lesson8-compose-e",
        "u1-practice-lesson8-compose-f"
      ],
      "referenceCompositionLabel": "Triangle D composition"
    },
    "missingFeedback": "Compose the two copies along one complete matching side before submitting.",
    "correctFeedback": "Correct. Two identical triangles joined along a complete matching side form a parallelogram, with the shared edge as its diagonal.",
    "incorrectFeedback": "The pieces are not yet joined along a complete matching side. Move or rotate one copy and try again.",
    "hints": [
      "A 180-degree turn places a copy on the opposite side of a matching edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one copy-and-compose drawing for source Triangle D",
      "sourceObjects": [
        "source Triangle D",
        "one identical copy",
        "one completed parallelogram"
      ],
      "notes": "Recreates the source drawing action with two movable, rotatable copies and complete-edge snapping; completed D, E, and F compositions remain visible as non-editable references when the student switches parts."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 4, Triangle D.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-compose-e",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 4, Triangle E",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "4E",
    "practicePartOrder": 6,
    "routePart": "problem-4e",
    "skill": "Compose a parallelogram from two identical triangles",
    "activityForm": "interactive copy-and-compose construction",
    "prompt": "Move and rotate an identical copy of source Triangle E so the two copies together form a parallelogram.",
    "responseType": "compositionJoin",
    "answerKey": [],
    "visualModelData": {
      "type": "triangleComposition",
      "compositionGeometry": {
        "width": 210,
        "height": 145,
        "centerX": 88,
        "centerY": 72,
        "points": "0,0 48,82 210,145",
        "vertices": [
          [
            0,
            0
          ],
          [
            48,
            82
          ],
          [
            210,
            145
          ]
        ],
        "boundSize": 210,
        "edges": [
          {
            "id": "side-1",
            "kind": "side",
            "vertices": [
              0,
              1
            ]
          },
          {
            "id": "side-2",
            "kind": "side",
            "vertices": [
              1,
              2
            ]
          },
          {
            "id": "side-3",
            "kind": "side",
            "vertices": [
              2,
              0
            ]
          }
        ]
      },
      "pieceLabels": [
        "E",
        "E'"
      ],
      "direction": "Select a copy, drag or use arrow keys to move it, and use quarter turns as needed. Join one pair of complete matching sides.",
      "alt": "Two movable, rotatable copies of source Triangle E.",
      "sourceNote": "The triangle outline is traced from source Triangle E; the second piece is its identical copy.",
      "referenceCompositionItemIds": [
        "u1-practice-lesson8-compose-d",
        "u1-practice-lesson8-compose-e",
        "u1-practice-lesson8-compose-f"
      ],
      "referenceCompositionLabel": "Triangle E composition"
    },
    "missingFeedback": "Compose the two copies along one complete matching side before submitting.",
    "correctFeedback": "Correct. Two identical triangles joined along a complete matching side form a parallelogram, with the shared edge as its diagonal.",
    "incorrectFeedback": "The pieces are not yet joined along a complete matching side. Move or rotate one copy and try again.",
    "hints": [
      "A 180-degree turn places a copy on the opposite side of a matching edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one copy-and-compose drawing for source Triangle E",
      "sourceObjects": [
        "source Triangle E",
        "one identical copy",
        "one completed parallelogram"
      ],
      "notes": "Recreates the source drawing action with two movable, rotatable copies and complete-edge snapping; completed D, E, and F compositions remain visible as non-editable references when the student switches parts."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 4, Triangle E.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-compose-f",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 4, Triangle F",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "4F",
    "practicePartOrder": 7,
    "routePart": "problem-4f",
    "skill": "Compose a parallelogram from two identical triangles",
    "activityForm": "interactive copy-and-compose construction",
    "prompt": "Move and rotate an identical copy of source Triangle F so the two copies together form a parallelogram.",
    "responseType": "compositionJoin",
    "answerKey": [],
    "visualModelData": {
      "type": "triangleComposition",
      "compositionGeometry": {
        "width": 145,
        "height": 210,
        "centerX": 88,
        "centerY": 92,
        "points": "0,0 145,48 145,210",
        "vertices": [
          [
            0,
            0
          ],
          [
            145,
            48
          ],
          [
            145,
            210
          ]
        ],
        "boundSize": 210,
        "edges": [
          {
            "id": "side-1",
            "kind": "side",
            "vertices": [
              0,
              1
            ]
          },
          {
            "id": "side-2",
            "kind": "side",
            "vertices": [
              1,
              2
            ]
          },
          {
            "id": "side-3",
            "kind": "side",
            "vertices": [
              2,
              0
            ]
          }
        ]
      },
      "pieceLabels": [
        "F",
        "F'"
      ],
      "direction": "Select a copy, drag or use arrow keys to move it, and use quarter turns as needed. Join one pair of complete matching sides.",
      "alt": "Two movable, rotatable copies of source Triangle F.",
      "sourceNote": "The triangle outline is traced from source Triangle F; the second piece is its identical copy.",
      "referenceCompositionItemIds": [
        "u1-practice-lesson8-compose-d",
        "u1-practice-lesson8-compose-e",
        "u1-practice-lesson8-compose-f"
      ],
      "referenceCompositionLabel": "Triangle F composition"
    },
    "missingFeedback": "Compose the two copies along one complete matching side before submitting.",
    "correctFeedback": "Correct. Two identical triangles joined along a complete matching side form a parallelogram, with the shared edge as its diagonal.",
    "incorrectFeedback": "The pieces are not yet joined along a complete matching side. Move or rotate one copy and try again.",
    "hints": [
      "A 180-degree turn places a copy on the opposite side of a matching edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one copy-and-compose drawing for source Triangle F",
      "sourceObjects": [
        "source Triangle F",
        "one identical copy",
        "one completed parallelogram"
      ],
      "notes": "Recreates the source drawing action with two movable, rotatable copies and complete-edge snapping; completed D, E, and F compositions remain visible as non-editable references when the student switches parts."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 4, Triangle F.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-5a",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "5a",
    "practicePartOrder": 8,
    "routePart": "problem-5a",
    "skill": "Use area = base x corresponding height",
    "activityForm": "numeric area or missing-dimension calculation",
    "prompt": "A parallelogram has base 3.5 units and corresponding height 2 units. What is its area?",
    "responseType": "number",
    "answerKey": [
      "7"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship"
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. 3.5 x 2 = 7 square units.",
    "incorrectFeedback": "Not quite. Multiply 3.5 by 2.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5a",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "Keeps the source values and response action without adding an answer-bearing diagram."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-5b",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "5b",
    "practicePartOrder": 9,
    "routePart": "problem-5b",
    "skill": "Use area = base x corresponding height",
    "activityForm": "numeric area or missing-dimension calculation",
    "prompt": "A parallelogram has base 3 units and area 1.8 square units. What is the corresponding height?",
    "responseType": "number",
    "answerKey": [
      "0.6",
      ".6",
      "3/5"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship"
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. 1.8 divided by 3 = 0.6 unit.",
    "incorrectFeedback": "Not quite. Divide 1.8 by the base 3.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5b",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "Keeps the source values and response action without adding an answer-bearing diagram."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 5b.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson8-5c",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5c",
    "practiceLessonGroup": "lesson-8-practice",
    "practiceLessonTitle": "Area of Triangles",
    "practicePartLabel": "5c",
    "practicePartOrder": 10,
    "routePart": "problem-5c",
    "skill": "Use area = base x corresponding height",
    "activityForm": "numeric area or missing-dimension calculation",
    "prompt": "A parallelogram has area 20.4 square units and corresponding height 4 units. What is the base?",
    "responseType": "number",
    "answerKey": [
      "5.1",
      "5 1/10",
      "51/10"
    ],
    "visualModelData": {
      "type": "baseHeightRelationship"
    },
    "missingFeedback": "Enter the missing value before submitting.",
    "correctFeedback": "Correct. 20.4 divided by 4 = 5.1 units.",
    "incorrectFeedback": "Not quite. Divide 20.4 by the height 4.",
    "hints": [
      "Use area = base x corresponding height. Divide when a dimension is missing."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric answer for Problem 5c",
      "sourceObjects": [
        "text-only parallelogram measurements"
      ],
      "notes": "Keeps the source values and response action without adding an answer-bearing diagram."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 8 Practice Problem 5c.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-correct-heights",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Identify corresponding triangle heights",
    "activityForm": "multi-select exact-source height comparison with optional source-aligned annotation scratchpad",
    "prompt": "Select every drawing in which height h is correctly identified for the given base b.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "a",
        "label": "A"
      },
      {
        "id": "b",
        "label": "B"
      },
      {
        "id": "c",
        "label": "C"
      },
      {
        "id": "d",
        "label": "D"
      },
      {
        "id": "e",
        "label": "E"
      },
      {
        "id": "f",
        "label": "F"
      }
    ],
    "answerKey": [
      "a",
      "b",
      "d",
      "f"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-correct-heights-source.png",
      "alt": "The exact six source triangles A-F, each with a base b and a proposed corresponding height h.",
      "naturalWidth": 900,
      "naturalHeight": 620,
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test a base, a perpendicular height, or an extension on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 90,
        "rows": 62
      }
    },
    "missingFeedback": "Select every drawing whose h is perpendicular to the line containing b and reaches the opposite vertex.",
    "correctFeedback": "Correct. A, B, D, and F show perpendicular distances from the opposite vertex to the line containing base b. C is not perpendicular to b, and E does not use the opposite vertex.",
    "incorrectFeedback": "Not quite. For each drawing, check two things: h must be perpendicular to the line containing b, and it must connect that line to the opposite vertex.",
    "hints": [
      "A height can be inside or outside a triangle, but it must be perpendicular to the chosen base's line."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one select-all response across source drawings A-F",
      "sourceObjects": [
        "six exact source triangles",
        "base labels b",
        "proposed heights h",
        "right-angle marks"
      ],
      "notes": "Uses one unclipped visual-only crop so all six source comparisons remain visible together; no answer-bearing labels are added. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 1. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-triangle-a-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2a, Triangle A",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "2a-A",
    "practicePartOrder": 2,
    "routePart": "problem-2a-a",
    "skill": "Find the area of source Triangle A",
    "activityForm": "independently graded numeric triangle-area response with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of source Triangle A in square units.",
    "responseType": "number",
    "answerKey": [
      "12"
    ],
    "reasoningPrompt": "Optional: show how the labeled base and corresponding height give the area.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-three-triangle-areas-source.png",
      "alt": "The exact source grid containing Triangles A, B, and C with base b and corresponding height h labeled.",
      "naturalWidth": 1200,
      "naturalHeight": 390,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 120,
        "rows": 39
      }
    },
    "missingFeedback": "Enter the area of Triangle A.",
    "correctFeedback": "Correct. The base is 4 units and the corresponding height is 6 units, so 1/2 x 4 x 6 = 12 square units.",
    "incorrectFeedback": "Not quite. Count Triangle A's labeled base and perpendicular height on the grid, multiply them, then take half.",
    "hints": [
      "Use area = 1/2 x base x corresponding height."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted area for source Triangle A",
      "sourceObjects": [
        "shared exact square grid",
        "source Triangles A-C",
        "labels b and h"
      ],
      "notes": "Keeps all three source triangles visible for comparison while grading this triangle's required response independently. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 2a, Triangle A. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-triangle-b-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2a, Triangle B",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "2a-B",
    "practicePartOrder": 3,
    "routePart": "problem-2a-b",
    "skill": "Find the area of source Triangle B",
    "activityForm": "independently graded numeric triangle-area response with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of source Triangle B in square units.",
    "responseType": "number",
    "answerKey": [
      "16"
    ],
    "reasoningPrompt": "Optional: show how the labeled base and corresponding height give the area.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-three-triangle-areas-source.png",
      "alt": "The exact source grid containing Triangles A, B, and C with base b and corresponding height h labeled.",
      "naturalWidth": 1200,
      "naturalHeight": 390,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 120,
        "rows": 39
      }
    },
    "missingFeedback": "Enter the area of Triangle B.",
    "correctFeedback": "Correct. The base is 8 units and the corresponding height is 4 units, so 1/2 x 8 x 4 = 16 square units.",
    "incorrectFeedback": "Not quite. Count Triangle B's labeled base and perpendicular height on the grid, multiply them, then take half.",
    "hints": [
      "Use area = 1/2 x base x corresponding height."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted area for source Triangle B",
      "sourceObjects": [
        "shared exact square grid",
        "source Triangles A-C",
        "labels b and h"
      ],
      "notes": "Keeps all three source triangles visible for comparison while grading this triangle's required response independently. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 2a, Triangle B. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-triangle-c-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2a, Triangle C",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "2a-C",
    "practicePartOrder": 4,
    "routePart": "problem-2a-c",
    "skill": "Find the area of source Triangle C",
    "activityForm": "independently graded numeric triangle-area response with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of source Triangle C in square units.",
    "responseType": "number",
    "answerKey": [
      "12"
    ],
    "reasoningPrompt": "Optional: show how the labeled base and corresponding height give the area.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-three-triangle-areas-source.png",
      "alt": "The exact source grid containing Triangles A, B, and C with base b and corresponding height h labeled.",
      "naturalWidth": 1200,
      "naturalHeight": 390,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 120,
        "rows": 39
      }
    },
    "missingFeedback": "Enter the area of Triangle C.",
    "correctFeedback": "Correct. The base is 8 units and the corresponding height is 3 units, so 1/2 x 8 x 3 = 12 square units.",
    "incorrectFeedback": "Not quite. Count Triangle C's labeled base and perpendicular height on the grid, multiply them, then take half.",
    "hints": [
      "Use area = 1/2 x base x corresponding height."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted area for source Triangle C",
      "sourceObjects": [
        "shared exact square grid",
        "source Triangles A-C",
        "labels b and h"
      ],
      "notes": "Keeps all three source triangles visible for comparison while grading this triangle's required response independently. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 2a, Triangle C. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-area-relationship",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "2b",
    "practicePartOrder": 5,
    "routePart": "problem-2b",
    "skill": "Relate triangle area to base and corresponding height",
    "activityForm": "single-choice formula relationship with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "How is a triangle's area related to its base and corresponding height?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "product",
        "label": "Area = base x corresponding height"
      },
      {
        "id": "half-product",
        "label": "Area = 1/2 x base x corresponding height"
      },
      {
        "id": "sum",
        "label": "Area = base + corresponding height"
      }
    ],
    "answerKey": [
      "half-product"
    ],
    "reasoningPrompt": "Optional: explain why the factor 1/2 is needed.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-three-triangle-areas-source.png",
      "alt": "The exact source grid containing three triangles with base b and corresponding height h labeled.",
      "naturalWidth": 1200,
      "naturalHeight": 390,
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 120,
        "rows": 39
      }
    },
    "missingFeedback": "Choose the relationship between triangle area, base, and corresponding height.",
    "correctFeedback": "Correct. A triangle is half of a related parallelogram with the same base and corresponding height, so its area is 1/2 x base x height.",
    "incorrectFeedback": "Not quite. Two congruent copies of a triangle can make a parallelogram with area base x height.",
    "hints": [
      "Compare one triangle with a related parallelogram made from two copies."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one formula relationship response",
      "sourceObjects": [
        "same source Triangles A-C",
        "base and corresponding height labels"
      ],
      "notes": "Turns the source's open generalization into a directly gradable conceptual choice without changing the mathematical claim. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 2b. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-height-for-d",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3a, base d",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "3a",
    "practicePartOrder": 6,
    "routePart": "problem-3a",
    "skill": "Name a corresponding height for base d",
    "activityForm": "independently graded source-label identification with optional source-aligned annotation scratchpad",
    "prompt": "Which labeled segment is a corresponding height when side d is used as the base?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "d",
        "label": "Side d"
      },
      {
        "id": "e",
        "label": "Side e"
      },
      {
        "id": "f",
        "label": "Side f"
      },
      {
        "id": "g",
        "label": "Segment g"
      }
    ],
    "answerKey": [
      "g"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-right-triangle-heights-source.png",
      "alt": "The exact source right triangle with sides d, e, and f and exterior perpendicular segment g.",
      "naturalWidth": 500,
      "naturalHeight": 250,
      "displayVariant": "compactWide",
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test a base, a perpendicular height, or an extension on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 50,
        "rows": 25
      }
    },
    "missingFeedback": "Choose a corresponding height for base d.",
    "correctFeedback": "Correct. For base d, the perpendicular from the opposite vertex is segment g.",
    "incorrectFeedback": "Not quite. Find the labeled segment perpendicular to base d or to the line containing it, starting at the opposite vertex.",
    "hints": [
      "The right-angle marks show perpendicular segments."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted height name for base d",
      "sourceObjects": [
        "exact source right triangle",
        "side labels d, e, f",
        "segment g",
        "right-angle marks"
      ],
      "notes": "Keeps the full source figure visible for every independently graded base-height pairing. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 3 for base d. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-height-for-e",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3b, base e",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "3b",
    "practicePartOrder": 7,
    "routePart": "problem-3b",
    "skill": "Name a corresponding height for base e",
    "activityForm": "independently graded source-label identification with optional source-aligned annotation scratchpad",
    "prompt": "Which labeled segment is a corresponding height when side e is used as the base?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "d",
        "label": "Side d"
      },
      {
        "id": "e",
        "label": "Side e"
      },
      {
        "id": "f",
        "label": "Side f"
      },
      {
        "id": "g",
        "label": "Segment g"
      }
    ],
    "answerKey": [
      "f"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-right-triangle-heights-source.png",
      "alt": "The exact source right triangle with sides d, e, and f and exterior perpendicular segment g.",
      "naturalWidth": 500,
      "naturalHeight": 250,
      "displayVariant": "compactWide",
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test a base, a perpendicular height, or an extension on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 50,
        "rows": 25
      }
    },
    "missingFeedback": "Choose a corresponding height for base e.",
    "correctFeedback": "Correct. Sides e and f meet at a right angle, so side f is a corresponding height for base e.",
    "incorrectFeedback": "Not quite. Find the labeled segment perpendicular to base e or to the line containing it, starting at the opposite vertex.",
    "hints": [
      "The right-angle marks show perpendicular segments."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted height name for base e",
      "sourceObjects": [
        "exact source right triangle",
        "side labels d, e, f",
        "segment g",
        "right-angle marks"
      ],
      "notes": "Keeps the full source figure visible for every independently graded base-height pairing. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 3 for base e. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-height-for-f",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3c, base f",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "3c",
    "practicePartOrder": 8,
    "routePart": "problem-3c",
    "skill": "Name a corresponding height for base f",
    "activityForm": "independently graded source-label identification with optional source-aligned annotation scratchpad",
    "prompt": "Which labeled segment is a corresponding height when side f is used as the base?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "d",
        "label": "Side d"
      },
      {
        "id": "e",
        "label": "Side e"
      },
      {
        "id": "f",
        "label": "Side f"
      },
      {
        "id": "g",
        "label": "Segment g"
      }
    ],
    "answerKey": [
      "e"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-right-triangle-heights-source.png",
      "alt": "The exact source right triangle with sides d, e, and f and exterior perpendicular segment g.",
      "naturalWidth": 500,
      "naturalHeight": 250,
      "displayVariant": "compactWide",
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test a base, a perpendicular height, or an extension on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 50,
        "rows": 25
      }
    },
    "missingFeedback": "Choose a corresponding height for base f.",
    "correctFeedback": "Correct. Sides e and f meet at a right angle, so side e is a corresponding height for base f.",
    "incorrectFeedback": "Not quite. Find the labeled segment perpendicular to base f or to the line containing it, starting at the opposite vertex.",
    "hints": [
      "The right-angle marks show perpendicular segments."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently submitted height name for base f",
      "sourceObjects": [
        "exact source right triangle",
        "side labels d, e, f",
        "segment g",
        "right-angle marks"
      ],
      "notes": "Keeps the full source figure visible for every independently graded base-height pairing. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 3 for base f. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-shaded-rectangle",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-002.png",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "4",
    "practicePartOrder": 9,
    "routePart": "problem-4",
    "skill": "Apply the triangle area formula",
    "activityForm": "numeric area with optional source-aligned annotation scratchpad",
    "sourceItem": "Problem 4",
    "prompt": "Find the area of the shaded triangle in square units. Show your reasoning.",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-shaded-triangle-source.png",
      "alt": "The exact source diagram of a shaded triangle inside a 6-by-6 rectangle, with the right side split into lengths 2 and 4.",
      "naturalWidth": 540,
      "naturalHeight": 630,
      "displayVariant": "compactPortrait",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 54,
        "rows": 63
      }
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": true,
    "reasoningMinLength": 3,
    "reasoningValidator": "triangleAreaSixBySix",
    "reasoningValidationGuidance": "show a calculation equivalent to 1/2 × 6 × 6, such as (6 × 6) ÷ 2, or explain that the triangle is half of the 6-by-6 rectangle",
    "missingFeedback": "Enter the shaded area before submitting.",
    "reasoningRequiredFeedback": "The area is correct. Add the source-requested reasoning before submitting again.",
    "reasoningRevisionFeedback": "The area is correct, but the reasoning needs to show an equivalent triangle-area calculation or explain why the triangle is half of the 6-by-6 rectangle.",
    "correctFeedback": "Correct. The triangle's base is the 6-unit left side, and its perpendicular height is the 6-unit width of the rectangle. Its area is 1/2 × 6 × 6 = 18 square units.",
    "incorrectFeedback": "Not quite. Use the 6-unit vertical side as a base and the rectangle's 6-unit horizontal width as its corresponding height.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for the shaded triangle",
      "sourceObjects": [
        "6-by-6 rectangle",
        "shaded triangle",
        "split right side labeled 2 and 4"
      ],
      "notes": "Uses an exact visual-only crop of source Problem 4, preserves the split 2-and-4 side labels, does not reveal the formula in the visual, and validates the source-required reasoning. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "hints": [
      "Use 1/2 × base × height.",
      "Half of 6 × 6 is half of 36."
    ],
    "implementationNotes": "Rebuilt from Lesson 9 cumulative practice, Problem 4, with the exact source diagram and required, transparent reasoning validation. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-parallelogram-diagonal",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "5",
    "practicePartOrder": 10,
    "routePart": "problem-5",
    "skill": "Reason about triangles made by a parallelogram diagonal",
    "activityForm": "multi-select exact-source relationship analysis",
    "prompt": "Select every true statement about the two triangles created by the diagonal.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "a",
        "label": "A. Each triangle has two sides that are 3 units long."
      },
      {
        "id": "b",
        "label": "B. Each triangle has a side equal in length to the diagonal."
      },
      {
        "id": "c",
        "label": "C. Each triangle has one side that is 3 units long."
      },
      {
        "id": "d",
        "label": "D. One triangle is larger than the other when they are aligned."
      },
      {
        "id": "e",
        "label": "E. The two triangles have the same area."
      }
    ],
    "answerKey": [
      "b",
      "c",
      "e"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-parallelogram-diagonal-source.png",
      "alt": "The exact source parallelogram on a square grid divided by one diagonal into two triangles.",
      "naturalWidth": 540,
      "naturalHeight": 360,
      "displayVariant": "compactWide"
    },
    "missingFeedback": "Select every statement that is true for both triangles.",
    "correctFeedback": "Correct. Both triangles share the diagonal, each has one 3-unit side, and a parallelogram diagonal divides it into two equal-area congruent triangles.",
    "incorrectFeedback": "Not quite. Compare corresponding sides and remember that a diagonal divides a parallelogram into two congruent triangles.",
    "hints": [
      "The diagonal is a side of both triangles. The opposite sides of a parallelogram have equal lengths."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one select-all response about both source triangles",
      "sourceObjects": [
        "exact source parallelogram",
        "source square grid",
        "shared diagonal"
      ],
      "notes": "Uses the exact visual without recasting the proportions or adding side-length labels that are absent from the source."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 5.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-octagon-estimate",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6a",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "6a",
    "practicePartOrder": 11,
    "routePart": "problem-6a",
    "skill": "Bound an octagon's area",
    "activityForm": "yes-no estimate decision with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Lin says the octagon's area must be less than 100 square inches. Do you agree?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "yes",
        "label": "Yes, I agree with Lin."
      },
      {
        "id": "no",
        "label": "No, I disagree with Lin."
      }
    ],
    "answerKey": [
      "yes"
    ],
    "reasoningPrompt": "Optional: explain how the enclosing square supports your decision.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-octagon-source.png",
      "alt": "The exact source octagon inside a 10-inch square, with side partitions 3, 4, 3 inches in both directions.",
      "naturalWidth": 520,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 52,
        "rows": 52
      }
    },
    "missingFeedback": "Choose whether the octagon must have area less than 100 square inches.",
    "correctFeedback": "Correct. The octagon lies inside a 10-by-10 square and omits four nonzero corner triangles, so its area is less than 100 square inches.",
    "incorrectFeedback": "Not quite. Add the top dimensions and the side dimensions to identify the enclosing square, then notice the four removed corners.",
    "hints": [
      "The three horizontal parts total 10 inches, and the three vertical parts also total 10 inches."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one estimate decision and one available explanation",
      "sourceObjects": [
        "exact source octagon",
        "10-by-10 enclosing square",
        "3-4-3 dimension partitions"
      ],
      "notes": "The decision is graded directly; the source-requested explanation remains available but optional because multiple valid bounds and decompositions exist. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 6a. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson9-octagon-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 9,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-9-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6b",
    "practiceLessonGroup": "lesson-9-practice",
    "practiceLessonTitle": "Formula for the Area of a Triangle",
    "practicePartLabel": "6b",
    "practicePartOrder": 12,
    "routePart": "problem-6b",
    "skill": "Find an octagon's exact area by subtraction",
    "activityForm": "numeric exact-area response with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the exact area of the octagon in square inches.",
    "responseType": "number",
    "answerKey": [
      "82"
    ],
    "reasoningPrompt": "Optional: show how you subtract the four corner triangles from the enclosing square.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-09-octagon-source.png",
      "alt": "The exact source octagon inside a 10-inch square, with side partitions 3, 4, 3 inches in both directions.",
      "naturalWidth": 520,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 52,
        "rows": 52
      }
    },
    "missingFeedback": "Enter the exact area of the octagon.",
    "correctFeedback": "Correct. The enclosing square has area 100. The four 3-by-3 corner right triangles have total area 4 x 4.5 = 18, so the octagon's area is 100 - 18 = 82 square inches.",
    "incorrectFeedback": "Not quite. Start with the 10-by-10 enclosing square and subtract four right triangles, each with legs 3 inches.",
    "hints": [
      "Each removed corner triangle has area 1/2 x 3 x 3."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact numeric area and one available explanation",
      "sourceObjects": [
        "same exact source octagon",
        "10-by-10 enclosing square",
        "four 3-by-3 corner triangles"
      ],
      "notes": "The exact numeric response is graded; the source-requested reasoning remains available without brittle prose validation. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 9 Practice Problem 6b. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-obtuse-triangle-height",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Draw corresponding heights",
    "activityForm": "three independently graded height placements with optional source-aligned trial lines",
    "prompt": "For each triangle, a base is labeled b. Draw trial construction lines if helpful, then choose where the height from the opposite vertex meets the line containing b. For Triangle 3, you may need one line to extend b and another for the perpendicular height.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "triangle1",
        "label": "Triangle 1",
        "prompt": "Where does the corresponding height meet the line containing b?",
        "choices": [
          {
            "id": "inside",
            "label": "On side b, between its endpoints"
          },
          {
            "id": "vertex",
            "label": "At an endpoint of side b"
          },
          {
            "id": "outside",
            "label": "On an extension of b, outside the triangle"
          }
        ],
        "correctChoiceId": "inside",
        "correctFeedback": "Correct. The perpendicular from the lower-left opposite vertex meets the slanted base b between its endpoints.",
        "incorrectFeedback": "Trace the line containing slanted side b and imagine a perpendicular from the opposite lower-left vertex."
      },
      {
        "id": "triangle2",
        "label": "Triangle 2",
        "prompt": "Where does the corresponding height meet the line containing b?",
        "choices": [
          {
            "id": "inside",
            "label": "On side b, between its endpoints"
          },
          {
            "id": "vertex",
            "label": "At an endpoint of side b"
          },
          {
            "id": "outside",
            "label": "On an extension of b, outside the triangle"
          }
        ],
        "correctChoiceId": "inside",
        "correctFeedback": "Correct. The perpendicular from the top vertex drops to the horizontal base b inside the triangle.",
        "incorrectFeedback": "Base b is horizontal, so its corresponding height must be vertical from the opposite top vertex."
      },
      {
        "id": "triangle3",
        "label": "Triangle 3",
        "prompt": "Where does the corresponding height meet the line containing b?",
        "choices": [
          {
            "id": "inside",
            "label": "On side b, between its endpoints"
          },
          {
            "id": "vertex",
            "label": "At an endpoint of side b"
          },
          {
            "id": "outside",
            "label": "On an extension of b, outside the triangle"
          }
        ],
        "correctChoiceId": "outside",
        "correctFeedback": "Correct. The perpendicular from the far-right vertex meets an extension of slanted base b beyond its lower endpoint, outside the triangle.",
        "incorrectFeedback": "Extend the line containing b past its lower endpoint. The perpendicular from the far-right vertex lands on that outside extension."
      }
    ],
    "answerKey": [
      "triangle1:inside",
      "triangle2:inside",
      "triangle3:outside"
    ],
    "visualModelData": {
      "type": "sourceHeightPlacement",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-10-height-triangles-source.png",
      "alt": "The exact source outlines of three triangles, each with one side labeled b.",
      "naturalWidth": 1650,
      "naturalHeight": 520,
      "canvasHeight": 620,
      "allowTrialLines": true,
      "groupMarkers": {
        "triangle1": {
          "label": "1",
          "x": 12,
          "y": 12,
          "width": 405,
          "height": 490
        },
        "triangle2": {
          "label": "2",
          "x": 470,
          "y": 62,
          "width": 620,
          "height": 430
        },
        "triangle3": {
          "label": "3",
          "x": 1100,
          "y": 130,
          "width": 525,
          "height": 455
        }
      },
      "placementLines": {
        "triangle1": {
          "inside": [
            54,
            421,
            244,
            270
          ],
          "vertex": [
            54,
            421,
            366,
            421
          ],
          "outside": [
            54,
            421,
            390,
            472
          ]
        },
        "triangle2": {
          "inside": [
            671,
            112,
            671,
            421
          ],
          "vertex": [
            671,
            112,
            516,
            421
          ],
          "outside": [
            671,
            112,
            1095,
            421
          ]
        },
        "triangle3": {
          "inside": [
            1596,
            421,
            1215,
            315
          ],
          "vertex": [
            1596,
            421,
            1285,
            421
          ],
          "outside": [
            1596,
            421,
            1377,
            563
          ]
        }
      }
    },
    "readyFeedback": "Choose and submit a height placement for each triangle.",
    "missingFeedback": "Complete and submit all three height placements.",
    "correctFeedback": "Correct. Every selected segment starts at the vertex opposite b and is perpendicular to the line containing b. The third height must meet an extension outside the triangle.",
    "incorrectFeedback": "Review the feedback for each triangle. A corresponding height is perpendicular to the line containing b and may land outside the triangle.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one independently submitted height placement for each of the three source triangles",
      "sourceObjects": [
        "three triangles with a base labeled b"
      ],
      "notes": "Uses the exact source triangle outlines, provides persistent ungraded trial lines for each triangle, and draws each selected answer placement in a separate overlay style. Triangle 3 supports both a base-extension line and a perpendicular-height line. Each source drawing target is independently submitted and graded."
    },
    "hints": [
      "A height must be perpendicular to the selected base.",
      "The segment may need to meet an extension of the base line."
    ],
    "implementationNotes": "Rebuilt from Lesson 10 cumulative practice, Problem 1, with an exact source crop, persistent multi-line construction scratchpads, distinct selected-segment overlays, and independent feedback for all three drawing targets.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson10-area-eight-triangles",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "2",
    "practicePartOrder": 2,
    "routePart": "problem-2",
    "skill": "Identify triangles with a specified area",
    "activityForm": "multi-select source-figure comparison with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Select every triangle that has an area of 8 square units.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "Triangle A"
      },
      {
        "id": "B",
        "label": "Triangle B"
      },
      {
        "id": "C",
        "label": "Triangle C"
      },
      {
        "id": "D",
        "label": "Triangle D"
      },
      {
        "id": "E",
        "label": "Triangle E"
      }
    ],
    "answerKey": [
      "A",
      "B",
      "D",
      "E"
    ],
    "reasoningPrompt": "Optional: explain how a base-height pair proves the area of each selected triangle.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-10-area-eight-triangles-source.png",
      "alt": "The exact source grid with triangles A through E.",
      "naturalWidth": 855,
      "naturalHeight": 540,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 9.94186,
        "cellY": 10,
        "columns": 86,
        "rows": 54
      }
    },
    "missingFeedback": "Select every triangle that has area 8 square units.",
    "correctFeedback": "Correct. A, B, and D each have a base-height pair of 4 and 4, so each area is 1/2 x 4 x 4 = 8. E has base 8 and height 2, so its area is also 8. Triangle C has base 3 and height 5, so its area is 7.5.",
    "incorrectFeedback": "Not quite. Count a usable base and its perpendicular height for each triangle, then calculate one half of their product.",
    "hints": [
      "A slanted side length is not automatically a height; use a perpendicular grid distance."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one multi-select decision and one available explanation",
      "sourceObjects": [
        "exact source triangles A-E",
        "unaltered square grid"
      ],
      "notes": "Uses a visual-only crop from the cited source page and grades the complete selection directly. Reasoning is available but optional to avoid rejecting alternate valid base-height explanations. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 10 Practice Problem 2. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson10-triangle-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "3",
    "practicePartOrder": 3,
    "routePart": "problem-3",
    "skill": "Find triangle area from a convenient base",
    "activityForm": "numeric exact-area response with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the triangle in square units.",
    "responseType": "number",
    "answerKey": [
      "12"
    ],
    "reasoningPrompt": "Optional: identify a convenient base and its corresponding height.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-10-triangle-area-source.png",
      "alt": "The exact source triangle on a square grid.",
      "naturalWidth": 290,
      "naturalHeight": 380,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 29,
        "rows": 38
      }
    },
    "missingFeedback": "Enter the triangle's area in square units.",
    "correctFeedback": "Correct. The vertical side is a base of 6 units, and the perpendicular horizontal distance to the opposite vertex is 4 units. The area is 1/2 x 6 x 4 = 12 square units.",
    "incorrectFeedback": "Not quite. Try the vertical side as the base, then count the horizontal distance from that line to the opposite vertex.",
    "hints": [
      "The vertical side is 6 units long, and its corresponding height is horizontal."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "exact source triangle",
        "unaltered square grid"
      ],
      "notes": "The exact source diagram is preserved; the numeric answer is graded and the source-requested reasoning remains available without brittle prose validation. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 10 Practice Problem 3. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson10-side-d-base",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "4",
    "practicePartOrder": 4,
    "routePart": "problem-4",
    "skill": "Match a triangle base with its corresponding height",
    "activityForm": "single-choice base-height decision with optional source-aligned annotation scratchpad",
    "prompt": "Can side d be used as the base of this triangle? If so, which labeled length is its corresponding height?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "yes-g",
        "label": "Yes. Length g is the corresponding height."
      },
      {
        "id": "yes-e",
        "label": "Yes. Side e is the corresponding height."
      },
      {
        "id": "yes-f",
        "label": "Yes. Side f is the corresponding height."
      },
      {
        "id": "no",
        "label": "No. Side d cannot be used as a base."
      }
    ],
    "answerKey": [
      "yes-g"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-10-base-d-height-g-source.png",
      "alt": "The exact source right triangle labeled d, e, and f, with an exterior perpendicular length g.",
      "naturalWidth": 640,
      "naturalHeight": 330,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional line marks to test a base, a perpendicular height, or an extension on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 64,
        "rows": 33
      }
    },
    "missingFeedback": "Choose whether d can be a base and identify its corresponding height.",
    "correctFeedback": "Correct. Any side can be chosen as a base. The corresponding height must be perpendicular to the line containing that base, so length g is the height for base d.",
    "incorrectFeedback": "Not quite. Extend the line containing side d and look for the labeled segment that meets it at a right angle.",
    "hints": [
      "A corresponding height can lie outside the triangle."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one combined base-and-corresponding-height decision",
      "sourceObjects": [
        "source right triangle",
        "labels d, e, f, and g",
        "right-angle markers"
      ],
      "notes": "The answer control keeps the source's dependent yes/no and height-identification decision together so no partial answer is accepted. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 10 Practice Problem 4. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson10-bowtie-area",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "5",
    "practicePartOrder": 5,
    "routePart": "problem-5",
    "skill": "Find the area of a composite polygon on a grid",
    "activityForm": "numeric composite-area response with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the shaded shape in square units.",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "reasoningPrompt": "Optional: explain how you decomposed or enclosed the shaded shape.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-10-bowtie-area-source.png",
      "alt": "The exact source yellow bowtie-shaped polygon on a square grid.",
      "naturalWidth": 450,
      "naturalHeight": 370,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 45,
        "rows": 37
      }
    },
    "missingFeedback": "Enter the shaded shape's area in square units.",
    "correctFeedback": "Correct. The shape can be decomposed into four triangles whose areas total 18 square units.",
    "incorrectFeedback": "Not quite. Split the shape at grid vertices into triangles or compare it with an enclosing rectangle, then account for every shaded part once.",
    "hints": [
      "A vertical split through the center creates manageable triangles on both sides."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "exact shaded source polygon",
        "unaltered square grid"
      ],
      "notes": "Uses a visual-only crop from the source; the graded numeric response is independent of the student's chosen valid decomposition. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 10 Practice Problem 5. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson10-equal-area-parallelograms",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-10-practice",
    "practiceLessonTitle": "Bases and Heights of Triangles",
    "practicePartLabel": "6",
    "practicePartOrder": 6,
    "routePart": "problem-6",
    "skill": "Construct different parallelograms with equal area",
    "activityForm": "two-target grid construction with base-height labels",
    "prompt": "On the grid, draw two different parallelograms that have equal area. For each one, enter a base length and its corresponding height.",
    "responseType": "quadrilateralAreaSet",
    "reasoningPrompt": "Optional: explain how the base-height products show that the areas are the same.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 16,
      "rows": 8,
      "drawingCount": 2,
      "validationMode": "equalAreaParallelograms",
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "retainInactiveDrawings": true
    },
    "missingFeedback": "Complete both different parallelograms and enter a matching base-height pair for each.",
    "correctFeedback": "Correct. Both drawings are parallelograms, they are different shapes, and their base-height products equal the same area.",
    "incorrectFeedback": "Revise the drawing identified in the workspace feedback. Both shapes must be different parallelograms with equal areas and valid base-height products.",
    "hints": [
      "Try keeping the same horizontal base and vertical height while sliding the top edge sideways."
    ],
    "sampleAnswer": "A 4-by-3 rectangle and a slanted parallelogram with base 4 and height 3 both have area 12 square units.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 7,
      "appActionTargets": 7,
      "unitOfAction": "two independently checked drawings, two base labels, two corresponding height labels, and one available explanation",
      "sourceObjects": [
        "16-by-8 source-style square grid",
        "two student-created parallelograms"
      ],
      "notes": "The app replaces the paper grid with an equivalent local constructor. It checks that each drawing is a parallelogram, the drawings are not congruent copies under movement or reflection, each entered base-height product matches its drawing's grid area, and both areas are equal. Whichever drawing is active, the other created drawing remains visible as a non-editable reference on the shared grid with its entered base and height."
    },
    "implementationNotes": "Full-coverage interactive implementation of Lesson 10 Practice Problem 6. Retains the inactive drawing and its dimensions whenever the student switches between drawings for direct comparison. The retained sample provides a concrete alternate pair of valid equal-area constructions for comparison with the student's drawings.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-triangle-missing-height",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5d",
    "skill": "Find an unknown triangle height",
    "activityForm": "numeric missing dimension",
    "prompt": "A triangle has area 32 square millimeters and base 8 millimeters. What is its height?",
    "responseType": "number",
    "answerKey": [
      "8"
    ],
    "visualModelData": {
      "type": "triangleMissing",
      "area": 32,
      "base": 8,
      "unit": "mm"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "missingFeedback": "Enter the missing triangle height before submitting.",
    "correctFeedback": "Correct. Since 32 = 1/2 × 8 × h = 4h, the height is 8 millimeters.",
    "incorrectFeedback": "Not quite. Use 32 = 1/2 × 8 × h, then solve for h.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-height answer for subproblem 5d",
      "sourceObjects": [
        "subproblem 5d triangle area and base"
      ],
      "notes": "Implements source Problem 5d as one practice card and keeps the unknown-dimension action intact. The app-added diagram only restates the given area and base; the source subproblem itself is text-only."
    },
    "hints": [
      "Area = 1/2 × base × height.",
      "1/2 × 8 is 4, so 4 × height = 32."
    ],
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5d.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "5d",
    "practicePartOrder": 9,
    "routePart": "problem-5d"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-select-polygons",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Identify polygons by their defining attributes",
    "activityForm": "multi-select exact-source figure classification",
    "prompt": "Select every figure that is a polygon.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "Figure A"
      },
      {
        "id": "B",
        "label": "Figure B"
      },
      {
        "id": "C",
        "label": "Figure C"
      },
      {
        "id": "D",
        "label": "Figure D"
      },
      {
        "id": "E",
        "label": "Figure E"
      },
      {
        "id": "F",
        "label": "Figure F"
      }
    ],
    "answerKey": [
      "A",
      "C"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-polygon-selection-source.png",
      "alt": "The exact source figures A through F: an arrow, curved-top shape, star, open figure, heart, and cube drawing.",
      "naturalWidth": 945,
      "naturalHeight": 450,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Select every source figure that is a polygon.",
    "correctFeedback": "Correct. A and C are closed two-dimensional figures made entirely of straight line segments. B and E have curved boundaries, D is open, and F represents a three-dimensional object.",
    "incorrectFeedback": "Not quite. A polygon must be closed, two-dimensional, and made only of straight line segments.",
    "hints": [
      "Check closed, straight-sided, and two-dimensional as three separate conditions."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one complete select-all classification",
      "sourceObjects": [
        "exact source figures A-F"
      ],
      "notes": "Uses a visual-only crop of the source figures with all labels and boundary features intact."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 11 Practice Problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-vertex-count",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "2",
    "practicePartOrder": 2,
    "routePart": "problem-2",
    "skill": "Mark polygon vertices and count edges and vertices",
    "activityForm": "required source-aligned vertex marking with two independently graded counts",
    "prompt": "Mark every vertex with a dot, then report the number of edges and vertices.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "edges",
        "label": "Edges",
        "prompt": "How many edges does the polygon have?",
        "choices": [
          {
            "id": "10",
            "label": "10 edges"
          },
          {
            "id": "11",
            "label": "11 edges"
          },
          {
            "id": "12",
            "label": "12 edges"
          },
          {
            "id": "13",
            "label": "13 edges"
          }
        ],
        "correctChoiceId": "12",
        "correctFeedback": "Correct. Tracing once around the boundary gives 12 straight edges.",
        "incorrectFeedback": "Recount each straight boundary segment between two consecutive corners."
      },
      {
        "id": "vertices",
        "label": "Vertices",
        "prompt": "How many vertices does the polygon have?",
        "choices": [
          {
            "id": "10",
            "label": "10 vertices"
          },
          {
            "id": "11",
            "label": "11 vertices"
          },
          {
            "id": "12",
            "label": "12 vertices"
          },
          {
            "id": "13",
            "label": "13 vertices"
          }
        ],
        "correctChoiceId": "12",
        "correctFeedback": "Correct. The polygon has 12 corners, so it has 12 vertices.",
        "incorrectFeedback": "Count every point where two boundary edges meet, including inward corners."
      }
    ],
    "answerKey": [
      "edges:12",
      "vertices:12"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-vertex-star-source.png",
      "alt": "The exact source blue twelve-vertex star-shaped polygon.",
      "naturalWidth": 365,
      "naturalHeight": 375,
      "displayMaxHeight": 430,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 1,
        "cellY": 1,
        "columns": 365,
        "rows": 375
      },
      "annotationTools": [
        "point",
        "erase"
      ],
      "defaultAnnotationTool": "point",
      "requiredAnnotationTolerance": 20,
      "requiredAnnotationMarks": [
        {
          "type": "point",
          "x": 205,
          "y": 24
        },
        {
          "type": "point",
          "x": 250,
          "y": 103
        },
        {
          "type": "point",
          "x": 338,
          "y": 103
        },
        {
          "type": "point",
          "x": 294,
          "y": 178
        },
        {
          "type": "point",
          "x": 338,
          "y": 253
        },
        {
          "type": "point",
          "x": 250,
          "y": 253
        },
        {
          "type": "point",
          "x": 205,
          "y": 332
        },
        {
          "type": "point",
          "x": 160,
          "y": 253
        },
        {
          "type": "point",
          "x": 72,
          "y": 253
        },
        {
          "type": "point",
          "x": 116,
          "y": 178
        },
        {
          "type": "point",
          "x": 72,
          "y": 103
        },
        {
          "type": "point",
          "x": 160,
          "y": 103
        }
      ],
      "annotationInstructions": "Choose Vertex dot, then click each corner of the polygon. Use Erase, Undo, or Clear to revise your marks."
    },
    "annotationRequiredFeedback": "Mark all 12 corners with the Vertex dot tool, including the six inward corners, then check both counts.",
    "missingFeedback": "Mark every vertex and answer both count questions.",
    "correctFeedback": "Correct. The polygon has 12 marked vertices and 12 edges: every edge connects one pair of consecutive vertices.",
    "incorrectFeedback": "Recheck both counts and make sure every outward and inward corner has exactly one dot.",
    "hints": [
      "Trace the boundary in one direction and alternate between outward and inward corners."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 14,
      "appActionTargets": 14,
      "unitOfAction": "twelve required vertex dots, one edge count, and one vertex count",
      "sourceObjects": [
        "exact source twelve-vertex polygon"
      ],
      "notes": "The required dots are stored in source-pixel coordinates and checked with a touch-friendly tolerance. Edge and vertex counts are independently submitted."
    },
    "implementationNotes": "Full-coverage interactive implementation of Lesson 11 Practice Problem 2.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-trapezoid-area",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "3",
    "practicePartOrder": 3,
    "routePart": "problem-3",
    "skill": "Find trapezoid area by decomposition or enclosure",
    "activityForm": "numeric exact-area response with optional strategy with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the trapezoid in square units.",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "reasoningPrompt": "Optional: explain or show your strategy.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-trapezoid-source.png",
      "alt": "The exact source trapezoid on a square grid.",
      "naturalWidth": 560,
      "naturalHeight": 290,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 56,
        "rows": 29
      }
    },
    "missingFeedback": "Enter the trapezoid's area in square units.",
    "correctFeedback": "Correct. The enclosing 8-by-3 rectangle has area 24. The two missing right triangles each have area 3, so the trapezoid has area 24 - 6 = 18 square units.",
    "incorrectFeedback": "Not quite. Enclose the trapezoid in an 8-by-3 rectangle and subtract the two unshaded corner triangles.",
    "hints": [
      "Each missing corner triangle has base 2 and height 3."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available strategy explanation",
      "sourceObjects": [
        "exact source trapezoid",
        "unaltered square grid"
      ],
      "notes": "Uses a visual-only source crop; numeric grading accepts any valid strategy while preserving an optional explanation field. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 11 Practice Problem 3. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-hexagon-methods",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "4",
    "practicePartOrder": 4,
    "routePart": "problem-4",
    "skill": "Find one hexagon area using two decompositions",
    "activityForm": "two independently graded named-method area calculations with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the regular hexagon using both Lin's and Andre's decompositions.",
    "responseType": "areaStrategyPair",
    "strategyTargetArea": 93.6,
    "strategyAreaUnit": "square inches",
    "strategyGroups": [
      {
        "id": "lin",
        "label": "Lin's method",
        "prompt": "Lin uses six identical equilateral triangles. What total area does her method give?",
        "correctFeedback": "Correct. Each triangle has base 6 and height 5.2, so its area is 15.6; six triangles total 93.6 square inches.",
        "incorrectFeedback": "Use half of 10.4 as each equilateral triangle's height, find one triangle's area, then multiply by 6."
      },
      {
        "id": "andre",
        "label": "Andre's method",
        "prompt": "Andre uses one rectangle and two triangles. What total area does his method give?",
        "correctFeedback": "Correct. The 6-by-10.4 rectangle has area 62.4, and the two side triangles total 31.2, giving 93.6 square inches.",
        "incorrectFeedback": "Find the 6-by-10.4 rectangle, then add two triangles with base 10.4 and height 3."
      }
    ],
    "reasoningPrompt": "Optional: show the calculations for both decompositions.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-hexagon-methods-source.png",
      "alt": "The exact source hexagon diagrams for Lin's six-triangle method and Andre's rectangle-plus-two-triangles method.",
      "naturalWidth": 1100,
      "naturalHeight": 420,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 110,
        "rows": 42
      }
    },
    "missingFeedback": "Enter and check the area found by both named methods.",
    "correctFeedback": "Correct. Both decompositions account for the same hexagon and give 93.6 square inches.",
    "incorrectFeedback": "Open each named method to see which calculation needs revision.",
    "hints": [
      "For Lin, each small triangle has height 5.2. For Andre, each side triangle has horizontal height 3."
    ],
    "sampleAnswer": "Lin: 6 x (1/2 x 6 x 5.2) = 93.6. Andre: 6 x 10.4 + 2 x (1/2 x 10.4 x 3) = 93.6 square inches.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one independently checked area for each named method and one available combined explanation",
      "sourceObjects": [
        "Lin's exact source decomposition",
        "Andre's exact source decomposition",
        "all source dimensions"
      ],
      "notes": "The source's two required calculations are not collapsed; each method has its own numeric input and feedback while the shared explanation remains optional. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 11 Practice Problem 4. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning. The retained sample shows the two distinct source-named computations rather than merely repeating the final area.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-base-height-drawing",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "5a",
    "practicePartOrder": 5,
    "routePart": "problem-5a",
    "skill": "Identify and label a triangle base and corresponding height",
    "activityForm": "required source-aligned base and height drawing",
    "prompt": "Use the Base and Height tools to mark one usable base and its corresponding perpendicular height.",
    "responseType": "heightDrawing",
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-base-height-triangle-source.png",
      "alt": "The exact source triangle on a square grid with a long horizontal top side.",
      "naturalWidth": 740,
      "naturalHeight": 265,
      "displayMaxHeight": 350,
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 1,
        "cellY": 1,
        "columns": 740,
        "rows": 265
      },
      "annotationTools": [
        "base",
        "height",
        "erase"
      ],
      "defaultAnnotationTool": "base",
      "requiredAnnotationTolerance": 28,
      "requiredAnnotationMarks": [
        {
          "type": "base",
          "start": {
            "x": 56,
            "y": 50
          },
          "end": {
            "x": 685,
            "y": 50
          }
        },
        {
          "type": "height",
          "start": {
            "x": 370,
            "y": 50
          },
          "end": {
            "x": 370,
            "y": 188
          }
        }
      ],
      "annotationInstructions": "Choose Base and drag along the horizontal top side. Then choose Height and draw the perpendicular segment from that base line to the opposite vertex."
    },
    "missingFeedback": "Draw and submit one base and its corresponding height.",
    "correctFeedback": "Correct. The horizontal top side is a base of 11 units, and the vertical segment to the opposite vertex is its corresponding height of 2 units.",
    "incorrectFeedback": "Use Base to trace the full horizontal top side and Height to connect that base line perpendicularly to the opposite vertex.",
    "hints": [
      "The easiest base is the horizontal side; its corresponding height is vertical."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one required base mark and one required corresponding-height mark",
      "sourceObjects": [
        "exact source triangle",
        "unaltered square grid"
      ],
      "notes": "Distinct Base and Height tools preserve the source's labeling action. Marks are validated in source-pixel coordinates with endpoint tolerance and no answer line appears before the student draws it."
    },
    "implementationNotes": "Full-coverage interactive implementation of Lesson 11 Practice Problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-triangle-area",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "5b",
    "practicePartOrder": 6,
    "routePart": "problem-5b",
    "skill": "Use a base and corresponding height to find triangle area",
    "activityForm": "numeric exact-area response with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the triangle in square units.",
    "responseType": "number",
    "answerKey": [
      "11"
    ],
    "reasoningPrompt": "Optional: show how the base and corresponding height determine the area.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-base-height-triangle-source.png",
      "alt": "The exact source triangle on a square grid.",
      "naturalWidth": 740,
      "naturalHeight": 265,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 9.814815,
        "columns": 74,
        "rows": 27
      }
    },
    "missingFeedback": "Enter the triangle's area in square units.",
    "correctFeedback": "Correct. The top base is 11 units and its corresponding height is 2 units, so the area is 1/2 x 11 x 2 = 11 square units.",
    "incorrectFeedback": "Not quite. Count the long horizontal base and the vertical grid distance to the opposite vertex, then take one half of their product.",
    "hints": [
      "The horizontal base is 11 units and the corresponding height is 2 units."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "same exact source triangle and grid as Problem 5a"
      ],
      "notes": "The calculation is independently routed after the drawing subpart and uses the same unaltered source evidence. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 11 Practice Problem 5b. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson11-three-area-eight-triangles",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-11-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "6",
    "practicePartOrder": 7,
    "routePart": "problem-6",
    "skill": "Construct different triangles with a specified area",
    "activityForm": "three-target grid construction with base-height labels",
    "prompt": "Draw three different triangles with an area of 8 square units. Enter a base length and corresponding height for each triangle.",
    "responseType": "quadrilateralAreaSet",
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 16,
      "rows": 10,
      "drawingCount": 3,
      "vertexCount": 3,
      "validationMode": "equalAreaTriangles",
      "targetArea": 8,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "retainInactiveDrawings": true
    },
    "missingFeedback": "Complete and check all three different area-8 triangles with a base-height pair for each.",
    "correctFeedback": "Correct. All three drawings are different triangles with area 8, and each base-height product is 16, so one half of that product is 8.",
    "incorrectFeedback": "Revise the triangle identified by the workspace. Each drawing needs area 8 and a corresponding base-height pair whose product is 16.",
    "hints": [
      "Try base-height pairs 4 and 4, 8 and 2, or 2 and 8, then move the third vertex to change the triangle's shape."
    ],
    "sampleAnswer": "Examples include a right triangle with base 4 and height 4, a thin triangle with base 8 and height 2, and an isosceles triangle with base 4 and height 4.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 9,
      "appActionTargets": 9,
      "unitOfAction": "three independently checked triangle drawings, three base labels, and three corresponding-height labels",
      "sourceObjects": [
        "source-equivalent blank square grid",
        "three student-created triangles"
      ],
      "notes": "The local grid constructor checks each triangle's shoelace area, its entered base-height calculation, the target area of 8, and non-congruence with already submitted drawings. Every other created triangle remains visible as a labeled, non-editable reference with its entered base and height whenever the student switches drawings."
    },
    "implementationNotes": "Full-coverage interactive implementation of Lesson 11 Practice Problem 6. Retains all inactive triangles and their dimensions on the shared grid so the student can compare the three constructions in either switching direction. The retained sample provides alternate valid triangle constructions for comparison with the student's three drawings.",
    "source": "Cumulative Practice Problems/Grade6-1-11-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-polygon-decompose",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Family Support Material",
    "sourceFolder": "Family Support Materials",
    "sourceFile": "Family Support Materials.pdf",
    "sourcePage": 10,
    "previewPath": "_rendered-previews/Family Support Materials/Family-Support-Materials/page-010.png",
    "sourcePreviewMode": "afterSubmit",
    "sourceItem": "Family Support Polygon B",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "Extra 1",
    "practicePartOrder": 8,
    "routePart": "extra-family-polygon",
    "skill": "Find polygon area by decomposing",
    "activityForm": "polygon decomposition",
    "prompt": "A polygon is decomposed into a rectangle with area 8, one triangle with area 2, and one triangle with area 8. What is the total area?",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-polygon-b-source.png",
      "alt": "The exact family-support diagram of Polygon B on a square grid with dashed decomposition lines.",
      "naturalWidth": 520,
      "naturalHeight": 650,
      "displayVariant": "compactPortrait"
    },
    "visualRules": {
      "status": "passes-with-locked-preview",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric polygon-area answer",
      "sourceObjects": [
        "family support polygon B decomposition"
      ],
      "notes": "The card uses an exact visual-only crop of Polygon B and its dashed decomposition lines. The rendered source page includes solution text, so the source modal unlocks only after a correct auto-graded response."
    },
    "hints": [
      "The pieces do not overlap.",
      "Add the areas of all pieces."
    ],
    "sampleAnswer": "8 + 2 + 8 = 18 square units.",
    "implementationNotes": "Uses the exact Polygon B decomposition visual from Unit 1 Family Support Materials page 10; the answer-bearing full page remains locked until correct. The retained sample supplies the worked addition that is not present in generic correct feedback.",
    "source": "Family Support Materials/Family Support Materials.pdf p.10"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-polygon-compose-subtract",
    "section": "D",
    "sectionName": "Polygons",
    "lesson": 11,
    "sourceType": "Student Task Statement",
    "sourceFolder": "Student Task Statements",
    "sourceFile": "Grade6-1-11-Lesson-student-task-statements.pdf",
    "sourcePage": 4,
    "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-11-Lesson-student-task-statements/page-004.png",
    "sourceItem": "Student Task Pinwheel Extension",
    "practiceLessonGroup": "lesson-11-practice",
    "practiceLessonTitle": "Polygons",
    "practicePartLabel": "Extra 2",
    "practicePartOrder": 9,
    "routePart": "extra-pinwheel",
    "skill": "Find polygon area by decomposing a pinwheel",
    "activityForm": "pinwheel area",
    "prompt": "Find the area of the shaded pinwheel region in square units.",
    "responseType": "number",
    "answerKey": [
      "40"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-11-pinwheel-source.png",
      "alt": "The exact source pinwheel-shaped shaded polygon on a square grid.",
      "naturalWidth": 1030,
      "naturalHeight": 1000,
      "displayVariant": "compactSquare",
      "displayMaxHeight": 460,
      "annotationGrid": {
        "originX": 66,
        "originY": 17,
        "cellSize": 71,
        "columns": 13,
        "rows": 13
      },
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": true,
    "reasoningMinLength": 10,
    "reasoningConcepts": [
      [
        "decompos"
      ],
      [
        "enclos"
      ],
      [
        "subtract"
      ],
      [
        "triang"
      ],
      [
        "rectang"
      ],
      [
        "square"
      ]
    ],
    "reasoningValidationGuidance": "write at least 10 characters and describe decomposing the pinwheel into simpler shapes or enclosing it and subtracting unshaded regions",
    "missingFeedback": "Enter the pinwheel area before submitting.",
    "reasoningRequiredFeedback": "The area is correct. Add the source-requested reasoning before submitting again.",
    "reasoningRevisionFeedback": "The area is correct, but the explanation needs to name a valid decomposition or enclosure-and-subtraction strategy.",
    "correctFeedback": "Correct. A valid grid decomposition or an enclosing-region subtraction shows that the shaded pinwheel has area 40 square units.",
    "incorrectFeedback": "Not quite. Use the square grid to decompose the pinwheel into familiar pieces, or enclose it and subtract the unshaded parts.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric area answer and one source-requested explanation for the shaded pinwheel",
      "sourceObjects": [
        "one shaded pinwheel polygon on a square grid"
      ],
      "notes": "Uses an exact visual-only crop of the Lesson 11.4 pinwheel with an aligned, grid-snapped line/rectangle/square scratchpad. The optional marks are not graded; the card validates the numeric area and source-required written reasoning independently."
    },
    "hints": [
      "Try enclosing the figure in a rectangle and subtracting unshaded triangles.",
      "You can also decompose the pinwheel into triangles and rectangles."
    ],
    "implementationNotes": "Rebuilt from Lesson 11.4 with the exact source grid visual, a calibrated ungraded annotation overlay, and transparent validation for the required written reasoning.",
    "source": "Student Task Statements/Grade6-1-11-Lesson-student-task-statements.pdf p.4"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-surface-area-description",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Interpret surface area",
    "activityForm": "single choice definition",
    "prompt": "Which description can represent the surface area of a trunk?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "topOnly",
        "label": "The number of square inches that cover only the top of the trunk"
      },
      {
        "id": "outsideFaces",
        "label": "The number of square feet that cover all the outside faces of the trunk"
      },
      {
        "id": "insideFloor",
        "label": "The number of square inches of horizontal surface inside the trunk"
      },
      {
        "id": "packedVolume",
        "label": "The number of cubic feet that can be packed inside the trunk"
      }
    ],
    "answerKey": [
      "outsideFaces"
    ],
    "visualModelData": {
      "type": "sourcePhoto",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-12-trunk-source.png",
      "alt": "The exact source photograph of a closed rectangular trunk.",
      "naturalWidth": 900,
      "naturalHeight": 670,
      "caption": "Use the visible outside of the trunk to interpret surface area."
    },
    "missingFeedback": "Choose one description before submitting.",
    "correctFeedback": "Correct. Surface area measures the total area of all outside faces and uses square units, so square feet covering every outside face is a valid description.",
    "incorrectFeedback": "Not quite. Surface area measures all exterior faces in square units. A top-only or inside-only measure is incomplete, and cubic feet measure volume.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "one selected description from choices A-D",
      "sourceObjects": [
        "trunk photograph",
        "four surface-area/volume descriptions"
      ],
      "notes": "Preserves the four source answer choices and places an exact visual-only crop of the source trunk photograph in the workspace; the modal is supplemental rather than the only place to see essential evidence."
    },
    "hints": [
      "Surface area covers the outside faces.",
      "Cubic units measure volume, not surface area."
    ],
    "implementationNotes": "Directly adapted from Lesson 12 cumulative practice, Problem 2, with the exact trunk photograph shown in the card workspace.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.1",
    "sourceItem": "Problem 2",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "2",
    "practicePartOrder": 2,
    "routePart": "problem-2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-rect-prism-surface-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2",
    "skill": "Find surface area of a rectangular prism",
    "activityForm": "draggable net scratchpad and calculation",
    "prompt": "A cereal box is 8 inches by 2 inches by 12 inches. What is its surface area?",
    "responseType": "number",
    "answerKey": [
      "272"
    ],
    "visualModelData": {
      "type": "rectPrismNetBuilder",
      "length": 8,
      "width": 2,
      "height": 12,
      "unit": "in",
      "subject": "cereal box",
      "optional": true,
      "freeform": true
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the cereal box's surface area before submitting.",
    "correctFeedback": "Correct. The box has two 8-by-2 faces, two 8-by-12 faces, and two 2-by-12 faces, so its surface area is 2(8 × 2) + 2(8 × 12) + 2(2 × 12) = 272 square inches.",
    "incorrectFeedback": "Not quite. Find the area of each different face and remember that every face has a congruent opposite face.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one validated numeric surface-area answer plus one optional explanation field for the cereal box",
      "sourceObjects": [
        "rectangular prism dimensions 8 in by 2 in by 12 in"
      ],
      "notes": "Uses source Problem 2's cereal-box dimensions and preserves its numeric answer plus a writing area. The app provides the six source-sized faces as loose draggable and rotatable pieces; the scratchpad arrangement is never graded, and the numeric surface-area answer is the sole required validated response."
    },
    "hints": [
      "A rectangular prism has 3 pairs of equal faces.",
      "Add 2(8 × 2), 2(8 × 12), and 2(2 × 12)."
    ],
    "implementationNotes": "Directly adapted from Lesson 15 cumulative-practice Problem 2. The optional scratchpad supplies six loose source-dimension faces with drag, keyboard movement, rotation, and reset controls. It does not validate overlap, connectivity, or fold topology; only the numeric surface-area answer is graded.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "2",
    "practicePartOrder": 4,
    "routePart": "problem-2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-net-error-analysis",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1b",
    "skill": "Analyze a surface-area net",
    "activityForm": "two independently checked error-analysis questions",
    "prompt": "Jada made some mistakes in her area calculation. What were the mistakes?",
    "responseType": "groupedChoice",
    "answerKey": [
      "mistake:forgotHalf",
      "correction:6"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-jada-net-source.png",
      "alt": "The exact source net with 3-4-5 triangular faces, three rectangular faces, and Jada's written face-area calculations.",
      "naturalWidth": 1040,
      "naturalHeight": 700
    },
    "inputLabel": "Describe Jada's area-calculation mistakes",
    "inputPlaceholder": "Explain what should change in the triangle calculations",
    "responseValidator": "triangularPrismAreaError",
    "answerValidationGuidance": "explain that each triangular face needs the 1/2 factor, so each area is 6 square centimeters rather than 12",
    "missingFeedback": "Answer both error-analysis questions.",
    "correctFeedback": "Correct. Jada forgot the 1/2 factor, so each triangular face has area 6 square centimeters rather than 12.",
    "incorrectFeedback": "Review each part's feedback and correct the two triangular face areas.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one validated written error-analysis response for source Problem 1b",
      "sourceObjects": [
        "exact triangular-prism net",
        "3-4-5 triangular faces",
        "rectangular faces",
        "Jada's labeled face-area calculations"
      ],
      "notes": "Uses an exact visual-only crop of the evidence needed for Problem 1b and keeps the source's written error-analysis form while validating concise equivalent explanations."
    },
    "hints": [
      "A prism has two congruent bases.",
      "Surface area is measured in square units."
    ],
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 1b using two independently checked conceptual choices instead of brittle prose validation.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "1b",
    "practicePartOrder": 2,
    "routePart": "problem-1b",
    "choiceGroups": [
      {
        "id": "mistake",
        "label": "Mistake",
        "prompt": "What mathematical mistake did Jada make?",
        "choices": [
          {
            "id": "forgotHalf",
            "label": "She used base x height for each triangle and forgot the 1/2 factor."
          },
          {
            "id": "wrongRectangle",
            "label": "She multiplied the side lengths of every rectangle incorrectly."
          },
          {
            "id": "missedFace",
            "label": "She left one rectangular face out of the net."
          }
        ],
        "correctChoiceId": "forgotHalf",
        "correctFeedback": "Correct. Triangle area is 1/2 x base x height, not base x height.",
        "incorrectFeedback": "Focus on the two triangular faces that Jada labeled 12 square centimeters."
      },
      {
        "id": "correction",
        "label": "Correction",
        "prompt": "What area should replace 12 square centimeters on each triangular face?",
        "choices": [
          {
            "id": "6",
            "label": "6 square centimeters"
          },
          {
            "id": "12",
            "label": "12 square centimeters"
          },
          {
            "id": "24",
            "label": "24 square centimeters"
          }
        ],
        "correctChoiceId": "6",
        "correctFeedback": "Correct. 1/2 x 3 x 4 = 6 square centimeters for each triangle.",
        "incorrectFeedback": "Use 1/2 x 3 x 4 for one triangular face."
      }
    ],
    "readyFeedback": "Submit the identified mistake and its correction separately."
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-net-to-polyhedron",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a",
    "skill": "Identify a polyhedron from its net and justify the classification",
    "activityForm": "two independently checked net-classification questions",
    "prompt": "What polyhedron can be assembled from this net? Explain how you know.",
    "responseType": "groupedChoice",
    "answerKey": [
      "solid:triangularPrism",
      "reason:twoTriangles"
    ],
    "inputLabel": "Polyhedron name",
    "inputPlaceholder": "Type the polyhedron name",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-triangular-prism-net-source.png",
      "alt": "The exact source net on a square grid, with two congruent triangular faces and three rectangular faces.",
      "naturalWidth": 530,
      "naturalHeight": 500,
      "displayVariant": "compactSquare"
    },
    "reasoningPrompt": "Explain how you know.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningConcepts": [
      [
        "two",
        "triang",
        "three",
        "rectang"
      ],
      [
        "2",
        "triang",
        "3",
        "rectang"
      ],
      [
        "triang",
        "base",
        "rectang"
      ],
      [
        "triang",
        "end",
        "rectang",
        "side"
      ]
    ],
    "reasoningValidationGuidance": "describe the two triangular bases and three rectangular side faces shown in the net",
    "missingFeedback": "Answer both questions about the source net.",
    "reasoningRequiredFeedback": "The polyhedron name is correct. Add the source-requested explanation before submitting again.",
    "reasoningRevisionFeedback": "The polyhedron name is correct, but the explanation needs to connect the net's triangular bases and rectangular side faces to the solid.",
    "correctFeedback": "Correct. The net forms a triangular prism: two congruent triangles become parallel bases, and three rectangles become side faces.",
    "incorrectFeedback": "Review each part's feedback and connect the face inventory to the definition of a prism.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one polyhedron identification and one independently checked source-based explanation",
      "sourceObjects": [
        "exact gridded source net with two congruent triangles and three rectangles"
      ],
      "notes": "The exact visual-only source net remains visible for both response targets; structured reasoning avoids rejecting mathematically equivalent prose."
    },
    "hints": [
      "The two congruent triangles are the bases.",
      "The rectangles connect the matching triangle edges."
    ],
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 2a with independent classification and reasoning feedback.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "2a",
    "practicePartOrder": 2,
    "routePart": "problem-2a",
    "choiceGroups": [
      {
        "id": "solid",
        "label": "Polyhedron",
        "prompt": "What polyhedron can be assembled from the source net?",
        "choices": [
          {
            "id": "triangularPrism",
            "label": "Triangular prism"
          },
          {
            "id": "triangularPyramid",
            "label": "Triangular pyramid"
          },
          {
            "id": "rectangularPrism",
            "label": "Rectangular prism"
          }
        ],
        "correctChoiceId": "triangularPrism",
        "correctFeedback": "Correct. The net assembles into a triangular prism.",
        "incorrectFeedback": "Identify the two congruent faces that become parallel bases."
      },
      {
        "id": "reason",
        "label": "Reason",
        "prompt": "Which face inventory proves the classification?",
        "choices": [
          {
            "id": "twoTriangles",
            "label": "Two congruent triangles become the bases, and three rectangles connect their corresponding sides."
          },
          {
            "id": "fourTriangles",
            "label": "Four triangles meet at one point."
          },
          {
            "id": "sixRectangles",
            "label": "Six rectangles form three pairs of opposite faces."
          }
        ],
        "correctChoiceId": "twoTriangles",
        "correctFeedback": "Correct. Two congruent triangular bases and three rectangular side faces define a triangular prism.",
        "incorrectFeedback": "Count the triangular faces and the rectangles in the exact source net."
      }
    ],
    "readyFeedback": "Submit both the polyhedron name and its defining reason."
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-measurement-units",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Match attributes to measurement units",
    "activityForm": "matching",
    "prompt": "Match each quantity with an appropriate unit of measurement.",
    "responseType": "matching",
    "matchChoices": [
      {
        "id": "squareMeters",
        "label": "Square meters"
      },
      {
        "id": "yards",
        "label": "Yards"
      },
      {
        "id": "cubicInches",
        "label": "Cubic inches"
      },
      {
        "id": "cubicFeet",
        "label": "Cubic feet"
      },
      {
        "id": "squareCentimeters",
        "label": "Square centimeters"
      }
    ],
    "matchTargets": [
      {
        "id": "tissueSurface",
        "label": "The surface area of a tissue box",
        "correctChoiceId": "squareCentimeters"
      },
      {
        "id": "soilAmount",
        "label": "The amount of soil in a planter box",
        "correctChoiceId": "cubicFeet"
      },
      {
        "id": "parkingArea",
        "label": "The area of a parking lot",
        "correctChoiceId": "squareMeters"
      },
      {
        "id": "fieldLength",
        "label": "The length of a soccer field",
        "correctChoiceId": "yards"
      },
      {
        "id": "fishTankVolume",
        "label": "The volume of a fish tank",
        "correctChoiceId": "cubicInches"
      }
    ],
    "answerKey": [],
    "visualModelData": {
      "type": "measurementUnits"
    },
    "missingFeedback": "Choose a unit for each of the five quantities before submitting.",
    "correctFeedback": "Correct. Length uses yards, area uses square centimeters or square meters at an appropriate scale, and volume uses cubic inches or cubic feet at an appropriate scale.",
    "incorrectFeedback": "Not quite. First decide whether each quantity is a length, area, or volume, then choose a unit whose real-world scale fits the object.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 5,
      "appActionTargets": 5,
      "unitOfAction": "each quantity-to-unit match row",
      "sourceObjects": [
        "five source quantities",
        "five source unit choices"
      ],
      "notes": "Preserves the original matching activity and the full pool of unit choices."
    },
    "hints": [
      "Square units measure two-dimensional area.",
      "Cubic units measure volume, and linear units measure length."
    ],
    "implementationNotes": "Directly adapted from Lesson 16 cumulative practice, problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.1",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-surface-vs-volume",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5",
    "skill": "Distinguish surface area and volume",
    "activityForm": "multi-select comparison",
    "prompt": "Prism A is 3 by 2 by 1. Prism B is 1 by 1 by 6. Select every true statement.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "sameVolume",
        "label": "They have the same volume."
      },
      {
        "id": "sameFaces",
        "label": "They have the same number of faces."
      },
      {
        "id": "moreCubesA",
        "label": "More inch cubes can be packed into Prism A."
      },
      {
        "id": "sameSurface",
        "label": "They have the same surface area."
      },
      {
        "id": "surfaceBGreater",
        "label": "The surface area of Prism B is greater."
      }
    ],
    "answerKey": [
      "sameVolume",
      "sameFaces",
      "surfaceBGreater"
    ],
    "visualModelData": {
      "type": "surfaceVolumePrisms",
      "unitScale": 36,
      "depthProjection": {
        "x": 0.42,
        "y": 0.28
      },
      "prisms": [
        {
          "id": "A",
          "x": 64,
          "y": 96,
          "widthUnits": 3,
          "heightUnits": 2,
          "depthUnits": 1,
          "frontClass": "blue"
        },
        {
          "id": "B",
          "x": 304,
          "y": 50,
          "widthUnits": 1,
          "heightUnits": 6,
          "depthUnits": 1,
          "frontClass": "amber"
        }
      ]
    },
    "missingFeedback": "Select at least one comparison statement before submitting.",
    "correctFeedback": "Correct. Both prisms have volume 6 cubic inches and six faces. Prism A has surface area 22 square inches, while Prism B has surface area 26 square inches, so Prism B has greater surface area.",
    "incorrectFeedback": "Not quite. Calculate volume and surface area separately for both prisms; having equal volume does not require equal surface area.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 5,
      "appActionTargets": 5,
      "unitOfAction": "each statement A-E comparing Prism A and Prism B",
      "sourceObjects": [
        "Prism A dimensions 3 by 2 by 1",
        "Prism B dimensions 1 by 1 by 6",
        "five comparison statements"
      ],
      "notes": "Preserves the source's text-only select-all comparison task. The app-provided prism scaffold uses one shared unit scale, exact 3:2 and 1:6 front-face ratios, and the same foreshortened one-unit depth vector for both solids."
    },
    "hints": [
      "Volume counts cubic units inside.",
      "Surface area counts exposed square units outside."
    ],
    "implementationNotes": "Directly adapted from Lesson 17 cumulative practice, problem 5. Because the source is text-only, the supplemental prism diagram is generated from the stated dimensions with a shared unit scale and common foreshortened depth projection.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.2",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "5",
    "practicePartOrder": 7,
    "routePart": "problem-5"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-perfect-square-cube",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a-b",
    "skill": "Classify perfect squares",
    "activityForm": "multi-select classification",
    "prompt": "Select every number in the source list that is a perfect square.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "16",
        "label": "16"
      },
      {
        "id": "20",
        "label": "20"
      },
      {
        "id": "25",
        "label": "25"
      },
      {
        "id": "100",
        "label": "100"
      },
      {
        "id": "125",
        "label": "125"
      },
      {
        "id": "144",
        "label": "144"
      },
      {
        "id": "225",
        "label": "225"
      },
      {
        "id": "10000",
        "label": "10,000"
      }
    ],
    "answerKey": [
      "16",
      "25",
      "100",
      "144",
      "225",
      "10000"
    ],
    "visualModelData": {
      "type": "squareCubeNumbers"
    },
    "reasoningPrompt": "Write a sentence that explains your reasoning.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningConcepts": [
      [
        "whole",
        "number",
        "itself"
      ],
      [
        "integer",
        "itself"
      ],
      [
        "whole",
        "square",
        "root"
      ],
      [
        "same",
        "factor",
        "twice"
      ],
      [
        "whole",
        "number",
        "squared"
      ],
      [
        "integer",
        "squared"
      ]
    ],
    "reasoningValidationGuidance": "explain that a perfect square is a whole number multiplied by itself, or that it has a whole-number square root",
    "missingFeedback": "Select at least one number before submitting.",
    "reasoningRequiredFeedback": "The selected perfect squares are correct. Add the source-requested reasoning before submitting again.",
    "reasoningRevisionFeedback": "The selected perfect squares are correct, but the explanation needs to state the whole-number factor or square-root property.",
    "correctFeedback": "Correct. The selected numbers are 4², 5², 10², 12², 15², and 100², so each is a whole number multiplied by itself.",
    "incorrectFeedback": "Not quite. Test each candidate by asking whether it has a whole-number square root.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 9,
      "appActionTargets": 9,
      "unitOfAction": "eight number classifications from Problem 2a plus one required explanation from Problem 2b",
      "sourceObjects": [
        "eight candidate numbers for perfect-square classification",
        "source explanation prompt"
      ],
      "notes": "Preserves both parts of source Problem 2: all eight classification decisions and the required explanation."
    },
    "hints": [
      "A perfect square can be written as n × n.",
      "Check whether each number has a whole-number square root."
    ],
    "implementationNotes": "Directly adapted from Lesson 17 cumulative-practice Problem 2a-b with transparent validation of the required perfect-square reasoning.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "2",
    "practicePartOrder": 2,
    "routePart": "problem-2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-perfect-cubes",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3a-b",
    "skill": "Classify perfect cubes",
    "activityForm": "multi-select classification",
    "prompt": "Select every number in the source list that is a perfect cube.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "1",
        "label": "1"
      },
      {
        "id": "3",
        "label": "3"
      },
      {
        "id": "8",
        "label": "8"
      },
      {
        "id": "9",
        "label": "9"
      },
      {
        "id": "27",
        "label": "27"
      },
      {
        "id": "64",
        "label": "64"
      },
      {
        "id": "100",
        "label": "100"
      },
      {
        "id": "125",
        "label": "125"
      }
    ],
    "answerKey": [
      "1",
      "8",
      "27",
      "64",
      "125"
    ],
    "visualModelData": {
      "type": "squareCubeNumbers"
    },
    "reasoningPrompt": "Explain what a perfect cube is.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningConcepts": [
      [
        "whole",
        "number",
        "itself",
        "three"
      ],
      [
        "whole",
        "number",
        "itself",
        "3"
      ],
      [
        "three",
        "equal",
        "factor"
      ],
      [
        "3",
        "equal",
        "factor"
      ],
      [
        "whole",
        "cube",
        "root"
      ],
      [
        "whole",
        "number",
        "cubed"
      ]
    ],
    "reasoningValidationGuidance": "explain that a perfect cube is the product of three equal whole-number factors, or that it has a whole-number cube root",
    "missingFeedback": "Select at least one number before submitting.",
    "reasoningRequiredFeedback": "The selected perfect cubes are correct. Add the source-requested definition before submitting again.",
    "reasoningRevisionFeedback": "The selected perfect cubes are correct, but the definition needs the three-equal-factors or whole-number-cube-root property.",
    "correctFeedback": "Correct. The selected numbers are 1³, 2³, 3³, 4³, and 5³, so each is the product of three equal whole-number factors.",
    "incorrectFeedback": "Not quite. Test each candidate by asking whether it has a whole-number cube root.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 9,
      "appActionTargets": 9,
      "unitOfAction": "eight number classifications from Problem 3a plus one required definition from Problem 3b",
      "sourceObjects": [
        "eight candidate numbers for perfect-cube classification",
        "source definition prompt"
      ],
      "notes": "Preserves both parts of source Problem 3: all eight classification decisions and the required perfect-cube definition."
    },
    "hints": [
      "A perfect cube can be written as n × n × n.",
      "Check whether each number has a whole-number cube root."
    ],
    "implementationNotes": "Directly adapted from Lesson 17 cumulative-practice Problem 3a-b with transparent validation of the required perfect-cube definition.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "3",
    "practicePartOrder": 3,
    "routePart": "problem-3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-cube-surface-area",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 3a-c",
    "skill": "Write a cube surface-area expression",
    "activityForm": "interactive cube-net construction and expressions",
    "prompt": "Draw a net for a cube with edge length x centimeters. Then give its surface area and volume.",
    "responseType": "cubeNetExpressions",
    "answerKey": [],
    "visualModelData": {
      "type": "interactiveCubeNet",
      "edge": "x cm",
      "placementScale": "symbolic"
    },
    "missingFeedback": "Build a six-square net and enter both expressions before submitting.",
    "correctFeedback": "Correct. Your six connected squares fold onto six different cube faces. Each face has area x², so the surface area is 6x² square centimeters; the volume is x³ cubic centimeters.",
    "incorrectFeedback": "Revise the net or expressions. The net needs six edge-connected squares that fold onto six different faces; surface area is six square-face areas, and volume uses three edge-length factors.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one valid cube-net construction, one surface-area expression, and one volume expression from source Problem 3a-c",
      "sourceObjects": [
        "student-drawn cube net with six congruent square faces",
        "edge length x cm",
        "surface-area prompt",
        "volume prompt"
      ],
      "notes": "Recreates the source drawing action as a local six-square net constructor. The neutral placement board keeps its lattice non-metric, labels every placed face with the symbolic edge length x cm, and independently validates the two symbolic results instead of supplying a finished net."
    },
    "hints": [
      "A cube net has six equal squares joined along complete edges.",
      "Each square face has area x²; volume uses three factors of x."
    ],
    "implementationNotes": "Rebuilt from Lesson 18 cumulative-practice Problem 3a-c with a non-metric cube-net placement board, direct x cm face labels, and mathematical-equivalence checks that accept powers, multiplication symbols, *, and the word times.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "3",
    "practicePartOrder": 6,
    "routePart": "problem-3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-tent-design-estimate",
    "section": "G",
    "sectionName": "Let's Put it to Work",
    "lesson": 19,
    "sourceType": "Student Task Statement",
    "sourceFolder": "Student Task Statements",
    "sourceFile": "Grade6-1-19-Lesson-student-task-statements.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-001.png",
    "sourcePages": [
      {
        "page": 1,
        "label": "Task p.1",
        "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-001.png"
      },
      {
        "page": 2,
        "label": "Specifications p.2",
        "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-002.png"
      },
      {
        "page": 3,
        "label": "Design p.3",
        "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-003.png"
      },
      {
        "page": 4,
        "label": "Estimate p.4",
        "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-004.png"
      }
    ],
    "sourceItem": "Activity 19.1, Questions 1-3",
    "skill": "Use surface-area reasoning in a design context",
    "activityForm": "interactive design and panel-area estimate",
    "prompt": "Design a tent with a floor for up to four people. Record important design decisions, then estimate the fabric needed and justify the estimate with the areas of all panels.",
    "responseType": "tentDesignEstimate",
    "answerKey": [],
    "visualModelData": {
      "type": "interactiveTentDesigner"
    },
    "missingFeedback": "Begin the tent design, record at least one important decision, and complete the fabric worksheet before submitting.",
    "correctFeedback": "Complete and internally consistent. The floor fits the selected sleeping bags, the important design decisions are recorded, and the panel areas add to the submitted fabric estimate.",
    "incorrectFeedback": "Recheck the floor fit and every fabric panel. The estimate must include the floor and each matching pair of roof, wall, or end panels.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one floor-inclusive tent design, one record of important design decisions, and one panel-area fabric estimate with mathematical justification",
      "sourceObjects": [
        "tent-style examples",
        "height specifications",
        "standard sleeping-bag measurements",
        "four-person maximum",
        "floor requirement",
        "design-decision prompt",
        "fabric-estimate prompt"
      ],
      "notes": "Preserves all three parts of source Activity 19.1. The local designer uses the supplied capacity, height, and sleeping-bag constraints; the panel worksheet makes the source-requested mathematical justification testable without judging an open sketch by appearance."
    },
    "hints": [
      "Make the floor large enough for every 74-by-34-inch sleeping bag.",
      "List the floor and every matching pair of roof, wall, or end panels before adding their areas."
    ],
    "sampleAnswer": "A complete response shows a floor-fitting tent, identifies the choices that shaped the design, calculates each set of congruent fabric panels, and adds those areas for a square-foot estimate.",
    "implementationNotes": "Rebuilt from all of Activity 19.1 (Student Task Statements pages 1-4) as an interactive constrained design with a dynamically validated panel-area worksheet. The retained sample is a model open response for comparing completeness, not a duplicate numeric answer.",
    "source": "Student Task Statements/Grade6-1-19-Lesson-student-task-statements.pdf p.1",
    "practiceLessonGroup": "lesson-19-practice",
    "practiceLessonTitle": "Designing a Tent",
    "practicePartLabel": "19.1",
    "practicePartOrder": 1,
    "routePart": "activity-19-1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-identify-jada-solid",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1a",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "1a",
    "practicePartOrder": 1,
    "routePart": "problem-1a",
    "skill": "Identify the solid formed by a net",
    "activityForm": "single-choice solid classification",
    "prompt": "What polyhedron can be assembled from Jada's net?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "triangularPrism",
        "label": "Triangular prism"
      },
      {
        "id": "triangularPyramid",
        "label": "Triangular pyramid"
      },
      {
        "id": "rectangularPrism",
        "label": "Rectangular prism"
      },
      {
        "id": "squarePyramid",
        "label": "Square pyramid"
      }
    ],
    "answerKey": [
      "triangularPrism"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-jada-net-source.png",
      "alt": "The exact source net with two congruent triangular faces and three rectangular faces.",
      "naturalWidth": 1040,
      "naturalHeight": 700,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose the polyhedron that the exact source net forms.",
    "correctFeedback": "Correct. Two congruent triangular bases and three rectangular side faces form a triangular prism.",
    "incorrectFeedback": "Not quite. Count the two matching triangular faces and the three rectangles that connect them.",
    "hints": [
      "A prism is named for its pair of congruent, parallel bases."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one solid classification from the exact source net",
      "sourceObjects": [
        "exact source triangular-prism net"
      ],
      "notes": "Reuses the complete visual-only source crop required by all parts of Problem 1."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 1a.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-correct-jada-surface-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1c",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "1c",
    "practicePartOrder": 3,
    "routePart": "problem-1c",
    "skill": "Correct a surface-area calculation from a net",
    "activityForm": "numeric calculation with optional reasoning",
    "prompt": "What is the correct surface area of the polyhedron in square centimeters?",
    "responseType": "number",
    "answerKey": [
      "60"
    ],
    "reasoningPrompt": "Optional: show how you added the five face areas.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-jada-net-source.png",
      "alt": "The exact source net with two congruent triangular faces, three rectangular faces, and Jada's face-area labels.",
      "naturalWidth": 1040,
      "naturalHeight": 700,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Enter the corrected surface area.",
    "correctFeedback": "Correct. The rectangles contribute 20 + 16 + 12 square centimeters, and the two triangles contribute 6 + 6, for 60 square centimeters.",
    "incorrectFeedback": "Not quite. Keep the three correct rectangle areas, replace each triangular 12 with 6, and add all five faces.",
    "hints": [
      "20 + 16 + 12 + 6 + 6"
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one corrected total and one available explanation",
      "sourceObjects": [
        "exact source net",
        "all five source face-area calculations"
      ],
      "notes": "The same exact evidence remains visible while the corrected total is graded independently."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 1c.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-stair-surface-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3a",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "3a",
    "practicePartOrder": 5,
    "routePart": "problem-3a",
    "skill": "Find the surface area of a cube staircase",
    "activityForm": "numeric exact-source surface-area calculation",
    "prompt": "Twelve unit cubes are stacked to make the source figure. What is its surface area in square units?",
    "responseType": "number",
    "answerKey": [
      "36"
    ],
    "reasoningPrompt": "Optional: describe how you counted the exposed faces.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-stair-cubes-source.png",
      "alt": "The exact source staircase made from twelve cubes.",
      "naturalWidth": 260,
      "naturalHeight": 310,
      "displayVariant": "compactPortrait"
    },
    "missingFeedback": "Enter the surface area of the 12-cube figure.",
    "correctFeedback": "Correct. Counting the exposed unit-square faces gives a surface area of 36 square units.",
    "incorrectFeedback": "Not quite. Count only faces exposed to the outside; faces where two cubes touch are internal.",
    "hints": [
      "The stack is two cubes deep, with columns of heights 1, 2, and 3."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact surface area and one available explanation",
      "sourceObjects": [
        "exact source 12-cube staircase"
      ],
      "notes": "The visual-only crop contains the complete source stack with no prompt or footer text."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 3a.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-remove-top-cubes",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3b",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "3b",
    "practicePartOrder": 6,
    "routePart": "problem-3b",
    "skill": "Reason about a surface-area change after removing cubes",
    "activityForm": "single-choice change analysis",
    "prompt": "How would the surface area change if the top two cubes were removed?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "decrease6",
        "label": "It decreases by 6 square units, from 36 to 30."
      },
      {
        "id": "decrease2",
        "label": "It decreases by 2 square units, from 36 to 34."
      },
      {
        "id": "same",
        "label": "It stays 36 square units."
      },
      {
        "id": "increase6",
        "label": "It increases by 6 square units, from 36 to 42."
      }
    ],
    "answerKey": [
      "decrease6"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-stair-cubes-source.png",
      "alt": "The exact source 12-cube staircase before its top two cubes are removed.",
      "naturalWidth": 260,
      "naturalHeight": 310,
      "displayVariant": "compactPortrait"
    },
    "missingFeedback": "Choose how the surface area changes.",
    "correctFeedback": "Correct. Removing the two top cubes removes eight exposed faces but uncovers two faces below, a net decrease of 6 square units; the new surface area is 30.",
    "incorrectFeedback": "Not quite. Account for both the exposed faces that disappear and the previously covered faces that become exposed.",
    "hints": [
      "The two removed cubes contribute 8 outside faces, and 2 covered faces below become exposed."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one complete surface-area change statement",
      "sourceObjects": [
        "exact source 12-cube staircase",
        "top pair of cubes"
      ],
      "notes": "The response states both the direction/amount of change and the resulting area, matching the source's requested comparison."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 3b.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-cube-volume-eight",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1a",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "1a",
    "practicePartOrder": 1,
    "routePart": "problem-1a",
    "skill": "Find cube volume from edge length",
    "activityForm": "numeric volume calculation with optional reasoning",
    "prompt": "What is the volume of a cube with edge length 8 inches?",
    "responseType": "number",
    "answerKey": [
      "512"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the cube's volume in cubic inches.",
    "correctFeedback": "Correct. A cube with edge length 8 inches has volume 8 x 8 x 8 = 512 cubic inches.",
    "incorrectFeedback": "Not quite. Multiply the edge length by itself three times: 8 x 8 x 8.",
    "hints": [
      "Cube volume is edge x edge x edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one exact cube-volume answer",
      "sourceObjects": [
        "text-only edge length of 8 inches"
      ],
      "notes": "The source supplies no diagram; the card preserves the exact numerical task without inventing one."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 1a.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-cube-volume-third",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1b",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "1b",
    "practicePartOrder": 2,
    "routePart": "problem-1b",
    "skill": "Find cube volume with a fractional edge length",
    "activityForm": "numeric fractional-volume calculation with optional reasoning",
    "prompt": "What is the volume of a cube with edge length 1/3 centimeter?",
    "responseType": "number",
    "answerKey": [
      "1/27"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the cube's volume in cubic centimeters.",
    "correctFeedback": "Correct. (1/3) x (1/3) x (1/3) = 1/27, so the volume is 1/27 cubic centimeter.",
    "incorrectFeedback": "Not quite. Cube all of the edge length: multiply 1/3 by itself three times.",
    "hints": [
      "Multiply the numerators and denominators of three factors of 1/3."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one exact fractional cube-volume answer",
      "sourceObjects": [
        "text-only edge length of 1/3 centimeter"
      ],
      "notes": "The exact source fraction is retained, and equivalent decimal input is also accepted by the numeric grader."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 1b.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-cube-edge-from-volume",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1c",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "1c",
    "practicePartOrder": 3,
    "routePart": "problem-1c",
    "skill": "Find cube edge length from volume",
    "activityForm": "numeric inverse-volume calculation with optional reasoning",
    "prompt": "A cube has a volume of 8 cubic feet. What is its edge length in feet?",
    "responseType": "number",
    "answerKey": [
      "2"
    ],
    "reasoningPrompt": "Optional: show or explain how you found the edge length.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the cube's edge length in feet.",
    "correctFeedback": "Correct. Since 2 x 2 x 2 = 8, the cube's edge length is 2 feet.",
    "incorrectFeedback": "Not quite. Find the number that can be multiplied by itself three times to make 8.",
    "hints": [
      "Think of the cube root of 8."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one exact cube-edge answer",
      "sourceObjects": [
        "text-only volume of 8 cubic feet"
      ],
      "notes": "The task reverses cube volume without adding an unneeded visual."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 1c.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-identify-cube-net",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "2a",
    "practicePartOrder": 4,
    "routePart": "problem-2a",
    "skill": "Identify the solid formed by a net",
    "activityForm": "short answer using the exact source net",
    "prompt": "What three-dimensional figure can be assembled from this net?",
    "responseType": "shortAnswer",
    "inputLabel": "Three-dimensional figure",
    "answerKey": [
      "cube",
      "a cube"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-18-cube-net-source.png",
      "alt": "The exact source net made from six congruent squares.",
      "naturalWidth": 158,
      "naturalHeight": 120,
      "displayVariant": "compact"
    },
    "missingFeedback": "Name the three-dimensional figure formed by the source net.",
    "correctFeedback": "Correct. The six congruent squares fold to form a cube.",
    "incorrectFeedback": "Not quite. Count the six congruent square faces and picture folding them along their shared edges.",
    "hints": [
      "Which solid has six congruent square faces?"
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one solid identification from the exact source net",
      "sourceObjects": [
        "exact six-square source net"
      ],
      "notes": "The crop contains only the source diagram; all prompt text is rendered by the app."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 2a.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-cube-numeric-expressions",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "2b",
    "practicePartOrder": 5,
    "routePart": "problem-2b",
    "skill": "Write surface-area and volume expressions for the solid",
    "activityForm": "two mathematically validated expressions using the exact source net",
    "prompt": "Each square in the net has side length 61 centimeters. Write an expression for the surface area of the assembled solid and another for its volume.",
    "responseType": "cubeNetExpressions",
    "answerKey": [],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-18-cube-net-source.png",
      "alt": "The exact source net made from six congruent square faces, each with side length 61 centimeters.",
      "naturalWidth": 158,
      "naturalHeight": 120,
      "displayVariant": "compact",
      "requiresNetConstruction": false,
      "expressionEdgeLength": 61,
      "expressionUnit": "centimeters"
    },
    "missingFeedback": "Enter both the surface-area expression and the volume expression.",
    "correctFeedback": "Correct. Six square faces give 6 x 61 x 61 square centimeters, and three edge factors give 61 x 61 x 61 cubic centimeters.",
    "incorrectFeedback": "Revise the expressions. Surface area uses six square-face areas; volume uses three factors of the edge length.",
    "hints": [
      "Surface area: six copies of 61 x 61. Volume: 61 x 61 x 61."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one surface-area expression and one volume expression from the exact source net",
      "sourceObjects": [
        "exact six-square source net",
        "side length 61 centimeters"
      ],
      "notes": "Equivalent multiplication order and exponent notation are accepted without asking the student to redraw the supplied net."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 2b with numeric factor-structure validation.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-inaccurate-prism-net",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4a",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "4a",
    "practicePartOrder": 7,
    "routePart": "problem-4a",
    "skill": "Diagnose an inaccurately drawn rectangular-prism net",
    "activityForm": "single-choice visual diagnosis",
    "prompt": "This source net for a rectangular prism was not drawn accurately. What is wrong with it?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "shortFaces",
        "label": "The two attached small faces are too short; each should be a 2-by-1 rectangle spanning the full matching edge."
      },
      {
        "id": "tooMany",
        "label": "The drawing has too many faces for a rectangular prism."
      },
      {
        "id": "allSquares",
        "label": "Every face must be a square."
      },
      {
        "id": "disconnected",
        "label": "The faces are not connected along any edges."
      }
    ],
    "answerKey": [
      "shortFaces"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-18-inaccurate-prism-net-source.png",
      "alt": "The exact source inaccurate net with four side rectangles and two attached faces that do not span their matching edges.",
      "naturalWidth": 266,
      "naturalHeight": 182,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose the error in the source net.",
    "correctFeedback": "Correct. The two attached faces should match the full 2-unit edges of the intended 2-by-2-by-1 prism, so each must be a 2-by-1 rectangle rather than a 1-by-1 square.",
    "incorrectFeedback": "Not quite. The net has six connected regions. Compare the length of each shared edge with the face attached to it.",
    "hints": [
      "A face joined to a 2-unit edge must have a matching 2-unit edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one diagnosis of the exact source net",
      "sourceObjects": [
        "exact inaccurate source net",
        "all six source regions"
      ],
      "notes": "The app does not silently correct the source drawing before asking the student to identify its error."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 4a.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-corrected-net-one",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4b",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "4b",
    "practicePartOrder": 8,
    "routePart": "problem-4b",
    "skill": "Draw a valid net for a rectangular prism",
    "activityForm": "validated rectangular-prism net construction",
    "prompt": "Draw a net that can be assembled into the intended 2-by-2-by-1 rectangular prism.",
    "responseType": "rectPrismNet",
    "answerKey": [],
    "visualModelData": {
      "type": "rectPrismNetBuilder",
      "length": 2,
      "width": 2,
      "height": 1,
      "boardWidth": 18,
      "boardHeight": 14,
      "boardUnit": 26,
      "subject": "2-by-2-by-1 rectangular prism",
      "unit": "units",
      "optional": false,
      "freeform": false,
      "referenceNetItemIds": [
        "u1-practice-lesson18-corrected-net-one",
        "u1-practice-lesson18-corrected-net-two"
      ],
      "referenceNetLabel": "Net 1"
    },
    "missingFeedback": "Build and submit one valid six-face net for the 2-by-2-by-1 rectangular prism.",
    "correctFeedback": "Correct. The net has two 2-by-2 square faces and four 2-by-1 rectangular faces, and it folds onto six different prism faces.",
    "incorrectFeedback": "Revise the construction. Use two 2-by-2 squares and four 2-by-1 rectangles joined along complete matching edges.",
    "hints": [
      "A 2-by-2-by-1 prism has two 2-by-2 faces and four congruent 2-by-1 faces."
    ],
    "sampleAnswer": "One valid net has four 2-by-1 rectangles in a strip with the two 2-by-2 squares attached on opposite sides of an interior rectangle.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one student-built valid net",
      "sourceObjects": [
        "intended 2-by-2-by-1 prism dimensions",
        "six required faces"
      ],
      "notes": "The app restores the source drawing action and validates face inventory, matching shared edges, connectivity, and fold topology. A completed second net remains visible when the student returns to this part."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 4b. The retained sample describes a valid face arrangement for comparison with the student's own net.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-corrected-net-two",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4c",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "4c",
    "practicePartOrder": 9,
    "routePart": "problem-4c",
    "skill": "Draw a different valid net for the same rectangular prism",
    "activityForm": "validated distinct rectangular-prism net construction",
    "prompt": "Create another net for the same 2-by-2-by-1 rectangular prism. It must be genuinely different from your first net.",
    "responseType": "rectPrismNet",
    "answerKey": [],
    "visualModelData": {
      "type": "rectPrismNetBuilder",
      "length": 2,
      "width": 2,
      "height": 1,
      "boardWidth": 18,
      "boardHeight": 14,
      "boardUnit": 26,
      "subject": "2-by-2-by-1 rectangular prism",
      "unit": "units",
      "optional": false,
      "freeform": false,
      "differentFromItemId": "u1-practice-lesson18-corrected-net-one",
      "referenceNetItemIds": [
        "u1-practice-lesson18-corrected-net-one",
        "u1-practice-lesson18-corrected-net-two"
      ],
      "referenceNetLabel": "Net 2"
    },
    "missingFeedback": "Complete the first net, then build and submit a different valid net for the same prism.",
    "correctFeedback": "Correct. This valid 2-by-2-by-1 prism net has a different face-connection arrangement from the first net.",
    "incorrectFeedback": "Revise the construction. It must be a valid net and not merely a moved, turned, or flipped copy of your first arrangement.",
    "hints": [
      "Change which face is connected to which, not just where the whole net sits on the board."
    ],
    "sampleAnswer": "A second valid arrangement connects the two square faces through a different sequence of side rectangles.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one second valid net geometrically distinct from the first",
      "sourceObjects": [
        "same intended 2-by-2-by-1 prism dimensions",
        "source request for another net"
      ],
      "notes": "The validator treats translations, rotations, and reflections as the same net and requires a different face-connection arrangement. The completed first net remains visible as a non-editable comparison while the student builds the second."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 4c. The retained sample describes a distinct valid face-connection arrangement for comparison with the student's own net.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-classify-polyhedra",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "5",
    "practicePartOrder": 10,
    "routePart": "problem-5",
    "skill": "Classify figures as polyhedra and justify each classification",
    "activityForm": "two independently checked visual classifications",
    "prompt": "For each exact source figure, decide whether it is a polyhedron and choose the reason that proves your answer.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "figureA",
        "label": "Figure A",
        "prompt": "Is Figure A a polyhedron?",
        "choices": [
          {
            "id": "notCurved",
            "label": "No. It has a curved surface, so not all of its faces are polygons."
          },
          {
            "id": "yesClosed",
            "label": "Yes. It is closed, so it is automatically a polyhedron."
          },
          {
            "id": "notRoundBase",
            "label": "No. A polyhedron cannot have two bases."
          }
        ],
        "correctChoiceId": "notCurved",
        "correctFeedback": "Correct. Figure A is a cylinder, and its curved side means it is not a polyhedron.",
        "incorrectFeedback": "A polyhedron must be made entirely of flat polygon faces."
      },
      {
        "id": "figureB",
        "label": "Figure B",
        "prompt": "Is Figure B a polyhedron?",
        "choices": [
          {
            "id": "yesFlat",
            "label": "Yes. It is closed and every face is a flat polygon."
          },
          {
            "id": "notManySides",
            "label": "No. Its bases have too many sides."
          },
          {
            "id": "notHidden",
            "label": "No. Some of its edges are hidden in the drawing."
          }
        ],
        "correctChoiceId": "yesFlat",
        "correctFeedback": "Correct. Figure B is a prism made only of flat polygon faces, so it is a polyhedron.",
        "incorrectFeedback": "Hidden dashed edges still belong to the solid; check whether every surface is a flat polygon."
      }
    ],
    "answerKey": [
      "figureA:notCurved",
      "figureB:yesFlat"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-18-polyhedron-pair-source.png",
      "alt": "Two exact source figures. Figure A has two circular ends joined by one curved surface. Figure B has two congruent many-sided polygon ends joined by flat quadrilateral faces.",
      "naturalWidth": 275,
      "naturalHeight": 205,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Classify and submit both source figures.",
    "correctFeedback": "Correct. Figure A is not a polyhedron because it has a curved surface. Figure B is a polyhedron because it is closed and made only of flat polygon faces.",
    "incorrectFeedback": "Review each figure's feedback and apply both requirements: closed and made only of flat polygon faces.",
    "hints": [
      "A dashed edge can be hidden and still be straight; a curved surface is what rules out Figure A."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one independently checked classification and reason for each exact source figure",
      "sourceObjects": [
        "exact source cylinder A",
        "exact source polygonal prism B",
        "source hidden-edge conventions"
      ],
      "notes": "Each figure receives its own feedback without replacing the source drawings with hand-built approximations."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 5.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson18-elena-surface-area",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-18-practice",
    "practiceLessonTitle": "Surface Area of a Cube",
    "practicePartLabel": "6",
    "practicePartOrder": 11,
    "routePart": "problem-6",
    "skill": "Evaluate a surface-area calculation",
    "activityForm": "two independently checked claim-analysis questions",
    "prompt": "Elena concluded that the surface area of a 1-foot-by-1-foot-by-2-foot prism is 296 square feet. Do you agree? Choose the statement that best explains your decision.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "claim",
        "label": "Elena's conclusion",
        "prompt": "Do you agree with Elena?",
        "choices": [
          {
            "id": "agree",
            "label": "Yes, 296 square feet is correct."
          },
          {
            "id": "disagree",
            "label": "No, 296 square feet is not correct."
          }
        ],
        "correctChoiceId": "disagree",
        "correctFeedback": "Correct. Elena's total combines measurements in different square units.",
        "incorrectFeedback": "Inspect the units beside 288 and 8 before accepting their sum."
      },
      {
        "id": "reason",
        "label": "Reasoning",
        "prompt": "Which statement best evaluates Elena's work?",
        "choices": [
          {
            "id": "mixedUnits",
            "label": "She added 288 square inches to 8 square feet. In feet, the total is 2 + 8 = 10 square feet."
          },
          {
            "id": "forgotVolume",
            "label": "She forgot to multiply 1 x 1 x 2, so the surface area is 2 square feet."
          },
          {
            "id": "needsSix",
            "label": "She should divide 296 by the prism's six faces."
          }
        ],
        "correctChoiceId": "mixedUnits",
        "correctFeedback": "Correct. The two 1-by-1 faces total 2 square feet, and the four 1-by-2 faces total 8 square feet, for 10 square feet.",
        "incorrectFeedback": "Surface area adds face areas in one common unit; it is not the prism's volume or an average of its faces."
      }
    ],
    "answerKey": [
      "claim:disagree",
      "reason:mixedUnits"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-18-elena-surface-area-work-source.png",
      "alt": "Elena's complete source work, showing 288 from square inches and 8 from square feet before adding them.",
      "naturalWidth": 425,
      "naturalHeight": 240,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Submit both your decision and the explanation of Elena's error.",
    "correctFeedback": "Correct. Elena mixed square inches and square feet. In feet, the surface area is 2(1 x 1) + 4(1 x 2) = 10 square feet.",
    "incorrectFeedback": "Review each part's feedback and make every face area use the same square unit before adding.",
    "hints": [
      "You cannot add 288 square inches directly to 8 square feet."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one claim decision and one independently checked error analysis",
      "sourceObjects": [
        "Elena's complete source diagram",
        "top-and-bottom calculation",
        "four-side-faces calculation",
        "all written units"
      ],
      "notes": "The widened crop preserves the full handwritten calculation, including the unit mismatch that students must diagnose."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 18 Practice Problem 6.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-cube-volume",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Find the volume of a cube",
    "activityForm": "numeric exact-source cube-volume calculation",
    "prompt": "What is the volume of the cube in cubic centimeters?",
    "responseType": "number",
    "answerKey": [
      "8"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-17-cube-volume-source.png",
      "alt": "The exact source cube with all three edge directions labeled 2 centimeters.",
      "naturalWidth": 220,
      "naturalHeight": 150,
      "displayVariant": "compact"
    },
    "missingFeedback": "Enter the cube's volume in cubic centimeters.",
    "correctFeedback": "Correct. The cube is 2 centimeters by 2 centimeters by 2 centimeters, so its volume is 2 x 2 x 2 = 8 cubic centimeters.",
    "incorrectFeedback": "Not quite. Volume uses all three edge dimensions: length x width x height.",
    "hints": [
      "Multiply the three 2-centimeter edge lengths."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact volume and one available explanation",
      "sourceObjects": [
        "exact source 2-centimeter cube and all three dimension labels"
      ],
      "notes": "The card uses a visual-only crop of the exact source cube and keeps optional reasoning ungraded."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-square-area",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4a",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "4a",
    "practicePartOrder": 4,
    "routePart": "problem-4a",
    "skill": "Find square area from side length",
    "activityForm": "numeric text-only square-area calculation",
    "prompt": "A square has side length 4 centimeters. What is its area in square centimeters?",
    "responseType": "number",
    "answerKey": [
      "16"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "squareCubeNumbers"
    },
    "missingFeedback": "Enter the square's area in square centimeters.",
    "correctFeedback": "Correct. A square with side length 4 centimeters has area 4 x 4 = 16 square centimeters.",
    "incorrectFeedback": "Not quite. Multiply the square's side length by itself.",
    "hints": [
      "Area of a square is side x side."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "source side length 4 centimeters"
      ],
      "notes": "The source item is text-only; the app renders the complete text and a neutral square/cube scaffold."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 4a.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-square-side-length",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4b",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "4b",
    "practicePartOrder": 5,
    "routePart": "problem-4b",
    "skill": "Find square side length from area",
    "activityForm": "numeric text-only inverse square calculation",
    "prompt": "The area of a square is 49 square meters. What is its side length in meters?",
    "responseType": "number",
    "answerKey": [
      "7"
    ],
    "reasoningPrompt": "Optional: show or explain your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "squareCubeNumbers"
    },
    "missingFeedback": "Enter the square's side length in meters.",
    "correctFeedback": "Correct. Since 7 x 7 = 49, the square's side length is 7 meters.",
    "incorrectFeedback": "Not quite. Find the positive whole number that multiplied by itself equals 49.",
    "hints": [
      "The side length is the positive square root of 49."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact side length and one available explanation",
      "sourceObjects": [
        "source area 49 square meters"
      ],
      "notes": "The source item is text-only; the app preserves its inverse-area question without adding answer-bearing labels."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 4b.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-cube-volume-three",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4c",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "4c",
    "practicePartOrder": 6,
    "routePart": "problem-4c",
    "skill": "Find cube volume from edge length",
    "activityForm": "numeric text-only cube-volume calculation",
    "prompt": "A cube has edge length 3 inches. What is its volume in cubic inches?",
    "responseType": "number",
    "answerKey": [
      "27"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "squareCubeNumbers"
    },
    "missingFeedback": "Enter the cube's volume in cubic inches.",
    "correctFeedback": "Correct. The cube's volume is 3 x 3 x 3 = 27 cubic inches.",
    "incorrectFeedback": "Not quite. Multiply the edge length by itself three times.",
    "hints": [
      "Volume of a cube is edge x edge x edge."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact volume and one available explanation",
      "sourceObjects": [
        "source edge length 3 inches"
      ],
      "notes": "The source item is text-only; the app preserves the complete data and response requirement."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 4c.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-identify-prism-net",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6a",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "6a",
    "practicePartOrder": 8,
    "routePart": "problem-6a",
    "skill": "Identify a polyhedron from its net",
    "activityForm": "short-answer exact-source net identification",
    "prompt": "What polyhedron can be assembled from this net?",
    "responseType": "shortAnswer",
    "answerKey": [
      "triangular prism",
      "a triangular prism"
    ],
    "inputLabel": "Polyhedron name",
    "inputPlaceholder": "Type the polyhedron name",
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-17-triangular-prism-net-source.png",
      "alt": "The exact source net with two triangular faces and three rectangular faces.",
      "naturalWidth": 280,
      "naturalHeight": 170,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Name the polyhedron assembled from the net.",
    "correctFeedback": "Correct. The two congruent triangles become parallel bases, and the three rectangles connect their matching edges, forming a triangular prism.",
    "incorrectFeedback": "Not quite. Identify the pair of congruent faces that become bases and the faces that connect them.",
    "hints": [
      "The two triangles are the solid's bases."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one polyhedron identification from the exact source net",
      "sourceObjects": [
        "exact source net with two triangles and three rectangles"
      ],
      "notes": "The visual-only crop preserves the complete net while the app renders the prompt and response control."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 6a.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-prism-net-measurements",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6b",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "6b",
    "practicePartOrder": 9,
    "routePart": "problem-6b",
    "skill": "Identify measurements needed for surface area from a net",
    "activityForm": "multi-select exact-source measurement inventory",
    "prompt": "What information would you need to find the surface area of the solid assembled from this net? Select every needed measurement.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "prismLength",
        "label": "The prism length, which is the common dimension of all three rectangles."
      },
      {
        "id": "triangleSides",
        "label": "All three side lengths of a triangular base."
      },
      {
        "id": "triangleHeight",
        "label": "A perpendicular height for one chosen base of the triangle."
      },
      {
        "id": "volume",
        "label": "The prism's volume."
      },
      {
        "id": "angles",
        "label": "Every angle measure in the triangles."
      },
      {
        "id": "rectangleDiagonals",
        "label": "A diagonal of each rectangle."
      }
    ],
    "answerKey": [
      "prismLength",
      "triangleSides",
      "triangleHeight"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-17-triangular-prism-net-source.png",
      "alt": "The exact source net with two triangular faces and three rectangular faces whose missing measurements must be identified.",
      "naturalWidth": 280,
      "naturalHeight": 170,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Select the measurements needed to calculate every face area.",
    "correctFeedback": "Correct. The prism length and the three triangle side lengths determine the three rectangles. One triangular base and its corresponding perpendicular height determine both congruent triangular face areas.",
    "incorrectFeedback": "Not quite. Account for all three rectangular faces and both triangular faces. Choose measurements that determine those face areas directly.",
    "hints": [
      "Each rectangle uses the prism length and one side of the triangular base.",
      "Triangle area needs a base and its corresponding perpendicular height."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 6,
      "appActionTargets": 6,
      "unitOfAction": "each needed-or-not-needed measurement decision",
      "sourceObjects": [
        "exact source triangular-prism net",
        "three rectangles",
        "two congruent triangles"
      ],
      "notes": "The app turns the source's written measurement inventory into six explicit decisions while retaining the exact unlabeled source net."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 6b with reliable measurement-inventory validation instead of brittle prose keywords.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson17-triangular-prism-surface-area",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 17,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-17-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 7",
    "practiceLessonGroup": "lesson-17-practice",
    "practiceLessonTitle": "Squares and Cubes",
    "practicePartLabel": "7",
    "practicePartOrder": 10,
    "routePart": "problem-7",
    "skill": "Find triangular-prism surface area",
    "activityForm": "numeric exact-source surface-area calculation",
    "prompt": "Find the surface area of the triangular prism in square meters.",
    "responseType": "number",
    "answerKey": [
      "4.8",
      "24/5"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-17-triangular-prism-dimensions-source.png",
      "alt": "The exact source triangular prism with prism length 1.2 meters and a triangular base with sides 1, 1, and 1.2 meters and height 0.8 meter.",
      "naturalWidth": 430,
      "naturalHeight": 220,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Enter the triangular prism's surface area in square meters.",
    "correctFeedback": "Correct. The two triangular bases total 2(1/2 x 1.2 x 0.8) = 0.96 square meter. The three rectangles total 1.2(1 + 1 + 1.2) = 3.84 square meters, for 4.8 square meters altogether.",
    "incorrectFeedback": "Not quite. Add the two triangular base areas and all three rectangular side-face areas.",
    "hints": [
      "The triangular base has base 1.2 meters and perpendicular height 0.8 meter.",
      "The three rectangle widths are the triangle's side lengths: 1, 1, and 1.2 meters."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact surface area and one available explanation",
      "sourceObjects": [
        "exact source triangular prism",
        "all source side, length, and perpendicular-height labels"
      ],
      "notes": "The visual-only crop preserves the exact source viewpoint and every dimension needed for the calculation."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 17 Practice Problem 7.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-stack-volume",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "2a",
    "practicePartOrder": 2,
    "routePart": "problem-2a",
    "skill": "Find the volume of a stack of unit cubes",
    "activityForm": "numeric exact-source cube-stack calculation",
    "prompt": "Find the volume of the source figure in cubic units.",
    "responseType": "number",
    "answerKey": [
      "4"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-snap-cube-stack-source.png",
      "alt": "The exact source figure: four unit snap cubes stacked vertically.",
      "naturalWidth": 170,
      "naturalHeight": 225,
      "displayVariant": "compactPortrait"
    },
    "missingFeedback": "Enter the volume of the four-cube stack.",
    "correctFeedback": "Correct. The figure contains 4 unit cubes, so its volume is 4 cubic units.",
    "incorrectFeedback": "Not quite. Count the unit cubes in the stack; each contributes 1 cubic unit.",
    "hints": [
      "Volume counts unit cubes, including cubes whose faces touch."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked volume",
      "sourceObjects": [
        "exact source four-cube stack"
      ],
      "notes": "Uses a visual-only crop of the source stack without source prompt text."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 2a.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-stack-surface-area",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "2b",
    "practicePartOrder": 3,
    "routePart": "problem-2b",
    "skill": "Find the surface area of a stack of unit cubes",
    "activityForm": "numeric exact-source exposed-face calculation",
    "prompt": "Find the surface area of the source figure in square units.",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "reasoningPrompt": "Optional: show or explain how you counted exposed faces.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-snap-cube-stack-source.png",
      "alt": "The exact source figure: four unit snap cubes stacked vertically.",
      "naturalWidth": 170,
      "naturalHeight": 225,
      "displayVariant": "compactPortrait"
    },
    "missingFeedback": "Enter the surface area of the four-cube stack.",
    "correctFeedback": "Correct. The four side strips contribute 16 square units, and the top and bottom contribute 2 more, for 18 square units.",
    "incorrectFeedback": "Not quite. Count four 1-by-4 side rectangles plus the 1-by-1 top and bottom; shared cube faces are internal.",
    "hints": [
      "The outside is four strips of 4 unit squares plus a top and a bottom."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one surface area and one available explanation",
      "sourceObjects": [
        "exact source four-cube stack"
      ],
      "notes": "The same exact source visual remains available while this answer is checked independently from volume."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 2b.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-double-stack-claim",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2c",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "2c",
    "practicePartOrder": 4,
    "routePart": "problem-2c",
    "skill": "Analyze how doubling a cube stack changes volume and surface area",
    "activityForm": "two independently checked claim-and-reason choices",
    "prompt": "True or false: If the number of cubes in the stack doubles, both the volume and surface area double. Explain or show how you know.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "claim",
        "label": "Claim",
        "prompt": "Is the statement true or false?",
        "choices": [
          {
            "id": "true",
            "label": "True"
          },
          {
            "id": "false",
            "label": "False"
          }
        ],
        "correctChoiceId": "false",
        "correctFeedback": "Correct. Doubling the height doubles volume, but it does not double the two end faces.",
        "incorrectFeedback": "Compare the top and bottom before and after the stack grows; those two faces stay 1 square unit each."
      },
      {
        "id": "reason",
        "label": "Explanation",
        "prompt": "What happens when the stack grows from 4 cubes to 8 cubes?",
        "choices": [
          {
            "id": "eightThirtyFour",
            "label": "Volume becomes 8 cubic units and surface area becomes 34 square units."
          },
          {
            "id": "eightThirtySix",
            "label": "Volume becomes 8 cubic units and surface area becomes 36 square units."
          },
          {
            "id": "sixteenThirtySix",
            "label": "Volume becomes 16 cubic units and surface area becomes 36 square units."
          }
        ],
        "correctChoiceId": "eightThirtyFour",
        "correctFeedback": "Correct. The four side strips become 8 units long, while the top and bottom stay 1 square unit each: 4 x 8 + 2 = 34.",
        "incorrectFeedback": "The 8-cube stack has four 1-by-8 side strips plus one top and one bottom."
      }
    ],
    "answerKey": [
      "claim:false",
      "reason:eightThirtyFour"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-snap-cube-stack-source.png",
      "alt": "The exact source four-cube stack used as the starting figure.",
      "naturalWidth": 170,
      "naturalHeight": 225,
      "displayVariant": "compactPortrait"
    },
    "readyFeedback": "Submit the decision and explanation separately.",
    "missingFeedback": "Answer both parts of the doubling claim.",
    "correctFeedback": "Correct. Volume doubles from 4 to 8, but surface area changes from 18 to 34 rather than to 36.",
    "incorrectFeedback": "Review each part's feedback and distinguish cube count from exposed-face count.",
    "hints": [
      "For a 1-by-1-by-n prism, surface area is 4n + 2."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one true-or-false decision and one independently checked mathematical explanation",
      "sourceObjects": [
        "exact source four-cube starting stack"
      ],
      "notes": "Structured reasoning accepts the source explanation without brittle free-text keyword checks."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 2c.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-same-volume-same-area",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3a",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "3a",
    "practicePartOrder": 5,
    "routePart": "problem-3a",
    "skill": "Find figures with the same volume and surface area",
    "activityForm": "single-choice exact-source cube-figure comparison",
    "prompt": "Which two source figures suggest that figures with the same volume can also have the same surface area?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "bc",
        "label": "Figures B and C"
      },
      {
        "id": "ab",
        "label": "Figures A and B"
      },
      {
        "id": "ac",
        "label": "Figures A and C"
      },
      {
        "id": "de",
        "label": "Figures D and E"
      }
    ],
    "answerKey": [
      "bc"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-same-volume-figures-source.png",
      "alt": "The exact source unit-cube figures A through E.",
      "naturalWidth": 580,
      "naturalHeight": 455,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose one pair of source figures.",
    "correctFeedback": "Correct. Figures B and C each have volume 6 cubic units and surface area 24 square units.",
    "incorrectFeedback": "Not quite. Count cubes for volume, then count exposed faces. Look for a pair matching on both measurements.",
    "hints": [
      "Figures B and C each contain 6 cubes."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked figure pair",
      "sourceObjects": [
        "exact source figures A, B, C, D, and E"
      ],
      "notes": "Retains all five source arrangements so the comparison can be reasoned from the actual cube figures."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 3a.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-same-volume-different-area",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3b",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "3b",
    "practicePartOrder": 6,
    "routePart": "problem-3b",
    "skill": "Find figures with the same volume and different surface areas",
    "activityForm": "single-choice exact-source counterexample",
    "prompt": "Which two source figures show that equal volumes do not guarantee equal surface areas?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "ab",
        "label": "Figures A and B"
      },
      {
        "id": "ac",
        "label": "Figures A and C"
      },
      {
        "id": "bc",
        "label": "Figures B and C"
      },
      {
        "id": "de",
        "label": "Figures D and E"
      }
    ],
    "answerKey": [
      "ab",
      "ac"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-same-volume-figures-source.png",
      "alt": "The exact source unit-cube figures A through E.",
      "naturalWidth": 580,
      "naturalHeight": 455,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose one pair that is a counterexample to Lin's statement.",
    "correctFeedback": "Correct. Figure A has volume 6 and surface area 26; Figures B and C each have volume 6 and surface area 24. Pairing A with B or C disproves the claim.",
    "incorrectFeedback": "Not quite. A counterexample needs the same cube count but different exposed-face counts.",
    "hints": [
      "Compare Figure A with another figure made from 6 cubes."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked counterexample pair",
      "sourceObjects": [
        "exact source figures A, B, C, D, and E"
      ],
      "notes": "Accepts both source-valid counterexamples rather than forcing one arbitrary pair."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 3b.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-pentagon-area-32",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "4",
    "practicePartOrder": 7,
    "routePart": "problem-4",
    "skill": "Draw a pentagon with area 32",
    "activityForm": "validated five-vertex grid construction",
    "prompt": "Draw a pentagon that has an area of 32 square units. After placing five corners, revise the pentagon as needed and check it when you think its area is 32.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 12,
      "rows": 9,
      "drawingCount": 1,
      "vertexCount": 5,
      "validationMode": "targetPolygonArea",
      "targetArea": 32,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "shapeLabel": "pentagon",
      "shapeLabelDisplay": "Pentagon"
    },
    "missingFeedback": "Draw and check one five-sided polygon with area 32 square units.",
    "correctFeedback": "Correct. The construction is a five-sided polygon with area 32 square units.",
    "incorrectFeedback": "Revise the construction so it has exactly five non-crossing sides and area 32 square units.",
    "hints": [
      "Start with an 8-by-4 rectangle of area 32, then move one point on an edge outward while moving another inward by an equal triangular area."
    ],
    "sampleAnswer": "One example has vertices (1,1), (8,1), (10,3), (8,5), and (1,5). It is a 7-by-4 rectangle plus a triangle of area 4, for 32 square units.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one validated five-sided area-32 drawing",
      "sourceObjects": [
        "source-equivalent blank square grid",
        "student-created pentagon"
      ],
      "notes": "The app validates five distinct ordered corners, rejects crossed sides, and computes the exact grid area internally instead of requiring brittle prose labels. After the fifth corner closes the pentagon, each numbered vertex remains grid-snapped, draggable, and keyboard-movable. The computed area stays hidden because finding it is the student's work; submission reports only whether the area-32 target was met."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 4 using a generalized source-faithful polygon constructor with opt-in completed-vertex editing. The retained sample provides an alternate valid pentagon and a decomposition not shown by the correctness feedback.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-draw-prism-net",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "5a",
    "practicePartOrder": 8,
    "routePart": "problem-5a",
    "skill": "Draw a net for a 10-by-5-by-2 rectangular prism",
    "activityForm": "validated rectangular-prism net construction",
    "prompt": "Draw a net for the source rectangular prism with dimensions 10 cm by 5 cm by 2 cm.",
    "responseType": "rectPrismNet",
    "answerKey": [],
    "visualModelData": {
      "type": "rectPrismNetBuilder",
      "length": 10,
      "width": 5,
      "height": 2,
      "boardWidth": 32,
      "boardHeight": 24,
      "boardUnit": 18,
      "subject": "10-by-5-by-2 rectangular prism",
      "unit": "cm",
      "optional": false,
      "freeform": false,
      "sourceImagePath": "artifacts/unit 1/_practice-crops/lesson-16-prism-dimensions-source.png",
      "sourceImageAlt": "The exact source rectangular prism labeled 10 centimeters, 5 centimeters, and 2 centimeters."
    },
    "missingFeedback": "Place the first face and build a six-face net.",
    "correctFeedback": "Correct. The net has two 10-by-5 faces, two 10-by-2 faces, and two 5-by-2 faces, and it folds onto six different prism faces.",
    "incorrectFeedback": "Revise the net's face inventory, matching shared edges, or fold topology.",
    "hints": [
      "A rectangular prism has three pairs of congruent opposite faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one validated six-face net construction",
      "sourceObjects": [
        "exact source 10-by-5-by-2 prism",
        "blank graph-paper net workspace",
        "three required face-size pairs"
      ],
      "notes": "The source solid stays visible while the app validates inventory, edge compatibility, connectivity, overlap, and folding topology."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson16-prism-surface-area",
    "section": "F",
    "sectionName": "Surface Area and Volume",
    "lesson": 16,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-16-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-16-practice",
    "practiceLessonTitle": "Distinguishing Between Surface Area and Volume",
    "practicePartLabel": "5b",
    "practicePartOrder": 9,
    "routePart": "problem-5b",
    "skill": "Find the surface area of a 10-by-5-by-2 prism",
    "activityForm": "numeric exact-source surface-area calculation",
    "prompt": "Find the surface area of the source rectangular prism in square centimeters.",
    "responseType": "number",
    "answerKey": [
      "160"
    ],
    "reasoningPrompt": "Optional: show or explain how you combined the six face areas.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-16-prism-dimensions-source.png",
      "alt": "The exact source rectangular prism labeled 10 centimeters, 5 centimeters, and 2 centimeters.",
      "naturalWidth": 500,
      "naturalHeight": 170,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Enter the prism's surface area in square centimeters.",
    "correctFeedback": "Correct. Two 10-by-5 faces, two 10-by-2 faces, and two 5-by-2 faces total 2(50 + 20 + 10) = 160 square centimeters.",
    "incorrectFeedback": "Not quite. Add both faces in each congruent pair: 10 by 5, 10 by 2, and 5 by 2.",
    "hints": [
      "Use 2(lw + lh + wh)."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact surface area and one available explanation",
      "sourceObjects": [
        "exact source 10-by-5-by-2 rectangular prism"
      ],
      "notes": "The exact dimensioned source solid remains available while the numeric answer is checked independently from the net drawing."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 16 Practice Problem 5b.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-label-prism-net",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4, Net A",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "4A",
    "practicePartOrder": 7,
    "routePart": "problem-4a",
    "skill": "Label every edge of a rectangular-prism net",
    "activityForm": "interactive exact-source edge labeling",
    "prompt": "Use Solid A to label every edge in Net A with the correct length.",
    "responseType": "netEdgeLabeling",
    "answerKey": [
      "all 19 edges"
    ],
    "visualModelData": {
      "type": "netEdgeLabeling",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-prism-a-net-source.png",
      "alt": "The exact source unlabeled net A with nineteen selectable edge segments.",
      "naturalWidth": 315,
      "naturalHeight": 320,
      "referenceImagePath": "artifacts/unit 1/_practice-crops/lesson-15-prism-a-solid-source.png",
      "referenceAlt": "Source rectangular prism A with dimensions 5, 4, and 10.",
      "referenceNaturalWidth": 255,
      "referenceNaturalHeight": 335,
      "referenceLabel": "Solid A: 5 by 4 by 10",
      "netLabel": "Net A",
      "allowedLabels": [
        "4",
        "5",
        "10"
      ],
      "edges": [
        {
          "id": "a1",
          "label": "Top face, top edge",
          "x1": 74,
          "y1": 12,
          "x2": 239,
          "y2": 12,
          "answer": "10",
          "labelY": 22
        },
        {
          "id": "a2",
          "label": "Top face, bottom edge",
          "x1": 74,
          "y1": 94,
          "x2": 239,
          "y2": 94,
          "answer": "10",
          "labelY": 88
        },
        {
          "id": "a3",
          "label": "Second face, bottom edge",
          "x1": 74,
          "y1": 160,
          "x2": 239,
          "y2": 160,
          "answer": "10",
          "labelY": 154
        },
        {
          "id": "a4",
          "label": "Center face, bottom edge",
          "x1": 74,
          "y1": 242,
          "x2": 239,
          "y2": 242,
          "answer": "10",
          "labelY": 236
        },
        {
          "id": "a5",
          "label": "Bottom face, bottom edge",
          "x1": 74,
          "y1": 308,
          "x2": 239,
          "y2": 308,
          "answer": "10",
          "labelY": 302
        },
        {
          "id": "a6",
          "label": "Left flap, top edge",
          "x1": 8,
          "y1": 160,
          "x2": 74,
          "y2": 160,
          "answer": "4",
          "labelY": 154
        },
        {
          "id": "a7",
          "label": "Left flap, bottom edge",
          "x1": 8,
          "y1": 242,
          "x2": 74,
          "y2": 242,
          "answer": "4",
          "labelY": 236
        },
        {
          "id": "a8",
          "label": "Right flap, top edge",
          "x1": 239,
          "y1": 160,
          "x2": 305,
          "y2": 160,
          "answer": "4",
          "labelY": 154
        },
        {
          "id": "a9",
          "label": "Right flap, bottom edge",
          "x1": 239,
          "y1": 242,
          "x2": 305,
          "y2": 242,
          "answer": "4",
          "labelY": 236
        },
        {
          "id": "a10",
          "label": "Column left edge, segment 1",
          "x1": 74,
          "y1": 12,
          "x2": 74,
          "y2": 94,
          "answer": "5",
          "labelX": 84
        },
        {
          "id": "a11",
          "label": "Column left edge, segment 2",
          "x1": 74,
          "y1": 94,
          "x2": 74,
          "y2": 160,
          "answer": "4",
          "labelX": 84
        },
        {
          "id": "a12",
          "label": "Column left edge, segment 3",
          "x1": 74,
          "y1": 160,
          "x2": 74,
          "y2": 242,
          "answer": "5",
          "labelX": 84
        },
        {
          "id": "a13",
          "label": "Column left edge, segment 4",
          "x1": 74,
          "y1": 242,
          "x2": 74,
          "y2": 308,
          "answer": "4",
          "labelX": 84
        },
        {
          "id": "a14",
          "label": "Column right edge, segment 1",
          "x1": 239,
          "y1": 12,
          "x2": 239,
          "y2": 94,
          "answer": "5",
          "labelX": 229
        },
        {
          "id": "a15",
          "label": "Column right edge, segment 2",
          "x1": 239,
          "y1": 94,
          "x2": 239,
          "y2": 160,
          "answer": "4",
          "labelX": 229
        },
        {
          "id": "a16",
          "label": "Column right edge, segment 3",
          "x1": 239,
          "y1": 160,
          "x2": 239,
          "y2": 242,
          "answer": "5",
          "labelX": 229
        },
        {
          "id": "a17",
          "label": "Column right edge, segment 4",
          "x1": 239,
          "y1": 242,
          "x2": 239,
          "y2": 308,
          "answer": "4",
          "labelX": 229
        },
        {
          "id": "a18",
          "label": "Left flap, outer edge",
          "x1": 8,
          "y1": 160,
          "x2": 8,
          "y2": 242,
          "answer": "5",
          "labelX": 18
        },
        {
          "id": "a19",
          "label": "Right flap, outer edge",
          "x1": 305,
          "y1": 160,
          "x2": 305,
          "y2": 242,
          "answer": "5",
          "labelX": 295
        }
      ]
    },
    "missingFeedback": "Label at least one source edge, then continue until all nineteen edges have a length.",
    "correctFeedback": "Correct. Every edge in Net A now matches one of the rectangular prism's 4-, 5-, or 10-unit edge lengths.",
    "incorrectFeedback": "Some net edges do not yet match Solid A.",
    "hints": [
      "Opposite edges of each rectangular face have the same length.",
      "Follow each 10-by-5, 10-by-4, or 5-by-4 face around its perimeter."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 19,
      "appActionTargets": 19,
      "unitOfAction": "one independently assigned length for every visible source-net edge segment",
      "sourceObjects": [
        "exact source Solid A",
        "exact source Net A",
        "all nineteen visible net edges"
      ],
      "notes": "The app keeps the exact source solid and net together and does not collapse the every-edge task into three dimension-family questions."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 4A with reusable source-aligned edge labeling.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-label-pyramid-net",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4, Net B",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "4B",
    "practicePartOrder": 8,
    "routePart": "problem-4b",
    "skill": "Label every edge of a rectangular-pyramid net",
    "activityForm": "interactive exact-source edge labeling",
    "prompt": "Use Solid B to label every edge in Net B with the correct length.",
    "responseType": "netEdgeLabeling",
    "answerKey": [
      "all 12 edges"
    ],
    "visualModelData": {
      "type": "netEdgeLabeling",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-pyramid-b-net-source.png",
      "alt": "The exact source unlabeled net B with twelve selectable edge segments.",
      "naturalWidth": 480,
      "naturalHeight": 420,
      "referenceImagePath": "artifacts/unit 1/_practice-crops/lesson-15-pyramid-b-solid-source.png",
      "referenceAlt": "Source rectangular pyramid B with a 10-by-4 base and lateral edges of length 13.",
      "referenceNaturalWidth": 360,
      "referenceNaturalHeight": 340,
      "referenceLabel": "Solid B: 10 by 4 base; lateral edges 13",
      "netLabel": "Net B",
      "allowedLabels": [
        "4",
        "10",
        "13"
      ],
      "maskRects": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 28
        }
      ],
      "edges": [
        {
          "id": "b1",
          "label": "Base short edge 1",
          "x1": 239,
          "y1": 123,
          "x2": 288,
          "y2": 172,
          "answer": "4",
          "labelX": 253,
          "labelY": 158
        },
        {
          "id": "b2",
          "label": "Base long edge 1",
          "x1": 288,
          "y1": 172,
          "x2": 170,
          "y2": 286,
          "answer": "10",
          "labelX": 222,
          "labelY": 218
        },
        {
          "id": "b3",
          "label": "Base short edge 2",
          "x1": 170,
          "y1": 286,
          "x2": 122,
          "y2": 238,
          "answer": "4",
          "labelX": 157,
          "labelY": 252
        },
        {
          "id": "b4",
          "label": "Base long edge 2",
          "x1": 122,
          "y1": 238,
          "x2": 239,
          "y2": 123,
          "answer": "10",
          "labelX": 188,
          "labelY": 172
        },
        {
          "id": "b5",
          "label": "Upper-left triangle edge 1",
          "x1": 41,
          "y1": 42,
          "x2": 239,
          "y2": 123,
          "answer": "13",
          "labelX": 136,
          "labelY": 73
        },
        {
          "id": "b6",
          "label": "Upper-left triangle edge 2",
          "x1": 41,
          "y1": 42,
          "x2": 122,
          "y2": 238,
          "answer": "13",
          "labelX": 70,
          "labelY": 142
        },
        {
          "id": "b7",
          "label": "Upper-right triangle edge 1",
          "x1": 402,
          "y1": 6,
          "x2": 239,
          "y2": 123,
          "answer": "13",
          "labelX": 324,
          "labelY": 55
        },
        {
          "id": "b8",
          "label": "Upper-right triangle edge 2",
          "x1": 402,
          "y1": 6,
          "x2": 288,
          "y2": 172,
          "answer": "13",
          "labelX": 358,
          "labelY": 96
        },
        {
          "id": "b9",
          "label": "Lower-right triangle edge 1",
          "x1": 369,
          "y1": 367,
          "x2": 288,
          "y2": 172,
          "answer": "13",
          "labelX": 344,
          "labelY": 266
        },
        {
          "id": "b10",
          "label": "Lower-right triangle edge 2",
          "x1": 369,
          "y1": 367,
          "x2": 170,
          "y2": 286,
          "answer": "13",
          "labelX": 273,
          "labelY": 338
        },
        {
          "id": "b11",
          "label": "Lower-left triangle edge 1",
          "x1": 7,
          "y1": 404,
          "x2": 170,
          "y2": 286,
          "answer": "13",
          "labelX": 89,
          "labelY": 355
        },
        {
          "id": "b12",
          "label": "Lower-left triangle edge 2",
          "x1": 7,
          "y1": 404,
          "x2": 122,
          "y2": 238,
          "answer": "13",
          "labelX": 53,
          "labelY": 320
        }
      ]
    },
    "missingFeedback": "Label at least one source edge, then continue until all twelve edges have a length.",
    "correctFeedback": "Correct. The rectangular base edges are 10 and 4, and all eight lateral triangle edges are 13.",
    "incorrectFeedback": "Some net edges do not yet match Solid B.",
    "hints": [
      "The center face is the 10-by-4 base.",
      "Every outside edge of a triangular face runs from a base vertex to the apex and has length 13."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 12,
      "appActionTargets": 12,
      "unitOfAction": "one independently assigned length for every visible source-net edge segment",
      "sourceObjects": [
        "exact source Solid B",
        "exact source Net B",
        "all twelve visible net edges"
      ],
      "notes": "The source object, all dimensions, and every unlabeled net edge remain available in the card workspace."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 4B with reusable source-aligned edge labeling.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-identify-square-pyramid",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "5a",
    "practicePartOrder": 9,
    "routePart": "problem-5a",
    "skill": "Identify the solid formed by a net",
    "activityForm": "single-choice exact-source classification",
    "prompt": "What three-dimensional figure can be assembled from the source net?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "squarePyramid",
        "label": "Square pyramid"
      },
      {
        "id": "triangularPyramid",
        "label": "Triangular pyramid"
      },
      {
        "id": "squarePrism",
        "label": "Square prism"
      },
      {
        "id": "triangularPrism",
        "label": "Triangular prism"
      }
    ],
    "answerKey": [
      "squarePyramid"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-square-pyramid-net-source.png",
      "alt": "The exact source square grid containing one central quadrilateral and four attached triangles.",
      "naturalWidth": 520,
      "naturalHeight": 520,
      "displayVariant": "compactSquare"
    },
    "missingFeedback": "Choose the solid that the source net forms.",
    "correctFeedback": "Correct. The square becomes the base and the four triangles meet at one apex, forming a square pyramid.",
    "incorrectFeedback": "Not quite. Identify the one polygon base, then see how the four triangles fold to one apex.",
    "hints": [
      "A pyramid has one base and triangular side faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one solid classification from the exact source net",
      "sourceObjects": [
        "exact source net",
        "complete square grid"
      ],
      "notes": "The crop preserves the complete source net and its unit grid without source prompt text."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson15-square-pyramid-surface-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-15-practice",
    "practiceLessonTitle": "More Nets, More Surface Area",
    "practicePartLabel": "5b",
    "practicePartOrder": 10,
    "routePart": "problem-5b",
    "skill": "Find surface area from a gridded net",
    "activityForm": "numeric exact-source surface-area calculation with optional source-aligned annotation scratchpad",
    "prompt": "What is the surface area of the figure? One grid square is 1 square unit.",
    "responseType": "number",
    "answerKey": [
      "56"
    ],
    "reasoningPrompt": "Optional: show how the square and four triangle areas combine.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-15-square-pyramid-net-source.png",
      "alt": "The exact source net with one central square face and four triangular faces on a complete unit grid.",
      "naturalWidth": 520,
      "naturalHeight": 520,
      "displayVariant": "compactSquare",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to outline and group the square base and triangular faces on the exact source net. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10,
        "columns": 52,
        "rows": 52
      }
    },
    "missingFeedback": "Enter the surface area in square units.",
    "correctFeedback": "Correct. The 4-by-4 square has area 16, and each of the four triangles has area 1/2 x 4 x 5 = 10. The total is 16 + 40 = 56 square units.",
    "incorrectFeedback": "Not quite. Count the 4-by-4 square base and the 4-unit base with 5-unit height of each triangle on the grid.",
    "hints": [
      "The central square has area 16, and the four triangles are congruent."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact surface area and one available explanation",
      "sourceObjects": [
        "exact source square-pyramid net",
        "complete unit grid"
      ],
      "notes": "Every measurement is inferred from the preserved source grid; no dimensions are invented or omitted. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 15 Practice Problem 5b. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-prism-surface-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Find surface area from a unit-cube prism",
    "activityForm": "single-choice exact-source unit-cube count",
    "prompt": "What is the surface area of the rectangular prism?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "16",
        "label": "16 square units"
      },
      {
        "id": "32",
        "label": "32 square units"
      },
      {
        "id": "48",
        "label": "48 square units"
      },
      {
        "id": "64",
        "label": "64 square units"
      }
    ],
    "answerKey": [
      "64"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-12-prism-source.png",
      "alt": "The exact source rectangular prism made from a 4-by-4-by-2 array of unit cubes.",
      "naturalWidth": 285,
      "naturalHeight": 368,
      "displayVariant": "compactPortrait"
    },
    "missingFeedback": "Choose the surface area of the unit-cube prism.",
    "correctFeedback": "Correct. The prism is 4 units long, 4 units high, and 2 units wide. Its surface area is 2(4 x 4) + 2(4 x 2) + 2(4 x 2) = 64 square units.",
    "incorrectFeedback": "Not quite. Count the prism's dimensions from the unit cubes, then include both faces in each congruent pair.",
    "hints": [
      "The dimensions are 4 by 4 by 2.",
      "Add the areas of two 4-by-4 faces and four 4-by-2 faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "one choice from the four source answer options",
      "sourceObjects": [
        "exact source 4-by-4-by-2 unit-cube prism"
      ],
      "notes": "Uses a visual-only crop of the exact source solid; the prompt and four choices are app-rendered text."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-cube-figure-comparison",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "3",
    "practicePartOrder": 3,
    "routePart": "problem-3",
    "skill": "Compare surface areas of unit-cube figures",
    "activityForm": "single-choice exact-source solid comparison",
    "prompt": "Which figure has a greater surface area?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "A",
        "label": "Figure A"
      },
      {
        "id": "B",
        "label": "Figure B"
      },
      {
        "id": "equal",
        "label": "The figures have equal surface area"
      }
    ],
    "answerKey": [
      "A"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-12-cube-comparison-source.png",
      "alt": "The exact source unit-cube figures A and B.",
      "naturalWidth": 657,
      "naturalHeight": 350,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose the figure with the greater surface area.",
    "correctFeedback": "Correct. Figure A has 5 cubes with 4 shared faces, so its surface area is 5 x 6 - 4 x 2 = 22. Figure B is a 2-by-2 layer with surface area 16. Figure A is greater.",
    "incorrectFeedback": "Not quite. Count 6 faces per cube, then subtract 2 exposed faces for every pair of cubes joined face-to-face.",
    "hints": [
      "Figure A has 5 cubes and 4 face-to-face joins.",
      "Figure B is a 2-by-2-by-1 prism."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one comparison of the two exact source figures",
      "sourceObjects": [
        "exact source unit-cube Figure A",
        "exact source unit-cube Figure B"
      ],
      "notes": "Preserves both source solids in one visual-only crop and checks the requested comparison directly."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 3.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-prism-dimensions",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "4",
    "practicePartOrder": 4,
    "routePart": "problem-4",
    "skill": "Find surface area from prism dimensions",
    "activityForm": "numeric surface-area calculation with optional reasoning",
    "prompt": "A rectangular prism is 4 units high, 2 units wide, and 6 units long. What is its surface area in square units?",
    "responseType": "number",
    "answerKey": [
      "88"
    ],
    "reasoningPrompt": "Optional: explain or show your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "rectangularPrismDimensions",
      "length": 6,
      "width": 2,
      "height": 4
    },
    "missingFeedback": "Enter the prism's surface area in square units.",
    "correctFeedback": "Correct. The three face pairs contribute 2(6 x 4) + 2(6 x 2) + 2(4 x 2) = 48 + 24 + 16 = 88 square units.",
    "incorrectFeedback": "Not quite. A rectangular prism has two faces of each size: 6 by 4, 6 by 2, and 4 by 2.",
    "hints": [
      "List all three pairs of congruent faces before adding their areas."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one numeric surface area and one available explanation",
      "sourceObjects": [
        "text-only prism dimensions 4, 2, and 6 units"
      ],
      "notes": "The source has no supplied diagram. The app adds a dimension-labeled scaffold without revealing the surface area."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 4.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-draw-right-triangle",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5a",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "5a",
    "practicePartOrder": 5,
    "routePart": "problem-5a",
    "skill": "Draw a right triangle with area 6",
    "activityForm": "validated right-triangle grid construction",
    "prompt": "Draw a right triangle with an area of 6 square units on the grid.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 12,
      "rows": 8,
      "drawingCount": 1,
      "vertexCount": 3,
      "validationMode": "equalAreaTriangles",
      "targetArea": 6,
      "requiredTriangleType": "right",
      "requireDimensions": false,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "referenceDrawingItemIds": [
        "u1-practice-lesson12-draw-right-triangle",
        "u1-practice-lesson12-draw-acute-triangle",
        "u1-practice-lesson12-draw-obtuse-triangle"
      ],
      "referenceDrawingLabel": "Right triangle",
      "referenceDrawingMarker": "R"
    },
    "missingFeedback": "Draw and check one right triangle with area 6 square units.",
    "correctFeedback": "Correct. The drawing is a right triangle with area 6 square units.",
    "incorrectFeedback": "Revise the drawing so it is a right triangle and has area 6 square units.",
    "hints": [
      "A base of 4 and perpendicular height of 3 gives area 6."
    ],
    "sampleAnswer": "One example has vertices (1,1), (5,1), and (1,4).",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked right triangle drawing",
      "sourceObjects": [
        "source-equivalent blank square grid",
        "one student-created right triangle"
      ],
      "notes": "The grid constructor checks the polygon area and angle classification without adding a base-height response that the source did not request. Correct right, acute, and obtuse drawings remain together on the same grid as labeled non-editable references."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 5a. The retained sample provides one coordinate example for comparison with the student's valid construction.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-draw-acute-triangle",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "5b",
    "practicePartOrder": 6,
    "routePart": "problem-5b",
    "skill": "Draw an acute triangle with area 6",
    "activityForm": "validated acute-triangle grid construction",
    "prompt": "Draw an acute triangle with an area of 6 square units on the grid.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 12,
      "rows": 8,
      "drawingCount": 1,
      "vertexCount": 3,
      "validationMode": "equalAreaTriangles",
      "targetArea": 6,
      "requiredTriangleType": "acute",
      "requireDimensions": false,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "referenceDrawingItemIds": [
        "u1-practice-lesson12-draw-right-triangle",
        "u1-practice-lesson12-draw-acute-triangle",
        "u1-practice-lesson12-draw-obtuse-triangle"
      ],
      "referenceDrawingLabel": "Acute triangle",
      "referenceDrawingMarker": "A"
    },
    "missingFeedback": "Draw and check one acute triangle with area 6 square units.",
    "correctFeedback": "Correct. The drawing is an acute triangle with area 6 square units.",
    "incorrectFeedback": "Revise the drawing so it is an acute triangle and has area 6 square units.",
    "hints": [
      "Try a 4-unit horizontal base and place the third vertex 3 units above a point between the endpoints."
    ],
    "sampleAnswer": "One example has vertices (1,1), (5,1), and (3,4).",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked acute triangle drawing",
      "sourceObjects": [
        "source-equivalent blank square grid",
        "one student-created acute triangle"
      ],
      "notes": "The grid constructor checks the polygon area and angle classification without adding a base-height response that the source did not request. Correct right, acute, and obtuse drawings remain together on the same grid as labeled non-editable references."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 5b. The retained sample provides one coordinate example for comparison with the student's valid construction.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-draw-obtuse-triangle",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 5c",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "5c",
    "practicePartOrder": 7,
    "routePart": "problem-5c",
    "skill": "Draw an obtuse triangle with area 6",
    "activityForm": "validated obtuse-triangle grid construction",
    "prompt": "Draw an obtuse triangle with an area of 6 square units on the grid.",
    "responseType": "quadrilateralAreaSet",
    "answerKey": [],
    "visualModelData": {
      "type": "quadrilateralAreaSet",
      "columns": 12,
      "rows": 8,
      "drawingCount": 1,
      "vertexCount": 3,
      "validationMode": "equalAreaTriangles",
      "targetArea": 6,
      "requiredTriangleType": "obtuse",
      "requireDimensions": false,
      "allowVertexEditing": true,
      "showCalculatedArea": false,
      "referenceDrawingItemIds": [
        "u1-practice-lesson12-draw-right-triangle",
        "u1-practice-lesson12-draw-acute-triangle",
        "u1-practice-lesson12-draw-obtuse-triangle"
      ],
      "referenceDrawingLabel": "Obtuse triangle",
      "referenceDrawingMarker": "O"
    },
    "missingFeedback": "Draw and check one obtuse triangle with area 6 square units.",
    "correctFeedback": "Correct. The drawing is an obtuse triangle with area 6 square units.",
    "incorrectFeedback": "Revise the drawing so it is an obtuse triangle and has area 6 square units.",
    "hints": [
      "Try a 4-unit horizontal base and place the third vertex 3 units above a point beyond one endpoint."
    ],
    "sampleAnswer": "One example has vertices (1,1), (5,1), and (7,4).",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one independently checked obtuse triangle drawing",
      "sourceObjects": [
        "source-equivalent blank square grid",
        "one student-created obtuse triangle"
      ],
      "notes": "The grid constructor checks the polygon area and angle classification without adding a base-height response that the source did not request. Correct right, acute, and obtuse drawings remain together on the same grid as labeled non-editable references."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 5c. The retained sample provides one coordinate example for comparison with the student's valid construction.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-triangle-moq-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "6",
    "practicePartOrder": 8,
    "routePart": "problem-6",
    "skill": "Find the area of triangle MOQ",
    "activityForm": "numeric exact-source grid area with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of triangle MOQ in square units.",
    "responseType": "number",
    "answerKey": [
      "17.5",
      "35/2"
    ],
    "reasoningPrompt": "Optional: show or explain your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-12-triangle-moq-source.png",
      "alt": "The exact source triangle MOQ inside rectangle MNPQ on a square grid.",
      "naturalWidth": 586,
      "naturalHeight": 403,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 9.932203,
        "cellY": 10.075,
        "columns": 59,
        "rows": 40
      }
    },
    "missingFeedback": "Enter the area of triangle MOQ.",
    "correctFeedback": "Correct. Using grid coordinates M=(0,5), Q=(5,0), and O=(10,2), or subtracting the three outside triangles from the 10-by-5 rectangle, gives 17.5 square units.",
    "incorrectFeedback": "Not quite. Use the 10-by-5 rectangle and subtract the three right triangles outside MOQ.",
    "hints": [
      "The surrounding rectangle has area 50 square units."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "exact source triangle MOQ",
        "labeled 10-by-5 rectangle and square grid"
      ],
      "notes": "Uses a visual-only crop retaining every source label and grid line; reasoning remains available without brittle prose grading. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 6. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson12-green-chevron-area",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 12,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-12-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 7",
    "practiceLessonGroup": "lesson-12-practice",
    "practiceLessonTitle": "What Is Surface Area?",
    "practicePartLabel": "7",
    "practicePartOrder": 9,
    "routePart": "problem-7",
    "skill": "Find the area of a concave grid shape",
    "activityForm": "numeric exact-source grid area with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the green shape in square units.",
    "responseType": "number",
    "answerKey": [
      "15"
    ],
    "reasoningPrompt": "Optional: show or explain your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-12-green-chevron-source.png",
      "alt": "The exact source green concave shape on a square grid.",
      "naturalWidth": 595,
      "naturalHeight": 368,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 9.916667,
        "cellY": 9.945946,
        "columns": 60,
        "rows": 37
      }
    },
    "missingFeedback": "Enter the area of the green shape.",
    "correctFeedback": "Correct. Split the shape at the inward vertex into two congruent triangles. Each has base 5 and height 3, so the total area is 2 x (1/2 x 5 x 3) = 15 square units.",
    "incorrectFeedback": "Not quite. Draw an imaginary segment from the inward vertex to the bottom vertex, then find the areas of the two congruent triangles.",
    "hints": [
      "The shape can be split into two triangles, each with base 5 and height 3."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "exact source concave green polygon",
        "unaltered square grid"
      ],
      "notes": "Uses a visual-only source crop and checks the area independently of optional free-form reasoning. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 12 Practice Problem 7. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-cube-net-validity",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Determine whether a six-square arrangement is a cube net",
    "activityForm": "two independently checked cube-net analysis questions",
    "prompt": "Can this net be assembled into a cube? Explain how you know.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "claim",
        "label": "Decision",
        "prompt": "Can the source net be assembled into a cube?",
        "choices": [
          {
            "id": "yes",
            "label": "Yes"
          },
          {
            "id": "no",
            "label": "No"
          }
        ],
        "correctChoiceId": "no",
        "correctFeedback": "Correct. This arrangement does not fold onto six different cube faces.",
        "incorrectFeedback": "Track the faces at the two ends of the bent strip as the net folds."
      },
      {
        "id": "reason",
        "label": "Reason",
        "prompt": "What happens when the squares are folded?",
        "choices": [
          {
            "id": "overlap",
            "label": "Two end squares fold onto the same cube face and overlap."
          },
          {
            "id": "gap",
            "label": "The net has only five square faces, so it leaves a gap."
          },
          {
            "id": "allDifferent",
            "label": "All six squares fold onto different cube faces without overlap."
          }
        ],
        "correctChoiceId": "overlap",
        "correctFeedback": "Correct. The two end squares land on the same face, so the arrangement is not a cube net.",
        "incorrectFeedback": "The source has six squares; the issue is where the two end squares land after folding."
      }
    ],
    "answerKey": [
      "claim:no",
      "reason:overlap"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-cube-net-source.png",
      "alt": "The exact source arrangement of six congruent squares.",
      "naturalWidth": 425,
      "naturalHeight": 190,
      "displayVariant": "compactLandscape"
    },
    "readyFeedback": "Submit the decision and folding reason separately.",
    "missingFeedback": "Answer both questions about the cube net.",
    "correctFeedback": "Correct. It cannot form a cube because two end squares overlap on the same cube face when folded.",
    "incorrectFeedback": "Review the feedback for both the decision and the fold behavior.",
    "hints": [
      "Label the six squares in order along the bent strip, then track the first and last faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one cube-net decision and one folding explanation",
      "sourceObjects": [
        "exact source six-square arrangement"
      ],
      "notes": "The app preserves the exact arrangement and checks the source-requested conclusion and explanation independently."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-triangular-prism-surface-area",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "2b",
    "practicePartOrder": 3,
    "routePart": "problem-2b",
    "skill": "Find surface area from a gridded net",
    "activityForm": "numeric exact-source net calculation with optional reasoning",
    "prompt": "Find the surface area of the polyhedron assembled from this net, in square units.",
    "responseType": "number",
    "answerKey": [
      "72"
    ],
    "reasoningPrompt": "Optional: show or explain how the five face areas combine.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-triangular-prism-net-source.png",
      "alt": "The exact source gridded net with two 3-4-5 triangular faces and three rectangular faces of length 5.",
      "naturalWidth": 530,
      "naturalHeight": 500,
      "displayVariant": "compactSquare"
    },
    "missingFeedback": "Enter the surface area in square units.",
    "correctFeedback": "Correct. The two 3-by-4 right triangles have total area 12. The three rectangles have areas 15, 20, and 25, so the surface area is 12 + 15 + 20 + 25 = 72 square units.",
    "incorrectFeedback": "Not quite. Count the 3-4-5 triangle dimensions and the prism length from the grid, then include both triangular bases and all three rectangles.",
    "hints": [
      "The triangular bases are 3-4-5 right triangles, and the prism length is 5."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact surface area and one available explanation",
      "sourceObjects": [
        "exact source gridded net",
        "two 3-4-5 triangles",
        "three source rectangles"
      ],
      "notes": "The complete exact grid remains visible so all dimensions are inferred from the source rather than supplied by the app."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 2b.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-compare-triangular-prism-nets",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "3",
    "practicePartOrder": 4,
    "routePart": "problem-3",
    "skill": "Compare two arrangements of the same triangular-prism faces",
    "activityForm": "two independently checked net-comparison questions",
    "prompt": "Mai says both nets can be assembled into the same triangular prism. Do you agree? Explain or show your reasoning.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "claim",
        "label": "Mai's claim",
        "prompt": "Do you agree with Mai?",
        "choices": [
          {
            "id": "agree",
            "label": "Yes, I agree."
          },
          {
            "id": "disagree",
            "label": "No, I disagree."
          }
        ],
        "correctChoiceId": "agree",
        "correctFeedback": "Correct. Both nets can assemble into the same triangular prism.",
        "incorrectFeedback": "Compare the face shapes and matching side lengths, not the flat arrangement."
      },
      {
        "id": "reason",
        "label": "Reason",
        "prompt": "Which observation proves the comparison?",
        "choices": [
          {
            "id": "sameFaces",
            "label": "Both nets contain the same two congruent triangles and three matching rectangles; only their arrangement changes."
          },
          {
            "id": "sameOutline",
            "label": "Both nets have the same outside outline when flat."
          },
          {
            "id": "allSquares",
            "label": "Both nets are made from six congruent squares."
          }
        ],
        "correctChoiceId": "sameFaces",
        "correctFeedback": "Correct. Rearranging where the same five faces are joined does not change the prism they can form.",
        "incorrectFeedback": "Inventory the two triangular bases and the three rectangular side faces in each net."
      }
    ],
    "answerKey": [
      "claim:agree",
      "reason:sameFaces"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-two-triangular-prism-nets-source.png",
      "alt": "The exact source triangular-prism nets A and B.",
      "naturalWidth": 745,
      "naturalHeight": 355,
      "displayVariant": "compactLandscape"
    },
    "readyFeedback": "Submit the comparison and the face-based reason separately.",
    "missingFeedback": "Answer both questions about Mai's claim.",
    "correctFeedback": "Correct. Both nets use the same two triangular bases and three corresponding rectangles, so both assemble into the same triangular prism.",
    "incorrectFeedback": "Review both parts and compare the faces rather than the nets' flat outlines.",
    "hints": [
      "A net may look different when flat and still contain the same connected faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one comparison decision and one mathematical explanation",
      "sourceObjects": [
        "complete exact source Net A",
        "complete exact source Net B"
      ],
      "notes": "Both source nets remain fully visible, including every face and label; no bottom face is clipped."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 3.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-prism-pyramid-properties",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4a-h",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "4",
    "practicePartOrder": 5,
    "routePart": "problem-4",
    "skill": "Compare properties of a triangular prism and triangular pyramid",
    "activityForm": "eight-row source property match",
    "prompt": "For each statement, choose Figure A, Figure B, both, or neither.",
    "responseType": "matching",
    "matchChoices": [
      {
        "id": "A",
        "label": "Figure A"
      },
      {
        "id": "B",
        "label": "Figure B"
      },
      {
        "id": "both",
        "label": "Both"
      },
      {
        "id": "neither",
        "label": "Neither"
      }
    ],
    "matchPlaceholder": "Choose A, B, both, or neither",
    "matchTargets": [
      {
        "id": "a",
        "label": "a. This figure is a polyhedron.",
        "correctChoiceId": "both"
      },
      {
        "id": "b",
        "label": "b. This figure has triangular faces.",
        "correctChoiceId": "both"
      },
      {
        "id": "c",
        "label": "c. There are more vertices than edges in this figure.",
        "correctChoiceId": "neither"
      },
      {
        "id": "d",
        "label": "d. This figure has rectangular faces.",
        "correctChoiceId": "A"
      },
      {
        "id": "e",
        "label": "e. This figure is a pyramid.",
        "correctChoiceId": "B"
      },
      {
        "id": "f",
        "label": "f. There is exactly one face that can be the base for this figure.",
        "correctChoiceId": "B"
      },
      {
        "id": "g",
        "label": "g. The base of this figure is a triangle.",
        "correctChoiceId": "both"
      },
      {
        "id": "h",
        "label": "h. This figure has two identical and parallel faces that can be the base.",
        "correctChoiceId": "A"
      }
    ],
    "answerKey": [],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-prism-pyramid-figures-source.png",
      "alt": "The exact source Figure A triangular prism and Figure B triangular pyramid.",
      "naturalWidth": 460,
      "naturalHeight": 235,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Choose Figure A, Figure B, both, or neither for all eight statements.",
    "correctFeedback": "Correct. Figure A is a triangular prism and Figure B is a triangular pyramid; the eight property matches follow from their faces, edges, vertices, and possible bases.",
    "incorrectFeedback": "Not quite. Use the source figures to compare triangular faces, rectangular faces, base relationships, and the edge and vertex counts.",
    "hints": [
      "A prism has two congruent parallel bases; a pyramid has one base and faces meeting at an apex."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 8,
      "appActionTargets": 8,
      "unitOfAction": "one A/B/both/neither match for each source statement a through h",
      "sourceObjects": [
        "exact source Figure A triangular prism",
        "exact source Figure B triangular pyramid",
        "source labels A and B"
      ],
      "notes": "The eight source statements remain eight visible response rows and the complete solids are shown without clipping."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 4a-h.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-surface-area-units",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "5",
    "practicePartOrder": 6,
    "routePart": "problem-5",
    "skill": "Select units appropriate for surface area",
    "activityForm": "source multi-select measurement units",
    "prompt": "Select all units that can be used for surface area.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "A. square meters"
      },
      {
        "id": "B",
        "label": "B. feet"
      },
      {
        "id": "C",
        "label": "C. centimeters"
      },
      {
        "id": "D",
        "label": "D. cubic inches"
      },
      {
        "id": "E",
        "label": "E. square inches"
      },
      {
        "id": "F",
        "label": "F. square feet"
      }
    ],
    "answerKey": [
      "A",
      "E",
      "F"
    ],
    "missingFeedback": "Select every unit that measures surface area.",
    "correctFeedback": "Correct. Surface area is two-dimensional, so square meters, square inches, and square feet are appropriate units.",
    "incorrectFeedback": "Not quite. Surface area uses squared units, not linear units or cubic units.",
    "hints": [
      "Look for the word square."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 6,
      "appActionTargets": 6,
      "unitOfAction": "selection decision for each of the six source unit choices",
      "sourceObjects": [
        "six app-rendered source unit choices"
      ],
      "notes": "The source has no diagram; all source options are preserved verbatim as app text."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 5.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson14-crown-polygon-area",
    "section": "E",
    "sectionName": "Nets and Surface Area",
    "lesson": 14,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-14-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-14-practice",
    "practiceLessonTitle": "Nets and Surface Area",
    "practicePartLabel": "6",
    "practicePartOrder": 7,
    "routePart": "problem-6",
    "skill": "Find a concave polygon area on a square grid",
    "activityForm": "numeric exact-source grid area with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the polygon in square units.",
    "responseType": "number",
    "answerKey": [
      "33"
    ],
    "reasoningPrompt": "Optional: show or explain your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-14-crown-polygon-source.png",
      "alt": "The exact source crown-shaped polygon on a complete square grid.",
      "naturalWidth": 400,
      "naturalHeight": 275,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 9.821429,
        "columns": 40,
        "rows": 28
      }
    },
    "missingFeedback": "Enter the polygon's area in square units.",
    "correctFeedback": "Correct. One decomposition gives a 6-by-3 rectangle of area 18, a central triangle of area 9, and two side triangles of area 3 each: 18 + 9 + 3 + 3 = 33 square units.",
    "incorrectFeedback": "Not quite. Use the grid to split the polygon into a central rectangle and three triangular sections, or enclose it and subtract the unshaded pieces.",
    "hints": [
      "The bottom rectangle is 6 units wide and 3 units high."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact polygon area and one available explanation",
      "sourceObjects": [
        "exact source concave polygon",
        "complete source square grid"
      ],
      "notes": "The exact grid is preserved and optional line/rectangle annotations support decomposition without changing the graded answer. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 14 Practice Problem 6. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-select-polyhedra",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 1",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "1",
    "practicePartOrder": 1,
    "routePart": "problem-1",
    "skill": "Distinguish polyhedra from solids with curved surfaces",
    "activityForm": "multi-select exact-source solid classification",
    "prompt": "Select all the polyhedra.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "A",
        "label": "Figure A"
      },
      {
        "id": "B",
        "label": "Figure B"
      },
      {
        "id": "C",
        "label": "Figure C"
      },
      {
        "id": "D",
        "label": "Figure D"
      },
      {
        "id": "E",
        "label": "Figure E"
      }
    ],
    "answerKey": [
      "A",
      "B",
      "D"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-polyhedra-selection-source.png",
      "alt": "Five exact source solids A through E. A has flat triangular faces meeting at a point; B is a closed many-faced solid made from polygons; C has a circular base and a curved surface meeting at a point; D has two congruent polygon ends joined by flat quadrilateral faces; E has one continuous curved surface.",
      "naturalWidth": 830,
      "naturalHeight": 596,
      "displayVariant": "compactLandscape"
    },
    "missingFeedback": "Select every source figure that is a polyhedron.",
    "correctFeedback": "Correct. A, B, and D are closed solids made only from flat polygon faces. C and E have curved surfaces, so they are not polyhedra.",
    "incorrectFeedback": "Not quite. A polyhedron must be closed and made entirely from flat polygon faces; any curved surface rules a solid out.",
    "hints": [
      "Check each solid for a curved surface."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 5,
      "appActionTargets": 5,
      "unitOfAction": "classification of each of the five exact source solids",
      "sourceObjects": [
        "exact source solids A, B, C, D, and E"
      ],
      "notes": "The visual-only crop preserves all five source solids and labels; the app renders and grades the selection prompt separately."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-classify-octagonal-prism",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2a",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "2a",
    "practicePartOrder": 2,
    "routePart": "problem-2a",
    "skill": "Classify a polyhedron and justify the classification",
    "activityForm": "two independently checked classification questions",
    "prompt": "Is the polyhedron a prism, a pyramid, or neither? Explain how you know.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "classification",
        "label": "Classification",
        "prompt": "How should the source solid be classified?",
        "choices": [
          {
            "id": "prism",
            "label": "Prism"
          },
          {
            "id": "pyramid",
            "label": "Pyramid"
          },
          {
            "id": "neither",
            "label": "Neither"
          }
        ],
        "correctChoiceId": "prism",
        "correctFeedback": "Correct. The solid is a prism.",
        "incorrectFeedback": "Look for two congruent, parallel bases rather than one base and a single apex."
      },
      {
        "id": "reason",
        "label": "Reason",
        "prompt": "Which feature proves the classification?",
        "choices": [
          {
            "id": "twoBases",
            "label": "It has two congruent, parallel octagonal bases joined by rectangular faces."
          },
          {
            "id": "oneApex",
            "label": "It has one octagonal base and all other faces meet at one apex."
          },
          {
            "id": "allCongruent",
            "label": "All of its faces are congruent octagons."
          }
        ],
        "correctChoiceId": "twoBases",
        "correctFeedback": "Correct. Two congruent, parallel polygon bases connected by rectangles define a prism.",
        "incorrectFeedback": "Use the defining relationship between the two end faces and the connecting faces."
      }
    ],
    "answerKey": [
      "classification:prism",
      "reason:twoBases"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-octagonal-prism-source.png",
      "alt": "The exact source solid with two congruent eight-sided end faces joined by flat quadrilateral faces.",
      "naturalWidth": 388,
      "naturalHeight": 367,
      "displayVariant": "compact"
    },
    "readyFeedback": "Submit both the classification and its defining reason.",
    "missingFeedback": "Answer both questions about the source solid.",
    "correctFeedback": "Correct. It is an octagonal prism because it has two congruent, parallel octagonal bases joined by rectangular faces.",
    "incorrectFeedback": "Review each question's feedback and compare prisms with pyramids.",
    "hints": [
      "Trace the two matching end faces."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one classification and one mathematical justification",
      "sourceObjects": [
        "exact source octagonal prism",
        "visible and hidden source edges"
      ],
      "notes": "The exact source solid remains visible for both independently checked parts of the explanation."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 2a.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-count-octagonal-prism",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-001.png",
    "sourceItem": "Problem 2b",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "2b",
    "practicePartOrder": 3,
    "routePart": "problem-2b",
    "skill": "Count faces, edges, and vertices of the source polyhedron",
    "activityForm": "three independently checked polyhedron counts",
    "prompt": "How many faces, edges, and vertices does the polyhedron have?",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "faces",
        "label": "Faces",
        "prompt": "How many faces does the source polyhedron have?",
        "choices": [
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "10",
            "label": "10"
          },
          {
            "id": "16",
            "label": "16"
          }
        ],
        "correctChoiceId": "10",
        "correctFeedback": "Correct. There are 8 rectangular side faces and 2 octagonal bases, for 10 faces.",
        "incorrectFeedback": "Count the 8 side faces and both bases."
      },
      {
        "id": "edges",
        "label": "Edges",
        "prompt": "How many edges does the source polyhedron have?",
        "choices": [
          {
            "id": "16",
            "label": "16"
          },
          {
            "id": "24",
            "label": "24"
          },
          {
            "id": "30",
            "label": "30"
          }
        ],
        "correctChoiceId": "24",
        "correctFeedback": "Correct. The two octagonal rims contribute 16 edges, and 8 edges join corresponding vertices: 24 total.",
        "incorrectFeedback": "Count both 8-edge bases, then the 8 connecting edges."
      },
      {
        "id": "vertices",
        "label": "Vertices",
        "prompt": "How many vertices does the source polyhedron have?",
        "choices": [
          {
            "id": "8",
            "label": "8"
          },
          {
            "id": "16",
            "label": "16"
          },
          {
            "id": "24",
            "label": "24"
          }
        ],
        "correctChoiceId": "16",
        "correctFeedback": "Correct. Each octagonal base has 8 vertices, so the prism has 16 vertices.",
        "incorrectFeedback": "Count 8 vertices on each of the two bases."
      }
    ],
    "answerKey": [
      "faces:10",
      "edges:24",
      "vertices:16"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-octagonal-prism-source.png",
      "alt": "The exact source solid with two congruent eight-sided end faces joined by flat quadrilateral faces, shown for counting faces, edges, and vertices.",
      "naturalWidth": 388,
      "naturalHeight": 367,
      "displayVariant": "compact"
    },
    "readyFeedback": "Submit each count for its own feedback.",
    "missingFeedback": "Submit the face, edge, and vertex counts.",
    "correctFeedback": "Correct. The octagonal prism has 10 faces, 24 edges, and 16 vertices.",
    "incorrectFeedback": "Review the count feedback and use the two octagonal bases as the organizing structure.",
    "hints": [
      "For an n-gonal prism: faces = n + 2, edges = 3n, and vertices = 2n."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "three independent counts from the same exact source prism",
      "sourceObjects": [
        "exact source octagonal prism",
        "all visible and hidden edges"
      ],
      "notes": "Each source-requested count receives its own response, submission, and explanatory feedback."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 2b.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-square-prism-net",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 3",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "3",
    "practicePartOrder": 4,
    "routePart": "problem-3",
    "skill": "Evaluate a claim about a square-prism net",
    "activityForm": "two independently checked claim-analysis questions",
    "prompt": "Tyler says this cannot be a net for a square prism because not all the faces are squares. Do you agree with Tyler? Explain your reasoning.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "claim",
        "label": "Tyler's claim",
        "prompt": "Do you agree with Tyler?",
        "choices": [
          {
            "id": "agree",
            "label": "Yes, I agree."
          },
          {
            "id": "disagree",
            "label": "No, I disagree."
          }
        ],
        "correctChoiceId": "disagree",
        "correctFeedback": "Correct. The net can form a square prism.",
        "incorrectFeedback": "A square prism is named for its square bases, not because every face is a square."
      },
      {
        "id": "reason",
        "label": "Reason",
        "prompt": "Which statement best explains why?",
        "choices": [
          {
            "id": "twoSquares",
            "label": "A square prism needs two square bases and four rectangular side faces."
          },
          {
            "id": "sixSquares",
            "label": "A square prism must have six square faces."
          },
          {
            "id": "oneSquare",
            "label": "Any solid with at least one square face is a square prism."
          }
        ],
        "correctChoiceId": "twoSquares",
        "correctFeedback": "Correct. The two square faces are the bases, and the four rectangles wrap around them.",
        "incorrectFeedback": "Identify which faces are the congruent parallel bases and which faces connect them."
      }
    ],
    "answerKey": [
      "claim:disagree",
      "reason:twoSquares"
    ],
    "visualModelData": {
      "type": "sourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-square-prism-net-source.png",
      "alt": "The exact source net with two square faces and four rectangular faces.",
      "naturalWidth": 307,
      "naturalHeight": 305,
      "displayVariant": "compact"
    },
    "readyFeedback": "Submit the claim decision and the reason separately.",
    "missingFeedback": "Answer both parts about Tyler's claim.",
    "correctFeedback": "Correct. Tyler is mistaken: the net has two square bases and four rectangular side faces, exactly what a square prism needs.",
    "incorrectFeedback": "Review each part's feedback and distinguish square bases from rectangular side faces.",
    "hints": [
      "The name of a prism comes from the shape of its two bases."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one claim decision and one independently checked mathematical reason",
      "sourceObjects": [
        "exact source square-prism net"
      ],
      "notes": "The source claim and explanation are preserved without brittle free-text keyword grading."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 3.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-area-nine-triangles",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-002.png",
    "sourceItem": "Problem 4",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "4",
    "practicePartOrder": 5,
    "routePart": "problem-4",
    "skill": "Explain equal triangle areas using corresponding base and height",
    "activityForm": "three independently checked source-triangle explanations with optional source-aligned annotation scratchpad",
    "prompt": "Explain why each source triangle has an area of 9 square units.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "triangleA",
        "label": "Triangle A",
        "prompt": "Which calculation explains why Triangle A has area 9 square units?",
        "choices": [
          {
            "id": "base6Height3",
            "label": "1/2 x 6 x 3 = 9"
          },
          {
            "id": "sideTimesSide",
            "label": "3 x 3 = 9 because two visible sides are 3"
          },
          {
            "id": "countNine",
            "label": "Count 9 full shaded grid squares"
          }
        ],
        "correctChoiceId": "base6Height3",
        "correctFeedback": "Correct. Triangle A has a 6-unit base and a corresponding perpendicular height of 3 units, so its area is 9 square units.",
        "incorrectFeedback": "Use a 6-unit side as the base of Triangle A, then count the perpendicular 3-unit height on the grid."
      },
      {
        "id": "triangleB",
        "label": "Triangle B",
        "prompt": "Which calculation explains why Triangle B has area 9 square units?",
        "choices": [
          {
            "id": "base6Height3",
            "label": "1/2 x 6 x 3 = 9"
          },
          {
            "id": "sideTimesSide",
            "label": "3 x 3 = 9 because two visible sides are 3"
          },
          {
            "id": "countNine",
            "label": "Count 9 full shaded grid squares"
          }
        ],
        "correctChoiceId": "base6Height3",
        "correctFeedback": "Correct. Triangle B has a 6-unit base and a corresponding perpendicular height of 3 units, so its area is 9 square units.",
        "incorrectFeedback": "Use a 6-unit side as the base of Triangle B, then count the perpendicular 3-unit height on the grid."
      },
      {
        "id": "triangleC",
        "label": "Triangle C",
        "prompt": "Which calculation explains why Triangle C has area 9 square units?",
        "choices": [
          {
            "id": "base6Height3",
            "label": "1/2 x 6 x 3 = 9"
          },
          {
            "id": "sideTimesSide",
            "label": "3 x 3 = 9 because two visible sides are 3"
          },
          {
            "id": "countNine",
            "label": "Count 9 full shaded grid squares"
          }
        ],
        "correctChoiceId": "base6Height3",
        "correctFeedback": "Correct. Triangle C has a 6-unit base and a corresponding perpendicular height of 3 units, so its area is 9 square units.",
        "incorrectFeedback": "Use a 6-unit side as the base of Triangle C, then count the perpendicular 3-unit height on the grid."
      }
    ],
    "answerKey": [
      "triangleA:base6Height3",
      "triangleB:base6Height3",
      "triangleC:base6Height3"
    ],
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-area-nine-triangles-source.png",
      "alt": "The exact source grid triangles A, B, and C, each with base 6 and corresponding height 3.",
      "naturalWidth": 1050,
      "naturalHeight": 413,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to mark a base, corresponding height, enclosing region, or decomposition on the exact source visual. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10,
        "cellY": 10.073171,
        "columns": 105,
        "rows": 41
      }
    },
    "readyFeedback": "Submit an area explanation for each source triangle.",
    "missingFeedback": "Answer and submit the explanation for all three triangles.",
    "correctFeedback": "Correct. Each triangle has a 6-unit base and a corresponding 3-unit height, so each area is 1/2 x 6 x 3 = 9 square units.",
    "incorrectFeedback": "Review the feedback for each triangle and use corresponding, perpendicular base-height pairs.",
    "hints": [
      "A base does not need to be horizontal, but its height must be perpendicular to its line."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one independently checked area explanation for each exact source triangle",
      "sourceObjects": [
        "exact source grid triangles A, B, and C",
        "complete source grid"
      ],
      "notes": "The visual-only crop retains the complete grid and all three triangles while the app renders the explanation choices. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 4. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-triangle-fractional-height",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 5b",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "5b",
    "practicePartOrder": 7,
    "routePart": "problem-5b",
    "skill": "Find triangle area with a fractional height",
    "activityForm": "numeric calculation with optional reasoning",
    "prompt": "A triangle has a base of 16 inches and a height of 1/8 inch. What is its area in square inches?",
    "responseType": "number",
    "answerKey": [
      "1"
    ],
    "reasoningPrompt": "Optional: show or explain your calculation.",
    "reasoningRequired": false,
    "missingFeedback": "Enter the triangle's area in square inches.",
    "correctFeedback": "Correct. One half of 16 times 1/8 is 1, so the area is 1 square inch.",
    "incorrectFeedback": "Not quite. Use 1/2 x base x height and simplify 16 x 1/8 first.",
    "hints": [
      "16 x 1/8 = 2."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact area and one available explanation",
      "sourceObjects": [
        "text-only base 16 inches",
        "text-only height 1/8 inch"
      ],
      "notes": "The source supplies no diagram; the card preserves the numeric task and keeps prose reasoning optional."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 5b.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson13-shaded-region",
    "section": "E",
    "sectionName": "Polyhedra",
    "lesson": 13,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-13-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set/page-003.png",
    "sourceItem": "Problem 6",
    "practiceLessonGroup": "lesson-13-practice",
    "practiceLessonTitle": "Polyhedra",
    "practicePartLabel": "6",
    "practicePartOrder": 10,
    "routePart": "problem-6",
    "skill": "Find a shaded area by subtracting an opening",
    "activityForm": "numeric exact-source composite area with optional reasoning with optional source-aligned annotation scratchpad",
    "prompt": "Find the area of the shaded region in square centimeters.",
    "responseType": "number",
    "answerKey": [
      "31"
    ],
    "reasoningPrompt": "Optional: show or explain your reasoning.",
    "reasoningRequired": false,
    "visualModelData": {
      "type": "annotatableSourceVisual",
      "imagePath": "artifacts/unit 1/_practice-crops/lesson-13-shaded-triangle-door-source.png",
      "alt": "The exact source shaded triangular region with a 2-centimeter square opening.",
      "naturalWidth": 902,
      "naturalHeight": 390,
      "displayVariant": "compactLandscape",
      "annotationTools": [
        "line",
        "rectangle",
        "square",
        "erase"
      ],
      "defaultAnnotationTool": "line",
      "annotationInstructions": "Use optional lines, rectangles, or squares to split, enclose, or group parts of the exact source figure while planning an area calculation. These marks are scratch work and do not affect grading.",
      "annotationGrid": {
        "originX": 0,
        "originY": 0,
        "cellX": 10.022222,
        "cellY": 10,
        "columns": 90,
        "rows": 39
      }
    },
    "missingFeedback": "Enter the area of the shaded region.",
    "correctFeedback": "Correct. The large triangle has base 14 cm and total height 5 cm, so its area is 35 square centimeters. Subtract the 2-by-2 opening: 35 - 4 = 31 square centimeters.",
    "incorrectFeedback": "Not quite. Add the two 6-centimeter base segments and the 2-centimeter opening width; add the 2-centimeter opening height and the 3-centimeter segment above it; then subtract the opening's area.",
    "hints": [
      "The outside triangle has base 14 cm and height 5 cm."
    ],
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one exact shaded area and one available explanation",
      "sourceObjects": [
        "exact source outer triangle",
        "2-by-2 square opening",
        "all source dimension labels"
      ],
      "notes": "The visual-only crop preserves every needed measurement and no source prompt or footer text. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning."
    },
    "implementationNotes": "Full-coverage implementation of Lesson 13 Practice Problem 6. The exact displayed source visual includes an optional, ungraded source-coordinate annotation scratchpad for measurement or decomposition planning.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": true,
    "id": "u1-practice-lesson19-tent-comparison",
    "section": "G",
    "sectionName": "Let's Put it to Work",
    "lesson": 19,
    "sourceType": "Student Task Statement",
    "sourceFolder": "Student Task Statements",
    "sourceFile": "Grade6-1-19-Lesson-student-task-statements.pdf",
    "sourcePage": 4,
    "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-004.png",
    "sourceItem": "Activity 19.2, Questions 1-2",
    "practiceLessonGroup": "lesson-19-practice",
    "practiceLessonTitle": "Designing a Tent",
    "practicePartLabel": "19.2",
    "practicePartOrder": 2,
    "routePart": "activity-19-2",
    "skill": "Explain and compare tent designs and fabric estimates",
    "activityForm": "saved-design explanation plus three independently checked comparisons",
    "prompt": "Use your completed 19.1 tent and two app-provided tents for the same campers. Explain your design, compare the fabric estimates, and identify which design change has the greatest effect.",
    "responseType": "groupedChoice",
    "choiceGroups": [
      {
        "id": "least",
        "label": "Least fabric",
        "prompt": "Which tent design uses the least fabric?",
        "choices": [
          {
            "id": "own",
            "label": "Your tent"
          },
          {
            "id": "height-change",
            "label": "Height-change tent"
          },
          {
            "id": "floor-change",
            "label": "Floor-change tent"
          }
        ],
        "dynamicAnswer": "tentComparisonLeast"
      },
      {
        "id": "most",
        "label": "Most fabric",
        "prompt": "Which tent design uses the most fabric?",
        "choices": [
          {
            "id": "own",
            "label": "Your tent"
          },
          {
            "id": "height-change",
            "label": "Height-change tent"
          },
          {
            "id": "floor-change",
            "label": "Floor-change tent"
          }
        ],
        "dynamicAnswer": "tentComparisonMost"
      },
      {
        "id": "impact",
        "label": "Greatest impact",
        "prompt": "Which change from your tent has the greater effect on the amount of fabric needed?",
        "choices": [
          {
            "id": "height-change",
            "label": "Changing the height"
          },
          {
            "id": "floor-change",
            "label": "Changing the floor dimensions"
          }
        ],
        "dynamicAnswer": "tentComparisonImpact"
      }
    ],
    "answerKey": [],
    "reasoningPrompt": "Explain why you chose your tent design and how you found its fabric estimate.",
    "reasoningRequired": true,
    "reasoningMinLength": 1,
    "reasoningConceptRequirements": [
      [
        [
          "sleeping",
          "floor"
        ],
        [
          "people",
          "floor"
        ],
        [
          "capacity",
          "floor"
        ],
        [
          "height",
          "design"
        ],
        [
          "shape",
          "design"
        ],
        [
          "style",
          "design"
        ]
      ],
      [
        [
          "floor",
          "area"
        ],
        [
          "panel",
          "area"
        ],
        [
          "surface",
          "area"
        ],
        [
          "roof",
          "wall"
        ],
        [
          "fabric",
          "area"
        ]
      ]
    ],
    "reasoningValidationGuidance": "explain at least one design constraint or choice, such as capacity, sleeping-bag floor space, height, shape, or style, and explain how the floor, roof, wall, end, or other panel areas combine to make the fabric estimate",
    "visualModelData": {
      "type": "interactiveTentComparison",
      "designItemId": "u1-practice-tent-design-estimate"
    },
    "readyFeedback": "Complete 19.1 first, then explain your design and submit each comparison for its own feedback.",
    "missingFeedback": "Complete and submit all three comparisons and the explanation of your own design.",
    "reasoningRequiredFeedback": "The tent comparisons are correct. Add the source-requested explanation of your own design and fabric calculation.",
    "reasoningRevisionFeedback": "The tent comparisons are correct, but the explanation must include both a design constraint or choice and how panel areas combine into the fabric estimate.",
    "correctFeedback": "Complete. You explained your own design, compared all three fabric totals, and used the size of each change to identify the greatest impact.",
    "incorrectFeedback": "Review the displayed square-foot totals and compare each alternative with your own tent.",
    "hints": [
      "For least and most, compare all three total fabric areas.",
      "For greatest impact, compare the absolute change from your tent for each alternative."
    ],
    "sampleAnswer": "I chose a tent that fits the selected sleeping bags and includes a floor. I added the floor, roof, wall, and end panel areas for the fabric estimate, then compared that total with the two alternatives.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "one design-and-estimate explanation plus least-fabric, most-fabric, and greatest-impact comparisons",
      "sourceObjects": [
        "student's saved 19.1 tent",
        "two same-capacity comparison tents",
        "floor dimensions",
        "height",
        "tent style",
        "three fabric totals",
        "two changes from the original design"
      ],
      "notes": "The app replaces unavailable partners with two controlled, same-capacity comparison designs while preserving the student's own 19.1 work and every mathematical comparison requested in 19.2."
    },
    "implementationNotes": "Full-coverage implementation of Activity 19.2 with a persistent 19.1 design and dynamic same-capacity comparisons. The retained sample is a model comparison explanation for an open-response component with many valid wordings.",
    "source": "Student Task Statements/Grade6-1-19-Lesson-student-task-statements.pdf p.4"
  }
];
