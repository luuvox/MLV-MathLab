const state = {
  view: "unit1",
  mode: "teach",
  teachResponses: {},
  teachReasoning: {},
  teachSelections: {},
  teachSubmitted: {},
  teachHints: {},
  teachActiveParts: {},
  teachVariants: {},
  teachCustomResponses: {},
  teachOpenDropdown: null,
  teachTangramPieces: null,
  teachTangramSelectedPiece: "square",
  teachTrianglePairActive: "P",
  teachTrianglePairPieces: null,
  teachTrianglePairSelectedPiece: "copy-a",
  teachQuadrilateralActive: "A",
  teachQuadrilateralStartVertex: null,
  teachTriangleHeightStartPoint: null,
  areaIdea: "compare",
  parallelogramBase: 8,
  parallelogramHeight: 4,
  parallelogramSlant: 3,
  triangleMode: "pair",
  polygonStrategy: "rectangles",
  prismLength: 5,
  prismWidth: 3,
  prismHeight: 2,
  cubeEdge: 3,
  tentFocus: "roof",
  vocabularySearch: "",
  practiceFilter: "all",
  practiceResponses: {},
  practiceReasoning: {},
  practiceSelections: {},
  practiceSubmitted: {},
  practiceHints: {},
  practiceSamples: {},
  sourceModalItemId: null,
  sourceModalLayout: null,
};

let sourceModalPointer = null;
let tangramPointer = null;
let trianglePairPointer = null;

const sourceModalBounds = {
  minWidth: 360,
  minHeight: 300,
  edgeGap: 12,
};

const viewTitles = {
  unit1: "Unit 1: Area and Surface Area",
  vocabulary: "Vocabulary",
};

const practiceBank = window.unit1PracticeBank || [];

const areaIdeaScenes = {
  compare: {
    equation: "Compare area with one same-size unit, not raw piece count.",
    message: "Lesson 1: four triangles, three rhombuses, and two trapezoids are different raw counts. Converting each shape to triangle units shows which areas match.",
    render: renderAreaCompareModel,
  },
  rearrange: {
    equation: "4 small triangles = 2 square units, even after rearranging.",
    message: "Lesson 2: the same four congruent triangles can be two unit squares or one larger triangle, so moving pieces does not change the total area.",
    render: renderAreaRearrangeModel,
  },
  strategies: {
    equation: "Area can be found by decomposing, rearranging, or enclosing and subtracting.",
    message: "Lesson 3: a grid helps you justify area without counting every square. Different valid strategies preserve the same region and units.",
    render: renderAreaStrategiesModel,
  },
};

function unit1TeachSource(ideaNumber, lessonNumber, title, subtitle, options = {}) {
  const paddedLesson = String(lessonNumber).padStart(2, "0");
  return {
    id: `teach-u1-idea${ideaNumber}-l${lessonNumber}`,
    ideaId: `idea${ideaNumber}`,
    lessonNumber,
    label: `Lesson ${lessonNumber} source`,
    title: `Lesson ${lessonNumber}: ${title}`,
    subtitle,
    previewPath: `artifacts/unit 1/_public-reference-renders/lesson-${paddedLesson}.png`,
    alt: `Rendered source material for Grade 6 Unit 1 Lesson ${lessonNumber}`,
    ...options,
  };
}

function unit1BlacklineMaster(activityAddress, title, slug, page, subtitle, alt, options = {}) {
  return {
    activityAddress,
    title,
    page,
    previewPath: `artifacts/unit 1/_rendered-previews/Blackline Masters/${slug}/page-${pagePad(page)}.png`,
    subtitle,
    alt,
    ...options,
  };
}

function unit1BlacklineMasterPages(activityAddress, title, slug, pages, subtitle, altPrefix, labels = {}) {
  return pages.map((page) => unit1BlacklineMaster(
    activityAddress,
    title,
    slug,
    page,
    subtitle,
    `${altPrefix} page ${page}.`,
    labels[page] ? { buttonLabel: labels[page] } : {}
  ));
}

const lesson2TangramBlacklineMaster = unit1BlacklineMaster(
  "Grade6.1.2.2",
  "Composing Shapes",
  "Grade6-1-A2-2-composing-shapes-composing-shapes",
  1,
  "Rendered Blackline Master page for the Lesson 2 tangram pieces.",
  "Blackline Master page showing the tangram pieces for Lesson 2 Composing Shapes."
);

const unit1BlacklineMasters = {
  comparingRegions: [
    unit1BlacklineMaster(
      "Grade6.1.3.1",
      "Comparing Regions",
      "Grade6-1-A3-1-comparing-regions-comparing-regions",
      1,
      "Rendered Blackline Master page for cutting or comparing the Lesson 3 regions.",
      "Blackline Master page showing duplicate Figure A and Figure B regions for Lesson 3 Comparing Regions."
    ),
  ],
  trianglePairs: unit1BlacklineMasterPages(
    "Grade6.1.7.3",
    "A Tale of Two Triangles (Part 2)",
    "Grade6-1-C7-3-a-tale-of-two-triangles-part-2-a-tale-of-two-triangles-part-2",
    [1],
    "Rendered student-cut Blackline Master page for the Lesson 7 triangle-pair materials.",
    "Blackline Master page showing triangle-pair cutouts for Lesson 7"
  ),
  decomposingParallelogram: [
    unit1BlacklineMaster(
      "Grade6.1.8.3",
      "Decomposing a Parallelogram",
      "Grade6-1-C8-3-decomposing-a-parallelogram-decomposing-a-parallelogram",
      1,
      "Rendered Blackline Master page for the Lesson 8 assigned parallelograms A-D.",
      "Blackline Master page showing the assigned parallelograms A through D with measurements and cut lines."
    ),
  ],
  pinwheel: [
    unit1BlacklineMaster(
      "Grade6.1.11.4",
      "Pinwheel",
      "Grade6-1-D11-4-pinwheel-pinwheel",
      1,
      "Rendered Blackline Master page for the Lesson 11 pinwheel area display.",
      "Blackline Master page showing the pinwheel polygon on a grid."
    ),
  ],
  whatArePolyhedra: unit1BlacklineMasterPages(
    "Grade6.1.13.1",
    "What are Polyhedra?",
    "Grade6-1-E13-1-what-are-polyhedra-what-are-polyhedra",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Rendered Blackline Master pages for the Lesson 13 polyhedra examples and nets.",
    "Blackline Master page showing polyhedra example net"
  ),
  prismsPyramids: unit1BlacklineMasterPages(
    "Grade6.1.13.2",
    "Prisms and Pyramids",
    "Grade6-1-E13-2-prisms-and-pyramids-prisms-and-pyramids",
    [1, 2, 3, 4],
    "Rendered Blackline Master pages for the Lesson 13 prism, pyramid, and polygon-net materials.",
    "Blackline Master page showing prism and pyramid materials for Lesson 13"
  ),
  assemblingPolyhedra: unit1BlacklineMasterPages(
    "Grade6.1.13.3",
    "Assembling Polyhedra",
    "Grade6-1-E13-3-assembling-polyhedra-assembling-polyhedra",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    "Rendered Blackline Master pages for the Lesson 13 assembled-polyhedra net set.",
    "Blackline Master page showing an assembling-polyhedra net"
  ),
  assemblingPolyhedraNetA: [
    unit1BlacklineMaster(
      "Grade6.1.13.3",
      "Assembling Polyhedra",
      "Grade6-1-E13-3-assembling-polyhedra-assembling-polyhedra",
      1,
      "Rendered Blackline Master page for the assigned Lesson 13 Net A.",
      "Blackline Master page showing assigned Net A for Lesson 13 Assembling Polyhedra."
    ),
  ],
  matchingNets: [
    unit1BlacklineMaster(
      "Grade6.1.14.1",
      "Matching Nets",
      "Grade6-1-E14-1-matching-nets-matching-nets",
      1,
      "Rendered Blackline Master page for matching nets to polyhedra in Lesson 14.",
      "Blackline Master page showing nets A-E and polyhedra 1-5 for matching."
    ),
  ],
  surfaceAreaNets: unit1BlacklineMasterPages(
    "Grade6.1.14.2",
    "Using Nets to Find Surface Area",
    "Grade6-1-E14-2-using-nets-to-find-surface-area-using-nets-to-find-surface-area",
    [1, 2, 3],
    "Rendered Blackline Master pages for the Lesson 14 surface-area nets.",
    "Blackline Master page showing a gridded net for Lesson 14"
  ),
  buildingPrismsPyramids: unit1BlacklineMasterPages(
    "Grade6.1.15.2",
    "Building Prisms and Pyramids",
    "Grade6-1-E15-2-building-prisms-and-pyramids-building-prisms-and-pyramids",
    [1, 2],
    "Rendered Blackline Master pages for the Lesson 15 assigned polyhedron drawings.",
    "Blackline Master page showing assigned polyhedra for Lesson 15"
  ),
  buildingPrismsPyramidsPage1: [
    unit1BlacklineMaster(
      "Grade6.1.15.2",
      "Building Prisms and Pyramids",
      "Grade6-1-E15-2-building-prisms-and-pyramids-building-prisms-and-pyramids",
      1,
      "Rendered Blackline Master page containing assigned Polyhedron C.",
      "Blackline Master page showing polyhedra A through E for Lesson 15."
    ),
  ],
  tentPlanning: [
    unit1BlacklineMaster(
      "Grade6.1.19.1",
      "Tent Design - Part 1",
      "Grade6-1-G19-1-tent-design-part-1-tent-design-part-1",
      1,
      "Rendered Blackline Master planning sheet for the Lesson 19 tent design.",
      "Blackline Master page showing the tent design planning sheet."
    ),
  ],
};

const teachMeSources = [
  unit1TeachSource(1, 1, "Tiling the Plane", "Original source for comparing tiling patterns and common area units.", {
    activeStateKey: "areaIdea",
    activeStateValues: ["compare"],
  }),
  unit1TeachSource(1, 2, "Finding Area by Decomposing and Rearranging", "Original source for composing, decomposing, and rearranging area pieces.", {
    activeStateKey: "areaIdea",
    activeStateValues: ["rearrange"],
  }),
  unit1TeachSource(1, 3, "Reasoning to Find Area", "Original source for grid and off-grid area strategies.", {
    activeStateKey: "areaIdea",
    activeStateValues: ["strategies"],
  }),
  unit1TeachSource(2, 4, "Parallelograms", "Original source for identifying and reasoning about parallelograms."),
  unit1TeachSource(2, 5, "Bases and Heights of Parallelograms", "Original source for base-height relationships in parallelograms.", {
    isPrimary: true,
  }),
  unit1TeachSource(2, 6, "Area of Parallelograms", "Original source for connecting parallelogram area to base times height."),
  unit1TeachSource(3, 7, "From Parallelograms to Triangles", "Original source for composing triangles into related parallelograms.", {
    activeStateKey: "triangleMode",
    activeStateValues: ["pair"],
  }),
  unit1TeachSource(3, 8, "Area of Triangles", "Original source for triangle area reasoning."),
  unit1TeachSource(3, 9, "Formula for the Area of a Triangle", "Original source for the triangle area formula.", {
    activeStateKey: "triangleMode",
    activeStateValues: ["formula"],
  }),
  unit1TeachSource(3, 10, "Bases and Heights of Triangles", "Original source for perpendicular heights in triangles.", {
    activeStateKey: "triangleMode",
    activeStateValues: ["height"],
  }),
  unit1TeachSource(4, 11, "Polygons", "Original source for decomposing polygons into known shapes.", {
    isPrimary: true,
  }),
  unit1TeachSource(5, 12, "What is Surface Area?", "Original source for defining surface area as the sum of face areas."),
  unit1TeachSource(5, 13, "Polyhedra", "Original source for faces, edges, vertices, prisms, and pyramids."),
  unit1TeachSource(5, 14, "Nets and Surface Area", "Original source for using nets to account for every face.", {
    isPrimary: true,
  }),
  unit1TeachSource(5, 15, "More Nets, More Surface Area", "Original source for additional net and surface-area reasoning."),
  unit1TeachSource(6, 16, "Distinguishing Between Surface Area and Volume", "Original source for contrasting surface area and volume."),
  unit1TeachSource(6, 17, "Squares and Cubes", "Original source for squared, cubed, and cube measures.", {
    isPrimary: true,
  }),
  unit1TeachSource(6, 18, "Surface Area of a Cube", "Original source for cube surface area."),
  unit1TeachSource(7, 19, "Designing a Tent", "Original source for the tent design application task.", {
    isPrimary: true,
  }),
];

const unit1TeachCards = [
  {
    id: "teach-l1",
    lessonNumber: 1,
    section: "A",
    idea: "Idea 1",
    title: "Tiling the Plane",
    activityTitle: "1.1: Which One Doesn't Belong: Tilings",
    sourceDirections: "Which pattern doesn't belong?",
    pdfPage: 1,
    cropPath: "lesson-01-p001-tilings.png",
    visualAlt: "Four source tiling patterns labeled A through D.",
    prompt: "Which pattern is the clearest example of not covering the plane cleanly with a repeating tiling?",
    responseType: "singleChoice",
    choices: [
      { id: "A", label: "A" },
      { id: "B", label: "B" },
      { id: "C", label: "C" },
      { id: "D", label: "D" },
    ],
    answerKey: ["D"],
    hint: "A tiling covers the plane without gaps or overlaps. Look for the pattern where the pieces stop behaving like a regular cover.",
    correctFeedback: "Yes. Pattern D is a clear choice because the pieces leave gaps and do not make the same kind of regular plane-covering pattern as the others.",
    incorrectFeedback: "Not quite for this check. A, B, and C still show regular plane-covering patterns. Pattern D breaks that clean tiling behavior.",
  },
  {
    id: "teach-l1-2",
    lessonNumber: 1,
    section: "A",
    idea: "Idea 1",
    title: "Tiling the Plane",
    activityTitle: "1.2: More Red, Green, or Blue?",
    sourceContext: "Choose one pattern to examine.",
    sourceDirections: "In your selected pattern, which shapes cover more of the plane: blue rhombuses, red trapezoids, or green triangles? Explain how you know.",
    pdfPage: 2,
    cropPath: "lesson-01-p002-pattern-a-b.png",
    visualAlt: "Source tiling patterns A and B made from blue rhombuses, red trapezoids, and green triangles.",
    variantPrompt: "Choose your pattern.",
    variants: [
      {
        id: "pattern-a",
        label: "Pattern A",
        answerKey: ["red-trapezoids"],
        hint: "For Pattern A, compare areas, not just piece counts. Two green triangles match one blue rhombus, and three green triangles match one red trapezoid.",
        correctFeedback: "Correct for Pattern A. The red trapezoids cover the most area: one repeated hexagon has 3 trapezoids, 4 rhombuses, and 7 triangles, which compare as 9, 8, and 7 triangle units.",
        incorrectFeedback: "Not quite for Pattern A. Counting pieces alone can mislead you. Compare everything in triangle units: red trapezoids cover the most area.",
      },
      {
        id: "pattern-b",
        label: "Pattern B",
        answerKey: ["red-trapezoids"],
        hint: "For Pattern B, focus on a repeated hexagon in the tiling. The arrangement changes, but the triangle-rhombus-trapezoid area relationships stay the same.",
        correctFeedback: "Correct for Pattern B. The red trapezoids cover the most area because 3 trapezoids match 9 triangle units, while 4 rhombuses match 8 triangle units and 7 triangles match 7 triangle units.",
        incorrectFeedback: "Not quite for Pattern B. The arrangement is different from Pattern A, but the area comparison is the same: red trapezoids cover the most area.",
      },
    ],
    prompt: "Which shape type covers more area in your selected pattern?",
    responseType: "singleChoice",
    choices: [
      { id: "blue-rhombuses", label: "Blue rhombuses" },
      { id: "red-trapezoids", label: "Red trapezoids" },
      { id: "green-triangles", label: "Green triangles" },
    ],
    reasoningPrompt: "Explain your reasoning.",
    hint: "Do not compare only the number of pieces. Convert each shape to the same area unit: two green triangles match one blue rhombus, and three green triangles match one red trapezoid.",
    correctFeedback: "Correct. The red trapezoids cover the most area.",
    incorrectFeedback: "Not quite. Counting pieces alone is misleading because the pieces have different areas.",
  },
  {
    id: "teach-l2",
    lessonNumber: 2,
    section: "A",
    idea: "Idea 1",
    title: "Finding Area by Decomposing and Rearranging",
    pdfPage: 1,
    cropPath: "lesson-02-p001-area-grids.png",
    visualAlt: "Four grid-based shapes from the Student Task Statements.",
    prompt: "Which statement best matches the lesson meaning of area?",
    responseType: "singleChoice",
    choices: [
      { id: "same-units", label: "Area is the amount of flat space covered, measured with same-size units without gaps or overlaps." },
      { id: "outside", label: "Area is the distance around the outside of a figure." },
      { id: "count-lines", label: "Area is the number of grid lines a figure touches." },
      { id: "shape-name", label: "Area depends only on the name of the shape." },
    ],
    answerKey: ["same-units"],
    hint: "The source page asks you to explain area using squares inside a two-dimensional shape.",
    correctFeedback: "Correct. The lesson builds area from same-size units that cover the region, even when a shape is decomposed or rearranged.",
    incorrectFeedback: "Try again. Area measures flat space inside a region; it is not perimeter, line count, or shape name.",
  },
  {
    id: "teach-l3",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    pdfPage: 1,
    cropPath: "lesson-03-p001-region-grid-area.png",
    visualAlt: "Source figures comparing a square region with a shaded region that has a missing square and an attached square.",
    sourceContext: "The source provides a Blackline Master copy for students who cut or physically compare the two regions.",
    prompt: "In Figure B, one square is removed from inside and an equal square is attached outside. How does its shaded area compare with Figure A?",
    blacklineMasters: unit1BlacklineMasters.comparingRegions,
    responseType: "singleChoice",
    choices: [
      { id: "greater", label: "Figure B has greater shaded area." },
      { id: "less", label: "Figure B has less shaded area." },
      { id: "equal", label: "The shaded areas are equal." },
    ],
    answerKey: ["equal"],
    hint: "Track the square unit that moved. A moved piece changes location, but not amount of area.",
    correctFeedback: "Correct. The hole and the attached square are the same size, so the shaded area in B stays equal to Figure A.",
    incorrectFeedback: "Look at the moved square. Removing one square unit and attaching one equal square unit keeps the shaded area the same.",
  },
  {
    id: "teach-l4",
    lessonNumber: 4,
    section: "B",
    idea: "Idea 2",
    title: "Parallelograms",
    pdfPage: 1,
    cropPath: "lesson-04-p001-parallelogram-examples.png",
    visualAlt: "Source examples and non-examples of parallelograms on a grid.",
    prompt: "Which property explains why A, B, and C are parallelograms but D, E, and F are not?",
    responseType: "singleChoice",
    choices: [
      { id: "opposite-parallel", label: "They have two pairs of opposite sides that are parallel." },
      { id: "right-angles", label: "They must have four right angles." },
      { id: "six-sides", label: "They must have six sides." },
      { id: "same-length", label: "All sides must be the same length." },
    ],
    answerKey: ["opposite-parallel"],
    hint: "Compare opposite sides, not just the slant or the size.",
    correctFeedback: "Correct. A parallelogram is a quadrilateral with two pairs of opposite parallel sides.",
    incorrectFeedback: "Not quite. Rectangles are parallelograms, but not every parallelogram has right angles or all sides equal. The key feature is parallel opposite sides.",
  },
  {
    id: "teach-l5",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    pdfPage: 3,
    cropPath: "lesson-05-p003-bases-heights.png",
    visualAlt: "Five source parallelograms labeled A through E with bases and heights.",
    prompt: "Select every drawing that correctly labels a base b and a corresponding height h.",
    responseType: "multiSelect",
    choices: [
      { id: "A", label: "A" },
      { id: "B", label: "B" },
      { id: "C", label: "C" },
      { id: "D", label: "D" },
      { id: "E", label: "E" },
    ],
    answerKey: ["A", "C", "D"],
    hint: "The height must be perpendicular to the chosen base or to a line extending that base.",
    correctFeedback: "Correct. A, C, and D pair a base with a perpendicular height. C also shows that the height can be drawn outside the parallelogram.",
    incorrectFeedback: "Check for a right angle between b and h. B and E use a segment that is not perpendicular to the chosen base.",
  },
  {
    id: "teach-l6",
    lessonNumber: 6,
    section: "B",
    idea: "Idea 2",
    title: "Area of Parallelograms",
    activityTitle: "6.2: Area of Parallelograms",
    sourceContext: "The source activity uses an applet where students calculate area, show the area to check, and change the parallelogram.",
    sourceDirections: "Change the parallelogram, calculate its area, and use Show Area to verify your calculation.",
    pdfPage: 1,
    cropPath: null,
    visualAlt: "Interactive parallelogram area model with adjustable base, height, and slant.",
    customVisual: "parallelogramExplore",
    defaultParallelogram: { base: 10, height: 6, slant: 3 },
    prompt: "Build a parallelogram you like, then calculate its area from the base and corresponding height.",
    responseType: "parallelogramExplore",
    responsePrompt: "Record the area of the current parallelogram in square units.",
    hint: "The slanted side changes the shape, but the area uses the base and perpendicular height.",
    correctFeedback: "Correct. A parallelogram's area is base times corresponding height, and Show Area confirms the product for the figure you built.",
    incorrectFeedback: "Recheck the base and perpendicular height shown in the model. Multiply those two measurements; the slant is not the height.",
  },
  {
    id: "teach-l7",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    pdfPage: 1,
    cropPath: "lesson-07-p001-same-parallelograms.png",
    visualAlt: "Two source parallelograms with different chosen bases and heights.",
    prompt: "The left parallelogram has base 2.4 cm and height 1 cm. The right parallelogram has the same area and height 2 cm. What is its base length?",
    responseType: "number",
    answerKey: ["1.2", "6/5"],
    hint: "First find the shared area, then divide by the right parallelogram's height.",
    correctFeedback: "Correct. The shared area is 2.4 square centimeters, and 2.4 ÷ 2 = 1.2 cm.",
    incorrectFeedback: "The two parallelograms have the same area. Use 2.4 × 1 = 2.4, then find the base that makes base × 2 = 2.4.",
  },
  {
    id: "teach-l8",
    lessonNumber: 8,
    section: "C",
    idea: "Idea 3",
    title: "Area of Triangles",
    pdfPage: 1,
    cropPath: "lesson-08-p001-composing-parallelograms.png",
    visualAlt: "Source diagrams composing a triangle and its copy into parallelograms.",
    prompt: "When Triangle M and an identical copy compose each parallelogram, how does a composed parallelogram's area compare with Triangle M?",
    responseType: "singleChoice",
    choices: [
      { id: "same", label: "It has the same area as Triangle M." },
      { id: "twice", label: "It has twice the area of Triangle M." },
      { id: "half", label: "It has half the area of Triangle M." },
    ],
    answerKey: ["twice"],
    hint: "Each parallelogram is made from Triangle M plus one congruent copy.",
    correctFeedback: "Correct. Two congruent triangles compose the parallelogram, so one triangle is half of the parallelogram.",
    incorrectFeedback: "Count the copies. The parallelogram is made of Triangle M and one identical triangle, so its area is twice Triangle M's area.",
  },
  {
    id: "teach-l9",
    lessonNumber: 9,
    section: "C",
    idea: "Idea 3",
    title: "Formula for the Area of a Triangle",
    pdfPage: 2,
    cropPath: "lesson-09-p002-triangle-formula.png",
    visualAlt: "Source triangle formula page with triangles on grids and a table for base, height, and area.",
    prompt: "Which expression gives the area of any triangle with base b and corresponding height h?",
    responseType: "singleChoice",
    choices: [
      { id: "bh", label: "b × h" },
      { id: "half-bh", label: "1/2 × b × h" },
      { id: "b-plus-h", label: "b + h" },
      { id: "two-bh", label: "2 × b × h" },
    ],
    answerKey: ["half-bh"],
    hint: "A triangle is half of a related parallelogram with the same base and height.",
    correctFeedback: "Correct. The related parallelogram has area b × h, and the triangle is half of it.",
    incorrectFeedback: "Use the related parallelogram idea: the triangle's area is half of b × h.",
  },
  {
    id: "teach-l10",
    lessonNumber: 10,
    section: "C",
    idea: "Idea 3",
    title: "Bases and Heights of Triangles",
    activityTitle: "10.2: Hunting for Heights",
    sourceContext: "The source asks students to use an index-card right angle to draw triangle heights. The app recreates that marking step with point-to-point height segments.",
    sourceDirections: "Draw a height that corresponds to each chosen base.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "triangleHeights",
    visualAlt: "Source triangle diagrams for drawing heights to chosen bases.",
    prompt: "Click the opposite vertex and the matching point on the base line to draw each height, then explain what all correct heights have in common.",
    responseType: "triangleHeightMarks",
    hint: "A height is perpendicular to the base line and reaches the opposite vertex. Sometimes the base line has to be extended.",
    correctFeedback: "Correct. Each marked height is perpendicular to the chosen base line and connects that line to the opposite vertex. Some heights land outside the triangle because the base line has to be extended.",
    incorrectFeedback: "Recheck each mark. The height must meet the base line at a right angle and reach the opposite vertex; for obtuse triangles, the foot of the height may be outside the triangle.",
  },
  {
    id: "teach-l11",
    lessonNumber: 11,
    section: "D",
    idea: "Idea 4",
    title: "Polygons",
    pdfPage: 2,
    cropPath: "lesson-11-p002-polygons.png",
    visualAlt: "Source examples and non-examples of polygons with figures A through J.",
    prompt: "Which description matches the figures that are polygons?",
    responseType: "singleChoice",
    choices: [
      { id: "closed-straight", label: "Closed, flat figures made only of straight segments that meet end to end." },
      { id: "curved-ok", label: "Any closed figure, including ones with curves." },
      { id: "three-d", label: "Any drawing that looks three-dimensional." },
      { id: "open-ok", label: "Any figure made from straight segments, even if it is open." },
    ],
    answerKey: ["closed-straight"],
    hint: "Look at the source examples and non-examples: curves, openings, crossings, and extra segments matter.",
    correctFeedback: "Correct. Polygons are closed two-dimensional figures made of straight line segments.",
    incorrectFeedback: "Try again. A polygon must be closed and made only of straight line segments, with the segments meeting end to end.",
  },
  {
    id: "teach-l12",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.3: Building Prisms",
    sourceContext: "The source uses 12 snap cubes or a digital hidden-stack applet. The app recreates the build by letting students choose a 12-cube prism and then reason from the rendered solid.",
    sourceDirections: "Use all 12 cubes to build a different rectangular prism, then find its faces and surface area.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "prismBuilder",
    visualAlt: "Interactive rectangular-prism builder using 12 unit cubes.",
    prompt: "Build a different 12-cube rectangular prism than the source example, then find its faces and surface area.",
    responseType: "prismBuild",
    builderMode: "single12",
    hint: "The source prism has dimensions 3 by 2 by 2. Choose a different factor triple with product 12, then add the areas of all 6 outside faces.",
    correctFeedback: "Correct. Your selected dimensions use 12 cubes, form a different rectangular prism, and the surface area matches the sum of all 6 faces.",
    incorrectFeedback: "Check that your prism uses exactly 12 cubes, is different from the 3 by 2 by 2 source prism, and that your surface area counts all outside faces.",
  },
  {
    id: "teach-l13",
    lessonNumber: 13,
    section: "E",
    idea: "Idea 5",
    title: "Polyhedra",
    pdfPage: 1,
    cropPath: "lesson-13-p001-polyhedra-sort.png",
    visualAlt: "Source pictures of polyhedra and non-polyhedra.",
    sourceContext: "The source notes that teachers may use Blackline Master nets to make physical models, but the app uses the student-facing sort pictures and does not expose teacher-prep net pages.",
    prompt: "Which features should you use when sorting objects into polyhedra and non-polyhedra?",
    responseType: "multiSelect",
    reasoningPrompt: "Describe how the top row and bottom row differ.",
    choices: [
      { id: "flat-polygon-faces", label: "It is made only of flat polygon faces." },
      { id: "straight-edges", label: "Its faces meet along straight edges." },
      { id: "encloses-region", label: "The faces enclose a three-dimensional region." },
      { id: "curved-surfaces", label: "It has curved surfaces." },
      { id: "open-top", label: "It has an opening like a box without a lid." },
    ],
    answerKey: ["flat-polygon-faces", "straight-edges", "encloses-region"],
    hint: "Look for solid 3D figures with flat polygon faces, straight edges, and no openings or curved surfaces.",
    correctFeedback: "Correct. Polyhedra are closed 3D figures made from flat polygon faces; spheres, cylinders, curved surfaces, and open boxes do not fit.",
    incorrectFeedback: "Sort by surface type and whether the figure is closed: a polyhedron is enclosed by flat polygon faces that meet along straight edges.",
  },
  {
    id: "teach-l14",
    lessonNumber: 14,
    section: "E",
    idea: "Idea 5",
    title: "Nets and Surface Area",
    pdfPage: 1,
    cropPath: "lesson-14-p001-net-matching.png",
    visualAlt: "Source nets and solids for matching nets to polyhedra.",
    sourceContext: "The source offers the Matching Nets Blackline Master as cutout support for testing the same net-to-solid matches.",
    blacklineMasters: unit1BlacklineMasters.matchingNets,
    prompt: "Which full matching pairs every net with its corresponding polyhedron?",
    responseType: "singleChoice",
    choices: [
      { id: "correct", label: "A-4, B-2, C-3, D-5, E-1" },
      { id: "swap-prisms", label: "A-4, B-5, C-3, D-2, E-1" },
      { id: "swap-pyramids", label: "A-3, B-2, C-4, D-5, E-1" },
      { id: "cube-b", label: "A-4, B-1, C-3, D-5, E-2" },
    ],
    answerKey: ["correct"],
    reasoningPrompt: "Name one clue you used to match a net to a solid.",
    hint: "Match the face shapes first: square-pyramid nets have one square and four triangles; triangular-prism nets have rectangles and two triangles; a cube net has six squares.",
    correctFeedback: "Correct. The source match is A-4, B-2, C-3, D-5, and E-1.",
    incorrectFeedback: "Check the faces in each net against the visible faces of each solid. Net E has six squares, and Net D has two triangles plus rectangles.",
  },
  {
    id: "teach-l15",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    pdfPage: 2,
    cropPath: "lesson-15-p002-box-nets.png",
    visualAlt: "Source net diagrams for three cardboard boxes.",
    prompt: "To decide which box uses the least cardboard, what measurement should you compare?",
    responseType: "singleChoice",
    choices: [
      { id: "surface-area", label: "The total area of all outside faces." },
      { id: "volume", label: "The volume inside each box." },
      { id: "height-only", label: "Only the height of each box." },
      { id: "longest-edge", label: "Only the longest edge in each net." },
    ],
    answerKey: ["surface-area"],
    hint: "Cardboard covers the outside faces of the box.",
    correctFeedback: "Correct. Cardboard needed is a surface-area question: add the areas of all outside faces.",
    incorrectFeedback: "For cardboard, compare surface area. Volume answers how much the box holds, which is a different measure.",
  },
  {
    id: "teach-l16",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    pdfPage: 1,
    cropPath: null,
    visualAlt: "Source list of quantities and measurement units for surface area and volume.",
    prompt: "A refrigerator's surface area should be measured with which kind of unit?",
    responseType: "singleChoice",
    choices: [
      { id: "square-feet", label: "Square feet" },
      { id: "cubic-feet", label: "Cubic feet" },
      { id: "feet", label: "Feet" },
      { id: "meters", label: "Meters" },
    ],
    answerKey: ["square-feet"],
    hint: "Surface area is two-dimensional, so its units are squared.",
    correctFeedback: "Correct. Surface area is measured in square units, and square feet is a reasonable unit for a refrigerator.",
    incorrectFeedback: "Surface area measures outside faces, so it needs square units. Cubic units measure volume.",
  },
  {
    id: "teach-l17",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    pdfPage: 1,
    cropPath: "lesson-17-p001-perfect-squares-cubes.png",
    visualAlt: "Source perfect square and cube tasks.",
    prompt: "A square has side length 7. What is its area?",
    responseType: "number",
    answerKey: ["49"],
    hint: "A square's area is side length times itself.",
    correctFeedback: "Correct. 7 × 7 = 49, so the area is 49 square units.",
    incorrectFeedback: "For a square, multiply the side length by itself: 7 × 7.",
  },
  {
    id: "teach-l18",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    pdfPage: 1,
    cropPath: null,
    visualAlt: "Source exponent review and cube net task for a cube with edge length 5 inches.",
    prompt: "A cube has edge length 5 inches. What is its surface area?",
    responseType: "number",
    answerKey: ["150"],
    hint: "Each face is a 5 by 5 square, and a cube has 6 faces.",
    correctFeedback: "Correct. Each face has area 25 square inches, and 6 × 25 = 150 square inches.",
    incorrectFeedback: "Find one face first: 5 × 5 = 25. Then count all 6 faces of the cube.",
  },
  {
    id: "teach-l19",
    lessonNumber: 19,
    section: "G",
    idea: "Idea 7",
    title: "Designing a Tent",
    pdfPage: 2,
    pdfPages: [1, 2, 3],
    cropPath: "lesson-19-p002-tent-specs.png",
    visualAlt: "Source tent height specifications and sleeping bag measurements.",
    sourceContext: "The source design work uses the Blackline Master planning sheet after students review tent examples, height specifications, and sleeping bag measurements.",
    blacklineMasters: unit1BlacklineMasters.tentPlanning,
    prompt: "Create a tent design for up to four people and estimate the fabric needed, using the source specifications.",
    responseType: "guidedFields",
    guidedOpenEnded: true,
    guidedFields: [
      {
        id: "people",
        label: "How many people can sleep in your tent?",
        type: "singleChoice",
        choices: [
          { id: "1", label: "1" },
          { id: "2", label: "2" },
          { id: "3", label: "3" },
          { id: "4", label: "4" },
        ],
      },
      {
        id: "height",
        label: "Tent height category",
        type: "singleChoice",
        choices: [
          { id: "sitting", label: "Sitting, 3 ft" },
          { id: "kneeling", label: "Kneeling, 4 ft" },
          { id: "stooping", label: "Stooping, 5 ft" },
          { id: "standing", label: "Standing, 6 ft" },
          { id: "roaming", label: "Roaming, 7 ft" },
        ],
      },
      { id: "designSketch", label: "Describe or sketch the bottom panel and sleeping-bag locations.", type: "textarea" },
      { id: "overallDesign", label: "Describe the overall tent shape and dimensions you chose.", type: "textarea" },
      { id: "fabricEstimate", label: "Fabric estimate", type: "text", placeholder: "Estimate in square feet" },
      { id: "justification", label: "Mathematical justification for the estimate", type: "textarea" },
    ],
    hint: "Use sleeping-bag space, height category, and all outside surfaces, including the floor. A net or face-by-face list can keep the fabric estimate organized.",
    correctFeedback: "Design saved. A strong source-faithful plan states who the tent fits, includes a floor, records design decisions, and justifies the fabric estimate with surface-area reasoning.",
    incorrectFeedback: "Add the missing design details: capacity, height, floor/sleeping-bag layout, overall shape, fabric estimate, and surface-area justification.",
  },
];

