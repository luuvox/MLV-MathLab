window.unit1PracticeBank = [
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
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set/page-002.png",
    "skill": "Use valid area reasoning",
    "activityForm": "multi-select reasoning",
    "prompt": "A shape has area 24 square units. Select every statement that uses valid area reasoning.",
    "responseType": "multiSelect",
    "choices": [
      {
        "id": "edgeCount",
        "label": "The area can be found by counting the squares that touch the edge."
      },
      {
        "id": "cover24",
        "label": "It takes 24 grid squares to cover the shape without gaps and overlaps."
      },
      {
        "id": "outerRectangle",
        "label": "The area can be found by multiplying 6 by 4 because those are two labeled side lengths."
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
    "visualModelData": {
      "type": "areaMeaningStatements"
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
      "notes": "Preserves the source's five-option select-all task. The app diagram keeps the source grid visible, traces one unfilled polygon outline, places only the source measurements, and does not pre-draw the answer decomposition."
    },
    "hints": [
      "Area counts the space covered inside the boundary.",
      "Multiplying two labeled lengths only works when they describe a matching rectangle or valid decomposition."
    ],
    "sampleAnswer": "The shape can be covered by 24 unit squares, counted inside, or decomposed into rectangles with areas 4 × 3 and 6 × 2.",
    "implementationNotes": "Directly adapted from Lesson 1 cumulative practice, problem 4.",
    "source": "Cumulative Practice Problems/Grade6-1-1-Lesson-curated-practice-problem-set.pdf p.2"
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
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Compare area after rearranging pieces",
    "activityForm": "single choice visual reasoning",
    "prompt": "Priya cut 4 of 16 equal-size squares out of a square and attached them around the outside. How does the area of the new figure compare with the original square?",
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
        "label": "There is not enough information to compare the areas."
      }
    ],
    "answerKey": [
      "same"
    ],
    "visualModelData": {
      "type": "rearrangedSquareSameArea"
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
      "notes": "Preserves Lesson 2 practice problem 2. The app uses the same four answer choices and keeps the two figures as a single comparison context with 16 visible equal-size pieces in each figure."
    },
    "hints": [
      "No pieces are added or removed.",
      "The 4 small squares are moved, so the total covered area stays the same."
    ],
    "sampleAnswer": "The two figures have the same area because the new figure uses the same 16 equal-size squares as the original square.",
    "implementationNotes": "Replaced an inspired numeric area card with the exact Lesson 2 visual comparison action.",
    "source": "Cumulative Practice Problems/Grade6-1-2-Lesson-curated-practice-problem-set.pdf p.1"
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
    "sourceType": "Student Task Statement",
    "sourceFolder": "Student Task Statements",
    "sourceFile": "Grade6-1-3-Lesson-student-task-statements.pdf",
    "sourcePage": 2,
    "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-3-Lesson-student-task-statements/page-002.png",
    "skill": "Find area by subtracting a missing piece",
    "activityForm": "missing-piece area",
    "prompt": "Figure C is a 5 cm by 5 cm square with a 2 cm by 2 cm square hole. What is the shaded area?",
    "responseType": "number",
    "answerKey": [
      "21"
    ],
    "visualModelData": {
      "type": "missingPiece",
      "width": 5,
      "height": 5,
      "missingWidth": 2,
      "missingHeight": 2
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for source Figure C",
      "sourceObjects": [
        "Figure C outside 5 cm by 5 cm square",
        "inside 2 cm by 2 cm square hole"
      ],
      "notes": "Uses one source figure as one answer target and preserves the outside-minus-inside structure."
    },
    "hints": [
      "Find the area of the 5 by 5 outside square.",
      "Subtract the 2 by 2 square hole."
    ],
    "sampleAnswer": "5 × 5 - 2 × 2 = 25 - 4 = 21 square centimeters.",
    "implementationNotes": "Tightened to the exact Lesson 3 student task statement, Figure C.",
    "source": "Student Task Statements/Grade6-1-3-Lesson-student-task-statements.pdf p.2"
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
    "sourceType": "Teacher Presentation Material",
    "sourceFolder": "Teacher Presentation Materials",
    "sourceFile": "Grade6-1-3-Lesson-teacher-presentation-materials.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Teacher Presentation Materials/Grade6-1-3-Lesson-teacher-presentation-materials/page-001.png",
    "skill": "Compare regions after moving area",
    "activityForm": "comparison choice with reasoning",
    "prompt": "Is the area of Figure A greater than, less than, or equal to the area of the shaded region in Figure B? Explain your reasoning.",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "greater",
        "label": "The area of Figure A is greater."
      },
      {
        "id": "less",
        "label": "The area of Figure A is less."
      },
      {
        "id": "equal",
        "label": "The areas are equal."
      }
    ],
    "answerKey": [
      "equal"
    ],
    "visualModelData": {
      "type": "compareRegions"
    },
    "reasoningPrompt": "Explain your reasoning.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one comparison answer plus one written explanation",
      "sourceObjects": [
        "Figure A square",
        "Figure B region with one square moved from inside to outside"
      ],
      "notes": "Preserves the source warm-up as a comparison answer plus explanation, keeps the missing and attached squares equal in size, and does not add explanatory captions inside the visual."
    },
    "hints": [
      "Compare the missing square in Figure B with the extra square attached to the outside.",
      "Think about whether any area was added or only moved."
    ],
    "sampleAnswer": "The areas are equal. Figure B looks different, but the missing square and the attached square have the same area, so the total shaded area matches Figure A.",
    "implementationNotes": "Converted to the original Lesson 3 teacher-presentation warm-up action.",
    "source": "Teacher Presentation Materials/Grade6-1-3-Lesson-teacher-presentation-materials.pdf p.1"
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
    "skill": "Identify parallelograms",
    "activityForm": "multi-select classification",
    "prompt": "Select every figure that is a parallelogram.",
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
    "visualModelData": {
      "type": "parallelogramSort"
    },
    "reasoningPrompt": "Explain how you ruled out figures that are not parallelograms.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 5,
      "appActionTargets": 5,
      "unitOfAction": "each labeled figure A-E",
      "sourceObjects": [
        "five labeled quadrilaterals/figures on a grid"
      ],
      "notes": "Preserves the select-all source activity, keeps the five labeled figures on one shared source-style grid, and adds the source-requested explanation field for rejected figures."
    },
    "hints": [
      "A parallelogram has two pairs of opposite parallel sides.",
      "Rectangles are parallelograms because opposite sides are parallel."
    ],
    "sampleAnswer": "Figures B and C are parallelograms. Figure C is a rectangle, and rectangles have two pairs of opposite parallel sides.",
    "implementationNotes": "Directly adapted from Lesson 4 cumulative practice, problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-4-Lesson-curated-practice-problem-set.pdf p.1"
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
    "skill": "Identify correctly labeled heights",
    "activityForm": "multi-select geometry",
    "prompt": "Select every parallelogram that has a correct height labeled for the given base.",
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
    "visualModelData": {
      "type": "parallelogramHeightsFour"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "each labeled parallelogram diagram A-D",
      "sourceObjects": [
        "shared grid with Diagram A rectangle, base label, and height label",
        "shared grid with Diagram B parallelogram, base label, and slanted side labeled height",
        "shared grid with Diagram C parallelogram, base label, outside dashed height-to-base-extension construction, and right-angle marker",
        "shared grid with Diagram D parallelogram, slanted base label, dashed height/base-extension construction outside the shape, and right-angle marker"
      ],
      "notes": "Restores the source's four independent visual targets on one shared grid and preserves the base/height labels, dashed construction segments, and right-angle markers."
    },
    "hints": [
      "A height must be perpendicular to the selected base or the line containing that base.",
      "A slanted side is not automatically a height."
    ],
    "sampleAnswer": "A, C, and D show heights perpendicular to the chosen base or its extension. B labels a slanted side, so it is not a corresponding height.",
    "implementationNotes": "Directly adapted from Lesson 5 cumulative practice, problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-5-Lesson-curated-practice-problem-set.pdf p.1"
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
    "skill": "Use base and height to find parallelogram area",
    "activityForm": "numeric area",
    "prompt": "A parallelogram-shaped building face has length 86 meters and height 55 meters. What is the area of the face?",
    "responseType": "number",
    "answerKey": [
      "4730"
    ],
    "visualModelData": {
      "type": "parallelogramArea",
      "base": 86,
      "height": 55,
      "unit": "m"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes-with-source-modal",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for the Dockland building face",
      "sourceObjects": [
        "Dockland building photograph",
        "length 86 meters",
        "height 55 meters"
      ],
      "notes": "The app uses an abstract parallelogram model for calculation and keeps the source photograph available through the source modal."
    },
    "hints": [
      "Use the corresponding height, not a slanted side.",
      "86 × 55 can be found as 86 × 50 plus 86 × 5."
    ],
    "sampleAnswer": "86 × 55 = 4,730, so the face has area 4,730 square meters.",
    "implementationNotes": "Directly adapted from Lesson 6 cumulative practice, problem 4.",
    "source": "Cumulative Practice Problems/Grade6-1-6-Lesson-curated-practice-problem-set.pdf p.2"
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
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for subproblem 5a",
      "sourceObjects": [
        "subproblem 5a parallelogram base and height"
      ],
      "notes": "Uses one source subproblem as one practice card rather than combining all Lesson 13 subparts into a single card."
    },
    "hints": [
      "Use base × height.",
      "12 × 1.5 is the same as 12 × 1 + 12 × 0.5."
    ],
    "sampleAnswer": "12 × 1.5 = 18, so the area is 18 square meters.",
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5a.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3"
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
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-base answer for subproblem 5c",
      "sourceObjects": [
        "subproblem 5c parallelogram area and height"
      ],
      "notes": "Uses one source subproblem as one practice card and keeps the unknown-dimension action intact."
    },
    "hints": [
      "Area = base × height.",
      "Ask: what number times 4 is 28?"
    ],
    "sampleAnswer": "base × 4 = 28, so the base is 7 feet.",
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5c.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-triangle-compose-two-copies",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 7,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-7-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Explain a two-triangle composition",
    "activityForm": "open visual reasoning",
    "prompt": "Triangle R is a right triangle. Can two copies of Triangle R compose a parallelogram that is not a square? Explain how or why not.",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "rightTriangleCopies"
    },
    "reasoningPrompt": "Your explanation",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one written explanation about composing two copies of Triangle R",
      "sourceObjects": [
        "Triangle R",
        "copy of Triangle R"
      ],
      "notes": "Uses the exact Lesson 7 practice problem 2 action instead of replacing it with unrelated true/false statements."
    },
    "hints": [
      "Try lining up the two copies along one of their equal sides.",
      "A parallelogram only needs two pairs of opposite parallel sides; it does not have to be a square."
    ],
    "sampleAnswer": "Yes. Put the two congruent right triangles together along one matching side so their other sides form two pairs of parallel sides. The result can be a non-square parallelogram.",
    "implementationNotes": "Converted to the source's open explanation format.",
    "source": "Cumulative Practice Problems/Grade6-1-7-Lesson-curated-practice-problem-set.pdf p.1"
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
    "previewPath": "_rendered-previews/Family Support Materials/Family-Support-Materials/page-008.png",
    "sourcePreviewMode": "afterSubmit",
    "skill": "Calculate area of a triangle",
    "activityForm": "numeric area",
    "prompt": "Find the area of the blue triangle shown on the grid. Use the labeled lengths and the grid to reason.",
    "responseType": "number",
    "answerKey": [
      "7.5",
      "7 1/2",
      "15/2"
    ],
    "visualModelData": {
      "type": "triangleGridInferredHeight",
      "base": 5,
      "side": 5,
      "inferredHeight": 3,
      "unit": "units"
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
      "notes": "The rendered source page contains solution text, so the source modal is locked until after a correct auto-graded response. The app visual preserves the grid and does not label the inferred height before the sample."
    },
    "hints": [
      "A triangle is half of a related parallelogram.",
      "Use one labeled side as a base, then count grid squares to find the perpendicular height."
    ],
    "sampleAnswer": "Use the horizontal side as base 5. The grid shows a perpendicular height of 3, so 1/2 × 5 × 3 = 7.5 square units.",
    "implementationNotes": "Matches the family support grid triangle and preserves the source's inferred-height action.",
    "source": "Family Support Materials/Family Support Materials.pdf p.8"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-triangle-reasoning",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 8,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-8-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Explain triangle area using parallelogram strategies",
    "activityForm": "open visual reasoning",
    "prompt": "Diego and Jada each used a parallelogram to reason about the area of the same right triangle. Explain how Diego's strategy can be used, and explain how Jada's strategy can be used.",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "trianglePair"
    },
    "reasoningPrompt": "Your explanation",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "two written explanations, one for Diego's strategy and one for Jada's strategy",
      "sourceObjects": [
        "Diego's decomposed-and-rearranged parallelogram",
        "Jada's two-copy parallelogram"
      ],
      "notes": "The card preserves both source explanation prompts in one open-response field and does not force a false multi-select."
    },
    "hints": [
      "A related parallelogram has twice the triangle's area.",
      "Use the base and height visible in the diagram."
    ],
    "sampleAnswer": "Diego rearranges pieces of the triangle into a parallelogram, so the triangle's area matches that parallelogram. Jada uses two congruent copies to make a parallelogram, so the triangle is half of that parallelogram's area.",
    "implementationNotes": "Converted from multi-select to the source's open explanation format.",
    "source": "Cumulative Practice Problems/Grade6-1-8-Lesson-curated-practice-problem-set.pdf p.1"
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
    "skill": "Apply the triangle area formula",
    "activityForm": "numeric area",
    "prompt": "A shaded triangle has base 6 units and corresponding height 6 units. What is its area?",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "visualModelData": {
      "type": "triangleInRectangle",
      "base": 6,
      "height": 6
    },
    "reasoningPrompt": "Show or explain your reasoning.",
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
      "notes": "Preserves the source's single shaded-triangle area task and adds the source-requested reasoning field."
    },
    "hints": [
      "Use 1/2 × base × height.",
      "Half of 6 × 6 is half of 36."
    ],
    "sampleAnswer": "1/2 × 6 × 6 = 18 square units.",
    "implementationNotes": "Directly adapted from Lesson 9 cumulative practice, problem 4.",
    "source": "Cumulative Practice Problems/Grade6-1-9-Lesson-curated-practice-problem-set.pdf p.2"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-obtuse-triangle-height",
    "section": "C",
    "sectionName": "Triangles",
    "lesson": 10,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-10-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Describe corresponding heights",
    "activityForm": "open visual reasoning",
    "prompt": "For each triangle, a base is labeled b. Describe where to draw a line segment that shows its corresponding height.",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "triangleHeightThree"
    },
    "reasoningPrompt": "Describe the three height segments",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 3,
      "appActionTargets": 3,
      "unitOfAction": "one height description for each source triangle",
      "sourceObjects": [
        "three triangles with a base labeled b"
      ],
      "notes": "Restores the source's three-triangle draw/describe task instead of using an invented one-answer multiple-choice card."
    },
    "hints": [
      "A height must be perpendicular to the selected base.",
      "The segment may need to meet an extension of the base line."
    ],
    "sampleAnswer": "For each triangle, draw a segment from the opposite vertex perpendicular to the line containing base b. For an obtuse triangle, that perpendicular segment may land outside the triangle.",
    "implementationNotes": "Converted to the original Lesson 10 height-drawing action.",
    "source": "Cumulative Practice Problems/Grade6-1-10-Lesson-curated-practice-problem-set.pdf p.1"
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
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one missing-height answer for subproblem 5d",
      "sourceObjects": [
        "subproblem 5d triangle area and base"
      ],
      "notes": "Uses one source subproblem as one practice card and keeps the unknown-dimension action intact."
    },
    "hints": [
      "Area = 1/2 × base × height.",
      "1/2 × 8 is 4, so 4 × height = 32."
    ],
    "sampleAnswer": "32 = 1/2 × 8 × h, so 32 = 4h and h = 8 millimeters.",
    "implementationNotes": "Directly adapted from Lesson 13 cumulative practice, problem 5d.",
    "source": "Cumulative Practice Problems/Grade6-1-13-Lesson-curated-practice-problem-set.pdf p.3"
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
    "skill": "Find polygon area by decomposing",
    "activityForm": "polygon decomposition",
    "prompt": "A polygon is decomposed into a rectangle with area 8, one triangle with area 2, and one triangle with area 8. What is the total area?",
    "responseType": "number",
    "answerKey": [
      "18"
    ],
    "visualModelData": {
      "type": "polygonDecompose",
      "parts": [
        8,
        2,
        8
      ]
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes-with-locked-preview",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric polygon-area answer",
      "sourceObjects": [
        "family support polygon B decomposition"
      ],
      "notes": "The rendered source page includes solution text, so the source modal unlocks only after a correct auto-graded response."
    },
    "hints": [
      "The pieces do not overlap.",
      "Add the areas of all pieces."
    ],
    "sampleAnswer": "8 + 2 + 8 = 18 square units.",
    "implementationNotes": "Uses the Unit 1 family-support polygon decomposition example.",
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
    "skill": "Find polygon area by decomposing a pinwheel",
    "activityForm": "pinwheel area",
    "prompt": "Find the area of the shaded pinwheel region in square units.",
    "responseType": "number",
    "answerKey": [
      "40"
    ],
    "visualModelData": {
      "type": "pinwheelArea"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric area answer for the shaded pinwheel",
      "sourceObjects": [
        "one shaded pinwheel polygon on a square grid"
      ],
      "notes": "Replaces a source-mismatched outside-minus-inside card with the actual Lesson 11.4 pinwheel area task."
    },
    "hints": [
      "Try enclosing the figure in a rectangle and subtracting unshaded triangles.",
      "You can also decompose the pinwheel into triangles and rectangles."
    ],
    "sampleAnswer": "One way is to decompose or enclose the grid figure; the shaded area is 40 square units.",
    "implementationNotes": "Relinked to the Lesson 11.4 source page and preserved the pinwheel task.",
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
      "type": "surfaceAreaMeaning"
    },
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 4,
      "appActionTargets": 4,
      "unitOfAction": "one selected description from choices A-D",
      "sourceObjects": [
        "trunk photograph",
        "four surface-area/volume descriptions"
      ],
      "notes": "Preserves the four source answer choices and keeps the trunk context available through the source modal."
    },
    "hints": [
      "Surface area covers the outside faces.",
      "Cubic units measure volume, not surface area."
    ],
    "sampleAnswer": "Surface area is the amount of area covering all outside faces, measured in square units.",
    "implementationNotes": "Directly adapted from Lesson 12 cumulative practice, problem 2.",
    "source": "Cumulative Practice Problems/Grade6-1-12-Lesson-curated-practice-problem-set.pdf p.1"
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
    "skill": "Find surface area of a rectangular prism",
    "activityForm": "net calculation",
    "prompt": "A cereal box is 8 inches by 2 inches by 12 inches. What is its surface area?",
    "responseType": "number",
    "answerKey": [
      "272"
    ],
    "visualModelData": {
      "type": "rectPrismNet",
      "length": 8,
      "width": 2,
      "height": 12,
      "unit": "in"
    },
    "reasoningPrompt": "Show or explain your reasoning.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one numeric surface-area answer for the cereal box",
      "sourceObjects": [
        "rectangular prism dimensions 8 in by 2 in by 12 in"
      ],
      "notes": "Uses the source's cereal-box dimensions and asks for the same single surface-area calculation."
    },
    "hints": [
      "A rectangular prism has 3 pairs of equal faces.",
      "Add 2(8 × 2), 2(8 × 12), and 2(2 × 12)."
    ],
    "sampleAnswer": "2(8 × 2) + 2(8 × 12) + 2(2 × 12) = 32 + 192 + 48 = 272 square inches.",
    "implementationNotes": "Directly adapted from Lesson 15 cumulative practice, problem 2.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-net-error-analysis",
    "section": "E",
    "sectionName": "Surface Area",
    "lesson": 15,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-15-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Analyze a surface-area net",
    "activityForm": "open error analysis",
    "prompt": "Jada drew a net for a triangular prism and made mistakes in her area calculation. What were the mistakes?",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "triangularPrismError"
    },
    "reasoningPrompt": "Describe the mistakes",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one written error-analysis response",
      "sourceObjects": [
        "triangular-prism net with Jada's labeled face areas"
      ],
      "notes": "Uses the source's open question instead of converting the explanation into a forced multi-select."
    },
    "hints": [
      "A prism has two congruent bases.",
      "Surface area is measured in square units."
    ],
    "sampleAnswer": "The triangular faces must match, triangle area needs 1/2 × base × height, and only matching face pairs can be doubled.",
    "implementationNotes": "Converted to the Lesson 15 cumulative-practice open error-analysis task.",
    "source": "Cumulative Practice Problems/Grade6-1-15-Lesson-curated-practice-problem-set.pdf p.1"
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
    "skill": "Match a net to a polyhedron",
    "activityForm": "single choice net",
    "prompt": "The net has two congruent triangles and three rectangles. What polyhedron can it fold into?",
    "responseType": "singleChoice",
    "choices": [
      {
        "id": "triangularPrism",
        "label": "Triangular prism"
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
      "type": "triangularPrismNet"
    },
    "reasoningPrompt": "Explain how you know.",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one polyhedron identification for the source net",
      "sourceObjects": [
        "one net with two triangular faces and three rectangular faces"
      ],
      "notes": "Uses the single-net cumulative-practice source instead of the multi-net blackline matching page."
    },
    "hints": [
      "The two congruent triangles are the bases.",
      "The rectangles connect the matching triangle edges."
    ],
    "sampleAnswer": "It folds into a triangular prism.",
    "implementationNotes": "Preserves the Lesson 14 matching-net activity form.",
    "source": "Cumulative Practice Problems/Grade6-1-14-Lesson-curated-practice-problem-set.pdf p.1"
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
    "sampleAnswer": "Surface area of a tissue box: square centimeters. Soil in a planter box: cubic feet. Area of a parking lot: square meters. Length of a soccer field: yards. Volume of a fish tank: cubic inches.",
    "implementationNotes": "Directly adapted from Lesson 16 cumulative practice, problem 1.",
    "source": "Cumulative Practice Problems/Grade6-1-16-Lesson-curated-practice-problem-set.pdf p.1"
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
      "type": "surfaceVolumePrisms"
    },
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
      "notes": "Preserves the source's text-only select-all comparison task."
    },
    "hints": [
      "Volume counts cubic units inside.",
      "Surface area counts exposed square units outside."
    ],
    "sampleAnswer": "Both volumes are 6 cubic inches and both prisms have 6 faces. Prism A has surface area 22 and Prism B has surface area 26, so B has greater surface area.",
    "implementationNotes": "Directly adapted from Lesson 17 cumulative practice, problem 5.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.2"
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
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 8,
      "appActionTargets": 8,
      "unitOfAction": "each number in source problem 2a",
      "sourceObjects": [
        "eight candidate numbers for perfect-square classification"
      ],
      "notes": "Replaces the earlier invented intersection question with the source's perfect-square classification task."
    },
    "hints": [
      "A perfect square can be written as n × n.",
      "Check whether each number has a whole-number square root."
    ],
    "sampleAnswer": "16, 25, 100, 144, 225, and 10,000 are perfect squares because they can be written as a whole number times itself.",
    "implementationNotes": "Directly adapted from Lesson 17 cumulative practice, problem 2.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.1"
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
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 8,
      "appActionTargets": 8,
      "unitOfAction": "each number in source problem 3a",
      "sourceObjects": [
        "eight candidate numbers for perfect-cube classification"
      ],
      "notes": "Adds the source's separate perfect-cube classification task so square and cube reasoning are no longer collapsed."
    },
    "hints": [
      "A perfect cube can be written as n × n × n.",
      "Check whether each number has a whole-number cube root."
    ],
    "sampleAnswer": "1, 8, 27, 64, and 125 are perfect cubes because they can be written as a whole number multiplied by itself three times.",
    "implementationNotes": "Directly adapted from Lesson 17 cumulative practice, problem 3.",
    "source": "Cumulative Practice Problems/Grade6-1-17-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-cube-surface-area",
    "section": "F",
    "sectionName": "Squares and Cubes",
    "lesson": 18,
    "sourceType": "Cumulative Practice Problem",
    "sourceFolder": "Cumulative Practice Problems",
    "sourceFile": "Grade6-1-18-Lesson-curated-practice-problem-set.pdf",
    "sourcePage": 1,
    "previewPath": "_rendered-previews/Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set/page-001.png",
    "skill": "Write a cube surface-area expression",
    "activityForm": "open net reasoning",
    "prompt": "A cube has edge length x cm. What is the surface area of this cube? Explain using a net.",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "cubeSurface",
      "edge": "x"
    },
    "reasoningPrompt": "Your expression and reasoning",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 1,
      "appActionTargets": 1,
      "unitOfAction": "one surface-area expression for the cube net",
      "sourceObjects": [
        "cube net with six congruent square faces",
        "edge length x cm"
      ],
      "notes": "Replaces a made-up numeric edge length with the source's expression-based cube-net task."
    },
    "hints": [
      "A cube has 6 congruent square faces.",
      "Each square face has side length x."
    ],
    "sampleAnswer": "Each face has area x^2 square centimeters, and there are 6 faces, so the surface area is 6x^2 square centimeters.",
    "implementationNotes": "Converted to the Lesson 18 source expression task.",
    "source": "Cumulative Practice Problems/Grade6-1-18-Lesson-curated-practice-problem-set.pdf p.1"
  },
  {
    "unit": "unit1",
    "unitTitle": "Area and Surface Area",
    "topicMapping": "unit1",
    "readyForAutoGrade": false,
    "id": "u1-practice-tent-design-estimate",
    "section": "G",
    "sectionName": "Let's Put it to Work",
    "lesson": 19,
    "sourceType": "Student Task Statement",
    "sourceFolder": "Student Task Statements",
    "sourceFile": "Grade6-1-19-Lesson-student-task-statements.pdf",
    "sourcePage": 3,
    "previewPath": "_rendered-previews/Student Task Statements/Grade6-1-19-Lesson-student-task-statements/page-003.png",
    "skill": "Use surface-area reasoning in a design context",
    "activityForm": "open design estimate",
    "prompt": "Create and describe a tent design that includes a floor. What decisions were important when choosing your design?",
    "responseType": "open",
    "answerKey": [],
    "visualModelData": {
      "type": "tentDesign"
    },
    "reasoningPrompt": "Describe your design and choices",
    "visualRules": {
      "status": "passes",
      "sourceActionTargets": 2,
      "appActionTargets": 2,
      "unitOfAction": "one tent design description plus one explanation of design decisions",
      "sourceObjects": [
        "blank sketch space for tent design",
        "decision-reflection prompt"
      ],
      "notes": "Keeps the source task open-ended. The app supports written description in place of freehand sketching and keeps the rendered sketch page available."
    },
    "hints": [
      "List the floor, roof or side panels, and end panels.",
      "Name each panel shape before using its area formula."
    ],
    "sampleAnswer": "A strong response describes a tent with a floor, names the major panels or faces, and explains design choices such as shape, size, stability, and fabric needed.",
    "implementationNotes": "Lesson 19 is open-ended, so this card provides a structured response and sample rather than auto-grading.",
    "source": "Student Task Statements/Grade6-1-19-Lesson-student-task-statements.pdf p.3"
  }
];