const teachCardEnhancements = {
  "teach-l2": {
    activityTitle: "2.1: What is Area?",
    sourceDirections: "Which drawing shows the amount of squares inside a two-dimensional shape?",
  },
  "teach-l3": {
    activityTitle: "3.1: Comparing Regions",
    sourceDirections: "Compare the area of Figure A with the shaded region in Figure B.",
  },
  "teach-l4": {
    activityTitle: "4.1: Features of a Parallelogram",
    sourceDirections: "Study the examples and non-examples. What do you notice?",
  },
  "teach-l5": {
    activityTitle: "5.2: The Right Height?",
    sourceDirections: "Study the examples and non-examples of bases and heights of parallelograms.",
  },
  "teach-l6": {
    activityTitle: "6.2: More Areas of Parallelograms",
    sourceDirections: "Change the parallelogram, calculate its area, and use Show Area to verify your calculation.",
  },
  "teach-l7": {
    activityTitle: "7.1: Same Parallelograms, Different Bases",
    sourceDirections: "Use the base-height pairs to reason about equal parallelogram areas.",
  },
  "teach-l8": {
    activityTitle: "8.1: Composing Parallelograms",
    sourceDirections: "Use Triangle M and copies of it to reason about related parallelograms.",
  },
  "teach-l9": {
    activityTitle: "9.2: Finding a Formula for Area of a Triangle",
    sourceDirections: "Use bases, heights, and areas to write a general expression.",
  },
  "teach-l10": {
    activityTitle: "10.2: Hunting for Heights",
    sourceDirections: "Draw or identify heights that correspond to the chosen bases.",
  },
  "teach-l11": {
    activityTitle: "11.2: What Are Polygons?",
    sourceDirections: "Identify which figures are polygons and explain what they have in common.",
  },
  "teach-l12": {
    activityTitle: "12.3: Building with Snap Cubes",
    sourceDirections: "Use a rectangular prism to reason about faces and surface area.",
  },
  "teach-l13": {
    activityTitle: "13.1: What are Polyhedra?",
    sourceDirections: "Sort the objects into polyhedra and non-polyhedra.",
  },
  "teach-l14": {
    activityTitle: "14.1: Matching Nets",
    sourceDirections: "Match each net with the polyhedron it can form.",
  },
  "teach-l15": {
    activityTitle: "15.3: Comparing Boxes",
    sourceDirections: "Compare the nets of three rectangular-prism boxes.",
  },
  "teach-l16": {
    activityTitle: "16.1: Attributes and Their Measures",
    sourceDirections: "Choose units that match the attribute being measured.",
  },
  "teach-l17": {
    activityTitle: "17.1: Perfect Squares",
    sourceDirections: "Use square side lengths to reason about perfect squares.",
  },
  "teach-l18": {
    activityTitle: "18.2: The Net of a Cube",
    sourceDirections: "Use a cube net to reason about surface area and volume.",
  },
  "teach-l19": {
    activityTitle: "19.1: Tent Design - Part 1",
    sourceDirections: "Use the tent specifications to make design decisions.",
  },
};

const unit1TeachAdditionalCards = [
  {
    id: "teach-l2-2",
    lessonNumber: 2,
    section: "A",
    idea: "Idea 1",
    title: "Finding Area by Decomposing and Rearranging",
    activityTitle: "2.2: Composing Shapes",
    sourceContext: "The app provides the exact tangram-style set from the Blackline Master: 1 square, 4 small triangles, 1 medium triangle, and 2 large triangles.",
    sourceDirections: "Use the pieces below to compose shapes with areas of 1, 2, and 4 square units. Drag a piece to move it; select a piece and rotate it to test a new arrangement.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "tangram",
    blacklineMaster: lesson2TangramBlacklineMaster,
    visualAlt: "Interactive Lesson 2 tangram pieces: one square, four small triangles, one medium triangle, and two large triangles.",
    prompt: "First answer the source question about two small triangles. Then build one of the requested target shapes in the workspace and explain why its area matches the target.",
    responseType: "tangramCompose",
    hint: "The unit square has area 1. Two matching small triangles can compose that square, and rearranging the same pieces does not change their total area.",
    correctFeedback: "Correct. Two small triangles compose a 1-square-unit square, and your explanation connects the workspace to the source idea: composing, decomposing, and rearranging preserve area.",
    incorrectFeedback: "Check the unit square relationship first. If two matching small triangles exactly compose the square whose area is 1 square unit, their combined area is 1 square unit.",
  },
  {
    id: "teach-l2-3",
    lessonNumber: 2,
    section: "A",
    idea: "Idea 1",
    title: "Finding Area by Decomposing and Rearranging",
    activityTitle: "2.3: Tangram Triangles",
    sourceContext: "This follow-up uses the same tangram pieces and area relationships from 2.2.",
    sourceDirections: "Use the same pieces from 2.2 to reason about each triangle's area. You can move and rotate pieces in the workspace while you compare them with the unit square.",
    pdfPage: 4,
    cropPath: null,
    customVisual: "tangram",
    blacklineMaster: lesson2TangramBlacklineMaster,
    visualAlt: "Interactive Lesson 2 tangram pieces used to compare the areas of the small, medium, and large triangles.",
    prompt: "Complete all three source statements: find the area of the small triangle, the medium triangle, and the large triangle.",
    responseType: "tangramAreas",
    hint: "Start from the 1-square-unit square. Two small triangles compose the unit square. A medium triangle matches one unit square. A large triangle can be decomposed into four small triangles.",
    correctFeedback: "Correct. Small triangle: 1/2 square unit. Medium triangle: 1 square unit. Large triangle: 2 square units. Each value follows by composing, decomposing, or rearranging the same pieces.",
    incorrectFeedback: "Use the unit square as the reference. Two small triangles make 1 square unit; the medium triangle has the same area as that square; the large triangle is four small triangles, or 2 square units.",
  },
  {
    id: "teach-l3-2",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    activityTitle: "3.2: On the Grid",
    sourceDirections: "Find areas of shaded regions on a grid without counting every square one at a time.",
    pdfPage: 1,
    cropPath: teachLessonCrop(3),
    visualAlt: "Source grid figures for reasoning about shaded area.",
    prompt: "Choose one shaded grid figure and explain an efficient way to find its area.",
    responseType: "open",
    reasoningPrompt: "Show your area strategy.",
    hint: "Try decomposing, rearranging, or subtracting a missing piece from a larger rectangle.",
    correctFeedback: "Good reasoning should name a strategy and account for all shaded square units without changing the region's area.",
    incorrectFeedback: "Use the grid to organize the area: split the shape, rearrange pieces, or subtract unshaded parts from a larger rectangle.",
  },
  {
    id: "teach-l3-3",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    activityTitle: "3.3: Off the Grid",
    sourceDirections: "Find the area of shaded regions that are not completely aligned to a grid.",
    pdfPage: 2,
    cropPath: teachLessonCrop(3),
    visualAlt: "Source off-grid shaded regions for area reasoning.",
    prompt: "What is a reliable strategy when the shaded region is off the grid?",
    responseType: "singleChoice",
    choices: [
      { id: "decompose", label: "Decompose or enclose the region, then add or subtract known areas." },
      { id: "outline", label: "Measure only the outside boundary." },
      { id: "guess", label: "Estimate from the shape name only." },
    ],
    answerKey: ["decompose"],
    hint: "The lesson is about turning unfamiliar regions into shapes whose areas you can find.",
    correctFeedback: "Correct. Decomposing, rearranging, or enclosing-and-subtracting keeps the reasoning tied to area.",
    incorrectFeedback: "Area is about the region inside, not the boundary length or the shape name.",
  },
  {
    id: "teach-l4-2",
    lessonNumber: 4,
    section: "B",
    idea: "Idea 2",
    title: "Parallelograms",
    activityTitle: "4.2: Area of a Parallelogram",
    sourceContext: "The public-reference digital activity gives students polygons and movable vertices so they can test area by decomposing, rearranging, and changing the parallelogram.",
    sourceDirections: "Drag the model controls to change the parallelogram, then reason from a related rectangle.",
    pdfPage: 2,
    cropPath: null,
    visualAlt: "Interactive parallelogram model that can be changed and checked against a related rectangle.",
    customVisual: "parallelogramExplore",
    defaultParallelogram: { base: 6, height: 4, slant: 2 },
    prompt: "Find the area of the parallelogram you build, then explain how a related rectangle helps.",
    responseType: "parallelogramExplore",
    responsePrompt: "Record the area of the current parallelogram in square units.",
    hint: "Imagine moving the slanted side piece to make a rectangle. The base and perpendicular height stay the useful measurements.",
    correctFeedback: "Correct. Decomposing and rearranging turns the parallelogram into a rectangle with the same base and height, so the area is base times height.",
    incorrectFeedback: "Use the model's base and perpendicular height. A related rectangle with those side lengths has the same area as the parallelogram.",
  },
  {
    id: "teach-l4-3",
    lessonNumber: 4,
    section: "B",
    idea: "Idea 2",
    title: "Parallelograms",
    activityTitle: "4.3: Lots of Parallelograms",
    sourceDirections: "Find the area of each parallelogram. Show your reasoning.",
    pdfPage: 2,
    cropPath: teachLessonCrop(4),
    visualAlt: "Source collection of parallelograms for area strategies.",
    prompt: "When decomposing is awkward, what other source strategy can find the area?",
    responseType: "singleChoice",
    choices: [
      { id: "enclose-subtract", label: "Enclose the parallelogram in a rectangle and subtract corner triangles." },
      { id: "ignore-grid", label: "Ignore the grid and use the longest side twice." },
      { id: "count-vertices", label: "Count the four vertices." },
    ],
    answerKey: ["enclose-subtract"],
    hint: "Look for a larger rectangle around the parallelogram.",
    correctFeedback: "Correct. Enclosing the shape and subtracting the extra triangles is a source-faithful area strategy.",
    incorrectFeedback: "Try building a known rectangle around the parallelogram, then remove the extra triangular pieces.",
  },
  {
    id: "teach-l5-1",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    activityTitle: "5.1: A Parallelogram and Its Rectangles",
    sourceContext: "The source applet uses sliders to reveal Tyler's and Elena's ways of rearranging the same parallelogram into rectangles.",
    sourceDirections: "Move both sliders to compare Tyler's and Elena's rectangle strategies.",
    pdfPage: 1,
    cropPath: "lesson-05-p001-parallelogram-rectangles-5-1.png",
    visualAlt: "Source decompositions of one parallelogram into rectangles.",
    customVisual: "parallelogramCutSliders",
    prompt: "Why can both rectangle strategies give the same parallelogram area?",
    responseType: "guidedFields",
    responsePrompt: "After using both sliders, compare the two strategies.",
    guidedFields: [
      {
        id: "same",
        label: "How are Tyler's and Elena's strategies the same?",
        type: "singleChoice",
        choices: [
          { id: "same-area", label: "Both rearrange the same parallelogram into a rectangle with the same area." },
          { id: "same-perimeter", label: "Both keep the same perimeter, so area is guaranteed to match." },
          { id: "same-cut", label: "Both make the cut in exactly the same place." },
        ],
      },
      {
        id: "different",
        label: "How are the strategies different?",
        type: "singleChoice",
        choices: [
          { id: "different-cut", label: "They cut and move different side pieces." },
          { id: "different-area", label: "They make rectangles with different areas." },
          { id: "different-height", label: "Only one strategy uses the height." },
        ],
      },
      {
        id: "reasoning",
        label: "Explain how the slider views show area is preserved.",
        type: "textarea",
        placeholder: "Explain your thinking.",
      },
    ],
    guidedAnswerKey: {
      static: {
        same: "same-area",
        different: "different-cut",
      },
    },
    hint: "Area is preserved when pieces are decomposed and rearranged.",
    correctFeedback: "Correct. Elena and Tyler create different rectangles from the same parallelogram area.",
    incorrectFeedback: "The key is area preservation, not perimeter or color.",
  },
  {
    id: "teach-l5-3",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    activityTitle: "5.3: Finding the Formula for Area of Parallelograms",
    sourceDirections: "Use base-height pairs to write a general expression.",
    pdfPage: 4,
    cropPath: teachLessonCrop(5),
    visualAlt: "Source table for deriving the parallelogram area formula.",
    prompt: "Which expression gives the area of any parallelogram with base b and height h?",
    responseType: "singleChoice",
    choices: [
      { id: "bh", label: "b x h" },
      { id: "half-bh", label: "1/2 x b x h" },
      { id: "b-plus-h", label: "b + h" },
    ],
    answerKey: ["bh"],
    hint: "A parallelogram rearranges to a rectangle with the same base and height.",
    correctFeedback: "Correct. The area of a parallelogram is base times corresponding height, b x h.",
    incorrectFeedback: "Use the related rectangle: its dimensions are the parallelogram's base and corresponding height.",
  },
  {
    id: "teach-l6-1",
    lessonNumber: 6,
    section: "B",
    idea: "Idea 2",
    title: "Area of Parallelograms",
    activityTitle: "6.1: Missing Dots",
    sourceDirections: "How many dots are in the image? How do you see them?",
    pdfPage: 1,
    cropPath: teachLessonCrop(6),
    visualAlt: "Source missing-dots visual and parallelogram area tasks.",
    prompt: "The dot image can be seen as a 6 by 6 border with a 4 by 4 middle missing. How many dots are on the border?",
    responseType: "number",
    answerKey: ["20"],
    reasoningPrompt: "Explain how you counted.",
    hint: "Count the full outer square and subtract the missing inside dots, or count the sides without double-counting corners.",
    correctFeedback: "Correct. A 6 by 6 array has 36 dots, and the missing 4 by 4 center has 16 dots, leaving 20 border dots.",
    incorrectFeedback: "Watch for double-counting the corners. One way is 36 - 16.",
  },
  {
    id: "teach-l7-2",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    activityTitle: "7.2: A Tale of Two Triangles (Part 1)",
    sourceContext: "The public-reference digital activity has students use a segment tool to decompose the quadrilaterals. The app recreates that construction action locally with vertex-to-vertex segment marking.",
    sourceDirections: "Use the segment tool: choose a quadrilateral, then click two vertices to draw one line. Try to decompose each polygon into two identical triangles, if possible.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "quadrilateralDecompose",
    visualAlt: "Interactive source quadrilaterals A through G on a grid with vertex-to-vertex segment marking.",
    prompt: "Draw decomposition segments, identify which quadrilaterals can be decomposed into two identical triangles, and describe what those quadrilaterals have in common.",
    responseType: "quadrilateralDecompose",
    hint: "Try segments that connect opposite vertices. Rectangles, rhombuses, and parallelograms can be split by a diagonal into two identical triangles.",
    correctFeedback: "Correct. Quadrilaterals A, B, D, F, and G can be decomposed into two identical triangles. They are parallelograms, so a diagonal connects opposite vertices and makes two identical triangles.",
    incorrectFeedback: "Use the segment tool to test opposite vertices. The successful figures are the parallelograms: A, B, D, F, and G. C and E decompose into two triangles, but the triangles are not identical.",
  },
  {
    id: "teach-l7-3",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    activityTitle: "7.3: A Tale of Two Triangles (Part 2)",
    sourceContext: "The app provides the student triangle-pair cutouts from the Blackline Master as a local composing workspace.",
    sourceDirections: "Choose a pair P-U. Drag the two copies, select a copy, and turn it to test whether the pair can compose a rectangle or a parallelogram.",
    pdfPage: 3,
    cropPath: null,
    customVisual: "trianglePairs",
    visualAlt: "Interactive workspace with two copies of the selected Lesson 7 triangle pair.",
    blacklineMasters: unit1BlacklineMasters.trianglePairs,
    prompt: "Use the workspace to test each pair. Then complete the source statements with all, some, or none.",
    responseType: "trianglePairsCompose",
    hint: "Try joining the two copies along matching sides. Right-triangle pairs can make rectangles, and every pair can make at least one parallelogram.",
    correctFeedback: "Correct. Some of these pairs of identical triangles can be composed into a rectangle, and all of them can be composed into a parallelogram.",
    incorrectFeedback: "Keep testing the pairs by joining matching sides. Rectangles need right angles, but any two identical triangles can be arranged into a parallelogram.",
  },
  {
    id: "teach-l8-2",
    lessonNumber: 8,
    section: "C",
    idea: "Idea 3",
    title: "Area of Triangles",
    activityTitle: "8.2: More Triangles",
    sourceDirections: "Find the areas of at least two triangles. Show your reasoning.",
    pdfPage: 2,
    cropPath: teachLessonCrop(8),
    visualAlt: "Source triangles on grids for area reasoning.",
    prompt: "What area strategy should you use for these grid triangles?",
    responseType: "singleChoice",
    choices: [
      { id: "half-parallelogram", label: "Use a related parallelogram or rectangle and take half when appropriate." },
      { id: "perimeter", label: "Add the side lengths." },
      { id: "vertices", label: "Count the vertices." },
    ],
    answerKey: ["half-parallelogram"],
    hint: "Lesson 8 connects a triangle to a parallelogram made from two copies.",
    correctFeedback: "Correct. A triangle's area can be reasoned from a related parallelogram or rectangle.",
    incorrectFeedback: "Area is inside the region. Use a related rectangle/parallelogram, not perimeter.",
  },
  {
    id: "teach-l8-3",
    lessonNumber: 8,
    section: "C",
    idea: "Idea 3",
    title: "Area of Triangles",
    activityTitle: "8.3: Decomposing a Parallelogram",
    sourceContext: "The app provides the Blackline Master parallelogram assignments A-D that students cut and rearrange in the source lesson.",
    sourceDirections: "Use one assigned parallelogram. Compare the original parallelogram, the new parallelogram made from two cut pieces, and the remaining large triangle.",
    pdfPage: 3,
    pdfPages: [3, 4],
    cropPath: "lesson-08-p003-decomposing-parallelogram-blackline.png",
    visualAlt: "Blackline Master parallelograms A through D with measurements and dotted cut lines.",
    blacklineMasters: unit1BlacklineMasters.decomposingParallelogram,
    prompt: "Choose one parallelogram A-D and complete the same area comparisons from the source task.",
    responseType: "guidedFields",
    guidedFields: [
      {
        id: "parallelogram",
        label: "Assigned parallelogram",
        type: "singleChoice",
        choices: [
          { id: "A", label: "A" },
          { id: "B", label: "B" },
          { id: "C", label: "C" },
          { id: "D", label: "D" },
        ],
      },
      { id: "originalArea", label: "Area of the original parallelogram", type: "number", placeholder: "square cm" },
      {
        id: "newRelation",
        label: "Area of the new parallelogram compared with the original",
        type: "singleChoice",
        choices: [
          { id: "half", label: "Half of the original" },
          { id: "same", label: "The same as the original" },
          { id: "double", label: "Double the original" },
        ],
      },
      { id: "newArea", label: "Area of the new parallelogram", type: "number", placeholder: "square cm" },
      {
        id: "largeTriangleRelation",
        label: "Area of the remaining large triangle compared with the new parallelogram",
        type: "singleChoice",
        choices: [
          { id: "same", label: "The same area" },
          { id: "larger", label: "Larger area" },
          { id: "smaller", label: "Smaller area" },
        ],
      },
      { id: "largeTriangleArea", label: "Area of the remaining large triangle", type: "number", placeholder: "square cm" },
      { id: "reasoning", label: "Explain how cutting and rearranging supports your area comparison.", type: "textarea" },
    ],
    guidedAnswerKey: {
      static: {
        newRelation: "half",
        largeTriangleRelation: "same",
      },
      variants: {
        parallelogram: {
          A: { originalArea: "80", newArea: "40", largeTriangleArea: "40" },
          B: { originalArea: "60", newArea: "30", largeTriangleArea: "30" },
          C: { originalArea: "60", newArea: "30", largeTriangleArea: "30" },
          D: { originalArea: "40", newArea: "20", largeTriangleArea: "20" },
        },
      },
    },
    hint: "Find the original area with base x height. The rearranged trapezoid-plus-small-triangle uses half the original height, and the remaining large triangle has the same area as that new parallelogram.",
    correctFeedback: "Correct. In each assigned parallelogram, the new parallelogram has half the area of the original, and the remaining large triangle has the same area as the new parallelogram.",
    incorrectFeedback: "Recheck the base-height area of your chosen parallelogram, then compare the half-height rearranged parallelogram and the remaining large triangle.",
  },
  {
    id: "teach-l9-1",
    lessonNumber: 9,
    section: "C",
    idea: "Idea 3",
    title: "Formula for the Area of a Triangle",
    activityTitle: "9.1: Bases and Heights of a Triangle",
    sourceDirections: "Study examples and non-examples of triangle bases and heights.",
    pdfPage: 1,
    cropPath: teachLessonCrop(9),
    visualAlt: "Source examples and non-examples of triangle bases and heights.",
    prompt: "Which statement is true about a triangle height?",
    responseType: "singleChoice",
    choices: [
      { id: "perpendicular", label: "A height must be perpendicular to its chosen base." },
      { id: "any-angle", label: "A height can meet the base at any angle." },
      { id: "only-inside", label: "A height must always be inside the triangle." },
    ],
    answerKey: ["perpendicular"],
    hint: "The examples all show a right angle between base and height.",
    correctFeedback: "Correct. A corresponding height is perpendicular to the chosen base or its extension.",
    incorrectFeedback: "Look for the right angle: a height must be perpendicular to the base.",
  },
  {
    id: "teach-l9-3",
    lessonNumber: 9,
    section: "C",
    idea: "Idea 3",
    title: "Formula for the Area of a Triangle",
    activityTitle: "9.3: Applying the Formula for Area of Triangles",
    sourceDirections: "Circle a usable base measurement and find areas of three triangles.",
    pdfPage: 3,
    cropPath: teachLessonCrop(9),
    visualAlt: "Source triangles with base and height measurements.",
    prompt: "What measurements must be paired when using the triangle area formula?",
    responseType: "singleChoice",
    choices: [
      { id: "corresponding", label: "A base and its corresponding perpendicular height." },
      { id: "any-two", label: "Any two side lengths." },
      { id: "longest-only", label: "Only the longest side and shortest side." },
    ],
    answerKey: ["corresponding"],
    hint: "The base and height must match each other.",
    correctFeedback: "Correct. Use 1/2 x base x corresponding height.",
    incorrectFeedback: "The height must correspond to the base, so not every pair of measurements works.",
  },
  {
    id: "teach-l10-1",
    lessonNumber: 10,
    section: "C",
    idea: "Idea 3",
    title: "Bases and Heights of Triangles",
    activityTitle: "10.1: An Area of 12",
    sourceContext: "The source asks students to draw a triangle, preferably non-right, and justify its area.",
    sourceDirections: "Choose measurements and an apex placement to construct one non-right triangle with area 12 square units.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "area12Triangle",
    visualAlt: "Interactive grid for constructing a non-right triangle with area 12 square units.",
    prompt: "Build one non-right triangle with area 12 square units and explain how you know the area.",
    responseType: "guidedFields",
    responsePrompt: "Choose the construction settings, then explain your triangle.",
    guidedFields: [
      {
        id: "baseHeightPair",
        label: "Base-height pair",
        type: "singleChoice",
        choices: [
          { id: "6-4", label: "base 6, height 4" },
          { id: "8-3", label: "base 8, height 3" },
          { id: "12-2", label: "base 12, height 2" },
        ],
      },
      {
        id: "apexPlacement",
        label: "Apex placement",
        type: "singleChoice",
        choices: [
          { id: "left-skew", label: "inside, shifted left" },
          { id: "right-skew", label: "inside, shifted right" },
          { id: "right-triangle", label: "directly over an endpoint" },
        ],
      },
      {
        id: "triangleReasoning",
        label: "Explain why the area is 12 square units.",
        type: "textarea",
        placeholder: "Use the triangle area formula or a related parallelogram.",
      },
    ],
    guidedAnswerKey: {
      static: {
        baseHeightPair: ["6-4", "8-3", "12-2"],
        apexPlacement: ["left-skew", "right-skew"],
      },
    },
    hint: "Triangle area is 1/2 x base x height, so the base and height need a product of 24. A non-right triangle has its top vertex not directly above a base endpoint.",
    correctFeedback: "Correct. Your selected base-height pair has product 24, so half of it is 12 square units, and the apex placement makes the triangle non-right.",
    incorrectFeedback: "Recheck both parts: the base-height product should be 24 before taking half, and the source asks you to try a non-right triangle.",
  },
  {
    id: "teach-l10-3",
    lessonNumber: 10,
    section: "C",
    idea: "Idea 3",
    title: "Bases and Heights of Triangles",
    activityTitle: "10.3: Some Bases Are Better Than Others",
    sourceDirections: "Identify a base and height, then find the triangle area.",
    pdfPage: 3,
    cropPath: teachLessonCrop(10),
    visualAlt: "Source grid triangles for choosing useful bases and heights.",
    prompt: "Why are some bases easier to use than others?",
    responseType: "singleChoice",
    choices: [
      { id: "clear-height", label: "Their corresponding heights are easier to read or draw from the grid." },
      { id: "longest", label: "The longest side is always the only correct base." },
      { id: "horizontal-only", label: "Only horizontal sides can be bases." },
    ],
    answerKey: ["clear-height"],
    hint: "Any side can be a base, but some make the height easier to identify.",
    correctFeedback: "Correct. A convenient base is one whose corresponding height can be measured or drawn clearly.",
    incorrectFeedback: "Any side can be chosen as the base; the useful question is whether its corresponding height is clear.",
  },
  {
    id: "teach-l11-1",
    lessonNumber: 11,
    section: "D",
    idea: "Idea 4",
    title: "Polygons",
    activityTitle: "11.1: Which One Doesn't Belong: Bases and Heights",
    sourceDirections: "Which one doesn't belong?",
    pdfPage: 1,
    cropPath: teachLessonCrop(11),
    visualAlt: "Source which-one-does-not-belong visual for bases and heights.",
    prompt: "Give one reason a figure could be the one that does not belong.",
    responseType: "open",
    reasoningPrompt: "Explain your choice.",
    hint: "Which One Doesn't Belong tasks can have more than one valid answer if the reasoning is clear.",
    correctFeedback: "A strong response names a figure and gives a mathematical reason based on its base-height relationship.",
    incorrectFeedback: "Choose one figure and explain a mathematical feature that makes it different.",
  },
  {
    id: "teach-l11-3",
    lessonNumber: 11,
    section: "D",
    idea: "Idea 4",
    title: "Polygons",
    activityTitle: "11.3: Quadrilateral Strategies",
    sourceDirections: "Find the area of two quadrilaterals of your choice. Show your reasoning.",
    pdfPage: 3,
    cropPath: teachLessonCrop(11),
    visualAlt: "Source quadrilaterals on grids for area strategies.",
    prompt: "Which strategy can help find the area of an irregular quadrilateral?",
    responseType: "singleChoice",
    choices: [
      { id: "decompose", label: "Decompose it into triangles or rectangles." },
      { id: "name", label: "Use only the name quadrilateral." },
      { id: "corners", label: "Count the corners." },
    ],
    answerKey: ["decompose"],
    hint: "Lesson 11 uses decomposition and enclosure strategies.",
    correctFeedback: "Correct. Breaking a polygon into shapes with known areas is a source-faithful strategy.",
    incorrectFeedback: "Area needs a region strategy; a name or corner count is not enough.",
  },
  {
    id: "teach-l11-4",
    lessonNumber: 11,
    section: "D",
    idea: "Idea 4",
    title: "Polygons",
    activityTitle: "11.4: Pinwheel",
    sourceContext: "The source uses the Blackline Master pinwheel grid as the group display object for area strategies.",
    sourceDirections: "Find the area of the shaded region in square units. Show your reasoning.",
    pdfPage: 4,
    cropPath: teachLessonCrop(11),
    visualAlt: "Source pinwheel polygon on a grid.",
    blacklineMasters: unit1BlacklineMasters.pinwheel,
    prompt: "Find the area of the shaded pinwheel region in square units.",
    responseType: "number",
    answerKey: ["40"],
    reasoningPrompt: "Show a decomposition or subtraction strategy that accounts for the shaded region.",
    hint: "Use the grid to make known triangles, rectangles, or an enclosing shape. One efficient path is to enclose the pinwheel and subtract the outside triangles.",
    correctFeedback: "Correct. The pinwheel has area 40 square units; a complete strategy accounts for every shaded piece exactly once.",
    incorrectFeedback: "The pinwheel is an area task. Try decomposing the shaded region into triangles/rectangles or enclosing it and subtracting the unshaded parts.",
  },
  {
    id: "teach-l12-1",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.1: Covering the Cabinet (Part 1)",
    sourceContext: "The app replaces the classroom video with the same estimation question.",
    sourceDirections: "Estimate how many sticky notes it would take to cover the cabinet.",
    pdfPage: 1,
    cropPath: teachLessonCrop(12),
    visualAlt: "Source cabinet-covering surface area task.",
    prompt: "What information would help you estimate the number of sticky notes needed?",
    responseType: "singleChoice",
    choices: [
      { id: "surface-and-note", label: "The cabinet surface dimensions and the area of one sticky note." },
      { id: "height-only", label: "Only the cabinet height." },
      { id: "volume-only", label: "Only the cabinet volume." },
    ],
    answerKey: ["surface-and-note"],
    hint: "Covering outside faces is a surface-area question.",
    correctFeedback: "Correct. You need the area to be covered and the area covered by each sticky note.",
    incorrectFeedback: "Surface area counts the outside covering, so dimensions of faces and sticky-note area matter.",
  },
  {
    id: "teach-l12-2",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.2: Covering the Cabinet (Part 2)",
    sourceDirections: "Use information about the cabinet to find the number of sticky notes needed.",
    pdfPage: 1,
    cropPath: teachLessonCrop(12),
    visualAlt: "Source cabinet-covering follow-up task.",
    prompt: "Which calculation structure matches the surface-area reasoning?",
    responseType: "singleChoice",
    choices: [
      { id: "total-divide", label: "Find total exposed surface area, then divide by the area of one sticky note." },
      { id: "volume-divide", label: "Find volume, then divide by sticky-note perimeter." },
      { id: "height-times-notes", label: "Multiply cabinet height by the number of notes in a stack." },
    ],
    answerKey: ["total-divide"],
    hint: "Each sticky note covers a flat patch of surface.",
    correctFeedback: "Correct. Surface area divided by sticky-note area gives a count of notes.",
    incorrectFeedback: "The outside covering is measured in square units, so use surface area.",
  },
  {
    id: "teach-l13-2",
    lessonNumber: 13,
    section: "E",
    idea: "Idea 5",
    title: "Polyhedra",
    activityTitle: "13.2: Prisms and Pyramids",
    sourceContext: "The source uses Blackline Master nets and polygon cutouts to test the prism/pyramid claims after students inspect the pictures.",
    sourceDirections: "Compare prisms and pyramids, then use the net materials to reason about which nets fold into Pyramid P.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: teachLessonCrop(13),
    visualAlt: "Source prisms, pyramids, and pyramid nets.",
    blacklineMasters: unit1BlacklineMasters.prismsPyramids,
    prompt: "Which nets can be folded into Pyramid P? Select all that apply, then explain a prism/pyramid feature you used.",
    responseType: "multiSelect",
    reasoningPrompt: "Explain why your selected net or nets work, and name one feature of prisms or pyramids from the source figures.",
    choices: [
      { id: "net-1", label: "net 1" },
      { id: "net-2", label: "net 2" },
      { id: "net-3", label: "net 3" },
    ],
    answerKey: ["net-1", "net-2"],
    hint: "Pyramid P is made from triangular faces. Watch for whether triangles fold up without overlapping.",
    correctFeedback: "Correct. Nets 1 and 2 can fold into Pyramid P; net 3 has triangles arranged so that two faces would overlap.",
    incorrectFeedback: "Try visualizing the fold. Net 3 cannot work because two of its triangles overlap when folded into Pyramid P.",
  },
  {
    id: "teach-l13-3",
    lessonNumber: 13,
    section: "E",
    idea: "Idea 5",
    title: "Polyhedra",
    activityTitle: "13.3: Assembling Polyhedra",
    sourceContext: "The app assigns Net A from the Blackline Master so the face-count task has a concrete net instead of an unspecified teacher handout.",
    sourceDirections: "Use Net A from the Blackline Master as the assigned net. Imagine folding along the solid edges and tucking the dotted flaps behind the faces.",
    pdfPage: 3,
    cropPath: "lesson-13-p003-assembling-polyhedra-net-a-blackline.png",
    visualAlt: "Blackline Master Net A for assembling a polyhedron.",
    blacklineMasters: unit1BlacklineMasters.assemblingPolyhedraNetA,
    prompt: "Fold Net A mentally. How many vertices, edges, and faces will the polyhedron have?",
    responseType: "guidedFields",
    guidedFields: [
      { id: "vertices", label: "Vertices", type: "number" },
      { id: "edges", label: "Edges", type: "number" },
      { id: "faces", label: "Faces", type: "number" },
      { id: "reasoning", label: "Explain how the shaded faces of the net fold into the polyhedron.", type: "textarea" },
    ],
    guidedAnswerKey: {
      static: { vertices: "6", edges: "9", faces: "5" },
    },
    hint: "Ignore the dotted flaps. Net A has 3 rectangular faces and 2 triangular faces, so it folds into a triangular prism.",
    correctFeedback: "Correct. Net A folds into a triangular prism with 6 vertices, 9 edges, and 5 faces.",
    incorrectFeedback: "Ignore the dotted flaps and count only the folded polyhedron: Net A has 3 rectangles and 2 triangles, forming a triangular prism.",
  },
  {
    id: "teach-l14-2",
    lessonNumber: 14,
    section: "E",
    idea: "Idea 5",
    title: "Nets and Surface Area",
    activityTitle: "14.2: Using Nets to Find Surface Area",
    sourceContext: "The source uses the three gridded Blackline Master nets A-C as the cut-and-assemble materials for this activity.",
    sourceDirections: "Use the shaded faces of the Blackline Master nets. Ignore dotted flaps when finding surface area.",
    pdfPage: 1,
    pdfPages: [1, 2],
    cropPath: teachLessonCrop(14),
    visualAlt: "Source nets on grids for surface area reasoning.",
    blacklineMasters: unit1BlacklineMasters.surfaceAreaNets,
    prompt: "Name each polyhedron and find the surface area of the shaded faces of Nets A, B, and C.",
    responseType: "guidedFields",
    guidedFields: [
      {
        id: "netAName",
        label: "Net A forms a...",
        type: "singleChoice",
        choices: [
          { id: "rectangular-prism", label: "Rectangular prism" },
          { id: "square-pyramid", label: "Square pyramid" },
          { id: "triangular-prism", label: "Triangular prism" },
        ],
      },
      { id: "netAArea", label: "Net A surface area", type: "number", placeholder: "square units" },
      {
        id: "netBName",
        label: "Net B forms a...",
        type: "singleChoice",
        choices: [
          { id: "rectangular-prism", label: "Rectangular prism" },
          { id: "square-pyramid", label: "Square pyramid" },
          { id: "triangular-prism", label: "Triangular prism" },
        ],
      },
      { id: "netBArea", label: "Net B surface area", type: "number", placeholder: "square units" },
      {
        id: "netCName",
        label: "Net C forms a...",
        type: "singleChoice",
        choices: [
          { id: "rectangular-prism", label: "Rectangular prism" },
          { id: "square-pyramid", label: "Square pyramid" },
          { id: "triangular-prism", label: "Triangular prism" },
        ],
      },
      { id: "netCArea", label: "Net C surface area", type: "number", placeholder: "square units" },
      { id: "reasoning", label: "Explain how you counted or combined the shaded faces. Ignore dotted flaps.", type: "textarea" },
    ],
    guidedAnswerKey: {
      static: {
        netAName: "rectangular-prism",
        netAArea: "82",
        netBName: "square-pyramid",
        netBArea: "48",
        netCName: "triangular-prism",
        netCArea: "48",
      },
    },
    hint: "Count only shaded regions. Net A has a 6 by 5 pair, 6 by 1 pair, and 5 by 1 pair. For B and C, combine rectangle and triangle areas from the grid.",
    correctFeedback: "Correct. Net A is a rectangular prism with surface area 82 square units; Net B is a square pyramid with surface area 48; Net C is a triangular prism with surface area 48.",
    incorrectFeedback: "Check the shaded faces only. Dotted flaps are for assembly and do not count as surface area.",
  },
  {
    id: "teach-l15-1",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    activityTitle: "15.1: Notice and Wonder: Wrapping Paper",
    sourceDirections: "Notice and wonder about wrapping a box as a present.",
    pdfPage: 1,
    cropPath: teachLessonCrop(15),
    visualAlt: "Source rectangular box for wrapping-paper noticing.",
    prompt: "Which question best connects the box visual to surface area?",
    responseType: "singleChoice",
    choices: [
      { id: "paper", label: "How much paper is needed to cover all outside faces?" },
      { id: "weight", label: "How heavy is the box?" },
      { id: "color", label: "What color should the wrapping paper be?" },
    ],
    answerKey: ["paper"],
    hint: "Wrapping covers the outside of the box.",
    correctFeedback: "Correct. Wrapping paper is a surface-area context.",
    incorrectFeedback: "The mathematical question is about covering the outside faces.",
  },
  {
    id: "teach-l15-2",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    activityTitle: "15.2: Building Prisms and Pyramids",
    sourceContext: "The source gives each student one Blackline Master polyhedron drawing. The app assigns Polyhedron C from the student-facing Blackline page.",
    sourceDirections: "Use assigned Polyhedron C, draw or imagine its net on graph paper, label the faces, and use those faces to find surface area.",
    pdfPage: 1,
    cropPath: "lesson-15-p001-polyhedron-drawings-blackline.png",
    visualAlt: "Blackline Master Polyhedron C rectangular prism with dimensions 13, 4, and 5.",
    blacklineMasters: unit1BlacklineMasters.buildingPrismsPyramidsPage1,
    prompt: "The app assigns Polyhedron C. Plan its net and calculate its surface area.",
    responseType: "guidedFields",
    guidedFields: [
      { id: "polyhedronName", label: "What polyhedron do you have?", type: "text", placeholder: "Type the polyhedron name" },
      { id: "netFaces", label: "List the faces your net needs.", type: "textarea" },
      { id: "surfaceArea", label: "Surface area of Polyhedron C", type: "number", placeholder: "square units" },
      { id: "reasoning", label: "Show your organized calculation from the net.", type: "textarea" },
    ],
    guidedAnswerKey: {
      static: {
        polyhedronName: ["rectangular prism", "rectangular-prism"],
        surfaceArea: "274",
      },
    },
    hint: "Polyhedron C is a rectangular prism with dimensions 13, 4, and 5. Its net has three pairs of congruent rectangles.",
    correctFeedback: "Correct. Polyhedron C is a rectangular prism, and 2 x (13 x 4 + 13 x 5 + 4 x 5) = 274 square units.",
    incorrectFeedback: "Use the drawing for Polyhedron C. A rectangular prism net needs three pairs of matching rectangles: 13 by 4, 13 by 5, and 4 by 5.",
  },
  {
    id: "teach-l16-2",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    activityTitle: "16.2: Building with 8 Cubes",
    sourceContext: "The source uses snap cubes or a digital hidden-stack applet. The app recreates the build with selectable 8-cube solids so students compare volume and exposed surface.",
    sourceDirections: "Build two different shapes using 8 cubes for each, then compare volume and surface area.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "prismBuilder",
    visualAlt: "Interactive comparison of two solids built with 8 unit cubes each.",
    prompt: "Choose two different 8-cube solids, then compare their volumes and surface areas.",
    responseType: "prismBuild",
    builderMode: "compare8",
    hint: "Both shapes use 8 cubes, so both volumes are 8 cubic units. Surface area depends on how many faces are exposed.",
    correctFeedback: "Correct. Both selected shapes have volume 8 cubic units, but their surface areas can be different because the cubes are arranged differently.",
    incorrectFeedback: "Use the rendered solids: volume counts cubes used, while surface area counts exposed square faces.",
  },
  {
    id: "teach-l16-3",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    activityTitle: "16.3: Comparing Prisms Without Building Them",
    sourceDirections: "Find the surface area and volume of three rectangular prisms.",
    pdfPage: 2,
    cropPath: teachLessonCrop(16),
    visualAlt: "Source prism dimensions and dot paper for comparing surface area and volume.",
    prompt: "What can happen when rectangular prisms have different dimensions?",
    responseType: "singleChoice",
    choices: [
      { id: "different-attributes", label: "Volume and surface area can change in different ways." },
      { id: "always-same", label: "Same height always means same surface area and same volume." },
      { id: "surface-equals-volume", label: "Surface area is always equal to volume." },
    ],
    answerKey: ["different-attributes"],
    hint: "Volume is cubic units; surface area is square units.",
    correctFeedback: "Correct. Surface area and volume measure different attributes, so they do not have to change together.",
    incorrectFeedback: "Compare square-unit surface coverage with cubic-unit space inside.",
  },
  {
    id: "teach-l17-2",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.2: Building with 32 Cubes",
    sourceContext: "The source uses 32 snap cubes or a digital hidden-stack applet. The app recreates the build by letting students test cube edge lengths.",
    sourceDirections: "Use the 32 cubes to build the largest single cube you can.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "prismBuilder",
    visualAlt: "Interactive cube builder for testing edge lengths with 32 unit cubes.",
    prompt: "Build the largest cube possible with 32 unit cubes, then answer all source questions.",
    responseType: "prismBuild",
    builderMode: "cube32",
    hint: "Compare perfect cubes: 3 cubed is 27 and 4 cubed is 64.",
    correctFeedback: "Correct. A 3 by 3 by 3 cube uses 27 cubes, has face area 9 square units, and volume 27 cubic units; a 4 by 4 by 4 cube would need 64.",
    incorrectFeedback: "Look for the largest perfect cube that is not greater than 32, then answer the source follow-up questions for that built cube.",
  },
  {
    id: "teach-l17-3",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.3: Perfect Cubes",
    sourceDirections: "Identify perfect cubes and find cube volumes.",
    pdfPage: 2,
    cropPath: teachLessonCrop(17),
    visualAlt: "Source cube with side length 4 and perfect-cube questions.",
    prompt: "A cube has side length 4 cm. What is its volume?",
    responseType: "number",
    answerKey: ["64"],
    hint: "Cube volume is side length x side length x side length.",
    correctFeedback: "Correct. 4 x 4 x 4 = 64 cubic centimeters.",
    incorrectFeedback: "For volume, multiply the edge length three times.",
  },
  {
    id: "teach-l17-4",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.4: Introducing Exponents",
    sourceDirections: "Use exponents and correct units for square and cube measures.",
    pdfPage: 2,
    cropPath: teachLessonCrop(17),
    visualAlt: "Source exponent notation questions.",
    prompt: "A square has side length 10 cm. Which expression uses an exponent to show its area?",
    responseType: "singleChoice",
    choices: [
      { id: "10-2", label: "10^2 square centimeters" },
      { id: "10-3", label: "10^3 cubic centimeters" },
      { id: "2-10", label: "2^10 square centimeters" },
    ],
    answerKey: ["10-2"],
    hint: "Area of a square uses the side length multiplied by itself.",
    correctFeedback: "Correct. 10^2 square centimeters represents 10 x 10 square centimeters.",
    incorrectFeedback: "Square area uses a second power; cube volume uses a third power.",
  },
  {
    id: "teach-l18-1",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    activityTitle: "18.1: Exponent Review",
    sourceDirections: "Select the greater expression without calculating each value.",
    pdfPage: 1,
    cropPath: teachLessonCrop(18),
    visualAlt: "Source exponent review and cube net task.",
    prompt: "Which expression is greater: 10^3 or 10^4?",
    responseType: "singleChoice",
    choices: [
      { id: "10-3", label: "10^3" },
      { id: "10-4", label: "10^4" },
      { id: "same", label: "They are equal." },
    ],
    answerKey: ["10-4"],
    hint: "The same base is multiplied more times in 10^4.",
    correctFeedback: "Correct. 10^4 is greater than 10^3.",
    incorrectFeedback: "With the same base greater than 1, the larger exponent gives the larger value.",
  },
  {
    id: "teach-l18-3",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    activityTitle: "18.3: Every Cube in the Whole World",
    sourceDirections: "Write expressions for a cube with edge length s.",
    pdfPage: 2,
    cropPath: teachLessonCrop(18),
    visualAlt: "Source cube expression task for any edge length.",
    prompt: "For a cube with edge length s, which expression gives surface area?",
    responseType: "singleChoice",
    choices: [
      { id: "6s2", label: "6 x s^2" },
      { id: "s3", label: "s^3" },
      { id: "12s", label: "12 x s" },
    ],
    answerKey: ["6s2"],
    hint: "A cube has 6 square faces, and each face has area s^2.",
    correctFeedback: "Correct. Surface area is 6 x s^2; volume is s^3.",
    incorrectFeedback: "Find one square face first, then count all 6 faces.",
  },
  {
    id: "teach-l19-2",
    lessonNumber: 19,
    section: "G",
    idea: "Idea 7",
    title: "Designing a Tent",
    activityTitle: "19.2: Tent Design - Part 2",
    sourceContext: "This follow-up uses the same tent design and planning sheet from 19.1.",
    sourceDirections: "Use your 19.1 planning sheet to explain the tent design, fabric estimate, and design choices.",
    pdfPage: 4,
    cropPath: "lesson-19-p003-tent-planning-sheet-blackline.png",
    visualAlt: "Blackline Master tent design planning sheet with sketch spaces.",
    blacklineMasters: unit1BlacklineMasters.tentPlanning,
    prompt: "Explain your tent design and compare how design choices affect the fabric estimate.",
    responseType: "guidedFields",
    guidedOpenEnded: true,
    guidedFields: [
      { id: "designExplanation", label: "Explain your tent design and why you chose it.", type: "textarea" },
      { id: "fabricExplanation", label: "Explain how you found your fabric estimate.", type: "textarea" },
      { id: "leastFabric", label: "Which design would use the least fabric? Why?", type: "textarea" },
      { id: "mostFabric", label: "Which design would use the most fabric? Why?", type: "textarea" },
      { id: "impactChoice", label: "Which design change most impacts fabric needed?", type: "textarea" },
    ],
    hint: "Compare tent shape, base measurements, height, floor, and number of side panels. Surface-area calculations should support the comparison.",
    correctFeedback: "Reflection saved. A strong follow-up explains the design, justifies the fabric estimate, and compares which design choices increase or reduce surface area.",
    incorrectFeedback: "Add comparison details about fabric estimates and the design choices that changed surface area.",
  },
];

Object.entries(teachCardEnhancements).forEach(([id, enhancement]) => {
  const card = unit1TeachCards.find((entry) => entry.id === id);
  if (card) Object.assign(card, enhancement);
});

unit1TeachCards.push(...unit1TeachAdditionalCards);

const teachVerifiedCropPaths = {
  "teach-l2": "lesson-02-p001-area-grids.png",
  "teach-l3": "lesson-03-p001-region-grid-area.png",
  "teach-l4": "lesson-04-p001-parallelogram-examples.png",
  "teach-l5": "lesson-05-p003-bases-heights.png",
  "teach-l6": "lesson-06-p001-area-parallelograms.png",
  "teach-l7": "lesson-07-p001-same-parallelograms.png",
  "teach-l8": "lesson-08-p001-composing-parallelograms.png",
  "teach-l9": "lesson-09-p002-triangle-formula.png",
  "teach-l10": "lesson-10-p002-triangle-heights.png",
  "teach-l11": "lesson-11-p002-polygons.png",
  "teach-l12": "lesson-12-p002-snap-cubes.png",
  "teach-l13": "lesson-13-p001-polyhedra-sort.png",
  "teach-l14": "lesson-14-p001-net-matching.png",
  "teach-l15": "lesson-15-p002-box-nets.png",
  "teach-l16": null,
  "teach-l17": "lesson-17-p001-perfect-squares-cubes.png",
  "teach-l18": null,
  "teach-l19": "lesson-19-p002-tent-specs.png",
  "teach-l2-2": null,
  "teach-l2-3": null,
  "teach-l3-2": "lesson-03-p001-on-grid-3-2.png",
  "teach-l3-3": "lesson-03-p002-off-grid-3-3.png",
  "teach-l4-2": "lesson-04-p002-area-parallelogram-4-2.png",
  "teach-l4-3": "lesson-04-p002-lots-parallelograms-4-3.png",
  "teach-l5-1": "lesson-05-p001-parallelogram-rectangles-5-1.png",
  "teach-l5-3": "lesson-05-p004-parallelogram-formula-5-3.png",
  "teach-l6-1": "lesson-06-p001-missing-dots-6-1.png",
  "teach-l7-2": "lesson-07-p002-two-triangles-part1-7-2.png",
  "teach-l7-3": null,
  "teach-l8-2": "lesson-08-p002-more-triangles-8-2.png",
  "teach-l8-3": "lesson-08-p003-decomposing-parallelogram-blackline.png",
  "teach-l9-1": "lesson-09-p001-bases-heights-triangle-9-1.png",
  "teach-l9-3": "lesson-09-p003-applying-formula-9-3.png",
  "teach-l10-1": "lesson-10-p001-area-12-grid-10-1.png",
  "teach-l10-3": "lesson-10-p003-better-bases-10-3.png",
  "teach-l11-1": "lesson-11-p001-wodb-bases-heights-11-1.png",
  "teach-l11-3": "lesson-11-p003-quadrilateral-strategies-11-3.png",
  "teach-l11-4": "lesson-11-p004-pinwheel-11-4.png",
  "teach-l12-1": null,
  "teach-l12-2": null,
  "teach-l13-2": "lesson-13-p002-prisms-pyramids-13-2.png",
  "teach-l13-3": "lesson-13-p003-assembling-polyhedra-net-a-blackline.png",
  "teach-l14-2": "lesson-14-p001-using-nets-surface-area-14-2.png",
  "teach-l15-1": "lesson-15-p001-wrapping-paper-15-1.png",
  "teach-l15-2": "lesson-15-p001-polyhedron-drawings-blackline.png",
  "teach-l16-2": null,
  "teach-l16-3": null,
  "teach-l17-2": null,
  "teach-l17-3": "lesson-17-p002-perfect-cubes-17-3.png",
  "teach-l17-4": null,
  "teach-l18-1": null,
  "teach-l18-3": null,
  "teach-l19-2": "lesson-19-p003-tent-planning-sheet-blackline.png",
};

unit1TeachCards.forEach((card) => {
  if (Object.prototype.hasOwnProperty.call(teachVerifiedCropPaths, card.id)) {
    card.cropPath = teachVerifiedCropPaths[card.id];
  }
});

unit1TeachCards.sort((a, b) => (
  a.lessonNumber - b.lessonNumber
  || teachActivityOrder(a) - teachActivityOrder(b)
  || a.id.localeCompare(b.id)
));

function teachLessonCrop(lessonNumber) {
  const base = unit1TeachCards.find((card) => card.lessonNumber === lessonNumber && card.cropPath);
  return base?.cropPath || "lesson-01-p001-tilings.png";
}

function teachActivityOrder(card) {
  const match = card.activityTitle?.match(/^\d+\.(\d+)/);
  return match ? Number(match[1]) : 0;
}

const triangleMessages = {
  pair: "Two congruent triangles compose one parallelogram, so each triangle is one half of that parallelogram.",
  height: "The triangle height is perpendicular to the base and reaches the opposite vertex.",
  formula: "The related parallelogram has area b × h, so the triangle area is 1/2 × b × h.",
};

const polygonData = {
  rectangles: {
    equation: "Area = 6 × 4 + 3 × 2 = 30 square units",
    message: "This split uses two rectangles. Each rectangle has a clear base and height, then the areas are added.",
  },
  triangles: {
    equation: "Area = rectangle area + two triangle areas",
    message: "A polygon can be decomposed into triangles when rectangles are not a clean fit.",
  },
  compose: {
    equation: "Area = outside rectangle - missing corner",
    message: "Composing around the shape can be efficient: find a larger area, then subtract the part that is not in the polygon.",
  },
};

const tentMessages = {
  roof: {
    equation: "Fabric includes 2 rectangular roof panels",
    message: "Roof panels are rectangles. A design estimate needs the length of the tent and the slanted roof width.",
  },
  ends: {
    equation: "Each end is a triangle: 1/2 × base × height",
    message: "The triangular ends use base and perpendicular height, not the slanted roof edge.",
  },
  floor: {
    equation: "A floor is optional: length × width",
    message: "A design constraint matters. Some tents need floor fabric and some only need the outside covering.",
  },
};

const vocabularyTerms = [
  {
    term: "Area",
    definition: "The amount of two-dimensional space inside a region.",
    example: "A rectangle with base 8 and height 4 has area 32 square units.",
    tags: ["Unit 1", "Measurement"],
  },
  {
    term: "Compose",
    definition: "Put smaller shapes together to make a larger shape.",
    example: "Two matching triangles can compose one parallelogram.",
    tags: ["Unit 1", "Geometry"],
  },
  {
    term: "Decompose",
    definition: "Split a shape into parts whose areas can be found or compared.",
    example: "A polygon can be decomposed into rectangles and triangles.",
    tags: ["Unit 1", "Strategy"],
  },
  {
    term: "Base",
    definition: "A side chosen for measuring height and building an area expression.",
    example: "In a parallelogram, any side can be a base if the matching height is perpendicular to it.",
    tags: ["Unit 1", "Area"],
  },
  {
    term: "Height",
    definition: "The perpendicular distance from a base to the opposite side or opposite vertex.",
    example: "A slanted side of a parallelogram is usually not the height.",
    tags: ["Unit 1", "Area"],
  },
  {
    term: "Parallelogram",
    definition: "A quadrilateral with two pairs of opposite parallel sides.",
    example: "A parallelogram can be rearranged into a rectangle with the same base and height.",
    tags: ["Unit 1", "Geometry"],
  },
  {
    term: "Triangle",
    definition: "A polygon with three sides.",
    example: "A triangle has half the area of a related parallelogram with the same base and height.",
    tags: ["Unit 1", "Geometry"],
  },
  {
    term: "Polygon",
    definition: "A closed two-dimensional figure made from straight line segments.",
    example: "A hexagon, triangle, and quadrilateral are all polygons.",
    tags: ["Unit 1", "Geometry"],
  },
  {
    term: "Surface Area",
    definition: "The total area of all faces of a three-dimensional object.",
    example: "A rectangular prism has 6 faces, and every face contributes to surface area.",
    tags: ["Unit 1", "3D"],
  },
  {
    term: "Face",
    definition: "A flat surface on a three-dimensional figure.",
    example: "A cube has 6 square faces.",
    tags: ["Unit 1", "Polyhedra"],
  },
  {
    term: "Edge",
    definition: "A line segment where two faces of a polyhedron meet.",
    example: "A cube has 12 edges.",
    tags: ["Unit 1", "Polyhedra"],
  },
  {
    term: "Vertex",
    definition: "A point where edges meet.",
    example: "A rectangular prism has 8 vertices.",
    tags: ["Unit 1", "Polyhedra"],
  },
  {
    term: "Polyhedron",
    definition: "A three-dimensional figure with flat polygon faces.",
    example: "Prisms and pyramids are polyhedra.",
    tags: ["Unit 1", "3D"],
  },
  {
    term: "Net",
    definition: "A two-dimensional arrangement of faces that can fold into a three-dimensional object.",
    example: "A rectangular prism net has 6 rectangles.",
    tags: ["Unit 1", "Surface Area"],
  },
  {
    term: "Prism",
    definition: "A polyhedron with two congruent, parallel bases connected by rectangular faces.",
    example: "A rectangular prism can be represented by a net of rectangles.",
    tags: ["Unit 1", "Polyhedra"],
  },
  {
    term: "Pyramid",
    definition: "A polyhedron with one base and triangular faces that meet at one vertex.",
    example: "A square pyramid has a square base and triangular side faces.",
    tags: ["Unit 1", "Polyhedra"],
  },
  {
    term: "Volume",
    definition: "The amount of three-dimensional space an object takes up.",
    example: "Volume is measured in cubic units, not square units.",
    tags: ["Unit 1", "Measurement"],
  },
  {
    term: "Squared",
    definition: "Raised to the second power, often connected to square area.",
    example: "4 squared means 4 × 4.",
    tags: ["Unit 1", "Exponents"],
  },
  {
    term: "Cubed",
    definition: "Raised to the third power, often connected to cube volume.",
    example: "4 cubed means 4 × 4 × 4.",
    tags: ["Unit 1", "Exponents"],
  },
];

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function svg(content, viewBox = "0 0 420 280") {
  return `<svg viewBox="${viewBox}" role="img" aria-hidden="true">${content}</svg>`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const tangramStage = {
  width: 760,
  height: 430,
};

const tangramPieceDefinitions = [
  {
    id: "large-1",
    label: "Large triangle 1",
    shortLabel: "Large 1",
    areaText: "2",
    colorClass: "tangram-green",
    points: "0,0 128,0 0,128",
    centerX: 42.7,
    centerY: 42.7,
    initial: { x: 44, y: 58, angle: 0 },
  },
  {
    id: "large-2",
    label: "Large triangle 2",
    shortLabel: "Large 2",
    areaText: "2",
    colorClass: "tangram-green",
    points: "0,0 128,0 0,128",
    centerX: 42.7,
    centerY: 42.7,
    initial: { x: 190, y: 58, angle: 90 },
  },
  {
    id: "medium",
    label: "Medium triangle",
    shortLabel: "Medium",
    areaText: "1",
    colorClass: "tangram-red",
    points: "0,0 91,0 0,91",
    centerX: 30.3,
    centerY: 30.3,
    initial: { x: 352, y: 72, angle: 0 },
  },
  {
    id: "square",
    label: "Unit square",
    shortLabel: "Square",
    areaText: "1",
    colorClass: "tangram-yellow",
    points: "0,0 64,0 64,64 0,64",
    centerX: 32,
    centerY: 32,
    initial: { x: 492, y: 86, angle: 45 },
  },
  {
    id: "small-1",
    label: "Small triangle 1",
    shortLabel: "Small 1",
    areaText: "1/2",
    colorClass: "tangram-blue",
    points: "0,0 64,0 0,64",
    centerX: 21.3,
    centerY: 21.3,
    initial: { x: 608, y: 58, angle: 0 },
  },
  {
    id: "small-2",
    label: "Small triangle 2",
    shortLabel: "Small 2",
    areaText: "1/2",
    colorClass: "tangram-blue",
    points: "0,0 64,0 0,64",
    centerX: 21.3,
    centerY: 21.3,
    initial: { x: 686, y: 58, angle: 90 },
  },
  {
    id: "small-3",
    label: "Small triangle 3",
    shortLabel: "Small 3",
    areaText: "1/2",
    colorClass: "tangram-blue",
    points: "0,0 64,0 0,64",
    centerX: 21.3,
    centerY: 21.3,
    initial: { x: 608, y: 146, angle: 180 },
  },
  {
    id: "small-4",
    label: "Small triangle 4",
    shortLabel: "Small 4",
    areaText: "1/2",
    colorClass: "tangram-blue",
    points: "0,0 64,0 0,64",
    centerX: 21.3,
    centerY: 21.3,
    initial: { x: 686, y: 146, angle: 270 },
  },
];

const tangramCompositionTargets = [
  { id: "area-1-not-square", label: "Area 1, not a square" },
  { id: "area-2", label: "Area 2" },
  { id: "area-2-different", label: "A different area 2 shape" },
  { id: "area-4", label: "Area 4" },
  { id: "all-pieces-square", label: "Ready for more: all pieces as one square" },
];

function initialTangramPieces() {
  return Object.fromEntries(tangramPieceDefinitions.map((piece) => [
    piece.id,
    { ...piece.initial },
  ]));
}

function getTangramPieces() {
  if (!state.teachTangramPieces) state.teachTangramPieces = initialTangramPieces();
  return state.teachTangramPieces;
}

function resetTangramPieces() {
  state.teachTangramPieces = initialTangramPieces();
  state.teachTangramSelectedPiece = "square";
}

function tangramPieceById(pieceId) {
  return tangramPieceDefinitions.find((piece) => piece.id === pieceId);
}

function tangramPieceTransform(pieceId) {
  const definition = tangramPieceById(pieceId);
  const piece = getTangramPieces()[pieceId] || definition.initial;
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle} ${definition.centerX} ${definition.centerY})`;
}

function renderTangramWorkspace() {
  const selectedPiece = state.teachTangramSelectedPiece;
  const selectionButtons = tangramPieceDefinitions.map((piece) => `
    <button
      class="page-chip tangram-select-button ${piece.id === selectedPiece ? "is-active" : ""}"
      type="button"
      data-tangram-select="${piece.id}"
      aria-pressed="${piece.id === selectedPiece}"
      title="${escapeHtml(piece.label)}"
    >
      ${escapeHtml(piece.shortLabel)}
    </button>
  `).join("");
  const pieces = tangramPieceDefinitions.map((piece) => {
    const selected = piece.id === selectedPiece ? " is-selected" : "";
    return `
      <g
        class="tangram-piece-group"
        data-tangram-piece="${piece.id}"
        transform="${tangramPieceTransform(piece.id)}"
        role="button"
        tabindex="0"
        aria-label="${escapeHtml(piece.label)}"
      >
        <title>${escapeHtml(piece.label)}</title>
        <polygon points="${piece.points}" class="tangram-piece ${piece.colorClass}${selected}"></polygon>
        <circle cx="${piece.centerX}" cy="${piece.centerY}" r="5" class="tangram-rotation-dot"></circle>
      </g>
    `;
  }).join("");
  return `
    <section class="tangram-workspace" aria-label="Interactive tangram workspace">
      <div class="tangram-toolbar">
        <div class="tangram-selectors" role="group" aria-label="Select a tangram piece">
          ${selectionButtons}
        </div>
        <div class="tangram-actions" role="group" aria-label="Tangram controls">
          <button class="hint-button" type="button" data-tangram-rotate="-45">Rotate left</button>
          <button class="hint-button" type="button" data-tangram-rotate="45">Rotate right</button>
          <button class="hint-button" type="button" data-tangram-reset>Reset pieces</button>
        </div>
      </div>
      <svg
        class="tangram-stage"
        data-tangram-stage
        viewBox="0 0 ${tangramStage.width} ${tangramStage.height}"
        role="img"
        aria-label="One unit square, four small triangles, one medium triangle, and two large triangles."
      >
        <rect x="1" y="1" width="${tangramStage.width - 2}" height="${tangramStage.height - 2}" class="tangram-board"></rect>
        <g class="tangram-reference" aria-hidden="true">
          <rect x="48" y="302" width="64" height="64"></rect>
          <line x1="48" y1="302" x2="112" y2="366"></line>
          <text x="164" y="390" text-anchor="middle">2 small triangles = 1 square unit</text>
        </g>
        ${pieces}
      </svg>
      <p class="tangram-caption">The workspace uses the source set: 1 square, 4 small right triangles, 1 medium right triangle, and 2 large right triangles.</p>
    </section>
  `;
}

const quadrilateralDecompositionStage = {
  width: 760,
  height: 440,
  gridX: 20,
  gridY: 34,
  columns: 34,
  rows: 18,
  cell: 20,
};

const quadrilateralDecompositionDefinitions = [
  {
    id: "A",
    labelX: 72,
    labelY: 82,
    vertices: [[88, 88], [196, 88], [196, 196], [88, 196]],
    works: true,
  },
  {
    id: "B",
    labelX: 236,
    labelY: 82,
    vertices: [[336, 78], [440, 124], [336, 172], [232, 124]],
    works: true,
  },
  {
    id: "C",
    labelX: 514,
    labelY: 82,
    vertices: [[590, 88], [716, 88], [716, 158], [548, 196]],
    works: false,
  },
  {
    id: "D",
    labelX: 70,
    labelY: 236,
    vertices: [[88, 250], [154, 250], [154, 396], [88, 396]],
    works: true,
  },
  {
    id: "E",
    labelX: 216,
    labelY: 236,
    vertices: [[232, 250], [392, 250], [372, 340], [252, 340]],
    works: false,
  },
  {
    id: "F",
    labelX: 512,
    labelY: 236,
    vertices: [[548, 250], [632, 250], [584, 396], [500, 396]],
    works: true,
  },
  {
    id: "G",
    labelX: 650,
    labelY: 236,
    vertices: [[678, 250], [728, 326], [728, 412], [678, 336]],
    works: true,
  },
];

function quadrilateralById(shapeId) {
  return quadrilateralDecompositionDefinitions.find((shape) => shape.id === shapeId) || quadrilateralDecompositionDefinitions[0];
}

function quadrilateralSegmentField(shapeId) {
  return `${shapeId}Segment`;
}

function quadrilateralWorkingValues(response) {
  return String(response.workingQuadrilaterals || "").split("|").filter(Boolean);
}

function quadrilateralHasWorkingSelection(response, shapeId) {
  return quadrilateralWorkingValues(response).includes(shapeId);
}

function quadrilateralSegmentValue(response, shapeId) {
  return response[quadrilateralSegmentField(shapeId)] || "";
}

function quadrilateralSegmentIndexes(segmentValue) {
  return String(segmentValue).split("-").map((value) => Number(value));
}

function quadrilateralIsDiagonal(segmentValue) {
  const [a, b] = quadrilateralSegmentIndexes(segmentValue);
  return (a === 0 && b === 2) || (a === 2 && b === 0) || (a === 1 && b === 3) || (a === 3 && b === 1);
}

function quadrilateralToggleWorking(cardId, shapeId) {
  const response = state.teachCustomResponses[cardId] || {};
  const current = quadrilateralWorkingValues(response);
  const next = current.includes(shapeId)
    ? current.filter((value) => value !== shapeId)
    : [...current, shapeId].sort();
  state.teachCustomResponses[cardId] = {
    ...response,
    workingQuadrilaterals: next.join("|"),
  };
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function resetQuadrilateralDecomposition(cardId) {
  const response = { ...(state.teachCustomResponses[cardId] || {}) };
  quadrilateralDecompositionDefinitions.forEach((shape) => {
    delete response[quadrilateralSegmentField(shape.id)];
  });
  state.teachCustomResponses[cardId] = response;
  state.teachQuadrilateralStartVertex = null;
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function markQuadrilateralVertex(cardId, shapeId, vertexIndex) {
  const shape = quadrilateralById(shapeId);
  if (vertexIndex < 0 || vertexIndex >= shape.vertices.length) return;
  state.teachQuadrilateralActive = shape.id;
  const start = state.teachQuadrilateralStartVertex;
  if (!start || start.shapeId !== shape.id || start.vertexIndex === vertexIndex) {
    state.teachQuadrilateralStartVertex = { shapeId: shape.id, vertexIndex };
    return;
  }
  const response = state.teachCustomResponses[cardId] || {};
  state.teachCustomResponses[cardId] = {
    ...response,
    [quadrilateralSegmentField(shape.id)]: [start.vertexIndex, vertexIndex].sort((a, b) => a - b).join("-"),
  };
  state.teachQuadrilateralStartVertex = null;
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function renderQuadrilateralDecompositionWorkspace(card) {
  const response = getTeachCustomResponse(card);
  const activeShape = quadrilateralById(state.teachQuadrilateralActive || "A");
  const activeShapeId = activeShape.id;
  const activeStart = state.teachQuadrilateralStartVertex;
  const stage = quadrilateralDecompositionStage;
  const shapeButtons = quadrilateralDecompositionDefinitions.map((shape) => `
    <button
      class="page-chip quadrilateral-select-button ${shape.id === activeShapeId ? "is-active" : ""}"
      type="button"
      data-quadrilateral-select="${shape.id}"
      aria-pressed="${shape.id === activeShapeId}"
    >
      ${escapeHtml(shape.id)}
    </button>
  `).join("");
  const polygons = quadrilateralDecompositionDefinitions.map((shape) => {
    const points = shape.vertices.map(([x, y]) => `${x},${y}`).join(" ");
    const segmentValue = quadrilateralSegmentValue(response, shape.id);
    const segment = segmentValue ? quadrilateralSegmentIndexes(segmentValue) : [];
    const segmentLine = segment.length === 2
      ? (() => {
        const [startIndex, endIndex] = segment;
        const [x1, y1] = shape.vertices[startIndex] || [];
        const [x2, y2] = shape.vertices[endIndex] || [];
        if (![x1, y1, x2, y2].every((value) => Number.isFinite(value))) return "";
        return `<line class="quadrilateral-segment" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;
      })()
      : "";
    const vertices = shape.vertices.map(([x, y], index) => {
      const isStart = activeStart?.shapeId === shape.id && activeStart.vertexIndex === index;
      return `
        <circle
          class="quadrilateral-vertex ${isStart ? "is-start" : ""}"
          cx="${x}"
          cy="${y}"
          r="7"
          role="button"
          tabindex="0"
          data-quadrilateral-vertex="${shape.id}"
          data-vertex-index="${index}"
          aria-label="Vertex ${index + 1} of quadrilateral ${shape.id}"
        ></circle>
      `;
    }).join("");
    return `
      <g class="quadrilateral-shape-group ${shape.id === activeShapeId ? "is-active" : ""}" data-quadrilateral-shape="${shape.id}">
        <polygon class="quadrilateral-shape" points="${points}"></polygon>
        ${segmentLine}
        ${vertices}
        <text x="${shape.labelX}" y="${shape.labelY}" class="quadrilateral-label">${escapeHtml(shape.id)}</text>
      </g>
    `;
  }).join("");
  const activeSegment = quadrilateralSegmentValue(response, activeShapeId);
  const segmentStatus = activeSegment
    ? `Quadrilateral ${activeShapeId}: segment ${quadrilateralSegmentIndexes(activeSegment).map((index) => index + 1).join(" to ")} marked.`
    : activeStart?.shapeId === activeShapeId
      ? `Quadrilateral ${activeShapeId}: choose a second vertex.`
      : `Quadrilateral ${activeShapeId}: choose two vertices to draw one segment.`;

  return `
    <section class="quadrilateral-workspace" aria-label="Interactive quadrilateral decomposition workspace">
      <div class="quadrilateral-toolbar">
        <div class="quadrilateral-selectors" role="group" aria-label="Choose a quadrilateral">
          ${shapeButtons}
        </div>
        <button class="hint-button" type="button" data-quadrilateral-reset="${card.id}">Reset segments</button>
      </div>
      <svg
        class="quadrilateral-stage"
        viewBox="0 0 ${stage.width} ${stage.height}"
        role="img"
        aria-label="Quadrilaterals A through G on a square grid."
      >
        <rect x="1" y="1" width="${stage.width - 2}" height="${stage.height - 2}" class="quadrilateral-board"></rect>
        <g aria-hidden="true">${gridLines(stage.gridX, stage.gridY, stage.columns, stage.rows, stage.cell)}</g>
        ${polygons}
      </svg>
      <p class="quadrilateral-caption">${escapeHtml(segmentStatus)}</p>
    </section>
  `;
}

function parallelogramExploreDefault(card, field) {
  const defaults = card.defaultParallelogram || {};
  return Number(defaults[field]) || 0;
}

function parallelogramExploreValue(card, field) {
  const response = getTeachCustomResponse(card);
  const parsed = Number(response[field]);
  if (Number.isFinite(parsed)) return parsed;
  return parallelogramExploreDefault(card, field);
}

function parallelogramExploreShape(card) {
  const base = clampNumber(parallelogramExploreValue(card, "base"), 3, 12);
  const height = clampNumber(parallelogramExploreValue(card, "height"), 2, 8);
  const slant = clampNumber(parallelogramExploreValue(card, "slant"), -4, 5);
  return { base, height, slant, area: base * height };
}

function hasParallelogramAdjustment(response) {
  return ["base", "height", "slant"].some((field) => Object.prototype.hasOwnProperty.call(response, field));
}

function hasParallelogramExploreResponse(card) {
  const response = getTeachCustomResponse(card);
  return hasParallelogramAdjustment(response)
    && response.showArea === "yes"
    && normalizeAnswer(response.areaAnswer).length > 0
    && normalizeAnswer(response.parallelogramReasoning).length > 0;
}

function isParallelogramExploreCorrect(card) {
  const response = getTeachCustomResponse(card);
  const shape = parallelogramExploreShape(card);
  return answerMatches(response.areaAnswer, String(shape.area));
}

function renderParallelogramRangeField(card, field, label, min, max) {
  const value = parallelogramExploreValue(card, field);
  return `
    <label class="parallelogram-range-field">
      <span>${escapeHtml(label)}: <strong>${value}</strong></span>
      <input
        type="range"
        min="${min}"
        max="${max}"
        step="1"
        value="${value}"
        data-teach-custom-input="${card.id}"
        data-teach-custom-field="${field}"
        data-rerender-on-input="true"
      >
    </label>
  `;
}

function renderParallelogramExploreWorkspace(card) {
  const response = getTeachCustomResponse(card);
  const shape = parallelogramExploreShape(card);
  const cell = 32;
  const baseY = 282;
  const leftX = 182;
  const topY = baseY - shape.height * cell;
  const topLeftX = leftX + shape.slant * cell;
  const topRightX = topLeftX + shape.base * cell;
  const bottomRightX = leftX + shape.base * cell;
  const areaVisible = response.showArea === "yes";
  const heightX = topLeftX + Math.max(1, Math.min(shape.base - 1, Math.round(shape.base / 2))) * cell;
  const checkOverlay = areaVisible ? `
    <rect
      class="parallelogram-area-rectangle"
      x="${leftX}"
      y="${topY}"
      width="${shape.base * cell}"
      height="${shape.height * cell}"
    ></rect>
    <text class="parallelogram-area-label" x="${leftX + (shape.base * cell) / 2}" y="${topY + (shape.height * cell) / 2}" text-anchor="middle" dominant-baseline="middle">
      area = ${shape.base} x ${shape.height} = ${shape.area}
    </text>
  ` : "";
  const areaText = areaVisible
    ? `Area check is visible: base ${shape.base} times height ${shape.height} equals ${shape.area} square units.`
    : "Area check is hidden. Calculate first, then use Show Area in the response panel.";
  return `
    <section class="parallelogram-explore-workspace" aria-label="Interactive parallelogram area applet recreation">
      <svg class="parallelogram-explore-stage" viewBox="0 0 760 340" role="img" aria-label="${escapeHtml(card.visualAlt)}">
        <rect x="1" y="1" width="758" height="338" class="parallelogram-explore-board"></rect>
        <g aria-hidden="true">${gridLines(34, 26, 21, 9, 32)}</g>
        ${checkOverlay}
        <polygon
          class="parallelogram-explore-shape"
          points="${leftX},${baseY} ${bottomRightX},${baseY} ${topRightX},${topY} ${topLeftX},${topY}"
        ></polygon>
        <line class="parallelogram-height-line" x1="${heightX}" y1="${topY}" x2="${heightX}" y2="${baseY}"></line>
        <path class="parallelogram-right-angle" d="M ${heightX} ${baseY - 15} L ${heightX + 15} ${baseY - 15} L ${heightX + 15} ${baseY}"></path>
        <line class="parallelogram-base-line" x1="${leftX}" y1="${baseY + 18}" x2="${bottomRightX}" y2="${baseY + 18}"></line>
        <text class="parallelogram-measure-label" x="${leftX + (shape.base * cell) / 2}" y="${baseY + 45}" text-anchor="middle">base ${shape.base}</text>
        <text class="parallelogram-measure-label" x="${heightX + 14}" y="${(topY + baseY) / 2}" dominant-baseline="middle">height ${shape.height}</text>
      </svg>
      <p class="parallelogram-explore-caption">${escapeHtml(areaText)}</p>
    </section>
  `;
}

const cutSliderFrames = {
  tyler: [
    { x: 0, y: 174, width: 205, height: 190, label: "Tyler: choose a cut" },
    { x: 210, y: 174, width: 205, height: 190, label: "Tyler: move the side piece" },
    { x: 416, y: 174, width: 204, height: 190, label: "Tyler: rectangle formed" },
  ],
  elena: [
    { x: 0, y: 390, width: 205, height: 184, label: "Elena: choose a cut" },
    { x: 210, y: 390, width: 205, height: 184, label: "Elena: move the side piece" },
    { x: 416, y: 390, width: 204, height: 184, label: "Elena: rectangle formed" },
  ],
};

function cutSliderValue(card, field) {
  const parsed = Number(getTeachCustomResponse(card)[field]);
  return Number.isFinite(parsed) ? clampNumber(parsed, 0, 2) : 0;
}

function renderCutSliderFrame(card, frame, x, y, clipId) {
  return `
    <g class="cut-slider-view">
      <clipPath id="${clipId}">
        <rect x="${x}" y="${y}" width="${frame.width}" height="${frame.height}" rx="6"></rect>
      </clipPath>
      <image
        href="${teachCropUrl(card)}"
        x="${x - frame.x}"
        y="${y - frame.y}"
        width="620"
        height="581"
        clip-path="url(#${clipId})"
      ></image>
      <rect class="cut-slider-frame" x="${x}" y="${y}" width="${frame.width}" height="${frame.height}" rx="6"></rect>
      <text class="cut-slider-label" x="${x + frame.width / 2}" y="${y - 12}" text-anchor="middle">${escapeHtml(frame.label)}</text>
    </g>
  `;
}

function renderCutSliderImage(card, strategy, x, y) {
  const frame = cutSliderFrames[strategy][cutSliderValue(card, `${strategy}Stage`)];
  return renderCutSliderFrame(card, frame, x, y, `${card.id}-${strategy}-clip`);
}

function renderCutSliderControl(card, field, label) {
  const value = cutSliderValue(card, field);
  return `
    <label class="cut-slider-control">
      <span>${escapeHtml(label)}: <strong>stage ${value + 1}</strong></span>
      <input
        type="range"
        min="0"
        max="2"
        step="1"
        value="${value}"
        data-teach-custom-input="${card.id}"
        data-teach-custom-field="${field}"
        data-rerender-on-input="true"
      >
    </label>
  `;
}

function renderParallelogramCutSliderWorkspace(card) {
  return `
    <section class="cut-slider-workspace" aria-label="Interactive source slider recreation for parallelogram rearrangements">
      <svg class="cut-slider-stage" viewBox="0 0 760 360" role="img" aria-label="${escapeHtml(card.visualAlt)}">
        <rect x="1" y="1" width="758" height="358" class="cut-slider-board"></rect>
        <text class="cut-slider-heading" x="380" y="34" text-anchor="middle">Same parallelogram, two rectangle strategies</text>
        ${renderCutSliderFrame(card, { x: 212, y: 0, width: 205, height: 151, label: "Starting parallelogram" }, 278, 64, `${card.id}-start-clip`)}
        ${renderCutSliderImage(card, "tyler", 54, 142)}
        ${renderCutSliderImage(card, "elena", 500, 142)}
      </svg>
      <div class="cut-slider-controls">
        ${renderCutSliderControl(card, "tylerStage", "Tyler slider")}
        ${renderCutSliderControl(card, "elenaStage", "Elena slider")}
      </div>
      <p class="cut-slider-caption">Each slider reveals stages from the source visual without showing the whole solution sequence at once.</p>
    </section>
  `;
}

const trianglePairStage = {
  width: 760,
  height: 430,
};

const trianglePairDefinitions = [
  {
    id: "P",
    label: "Pair P",
    points: "0,34 132,0 132,204",
    centerX: 88,
    centerY: 79,
    labelX: 86,
    labelY: 94,
    colorClass: "triangle-pair-teal",
    initial: {
      "copy-a": { x: 82, y: 84, angle: 0 },
      "copy-b": { x: 308, y: 126, angle: 180 },
    },
    rectangle: false,
    parallelogram: true,
  },
  {
    id: "Q",
    label: "Pair Q",
    points: "0,0 124,104 124,244",
    centerX: 83,
    centerY: 116,
    labelX: 86,
    labelY: 126,
    colorClass: "triangle-pair-blue",
    initial: {
      "copy-a": { x: 90, y: 74, angle: 0 },
      "copy-b": { x: 334, y: 114, angle: 180 },
    },
    rectangle: false,
    parallelogram: true,
  },
  {
    id: "R",
    label: "Pair R",
    points: "0,0 118,0 0,118",
    centerX: 39,
    centerY: 39,
    labelX: 42,
    labelY: 52,
    colorClass: "triangle-pair-gold",
    initial: {
      "copy-a": { x: 116, y: 98, angle: 0 },
      "copy-b": { x: 312, y: 98, angle: 180 },
    },
    rectangle: true,
    parallelogram: true,
  },
  {
    id: "S",
    label: "Pair S",
    points: "0,82 90,0 264,82",
    centerX: 118,
    centerY: 55,
    labelX: 116,
    labelY: 66,
    colorClass: "triangle-pair-green",
    initial: {
      "copy-a": { x: 58, y: 118, angle: 0 },
      "copy-b": { x: 350, y: 78, angle: 180 },
    },
    rectangle: false,
    parallelogram: true,
  },
  {
    id: "T",
    label: "Pair T",
    points: "0,132 72,0 144,132",
    centerX: 72,
    centerY: 88,
    labelX: 72,
    labelY: 88,
    colorClass: "triangle-pair-coral",
    initial: {
      "copy-a": { x: 116, y: 92, angle: 0 },
      "copy-b": { x: 346, y: 92, angle: 180 },
    },
    rectangle: false,
    parallelogram: true,
  },
  {
    id: "U",
    label: "Pair U",
    points: "0,0 238,0 0,116",
    centerX: 79,
    centerY: 39,
    labelX: 92,
    labelY: 52,
    colorClass: "triangle-pair-purple",
    initial: {
      "copy-a": { x: 62, y: 106, angle: 0 },
      "copy-b": { x: 388, y: 106, angle: 180 },
    },
    rectangle: true,
    parallelogram: true,
  },
];

const trianglePairConclusionOptions = [
  { id: "all", label: "All" },
  { id: "some", label: "Some" },
  { id: "none", label: "None" },
];

function trianglePairById(pairId) {
  return trianglePairDefinitions.find((pair) => pair.id === pairId) || trianglePairDefinitions[0];
}

function initialTrianglePairPieces(pairId) {
  const pair = trianglePairById(pairId);
  return {
    "copy-a": { ...pair.initial["copy-a"] },
    "copy-b": { ...pair.initial["copy-b"] },
  };
}

function getTrianglePairPieces(pairId = state.teachTrianglePairActive) {
  if (!state.teachTrianglePairPieces) state.teachTrianglePairPieces = {};
  if (!state.teachTrianglePairPieces[pairId]) {
    state.teachTrianglePairPieces[pairId] = initialTrianglePairPieces(pairId);
  }
  return state.teachTrianglePairPieces[pairId];
}

function resetTrianglePairPieces(pairId = state.teachTrianglePairActive) {
  if (!state.teachTrianglePairPieces) state.teachTrianglePairPieces = {};
  state.teachTrianglePairPieces[pairId] = initialTrianglePairPieces(pairId);
  state.teachTrianglePairSelectedPiece = "copy-a";
}

function trianglePairPieceTransform(pairId, pieceId) {
  const pair = trianglePairById(pairId);
  const piece = getTrianglePairPieces(pairId)[pieceId] || pair.initial[pieceId];
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle} ${pair.centerX} ${pair.centerY})`;
}

function trianglePairObservationField(pairId, shapeType) {
  return `${pairId}${shapeType === "rectangle" ? "Rectangle" : "Parallelogram"}`;
}

function trianglePairObservationValue(response, pairId, shapeType) {
  return response[trianglePairObservationField(pairId, shapeType)] === "yes";
}

function renderTrianglePairWorkspace() {
  const activePairId = state.teachTrianglePairActive || "P";
  const activePair = trianglePairById(activePairId);
  const selectedPiece = state.teachTrianglePairSelectedPiece || "copy-a";
  const pairButtons = trianglePairDefinitions.map((pair) => `
    <button
      class="page-chip triangle-pair-select-button ${pair.id === activePairId ? "is-active" : ""}"
      type="button"
      data-triangle-pair-select="${pair.id}"
      aria-pressed="${pair.id === activePairId}"
    >
      ${escapeHtml(pair.id)}
    </button>
  `).join("");
  const pieces = ["copy-a", "copy-b"].map((pieceId, index) => {
    const selected = pieceId === selectedPiece ? " is-selected" : "";
    return `
      <g
        class="triangle-pair-piece-group"
        data-triangle-pair-piece="${pieceId}"
        data-triangle-pair-id="${activePair.id}"
        transform="${trianglePairPieceTransform(activePair.id, pieceId)}"
        role="button"
        tabindex="0"
        aria-label="${escapeHtml(activePair.label)} copy ${index + 1}"
      >
        <title>${escapeHtml(activePair.label)} copy ${index + 1}</title>
        <polygon points="${activePair.points}" class="triangle-pair-piece ${activePair.colorClass}${selected}"></polygon>
        <text x="${activePair.labelX}" y="${activePair.labelY}" text-anchor="middle">${escapeHtml(activePair.id)}</text>
      </g>
    `;
  }).join("");
  return `
    <section class="triangle-pair-workspace" aria-label="Interactive triangle-pair composing workspace">
      <div class="triangle-pair-toolbar">
        <div class="triangle-pair-selectors" role="group" aria-label="Choose a triangle pair">
          ${pairButtons}
        </div>
        <div class="triangle-pair-actions" role="group" aria-label="Triangle pair controls">
          <button class="hint-button" type="button" data-triangle-pair-rotate="-15">Turn left</button>
          <button class="hint-button" type="button" data-triangle-pair-rotate="15">Turn right</button>
          <button class="hint-button" type="button" data-triangle-pair-rotate="90">Quarter turn</button>
          <button class="hint-button" type="button" data-triangle-pair-reset>Reset pair</button>
        </div>
      </div>
      <svg
        class="triangle-pair-stage"
        data-triangle-pair-stage
        viewBox="0 0 ${trianglePairStage.width} ${trianglePairStage.height}"
        role="img"
        aria-label="Two draggable copies of triangle pair ${escapeHtml(activePair.id)}."
      >
        <rect x="1" y="1" width="${trianglePairStage.width - 2}" height="${trianglePairStage.height - 2}" class="triangle-pair-board"></rect>
        <g class="triangle-pair-guide" aria-hidden="true">
          ${gridLines(1, 1, 19, 11, 40)}
          <text x="28" y="34">Pair ${escapeHtml(activePair.id)}</text>
          <text x="28" y="396">Drag the two copies together. Select a copy, then turn it.</text>
        </g>
        ${pieces}
      </svg>
      <p class="triangle-pair-caption">The workspace uses the student cutout set from Blackline p.1.</p>
    </section>
  `;
}

const area12TrianglePairs = {
  "6-4": { base: 6, height: 4, label: "base 6, height 4" },
  "8-3": { base: 8, height: 3, label: "base 8, height 3" },
  "12-2": { base: 12, height: 2, label: "base 12, height 2" },
};

function area12TriangleGeometry(response) {
  const pair = area12TrianglePairs[response.baseHeightPair] || null;
  if (!pair) return null;
  const cell = 34;
  const baseY = 310;
  const baseStartX = 78;
  const baseEndX = baseStartX + pair.base * cell;
  const apexY = baseY - pair.height * cell;
  const placement = response.apexPlacement;
  const apexRatio = placement === "left-skew"
    ? 0.34
    : placement === "right-skew"
      ? 0.66
      : 0;
  const apexX = baseStartX + pair.base * cell * apexRatio;
  return {
    ...pair,
    baseY,
    baseStartX,
    baseEndX,
    apexX,
    apexY,
  };
}

function renderArea12TriangleWorkspace(card) {
  const response = getTeachCustomResponse(card);
  const geometry = area12TriangleGeometry(response);
  const triangle = geometry
    ? `
      <polygon
        class="area12-triangle"
        points="${geometry.baseStartX},${geometry.baseY} ${geometry.baseEndX},${geometry.baseY} ${geometry.apexX},${geometry.apexY}"
      ></polygon>
      <line class="area12-height-line" x1="${geometry.apexX}" y1="${geometry.apexY}" x2="${geometry.apexX}" y2="${geometry.baseY}"></line>
      <line class="area12-base-line" x1="${geometry.baseStartX}" y1="${geometry.baseY}" x2="${geometry.baseEndX}" y2="${geometry.baseY}"></line>
      <text class="area12-label" x="${(geometry.baseStartX + geometry.baseEndX) / 2}" y="${geometry.baseY + 26}" text-anchor="middle">base ${geometry.base}</text>
      <text class="area12-label" x="${geometry.apexX + 10}" y="${(geometry.apexY + geometry.baseY) / 2}" dominant-baseline="middle">height ${geometry.height}</text>
      <path class="area12-right-angle" d="M ${geometry.apexX} ${geometry.baseY - 12} L ${geometry.apexX + 12} ${geometry.baseY - 12} L ${geometry.apexX + 12} ${geometry.baseY}"></path>
    `
    : `<text class="area12-placeholder" x="320" y="180" text-anchor="middle">Choose construction settings below.</text>`;
  return `
    <section class="area12-workspace" aria-label="Interactive triangle area construction workspace">
      <svg class="area12-stage" viewBox="0 0 640 360" role="img" aria-label="Grid for constructing a triangle with area 12 square units.">
        <rect x="1" y="1" width="638" height="358" class="area12-board"></rect>
        <g aria-hidden="true">${gridLines(44, 38, 16, 9, 34)}</g>
        ${triangle}
      </svg>
      <p class="area12-caption">The source asks for a drawn triangle with area 12 square units; the app builds the triangle from your selected base, height, and apex placement.</p>
    </section>
  `;
}

const triangleHeightStage = {
  width: 760,
  height: 760,
};

const triangleHeightDiagrams = [
  {
    id: "side-a",
    label: "Side a as the base",
    x: 46,
    y: 24,
    vertices: [[22, 128], [132, 38], [252, 128]],
    base: [[22, 128], [252, 128]],
    opposite: [132, 38],
    foot: [132, 128],
    labels: [
      { text: "a", x: 138, y: 118 },
      { text: "b", x: 100, y: 82 },
      { text: "c", x: 182, y: 82 },
    ],
  },
  {
    id: "side-b",
    label: "Side b as the base",
    x: 46,
    y: 184,
    vertices: [[22, 36], [82, 158], [252, 158]],
    base: [[82, 158], [252, 158]],
    opposite: [22, 36],
    foot: [82, 158],
    labels: [
      { text: "a", x: 154, y: 94 },
      { text: "b", x: 156, y: 150 },
      { text: "c", x: 60, y: 102 },
    ],
  },
  {
    id: "side-c",
    label: "Side c as the base",
    x: 46,
    y: 360,
    vertices: [[72, 168], [202, 38], [170, 168]],
    base: [[72, 168], [170, 168]],
    opposite: [202, 38],
    foot: [202, 168],
    extension: [[170, 168], [214, 168]],
    labels: [
      { text: "a", x: 134, y: 112 },
      { text: "b", x: 176, y: 104 },
      { text: "c", x: 124, y: 160 },
    ],
  },
  {
    id: "A",
    label: "A",
    x: 364,
    y: 28,
    vertices: [[22, 124], [88, 48], [236, 124]],
    base: [[22, 124], [236, 124]],
    opposite: [88, 48],
    foot: [88, 124],
    labels: [{ text: "base", x: 126, y: 148 }],
  },
  {
    id: "B",
    label: "B",
    x: 364,
    y: 196,
    vertices: [[56, 132], [90, 32], [196, 156]],
    base: [[56, 132], [196, 156]],
    opposite: [90, 32],
    foot: [76, 135],
    labels: [{ text: "base", x: 154, y: 130 }],
  },
  {
    id: "C",
    label: "C",
    x: 572,
    y: 196,
    vertices: [[44, 18], [44, 164], [112, 118]],
    base: [[44, 164], [112, 118]],
    opposite: [44, 18],
    foot: [8, 188],
    extension: [[44, 164], [8, 188]],
    labels: [{ text: "base", x: 92, y: 146 }],
  },
  {
    id: "D",
    label: "D",
    x: 364,
    y: 408,
    vertices: [[34, 36], [34, 158], [196, 158]],
    base: [[34, 158], [196, 158]],
    opposite: [34, 36],
    foot: [34, 158],
    labels: [{ text: "base", x: 108, y: 182 }],
  },
  {
    id: "E",
    label: "E",
    x: 572,
    y: 408,
    vertices: [[24, 24], [82, 158], [222, 158]],
    base: [[82, 158], [222, 158]],
    opposite: [24, 24],
    foot: [82, 158],
    labels: [{ text: "base", x: 148, y: 182 }],
  },
  {
    id: "F",
    label: "F",
    x: 364,
    y: 602,
    vertices: [[34, 28], [34, 150], [142, 28]],
    base: [[34, 28], [142, 28]],
    opposite: [34, 150],
    foot: [34, 28],
    labels: [{ text: "base", x: 98, y: 72 }],
  },
];

function triangleHeightField(diagramId) {
  return `${diagramId}Height`;
}

function triangleHeightDiagramById(diagramId) {
  return triangleHeightDiagrams.find((diagram) => diagram.id === diagramId);
}

function triangleHeightPointMap(diagram) {
  const points = [
    ["opposite", diagram.opposite],
    ["foot", diagram.foot],
    ["baseStart", diagram.base[0]],
    ["baseEnd", diagram.base[1]],
  ];
  const seen = new Set();
  return Object.fromEntries(points.filter(([, point]) => {
    if (!point) return false;
    const key = `${point[0]},${point[1]}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }));
}

function triangleHeightPointIds(value) {
  return String(value || "").split("|").filter(Boolean);
}

function triangleHeightSegmentValue(response, diagramId) {
  return response[triangleHeightField(diagramId)] || "";
}

function triangleHeightIsCorrect(response, diagram) {
  const pointIds = triangleHeightPointIds(triangleHeightSegmentValue(response, diagram.id));
  return pointIds.includes("opposite") && pointIds.includes("foot");
}

function markTriangleHeightPoint(cardId, diagramId, pointId) {
  const diagram = triangleHeightDiagramById(diagramId);
  if (!diagram || !triangleHeightPointMap(diagram)[pointId]) return;
  const start = state.teachTriangleHeightStartPoint;
  if (!start || start.cardId !== cardId || start.diagramId !== diagramId || start.pointId === pointId) {
    state.teachTriangleHeightStartPoint = { cardId, diagramId, pointId };
    return;
  }
  const response = state.teachCustomResponses[cardId] || {};
  state.teachCustomResponses[cardId] = {
    ...response,
    [triangleHeightField(diagramId)]: `${start.pointId}|${pointId}`,
  };
  state.teachTriangleHeightStartPoint = null;
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function resetTriangleHeights(cardId) {
  const response = { ...(state.teachCustomResponses[cardId] || {}) };
  triangleHeightDiagrams.forEach((diagram) => {
    delete response[triangleHeightField(diagram.id)];
  });
  state.teachCustomResponses[cardId] = response;
  state.teachTriangleHeightStartPoint = null;
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function renderTriangleHeightWorkspace(card) {
  const response = getTeachCustomResponse(card);
  const markedCount = triangleHeightDiagrams.filter((diagram) => triangleHeightSegmentValue(response, diagram.id)).length;
  const diagrams = triangleHeightDiagrams.map((diagram) => {
    const pointMap = triangleHeightPointMap(diagram);
    const segmentPointIds = triangleHeightPointIds(triangleHeightSegmentValue(response, diagram.id));
    const segmentPoints = segmentPointIds.map((pointId) => pointMap[pointId]).filter(Boolean);
    const segment = segmentPoints.length === 2
      ? `<line class="triangle-height-segment" x1="${segmentPoints[0][0]}" y1="${segmentPoints[0][1]}" x2="${segmentPoints[1][0]}" y2="${segmentPoints[1][1]}"></line>`
      : "";
    const extension = diagram.extension
      ? `<line class="triangle-height-extension" x1="${diagram.extension[0][0]}" y1="${diagram.extension[0][1]}" x2="${diagram.extension[1][0]}" y2="${diagram.extension[1][1]}"></line>`
      : "";
    const handles = Object.entries(pointMap).map(([pointId, [x, y]]) => {
      const isStart = state.teachTriangleHeightStartPoint?.cardId === card.id
        && state.teachTriangleHeightStartPoint?.diagramId === diagram.id
        && state.teachTriangleHeightStartPoint?.pointId === pointId;
      return `
        <circle
          class="triangle-height-point ${isStart ? "is-start" : ""}"
          cx="${x}"
          cy="${y}"
          r="6"
          role="button"
          tabindex="0"
          data-triangle-height-point="${diagram.id}"
          data-point-id="${pointId}"
          aria-label="${escapeHtml(diagram.label)} point ${escapeHtml(pointId)}"
        ></circle>
      `;
    }).join("");
    const labels = (diagram.labels || []).map((label) => (
      `<text class="triangle-height-text" x="${label.x}" y="${label.y}" text-anchor="${label.anchor || "middle"}">${escapeHtml(label.text)}</text>`
    )).join("");
    const baseLabel = /^[A-F]$/.test(diagram.id)
      ? `<text class="triangle-height-id" x="0" y="20">${escapeHtml(diagram.id)}</text>`
      : `<text class="triangle-height-side-label" x="0" y="20">${escapeHtml(diagram.label)}:</text>`;
    return `
      <g class="triangle-height-diagram" transform="translate(${diagram.x} ${diagram.y})" data-triangle-height-diagram="${diagram.id}">
        ${baseLabel}
        <polygon class="triangle-height-triangle" points="${diagram.vertices.map(([x, y]) => `${x},${y}`).join(" ")}"></polygon>
        ${extension}
        <line class="triangle-height-base" x1="${diagram.base[0][0]}" y1="${diagram.base[0][1]}" x2="${diagram.base[1][0]}" y2="${diagram.base[1][1]}"></line>
        ${segment}
        ${labels}
        ${handles}
      </g>
    `;
  }).join("");
  return `
    <section class="triangle-height-workspace" aria-label="Interactive triangle height marking workspace">
      <div class="triangle-height-toolbar">
        <p>Click an opposite vertex, then click the matching point on the base line to draw a height.</p>
        <button class="hint-button" type="button" data-triangle-height-reset="${card.id}">Reset heights</button>
      </div>
      <svg class="triangle-height-stage" viewBox="0 0 ${triangleHeightStage.width} ${triangleHeightStage.height}" role="img" aria-label="Triangle diagrams for marking corresponding heights.">
        <rect x="1" y="1" width="${triangleHeightStage.width - 2}" height="${triangleHeightStage.height - 2}" class="triangle-height-board"></rect>
        ${diagrams}
      </svg>
      <p class="triangle-height-caption">${markedCount} of ${triangleHeightDiagrams.length} height segments marked.</p>
    </section>
  `;
}

const prism12Options = [
  { id: "3-2-2", label: "3 x 2 x 2 source prism", l: 3, w: 2, h: 2, sourceExample: true },
  { id: "4-3-1", label: "4 x 3 x 1", l: 4, w: 3, h: 1 },
  { id: "6-2-1", label: "6 x 2 x 1", l: 6, w: 2, h: 1 },
  { id: "12-1-1", label: "12 x 1 x 1", l: 12, w: 1, h: 1 },
];

const prism8Options = [
  { id: "2-2-2", label: "2 x 2 x 2 cube", l: 2, w: 2, h: 2 },
  { id: "4-2-1", label: "4 x 2 x 1 prism", l: 4, w: 2, h: 1 },
  { id: "8-1-1", label: "8 x 1 x 1 bar", l: 8, w: 1, h: 1 },
];

const cube32Options = [
  { id: "2", label: "2 x 2 x 2", edge: 2 },
  { id: "3", label: "3 x 3 x 3", edge: 3 },
  { id: "4", label: "4 x 4 x 4", edge: 4 },
];

function prismVolume(shape) {
  return shape.l * shape.w * shape.h;
}

function prismSurfaceArea(shape) {
  return 2 * (shape.l * shape.w + shape.l * shape.h + shape.w * shape.h);
}

function cubeShape(edge) {
  return { l: edge, w: edge, h: edge };
}

function prismOptionsForField(card, field) {
  if (card.builderMode === "single12" && field === "prism12Dims") return prism12Options;
  if (card.builderMode === "compare8" && (field === "shapeA" || field === "shapeB")) return prism8Options;
  if (card.builderMode === "cube32" && field === "edgeLength") return cube32Options;
  return [];
}

function prismOptionById(options, id) {
  return options.find((option) => option.id === id) || null;
}

function renderPrismChoiceButtons(card, field, label, options) {
  const response = getTeachCustomResponse(card);
  return `
    <div class="guided-field">
      <p class="guided-field-label">${escapeHtml(label)}</p>
      <div class="guided-choice-row" role="group" aria-label="${escapeHtml(label)}">
        ${options.map((option) => {
          const active = response[field] === option.id;
          return `
            <button
              class="page-chip guided-choice-button ${active ? "is-active" : ""}"
              type="button"
              data-prism-build-choice="${card.id}"
              data-teach-custom-field="${field}"
              data-option-id="${option.id}"
              aria-pressed="${active}"
            >
              ${escapeHtml(option.label)}
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderIsometricPrism(shape, x, y, cell, title) {
  const depthX = cell * 0.55 * shape.w;
  const depthY = cell * 0.34 * shape.w;
  const lengthX = cell * shape.l;
  const heightY = cell * shape.h;
  const p = {
    a: [x, y],
    b: [x + lengthX, y],
    c: [x + lengthX + depthX, y - depthY],
    d: [x + depthX, y - depthY],
    at: [x, y - heightY],
    bt: [x + lengthX, y - heightY],
    ct: [x + lengthX + depthX, y - heightY - depthY],
    dt: [x + depthX, y - heightY - depthY],
  };
  const points = (...names) => names.map((name) => p[name].join(",")).join(" ");
  const line = (start, end, className = "prism-builder-edge") => (
    `<line class="${className}" x1="${start[0]}" y1="${start[1]}" x2="${end[0]}" y2="${end[1]}"></line>`
  );
  const topGrid = Array.from({ length: Math.max(0, shape.l - 1) }, (_, index) => {
    const ratio = (index + 1) / shape.l;
    const start = [p.at[0] + lengthX * ratio, p.at[1]];
    const end = [p.dt[0] + lengthX * ratio, p.dt[1]];
    return line(start, end, "prism-builder-grid-line");
  }).join("") + Array.from({ length: Math.max(0, shape.w - 1) }, (_, index) => {
    const ratio = (index + 1) / shape.w;
    const start = [p.at[0] + depthX * ratio, p.at[1] - depthY * ratio];
    const end = [p.bt[0] + depthX * ratio, p.bt[1] - depthY * ratio];
    return line(start, end, "prism-builder-grid-line");
  }).join("");
  const frontGrid = Array.from({ length: Math.max(0, shape.l - 1) }, (_, index) => {
    const xLine = x + cell * (index + 1);
    return line([xLine, y], [xLine, y - heightY], "prism-builder-grid-line");
  }).join("") + Array.from({ length: Math.max(0, shape.h - 1) }, (_, index) => {
    const yLine = y - cell * (index + 1);
    return line([x, yLine], [x + lengthX, yLine], "prism-builder-grid-line");
  }).join("");
  const rightGrid = Array.from({ length: Math.max(0, shape.w - 1) }, (_, index) => {
    const ratio = (index + 1) / shape.w;
    const start = [p.b[0] + depthX * ratio, p.b[1] - depthY * ratio];
    const end = [p.bt[0] + depthX * ratio, p.bt[1] - depthY * ratio];
    return line(start, end, "prism-builder-grid-line");
  }).join("") + Array.from({ length: Math.max(0, shape.h - 1) }, (_, index) => {
    const yOffset = cell * (index + 1);
    return line([p.b[0], p.b[1] - yOffset], [p.c[0], p.c[1] - yOffset], "prism-builder-grid-line");
  }).join("");
  return `
    <g class="prism-builder-solid">
      <title>${escapeHtml(title)}</title>
      <polygon class="prism-builder-face prism-builder-top" points="${points("at", "bt", "ct", "dt")}"></polygon>
      <polygon class="prism-builder-face prism-builder-right" points="${points("b", "c", "ct", "bt")}"></polygon>
      <polygon class="prism-builder-face prism-builder-front" points="${points("a", "b", "bt", "at")}"></polygon>
      ${topGrid}
      ${rightGrid}
      ${frontGrid}
      <polyline class="prism-builder-edge" points="${points("a", "b", "c", "d", "a", "at", "bt", "b", "bt", "ct", "c", "ct", "dt", "d", "dt", "at")}"></polyline>
      <text class="prism-builder-solid-label" x="${x + lengthX / 2}" y="${y + 30}" text-anchor="middle">${escapeHtml(title)}</text>
    </g>
  `;
}

function renderPrismPlaceholder(x, y, width, height, label) {
  return `
    <g class="prism-builder-placeholder">
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="8"></rect>
      <text x="${x + width / 2}" y="${y + height / 2}" text-anchor="middle" dominant-baseline="middle">${escapeHtml(label)}</text>
    </g>
  `;
}

function renderPrismBuilderWorkspace(card) {
  const response = getTeachCustomResponse(card);
  let content = "";
  let caption = "";
  if (card.builderMode === "single12") {
    const source = prism12Options[0];
    const built = prismOptionById(prism12Options, response.prism12Dims);
    content = `
      ${renderIsometricPrism(source, 54, 250, 36, "source 3 x 2 x 2")}
      ${built ? renderIsometricPrism(built, 384, 250, 28, `your ${built.label}`) : renderPrismPlaceholder(360, 70, 300, 190, "Choose a different 12-cube prism.")}
    `;
    caption = built
      ? `Your prism uses ${prismVolume(built)} cubes and has surface area ${prismSurfaceArea(built)} square units.`
      : "The source prism uses 12 cubes and has surface area 32; build a different 12-cube prism below.";
  } else if (card.builderMode === "compare8") {
    const shapeA = prismOptionById(prism8Options, response.shapeA);
    const shapeB = prismOptionById(prism8Options, response.shapeB);
    content = `
      ${shapeA ? renderIsometricPrism(shapeA, 72, 250, 32, `Shape A: ${shapeA.label}`) : renderPrismPlaceholder(54, 70, 280, 190, "Choose Shape A.")}
      ${shapeB ? renderIsometricPrism(shapeB, 430, 250, 32, `Shape B: ${shapeB.label}`) : renderPrismPlaceholder(408, 70, 280, 190, "Choose Shape B.")}
    `;
    caption = shapeA && shapeB
      ? `Shape A surface area: ${prismSurfaceArea(shapeA)}. Shape B surface area: ${prismSurfaceArea(shapeB)}. Both use 8 cubes.`
      : "Choose two different 8-cube solids, then compare their volume and exposed surface area.";
  } else if (card.builderMode === "cube32") {
    const edgeOption = prismOptionById(cube32Options, response.edgeLength);
    const edge = edgeOption?.edge;
    const shape = edge ? cubeShape(edge) : null;
    content = shape
      ? renderIsometricPrism(shape, 228, 278, edge === 4 ? 38 : 50, `${edge} x ${edge} x ${edge}`)
      : renderPrismPlaceholder(170, 64, 420, 230, "Choose a cube edge length to test.");
    caption = shape
      ? `${edge} x ${edge} x ${edge} uses ${edge ** 3} cubes; ${Math.max(0, 32 - edge ** 3)} cubes would be left over if it fits.`
      : "The source gives 32 cubes; the largest whole cube must use a perfect-cube number of cubes no more than 32.";
  }
  return `
    <section class="prism-builder-workspace" aria-label="Interactive unit-cube builder">
      <svg class="prism-builder-stage" viewBox="0 0 760 330" role="img" aria-label="${escapeHtml(card.visualAlt)}">
        <rect x="1" y="1" width="758" height="328" class="prism-builder-board"></rect>
        ${content}
      </svg>
      <p class="prism-builder-caption">${escapeHtml(caption)}</p>
    </section>
  `;
}

function sourcePreviewUrl(item) {
  return encodeURI(`artifacts/unit 1/${item.previewPath}`);
}

function teachMeSourceUrl(source) {
  return encodeURI(source.previewPath);
}

function blacklineMasterPreviewUrl(source) {
  return encodeURI(source.previewPath);
}

function modalSourceEntry() {
  const practiceItem = practiceBank.find((entry) => entry.id === state.sourceModalItemId);
  if (practiceItem) {
    if (!canOpenPracticeSource(practiceItem)) return null;
    return {
      eyebrow: "Rendered source",
      title: `Source p.${practiceItem.sourcePage}`,
      subtitle: practiceItem.source,
      imageSrc: sourcePreviewUrl(practiceItem),
      imageAlt: `Rendered source page for ${practiceItem.skill}`,
    };
  }
  const teachPdfMatch = unit1TeachCards
    .flatMap((card) => teachPdfPages(card).map((page) => ({ card, page, id: teachPdfModalId(card, page) })))
    .find((entry) => entry.id === state.sourceModalItemId);
  if (teachPdfMatch) {
    const { card, page } = teachPdfMatch;
    return {
      eyebrow: "Student Task Statement source",
      title: `Lesson ${card.lessonNumber}: ${card.title} · PDF p.${page}`,
      subtitle: "Rendered page from the local Student Task Statements PDF.",
      imageSrc: studentTaskPreviewUrl(card, page),
      imageAlt: `Rendered Student Task Statement page ${page} for Grade 6 Unit 1 Lesson ${card.lessonNumber}: ${card.title}`,
    };
  }
  const teachBlacklineMatch = unit1TeachCards
    .flatMap((card) => teachBlacklineSources(card).map((source, index) => ({
      card,
      source,
      id: teachBlacklineModalId(card, source, index),
    })))
    .find((entry) => entry.id === state.sourceModalItemId);
  if (teachBlacklineMatch) {
    const { source } = teachBlacklineMatch;
    return {
      eyebrow: "Blackline Master source",
      title: `${source.activityAddress}: ${source.title} · Blackline p.${source.page}`,
      subtitle: source.subtitle,
      imageSrc: blacklineMasterPreviewUrl(source),
      imageAlt: source.alt,
    };
  }
  const teachSource = teachMeSources.find((source) => source.id === state.sourceModalItemId);
  if (!teachSource) return null;
  return {
    eyebrow: "Original Teach Me source",
    title: teachSource.title,
    subtitle: teachSource.subtitle,
    imageSrc: teachMeSourceUrl(teachSource),
    imageAlt: teachSource.alt,
  };
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function defaultSourceModalLayout() {
  const viewportWidth = window.innerWidth || 1024;
  const viewportHeight = window.innerHeight || 768;
  const gap = sourceModalBounds.edgeGap;
  const width = Math.min(960, Math.max(sourceModalBounds.minWidth, viewportWidth - gap * 4));
  const height = Math.min(760, Math.max(sourceModalBounds.minHeight, viewportHeight - gap * 4));
  return {
    width,
    height,
    x: Math.round((viewportWidth - width) / 2),
    y: Math.round((viewportHeight - height) / 2),
  };
}

function normalizeSourceModalLayout(layout = state.sourceModalLayout || defaultSourceModalLayout()) {
  const viewportWidth = window.innerWidth || 1024;
  const viewportHeight = window.innerHeight || 768;
  const gap = sourceModalBounds.edgeGap;
  const maxWidth = Math.max(sourceModalBounds.minWidth, viewportWidth - gap * 2);
  const maxHeight = Math.max(sourceModalBounds.minHeight, viewportHeight - gap * 2);
  const width = clampNumber(layout.width, sourceModalBounds.minWidth, maxWidth);
  const height = clampNumber(layout.height, sourceModalBounds.minHeight, maxHeight);
  const maxX = Math.max(gap, viewportWidth - width - gap);
  const maxY = Math.max(gap, viewportHeight - height - gap);
  return {
    width,
    height,
    x: clampNumber(layout.x, gap, maxX),
    y: clampNumber(layout.y, gap, maxY),
  };
}

function sourceModalStyle() {
  state.sourceModalLayout = normalizeSourceModalLayout();
  const { x, y, width, height } = state.sourceModalLayout;
  return `left: ${x}px; top: ${y}px; width: ${width}px; height: ${height}px;`;
}

function normalizeAnswer(value) {
  return String(value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function parseMathNumber(value) {
  const text = normalizeAnswer(value);
  if (!text) return null;
  const mixed = text.match(/^(-?\d+)\s+(\d+)\/(\d+)$/);
  if (mixed) {
    const whole = Number(mixed[1]);
    const numerator = Number(mixed[2]);
    const denominator = Number(mixed[3]);
    if (!denominator) return null;
    return whole + Math.sign(whole || 1) * (numerator / denominator);
  }
  const fraction = text.match(/^(-?\d+)\/(\d+)$/);
  if (fraction) {
    const numerator = Number(fraction[1]);
    const denominator = Number(fraction[2]);
    if (!denominator) return null;
    return numerator / denominator;
  }
  const numeric = Number(text.replace(/,/g, ""));
  return Number.isFinite(numeric) ? numeric : null;
}

function getPracticeValue(item) {
  if (item.responseType === "singleChoice") {
    return state.practiceSelections[item.id]?.[0] || "";
  }
  if (item.responseType === "multiSelect") {
    return state.practiceSelections[item.id] || [];
  }
  if (item.responseType === "matching") {
    return state.practiceResponses[item.id] || {};
  }
  return state.practiceResponses[item.id] || "";
}

function isPracticeCorrect(item) {
  if (item.responseType === "open") return false;
  const answer = getPracticeValue(item);
  if (item.responseType === "number") {
    const givenNumber = parseMathNumber(answer);
    return item.answerKey.some((accepted) => {
      const acceptedNumber = parseMathNumber(accepted);
      if (givenNumber !== null && acceptedNumber !== null) return Math.abs(givenNumber - acceptedNumber) < 1e-9;
      return normalizeAnswer(answer) === normalizeAnswer(accepted);
    });
  }
  if (item.responseType === "singleChoice") {
    return answer === item.answerKey[0];
  }
  if (item.responseType === "multiSelect") {
    const selected = [...answer].sort();
    const expected = [...item.answerKey].sort();
    return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
  }
  if (item.responseType === "matching") {
    const expected = item.matchTargets || [];
    return expected.length > 0 && expected.every((target) => answer[target.id] === target.correctChoiceId);
  }
  return false;
}

function isPracticeSubmitted(item) {
  return Boolean(state.practiceSubmitted[item.id]);
}

function canShowPracticeSample(item) {
  const submitted = isPracticeSubmitted(item);
  if (item.responseType === "open") return submitted;
  return submitted && isPracticeCorrect(item);
}

function canOpenPracticeSource(item) {
  if (item.sourcePreviewMode !== "afterSubmit") return true;
  const submitted = isPracticeSubmitted(item);
  if (item.responseType === "open") return submitted;
  return submitted && isPracticeCorrect(item);
}

function practiceSections() {
  const map = new Map();
  for (const item of practiceBank) {
    if (!map.has(item.section)) map.set(item.section, item.sectionName);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

function filteredPracticeItems() {
  if (state.practiceFilter === "all") return practiceBank;
  return practiceBank.filter((item) => item.section === state.practiceFilter);
}

function renderPracticeFilters() {
  const container = document.getElementById("practiceFilter");
  if (!container) return;
  const filters = [["all", `All (${practiceBank.length})`], ...practiceSections().map(([key, name]) => [
    key,
    `${key}: ${name} (${practiceBank.filter((item) => item.section === key).length})`,
  ])];
  container.innerHTML = filters.map(([key, label]) => `
    <button class="filter-chip ${state.practiceFilter === key ? "is-active" : ""}" type="button" data-practice-filter="${key}" aria-pressed="${state.practiceFilter === key}">
      ${escapeHtml(label)}
    </button>
  `).join("");
}

function practiceVisual(item) {
  const data = item.visualModelData || {};
  if (data.type === "areaHalfUnits") {
    const squares = Array.from({ length: data.squares }, (_, index) => (
      `<rect x="${56 + index * 78}" y="72" width="64" height="64" class="shape-fill blue"></rect>`
    )).join("");
    const triangles = Array.from({ length: data.triangles }, (_, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const x = 54 + col * 76;
      const y = 164 + row * 52;
      return `<polygon points="${x},${y + 48} ${x + 64},${y + 48} ${x + 64},${y}" class="shape-fill ${index % 2 ? "amber" : "teal"}"></polygon>`;
    }).join("");
    return svg(`${squares}${triangles}<text x="222" y="44" text-anchor="middle" class="measure-label">2 squares + 5 half-squares</text>`, "0 0 430 290");
  }
  if (data.type === "missingPiece") {
    const width = data.width || 8;
    const height = data.height || 6;
    const missingWidth = data.missingWidth || 3;
    const missingHeight = data.missingHeight || 4;
    return svg(`
      <rect x="98" y="52" width="224" height="224" class="shape-fill blue"></rect>
      <rect x="166" y="120" width="90" height="90" fill="white" stroke="#1f2a33" stroke-width="2.5" transform="rotate(-14 211 165)"></rect>
      <text x="210" y="36" text-anchor="middle" class="measure-label">${width} cm</text>
      <text x="332" y="166" class="measure-label">${height} cm</text>
      <text x="214" y="168" text-anchor="middle" class="face-label">${missingWidth} cm by ${missingHeight} cm</text>
    `, "0 0 420 290");
  }
  if (data.type === "areaRearrange") {
    return svg(`
      <polygon points="80,200 150,78 220,200" class="shape-fill amber"></polygon>
      <polygon points="220,200 290,78 360,200" class="shape-fill teal"></polygon>
      <path d="M72 238 H368" class="model-line"></path>
      <text x="220" y="42" text-anchor="middle" class="measure-label">same pieces, rearranged</text>
    `, "0 0 430 280");
  }
  if (data.type === "areaMeaningStatements") {
    const gridX = 74;
    const gridY = 42;
    const cell = 28;
    const gridColumns = 10;
    const gridRows = 7;
    const gridLines = [];
    for (let index = 0; index <= gridColumns; index += 1) {
      const x = gridX + index * cell;
      gridLines.push(`<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + gridRows * cell}" class="source-grid-line"></line>`);
    }
    for (let index = 0; index <= gridRows; index += 1) {
      const y = gridY + index * cell;
      gridLines.push(`<line x1="${gridX}" y1="${y}" x2="${gridX + gridColumns * cell}" y2="${y}" class="source-grid-line"></line>`);
    }
    const point = (x, y) => `${gridX + x * cell},${gridY + y * cell}`;
    return svg(`
      <rect x="${gridX}" y="${gridY}" width="${gridColumns * cell}" height="${gridRows * cell}" fill="#ffffff" stroke="#87929b" stroke-width="1.1"></rect>
      ${gridLines.join("")}
      <path d="M${point(3, 2)} H${gridX + 7 * cell} V${gridY + 5 * cell} H${gridX + 8 * cell} V${gridY + 7 * cell} H${gridX + 2 * cell} V${gridY + 5 * cell} H${gridX + 3 * cell} Z" class="model-line"></path>
      <text x="${gridX + 5 * cell}" y="${gridY + 1.72 * cell}" text-anchor="middle" class="measure-label">4</text>
      <text x="${gridX + 7.32 * cell}" y="${gridY + 3.55 * cell}" class="measure-label">3</text>
      <text x="${gridX + 1.38 * cell}" y="${gridY + 6.15 * cell}" class="measure-label">2</text>
      <text x="${gridX + 5 * cell}" y="${gridY + 7.45 * cell}" text-anchor="middle" class="measure-label">6</text>
    `, "0 0 430 275");
  }
  if (data.type === "rearrangedSquareSameArea") {
    const cell = 28;
    const originalX = 72;
    const originalY = 72;
    const rearrangedX = 276;
    const rearrangedY = 72;
    const square = (originX, originY, col, row, classes) => (
      `<rect x="${originX + col * cell}" y="${originY + row * cell}" width="${cell}" height="${cell}" class="unit-piece ${classes}"></rect>`
    );
    const originalPieces = [];
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        originalPieces.push(square(originalX, originalY, col, row, "blue original-unit-piece"));
      }
    }
    const ringPieces = [];
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col < 4; col += 1) {
        if (col >= 1 && col <= 2 && row >= 1 && row <= 2) continue;
        ringPieces.push(square(rearrangedX, rearrangedY, col, row, "blue rearranged-unit-piece"));
      }
    }
    const movedPieces = [
      [2, -1],
      [-1, 1],
      [4, 2],
      [1, 4],
    ].map(([col, row]) => square(rearrangedX, rearrangedY, col, row, "blue rearranged-unit-piece moved-unit-piece"));
    return svg(`
      ${originalPieces.join("")}
      ${ringPieces.join("")}
      ${movedPieces.join("")}
      <rect x="${rearrangedX + cell}" y="${rearrangedY + cell}" width="${2 * cell}" height="${2 * cell}" class="unit-hole"></rect>
    `, "0 0 440 250");
  }
  if (data.type === "compareRegions") {
    const large = 128;
    const moved = 32;
    const figureAX = 72;
    const figureAY = 72;
    const figureBX = 262;
    const figureBY = 72;
    const attachmentY = figureBY + 40;
    const holeX = figureBX + 78;
    const holeY = attachmentY;
    return svg(`
      <text x="${figureAX - 22}" y="${figureAY + 4}" text-anchor="middle" class="measure-label">A</text>
      <rect x="${figureAX}" y="${figureAY}" width="${large}" height="${large}" class="region-fill-blue"></rect>
      <rect x="${figureAX}" y="${figureAY}" width="${large}" height="${large}" class="model-outline"></rect>
      <text x="${figureBX - 22}" y="${figureBY + 4}" text-anchor="middle" class="measure-label">B</text>
      <rect x="${figureBX}" y="${figureBY}" width="${large}" height="${large}" class="region-fill-blue"></rect>
      <rect x="${figureBX + large}" y="${attachmentY}" width="${moved}" height="${moved}" class="region-fill-blue moved-square-attachment"></rect>
      <path d="M${figureBX},${figureBY} H${figureBX + large} V${attachmentY} H${figureBX + large + moved} V${attachmentY + moved} H${figureBX + large} V${figureBY + large} H${figureBX} Z" class="model-line"></path>
      <rect x="${holeX}" y="${holeY}" width="${moved}" height="${moved}" class="unit-hole moved-square-hole"></rect>
    `, "0 0 450 235");
  }
  if (data.type === "parallelogramSort") {
    const gridX = 32;
    const gridY = 42;
    const cell = 18;
    const gridColumns = 20;
    const gridRows = 13;
    const gridLines = [];
    for (let index = 0; index <= gridColumns; index += 1) {
      const x = gridX + index * cell;
      gridLines.push(`<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + gridRows * cell}" class="source-grid-line"></line>`);
    }
    for (let index = 0; index <= gridRows; index += 1) {
      const y = gridY + index * cell;
      gridLines.push(`<line x1="${gridX}" y1="${y}" x2="${gridX + gridColumns * cell}" y2="${y}" class="source-grid-line"></line>`);
    }
    const point = (x, y) => `${gridX + x * cell},${gridY + y * cell}`;
    return svg(`
      <rect x="${gridX}" y="${gridY}" width="${gridColumns * cell}" height="${gridRows * cell}" fill="#ffffff" stroke="#87929b" stroke-width="1.1"></rect>
      ${gridLines.join("")}
      <text x="${gridX + 2.6 * cell}" y="${gridY + 2 * cell}" text-anchor="middle" class="measure-label">A</text>
      <polygon points="${point(5, 2)} ${point(10, 2)} ${point(9, 4)} ${point(6, 4)}" class="shape-fill blue"></polygon>
      <text x="${gridX + 12 * cell}" y="${gridY + 2 * cell}" text-anchor="middle" class="measure-label">B</text>
      <polygon points="${point(14, 2)} ${point(18, 2)} ${point(17, 4)} ${point(13, 4)}" class="shape-fill blue"></polygon>
      <text x="${gridX + 2.1 * cell}" y="${gridY + 8 * cell}" text-anchor="middle" class="measure-label">C</text>
      <rect x="${gridX + 4 * cell}" y="${gridY + 8 * cell}" width="${3 * cell}" height="${4 * cell}" class="shape-fill blue"></rect>
      <text x="${gridX + 9.8 * cell}" y="${gridY + 8 * cell}" text-anchor="middle" class="measure-label">D</text>
      <polygon points="${point(12, 8)} ${point(14, 8)} ${point(13, 10)} ${point(12, 11)} ${point(11, 10)}" class="shape-fill blue"></polygon>
      <text x="${gridX + 15 * cell}" y="${gridY + 8 * cell}" text-anchor="middle" class="measure-label">E</text>
      <polygon points="${point(16, 12)} ${point(19, 8)} ${point(19, 12)}" class="shape-fill blue"></polygon>
    `, "0 0 430 305");
  }
  if (data.type === "parallelogramHeightChoice") {
    return svg(`
      <polygon points="112,76 328,76 278,206 62,206" class="shape-fill teal"></polygon>
      <line x1="62" y1="224" x2="278" y2="224" class="model-line"></line>
      <text x="170" y="252" text-anchor="middle" class="measure-label">base</text>
      <line x1="112" y1="76" x2="62" y2="206" class="model-line"></line>
      <text x="72" y="122" class="measure-label">A</text>
      <line x1="162" y1="76" x2="162" y2="206" class="model-line dashed"></line>
      <text x="172" y="150" class="measure-label">B</text>
      <line x1="224" y1="206" x2="328" y2="206" class="model-line"></line>
      <text x="292" y="196" class="measure-label">C</text>
    `, "0 0 420 280");
  }
  if (data.type === "parallelogramHeightsFour") {
    const gridX = 44;
    const gridY = 30;
    const cell = 18;
    const gridColumns = 20;
    const gridRows = 12;
    const gridLines = [];
    for (let index = 0; index <= gridColumns; index += 1) {
      const x = gridX + index * cell;
      gridLines.push(`<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + gridRows * cell}" class="source-grid-line"></line>`);
    }
    for (let index = 0; index <= gridRows; index += 1) {
      const y = gridY + index * cell;
      gridLines.push(`<line x1="${gridX}" y1="${y}" x2="${gridX + gridColumns * cell}" y2="${y}" class="source-grid-line"></line>`);
    }
    const point = (x, y) => `${gridX + x * cell},${gridY + y * cell}`;
    return svg(`
      <rect x="${gridX}" y="${gridY}" width="${gridColumns * cell}" height="${gridRows * cell}" fill="#ffffff" stroke="#87929b" stroke-width="1.1"></rect>
      ${gridLines.join("")}
      <text x="${gridX + 1.8 * cell}" y="${gridY + 2.1 * cell}" text-anchor="middle" class="measure-label">A</text>
      <text x="${gridX + 2.3 * cell}" y="${gridY + 3.2 * cell}" text-anchor="middle" class="source-geometry-label">base</text>
      <rect x="${gridX + 3.2 * cell}" y="${gridY + 2.1 * cell}" width="${3 * cell}" height="${2 * cell}" class="shape-fill blue"></rect>
      <text x="${gridX + 4.7 * cell}" y="${gridY + 4.9 * cell}" text-anchor="middle" class="source-geometry-label">height</text>

      <text x="${gridX + 10.4 * cell}" y="${gridY + 2.1 * cell}" text-anchor="middle" class="measure-label">B</text>
      <text x="${gridX + 11.2 * cell}" y="${gridY + 3.2 * cell}" text-anchor="middle" class="source-geometry-label">height</text>
      <polygon points="${point(12, 2.1)} ${point(15, 2.1)} ${point(17, 4.1)} ${point(14, 4.1)}" class="shape-fill blue"></polygon>
      <text x="${gridX + 15.5 * cell}" y="${gridY + 4.8 * cell}" text-anchor="middle" class="source-geometry-label">base</text>

      <text x="${gridX + 1.8 * cell}" y="${gridY + 7.1 * cell}" text-anchor="middle" class="measure-label">C</text>
      <text x="${gridX + 2.2 * cell}" y="${gridY + 8.2 * cell}" text-anchor="middle" class="source-geometry-label">height</text>
      <polygon points="${point(3.2, 7.2)} ${point(6.2, 7.2)} ${point(8.2, 9.2)} ${point(5.2, 9.2)}" class="shape-fill blue"></polygon>
      <line x1="${gridX + 3.2 * cell}" y1="${gridY + 7.2 * cell}" x2="${gridX + 3.2 * cell}" y2="${gridY + 9.2 * cell}" class="model-line dashed"></line>
      <line x1="${gridX + 3.2 * cell}" y1="${gridY + 9.2 * cell}" x2="${gridX + 5.2 * cell}" y2="${gridY + 9.2 * cell}" class="model-line dashed"></line>
      <path d="M${gridX + 3.2 * cell} ${gridY + 9.2 * cell} h${0.55 * cell} v-${0.55 * cell} h-${0.55 * cell}" class="right-angle-marker"></path>
      <text x="${gridX + 6.4 * cell}" y="${gridY + 10 * cell}" text-anchor="middle" class="source-geometry-label">base</text>

      <text x="${gridX + 10.4 * cell}" y="${gridY + 7.1 * cell}" text-anchor="middle" class="measure-label">D</text>
      <text x="${gridX + 11.6 * cell}" y="${gridY + 8.4 * cell}" text-anchor="middle" class="source-geometry-label">base</text>
      <polygon points="${point(12, 7.2)} ${point(15, 7.2)} ${point(17, 9.2)} ${point(14, 9.2)}" class="shape-fill blue"></polygon>
      <line x1="${gridX + 14 * cell}" y1="${gridY + 9.2 * cell}" x2="${gridX + 15 * cell}" y2="${gridY + 7.2 * cell}" class="model-line dashed"></line>
      <line x1="${gridX + 14 * cell}" y1="${gridY + 9.2 * cell}" x2="${gridX + 15.5 * cell}" y2="${gridY + 10.7 * cell}" class="model-line dashed"></line>
      <line x1="${gridX + 17 * cell}" y1="${gridY + 9.2 * cell}" x2="${gridX + 15.5 * cell}" y2="${gridY + 10.7 * cell}" class="model-line dashed"></line>
      <path d="M${gridX + 15.5 * cell} ${gridY + 10.7 * cell} l${0.45 * cell} -${0.45 * cell} l${0.45 * cell} ${0.45 * cell} l-${0.45 * cell} ${0.45 * cell} z" class="right-angle-marker"></path>
      <text x="${gridX + 16.6 * cell}" y="${gridY + 10.8 * cell}" class="source-geometry-label">height</text>
    `, "0 0 430 270");
  }
  if (data.type === "parallelogramArea" || data.type === "parallelogramMissing") {
    const base = data.base || "?";
    const height = data.height || "?";
    const areaLabel = data.area ? `area ${data.area}` : `base ${base}, height ${height}`;
    return svg(`
      <polygon points="112,70 330,70 280,210 62,210" class="shape-fill teal"></polygon>
      <line x1="112" y1="70" x2="112" y2="210" class="model-line dashed"></line>
      <text x="180" y="242" text-anchor="middle" class="measure-label">base ${base}</text>
      <text x="122" y="145" class="measure-label">height ${height}</text>
      <text x="220" y="40" text-anchor="middle" class="measure-label">${areaLabel}</text>
    `, "0 0 420 275");
  }
  if (data.type === "triangleArea" || data.type === "triangleMissing") {
    return svg(`
      <polygon points="80,214 330,214 164,70" class="shape-fill amber"></polygon>
      <line x1="164" y1="70" x2="164" y2="214" class="model-line dashed"></line>
      <line x1="80" y1="232" x2="330" y2="232" class="model-line"></line>
      <text x="204" y="256" text-anchor="middle" class="measure-label">base ${data.base || "?"}</text>
      <text x="174" y="150" class="measure-label">height ${data.height || "?"}</text>
      ${data.area ? `<text x="218" y="42" text-anchor="middle" class="measure-label">area ${data.area}</text>` : ""}
    `, "0 0 430 280");
  }
  if (data.type === "triangleGridInferredHeight") {
    const gridX = 46;
    const gridY = 36;
    const cell = 28;
    const gridLines = [];
    for (let index = 0; index <= 11; index += 1) {
      const x = gridX + index * cell;
      gridLines.push(`<line x1="${x}" y1="${gridY}" x2="${x}" y2="${gridY + 6 * cell}" class="source-grid-line"></line>`);
    }
    for (let index = 0; index <= 6; index += 1) {
      const y = gridY + index * cell;
      gridLines.push(`<line x1="${gridX}" y1="${y}" x2="${gridX + 11 * cell}" y2="${y}" class="source-grid-line"></line>`);
    }
    const left = `${gridX + cell},${gridY + 4 * cell}`;
    const middle = `${gridX + 6 * cell},${gridY + 4 * cell}`;
    const tip = `${gridX + 10 * cell},${gridY + cell}`;
    return svg(`
      <rect x="${gridX}" y="${gridY}" width="${11 * cell}" height="${6 * cell}" fill="#ffffff" stroke="#87929b" stroke-width="1.2"></rect>
      ${gridLines.join("")}
      <polygon points="${left} ${middle} ${tip}" class="shape-fill blue"></polygon>
      <polyline points="${left} ${middle} ${tip} ${left}" class="model-line"></polyline>
      <text x="${gridX + 3.5 * cell}" y="${gridY + 4.8 * cell}" text-anchor="middle" class="measure-label">5</text>
      <text x="${gridX + 8.1 * cell}" y="${gridY + 2.4 * cell}" text-anchor="middle" class="measure-label">5</text>
    `, "0 0 400 245");
  }
  if (data.type === "trianglePair") {
    return svg(`
      <polygon points="70,216 250,216 142,72" class="shape-fill amber"></polygon>
      <polygon points="250,216 358,72 142,72" class="shape-fill teal"></polygon>
      <text x="214" y="42" text-anchor="middle" class="measure-label">2 triangles = 1 parallelogram</text>
    `, "0 0 430 270");
  }
  if (data.type === "triangleComposeCopies") {
    return svg(`
      <polygon points="86,206 220,206 146,82" class="shape-fill amber"></polygon>
      <polygon points="220,206 354,206 294,82" class="shape-fill teal"></polygon>
      <path d="M146 82 H294 L354 206 H86 Z" class="model-line"></path>
      <line x1="220" y1="206" x2="146" y2="82" class="model-line dashed"></line>
      <text x="220" y="42" text-anchor="middle" class="measure-label">two congruent triangles</text>
      <text x="220" y="250" text-anchor="middle" class="measure-label">parallelogram area = 2 triangle areas</text>
    `, "0 0 430 275");
  }
  if (data.type === "rightTriangleCopies") {
    return svg(`
      <polygon points="96,72 196,72 196,194" class="shape-fill amber"></polygon>
      <polygon points="252,72 352,72 352,194" class="shape-fill amber"></polygon>
      <line x1="96" y1="72" x2="196" y2="194" class="model-line"></line>
      <line x1="252" y1="72" x2="352" y2="194" class="model-line"></line>
      <text x="146" y="56" text-anchor="middle" class="measure-label">Triangle R</text>
      <text x="302" y="56" text-anchor="middle" class="measure-label">copy of R</text>
      <text x="224" y="238" text-anchor="middle" class="measure-label">Can two copies make a non-square parallelogram?</text>
    `, "0 0 450 265");
  }
  if (data.type === "triangleInRectangle") {
    return svg(`
      <rect x="90" y="58" width="230" height="166" class="ghost"></rect>
      <polygon points="90,58 90,224 320,114" class="shape-fill blue"></polygon>
      <line x1="90" y1="58" x2="90" y2="224" class="model-line"></line>
      <line x1="90" y1="224" x2="320" y2="224" class="model-line"></line>
      <line x1="320" y1="58" x2="320" y2="224" class="model-line dashed"></line>
      <text x="74" y="146" text-anchor="middle" class="measure-label">base 6</text>
      <text x="205" y="250" text-anchor="middle" class="measure-label">height 6</text>
      <text x="210" y="42" text-anchor="middle" class="measure-label">Area = 1/2 × 6 × 6</text>
    `, "0 0 430 275");
  }
  if (data.type === "triangleHeightThree") {
    return svg(`
      <polygon points="54,62 54,194 156,194" class="shape-fill amber"></polygon>
      <text x="111" y="130" class="measure-label">b</text>
      <text x="105" y="228" text-anchor="middle" class="measure-label">1</text>
      <polygon points="206,194 290,64 370,194" class="shape-fill blue"></polygon>
      <text x="288" y="222" text-anchor="middle" class="measure-label">b</text>
      <text x="288" y="42" text-anchor="middle" class="measure-label">2</text>
      <polygon points="398,76 450,194 528,194" class="shape-fill mint"></polygon>
      <text x="421" y="136" class="measure-label">b</text>
      <text x="463" y="228" text-anchor="middle" class="measure-label">3</text>
      <text x="291" y="258" text-anchor="middle" class="measure-label">Describe a perpendicular height for each base b.</text>
    `, "0 0 580 285");
  }
  if (data.type === "triangleHeightOutside") {
    return svg(`
      <polygon points="86,76 144,214 338,214" class="shape-fill amber"></polygon>
      <line x1="64" y1="214" x2="354" y2="214" class="model-line dashed"></line>
      <line x1="86" y1="76" x2="86" y2="214" class="model-line"></line>
      <path d="M86 214 h18 v-18" class="model-line"></path>
      <text x="236" y="242" text-anchor="middle" class="measure-label">base b</text>
      <text x="100" y="150" class="measure-label">height</text>
      <text x="210" y="42" text-anchor="middle" class="measure-label">height can land outside</text>
    `, "0 0 430 270");
  }
  if (data.type === "polygonDecompose") {
    return svg(`
      <rect x="92" y="106" width="138" height="86" class="shape-fill blue"></rect>
      <polygon points="230,106 324,106 230,148" class="shape-fill amber"></polygon>
      <polygon points="230,192 324,106 324,192" class="shape-fill teal"></polygon>
      <text x="161" y="153" text-anchor="middle" class="face-label">8</text>
      <text x="260" y="126" text-anchor="middle" class="face-label">2</text>
      <text x="293" y="172" text-anchor="middle" class="face-label">8</text>
    `, "0 0 420 270");
  }
  if (data.type === "pinwheelArea") {
    const grid = Array.from({ length: 15 }, (_, index) => {
      const position = 84 + index * 18;
      return `
        <line x1="${position}" y1="32" x2="${position}" y2="284" stroke="#9aa7b2" stroke-width="0.8"></line>
        <line x1="84" y1="${32 + index * 18}" x2="336" y2="${32 + index * 18}" stroke="#9aa7b2" stroke-width="0.8"></line>
      `;
    }).join("");
    return svg(`
      ${grid}
      <polygon points="102,122 156,140 246,50 228,104 318,194 264,176 174,266 192,212" class="shape-fill blue"></polygon>
      <text x="210" y="310" text-anchor="middle" class="measure-label">Find the shaded area in square units.</text>
    `, "0 0 420 335");
  }
  if (data.type === "polygonSubtract") {
    return svg(`
      <rect x="72" y="62" width="276" height="166" class="ghost"></rect>
      <rect x="248" y="62" width="82" height="56" class="shape-fill rose"></rect>
      <polygon points="72,228 164,228 164,174" class="shape-fill amber"></polygon>
      <path d="M72 62 H248 V118 H348 V228 H164 V174 H72 Z" class="model-line"></path>
      <text x="210" y="42" text-anchor="middle" class="measure-label">outside - missing pieces</text>
    `, "0 0 420 270");
  }
  if (data.type === "rectPrismNet") {
    return svg(`
      <rect x="142" y="42" width="118" height="60" class="shape-fill mint"></rect>
      <rect x="142" y="102" width="118" height="82" class="shape-fill blue"></rect>
      <rect x="142" y="184" width="118" height="60" class="shape-fill mint"></rect>
      <rect x="64" y="102" width="78" height="82" class="shape-fill amber"></rect>
      <rect x="260" y="102" width="78" height="82" class="shape-fill amber"></rect>
      <rect x="338" y="102" width="60" height="82" class="shape-fill rose"></rect>
      <text x="201" y="136" text-anchor="middle" class="face-label">${data.length} × ${data.height}</text>
      <text x="201" y="76" text-anchor="middle" class="face-label">${data.length} × ${data.width}</text>
    `, "0 0 450 280");
  }
  if (data.type === "triangularPrismError") {
    return svg(`
      <polygon points="74,198 142,76 210,198" class="shape-fill amber"></polygon>
      <polygon points="270,198 330,98 380,198" class="shape-fill rose"></polygon>
      <rect x="80" y="210" width="286" height="42" class="shape-fill blue"></rect>
      <text x="226" y="42" text-anchor="middle" class="measure-label">check matching bases and 1/2 × b × h</text>
    `, "0 0 430 285");
  }
  if (data.type === "triangularPrismNet") {
    return svg(`
      <polygon points="82,74 142,180 22,180" class="shape-fill amber"></polygon>
      <rect x="142" y="74" width="76" height="106" class="shape-fill blue"></rect>
      <rect x="218" y="74" width="76" height="106" class="shape-fill mint"></rect>
      <rect x="294" y="74" width="76" height="106" class="shape-fill blue"></rect>
      <polygon points="370,74 430,180 310,180" class="shape-fill amber"></polygon>
    `, "0 0 450 245");
  }
  if (data.type === "surfaceVolumePrisms") {
    return svg(`
      <rect x="74" y="74" width="144" height="70" class="shape-fill blue"></rect>
      <path d="M218 74 l36 -28 v70 l-36 28z" class="shape-fill rose"></path>
      <path d="M74 74 l36 -28 h144 l-36 28z" class="shape-fill mint"></path>
      <rect x="304" y="84" width="34" height="150" class="shape-fill amber"></rect>
      <path d="M338 84 l28 -20 v150 l-28 20z" class="shape-fill rose"></path>
      <path d="M304 84 l28 -20 h34 l-28 20z" class="shape-fill mint"></path>
      <text x="166" y="188" text-anchor="middle" class="measure-label">A: 3 by 2 by 1</text>
      <text x="334" y="260" text-anchor="middle" class="measure-label">B: 1 by 1 by 6</text>
    `, "0 0 430 290");
  }
  if (data.type === "surfaceAreaMeaning") {
    return svg(`
      <rect x="90" y="104" width="190" height="86" class="shape-fill blue"></rect>
      <path d="M280 104 l54 -34 v86 l-54 34z" class="shape-fill rose"></path>
      <path d="M90 104 l54 -34 h190 l-54 34z" class="shape-fill mint"></path>
      <path d="M90 104 H280 L334 70 M280 104 V190 L334 156 M90 190 H280" class="model-line"></path>
      <text x="210" y="42" text-anchor="middle" class="measure-label">cover all outside faces</text>
      <text x="185" y="148" text-anchor="middle" class="face-label">front face</text>
      <text x="242" y="78" text-anchor="middle" class="face-label">top</text>
      <text x="308" y="126" text-anchor="middle" class="face-label">side</text>
    `, "0 0 430 260");
  }
  if (data.type === "measurementUnits") {
    return svg(`
      <line x1="70" y1="208" x2="172" y2="208" class="model-line"></line>
      <text x="121" y="234" text-anchor="middle" class="measure-label">length</text>
      <rect x="194" y="144" width="76" height="76" class="shape-fill amber"></rect>
      <text x="232" y="188" text-anchor="middle" class="face-label">area</text>
      <path d="M318 220 h62 l28 -28 h-62 z" class="shape-fill mint"></path>
      <path d="M380 158 l28 -28 v62 l-28 28 z" class="shape-fill rose"></path>
      <path d="M318 158 h62 v62 h-62 z" class="shape-fill blue"></path>
      <text x="364" y="252" text-anchor="middle" class="measure-label">volume</text>
      <text x="232" y="54" text-anchor="middle" class="measure-label">linear, square, cubic units</text>
    `, "0 0 450 275");
  }
  if (data.type === "squareCubeNumbers") {
    return svg(`
      <rect x="62" y="72" width="82" height="82" class="shape-fill amber"></rect>
      <text x="103" y="120" text-anchor="middle" class="face-label">n^2</text>
      <path d="M238 154 h82 l34 -34 h-82 z" class="shape-fill mint"></path>
      <path d="M320 72 l34 -34 v82 l-34 34 z" class="shape-fill rose"></path>
      <path d="M238 72 h82 v82 h-82 z" class="shape-fill blue"></path>
      <text x="278" y="120" text-anchor="middle" class="face-label">n^3</text>
    `, "0 0 420 240");
  }
  if (data.type === "cubeSurface") {
    return svg(`
      <rect x="184" y="34" width="64" height="64" class="shape-fill mint"></rect>
      <rect x="184" y="98" width="64" height="64" class="shape-fill blue"></rect>
      <rect x="184" y="162" width="64" height="64" class="shape-fill mint"></rect>
      <rect x="120" y="98" width="64" height="64" class="shape-fill teal"></rect>
      <rect x="248" y="98" width="64" height="64" class="shape-fill teal"></rect>
      <rect x="312" y="98" width="64" height="64" class="shape-fill rose"></rect>
      <text x="216" y="136" text-anchor="middle" class="face-label">6 faces</text>
      <text x="216" y="252" text-anchor="middle" class="measure-label">edge ${data.edge}</text>
    `, "0 0 430 280");
  }
  if (data.type === "tentDesign") {
    return svg(`
      <polygon points="84,94 214,42 346,94 214,150" class="shape-fill teal"></polygon>
      <polygon points="84,94 214,150 214,224 84,168" class="shape-fill amber"></polygon>
      <polygon points="346,94 346,168 214,224 214,150" class="shape-fill rose"></polygon>
      <polygon points="84,168 214,224 346,168 214,118" class="shape-fill mint"></polygon>
      <text x="214" y="260" text-anchor="middle" class="measure-label">floor + sides + ends</text>
    `, "0 0 430 285");
  }
  return svg('<text x="210" y="140" text-anchor="middle" class="measure-label">Use the source modal.</text>');
}

function renderAnswerControl(item) {
  const reasoning = item.reasoningPrompt && item.responseType !== "open"
    ? `
      <label class="reasoning-field">
        ${escapeHtml(item.reasoningPrompt)}
        <textarea data-practice-reasoning="${item.id}" placeholder="Explain your reasoning.">${escapeHtml(state.practiceReasoning[item.id] || "")}</textarea>
      </label>
    `
    : "";
  if (item.responseType === "number") {
    return `
      <label>
        Answer
        <input type="text" inputmode="decimal" data-practice-input="${item.id}" value="${escapeHtml(getPracticeValue(item))}" placeholder="Type a number">
      </label>
      ${reasoning}
    `;
  }
  if (item.responseType === "open") {
    return `
      <label>
        ${escapeHtml(item.reasoningPrompt || "Your reasoning")}
        <textarea data-practice-input="${item.id}" placeholder="Explain your reasoning.">${escapeHtml(getPracticeValue(item))}</textarea>
      </label>
    `;
  }
  if (item.responseType === "matching") {
    const matches = getPracticeValue(item);
    return `
      <div class="matching-grid" role="group" aria-label="${escapeHtml(item.prompt)}">
        ${item.matchTargets.map((target) => `
          <label class="match-row">
            <span>${escapeHtml(target.label)}</span>
            <select data-practice-match="${item.id}" data-match-target="${target.id}">
              <option value="">Choose a unit</option>
              ${item.matchChoices.map((choice) => `
                <option value="${escapeHtml(choice.id)}" ${matches[target.id] === choice.id ? "selected" : ""}>${escapeHtml(choice.label)}</option>
              `).join("")}
            </select>
          </label>
        `).join("")}
      </div>
      ${reasoning}
    `;
  }
  const selected = state.practiceSelections[item.id] || [];
  return `
    <div class="option-grid" role="group" aria-label="${escapeHtml(item.prompt)}">
      ${item.choices.map((choice) => `
        <button class="option-button ${selected.includes(choice.id) ? "is-selected" : ""}" type="button" data-practice-option="${item.id}" data-option-id="${choice.id}" aria-pressed="${selected.includes(choice.id)}">
          ${escapeHtml(choice.label)}
        </button>
      `).join("")}
    </div>
    ${reasoning}
  `;
}

function renderSourceMeta(item) {
  if (!canOpenPracticeSource(item)) {
    return `<span class="source-link is-locked">Source p.${item.sourcePage} locked</span>`;
  }
  return `<button class="source-link" type="button" data-source-modal="${item.id}" aria-haspopup="dialog">Source p.${item.sourcePage}</button>`;
}

function renderSourceModal() {
  const source = modalSourceEntry();
  if (!source) return "";
  return `
    <div class="source-modal-backdrop" data-source-modal-backdrop>
      <section class="source-modal" style="${sourceModalStyle()}" role="dialog" aria-modal="true" aria-labelledby="sourceModalTitle">
        <div class="source-modal-header" data-source-drag-handle>
          <div>
            <p class="eyebrow">${escapeHtml(source.eyebrow)}</p>
            <h3 id="sourceModalTitle">${escapeHtml(source.title)}</h3>
            <p>${escapeHtml(source.subtitle)}</p>
          </div>
          <button class="source-modal-close" type="button" data-source-close-button aria-label="Close source modal">Close</button>
        </div>
        <div class="source-modal-body">
          <img src="${source.imageSrc}" alt="${escapeHtml(source.imageAlt)}">
        </div>
        <div class="source-modal-resize-handle" data-source-resize-handle role="separator" aria-label="Resize source modal" title="Resize source modal"></div>
      </section>
    </div>
  `;
}

function teachMeSourceIsCurrent(source) {
  if (source.activeStateKey) {
    const values = source.activeStateValues || [source.activeStateValue];
    return values.includes(state[source.activeStateKey]);
  }
  return Boolean(source.isPrimary);
}

function renderTeachMeSourceLinks(ideaId) {
  const sourceLinks = teachMeSources
    .filter((source) => source.ideaId === ideaId)
    .map((source) => {
      const active = teachMeSourceIsCurrent(source) ? " is-current" : "";
      return `<button class="source-link${active}" type="button" data-teach-source="${source.id}" aria-haspopup="dialog">${escapeHtml(source.label)}</button>`;
    })
    .join("");
  return `<span class="teach-source-label">Sources</span>${sourceLinks}`;
}

function renderTeachMeSourceGroup(containerId, ideaId) {
  const container = document.getElementById(containerId);
  if (container) container.innerHTML = renderTeachMeSourceLinks(ideaId);
}

function lessonPad(lessonNumber) {
  return String(lessonNumber).padStart(2, "0");
}

function pagePad(pageNumber) {
  return String(pageNumber).padStart(3, "0");
}

function studentTaskPreviewUrl(lesson, pageNumber) {
  return encodeURI(`artifacts/unit 1/_rendered-previews/Student Task Statements/Grade6-1-${lesson.lessonNumber}-Lesson-student-task-statements/page-${pagePad(pageNumber)}.png`);
}

function teachCropUrl(card) {
  return encodeURI(`artifacts/unit 1/_teachme-crops/${card.cropPath}`);
}

function teachPdfPages(card) {
  return card.pdfPages || [card.pdfPage];
}

function teachPdfModalId(card, pageNumber = card.pdfPage) {
  return `teach-pdf-l${card.lessonNumber}-p${pageNumber}-${card.id}`;
}

function teachBlacklineSources(card) {
  if (card.blacklineMasters?.length) return card.blacklineMasters;
  if (card.blacklineMaster) return [card.blacklineMaster];
  return [];
}

function teachBlacklineModalId(card, source = teachBlacklineSources(card)[0], index = 0) {
  const address = source?.activityAddress || "blackline";
  const safeAddress = address.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  return `teach-blackline-${card.id}-${safeAddress}-${index}-p${source?.page || 1}`;
}

function teachCardById(cardId) {
  return unit1TeachCards.find((card) => card.id === cardId);
}

function teachLessonGroups() {
  return unit1TeachCards.reduce((groups, card) => {
    const group = groups.find((entry) => entry.lessonNumber === card.lessonNumber);
    if (group) {
      group.cards.push(card);
    } else {
      groups.push({ lessonNumber: card.lessonNumber, cards: [card] });
    }
    return groups;
  }, []);
}

function teachLessonDomId(lessonNumber) {
  return `lesson-${lessonPad(lessonNumber)}`;
}

function teachCardDomId(card) {
  return teachLessonDomId(card.lessonNumber);
}

function activeTeachCardForGroup(group) {
  const activePartId = state.teachActiveParts[group.lessonNumber];
  return group.cards.find((card) => card.id === activePartId) || group.cards[0];
}

function renderTeachLessonNav() {
  const nav = document.getElementById("teachLessonNav");
  if (!nav) return;
  nav.innerHTML = teachLessonGroups().map((group) => {
    const card = group.cards[0];
    return `<a href="#${teachLessonDomId(group.lessonNumber)}" aria-label="Lesson ${group.lessonNumber}: ${escapeHtml(card.title)}" title="Lesson ${group.lessonNumber}: ${escapeHtml(card.title)}">Lesson ${group.lessonNumber}</a>`;
  }).join("");
}

function teachPartLabel(card) {
  const match = card.activityTitle?.match(/^(\d+\.\d+)/);
  return match ? match[1] : `Part ${card.id}`;
}

function renderTeachPartSwitcher(group, activeCard) {
  if (group.cards.length < 2) return "";
  return `
    <div class="teach-part-switcher" role="group" aria-label="Lesson ${group.lessonNumber} activities">
      ${group.cards.map((card) => (
        `<button class="page-chip teach-part-button ${card.id === activeCard.id ? "is-active" : ""}" type="button" data-teach-part="${card.id}" title="${escapeHtml(card.activityTitle || card.title)}" aria-pressed="${card.id === activeCard.id}">
          ${escapeHtml(teachPartLabel(card))}
        </button>`
      )).join("")}
    </div>
  `;
}

function renderTeachLessonGroup(group) {
  const card = activeTeachCardForGroup(group);
  return renderTeachCard(card, group);
}

function renderTeachVisualContent(card) {
  if (card.customVisual === "tangram") return renderTangramWorkspace(card);
  if (card.customVisual === "quadrilateralDecompose") return renderQuadrilateralDecompositionWorkspace(card);
  if (card.customVisual === "trianglePairs") return renderTrianglePairWorkspace(card);
  if (card.customVisual === "parallelogramExplore") return renderParallelogramExploreWorkspace(card);
  if (card.customVisual === "parallelogramCutSliders") return renderParallelogramCutSliderWorkspace(card);
  if (card.customVisual === "area12Triangle") return renderArea12TriangleWorkspace(card);
  if (card.customVisual === "triangleHeights") return renderTriangleHeightWorkspace(card);
  if (card.customVisual === "prismBuilder") return renderPrismBuilderWorkspace(card);
  if (!card.cropPath) return "";
  return `
    <figure class="teach-visual-frame">
      <img
        src="${teachCropUrl(card)}"
        alt="${escapeHtml(card.visualAlt)}"
        loading="lazy"
      >
    </figure>
  `;
}

function renderTeachCard(card, group = { cards: [card], lessonNumber: card.lessonNumber }) {
  const visualContent = renderTeachVisualContent(card);
  return `
    <article class="teach-lesson-card teach-card" id="${teachCardDomId(card)}" data-teach-card="${card.id}" data-teach-lesson="${card.lessonNumber}">
      <div class="teach-lesson-copy">
        <p class="eyebrow">${escapeHtml(card.idea)} · Section ${escapeHtml(card.section)} · Lesson ${card.lessonNumber}</p>
        <h2>${escapeHtml(card.title)}</h2>
        ${renderTeachCardSourceLinks(card)}
        ${renderTeachPartSwitcher(group, card)}
        ${card.activityTitle ? `<p class="teach-activity-title">${escapeHtml(card.activityTitle)}</p>` : ""}
        ${card.sourceContext ? `<p class="teach-source-context">${escapeHtml(card.sourceContext)}</p>` : ""}
        <p class="teach-prompt">${escapeHtml(card.prompt)}</p>
      </div>
      <div class="teach-workspace">
        ${card.sourceDirections ? `<p class="teach-visual-directions">${escapeHtml(card.sourceDirections)}</p>` : ""}
        ${visualContent}
        <div class="answer-panel teach-answer-panel">
          ${renderTeachResponseControl(card)}
          <div class="practice-actions teach-actions">
            <button class="practice-submit" type="button" data-teach-submit="${card.id}">Submit</button>
            <button class="hint-button" type="button" data-teach-hint="${card.id}">${state.teachHints[card.id] ? "Hide hint" : "Show hint"}</button>
          </div>
          ${renderTeachFeedback(card)}
          ${renderTeachHint(card)}
        </div>
      </div>
    </article>
  `;
}

function renderTeachMe() {
  renderTeachLessonNav();
  const deck = document.getElementById("teachLessonDeck");
  if (!deck) return;
  deck.innerHTML = teachLessonGroups().map(renderTeachLessonGroup).join("");
}

function renderTeachCardSourceLinks(card) {
  const source = teachMeSources.find((entry) => entry.lessonNumber === card.lessonNumber);
  if (!source) return "";
  const pdfButtons = teachPdfPages(card).map((page) => (
    `<button class="source-link" type="button" data-teach-pdf-source="${card.id}" data-pdf-page="${page}" aria-haspopup="dialog">PDF p.${page}</button>`
  )).join("");
  const blacklineButtons = teachBlacklineSources(card).map((blacklineSource, index) => (
    `<button class="source-link" type="button" data-teach-blackline-source="${card.id}" data-blackline-index="${index}" aria-haspopup="dialog">${escapeHtml(blacklineSource.buttonLabel || `Blackline p.${blacklineSource.page}`)}</button>`
  )).join("");
  return `
    <div class="teach-source-row" aria-label="Source material for Lesson ${card.lessonNumber}">
      <span class="teach-source-label">Sources</span>
      <button class="source-link is-current" type="button" data-teach-source="${source.id}" aria-haspopup="dialog">${escapeHtml(source.label)}</button>
      ${pdfButtons}
      ${blacklineButtons}
    </div>
  `;
}

function getTeachCustomResponse(card) {
  return state.teachCustomResponses[card.id] || {};
}

function answerMatches(value, accepted) {
  const givenNumber = parseMathNumber(value);
  const acceptedNumber = parseMathNumber(accepted);
  if (givenNumber !== null && acceptedNumber !== null) return Math.abs(givenNumber - acceptedNumber) < 1e-9;
  return normalizeAnswer(value) === normalizeAnswer(accepted);
}

function customTextField(card, field, label, options = {}) {
  const value = getTeachCustomResponse(card)[field] || "";
  return `
    <label>
      ${escapeHtml(label)}
      <input
        type="text"
        inputmode="${options.inputmode || "text"}"
        data-teach-custom-input="${card.id}"
        data-teach-custom-field="${field}"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(options.placeholder || "")}"
      >
    </label>
  `;
}

function customReasoningField(card, field, label) {
  const value = getTeachCustomResponse(card)[field] || "";
  return `
    <label class="reasoning-field">
      ${escapeHtml(label)}
      <textarea
        data-teach-custom-input="${card.id}"
        data-teach-custom-field="${field}"
        placeholder="Explain your thinking."
      >${escapeHtml(value)}</textarea>
    </label>
  `;
}

function guidedFieldValue(card, fieldId) {
  return getTeachCustomResponse(card)[fieldId] || "";
}

function renderGuidedChoiceField(card, field) {
  const value = guidedFieldValue(card, field.id);
  const selected = Array.isArray(value) ? value : String(value).split("|").filter(Boolean);
  const multiple = field.type === "multiChoice";
  return `
    <div class="guided-field">
      <p class="guided-field-label">${escapeHtml(field.label)}</p>
      <div class="guided-choice-row" role="group" aria-label="${escapeHtml(field.label)}">
        ${field.choices.map((choice) => {
          const active = selected.includes(choice.id);
          return `
            <button
              class="page-chip guided-choice-button ${active ? "is-active" : ""}"
              type="button"
              data-teach-guided-choice="${card.id}"
              data-teach-custom-field="${field.id}"
              data-option-id="${choice.id}"
              data-multiple="${multiple ? "true" : "false"}"
              aria-pressed="${active}"
            >
              ${escapeHtml(choice.label)}
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderGuidedField(card, field) {
  const value = guidedFieldValue(card, field.id);
  if (field.type === "singleChoice" || field.type === "multiChoice") return renderGuidedChoiceField(card, field);
  if (field.type === "textarea") {
    return `
      <label class="guided-field reasoning-field">
        ${escapeHtml(field.label)}
        <textarea
          data-teach-custom-input="${card.id}"
          data-teach-custom-field="${field.id}"
          placeholder="${escapeHtml(field.placeholder || "Explain your thinking.")}"
        >${escapeHtml(value)}</textarea>
      </label>
    `;
  }
  return `
    <label class="guided-field">
      ${escapeHtml(field.label)}
      <input
        type="text"
        inputmode="${field.type === "number" ? "decimal" : "text"}"
        data-teach-custom-input="${card.id}"
        data-teach-custom-field="${field.id}"
        value="${escapeHtml(value)}"
        placeholder="${escapeHtml(field.placeholder || "")}"
      >
    </label>
  `;
}

function renderTeachResponsePrompt(card) {
  const prompt = card.responsePrompt || card.prompt;
  if (!prompt) return "";
  return `<p class="teach-response-prompt">${escapeHtml(prompt)}</p>`;
}

function renderGuidedFieldsControl(card) {
  return `
    <div class="guided-fields-panel">
      ${renderTeachResponsePrompt(card)}
      ${card.guidedFields.map((field) => renderGuidedField(card, field)).join("")}
    </div>
  `;
}

function guidedAnswerMap(card) {
  const response = getTeachCustomResponse(card);
  const answerKey = card.guidedAnswerKey || {};
  const answers = { ...(answerKey.static || {}) };
  Object.entries(answerKey.variants || {}).forEach(([variantField, variantMap]) => {
    const variantValue = response[variantField];
    if (variantValue && variantMap[variantValue]) {
      Object.assign(answers, variantMap[variantValue]);
    }
  });
  return answers;
}

function guidedFieldAnswered(card, field) {
  const value = guidedFieldValue(card, field.id);
  if (Array.isArray(value)) return value.length > 0;
  return normalizeAnswer(value).length > 0;
}

function sortedPipeValues(value) {
  return String(value || "").split("|").filter(Boolean).sort();
}

function guidedFieldMatches(value, expected, field = {}) {
  if (field.type === "multiChoice") {
    const selected = sortedPipeValues(value);
    const expectedSet = Array.isArray(expected) ? expected : sortedPipeValues(expected);
    const sortedExpected = [...expectedSet].sort();
    return selected.length === sortedExpected.length && selected.every((entry, index) => entry === sortedExpected[index]);
  }
  const expectedValues = Array.isArray(expected) ? expected : [expected];
  return expectedValues.some((accepted) => answerMatches(value, accepted));
}

function hasGuidedFieldsResponse(card) {
  return card.guidedFields.every((field) => field.optional || guidedFieldAnswered(card, field));
}

function isGuidedFieldsCorrect(card) {
  if (!hasGuidedFieldsResponse(card)) return false;
  if (card.guidedOpenEnded) return true;
  const answers = guidedAnswerMap(card);
  return Object.entries(answers).every(([fieldId, expected]) => {
    const field = card.guidedFields.find((entry) => entry.id === fieldId);
    return guidedFieldMatches(guidedFieldValue(card, fieldId), expected, field);
  });
}

function renderTangramComposeControl(card) {
  return `
    <div class="tangram-task-panel">
      <p class="tangram-response-prompt">Answer the source tasks below, then record what you built in the workspace.</p>
      <ol class="tangram-source-tasks">
        <li>Find the area of the square composed of two small triangles.</li>
        <li>Build a new shape with area 1 square unit that is not a square.</li>
        <li>Build a shape with area 2 square units.</li>
        <li>Build a different shape with area 2 square units.</li>
        <li>Build a shape with area 4 square units.</li>
      </ol>
      ${customTextField(card, "unitSquareArea", "Area of the square composed of two small triangles", {
        inputmode: "decimal",
        placeholder: "Use a number or fraction",
      })}
      ${renderTeachDropdown(card, "compositionTarget", "Which source task did you build in the workspace?", tangramCompositionTargets, "Choose a target")}
      ${customReasoningField(card, "compositionReasoning", "Explain why your built shape has the target area.")}
    </div>
  `;
}

function renderTangramAreasControl(card) {
  return `
    <div class="tangram-response-panel">
      <p class="tangram-response-prompt">Record the area of each triangle in square units.</p>
      <div class="tangram-area-grid">
        ${customTextField(card, "smallTriangle", "Small triangle area", {
          inputmode: "decimal",
          placeholder: "Use a fraction or decimal",
        })}
        ${customTextField(card, "mediumTriangle", "Medium triangle area", {
          inputmode: "decimal",
          placeholder: "Use a fraction or decimal",
        })}
        ${customTextField(card, "largeTriangle", "Large triangle area", {
          inputmode: "decimal",
          placeholder: "Use a fraction or decimal",
        })}
      </div>
    </div>
    ${customReasoningField(card, "triangleReasoning", "Explain how the triangle areas follow from the 1-square-unit square.")}
  `;
}

function renderQuadrilateralDecompositionControl(card) {
  const response = getTeachCustomResponse(card);
  const working = quadrilateralWorkingValues(response);
  return `
    <div class="quadrilateral-response-panel">
      ${renderTeachResponsePrompt(card)}
      <p class="quadrilateral-response-instruction">After testing with segments, mark every quadrilateral that can be decomposed into two identical triangles.</p>
      <div class="guided-choice-row" role="group" aria-label="Quadrilaterals that can be decomposed into two identical triangles">
        ${quadrilateralDecompositionDefinitions.map((shape) => {
          const active = working.includes(shape.id);
          return `
            <button
              class="page-chip guided-choice-button ${active ? "is-active" : ""}"
              type="button"
              data-quadrilateral-working-choice="${card.id}"
              data-quadrilateral-id="${shape.id}"
              aria-pressed="${active}"
            >
              ${escapeHtml(shape.id)}
            </button>
          `;
        }).join("")}
      </div>
      ${customReasoningField(card, "observations", "What do the quadrilaterals that worked have in common?")}
    </div>
  `;
}

function renderTeachDropdown(card, field, label, options, placeholder) {
  const response = getTeachCustomResponse(card);
  const selected = options.find((option) => option.id === response[field]);
  const dropdownId = `${card.id}-${field}`;
  const open = state.teachOpenDropdown === dropdownId;
  return `
    <div class="teach-dropdown ${open ? "is-open" : ""}" data-teach-dropdown="${dropdownId}">
      <p class="teach-dropdown-label">${escapeHtml(label)}</p>
      <button
        class="teach-dropdown-button"
        type="button"
        data-teach-dropdown-toggle="${card.id}"
        data-teach-custom-field="${field}"
        aria-haspopup="listbox"
        aria-expanded="${open}"
      >
        <span>${escapeHtml(selected?.label || placeholder)}</span>
        <span class="teach-dropdown-chevron" aria-hidden="true"></span>
      </button>
      ${open ? `
        <div class="teach-dropdown-list" role="listbox" aria-label="${escapeHtml(label)}">
          ${options.map((option) => `
            <button
              class="teach-dropdown-option ${selected?.id === option.id ? "is-selected" : ""}"
              type="button"
              role="option"
              aria-selected="${selected?.id === option.id}"
              data-teach-dropdown-option="${card.id}"
              data-teach-custom-field="${field}"
              data-option-id="${option.id}"
            >
              ${escapeHtml(option.label)}
            </button>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function teachDropdownOptionsForField(card, field) {
  if (card.responseType === "tangramCompose" && field === "compositionTarget") return tangramCompositionTargets;
  if (
    card.responseType === "trianglePairsCompose"
    && (field === "rectangleConclusion" || field === "parallelogramConclusion")
  ) {
    return trianglePairConclusionOptions;
  }
  return [];
}

function renderTrianglePairsComposeControl(card) {
  const response = getTeachCustomResponse(card);
  const conclusionSelect = (field, label) => renderTeachDropdown(
    card,
    field,
    label,
    trianglePairConclusionOptions,
    "Choose all, some, or none"
  );
  const rows = trianglePairDefinitions.map((pair) => {
    const rectangleField = trianglePairObservationField(pair.id, "rectangle");
    const parallelogramField = trianglePairObservationField(pair.id, "parallelogram");
    return `
      <tr>
        <th scope="row">Pair ${escapeHtml(pair.id)}</th>
        <td>
          <label class="triangle-pair-check">
            <input
              type="checkbox"
              data-teach-custom-input="${card.id}"
              data-teach-custom-field="${rectangleField}"
              ${response[rectangleField] === "yes" ? "checked" : ""}
            >
            Rectangle
          </label>
        </td>
        <td>
          <label class="triangle-pair-check">
            <input
              type="checkbox"
              data-teach-custom-input="${card.id}"
              data-teach-custom-field="${parallelogramField}"
              ${response[parallelogramField] === "yes" ? "checked" : ""}
            >
            Parallelogram
          </label>
        </td>
      </tr>
    `;
  }).join("");
  return `
    <div class="triangle-pair-task-panel">
      <p>Record what you can compose after testing each pair. A rectangle also counts as a parallelogram.</p>
      <div class="triangle-pair-table-wrap">
        <table class="triangle-pair-table">
          <thead>
            <tr>
              <th scope="col">Pair</th>
              <th scope="col">Can make a rectangle?</th>
              <th scope="col">Can make a parallelogram?</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="triangle-pair-conclusions">
        ${conclusionSelect("rectangleConclusion", "__________ of these pairs of identical triangles can be composed into a rectangle.")}
        ${conclusionSelect("parallelogramConclusion", "__________ of these pairs of identical triangles can be composed into a parallelogram.")}
      </div>
      ${customReasoningField(card, "trianglePairReasoning", "Explain one rectangle example and one parallelogram example.")}
    </div>
  `;
}

function renderParallelogramExploreControl(card) {
  const response = getTeachCustomResponse(card);
  const showArea = response.showArea === "yes";
  return `
    <div class="parallelogram-explore-response-panel">
      ${renderTeachResponsePrompt(card)}
      <div class="parallelogram-explore-controls">
        ${renderParallelogramRangeField(card, "base", "Base", 3, 12)}
        ${renderParallelogramRangeField(card, "height", "Height", 2, 8)}
        ${renderParallelogramRangeField(card, "slant", "Slant", -4, 5)}
      </div>
      <button
        class="hint-button parallelogram-show-area"
        type="button"
        data-parallelogram-show-area="${card.id}"
        aria-pressed="${showArea}"
      >
        ${showArea ? "Hide Area" : "Show Area"}
      </button>
      ${customTextField(card, "areaAnswer", "Area of the current parallelogram", {
        inputmode: "decimal",
        placeholder: "square units",
      })}
      ${customReasoningField(card, "parallelogramReasoning", "Explain how the base and corresponding height determine the area.")}
    </div>
  `;
}

function renderTriangleHeightMarksControl(card) {
  return `
    <div class="triangle-height-response-panel">
      ${renderTeachResponsePrompt(card)}
      <p class="triangle-height-response-instruction">Use the marks in the workspace as your answer. A correct mark starts at the opposite vertex and meets the base line at a right angle.</p>
      ${customReasoningField(card, "heightReasoning", "What makes each segment a height for its chosen base?")}
    </div>
  `;
}

function hasPrismBuildResponse(card) {
  const response = getTeachCustomResponse(card);
  if (card.builderMode === "single12") {
    return normalizeAnswer(response.prism12Dims).length > 0
      && normalizeAnswer(response.faces).length > 0
      && normalizeAnswer(response.surfaceArea).length > 0
      && normalizeAnswer(response.prismReasoning).length > 0;
  }
  if (card.builderMode === "compare8") {
    return normalizeAnswer(response.shapeA).length > 0
      && normalizeAnswer(response.shapeB).length > 0
      && normalizeAnswer(response.volumeA).length > 0
      && normalizeAnswer(response.surfaceAreaA).length > 0
      && normalizeAnswer(response.volumeB).length > 0
      && normalizeAnswer(response.surfaceAreaB).length > 0
      && normalizeAnswer(response.compareReasoning).length > 0;
  }
  if (card.builderMode === "cube32") {
    return normalizeAnswer(response.edgeLength).length > 0
      && normalizeAnswer(response.cubesUsed).length > 0
      && normalizeAnswer(response.faceArea).length > 0
      && normalizeAnswer(response.cubeVolume).length > 0
      && normalizeAnswer(response.cubeReasoning).length > 0;
  }
  return false;
}

function isPrismBuildCorrect(card) {
  const response = getTeachCustomResponse(card);
  if (card.builderMode === "single12") {
    const selected = prismOptionById(prism12Options, response.prism12Dims);
    return Boolean(selected && !selected.sourceExample)
      && answerMatches(response.faces, "6")
      && answerMatches(response.surfaceArea, String(prismSurfaceArea(selected)));
  }
  if (card.builderMode === "compare8") {
    const shapeA = prismOptionById(prism8Options, response.shapeA);
    const shapeB = prismOptionById(prism8Options, response.shapeB);
    return Boolean(shapeA && shapeB && shapeA.id !== shapeB.id)
      && answerMatches(response.volumeA, "8")
      && answerMatches(response.volumeB, "8")
      && answerMatches(response.surfaceAreaA, String(prismSurfaceArea(shapeA)))
      && answerMatches(response.surfaceAreaB, String(prismSurfaceArea(shapeB)));
  }
  if (card.builderMode === "cube32") {
    return response.edgeLength === "3"
      && answerMatches(response.cubesUsed, "27")
      && answerMatches(response.faceArea, "9")
      && answerMatches(response.cubeVolume, "27");
  }
  return false;
}

function renderPrismBuildControl(card) {
  if (card.builderMode === "single12") {
    return `
      <div class="prism-builder-response-panel">
        ${renderTeachResponsePrompt(card)}
        ${renderPrismChoiceButtons(card, "prism12Dims", "Choose your rectangular prism.", prism12Options)}
        <div class="prism-builder-field-grid">
          ${customTextField(card, "faces", "How many faces does your rectangular prism have?", {
            inputmode: "decimal",
            placeholder: "Enter a number",
          })}
          ${customTextField(card, "surfaceArea", "Surface area of your prism", {
            inputmode: "decimal",
            placeholder: "square units",
          })}
        </div>
        ${customReasoningField(card, "prismReasoning", "Explain how your prism uses 12 cubes and how you found surface area.")}
      </div>
    `;
  }
  if (card.builderMode === "compare8") {
    return `
      <div class="prism-builder-response-panel">
        ${renderTeachResponsePrompt(card)}
        ${renderPrismChoiceButtons(card, "shapeA", "Choose Shape A.", prism8Options)}
        ${renderPrismChoiceButtons(card, "shapeB", "Choose Shape B.", prism8Options)}
        <div class="prism-builder-field-grid">
          ${customTextField(card, "volumeA", "Shape A volume", {
            inputmode: "decimal",
            placeholder: "cubic units",
          })}
          ${customTextField(card, "surfaceAreaA", "Shape A surface area", {
            inputmode: "decimal",
            placeholder: "square units",
          })}
          ${customTextField(card, "volumeB", "Shape B volume", {
            inputmode: "decimal",
            placeholder: "cubic units",
          })}
          ${customTextField(card, "surfaceAreaB", "Shape B surface area", {
            inputmode: "decimal",
            placeholder: "square units",
          })}
        </div>
        ${customReasoningField(card, "compareReasoning", "Explain what stays the same and what can change.")}
      </div>
    `;
  }
  if (card.builderMode === "cube32") {
    return `
      <div class="prism-builder-response-panel">
        ${renderTeachResponsePrompt(card)}
        ${renderPrismChoiceButtons(card, "edgeLength", "Choose the largest cube edge length that can be built.", cube32Options)}
        <div class="prism-builder-field-grid">
          ${customTextField(card, "cubesUsed", "How many cubes did you use?", {
            inputmode: "decimal",
            placeholder: "cubes",
          })}
          ${customTextField(card, "faceArea", "Area of each face", {
            inputmode: "decimal",
            placeholder: "square units",
          })}
          ${customTextField(card, "cubeVolume", "Volume of the built cube", {
            inputmode: "decimal",
            placeholder: "cubic units",
          })}
        </div>
        ${customReasoningField(card, "cubeReasoning", "Explain why a larger cube cannot be built with 32 cubes.")}
      </div>
    `;
  }
  return "";
}

function getTeachValue(card) {
  if (card.responseType === "tangramCompose"
    || card.responseType === "tangramAreas"
    || card.responseType === "quadrilateralDecompose"
    || card.responseType === "trianglePairsCompose"
    || card.responseType === "parallelogramExplore"
    || card.responseType === "triangleHeightMarks"
    || card.responseType === "prismBuild"
    || card.responseType === "guidedFields") {
    return getTeachCustomResponse(card);
  }
  if (card.responseType === "singleChoice") {
    return state.teachSelections[card.id]?.[0] || "";
  }
  if (card.responseType === "multiSelect") {
    return state.teachSelections[card.id] || [];
  }
  return state.teachResponses[card.id] || "";
}

function getTeachVariantId(card) {
  return state.teachVariants[card.id] || card.defaultVariantId || "";
}

function getTeachVariant(card) {
  if (!card.variants?.length) return null;
  const variantId = getTeachVariantId(card);
  return card.variants.find((variant) => variant.id === variantId) || null;
}

function hasRequiredTeachVariant(card) {
  return !card.variants?.length || Boolean(getTeachVariant(card));
}

function getTeachAnswerKey(card) {
  const variant = getTeachVariant(card);
  return variant?.answerKey || card.answerKey || [];
}

function getTeachHintText(card) {
  return getTeachVariant(card)?.hint || card.hint;
}

function getTeachFeedbackText(card, correct) {
  const variant = getTeachVariant(card);
  if (correct) return variant?.correctFeedback || card.correctFeedback;
  return variant?.incorrectFeedback || card.incorrectFeedback;
}

function hasTeachResponse(card) {
  if (card.responseType === "tangramCompose") {
    const response = getTeachCustomResponse(card);
    return normalizeAnswer(response.unitSquareArea).length > 0
      && normalizeAnswer(response.compositionTarget).length > 0
      && normalizeAnswer(response.compositionReasoning).length > 0;
  }
  if (card.responseType === "tangramAreas") {
    const response = getTeachCustomResponse(card);
    return normalizeAnswer(response.smallTriangle).length > 0
      && normalizeAnswer(response.mediumTriangle).length > 0
      && normalizeAnswer(response.largeTriangle).length > 0
      && normalizeAnswer(response.triangleReasoning).length > 0;
  }
  if (card.responseType === "quadrilateralDecompose") {
    const response = getTeachCustomResponse(card);
    const workingShapeIds = quadrilateralDecompositionDefinitions
      .filter((shape) => shape.works)
      .map((shape) => shape.id);
    const hasWorkingSegments = workingShapeIds.every((shapeId) => normalizeAnswer(quadrilateralSegmentValue(response, shapeId)).length > 0);
    return hasWorkingSegments
      && quadrilateralWorkingValues(response).length > 0
      && normalizeAnswer(response.observations).length > 0;
  }
  if (card.responseType === "trianglePairsCompose") {
    const response = getTeachCustomResponse(card);
    const hasPairObservations = trianglePairDefinitions.every((pair) => (
      trianglePairObservationValue(response, pair.id, "rectangle")
      || trianglePairObservationValue(response, pair.id, "parallelogram")
    ));
    return hasPairObservations
      && normalizeAnswer(response.rectangleConclusion).length > 0
      && normalizeAnswer(response.parallelogramConclusion).length > 0
      && normalizeAnswer(response.trianglePairReasoning).length > 0;
  }
  if (card.responseType === "parallelogramExplore") {
    return hasParallelogramExploreResponse(card);
  }
  if (card.responseType === "triangleHeightMarks") {
    const response = getTeachCustomResponse(card);
    return triangleHeightDiagrams.every((diagram) => normalizeAnswer(triangleHeightSegmentValue(response, diagram.id)).length > 0)
      && normalizeAnswer(response.heightReasoning).length > 0;
  }
  if (card.responseType === "prismBuild") {
    return hasPrismBuildResponse(card);
  }
  if (card.responseType === "guidedFields") {
    return hasGuidedFieldsResponse(card);
  }
  const value = getTeachValue(card);
  if (Array.isArray(value)) return value.length > 0;
  return normalizeAnswer(value).length > 0;
}

function isTeachSubmitted(card) {
  return Boolean(state.teachSubmitted[card.id]);
}

function isTeachCorrect(card) {
  if (!hasTeachResponse(card) || !hasRequiredTeachVariant(card)) return false;
  if (card.responseType === "tangramCompose") {
    const response = getTeachCustomResponse(card);
    return answerMatches(response.unitSquareArea, "1");
  }
  if (card.responseType === "tangramAreas") {
    const response = getTeachCustomResponse(card);
    return answerMatches(response.smallTriangle, "1/2")
      && answerMatches(response.mediumTriangle, "1")
      && answerMatches(response.largeTriangle, "2");
  }
  if (card.responseType === "quadrilateralDecompose") {
    const response = getTeachCustomResponse(card);
    const selected = quadrilateralWorkingValues(response).sort();
    const expected = quadrilateralDecompositionDefinitions
      .filter((shape) => shape.works)
      .map((shape) => shape.id)
      .sort();
    const selectionsCorrect = selected.length === expected.length && selected.every((value, index) => value === expected[index]);
    const workingSegmentsCorrect = expected.every((shapeId) => quadrilateralIsDiagonal(quadrilateralSegmentValue(response, shapeId)));
    return selectionsCorrect && workingSegmentsCorrect;
  }
  if (card.responseType === "trianglePairsCompose") {
    const response = getTeachCustomResponse(card);
    const observationsCorrect = trianglePairDefinitions.every((pair) => (
      trianglePairObservationValue(response, pair.id, "rectangle") === pair.rectangle
      && trianglePairObservationValue(response, pair.id, "parallelogram") === pair.parallelogram
    ));
    return observationsCorrect
      && response.rectangleConclusion === "some"
      && response.parallelogramConclusion === "all";
  }
  if (card.responseType === "parallelogramExplore") {
    return isParallelogramExploreCorrect(card);
  }
  if (card.responseType === "triangleHeightMarks") {
    const response = getTeachCustomResponse(card);
    return triangleHeightDiagrams.every((diagram) => triangleHeightIsCorrect(response, diagram));
  }
  if (card.responseType === "prismBuild") {
    return isPrismBuildCorrect(card);
  }
  if (card.responseType === "guidedFields") {
    return isGuidedFieldsCorrect(card);
  }
  const answer = getTeachValue(card);
  const answerKey = getTeachAnswerKey(card);
  if (card.responseType === "open") {
    return true;
  }
  if (card.responseType === "number") {
    const givenNumber = parseMathNumber(answer);
    return answerKey.some((accepted) => {
      const acceptedNumber = parseMathNumber(accepted);
      if (givenNumber !== null && acceptedNumber !== null) return Math.abs(givenNumber - acceptedNumber) < 1e-9;
      return normalizeAnswer(answer) === normalizeAnswer(accepted);
    });
  }
  if (card.responseType === "singleChoice") {
    return answer === answerKey[0];
  }
  if (card.responseType === "multiSelect") {
    const selected = [...answer].sort();
    const expected = [...answerKey].sort();
    return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
  }
  return false;
}

function renderTeachVariantControl(card) {
  if (!card.variants?.length) return "";
  const selectedVariantId = getTeachVariantId(card);
  return `
    <div class="teach-variant-control">
      <p>${escapeHtml(card.variantPrompt || "Choose one.")}</p>
      <div class="teach-variant-buttons" role="group" aria-label="${escapeHtml(card.variantPrompt || "Choose one.")}">
        ${card.variants.map((variant) => `
          <button class="page-chip teach-variant-button ${variant.id === selectedVariantId ? "is-active" : ""}" type="button" data-teach-variant="${card.id}" data-variant-id="${variant.id}" aria-pressed="${variant.id === selectedVariantId}">
            ${escapeHtml(variant.label)}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTeachResponseControl(card) {
  if (card.responseType === "tangramCompose") {
    return renderTangramComposeControl(card);
  }
  if (card.responseType === "tangramAreas") {
    return renderTangramAreasControl(card);
  }
  if (card.responseType === "quadrilateralDecompose") {
    return renderQuadrilateralDecompositionControl(card);
  }
  if (card.responseType === "trianglePairsCompose") {
    return renderTrianglePairsComposeControl(card);
  }
  if (card.responseType === "parallelogramExplore") {
    return renderParallelogramExploreControl(card);
  }
  if (card.responseType === "triangleHeightMarks") {
    return renderTriangleHeightMarksControl(card);
  }
  if (card.responseType === "prismBuild") {
    return renderPrismBuildControl(card);
  }
  if (card.responseType === "guidedFields") {
    return renderGuidedFieldsControl(card);
  }
  if (card.responseType === "open") {
    return `
      ${renderTeachResponsePrompt(card)}
      ${renderTeachVariantControl(card)}
      <label class="reasoning-field">
        ${escapeHtml(card.reasoningPrompt || "Show or explain your reasoning.")}
        <textarea data-teach-input="${card.id}" placeholder="Explain your thinking.">${escapeHtml(state.teachResponses[card.id] || "")}</textarea>
      </label>
    `;
  }
  if (card.responseType === "singleChoice" || card.responseType === "multiSelect") {
    const selected = state.teachSelections[card.id] || [];
    const reasoning = renderTeachReasoning(card);
    return `
      ${renderTeachResponsePrompt(card)}
      ${renderTeachVariantControl(card)}
      <div class="option-grid teach-option-grid" role="group" aria-label="${escapeHtml(card.prompt)}">
        ${card.choices.map((choice) => `
          <button class="option-button ${selected.includes(choice.id) ? "is-selected" : ""}" type="button" data-teach-option="${card.id}" data-option-id="${choice.id}" aria-pressed="${selected.includes(choice.id)}">
            ${escapeHtml(choice.label)}
          </button>
        `).join("")}
      </div>
      ${reasoning}
    `;
  }
  return `
    ${renderTeachResponsePrompt(card)}
    ${renderTeachVariantControl(card)}
    <label>
      Answer
      <input type="text" inputmode="decimal" data-teach-input="${card.id}" value="${escapeHtml(state.teachResponses[card.id] || "")}" placeholder="Enter your answer">
    </label>
    ${renderTeachReasoning(card)}
  `;
}

function renderTeachReasoning(card) {
  if (!card.reasoningPrompt) return "";
  return `
    <label class="reasoning-field">
      ${escapeHtml(card.reasoningPrompt)}
      <textarea data-teach-reasoning="${card.id}" placeholder="Explain your thinking.">${escapeHtml(state.teachReasoning[card.id] || "")}</textarea>
    </label>
  `;
}

function renderTeachFeedback(card) {
  const submitted = isTeachSubmitted(card);
  const answered = hasTeachResponse(card);
  const hasVariant = hasRequiredTeachVariant(card);
  const correct = submitted && answered && isTeachCorrect(card);
  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  const missingResponseText = card.responseType === "trianglePairsCompose"
    ? "Test and record each pair, choose both all/some/none conclusions, and explain one example before submitting again."
    : card.responseType === "quadrilateralDecompose"
      ? "Draw decomposition segments for the quadrilaterals that work, choose the working labels, and explain what they have in common."
      : card.responseType === "parallelogramExplore"
        ? "Adjust the parallelogram, use Show Area to check, enter the area, and explain your reasoning."
        : card.responseType === "triangleHeightMarks"
          ? "Draw one height segment for each diagram, explain what makes the segments heights, then submit again."
          : card.responseType === "prismBuild"
            ? "Complete the build choices, measurements, and reasoning, then submit again."
            : card.responseType === "guidedFields"
              ? "Complete the required fields, then submit again."
              : "Choose or enter an answer first, then submit again.";
  const feedbackText = !submitted
    ? card.variants?.length && !hasVariant
      ? "Choose a pattern, answer, and submit when you are ready for feedback."
      : "Submit when you are ready for feedback."
    : !hasVariant
      ? "Choose Pattern A or Pattern B first, then submit again."
    : !answered
      ? missingResponseText
      : correct
        ? getTeachFeedbackText(card, true)
        : getTeachFeedbackText(card, false);
  return `<p class="practice-feedback teach-feedback ${feedbackClass}" aria-live="polite">${escapeHtml(feedbackText)}</p>`;
}

function renderTeachHint(card) {
  if (!state.teachHints[card.id]) return "";
  return `<p class="practice-hints teach-hint"><strong>Hint:</strong> ${escapeHtml(getTeachHintText(card))}</p>`;
}

function renderPracticeCard(item, index) {
  const submitted = isPracticeSubmitted(item);
  const correct = submitted && isPracticeCorrect(item);
  const sampleUnlocked = canShowPracticeSample(item);
  const sampleVisible = sampleUnlocked && Boolean(state.practiceSamples[item.id]);
  const sampleLabel = sampleVisible
    ? "Hide sample"
    : sampleUnlocked
      ? "Show sample"
      : item.responseType === "open"
        ? "Sample unlocks after response"
        : "Sample unlocks after correct";
  const sampleDisabled = sampleUnlocked ? "" : " disabled";
  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  const statusClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  const feedback = submitted
    ? item.responseType === "open"
      ? "Open response saved. Compare your reasoning with the sample response."
      : correct
        ? "Correct. Nice source-aligned reasoning."
        : "Not quite yet. Use the hint, then try again."
    : "Submit when you are ready for feedback.";
  return `
    <article class="practice-card ${statusClass}" data-practice-card="${item.id}">
      <div class="practice-copy">
        <div class="practice-meta">
          <span>Card ${index + 1}</span>
          <span>Section ${item.section}</span>
          <span>Lesson ${item.lesson}</span>
          <span>${escapeHtml(item.responseType)}</span>
          ${renderSourceMeta(item)}
        </div>
        <h3>${escapeHtml(item.skill)}</h3>
        <p>${escapeHtml(item.prompt)}</p>
        <p><strong>Source:</strong> ${escapeHtml(item.source)}</p>
      </div>
      <div class="practice-work">
        <div class="practice-visual">
          <div class="practice-model">${practiceVisual(item)}</div>
        </div>
        <div class="answer-panel">
          ${renderAnswerControl(item)}
          <div class="practice-actions">
            <button class="practice-submit" type="button" data-practice-submit="${item.id}">${item.responseType === "open" ? "Save response" : "Submit"}</button>
            <button class="hint-button" type="button" data-practice-hint="${item.id}">${state.practiceHints[item.id] ? "Hide hint" : "Show hint"}</button>
            <button class="sample-button" type="button" data-practice-sample="${item.id}"${sampleDisabled}>${sampleLabel}</button>
          </div>
          <p class="practice-feedback ${feedbackClass}" id="feedback-${item.id}" aria-live="polite">${feedback}</p>
          ${state.practiceHints[item.id] ? `<p class="practice-hints"><strong>Hint:</strong> ${escapeHtml(item.hints.join(" "))}</p>` : ""}
          ${sampleVisible ? `<p class="practice-sample"><strong>Sample:</strong> ${escapeHtml(item.sampleAnswer)}</p>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderPracticeStats() {
  const attempted = practiceBank.filter((item) => state.practiceSubmitted[item.id]).length;
  const correct = practiceBank.filter((item) => state.practiceSubmitted[item.id] && isPracticeCorrect(item)).length;
  setText("practiceAnsweredCount", String(attempted));
  setText("practiceCorrectCount", String(correct));
  setText("practiceTotalCount", String(practiceBank.length));
}

function renderPractice() {
  renderPracticeFilters();
  renderPracticeStats();
  const list = document.getElementById("practiceList");
  if (!list) return;
  const items = filteredPracticeItems();
  list.innerHTML = items.map((item, index) => renderPracticeCard(item, index)).join("");
  renderSourceModalHost();
}

function renderSourceModalHost() {
  const modalHost = document.getElementById("sourceModalHost");
  if (modalHost) modalHost.innerHTML = renderSourceModal();
}

function applySourceModalLayout() {
  const modal = document.querySelector(".source-modal");
  if (!modal || !state.sourceModalLayout) return;
  const { x, y, width, height } = state.sourceModalLayout;
  modal.style.left = `${x}px`;
  modal.style.top = `${y}px`;
  modal.style.width = `${width}px`;
  modal.style.height = `${height}px`;
}

function startSourceModalPointer(event, mode) {
  if (event.button !== undefined && event.button !== 0) return;
  state.sourceModalLayout = normalizeSourceModalLayout();
  sourceModalPointer = {
    mode,
    pointerId: event.pointerId ?? "mouse",
    startClientX: event.clientX,
    startClientY: event.clientY,
    startLayout: { ...state.sourceModalLayout },
  };
  if (event.pointerId !== undefined) event.target.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function updateSourceModalPointer(event) {
  if (!sourceModalPointer || (event.pointerId ?? "mouse") !== sourceModalPointer.pointerId) return;
  const dx = event.clientX - sourceModalPointer.startClientX;
  const dy = event.clientY - sourceModalPointer.startClientY;
  const start = sourceModalPointer.startLayout;
  const next = sourceModalPointer.mode === "resize"
    ? { ...start, width: start.width + dx, height: start.height + dy }
    : { ...start, x: start.x + dx, y: start.y + dy };
  state.sourceModalLayout = normalizeSourceModalLayout(next);
  applySourceModalLayout();
  event.preventDefault();
}

function endSourceModalPointer(event) {
  if (!sourceModalPointer || (event.pointerId ?? "mouse") !== sourceModalPointer.pointerId) return;
  sourceModalPointer = null;
}

function updateActiveButtons(selector, value, attribute) {
  document.querySelectorAll(selector).forEach((button) => {
    const active = button.dataset[attribute] === value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function updateTeachCustomResponse(input) {
  const id = input.dataset.teachCustomInput;
  const field = input.dataset.teachCustomField;
  if (!id || !field) return false;
  state.teachCustomResponses[id] = {
    ...(state.teachCustomResponses[id] || {}),
    [field]: input.type === "checkbox" ? (input.checked ? "yes" : "") : input.value,
  };
  state.teachSubmitted[id] = false;
  state.sourceModalItemId = null;
  return true;
}

function tangramSvgPoint(svgNode, event) {
  const point = svgNode.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svgNode.getScreenCTM();
  if (!matrix) return { x: 0, y: 0 };
  return point.matrixTransform(matrix.inverse());
}

function updateTangramPieceDom(pieceId) {
  document.querySelectorAll(`[data-tangram-piece="${pieceId}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", tangramPieceTransform(pieceId));
  });
}

function updateTangramSelectionDom() {
  document.querySelectorAll("[data-tangram-piece]").forEach((pieceNode) => {
    const selected = pieceNode.dataset.tangramPiece === state.teachTangramSelectedPiece;
    pieceNode.querySelector(".tangram-piece")?.classList.toggle("is-selected", selected);
  });
  document.querySelectorAll("[data-tangram-select]").forEach((button) => {
    const selected = button.dataset.tangramSelect === state.teachTangramSelectedPiece;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function startTangramPointer(event) {
  const pieceNode = event.target.closest("[data-tangram-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-tangram-stage]");
  if (!svgNode) return false;
  const pieceId = pieceNode.dataset.tangramPiece;
  const pieces = getTangramPieces();
  const piece = pieces[pieceId];
  if (!piece) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  state.teachTangramSelectedPiece = pieceId;
  tangramPointer = {
    pointerId: event.pointerId ?? "mouse",
    pieceId,
    startPointer: pointer,
    startPiece: { ...piece },
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updateTangramSelectionDom();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateTangramPointer(event) {
  if (!tangramPointer || (event.pointerId ?? "mouse") !== tangramPointer.pointerId) return false;
  const svgNode = document.querySelector("[data-tangram-stage]");
  if (!svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - tangramPointer.startPointer.x;
  const dy = pointer.y - tangramPointer.startPointer.y;
  const pieces = getTangramPieces();
  const piece = pieces[tangramPointer.pieceId];
  if (!piece) return false;
  piece.x = clampNumber(tangramPointer.startPiece.x + dx, -30, tangramStage.width - 28);
  piece.y = clampNumber(tangramPointer.startPiece.y + dy, -30, tangramStage.height - 28);
  updateTangramPieceDom(tangramPointer.pieceId);
  event.preventDefault();
  return true;
}

function endTangramPointer(event) {
  if (!tangramPointer || (event.pointerId ?? "mouse") !== tangramPointer.pointerId) return false;
  tangramPointer = null;
  return true;
}

function rotateSelectedTangramPiece(delta) {
  const pieceId = state.teachTangramSelectedPiece;
  const pieces = getTangramPieces();
  const piece = pieces[pieceId];
  if (!piece) return;
  piece.angle = ((piece.angle + delta) % 360 + 360) % 360;
}

function updateTrianglePairPieceDom(pairId, pieceId) {
  document.querySelectorAll(`[data-triangle-pair-id="${pairId}"][data-triangle-pair-piece="${pieceId}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", trianglePairPieceTransform(pairId, pieceId));
  });
}

function updateTrianglePairSelectionDom() {
  document.querySelectorAll("[data-triangle-pair-piece]").forEach((pieceNode) => {
    const selected = pieceNode.dataset.trianglePairPiece === state.teachTrianglePairSelectedPiece;
    pieceNode.querySelector(".triangle-pair-piece")?.classList.toggle("is-selected", selected);
  });
  document.querySelectorAll("[data-triangle-pair-select]").forEach((button) => {
    const selected = button.dataset.trianglePairSelect === state.teachTrianglePairActive;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function startTrianglePairPointer(event) {
  const pieceNode = event.target.closest("[data-triangle-pair-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-triangle-pair-stage]");
  if (!svgNode) return false;
  const pairId = pieceNode.dataset.trianglePairId;
  const pieceId = pieceNode.dataset.trianglePairPiece;
  const pieces = getTrianglePairPieces(pairId);
  const piece = pieces[pieceId];
  if (!piece) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  state.teachTrianglePairActive = pairId;
  state.teachTrianglePairSelectedPiece = pieceId;
  trianglePairPointer = {
    pointerId: event.pointerId ?? "mouse",
    pairId,
    pieceId,
    startPointer: pointer,
    startPiece: { ...piece },
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updateTrianglePairSelectionDom();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateTrianglePairPointer(event) {
  if (!trianglePairPointer || (event.pointerId ?? "mouse") !== trianglePairPointer.pointerId) return false;
  const svgNode = document.querySelector("[data-triangle-pair-stage]");
  if (!svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - trianglePairPointer.startPointer.x;
  const dy = pointer.y - trianglePairPointer.startPointer.y;
  const pieces = getTrianglePairPieces(trianglePairPointer.pairId);
  const piece = pieces[trianglePairPointer.pieceId];
  if (!piece) return false;
  piece.x = clampNumber(trianglePairPointer.startPiece.x + dx, -40, trianglePairStage.width - 32);
  piece.y = clampNumber(trianglePairPointer.startPiece.y + dy, -40, trianglePairStage.height - 32);
  updateTrianglePairPieceDom(trianglePairPointer.pairId, trianglePairPointer.pieceId);
  event.preventDefault();
  return true;
}

function endTrianglePairPointer(event) {
  if (!trianglePairPointer || (event.pointerId ?? "mouse") !== trianglePairPointer.pointerId) return false;
  trianglePairPointer = null;
  return true;
}

function rotateSelectedTrianglePairPiece(delta) {
  const pairId = state.teachTrianglePairActive || "P";
  const pieceId = state.teachTrianglePairSelectedPiece || "copy-a";
  const pieces = getTrianglePairPieces(pairId);
  const piece = pieces[pieceId];
  if (!piece) return;
  piece.angle = ((piece.angle + delta) % 360 + 360) % 360;
}

function gridLines(x, y, columns, rows, cell, attribute = "") {
  const lines = [];
  for (let column = 0; column <= columns; column += 1) {
    const px = x + column * cell;
    lines.push(`<line ${attribute} x1="${px}" y1="${y}" x2="${px}" y2="${y + rows * cell}" class="source-grid-line"></line>`);
  }
  for (let row = 0; row <= rows; row += 1) {
    const py = y + row * cell;
    lines.push(`<line ${attribute} x1="${x}" y1="${py}" x2="${x + columns * cell}" y2="${py}" class="source-grid-line"></line>`);
  }
  return lines.join("");
}

function renderAreaCompareModel() {
  const triangleUnit = (points, color = "teal") => (
    `<polygon data-area-piece="triangle-unit" points="${points}" class="shape-fill ${color}"></polygon>`
  );
  const rhombus = (cx, y) => `
    <polygon data-area-piece="rhombus" data-area-valid-shape="rhombus" points="${cx},${y} ${cx + 34},${y + 31} ${cx},${y + 62} ${cx - 34},${y + 31}" class="shape-fill blue"></polygon>
    <line x1="${cx}" y1="${y}" x2="${cx}" y2="${y + 62}" class="model-line dashed"></line>
  `;
  const trapezoid = (x, y) => `
    <polygon data-area-piece="trapezoid" data-area-valid-shape="trapezoid" points="${x + 24},${y} ${x + 72},${y} ${x + 96},${y + 44} ${x},${y + 44}" class="shape-fill amber"></polygon>
    <line x1="${x + 24}" y1="${y}" x2="${x + 48}" y2="${y + 44}" class="model-line dashed"></line>
    <line x1="${x + 72}" y1="${y}" x2="${x + 48}" y2="${y + 44}" class="model-line dashed"></line>
  `;
  const content = `
    <text x="260" y="30" text-anchor="middle" class="measure-label">Raw counts are not enough; use one common area unit.</text>
    <text x="78" y="66" text-anchor="middle" class="measure-label">4 triangles</text>
    ${triangleUnit("42,105 78,42 114,105", "teal")}
    ${triangleUnit("42,181 78,118 114,181", "teal")}
    ${triangleUnit("42,257 78,194 114,257", "teal")}
    ${triangleUnit("122,257 158,194 194,257", "teal")}
    <text x="118" y="302" text-anchor="middle" class="measure-label">4 triangle units</text>

    <text x="260" y="66" text-anchor="middle" class="measure-label">3 rhombuses</text>
    ${rhombus(260, 42)}
    ${rhombus(222, 124)}
    ${rhombus(298, 124)}
    <text x="260" y="302" text-anchor="middle" class="measure-label">6 triangle units</text>

    <text x="430" y="66" text-anchor="middle" class="measure-label">2 trapezoids</text>
    ${trapezoid(382, 96)}
    ${trapezoid(382, 174)}
    <text x="430" y="302" text-anchor="middle" class="measure-label">6 triangle units</text>

    <line x1="36" y1="272" x2="480" y2="272" class="model-line"></line>
  `;
  return svg(content, "0 0 520 320");
}

function renderAreaRearrangeModel() {
  const squareTriangles = `
    <rect x="46" y="96" width="72" height="72" class="shape-fill mint"></rect>
    <polygon data-area-piece="small-triangle" points="46,96 118,96 46,168" class="shape-fill teal"></polygon>
    <polygon data-area-piece="small-triangle" points="118,96 118,168 46,168" class="shape-fill amber"></polygon>
    <rect x="138" y="96" width="72" height="72" class="shape-fill mint"></rect>
    <polygon data-area-piece="small-triangle" points="138,96 210,96 138,168" class="shape-fill teal"></polygon>
    <polygon data-area-piece="small-triangle" points="210,96 210,168 138,168" class="shape-fill amber"></polygon>
  `;
  const largeTriangle = `
    <polygon data-area-piece="small-triangle" points="330,226 402,226 330,154" class="shape-fill teal"></polygon>
    <polygon data-area-piece="small-triangle" points="402,226 474,226 402,154" class="shape-fill amber"></polygon>
    <polygon data-area-piece="small-triangle" points="330,154 402,154 330,82" class="shape-fill teal"></polygon>
    <polygon data-area-piece="small-triangle" points="402,226 402,154 330,154" class="shape-fill amber"></polygon>
    <path d="M330 226 H474 L330 82 Z" class="model-line"></path>
  `;
  const content = `
    <text x="128" y="52" text-anchor="middle" class="measure-label">two 1-square-unit squares</text>
    ${squareTriangles}
    <text x="128" y="206" text-anchor="middle" class="measure-label">4 congruent triangles</text>
    <path d="M238 132 H288" class="model-line"></path>
    <path d="M288 132 l-12 -9 M288 132 l-12 9" class="model-line"></path>
    <text x="263" y="116" text-anchor="middle" class="measure-label">rearrange</text>
    <text x="402" y="52" text-anchor="middle" class="measure-label">same pieces, new shape</text>
    ${largeTriangle}
    <text x="402" y="268" text-anchor="middle" class="measure-label">area = 2 square units</text>
  `;
  return svg(content, "0 0 520 310");
}

function renderAreaStrategiesModel() {
  const panelGrid = (x, y) => gridLines(x, y, 6, 6, 16, 'data-area-grid="true"');
  const content = `
    <text x="91" y="35" text-anchor="middle" class="measure-label">Decompose</text>
    ${panelGrid(43, 58)}
    <g data-area-strategy="decompose">
      <path d="M75 74 H123 V122 H139 V154 H75 Z" class="shape-fill blue"></path>
      <line x1="75" y1="122" x2="139" y2="122" class="model-line dashed"></line>
    </g>
    <text x="91" y="180" text-anchor="middle" class="face-label">split into rectangles</text>

    <text x="260" y="35" text-anchor="middle" class="measure-label">Rearrange</text>
    ${panelGrid(212, 58)}
    <g data-area-strategy="rearrange">
      <polygon points="228,154 292,154 260,90" class="shape-fill amber"></polygon>
      <polygon points="292,154 292,90 324,154" class="shape-fill teal"></polygon>
      <path d="M228 154 H324 M260 90 V154" class="model-line"></path>
      <path d="M237 204 H301 V236 H237 Z" class="model-outline"></path>
    </g>
    <text x="269" y="224" text-anchor="middle" class="face-label">same parts</text>

    <text x="429" y="35" text-anchor="middle" class="measure-label">Enclose and subtract</text>
    ${panelGrid(381, 58)}
    <rect x="397" y="74" width="64" height="64" class="shape-fill mint"></rect>
    <rect x="429" y="74" width="32" height="32" class="unit-hole"></rect>
    <g data-area-strategy="subtract">
      <path d="M397 74 H461 V138 H397 Z M429 74 V106 H461" class="model-line"></path>
    </g>
    <text x="429" y="180" text-anchor="middle" class="face-label">outside area - hole</text>

    <text x="260" y="286" text-anchor="middle" class="measure-label">Grid units stay visible; the strategy changes.</text>
  `;
  return svg(content, "0 0 520 315");
}

function renderAreaModel() {
  const scene = areaIdeaScenes[state.areaIdea] || areaIdeaScenes.compare;
  document.getElementById("areaModel").innerHTML = scene.render();
  renderTeachMeSourceGroup("areaSourceLinks", "idea1");
  setText("areaEquation", scene.equation);
  setText("areaMessage", scene.message);
  updateActiveButtons("[data-area-idea]", state.areaIdea, "areaIdea");
}

function renderParallelogramModel() {
  const base = state.parallelogramBase;
  const height = state.parallelogramHeight;
  const slant = state.parallelogramSlant;
  const x = 64;
  const y = 62;
  const w = base * 24;
  const h = height * 28;
  const offset = slant * 12;
  const area = base * height;
  const content = `
    <polygon points="${x + offset},${y} ${x + offset + w},${y} ${x + w},${y + h} ${x},${y + h}" class="shape-fill teal"></polygon>
    <polygon points="${x},${y + h} ${x + offset},${y} ${x + offset},${y + h}" class="shape-fill amber"></polygon>
    <polygon points="${x + w + 26},${y + h} ${x + w + 26 + offset},${y} ${x + w + 26 + offset},${y + h}" class="ghost"></polygon>
    <line x1="${x + offset}" y1="${y}" x2="${x + offset}" y2="${y + h}" class="model-line dashed"></line>
    <line x1="${x}" y1="${y + h + 18}" x2="${x + w}" y2="${y + h + 18}" class="model-line"></line>
    <text x="${x + w / 2}" y="${y + h + 42}" text-anchor="middle" class="measure-label">base ${base}</text>
    <text x="${x + offset + 8}" y="${y + h / 2}" class="measure-label">height ${height}</text>
  `;
  document.getElementById("parallelogramModel").innerHTML = svg(content, "0 0 420 260");
  renderTeachMeSourceGroup("parallelogramSourceLinks", "idea2");
  setText("parallelogramEquation", `${base} × ${height} = ${area} square units`);
  setText("parallelogramMessage", `The rearranged rectangle has the same base ${base} and perpendicular height ${height}, so the area is ${area} square units.`);
}

function renderTriangleModel() {
  const showHeight = state.triangleMode !== "pair";
  const showFormula = state.triangleMode === "formula";
  const content = `
    <polygon points="82,214 294,214 144,74" class="shape-fill amber"></polygon>
    <polygon points="294,214 356,74 144,74" class="shape-fill teal ${state.triangleMode === "pair" ? "" : "soft"}"></polygon>
    ${showHeight ? '<line x1="144" y1="74" x2="144" y2="214" class="model-line dashed"></line>' : ""}
    <line x1="82" y1="232" x2="294" y2="232" class="model-line"></line>
    <text x="188" y="256" text-anchor="middle" class="measure-label">base b</text>
    ${showHeight ? '<text x="154" y="150" class="measure-label">height h</text>' : ""}
    ${showFormula ? '<text x="214" y="42" text-anchor="middle" class="measure-label">Triangle area = 1/2 × b × h</text>' : ""}
  `;
  document.getElementById("triangleModel").innerHTML = svg(content, "0 0 430 280");
  setText("triangleEquation", state.triangleMode === "formula" ? "Area = 1/2 × b × h" : "2 triangles = 1 parallelogram");
  setText("triangleMessage", triangleMessages[state.triangleMode]);
  renderTeachMeSourceGroup("triangleSourceLinks", "idea3");
  updateActiveButtons("[data-triangle-mode]", state.triangleMode, "triangleMode");
}

function renderPolygonModel() {
  let overlay = "";
  if (state.polygonStrategy === "rectangles") {
    overlay = `
      <rect x="84" y="82" width="168" height="112" class="shape-fill blue"></rect>
      <rect x="252" y="138" width="84" height="56" class="shape-fill amber"></rect>
    `;
  } else if (state.polygonStrategy === "triangles") {
    overlay = `
      <polygon points="84,194 84,82 210,82" class="shape-fill teal"></polygon>
      <polygon points="84,194 210,82 252,194" class="shape-fill amber"></polygon>
      <polygon points="252,194 252,138 336,194" class="shape-fill rose"></polygon>
    `;
  } else {
    overlay = `
      <rect x="84" y="82" width="252" height="112" class="ghost"></rect>
      <rect x="252" y="82" width="84" height="56" class="shape-fill rose"></rect>
      <polygon points="84,82 336,82 336,194 84,194" class="model-line"></polygon>
    `;
  }
  const outline = '<path d="M84 82 H252 V138 H336 V194 H84 Z" class="model-line"></path>';
  document.getElementById("polygonModel").innerHTML = svg(`${overlay}${outline}`, "0 0 420 270");
  renderTeachMeSourceGroup("polygonSourceLinks", "idea4");
  setText("polygonEquation", polygonData[state.polygonStrategy].equation);
  setText("polygonMessage", polygonData[state.polygonStrategy].message);
  updateActiveButtons("[data-polygon-strategy]", state.polygonStrategy, "polygonStrategy");
}

function renderSurfaceModel() {
  const l = state.prismLength;
  const w = state.prismWidth;
  const h = state.prismHeight;
  const topBottom = l * w;
  const frontBack = l * h;
  const leftRight = w * h;
  const total = 2 * topBottom + 2 * frontBack + 2 * leftRight;
  const content = `
    <rect x="132" y="42" width="116" height="64" class="shape-fill mint"></rect>
    <rect x="132" y="106" width="116" height="78" class="shape-fill blue"></rect>
    <rect x="132" y="184" width="116" height="64" class="shape-fill mint"></rect>
    <rect x="58" y="106" width="74" height="78" class="shape-fill amber"></rect>
    <rect x="248" y="106" width="74" height="78" class="shape-fill amber"></rect>
    <rect x="322" y="106" width="74" height="78" class="shape-fill rose"></rect>
    <text x="190" y="78" text-anchor="middle" class="face-label">${l} × ${w}</text>
    <text x="190" y="150" text-anchor="middle" class="face-label">${l} × ${h}</text>
    <text x="190" y="220" text-anchor="middle" class="face-label">${l} × ${w}</text>
    <text x="95" y="150" text-anchor="middle" class="face-label">${w} × ${h}</text>
    <text x="285" y="150" text-anchor="middle" class="face-label">${w} × ${h}</text>
    <text x="359" y="150" text-anchor="middle" class="face-label">${l} × ${h}</text>
  `;
  document.getElementById("surfaceModel").innerHTML = svg(content, "0 0 450 290");
  renderTeachMeSourceGroup("surfaceSourceLinks", "idea5");
  setText("surfaceEquation", `2(${l} × ${w}) + 2(${l} × ${h}) + 2(${w} × ${h}) = ${total}`);
  setText("surfaceMessage", `The net has 6 separate faces: two ${topBottom}-unit faces, two ${frontBack}-unit faces, and two ${leftRight}-unit faces for ${total} square units total.`);
}

function renderCubeModel() {
  const s = state.cubeEdge;
  const face = s * s;
  const volume = s * s * s;
  const surface = 6 * face;
  const content = `
    <rect x="48" y="86" width="72" height="72" class="shape-fill amber"></rect>
    <text x="84" y="128" text-anchor="middle" class="face-label">${s}^2</text>
    <rect x="186" y="34" width="66" height="66" class="shape-fill mint"></rect>
    <rect x="186" y="100" width="66" height="66" class="shape-fill blue"></rect>
    <rect x="186" y="166" width="66" height="66" class="shape-fill mint"></rect>
    <rect x="120" y="100" width="66" height="66" class="shape-fill teal"></rect>
    <rect x="252" y="100" width="66" height="66" class="shape-fill teal"></rect>
    <rect x="318" y="100" width="66" height="66" class="shape-fill rose"></rect>
    <path d="M96 212 h78 l36 -34 h-78 z" class="shape-fill violet"></path>
    <path d="M174 134 l36 -34 v78 l-36 34 z" class="shape-fill rose"></path>
    <path d="M96 134 h78 v78 h-78 z" class="shape-fill blue"></path>
    <text x="219" y="142" text-anchor="middle" class="face-label">6 faces</text>
  `;
  document.getElementById("cubeModel").innerHTML = svg(content, "0 0 430 280");
  renderTeachMeSourceGroup("cubeSourceLinks", "idea6");
  setText("cubeEquation", `${s}^2 = ${face}, ${s}^3 = ${volume}, 6 × ${s}^2 = ${surface}`);
  setText("cubeMessage", `A square face has area ${face}. A cube has volume ${volume}. The cube surface area counts 6 square faces, so it is ${surface}.`);
}

function renderTentModel() {
  const panels = {
    roof: '<polygon points="92,94 212,42 330,94 212,148" class="shape-fill teal"></polygon><polygon points="92,94 212,148 212,222 92,168" class="shape-fill teal"></polygon>',
    ends: '<polygon points="92,94 92,168 212,222" class="shape-fill amber"></polygon><polygon points="330,94 330,168 212,222" class="shape-fill amber"></polygon>',
    floor: '<polygon points="92,168 212,222 330,168 212,118" class="shape-fill rose"></polygon>',
  };
  const frame = `
    <line x1="92" y1="94" x2="212" y2="42" class="model-line"></line>
    <line x1="212" y1="42" x2="330" y2="94" class="model-line"></line>
    <line x1="92" y1="168" x2="212" y2="222" class="model-line"></line>
    <line x1="212" y1="222" x2="330" y2="168" class="model-line"></line>
    <line x1="92" y1="94" x2="92" y2="168" class="model-line"></line>
    <line x1="330" y1="94" x2="330" y2="168" class="model-line"></line>
  `;
  document.getElementById("tentModel").innerHTML = svg(`${panels[state.tentFocus]}${frame}`, "0 0 430 270");
  renderTeachMeSourceGroup("tentSourceLinks", "idea7");
  setText("tentEquation", tentMessages[state.tentFocus].equation);
  setText("tentMessage", tentMessages[state.tentFocus].message);
  updateActiveButtons("[data-tent-focus]", state.tentFocus, "tentFocus");
}

function renderVocabulary() {
  const query = state.vocabularySearch.trim().toLowerCase();
  const list = document.getElementById("vocabularyList");
  const filtered = vocabularyTerms.filter((term) => {
    const haystack = `${term.term} ${term.definition} ${term.example} ${term.tags.join(" ")}`.toLowerCase();
    return !query || haystack.includes(query);
  });
  list.innerHTML = filtered.map((term) => `
    <article class="vocabulary-card">
      <h3>${term.term}</h3>
      <p>${term.definition}</p>
      <p><strong>Example:</strong> ${term.example}</p>
      <div class="tag-row">${term.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderView() {
  document.body.dataset.mode = state.mode;
  document.querySelectorAll("[data-view-pane]").forEach((pane) => {
    pane.hidden = pane.dataset.viewPane !== state.view;
  });
  document.querySelectorAll(".mode-tab[data-mode]").forEach((button) => {
    const active = button.dataset.mode === state.mode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle("is-active", active);
    if (!button.disabled) button.setAttribute("aria-pressed", String(active));
  });
  setText("viewTitle", viewTitles[state.view] || viewTitles.unit1);
  renderTeachMe();
  renderVocabulary();
  renderPractice();
}

function bindEvents() {
  document.querySelectorAll(".mode-tab[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      if (state.view === "vocabulary") state.view = "unit1";
      renderView();
    });
  });
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      if (state.view === "vocabulary") state.mode = "teach";
      renderView();
    });
  });
  document.querySelectorAll("[data-area-idea]").forEach((button) => {
    button.addEventListener("click", () => {
      state.areaIdea = button.dataset.areaIdea;
      renderAreaModel();
    });
  });
  document.querySelectorAll("[data-triangle-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.triangleMode = button.dataset.triangleMode;
      renderTriangleModel();
    });
  });
  document.querySelectorAll("[data-polygon-strategy]").forEach((button) => {
    button.addEventListener("click", () => {
      state.polygonStrategy = button.dataset.polygonStrategy;
      renderPolygonModel();
    });
  });
  document.querySelectorAll("[data-tent-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      state.tentFocus = button.dataset.tentFocus;
      renderTentModel();
    });
  });
  ["Base", "Height", "Slant"].forEach((name) => {
    document.getElementById(`parallelogram${name}`)?.addEventListener("input", (event) => {
      state[`parallelogram${name}`] = Number(event.target.value);
      renderParallelogramModel();
    });
  });
  [["prismLength", "prismLength"], ["prismWidth", "prismWidth"], ["prismHeight", "prismHeight"]].forEach(([id, key]) => {
    document.getElementById(id)?.addEventListener("input", (event) => {
      state[key] = Math.max(1, Number(event.target.value) || 1);
      renderSurfaceModel();
    });
  });
  document.getElementById("cubeEdge")?.addEventListener("input", (event) => {
    state.cubeEdge = Number(event.target.value);
    renderCubeModel();
  });
  document.getElementById("vocabularySearch").addEventListener("input", (event) => {
    state.vocabularySearch = event.target.value;
    renderVocabulary();
  });
  document.addEventListener("pointerdown", (event) => {
    if (startTangramPointer(event)) return;
    if (startTrianglePairPointer(event)) return;
    const resizeHandle = event.target.closest("[data-source-resize-handle]");
    if (resizeHandle) {
      startSourceModalPointer(event, "resize");
      return;
    }
    const dragHandle = event.target.closest("[data-source-drag-handle]");
    if (dragHandle && !event.target.closest("[data-source-close-button]")) {
      startSourceModalPointer(event, "drag");
    }
  });
  document.addEventListener("pointermove", (event) => {
    if (updateTangramPointer(event)) return;
    if (updateTrianglePairPointer(event)) return;
    updateSourceModalPointer(event);
  });
  document.addEventListener("pointerup", (event) => {
    if (endTangramPointer(event)) return;
    if (endTrianglePairPointer(event)) return;
    endSourceModalPointer(event);
  });
  document.addEventListener("pointercancel", (event) => {
    if (endTangramPointer(event)) return;
    if (endTrianglePairPointer(event)) return;
    endSourceModalPointer(event);
  });
  document.addEventListener("mousedown", (event) => {
    if (window.PointerEvent) return;
    const resizeHandle = event.target.closest("[data-source-resize-handle]");
    if (resizeHandle) {
      startSourceModalPointer(event, "resize");
      return;
    }
    const dragHandle = event.target.closest("[data-source-drag-handle]");
    if (dragHandle && !event.target.closest("[data-source-close-button]")) {
      startSourceModalPointer(event, "drag");
    }
  });
  document.addEventListener("mousemove", (event) => {
    if (window.PointerEvent) return;
    updateSourceModalPointer(event);
  });
  document.addEventListener("mouseup", (event) => {
    if (window.PointerEvent) return;
    endSourceModalPointer(event);
  });
  document.addEventListener("click", (event) => {
    const teachSourceButton = event.target.closest("[data-teach-source]");
    if (teachSourceButton) {
      const source = teachMeSources.find((entry) => entry.id === teachSourceButton.dataset.teachSource);
      if (!source) return;
      state.sourceModalItemId = source.id;
      renderSourceModalHost();
      document.querySelector("[data-source-close-button]")?.focus();
      return;
    }
    const teachPdfSourceButton = event.target.closest("[data-teach-pdf-source]");
    if (teachPdfSourceButton) {
      const card = teachCardById(teachPdfSourceButton.dataset.teachPdfSource);
      if (!card) return;
      const page = Number(teachPdfSourceButton.dataset.pdfPage) || card.pdfPage;
      state.sourceModalItemId = teachPdfModalId(card, page);
      renderSourceModalHost();
      document.querySelector("[data-source-close-button]")?.focus();
      return;
    }
    const teachBlacklineSourceButton = event.target.closest("[data-teach-blackline-source]");
    if (teachBlacklineSourceButton) {
      const card = teachCardById(teachBlacklineSourceButton.dataset.teachBlacklineSource);
      const blacklineSources = card ? teachBlacklineSources(card) : [];
      const blacklineIndex = Number(teachBlacklineSourceButton.dataset.blacklineIndex) || 0;
      const blacklineSource = blacklineSources[blacklineIndex];
      if (!card || !blacklineSource) return;
      state.sourceModalItemId = teachBlacklineModalId(card, blacklineSource, blacklineIndex);
      renderSourceModalHost();
      document.querySelector("[data-source-close-button]")?.focus();
      return;
    }
    const sourceButton = event.target.closest("[data-source-modal]");
    if (sourceButton) {
      const item = practiceBank.find((entry) => entry.id === sourceButton.dataset.sourceModal);
      if (!item || !canOpenPracticeSource(item)) return;
      state.sourceModalItemId = item.id;
      renderSourceModalHost();
      document.querySelector("[data-source-close-button]")?.focus();
      return;
    }
    if (event.target.closest("[data-source-close-button]") || event.target.matches("[data-source-modal-backdrop]")) {
      state.sourceModalItemId = null;
      renderSourceModalHost();
      return;
    }
    const filterButton = event.target.closest("[data-practice-filter]");
    if (filterButton) {
      state.practiceFilter = filterButton.dataset.practiceFilter;
      state.sourceModalItemId = null;
      renderPractice();
      return;
    }
    const teachDropdownOptionButton = event.target.closest("[data-teach-dropdown-option]");
    if (teachDropdownOptionButton) {
      const id = teachDropdownOptionButton.dataset.teachDropdownOption;
      const field = teachDropdownOptionButton.dataset.teachCustomField;
      const optionId = teachDropdownOptionButton.dataset.optionId;
      const card = teachCardById(id);
      const dropdownOptions = card && field ? teachDropdownOptionsForField(card, field) : [];
      if (!card || !field || !dropdownOptions.some((option) => option.id === optionId)) return;
      state.teachCustomResponses[id] = {
        ...(state.teachCustomResponses[id] || {}),
        [field]: optionId,
      };
      state.teachSubmitted[id] = false;
      state.teachOpenDropdown = null;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const teachDropdownToggleButton = event.target.closest("[data-teach-dropdown-toggle]");
    if (teachDropdownToggleButton) {
      const id = teachDropdownToggleButton.dataset.teachDropdownToggle;
      const field = teachDropdownToggleButton.dataset.teachCustomField;
      if (!teachCardById(id) || !field) return;
      const dropdownId = `${id}-${field}`;
      state.teachOpenDropdown = state.teachOpenDropdown === dropdownId ? null : dropdownId;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const teachGuidedChoiceButton = event.target.closest("[data-teach-guided-choice]");
    if (teachGuidedChoiceButton) {
      const id = teachGuidedChoiceButton.dataset.teachGuidedChoice;
      const field = teachGuidedChoiceButton.dataset.teachCustomField;
      const optionId = teachGuidedChoiceButton.dataset.optionId;
      const multiple = teachGuidedChoiceButton.dataset.multiple === "true";
      const card = teachCardById(id);
      const fieldDefinition = card?.guidedFields?.find((entry) => entry.id === field);
      if (!card || !fieldDefinition || !fieldDefinition.choices?.some((choice) => choice.id === optionId)) return;
      const response = state.teachCustomResponses[id] || {};
      const current = String(response[field] || "").split("|").filter(Boolean);
      const nextValue = multiple
        ? current.includes(optionId)
          ? current.filter((value) => value !== optionId).join("|")
          : [...current, optionId].join("|")
        : optionId;
      state.teachCustomResponses[id] = {
        ...response,
        [field]: nextValue,
      };
      state.teachSubmitted[id] = false;
      state.teachOpenDropdown = null;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const prismBuildChoiceButton = event.target.closest("[data-prism-build-choice]");
    if (prismBuildChoiceButton) {
      const id = prismBuildChoiceButton.dataset.prismBuildChoice;
      const field = prismBuildChoiceButton.dataset.teachCustomField;
      const optionId = prismBuildChoiceButton.dataset.optionId;
      const card = teachCardById(id);
      const options = card && field ? prismOptionsForField(card, field) : [];
      if (!card || card.responseType !== "prismBuild" || !options.some((option) => option.id === optionId)) return;
      state.teachCustomResponses[id] = {
        ...(state.teachCustomResponses[id] || {}),
        [field]: optionId,
      };
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const parallelogramShowAreaButton = event.target.closest("[data-parallelogram-show-area]");
    if (parallelogramShowAreaButton) {
      const id = parallelogramShowAreaButton.dataset.parallelogramShowArea;
      const card = teachCardById(id);
      if (!card || card.responseType !== "parallelogramExplore") return;
      const response = state.teachCustomResponses[id] || {};
      state.teachCustomResponses[id] = {
        ...response,
        showArea: response.showArea === "yes" ? "no" : "yes",
      };
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const quadrilateralWorkingButton = event.target.closest("[data-quadrilateral-working-choice]");
    if (quadrilateralWorkingButton) {
      const id = quadrilateralWorkingButton.dataset.quadrilateralWorkingChoice;
      const shapeId = quadrilateralWorkingButton.dataset.quadrilateralId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "quadrilateralDecompose" || !quadrilateralDecompositionDefinitions.some((shape) => shape.id === shapeId)) return;
      quadrilateralToggleWorking(id, shapeId);
      renderTeachMe();
      return;
    }
    const teachPartButton = event.target.closest("[data-teach-part]");
    if (teachPartButton) {
      const card = teachCardById(teachPartButton.dataset.teachPart);
      if (!card) return;
      state.teachActiveParts[card.lessonNumber] = card.id;
      state.teachOpenDropdown = null;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const quadrilateralSelectButton = event.target.closest("[data-quadrilateral-select]");
    if (quadrilateralSelectButton) {
      state.teachQuadrilateralActive = quadrilateralSelectButton.dataset.quadrilateralSelect;
      state.teachQuadrilateralStartVertex = null;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const quadrilateralVertexButton = event.target.closest("[data-quadrilateral-vertex]");
    if (quadrilateralVertexButton) {
      const card = quadrilateralVertexButton.closest("[data-teach-card]")?.dataset.teachCard;
      const shapeId = quadrilateralVertexButton.dataset.quadrilateralVertex;
      const vertexIndex = Number(quadrilateralVertexButton.dataset.vertexIndex);
      if (card && Number.isFinite(vertexIndex)) {
        markQuadrilateralVertex(card, shapeId, vertexIndex);
        renderTeachMe();
      }
      return;
    }
    const quadrilateralResetButton = event.target.closest("[data-quadrilateral-reset]");
    if (quadrilateralResetButton) {
      const id = quadrilateralResetButton.dataset.quadrilateralReset;
      if (teachCardById(id)?.responseType === "quadrilateralDecompose") {
        resetQuadrilateralDecomposition(id);
        renderTeachMe();
      }
      return;
    }
    const triangleHeightPointButton = event.target.closest("[data-triangle-height-point]");
    if (triangleHeightPointButton) {
      const cardId = triangleHeightPointButton.closest("[data-teach-card]")?.dataset.teachCard;
      const diagramId = triangleHeightPointButton.dataset.triangleHeightPoint;
      const pointId = triangleHeightPointButton.dataset.pointId;
      if (cardId && diagramId && pointId) {
        markTriangleHeightPoint(cardId, diagramId, pointId);
        renderTeachMe();
      }
      return;
    }
    const triangleHeightResetButton = event.target.closest("[data-triangle-height-reset]");
    if (triangleHeightResetButton) {
      const id = triangleHeightResetButton.dataset.triangleHeightReset;
      if (teachCardById(id)?.responseType === "triangleHeightMarks") {
        resetTriangleHeights(id);
        renderTeachMe();
      }
      return;
    }
    const tangramSelectButton = event.target.closest("[data-tangram-select]");
    if (tangramSelectButton) {
      state.teachTangramSelectedPiece = tangramSelectButton.dataset.tangramSelect;
      renderTeachMe();
      return;
    }
    const tangramRotateButton = event.target.closest("[data-tangram-rotate]");
    if (tangramRotateButton) {
      rotateSelectedTangramPiece(Number(tangramRotateButton.dataset.tangramRotate) || 0);
      renderTeachMe();
      return;
    }
    const tangramResetButton = event.target.closest("[data-tangram-reset]");
    if (tangramResetButton) {
      resetTangramPieces();
      renderTeachMe();
      return;
    }
    const trianglePairSelectButton = event.target.closest("[data-triangle-pair-select]");
    if (trianglePairSelectButton) {
      state.teachTrianglePairActive = trianglePairSelectButton.dataset.trianglePairSelect;
      state.teachTrianglePairSelectedPiece = "copy-a";
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const trianglePairRotateButton = event.target.closest("[data-triangle-pair-rotate]");
    if (trianglePairRotateButton) {
      rotateSelectedTrianglePairPiece(Number(trianglePairRotateButton.dataset.trianglePairRotate) || 0);
      renderTeachMe();
      return;
    }
    const trianglePairResetButton = event.target.closest("[data-triangle-pair-reset]");
    if (trianglePairResetButton) {
      resetTrianglePairPieces();
      renderTeachMe();
      return;
    }
    const teachVariantButton = event.target.closest("[data-teach-variant]");
    if (teachVariantButton) {
      const id = teachVariantButton.dataset.teachVariant;
      const variantId = teachVariantButton.dataset.variantId;
      const card = teachCardById(id);
      if (!card || !card.variants?.some((variant) => variant.id === variantId)) return;
      state.teachVariants[id] = variantId;
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const optionButton = event.target.closest("[data-practice-option]");
    if (optionButton) {
      const id = optionButton.dataset.practiceOption;
      const optionId = optionButton.dataset.optionId;
      const item = practiceBank.find((entry) => entry.id === id);
      if (!item) return;
      const current = state.practiceSelections[id] || [];
      if (item.responseType === "singleChoice") {
        state.practiceSelections[id] = [optionId];
      } else {
        state.practiceSelections[id] = current.includes(optionId)
          ? current.filter((value) => value !== optionId)
          : [...current, optionId];
      }
      state.practiceSubmitted[id] = false;
      state.practiceSamples[id] = false;
      state.sourceModalItemId = null;
      renderPractice();
      return;
    }
    const teachOptionButton = event.target.closest("[data-teach-option]");
    if (teachOptionButton) {
      const id = teachOptionButton.dataset.teachOption;
      const optionId = teachOptionButton.dataset.optionId;
      const card = teachCardById(id);
      if (!card) return;
      const current = state.teachSelections[id] || [];
      if (card.responseType === "singleChoice") {
        state.teachSelections[id] = [optionId];
      } else {
        state.teachSelections[id] = current.includes(optionId)
          ? current.filter((value) => value !== optionId)
          : [...current, optionId];
      }
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const teachSubmitButton = event.target.closest("[data-teach-submit]");
    if (teachSubmitButton) {
      const id = teachSubmitButton.dataset.teachSubmit;
      if (!teachCardById(id)) return;
      state.teachSubmitted[id] = true;
      state.teachOpenDropdown = null;
      renderTeachMe();
      return;
    }
    const teachHintButton = event.target.closest("[data-teach-hint]");
    if (teachHintButton) {
      const id = teachHintButton.dataset.teachHint;
      if (!teachCardById(id)) return;
      state.teachHints[id] = !state.teachHints[id];
      renderTeachMe();
      return;
    }
    const submitButton = event.target.closest("[data-practice-submit]");
    if (submitButton) {
      const id = submitButton.dataset.practiceSubmit;
      state.practiceSubmitted[id] = true;
      const item = practiceBank.find((entry) => entry.id === id);
      if (item && !canShowPracticeSample(item)) state.practiceSamples[id] = false;
      if (item && !canOpenPracticeSource(item)) state.sourceModalItemId = null;
      renderPractice();
      return;
    }
    const hintButton = event.target.closest("[data-practice-hint]");
    if (hintButton) {
      const id = hintButton.dataset.practiceHint;
      state.practiceHints[id] = !state.practiceHints[id];
      renderPractice();
      return;
    }
    const sampleButton = event.target.closest("[data-practice-sample]");
    if (sampleButton) {
      const id = sampleButton.dataset.practiceSample;
      const item = practiceBank.find((entry) => entry.id === id);
      if (!item || !canShowPracticeSample(item)) return;
      state.practiceSamples[id] = !state.practiceSamples[id];
      renderPractice();
      return;
    }
    if (state.teachOpenDropdown && !event.target.closest("[data-teach-dropdown]")) {
      state.teachOpenDropdown = null;
      renderTeachMe();
    }
  });
  document.addEventListener("input", (event) => {
    const teachCustomInput = event.target.closest("[data-teach-custom-input]");
    if (teachCustomInput) {
      updateTeachCustomResponse(teachCustomInput);
      if (teachCustomInput.dataset.rerenderOnInput === "true") renderTeachMe();
      return;
    }
    const teachReasoning = event.target.closest("[data-teach-reasoning]");
    if (teachReasoning) {
      const id = teachReasoning.dataset.teachReasoning;
      state.teachReasoning[id] = teachReasoning.value;
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const reasoning = event.target.closest("[data-practice-reasoning]");
    if (reasoning) {
      const id = reasoning.dataset.practiceReasoning;
      state.practiceReasoning[id] = reasoning.value;
      state.practiceSubmitted[id] = false;
      state.practiceSamples[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const teachInput = event.target.closest("[data-teach-input]");
    if (teachInput) {
      const id = teachInput.dataset.teachInput;
      state.teachResponses[id] = teachInput.value;
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const input = event.target.closest("[data-practice-input]");
    if (!input) return;
    const id = input.dataset.practiceInput;
    state.practiceResponses[id] = input.value;
    state.practiceSubmitted[id] = false;
    state.practiceSamples[id] = false;
    state.sourceModalItemId = null;
  });
  document.addEventListener("change", (event) => {
    const teachCustomInput = event.target.closest("[data-teach-custom-input]");
    if (teachCustomInput) {
      updateTeachCustomResponse(teachCustomInput);
      if (teachCustomInput.dataset.rerenderOnInput === "true") renderTeachMe();
      return;
    }
    const select = event.target.closest("[data-practice-match]");
    if (!select) return;
    const id = select.dataset.practiceMatch;
    const target = select.dataset.matchTarget;
    state.practiceResponses[id] = {
      ...(state.practiceResponses[id] || {}),
      [target]: select.value,
    };
    state.practiceSubmitted[id] = false;
    state.practiceSamples[id] = false;
    state.sourceModalItemId = null;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !state.sourceModalItemId) return;
    state.sourceModalItemId = null;
    renderSourceModalHost();
  });
  window.addEventListener("resize", () => {
    if (!state.sourceModalItemId || !state.sourceModalLayout) return;
    state.sourceModalLayout = normalizeSourceModalLayout();
    applySourceModalLayout();
  });
}

function renderAll() {
  renderView();
}

bindEvents();
renderAll();
