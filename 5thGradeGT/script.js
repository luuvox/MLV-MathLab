const initialTeachLessonMatch = window.location.hash.match(/^#lesson-(\d{2})$/);
const initialTeachLessonNumber = Number(initialTeachLessonMatch?.[1]);
const initialTeachLesson = Number.isInteger(initialTeachLessonNumber)
  && initialTeachLessonNumber >= 1
  && initialTeachLessonNumber <= 19
  ? initialTeachLessonNumber
  : 1;

const TEXTAREA_MAX_LENGTH = 500;

const state = {
  view: "unit1",
  mode: "teach",
  teachResponses: {},
  teachReasoning: {},
  teachSelections: {},
  teachSubmitted: {},
  teachHints: {},
  teachActiveParts: {},
  teachActiveLesson: initialTeachLesson,
  teachVariants: {},
  teachCustomResponses: {},
  teachQuestionSubmitted: {},
  teachQuestionHints: {},
  teachGridAreaActive: {},
  teachQuestionSetActive: {},
  teachOpenDropdown: null,
  teachTangramPieces: null,
  teachTangramWorkspaces: {},
  teachTangramSelectedPiece: "square",
  teachGridTrianglePieces: null,
  teachGridTriangleSelectedPiece: "triangle-1",
  teachTilingPieces: null,
  teachTilingSelectedPiece: "triangle-1",
  teachEqualAreaTiling: null,
  teachEqualAreaTilingTool: "square",
  teachEqualAreaTilingOrientation: "horizontal",
  teachTrianglePairActive: "P",
  teachTrianglePairPieces: null,
  teachTrianglePairSelectedPiece: "copy-a",
  teachDecomposePieces: null,
  teachDecomposeSelectedPiece: "small",
  teachQuadrilateralActive: "A",
  teachQuadrilateralStartVertex: null,
  teachQuadrilateralExtensionOpen: false,
  teachTriangleHeightStartPoint: null,
  teachTriangleHeightRound: "round1",
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
let gridTrianglePointer = null;
let tilingPiecePointer = null;
let trianglePairPointer = null;
let decomposePointer = null;
let pyramidNetPointer = null;
let baseHeightChallengePointer = null;

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

const lesson14MatchChoices = [
  { id: "solid-1", label: "1 - cube" },
  { id: "solid-2", label: "2 - rectangular prism" },
  { id: "solid-3", label: "3 - square pyramid" },
  { id: "solid-4", label: "4 - triangular pyramid" },
  { id: "solid-5", label: "5 - triangular prism" },
];

const measurementUnitChoices = [
  { id: "millimeters", label: "millimeters (mm)" },
  { id: "feet", label: "feet (ft)" },
  { id: "meters", label: "meters (m)" },
  { id: "square-inches", label: "square inches (sq in)" },
  { id: "square-feet", label: "square feet (sq ft)" },
  { id: "square-miles", label: "square miles (sq mi)" },
  { id: "cubic-kilometers", label: "cubic kilometers (cu km)" },
  { id: "cubic-yards", label: "cubic yards (cu yd)" },
];

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
  prismsPyramidsStudentMaterials: unit1BlacklineMasterPages(
    "Grade6.1.13.2",
    "Prisms and Pyramids",
    "Grade6-1-E13-2-prisms-and-pyramids-prisms-and-pyramids",
    [2, 3, 4],
    "Rendered student-use Blackline Master pages for testing nets for the triangular pyramid (source Figure P) and composing an assigned polyhedron net.",
    "Blackline Master page showing student-use prism and pyramid net materials for Lesson 13"
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
    pdfPage: 1,
    cropPath: "lesson-01-p001-tilings.png",
    visualAlt: "Four source tiling patterns labeled A through D.",
    prompt: "Which pattern doesn't belong? Choose any pattern you can support with a true observation.",
    responseType: "singleChoice",
    choices: [
      { id: "A", label: "A" },
      { id: "B", label: "B" },
      { id: "C", label: "C" },
      { id: "D", label: "D" },
    ],
    answerKey: ["A", "B", "C", "D"],
    acceptAnyChoice: true,
    reasoningPrompt: "Optional: Explain one true feature that makes your choice different from the other three.",
    hint: "There is no single correct choice. Compare colors, kinds of polygons, sizes, gaps, and how sides meet.",
    choiceFeedback: {
      A: "Pattern A is a defensible choice because it is the only pattern with no yellow tiles. Patterns B, C, and D all include yellow tiles.",
      B: "Pattern B is a defensible choice because it is the only pattern made entirely of hexagons. Patterns A, C, and D each contain tiles that are not hexagons.",
      C: "Pattern C is a defensible choice because it is the only pattern containing octagonal tiles. Patterns A, B, and D contain no octagons.",
      D: "Pattern D is a defensible choice because it is the only pattern with gaps between its tiles. Patterns A, B, and C cover their regions without gaps.",
    },
    correctFeedback: "Response recorded. This routine has no single correct pattern.",
    incorrectFeedback: "Choose a pattern, then submit again.",
  },
  {
    id: "teach-l1-2",
    lessonNumber: 1,
    section: "A",
    idea: "Idea 1",
    title: "Tiling the Plane",
    activityTitle: "1.2: More Red, Green, or Blue?",
    sourceContext: "Choose Pattern A or Pattern B, then use the movable comparison pieces to test area relationships.",
    sourceDirections: "In your selected pattern, which shapes cover more of the plane: blue rhombuses, red trapezoids, or green triangles? Explain how you know.",
    pdfPage: 2,
    cropPath: "lesson-01-p002-pattern-a-b.png",
    visualAlt: "Source tiling patterns A and B made from blue rhombuses, red trapezoids, and green triangles.",
    customVisual: "tilingCompare",
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
    reasoningRequired: true,
    reasoningMinLength: 12,
    reasoningConcepts: [["trapezoid", "triangle"], ["red", "triangle"], ["9", "8"], ["72", "64"]],
    hint: "Do not compare only the number of pieces. Convert each shape to the same area unit: two green triangles match one blue rhombus, and three green triangles match one red trapezoid.",
    correctFeedback: "Correct. The red trapezoids cover the most area.",
    incorrectFeedback: "Not quite. Counting pieces alone is misleading because the pieces have different areas.",
  },
  {
    id: "teach-l1-extension",
    lessonNumber: 1,
    section: "A",
    idea: "Idea 1",
    title: "Tiling the Plane",
    partLabel: "Optional",
    activityOrder: 99,
    activityTitle: "Are You Ready for More? Equal-Area Tiling",
    sourceContext: "Optional source extension",
    sourceDirections: "Create a tiling with at least two different shapes so the same amount of the plane is covered by each type of shape.",
    pdfPage: 3,
    cropPath: null,
    customVisual: "equalAreaTiling",
    visualAlt: "Interactive four-by-three grid for making an equal-area tiling with squares and dominoes.",
    prompt: "Fill the rectangle without gaps or overlaps. Use both unit squares and two-unit dominoes, with each shape type covering the same total area.",
    responseType: "tilingDesign",
    hint: "The board has 12 unit cells, so each shape type must cover 6 cells. A domino covers 2 cells.",
    correctFeedback: "Correct. Your squares cover 6 square units and your dominoes cover 6 square units, and together they tile the entire rectangle without gaps or overlaps.",
    incorrectFeedback: "Keep building. The rectangle must be completely covered, both shape types must be used, and squares and dominoes must cover equal total areas.",
  },
  {
    id: "teach-l2",
    lessonNumber: 2,
    section: "A",
    idea: "Idea 1",
    title: "Finding Area by Decomposing and Rearranging",
    pdfPage: 1,
    cropPath: "lesson-02-p001-area-grids.png",
    visualWidth: 470,
    visualHeight: 325,
    visualDisplayMaxWidth: 470,
    visualAlt: "Four source drawings labeled A through D, each showing squares inside a blue two-dimensional shape.",
    prompt: "Select all drawings whose squares could be used to find the area of the shape.",
    definitionPrompt: "Write a definition of area that includes all the information that you think is important.",
    responseType: "areaMeaning",
    drawingChoices: ["A", "B", "C", "D"],
    drawingAnswerKey: ["A", "B", "D"],
    freeTextValidationGuidance: {
      drawingReasoning: "write at least 12 characters and mention covering, gaps, overlaps, same-size or unit squares, or converting the square sizes in Drawing B",
      areaDefinition: "describe a two-dimensional region, square units or same-size unit squares, covering the region, no gaps, and no overlaps",
    },
    drawingHint: "Check whether the squares cover the whole shape without overlapping. If square sizes differ, consider whether the sizes can be converted to one common square unit.",
    definitionHint: "Include what area measures, the unit used to measure it, and how those units must cover the region.",
  },
  {
    id: "teach-l3",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    pdfPage: 1,
    cropPath: "lesson-03-p001-region-grid-area.png",
    visualWidth: 365,
    visualHeight: 140,
    visualDisplayMaxWidth: 365,
    visualAlt: "Source figures comparing a square region with a shaded region that has a missing square and an attached square.",
    sourceContext: "The source provides a Blackline Master copy for students who cut or physically compare the two regions.",
    blacklineMasters: unit1BlacklineMasters.comparingRegions,
    responseType: "questionSet",
    questions: [
      {
        id: "comparison",
        label: "Area comparison",
        prompt: "Is the area of Figure A greater than, less than, or equal to the area of the shaded region in Figure B?",
        responseType: "singleChoice",
        choices: [
          { id: "greater", label: "Figure A has greater area." },
          { id: "less", label: "Figure A has less area." },
          { id: "equal", label: "The areas are equal." },
        ],
        answerKey: ["equal"],
        reasoningPrompt: "Explain or show why the areas compare that way.",
        reasoningConcepts: [["square", "move"], ["square", "rearrang"], ["hole", "attach"], ["remove", "add"], ["match", "equal"]],
        reasoningRequiredFeedback: "The comparison is correct. Add an explanation showing how a piece of Figure B can be rearranged to match Figure A.",
        reasoningRevisionFeedback: "The comparison is correct, but strengthen the explanation. Track the attached square and the same-size opening, or describe how the shaded region can be rearranged to match Figure A.",
        hint: "Imagine moving the attached square in Figure B into the square opening. Compare the resulting boundary with Figure A.",
        correctFeedback: "Correct. The attached square in Figure B exactly fills its same-size opening. After that rearrangement, Figure B matches Figure A, so the areas are equal.",
        incorrectFeedback: "Try rearranging the attached square in Figure B. Decide whether moving a piece changes the total amount of shaded area.",
      },
    ],
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
    responseType: "questionSet",
    questions: [
      {
        id: "sides",
        label: "Number of sides",
        prompt: "What do you notice about the number of sides that a parallelogram has?",
        responseType: "singleChoice",
        choices: [
          { id: "three", label: "It has 3 sides." },
          { id: "four", label: "It has 4 sides." },
          { id: "six", label: "It has 6 sides." },
        ],
        answerKey: ["four"],
        hint: "Trace the boundary of Figures A, B, and C and count each straight side once.",
        correctFeedback: "Correct. Every parallelogram is a quadrilateral, so it has 4 sides.",
        incorrectFeedback: "Not quite. Trace one complete boundary. Each of Figures A, B, and C has 4 sides, so every parallelogram is a quadrilateral.",
      },
      {
        id: "opposite-sides",
        label: "Opposite sides",
        prompt: "What do you notice about opposite sides of a parallelogram?",
        responseType: "singleChoice",
        choices: [
          { id: "parallel-equal", label: "Both pairs are parallel, and each pair has equal length." },
          { id: "one-parallel", label: "Only one pair must be parallel." },
          { id: "all-equal", label: "All 4 sides must have equal length." },
          { id: "perpendicular", label: "Opposite sides must be perpendicular." },
        ],
        answerKey: ["parallel-equal"],
        hint: "Compare each side with the side directly across from it in A, B, and C.",
        correctFeedback: "Correct. Both pairs of opposite sides are parallel, and opposite sides have equal length.",
        incorrectFeedback: "Not quite. In every example, both pairs of opposite sides are parallel and each opposite pair has equal length. All 4 sides do not need to be equal.",
      },
      {
        id: "opposite-angles",
        label: "Opposite angles",
        prompt: "What do you notice about opposite angles of a parallelogram?",
        responseType: "singleChoice",
        choices: [
          { id: "equal", label: "Each pair of opposite angles has equal measure." },
          { id: "all-right", label: "All 4 angles must be right angles." },
          { id: "all-different", label: "All 4 angles have different measures." },
        ],
        answerKey: ["equal"],
        hint: "Compare the corners directly across from one another, especially in the slanted Figure A.",
        correctFeedback: "Correct. Opposite angles of a parallelogram have equal measure.",
        incorrectFeedback: "Not quite. Opposite angles have equal measure. They do not all need to be right angles, as Figure A shows.",
      },
    ],
  },
  {
    id: "teach-l5",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: "lesson-05-p002-height-examples-5-2.png",
    visualAlt: "Source examples and non-examples of corresponding bases and heights in parallelograms.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "true-statements",
        label: "True statements",
        prompt: "Select all the statements that are true about bases and heights in a parallelogram.",
        responseType: "multiSelect",
        visualCropPath: "lesson-05-p002-height-examples-5-2.png",
        visualWidth: 680,
        visualHeight: 950,
        visualDisplayMaxWidth: 410,
        visualAlt: "Four source examples above four source non-examples of corresponding heights for chosen bases.",
        visualDirections: "Examples: the top four dashed segments represent corresponding heights. Non-examples: the bottom four dashed segments do not.",
        choices: [
          { id: "a", label: "a. Only a horizontal side of a parallelogram can be a base." },
          { id: "b", label: "b. Any side of a parallelogram can be a base." },
          { id: "c", label: "c. A height can be drawn at any angle to the side chosen as the base." },
          { id: "d", label: "d. A base and its corresponding height must be perpendicular to each other." },
          { id: "e", label: "e. A height can only be drawn inside a parallelogram." },
          { id: "f", label: "f. A height can be drawn outside the parallelogram if it is at a 90-degree angle to the base." },
          { id: "g", label: "g. A base cannot be extended to meet a height." },
        ],
        answerKey: ["b", "d", "f"],
        hint: "Use the right-angle marks in the examples. A base may be any side, and a corresponding height may meet an extension of that side.",
        correctFeedback: "Correct. Statements b, d, and f are true: any side can be a base, its corresponding height is perpendicular, and that height may be outside the parallelogram.",
        incorrectFeedback: "Not quite. The true statements are b, d, and f. A base need not be horizontal, a height must be perpendicular, and a height may be outside or meet an extended base.",
      },
      {
        id: "student-drawings",
        label: "Student drawings",
        prompt: "Are all five drawings correctly labeled? Select every drawing with a correct base-height pair, then explain how you know.",
        responseType: "multiSelect",
        visualCropPath: "lesson-05-p003-student-height-labels-5-2.png",
        visualWidth: 1320,
        visualHeight: 800,
        visualDisplayMaxWidth: 620,
        visualAlt: "Five source parallelograms A through E with student-labeled bases and heights.",
        choices: [
          { id: "A", label: "Drawing A" },
          { id: "B", label: "Drawing B" },
          { id: "C", label: "Drawing C" },
          { id: "D", label: "Drawing D" },
          { id: "E", label: "Drawing E" },
        ],
        answerKey: ["A", "C", "D"],
        reasoningPrompt: "Explain the rule you used to decide which labels are correct.",
        reasoningConcepts: [["perpendicular"], ["90"], ["right angle"]],
        reasoningRequiredFeedback: "Your selections are correct. Add an explanation of the perpendicular base-height relationship, then submit again.",
        reasoningRevisionFeedback: "Your selections are correct, but strengthen the explanation. State that a corresponding height must be perpendicular to the chosen base or its extension.",
        hint: "Look for a right angle between h and b, or between h and a line extending b.",
        correctFeedback: "Correct. Not all five are correct: A, C, and D show a height perpendicular to the chosen base or its extension. B and E do not.",
        incorrectFeedback: "Not quite. A, C, and D are correctly labeled. In B and E, the segment labeled h is not perpendicular to the chosen base.",
      },
    ],
  },
  {
    id: "teach-l6",
    lessonNumber: 6,
    section: "B",
    idea: "Idea 2",
    title: "Area of Parallelograms",
    activityTitle: "6.2: More Areas of Parallelograms",
    sourceDirections: "Calculate the starting parallelogram, create and calculate three new ones, determine Height B, then explain and create equal-area pairs.",
    pdfPage: 1,
    pdfPages: [1, 2],
    cropPath: null,
    visualAlt: "A source-faithful interactive parallelogram with a labeled base, corresponding height, and slanted side.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "digital-start",
        label: "Starting figure",
        prompt: "Calculate the area of the given parallelogram, then submit your answer for feedback.",
        responseType: "number",
        inputLabel: "Area of the starting parallelogram",
        placeholder: "Type area",
        answerKey: ["56"],
        dynamicAnswer: "parallelogramArea",
        visualType: "parallelogramExplore",
        model: { base: 8, height: 7, slant: -2, sideLabel: "7.2", editable: false, sourceAreaMode: true },
        hint: "The horizontal base is 8 units and its perpendicular height is 7 units. The 7.2-unit slanted side is not the corresponding height.",
        correctFeedback: "Correct. The starting parallelogram has area 8 x 7 = 56 square units. The slanted 7.2-unit side is not needed for this base-height calculation.",
        incorrectFeedback: "Not quite. Multiply the 8-unit base by its perpendicular 7-unit height.",
      },
      {
        id: "digital-change-1",
        label: "Changed figure 1",
        prompt: "Move at least one vertex control to create a new parallelogram. Calculate its area, then submit your answer for feedback.",
        responseType: "number",
        inputLabel: "Area of changed figure 1",
        placeholder: "Type area",
        dynamicAnswer: "parallelogramArea",
        visualType: "parallelogramExplore",
        model: { base: 8, height: 7, slant: -2, editable: true, sourceAreaMode: true },
        requireAdjustment: true,
        modelMustDifferFromQuestionIds: ["digital-start"],
        unlockedAfterQuestionId: "digital-start",
        adjustmentFeedback: "Change at least one vertex control before submitting. The source asks for a new parallelogram.",
        uniquenessFeedback: "Make this parallelogram different from the starting figure before submitting.",
        hint: "Read the current horizontal span and perpendicular vertical span from the controls, then multiply them.",
        correctFeedback: "Correct. Changed figure 1 has area equal to its current horizontal span times its perpendicular vertical span.",
        incorrectFeedback: "Not quite. Use the current base and perpendicular height shown by the model.",
      },
      {
        id: "digital-change-2",
        label: "Changed figure 2",
        prompt: "Create a second new parallelogram that differs from the figures already recorded. Calculate its area, then submit your answer for feedback.",
        responseType: "number",
        inputLabel: "Area of changed figure 2",
        placeholder: "Type area",
        dynamicAnswer: "parallelogramArea",
        visualType: "parallelogramExplore",
        model: { base: 8, height: 7, slant: -2, editable: true, sourceAreaMode: true },
        requireAdjustment: true,
        modelMustDifferFromQuestionIds: ["digital-start", "digital-change-1"],
        unlockedAfterQuestionId: "digital-change-1",
        adjustmentFeedback: "Change at least one vertex control before submitting this second new figure.",
        uniquenessFeedback: "Choose a different base, height, or slant so changed figure 2 is not a copy of an earlier figure.",
        hint: "Change the horizontal span, vertical span, or slant, then multiply the current base and height.",
        correctFeedback: "Correct. Changed figure 2 is distinct and its calculated area matches the model's base-height product.",
        incorrectFeedback: "Not quite. Recheck the current horizontal span and perpendicular vertical span.",
      },
      {
        id: "digital-change-3",
        label: "Changed figure 3",
        prompt: "Create a third new parallelogram that differs from all earlier figures. Calculate its area, then submit your answer for feedback.",
        responseType: "number",
        inputLabel: "Area of changed figure 3",
        placeholder: "Type area",
        dynamicAnswer: "parallelogramArea",
        visualType: "parallelogramExplore",
        model: { base: 8, height: 7, slant: -2, editable: true, sourceAreaMode: true },
        requireAdjustment: true,
        modelMustDifferFromQuestionIds: ["digital-start", "digital-change-1", "digital-change-2"],
        unlockedAfterQuestionId: "digital-change-2",
        adjustmentFeedback: "Change at least one vertex control before submitting this third new figure.",
        uniquenessFeedback: "Choose a different base, height, or slant so changed figure 3 is not a copy of an earlier figure.",
        hint: "Use the current base-height pair. Changing only the slant can make a different-looking parallelogram without changing its area.",
        correctFeedback: "Correct. Changed figure 3 is distinct and its area matches its current base-height product.",
        incorrectFeedback: "Not quite. Multiply the current horizontal span by the perpendicular vertical span.",
      },
      {
        id: "height-b",
        label: "Height B",
        prompt: "In Parallelogram B, what is the corresponding height for the base that is 10 cm long? Explain or show your reasoning.",
        responseType: "number",
        inputLabel: "Corresponding height for the 10 cm base",
        placeholder: "Type height",
        answerKey: ["12"],
        visualCropPath: "lesson-06-p001-area-parallelograms-6-2.png",
        visualWidth: 1570,
        visualHeight: 1580,
        visualDisplayMaxWidth: 610,
        visualAlt: "Source Parallelograms A through D, including B with side lengths 15 cm and 10 cm and an 8 cm corresponding height for the 15 cm side.",
        visualDirections: "Use Parallelogram B's known base-height pair to determine the height for its other base.",
        reasoningPrompt: "Explain how the two base-height pairs give the same area.",
        reasoningConcepts: [["15", "8"], ["120", "10"]],
        hint: "First find B's area from 15 x 8. Then divide that area by the 10 cm base.",
        correctFeedback: "Correct. B's area is 15 x 8 = 120 square centimeters, so the height for a 10 cm base is 120 / 10 = 12 cm.",
        incorrectFeedback: "Not quite. The parallelogram's area is 120 square centimeters. Find the height that makes 10 x height = 120.",
      },
      {
        id: "equal-example",
        label: "Explain equal areas",
        prompt: "The two given parallelograms have the same area. Explain why their areas are equal.",
        responseType: "openResponse",
        inputLabel: "Why the given areas are equal",
        placeholder: "Explain with base-height products",
        minLength: 12,
        answerConceptRequirements: [
          [["6", "4"], ["3", "8"], ["base", "height"]],
          [["both", "24"], ["same", "product"], ["equal", "product"]],
        ],
        visualType: "parallelogramEqualExample",
        hint: "Count a horizontal base and perpendicular height for each figure on the grid, then compare the two products.",
        correctFeedback: "Correct. The left parallelogram has base 6 and height 4, while the right has base 3 and height 8. Both products equal 24 square units.",
        incorrectFeedback: "Strengthen the explanation by comparing the base-height products: 6 x 4 and 3 x 8 both equal 24.",
      },
      {
        id: "equal-build",
        label: "Build equal areas",
        prompt: "Create two new parallelograms that are not identical copies of each other but have the same area. Then explain how you know their areas are equal.",
        responseType: "construction",
        dynamicAnswer: "parallelogramPairEqualArea",
        visualType: "parallelogramPair",
        shapeIds: ["L", "R"],
        shapeLabels: { L: "Left parallelogram", R: "Right parallelogram" },
        pairDefaults: {
          L: { base: 6, height: 4, shift: -1 },
          R: { base: 3, height: 8, shift: 3 },
        },
        pairShiftMin: -4,
        pairShiftMax: 4,
        requireBothChanged: true,
        rejectInitialShapes: true,
        unlockedAfterQuestionId: "equal-example",
        visualDirections: "The workspace starts with the given source pair. Change both shapes to make a new, non-identical equal-area pair.",
        missingResponseFeedback: "Change both source parallelograms, explain the new base-height products, then submit again.",
        reasoningPrompt: "Explain how the two new base-height products prove the areas are equal.",
        reasoningConcepts: [["base", "height"], ["product", "equal"], ["same", "area"]],
        hint: "Choose two different factor pairs with the same product, or keep one base-height pair and use different slants.",
        correctFeedback: "Correct. Both new parallelograms have the same base-height product, and their dimensions or slants make them non-identical.",
        incorrectFeedback: "Not quite. Change both source shapes, make the two base-height products equal, and make the final parallelograms different from each other.",
      },
      {
        id: "print-areas",
        label: "Optional: PDF A-D",
        optional: true,
        prompt: "Printable source variant: find the area of each Parallelogram A-D and show the base-height reasoning for all four.",
        fields: [
          { id: "A", label: "Area A (square centimeters)", responseType: "number", placeholder: "Type area" },
          { id: "B", label: "Area B (square centimeters)", responseType: "number", placeholder: "Type area" },
          { id: "C", label: "Area C (square centimeters)", responseType: "number", placeholder: "Type area" },
          { id: "D", label: "Area D (square centimeters)", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ A: "60", B: "120", C: "63", D: "35" }],
        visualCropPath: "lesson-06-p001-area-parallelograms-6-2.png",
        visualWidth: 1570,
        visualHeight: 1580,
        visualDisplayMaxWidth: 610,
        visualAlt: "Printable source Parallelograms A through D with labeled measurements and a square grid.",
        visualDirections: "Use a side and its perpendicular corresponding height for each source figure.",
        reasoningPrompt: "Record a base-height calculation for A, B, C, and D.",
        reasoningConceptRequirements: [
          [["10", "6"], ["60"]],
          [["15", "8"], ["120"]],
          [["9", "7"], ["63"]],
          [["7", "5"], ["35"]],
        ],
        hint: "The useful pairs are A: 10 and 6; B: 15 and 8; C: 9 and 7. For D, count a horizontal base and vertical height on the grid.",
        correctFeedback: "Correct. The printable figures have areas A = 60, B = 120, C = 63, and D = 35 square centimeters.",
        incorrectFeedback: "Recheck every base-height pair: A uses 10 x 6, B uses 15 x 8, C uses 9 x 7, and D uses 7 x 5.",
      },
      {
        id: "print-pair-20",
        label: "Optional: PDF P-Q",
        optional: true,
        prompt: "Printable source variant: construct two different non-rectangular parallelograms P and Q that each have area 20 square units.",
        responseType: "construction",
        dynamicAnswer: "parallelogramPairArea20",
        visualType: "parallelogramPair",
        shapeIds: ["P", "Q"],
        shapeLabels: { P: "Parallelogram P", Q: "Parallelogram Q" },
        pairDefaults: {
          P: { base: 4, height: 4, shift: 2 },
          Q: { base: 5, height: 3, shift: 3 },
        },
        pairShiftMin: 1,
        pairShiftMax: 5,
        requireBothChanged: true,
        visualDirections: "Adjust both shapes. Each base-height product must be 20, each shift must keep the shape non-rectangular, and P and Q must differ.",
        missingResponseFeedback: "Adjust both Parallelogram P and Parallelogram Q, explain their products, then submit again.",
        reasoningPrompt: "Explain how the two base-height products prove that both areas are 20 square units.",
        reasoningConcepts: [["20"], ["base", "height"], ["product", "equal"]],
        hint: "Use two factor pairs of 20, such as 4 and 5 or 2 and 10, and keep a nonzero horizontal shift.",
        correctFeedback: "Correct. Both non-rectangular parallelograms have base-height product 20 and are different shapes.",
        incorrectFeedback: "Not quite. Change both shapes, make each base x height equal 20, keep each shift nonzero, and make P and Q different.",
      },
      {
        id: "optional-unshaded",
        label: "Optional challenge",
        optional: true,
        prompt: "What is the area of the unshaded parallelogram in the middle? Explain or show your reasoning.",
        responseType: "number",
        inputLabel: "Area of the unshaded parallelogram",
        placeholder: "Type area",
        answerKey: ["3.2", "16/5"],
        visualCropPath: "lesson-06-p002-unshaded-parallelogram-6-2.png",
        visualWidth: 940,
        visualHeight: 550,
        visualDisplayMaxWidth: 610,
        visualAlt: "Source green parallelogram composed of four identical shaded parallelograms around an unshaded parallelogram, labeled 5, 3, and 2.4 inches.",
        visualDirections: "The shaded region is composed of four identical parallelograms. All lengths are in inches.",
        reasoningPrompt: "Explain how the known base-height pair and the whole figure determine the middle area.",
        reasoningConcepts: [["51.2", "48"], ["2", "1.6"], ["5", "2.4"]],
        hint: "One shaded parallelogram has area 5 x 2.4 = 12. You can compare the four shaded areas with the area of the whole outer parallelogram.",
        correctFeedback: "Correct. The outer parallelogram has area 8 x 6.4 = 51.2 square inches, while the four shaded parallelograms total 4 x 12 = 48 square inches. The unshaded area is 3.2 square inches.",
        incorrectFeedback: "Not quite. Find the area of one shaded parallelogram, multiply by 4, and subtract that total from the area of the outer parallelogram.",
      },
    ],
  },
  {
    id: "teach-l7",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    pdfPage: 1,
    cropPath: "lesson-07-p001-same-parallelograms.png",
    visualAlt: "Two identical source parallelograms, each with a different side marked as base and its corresponding height marked perpendicular.",
    sourceDirections: "Here are two copies of a parallelogram. Each copy has one side labeled as the base and a segment drawn for its corresponding height.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "left-area",
        label: "Left area",
        prompt: "The base of the parallelogram on the left is 2.4 centimeters, and its corresponding height is 1 centimeter. Find its area in square centimeters.",
        responseType: "number",
        inputLabel: "Area of the left parallelogram",
        placeholder: "Type area",
        answerKey: ["2.4", "12/5"],
        visualCropPath: "lesson-07-p001-same-parallelograms.png",
        visualWidth: 535,
        visualHeight: 155,
        visualDisplayMaxWidth: 535,
        visualAlt: "Two identical source parallelograms with different base-height pairs marked.",
        visualDirections: "Use the marked base and corresponding height on each copy.",
        hint: "Area of a parallelogram is base x corresponding height.",
        correctFeedback: "Correct. The left parallelogram has area 2.4 x 1 = 2.4 square centimeters.",
        incorrectFeedback: "Not quite. Multiply the 2.4 cm base by its 1 cm corresponding height.",
      },
      {
        id: "right-base",
        label: "Right base",
        prompt: "The height of the parallelogram on the right is 2 centimeters. How long is its base? Explain your reasoning.",
        responseType: "number",
        inputLabel: "Base length of the right parallelogram",
        placeholder: "Type length",
        answerKey: ["1.2", "6/5"],
        visualCropPath: "lesson-07-p001-same-parallelograms.png",
        visualWidth: 535,
        visualHeight: 155,
        visualDisplayMaxWidth: 535,
        visualAlt: "Two identical source parallelograms with different base-height pairs marked.",
        visualDirections: "The two drawings are copies of the same parallelogram, so they have the same area.",
        reasoningPrompt: "Explain how the shared area and the 2 cm height determine the base.",
        reasoningConcepts: [["2.4", "2"], ["divide", "2"]],
        hint: "Use the area from the left copy, then divide by the right copy's 2 cm height.",
        correctFeedback: "Correct. The shared area is 2.4 square centimeters, and 2.4 / 2 = 1.2, so the base is 1.2 centimeters.",
        incorrectFeedback: "Not quite. The two copies have the same 2.4-square-centimeter area. Find the base that makes base x 2 = 2.4.",
      },
    ],
  },
  {
    id: "teach-l8",
    lessonNumber: 8,
    section: "C",
    idea: "Idea 3",
    title: "Area of Triangles",
    pdfPage: 1,
    cropPath: "lesson-08-p001-composing-parallelograms.png",
    visualAlt: "Source Triangle M and three different parallelograms composed from Triangle M and one identical copy on square grids.",
    sourceDirections: "For each parallelogram Han composed, identify a base and corresponding height, write their measurements, and find the area. Show your reasoning.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "left",
        label: "Left parallelogram",
        prompt: "Identify a base and corresponding height for the left parallelogram, then find its area in square units.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [
          { base: ["6"], height: ["4"], area: ["24"] },
          { base: ["4"], height: ["6"], area: ["24"] },
        ],
        visualCropPath: "lesson-08-p001-composing-parallelograms.png",
        visualWidth: 630,
        visualHeight: 390,
        visualDisplayMaxWidth: 610,
        visualAlt: "Triangle M and three source parallelograms composed from two copies of it.",
        visualDirections: "The top grid shows Triangle M. The lower grid shows the left, middle, and right parallelograms Han composed.",
        reasoningPrompt: "Explain how the grid confirms your base, height, and area.",
        reasoningConcepts: [["6", "4"], ["4", "6"]],
        hint: "Count grid intervals, not grid lines. The left composition can be viewed as a 6-by-4 rectangle.",
        correctFeedback: "Correct. The left parallelogram has area 24 square units. It is composed of two copies of Triangle M, so Triangle M has area 12 square units.",
        incorrectFeedback: "Not quite. A valid pair is base 6 and height 4, giving area 24 square units.",
      },
      {
        id: "middle",
        label: "Middle parallelogram",
        prompt: "Identify a base and corresponding height for the middle parallelogram, then find its area in square units.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: ["4"], height: ["6"], area: ["24"] }],
        visualCropPath: "lesson-08-p001-composing-parallelograms.png",
        visualWidth: 630,
        visualHeight: 390,
        visualDisplayMaxWidth: 610,
        visualAlt: "Triangle M and three source parallelograms composed from two copies of it.",
        visualDirections: "The top grid shows Triangle M. The lower grid shows the left, middle, and right parallelograms Han composed.",
        reasoningPrompt: "Explain how the grid confirms your base, height, and area.",
        reasoningConcepts: [["4", "6"]],
        hint: "Use the vertical side as a 4-unit base and count the 6-unit perpendicular distance to the opposite side.",
        correctFeedback: "Correct. The middle parallelogram has base 4, corresponding height 6, and area 24 square units. Triangle M is half of it, with area 12.",
        incorrectFeedback: "Not quite. The easy base-height pair is 4 and 6, so the area is 24 square units.",
      },
      {
        id: "right",
        label: "Right parallelogram",
        prompt: "Identify a base and corresponding height for the right parallelogram, then find its area in square units.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: ["6"], height: ["4"], area: ["24"] }],
        visualCropPath: "lesson-08-p001-composing-parallelograms.png",
        visualWidth: 630,
        visualHeight: 390,
        visualDisplayMaxWidth: 610,
        visualAlt: "Triangle M and three source parallelograms composed from two copies of it.",
        visualDirections: "The top grid shows Triangle M. The lower grid shows the left, middle, and right parallelograms Han composed.",
        reasoningPrompt: "Explain how the grid confirms your base, height, and area.",
        reasoningConcepts: [["6", "4"]],
        hint: "Use a 6-unit horizontal side as the base and the 4-unit vertical distance as its height.",
        correctFeedback: "Correct. The right parallelogram has base 6, corresponding height 4, and area 24 square units. Triangle M is half of it, with area 12.",
        incorrectFeedback: "Not quite. The horizontal base is 6 units and the corresponding height is 4 units, so the area is 24.",
      },
    ],
  },
  {
    id: "teach-l9",
    lessonNumber: 9,
    section: "C",
    idea: "Idea 3",
    title: "Formula for the Area of a Triangle",
    pdfPage: 2,
    cropPath: "lesson-09-p002-triangle-formula.png",
    visualAlt: "Source triangles A through D on grids and a table for base, height, area, and the general triangle formula.",
    sourceDirections: "For each triangle, identify a base and corresponding height, record their lengths and area, then write an expression for the area of any triangle.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "A",
        label: "Triangle A",
        prompt: "Record a base, its corresponding height, and the area of Triangle A.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: ["10"], height: ["7"], area: ["35"] }],
        visualCropPath: "lesson-09-p002-triangle-formula.png",
        visualWidth: 570,
        visualHeight: 660,
        visualDisplayMaxWidth: 570,
        visualAlt: "Source triangles A through D on square grids.",
        visualDirections: "Use grid intervals to identify a base and its perpendicular height for each triangle.",
        reasoningPrompt: "Explain the area calculation.",
        reasoningConcepts: [["10", "7"], ["70", "half"], ["35", "square"]],
        hint: "The horizontal base is 10 units and its corresponding height is 7 units.",
        correctFeedback: "Correct. Triangle A has area 1/2 x 10 x 7 = 35 square units.",
        incorrectFeedback: "Not quite. Count 10 grid intervals along the horizontal base and 7 perpendicular intervals for the height.",
      },
      {
        id: "B",
        label: "Triangle B",
        prompt: "Record a base, its corresponding height, and the area of Triangle B.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [
          { base: ["11"], height: ["6"], area: ["33"] },
          { base: ["6"], height: ["11"], area: ["33"] },
        ],
        visualCropPath: "lesson-09-p002-triangle-formula.png",
        visualWidth: 570,
        visualHeight: 660,
        visualDisplayMaxWidth: 570,
        visualAlt: "Source triangles A through D on square grids.",
        visualDirections: "Use grid intervals to identify a base and its perpendicular height for each triangle.",
        reasoningPrompt: "Explain the area calculation.",
        reasoningConcepts: [["11", "6"], ["66", "half"], ["33", "square"]],
        hint: "The perpendicular sides measure 11 units and 6 units; either can be the base.",
        correctFeedback: "Correct. Triangle B has area 1/2 x 11 x 6 = 33 square units.",
        incorrectFeedback: "Not quite. Use the 11-unit horizontal side with the 6-unit vertical side, or swap their roles.",
      },
      {
        id: "C",
        label: "Triangle C",
        prompt: "Record a base, its corresponding height, and the area of Triangle C.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: ["10"], height: ["3"], area: ["15"] }],
        visualCropPath: "lesson-09-p002-triangle-formula.png",
        visualWidth: 570,
        visualHeight: 660,
        visualDisplayMaxWidth: 570,
        visualAlt: "Source triangles A through D on square grids.",
        visualDirections: "Use grid intervals to identify a base and its perpendicular height for each triangle.",
        reasoningPrompt: "Explain the area calculation.",
        reasoningConcepts: [["10", "3"], ["30", "half"], ["15", "square"]],
        hint: "The horizontal base is 10 units and the opposite vertex is 3 perpendicular units away.",
        correctFeedback: "Correct. Triangle C has area 1/2 x 10 x 3 = 15 square units.",
        incorrectFeedback: "Not quite. The slanted side is not the height for the horizontal base; use the 3-unit perpendicular distance.",
      },
      {
        id: "D",
        label: "Triangle D",
        prompt: "Record a base, its corresponding height, and the area of Triangle D.",
        fields: [
          { id: "base", label: "Base", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: ["4"], height: ["11"], area: ["22"] }],
        visualCropPath: "lesson-09-p002-triangle-formula.png",
        visualWidth: 570,
        visualHeight: 660,
        visualDisplayMaxWidth: 570,
        visualAlt: "Source triangles A through D on square grids.",
        visualDirections: "Use grid intervals to identify a base and its perpendicular height for each triangle.",
        reasoningPrompt: "Explain the area calculation.",
        reasoningConcepts: [["4", "11"], ["44", "half"], ["22", "square"]],
        hint: "Use the 4-unit horizontal top side and the 11-unit perpendicular vertical distance.",
        correctFeedback: "Correct. Triangle D has area 1/2 x 4 x 11 = 22 square units.",
        incorrectFeedback: "Not quite. The top base spans 4 grid intervals, and its corresponding height spans 11.",
      },
      {
        id: "formula",
        label: "Any triangle",
        prompt: "Write an expression for the area of any triangle with base b and corresponding height h.",
        responseType: "shortAnswer",
        inputLabel: "Area expression",
        placeholder: "Type expression",
        answerKey: ["1/2 x b x h", "(b x h)/2", "b x h / 2", "bh/2", "0.5bh"],
        visualCropPath: "lesson-09-p002-triangle-formula.png",
        visualWidth: 570,
        visualHeight: 660,
        visualDisplayMaxWidth: 570,
        visualAlt: "Source triangles A through D on square grids and the recording table.",
        visualDirections: "Use the pattern in the four completed area calculations.",
        hint: "A triangle is half of a parallelogram with the same base and corresponding height.",
        correctFeedback: "Correct. The area of any triangle is 1/2 x b x h.",
        incorrectFeedback: "Not quite. Start with b x h for the related parallelogram and take half.",
      },
    ],
  },
  {
    id: "teach-l10",
    lessonNumber: 10,
    section: "C",
    idea: "Idea 3",
    title: "Bases and Heights of Triangles",
    activityTitle: "10.2: Hunting for Heights",
    sourceDirections: "Round 1: draw a corresponding height for sides a, b, and c of the rotated triangle. After those are checked, continue to Round 2 and draw a height for the chosen base in Triangles A-F.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "triangleHeights",
    visualAlt: "Source triangle diagrams for drawing heights to chosen bases.",
    prompt: "Complete both source rounds: mark all nine corresponding heights, then explain what makes every segment a height.",
    responseType: "triangleHeightMarks",
    freeTextValidationGuidance: {
      heightReasoning: "include \"perpendicular\" or \"right angle,\" and also include \"opposite\" with \"base\" or \"base line\"",
    },
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
    activityTitle: "11.2: What Are Polygons?",
    sourceDirections: "Study the source examples and non-examples. Circle every figure A-J that is a polygon, then describe the characteristics you used.",
    pdfPage: 2,
    cropPath: "lesson-11-p002-polygon-candidates.png",
    customVisual: "polygonClassification",
    visualAlt: "Source polygon examples, non-examples, and candidate figures A through J.",
    prompt: "Complete both source questions: classify the figures, then explain what all polygons have in common.",
    responseType: "questionSet",
    questions: [
      {
        id: "classify",
        label: "Question 1",
        prompt: "Circle every figure A-J that is a polygon.",
        responseType: "multiSelect",
        choices: "ABCDEFGHIJ".split("").map((id) => ({ id, label: `Figure ${id}` })),
        answerKey: ["B", "F", "G", "H"],
        hint: "A polygon is one two-dimensional figure made only of straight segments. Each segment meets exactly one other segment at each endpoint, and the sides do not cross.",
        correctFeedback: "Correct. B, F, G, and H are polygons. A and E are open; C and J contain extra segments; D has curves; and I has crossing sides.",
        incorrectFeedback: "Not quite. Check whether each drawing is one closed two-dimensional figure made only of straight, non-crossing segments that meet end to end.",
      },
      {
        id: "characteristics",
        label: "Question 2",
        prompt: "What do the figures you circled have in common? What characteristics helped you decide whether a figure was a polygon?",
        responseType: "openResponse",
        inputLabel: "Characteristics of a polygon",
        placeholder: "Describe the characteristics you used.",
        minLength: 24,
        answerConcepts: [
          ["straight", "closed"],
          ["line segment", "endpoint"],
          ["straight", "meet", "end"],
          ["two-dimensional", "straight"],
          ["straight", "do not cross"],
        ],
        hint: "Describe the sides, how their endpoints connect, whether they cross, and whether the figure is two-dimensional.",
        correctFeedback: "Good definition. A polygon is a two-dimensional figure made of straight line segments; each segment meets exactly one other segment at each endpoint, and the sides do not cross.",
        incorrectFeedback: "Strengthen the definition with at least two defining ideas, such as straight line segments, connected endpoints, no crossings, or being two-dimensional.",
      },
    ],
  },
  {
    id: "teach-l12",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.3: Building with Snap Cubes",
    sourceDirections: "Use all 12 cubes to build a rectangular prism with different edge lengths than the shown 3 by 2 by 2 prism. Find its number of faces and surface area, then use the rendered model as your drawing.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "prismBuilder",
    visualAlt: "Interactive rectangular-prism builder using 12 unit cubes.",
    prompt: "Build a different 12-cube rectangular prism and determine its six outside faces and surface area. You may also explain how the rendered drawing supports your calculation.",
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
    activityTitle: "13.1: What are Polyhedra?",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source examples and source-derived virtual figures to inspect and sort.",
    sourceDirections: "Study the source examples and non-examples. Then turn and inspect each virtual figure the app provides, sort the figures into polyhedra and non-polyhedra, and explain the features that distinguish the groups.",
    prompt: "Inspect and sort every assigned figure, then explain how you decided.",
    responseType: "questionSet",
    questions: [
      {
        id: "sort",
        label: "Question 1",
        prompt: "Classify every assigned figure as a polyhedron or not a polyhedron. Submit each figure separately.",
        responseType: "perFigureClassification",
        dynamicAnswer: "polyhedronPerFigure",
        choices: [
          { id: "polyhedron", label: "Polyhedron" },
          { id: "not-polyhedron", label: "Not a polyhedron" },
        ],
        answerKey: ["A", "B", "C", "D", "E", "F", "G", "H", "J"],
        visualType: "polyhedronSort",
        hint: "Turn each figure and check three things: every face is a filled-in polygon, each face joins exactly one other face along each complete edge, and the faces enclose one three-dimensional region.",
        correctFeedback: "Correct. A-H and J are closed source-prepared figures made from flat polygon faces that meet edge to edge. K does not make a closed edge-to-edge surface. L and M have curved surfaces, N is a joined twisted strip that does not enclose a three-dimensional region, and O has an open top.",
        incorrectFeedback: "Inspect every figure from more than one direction. Check for curved surfaces, unjoined or improperly joined edges, and whether the faces enclose one three-dimensional region.",
      },
      {
        id: "features",
        label: "Question 2",
        prompt: "What features helped you distinguish the polyhedra from the other figures?",
        responseType: "openResponse",
        inputLabel: "Defining features",
        placeholder: "Describe the features you used.",
        minLength: 24,
        answerConcepts: [
          ["flat", "face", "closed"],
          ["polygon", "face", "enclose"],
          ["straight", "edge", "no curve"],
          ["three-dimensional", "polygon", "face"],
        ],
        visualType: "polyhedronExamples",
        hint: "Describe the kinds of faces, how the faces meet, and whether the figure encloses a region.",
        correctFeedback: "Good definition. A polyhedron is a closed three-dimensional figure made from flat polygon faces. Each face meets another face along complete straight edges, and the faces enclose a region.",
        incorrectFeedback: "Strengthen the description with the flat polygon faces, complete straight edges, and closed three-dimensional region that define a polyhedron.",
      },
    ],
  },
  {
    id: "teach-l14",
    lessonNumber: 14,
    section: "E",
    idea: "Idea 5",
    title: "Nets and Surface Area",
    activityTitle: "14.1: Matching Nets",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source nets and solids for matching nets to polyhedra.",
    sourceDirections: "Match every source net A-E with its corresponding numbered polyhedron, name the polyhedron, and explain a visual clue for each match.",
    blacklineMasters: unit1BlacklineMasters.matchingNets,
    prompt: "Complete all five net-to-polyhedron matches.",
    responseType: "questionSet",
    questions: [
      {
        id: "net-a",
        label: "Net A",
        prompt: "Which numbered polyhedron does Net A form, and what is its name?",
        responseType: "singleChoice",
        choices: lesson14MatchChoices,
        answerKey: ["solid-3"],
        reasoningPrompt: "Name one face-shape clue that proves the match.",
        reasoningConcepts: [["square", "four", "triang"], ["square", "triang", "pyramid"]],
        visualCropPath: "lesson-14-p001-net-matching-hd.png",
        visualWidth: 2050,
        visualHeight: 850,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source Nets A-E above numbered Polyhedra 1-5.",
        hint: "Net A has one square and four triangles.",
        correctFeedback: "Correct. Net A matches Polyhedron 3, a square pyramid, because its square base is surrounded by four triangular faces.",
        incorrectFeedback: "Net A has one square face and four triangular faces. Match those faces to the numbered solid.",
      },
      {
        id: "net-b",
        label: "Net B",
        prompt: "Which numbered polyhedron does Net B form, and what is its name?",
        responseType: "singleChoice",
        choices: lesson14MatchChoices,
        answerKey: ["solid-2"],
        reasoningPrompt: "Name one face-shape clue that proves the match.",
        reasoningConcepts: [["six", "rectang"], ["rectang", "three", "pair"]],
        visualCropPath: "lesson-14-p001-net-matching-hd.png",
        visualWidth: 2050,
        visualHeight: 850,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source Nets A-E above numbered Polyhedra 1-5.",
        hint: "Net B is made from six rectangles in three matching pairs.",
        correctFeedback: "Correct. Net B matches Polyhedron 2, a rectangular prism, because it has six rectangular faces arranged in three matching pairs.",
        incorrectFeedback: "Count Net B's rectangular faces and compare their shapes with the box-like solids.",
      },
      {
        id: "net-c",
        label: "Net C",
        prompt: "Which numbered polyhedron does Net C form, and what is its name?",
        responseType: "singleChoice",
        choices: lesson14MatchChoices,
        answerKey: ["solid-4"],
        reasoningPrompt: "Name one face-shape clue that proves the match.",
        reasoningConcepts: [["four", "triang"], ["triang", "pyramid"]],
        visualCropPath: "lesson-14-p001-net-matching-hd.png",
        visualWidth: 2050,
        visualHeight: 850,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source Nets A-E above numbered Polyhedra 1-5.",
        hint: "Net C has exactly four triangular faces.",
        correctFeedback: "Correct. Net C matches Polyhedron 4, a triangular pyramid, because all four faces are triangles.",
        incorrectFeedback: "Look for the numbered solid made from four triangular faces.",
      },
      {
        id: "net-d",
        label: "Net D",
        prompt: "Which numbered polyhedron does Net D form, and what is its name?",
        responseType: "singleChoice",
        choices: lesson14MatchChoices,
        answerKey: ["solid-5"],
        reasoningPrompt: "Name one face-shape clue that proves the match.",
        reasoningConcepts: [["two", "triang", "three", "rectang"], ["triang", "prism"]],
        visualCropPath: "lesson-14-p001-net-matching-hd.png",
        visualWidth: 2050,
        visualHeight: 850,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source Nets A-E above numbered Polyhedra 1-5.",
        hint: "Net D has two triangular bases and three rectangular side faces.",
        correctFeedback: "Correct. Net D matches Polyhedron 5, a triangular prism, because it has two triangles and three rectangles.",
        incorrectFeedback: "Find the solid with two triangular bases connected by three rectangles.",
      },
      {
        id: "net-e",
        label: "Net E",
        prompt: "Which numbered polyhedron does Net E form, and what is its name?",
        responseType: "singleChoice",
        choices: lesson14MatchChoices,
        answerKey: ["solid-1"],
        reasoningPrompt: "Name one face-shape clue that proves the match.",
        reasoningConcepts: [["six", "square"], ["cube", "square"]],
        visualCropPath: "lesson-14-p001-net-matching-hd.png",
        visualWidth: 2050,
        visualHeight: 850,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source Nets A-E above numbered Polyhedra 1-5.",
        hint: "Net E has six congruent square faces.",
        correctFeedback: "Correct. Net E matches Polyhedron 1, a cube, because all six faces are congruent squares.",
        incorrectFeedback: "Look for the numbered solid whose six faces are all squares.",
      },
    ],
  },
  {
    id: "teach-l15",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    activityTitle: "15.3: Comparing Boxes",
    sourceDirections: "Use the source nets to compare all three boxes. First compare their surface areas and cardboard use. Then compare their volumes and cube capacity.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source net diagrams for three cardboard boxes.",
    prompt: "Answer both source comparisons, then try the optional cube-net investigation.",
    responseType: "questionSet",
    questions: [
      {
        id: "box-surface-areas",
        label: "Question 1: Cardboard",
        prompt: "Find and compare the surface areas of Boxes A, B, and C. Which box uses the least cardboard?",
        fields: [
          { id: "areaA", label: "Box A surface area", responseType: "number", placeholder: "Type square units" },
          { id: "areaB", label: "Box B surface area", responseType: "number", placeholder: "Type square units" },
          { id: "areaC", label: "Box C surface area", responseType: "number", placeholder: "Type square units" },
          { id: "least", label: "Box using the least cardboard", responseType: "shortAnswer", placeholder: "Type A, B, or C" },
        ],
        acceptedFieldSets: [{ areaA: ["42"], areaB: ["54"], areaC: ["54"], least: ["A", "Box A"] }],
        reasoningPrompt: "Show how the face areas in the nets support your comparison.",
        reasoningConcepts: [["42", "54"], ["surface", "area", "a"], ["face", "area", "a"]],
        visualCropPath: "lesson-15-p002-box-nets.png",
        visualWidth: 538,
        visualHeight: 510,
        visualDisplayMaxWidth: 538,
        visualAlt: "Source nets A, B, and C with all side lengths labeled in centimeters.",
        hint: "Each pair of matching faces appears in the net. Add all six face areas for each box.",
        reasoningRevisionFeedback: "Your surface areas and comparison are correct. Strengthen the explanation by showing how the labeled faces total 42 for A and 54 for both B and C.",
        correctFeedback: "Correct. Box A has surface area 42 square centimeters. Boxes B and C each have surface area 54 square centimeters, so Box A uses the least cardboard.",
        incorrectFeedback: "Recheck all six faces in each net. Box dimensions are A: 2 by 3 by 3, B: 1 by 3 by 6, and C: 3 by 3 by 3.",
      },
      {
        id: "box-volumes",
        label: "Question 2: Capacity",
        prompt: "Find and compare the volumes of Boxes A, B, and C. Which box holds the most 1-centimeter cubes?",
        fields: [
          { id: "volumeA", label: "Box A volume", responseType: "number", placeholder: "Type cubic centimeters" },
          { id: "volumeB", label: "Box B volume", responseType: "number", placeholder: "Type cubic centimeters" },
          { id: "volumeC", label: "Box C volume", responseType: "number", placeholder: "Type cubic centimeters" },
          { id: "most", label: "Box holding the most cubes", responseType: "shortAnswer", placeholder: "Type A, B, or C" },
        ],
        acceptedFieldSets: [{ volumeA: ["18"], volumeB: ["18"], volumeC: ["27"], most: ["C", "Box C"] }],
        reasoningPrompt: "Show how the three edge lengths of each folded box support your comparison.",
        reasoningConcepts: [["18", "27"], ["volume", "c"], ["multiply", "length", "c"]],
        visualCropPath: "lesson-15-p002-box-nets.png",
        visualWidth: 538,
        visualHeight: 510,
        visualDisplayMaxWidth: 538,
        visualAlt: "Source nets A, B, and C with all side lengths labeled in centimeters.",
        hint: "Fold each net mentally, identify its three edge lengths, and multiply those lengths.",
        reasoningRevisionFeedback: "Your volumes and comparison are correct. Strengthen the explanation by showing that A and B each have volume 18 while C has volume 27.",
        correctFeedback: "Correct. Boxes A and B each hold 18 cubic centimeters. Box C holds 27 cubic centimeters, so C holds the most 1-centimeter cubes.",
        incorrectFeedback: "Use the three folded dimensions: A is 2 by 3 by 3, B is 1 by 3 by 6, and C is 3 by 3 by 3.",
      },
      {
        id: "optional-cube-nets",
        label: "Optional: Cube nets",
        prompt: "Build and save three cube nets that differ from source Figure C. Then enter the total number of different nets that can be assembled into a cube.",
        responseType: "number",
        optional: true,
        answerKey: ["11"],
        placeholder: "Type the total number of cube nets",
        visualType: "cubeNetBuilder",
        requiredCustomState: { cubeNetSavedCount: "3" },
        requiredStateFeedback: "Build and save three different valid cube nets before submitting the total.",
        hint: "A cube net uses exactly six edge-connected squares. When folded, the six squares must become six different faces without overlap.",
        correctFeedback: "Correct. There are 11 different cube nets, counting rotations and reflections of the same arrangement as one net. Your three saved constructions are valid examples different from Figure C.",
        incorrectFeedback: "Keep the six squares edge-connected and test whether every square folds to a different cube face. The total counts arrangements, not their rotations or reflections.",
      },
    ],
  },
  {
    id: "teach-l16",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    activityTitle: "16.1: Attributes and Their Measures",
    sourceDirections: "For Quantities 1-6, choose every unit from the source bank that is appropriate in both dimension and scale. For 7-8, give a quantity that fits the stated unit.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source quantities and measurement-unit bank.",
    prompt: "Complete all eight source rows independently.",
    responseType: "questionSet",
    questions: [
      {
        id: "parking-lot",
        label: "1. Parking lot perimeter",
        prompt: "Which source units are appropriate for the perimeter of a parking lot? Select all that apply.",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["feet", "meters"],
        visualType: "measurementUnitBank",
        hint: "Perimeter is a length, and a parking lot needs a human-scale unit larger than millimeters.",
        correctFeedback: "Correct. Feet and meters are appropriate length units for a parking-lot perimeter. Square and cubic units measure different attributes.",
        incorrectFeedback: "Choose length units with a reasonable size for a parking lot; do not use square or cubic units.",
      },
      {
        id: "semi-truck",
        label: "2. Semi-truck volume",
        prompt: "Which source unit is appropriate for the volume of a semi truck?",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["cubic-yards"],
        visualType: "measurementUnitBank",
        hint: "Volume needs a cubic unit large enough for a truck but far smaller than a cubic kilometer.",
        correctFeedback: "Correct. Cubic yards is the appropriately scaled three-dimensional unit in the source bank.",
        incorrectFeedback: "Volume requires cubic units. Compare the real-world sizes represented by cubic yards and cubic kilometers.",
      },
      {
        id: "refrigerator",
        label: "3. Refrigerator surface area",
        prompt: "Which source unit is appropriate for the surface area of a refrigerator?",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["square-feet"],
        visualType: "measurementUnitBank",
        hint: "Surface area is two-dimensional and a refrigerator is usually measured on a feet scale.",
        correctFeedback: "Correct. Square feet is an appropriately scaled area unit for the outside faces of a refrigerator.",
        incorrectFeedback: "Choose a square unit with a reasonable scale for a refrigerator.",
      },
      {
        id: "eyelash",
        label: "4. Eyelash length",
        prompt: "Which source unit is appropriate for the length of an eyelash?",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["millimeters"],
        visualType: "measurementUnitBank",
        hint: "An eyelash is short and length is one-dimensional.",
        correctFeedback: "Correct. Millimeters is an appropriately small length unit for an eyelash.",
        incorrectFeedback: "Choose a small one-dimensional unit, not a square or cubic unit.",
      },
      {
        id: "state-area",
        label: "5. Area of a state",
        prompt: "Which source unit is appropriate for the area of a state?",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["square-miles"],
        visualType: "measurementUnitBank",
        hint: "A state covers a large two-dimensional region.",
        correctFeedback: "Correct. Square miles is an appropriately large area unit for a state.",
        incorrectFeedback: "Area needs square units, and a state needs a large geographic-scale unit.",
      },
      {
        id: "ocean-volume",
        label: "6. Ocean volume",
        prompt: "Which source unit is appropriate for the volume of an ocean?",
        responseType: "multiSelect",
        choices: measurementUnitChoices,
        answerKey: ["cubic-kilometers"],
        visualType: "measurementUnitBank",
        hint: "An ocean is an enormous three-dimensional amount of space.",
        correctFeedback: "Correct. Cubic kilometers is an appropriately large volume unit for an ocean.",
        incorrectFeedback: "Volume needs cubic units, and an ocean requires the largest cubic scale in the source bank.",
      },
      {
        id: "miles-example",
        label: "7. Quantity measured in miles",
        prompt: "Name a quantity that could appropriately be measured in miles.",
        responseType: "openResponse",
        inputLabel: "Quantity measured in miles",
        placeholder: "Describe a quantity",
        minLength: 5,
        answerConcepts: [["distance"], ["length"], ["trip"], ["road"], ["between"], ["route"]],
        visualType: "measurementUnitBank",
        hint: "Think of a long one-dimensional distance, such as travel between places.",
        correctFeedback: "Good example. Miles appropriately measure long distances, such as the length of a route or the distance between cities.",
        incorrectFeedback: "Describe a long distance or length that could reasonably be measured in miles.",
      },
      {
        id: "cubic-meters-example",
        label: "8. Quantity measured in cubic meters",
        prompt: "Name a quantity that could appropriately be measured in cubic meters.",
        responseType: "openResponse",
        inputLabel: "Quantity measured in cubic meters",
        placeholder: "Describe a quantity",
        minLength: 5,
        answerConcepts: [["volume"], ["room"], ["pool"], ["container"], ["space"], ["building"]],
        visualType: "measurementUnitBank",
        hint: "Think of a three-dimensional space or container whose volume is room-sized.",
        correctFeedback: "Good example. Cubic meters appropriately measure volume, such as the space in a room, pool, or large container.",
        incorrectFeedback: "Describe a three-dimensional amount of space that could reasonably be measured in cubic meters.",
      },
    ],
  },
  {
    id: "teach-l17",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.1: Perfect Squares",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "A three-by-three square on a square grid, matching the source perfect-square visual.",
    sourceDirections: "Use square side lengths and areas to investigate perfect squares.",
    prompt: "Complete all three source questions about perfect squares.",
    responseType: "questionSet",
    questions: [
      {
        id: "square-examples",
        label: "1. Examples and non-examples",
        prompt: "The number 9 is a perfect square. Find four numbers that are perfect squares and two numbers that are not perfect squares.",
        fields: [
          { id: "square1", label: "Perfect square 1", responseType: "number", placeholder: "Type a number" },
          { id: "square2", label: "Perfect square 2", responseType: "number", placeholder: "Type a number" },
          { id: "square3", label: "Perfect square 3", responseType: "number", placeholder: "Type a number" },
          { id: "square4", label: "Perfect square 4", responseType: "number", placeholder: "Type a number" },
          { id: "notSquare1", label: "Not a perfect square 1", responseType: "number", placeholder: "Type a number" },
          { id: "notSquare2", label: "Not a perfect square 2", responseType: "number", placeholder: "Type a number" },
        ],
        dynamicAnswer: "perfectSquareExamples",
        visualCropPath: "lesson-17-p001-perfect-squares-cubes.png",
        visualWidth: 140,
        visualHeight: 140,
        visualDisplayMaxWidth: 140,
        visualAlt: "A three-by-three square on a square grid, the source example for the perfect square 9.",
        hint: "A whole number is a perfect square when it can be written as the product of the same whole number twice.",
        correctFeedback: "Correct. Each of the first four numbers is a whole number multiplied by itself, while neither of the last two has an equal whole-number factor pair.",
        incorrectFeedback: "Check all six distinct numbers. The first four must each equal n × n for a whole number n; the last two must not.",
      },
      {
        id: "square-area",
        label: "2. Area from side length",
        prompt: "A square has side length 7 inches. What is its area in square inches?",
        responseType: "number",
        inputLabel: "Area (square inches)",
        placeholder: "Type area",
        answerKey: ["49"],
        visualCropPath: "lesson-17-p001-perfect-squares-cubes.png",
        visualWidth: 140,
        visualHeight: 140,
        visualDisplayMaxWidth: 140,
        visualAlt: "A square divided into equal square units.",
        hint: "Multiply the side length by itself.",
        correctFeedback: "Correct. A 7-inch by 7-inch square has area 7 × 7 = 49 square inches.",
        incorrectFeedback: "A square has equal side lengths. Multiply 7 inches by 7 inches and report square inches.",
      },
      {
        id: "square-side",
        label: "3. Side length from area",
        prompt: "The area of a square is 64 square centimeters. What is its side length in centimeters?",
        responseType: "number",
        inputLabel: "Side length (centimeters)",
        placeholder: "Type side length",
        answerKey: ["8"],
        visualCropPath: "lesson-17-p001-perfect-squares-cubes.png",
        visualWidth: 140,
        visualHeight: 140,
        visualDisplayMaxWidth: 140,
        visualAlt: "A square divided into equal square units.",
        hint: "Find the whole number that gives 64 when multiplied by itself.",
        correctFeedback: "Correct. 8 × 8 = 64, so the square's side length is 8 centimeters.",
        incorrectFeedback: "Look for two equal whole-number factors of 64. Their common value is the side length.",
      },
    ],
  },
  {
    id: "teach-l18",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    activityTitle: "18.2: The Net of a Cube",
    pdfPage: 1,
    pdfPages: [1, 2],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive cube-net construction and cube edge-length reference.",
    sourceDirections: "Draw and label a net for each cube, then reason about its faces, surface area, and volume.",
    prompt: "Complete both source cube investigations: edge length 5 inches and edge length 17 units.",
    responseType: "questionSet",
    questions: [
      {
        id: "cube5-net",
        label: "1a. Net for edge 5",
        prompt: "Draw a net for the cube with edge length 5 inches, and label its sides with measurements.",
        fields: [
          { id: "edgeLabel", label: "Side-length measurement applied to the net's squares", responseType: "shortAnswer", placeholder: "Type a measurement", answerKey: ["5", "5 in", "5 inches"] },
        ],
        visualType: "labeledCubeNet",
        netStateId: "cube5",
        netLabelField: "edgeLabel",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Select six edge-connected squares that fold into a cube before submitting the labeled net.",
        hint: "A cube net has six equal squares connected along complete edges. Not every connected arrangement folds without overlap.",
        correctFeedback: "Correct. Your six-square arrangement folds into a cube, and every edge has length 5 inches.",
        incorrectFeedback: "Keep a valid six-square cube net and label its edge measurement as 5 inches.",
      },
      {
        id: "cube5-face-shape",
        label: "1b. Face shape",
        prompt: "What is the shape of each face of the cube?",
        responseType: "singleChoice",
        choices: [
          { id: "square", label: "Square" },
          { id: "rectangle", label: "Rectangle that is not a square" },
          { id: "triangle", label: "Triangle" },
          { id: "circle", label: "Circle" },
        ],
        answerKey: ["square"],
        visualType: "cubeMetricReference",
        edgeLabel: "5 in",
        netStateId: "cube5",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 5-inch cube before identifying its face shape.",
        hint: "All edges of a cube have the same length, including both dimensions of each face.",
        correctFeedback: "Correct. Every face of a cube is an identical square.",
        incorrectFeedback: "A cube's faces each have four equal sides and four right angles.",
      },
      {
        id: "cube5-face-area",
        label: "1c. Area of each face",
        prompt: "What is the area of each face of the cube?",
        responseType: "number",
        inputLabel: "Area of each face (square inches)",
        placeholder: "Type face area",
        answerKey: ["25"],
        visualType: "cubeMetricReference",
        edgeLabel: "5 in",
        netStateId: "cube5",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 5-inch cube before finding one face's area.",
        hint: "Each face is a square with side length 5 inches.",
        correctFeedback: "Correct. Each face has area 5 × 5 = 25 square inches.",
        incorrectFeedback: "Find the area of one 5-inch by 5-inch square face.",
      },
      {
        id: "cube5-surface-area",
        label: "1d. Surface area",
        prompt: "What is the surface area of the cube?",
        responseType: "number",
        inputLabel: "Surface area (square inches)",
        placeholder: "Type surface area",
        answerKey: ["150"],
        visualType: "cubeMetricReference",
        edgeLabel: "5 in",
        netStateId: "cube5",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 5-inch cube before finding its surface area.",
        hint: "A cube has six identical square faces.",
        correctFeedback: "Correct. Six faces of 25 square inches each give 6 × 25 = 150 square inches.",
        incorrectFeedback: "Multiply the area of one face by the cube's six faces.",
      },
      {
        id: "cube5-volume",
        label: "1e. Volume",
        prompt: "What is the volume of the cube?",
        responseType: "number",
        inputLabel: "Volume (cubic inches)",
        placeholder: "Type volume",
        answerKey: ["125"],
        visualType: "cubeMetricReference",
        edgeLabel: "5 in",
        netStateId: "cube5",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 5-inch cube before finding its volume.",
        hint: "Multiply the cube's three equal edge lengths.",
        correctFeedback: "Correct. 5 × 5 × 5 = 125 cubic inches.",
        incorrectFeedback: "Volume uses all three 5-inch dimensions of the cube.",
      },
      {
        id: "cube17-net",
        label: "2a. Net for edge 17",
        prompt: "Draw a net for the second cube with edge length 17 units, and label its sides with measurements.",
        fields: [
          { id: "edgeLabel", label: "Side-length measurement applied to the net's squares", responseType: "shortAnswer", placeholder: "Type a measurement", answerKey: ["17", "17 units"] },
        ],
        visualType: "labeledCubeNet",
        netStateId: "cube17",
        netLabelField: "edgeLabel",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Select six edge-connected squares that fold into a cube before submitting the labeled net.",
        hint: "The arrangement can differ from your first net, but it still needs exactly six equal square faces.",
        correctFeedback: "Correct. Your six-square arrangement folds into a cube, and every edge is labeled 17 units.",
        incorrectFeedback: "Keep a valid six-square cube net and label its edge measurement as 17 units.",
      },
      {
        id: "cube17-face-area",
        label: "2b. Face-area reasoning",
        prompt: "Explain why the area of each face of this cube is 17^2 square units.",
        responseType: "openResponse",
        inputLabel: "Your explanation",
        placeholder: "Explain using the face dimensions",
        minLength: 12,
        answerConcepts: [["17", "17", "square"], ["17^2", "square"], ["17²", "square"]],
        visualType: "cubeMetricReference",
        edgeLabel: "17 units",
        netStateId: "cube17",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 17-unit cube before explaining one face's area.",
        hint: "Describe the shape of a face and its two side lengths.",
        correctFeedback: "Correct. Each face is a square with side lengths 17 and 17, so its area is 17 × 17 = 17^2 square units.",
        incorrectFeedback: "Connect the square face's two 17-unit side lengths to multiplication and second-power notation.",
      },
      {
        id: "cube17-surface-expression",
        label: "2c. Surface-area expression",
        prompt: "Write an expression for the cube's surface area, in square units. Do not calculate it.",
        fields: [
          { id: "expression", label: "Surface-area expression", responseType: "shortAnswer", placeholder: "Type an expression", answerKey: ["6 x 17^2", "6 × 17^2", "6*17^2", "6(17^2)", "6 · 17^2", "6 x 17²", "6 × 17²", "6*17²", "6(17²)", "6 · 17²"] },
          { id: "units", label: "Surface-area units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["square units", "units^2", "units²"] },
        ],
        visualType: "cubeMetricReference",
        edgeLabel: "17 units",
        netStateId: "cube17",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 17-unit cube before writing its surface-area expression.",
        hint: "Find one square face's area, then account for all six identical faces.",
        correctFeedback: "Correct. The surface-area expression is 6 × 17^2 square units: six faces, each with area 17^2.",
        incorrectFeedback: "Write six times the second power of 17, and use square units.",
      },
      {
        id: "cube17-volume-expression",
        label: "2d. Volume expression",
        prompt: "Write an expression for the cube's volume, in cubic units. Do not calculate it.",
        fields: [
          { id: "expression", label: "Volume expression", responseType: "shortAnswer", placeholder: "Type an expression", answerKey: ["17^3", "17³", "17 x 17 x 17", "17 × 17 × 17", "17*17*17"] },
          { id: "units", label: "Volume units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["cubic units", "units^3", "units³"] },
        ],
        visualType: "cubeMetricReference",
        edgeLabel: "17 units",
        netStateId: "cube17",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw and label a valid net for the 17-unit cube before writing its volume expression.",
        hint: "Volume uses the cube's three equal edge lengths.",
        correctFeedback: "Correct. The volume expression is 17^3 cubic units because all three dimensions are 17 units.",
        incorrectFeedback: "Use three factors of 17, third-power notation, and cubic units.",
      },
    ],
  },
  {
    id: "teach-l19",
    lessonNumber: 19,
    section: "G",
    idea: "Idea 7",
    title: "Designing a Tent",
    activityTitle: "19.1: Tent Design - Part 1",
    pdfPage: 1,
    pdfPages: [1, 2, 3, 4],
    cropPath: null,
    visualAlt: "Interactive tent designer with a sleeping-bag floor plan, tent model, and fabric-panel organizer.",
    sourceContext: "Tents can take many shapes and sizes. Use the source examples and specifications as evidence for your design choices.",
    sourceDirections: "Study the source tent styles and specifications, then design a tent for up to four campers. Standard sleeping bags measure 74 by 34 inches, and every design must include a floor and a justified fabric estimate.",
    blacklineMasters: unit1BlacklineMasters.tentPlanning,
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "source-discussion",
        label: "Explore the source tents",
        prompt: "Study the five source tent styles. Record a similarity or difference, information that will matter in your design, and one pro and one con of a design.",
        responseType: "openResponse",
        inputLabel: "Your source observations",
        placeholder: "Address all three discussion points",
        minLength: 30,
        answerConceptRequirements: [
          [["same"], ["similar"], ["different"], ["shape"], ["roof"], ["wall"]],
          [["people"], ["sleeping"], ["height"], ["dimension"], ["fabric"], ["floor"], ["size"]],
          [["pro"], ["advantage"], ["more", "space"], ["easier"]],
          [["con"], ["disadvantage"], ["more", "fabric"], ["less", "space"], ["harder"]],
        ],
        visualCropPath: "lesson-19-p001-tent-styles.png",
        visualWidth: 1300,
        visualHeight: 620,
        visualDisplayMaxWidth: 900,
        visualDirections: "Compare the source tent styles before choosing your own design.",
        preserveWhenTentChanges: true,
        hint: "Notice roof and wall shapes, usable space, likely fabric needs, and how easily campers could move inside.",
        correctFeedback: "Your observations address how the tents compare, what information matters, and both sides of a design tradeoff.",
        incorrectFeedback: "Address all three source discussion points: a similarity or difference, important design information, and a pro and con.",
      },
      {
        id: "build-plan",
        label: "1. Build a tent plan",
        prompt: "Create a tent design that fits every selected sleeping bag and includes a floor.",
        responseType: "construction",
        dynamicAnswer: "tentPlanReady",
        visualType: "tentDesigner",
        hint: "Start with the capacity and bag arrangement. The dashed outline shows the minimum floor space required by 74-by-34-inch sleeping bags.",
        correctFeedback: "Your plan fits every sleeping bag and includes a complete tent shape and floor.",
        incorrectFeedback: "Complete the design choices and make the floor large enough for every sleeping bag.",
      },
      {
        id: "design-decisions",
        label: "2. Design decisions",
        prompt: "What decisions were important when choosing your tent design?",
        responseType: "openResponse",
        inputLabel: "Important design decisions",
        placeholder: "Explain the choices that mattered",
        minLength: 20,
        answerConcepts: [
          ["people", "floor"],
          ["sleeping", "bag"],
          ["height", "shape"],
          ["height", "fabric"],
          ["floor", "fabric"],
        ],
        answerConceptsRequired: 2,
        visualType: "tentDesigner",
        requiredConstruction: "savedTentPlan",
        requiredStateFeedback: "Build a valid tent plan in Question 1 before explaining its design decisions.",
        hint: "Consider capacity, sleeping-bag space, height, tent shape, and how those choices affect fabric.",
        correctFeedback: "Your explanation connects at least two design constraints from the source task.",
        incorrectFeedback: "Name the design choices and explain how at least two of them are connected, such as sleeping-bag space and floor size or height and fabric.",
      },
      {
        id: "fabric-estimate",
        label: "3. Fabric estimate",
        prompt: "How many square feet of fabric are needed for your tent, including the floor?",
        fields: [
          { id: "estimate", label: "Fabric estimate", responseType: "number", placeholder: "Enter a number" },
          { id: "units", label: "Area units", responseType: "shortAnswer", placeholder: "Type area units" },
        ],
        dynamicAnswer: "tentFabricEstimate",
        visualType: "tentDesigner",
        requiredConstruction: "savedTentPlan",
        requiredStateFeedback: "Build a valid tent plan in Question 1 before calculating its fabric.",
        reasoningPrompt: "Show how the floor and every outside panel are included in your estimate.",
        reasoningConcepts: [
          ["surface", "area"],
          ["floor", "roof"],
          ["panel", "area"],
          ["floor", "wall"],
        ],
        hint: "Use the panel organizer beside the model. Find each panel area, multiply for matching panels, and include the floor.",
        correctFeedback: "Your estimate matches the total area of every fabric panel in your selected design.",
        incorrectFeedback: "Recheck the floor and each matching pair of roof, wall, or end panels.",
      },
    ],
  },
];

const teachCardEnhancements = {
  "teach-l2": {
    activityTitle: "2.1: What is Area?",
    sourceDirections: "Here are four drawings that each show squares inside a shape.",
  },
  "teach-l3": {
    activityTitle: "3.1: Comparing Regions",
    sourceDirections: "Compare the area of Figure A with the shaded region in Figure B.",
  },
  "teach-l4": {
    activityTitle: "4.1: Features of a Parallelogram",
    sourceDirections: "Figures A, B, and C are parallelograms. Figures D, E, and F are not parallelograms. Study the examples and non-examples.",
  },
  "teach-l5": {
    activityTitle: "5.2: The Right Height?",
    sourceDirections: "Study the examples and non-examples of bases and heights of parallelograms.",
  },
  "teach-l6": {
    activityTitle: "6.2: More Areas of Parallelograms",
    sourceDirections: "Calculate the starting parallelogram, create and calculate three new ones, determine Height B, then explain and create equal-area pairs.",
  },
  "teach-l7": {
    activityTitle: "7.1: Same Parallelograms, Different Bases",
    sourceDirections: "Here are two copies of a parallelogram. Each copy has one side labeled as the base and a segment drawn for its corresponding height.",
  },
  "teach-l8": {
    activityTitle: "8.1: Composing Parallelograms",
    sourceDirections: "For each parallelogram Han composed, identify a base and corresponding height, write their measurements, and find the area. Show your reasoning.",
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
    sourceDirections: "Study the source examples and non-examples. Circle every figure A-J that is a polygon, then describe the characteristics you used.",
  },
  "teach-l12": {
    activityTitle: "12.3: Building with Snap Cubes",
    sourceDirections: "Use all 12 cubes to build a rectangular prism with different edge lengths than the shown 3 by 2 by 2 prism. Find its number of faces and surface area, then use the rendered model as your drawing.",
  },
  "teach-l13": {
    activityTitle: "13.1: What are Polyhedra?",
    sourceDirections: "Study the source examples and non-examples. Turn and inspect every virtual figure, sort the figures into polyhedra and non-polyhedra, and explain the features that distinguish the groups.",
  },
  "teach-l14": {
    activityTitle: "14.1: Matching Nets",
    sourceDirections: "Match every source net A-E with its corresponding numbered polyhedron, name the polyhedron, and explain a visual clue for each match.",
  },
  "teach-l15": {
    activityTitle: "15.3: Comparing Boxes",
    sourceDirections: "Use the source nets to compare all three boxes. First compare their surface areas and cardboard use. Then compare their volumes and cube capacity.",
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
    sourceDirections: "Draw and label a net for each cube, then reason about its faces, surface area, and volume.",
  },
  "teach-l19": {
    activityTitle: "19.1: Tent Design - Part 1",
    sourceDirections: "Study the source tent styles and specifications, then design a tent for up to four campers. Standard sleeping bags measure 74 by 34 inches, and every design must include a floor and a justified fabric estimate.",
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
    customVisual: "questionSetVisual",
    blacklineMaster: lesson2TangramBlacklineMaster,
    visualAlt: "Interactive Lesson 2 tangram pieces: one square, four small triangles, one medium triangle, and two large triangles.",
    responseType: "questionSet",
    questions: [
      {
        id: "two-small-square",
        label: "Question 1",
        prompt: "Two small triangles can be put together to make a square. What is the area of that square?",
        responseType: "number",
        answerKey: ["1"],
        reasoningPrompt: "Explain why the composed square has that area.",
        reasoningConcepts: [["two", "small", "square"], ["match", "unit square"], ["same", "area"]],
        visualType: "tangram",
        hint: "Compare the square made from two small triangles with the given unit square.",
        correctFeedback: "Correct. The two-small-triangle square matches the given unit square exactly, so its area is 1 square unit.",
        incorrectFeedback: "Compare the composed square with the given square whose area is 1 square unit.",
      },
      {
        id: "area-1-not-square",
        label: "Question 2",
        prompt: "Use the pieces to create a new shape with area 1 square unit that is not a square.",
        responseType: "construction",
        dynamicAnswer: "tangramConstruction",
        targetArea: 1,
        minimumPieces: 2,
        rejectSquare: true,
        visualType: "tangram",
        constructionNote: "Mark the pieces used in your shape, drag and turn them into one non-overlapping figure, then submit this question.",
        hint: "The same two small triangles that make the unit square can be rearranged into a different shape without changing their combined area.",
        correctFeedback: "Correct. Your connected, non-overlapping shape uses pieces totaling 1 square unit and is not a square.",
        incorrectFeedback: "Revise the construction. It must use at least two pieces, form one connected shape without overlaps, total 1 square unit, and not be a square.",
      },
      {
        id: "area-2-first",
        label: "Question 3",
        prompt: "Use the pieces to create a new shape with area 2 square units.",
        responseType: "construction",
        dynamicAnswer: "tangramConstruction",
        targetArea: 2,
        minimumPieces: 2,
        visualType: "tangram",
        constructionNote: "Mark the pieces used in your shape, compose one connected non-overlapping figure, then submit this question.",
        hint: "You can combine pieces whose areas add to two unit squares, then rearrange them without changing area.",
        correctFeedback: "Correct. Your connected, non-overlapping composition has area 2 square units.",
        incorrectFeedback: "Revise the construction so the used pieces form one connected, non-overlapping shape with area 2 square units.",
      },
      {
        id: "area-2-different",
        label: "Question 4",
        prompt: "Use the pieces to create a different shape with area 2 square units.",
        responseType: "construction",
        dynamicAnswer: "tangramConstruction",
        targetArea: 2,
        minimumPieces: 2,
        differentFromQuestionId: "area-2-first",
        visualType: "tangram",
        constructionNote: "Build and submit an area-2 composition whose piece arrangement differs from your saved Question 3 shape.",
        hint: "Change which pieces you use or rearrange the same pieces into a visibly different outline.",
        correctFeedback: "Correct. This is a second, different connected composition with area 2 square units.",
        incorrectFeedback: "Build one connected, non-overlapping area-2 shape that is meaningfully different from your saved Question 3 construction.",
      },
      {
        id: "area-4",
        label: "Question 5",
        prompt: "Use the pieces to create a new shape with area 4 square units.",
        responseType: "construction",
        dynamicAnswer: "tangramConstruction",
        targetArea: 4,
        minimumPieces: 2,
        visualType: "tangram",
        constructionNote: "Mark the pieces used in your shape, compose one connected non-overlapping figure, then submit this question.",
        hint: "A large triangle has the same area as four small triangles, or two unit squares. Combine enough pieces to make 4 square units.",
        correctFeedback: "Correct. Your connected, non-overlapping composition has area 4 square units.",
        incorrectFeedback: "Revise the construction so the used pieces form one connected, non-overlapping shape with area 4 square units.",
      },
      {
        id: "all-pieces-square",
        label: "Optional challenge",
        prompt: "Use all of the pieces to compose one large square. What is the area of the large square?",
        responseType: "construction",
        dynamicAnswer: "tangramConstruction",
        targetArea: 8,
        minimumPieces: 8,
        requireAllPieces: true,
        requireSquare: true,
        requireAreaAnswer: true,
        optional: true,
        visualType: "tangram",
        constructionNote: "Use every piece, with no gaps or overlaps, to make one square. The app checks the construction and its total area.",
        hint: "The complete Blackline Master set was cut from one large square. Use all eight pieces and make its outer boundary square.",
        correctFeedback: "Correct. All eight pieces recompose the original large square, whose area is 8 square units.",
        incorrectFeedback: "Use all eight pieces to form one connected, non-overlapping square. The full set has area 8 square units.",
      },
    ],
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
    customVisual: "questionSetVisual",
    blacklineMaster: lesson2TangramBlacklineMaster,
    visualAlt: "Interactive Lesson 2 tangram pieces used to compare the areas of the small, medium, and large triangles.",
    responseType: "questionSet",
    questions: [
      {
        id: "small-triangle",
        label: "Small triangle",
        prompt: "The area of the small triangle is _____ square units.",
        responseType: "number",
        answerKey: ["1/2", "0.5"],
        reasoningPrompt: "I know this because...",
        reasoningConcepts: [["two", "small", "square"], ["half", "unit square"]],
        visualType: "tangram",
        hint: "Two small triangles compose the unit square.",
        correctFeedback: "Correct. Two small triangles compose 1 square unit, so one small triangle has area 1/2 square unit.",
        incorrectFeedback: "Use the square made from two matching small triangles as the 1-square-unit reference.",
      },
      {
        id: "medium-triangle",
        label: "Medium triangle",
        prompt: "The area of the medium triangle is _____ square units.",
        responseType: "number",
        answerKey: ["1"],
        reasoningPrompt: "I know this because...",
        reasoningConcepts: [["two", "small"], ["match", "square"], ["same", "unit square"]],
        visualType: "tangram",
        hint: "Compare the medium triangle with two small triangles or with the unit square.",
        correctFeedback: "Correct. The medium triangle can be matched by two small triangles, the same pieces that compose 1 square unit.",
        incorrectFeedback: "Compose two small triangles and compare that region with the medium triangle and the unit square.",
      },
      {
        id: "large-triangle",
        label: "Large triangle",
        prompt: "The area of the large triangle is _____ square units.",
        responseType: "number",
        answerKey: ["2"],
        reasoningPrompt: "I know this because...",
        reasoningConcepts: [["four", "small"], ["two", "square"], ["decompos", "small"]],
        visualType: "tangram",
        hint: "A large triangle can be decomposed into four small triangles, which can be rearranged into two unit squares.",
        correctFeedback: "Correct. Four small triangles compose the large triangle and can be rearranged into two unit squares, so its area is 2 square units.",
        incorrectFeedback: "Compare one large triangle with four small triangles, then regroup those small triangles into unit squares.",
      },
    ],
  },
  {
    id: "teach-l3-2",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    activityTitle: "3.2: On the Grid",
    sourceDirections: "Each grid square is 1 square unit. Find the area, in square units, of each shaded region without counting every square. Select a figure to work on.",
    pdfPage: 1,
    cropPath: teachLessonCrop(3),
    customVisual: "gridFigureAreas",
    visualAlt: "Four source grid figures labeled A through D with shaded regions whose areas are to be found.",
    prompt: "Select a figure, find its area in square units, and explain an efficient strategy.",
    responseType: "gridFigureAreas",
    requireReasoning: true,
    reasoningPrompt: "How did you find the area without counting every square?",
    reasoningRequiredFeedback: "Your area is correct. Explain a decomposition, rearrangement, subtraction, or enclosure strategy for Figure {figure}, then submit again.",
    figures: [
      {
        id: "A",
        answer: "24",
        reasoningConcepts: [["rectangle", "add"], ["two", "rectangle"], ["6", "2"], ["3", "4"], ["decompos", "rectangle"]],
        reasoningRevisionFeedback: "Your area is correct, but explain how rectangles and their dimensions give 24 without counting every grid square.",
        hint: "Draw an imaginary horizontal line from the inside corner to split the shaded region into two rectangles.",
        correctFeedback: "Correct. Figure A has area 24 square units. A 6 by 2 rectangle has area 12, and the lower 3 by 4 rectangle also has area 12, so the total is 24.",
        incorrectFeedback: "Not quite. Split Figure A into a top rectangle and a lower-right rectangle. Use the grid to find each rectangle's dimensions, then add their areas.",
      },
      {
        id: "B",
        answer: "27",
        reasoningConcepts: [["outer", "inner"], ["subtract", "square"], ["36", "9"], ["6", "3"]],
        reasoningRevisionFeedback: "Your area is correct, but explain how subtracting the inner square from the outer square gives 27.",
        hint: "Find the area of the large outer square and subtract the area of the unshaded inner square.",
        correctFeedback: "Correct. Figure B has area 27 square units. The outer 6 by 6 square has area 36, and the 3 by 3 opening has area 9, so 36 - 9 = 27.",
        incorrectFeedback: "Not quite. Treat Figure B as a large square with a square opening. Use the grid to find both side lengths, then subtract the opening's area.",
      },
      {
        id: "C",
        answer: "16",
        reasoningConcepts: [["pair", "triangle"], ["rearrang", "rectangle"], ["decompos", "triangle"], ["two", "rectangle"]],
        reasoningRevisionFeedback: "Your area is correct, but explain how the shaded triangles can be paired or rearranged into rectangles with total area 16.",
        hint: "Pair matching shaded triangles and imagine rearranging each pair into a rectangle.",
        correctFeedback: "Correct. Figure C has area 16 square units. The four shaded triangles can be paired and rearranged into two 2 by 4 rectangles, each with area 8.",
        incorrectFeedback: "Not quite. The inner square's side length is not shown, so subtraction is not the efficient route. Pair and rearrange the shaded triangles into rectangles whose dimensions can be read from the grid.",
      },
      {
        id: "D",
        answer: "20",
        reasoningConcepts: [["enclos", "subtract"], ["36", "16"], ["corner", "triangle"], ["figure c"]],
        reasoningRevisionFeedback: "Your area is correct, but explain an enclosure-and-subtraction strategy or how the corner regions relate to Figure C.",
        hint: "Enclose Figure D in a 6 by 6 square and compare the four corner regions with the shaded regions of Figure C.",
        correctFeedback: "Correct. Figure D has area 20 square units. Its 6 by 6 enclosure has area 36, and the four corner regions have total area 16, so 36 - 16 = 20.",
        incorrectFeedback: "Not quite. Enclose Figure D in a 6 by 6 square. The four corner regions match the shaded pieces from Figure C, so subtract their total area from the enclosure.",
      },
    ],
  },
  {
    id: "teach-l3-2-extension",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    partLabel: "Optional",
    activityOrder: 2.5,
    activityTitle: "3.2: Are You Ready for More?",
    sourceContext: "Optional source extension",
    sourceDirections: "Rearrange the four shaded triangles from Figure C so they fit inside Figure D.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "gridTriangleFit",
    visualAlt: "Four movable congruent right triangles from source Figure C and a same-size outline of source Figure D, rotated to align with the workspace.",
    prompt: "Move all four triangles completely inside Figure D without overlaps.",
    responseType: "triangleFit",
    hint: "Two congruent triangles can make a 4-by-2 rectangle. Think about how two such rectangles could fit inside the rotated square.",
    correctFeedback: "Correct. All four triangles from Figure C fit inside Figure D without overlapping. Rearranging preserves their total area of 16 square units.",
    incorrectFeedback: "Keep rearranging. Every triangle must be completely inside Figure D, and their interiors cannot overlap.",
  },
  {
    id: "teach-l3-3",
    lessonNumber: 3,
    section: "A",
    idea: "Idea 1",
    title: "Reasoning to Find Area",
    activityTitle: "3.3: Off the Grid",
    sourceDirections: "Find the area of the shaded region(s) of each figure. Explain or show your reasoning. Select a figure to work on.",
    pdfPage: 2,
    cropPath: teachLessonCrop(3),
    customVisual: "gridFigureAreas",
    visualAlt: "Three source figures labeled A through C with off-grid shaded regions and measurements in centimeters.",
    visualWidth: 1300,
    visualHeight: 390,
    visualDisplayMaxWidth: 650,
    visualColumnWeights: [33, 39, 28],
    visualRowWeights: [1],
    prompt: "Find the area of all three shaded regions and explain a source-faithful strategy for each.",
    figurePrompt: "Find the area of the shaded region(s) in Figure {figure}.",
    responseType: "gridFigureAreas",
    reasoningPrompt: "Explain or show how you found the area.",
    requireReasoning: true,
    reasoningRequiredFeedback: "Your area is correct. Add an explanation showing how the measurements support your strategy, then submit Figure {figure} again.",
    unitLabel: "square centimeters",
    figures: [
      {
        id: "A",
        answer: "15",
        reasoningConcepts: [["rearrang", "rectangle"], ["mov", "rectangle"], ["5", "3"], ["triangle", "7.5"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Describe how the two shaded triangles can be moved or rearranged into a rectangle, or use the 5 cm and 3 cm measurements in your reasoning.",
        hint: "The two shaded pieces can be rearranged into one rectangle with side lengths 5 cm and 3 cm.",
        correctFeedback: "Correct. Figure A has area 15 square centimeters. Rearranging the two shaded triangles makes a 5 cm by 3 cm rectangle, so its area is 15 square centimeters.",
        incorrectFeedback: "Not quite. Use the 5 cm segment and the two 3 cm perpendicular measurements. Try rearranging the two shaded triangles into one rectangle.",
      },
      {
        id: "B",
        answer: "16",
        reasoningConcepts: [["pair", "triangle"], ["rectangle", "2", "4"], ["four", "triangle"], ["4", "triangle"], ["two", "rectangle"], ["2", "rectangle"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Describe how the four corner triangles can be paired into rectangles using the labeled 2 cm and 4 cm lengths.",
        hint: "Do not estimate the tilted square's side length. Pair the four shaded corner triangles to make rectangles using the labeled 2 cm and 4 cm lengths.",
        correctFeedback: "Correct. Figure B has area 16 square centimeters. The four shaded corner triangles can be paired into two 2 cm by 4 cm rectangles. Each rectangle has area 8 square centimeters, so the total is 16.",
        incorrectFeedback: "Not quite. The tilted inner square's side length is unknown, so outer-area-minus-inner-area is not supported. Pair the four corner triangles into rectangles using the labeled 2 cm and 4 cm lengths.",
      },
      {
        id: "C",
        answer: "21",
        reasoningConcepts: [["subtract", "square"], ["outer", "inner"], ["25", "4"], ["5", "2"], ["remove", "square"], ["difference", "area"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Describe finding the outer square's area and subtracting the inner square's area using the 5 cm and 2 cm side lengths.",
        hint: "Find the area of the 5 cm by 5 cm outer square, then subtract the area of the 2 cm by 2 cm inner square.",
        correctFeedback: "Correct. Figure C has area 21 square centimeters. The outer square has area 25 square centimeters and the inner square has area 4 square centimeters, so 25 - 4 = 21.",
        incorrectFeedback: "Not quite. Treat the shaded region as a 5 cm by 5 cm square with a 2 cm by 2 cm square removed. Subtract the inner area from the outer area.",
      },
    ],
  },
  {
    id: "teach-l4-2",
    lessonNumber: 4,
    section: "B",
    idea: "Idea 2",
    title: "Parallelograms",
    activityTitle: "4.2: Area of a Parallelogram",
    sourceDirections: "Use the local polygon tools to test decomposing, rearranging, and enclosure. Complete all three source tasks.",
    pdfPage: 2,
    cropPath: null,
    visualAlt: "Interactive source-faithful parallelogram model on a square grid with decomposition and enclosure tools.",
    customVisual: "parallelogramExplore",
    responseType: "questionSet",
    questions: [
      {
        id: "first-area",
        label: "First area",
        prompt: "Find the area of the parallelogram and explain your reasoning.",
        responseType: "number",
        inputLabel: "Area of the first parallelogram",
        placeholder: "Type area",
        answerKey: ["36"],
        dynamicAnswer: "parallelogramArea",
        model: { base: 6, height: 6, slant: 3, editable: false },
        reasoningPrompt: "Explain how decomposing and rearranging, or enclosing and subtracting, gives the area.",
        reasoningConcepts: [["rectangle"], ["rearrange"], ["decompose"], ["enclose"], ["subtract"], ["6", "6"]],
        hint: "Try one polygon tool. A related rectangle can preserve the area or show which corner regions to subtract.",
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Describe how the polygon tool relates the parallelogram to one or more rectangles.",
        correctFeedback: "Correct. The parallelogram has area 36 square units. It can be rearranged into a 6-by-6 rectangle, or enclosed and found by subtracting the extra triangles.",
        incorrectFeedback: "Not quite. Use a polygon tool to relate the parallelogram to rectangles, then use the grid measurements without counting individual squares.",
      },
      {
        id: "changed-area",
        label: "Changed area",
        prompt: "Change the parallelogram by moving its green vertices. Find its area and explain your reasoning.",
        responseType: "number",
        inputLabel: "Area of your changed parallelogram",
        placeholder: "Type area",
        dynamicAnswer: "parallelogramArea",
        model: { base: 6, height: 6, slant: 3, editable: true },
        requireAdjustment: true,
        adjustmentFeedback: "Change at least one vertex control before submitting this task. The source asks for a different parallelogram.",
        reasoningPrompt: "Explain how a polygon tool helps find the area of your changed parallelogram.",
        reasoningConcepts: [["rectangle"], ["rearrange"], ["decompose"], ["enclose"], ["subtract"], ["base", "height"]],
        hint: "First change the shape. Then use decomposing and rearranging or enclosing and subtracting to connect it to rectangles.",
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Describe how the chosen tool turns this changed parallelogram into known rectangle areas.",
        correctFeedback: "Correct. Your changed parallelogram's area matches its base times its perpendicular height; changing the slant alone does not change that area.",
        incorrectFeedback: "Not quite. Read the current base and perpendicular height from the grid, and use the polygon tool to explain why those measurements determine the area.",
      },
      {
        id: "polygon-reflection",
        label: "Polygon tools",
        prompt: "If you used the polygons on the side, how were they helpful? If you did not, how could one or more polygons show another way to find the area?",
        responseType: "text",
        inputLabel: "Your reflection",
        placeholder: "Explain how the tools help",
        minLength: 18,
        answerConcepts: [["rectangle"], ["triangle"], ["decompose"], ["rearrange"], ["enclose"], ["subtract"]],
        hint: "Describe either moving a triangular piece to make a rectangle or enclosing the parallelogram and subtracting extra triangles.",
        correctFeedback: "Good reasoning. The polygons can model decomposing and rearranging into a rectangle, or enclosing the parallelogram and subtracting extra triangular regions.",
        incorrectFeedback: "Add how a rectangle or triangle tool can be moved, combined, or subtracted to show the parallelogram's area.",
      },
    ],
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
    cropPath: "lesson-04-p002-lots-parallelograms-4-3.png",
    visualAlt: "Source parallelograms A and B on square grids and parallelogram C labeled with a 6-unit base, 4-unit perpendicular height, and 4.5-unit slanted side.",
    customVisual: "gridFigureAreas",
    responseType: "gridFigureAreas",
    visualWidth: 820,
    visualHeight: 880,
    visualDisplayMaxWidth: 500,
    visualColumnWeights: [1, 1],
    visualRowWeights: [1, 1.08],
    figurePrompt: "Find the area of Parallelogram {figure}. Show your reasoning.",
    reasoningPrompt: "Explain or show a decomposition-and-rearrangement or enclosure-and-subtraction strategy.",
    reasoningRequiredFeedback: "Your area is correct. Add an explanation for Parallelogram {figure}, then submit again.",
    requireReasoning: true,
    unitLabel: "square units",
    figures: [
      {
        id: "A",
        visualRow: 1,
        visualColumn: 1,
        answer: "15",
        reasoningConcepts: [["3", "5"], ["rectangle", "15"], ["rearrange", "rectangle"], ["vertical", "horizontal"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Use the grid to describe a 3-unit perpendicular width and a 5-unit vertical side, or show how the pieces rearrange into a rectangle.",
        hint: "Use a vertical side as the base. The perpendicular distance to the opposite vertical side is horizontal on the grid.",
        correctFeedback: "Correct. Parallelogram A has area 15 square units. Its 5-unit vertical side and 3-unit perpendicular horizontal distance match a 5-by-3 rectangle.",
        incorrectFeedback: "Not quite. The slanted side is not the useful perpendicular measurement. Use the 5-unit vertical side and the 3-unit horizontal distance between the vertical sides.",
      },
      {
        id: "B",
        visualRow: 1,
        visualColumn: 2,
        answer: "12",
        reasoningConcepts: [["2", "6"], ["enclose", "subtract"], ["rectangle", "triangle"], ["base", "height"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Use the 2-unit horizontal side with the 6-unit perpendicular vertical distance, or describe enclosing and subtracting the two extra triangles.",
        hint: "The short horizontal side is 2 grid units. Measure the vertical distance between the two horizontal sides.",
        correctFeedback: "Correct. Parallelogram B has area 12 square units. The horizontal base is 2 units and its perpendicular height is 6 units; enclosure and subtraction gives the same result.",
        incorrectFeedback: "Not quite. Do not multiply a slanted length by a horizontal or vertical distance that is not perpendicular to it. Use the 2-unit horizontal side and 6-unit vertical distance.",
      },
      {
        id: "C",
        visualRow: 2,
        visualColumn: 1,
        visualColumnSpan: 2,
        answer: "24",
        reasoningConcepts: [["6", "4"], ["base", "height"], ["rearrange", "rectangle"], ["4.5", "not"]],
        reasoningRevisionFeedback: "Your area is correct, but strengthen the explanation. Explain why the 6-unit base and 4-unit perpendicular height are useful and the 4.5-unit slanted side is not needed.",
        hint: "The dashed 4-unit segment is perpendicular to the 6-unit side. The 4.5-unit slanted side is not paired with a corresponding height.",
        correctFeedback: "Correct. Parallelogram C has area 24 square units because 6 times the perpendicular height 4 is 24. The 4.5-unit slanted side is not needed.",
        incorrectFeedback: "Not quite. Use the 6-unit base and the perpendicular 4-unit height. The 4.5-unit slanted side does not determine the area with that height.",
      },
    ],
  },
  {
    id: "teach-l5-1",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    activityTitle: "5.1: A Parallelogram and Its Rectangles",
    sourceDirections: "Use the three stage buttons for both Tyler and Elena to compare their rectangle strategies.",
    pdfPage: 1,
    cropPath: "lesson-05-p001-starting-parallelogram.png",
    visualAlt: "Source decompositions of one parallelogram into rectangles.",
    customVisual: "parallelogramCutSliders",
    responseType: "questionSet",
    questions: [
      {
        id: "same",
        label: "How are they the same?",
        prompt: "How are the two strategies for finding the area of a parallelogram the same?",
        responseType: "singleChoice",
        choices: [
          { id: "same-area", label: "Both rearrange the same parallelogram into a rectangle with the same area." },
          { id: "same-perimeter", label: "Both keep the same perimeter, so area is guaranteed to match." },
          { id: "same-cut", label: "Both make the cut in exactly the same place." },
        ],
        answerKey: ["same-area"],
        requiredCustomState: { tylerStage: "2", elenaStage: "2" },
        requiredStateFeedback: "Open stage 3, Rectangle formed, for both Tyler and Elena before submitting.",
        reasoningPrompt: "Explain one measurement or area feature that stays the same.",
        reasoningConcepts: [["same", "area"], ["same", "rectangle"], ["base", "same"], ["height", "same"], ["same", "length"]],
        hint: "Compare the final rectangles and the original parallelogram. Track the side lengths and total area.",
        reasoningRevisionFeedback: "Your choice is correct, but strengthen the explanation. Describe how both rearrangements preserve area and create rectangles with the same side lengths.",
        correctFeedback: "Correct. Both strategies rearrange the same parallelogram into identical rectangles, so the base, height, and area are preserved.",
        incorrectFeedback: "Not quite. The cut locations differ, but both rearrange the same parallelogram into an equal-area rectangle with the same side lengths.",
      },
      {
        id: "different",
        label: "How are they different?",
        prompt: "How are the two strategies different?",
        responseType: "singleChoice",
        choices: [
          { id: "different-cut", label: "They cut and move different side pieces." },
          { id: "different-area", label: "They make rectangles with different areas." },
          { id: "different-height", label: "Only one strategy uses the height." },
        ],
        answerKey: ["different-cut"],
        requiredCustomState: { tylerStage: "2", elenaStage: "2" },
        requiredStateFeedback: "Open stage 3, Rectangle formed, for both Tyler and Elena before submitting.",
        reasoningPrompt: "Explain where the cuts or moved pieces differ.",
        reasoningConcepts: [["different", "cut"], ["different", "piece"], ["left", "right"], ["tyler", "elena"]],
        hint: "Watch which side piece moves in each slider sequence.",
        reasoningRevisionFeedback: "Your choice is correct, but strengthen the explanation. Identify that Tyler and Elena cut in different places and move different side pieces.",
        correctFeedback: "Correct. Tyler and Elena cut at different locations and move different side pieces, even though both finish with an identical rectangle.",
        incorrectFeedback: "Not quite. Both use the same height and preserve the same area; the difference is where they cut and which side piece they move.",
      },
    ],
  },
  {
    id: "teach-l5-2-extension",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    partLabel: "Optional",
    activityOrder: 2.5,
    activityTitle: "5.2: Are You Ready for More?",
    sourceContext: "Optional digital source extension",
    sourceDirections: "Experiment with the movable points. Keep the dashed height perpendicular to base b while you make each requested parallelogram.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive parallelogram with a labeled base b, a perpendicular dashed height h, supporting lines, and movable green points.",
    responseType: "questionSet",
    questions: [
      {
        id: "height-location",
        label: "Height location",
        prompt: "Can you change the parallelogram so that its height is in a different location?",
        responseType: "construction",
        dynamicAnswer: "baseHeightChallenge",
        challenge: "height-location",
        visualType: "baseHeightChallenge",
        model: { base: 6, height: 4, slant: 2, rotation: 20, heightPosition: 0.5 },
        constructionNote: "Move the height handle to a different position, then submit this construction.",
        missingResponseFeedback: "Move at least one green handle or control before submitting this construction.",
        hint: "Slide the height along base b. It should stay perpendicular even when its location changes.",
        correctFeedback: "Correct. The dashed height is in a different location and remains perpendicular to base b.",
        incorrectFeedback: "Move the dashed height farther from its starting location while keeping it perpendicular to base b.",
      },
      {
        id: "horizontal-sides",
        label: "Horizontal sides",
        prompt: "Can you change the parallelogram so that it has horizontal sides?",
        responseType: "construction",
        dynamicAnswer: "baseHeightChallenge",
        challenge: "horizontal-sides",
        visualType: "baseHeightChallenge",
        model: { base: 6, height: 4, slant: 2, rotation: 20, heightPosition: 0.5 },
        constructionNote: "Turn the parallelogram until one pair of opposite sides is horizontal, then submit.",
        missingResponseFeedback: "Rotate or adjust the parallelogram before submitting this construction.",
        hint: "Use Rotate left until base b and its opposite side run straight across the grid.",
        correctFeedback: "Correct. Base b and the opposite side are horizontal and parallel.",
        incorrectFeedback: "Keep turning the parallelogram until base b and its opposite side are horizontal.",
      },
      {
        id: "tall-skinny",
        label: "Tall and skinny",
        prompt: "Can you change the parallelogram so that it is tall and skinny?",
        responseType: "construction",
        dynamicAnswer: "baseHeightChallenge",
        challenge: "tall-skinny",
        visualType: "baseHeightChallenge",
        model: { base: 6, height: 4, slant: 2, rotation: 20, heightPosition: 0.5 },
        constructionNote: "Change the base and height so the perpendicular height is at least twice the base, then submit.",
        missingResponseFeedback: "Change the base or height before submitting this construction.",
        hint: "Make h at least twice as large as b, such as b = 3 and h = 6.",
        correctFeedback: "Correct. The perpendicular height is at least twice the base, so the parallelogram is tall and skinny.",
        incorrectFeedback: "Make the perpendicular height at least twice the base length.",
      },
      {
        id: "rectangle",
        label: "Rectangle",
        prompt: "Can you change the parallelogram so that it is also a rectangle?",
        responseType: "construction",
        dynamicAnswer: "baseHeightChallenge",
        challenge: "rectangle",
        visualType: "baseHeightChallenge",
        model: { base: 6, height: 4, slant: 2, rotation: 20, heightPosition: 0.5 },
        constructionNote: "Move the upper vertex handle until the side next to base b is perpendicular to b, then submit.",
        missingResponseFeedback: "Change the slant before submitting this construction.",
        hint: "A rectangle has no sideways shift between its lower and upper bases.",
        correctFeedback: "Correct. The adjacent sides are perpendicular, so this parallelogram is also a rectangle.",
        incorrectFeedback: "Remove the sideways shift so the adjacent sides meet base b at right angles.",
      },
      {
        id: "five-by-three",
        label: "b = 5 and h = 3",
        prompt: "Can you change the parallelogram so that it is not a rectangle, and has b = 5 and h = 3?",
        responseType: "construction",
        dynamicAnswer: "baseHeightChallenge",
        challenge: "five-by-three",
        visualType: "baseHeightChallenge",
        model: { base: 6, height: 4, slant: 2, rotation: 20, heightPosition: 0.5 },
        constructionNote: "Set b to 5 and h to 3, keep a nonzero sideways shift, then submit.",
        missingResponseFeedback: "Change the dimensions before submitting this construction.",
        hint: "Set the base and height labels first, then make sure the upper base is shifted sideways.",
        correctFeedback: "Correct. This non-rectangular parallelogram has base b = 5 and corresponding height h = 3.",
        incorrectFeedback: "Check all three conditions: b must be 5, h must be 3, and the shape must keep a nonzero sideways shift.",
      },
    ],
  },
  {
    id: "teach-l5-3",
    lessonNumber: 5,
    section: "B",
    idea: "Idea 2",
    title: "Bases and Heights of Parallelograms",
    activityTitle: "5.3: Finding the Formula for Area of Parallelograms",
    sourceDirections: "For each parallelogram, identify a base and corresponding height, record their lengths, and find the area.",
    pdfPage: 4,
    cropPath: "lesson-05-p004-parallelogram-formula-5-3.png",
    visualAlt: "Source parallelograms A through D on a square grid.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "A",
        label: "Parallelogram A",
        prompt: "Record a base, its corresponding height, and the area of Parallelogram A.",
        fields: [
          { id: "base", label: "Base (units)", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Height (units)", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area (square units)", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [
          { base: "4", height: "6", area: "24" },
          { base: "6", height: "4", area: "24" },
        ],
        hint: "A is a rectangle, so either side can be a base. Pair it with the perpendicular side length.",
        correctFeedback: "Correct. Parallelogram A has perpendicular side lengths 4 and 6, so its area is 24 square units.",
        incorrectFeedback: "Not quite. Use a matched perpendicular pair: base 4 and height 6, or base 6 and height 4. The area is 24 square units.",
      },
      {
        id: "B",
        label: "Parallelogram B",
        prompt: "Record a base, its corresponding height, and the area of Parallelogram B.",
        fields: [
          { id: "base", label: "Base (units)", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Height (units)", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area (square units)", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: "5", height: "3", area: "15" }],
        hint: "Use a horizontal side as the base and count the vertical distance to the opposite horizontal side.",
        correctFeedback: "Correct. Parallelogram B has base 5 units, corresponding height 3 units, and area 15 square units.",
        incorrectFeedback: "Not quite. The horizontal base is 5 units and its perpendicular height is 3 units, so the area is 15 square units.",
      },
      {
        id: "C",
        label: "Parallelogram C",
        prompt: "Record a base, its corresponding height, and the area of Parallelogram C.",
        fields: [
          { id: "base", label: "Base (units)", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Height (units)", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area (square units)", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: "2", height: "3", area: "6" }],
        hint: "Use either short horizontal side as the base and count the vertical distance between them.",
        correctFeedback: "Correct. Parallelogram C has base 2 units, corresponding height 3 units, and area 6 square units.",
        incorrectFeedback: "Not quite. The horizontal base is 2 units and the perpendicular vertical height is 3 units, so the area is 6 square units.",
      },
      {
        id: "D",
        label: "Parallelogram D",
        prompt: "Record a base, its corresponding height, and the area of Parallelogram D.",
        fields: [
          { id: "base", label: "Base (units)", responseType: "number", placeholder: "Type length" },
          { id: "height", label: "Height (units)", responseType: "number", placeholder: "Type length" },
          { id: "area", label: "Area (square units)", responseType: "number", placeholder: "Type area" },
        ],
        acceptedFieldSets: [{ base: "4", height: "2", area: "8" }],
        hint: "Use a vertical side as the base. Its corresponding height is the horizontal distance to the opposite vertical side.",
        correctFeedback: "Correct. Parallelogram D has a 4-unit vertical base, a 2-unit horizontal height, and area 8 square units.",
        incorrectFeedback: "Not quite. Use the 4-unit vertical side and the 2-unit perpendicular horizontal distance. Their product is 8 square units.",
      },
      {
        id: "formula",
        label: "Any parallelogram",
        prompt: "Write an expression for the area of any parallelogram using b for a base and h for its corresponding height.",
        responseType: "shortAnswer",
        inputLabel: "Area expression",
        placeholder: "Type an expression",
        answerKey: ["bh", "b x h", "b*h", "h x b", "h*b", "hb"],
        hint: "Every numerical area above is the product of a base and its corresponding height.",
        correctFeedback: "Correct. The area of any parallelogram is b x h.",
        incorrectFeedback: "Not quite. A parallelogram rearranges to a rectangle with side lengths b and h, so its area expression is b x h.",
      },
      {
        id: "height-scaling",
        label: "Optional: height changes",
        optional: true,
        prompt: "What happens to the area if the height doubles, triples, or becomes 100 times as large while the base stays unchanged?",
        fields: [
          { id: "double", label: "Height doubles: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
          { id: "triple", label: "Height triples: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
          { id: "hundred", label: "Height is 100 times: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
        ],
        acceptedFieldSets: [{
          double: ["2", "2x", "double", "twice"],
          triple: ["3", "3x", "triple"],
          hundred: ["100", "100x", "100 times"],
        }],
        hint: "The base stays fixed, so the area changes by the same factor as the height.",
        correctFeedback: "Correct. The area doubles, triples, or becomes 100 times as large with the height.",
        incorrectFeedback: "Not quite. With a fixed base, multiplying the height by a factor multiplies the area by that same factor.",
      },
      {
        id: "both-scaling",
        label: "Optional: both change",
        optional: true,
        prompt: "What happens to the area if both the base and height double, triple, or become 100 times as large?",
        fields: [
          { id: "double", label: "Both double: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
          { id: "triple", label: "Both triple: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
          { id: "hundred", label: "Both are 100 times: area is...", responseType: "shortAnswer", placeholder: "Type scale factor" },
        ],
        acceptedFieldSets: [{
          double: ["4", "4x", "4 times"],
          triple: ["9", "9x", "9 times"],
          hundred: ["10000", "10000x", "10000 times", "10,000", "10,000 times"],
        }],
        hint: "Both factors in b x h change. Multiply the base scale factor by the height scale factor.",
        correctFeedback: "Correct. The area becomes 4 times, 9 times, or 10,000 times as large because both dimensions are scaled.",
        incorrectFeedback: "Not quite. Multiply the two scale factors: 2 x 2, 3 x 3, and 100 x 100.",
      },
    ],
  },
  {
    id: "teach-l6-1",
    lessonNumber: 6,
    section: "B",
    idea: "Idea 2",
    title: "Area of Parallelograms",
    activityTitle: "6.1: Missing Dots",
    sourceDirections: "Study the source dot arrangement, record the total, and optionally describe how you saw the groups.",
    pdfPage: 1,
    cropPath: teachLessonCrop(6),
    visualAlt: "The source arrangement of black dots with an open region in the middle.",
    visualWidth: 780,
    visualHeight: 780,
    visualDisplayMaxWidth: 390,
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "count",
        label: "Count",
        prompt: "How many dots are in the image? How do you see them?",
        responseType: "number",
        inputLabel: "Number of dots",
        placeholder: "Type the total",
        answerKey: ["30"],
        visualCropPath: "lesson-06-p001-missing-dots-6-1.png",
        visualWidth: 780,
        visualHeight: 780,
        visualDisplayMaxWidth: 390,
        visualAlt: "The source arrangement of 30 black dots in six rows with a six-position opening across the two middle-lower rows.",
        reasoningPrompt: "How do you see them? Explain your grouping rather than counting one dot at a time.",
        reasoningOptional: true,
        hint: "Compare the arrangement with a complete 6 by 6 array, or group the complete and partial rows.",
        correctFeedback: "Correct. There are 30 dots. For example, a complete 6 by 6 array has 36 dots and the opening removes 6, so 36 - 6 = 30. You can also group three full top rows, two 3-dot rows, and one full bottom row.",
        incorrectFeedback: "Not quite. The opening removes 6 positions from a complete 6 by 6 array, so the visible total is 36 - 6 = 30 dots.",
      },
    ],
  },
  {
    id: "teach-l7-2",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    activityTitle: "7.2: A Tale of Two Triangles (Part 1)",
    sourceDirections: "Use the segment tool: choose a quadrilateral, then click two vertices to draw one line. Try to decompose each polygon into two identical triangles, if possible.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "quadrilateralDecompose",
    visualAlt: "Interactive source quadrilaterals A through G on a grid with vertex-to-vertex segment marking.",
    prompt: "Draw decomposition segments, identify which quadrilaterals can be decomposed into two identical triangles, and describe what those quadrilaterals have in common.",
    responseType: "quadrilateralDecompose",
    freeTextValidationGuidance: {
      observations: "include \"parallelogram,\" or include both \"opposite\" and \"parallel\"",
    },
    hint: "Try segments that connect opposite vertices. Rectangles, rhombuses, and parallelograms can be split by a diagonal into two identical triangles.",
    correctFeedback: "Correct. Quadrilaterals A, B, D, F, and G can be decomposed into two identical triangles. They are parallelograms, so a diagonal connects opposite vertices and makes two identical triangles.",
    incorrectFeedback: "Revise the segments, selections, or observation. The successful figures are A, B, D, F, and G. They are parallelograms: both pairs of opposite sides are parallel, and a diagonal splits each into two identical triangles. C and E do not.",
  },
  {
    id: "teach-l7-3",
    lessonNumber: 7,
    section: "C",
    idea: "Idea 3",
    title: "From Parallelograms to Triangles",
    activityTitle: "7.3: A Tale of Two Triangles (Part 2)",
    sourceDirections: "Choose a pair P-U. Drag the two copies, select a copy, and turn it to test whether the pair can compose a rectangle or a parallelogram.",
    pdfPage: 3,
    cropPath: null,
    customVisual: "trianglePairs",
    visualAlt: "Interactive workspace with two copies of the selected Lesson 7 triangle pair.",
    blacklineMasters: unit1BlacklineMasters.trianglePairs,
    prompt: "Use the workspace to test each pair. Then complete the source statements with all, some, or none.",
    responseType: "trianglePairsCompose",
    freeTextValidationGuidance: {
      trianglePairReasoning: "include \"rectangle\" and name Pair R, Pair U, or a right-triangle pair; also include \"parallelogram\" with \"matching,\" \"join,\" \"copy,\" or \"identical\"",
    },
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
    cropPath: "lesson-08-p002-more-triangles-8-2.png",
    visualAlt: "Four source triangles A through D drawn on square grids for area reasoning.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    minimumRequiredCount: 2,
    questions: [
      {
        id: "A",
        label: "Triangle A",
        prompt: "Find the area of Triangle A in square units. Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of Triangle A",
        placeholder: "Type area",
        answerKey: ["8"],
        visualCropPath: "lesson-08-p002-more-triangles-8-2.png",
        visualWidth: 590,
        visualHeight: 520,
        visualDisplayMaxWidth: 590,
        visualAlt: "Four source triangles A through D on square grids.",
        visualDirections: "Choose any two of Triangles A-D to solve. You may solve more for practice.",
        reasoningPrompt: "Explain how a base and corresponding height, or a related parallelogram, gives the area.",
        reasoningConcepts: [["8", "2"], ["16", "half"], ["8", "square"]],
        hint: "Triangle A has a horizontal base of 8 units and a corresponding height of 2 units.",
        correctFeedback: "Correct. Triangle A has area 1/2 x 8 x 2 = 8 square units.",
        incorrectFeedback: "Not quite. Use a base of 8 units and its 2-unit corresponding height, then take half of the related parallelogram's area.",
      },
      {
        id: "B",
        label: "Triangle B",
        prompt: "Find the area of Triangle B in square units. Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of Triangle B",
        placeholder: "Type area",
        answerKey: ["10.5", "21/2"],
        visualCropPath: "lesson-08-p002-more-triangles-8-2.png",
        visualWidth: 590,
        visualHeight: 520,
        visualDisplayMaxWidth: 590,
        visualAlt: "Four source triangles A through D on square grids.",
        visualDirections: "Choose any two of Triangles A-D to solve. You may solve more for practice.",
        reasoningPrompt: "Explain how a base and corresponding height, or a related parallelogram, gives the area.",
        reasoningConcepts: [["7", "3"], ["21", "half"], ["10.5", "square"]],
        hint: "Triangle B has a horizontal base of 7 units and a corresponding height of 3 units.",
        correctFeedback: "Correct. Triangle B has area 1/2 x 7 x 3 = 10.5 square units.",
        incorrectFeedback: "Not quite. Multiply the 7-unit base by the 3-unit corresponding height, then take half.",
      },
      {
        id: "C",
        label: "Triangle C",
        prompt: "Find the area of Triangle C in square units. Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of Triangle C",
        placeholder: "Type area",
        answerKey: ["10"],
        visualCropPath: "lesson-08-p002-more-triangles-8-2.png",
        visualWidth: 590,
        visualHeight: 520,
        visualDisplayMaxWidth: 590,
        visualAlt: "Four source triangles A through D on square grids.",
        visualDirections: "Choose any two of Triangles A-D to solve. You may solve more for practice.",
        reasoningPrompt: "Explain how a base and corresponding height, or a related parallelogram, gives the area.",
        reasoningConcepts: [["5", "4"], ["20", "half"], ["10", "square"]],
        hint: "Triangle C has a horizontal base of 5 units and a corresponding height of 4 units.",
        correctFeedback: "Correct. Triangle C has area 1/2 x 5 x 4 = 10 square units.",
        incorrectFeedback: "Not quite. Use the 5-unit base and its 4-unit corresponding height, then take half.",
      },
      {
        id: "D",
        label: "Triangle D",
        prompt: "Find the area of Triangle D in square units. Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of Triangle D",
        placeholder: "Type area",
        answerKey: ["12"],
        visualCropPath: "lesson-08-p002-more-triangles-8-2.png",
        visualWidth: 590,
        visualHeight: 520,
        visualDisplayMaxWidth: 590,
        visualAlt: "Four source triangles A through D on square grids.",
        visualDirections: "Choose any two of Triangles A-D to solve. You may solve more for practice.",
        reasoningPrompt: "Explain how a base and corresponding height, or a related parallelogram, gives the area.",
        reasoningConcepts: [["4", "6"], ["24", "half"], ["12", "square"]],
        hint: "A vertical side can be the 4-unit base; its corresponding horizontal height is 6 units.",
        correctFeedback: "Correct. Triangle D has area 1/2 x 4 x 6 = 12 square units.",
        incorrectFeedback: "Not quite. Use the 4-unit vertical base and its 6-unit horizontal corresponding height, then take half.",
      },
    ],
  },
  {
    id: "teach-l8-3",
    lessonNumber: 8,
    section: "C",
    idea: "Idea 3",
    title: "Area of Triangles",
    activityTitle: "8.3: Decomposing a Parallelogram",
    sourceDirections: "Choose one parallelogram A-D. Move and turn its small triangle and trapezoid to explore a different parallelogram, then compare its areas with the original and the remaining large triangle.",
    pdfPage: 3,
    pdfPages: [3, 4],
    cropPath: null,
    visualAlt: "Blackline Master parallelograms A through D with measurements and dotted cut lines.",
    blacklineMasters: unit1BlacklineMasters.decomposingParallelogram,
    customVisual: "decomposeParallelogram",
    prompt: "Choose one parallelogram A-D and complete the same area comparisons from the source task.",
    responseType: "guidedFields",
    requiredWorkspaceState: {
      decomposeSmallUsed: "yes",
      decomposeTrapezoidUsed: "yes",
    },
    missingResponseFeedback: "Choose A-D, move or turn both cut pieces, and complete every required area comparison before submitting again.",
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
    guidedReasoningRequirements: [
      { field: "reasoning", concepts: [["same", "pieces"], ["rearrang", "area"], ["cut", "area"]] },
    ],
    optionalChallenge: {
      id: "rectangle-challenge",
      field: "rectangleChallenge",
      prompt: "Can you decompose the remaining large triangle and rearrange its parts to form a rectangle? Describe how it could be done.",
      inputLabel: "Describe the cuts and rearrangement.",
      minLength: 18,
      answerConcepts: [["cut", "rectangle"], ["split", "rectangle"], ["decompos", "rectangle"]],
      hint: "Try splitting the triangle through the midpoint of a side, then moving one smaller triangle to the other side.",
      correctFeedback: "That works. A midpoint cut can create pieces that move together into a rectangle without changing area.",
      incorrectFeedback: "Add enough detail to name a cut or decomposition and explain how the pieces rearrange into a rectangle.",
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
    sourceDirections: "Study the examples and non-examples, then select all statements that are true about bases and heights in a triangle.",
    pdfPage: 1,
    cropPath: "lesson-09-p001-bases-heights-triangle-9-1.png",
    visualWidth: 510,
    visualHeight: 309,
    visualDisplayMaxWidth: 510,
    visualAlt: "Source examples and non-examples of triangle bases and heights.",
    prompt: "Select all statements that are true about bases and heights in a triangle.",
    responseType: "multiSelect",
    choices: [
      { id: "1", label: "1. Any side of a triangle can be a base." },
      { id: "2", label: "2. There is only one possible height." },
      { id: "3", label: "3. A height is always one of the sides of a triangle." },
      { id: "4", label: "4. A corresponding height must be drawn at an acute angle to the base." },
      { id: "5", label: "5. A corresponding height must be drawn at a right angle to the base." },
      { id: "6", label: "6. Once a base is chosen, only one segment can represent its corresponding height." },
      { id: "7", label: "7. A segment representing a height must go through a vertex." },
    ],
    answerKey: ["1", "5"],
    hint: "Any side may be named as the base. A corresponding height is a perpendicular distance, and a segment showing that distance can be shifted along parallel lines.",
    correctFeedback: "Correct. Statements 1 and 5 are true. Any side can be a base, and its corresponding height is perpendicular. Heights need not be sides, stay inside, use only one possible segment, or pass through a vertex.",
    incorrectFeedback: "Recheck the examples and non-examples. Any side can be a base, and the corresponding height must be perpendicular; the other restrictions are not required.",
  },
  {
    id: "teach-l9-3",
    lessonNumber: 9,
    section: "C",
    idea: "Idea 3",
    title: "Formula for the Area of a Triangle",
    activityTitle: "9.3: Applying the Formula for Area of Triangles",
    sourceDirections: "For each triangle, identify a usable base measurement. Then find the area of any three triangles and show your reasoning.",
    pdfPage: 3,
    cropPath: "lesson-09-p003-applying-formula-9-3.png",
    visualAlt: "Source triangles with base and height measurements.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    minimumRequiredCount: 3,
    questions: [
      { id: "A", label: "Triangle A", prompt: "Choose a labeled base measurement you can use, then find the area of Triangle A.", fields: [{ id: "base", label: "Usable base", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }], acceptedFieldSets: [{ base: ["5"], area: ["15"] }], reasoningPrompt: "Show the base-height calculation.", reasoningConcepts: [["5", "6"], ["30", "half"], ["15", "square"]], hint: "The 5 cm base has a 6 cm corresponding height.", correctFeedback: "Correct. Triangle A has area 1/2 x 5 x 6 = 15 square centimeters.", incorrectFeedback: "Not quite. Use the 5 cm base and 6 cm perpendicular height." },
      { id: "B", label: "Triangle B", prompt: "Choose a labeled base measurement you can use, then find the area of Triangle B.", fields: [{ id: "base", label: "Usable base", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }], acceptedFieldSets: [{ base: ["4"], area: ["8"] }], reasoningPrompt: "Show the base-height calculation.", reasoningConcepts: [["4", "4"], ["16", "half"], ["8", "square"]], hint: "The two 4 cm sides meet at a right angle.", correctFeedback: "Correct. Triangle B has area 1/2 x 4 x 4 = 8 square centimeters.", incorrectFeedback: "Not quite. Either 4 cm perpendicular side can be the base and the other is its height." },
      { id: "C", label: "Triangle C", prompt: "Choose a labeled base measurement you can use, then find the area of Triangle C.", fields: [{ id: "base", label: "Usable base", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }], acceptedFieldSets: [{ base: ["7"], area: ["10.5", "21/2"] }], reasoningPrompt: "Show the base-height calculation.", reasoningConcepts: [["7", "3"], ["21", "half"], ["10.5", "square"]], hint: "Use the 7 cm vertical side as the base; the dashed 3 cm horizontal segment is its height.", correctFeedback: "Correct. Triangle C has area 1/2 x 7 x 3 = 10.5 square centimeters.", incorrectFeedback: "Not quite. The usable labeled base is 7 cm, paired with the 3 cm perpendicular distance." },
      { id: "D", label: "Triangle D", prompt: "Choose a labeled base measurement you can use, then find the area of Triangle D.", fields: [{ id: "base", label: "Usable base", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }], acceptedFieldSets: [{ base: ["8"], area: ["14"] }, { base: ["3.5"], area: ["14"] }], reasoningPrompt: "Show the base-height calculation.", reasoningConcepts: [["8", "3.5"], ["28", "half"], ["14", "square"]], hint: "The 8 cm and 3.5 cm sides are perpendicular, so either can be the base.", correctFeedback: "Correct. Triangle D has area 1/2 x 8 x 3.5 = 14 square centimeters.", incorrectFeedback: "Not quite. Pair the perpendicular 8 cm and 3.5 cm sides; do not use the 8.73 cm slanted side with an unknown height." },
      { id: "E", label: "Triangle E", prompt: "Choose a labeled base measurement you can use, then find the area of Triangle E.", fields: [{ id: "base", label: "Usable base", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }], acceptedFieldSets: [{ base: ["6"], area: ["15"] }], reasoningPrompt: "Show the base-height calculation.", reasoningConcepts: [["6", "5"], ["30", "half"], ["15", "square"]], hint: "The 6 cm base has a 5 cm corresponding height outside the triangle.", correctFeedback: "Correct. Triangle E has area 1/2 x 6 x 5 = 15 square centimeters.", incorrectFeedback: "Not quite. Use the 6 cm base and the 5 cm perpendicular height drawn to its extension." },
    ].map((question) => ({
      ...question,
      visualCropPath: "lesson-09-p003-applying-formula-9-3.png",
      visualWidth: 575,
      visualHeight: 425,
      visualDisplayMaxWidth: 575,
      visualAlt: "Source triangles A through E with labeled measurements.",
      visualDirections: "Identify a usable labeled base for each triangle. Complete any three area calculations.",
    })),
  },
  {
    id: "teach-l10-1",
    lessonNumber: 10,
    section: "C",
    idea: "Idea 3",
    title: "Bases and Heights of Triangles",
    activityTitle: "10.1: An Area of 12",
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
        placeholder: "Explain your area reasoning.",
      },
    ],
    guidedAnswerKey: {
      static: {
        baseHeightPair: ["6-4", "8-3", "12-2"],
        apexPlacement: ["left-skew", "right-skew"],
      },
    },
    guidedReasoningRequirements: [
      { field: "triangleReasoning", concepts: [["half", "12"], ["1/2", "12"], ["divide", "12"]] },
    ],
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
    sourceDirections: "For each triangle A-D, identify and label a base and corresponding height, then find the area. Complete the optional challenge separately if you choose.",
    pdfPage: 3,
    cropPath: "lesson-10-p003-better-bases-10-3.png",
    visualAlt: "Source grid triangles A through D for choosing useful bases and corresponding heights.",
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "A",
        label: "Triangle A",
        prompt: "Identify a base and corresponding height for Triangle A, then find its area.",
        fields: [{ id: "base", label: "Base", responseType: "number", placeholder: "Type length" }, { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }],
        acceptedFieldSets: [{ base: ["9"], height: ["5"], area: ["22.5", "45/2"] }, { base: ["5"], height: ["9"], area: ["22.5", "45/2"] }],
        reasoningPrompt: "Show how the grid gives your base, height, and area.",
        reasoningConcepts: [["9", "5"], ["45", "half"], ["22.5", "square"]],
        hint: "The horizontal and vertical sides measure 9 and 5 units and meet at a right angle.",
        correctFeedback: "Correct. Triangle A has area 1/2 x 9 x 5 = 22.5 square units.",
        incorrectFeedback: "Not quite. Use the perpendicular 9-unit and 5-unit sides as a base-height pair.",
      },
      {
        id: "B",
        label: "Triangle B",
        prompt: "Identify a base and corresponding height for Triangle B, then find its area.",
        fields: [{ id: "base", label: "Base", responseType: "number", placeholder: "Type length" }, { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }],
        acceptedFieldSets: [{ base: ["11"], height: ["8"], area: ["44"] }],
        reasoningPrompt: "Show how the grid gives your base, height, and area.",
        reasoningConcepts: [["11", "8"], ["88", "half"], ["44", "square"]],
        hint: "The horizontal top side is 11 units; its perpendicular vertical height is 8 units.",
        correctFeedback: "Correct. Triangle B has area 1/2 x 11 x 8 = 44 square units.",
        incorrectFeedback: "Not quite. Use the 11-unit horizontal base and 8-unit vertical distance to the opposite vertex.",
      },
      {
        id: "C",
        label: "Triangle C",
        prompt: "Identify a base and corresponding height for Triangle C, then find its area.",
        fields: [{ id: "base", label: "Base", responseType: "number", placeholder: "Type length" }, { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }],
        acceptedFieldSets: [{ base: ["4"], height: ["18"], area: ["36"] }],
        reasoningPrompt: "Show how the grid gives your base, height, and area.",
        reasoningConcepts: [["4", "18"], ["72", "half"], ["36", "square"]],
        hint: "Use the 4-unit vertical side as the base and the 18-unit horizontal distance as its height.",
        correctFeedback: "Correct. Triangle C has area 1/2 x 4 x 18 = 36 square units.",
        incorrectFeedback: "Not quite. The convenient base is vertical, so its corresponding height is the horizontal distance across the grid.",
      },
      {
        id: "D",
        label: "Triangle D",
        prompt: "Identify a base and corresponding height for Triangle D, then find its area.",
        fields: [{ id: "base", label: "Base", responseType: "number", placeholder: "Type length" }, { id: "height", label: "Corresponding height", responseType: "number", placeholder: "Type length" }, { id: "area", label: "Area", responseType: "number", placeholder: "Type area" }],
        acceptedFieldSets: [{ base: ["6"], height: ["11"], area: ["33"] }],
        reasoningPrompt: "Show how the grid gives your base, height, and area.",
        reasoningConcepts: [["6", "11"], ["66", "half"], ["33", "square"]],
        hint: "Use the 6-unit vertical side as the base and the 11-unit horizontal distance as its height.",
        correctFeedback: "Correct. Triangle D has area 1/2 x 6 x 11 = 33 square units.",
        incorrectFeedback: "Not quite. Count the vertical base and its perpendicular horizontal distance on the grid.",
      },
      {
        id: "optional",
        label: "Optional challenge",
        optional: true,
        prompt: "Find the area of the optional triangle. Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of the optional triangle",
        placeholder: "Type area",
        answerKey: ["51"],
        reasoningPrompt: "Explain a decomposition, enclosure, or subtraction strategy.",
        reasoningConcepts: [["144", "subtract"], ["42", "15", "36"], ["51", "square"]],
        hint: "Enclose the triangle in a 12-by-12 square, then subtract the three outside right triangles.",
        correctFeedback: "Correct. The enclosing square has area 144, and the three outside triangles have areas 42, 15, and 36, so the triangle has area 51 square units.",
        incorrectFeedback: "Not quite. Account for the full enclosing square and all three outside triangles exactly once.",
        visualCropPath: "lesson-10-p003-optional-triangle-10-3.png",
        visualWidth: 305,
        visualHeight: 306,
        visualDisplayMaxWidth: 305,
        visualAlt: "Optional source triangle on a square grid.",
        visualDirections: "Optional: use the grid and an area strategy to find this triangle's area.",
      },
    ].map((question) => question.visualCropPath ? question : ({
      ...question,
      visualCropPath: "lesson-10-p003-better-bases-10-3.png",
      visualWidth: 595,
      visualHeight: 345,
      visualDisplayMaxWidth: 595,
      visualAlt: "Source triangles A through D on a square grid.",
      visualDirections: "Complete every required triangle A-D. Use a convenient vertical or horizontal base when possible.",
    })),
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
    cropPath: "lesson-11-p001-wodb-bases-heights-11-1.png",
    visualWidth: 460,
    visualHeight: 325,
    visualDisplayMaxWidth: 460,
    visualAlt: "Source triangles S, T, U, and V on a square grid.",
    prompt: "Choose one figure that does not belong and justify your choice with a mathematical observation.",
    responseType: "guidedFields",
    responsePrompt: "There can be more than one valid answer. Your explanation must support the figure you choose.",
    guidedFields: [
      {
        id: "figure",
        label: "Figure that does not belong",
        type: "singleChoice",
        choices: [
          { id: "S", label: "S" },
          { id: "T", label: "T" },
          { id: "U", label: "U" },
          { id: "V", label: "V" },
        ],
      },
      { id: "reasoning", label: "Why does your chosen figure not belong?", type: "textarea", placeholder: "Explain a mathematical difference." },
    ],
    guidedAnswerKey: { static: { figure: ["S", "T", "U", "V"] } },
    guidedReasoningRequirements: [
      { field: "reasoning", concepts: [["base"], ["height"], ["angle"], ["horizontal"], ["vertical"], ["side"], ["triangle"]] },
    ],
    hint: "Which One Doesn't Belong tasks can have more than one valid answer if the reasoning is clear.",
    correctFeedback: "That is a valid Which One Doesn't Belong response. The selected figure is supported by a mathematical observation about its sides, angles, orientation, base, or height.",
    incorrectFeedback: "Choose S, T, U, or V and explain a mathematical feature of that figure, such as a side, angle, orientation, base, or height.",
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
    cropPath: "lesson-11-p003-quadrilateral-strategies-11-3.png",
    visualAlt: "Source quadrilaterals A through F on a square grid.",
    customVisual: "questionSetVisual",
    prompt: "Choose any two quadrilaterals A-F. Find each area and show your reasoning. The optional trapezoid formula challenge is separate.",
    responseType: "questionSet",
    minimumRequiredCount: 2,
    questions: [
      {
        id: "A",
        label: "Quadrilateral A",
        prompt: "Find the area of Quadrilateral A.",
        responseType: "number",
        inputLabel: "Area of A",
        placeholder: "Type area",
        answerKey: ["12"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["rectangle", "subtract"], ["triangle", "add"], ["grid", "12"], ["decompose"]],
        hint: "Enclose A in a grid-aligned rectangle and subtract the outside triangles, or decompose it into triangles.",
        correctFeedback: "Correct. Quadrilateral A has area 12 square units.",
        incorrectFeedback: "Not quite. Keep every grid unit accounted for when you decompose or enclose Quadrilateral A.",
      },
      {
        id: "B",
        label: "Quadrilateral B",
        prompt: "Find the area of Quadrilateral B.",
        responseType: "number",
        inputLabel: "Area of B",
        placeholder: "Type area",
        answerKey: ["16"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["rectangle", "triangle"], ["subtract"], ["grid", "16"], ["decompose"]],
        hint: "Split B into a rectangle and a right triangle, or enclose it and subtract the missing triangle.",
        correctFeedback: "Correct. Quadrilateral B has area 16 square units.",
        incorrectFeedback: "Not quite. Separate B into familiar grid-aligned regions and add or subtract their areas.",
      },
      {
        id: "C",
        label: "Quadrilateral C",
        prompt: "Find the area of Quadrilateral C.",
        responseType: "number",
        inputLabel: "Area of C",
        placeholder: "Type area",
        answerKey: ["34"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["rectangle", "triangle"], ["7", "10", "4"], ["grid", "34"], ["decompose"]],
        hint: "Decompose the trapezoid into a central rectangle and two side triangles, or use its two parallel side lengths and height.",
        correctFeedback: "Correct. Quadrilateral C has area 34 square units.",
        incorrectFeedback: "Not quite. Its parallel horizontal sides are 7 and 10 units long and are 4 units apart.",
      },
      {
        id: "D",
        label: "Quadrilateral D",
        prompt: "Find the area of Quadrilateral D.",
        responseType: "number",
        inputLabel: "Area of D",
        placeholder: "Type area",
        answerKey: ["14"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["triangle", "add"], ["diagonal", "4", "7"], ["grid", "14"], ["decompose"]],
        hint: "The horizontal and vertical diagonals divide D into right triangles.",
        correctFeedback: "Correct. Quadrilateral D has area 14 square units.",
        incorrectFeedback: "Not quite. Use its 4-unit horizontal diagonal and 7-unit vertical diagonal to organize the triangular pieces.",
      },
      {
        id: "E",
        label: "Quadrilateral E",
        prompt: "Find the area of Quadrilateral E.",
        responseType: "number",
        inputLabel: "Area of E",
        placeholder: "Type area",
        answerKey: ["15"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["rectangle", "triangle"], ["8", "2", "3"], ["grid", "15"], ["decompose"]],
        hint: "Split E into a rectangle and a right triangle, or treat it as a trapezoid.",
        correctFeedback: "Correct. Quadrilateral E has area 15 square units.",
        incorrectFeedback: "Not quite. The parallel horizontal sides are 8 and 2 units long and are 3 units apart.",
      },
      {
        id: "F",
        label: "Quadrilateral F",
        prompt: "Find the area of Quadrilateral F.",
        responseType: "number",
        inputLabel: "Area of F",
        placeholder: "Type area",
        answerKey: ["18"],
        reasoningPrompt: "Show a decomposition, enclosure, or grid-coordinate strategy.",
        reasoningConcepts: [["triangle", "add"], ["diagonal", "6"], ["grid", "18"], ["decompose"]],
        hint: "Its 6-unit horizontal and vertical diagonals divide F into four right triangles.",
        correctFeedback: "Correct. Quadrilateral F has area 18 square units.",
        incorrectFeedback: "Not quite. Use the two 6-unit diagonals to organize four congruent right triangles.",
      },
      {
        id: "formula",
        label: "Optional challenge",
        optional: true,
        prompt: "Write a formula for the area of a trapezoid with parallel side lengths a and b and height h.",
        responseType: "shortAnswer",
        inputLabel: "Area formula",
        placeholder: "Write a formula using a, b, and h",
        answerKey: ["h(a+b)/2", "(a+b)h/2", "1/2h(a+b)", "1/2(a+b)h", "(a+b)*h/2", "0.5h(a+b)"],
        reasoningPrompt: "Explain how decomposing, rearranging, or duplicating the trapezoid supports your formula.",
        reasoningConcepts: [["duplicate", "parallelogram"], ["two", "trapezoid"], ["add", "bases"], ["average", "bases"], ["a", "b", "h"]],
        hint: "Duplicate the trapezoid and rotate the copy. Together, the two congruent trapezoids can form a parallelogram with base a + b and height h.",
        correctFeedback: "Correct. Two copies make a parallelogram with area (a + b)h, so one trapezoid has area h(a + b)/2.",
        incorrectFeedback: "Not quite. Your formula should use both parallel side lengths, the height, and a factor of one half.",
        visualCropPath: "lesson-11-p003-optional-trapezoid.png",
        visualWidth: 555,
        visualHeight: 365,
        visualDisplayMaxWidth: 430,
        visualAlt: "Source trapezoid labeled with parallel side lengths a and b and perpendicular height h.",
        visualDirections: "Optional: use the labeled trapezoid to derive a general area formula.",
      },
    ].map((question) => question.visualCropPath ? question : ({
      ...question,
      visualCropPath: "lesson-11-p003-quadrilateral-strategies-11-3.png",
      visualWidth: 545,
      visualHeight: 350,
      visualDisplayMaxWidth: 545,
      visualAlt: "Source quadrilaterals A through F on a square grid.",
      visualDirections: "Choose any two quadrilaterals A-F and find their areas.",
    })),
  },
  {
    id: "teach-l11-4",
    lessonNumber: 11,
    section: "D",
    idea: "Idea 4",
    title: "Polygons",
    activityTitle: "11.4: Pinwheel",
    sourceDirections: "Find the area of the shaded region in square units. Show your reasoning.",
    pdfPage: 4,
    cropPath: "lesson-11-p004-pinwheel-11-4.png",
    visualAlt: "Source pinwheel polygon on a grid.",
    blacklineMasters: unit1BlacklineMasters.pinwheel,
    customVisual: "questionSetVisual",
    prompt: "Find the area of the shaded pinwheel region and justify the calculation.",
    responseType: "questionSet",
    questions: [
      {
        id: "pinwheel",
        label: "Pinwheel",
        prompt: "Find the area of the shaded region in square units.",
        responseType: "number",
        inputLabel: "Shaded area",
        placeholder: "Type area",
        answerKey: ["40"],
        reasoningPrompt: "Show a decomposition, rearrangement, or enclosure-and-subtraction strategy that accounts for the entire shaded region.",
        reasoningConcepts: [["four", "identical"], ["triangle", "rectangle"], ["enclose", "subtract"], ["square", "subtract"], ["decompose"]],
        hint: "Use the grid to make known triangles and rectangles. You can also enclose the pinwheel and subtract the four congruent outside regions.",
        correctFeedback: "Correct. The pinwheel has area 40 square units. A valid decomposition, rearrangement, or enclosure strategy accounts for every shaded piece exactly once.",
        incorrectFeedback: "Not quite. Use the grid to decompose the shaded region, or enclose it and subtract every unshaded part exactly once.",
        visualCropPath: "lesson-11-p004-pinwheel-11-4.png",
        visualWidth: 341,
        visualHeight: 344,
        visualDisplayMaxWidth: 341,
        visualAlt: "Source pinwheel polygon on a square grid.",
        visualDirections: "Find the shaded area in square units. Show a complete area strategy.",
      },
    ],
  },
  {
    id: "teach-l12-1",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.1: Covering the Cabinet (Part 1)",
    sourceDirections: "Study the source cabinet photographs. Estimate how many sticky notes it would take to cover the cabinet, excluding the bottom.",
    pdfPage: 1,
    cropPath: "lesson-12-p001-cabinet-stills.png",
    customVisual: "questionSetVisual",
    visualAlt: "Four source photographs of a filing cabinet, sticky notes, and a teacher beginning to cover the cabinet.",
    prompt: "Make a reasoned estimate before the exact cabinet dimensions are revealed in Part 2.",
    responseType: "questionSet",
    questions: [
      {
        id: "estimate",
        label: "Estimate",
        prompt: "How many sticky notes would it take to cover the cabinet, excluding the bottom?",
        responseType: "number",
        estimate: true,
        inputLabel: "Your estimate",
        placeholder: "Type a positive estimate",
        reasoningPrompt: "Explain what you noticed in the photographs and how it informed your estimate.",
        reasoningConcepts: [["cabinet"], ["sticky"], ["front"], ["side"], ["face"], ["row"], ["column"]],
        hint: "Use the visible cabinet proportions and the size of one sticky note. This is an estimate, so the explanation matters more than an exact value.",
        correctFeedback: "Estimate recorded. The source intentionally asks for a reasoned estimate before giving exact dimensions. Continue to Part 2 to determine the actual mathematical count.",
        incorrectFeedback: "Enter a positive estimate and explain how the cabinet photographs or sticky-note size informed it.",
        visualCropPath: "lesson-12-p001-cabinet-stills.png",
        visualWidth: 2161,
        visualHeight: 1160,
        visualDisplayMaxWidth: 650,
        visualAlt: "Four source photographs of a filing cabinet, sticky notes, and a teacher beginning to cover the cabinet.",
        visualDirections: "Study the cabinet and partial covering sequence before estimating.",
      },
    ],
  },
  {
    id: "teach-l12-2",
    lessonNumber: 12,
    section: "E",
    idea: "Idea 5",
    title: "What is Surface Area?",
    activityTitle: "12.2: Covering the Cabinet (Part 2)",
    sourceDirections: "First explain how to find the actual count and what information is needed. Then use the revealed cabinet dimensions to find the number of sticky notes, excluding the bottom.",
    pdfPage: 1,
    cropPath: "lesson-12-p001-cabinet-stills.png",
    customVisual: "questionSetVisual",
    visualAlt: "Source cabinet photographs and an app-rendered cabinet dimension model.",
    prompt: "Complete the two source questions in order. The app reveals the source dimensions after your method identifies the information needed.",
    responseType: "questionSet",
    questions: [
      {
        id: "method",
        label: "Question 1",
        prompt: "How could you find the actual number of sticky notes needed to cover the cabinet, excluding the bottom? What information would you need?",
        responseType: "openResponse",
        inputLabel: "Method and needed information",
        placeholder: "Describe the measurements and calculation you would need.",
        minLength: 28,
        answerConcepts: [["dimensions", "faces"], ["measure", "surface"], ["length", "width", "height"], ["area", "sticky note"], ["measurements", "cabinet"]],
        hint: "Think about the dimensions of each exposed rectangular face and the area covered by one sticky note.",
        correctFeedback: "Good plan. The source now provides the cabinet measurements in sticky-note units: 24 high, 12 wide, and 6 deep. Each sticky note is 3 inches by 3 inches, but the sticky-note-unit dimensions are enough for the count.",
        incorrectFeedback: "Add the measurements needed for the cabinet's exposed faces and explain how one sticky note's area relates to the total covering.",
        visualCropPath: "lesson-12-p001-cabinet-stills.png",
        visualWidth: 2161,
        visualHeight: 1160,
        visualDisplayMaxWidth: 650,
        visualAlt: "Four source photographs of the filing cabinet and sticky notes.",
        visualDirections: "Decide what measurements are needed before the exact dimensions are revealed.",
      },
      {
        id: "count",
        label: "Question 2",
        unlockedAfterQuestionId: "method",
        prompt: "The cabinet is 24 sticky notes high, 12 sticky notes wide, and 6 sticky notes deep. How many sticky notes cover all faces except the bottom?",
        responseType: "number",
        inputLabel: "Number of sticky notes",
        placeholder: "Type the total",
        answerKey: ["936"],
        reasoningPrompt: "Show how each exposed face is counted and why the bottom is excluded.",
        reasoningConcepts: [["576", "288", "72"], ["24", "12", "6"], ["front", "back", "side", "top"], ["surface", "bottom"]],
        hint: "Add the front and back, both side faces, and the top: 2(24 x 12) + 2(24 x 6) + (12 x 6).",
        correctFeedback: "Correct. Front and back use 576 notes, the two sides use 288, and the top uses 72. Excluding the bottom gives 576 + 288 + 72 = 936 sticky notes.",
        incorrectFeedback: "Not quite. Count two 24-by-12 faces, two 24-by-6 faces, and one 12-by-6 top face. Do not include the bottom.",
        visualType: "cabinetDimensions",
        visualDirections: "Use the source-provided dimensions, measured in sticky-note units.",
      },
      {
        id: "extension",
        label: "Optional challenge",
        optional: true,
        unlockedAfterQuestionId: "count",
        prompt: "How many sticky notes cover the outside of 2, 3, and 20 identical cabinets pushed together side by side, including the bottom?",
        fields: [
          { id: "two", label: "2 cabinets", responseType: "number", placeholder: "Type total" },
          { id: "three", label: "3 cabinets", responseType: "number", placeholder: "Type total" },
          { id: "twenty", label: "20 cabinets", responseType: "number", placeholder: "Type total" },
        ],
        acceptedFieldSets: [{ two: ["1728"], three: ["2448"], twenty: ["14688"] }],
        reasoningPrompt: "Explain how shared side faces change the outside surface as cabinets are added.",
        reasoningConcepts: [["shared", "face"], ["inside", "outside"], ["1008", "288"], ["720", "288"], ["subtract", "side"]],
        hint: "One cabinet including its bottom needs 1,008 notes. Each new cabinet adds 1,008, but the two touching 24-by-6 side faces become internal, removing 288 from the outside count.",
        correctFeedback: "Correct. The totals are 1,728, 2,448, and 14,688. For n side-by-side cabinets, the outside count is 1,008n - 288(n - 1), or 720n + 288.",
        incorrectFeedback: "Not quite. Include each bottom, but remove both copies of every 24-by-6 face where neighboring cabinets touch.",
        visualType: "cabinetRow",
        visualDirections: "The drawing shows three cabinets pushed side by side. Shared faces are inside the combined solid.",
      },
    ],
  },
  {
    id: "teach-l13-2",
    lessonNumber: 13,
    section: "E",
    idea: "Idea 5",
    title: "Polyhedra",
    activityTitle: "13.2: Prisms and Pyramids",
    sourceDirections: "Describe the source prisms and pyramids, test the three nets for the triangular pyramid (source Figure P), then choose source Figure Q, R, or S and compose a net from loose polygons.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source prisms, pyramids, triangular-pyramid nets, and a loose-polygon square-pyramid net workspace.",
    blacklineMasters: unit1BlacklineMasters.prismsPyramidsStudentMaterials,
    prompt: "Complete each source task about prisms, pyramids, and nets.",
    responseType: "questionSet",
    questions: [
      {
        id: "prisms",
        label: "Question 1a",
        prompt: "Look at Prisms A-F. What are their characteristics or features?",
        responseType: "openResponse",
        inputLabel: "Characteristics of prisms",
        placeholder: "Describe what the prisms have in common.",
        minLength: 24,
        answerConcepts: [
          ["two", "identical", "parallel", "base"],
          ["matching", "parallel", "base", "rectangle"],
          ["same", "base", "rectangle", "connect"],
        ],
        visualCropPath: "lesson-13-p002-prism-examples.png",
        visualWidth: 1340,
        visualHeight: 940,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source drawings of Prisms A through F.",
        visualDirections: "Compare the bases and the faces that connect them.",
        hint: "Find two faces with the same shape and size. Then inspect the faces between them.",
        correctFeedback: "Good description. A prism has two identical parallel faces called bases, connected by rectangles or sometimes parallelograms. The prism is named for the shape of its bases.",
        incorrectFeedback: "Describe the two matching parallel bases and the rectangular or parallelogram faces that connect them.",
      },
      {
        id: "pyramids",
        label: "Question 1b",
        prompt: "Look at Pyramids P-S. What are their characteristics or features?",
        responseType: "openResponse",
        inputLabel: "Characteristics of pyramids",
        placeholder: "Describe what the pyramids have in common.",
        minLength: 24,
        answerConcepts: [
          ["one", "base", "triangle", "vertex"],
          ["one", "base", "triangular", "vertex"],
          ["single", "base", "triangular", "point"],
          ["base", "triangles", "meet"],
        ],
        visualCropPath: "lesson-13-p002-pyramid-examples.png",
        visualWidth: 1450,
        visualHeight: 390,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source drawings of Pyramids P through S.",
        visualDirections: "Compare each base with the faces that meet above it.",
        hint: "Count the special base faces and notice where all the other faces meet.",
        correctFeedback: "Good description. A pyramid has one polygon base. Every other face is a triangle, and all of those triangles meet at one vertex.",
        incorrectFeedback: "Describe the one polygon base, the triangular side faces, and the single vertex where those triangles meet.",
      },
      {
        id: "pyramid-p-nets",
        label: "Question 2",
        prompt: "Which nets can be folded into the triangular pyramid shown (source Figure P)? Select all that apply.",
        responseType: "multiSelect",
        choices: [
          { id: "net-1", label: "net 1" },
          { id: "net-2", label: "net 2" },
          { id: "net-3", label: "net 3" },
        ],
        answerKey: ["net-1", "net-2"],
        visualCropPath: "lesson-13-p002-pyramid-nets.png",
        visualWidth: 1200,
        visualHeight: 340,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source triangular-pyramid nets 1, 2, and 3.",
        visualReferenceCropPath: "lesson-13-p002-pyramid-p.png",
        visualReferenceWidth: 260,
        visualReferenceHeight: 245,
        visualReferenceLabel: "Triangular pyramid",
        visualReferenceSourceLabel: "Source Figure P",
        visualReferenceAlt: "Source drawing of Figure P, a triangular pyramid.",
        visualDirections: "Use the triangular pyramid shown as the target. Imagine folding each set of four triangles so no faces overlap.",
        hint: "The triangular pyramid has four triangular faces. Watch what happens to every triangle as each net folds around one face.",
        correctFeedback: "Correct. Nets 1 and 2 fold into the triangular pyramid shown as source Figure P. In net 3, two triangular faces overlap instead of enclosing the solid.",
        incorrectFeedback: "Try folding around one triangle. Net 3 cannot enclose the triangular pyramid because two faces move into the same place and overlap.",
      },
      {
        id: "compose-q",
        label: "Question 3",
        prompt: "Choose the square pyramid (source Figure Q), pentagonal pyramid (source Figure R), or hexagonal pyramid (source Figure S). Select the polygons your chosen pyramid needs, then arrange those loose cut-outs into a net that could be taped and folded into the pyramid.",
        responseType: "construction",
        dynamicAnswer: "pyramidFamilyLooseNet",
        constructionNote: "The app checks the face inventory for the selected source pyramid and whether the complete edges form one connected, non-overlapping net. Completing any one of Figures Q, R, or S finishes Question 3; the other targets remain available to explore.",
        visualType: "pyramidFamilyNet",
        missingResponseFeedback: "Choose polygons from the supply and place them on the workspace before submitting.",
        hint: "Start by identifying the selected pyramid's one polygon base. It needs one triangular side face for every edge of that base. In a net, every cut-out must join the growing figure along a complete edge without covering another face.",
        correctFeedback: "Correct. Your selected faces form one connected, non-overlapping net for the source pyramid. You can build another net or switch targets.",
        incorrectFeedback: "Inspect the selected source pyramid again, then check both the face inventory and the way complete edges meet.",
      },
      {
        id: "extension",
        label: "Optional challenge",
        optional: true,
        prompt: "What is the smallest number of faces a polyhedron can possibly have? Explain how you know.",
        responseType: "number",
        inputLabel: "Smallest number of faces",
        placeholder: "Type number",
        answerKey: ["4"],
        visualCropPath: "lesson-13-p002-pyramid-examples.png",
        visualWidth: 1450,
        visualHeight: 390,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source drawings of Pyramids P through S.",
        visualDirections: "Use the source pyramids as examples while deciding whether a polyhedron could enclose space with fewer faces.",
        reasoningPrompt: "Name or describe a polyhedron with that many faces.",
        reasoningConcepts: [["triangular", "pyramid"], ["tetrahedron"], ["four", "triangle"]],
        hint: "Try to enclose a three-dimensional region using as few polygon faces as possible.",
        correctFeedback: "Correct. Four triangular faces can enclose a tetrahedron, also called a triangular pyramid. Three faces cannot enclose a three-dimensional region.",
        incorrectFeedback: "Try a triangular pyramid: it has one triangular base and three triangular side faces.",
      },
    ],
  },
  {
    id: "teach-l13-3",
    lessonNumber: 13,
    section: "E",
    idea: "Idea 5",
    title: "Polyhedra",
    activityTitle: "13.3: Assembling Polyhedra",
    sourceDirections: "The app assigns Net A. Step through the fold, ignoring the dotted glue flaps, then count the vertices, edges, and faces of the assembled polyhedron.",
    pdfPage: 3,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive staged folding of Blackline Master Net A into a triangular prism.",
    blacklineMasters: unit1BlacklineMasters.assemblingPolyhedraNetA,
    prompt: "Fold Net A and count the parts of the assembled polyhedron.",
    responseType: "questionSet",
    questions: [
      {
        id: "assemble-a",
        label: "Net A",
        prompt: "After folding Net A, how many vertices, edges, and faces are in the polyhedron?",
        fields: [
          { id: "vertices", label: "Vertices", responseType: "number", placeholder: "Type number" },
          { id: "edges", label: "Edges", responseType: "number", placeholder: "Type number" },
          { id: "faces", label: "Faces", responseType: "number", placeholder: "Type number" },
        ],
        acceptedFieldSets: [{ vertices: ["6"], edges: ["9"], faces: ["5"] }],
        visualType: "polyhedronFold",
        requiredCustomState: { polyhedronFoldStep: "3" },
        requiredStateFeedback: "Use Next fold step until Net A is fully assembled before submitting the counts.",
        reasoningPrompt: "Explain how the shaded faces of the net become the faces of the polyhedron.",
        reasoningConcepts: [["three", "rectangle", "two", "triangle"], ["triangular", "prism", "five", "face"]],
        hint: "Dotted regions are glue flaps, not faces. Count the 3 shaded rectangles and 2 shaded triangles, then count the assembled solid's vertices and edges.",
        correctFeedback: "Correct. Net A folds into a triangular prism with 2 triangular faces and 3 rectangular faces: 5 faces, 9 edges, and 6 vertices.",
        incorrectFeedback: "Ignore the dotted glue flaps. The shaded net folds into a triangular prism with 2 triangular faces and 3 rectangular faces.",
      },
    ],
  },
  {
    id: "teach-l14-2",
    lessonNumber: 14,
    section: "E",
    idea: "Idea 5",
    title: "Nets and Surface Area",
    activityTitle: "14.2: Using Nets to Find Surface Area",
    sourceContext: "The source uses the three gridded Blackline Master nets A-C as cut-and-assemble materials.",
    sourceDirections: "For each net, assemble the polyhedron, name it, find its surface area, and explain how the areas of all the shaded faces combine.",
    pdfPage: 1,
    pdfPages: [1, 2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source nets on grids for naming, assembly, and surface-area reasoning.",
    blacklineMasters: unit1BlacklineMasters.surfaceAreaNets,
    prompt: "Complete the three source nets, then investigate both optional net sets.",
    responseType: "questionSet",
    questions: [
      {
        id: "surface-net-a",
        label: "Net A",
        prompt: "Assemble Net A. What polyhedron does it form, and what is its surface area?",
        fields: [
          { id: "name", label: "Polyhedron name", responseType: "shortAnswer", placeholder: "Type the polyhedron name" },
          { id: "area", label: "Surface area (square units)", responseType: "number", placeholder: "Type the surface area" },
        ],
        acceptedFieldSets: [{ name: ["rectangular prism", "rectangle prism", "box"], area: ["82"] }],
        visualType: "surfaceNetFold",
        netId: "A",
        visualCropPath: "lesson-14-p001-surface-net-a.png",
        visualWidth: 570,
        visualHeight: 800,
        visualAlt: "Source Net A on a square grid showing six shaded rectangular faces.",
        requiredConstruction: "sourceNetFoldComplete",
        requiredStateFeedback: "Complete all three fold steps for Net A before submitting its name and surface area.",
        reasoningPrompt: "Explain how you combined the areas of all six shaded faces.",
        reasoningConcepts: [["60", "12", "10", "82"]],
        hint: "Net A has three pairs of matching rectangular faces. Find the area of each pair, then add.",
        reasoningRevisionFeedback: "Your name and surface area are correct. Strengthen the explanation by showing the three matching-face contributions: 60, 12, and 10 square units, totaling 82.",
        correctFeedback: "Correct. Net A forms a rectangular prism. Its three pairs of rectangular faces contribute 60, 12, and 10 square units, for a total surface area of 82 square units.",
        incorrectFeedback: "Recheck the solid and the six shaded rectangles. Add both 6 by 5 faces, both 6 by 1 faces, and both 5 by 1 faces.",
      },
      {
        id: "surface-net-b",
        label: "Net B",
        prompt: "Assemble Net B. What polyhedron does it form, and what is its surface area?",
        fields: [
          { id: "name", label: "Polyhedron name", responseType: "shortAnswer", placeholder: "Type the polyhedron name" },
          { id: "area", label: "Surface area (square units)", responseType: "number", placeholder: "Type the surface area" },
        ],
        acceptedFieldSets: [{ name: ["square pyramid"], area: ["48"] }],
        visualType: "surfaceNetFold",
        netId: "B",
        visualCropPath: "lesson-14-p001-surface-net-b.png",
        visualWidth: 680,
        visualHeight: 800,
        visualAlt: "Source Net B on a square grid showing one shaded square face and four shaded triangular faces.",
        requiredConstruction: "sourceNetFoldComplete",
        requiredStateFeedback: "Complete all three fold steps for Net B before submitting its name and surface area.",
        reasoningPrompt: "Explain how you combined the areas of the shaded square and four shaded triangles.",
        reasoningConcepts: [["16", "four", "triangle", "48"]],
        hint: "Separate the square base from the four triangular faces. Use the grid to find each area.",
        reasoningRevisionFeedback: "Your name and surface area are correct. Strengthen the explanation by showing the 16-square-unit base, the four triangular faces, and the total of 48 square units.",
        correctFeedback: "Correct. Net B forms a square pyramid. The square base and four triangular faces have a total surface area of 48 square units.",
        incorrectFeedback: "Recheck the square base and the four shaded triangles. Use the grid to find each face area, then add all five faces.",
      },
      {
        id: "surface-net-c",
        label: "Net C",
        prompt: "Assemble Net C. What polyhedron does it form, and what is its surface area?",
        fields: [
          { id: "name", label: "Polyhedron name", responseType: "shortAnswer", placeholder: "Type the polyhedron name" },
          { id: "area", label: "Surface area (square units)", responseType: "number", placeholder: "Type the surface area" },
        ],
        acceptedFieldSets: [{ name: ["triangular prism", "triangle prism"], area: ["48"] }],
        visualType: "surfaceNetFold",
        netId: "C",
        visualCropPath: "lesson-14-p001-surface-net-c.png",
        visualWidth: 690,
        visualHeight: 800,
        visualAlt: "Source Net C on a square grid showing two shaded triangular faces and three shaded rectangular faces.",
        requiredConstruction: "sourceNetFoldComplete",
        requiredStateFeedback: "Complete all three fold steps for Net C before submitting its name and surface area.",
        reasoningPrompt: "Explain how you combined the areas of the two shaded triangles and three shaded rectangles.",
        reasoningConcepts: [["6", "9", "12", "15", "48"]],
        hint: "A triangular prism has two triangular faces and three rectangular faces. Find each shaded face area from the grid.",
        reasoningRevisionFeedback: "Your name and surface area are correct. Strengthen the explanation by showing 6 square units for each triangular face and 9, 12, and 15 square units for the rectangles, totaling 48.",
        correctFeedback: "Correct. Net C forms a triangular prism. Its two triangular faces and three rectangular faces have a total surface area of 48 square units.",
        incorrectFeedback: "Recheck the two shaded triangles and three shaded rectangles. Find each face area from the grid and add them.",
      },
      {
        id: "optional-rectangular-nets",
        label: "Optional: Rectangular prism nets",
        prompt: "Which of the source drawings A-D are nets for a rectangular prism? Select all that apply.",
        responseType: "multiSelect",
        optional: true,
        choices: [
          { id: "A", label: "A" },
          { id: "B", label: "B" },
          { id: "C", label: "C" },
          { id: "D", label: "D" },
        ],
        answerKey: ["C"],
        visualCropPath: "lesson-14-p002-rectangular-prism-net-checks.png",
        visualWidth: 1500,
        visualHeight: 1000,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source drawings A-D to test as possible rectangular-prism nets.",
        hint: "A closed rectangular prism needs six compatible rectangular faces. Count the faces before imagining the folds.",
        correctFeedback: "Correct. Only C is a rectangular-prism net. It has all six compatible faces in an arrangement that folds without overlap; A, B, and D each show only five faces.",
        incorrectFeedback: "Count the rectangular faces in every drawing. A, B, and D each have only five; then test whether C's six faces can fold without overlap.",
      },
      {
        id: "optional-triangular-nets",
        label: "Optional: Triangular prism nets",
        prompt: "Which of the source drawings A-D are nets for a triangular prism? Select all that apply.",
        responseType: "multiSelect",
        optional: true,
        choices: [
          { id: "A", label: "A" },
          { id: "B", label: "B" },
          { id: "C", label: "C" },
          { id: "D", label: "D" },
        ],
        answerKey: ["C", "D"],
        visualCropPath: "lesson-14-p003-triangular-prism-net-checks.png",
        visualWidth: 1780,
        visualHeight: 810,
        visualDisplayMaxWidth: 620,
        visualAlt: "Source drawings A-D to test as possible triangular-prism nets.",
        hint: "A triangular prism needs three rectangles forming the side band and two triangles that close opposite ends.",
        correctFeedback: "Correct. C and D fold into triangular prisms. A places both triangular bases on the same end of the side band, and B joins faces along incompatible edge positions.",
        incorrectFeedback: "Track the three-rectangle side band and ask whether the two triangles close opposite ends without overlap. Test C and D carefully.",
      },
    ],
  },
  {
    id: "teach-l15-1",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    activityTitle: "15.1: Notice and Wonder: Wrapping Paper",
    sourceDirections: "Kiran is wrapping this box of sports cards as a present for a friend. Record one thing you notice and one thing you wonder.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Source rectangular box for wrapping-paper noticing.",
    prompt: "You may record the notice and wonder independently, or submit either one blank to view a model response.",
    responseType: "questionSet",
    questions: [
      {
        id: "notice",
        label: "Notice",
        prompt: "What do you notice about the box, its measurements, or the wrapping context?",
        responseType: "openResponse",
        inputLabel: "Your notice",
        placeholder: "Describe something you observe",
        answerOptional: true,
        acceptAnyResponse: true,
        recordResponse: true,
        visualCropPath: "lesson-15-p001-wrapping-paper-15-1.png",
        visualWidth: 295,
        visualHeight: 200,
        visualDisplayMaxWidth: 295,
        visualAlt: "A box of sports cards with a 4-inch front edge and a 2.5-inch depth; its height is not labeled.",
        hint: "Look at the shape, the two shown measurements, and the missing measurement.",
        optionalEmptyFeedback: "No notice entered. One possible notice is that the box is a rectangular prism with a 4-inch length and 2.5-inch depth, while its height is not given. Those details matter when estimating wrapping paper or volume.",
        correctFeedback: "Notice recorded. The box is a rectangular prism with a 4-inch length and 2.5-inch depth, while its height is not given. Those details matter when estimating wrapping paper or volume.",
        incorrectFeedback: "Record one specific feature you can see in the source box or its labels.",
      },
      {
        id: "wonder",
        label: "Wonder",
        prompt: "What do you wonder about the box or the amount of wrapping paper it needs?",
        responseType: "openResponse",
        inputLabel: "Your wonder",
        placeholder: "Write a question you have",
        answerOptional: true,
        acceptAnyResponse: true,
        recordResponse: true,
        visualCropPath: "lesson-15-p001-wrapping-paper-15-1.png",
        visualWidth: 295,
        visualHeight: 200,
        visualDisplayMaxWidth: 295,
        visualAlt: "A box of sports cards with a 4-inch front edge and a 2.5-inch depth; its height is not labeled.",
        hint: "You might wonder about a missing measurement, the amount of paper, or the space inside.",
        optionalEmptyFeedback: "No wonder entered. Possible questions include how much wrapping paper the box needs or how much it can hold. Either calculation also needs an estimate or measurement for the missing height.",
        correctFeedback: "Wonder recorded. Questions about wrapping paper lead to surface area, while questions about how much the box holds lead to volume. Either calculation also needs an estimate or measurement for the missing height.",
        incorrectFeedback: "Write a question about something the source image makes you curious about.",
      },
    ],
  },
  {
    id: "teach-l15-2",
    lessonNumber: 15,
    section: "E",
    idea: "Idea 5",
    title: "More Nets, More Surface Area",
    activityTitle: "15.2: Building Prisms and Pyramids",
    sourceContext: "The source gives each student one Blackline Master polyhedron drawing. The app takes the teacher role and assigns Polyhedron C, then provides a structured graph-paper net builder.",
    sourceDirections: "Study app-assigned Polyhedron C. Name it, build and label a net with all six faces, then use that net to find its surface area.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Blackline Master Polyhedron C rectangular prism with dimensions 13, 4, and 5.",
    blacklineMasters: unit1BlacklineMasters.buildingPrismsPyramidsPage1,
    prompt: "Complete all three parts for assigned Polyhedron C.",
    responseType: "questionSet",
    questions: [
      {
        id: "identify-polyhedron",
        label: "1. Name the polyhedron",
        prompt: "What polyhedron did the app assign?",
        responseType: "singleChoice",
        choices: [
          { id: "rectangular-prism", label: "Rectangular prism" },
          { id: "triangular-prism", label: "Triangular prism" },
          { id: "square-pyramid", label: "Square pyramid" },
          { id: "composite", label: "Composite polyhedron" },
        ],
        answerKey: ["rectangular-prism"],
        visualCropPath: "lesson-15-p001-polyhedron-drawings-blackline.png",
        visualWidth: 700,
        visualHeight: 188,
        visualDisplayMaxWidth: 620,
        visualAlt: "Assigned Blackline Polyhedron C with dimensions 13, 4, and 5.",
        hint: "It has six rectangular faces in three matching opposite pairs.",
        correctFeedback: "Correct. Polyhedron C is a rectangular prism with edge lengths 13, 4, and 5 units.",
        incorrectFeedback: "Look at the face shapes and the three perpendicular dimensions in the assigned drawing.",
      },
      {
        id: "build-net",
        label: "2-3. Build and label the net",
        prompt: "Build a net for assigned Polyhedron C on the blank graph paper. Use all six faces, with dimensions that match along every shared edge.",
        responseType: "construction",
        dynamicAnswer: "rectangularPrismNet",
        constructionNote: "Choose a face-size tool, place the first face, then select a placed face and attach another face along a complete matching edge.",
        missingResponseFeedback: "Use the construction controls to place the first face on the blank graph paper.",
        visualType: "rectangularPrismNet",
        hint: "Study the three edge lengths on Polyhedron C. Opposite faces are congruent, and faces can attach only along sides with equal lengths.",
        correctFeedback: "Correct. Your graph-paper construction has the six source-sized faces, joins them along matching complete edges, and folds into Polyhedron C without overlap.",
        incorrectFeedback: "Revise the actual graph-paper construction. Check the face sizes, matching shared edges, overlap, and whether all six faces fold to different sides of the prism.",
      },
      {
        id: "surface-area",
        label: "4. Find surface area",
        prompt: "What is the surface area of assigned Polyhedron C?",
        responseType: "number",
        answerKey: ["274"],
        placeholder: "Type square units",
        visualType: "rectangularPrismNet",
        requiredConstruction: "validRectangularPrismNet",
        requiredStateFeedback: "Complete and submit a valid net before using it to calculate surface area.",
        reasoningPrompt: "Show an organized calculation using the six labeled faces in your net.",
        reasoningConcepts: [["13", "5", "4"], ["65", "52", "20"], ["two", "pair", "274"]],
        hint: "Add the areas of the three pairs of congruent rectangles.",
        reasoningRevisionFeedback: "The surface area is correct. Strengthen the calculation by showing the two 13 by 5, two 13 by 4, and two 5 by 4 faces.",
        correctFeedback: "Correct. The six face areas are two each of 65, 52, and 20 square units, so the surface area is 2 x (65 + 52 + 20) = 274 square units.",
        incorrectFeedback: "Use every labeled face once: two 13 by 5 rectangles, two 13 by 4 rectangles, and two 5 by 4 rectangles.",
      },
    ],
  },
  {
    id: "teach-l16-2",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    activityTitle: "16.2: Building with 8 Cubes",
    sourceContext: "You have 16 snap cubes: 8 for Shape A and 8 for Shape B.",
    sourceDirections: "Build two different connected shapes using exactly 8 cubes for each. Give each shape a name, determine its volume and surface area, then compare the results.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive layer-based builders for two connected 8-cube shapes.",
    prompt: "Complete both builds and the comparison.",
    responseType: "questionSet",
    questions: [
      {
        id: "shape-a",
        label: "Shape A",
        prompt: "Build a connected shape with exactly 8 cubes. Name it, then determine its volume and surface area.",
        fields: [
          { id: "name", label: "Shape name", responseType: "shortAnswer", placeholder: "Give the shape a name" },
          { id: "volume", label: "Volume (cubic units)", responseType: "number", placeholder: "Type the volume" },
          { id: "surfaceArea", label: "Surface area (square units)", responseType: "number", placeholder: "Type the surface area" },
        ],
        dynamicAnswer: "eightCubeShapeMetrics",
        shapeId: "A",
        visualType: "eightCubeBuilder",
        requiredCustomState: { eightCubeShapeAValid: "true" },
        requiredStateFeedback: "Build one connected Shape A using exactly 8 cubes before submitting its measurements.",
        hint: "Volume counts cubes. For surface area, count every exposed square face and do not count faces shared by touching cubes.",
        correctFeedback: "Correct. Shape A uses 8 unit cubes, so its volume is 8 cubic units. Its surface area matches the exposed faces in your construction.",
        incorrectFeedback: "Check the cube count, connection, and exposed faces. Each shared face is hidden on both touching cubes.",
      },
      {
        id: "shape-b",
        label: "Shape B",
        prompt: "Build a second connected 8-cube shape that is different from Shape A. Name it, then determine its volume and surface area.",
        fields: [
          { id: "name", label: "Shape name", responseType: "shortAnswer", placeholder: "Give the shape a name" },
          { id: "volume", label: "Volume (cubic units)", responseType: "number", placeholder: "Type the volume" },
          { id: "surfaceArea", label: "Surface area (square units)", responseType: "number", placeholder: "Type the surface area" },
        ],
        dynamicAnswer: "eightCubeShapeMetrics",
        shapeId: "B",
        visualType: "eightCubeBuilder",
        requiredCustomState: { eightCubeShapeBValid: "true" },
        requiredStateFeedback: "Build a connected Shape B with exactly 8 cubes in an arrangement different from Shape A.",
        hint: "Use all 8 cubes, keep the shape connected, and change the arrangement rather than merely shifting or turning Shape A.",
        correctFeedback: "Correct. Shape B is a different connected arrangement of 8 cubes. Its volume is 8 cubic units, and its surface area matches its exposed faces.",
        incorrectFeedback: "Recheck the cube count, whether every cube connects to the shape, and how many faces remain exposed.",
      },
      {
        id: "compare-shapes",
        label: "Compare",
        prompt: "What does building two different shapes from 8 cubes show?",
        responseType: "singleChoice",
        choices: [
          { id: "same-volume-variable-surface", label: "Their volumes are both 8, while their surface areas depend on the arrangements." },
          { id: "same-everything", label: "Using 8 cubes forces both volume and surface area to be the same." },
          { id: "surface-controls-volume", label: "The shape with greater surface area must also have greater volume." },
        ],
        answerKey: ["same-volume-variable-surface"],
        visualType: "eightCubeBuilder",
        shapeId: "compare",
        requiredCustomState: { eightCubeShapeAValid: "true", eightCubeShapeBValid: "true" },
        requiredStateFeedback: "Complete two different connected 8-cube shapes before comparing them.",
        reasoningPrompt: "Explain how shared and exposed cube faces affect surface area without changing volume.",
        reasoningConcepts: [["shared", "exposed"], ["same", "volume", "surface"], ["8", "volume", "face"]],
        hint: "Both shapes contain 8 cubes. Compare how many cube faces touch other cubes in each arrangement.",
        correctFeedback: "Correct. Both shapes have volume 8 because each contains 8 unit cubes. More compact arrangements hide more shared faces and tend to have less surface area; spread-out arrangements expose more faces.",
        incorrectFeedback: "Separate the two attributes: volume counts the 8 cubes, while surface area counts exposed square faces.",
      },
    ],
  },
  {
    id: "teach-l16-3",
    lessonNumber: 16,
    section: "F",
    idea: "Idea 6",
    title: "Distinguishing Between Surface Area and Volume",
    activityTitle: "16.3: Comparing Prisms Without Building Them",
    sourceDirections: "Each prism is 1 centimeter high. Find the surface area and volume of Prism A (1 by 11 base), Prism B (2 by 7 base), and Prism C (3 by 5 base), then state what you notice.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "App-rendered source dimensions for Prisms A, B, and C.",
    prompt: "Complete all three prism calculations, the observation, and the optional example search.",
    responseType: "questionSet",
    questions: [
      {
        id: "prism-a",
        label: "Prism A",
        prompt: "Prism A has dimensions 1 cm by 1 cm by 11 cm. Find its surface area and volume.",
        fields: [
          { id: "surfaceArea", label: "Surface area (square centimeters)", responseType: "number", placeholder: "Type surface area" },
          { id: "volume", label: "Volume (cubic centimeters)", responseType: "number", placeholder: "Type volume" },
        ],
        acceptedFieldSets: [{ surfaceArea: ["46"], volume: ["11"] }],
        visualType: "prismDimensions",
        prismLabel: "A",
        dimensions: { l: 11, w: 1, h: 1 },
        hint: "Volume is 11 x 1 x 1. Surface area is twice the sum of the three different face areas.",
        correctFeedback: "Correct. Prism A has volume 11 cubic centimeters and surface area 2 x (11 + 11 + 1) = 46 square centimeters.",
        incorrectFeedback: "Use all three dimensions in both calculations and count each pair of opposite faces.",
      },
      {
        id: "prism-b",
        label: "Prism B",
        prompt: "Prism B has dimensions 1 cm by 2 cm by 7 cm. Find its surface area and volume.",
        fields: [
          { id: "surfaceArea", label: "Surface area (square centimeters)", responseType: "number", placeholder: "Type surface area" },
          { id: "volume", label: "Volume (cubic centimeters)", responseType: "number", placeholder: "Type volume" },
        ],
        acceptedFieldSets: [{ surfaceArea: ["46"], volume: ["14"] }],
        visualType: "prismDimensions",
        prismLabel: "B",
        dimensions: { l: 7, w: 2, h: 1 },
        hint: "Volume is 7 x 2 x 1. The three face-area types are 7 x 2, 7 x 1, and 2 x 1.",
        correctFeedback: "Correct. Prism B has volume 14 cubic centimeters and surface area 2 x (14 + 7 + 2) = 46 square centimeters.",
        incorrectFeedback: "Use all three dimensions and double each of the three different face areas.",
      },
      {
        id: "prism-c",
        label: "Prism C",
        prompt: "Prism C has dimensions 1 cm by 3 cm by 5 cm. Find its surface area and volume.",
        fields: [
          { id: "surfaceArea", label: "Surface area (square centimeters)", responseType: "number", placeholder: "Type surface area" },
          { id: "volume", label: "Volume (cubic centimeters)", responseType: "number", placeholder: "Type volume" },
        ],
        acceptedFieldSets: [{ surfaceArea: ["46"], volume: ["15"] }],
        visualType: "prismDimensions",
        prismLabel: "C",
        dimensions: { l: 5, w: 3, h: 1 },
        hint: "Volume is 5 x 3 x 1. The three face-area types are 5 x 3, 5 x 1, and 3 x 1.",
        correctFeedback: "Correct. Prism C has volume 15 cubic centimeters and surface area 2 x (15 + 5 + 3) = 46 square centimeters.",
        incorrectFeedback: "Use all three dimensions and double each of the three different face areas.",
      },
      {
        id: "observations",
        label: "Observations",
        prompt: "Analyze the three surface areas and volumes. What do you notice? Write one or two observations.",
        responseType: "openResponse",
        inputLabel: "Your observations",
        placeholder: "Compare the measurements",
        minLength: 16,
        answerConcepts: [["surface", "same", "volume", "different"], ["46", "11", "14", "15"], ["area", "46", "volume"]],
        visualType: "prismDimensionSet",
        hint: "Compare the three surface-area values with the three volume values.",
        correctFeedback: "Good observation. All three prisms have the same surface area, 46 square centimeters, but their volumes are different: 11, 14, and 15 cubic centimeters.",
        incorrectFeedback: "State what is the same across all three prisms and what changes from A to B to C.",
      },
      {
        id: "optional-more-prisms",
        label: "Optional: More examples",
        prompt: "Find two more rectangular prisms with the same surface area but different volumes. Enter their dimensions.",
        fields: [
          { id: "aL", label: "First prism length", responseType: "number", placeholder: "Type length" },
          { id: "aW", label: "First prism width", responseType: "number", placeholder: "Type width" },
          { id: "aH", label: "First prism height", responseType: "number", placeholder: "Type height" },
          { id: "bL", label: "Second prism length", responseType: "number", placeholder: "Type length" },
          { id: "bW", label: "Second prism width", responseType: "number", placeholder: "Type width" },
          { id: "bH", label: "Second prism height", responseType: "number", placeholder: "Type height" },
        ],
        dynamicAnswer: "sameSurfaceDifferentVolume",
        optional: true,
        reasoningPrompt: "Show that the surface areas match and the volumes differ.",
        reasoningConcepts: [["same", "surface", "different", "volume"], ["22", "5", "6"], ["area", "equal", "volume"]],
        visualType: "prismPairExamples",
        hint: "Try small whole-number dimensions. Compare 2(lw + lh + wh) and lwh for each prism.",
        correctFeedback: "Valid example. The two entered prisms have equal surface areas and different volumes, and at least one is new beyond source Prisms A-C.",
        incorrectFeedback: "Use positive whole-number dimensions. The two surface areas must be equal, the volumes must differ, and at least one prism must be new.",
      },
    ],
  },
  {
    id: "teach-l17-2",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.2: Building with 32 Cubes",
    sourceContext: "Each small cube has an edge length of 1 unit.",
    sourceDirections: "Build the largest single cube you can from the available snap cubes. Select cube positions one layer at a time.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive layer workspace for building the largest cube possible from a snap-cube inventory.",
    prompt: "Build the largest single cube possible, then answer each source question about your construction.",
    responseType: "questionSet",
    questions: [
      {
        id: "32-cubes-used",
        label: "1. Cubes used",
        prompt: "How many snap cubes did you use to build the largest single cube possible from 32 cubes?",
        responseType: "number",
        inputLabel: "Snap cubes used",
        placeholder: "Type number of cubes",
        answerKey: ["27"],
        visualType: "snapCubeBuilder",
        cubeInventory: 32,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Build the largest complete cube from the 32-cube inventory before submitting this answer.",
        hint: "A complete cube has the same whole-number edge length in all three directions.",
        correctFeedback: "Correct. The largest complete cube uses 27 snap cubes.",
        incorrectFeedback: "Count the unit cubes in your completed construction. Do not include unused cubes from the inventory.",
      },
      {
        id: "32-edge-length",
        label: "2. Edge length",
        prompt: "What is the edge length of the cube you built?",
        responseType: "number",
        inputLabel: "Edge length (units)",
        placeholder: "Type edge length",
        answerKey: ["3"],
        visualType: "snapCubeBuilder",
        cubeInventory: 32,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the largest cube in the workspace before submitting its edge length.",
        hint: "Count the unit-cube edges along one side of your completed cube.",
        correctFeedback: "Correct. The built cube is 3 units long, 3 units wide, and 3 units high.",
        incorrectFeedback: "Count how many unit cubes lie along any one edge of the completed cube.",
      },
      {
        id: "32-face-area",
        label: "3. Face area",
        prompt: "What is the area of each face of the built cube? Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of one face (square units)",
        placeholder: "Type face area",
        answerKey: ["9"],
        reasoningPrompt: "Explain how the cube's edge length determines the area of one face.",
        reasoningConcepts: [["3", "9"]],
        visualType: "snapCubeBuilder",
        cubeInventory: 32,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the largest cube in the workspace before submitting its face area.",
        hint: "One face is a square. Multiply its side length by itself.",
        correctFeedback: "Correct. Each face is a 3-by-3 square, so its area is 9 square units.",
        incorrectFeedback: "Use the two equal side lengths of one square face, not all three dimensions of the cube.",
      },
      {
        id: "32-volume",
        label: "4. Volume",
        prompt: "What is the volume of the built cube? Show your reasoning.",
        responseType: "number",
        inputLabel: "Volume (cubic units)",
        placeholder: "Type volume",
        answerKey: ["27"],
        reasoningPrompt: "Explain how the cube's edge length determines its volume.",
        reasoningConcepts: [["3", "27"]],
        visualType: "snapCubeBuilder",
        cubeInventory: 32,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the largest cube in the workspace before submitting its volume.",
        hint: "Multiply the three equal edge lengths, or count cubes by layers.",
        correctFeedback: "Correct. The cube has 3 layers of 9 cubes, so 3 × 3 × 3 = 27 cubic units.",
        incorrectFeedback: "Volume counts unit cubes. Multiply the three equal edge lengths of your completed cube.",
      },
      {
        id: "64-cubes-used",
        label: "Optional 1. Cubes used",
        prompt: "The extension inventory has 64 snap cubes. Build the largest single cube you can. How many cubes did you use?",
        responseType: "number",
        inputLabel: "Snap cubes used",
        placeholder: "Type number of cubes",
        answerKey: ["64"],
        visualType: "snapCubeBuilder",
        cubeInventory: 64,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Build the largest complete cube from the 64-cube inventory before submitting this answer.",
        optional: true,
        hint: "Use equal whole-number edge lengths in all three directions.",
        correctFeedback: "Correct. All 64 cubes form the largest possible complete cube.",
        incorrectFeedback: "Count every unit cube in the completed extension cube.",
      },
      {
        id: "64-edge-length",
        label: "Optional 2. Edge length",
        prompt: "What is the edge length of the new cube?",
        responseType: "number",
        inputLabel: "Edge length (units)",
        placeholder: "Type edge length",
        answerKey: ["4"],
        visualType: "snapCubeBuilder",
        cubeInventory: 64,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the extension cube before submitting its edge length.",
        optional: true,
        hint: "Count the unit cubes along one edge.",
        correctFeedback: "Correct. The 64-cube construction has edge length 4 units.",
        incorrectFeedback: "Count the unit-cube edges along one side of the completed cube.",
      },
      {
        id: "64-face-area",
        label: "Optional 3. Face area",
        prompt: "What is the area of each face of this cube? Show your reasoning.",
        responseType: "number",
        inputLabel: "Area of one face (square units)",
        placeholder: "Type face area",
        answerKey: ["16"],
        reasoningPrompt: "Explain how you found the area of one face.",
        reasoningConcepts: [["4", "16"]],
        visualType: "snapCubeBuilder",
        cubeInventory: 64,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the extension cube before submitting its face area.",
        optional: true,
        hint: "Each face is a square with the cube's edge length as both dimensions.",
        correctFeedback: "Correct. Each face is a 4-by-4 square with area 16 square units.",
        incorrectFeedback: "Multiply the two equal side lengths of one face.",
      },
      {
        id: "64-volume",
        label: "Optional 4. Volume",
        prompt: "What is the volume of this cube? Show your reasoning.",
        responseType: "number",
        inputLabel: "Volume (cubic units)",
        placeholder: "Type volume",
        answerKey: ["64"],
        reasoningPrompt: "Explain how you found the volume.",
        reasoningConcepts: [["4", "64"]],
        visualType: "snapCubeBuilder",
        cubeInventory: 64,
        requiredConstruction: "largestCube",
        requiredStateFeedback: "Complete the extension cube before submitting its volume.",
        optional: true,
        hint: "Multiply all three equal edge lengths, or count cubes by layers.",
        correctFeedback: "Correct. The cube has 4 layers of 16 cubes, so 4 × 4 × 4 = 64 cubic units.",
        incorrectFeedback: "Volume uses all three dimensions of the cube.",
      },
    ],
  },
  {
    id: "teach-l17-3",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.3: Perfect Cubes",
    sourceDirections: "Use equal cube edge lengths and volumes to investigate perfect cubes.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "A three-by-three-by-three cube divided into unit cubes, matching the source perfect-cube visual.",
    prompt: "Complete all four source questions about perfect cubes.",
    responseType: "questionSet",
    questions: [
      {
        id: "cube-examples",
        label: "1. Examples and non-examples",
        prompt: "The number 27 is a perfect cube. Find four other numbers that are perfect cubes and two numbers that are not perfect cubes.",
        fields: [
          { id: "cube1", label: "Perfect cube 1", responseType: "number", placeholder: "Type a number" },
          { id: "cube2", label: "Perfect cube 2", responseType: "number", placeholder: "Type a number" },
          { id: "cube3", label: "Perfect cube 3", responseType: "number", placeholder: "Type a number" },
          { id: "cube4", label: "Perfect cube 4", responseType: "number", placeholder: "Type a number" },
          { id: "notCube1", label: "Not a perfect cube 1", responseType: "number", placeholder: "Type a number" },
          { id: "notCube2", label: "Not a perfect cube 2", responseType: "number", placeholder: "Type a number" },
        ],
        dynamicAnswer: "perfectCubeExamples",
        visualCropPath: "lesson-17-p002-perfect-cubes-17-3.png",
        visualWidth: 148,
        visualHeight: 145,
        visualDisplayMaxWidth: 148,
        visualAlt: "A three-by-three-by-three cube made from 27 unit cubes.",
        hint: "A perfect cube is a whole number that can be written as n × n × n for a whole number n.",
        correctFeedback: "Correct. Each of the first four numbers is a whole number multiplied by itself three times, while neither of the last two is.",
        incorrectFeedback: "Check six distinct numbers. The first four must be perfect cubes other than 27; the last two must not be perfect cubes.",
      },
      {
        id: "cube-volume-4",
        label: "2. Side length 4 cm",
        prompt: "A cube has side length 4 centimeters. What is its volume in cubic centimeters?",
        responseType: "number",
        inputLabel: "Volume (cubic centimeters)",
        placeholder: "Type volume",
        answerKey: ["64"],
        visualCropPath: "lesson-17-p002-perfect-cubes-17-3.png",
        visualWidth: 148,
        visualHeight: 145,
        visualDisplayMaxWidth: 148,
        visualAlt: "A cube divided into unit cubes.",
        hint: "Multiply the edge length three times.",
        correctFeedback: "Correct. 4 × 4 × 4 = 64 cubic centimeters.",
        incorrectFeedback: "Cube volume uses three equal edge lengths: 4 × 4 × 4.",
      },
      {
        id: "cube-volume-10",
        label: "3. Side length 10 in",
        prompt: "A cube has side length 10 inches. What is its volume in cubic inches?",
        responseType: "number",
        inputLabel: "Volume (cubic inches)",
        placeholder: "Type volume",
        answerKey: ["1000"],
        visualCropPath: "lesson-17-p002-perfect-cubes-17-3.png",
        visualWidth: 148,
        visualHeight: 145,
        visualDisplayMaxWidth: 148,
        visualAlt: "A cube divided into unit cubes.",
        hint: "Multiply 10 by itself three times.",
        correctFeedback: "Correct. 10 × 10 × 10 = 1,000 cubic inches.",
        incorrectFeedback: "Use all three equal dimensions of the cube: 10 × 10 × 10.",
      },
      {
        id: "cube-volume-s",
        label: "4. Side length s",
        prompt: "A cube has side length s units. Write an expression for its volume.",
        responseType: "shortAnswer",
        inputLabel: "Volume expression (cubic units)",
        placeholder: "Type an expression",
        answerKey: ["s^3", "s³", "s × s × s", "s x s x s", "s times s times s"],
        visualCropPath: "lesson-17-p002-perfect-cubes-17-3.png",
        visualWidth: 148,
        visualHeight: 145,
        visualDisplayMaxWidth: 148,
        visualAlt: "A cube divided into unit cubes.",
        hint: "A cube has three equal dimensions, each with length s.",
        correctFeedback: "Correct. The volume is s × s × s, which can be written as s^3 cubic units.",
        incorrectFeedback: "Multiply the symbolic edge length s by itself three times.",
      },
    ],
  },
  {
    id: "teach-l17-4",
    lessonNumber: 17,
    section: "F",
    idea: "Idea 6",
    title: "Squares and Cubes",
    activityTitle: "17.4: Introducing Exponents",
    sourceContext: "Squaring multiplies two equal factors; cubing multiplies three equal factors. Exponents also describe square and cubic units.",
    sourceDirections: "Use exponents and include correct units of measure as part of each answer.",
    pdfPage: 2,
    pdfPages: [2, 3],
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Exponent reference connecting equal factors with square area and cube volume.",
    prompt: "Complete all six source exponent questions. Then try the optional challenge if you are ready.",
    responseType: "questionSet",
    questions: [
      {
        id: "square-10",
        label: "1. Square side 10 cm",
        prompt: "A square has side length 10 centimeters. Use an exponent to express its area, including units.",
        fields: [
          { id: "expression", label: "Area expression", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["10^2", "10²"] },
          { id: "units", label: "Area units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["cm^2", "cm²", "square centimeters", "sq cm"] },
        ],
        visualType: "exponentReference",
        hint: "A square uses two equal side-length factors, and area uses square units.",
        correctFeedback: "Correct. The area is 10^2 square centimeters, written with a second power for both the factor and the units.",
        incorrectFeedback: "Use 10 multiplied by itself twice, and include square-centimeter units.",
      },
      {
        id: "side-from-seven-squared",
        label: "2. Area 7^2 sq in",
        prompt: "The area of a square is 7^2 square inches. What is its side length, including units?",
        fields: [
          { id: "length", label: "Side length", responseType: "number", placeholder: "Type side length", answerKey: ["7"] },
          { id: "units", label: "Length units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["in", "inch", "inches"] },
        ],
        visualType: "exponentReference",
        hint: "The base of the second-power expression is the square's side length.",
        correctFeedback: "Correct. 7^2 means 7 × 7, so the square's side length is 7 inches.",
        incorrectFeedback: "Read the base of 7^2, then use linear inches rather than square inches for a side length.",
      },
      {
        id: "square-area-81",
        label: "3. Area 81 m^2",
        prompt: "The area of a square is 81 square meters. Use an exponent to express this area, including units.",
        fields: [
          { id: "expression", label: "Area expression", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["9^2", "9²"] },
          { id: "units", label: "Area units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["m^2", "m²", "square meters", "sq m"] },
        ],
        visualType: "exponentReference",
        hint: "Find the equal whole-number factors whose product is 81.",
        correctFeedback: "Correct. 81 square meters is 9^2 square meters because 9 × 9 = 81.",
        incorrectFeedback: "Find the side length of a square with area 81, write it to the second power, and include square-meter units.",
      },
      {
        id: "cube-edge-5",
        label: "4. Cube edge 5 in",
        prompt: "A cube has edge length 5 inches. Use an exponent to express its volume, including units.",
        fields: [
          { id: "expression", label: "Volume expression", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["5^3", "5³"] },
          { id: "units", label: "Volume units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["in^3", "in³", "cubic inches", "cu in"] },
        ],
        visualType: "exponentReference",
        hint: "Cube volume uses three equal edge-length factors and cubic units.",
        correctFeedback: "Correct. The volume is 5^3 cubic inches because 5 × 5 × 5 uses all three dimensions.",
        incorrectFeedback: "Use a third power for the three equal edge lengths, and include cubic-inch units.",
      },
      {
        id: "edge-from-six-cubed",
        label: "5. Volume 6^3 cm^3",
        prompt: "The volume of a cube is 6^3 cubic centimeters. What is its edge length, including units?",
        fields: [
          { id: "length", label: "Edge length", responseType: "number", placeholder: "Type edge length", answerKey: ["6"] },
          { id: "units", label: "Length units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["cm", "centimeter", "centimeters"] },
        ],
        visualType: "exponentReference",
        hint: "The base of the third-power expression gives the cube's edge length.",
        correctFeedback: "Correct. 6^3 means 6 × 6 × 6, so the cube's edge length is 6 centimeters.",
        incorrectFeedback: "Read the base of 6^3, then use linear centimeters rather than cubic centimeters for an edge length.",
      },
      {
        id: "cube-edge-s",
        label: "6. Cube edge s",
        prompt: "A cube has edge length s units. Use an exponent to write an expression for its volume, including units.",
        fields: [
          { id: "expression", label: "Volume expression", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["s^3", "s³"] },
          { id: "units", label: "Volume units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["units^3", "units³", "cubic units"] },
        ],
        visualType: "exponentReference",
        hint: "Multiply s by itself once for each of the cube's three dimensions.",
        correctFeedback: "Correct. The volume is s^3 cubic units because s × s × s uses all three edge lengths.",
        incorrectFeedback: "Use the variable s as the base, a third power, and cubic units.",
      },
      {
        id: "optional-both-powers",
        label: "Optional: Square and cube",
        prompt: "15,625 is both a perfect square and a perfect cube: 125^2 and 25^3. Find one or more different numbers that are both. Separate multiple numbers with commas.",
        responseType: "shortAnswer",
        inputLabel: "Numbers that are both perfect squares and perfect cubes",
        placeholder: "Type one or more numbers",
        dynamicAnswer: "perfectSquareAndCubeExamples",
        optional: true,
        visualType: "exponentReference",
        hint: "A number that is both can be written using a whole-number sixth power. Try a small whole-number base.",
        correctFeedback: "Correct. Every number you entered is both a perfect square and a perfect cube. These numbers are whole-number sixth powers.",
        incorrectFeedback: "Enter a different nonnegative whole number that has both an equal-factor square representation and an equal-factor cube representation.",
      },
    ],
  },
  {
    id: "teach-l18-1",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    activityTitle: "18.1: Exponent Review",
    sourceDirections: "Select the greater expression in each pair without calculating the value of either expression. Explain each choice.",
    pdfPage: 1,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "The three source pairs of expressions for comparison.",
    prompt: "Compare all three source expression pairs and explain how their structure shows which is greater.",
    responseType: "questionSet",
    questions: [
      {
        id: "ten-times-three",
        label: "1. 10 × 3 or 10^3",
        prompt: "Which expression is greater: 10 × 3 or 10^3? Choose without calculating both values.",
        responseType: "singleChoice",
        choices: [
          { id: "ten-times-three", label: "10 × 3" },
          { id: "ten-cubed", label: "10^3" },
        ],
        answerKey: ["ten-cubed"],
        reasoningPrompt: "Explain how the factors show which expression is greater.",
        reasoningConcepts: [["10", "factor", "cub"], ["10", "10", "3"]],
        visualType: "expressionComparison",
        hint: "An exponent of 3 means three factors of 10; it does not mean multiply 10 by 3.",
        correctFeedback: "Correct. 10^3 has three factors of 10, while 10 × 3 has only three groups of 10, so 10^3 is greater.",
        incorrectFeedback: "Interpret the exponent first: 10^3 means 10 × 10 × 10, not 10 × 3.",
      },
      {
        id: "thirteen-squared",
        label: "2. 13^2 or 12 × 12",
        prompt: "Which expression is greater: 13^2 or 12 × 12? Choose without calculating both values.",
        responseType: "singleChoice",
        choices: [
          { id: "thirteen-squared", label: "13^2" },
          { id: "twelve-squared", label: "12 × 12" },
        ],
        answerKey: ["thirteen-squared"],
        reasoningPrompt: "Explain how comparing equal-factor products shows which is greater.",
        reasoningConcepts: [["13", "12", "factor"], ["13", "13", "12"]],
        visualType: "expressionComparison",
        hint: "Rewrite 13^2 as 13 × 13, then compare each factor with 12.",
        correctFeedback: "Correct. 13^2 is 13 × 13. Both factors are greater than the corresponding factors in 12 × 12, so 13^2 is greater.",
        incorrectFeedback: "Compare 13 × 13 with 12 × 12 factor by factor; no full calculation is needed.",
      },
      {
        id: "six-groups-of-97",
        label: "3. Six 97s or five 97s",
        prompt: "Which expression is greater: 97 + 97 + 97 + 97 + 97 + 97 or 5 × 97? Choose without calculating.",
        responseType: "singleChoice",
        choices: [
          { id: "six-groups", label: "97 + 97 + 97 + 97 + 97 + 97" },
          { id: "five-groups", label: "5 × 97" },
        ],
        answerKey: ["six-groups"],
        reasoningPrompt: "Explain how the number of equal groups shows which expression is greater.",
        reasoningConcepts: [["six", "five", "97"], ["6", "5", "97"]],
        visualType: "expressionComparison",
        hint: "The repeated sum has six equal groups of 97. Compare that with five equal groups.",
        correctFeedback: "Correct. The repeated sum is 6 × 97, which is one more group of 97 than 5 × 97.",
        incorrectFeedback: "Rewrite the repeated addition as multiplication, then compare the number of equal groups.",
      },
    ],
  },
  {
    id: "teach-l18-3",
    lessonNumber: 18,
    section: "F",
    idea: "Idea 6",
    title: "Surface Area of a Cube",
    activityTitle: "18.3: Every Cube in the Whole World",
    sourceDirections: "Draw a net and write expressions that work for every cube with edge length s.",
    pdfPage: 2,
    cropPath: null,
    customVisual: "questionSetVisual",
    visualAlt: "Interactive net and symbolic cube reference for edge length s.",
    prompt: "Complete all four source tasks for a cube whose edge length is s units.",
    responseType: "questionSet",
    questions: [
      {
        id: "symbolic-net",
        label: "1. Draw a cube net",
        prompt: "Draw a net for a cube with edge length s.",
        responseType: "construction",
        dynamicAnswer: "validCubeNet",
        visualType: "labeledCubeNet",
        netStateId: "symbolic-cube",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Select six edge-connected squares that fold into a cube before submitting the net.",
        hint: "Use six equal squares connected along full edges, then test whether they fold into six different faces.",
        correctFeedback: "Correct. Your six-square arrangement is a valid net for a cube with edge length s.",
        incorrectFeedback: "Revise the six-square arrangement so it folds into all six faces without overlap.",
      },
      {
        id: "symbolic-face-area",
        label: "2. Area of each face",
        prompt: "Write an expression for the area of each face, and label every face of your net with that area.",
        fields: [
          { id: "faceArea", label: "Expression placed on every face", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["s^2", "s²"] },
          { id: "units", label: "Face-area units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["square units", "units^2", "units²"] },
        ],
        visualType: "labeledCubeNet",
        netStateId: "symbolic-cube",
        netLabelField: "faceArea",
        netLabelPosition: "center",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw a valid six-square cube net before labeling every face with its area.",
        hint: "Each square face has side lengths s and s.",
        correctFeedback: "Correct. Every square face has area s^2 square units, and the expression labels all six faces of your net.",
        incorrectFeedback: "Use the product s × s for one square face, write it with a second power, and include square units.",
      },
      {
        id: "symbolic-surface-area",
        label: "3. Surface area",
        prompt: "Write an expression for the cube's surface area, including units.",
        fields: [
          { id: "expression", label: "Surface-area expression", responseType: "shortAnswer", placeholder: "Type an expression", answerKey: ["6 x s^2", "6 × s^2", "6*s^2", "6(s^2)", "6 · s^2", "6 x s²", "6 × s²", "6*s²", "6(s²)", "6 · s²"] },
          { id: "units", label: "Surface-area units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["square units", "units^2", "units²"] },
        ],
        visualType: "cubeMetricReference",
        edgeLabel: "s units",
        netStateId: "symbolic-cube",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw a valid six-square net before writing the general surface-area expression.",
        hint: "A cube has six identical square faces, each with area s^2.",
        correctFeedback: "Correct. The surface area is 6 × s^2 square units because the cube has six faces of area s^2.",
        incorrectFeedback: "Multiply one face's area, s^2, by the six faces and use square units.",
      },
      {
        id: "symbolic-volume",
        label: "4. Volume",
        prompt: "Write an expression for the cube's volume, including units.",
        fields: [
          { id: "expression", label: "Volume expression", responseType: "shortAnswer", placeholder: "Type an exponent expression", answerKey: ["s^3", "s³", "s x s x s", "s × s × s", "s*s*s"] },
          { id: "units", label: "Volume units", responseType: "shortAnswer", placeholder: "Type units", answerKey: ["cubic units", "units^3", "units³"] },
        ],
        visualType: "cubeMetricReference",
        edgeLabel: "s units",
        netStateId: "symbolic-cube",
        requiredConstruction: "validCubeNet",
        requiredStateFeedback: "Draw a valid six-square net before writing the general volume expression.",
        hint: "Volume uses the cube's three equal edge lengths.",
        correctFeedback: "Correct. The volume is s^3 cubic units because s × s × s uses all three dimensions.",
        incorrectFeedback: "Use three factors of s, third-power notation, and cubic units.",
      },
    ],
  },
  {
    id: "teach-l19-2",
    lessonNumber: 19,
    section: "G",
    idea: "Idea 7",
    title: "Designing a Tent",
    activityTitle: "19.2: Tent Design - Part 2",
    sourceContext: "This follow-up uses your tent from 19.1 and two app-provided tents for the same number of campers.",
    sourceDirections: "Compare the three fabric estimates. Explain your own design, identify which tent uses the least and most fabric, and decide which change has the greatest effect.",
    pdfPage: 4,
    cropPath: null,
    visualAlt: "Three comparable tent designs for the same number of campers, with dimensions and fabric estimates.",
    blacklineMasters: unit1BlacklineMasters.tentPlanning,
    customVisual: "questionSetVisual",
    responseType: "questionSet",
    questions: [
      {
        id: "explain-design",
        label: "1. Explain your design",
        prompt: "Explain why you chose your tent design and how you found its fabric estimate.",
        responseType: "openResponse",
        inputLabel: "Your explanation",
        placeholder: "Explain your design and calculation",
        minLength: 24,
        answerConcepts: [
          ["floor", "area"],
          ["panel", "area"],
          ["surface", "area"],
          ["sleeping", "fabric"],
          ["height", "fabric"],
        ],
        answerConceptRequirements: [
          [["sleeping", "floor"], ["people", "floor"], ["capacity", "floor"], ["height", "design"], ["shape", "design"]],
          [["floor", "area"], ["panel", "area"], ["surface", "area"], ["roof", "wall"], ["fabric", "area"]],
        ],
        visualType: "tentComparison",
        requiredConstruction: "savedTentPlan",
        requiredStateFeedback: "Complete a valid design and fabric estimate in 19.1 before starting the comparison.",
        hint: "Name the capacity, shape, dimensions, and the panels you added for the total fabric area.",
        correctFeedback: "Your explanation connects the tent design to its fabric-area calculation.",
        incorrectFeedback: "Explain both why you chose the design and how its panel areas produce the fabric estimate.",
      },
      {
        id: "least-fabric",
        label: "2. Least fabric",
        prompt: "Which tent design uses the least fabric?",
        responseType: "singleChoice",
        choices: [
          { id: "own", label: "Your tent" },
          { id: "height-change", label: "Height-change tent" },
          { id: "floor-change", label: "Floor-change tent" },
        ],
        dynamicAnswer: "tentComparisonLeast",
        visualType: "tentComparison",
        requiredConstruction: "savedTentPlan",
        reasoningPrompt: "Why does that tent use the least fabric?",
        reasoningConcepts: [["fabric"], ["square", "feet"], ["surface", "area"]],
        reasoningConceptRequirements: [
          [["least"], ["smallest"], ["less"], ["lower"]],
          [["square", "feet"], ["surface", "area"], ["fabric", "area"], ["fabric", "total"]],
        ],
        hint: "Compare the three square-foot estimates, including the floor in each design.",
        correctFeedback: "Correct. You identified a design with the smallest total panel area.",
        incorrectFeedback: "Compare all three fabric estimates and choose the smallest total.",
      },
      {
        id: "most-fabric",
        label: "3. Most fabric",
        prompt: "Which tent design uses the most fabric?",
        responseType: "singleChoice",
        choices: [
          { id: "own", label: "Your tent" },
          { id: "height-change", label: "Height-change tent" },
          { id: "floor-change", label: "Floor-change tent" },
        ],
        dynamicAnswer: "tentComparisonMost",
        visualType: "tentComparison",
        requiredConstruction: "savedTentPlan",
        reasoningPrompt: "Why does that tent use the most fabric?",
        reasoningConcepts: [["fabric"], ["square", "feet"], ["surface", "area"]],
        reasoningConceptRequirements: [
          [["most"], ["largest"], ["more"], ["higher"]],
          [["square", "feet"], ["surface", "area"], ["fabric", "area"], ["fabric", "total"]],
        ],
        hint: "Compare all three totals rather than only one dimension.",
        correctFeedback: "Correct. You identified a design with the largest total panel area.",
        incorrectFeedback: "Compare all three fabric estimates and choose the largest total.",
      },
      {
        id: "largest-impact",
        label: "4. Greatest impact",
        prompt: "Which change from your tent has the greater effect on the amount of fabric needed?",
        responseType: "singleChoice",
        choices: [
          { id: "height-change", label: "Changing the height" },
          { id: "floor-change", label: "Changing the floor dimensions" },
        ],
        dynamicAnswer: "tentComparisonImpact",
        visualType: "tentComparison",
        requiredConstruction: "savedTentPlan",
        reasoningPrompt: "Use the changes in square feet to explain your choice.",
        reasoningConcepts: [["square", "feet"], ["fabric"], ["difference"], ["change"]],
        reasoningConceptRequirements: [
          [["difference"], ["change"]],
          [["larger"], ["greater"], ["more"]],
          [["square", "feet"], ["square", "foot"], ["surface", "area"], ["fabric", "area"]],
        ],
        reasoningRequiresNumber: true,
        hint: "Find how far each comparison estimate is from your tent's estimate, then compare the two differences.",
        correctFeedback: "Correct. You compared the size of each change in fabric area, not just the new totals.",
        incorrectFeedback: "Compare each alternative with your tent and choose the larger absolute change in square feet.",
      },
    ],
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
  "teach-l5": "lesson-05-p002-height-examples-5-2.png",
  "teach-l6": "lesson-06-p001-area-parallelograms-6-2.png",
  "teach-l7": "lesson-07-p001-same-parallelograms.png",
  "teach-l8": "lesson-08-p001-composing-parallelograms.png",
  "teach-l9": "lesson-09-p002-triangle-formula.png",
  "teach-l10": "lesson-10-p002-triangle-heights.png",
  "teach-l11": "lesson-11-p002-polygons.png",
  "teach-l12": "lesson-12-p002-snap-cubes.png",
  "teach-l13": null,
  "teach-l14": null,
  "teach-l15": null,
  "teach-l16": null,
  "teach-l17": "lesson-17-p001-perfect-squares-cubes.png",
  "teach-l18": null,
  "teach-l19": null,
  "teach-l2-2": null,
  "teach-l2-3": null,
  "teach-l3-2": "lesson-03-p001-on-grid-3-2.png",
  "teach-l3-3": "lesson-03-p002-off-grid-3-3.png",
  "teach-l4-2": "lesson-04-p002-area-parallelogram-4-2.png",
  "teach-l4-3": "lesson-04-p002-lots-parallelograms-4-3.png",
  "teach-l5-1": "lesson-05-p001-starting-parallelogram.png",
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
  "teach-l13-2": null,
  "teach-l13-3": null,
  "teach-l14-2": null,
  "teach-l15-1": null,
  "teach-l15-2": null,
  "teach-l16-2": null,
  "teach-l16-3": null,
  "teach-l17-2": null,
  "teach-l17-3": "lesson-17-p002-perfect-cubes-17-3.png",
  "teach-l17-4": null,
  "teach-l18-1": null,
  "teach-l18-3": null,
  "teach-l19-2": null,
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
  if (Number.isFinite(card.activityOrder)) return card.activityOrder;
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

const standardSleepingBag = Object.freeze({ lengthInches: 74, widthInches: 34 });

const tentDesignerOptions = Object.freeze({
  capacity: [
    { id: "1", label: "1 camper" },
    { id: "2", label: "2 campers" },
    { id: "3", label: "3 campers" },
    { id: "4", label: "4 campers" },
  ],
  arrangement: [
    { id: "side-by-side", label: "Side by side" },
    { id: "two-rows", label: "Up to 2 per row" },
  ],
  height: [
    { id: "3", label: "3 ft · sit or crawl" },
    { id: "4", label: "4 ft · kneel" },
    { id: "5", label: "5 ft · stoop" },
    { id: "6", label: "6 ft · stand" },
    { id: "7", label: "7 ft · roam" },
  ],
  style: [
    { id: "a-frame", label: "A-frame" },
    { id: "wall", label: "Wall tent" },
  ],
});

function tentPlanField(cardId = "teach-l19") {
  return state.teachCustomResponses[cardId] || {};
}

function tentBagGrid(capacity, arrangement) {
  if (!Number.isInteger(capacity) || capacity < 1 || capacity > 4) return { rows: 0, columns: 0 };
  if (arrangement === "two-rows") {
    return { rows: Math.ceil(capacity / 2), columns: Math.min(capacity, 2) };
  }
  if (arrangement === "side-by-side") return { rows: 1, columns: capacity };
  return { rows: 0, columns: 0 };
}

function tentRequiredFloor(capacity, arrangement) {
  const grid = tentBagGrid(capacity, arrangement);
  const length = grid.rows * standardSleepingBag.lengthInches / 12;
  const width = grid.columns * standardSleepingBag.widthInches / 12;
  return {
    ...grid,
    length,
    width,
    recommendedLength: Math.ceil(length),
    recommendedWidth: Math.ceil(width),
  };
}

function tentPlanFromResponse(response = tentPlanField()) {
  const capacity = Number(response.tentCapacity);
  const height = Number(response.tentHeight);
  const arrangement = tentDesignerOptions.arrangement.some((option) => option.id === response.tentArrangement)
    ? response.tentArrangement
    : "";
  const style = tentDesignerOptions.style.some((option) => option.id === response.tentStyle)
    ? response.tentStyle
    : "";
  const floorLength = Number(response.tentFloorLength);
  const floorWidth = Number(response.tentFloorWidth);
  const requiredFloor = tentRequiredFloor(capacity, arrangement);
  const complete = Number.isInteger(capacity) && capacity >= 1 && capacity <= 4
    && Number.isInteger(height) && height >= 3 && height <= 7
    && Boolean(arrangement) && Boolean(style)
    && Number.isInteger(floorLength) && floorLength >= 3 && floorLength <= 30
    && Number.isInteger(floorWidth) && floorWidth >= 3 && floorWidth <= 30;
  const floorFits = complete
    && floorLength + 1e-9 >= requiredFloor.length
    && floorWidth + 1e-9 >= requiredFloor.width;
  return {
    capacity,
    height,
    arrangement,
    style,
    floorLength,
    floorWidth,
    requiredFloor,
    complete,
    floorFits,
    valid: complete && floorFits,
  };
}

function tentPlanForCard(card) {
  return tentPlanFromResponse(tentPlanField(card?.id === "teach-l19-2" ? "teach-l19" : "teach-l19"));
}

function roundTentMeasure(value) {
  return Math.round(value * 10) / 10;
}

function formatTentMeasure(value) {
  return Number.isFinite(value) ? String(roundTentMeasure(value)) : "—";
}

function tentFabricDetails(plan) {
  if (!plan?.valid) return null;
  const { floorLength: length, floorWidth: width, height, style } = plan;
  const floor = length * width;
  if (style === "a-frame") {
    // This is an estimate task. Use the same tenth-foot slant shown to the student
    // so every displayed multiplication reproduces the graded total.
    const slant = roundTentMeasure(Math.sqrt((width / 2) ** 2 + height ** 2));
    const roofPair = 2 * length * slant;
    const endPair = width * height;
    return {
      floor,
      slant,
      roofPair,
      endPair,
      total: floor + roofPair + endPair,
      parts: [floor, roofPair, endPair],
    };
  }
  const roof = length * width;
  const longWalls = 2 * length * height;
  const endWalls = 2 * width * height;
  return {
    floor,
    roof,
    longWalls,
    endWalls,
    total: floor + roof + longWalls + endWalls,
    parts: [floor, roof, longWalls, endWalls],
  };
}

function tentFabricTotal(plan) {
  return tentFabricDetails(plan)?.total ?? null;
}

function tentDesignLabel(designId) {
  return {
    own: "your tent",
    "height-change": "the height-change tent",
    "floor-change": "the floor-change tent",
  }[designId] || "the selected tent";
}

function tentComparisonDesigns() {
  const own = tentPlanFromResponse(tentPlanField("teach-l19"));
  if (!own.valid) return [];
  const changedHeight = own.height === 3 ? 7 : 3;
  return [
    { ...own, id: "own", label: "Your tent", change: "Your 19.1 design" },
    {
      ...own,
      id: "height-change",
      label: "Height-change tent",
      height: changedHeight,
      change: `Same floor and style; height changed to ${changedHeight} ft`,
    },
    {
      ...own,
      id: "floor-change",
      label: "Floor-change tent",
      floorLength: own.floorLength + 2,
      floorWidth: own.floorWidth + 2,
      change: "Same height and style; floor is 2 ft longer and 2 ft wider",
    },
  ].map((design) => ({ ...design, fabric: tentFabricTotal({ ...design, valid: true }) }));
}

function tentComparisonAnswerIds(mode) {
  const designs = tentComparisonDesigns();
  if (!designs.length) return [];
  if (mode === "impact") {
    const own = designs.find((design) => design.id === "own");
    const heightChange = designs.find((design) => design.id === "height-change");
    const floorChange = designs.find((design) => design.id === "floor-change");
    const heightDifference = Math.abs(heightChange.fabric - own.fabric);
    const floorDifference = Math.abs(floorChange.fabric - own.fabric);
    const greatest = Math.max(heightDifference, floorDifference);
    return [
      Math.abs(heightDifference - greatest) < 0.05 ? "height-change" : "",
      Math.abs(floorDifference - greatest) < 0.05 ? "floor-change" : "",
    ].filter(Boolean);
  }
  const target = mode === "least"
    ? Math.min(...designs.map((design) => design.fabric))
    : Math.max(...designs.map((design) => design.fabric));
  return designs.filter((design) => Math.abs(design.fabric - target) < 0.05).map((design) => design.id);
}

function tentPlanHasInteraction() {
  const response = tentPlanField("teach-l19");
  return ["tentCapacity", "tentArrangement", "tentHeight", "tentStyle", "tentFloorLength", "tentFloorWidth"]
    .some((field) => String(response[field] || "").length > 0);
}

function tentPartOneQuestion(questionId) {
  const card = unit1TeachCards.find((entry) => entry.id === "teach-l19");
  return card?.questions?.find((question) => question.id === questionId) || null;
}

function tentPlanIsSavedFor(card) {
  const plan = tentPlanFromResponse(tentPlanField("teach-l19"));
  const partOne = unit1TeachCards.find((entry) => entry.id === "teach-l19");
  const buildQuestion = tentPartOneQuestion("build-plan");
  if (!plan.valid || !partOne || !buildQuestion
    || !isTeachQuestionSubmitted(partOne, buildQuestion.id)
    || !questionSetQuestionIsCorrect(partOne, buildQuestion)) return false;
  if (card.id !== "teach-l19-2") return true;
  const fabricQuestion = tentPartOneQuestion("fabric-estimate");
  return Boolean(fabricQuestion
    && isTeachQuestionSubmitted(partOne, fabricQuestion.id)
    && questionSetQuestionIsCorrect(partOne, fabricQuestion));
}

function invalidateTentPlanSubmissions() {
  for (const cardId of ["teach-l19", "teach-l19-2"]) {
    const card = unit1TeachCards.find((entry) => entry.id === cardId);
    (card?.questions || []).forEach((question) => {
      if (question.preserveWhenTentChanges) return;
      state.teachQuestionSubmitted[teachQuestionStateKey(cardId, question.id)] = false;
    });
  }
}

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

function enforceTextareaValueLimit(input) {
  const value = String(input?.value ?? "");
  if (input?.tagName !== "TEXTAREA") return value;
  const limitedValue = value.slice(0, TEXTAREA_MAX_LENGTH);
  if (value !== limitedValue) input.value = limitedValue;
  return limitedValue;
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
    { ...piece.initial, included: false },
  ]));
}

function tangramWorkspaceQuestionId(card, questionId = "") {
  if (questionId) return questionId;
  if (card?.responseType === "questionSet") return questionSetActiveId(card);
  return card?.id || "legacy";
}

function tangramWorkspaceKey(card, questionId = "") {
  return `${card?.id || "legacy"}:${tangramWorkspaceQuestionId(card, questionId)}`;
}

function getTangramPieces(card, questionId = "") {
  const key = tangramWorkspaceKey(card, questionId);
  if (!state.teachTangramWorkspaces[key]) state.teachTangramWorkspaces[key] = initialTangramPieces();
  return state.teachTangramWorkspaces[key];
}

function resetTangramPieces(card, questionId = "") {
  state.teachTangramWorkspaces[tangramWorkspaceKey(card, questionId)] = initialTangramPieces();
  state.teachTangramSelectedPiece = "square";
}

function tangramPieceById(pieceId) {
  return tangramPieceDefinitions.find((piece) => piece.id === pieceId);
}

function tangramPieceTransform(card, pieceId, questionId = "") {
  const definition = tangramPieceById(pieceId);
  const piece = getTangramPieces(card, questionId)[pieceId] || definition.initial;
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle} ${definition.centerX} ${definition.centerY})`;
}

function renderTangramWorkspace(card) {
  const questionId = tangramWorkspaceQuestionId(card);
  const question = card?.responseType === "questionSet" ? questionSetDefinition(card, questionId) : null;
  const selectedPiece = state.teachTangramSelectedPiece;
  const workspace = getTangramPieces(card, questionId);
  const selectedIsIncluded = Boolean(workspace[selectedPiece]?.included);
  const includedCount = Object.values(workspace).filter((piece) => piece.included).length;
  const selectionButtons = tangramPieceDefinitions.map((piece) => `
    <button
      class="page-chip tangram-select-button ${piece.id === selectedPiece ? "is-active" : ""} ${workspace[piece.id]?.included ? "is-included" : ""}"
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
    const included = workspace[piece.id]?.included ? " is-included" : " is-set-aside";
    return `
      <g
        class="tangram-piece-group${included}"
        data-tangram-piece="${piece.id}"
        transform="${tangramPieceTransform(card, piece.id, questionId)}"
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
        ${question ? `<p class="tangram-active-task"><strong>${escapeHtml(question.label)}:</strong> ${escapeHtml(question.prompt)}</p>` : ""}
        <div class="tangram-selectors" role="group" aria-label="Select a tangram piece">
          ${selectionButtons}
        </div>
        <div class="tangram-actions" role="group" aria-label="Tangram controls">
          <button class="hint-button" type="button" data-tangram-include>${selectedIsIncluded ? "Set selected aside" : "Use selected in shape"}</button>
          <button class="hint-button" type="button" data-tangram-rotate="-45">Rotate left</button>
          <button class="hint-button" type="button" data-tangram-rotate="45">Rotate right</button>
          <button class="hint-button" type="button" data-tangram-reset>Reset pieces</button>
        </div>
      </div>
      <svg
        class="tangram-stage"
        data-tangram-stage
        data-tangram-card="${card?.id || ""}"
        data-tangram-question="${escapeHtml(questionId)}"
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
      <p class="tangram-caption">Pieces marked for the construction: ${includedCount} of ${tangramPieceDefinitions.length}. The workspace uses the source set: 1 square, 4 small right triangles, 1 medium right triangle, and 2 large right triangles.</p>
    </section>
  `;
}

function tangramSavedField(questionId) {
  return `tangramSaved_${questionId}`;
}

function tangramPieceArea(pieceId) {
  return parseMathNumber(tangramPieceById(pieceId)?.areaText) || 0;
}

function tangramTransformedPoints(card, pieceId, questionId = "") {
  const definition = tangramPieceById(pieceId);
  const piece = getTangramPieces(card, questionId)[pieceId];
  if (!definition || !piece) return [];
  const angle = piece.angle * Math.PI / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return definition.points.split(" ").map((entry) => {
    const [sourceX, sourceY] = entry.split(",").map(Number);
    const offsetX = sourceX - definition.centerX;
    const offsetY = sourceY - definition.centerY;
    return {
      x: piece.x + definition.centerX + offsetX * cos - offsetY * sin,
      y: piece.y + definition.centerY + offsetX * sin + offsetY * cos,
    };
  });
}

function tangramPolygonArea(points) {
  return Math.abs(points.reduce((total, point, index) => {
    const next = points[(index + 1) % points.length];
    return total + point.x * next.y - next.x * point.y;
  }, 0)) / 2;
}

function tangramProjection(points, axis) {
  const values = points.map((point) => point.x * axis.x + point.y * axis.y);
  return { min: Math.min(...values), max: Math.max(...values) };
}

function tangramAxes(points) {
  return points.map((point, index) => {
    const next = points[(index + 1) % points.length];
    const dx = next.x - point.x;
    const dy = next.y - point.y;
    const length = Math.hypot(dx, dy) || 1;
    return { x: -dy / length, y: dx / length };
  });
}

function tangramPolygonsOverlap(first, second) {
  return [...tangramAxes(first), ...tangramAxes(second)].every((axis) => {
    const a = tangramProjection(first, axis);
    const b = tangramProjection(second, axis);
    return Math.min(a.max, b.max) - Math.max(a.min, b.min) > 3;
  });
}

function pointToTangramSegmentDistance(point, start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lengthSquared = dx * dx + dy * dy;
  if (!lengthSquared) return Math.hypot(point.x - start.x, point.y - start.y);
  const amount = clampNumber(((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared, 0, 1);
  return Math.hypot(point.x - (start.x + amount * dx), point.y - (start.y + amount * dy));
}

function tangramPointTouchesBoundary(point, polygon) {
  return polygon.some((start, index) => pointToTangramSegmentDistance(point, start, polygon[(index + 1) % polygon.length]) <= 5);
}

function tangramPolygonsShareEdge(first, second) {
  const firstMatches = first.filter((point) => tangramPointTouchesBoundary(point, second)).length;
  const secondMatches = second.filter((point) => tangramPointTouchesBoundary(point, first)).length;
  return firstMatches >= 2 || secondMatches >= 2;
}

function tangramIncludedPieceIds(card, questionId = "") {
  const pieces = getTangramPieces(card, questionId);
  return tangramPieceDefinitions.map((piece) => piece.id).filter((pieceId) => pieces[pieceId]?.included);
}

function tangramIncludedPiecesAreConnected(card, pieceIds, questionId = "") {
  if (pieceIds.length < 2) return pieceIds.length === 1;
  const polygons = Object.fromEntries(pieceIds.map((pieceId) => [pieceId, tangramTransformedPoints(card, pieceId, questionId)]));
  const visited = new Set([pieceIds[0]]);
  const queue = [pieceIds[0]];
  while (queue.length) {
    const current = queue.shift();
    pieceIds.forEach((candidate) => {
      if (visited.has(candidate) || !tangramPolygonsShareEdge(polygons[current], polygons[candidate])) return;
      visited.add(candidate);
      queue.push(candidate);
    });
  }
  return visited.size === pieceIds.length;
}

function tangramConstructionSignature(card, questionId = "") {
  const pieceIds = tangramIncludedPieceIds(card, questionId);
  const pieces = getTangramPieces(card, questionId);
  if (!pieceIds.length) return "";
  const points = pieceIds.flatMap((pieceId) => tangramTransformedPoints(card, pieceId, questionId));
  const minX = Math.min(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  return pieceIds.map((pieceId) => {
    const piece = pieces[pieceId];
    return `${pieceId}:${Math.round((piece.x - minX) / 6)}:${Math.round((piece.y - minY) / 6)}:${Math.round(piece.angle / 45)}`;
  }).sort().join("|");
}

function tangramConstructionAnalysis(card, question) {
  const questionId = question.id;
  const pieces = getTangramPieces(card, questionId);
  const pieceIds = tangramIncludedPieceIds(card, questionId);
  const polygons = Object.fromEntries(pieceIds.map((pieceId) => [pieceId, tangramTransformedPoints(card, pieceId, questionId)]));
  const overlap = pieceIds.some((pieceId, index) => pieceIds.slice(index + 1).some((otherId) => tangramPolygonsOverlap(polygons[pieceId], polygons[otherId])));
  const connected = pieceIds.length > 0 && tangramIncludedPiecesAreConnected(card, pieceIds, questionId);
  const area = pieceIds.reduce((total, pieceId) => total + tangramPieceArea(pieceId), 0);
  const moved = pieceIds.some((pieceId) => {
    const piece = pieces[pieceId];
    const initial = tangramPieceById(pieceId).initial;
    return Math.abs(piece.x - initial.x) > 4 || Math.abs(piece.y - initial.y) > 4 || piece.angle !== initial.angle;
  });
  const allPoints = pieceIds.flatMap((pieceId) => polygons[pieceId]);
  const width = allPoints.length ? Math.max(...allPoints.map((point) => point.x)) - Math.min(...allPoints.map((point) => point.x)) : 0;
  const height = allPoints.length ? Math.max(...allPoints.map((point) => point.y)) - Math.min(...allPoints.map((point) => point.y)) : 0;
  const polygonArea = pieceIds.reduce((total, pieceId) => total + tangramPolygonArea(polygons[pieceId]), 0);
  const boundingArea = width * height;
  const square = width > 0 && height > 0
    && Math.abs(width - height) <= Math.max(8, Math.min(width, height) * 0.06)
    && Math.abs(boundingArea - polygonArea) <= polygonArea * 0.08;
  const targetArea = Number(question.targetArea);
  const areaCorrect = Number.isFinite(targetArea) && Math.abs(area - targetArea) < 1e-9;
  const enoughPieces = pieceIds.length >= (Number(question.minimumPieces) || 1);
  const allPieces = !question.requireAllPieces || pieceIds.length === tangramPieceDefinitions.length;
  const squareRule = (!question.requireSquare || square) && (!question.rejectSquare || !square);
  const signature = tangramConstructionSignature(card, questionId);
  const comparisonSignature = question.differentFromQuestionId
    ? String(getTeachCustomResponse(card)[tangramSavedField(question.differentFromQuestionId)] || "")
    : "";
  const different = !question.differentFromQuestionId || (comparisonSignature && signature !== comparisonSignature);
  return {
    pieceIds,
    area,
    overlap,
    connected,
    moved,
    square,
    signature,
    valid: enoughPieces && allPieces && moved && connected && !overlap && areaCorrect && squareRule && different,
  };
}

function markTangramWorkspaceChanged(card, questionId = "") {
  const activeQuestionId = tangramWorkspaceQuestionId(card, questionId);
  const question = card?.responseType === "questionSet" ? questionSetDefinition(card, activeQuestionId) : null;
  if (question?.dynamicAnswer !== "tangramConstruction") return;
  const response = { ...getTeachCustomResponse(card) };
  delete response[tangramSavedField(activeQuestionId)];
  state.teachCustomResponses[card.id] = response;
  state.teachQuestionSubmitted[teachQuestionStateKey(card.id, activeQuestionId)] = false;
}

function tangramConstructionFeedback(card, question) {
  const saved = String(getTeachCustomResponse(card)[tangramSavedField(question.id)] || "");
  if (saved && question.requireAreaAnswer
    && !answerMatches(questionSetValue(card, question.id, "area"), String(question.targetArea))) {
    return `Your construction is a valid square. Recheck its area using the areas of all ${tangramPieceDefinitions.length} source pieces.`;
  }
  if (saved) return question.correctFeedback;
  const analysis = tangramConstructionAnalysis(card, question);
  if (!analysis.pieceIds.length) return "Mark at least two pieces as used, then compose them in the workspace.";
  if (analysis.pieceIds.length < (Number(question.minimumPieces) || 1)) return `Use at least ${question.minimumPieces} pieces in this composition.`;
  if (question.requireAllPieces && analysis.pieceIds.length !== tangramPieceDefinitions.length) return "The optional square must use all eight source pieces.";
  if (!analysis.moved) return "Move or turn the selected pieces to make the requested new shape before submitting.";
  if (analysis.overlap) return "At least two used pieces overlap. Move them so their interiors do not overlap.";
  if (!analysis.connected) return "The used pieces do not yet form one shape. Join them along complete edges.";
  if (Math.abs(analysis.area - Number(question.targetArea)) > 1e-9) return `The pieces in this construction total ${analysis.area} square units, not ${question.targetArea}.`;
  if (question.rejectSquare && analysis.square) return "The area is right, but the source asks for a shape that is not a square.";
  if (question.requireSquare && !analysis.square) return "All pieces are present, but the outside boundary is not yet one square without gaps.";
  if (question.differentFromQuestionId) return "This arrangement matches the saved Question 3 construction. Change the piece set or the relative arrangement.";
  return question.incorrectFeedback;
}

const gridTriangleFitStage = { width: 760, height: 420 };
const gridTriangleFitTarget = { x: 500, y: 95, size: 210 };
const gridTriangleFitDefinitions = [
  { id: "triangle-1", label: "Triangle 1", colorClass: "is-one", initial: { x: 30, y: 45, angle: 0 } },
  { id: "triangle-2", label: "Triangle 2", colorClass: "is-two", initial: { x: 60, y: 220, angle: 180 } },
  { id: "triangle-3", label: "Triangle 3", colorClass: "is-three", initial: { x: 235, y: 45, angle: 0 } },
  { id: "triangle-4", label: "Triangle 4", colorClass: "is-four", initial: { x: 265, y: 220, angle: 180 } },
];
const gridTriangleFitLocalPoints = [
  { x: 0, y: 0 },
  { x: 180, y: 0 },
  { x: 0, y: 90 },
];
const gridTriangleFitCenter = { x: 60, y: 30 };

function initialGridTriangleFitPieces() {
  return Object.fromEntries(gridTriangleFitDefinitions.map((piece) => [piece.id, { ...piece.initial }]));
}

function getGridTriangleFitPieces() {
  if (!state.teachGridTrianglePieces) state.teachGridTrianglePieces = initialGridTriangleFitPieces();
  return state.teachGridTrianglePieces;
}

function gridTriangleFitTransform(pieceId) {
  const piece = getGridTriangleFitPieces()[pieceId];
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle} ${gridTriangleFitCenter.x} ${gridTriangleFitCenter.y})`;
}

function gridTriangleFitPoints(pieceId) {
  const piece = getGridTriangleFitPieces()[pieceId];
  const angle = piece.angle * Math.PI / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return gridTriangleFitLocalPoints.map((point) => {
    const offsetX = point.x - gridTriangleFitCenter.x;
    const offsetY = point.y - gridTriangleFitCenter.y;
    return {
      x: piece.x + gridTriangleFitCenter.x + offsetX * cos - offsetY * sin,
      y: piece.y + gridTriangleFitCenter.y + offsetX * sin + offsetY * cos,
    };
  });
}

function gridTriangleFitAnalysis() {
  const target = gridTriangleFitTarget;
  const polygons = Object.fromEntries(gridTriangleFitDefinitions.map((piece) => [piece.id, gridTriangleFitPoints(piece.id)]));
  const insideIds = gridTriangleFitDefinitions.filter((piece) => polygons[piece.id].every((point) => (
    point.x >= target.x - 1 && point.x <= target.x + target.size + 1
      && point.y >= target.y - 1 && point.y <= target.y + target.size + 1
  ))).map((piece) => piece.id);
  const overlap = gridTriangleFitDefinitions.some((piece, index) => (
    gridTriangleFitDefinitions.slice(index + 1).some((other) => tangramPolygonsOverlap(polygons[piece.id], polygons[other.id]))
  ));
  return {
    insideIds,
    overlap,
    valid: insideIds.length === gridTriangleFitDefinitions.length && !overlap,
  };
}

function gridTriangleFitWasChanged() {
  const pieces = getGridTriangleFitPieces();
  return gridTriangleFitDefinitions.some((definition) => {
    const piece = pieces[definition.id];
    return piece.x !== definition.initial.x || piece.y !== definition.initial.y || piece.angle !== definition.initial.angle;
  });
}

function markGridTriangleFitChanged(cardId = "teach-l3-2-extension") {
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function resetGridTriangleFit(cardId = "teach-l3-2-extension") {
  state.teachGridTrianglePieces = initialGridTriangleFitPieces();
  state.teachGridTriangleSelectedPiece = "triangle-1";
  markGridTriangleFitChanged(cardId);
}

function gridTriangleFitFeedback() {
  const analysis = gridTriangleFitAnalysis();
  if (analysis.insideIds.length < gridTriangleFitDefinitions.length) {
    return `${analysis.insideIds.length} of 4 triangles are completely inside Figure D. Move every vertex of each remaining triangle inside the outline.`;
  }
  if (analysis.overlap) return "All four triangles are inside Figure D, but at least two overlap. Separate their interiors before submitting again.";
  return "All four triangles are inside Figure D without overlaps.";
}

function renderGridTriangleFitWorkspace(card) {
  const selectedId = state.teachGridTriangleSelectedPiece;
  const analysis = gridTriangleFitAnalysis();
  const selectors = gridTriangleFitDefinitions.map((piece) => `
    <button
      class="page-chip grid-triangle-select ${piece.id === selectedId ? "is-active" : ""}"
      type="button"
      data-grid-triangle-select="${piece.id}"
      aria-pressed="${piece.id === selectedId}"
    >${escapeHtml(piece.label)}</button>
  `).join("");
  const pieces = gridTriangleFitDefinitions.map((piece) => `
    <g
      class="grid-triangle-piece-group ${piece.colorClass} ${piece.id === selectedId ? "is-selected" : ""}"
      data-grid-triangle-piece="${piece.id}"
      transform="${gridTriangleFitTransform(piece.id)}"
      role="button"
      tabindex="0"
      aria-label="${escapeHtml(piece.label)} from Figure C"
    >
      <title>${escapeHtml(piece.label)} from Figure C</title>
      <polygon points="0,0 180,0 0,90"></polygon>
      <circle cx="60" cy="30" r="5"></circle>
    </g>
  `).join("");
  return `
    <section class="grid-triangle-fit-workspace" aria-label="Rearrange the four triangles from Figure C inside Figure D">
      <div class="grid-triangle-fit-toolbar">
        <div class="grid-triangle-fit-selectors" role="group" aria-label="Select a triangle">${selectors}</div>
        <div class="grid-triangle-fit-actions" role="group" aria-label="Triangle controls">
          <button class="hint-button" type="button" data-grid-triangle-rotate="-90">Rotate left</button>
          <button class="hint-button" type="button" data-grid-triangle-rotate="90">Rotate right</button>
          <button class="hint-button" type="button" data-grid-triangle-reset>Reset triangles</button>
        </div>
      </div>
      <svg class="grid-triangle-fit-stage" data-grid-triangle-stage viewBox="0 0 ${gridTriangleFitStage.width} ${gridTriangleFitStage.height}" role="img" aria-label="Four movable right triangles beside Figure D, which is rotated without resizing so its sides align with the workspace.">
        <rect class="grid-triangle-fit-board" x="1" y="1" width="758" height="418"></rect>
        <text class="grid-triangle-fit-label" x="220" y="28" text-anchor="middle">Four triangles from Figure C</text>
        <text class="grid-triangle-fit-label" x="605" y="68" text-anchor="middle">Figure D (rotated, not resized)</text>
        <rect class="grid-triangle-fit-target" x="${gridTriangleFitTarget.x}" y="${gridTriangleFitTarget.y}" width="${gridTriangleFitTarget.size}" height="${gridTriangleFitTarget.size}"></rect>
        ${pieces}
      </svg>
      <p class="grid-triangle-fit-status" aria-live="polite">${analysis.insideIds.length} of 4 triangles completely inside Figure D${analysis.overlap ? "; overlap detected" : ""}.</p>
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

function quadrilateralExtensionPoints(card) {
  const value = getTeachCustomResponse(card).extensionPoints;
  if (!Array.isArray(value)) return [];
  return value.filter((point) => (
    Array.isArray(point)
    && point.length === 2
    && point.every((coordinate) => Number.isFinite(coordinate))
  )).slice(0, 4);
}

function quadrilateralExtensionDistanceSquared(pointA, pointB) {
  return (pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2;
}

function quadrilateralExtensionTriangleSignature(points, indexes) {
  return [
    quadrilateralExtensionDistanceSquared(points[indexes[0]], points[indexes[1]]),
    quadrilateralExtensionDistanceSquared(points[indexes[1]], points[indexes[2]]),
    quadrilateralExtensionDistanceSquared(points[indexes[2]], points[indexes[0]]),
  ].sort((a, b) => a - b);
}

function quadrilateralExtensionEvaluation(card) {
  const points = quadrilateralExtensionPoints(card);
  const response = getTeachCustomResponse(card);
  const diagonal = response.extensionDiagonal;
  const rule = normalizeAnswer(response.extensionRule);
  if (points.length !== 4 || !["0-2", "1-3"].includes(diagonal)) {
    return { complete: false, congruent: false, ruleStrong: false };
  }
  const triangleIndexes = diagonal === "0-2"
    ? [[0, 1, 2], [0, 2, 3]]
    : [[1, 2, 3], [1, 3, 0]];
  const first = quadrilateralExtensionTriangleSignature(points, triangleIndexes[0]);
  const second = quadrilateralExtensionTriangleSignature(points, triangleIndexes[1]);
  const congruent = first.every((length, index) => length === second[index]);
  const ruleStrong = rule.includes("parallelogram") || (rule.includes("opposite") && rule.includes("parallel"));
  return { complete: true, congruent, ruleStrong };
}

function quadrilateralExtensionFeedback(card) {
  const questionId = "optional-extension";
  if (!isTeachQuestionSubmitted(card, questionId)) {
    return "Build a quadrilateral, choose a diagonal, write a rule, and submit when you want feedback.";
  }
  const evaluation = quadrilateralExtensionEvaluation(card);
  if (!evaluation.complete) return "Place four vertices and choose one diagonal before submitting the optional challenge.";
  if (!normalizeAnswer(getTeachCustomResponse(card).extensionRule)) {
    return "Add a rule about quadrilaterals that can be decomposed into two identical triangles.";
  }
  if (!evaluation.congruent) {
    return "This diagonal does not make two identical triangles. Adjust the vertices or test the other diagonal, then revise your rule.";
  }
  if (!evaluation.ruleStrong) {
    return "Your drawing works. Strengthen the rule by connecting it to parallelograms or to both pairs of opposite sides being parallel.";
  }
  return "Your diagonal makes two triangles with the same three side lengths. A parallelogram always works because either diagonal splits it into two identical triangles.";
}

function renderQuadrilateralExtension(card) {
  const points = quadrilateralExtensionPoints(card);
  const response = getTeachCustomResponse(card);
  const diagonal = response.extensionDiagonal;
  const polygon = points.length >= 2
    ? `<polyline class="quadrilateral-extension-outline" points="${points.map(([x, y]) => `${x},${y}`).join(" ")}${points.length === 4 ? ` ${points[0][0]},${points[0][1]}` : ""}"></polyline>`
    : "";
  const segmentIndexes = diagonal?.split("-").map(Number) || [];
  const segment = points.length === 4 && segmentIndexes.length === 2
    ? `<line class="quadrilateral-extension-segment" x1="${points[segmentIndexes[0]][0]}" y1="${points[segmentIndexes[0]][1]}" x2="${points[segmentIndexes[1]][0]}" y2="${points[segmentIndexes[1]][1]}"></line>`
    : "";
  const submitted = isTeachQuestionSubmitted(card, "optional-extension");
  const evaluation = quadrilateralExtensionEvaluation(card);
  const feedbackClass = submitted ? (evaluation.complete && evaluation.congruent && evaluation.ruleStrong ? "is-correct" : "is-incorrect") : "";
  return `
    <section class="quadrilateral-extension">
      <button class="hint-button quadrilateral-extension-toggle" type="button" data-quadrilateral-extension-toggle="${card.id}" aria-expanded="${state.teachQuadrilateralExtensionOpen}">
        ${state.teachQuadrilateralExtensionOpen ? "Hide optional challenge" : "Optional: Draw another quadrilateral and test a rule"}
      </button>
      ${state.teachQuadrilateralExtensionOpen ? `
      <p>On the grid, click four vertices in order around a new quadrilateral. Choose a diagonal and test whether it decomposes the shape into two identical triangles.</p>
      <svg class="quadrilateral-extension-board" viewBox="0 0 360 280" role="button" tabindex="0" aria-label="Grid for placing four quadrilateral vertices" data-quadrilateral-extension-board="${card.id}">
        <rect x="1" y="1" width="358" height="278" class="quadrilateral-board"></rect>
        <g aria-hidden="true">${gridLines(20, 20, 8, 6, 40)}</g>
        ${polygon}
        ${segment}
        ${points.map(([x, y], index) => `<circle class="quadrilateral-extension-point" cx="${x}" cy="${y}" r="7"><title>Vertex ${index + 1}</title></circle>`).join("")}
      </svg>
      <p class="teach-question-note">Placed ${points.length} of 4 vertices.</p>
      <div class="practice-actions">
        <button class="hint-button" type="button" data-quadrilateral-extension-undo="${card.id}" ${points.length ? "" : "disabled"}>Undo point</button>
        <button class="hint-button" type="button" data-quadrilateral-extension-clear="${card.id}" ${points.length ? "" : "disabled"}>Clear</button>
      </div>
      <div class="guided-choice-row" role="group" aria-label="Choose a diagonal">
        ${[
          ["0-2", "Connect vertices 1 and 3"],
          ["1-3", "Connect vertices 2 and 4"],
        ].map(([value, label]) => `
          <button
            class="page-chip guided-choice-button ${diagonal === value ? "is-active" : ""}"
            type="button"
            data-quadrilateral-extension-diagonal="${card.id}"
            data-diagonal="${value}"
            aria-pressed="${diagonal === value}"
            ${points.length === 4 ? "" : "disabled"}
          >${label}</button>
        `).join("")}
      </div>
      <label class="reasoning-field">
        What must be true about a quadrilateral for your rule to guarantee two identical triangles?
        <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-quadrilateral-extension-input="${card.id}" placeholder="Write your rule.">${escapeHtml(response.extensionRule || "")}</textarea>
      </label>
      <div class="practice-actions">
        <button class="practice-submit" type="button" data-quadrilateral-extension-submit="${card.id}">Submit optional challenge</button>
      </div>
      <p class="practice-feedback teach-question-feedback ${feedbackClass}" data-quadrilateral-extension-feedback aria-live="polite">${escapeHtml(quadrilateralExtensionFeedback(card))}</p>
      ` : ""}
    </section>
  `;
}

function quadrilateralObservationsAreStrong(card) {
  const observation = normalizeAnswer(getTeachCustomResponse(card).observations);
  return observation.includes("parallelogram") || (observation.includes("opposite") && observation.includes("parallel"));
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

function parallelogramExploreQuestion(card, questionId) {
  const requested = questionSetDefinition(card, questionId);
  if (requested?.model) return requested;
  return card.questions?.find((question) => question.model?.editable)
    || card.questions?.find((question) => question.model)
    || null;
}

function parallelogramExploreField(questionId, field) {
  return `parallelogram_${questionId}_${field}`;
}

function parallelogramExploreDefault(card, questionId, field) {
  const question = parallelogramExploreQuestion(card, questionId);
  return Number(question?.model?.[field]) || 0;
}

function parallelogramExploreValue(card, questionId, field) {
  const response = getTeachCustomResponse(card);
  const parsed = Number(response[parallelogramExploreField(questionId, field)]);
  if (Number.isFinite(parsed)) return parsed;
  return parallelogramExploreDefault(card, questionId, field);
}

function parallelogramExploreShape(card, questionId = questionSetActiveId(card)) {
  const modelQuestion = parallelogramExploreQuestion(card, questionId);
  const modelQuestionId = modelQuestion?.id || questionId;
  const base = clampNumber(parallelogramExploreValue(card, modelQuestionId, "base"), 3, 10);
  const height = clampNumber(parallelogramExploreValue(card, modelQuestionId, "height"), 2, 8);
  const slant = clampNumber(parallelogramExploreValue(card, modelQuestionId, "slant"), -4, 5);
  return { base, height, slant, area: base * height, questionId: modelQuestionId };
}

function parallelogramExploreWasAdjusted(card, questionId) {
  const question = parallelogramExploreQuestion(card, questionId);
  if (!question?.requireAdjustment) return true;
  const response = getTeachCustomResponse(card);
  return ["base", "height", "slant"].some((field) => (
    Object.prototype.hasOwnProperty.call(response, parallelogramExploreField(question.id, field))
      && parallelogramExploreValue(card, question.id, field) !== parallelogramExploreDefault(card, question.id, field)
  ));
}

function parallelogramExploreAreaCheckField(questionId) {
  return parallelogramExploreField(questionId, "showArea");
}

function parallelogramExploreAreaIsShown(card, questionId) {
  return getTeachCustomResponse(card)[parallelogramExploreAreaCheckField(questionId)] === "yes";
}

function parallelogramExploreSignature(card, questionId) {
  const shape = parallelogramExploreShape(card, questionId);
  return `${shape.base}x${shape.height}x${shape.slant}`;
}

function parallelogramExploreIsUnique(card, question) {
  const comparisonIds = Array.isArray(question?.modelMustDifferFromQuestionIds)
    ? question.modelMustDifferFromQuestionIds
    : [];
  if (!comparisonIds.length) return true;
  const signature = parallelogramExploreSignature(card, question.id);
  return comparisonIds.every((questionId) => signature !== parallelogramExploreSignature(card, questionId));
}

function parallelogramExploreStrategy(card, questionId) {
  const value = getTeachCustomResponse(card)[parallelogramExploreField(questionId, "strategy")];
  return ["decompose", "enclose"].includes(value) ? value : "none";
}

function renderParallelogramRangeField(card, questionId, field, label, min, max) {
  const value = parallelogramExploreValue(card, questionId, field);
  return `
    <label class="parallelogram-range-field">
      <span>${escapeHtml(label)}: <strong>${value}</strong></span>
      <input
        type="range"
        min="${min}"
        max="${max}"
        step="1"
        value="${value}"
        data-parallelogram-input="${card.id}"
        data-question-id="${escapeHtml(questionId)}"
        data-parallelogram-field="${field}"
      >
    </label>
  `;
}

function renderParallelogramExploreWorkspace(card) {
  const activeQuestionId = questionSetActiveId(card);
  const modelQuestion = parallelogramExploreQuestion(card, activeQuestionId);
  if (!modelQuestion) return "";
  const shape = parallelogramExploreShape(card, modelQuestion.id);
  const strategy = parallelogramExploreStrategy(card, modelQuestion.id);
  const sourceAreaMode = Boolean(modelQuestion.model?.sourceAreaMode);
  const showArea = Boolean(modelQuestion.showAreaCheck && parallelogramExploreAreaIsShown(card, modelQuestion.id));
  const cell = 28;
  const baseY = 280;
  const leftX = 160;
  const topY = baseY - shape.height * cell;
  const topLeftX = leftX + shape.slant * cell;
  const topRightX = topLeftX + shape.base * cell;
  const bottomRightX = leftX + shape.base * cell;
  const heightX = sourceAreaMode
    ? topRightX
    : topLeftX + Math.max(1, Math.min(shape.base - 1, Math.round(shape.base / 2))) * cell;
  const sideLabelX = (leftX + topLeftX) / 2 - 24;
  const sideLabelY = (baseY + topY) / 2;
  const editable = Boolean(modelQuestion.model?.editable);
  const decompositionOverlay = !sourceAreaMode && strategy === "decompose" ? `
    <rect class="parallelogram-related-rectangle" x="${topLeftX}" y="${topY}" width="${shape.base * cell}" height="${shape.height * cell}"></rect>
    <line class="parallelogram-tool-line" x1="${topLeftX}" y1="${topY}" x2="${topLeftX}" y2="${baseY}"></line>
    <polygon class="parallelogram-tool-piece is-original" points="${leftX},${baseY} ${topLeftX},${topY} ${topLeftX},${baseY}"></polygon>
    <polygon class="parallelogram-tool-piece is-moved" points="${bottomRightX},${baseY} ${topRightX},${topY} ${topRightX},${baseY}"></polygon>
  ` : "";
  const enclosureOverlay = !sourceAreaMode && strategy === "enclose" ? `
    <rect class="parallelogram-related-rectangle" x="${leftX}" y="${topY}" width="${(shape.base + shape.slant) * cell}" height="${shape.height * cell}"></rect>
    <polygon class="parallelogram-tool-piece is-extra" points="${leftX},${topY} ${topLeftX},${topY} ${leftX},${baseY}"></polygon>
    <polygon class="parallelogram-tool-piece is-extra" points="${bottomRightX},${baseY} ${topRightX},${topY} ${topRightX},${baseY}"></polygon>
  ` : "";
  const strategyCaption = sourceAreaMode
    ? editable
      ? "Move the vertex controls to create a new parallelogram. The base and corresponding height labels update with the model."
      : "This is the fixed starting figure from the public lesson. Use its labeled base and corresponding height to calculate the area."
    : strategy === "decompose"
      ? "The triangle tool shows a side piece moved to complete a related rectangle."
      : strategy === "enclose"
        ? "The rectangle and triangle tools show an enclosure with two extra corner regions."
        : "Choose a polygon tool to visualize a source strategy without revealing the area.";
  const sideLabel = String(modelQuestion.model?.sideLabel || "");
  return `
    <section class="parallelogram-explore-workspace" aria-label="Interactive parallelogram area applet recreation">
      ${sourceAreaMode ? "" : `
        <div class="parallelogram-tool-row" role="group" aria-label="Polygon tools">
          <button class="page-chip ${strategy === "decompose" ? "is-active" : ""}" type="button" data-parallelogram-strategy="${card.id}" data-question-id="${modelQuestion.id}" data-strategy-id="decompose" aria-pressed="${strategy === "decompose"}">Decompose and rearrange</button>
          <button class="page-chip ${strategy === "enclose" ? "is-active" : ""}" type="button" data-parallelogram-strategy="${card.id}" data-question-id="${modelQuestion.id}" data-strategy-id="enclose" aria-pressed="${strategy === "enclose"}">Enclose and subtract</button>
        </div>
      `}
      <svg class="parallelogram-explore-stage" viewBox="0 0 760 340" role="img" aria-label="${escapeHtml(card.visualAlt)}">
        <rect x="1" y="1" width="758" height="338" class="parallelogram-explore-board"></rect>
        ${sourceAreaMode ? "" : `<g aria-hidden="true">${gridLines(20, 28, 25, 9, 28)}</g>`}
        ${enclosureOverlay}
        <polygon
          class="parallelogram-explore-shape ${sourceAreaMode ? "is-source" : ""}"
          points="${leftX},${baseY} ${bottomRightX},${baseY} ${topRightX},${topY} ${topLeftX},${topY}"
        ></polygon>
        ${decompositionOverlay}
        <line class="parallelogram-height-line ${sourceAreaMode ? "is-source" : ""}" x1="${heightX}" y1="${topY}" x2="${heightX}" y2="${baseY}"></line>
        <path class="parallelogram-right-angle ${sourceAreaMode ? "is-source" : ""}" d="M ${heightX} ${baseY - 15} L ${heightX + 15} ${baseY - 15} L ${heightX + 15} ${baseY}"></path>
        ${sourceAreaMode ? `
          <text class="parallelogram-measure-label" x="${leftX + shape.base * cell / 2}" y="316" text-anchor="middle">${shape.base}</text>
          <text class="parallelogram-measure-label parallelogram-height-label" x="${heightX + 14}" y="${topY + shape.height * cell / 2}" text-anchor="start">${shape.height}</text>
          ${sideLabel ? `<text class="parallelogram-measure-label parallelogram-side-label" x="${sideLabelX}" y="${sideLabelY}" text-anchor="middle">${escapeHtml(sideLabel)}</text>` : ""}
          ${showArea ? `<text class="parallelogram-area-label" x="${leftX + (shape.base + shape.slant) * cell / 2}" y="${topY + shape.height * cell / 2}" text-anchor="middle">Area ${shape.area}</text>` : ""}
        ` : ""}
        ${editable ? `
          <circle class="parallelogram-vertex-handle ${sourceAreaMode ? "is-source" : ""}" cx="${leftX}" cy="${baseY}" r="7"></circle>
          <circle class="parallelogram-vertex-handle ${sourceAreaMode ? "is-source" : ""}" cx="${bottomRightX}" cy="${baseY}" r="7"></circle>
          <circle class="parallelogram-vertex-handle ${sourceAreaMode ? "is-source" : ""}" cx="${topRightX}" cy="${topY}" r="7"></circle>
          <circle class="parallelogram-vertex-handle ${sourceAreaMode ? "is-source" : ""}" cx="${topLeftX}" cy="${topY}" r="7"></circle>
        ` : ""}
      </svg>
      ${editable ? `
        <div class="parallelogram-explore-controls" aria-label="Move the green vertices">
          ${renderParallelogramRangeField(card, modelQuestion.id, "base", "Horizontal span", 3, 10)}
          ${renderParallelogramRangeField(card, modelQuestion.id, "height", "Vertical span", 2, 8)}
          ${renderParallelogramRangeField(card, modelQuestion.id, "slant", "Horizontal shift", -4, 5)}
        </div>
      ` : `<p class="parallelogram-fixed-note">The starting figure stays fixed until you finish its calculation.</p>`}
      <p class="parallelogram-explore-caption">${escapeHtml(strategyCaption)}</p>
    </section>
  `;
}

const baseHeightChallengeStage = { width: 760, height: 440, cell: 30 };

function baseHeightChallengeField(questionId, field) {
  return `baseHeight_${questionId}_${field}`;
}

function baseHeightChallengeValue(card, question, field) {
  const stored = Number(getTeachCustomResponse(card)[baseHeightChallengeField(question.id, field)]);
  if (Number.isFinite(stored)) return stored;
  return Number(question.model?.[field]) || 0;
}

function baseHeightChallengeShape(card, question) {
  return {
    base: clampNumber(Math.round(baseHeightChallengeValue(card, question, "base")), 3, 8),
    height: clampNumber(Math.round(baseHeightChallengeValue(card, question, "height")), 2, 7),
    slant: clampNumber(Math.round(baseHeightChallengeValue(card, question, "slant")), -3, 3),
    rotation: clampNumber(Math.round(baseHeightChallengeValue(card, question, "rotation") / 5) * 5, -60, 60),
    heightPosition: clampNumber(Math.round(baseHeightChallengeValue(card, question, "heightPosition") * 10) / 10, 0.1, 0.9),
  };
}

function baseHeightChallengeHasInteraction(card, question) {
  return getTeachCustomResponse(card)[baseHeightChallengeField(question.id, "touched")] === "yes";
}

function baseHeightChallengeIsCorrect(card, question) {
  if (!baseHeightChallengeHasInteraction(card, question)) return false;
  const shape = baseHeightChallengeShape(card, question);
  if (question.challenge === "height-location") {
    return Math.abs(shape.heightPosition - Number(question.model?.heightPosition || 0.5)) >= 0.2;
  }
  if (question.challenge === "horizontal-sides") return shape.rotation === 0;
  if (question.challenge === "tall-skinny") return shape.height >= shape.base * 2;
  if (question.challenge === "rectangle") return shape.slant === 0;
  if (question.challenge === "five-by-three") return shape.base === 5 && shape.height === 3 && shape.slant !== 0;
  return false;
}

function setBaseHeightChallengeValues(card, question, updates, touched = true) {
  const next = { ...getTeachCustomResponse(card) };
  Object.entries(updates).forEach(([field, value]) => {
    next[baseHeightChallengeField(question.id, field)] = String(value);
  });
  if (touched) next[baseHeightChallengeField(question.id, "touched")] = "yes";
  state.teachCustomResponses[card.id] = next;
  state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
  state.sourceModalItemId = null;
}

function resetBaseHeightChallenge(card, question) {
  const response = { ...getTeachCustomResponse(card) };
  ["base", "height", "slant", "rotation", "heightPosition", "touched"].forEach((field) => {
    delete response[baseHeightChallengeField(question.id, field)];
  });
  state.teachCustomResponses[card.id] = response;
  state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
}

function rotateBaseHeightPoint(point, center, degrees) {
  const radians = degrees * Math.PI / 180;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  return {
    x: center.x + dx * cosine - dy * sine,
    y: center.y + dx * sine + dy * cosine,
  };
}

function baseHeightChallengeGeometry(card, question) {
  const shape = baseHeightChallengeShape(card, question);
  const { cell, width, height } = baseHeightChallengeStage;
  const localCenter = {
    x: (shape.base + shape.slant) * cell / 2,
    y: -shape.height * cell / 2,
  };
  const stageCenter = { x: width / 2, y: height / 2 + 8 };
  const transform = (point) => {
    const translated = {
      x: point.x - localCenter.x + stageCenter.x,
      y: point.y - localCenter.y + stageCenter.y,
    };
    return rotateBaseHeightPoint(translated, stageCenter, shape.rotation);
  };
  const baseLength = shape.base * cell;
  const topOffset = shape.slant * cell;
  const heightLength = shape.height * cell;
  const heightX = shape.heightPosition * baseLength;
  const p0 = transform({ x: 0, y: 0 });
  const p1 = transform({ x: baseLength, y: 0 });
  const p2 = transform({ x: baseLength + topOffset, y: -heightLength });
  const p3 = transform({ x: topOffset, y: -heightLength });
  const heightBottom = transform({ x: heightX, y: 0 });
  const heightTop = transform({ x: heightX, y: -heightLength });
  const supportStart = transform({ x: -45, y: 0 });
  const supportEnd = transform({ x: baseLength + 45, y: 0 });
  const oppositeStart = transform({ x: topOffset - 45, y: -heightLength });
  const oppositeEnd = transform({ x: topOffset + baseLength + 45, y: -heightLength });
  const rightAngle = [
    transform({ x: heightX, y: -14 }),
    transform({ x: heightX + 14, y: -14 }),
    transform({ x: heightX + 14, y: 0 }),
  ];
  const baseLabel = transform({ x: baseLength / 2, y: 28 });
  const heightLabel = transform({ x: heightX + 20, y: -heightLength / 2 });
  return {
    shape,
    stageCenter,
    points: [p0, p1, p2, p3],
    heightBottom,
    heightTop,
    supportStart,
    supportEnd,
    oppositeStart,
    oppositeEnd,
    rightAngle,
    baseLabel,
    heightLabel,
  };
}

function svgPointList(points) {
  return points.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
}

function renderBaseHeightChallengeRange(card, question, field, label, min, max, value) {
  return `
    <label class="base-height-range-field">
      <span>${escapeHtml(label)}: <strong data-base-height-output="${escapeHtml(field)}">${escapeHtml(value)}</strong></span>
      <input
        type="range"
        min="${min}"
        max="${max}"
        step="1"
        value="${value}"
        data-base-height-input="${card.id}"
        data-question-id="${escapeHtml(question.id)}"
        data-base-height-field="${escapeHtml(field)}"
      >
    </label>
  `;
}

function renderBaseHeightChallengeWorkspace(card) {
  const question = questionSetDefinition(card, questionSetActiveId(card));
  if (!question || question.visualType !== "baseHeightChallenge") return "";
  const geometry = baseHeightChallengeGeometry(card, question);
  const { shape } = geometry;
  const handle = (id, point, label, value, min, max) => `
    <g
      class="base-height-handle"
      data-base-height-handle="${id}"
      data-card-id="${card.id}"
      data-question-id="${escapeHtml(question.id)}"
      role="slider"
      tabindex="0"
      aria-label="${escapeHtml(label)}"
      aria-valuemin="${min}"
      aria-valuemax="${max}"
      aria-valuenow="${escapeHtml(value)}"
    >
      <circle class="base-height-handle-hit" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="19"></circle>
      <circle class="base-height-handle-dot" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="8"></circle>
    </g>
  `;
  return `
    <section class="base-height-challenge-workspace" aria-label="Interactive base and height applet recreation">
      <p class="base-height-challenge-directions">Drag the green points or use the controls. The dashed segment h stays perpendicular to base b.</p>
      <svg
        class="base-height-challenge-stage"
        viewBox="0 0 ${baseHeightChallengeStage.width} ${baseHeightChallengeStage.height}"
        data-base-height-stage="${card.id}"
        data-question-id="${escapeHtml(question.id)}"
        role="img"
        aria-label="${escapeHtml(card.visualAlt)}"
      >
        <rect class="base-height-challenge-board" x="1" y="1" width="758" height="438"></rect>
        <g aria-hidden="true">${gridLines(20, 20, 36, 20, 20)}</g>
        <line data-base-height-support="base" class="base-height-support-line" x1="${geometry.supportStart.x.toFixed(1)}" y1="${geometry.supportStart.y.toFixed(1)}" x2="${geometry.supportEnd.x.toFixed(1)}" y2="${geometry.supportEnd.y.toFixed(1)}"></line>
        <line data-base-height-support="opposite" class="base-height-support-line" x1="${geometry.oppositeStart.x.toFixed(1)}" y1="${geometry.oppositeStart.y.toFixed(1)}" x2="${geometry.oppositeEnd.x.toFixed(1)}" y2="${geometry.oppositeEnd.y.toFixed(1)}"></line>
        <polygon data-base-height-shape class="base-height-challenge-shape" points="${svgPointList(geometry.points)}"></polygon>
        <line data-base-height-line class="base-height-challenge-height" x1="${geometry.heightBottom.x.toFixed(1)}" y1="${geometry.heightBottom.y.toFixed(1)}" x2="${geometry.heightTop.x.toFixed(1)}" y2="${geometry.heightTop.y.toFixed(1)}"></line>
        <polyline data-base-height-right-angle class="base-height-right-angle" points="${svgPointList(geometry.rightAngle)}"></polyline>
        <text data-base-height-label="base" class="base-height-measure-label" x="${geometry.baseLabel.x.toFixed(1)}" y="${geometry.baseLabel.y.toFixed(1)}" text-anchor="middle">b = ${shape.base}</text>
        <text data-base-height-label="height" class="base-height-measure-label" x="${geometry.heightLabel.x.toFixed(1)}" y="${geometry.heightLabel.y.toFixed(1)}" text-anchor="middle">h = ${shape.height}</text>
        ${handle("base", geometry.points[1], "Change base b", shape.base, 3, 8)}
        ${handle("shape", geometry.points[3], `Change height and sideways shift; current height ${shape.height}, shift ${shape.slant}`, shape.height, 2, 7)}
        ${handle("height-position", geometry.heightBottom, "Move the corresponding height along the base", Math.round(shape.heightPosition * 100), 10, 90)}
      </svg>
      <div class="base-height-challenge-controls">
        ${renderBaseHeightChallengeRange(card, question, "base", "Base b", 3, 8, shape.base)}
        ${renderBaseHeightChallengeRange(card, question, "height", "Height h", 2, 7, shape.height)}
        ${renderBaseHeightChallengeRange(card, question, "slant", "Sideways shift", -3, 3, shape.slant)}
        ${renderBaseHeightChallengeRange(card, question, "heightPosition", "Height location (%)", 10, 90, Math.round(shape.heightPosition * 100))}
      </div>
      <div class="base-height-challenge-actions">
        <button class="hint-button" type="button" data-base-height-rotate="${card.id}" data-question-id="${escapeHtml(question.id)}" data-rotation-delta="-5">Rotate left</button>
        <output class="base-height-rotation-output" aria-live="polite">Orientation ${shape.rotation}&deg;</output>
        <button class="hint-button" type="button" data-base-height-rotate="${card.id}" data-question-id="${escapeHtml(question.id)}" data-rotation-delta="5">Rotate right</button>
        <button class="hint-button" type="button" data-base-height-reset="${card.id}" data-question-id="${escapeHtml(question.id)}">Reset</button>
      </div>
    </section>
  `;
}

const cutStrategyStages = {
  tyler: [
    {
      label: "Choose a cut",
      shortLabel: "Cut",
      cropPath: "lesson-05-p001-tyler-stage-1.png",
      alt: "Tyler's stage 1 source diagram: a vertical dashed cut through the parallelogram with scissors below it.",
    },
    {
      label: "Move the side piece",
      shortLabel: "Move",
      cropPath: "lesson-05-p001-tyler-stage-2.png",
      alt: "Tyler's stage 2 source diagram: the cut side piece is green and an arrow shows it moving to the right.",
    },
    {
      label: "Rectangle formed",
      shortLabel: "Rectangle",
      cropPath: "lesson-05-p001-tyler-stage-3.png",
      alt: "Tyler's stage 3 source diagram: the moved piece completes a rectangle and a dashed outline marks its former location.",
    },
  ],
  elena: [
    {
      label: "Choose a cut",
      shortLabel: "Cut",
      cropPath: "lesson-05-p001-elena-stage-1.png",
      alt: "Elena's stage 1 source diagram: a vertical dashed cut near the left side of the parallelogram with scissors below it.",
    },
    {
      label: "Move the side piece",
      shortLabel: "Move",
      cropPath: "lesson-05-p001-elena-stage-2.png",
      alt: "Elena's stage 2 source diagram: the cut side piece is yellow and an arrow shows it moving to the right.",
    },
    {
      label: "Rectangle formed",
      shortLabel: "Rectangle",
      cropPath: "lesson-05-p001-elena-stage-3.png",
      alt: "Elena's stage 3 source diagram: the moved piece completes a rectangle and a dashed outline marks its former location.",
    },
  ],
};

function cutStageValue(card, strategy) {
  const parsed = Number(getTeachCustomResponse(card)[`${strategy}Stage`]);
  return Number.isFinite(parsed) ? clampNumber(parsed, 0, 2) : 0;
}

function cutStageCropUrl(stage) {
  return encodeURI(`artifacts/unit 1/_teachme-crops/${stage.cropPath}`);
}

function renderCutStrategyPanel(card, strategy, name) {
  const value = cutStageValue(card, strategy);
  const stage = cutStrategyStages[strategy][value];
  return `
    <section class="cut-strategy-panel" aria-labelledby="${card.id}-${strategy}-title">
      <div class="cut-strategy-header">
        <h4 id="${card.id}-${strategy}-title">${escapeHtml(name)}'s strategy</h4>
        <p class="cut-stage-status" aria-live="polite">Stage ${value + 1} of 3: ${escapeHtml(stage.label)}</p>
      </div>
      <div class="cut-stage-image-frame">
        <img
          class="cut-stage-image"
          src="${cutStageCropUrl(stage)}"
          alt="${escapeHtml(stage.alt)}"
          data-cut-stage-image="${strategy}"
          data-cut-stage-value="${value}"
        >
      </div>
      <div class="cut-stage-buttons" role="group" aria-label="${escapeHtml(name)}'s strategy stages">
        ${cutStrategyStages[strategy].map((option, index) => `
          <button
            class="cut-stage-button ${index === value ? "is-active" : ""}"
            type="button"
            data-cut-stage-card="${card.id}"
            data-cut-stage-strategy="${strategy}"
            data-cut-stage-value="${index}"
            aria-pressed="${index === value}"
            aria-label="Stage ${index + 1}: ${escapeHtml(option.label)}"
          >
            <span>${index + 1}</span>
            <strong>${escapeHtml(option.shortLabel)}</strong>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderParallelogramCutSliderWorkspace(card) {
  return `
    <section class="cut-slider-workspace" aria-label="Interactive staged source recreation for parallelogram rearrangements">
      <p class="cut-stage-heading">Same parallelogram, two rectangle strategies</p>
      <figure class="cut-starting-panel">
        <figcaption>Starting parallelogram</figcaption>
        <img class="cut-starting-image" src="${teachCropUrl(card)}" alt="The source starting parallelogram on a square grid.">
      </figure>
      <div class="cut-strategy-grid">
        ${renderCutStrategyPanel(card, "tyler", "Tyler")}
        ${renderCutStrategyPanel(card, "elena", "Elena")}
      </div>
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

function trianglePairTestedValues(response) {
  return String(response.testedPairs || "").split("|").filter((pairId) => trianglePairDefinitions.some((pair) => pair.id === pairId));
}

function markTrianglePairTested(pairId) {
  const card = unit1TeachCards.find((entry) => entry.responseType === "trianglePairsCompose");
  if (!card || !trianglePairDefinitions.some((pair) => pair.id === pairId)) return;
  const response = getTeachCustomResponse(card);
  const tested = trianglePairTestedValues(response);
  state.teachCustomResponses[card.id] = {
    ...response,
    testedPairs: trianglePairDefinitions
      .map((pair) => pair.id)
      .filter((id) => id === pairId || tested.includes(id))
      .join("|"),
  };
  state.teachSubmitted[card.id] = false;
  document.querySelector(`[data-triangle-pair-select="${pairId}"]`)?.classList.add("is-tested");
  const progress = document.querySelector(".triangle-pair-test-progress");
  if (progress) progress.textContent = `Tested ${trianglePairTestedValues(state.teachCustomResponses[card.id]).length} of ${trianglePairDefinitions.length} pairs.`;
}

function trianglePairReasoningIsStrong(response) {
  const reasoning = normalizeAnswer(response.trianglePairReasoning);
  const namesRectangleExample = reasoning.includes("rectangle") && /\b(r|u|right triangle)\b/.test(reasoning);
  const explainsParallelogram = reasoning.includes("parallelogram") && (
    reasoning.includes("matching")
    || reasoning.includes("join")
    || reasoning.includes("copy")
    || reasoning.includes("identical")
  );
  return namesRectangleExample && explainsParallelogram;
}

function renderTrianglePairWorkspace() {
  const activePairId = state.teachTrianglePairActive || "P";
  const activePair = trianglePairById(activePairId);
  const selectedPiece = state.teachTrianglePairSelectedPiece || "copy-a";
  const response = getTeachCustomResponse(unit1TeachCards.find((entry) => entry.responseType === "trianglePairsCompose") || { id: "" });
  const testedPairs = trianglePairTestedValues(response);
  const pairButtons = trianglePairDefinitions.map((pair) => `
    <button
      class="page-chip triangle-pair-select-button ${pair.id === activePairId ? "is-active" : ""} ${testedPairs.includes(pair.id) ? "is-tested" : ""}"
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
        <p class="triangle-pair-test-progress">Tested ${testedPairs.length} of ${trianglePairDefinitions.length} pairs.</p>
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

const decomposeStage = { width: 760, height: 410 };

const decomposeParallelograms = {
  A: {
    label: "Parallelogram A",
    vertices: { tl: [40, 0], tr: [200, 0], br: [160, 128], bl: [0, 128] },
    base: 10,
    height: 8,
  },
  B: {
    label: "Parallelogram B",
    vertices: { tl: [0, 0], tr: [80, 0], br: [80, 192], bl: [0, 192] },
    base: 5,
    height: 12,
  },
  C: {
    label: "Parallelogram C",
    vertices: { tl: [0, 0], tr: [200, 0], br: [260, 120], bl: [60, 120] },
    base: 10,
    height: 6,
  },
  D: {
    label: "Parallelogram D",
    vertices: { tl: [64, 0], tr: [128, 0], br: [64, 160], bl: [0, 160] },
    base: 4,
    height: 10,
  },
};

function decomposeVariant(card) {
  const variantId = getTeachCustomResponse(card).parallelogram;
  return decomposeParallelograms[variantId] ? variantId : "A";
}

function midpoint([x1, y1], [x2, y2]) {
  return [(x1 + x2) / 2, (y1 + y2) / 2];
}

function decomposeGeometry(variantId) {
  const definition = decomposeParallelograms[variantId] || decomposeParallelograms.A;
  const { tl, tr, br, bl } = definition.vertices;
  const leftMidpoint = midpoint(tl, bl);
  const diagonalMidpoint = midpoint(tl, br);
  return {
    ...definition,
    outline: [tl, tr, br, bl],
    large: [tl, tr, br],
    small: [tl, leftMidpoint, diagonalMidpoint],
    trapezoid: [leftMidpoint, bl, br, diagonalMidpoint],
    leftMidpoint,
    diagonalMidpoint,
  };
}

function polygonPoints(points) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function polygonCentroid(points) {
  return points.reduce((total, [x, y]) => ({ x: total.x + x / points.length, y: total.y + y / points.length }), { x: 0, y: 0 });
}

function initialDecomposePieces(variantId) {
  const geometry = decomposeGeometry(variantId);
  const tall = geometry.height >= 10;
  return {
    small: { x: 410, y: tall ? 42 : 58, angle: 0 },
    trapezoid: { x: 430, y: tall ? 150 : 178, angle: 0 },
  };
}

function getDecomposePieces(variantId) {
  if (!state.teachDecomposePieces) state.teachDecomposePieces = {};
  if (!state.teachDecomposePieces[variantId]) {
    state.teachDecomposePieces[variantId] = initialDecomposePieces(variantId);
  }
  return state.teachDecomposePieces[variantId];
}

function resetDecomposePieces(card) {
  const variantId = decomposeVariant(card);
  if (!state.teachDecomposePieces) state.teachDecomposePieces = {};
  state.teachDecomposePieces[variantId] = initialDecomposePieces(variantId);
  state.teachDecomposeSelectedPiece = "small";
  const response = getTeachCustomResponse(card);
  state.teachCustomResponses[card.id] = {
    ...response,
    decomposeSmallUsed: "",
    decomposeTrapezoidUsed: "",
  };
  state.teachSubmitted[card.id] = false;
}

function markDecomposePieceUsed(card, pieceId) {
  if (!card || !["small", "trapezoid"].includes(pieceId)) return;
  const response = getTeachCustomResponse(card);
  state.teachCustomResponses[card.id] = {
    ...response,
    [pieceId === "small" ? "decomposeSmallUsed" : "decomposeTrapezoidUsed"]: "yes",
  };
  state.teachSubmitted[card.id] = false;
}

function decomposePieceTransform(variantId, pieceId) {
  const geometry = decomposeGeometry(variantId);
  const piece = getDecomposePieces(variantId)[pieceId];
  const center = polygonCentroid(geometry[pieceId]);
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle} ${center.x} ${center.y})`;
}

function renderDecomposeParallelogramWorkspace(card) {
  const variantId = decomposeVariant(card);
  const geometry = decomposeGeometry(variantId);
  const response = getTeachCustomResponse(card);
  const selectedPiece = state.teachDecomposeSelectedPiece || "small";
  const sourceTransform = `translate(${variantId === "C" ? 26 : 72} 94)`;
  const pieceNames = { small: "Small triangle", trapezoid: "Trapezoid" };
  const pieces = ["small", "trapezoid"].map((pieceId) => {
    const center = polygonCentroid(geometry[pieceId]);
    return `
      <g
        class="decompose-piece-group"
        data-decompose-piece="${pieceId}"
        data-decompose-variant="${variantId}"
        transform="${decomposePieceTransform(variantId, pieceId)}"
        role="button"
        tabindex="0"
        aria-label="${escapeHtml(pieceNames[pieceId])}, draggable and rotatable"
      >
        <polygon points="${polygonPoints(geometry[pieceId])}" class="decompose-piece decompose-${pieceId} ${selectedPiece === pieceId ? "is-selected" : ""}"></polygon>
        <text x="${center.x}" y="${center.y + 5}" text-anchor="middle">${escapeHtml(pieceId === "small" ? "small triangle" : "trapezoid")}</text>
      </g>
    `;
  }).join("");
  const usedCount = [response.decomposeSmallUsed, response.decomposeTrapezoidUsed].filter((value) => value === "yes").length;
  return `
    <section class="decompose-workspace" aria-label="Interactive decomposition workspace for ${escapeHtml(geometry.label)}">
      <div class="decompose-toolbar">
        <p><strong>${escapeHtml(geometry.label)}</strong>: base ${geometry.base} cm, height ${geometry.height} cm</p>
        <div class="decompose-actions" role="group" aria-label="Cut-piece controls">
          ${["small", "trapezoid"].map((pieceId) => `<button class="page-chip ${selectedPiece === pieceId ? "is-active" : ""}" type="button" data-decompose-select="${pieceId}" aria-pressed="${selectedPiece === pieceId}">${escapeHtml(pieceNames[pieceId])}</button>`).join("")}
          <button class="hint-button" type="button" data-decompose-rotate="-15">Turn left</button>
          <button class="hint-button" type="button" data-decompose-rotate="15">Turn right</button>
          <button class="hint-button" type="button" data-decompose-reset="${card.id}">Reset pieces</button>
        </div>
      </div>
      <svg class="decompose-stage" data-decompose-stage viewBox="0 0 ${decomposeStage.width} ${decomposeStage.height}" role="img" aria-label="Original ${escapeHtml(geometry.label)} and two movable cut pieces">
        <rect x="1" y="1" width="${decomposeStage.width - 2}" height="${decomposeStage.height - 2}" class="decompose-board"></rect>
        <text x="170" y="42" text-anchor="middle" class="decompose-heading">Original with source cut lines</text>
        <text x="565" y="42" text-anchor="middle" class="decompose-heading">Rearrange these two pieces</text>
        <g transform="${sourceTransform}">
          <polygon points="${polygonPoints(geometry.large)}" class="decompose-large"></polygon>
          <polygon points="${polygonPoints(geometry.small)}" class="decompose-small"></polygon>
          <polygon points="${polygonPoints(geometry.trapezoid)}" class="decompose-trapezoid"></polygon>
          <polygon points="${polygonPoints(geometry.outline)}" class="decompose-outline"></polygon>
          <line x1="${geometry.outline[0][0]}" y1="${geometry.outline[0][1]}" x2="${geometry.outline[2][0]}" y2="${geometry.outline[2][1]}" class="decompose-cut"></line>
          <line x1="${geometry.leftMidpoint[0]}" y1="${geometry.leftMidpoint[1]}" x2="${geometry.diagonalMidpoint[0]}" y2="${geometry.diagonalMidpoint[1]}" class="decompose-cut"></line>
        </g>
        <line x1="365" y1="54" x2="365" y2="360" class="decompose-divider"></line>
        ${pieces}
        <text x="565" y="382" text-anchor="middle" class="decompose-progress">Pieces tested: ${usedCount} of 2</text>
      </svg>
      <p class="decompose-caption">Drag and turn the small triangle and trapezoid to explore a different parallelogram. The large triangle stays behind from the original cut.</p>
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

const triangleHeightRounds = {
  round1: {
    label: "Round 1: sides a-c",
    ids: ["side-a", "side-b", "side-c"],
    width: 760,
    height: 590,
    positions: {
      "side-a": [250, 24],
      "side-b": [250, 196],
      "side-c": [250, 376],
    },
  },
  round2: {
    label: "Round 2: triangles A-F",
    ids: ["A", "B", "C", "D", "E", "F"],
    width: 760,
    height: 520,
    positions: {
      A: [10, 34],
      B: [258, 24],
      C: [510, 20],
      D: [10, 274],
      E: [258, 264],
      F: [510, 276],
    },
  },
};

function triangleHeightRoundCompleted(response, roundId) {
  return triangleHeightRounds[roundId].ids.every((diagramId) => normalizeAnswer(triangleHeightSegmentValue(response, diagramId)).length > 0);
}

function triangleHeightReasoningIsStrong(card) {
  const reasoning = normalizeAnswer(getTeachCustomResponse(card).heightReasoning);
  const namesPerpendicular = reasoning.includes("perpendicular") || reasoning.includes("right angle");
  const connectsCorrectObjects = reasoning.includes("opposite") && (reasoning.includes("base") || reasoning.includes("base line"));
  return namesPerpendicular && connectsCorrectObjects;
}

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
  state.teachTriangleHeightRound = "round1";
  state.teachSubmitted[cardId] = false;
  state.sourceModalItemId = null;
}

function renderTriangleHeightWorkspace(card) {
  const response = getTeachCustomResponse(card);
  const markedCount = triangleHeightDiagrams.filter((diagram) => triangleHeightSegmentValue(response, diagram.id)).length;
  const round1Complete = triangleHeightRoundCompleted(response, "round1");
  const requestedRound = state.teachTriangleHeightRound || "round1";
  const roundId = requestedRound === "round2" && round1Complete ? "round2" : "round1";
  const round = triangleHeightRounds[roundId];
  const visibleDiagrams = round.ids.map((diagramId) => triangleHeightDiagramById(diagramId));
  const diagrams = visibleDiagrams.map((diagram) => {
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
      <g class="triangle-height-diagram" transform="translate(${round.positions[diagram.id][0]} ${round.positions[diagram.id][1]})" data-triangle-height-diagram="${diagram.id}">
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
        <div class="triangle-height-rounds" role="group" aria-label="Activity rounds">
          <button class="page-chip ${roundId === "round1" ? "is-active" : ""}" type="button" data-triangle-height-round="round1" aria-pressed="${roundId === "round1"}">Round 1: sides a-c</button>
          <button class="page-chip ${roundId === "round2" ? "is-active" : ""}" type="button" data-triangle-height-round="round2" aria-pressed="${roundId === "round2"}" ${round1Complete ? "" : "disabled"}>Round 2: triangles A-F</button>
        </div>
        <button class="hint-button" type="button" data-triangle-height-reset="${card.id}">Reset heights</button>
      </div>
      <svg class="triangle-height-stage" viewBox="0 0 ${round.width} ${round.height}" role="img" aria-label="${escapeHtml(round.label)} diagrams for marking corresponding heights.">
        <rect x="1" y="1" width="${round.width - 2}" height="${round.height - 2}" class="triangle-height-board"></rect>
        ${diagrams}
      </svg>
      <p class="triangle-height-caption">${round.ids.filter((diagramId) => triangleHeightSegmentValue(response, diagramId)).length} of ${round.ids.length} marked in this round. ${markedCount} of ${triangleHeightDiagrams.length} total.${roundId === "round1" && round1Complete ? " Round 2 is now unlocked." : ""}</p>
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
        <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-practice-reasoning="${item.id}" placeholder="Explain your reasoning.">${escapeHtml(state.practiceReasoning[item.id] || "")}</textarea>
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
        <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-practice-input="${item.id}" placeholder="Explain your reasoning.">${escapeHtml(getPracticeValue(item))}</textarea>
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
  const unitIsSelected = state.view === "unit1";
  nav.hidden = !unitIsSelected;
  document.getElementById("unit1NavButton")?.setAttribute("aria-expanded", String(unitIsSelected));

  const links = teachLessonGroups().map((group) => {
    const card = group.cards[0];
    const link = document.createElement("a");
    const isActive = group.lessonNumber === state.teachActiveLesson;
    link.href = `#${teachLessonDomId(group.lessonNumber)}`;
    link.dataset.teachLessonLink = String(group.lessonNumber);
    link.textContent = `Lesson ${group.lessonNumber}`;
    link.setAttribute("aria-label", `Lesson ${group.lessonNumber}: ${card.title}`);
    link.title = `Lesson ${group.lessonNumber}: ${card.title}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    return link;
  });
  nav.replaceChildren(...links);
}

function scrollToTeachLesson(lessonNumber) {
  const target = document.getElementById(teachLessonDomId(lessonNumber));
  const deck = document.getElementById("teachLessonDeck");
  if (!target || !deck) return;

  const precedingImages = [...deck.querySelectorAll("img")].filter((image) => (
    image.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING
  ));
  const imageLoads = precedingImages.map((image) => {
    image.loading = "eager";
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener("load", resolve, { once: true });
      image.addEventListener("error", resolve, { once: true });
    });
  });

  Promise.all(imageLoads).then(() => {
    if (state.view !== "unit1" || state.mode !== "teach" || state.teachActiveLesson !== lessonNumber) return;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function teachPartLabel(card) {
  if (card.partLabel) return card.partLabel;
  const match = card.activityTitle?.match(/^(\d+\.\d+)/);
  return match ? match[1] : `Part ${card.id}`;
}

const tilingPieceStage = { width: 620, height: 300 };

const tilingPieceDefinitions = {
  "triangle-1": { label: "Green triangle 1", points: "0,-39 45,39 -45,39", className: "is-green" },
  "triangle-2": { label: "Green triangle 2", points: "0,-39 45,39 -45,39", className: "is-green" },
  "triangle-3": { label: "Green triangle 3", points: "0,-39 45,39 -45,39", className: "is-green" },
  rhombus: { label: "Blue rhombus", points: "-45,-39 45,-39 90,39 0,39", className: "is-blue" },
  trapezoid: { label: "Red trapezoid", points: "-45,-39 45,-39 90,39 -90,39", className: "is-red" },
};

function initialTilingPieces() {
  return {
    "triangle-1": { x: 72, y: 76, angle: 0, hidden: false },
    "triangle-2": { x: 172, y: 76, angle: 0, hidden: false },
    "triangle-3": { x: 272, y: 76, angle: 0, hidden: false },
    rhombus: { x: 125, y: 205, angle: 0, hidden: false },
    trapezoid: { x: 430, y: 205, angle: 0, hidden: false },
  };
}

function getTilingPieces() {
  if (!state.teachTilingPieces) state.teachTilingPieces = initialTilingPieces();
  return state.teachTilingPieces;
}

function tilingPieceTransform(pieceId) {
  const piece = getTilingPieces()[pieceId];
  return `translate(${piece.x} ${piece.y}) rotate(${piece.angle})`;
}

function renderTilingPatternReference(card) {
  const selected = getTeachVariantId(card);
  const patterns = selected ? [selected] : ["pattern-a", "pattern-b"];
  const sourceUrl = teachCropUrl(card);
  return `
    <div class="tiling-pattern-references ${selected ? "has-selection" : ""}">
      ${patterns.map((patternId) => {
        const isPatternB = patternId === "pattern-b";
        const label = isPatternB ? "Pattern B" : "Pattern A";
        return `
          <figure class="tiling-pattern-reference">
            <figcaption>${label}${selected ? " selected" : ""}</figcaption>
            <svg viewBox="70 ${isPatternB ? 350 : 0} 560 350" role="img" aria-label="${label} from the source PDF">
              <image href="${sourceUrl}" x="0" y="0" width="720" height="700"></image>
            </svg>
          </figure>
        `;
      }).join("")}
    </div>
  `;
}

function renderTilingCompareWorkspace(card) {
  const selectedPieceId = state.teachTilingSelectedPiece || "triangle-1";
  const pieces = getTilingPieces();
  return `
    <section class="tiling-compare-workspace" aria-label="Source pattern and movable shape-comparison pieces">
      ${renderTilingPatternReference(card)}
      <section class="tiling-piece-lab" aria-label="Move, turn, and hide comparison pieces">
        <div class="tiling-piece-toolbar">
          <p><strong>Shape comparison tray</strong></p>
          <div role="group" aria-label="Comparison piece controls">
            <button class="hint-button" type="button" data-tiling-piece-rotate="-60">Turn left</button>
            <button class="hint-button" type="button" data-tiling-piece-rotate="60">Turn right</button>
            <button class="hint-button" type="button" data-tiling-piece-hide>Hide selected</button>
            <button class="hint-button" type="button" data-tiling-piece-show>Show all</button>
            <button class="hint-button" type="button" data-tiling-piece-reset>Reset pieces</button>
          </div>
        </div>
        <svg class="tiling-piece-stage" data-tiling-piece-stage viewBox="0 0 ${tilingPieceStage.width} ${tilingPieceStage.height}" role="img" aria-label="Three green triangles, one blue rhombus, and one red trapezoid that can be moved and turned">
          <rect x="1" y="1" width="${tilingPieceStage.width - 2}" height="${tilingPieceStage.height - 2}" class="tiling-piece-board"></rect>
          ${Object.entries(tilingPieceDefinitions).map(([pieceId, definition]) => {
            const piece = pieces[pieceId];
            if (piece.hidden) return "";
            return `
              <g class="tiling-piece-group" data-tiling-piece="${pieceId}" transform="${tilingPieceTransform(pieceId)}" role="button" tabindex="0" aria-label="${definition.label}, draggable and rotatable">
                <polygon class="tiling-comparison-piece ${definition.className} ${pieceId === selectedPieceId ? "is-selected" : ""}" points="${definition.points}"></polygon>
              </g>
            `;
          }).join("")}
        </svg>
        <div class="tiling-piece-legend" aria-hidden="true">
          <span><i class="is-green"></i>3 green triangles</span>
          <span><i class="is-blue"></i>1 blue rhombus</span>
          <span><i class="is-red"></i>1 red trapezoid</span>
        </div>
        <p class="tiling-piece-caption">Drag pieces on top of one another to test how many green triangles match a blue rhombus or a red trapezoid.</p>
      </section>
    </section>
  `;
}

const equalAreaTilingBoard = { columns: 4, rows: 3, cell: 92 };

function getEqualAreaTiling() {
  if (!state.teachEqualAreaTiling) {
    state.teachEqualAreaTiling = { pieces: [], nextId: 1, message: "Choose a shape tool, then place pieces on the grid." };
  }
  return state.teachEqualAreaTiling;
}

function equalAreaTilingPieceAt(column, row) {
  return getEqualAreaTiling().pieces.find((piece) => piece.cells.some((cell) => cell.column === column && cell.row === row)) || null;
}

function equalAreaTilingCounts() {
  const pieces = getEqualAreaTiling().pieces;
  const squareArea = pieces.filter((piece) => piece.type === "square").reduce((total, piece) => total + piece.cells.length, 0);
  const dominoArea = pieces.filter((piece) => piece.type === "domino").reduce((total, piece) => total + piece.cells.length, 0);
  return { squareArea, dominoArea, totalArea: squareArea + dominoArea };
}

function equalAreaTilingIsCorrect() {
  const counts = equalAreaTilingCounts();
  return counts.totalArea === equalAreaTilingBoard.columns * equalAreaTilingBoard.rows
    && counts.squareArea === counts.dominoArea
    && counts.squareArea > 0;
}

function renderEqualAreaTilingWorkspace() {
  const boardWidth = equalAreaTilingBoard.columns * equalAreaTilingBoard.cell;
  const boardHeight = equalAreaTilingBoard.rows * equalAreaTilingBoard.cell;
  const model = getEqualAreaTiling();
  const counts = equalAreaTilingCounts();
  return `
    <section class="equal-area-tiling-workspace" aria-label="Equal-area tiling builder">
      <div class="equal-area-tiling-toolbar">
        <div role="group" aria-label="Tiling piece tools">
          <button class="page-chip ${state.teachEqualAreaTilingTool === "square" ? "is-active" : ""}" type="button" data-equal-tiling-tool="square" aria-pressed="${state.teachEqualAreaTilingTool === "square"}">Unit square</button>
          <button class="page-chip ${state.teachEqualAreaTilingTool === "domino" ? "is-active" : ""}" type="button" data-equal-tiling-tool="domino" aria-pressed="${state.teachEqualAreaTilingTool === "domino"}">Domino</button>
          <button class="page-chip ${state.teachEqualAreaTilingTool === "erase" ? "is-active" : ""}" type="button" data-equal-tiling-tool="erase" aria-pressed="${state.teachEqualAreaTilingTool === "erase"}">Erase</button>
        </div>
        <div role="group" aria-label="Domino orientation">
          <button
            class="hint-button equal-area-tiling-orientation ${state.teachEqualAreaTilingTool === "domino" && state.teachEqualAreaTilingOrientation === "horizontal" ? "is-active" : ""}"
            type="button"
            data-equal-tiling-orientation="horizontal"
            aria-pressed="${state.teachEqualAreaTilingTool === "domino" && state.teachEqualAreaTilingOrientation === "horizontal"}"
            ${state.teachEqualAreaTilingTool === "domino" ? "" : "disabled"}
          >Horizontal</button>
          <button
            class="hint-button equal-area-tiling-orientation ${state.teachEqualAreaTilingTool === "domino" && state.teachEqualAreaTilingOrientation === "vertical" ? "is-active" : ""}"
            type="button"
            data-equal-tiling-orientation="vertical"
            aria-pressed="${state.teachEqualAreaTilingTool === "domino" && state.teachEqualAreaTilingOrientation === "vertical"}"
            ${state.teachEqualAreaTilingTool === "domino" ? "" : "disabled"}
          >Vertical</button>
        </div>
      </div>
      <svg class="equal-area-tiling-board" viewBox="0 0 ${boardWidth} ${boardHeight}" role="img" aria-label="Four-column by three-row tiling grid">
        <rect width="${boardWidth}" height="${boardHeight}" class="equal-area-board-background"></rect>
        ${model.pieces.map((piece) => {
          const columns = piece.cells.map((cell) => cell.column);
          const rows = piece.cells.map((cell) => cell.row);
          const x = Math.min(...columns) * equalAreaTilingBoard.cell;
          const y = Math.min(...rows) * equalAreaTilingBoard.cell;
          const width = (Math.max(...columns) - Math.min(...columns) + 1) * equalAreaTilingBoard.cell;
          const height = (Math.max(...rows) - Math.min(...rows) + 1) * equalAreaTilingBoard.cell;
          return `<rect x="${x + 3}" y="${y + 3}" width="${width - 6}" height="${height - 6}" rx="3" class="equal-area-piece is-${piece.type}"></rect>`;
        }).join("")}
        ${Array.from({ length: equalAreaTilingBoard.columns + 1 }, (_, index) => `<line x1="${index * equalAreaTilingBoard.cell}" y1="0" x2="${index * equalAreaTilingBoard.cell}" y2="${boardHeight}" class="equal-area-grid-line"></line>`).join("")}
        ${Array.from({ length: equalAreaTilingBoard.rows + 1 }, (_, index) => `<line x1="0" y1="${index * equalAreaTilingBoard.cell}" x2="${boardWidth}" y2="${index * equalAreaTilingBoard.cell}" class="equal-area-grid-line"></line>`).join("")}
        ${Array.from({ length: equalAreaTilingBoard.rows }, (_, row) => Array.from({ length: equalAreaTilingBoard.columns }, (_entry, column) => `<rect x="${column * equalAreaTilingBoard.cell}" y="${row * equalAreaTilingBoard.cell}" width="${equalAreaTilingBoard.cell}" height="${equalAreaTilingBoard.cell}" class="equal-area-cell-target" data-equal-tiling-cell="${column}-${row}" data-column="${column}" data-row="${row}" role="button" tabindex="0" aria-label="Grid cell column ${column + 1}, row ${row + 1}"></rect>`).join("")).join("")}
      </svg>
      <div class="equal-area-tiling-status" aria-live="polite">
        <span>Square area:&nbsp;<strong>${counts.squareArea}</strong></span>
        <span>Domino area:&nbsp;<strong>${counts.dominoArea}</strong></span>
        <span class="equal-area-tiling-covered">Covered:&nbsp;<strong>${counts.totalArea} of ${equalAreaTilingBoard.columns * equalAreaTilingBoard.rows}</strong></span>
        <button class="hint-button equal-area-tiling-reset" type="button" data-equal-tiling-reset>Reset</button>
      </div>
      <p class="equal-area-tiling-message">${escapeHtml(model.message)}</p>
    </section>
  `;
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
  if (card.customVisual === "tilingCompare") return renderTilingCompareWorkspace(card);
  if (card.customVisual === "equalAreaTiling") return renderEqualAreaTilingWorkspace(card);
  if (card.customVisual === "gridTriangleFit") return renderGridTriangleFitWorkspace(card);
  if (card.customVisual === "questionSetVisual") return renderQuestionSetVisual(card);
  if (card.customVisual === "polygonClassification") return renderPolygonClassificationVisual(card);
  if (card.customVisual === "tangram") return renderTangramWorkspace(card);
  if (card.customVisual === "gridFigureAreas") return renderGridFigureAreaVisual(card);
  if (card.customVisual === "quadrilateralDecompose") return renderQuadrilateralDecompositionWorkspace(card);
  if (card.customVisual === "trianglePairs") return renderTrianglePairWorkspace(card);
  if (card.customVisual === "decomposeParallelogram") return renderDecomposeParallelogramWorkspace(card);
  if (card.customVisual === "parallelogramExplore") return renderParallelogramExploreWorkspace(card);
  if (card.customVisual === "parallelogramCutSliders") return renderParallelogramCutSliderWorkspace(card);
  if (card.customVisual === "area12Triangle") return renderArea12TriangleWorkspace(card);
  if (card.customVisual === "triangleHeights") return renderTriangleHeightWorkspace(card);
  if (card.customVisual === "prismBuilder") return renderPrismBuilderWorkspace(card);
  if (!card.cropPath) return "";
  const visualWidth = Number.isInteger(card.visualWidth) && card.visualWidth > 0 ? card.visualWidth : null;
  const visualHeight = Number.isInteger(card.visualHeight) && card.visualHeight > 0 ? card.visualHeight : null;
  const requestedMaxWidth = Number.isInteger(card.visualDisplayMaxWidth) && card.visualDisplayMaxWidth > 0
    ? card.visualDisplayMaxWidth
    : visualWidth;
  const visualMaxWidth = requestedMaxWidth && visualWidth ? Math.min(requestedMaxWidth, visualWidth) : requestedMaxWidth;
  const visualStyle = visualMaxWidth ? ` style="--teach-visual-max-width: ${visualMaxWidth}px;"` : "";
  const visualDimensions = visualWidth && visualHeight ? ` width="${visualWidth}" height="${visualHeight}"` : "";
  return `
    <figure class="teach-visual-frame"${visualStyle}>
      <img
        src="${teachCropUrl(card)}"
        alt="${escapeHtml(card.visualAlt)}"
        ${visualDimensions}
        loading="lazy"
      >
    </figure>
  `;
}

function renderPolygonClassificationVisual(card) {
  const cropUrl = (filename) => encodeURI(`artifacts/unit 1/_teachme-crops/${filename}`);
  return `
    <section class="polygon-classification-visual" aria-label="${escapeHtml(card.visualAlt)}">
      <section class="polygon-reference-group">
        <h4>Five source examples of polygons</h4>
        <img src="${cropUrl("lesson-11-p002-polygon-examples.png")}" width="1590" height="235" alt="Five source polygon examples." loading="lazy">
      </section>
      <section class="polygon-reference-group">
        <h4>Six source examples that are not polygons</h4>
        <img src="${cropUrl("lesson-11-p002-nonpolygon-examples.png")}" width="1550" height="250" alt="Six source non-polygon examples." loading="lazy">
      </section>
      <section class="polygon-reference-group polygon-candidates-group">
        <h4>Figures A-J to classify</h4>
        <img src="${cropUrl("lesson-11-p002-polygon-candidates.png")}" width="1485" height="610" alt="Source candidate figures A through J." loading="lazy">
      </section>
    </section>
  `;
}

function renderParallelogramEqualExampleVisual() {
  const handles = [
    [100, 260], [220, 260], [200, 180], [80, 180],
    [460, 260], [520, 260], [580, 100], [520, 100],
  ].map(([cx, cy]) => `<circle class="parallelogram-source-handle" cx="${cx}" cy="${cy}" r="6"></circle>`).join("");
  return `
    <figure class="teach-visual-frame parallelogram-equal-example">
      <figcaption>Count a horizontal base and its perpendicular height for each given parallelogram.</figcaption>
      <svg viewBox="0 0 760 330" role="img" aria-label="Two source parallelograms on a square grid. The left has base 6 and height 4; the right has base 3 and height 8.">
        <rect x="1" y="1" width="758" height="328" class="parallelogram-explore-board"></rect>
        <g aria-hidden="true">${gridLines(20, 20, 36, 14, 20)}</g>
        <polygon class="parallelogram-source-example is-left" points="100,260 220,260 200,180 80,180"></polygon>
        <polygon class="parallelogram-source-example is-right" points="460,260 520,260 580,100 520,100"></polygon>
        ${handles}
      </svg>
    </figure>
  `;
}

function renderQuestionSetVisual(card) {
  const question = questionSetDefinition(card, questionSetActiveId(card));
  if (question?.visualType === "tangram") return renderTangramWorkspace(card);
  if (question?.visualType === "parallelogramExplore") return renderParallelogramExploreWorkspace(card);
  if (question?.visualType === "baseHeightChallenge") return renderBaseHeightChallengeWorkspace(card);
  if (question?.visualType === "parallelogramEqualExample") return renderParallelogramEqualExampleVisual();
  if (question?.visualType === "parallelogramPair") return renderParallelogramPairWorkspace(card, question);
  if (question?.visualType === "cabinetDimensions") return renderCabinetDimensionsVisual(question);
  if (question?.visualType === "cabinetRow") return renderCabinetRowVisual(question);
  if (question?.visualType === "polyhedronSort") return renderPolyhedronSortVisual(card);
  if (question?.visualType === "polyhedronExamples") return renderPolyhedronExamplesVisual();
  if (question?.visualType === "pyramidFamilyNet") return renderPyramidNetVisual(card, question);
  if (question?.visualType === "polyhedronFold") return renderPolyhedronFoldVisual(card);
  if (question?.visualType === "surfaceNetFold") return renderSurfaceNetFoldVisual(card, question);
  if (question?.visualType === "rectangularPrismNet") return renderRectangularPrismNetVisual(card);
  if (question?.visualType === "cubeNetBuilder") return renderCubeNetBuilder(card);
  if (question?.visualType === "labeledCubeNet") return renderLabeledCubeNetBuilder(card, question);
  if (question?.visualType === "cubeMetricReference") return renderCubeMetricReference(question);
  if (question?.visualType === "measurementUnitBank") return renderMeasurementUnitBank(question);
  if (question?.visualType === "exponentReference") return renderExponentReferenceVisual();
  if (question?.visualType === "expressionComparison") return renderExpressionComparisonVisual(question);
  if (question?.visualType === "eightCubeBuilder") return renderEightCubeBuilder(card, question);
  if (question?.visualType === "snapCubeBuilder") return renderSnapCubeBuilder(card, question);
  if (question?.visualType === "prismDimensions") return renderPrismDimensionsVisual(question);
  if (question?.visualType === "prismDimensionSet") return renderPrismDimensionSetVisual();
  if (question?.visualType === "prismPairExamples") return renderPrismPairExamplesVisual();
  if (question?.visualType === "tentDesigner") return renderTentDesigner(card);
  if (question?.visualType === "tentComparison") return renderTentComparison(card);
  const cropPath = question?.visualCropPath || card.cropPath;
  if (!question || !cropPath) return "";
  const positiveInteger = (value) => Number.isInteger(value) && value > 0 && value <= 4096 ? value : null;
  const width = positiveInteger(question.visualWidth);
  const height = positiveInteger(question.visualHeight);
  const maxWidth = positiveInteger(question.visualDisplayMaxWidth) || width || 640;
  const dimensions = width && height ? ` width="${width}" height="${height}"` : "";
  return `
    <figure class="teach-visual-frame question-set-visual" style="--question-visual-max-width: ${Math.min(maxWidth, width || maxWidth)}px;">
      ${question.visualDirections ? `<figcaption>${escapeHtml(question.visualDirections)}</figcaption>` : ""}
      ${renderQuestionSetReferenceVisual(question)}
      <img
        src="${encodeURI(`artifacts/unit 1/_teachme-crops/${cropPath}`)}"
        alt="${escapeHtml(question.visualAlt || card.visualAlt)}"
        ${dimensions}
        loading="lazy"
      >
    </figure>
  `;
}

function renderQuestionSetReferenceVisual(question) {
  const cropPath = String(question?.visualReferenceCropPath || "");
  if (!/^[a-z0-9._-]+\.png$/i.test(cropPath)) return "";
  const dimension = (value, fallback) => Number.isInteger(value) && value > 0 && value <= 4096 ? value : fallback;
  const width = dimension(question.visualReferenceWidth, 320);
  const height = dimension(question.visualReferenceHeight, 240);
  const label = String(question.visualReferenceLabel || "Source figure");
  const sourceLabel = String(question.visualReferenceSourceLabel || "Source reference");
  const alt = String(question.visualReferenceAlt || `${sourceLabel}: ${label}.`);
  return `
    <div class="question-set-object-reference" aria-label="${escapeHtml(`${label}, ${sourceLabel}`)}">
      <div class="question-set-object-reference-label">
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(sourceLabel)}</span>
      </div>
      <img
        class="question-set-object-reference-image"
        src="${encodeURI(`artifacts/unit 1/_teachme-crops/${cropPath}`)}"
        width="${width}"
        height="${height}"
        alt="${escapeHtml(alt)}"
        loading="lazy"
      >
    </div>
  `;
}

function renderTentChoiceGroup(card, field, label, optionKey) {
  const response = tentPlanField("teach-l19");
  const options = tentDesignerOptions[optionKey] || [];
  const selected = String(response[field] || "");
  return `
    <fieldset class="tent-choice-group">
      <legend>${escapeHtml(label)}</legend>
      <div class="tent-choice-options">
        ${options.map((option) => `
          <button
            class="page-chip tent-choice-button ${selected === option.id ? "is-active" : ""}"
            type="button"
            data-tent-designer-choice="${card.id}"
            data-tent-field="${escapeHtml(field)}"
            data-option-id="${escapeHtml(option.id)}"
            aria-pressed="${selected === option.id}"
          >${escapeHtml(option.label)}</button>
        `).join("")}
      </div>
    </fieldset>
  `;
}

function renderTentFloorStepper(card, field, label, value, disabled) {
  const shownValue = Number.isInteger(value) ? value : "Not set";
  return `
    <div class="tent-stepper">
      <span>${escapeHtml(label)}</span>
      <div class="tent-stepper-controls">
        <button type="button" data-tent-step="${card.id}" data-tent-field="${escapeHtml(field)}" data-step="-1" aria-label="Decrease ${escapeHtml(label)}" ${disabled ? "disabled" : ""}>-</button>
        <output>${escapeHtml(shownValue)} ft</output>
        <button type="button" data-tent-step="${card.id}" data-tent-field="${escapeHtml(field)}" data-step="1" aria-label="Increase ${escapeHtml(label)}" ${disabled ? "disabled" : ""}>+</button>
      </div>
    </div>
  `;
}

function tentFloorBagPositions(plan, originX, originY, scale) {
  const positions = [];
  const grid = tentBagGrid(plan.capacity, plan.arrangement);
  for (let index = 0; index < plan.capacity; index += 1) {
    const row = plan.arrangement === "two-rows" ? Math.floor(index / grid.columns) : 0;
    const column = plan.arrangement === "two-rows" ? index % grid.columns : index;
    positions.push({
      x: originX + row * (standardSleepingBag.lengthInches / 12) * scale,
      y: originY + column * (standardSleepingBag.widthInches / 12) * scale,
    });
  }
  return positions;
}

function renderTentFloorPlan(plan) {
  if (!Number.isInteger(plan.capacity) || !plan.arrangement) {
    return `
      <figure class="tent-design-figure tent-floor-figure">
        <figcaption>Bottom panel and sleeping-bag locations</figcaption>
        <div class="tent-empty-model">Choose a capacity and bag arrangement to begin the floor plan.</div>
      </figure>
    `;
  }
  const floorLength = Number.isInteger(plan.floorLength) ? plan.floorLength : plan.requiredFloor.recommendedLength;
  const floorWidth = Number.isInteger(plan.floorWidth) ? plan.floorWidth : plan.requiredFloor.recommendedWidth;
  const displayLength = Math.max(floorLength, plan.requiredFloor.length);
  const displayWidth = Math.max(floorWidth, plan.requiredFloor.width);
  const scale = Math.min(410 / displayLength, 175 / displayWidth);
  const originX = (520 - displayLength * scale) / 2;
  const originY = 48 + (175 - displayWidth * scale) / 2;
  const floorPixelLength = floorLength * scale;
  const floorPixelWidth = floorWidth * scale;
  const bagLength = standardSleepingBag.lengthInches / 12 * scale;
  const bagWidth = standardSleepingBag.widthInches / 12 * scale;
  const bagPositions = tentFloorBagPositions(plan, originX, originY, scale);
  const floorClass = plan.complete && !plan.floorFits ? " is-too-small" : "";
  return `
    <figure class="tent-design-figure tent-floor-figure">
      <figcaption>Bottom panel and sleeping-bag locations</figcaption>
      <svg viewBox="0 0 520 270" role="img" aria-label="Floor plan for ${plan.capacity} standard sleeping bags in a ${floorLength} by ${floorWidth} foot tent floor.">
        <rect class="tent-floor-panel${floorClass}" x="${originX}" y="${originY}" width="${floorPixelLength}" height="${floorPixelWidth}"></rect>
        <rect class="tent-required-floor" x="${originX}" y="${originY}" width="${plan.requiredFloor.length * scale}" height="${plan.requiredFloor.width * scale}"></rect>
        ${bagPositions.map((position, index) => `
          <g class="tent-sleeping-bag">
            <rect x="${position.x + 2}" y="${position.y + 2}" width="${Math.max(4, bagLength - 4)}" height="${Math.max(4, bagWidth - 4)}" rx="5"></rect>
            <circle cx="${position.x + bagLength - Math.min(13, bagLength * 0.18)}" cy="${position.y + bagWidth / 2}" r="${Math.min(8, bagWidth * 0.2)}"></circle>
            <text x="${position.x + 9}" y="${position.y + bagWidth / 2 + 5}">${index + 1}</text>
          </g>
        `).join("")}
        <text class="tent-dimension-label" x="260" y="246" text-anchor="middle">floor length ${floorLength} ft</text>
        <text class="tent-dimension-label" x="18" y="136" transform="rotate(-90 18 136)" text-anchor="middle">floor width ${floorWidth} ft</text>
      </svg>
      <p class="tent-floor-status ${plan.floorFits ? "is-valid" : ""}">
        ${plan.floorFits
          ? `All ${plan.capacity} sleeping bags fit. Each bag is 74 in by 34 in.`
          : `The bags require at least ${formatTentMeasure(plan.requiredFloor.length)} ft by ${formatTentMeasure(plan.requiredFloor.width)} ft.`}
      </p>
    </figure>
  `;
}

function renderTentModelSvg(plan, compact = false) {
  const length = Number.isInteger(plan.floorLength) ? plan.floorLength : plan.requiredFloor?.recommendedLength;
  const width = Number.isInteger(plan.floorWidth) ? plan.floorWidth : plan.requiredFloor?.recommendedWidth;
  const height = Number.isInteger(plan.height) ? plan.height : null;
  if (!plan.style || !length || !width || !height) {
    return `<div class="tent-empty-model">Choose a height and tent style to build the model.</div>`;
  }
  const className = compact ? "tent-model-svg is-compact" : "tent-model-svg";
  if (plan.style === "a-frame") {
    return `
      <svg class="${className}" viewBox="0 0 520 270" role="img" aria-label="A-frame tent model with floor ${length} by ${width} feet and height ${height} feet.">
        <polygon class="tent-model-floor" points="98,220 290,220 420,174 228,174"></polygon>
        <polygon class="tent-model-roof tent-model-roof-left" points="194,60 98,220 290,220 324,115"></polygon>
        <polygon class="tent-model-roof tent-model-roof-right" points="194,60 324,115 420,174 290,220"></polygon>
        <polyline class="tent-model-outline" points="98,220 194,60 290,220 98,220 228,174 324,115 420,174 290,220"></polyline>
        <line class="tent-model-dimension" x1="194" y1="60" x2="194" y2="220"></line>
        <text class="tent-model-label" x="204" y="142">height ${height} ft</text>
        <text class="tent-model-label" x="194" y="245" text-anchor="middle">width ${width} ft</text>
        <text class="tent-model-label" x="368" y="214" transform="rotate(-20 368 214)">length ${length} ft</text>
      </svg>
    `;
  }
  return `
    <svg class="${className}" viewBox="0 0 520 270" role="img" aria-label="Wall tent model with floor ${length} by ${width} feet and height ${height} feet.">
      <polygon class="tent-model-floor" points="100,220 310,220 420,170 210,170"></polygon>
      <polygon class="tent-model-wall tent-model-wall-front" points="100,90 310,90 310,220 100,220"></polygon>
      <polygon class="tent-model-wall tent-model-wall-side" points="310,90 420,40 420,170 310,220"></polygon>
      <polygon class="tent-model-roof" points="100,90 210,40 420,40 310,90"></polygon>
      <polyline class="tent-model-outline" points="100,220 100,90 210,40 420,40 420,170 310,220 100,220 310,220 310,90 100,90"></polyline>
      <line class="tent-model-dimension" x1="84" y1="90" x2="84" y2="220"></line>
      <text class="tent-model-label" x="74" y="158" transform="rotate(-90 74 158)" text-anchor="middle">height ${height} ft</text>
      <text class="tent-model-label" x="205" y="245" text-anchor="middle">width ${width} ft</text>
      <text class="tent-model-label" x="373" y="216" transform="rotate(-24 373 216)">length ${length} ft</text>
    </svg>
  `;
}

function renderTentPanelOrganizer(plan) {
  if (!plan.valid) {
    return `<aside class="tent-panel-organizer"><h4>Fabric panel organizer</h4><p>Complete a floor-fitting design to see the panel dimensions.</p></aside>`;
  }
  if (plan.style === "a-frame") {
    const slant = tentFabricDetails(plan).slant;
    return `
      <aside class="tent-panel-organizer">
        <h4>Fabric panel organizer</h4>
        <ul>
          <li><strong>Floor:</strong> ${plan.floorLength} ft × ${plan.floorWidth} ft</li>
          <li><strong>2 roof panels:</strong> ${plan.floorLength} ft × ${formatTentMeasure(slant)} ft slant</li>
          <li><strong>2 triangular ends:</strong> base ${plan.floorWidth} ft, height ${plan.height} ft</li>
        </ul>
        <p>Add every panel area. The floor is required.</p>
      </aside>
    `;
  }
  return `
    <aside class="tent-panel-organizer">
      <h4>Fabric panel organizer</h4>
      <ul>
        <li><strong>Floor and roof:</strong> each ${plan.floorLength} ft × ${plan.floorWidth} ft</li>
        <li><strong>2 long walls:</strong> each ${plan.floorLength} ft × ${plan.height} ft</li>
        <li><strong>2 end walls:</strong> each ${plan.floorWidth} ft × ${plan.height} ft</li>
      </ul>
      <p>Add every panel area. The floor is required.</p>
    </aside>
  `;
}

function renderTentDesigner(card) {
  const plan = tentPlanFromResponse(tentPlanField("teach-l19"));
  const controlsReady = Number.isInteger(plan.capacity) && Boolean(plan.arrangement);
  return `
    <section class="tent-designer" aria-label="Interactive tent designer">
      <div class="tent-designer-controls">
        ${renderTentChoiceGroup(card, "tentCapacity", "Capacity", "capacity")}
        ${renderTentChoiceGroup(card, "tentArrangement", "Sleeping-bag arrangement", "arrangement")}
        ${renderTentChoiceGroup(card, "tentHeight", "Height specification", "height")}
        ${renderTentChoiceGroup(card, "tentStyle", "Tent style", "style")}
        <fieldset class="tent-floor-controls">
          <legend>Bottom panel dimensions</legend>
          <p>Adjust in whole feet. The diagram checks the exact 74-by-34-inch bag measurements.</p>
          <div class="tent-stepper-grid">
            ${renderTentFloorStepper(card, "tentFloorLength", "Length", plan.floorLength, !controlsReady)}
            ${renderTentFloorStepper(card, "tentFloorWidth", "Width", plan.floorWidth, !controlsReady)}
          </div>
        </fieldset>
      </div>
      <div class="tent-design-views">
        ${renderTentFloorPlan(plan)}
        <figure class="tent-design-figure tent-model-figure">
          <figcaption>Overall tent design</figcaption>
          ${renderTentModelSvg(plan)}
        </figure>
      </div>
      ${renderTentPanelOrganizer(plan)}
    </section>
  `;
}

function renderTentComparison(card) {
  if (!tentPlanIsSavedFor(card)) {
    return `
      <section class="tent-comparison-empty" aria-label="Tent comparison not ready">
        <h4>Finish Tent Design - Part 1</h4>
        <p>Submit a valid plan and correct fabric estimate in 19.1. The app will then provide two comparable tents for the same number of campers.</p>
      </section>
    `;
  }
  const designs = tentComparisonDesigns();
  const own = designs.find((design) => design.id === "own");
  return `
    <section class="tent-comparison" aria-label="Three tent designs for ${own.capacity} campers">
      <p class="tent-comparison-intro">All three tents hold ${own.capacity} ${own.capacity === 1 ? "camper" : "campers"} and include a floor.</p>
      <div class="tent-comparison-grid">
        ${designs.map((design) => {
          const difference = design.id === "own" ? 0 : design.fabric - own.fabric;
          const differenceText = design.id === "own"
            ? "Reference design"
            : `${difference >= 0 ? "+" : "−"}${formatTentMeasure(Math.abs(difference))} sq ft compared with your tent`;
          return `
            <article class="tent-comparison-card" data-tent-comparison-design="${escapeHtml(design.id)}">
              <h4>${escapeHtml(design.label)}</h4>
              <p>${escapeHtml(design.change)}</p>
              ${renderTentModelSvg(design, true)}
              <dl>
                <div><dt>Floor</dt><dd>${design.floorLength} ft × ${design.floorWidth} ft</dd></div>
                <div><dt>Height</dt><dd>${design.height} ft</dd></div>
                <div><dt>Style</dt><dd>${design.style === "a-frame" ? "A-frame" : "Wall tent"}</dd></div>
                <div><dt>Fabric</dt><dd>${formatTentMeasure(design.fabric)} sq ft</dd></div>
              </dl>
              <p class="tent-comparison-difference">${escapeHtml(differenceText)}</p>
            </article>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function teachCropImage(filename, width, height, alt) {
  return `<img src="${encodeURI(`artifacts/unit 1/_teachme-crops/${filename}`)}" width="${width}" height="${height}" alt="${escapeHtml(alt)}" loading="lazy">`;
}

function renderPolyhedronExamplesVisual() {
  return `
    <section class="polyhedron-examples" aria-label="Source examples and non-examples of polyhedra">
      <figure>
        <figcaption>Source examples of polyhedra</figcaption>
        ${teachCropImage("lesson-13-p001-polyhedra-examples.png", 2080, 430, "Five source examples of polyhedra.")}
      </figure>
      <figure>
        <figcaption>Source examples that are not polyhedra</figcaption>
        ${teachCropImage("lesson-13-p001-nonpolyhedra-examples.png", 1900, 440, "Four source examples that are not polyhedra.")}
      </figure>
    </section>
  `;
}

const polyhedronModelIds = Object.freeze(["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O"]);
const polyhedronClassificationValues = Object.freeze(["polyhedron", "not-polyhedron"]);
const polyhedronClassificationExplanations = Object.freeze({
  A: "Its 2 triangles and 3 rectangles meet edge to edge and enclose a triangular prism.",
  B: "Its 6 squares meet edge to edge and enclose a cube.",
  C: "Its 2 parallelograms and 4 rectangles meet edge to edge and enclose a prism.",
  D: "Its 2 trapezoids and 4 rectangles meet edge to edge and enclose a prism.",
  E: "Its 4 triangles meet edge to edge and enclose a tetrahedron.",
  F: "Its square base and 4 triangular faces meet edge to edge and enclose a pyramid.",
  G: "Its pentagonal base and 5 triangular faces meet edge to edge and enclose a pyramid.",
  H: "Its 4 triangular and 4 quadrilateral faces meet edge to edge and enclose a region.",
  J: "Its 2 pentagons and 10 triangles meet edge to edge and enclose a region.",
  K: "Its source panel set has edges that do not join into one closed surface, so it does not enclose a region.",
  L: "A sphere has a curved surface instead of flat polygon faces.",
  M: "A cylinder has a curved side instead of only flat polygon faces.",
  N: "The joined twisted strip does not enclose a three-dimensional region with polygon faces.",
  O: "The polygon panels leave the top open, so the figure is not closed.",
});

function polyhedronClassificationQuestion(card) {
  const question = questionSetDefinition(card, "sort");
  return question?.dynamicAnswer === "polyhedronPerFigure" ? question : null;
}

function polyhedronClassificationValue(card, modelId) {
  if (!polyhedronModelIds.includes(modelId)) return "";
  const value = questionSetValue(card, "sort", modelId);
  return polyhedronClassificationValues.includes(value) ? value : "";
}

function polyhedronClassificationExpected(card, modelId) {
  const question = polyhedronClassificationQuestion(card);
  return question?.answerKey?.includes(modelId) ? "polyhedron" : "not-polyhedron";
}

function polyhedronClassificationSubmitted(card, modelId) {
  return isTeachQuestionSubmitted(card, `sort:${modelId}`);
}

function polyhedronClassificationIsCorrect(card, modelId) {
  return polyhedronClassificationValue(card, modelId) === polyhedronClassificationExpected(card, modelId);
}

function polyhedronClassificationProgress(card) {
  const submittedIds = polyhedronModelIds.filter((modelId) => polyhedronClassificationSubmitted(card, modelId));
  const correctIds = submittedIds.filter((modelId) => polyhedronClassificationIsCorrect(card, modelId));
  return {
    submittedCount: submittedIds.length,
    correctCount: correctIds.length,
    totalCount: polyhedronModelIds.length,
  };
}

function polyhedronSelectedModel(card) {
  const selected = String(getTeachCustomResponse(card).polyhedronModel || "A");
  return polyhedronModelIds.includes(selected) ? selected : "A";
}

function renderPolyhedronSortVisual(card) {
  const selected = polyhedronSelectedModel(card);
  return `
    <section class="polyhedron-sort-workspace" aria-label="Source-derived virtual figures to inspect and sort">
      <div class="polyhedron-source-strip" aria-label="Source examples and non-examples">
        <figure>
          <figcaption>Source examples</figcaption>
          ${teachCropImage("lesson-13-p001-polyhedra-examples.png", 2080, 430, "Five source examples of polyhedra.")}
        </figure>
        <figure>
          <figcaption>Source non-examples</figcaption>
          ${teachCropImage("lesson-13-p001-nonpolyhedra-examples.png", 1900, 440, "Four source examples that are not polyhedra.")}
        </figure>
      </div>
      <div class="polyhedron-inspector-heading">
        <div>
          <p class="polyhedron-workspace-title">Inspect the assigned figures</p>
          <p>Choose a letter, then drag the model to turn it. Use the mouse wheel, trackpad, or zoom controls to inspect another view.</p>
        </div>
        <span class="polyhedron-selected-label" aria-live="polite">Figure ${selected}</span>
      </div>
      <div class="polyhedron-model-picker" role="listbox" aria-label="Assigned figures">
        ${polyhedronModelIds.map((modelId) => {
          const submitted = polyhedronClassificationSubmitted(card, modelId);
          const correct = submitted && polyhedronClassificationIsCorrect(card, modelId);
          const statusClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
          const statusText = submitted ? (correct ? "correct" : "needs revision") : "not submitted";
          return `
          <button
            class="page-chip polyhedron-model-button ${selected === modelId ? "is-active" : ""} ${statusClass}"
            type="button"
            role="option"
            data-polyhedron-model-select="${card.id}"
            data-model-id="${modelId}"
            aria-selected="${selected === modelId}"
            aria-label="Figure ${modelId}, ${statusText}"
          >${modelId}</button>
        `;
        }).join("")}
      </div>
      <div class="polyhedron-canvas-shell">
        <canvas
          class="polyhedron-canvas"
          width="900"
          height="520"
          tabindex="0"
          data-polyhedron-canvas
          data-polyhedron-model="${selected}"
          aria-label="Figure ${selected}. Drag or use the arrow keys to rotate this source-derived virtual figure."
        ></canvas>
      </div>
      <div class="polyhedron-view-controls" aria-label="Figure view controls">
        <button class="hint-button" type="button" data-polyhedron-view="left">Turn left</button>
        <button class="hint-button" type="button" data-polyhedron-view="right">Turn right</button>
        <button class="hint-button" type="button" data-polyhedron-view="up">Tilt up</button>
        <button class="hint-button polyhedron-symbol-button" type="button" data-polyhedron-view="zoom-in" aria-label="Zoom in" title="Zoom in">+</button>
        <button class="hint-button polyhedron-symbol-button" type="button" data-polyhedron-view="zoom-out" aria-label="Zoom out" title="Zoom out">-</button>
        <button class="hint-button" type="button" data-polyhedron-view="reset">Reset view</button>
      </div>
    </section>
  `;
}

const pyramidNetPieceTypes = ["shortTriangle", "tallTriangle", "square", "rectangle", "pentagon", "hexagon"];
const pyramidNetBoard = { width: 760, height: 430, maxPieces: 15 };
const pyramidNetPieceMargin = 102;
const pyramidNetTargetIds = ["Q", "R", "S"];
const pyramidNetTargetDefinitions = {
  Q: {
    label: "Square pyramid",
    baseType: "square",
    triangleType: "shortTriangle",
    triangleDescription: "short triangular side faces",
    triangleCount: 4,
    referenceViewBox: "340 8 310 374",
  },
  R: {
    label: "Pentagonal pyramid",
    baseType: "pentagon",
    triangleType: "tallTriangle",
    triangleDescription: "tall triangular side faces",
    triangleCount: 5,
    referenceViewBox: "655 8 345 374",
  },
  S: {
    label: "Hexagonal pyramid",
    baseType: "hexagon",
    triangleType: "tallTriangle",
    triangleDescription: "tall triangular side faces",
    triangleCount: 6,
    referenceViewBox: "1000 8 430 374",
  },
};
const pyramidNetPieceDefinitions = {
  shortTriangle: {
    label: "Short triangle",
    plural: "short triangles",
    limit: 8,
    points: [[0, -40.415], [35, 20.207], [-35, 20.207]],
  },
  tallTriangle: {
    label: "Tall triangle",
    plural: "tall triangles",
    limit: 8,
    points: [[0, -93.333], [35, 46.667], [-35, 46.667]],
  },
  square: {
    label: "Square",
    plural: "squares",
    limit: 6,
    points: [[-35, -35], [35, -35], [35, 35], [-35, 35]],
  },
  rectangle: {
    label: "Rectangle",
    plural: "rectangles",
    limit: 6,
    points: [[-52.5, -35], [52.5, -35], [52.5, 35], [-52.5, 35]],
  },
  pentagon: {
    label: "Pentagon",
    plural: "pentagons",
    limit: 4,
    points: [[0, -59.554], [56.63, -18.402], [35, 48.183], [-35, 48.183], [-56.63, -18.402]],
  },
  hexagon: {
    label: "Hexagon",
    plural: "hexagons",
    limit: 4,
    points: [[0, -70], [60.622, -35], [60.622, 35], [0, 70], [-60.622, 35], [-60.622, -35]],
  },
};

function normalizePyramidNetAngle(value) {
  const angle = Number(value);
  return Number.isFinite(angle) ? ((angle % 360) + 360) % 360 : 0;
}

function pyramidNetTargetId(card) {
  const target = String(getTeachCustomResponse(card).pyramidNetTarget || "Q");
  return pyramidNetTargetIds.includes(target) ? target : "Q";
}

function pyramidNetTargetDefinition(target) {
  return pyramidNetTargetDefinitions[pyramidNetTargetIds.includes(target) ? target : "Q"];
}

function pyramidNetWorkspace(card, requestedTarget = pyramidNetTargetId(card)) {
  const target = pyramidNetTargetIds.includes(requestedTarget) ? requestedTarget : "Q";
  const response = getTeachCustomResponse(card);
  const storedWorkspaces = response.pyramidNetWorkspaces && typeof response.pyramidNetWorkspaces === "object"
    ? response.pyramidNetWorkspaces
    : {};
  const legacyWorkspace = target === "Q" ? {
    pieces: response.pyramidNetPieces,
    selectedId: response.pyramidNetSelectedId,
    savedSignatures: response.pyramidNetSavedSignatures,
  } : {};
  const sourceWorkspace = storedWorkspaces[target] && typeof storedWorkspaces[target] === "object"
    ? storedWorkspaces[target]
    : legacyWorkspace;
  const source = Array.isArray(sourceWorkspace.pieces) ? sourceWorkspace.pieces : [];
  const seen = new Set();
  const pieces = source.slice(0, pyramidNetBoard.maxPieces).flatMap((piece) => {
    const id = String(piece?.id || "");
    const type = String(piece?.type || "");
    if (!/^pyramid-piece-\d+$/.test(id) || seen.has(id) || !pyramidNetPieceTypes.includes(type)) return [];
    seen.add(id);
    return [{
      id,
      type,
      x: clampNumber(Number(piece.x) || 0, pyramidNetPieceMargin, pyramidNetBoard.width - pyramidNetPieceMargin),
      y: clampNumber(Number(piece.y) || 0, pyramidNetPieceMargin, pyramidNetBoard.height - pyramidNetPieceMargin),
      angle: normalizePyramidNetAngle(piece.angle),
    }];
  });
  const savedSignatures = Array.isArray(sourceWorkspace.savedSignatures)
    ? [...new Set(sourceWorkspace.savedSignatures.map(String).filter((value) => /^[BSPHT(),]+$/.test(value)))].slice(0, 6)
    : [];
  const selectedId = pieces.some((piece) => piece.id === String(sourceWorkspace.selectedId || ""))
    ? String(sourceWorkspace.selectedId)
    : "";
  const workspace = {
    pieces,
    selectedId,
    savedSignatures,
    submitted: Boolean(sourceWorkspace.submitted),
  };
  state.teachCustomResponses[card.id] = {
    ...response,
    pyramidNetTarget: pyramidNetTargetIds.includes(response.pyramidNetTarget) ? response.pyramidNetTarget : "Q",
    pyramidNetWorkspaces: { ...storedWorkspaces, [target]: workspace },
  };
  return workspace;
}

function setPyramidNetWorkspace(card, target, changes) {
  const current = pyramidNetWorkspace(card, target);
  const response = getTeachCustomResponse(card);
  const storedWorkspaces = response.pyramidNetWorkspaces && typeof response.pyramidNetWorkspaces === "object"
    ? response.pyramidNetWorkspaces
    : {};
  const next = { ...current, ...changes };
  state.teachCustomResponses[card.id] = {
    ...response,
    pyramidNetWorkspaces: { ...storedWorkspaces, [target]: next },
  };
  return next;
}

function pyramidNetPieces(card, target = pyramidNetTargetId(card)) {
  return pyramidNetWorkspace(card, target).pieces;
}

function pyramidNetSavedSignatures(card, target = pyramidNetTargetId(card)) {
  return pyramidNetWorkspace(card, target).savedSignatures;
}

function pyramidNetSelectedPieceId(card, target = pyramidNetTargetId(card)) {
  return pyramidNetWorkspace(card, target).selectedId;
}

function pyramidNetAnySaved(card) {
  return pyramidNetTargetIds.some((target) => pyramidNetSavedSignatures(card, target).length > 0);
}

function markPyramidNetChanged(card, target = pyramidNetTargetId(card)) {
  setPyramidNetWorkspace(card, target, { submitted: false });
  state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "compose-q")] = pyramidNetAnySaved(card);
}

function rotateSelectedPyramidNetPiece(card, delta, target = pyramidNetTargetId(card)) {
  if (![-15, 15].includes(delta)) return false;
  const workspace = pyramidNetWorkspace(card, target);
  if (!workspace.selectedId || !workspace.pieces.some((piece) => piece.id === workspace.selectedId)) return false;
  const pieces = workspace.pieces.map((piece) => (
    piece.id === workspace.selectedId
      ? { ...piece, angle: normalizePyramidNetAngle(piece.angle + delta) }
      : piece
  ));
  setPyramidNetWorkspace(card, target, { pieces, submitted: false });
  markPyramidNetChanged(card, target);
  return true;
}

function pyramidNetPieceTransform(piece) {
  return `translate(${piece.x.toFixed(2)} ${piece.y.toFixed(2)}) rotate(${piece.angle.toFixed(2)})`;
}

function pyramidNetWorldPoints(piece) {
  const radians = normalizePyramidNetAngle(piece.angle) * Math.PI / 180;
  const cosine = Math.cos(radians);
  const sine = Math.sin(radians);
  return pyramidNetPieceDefinitions[piece.type].points.map(([x, y]) => ({
    x: piece.x + x * cosine - y * sine,
    y: piece.y + x * sine + y * cosine,
  }));
}

function pyramidNetEdges(points) {
  return points.map((point, index) => [point, points[(index + 1) % points.length]]);
}

function pyramidNetDistance(first, second) {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function pyramidNetEdgesMatch(first, second, tolerance = 2.5) {
  return (pyramidNetDistance(first[0], second[1]) <= tolerance
      && pyramidNetDistance(first[1], second[0]) <= tolerance)
    || (pyramidNetDistance(first[0], second[0]) <= tolerance
      && pyramidNetDistance(first[1], second[1]) <= tolerance);
}

function pyramidNetPolygonsOverlap(first, second) {
  const axes = [...pyramidNetEdges(first), ...pyramidNetEdges(second)].map(([start, end]) => ({
    x: -(end.y - start.y),
    y: end.x - start.x,
  }));
  return axes.every((axis) => {
    const length = Math.hypot(axis.x, axis.y) || 1;
    const unit = { x: axis.x / length, y: axis.y / length };
    const firstProjection = first.map((point) => point.x * unit.x + point.y * unit.y);
    const secondProjection = second.map((point) => point.x * unit.x + point.y * unit.y);
    const overlap = Math.min(Math.max(...firstProjection), Math.max(...secondProjection))
      - Math.max(Math.min(...firstProjection), Math.min(...secondProjection));
    return overlap > 1.5;
  });
}

function pyramidNetTreeSignature(pieces, adjacency, baseType) {
  const root = pieces.findIndex((piece) => piece.type === baseType);
  if (root < 0) return "";
  const visit = (index, parent) => {
    const children = [...adjacency[index]]
      .filter((neighbor) => neighbor !== parent)
      .map((neighbor) => visit(neighbor, index))
      .sort();
    return `${pieces[index].type === baseType ? "B" : "T"}(${children.join("")})`;
  };
  return visit(root, -1);
}

function pyramidNetPieceIsTriangle(piece) {
  return piece?.type === "shortTriangle" || piece?.type === "tallTriangle";
}

function pyramidNetJoinRolesAreValid(join, pieces, baseType) {
  const first = pieces[join.first];
  const second = pieces[join.second];
  if (pyramidNetPieceIsTriangle(first) && pyramidNetPieceIsTriangle(second)) {
    if (first.type === "shortTriangle" && second.type === "shortTriangle") return true;
    return join.firstEdgeIndex !== 1 && join.secondEdgeIndex !== 1;
  }
  if (pyramidNetPieceIsTriangle(first) && second.type === baseType) {
    return first.type === "shortTriangle" || join.firstEdgeIndex === 1;
  }
  if (pyramidNetPieceIsTriangle(second) && first.type === baseType) {
    return second.type === "shortTriangle" || join.secondEdgeIndex === 1;
  }
  return false;
}

function pyramidNetAnalysis(card, target = pyramidNetTargetId(card)) {
  const targetDefinition = pyramidNetTargetDefinition(target);
  const pieces = pyramidNetPieces(card, target);
  const inventory = Object.fromEntries(pyramidNetPieceTypes.map((type) => [type, 0]));
  pieces.forEach((piece) => { inventory[piece.type] += 1; });
  const worldPoints = pieces.map(pyramidNetWorldPoints);
  const adjacency = pieces.map(() => new Set());
  const joins = [];
  let overlap = false;
  for (let first = 0; first < pieces.length; first += 1) {
    for (let second = first + 1; second < pieces.length; second += 1) {
      if (pyramidNetPolygonsOverlap(worldPoints[first], worldPoints[second])) overlap = true;
      const firstEdges = pyramidNetEdges(worldPoints[first]);
      const secondEdges = pyramidNetEdges(worldPoints[second]);
      let joined = null;
      for (let firstEdgeIndex = 0; firstEdgeIndex < firstEdges.length && !joined; firstEdgeIndex += 1) {
        for (let secondEdgeIndex = 0; secondEdgeIndex < secondEdges.length; secondEdgeIndex += 1) {
          if (!pyramidNetEdgesMatch(firstEdges[firstEdgeIndex], secondEdges[secondEdgeIndex])) continue;
          joined = { first, second, firstEdgeIndex, secondEdgeIndex };
          break;
        }
      }
      if (joined) {
        adjacency[first].add(second);
        adjacency[second].add(first);
        joins.push(joined);
      }
    }
  }
  const visited = new Set();
  const pending = pieces.length ? [0] : [];
  while (pending.length) {
    const index = pending.pop();
    if (visited.has(index)) continue;
    visited.add(index);
    adjacency[index].forEach((neighbor) => pending.push(neighbor));
  }
  const inventoryCorrect = pieces.length === targetDefinition.triangleCount + 1
    && inventory[targetDefinition.baseType] === 1
    && inventory[targetDefinition.triangleType] === targetDefinition.triangleCount
    && pyramidNetPieceTypes.every((type) => (
      type === targetDefinition.triangleType || type === targetDefinition.baseType || inventory[type] === 0
    ));
  const connected = pieces.length > 0 && visited.size === pieces.length;
  const joinRolesValid = joins.every((join) => (
    pyramidNetJoinRolesAreValid(join, pieces, targetDefinition.baseType)
  ));
  const valid = inventoryCorrect
    && !overlap
    && connected
    && joinRolesValid
    && joins.length === pieces.length - 1;
  return {
    target,
    targetDefinition,
    pieces,
    inventory,
    inventoryCorrect,
    overlap,
    connected,
    joins,
    joinRolesValid,
    valid,
    signature: valid ? pyramidNetTreeSignature(pieces, adjacency, targetDefinition.baseType) : "",
  };
}

function pyramidNetInventoryText(inventory) {
  const entries = pyramidNetPieceTypes
    .filter((type) => inventory[type] > 0)
    .map((type) => {
      const count = inventory[type];
      const definition = pyramidNetPieceDefinitions[type];
      return `${count} ${count === 1 ? definition.label.toLowerCase() : definition.plural}`;
    });
  return entries.length ? entries.join(", ") : "none yet";
}

function pyramidNetOpenPosition(index) {
  const positions = [
    [105, 110], [240, 110], [380, 110], [520, 110], [655, 110],
    [105, 220], [240, 220], [380, 220], [520, 220], [655, 220],
    [105, 330], [240, 330], [380, 330], [520, 330], [655, 330],
  ];
  return positions[index % positions.length];
}

function addPyramidNetPiece(card, type) {
  if (!pyramidNetPieceTypes.includes(type)) return;
  const target = pyramidNetTargetId(card);
  const pieces = pyramidNetPieces(card, target);
  const definition = pyramidNetPieceDefinitions[type];
  if (pieces.length >= pyramidNetBoard.maxPieces || pieces.filter((piece) => piece.type === type).length >= definition.limit) return;
  const nextNumber = pieces.reduce((highest, piece) => Math.max(highest, Number(piece.id.split("-").pop()) || 0), 0) + 1;
  const [x, y] = pyramidNetOpenPosition(pieces.length);
  const piece = { id: `pyramid-piece-${nextNumber}`, type, x, y, angle: 0 };
  setPyramidNetWorkspace(card, target, {
    pieces: [...pieces, piece],
    selectedId: piece.id,
    submitted: false,
  });
  markPyramidNetChanged(card, target);
}

function pyramidNetCandidateInsideBoard(piece) {
  return pyramidNetWorldPoints(piece).every((point) => (
    point.x >= 8 && point.x <= pyramidNetBoard.width - 8
      && point.y >= 8 && point.y <= pyramidNetBoard.height - 8
  ));
}

function snapPyramidNetPiece(card, pieceId, target = pyramidNetTargetId(card)) {
  const pieces = pyramidNetPieces(card, target);
  const moving = pieces.find((piece) => piece.id === pieceId);
  if (!moving) return;
  const localEdges = pyramidNetEdges(pyramidNetPieceDefinitions[moving.type].points.map(([x, y]) => ({ x, y })));
  let best = null;
  pieces.filter((piece) => piece.id !== pieceId).forEach((target) => {
    pyramidNetEdges(pyramidNetWorldPoints(target)).forEach((targetEdge) => {
      const targetLength = pyramidNetDistance(targetEdge[0], targetEdge[1]);
      localEdges.forEach((localEdge) => {
        const localLength = pyramidNetDistance(localEdge[0], localEdge[1]);
        if (Math.abs(targetLength - localLength) > 1.5) return;
        const desiredAngle = Math.atan2(
          targetEdge[0].y - targetEdge[1].y,
          targetEdge[0].x - targetEdge[1].x
        ) - Math.atan2(localEdge[1].y - localEdge[0].y, localEdge[1].x - localEdge[0].x);
        const cosine = Math.cos(desiredAngle);
        const sine = Math.sin(desiredAngle);
        const rotatedStart = {
          x: localEdge[0].x * cosine - localEdge[0].y * sine,
          y: localEdge[0].x * sine + localEdge[0].y * cosine,
        };
        const candidate = {
          ...moving,
          x: targetEdge[1].x - rotatedStart.x,
          y: targetEdge[1].y - rotatedStart.y,
          angle: normalizePyramidNetAngle(desiredAngle * 180 / Math.PI),
        };
        const movement = Math.hypot(candidate.x - moving.x, candidate.y - moving.y);
        if (movement > 72 || !pyramidNetCandidateInsideBoard(candidate)) return;
        const candidatePoints = pyramidNetWorldPoints(candidate);
        const collides = pieces.some((piece) => (
          piece.id !== pieceId && pyramidNetPolygonsOverlap(candidatePoints, pyramidNetWorldPoints(piece))
        ));
        if (collides || (best && best.movement <= movement)) return;
        best = { candidate, movement };
      });
    });
  });
  if (best) Object.assign(moving, best.candidate);
}

function pyramidNetPieceIcon(type) {
  const points = pyramidNetPieceDefinitions[type].points.map(([x, y]) => `${x},${y}`).join(" ");
  const viewBox = type === "tallTriangle" ? "-130 -130 260 260" : "-100 -100 200 200";
  return `<svg viewBox="${viewBox}" aria-hidden="true"><polygon points="${points}"></polygon></svg>`;
}

function pyramidNetTargetStatus(card, target) {
  const workspace = pyramidNetWorkspace(card, target);
  if (workspace.savedSignatures.length) return { className: "is-complete", text: "Valid net saved" };
  if (workspace.submitted) return { className: "is-revise", text: "Revise" };
  if (workspace.pieces.length) return { className: "is-started", text: "In progress" };
  return { className: "", text: "Not tried" };
}

function renderPyramidNetTargetReference(target) {
  const definition = pyramidNetTargetDefinition(target);
  const sourcePath = encodeURI("artifacts/unit 1/_teachme-crops/lesson-13-p002-pyramid-examples.png");
  const [clipX, clipY, clipWidth, clipHeight] = definition.referenceViewBox.split(" ").map(Number);
  const cropStyle = [
    `--pyramid-crop-ratio: ${clipWidth} / ${clipHeight}`,
    `--pyramid-source-width: ${(1450 / clipWidth * 100).toFixed(4)}%`,
    `--pyramid-source-left: ${(-clipX / clipWidth * 100).toFixed(4)}%`,
    `--pyramid-source-top: ${(-clipY / clipHeight * 100).toFixed(4)}%`,
  ].join("; ");
  return `
    <div class="question-set-object-reference pyramid-target-reference" aria-label="${escapeHtml(`${definition.label}, source Figure ${target}`)}">
      <div class="question-set-object-reference-label">
        <strong>${escapeHtml(definition.label)}</strong>
        <span>Source Figure ${target}</span>
      </div>
      <div
        class="pyramid-target-reference-visual"
        style="${cropStyle}"
        role="img"
        aria-label="Source drawing of Figure ${target}, a ${definition.label.toLowerCase()}."
        data-pyramid-target-figure="${target}"
      >
        <img src="${sourcePath}" width="1450" height="390" alt="" aria-hidden="true">
      </div>
    </div>
  `;
}

function renderPyramidNetVisual(card) {
  const target = pyramidNetTargetId(card);
  const targetDefinition = pyramidNetTargetDefinition(target);
  const analysis = pyramidNetAnalysis(card, target);
  const selectedId = pyramidNetSelectedPieceId(card, target);
  const selectedPiece = analysis.pieces.find((piece) => piece.id === selectedId);
  const savedCount = pyramidNetSavedSignatures(card, target).length;
  const completedTargets = pyramidNetTargetIds.filter((targetId) => pyramidNetSavedSignatures(card, targetId).length > 0);
  return `
    <section class="pyramid-net-workspace" aria-label="Choose loose polygons and compose a net for source Figure ${target}">
      <div class="pyramid-net-target-picker" role="group" aria-label="Choose a source pyramid">
        ${pyramidNetTargetIds.map((targetId) => {
          const definition = pyramidNetTargetDefinition(targetId);
          const status = pyramidNetTargetStatus(card, targetId);
          return `
            <button
              class="pyramid-net-target-button ${target === targetId ? "is-active" : ""} ${status.className}"
              type="button"
              data-pyramid-net-target="${targetId}"
              aria-pressed="${target === targetId}"
            >
              <strong>Figure ${targetId}</strong>
              <span>${escapeHtml(definition.label)}</span>
              <small>${escapeHtml(status.text)}</small>
            </button>
          `;
        }).join("")}
      </div>
      ${renderPyramidNetTargetReference(target)}
      <p>Choose loose cut-outs for Figure ${target}. Drag and rotate them so joined faces share complete edges. The workspace starts empty, and you may remove any piece you do not need.</p>
      <div class="pyramid-polygon-bank" role="group" aria-label="Mixed polygon supply from Blackline Master pages 3 and 4">
        ${pyramidNetPieceTypes.map((type) => {
          const definition = pyramidNetPieceDefinitions[type];
          const count = analysis.inventory[type];
          const disabled = analysis.pieces.length >= pyramidNetBoard.maxPieces || count >= definition.limit;
          return `
            <button class="pyramid-piece-add pyramid-piece-${type}" type="button" data-pyramid-piece-add="${type}" ${disabled ? "disabled" : ""}>
              ${pyramidNetPieceIcon(type)}
              <span>Add ${definition.label.toLowerCase()}</span>
            </button>
          `;
        }).join("")}
      </div>
      <div class="pyramid-net-stage-shell">
        <svg class="pyramid-net-stage" viewBox="0 0 ${pyramidNetBoard.width} ${pyramidNetBoard.height}" role="group" aria-label="Polygon net construction workspace for source Figure ${target}" data-pyramid-net-stage="${target}">
          <rect class="pyramid-net-board" x="1" y="1" width="758" height="428" rx="6"></rect>
          ${analysis.pieces.map((piece) => {
          const points = pyramidNetPieceDefinitions[piece.type].points.map(([x, y]) => `${x},${y}`).join(" ");
          const label = pyramidNetPieceDefinitions[piece.type].label;
          const pieceNumber = analysis.pieces.filter((entry) => entry.type === piece.type).findIndex((entry) => entry.id === piece.id) + 1;
          return `
            <g
              class="pyramid-net-piece pyramid-piece-${piece.type} ${selectedId === piece.id ? "is-selected" : ""}"
              transform="${pyramidNetPieceTransform(piece)}"
              role="button"
              tabindex="0"
              data-pyramid-net-piece="${piece.id}"
              aria-label="${label} cut-out ${pieceNumber}. Drag to move; use the controls to rotate or remove."
              aria-pressed="${selectedId === piece.id}"
            >
              <polygon points="${points}"></polygon>
              <circle cx="0" cy="0" r="4"></circle>
            </g>
          `;
          }).join("")}
        </svg>
        ${analysis.pieces.length ? "" : `
          <div class="pyramid-net-empty-message" aria-hidden="true">
            <strong class="pyramid-net-empty-title">Your workspace is empty</strong>
            <span>Choose a polygon above to begin.</span>
          </div>
        `}
      </div>
      <div class="pyramid-net-status" aria-live="polite">
        <span><strong>On workspace:</strong> ${escapeHtml(pyramidNetInventoryText(analysis.inventory))}</span>
        <span>${savedCount ? `${savedCount} valid ${savedCount === 1 ? "net" : "nets"} saved for Figure ${target}` : `No net saved for Figure ${target}`}</span>
        ${completedTargets.length ? `<span><strong>Completed targets:</strong> ${completedTargets.join(", ")}</span>` : ""}
      </div>
      <div class="pyramid-net-controls" aria-label="Selected polygon controls">
        <span>${selectedPiece ? `Selected: ${escapeHtml(pyramidNetPieceDefinitions[selectedPiece.type].label)}` : "Select a piece to move, rotate, or remove it."}</span>
        <div class="pyramid-net-control-buttons">
          <button class="hint-button" type="button" data-pyramid-net-rotate="-15" ${selectedPiece ? "" : "disabled"}>Rotate left</button>
          <button class="hint-button" type="button" data-pyramid-net-rotate="15" ${selectedPiece ? "" : "disabled"}>Rotate right</button>
          <button class="hint-button" type="button" data-pyramid-net-remove ${selectedPiece ? "" : "disabled"}>Remove piece</button>
          <button class="hint-button" type="button" data-pyramid-net-reset ${analysis.pieces.length ? "" : "disabled"}>${analysis.valid && savedCount ? `Build another Figure ${target} net` : "Clear workspace"}</button>
        </div>
      </div>
    </section>
  `;
}

function polyhedronFoldStep(card) {
  return clampNumber(Number(getTeachCustomResponse(card).polyhedronFoldStep) || 0, 0, 3);
}

function renderPolyhedronFoldVisual(card) {
  const step = polyhedronFoldStep(card);
  const stepText = [
    "Start with the flat shaded faces. Dotted glue flaps are not faces.",
    "The two triangles lift to become the parallel bases.",
    "The three rectangles wrap around and connect the triangular bases.",
    "Net A is fully assembled as a triangular prism.",
  ][step];
  return `
    <section class="polyhedron-fold-workspace" aria-label="Fold Net A into a polyhedron">
      <svg viewBox="0 0 760 400" role="img" aria-label="Net A and its staged fold into a triangular prism, currently at step ${step} of 3.">
        <rect class="polyhedron-fold-board" x="1" y="1" width="758" height="398" rx="6"></rect>
        <g class="fold-flat-net ${step >= 3 ? "is-muted" : ""}">
          <rect x="150" y="42" width="110" height="100"></rect>
          <rect x="150" y="142" width="110" height="100"></rect>
          <rect x="150" y="242" width="110" height="100"></rect>
          <polygon class="fold-triangle ${step >= 1 ? "is-active" : ""}" points="150,142 150,242 62,192"></polygon>
          <polygon class="fold-triangle ${step >= 1 ? "is-active" : ""}" points="260,142 260,242 348,192"></polygon>
          ${step >= 1 ? '<path class="fold-arrow" d="M92 174 Q120 120 162 130"></path><path class="fold-arrow" d="M318 174 Q290 120 248 130"></path>' : ""}
          ${step >= 2 ? '<path class="fold-arrow" d="M205 58 Q305 42 392 122"></path><path class="fold-arrow" d="M205 326 Q305 342 392 262"></path>' : ""}
        </g>
        <g class="folded-prism ${step >= 2 ? "is-visible" : ""} ${step >= 3 ? "is-complete" : ""}">
          <polygon class="folded-prism-side side-one" points="470,116 590,66 550,226 430,276"></polygon>
          <polygon class="folded-prism-side side-two" points="470,116 590,66 670,226 550,276"></polygon>
          <polygon class="folded-prism-side side-three" points="430,276 550,226 670,226 550,276"></polygon>
          <polygon class="folded-prism-base" points="470,116 430,276 550,276"></polygon>
          <polygon class="folded-prism-base" points="590,66 550,226 670,226"></polygon>
        </g>
        <text class="polyhedron-fold-label" x="205" y="374" text-anchor="middle">Net A</text>
        <text class="polyhedron-fold-label" x="568" y="374" text-anchor="middle">assembled polyhedron</text>
      </svg>
      <p class="polyhedron-fold-caption">${escapeHtml(stepText)}</p>
      <div class="polyhedron-fold-controls">
        <button class="hint-button" type="button" data-polyhedron-fold-delta="-1" ${step === 0 ? "disabled" : ""}>Previous fold step</button>
        <span>Fold step ${step} of 3</span>
        <button class="practice-submit" type="button" data-polyhedron-fold-delta="1" ${step === 3 ? "disabled" : ""}>Next fold step</button>
        <button class="hint-button" type="button" data-polyhedron-fold-reset ${step === 0 ? "disabled" : ""}>Reset</button>
      </div>
    </section>
  `;
}

const surfaceNetFoldSpecifications = {
  A: {
    dimensions: "6x5x1",
    faceInventory: "6x5:2|6x1:2|5x1:2",
    captions: [
      "Use the source grid to identify all six faces before folding.",
      "Pair the two 6 by 5 faces, the two 6 by 1 faces, and the two 5 by 1 faces. The bold shared edges act as hinges.",
      "The 1-unit side faces are raised. Follow the arrow to close the remaining 6 by 5 face.",
      "All six source faces now meet along matching edges. Use those same face dimensions in your surface-area calculation.",
    ],
  },
  B: {
    dimensions: "base4x4|triangles-base4-height4",
    faceInventory: "square4x4:1|triangle-base4-height4:4",
    captions: [
      "Use the source grid to identify the square base and four congruent triangular faces.",
      "Each triangle has a 4-unit base and a 4-unit face height. Fold each triangle along one edge of the 4 by 4 square.",
      "Three triangular faces are raised. Follow the arrow to close the fourth face without overlapping another face.",
      "The square base and all four source triangles now form one closed solid. Use all five face areas in your calculation.",
    ],
  },
  C: {
    dimensions: "right-triangle3-4-5|length3",
    faceInventory: "right-triangle3-4-5:2|3x3:1|3x4:1|3x5:1",
    captions: [
      "Use the source grid to identify two 3-4-5 right triangles and three rectangles with a common 3-unit length.",
      "Match the 3 by 3, 3 by 4, and 3 by 5 rectangles to the 3-, 4-, and 5-unit edges of each triangle.",
      "The 3 by 3 square is the support face. The 3 by 4 and 3 by 5 rectangles meet above it. Follow the arrow to close the second triangular end.",
      "The completed prism rests on its 3 by 3 square face and keeps the source's two 3-4-5 right-triangle ends. Use all five source faces in your calculation.",
    ],
  },
};

const surfaceNetBCanonicalProjection = Object.freeze({
  viewBox: "0 0 310 260",
  base: "29,171|112,225|265,215|192,160",
  apex: "143,28",
});

const surfaceNetCCanonicalProjection = Object.freeze({
  supportFace: "45,225|135,225|185,185|95,185",
  frontTriangle: "45,225|135,225|45,105",
  backTriangle: "95,185|185,185|95,65",
});

function surfaceNetFoldStep(card, netId) {
  const rawStep = getTeachCustomResponse(card)[`surfaceNetFold${netId}`];
  if (rawStep === "folded") return 3;
  return clampNumber(Number(rawStep) || 0, 0, 3);
}

function surfaceNetSvgOpen(netId, step, extraAttributes = "", viewBox = "0 0 340 280") {
  const specification = surfaceNetFoldSpecifications[netId];
  return `<svg
    class="surface-net-model"
    viewBox="${viewBox}"
    role="img"
    aria-label="Fold step ${step} for source Net ${netId}."
    data-surface-net-model="${netId}"
    data-fold-step="${step}"
    data-source-dimensions="${specification.dimensions}"
    data-face-inventory="${specification.faceInventory}"
    ${extraAttributes}
  >`;
}

function surfaceNetArrowDefinition(netId, step) {
  const markerId = `surface-net-arrow-${netId.toLowerCase()}-${step}`;
  return {
    markerId,
    markup: `<defs>
      <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path class="surface-net-arrow-head" d="M0,0 L8,4 L0,8 Z"></path>
      </marker>
    </defs>`,
  };
}

function renderSurfaceNetFlatMap(netId) {
  const { markerId, markup: markerMarkup } = surfaceNetArrowDefinition(netId, 1);
  if (netId === "A") {
    return `${surfaceNetSvgOpen(netId, 1, 'data-fold-state="hinges"')}
      ${markerMarkup}
      <g class="surface-net-flat-map">
        <rect class="surface-net-face surface-net-face-main" data-face-dimensions="6x5" x="122" y="68" width="96" height="80"></rect>
        <rect class="surface-net-face surface-net-face-main" data-face-dimensions="6x5" x="122" y="164" width="96" height="80"></rect>
        <rect class="surface-net-face surface-net-face-accent" data-face-dimensions="6x1" x="122" y="52" width="96" height="16"></rect>
        <rect class="surface-net-face surface-net-face-accent" data-face-dimensions="6x1" x="122" y="148" width="96" height="16"></rect>
        <rect class="surface-net-face surface-net-face-side" data-face-dimensions="5x1" x="106" y="68" width="16" height="80"></rect>
        <rect class="surface-net-face surface-net-face-side" data-face-dimensions="5x1" x="218" y="68" width="16" height="80"></rect>
        <path class="surface-net-hinge" d="M122 68H218 M122 148H218 M122 164H218 M122 68V148 M218 68V148"></path>
        <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M96 108C70 108 70 72 102 72"></path>
        <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M244 108C270 108 270 72 238 72"></path>
        <text class="surface-net-face-label" x="170" y="112">6 by 5</text>
        <text class="surface-net-face-label" x="170" y="208">6 by 5</text>
        <text class="surface-net-small-label" x="170" y="64">6 by 1</text>
        <text class="surface-net-small-label" x="170" y="160">6 by 1</text>
        <text class="surface-net-small-label" transform="translate(118 108) rotate(-90)">5 by 1</text>
        <text class="surface-net-small-label" transform="translate(230 108) rotate(-90)">5 by 1</text>
      </g>
    </svg>`;
  }
  if (netId === "B") {
    return `${surfaceNetSvgOpen(netId, 1, 'data-fold-state="hinges"')}
      ${markerMarkup}
      <g class="surface-net-flat-map">
        <rect class="surface-net-face surface-net-face-base" data-face-dimensions="4x4" x="130" y="100" width="80" height="80"></rect>
        <polygon class="surface-net-face surface-net-face-main" data-face-dimensions="triangle-base4-height4" points="130,100 210,100 170,20"></polygon>
        <polygon class="surface-net-face surface-net-face-accent" data-face-dimensions="triangle-base4-height4" points="210,100 210,180 290,140"></polygon>
        <polygon class="surface-net-face surface-net-face-main" data-face-dimensions="triangle-base4-height4" points="130,180 210,180 170,260"></polygon>
        <polygon class="surface-net-face surface-net-face-accent" data-face-dimensions="triangle-base4-height4" points="130,100 130,180 50,140"></polygon>
        <path class="surface-net-hinge" d="M130 100H210V180H130Z"></path>
        <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M170 12C212 12 224 48 208 82"></path>
        <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M298 140C298 98 262 86 228 102"></path>
        <text class="surface-net-face-label" x="170" y="144">4 by 4</text>
        <text class="surface-net-small-label" x="170" y="62">base 4, height 4</text>
      </g>
    </svg>`;
  }
  return `${surfaceNetSvgOpen(netId, 1, 'data-fold-state="hinges" data-triangle-sides="3,4,5"')}
    ${markerMarkup}
    <g class="surface-net-flat-map">
      <rect class="surface-net-face surface-net-face-side" data-face-dimensions="3x5" x="140" y="18" width="60" height="100"></rect>
      <rect class="surface-net-face surface-net-face-main" data-face-dimensions="3x3" x="140" y="118" width="60" height="60"></rect>
      <rect class="surface-net-face surface-net-face-accent" data-face-dimensions="3x4" x="140" y="178" width="60" height="80"></rect>
      <polygon class="surface-net-face surface-net-face-main" data-face-dimensions="right-triangle3-4-5" points="140,118 140,178 60,178"></polygon>
      <polygon class="surface-net-face surface-net-face-main" data-face-dimensions="right-triangle3-4-5" points="200,118 200,178 280,178"></polygon>
      <path class="surface-net-hinge" d="M140 118H200 M140 178H200 M140 118V178 M200 118V178"></path>
      <path class="surface-net-right-angle" d="M140 166H128V178"></path>
      <path class="surface-net-right-angle" d="M200 166H212V178"></path>
      <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M48 178C42 138 82 112 122 126"></path>
      <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M292 178C298 138 258 112 218 126"></path>
      <text class="surface-net-small-label" x="170" y="70">3 by 5</text>
      <text class="surface-net-small-label" x="170" y="151">3 by 3</text>
      <text class="surface-net-small-label" x="170" y="222">3 by 4</text>
      <text class="surface-net-small-label" x="91" y="192">3-4-5</text>
      <text class="surface-net-small-label" x="249" y="192">3-4-5</text>
    </g>
  </svg>`;
}

function renderSurfaceNetOpenShell(netId) {
  const { markerId, markup: markerMarkup } = surfaceNetArrowDefinition(netId, 2);
  if (netId === "A") {
    return `${surfaceNetSvgOpen(netId, 2, 'data-fold-state="open-shell"')}
      ${markerMarkup}
      <polygon class="surface-net-solid-base" data-face-dimensions="6x5" points="45,180 225,180 300,130 120,130"></polygon>
      <polygon class="surface-net-solid-front" data-face-dimensions="6x1" points="45,180 225,180 225,210 45,210"></polygon>
      <polygon class="surface-net-solid-side" data-face-dimensions="5x1" points="225,180 300,130 300,160 225,210"></polygon>
      <polygon class="surface-net-open-face" data-face-dimensions="6x5" points="120,130 300,130 300,30 120,30"></polygon>
      <path class="surface-net-hinge" d="M120 130H300"></path>
      <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M205 58C184 90 190 118 224 139"></path>
      <text class="surface-net-face-label" x="210" y="86">6 by 5</text>
      <text class="surface-net-small-label" x="135" y="192">6 by 1</text>
      <text class="surface-net-small-label" x="264" y="177">5 by 1</text>
    </svg>`;
  }
  if (netId === "B") {
    return `${surfaceNetSvgOpen(
      netId,
      2,
      `data-fold-state="open-shell" data-view-style="source-wireframe" data-source-figure="lesson-14.1-figure-3" data-base-projection="${surfaceNetBCanonicalProjection.base}" data-apex-projection="${surfaceNetBCanonicalProjection.apex}" data-open-face-apex-projection="95,73"`,
      surfaceNetBCanonicalProjection.viewBox
    )}
      ${markerMarkup}
      <polygon class="surface-net-source-wireframe-base" data-face-dimensions="4x4" points="29,171 112,225 265,215 192,160"></polygon>
      <polygon class="surface-net-source-wireframe-face surface-net-raised-face" data-face-dimensions="triangle-base4-height4" points="143,28 192,160 265,215"></polygon>
      <polygon class="surface-net-source-wireframe-face surface-net-raised-face" data-face-dimensions="triangle-base4-height4" points="143,28 112,225 265,215"></polygon>
      <polygon class="surface-net-source-wireframe-face surface-net-raised-face" data-face-dimensions="triangle-base4-height4" points="143,28 29,171 112,225"></polygon>
      <polygon class="surface-net-source-wireframe-open-face" data-face-dimensions="triangle-base4-height4" points="29,171 192,160 95,73"></polygon>
      <path class="surface-net-source-wireframe-edge" d="M143 28L29 171L112 225L265 215 M143 28L112 225 M143 28L265 215"></path>
      <path class="surface-net-source-wireframe-hidden-edge" d="M143 28L192 160L265 215 M29 171L192 160"></path>
      <path class="surface-net-source-wireframe-open-edge" d="M29 171L95 73L192 160"></path>
      <path class="surface-net-source-wireframe-hinge" d="M192 160L29 171"></path>
      <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M99 72C111 52 127 36 140 30"></path>
    </svg>`;
  }
  return `${surfaceNetSvgOpen(
    netId,
    2,
    `data-fold-state="open-shell" data-triangle-sides="3,4,5" data-prism-length="3" data-support-face="3x3" data-support-face-projection="${surfaceNetCCanonicalProjection.supportFace}" data-front-triangle-projection="${surfaceNetCCanonicalProjection.frontTriangle}" data-back-triangle-projection="${surfaceNetCCanonicalProjection.backTriangle}"`
  )}
    ${markerMarkup}
    <polygon class="surface-net-open-face" data-face-dimensions="right-triangle3-4-5" data-folding-face="back-triangle" points="95,185 185,185 270,80"></polygon>
    <polygon class="surface-net-solid-base surface-net-support-face" data-face-dimensions="3x3" data-support-face="true" points="45,225 135,225 185,185 95,185"></polygon>
    <polygon class="surface-net-solid-side" data-face-dimensions="3x4" points="45,225 45,105 95,65 95,185"></polygon>
    <polygon class="surface-net-solid-top" data-face-dimensions="3x5" points="45,105 135,225 185,185 95,65"></polygon>
    <polygon class="surface-net-solid-front" data-face-dimensions="right-triangle3-4-5" data-folded-face="front-triangle" points="45,225 135,225 45,105"></polygon>
    <path class="surface-net-right-angle" d="M45 213H57V225"></path>
    <path class="surface-net-hinge" d="M95 185H185"></path>
    <path class="surface-net-fold-arrow" marker-end="url(#${markerId})" d="M264 78C228 46 155 43 99 63"></path>
    <text class="surface-net-small-label" x="115" y="207" data-support-face-label="3x3">3 by 3 base</text>
    <text class="surface-net-dimension" x="31" y="169" data-edge-length="4">4</text>
    <text class="surface-net-dimension" x="90" y="242" data-edge-length="3">3</text>
    <text class="surface-net-dimension" transform="translate(94 158) rotate(53)" data-edge-length="5">5</text>
  </svg>`;
}

function renderSurfaceNetCompleteSolid(netId) {
  if (netId === "A") {
    return `${surfaceNetSvgOpen(netId, 3, 'data-fold-state="complete"')}
      <polygon class="surface-net-solid-back surface-net-solid-hidden" points="120,145 300,145 300,115 120,115"></polygon>
      <polygon class="surface-net-solid-top" data-face-dimensions="6x5" points="45,165 225,165 300,115 120,115"></polygon>
      <polygon class="surface-net-solid-front" data-face-dimensions="6x1" points="45,165 225,165 225,195 45,195"></polygon>
      <polygon class="surface-net-solid-side" data-face-dimensions="5x1" points="225,165 300,115 300,145 225,195"></polygon>
      <path class="surface-net-solid-hidden-edge" d="M45 195L120 145H300"></path>
      <text class="surface-net-dimension" x="135" y="218" data-edge-length="6">6</text>
      <text class="surface-net-dimension" x="270" y="184" data-edge-length="5">5</text>
      <text class="surface-net-dimension" x="31" y="184" data-edge-length="1">1</text>
    </svg>`;
  }
  if (netId === "B") {
    const specification = surfaceNetFoldSpecifications[netId];
    return `
      <div
        class="surface-net-model surface-net-source-solid"
        data-surface-net-model="${netId}"
        data-fold-step="3"
        data-fold-state="complete"
        data-source-dimensions="${specification.dimensions}"
        data-face-inventory="${specification.faceInventory}"
        data-view-style="source-wireframe"
        data-source-figure="lesson-14.1-figure-3"
        data-base-projection="${surfaceNetBCanonicalProjection.base}"
        data-apex-projection="${surfaceNetBCanonicalProjection.apex}"
      >
        <img
          src="artifacts/unit 1/_teachme-crops/lesson-14-square-pyramid-assembled-source.png"
          width="310"
          height="260"
          alt="Source wireframe view of Net B in its completed folded state."
        >
      </div>
    `;
  }
  return `${surfaceNetSvgOpen(
    netId,
    3,
    `data-fold-state="complete" data-triangle-sides="3,4,5" data-prism-length="3" data-support-face="3x3" data-support-face-projection="${surfaceNetCCanonicalProjection.supportFace}" data-front-triangle-projection="${surfaceNetCCanonicalProjection.frontTriangle}" data-back-triangle-projection="${surfaceNetCCanonicalProjection.backTriangle}"`
  )}
    <polygon class="surface-net-solid-back" data-face-dimensions="right-triangle3-4-5" data-folded-face="back-triangle" points="95,185 185,185 95,65"></polygon>
    <polygon class="surface-net-solid-base surface-net-support-face" data-face-dimensions="3x3" data-support-face="true" points="45,225 135,225 185,185 95,185"></polygon>
    <polygon class="surface-net-solid-side" data-face-dimensions="3x4" points="45,225 45,105 95,65 95,185"></polygon>
    <polygon class="surface-net-solid-top" data-face-dimensions="3x5" points="45,105 135,225 185,185 95,65"></polygon>
    <polygon class="surface-net-solid-front" data-face-dimensions="right-triangle3-4-5" data-folded-face="front-triangle" points="45,225 135,225 45,105"></polygon>
    <path class="surface-net-right-angle" d="M45 213H57V225"></path>
    <text class="surface-net-small-label" x="115" y="207" data-support-face-label="3x3">3 by 3 base</text>
    <text class="surface-net-dimension" x="31" y="169" data-edge-length="4">4</text>
    <text class="surface-net-dimension" x="90" y="242" data-edge-length="3">3</text>
    <text class="surface-net-dimension" transform="translate(94 158) rotate(53)" data-edge-length="5">5</text>
  </svg>`;
}

function renderSurfaceNetStage(netId, step) {
  if (step === 1) return renderSurfaceNetFlatMap(netId);
  if (step === 2) return renderSurfaceNetOpenShell(netId);
  if (step === 3) return renderSurfaceNetCompleteSolid(netId);
  return `
    <div class="surface-net-fold-intro">
      <span>Flat source net</span>
      <p>Study the shaded faces and grid. Select <strong>Next fold step</strong> when you are ready to trace how the faces meet.</p>
    </div>
  `;
}

function renderSurfaceNetFoldVisual(card, question) {
  const netId = ["A", "B", "C"].includes(question?.netId) ? question.netId : "A";
  const step = surfaceNetFoldStep(card, netId);
  const specification = surfaceNetFoldSpecifications[netId];
  return `
    <section class="surface-net-fold-workspace" aria-label="Fold source Net ${netId}">
      <figure class="surface-net-source">
        <figcaption>Source Net ${netId}: every shaded region is a face of the solid.</figcaption>
        <img
          src="${encodeURI(`artifacts/unit 1/_teachme-crops/${question.visualCropPath}`)}"
          width="${Number(question.visualWidth)}"
          height="${Number(question.visualHeight)}"
          alt="${escapeHtml(question.visualAlt)}"
          loading="lazy"
        >
      </figure>
      <div class="surface-net-assembly" data-surface-net-stage="${step}" aria-live="polite">
        <div class="surface-net-stage-heading">
          <span>Fold step ${step} of 3</span>
          <strong>${step === 0 ? "Inspect the flat net" : step === 1 ? "Match faces and hinges" : step === 2 ? "Build the open shell" : "Check the closed solid"}</strong>
        </div>
        ${renderSurfaceNetStage(netId, step)}
        <p>${specification.captions[step]}</p>
      </div>
      <div class="surface-net-fold-controls">
        <button
          class="hint-button"
          type="button"
          data-surface-net-fold-delta="-1"
          data-surface-net-id="${netId}"
          data-question-id="${escapeHtml(question.id)}"
          ${step === 0 ? "disabled" : ""}
        >Previous fold step</button>
        <span aria-label="Current fold progress">Step ${step} of 3</span>
        <button
          class="practice-submit"
          type="button"
          data-surface-net-fold-delta="1"
          data-surface-net-id="${netId}"
          data-question-id="${escapeHtml(question.id)}"
          ${step === 3 ? "disabled" : ""}
        >Next fold step</button>
        <button
          class="hint-button"
          type="button"
          data-surface-net-fold-reset
          data-surface-net-id="${netId}"
          data-question-id="${escapeHtml(question.id)}"
          ${step === 0 ? "disabled" : ""}
        >Reset net</button>
      </div>
    </section>
  `;
}

const rectangularPrismNetFaceTypes = ["13x5", "13x4", "5x4"];
const rectangularPrismNetBoard = { width: 42, height: 34, unit: 20 };

function rectangularPrismNetFaceDimensions(type, rotated = false) {
  if (!rectangularPrismNetFaceTypes.includes(type)) return null;
  const [first, second] = type.split("x").map(Number);
  return rotated ? { width: second, height: first } : { width: first, height: second };
}

function rectangularPrismNetFaces(card) {
  const seen = new Set();
  return String(getTeachCustomResponse(card).prismNetFaces || "").split("|").map((entry) => {
    const match = /^(\d{1,2}),(13x5|13x4|5x4),(\d{1,2}),(\d{1,2}),([01])$/.exec(entry);
    if (!match) return null;
    const id = Number(match[1]);
    const type = match[2];
    const x = Number(match[3]);
    const y = Number(match[4]);
    const rotated = match[5] === "1";
    const dimensions = rectangularPrismNetFaceDimensions(type, rotated);
    if (!dimensions || seen.has(id) || id < 1 || x < 0 || y < 0
      || x + dimensions.width > rectangularPrismNetBoard.width
      || y + dimensions.height > rectangularPrismNetBoard.height) return null;
    seen.add(id);
    return { id, type, x, y, rotated, ...dimensions };
  }).filter(Boolean).slice(0, 6);
}

function rectangularPrismNetFacesSignature(faces) {
  return [...faces].sort((a, b) => a.id - b.id)
    .map((face) => `${face.id},${face.type},${face.x},${face.y},${face.rotated ? 1 : 0}`)
    .join("|");
}

function rectangularPrismNetTool(card) {
  const response = getTeachCustomResponse(card);
  const type = rectangularPrismNetFaceTypes.includes(response.prismNetFaceType)
    ? response.prismNetFaceType
    : rectangularPrismNetFaceTypes[0];
  const rotated = response.prismNetFaceRotated === "true";
  return { type, rotated, ...rectangularPrismNetFaceDimensions(type, rotated) };
}

function rectangularPrismNetSelectedFaceId(card, faces = rectangularPrismNetFaces(card)) {
  const selectedId = Number(getTeachCustomResponse(card).prismNetSelectedFaceId);
  return faces.some((face) => face.id === selectedId) ? selectedId : faces.at(-1)?.id || 0;
}

function rectangularPrismNetFacesOverlap(first, second) {
  return first.x < second.x + second.width
    && first.x + first.width > second.x
    && first.y < second.y + second.height
    && first.y + first.height > second.y;
}

function rectangularPrismNetNeighborDirection(first, second) {
  if (first.x + first.width === second.x && first.y === second.y && first.height === second.height) return [1, 0];
  if (second.x + second.width === first.x && first.y === second.y && first.height === second.height) return [-1, 0];
  if (first.y + first.height === second.y && first.x === second.x && first.width === second.width) return [0, 1];
  if (second.y + second.height === first.y && first.x === second.x && first.width === second.width) return [0, -1];
  return null;
}

function rectangularPrismNetAxisKey(vector) {
  return vector.findIndex((value) => Math.abs(value) === 1);
}

function rectangularPrismNetAnalysis(card) {
  const faces = rectangularPrismNetFaces(card);
  const inventory = Object.fromEntries(rectangularPrismNetFaceTypes.map((type) => [type, 0]));
  faces.forEach((face) => { inventory[face.type] += 1; });
  let overlap = false;
  const neighbors = new Map(faces.map((face) => [face.id, []]));
  for (let firstIndex = 0; firstIndex < faces.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < faces.length; secondIndex += 1) {
      const first = faces[firstIndex];
      const second = faces[secondIndex];
      if (rectangularPrismNetFacesOverlap(first, second)) overlap = true;
      const direction = rectangularPrismNetNeighborDirection(first, second);
      if (!direction) continue;
      neighbors.get(first.id).push({ id: second.id, dx: direction[0], dy: direction[1] });
      neighbors.get(second.id).push({ id: first.id, dx: -direction[0], dy: -direction[1] });
    }
  }

  const orientations = new Map();
  let orientationConsistent = true;
  if (faces.length) {
    orientations.set(faces[0].id, { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] });
    const queue = [faces[0].id];
    while (queue.length) {
      const faceId = queue.shift();
      const orientation = orientations.get(faceId);
      for (const neighbor of neighbors.get(faceId) || []) {
        const expected = cubeNetFoldOrientation(orientation, neighbor.dx, neighbor.dy);
        const existing = orientations.get(neighbor.id);
        if (existing) {
          if (!cubeNetVectorEquals(existing.n, expected.n)
            || !cubeNetVectorEquals(existing.u, expected.u)
            || !cubeNetVectorEquals(existing.v, expected.v)) orientationConsistent = false;
        } else {
          orientations.set(neighbor.id, expected);
          queue.push(neighbor.id);
        }
      }
    }
  }

  const axisLengths = new Map();
  let dimensionsConsistent = true;
  faces.forEach((face) => {
    const orientation = orientations.get(face.id);
    if (!orientation) return;
    for (const [axis, length] of [[rectangularPrismNetAxisKey(orientation.u), face.width], [rectangularPrismNetAxisKey(orientation.v), face.height]]) {
      if (axis < 0) dimensionsConsistent = false;
      else if (axisLengths.has(axis) && axisLengths.get(axis) !== length) dimensionsConsistent = false;
      else axisLengths.set(axis, length);
    }
  });
  const uniqueNormals = new Set([...orientations.values()].map(({ n }) => n.join(","))).size;
  const dimensions = [...axisLengths.values()].sort((a, b) => a - b);
  const inventoryCorrect = rectangularPrismNetFaceTypes.every((type) => inventory[type] === 2);
  const connected = faces.length > 0 && orientations.size === faces.length;
  const topologyValid = faces.length === 6 && connected && orientationConsistent && uniqueNormals === 6;
  const sourceDimensionsValid = dimensionsConsistent && dimensions.join(",") === "4,5,13";
  return {
    faces,
    inventory,
    overlap,
    connected,
    inventoryCorrect,
    topologyValid,
    sourceDimensionsValid,
    valid: faces.length === 6 && !overlap && inventoryCorrect && topologyValid && sourceDimensionsValid,
  };
}

function rectangularPrismNetFeedbackText(card) {
  const analysis = rectangularPrismNetAnalysis(card);
  if (!analysis.faces.length) return "Begin with one source-sized rectangular face on the blank graph paper.";
  if (analysis.faces.length < 6) return `Your net has ${analysis.faces.length} of 6 faces. Continue from the selected face and join each new face along one complete matching edge.`;
  if (analysis.overlap) return "At least two faces overlap. Remove a face and rebuild so the polygons meet only along complete edges.";
  if (!analysis.inventoryCorrect) return "The face inventory needs revision. Study the 13, 5, and 4 unit edges on Polyhedron C and account for every opposite face.";
  if (!analysis.connected) return "All six faces must belong to one connected net. Join every face along a complete edge.";
  if (!analysis.sourceDimensionsValid) return "A shared edge has incompatible source dimensions. Rotate or replace a face so every joined edge has one matching length.";
  if (!analysis.topologyValid) return "The six faces are connected, but this arrangement would fold two faces onto the same side. Revise the net topology.";
  return "Valid net. The six source-sized faces connect without overlap and fold onto six different sides of Polyhedron C.";
}

function rectangularPrismNetPlacement(parent, tool, direction) {
  if (!parent || !tool) return null;
  if ((direction === "north" || direction === "south") && tool.width !== parent.width) return null;
  if ((direction === "east" || direction === "west") && tool.height !== parent.height) return null;
  if (direction === "north") return { x: parent.x, y: parent.y - tool.height };
  if (direction === "south") return { x: parent.x, y: parent.y + parent.height };
  if (direction === "east") return { x: parent.x + parent.width, y: parent.y };
  if (direction === "west") return { x: parent.x - tool.width, y: parent.y };
  return null;
}

function rectangularPrismNetPlacementFits(faces, candidate) {
  return candidate.x >= 0 && candidate.y >= 0
    && candidate.x + candidate.width <= rectangularPrismNetBoard.width
    && candidate.y + candidate.height <= rectangularPrismNetBoard.height
    && !faces.some((face) => rectangularPrismNetFacesOverlap(face, candidate));
}

function storeRectangularPrismNet(card, faces, changes = {}) {
  state.teachCustomResponses[card.id] = {
    ...getTeachCustomResponse(card),
    ...changes,
    prismNetFaces: rectangularPrismNetFacesSignature(faces),
  };
  for (const questionId of ["build-net", "surface-area"]) {
    state.teachQuestionSubmitted[teachQuestionStateKey(card.id, questionId)] = false;
  }
}

function renderRectangularPrismNetVisual(card) {
  const analysis = rectangularPrismNetAnalysis(card);
  const faces = analysis.faces;
  const tool = rectangularPrismNetTool(card);
  const selectedFaceId = rectangularPrismNetSelectedFaceId(card, faces);
  const selectedFace = faces.find((face) => face.id === selectedFaceId);
  const unit = rectangularPrismNetBoard.unit;
  const message = String(getTeachCustomResponse(card).prismNetMessage || rectangularPrismNetFeedbackText(card));
  return `
    <section class="rectangular-prism-net-workspace" aria-label="Build and label a net for assigned Polyhedron C">
      <figure class="rectangular-prism-net-source">
        <figcaption>Assigned Polyhedron C: rectangular prism with edge lengths 13, 5, and 4 units.</figcaption>
        ${teachCropImage("lesson-15-p001-polyhedron-drawings-blackline.png", 700, 188, "Assigned source Polyhedron C with dimensions 13, 5, and 4 units.")}
      </figure>
      <div class="rectangular-prism-net-tools">
        <p>Choose a face size and orientation. Start on the blank graph paper, then select a placed face and attach the next face along a complete matching edge.</p>
        <div class="rectangular-prism-net-palette" role="group" aria-label="Face-size drawing tools">
          ${rectangularPrismNetFaceTypes.map((faceType) => `<button class="option-button ${tool.type === faceType ? "is-selected" : ""}" type="button" data-prism-net-face-type="${faceType}" aria-pressed="${tool.type === faceType}">${faceType.replace("x", " by ")}</button>`).join("")}
          <button class="hint-button" type="button" data-prism-net-rotate aria-pressed="${tool.rotated}">Rotate face</button>
        </div>
        <p class="rectangular-prism-net-tool-status">Current tool: ${tool.width} units across by ${tool.height} units down.</p>
        <div class="rectangular-prism-net-attach-controls" role="group" aria-label="Place or attach selected face tool">
          ${faces.length === 0
            ? `<button class="practice-submit" type="button" data-prism-net-place-first>Place first face</button>`
            : `
              <span>Attach to Face ${selectedFaceId}:</span>
              <button class="hint-button" type="button" data-prism-net-attach="north">Above</button>
              <button class="hint-button" type="button" data-prism-net-attach="east">Right</button>
              <button class="hint-button" type="button" data-prism-net-attach="south">Below</button>
              <button class="hint-button" type="button" data-prism-net-attach="west">Left</button>
              <button class="hint-button" type="button" data-prism-net-remove>Remove Face ${selectedFaceId}</button>
            `}
        </div>
      </div>
      <svg viewBox="0 0 ${rectangularPrismNetBoard.width * unit} ${rectangularPrismNetBoard.height * unit}" role="img" aria-label="Blank graph-paper net builder with ${faces.length} of 6 faces placed.">
        <defs>
          <pattern id="rectangular-prism-net-grid" width="${unit}" height="${unit}" patternUnits="userSpaceOnUse">
            <path d="M${unit} 0H0V${unit}" fill="none" stroke="#c9d5da" stroke-width="1"></path>
          </pattern>
        </defs>
        <rect class="rectangular-prism-net-board" x="1" y="1" width="${rectangularPrismNetBoard.width * unit - 2}" height="${rectangularPrismNetBoard.height * unit - 2}" rx="6"></rect>
        <rect x="0" y="0" width="${rectangularPrismNetBoard.width * unit}" height="${rectangularPrismNetBoard.height * unit}" fill="url(#rectangular-prism-net-grid)"></rect>
        ${faces.map((face, index) => `
          <g
            class="rectangular-prism-net-face ${face.id === selectedFaceId ? "is-selected" : ""}"
            role="button"
            tabindex="0"
            data-prism-net-face="${face.id}"
            aria-label="Face ${index + 1}, ${face.width} by ${face.height} units${face.id === selectedFaceId ? ", selected" : ""}"
          >
            <rect x="${face.x * unit}" y="${face.y * unit}" width="${face.width * unit}" height="${face.height * unit}"></rect>
            <text x="${(face.x + face.width / 2) * unit}" y="${(face.y + face.height / 2) * unit - 5}" text-anchor="middle">
              <tspan x="${(face.x + face.width / 2) * unit}">Face ${index + 1}</tspan>
              <tspan x="${(face.x + face.width / 2) * unit}" dy="22">${face.width} x ${face.height}</tspan>
            </text>
          </g>
        `).join("")}
      </svg>
      <div class="rectangular-prism-net-status">
        <span>${faces.length} of 6 faces placed. ${escapeHtml(message)}</span>
        <button class="hint-button" type="button" data-prism-net-reset ${faces.length === 0 ? "disabled" : ""}>Reset net</button>
      </div>
    </section>
  `;
}

function cubeNetCells(card) {
  const seen = new Set();
  return String(getTeachCustomResponse(card).cubeNetCells || "").split("|").map((entry) => {
    const [x, y] = entry.split(",").map(Number);
    return { x, y };
  }).filter(({ x, y }) => {
    const key = `${x},${y}`;
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || x > 6 || y < 0 || y > 6 || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function cubeNetCellString(cells) {
  return [...cells].sort((a, b) => a.y - b.y || a.x - b.x).map(({ x, y }) => `${x},${y}`).join("|");
}

function cubeNetVectorEquals(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function cubeNetNegate(vector) {
  return vector.map((value) => -value);
}

function cubeNetFoldOrientation(orientation, dx, dy) {
  if (dx === 1) return { n: orientation.u, u: cubeNetNegate(orientation.n), v: orientation.v };
  if (dx === -1) return { n: cubeNetNegate(orientation.u), u: orientation.n, v: orientation.v };
  if (dy === 1) return { n: orientation.v, u: orientation.u, v: cubeNetNegate(orientation.n) };
  return { n: cubeNetNegate(orientation.v), u: orientation.u, v: orientation.n };
}

function cubeNetIsValid(cells) {
  if (!Array.isArray(cells) || cells.length !== 6) return false;
  const cellKeys = new Set(cells.map(({ x, y }) => `${x},${y}`));
  if (cellKeys.size !== 6) return false;
  const startKey = `${cells[0].x},${cells[0].y}`;
  const orientations = new Map([[startKey, { n: [0, 0, 1], u: [1, 0, 0], v: [0, 1, 0] }]]);
  const queue = [cells[0]];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  while (queue.length) {
    const cell = queue.shift();
    const orientation = orientations.get(`${cell.x},${cell.y}`);
    for (const [dx, dy] of directions) {
      const neighbor = { x: cell.x + dx, y: cell.y + dy };
      const neighborKey = `${neighbor.x},${neighbor.y}`;
      if (!cellKeys.has(neighborKey)) continue;
      const expected = cubeNetFoldOrientation(orientation, dx, dy);
      const existing = orientations.get(neighborKey);
      if (existing) {
        if (!cubeNetVectorEquals(existing.n, expected.n)
          || !cubeNetVectorEquals(existing.u, expected.u)
          || !cubeNetVectorEquals(existing.v, expected.v)) return false;
      } else {
        orientations.set(neighborKey, expected);
        queue.push(neighbor);
      }
    }
  }
  if (orientations.size !== 6) return false;
  return new Set([...orientations.values()].map(({ n }) => n.join(","))).size === 6;
}

function cubeNetCanonicalSignature(cells) {
  const transforms = [
    ({ x, y }) => [x, y],
    ({ x, y }) => [-y, x],
    ({ x, y }) => [-x, -y],
    ({ x, y }) => [y, -x],
    ({ x, y }) => [-x, y],
    ({ x, y }) => [x, -y],
    ({ x, y }) => [y, x],
    ({ x, y }) => [-y, -x],
  ];
  return transforms.map((transform) => {
    const transformed = cells.map(transform);
    const minX = Math.min(...transformed.map(([x]) => x));
    const minY = Math.min(...transformed.map(([, y]) => y));
    return transformed.map(([x, y]) => [x - minX, y - minY])
      .sort((a, b) => a[1] - b[1] || a[0] - b[0])
      .map(([x, y]) => `${x},${y}`)
      .join(";");
  }).sort()[0];
}

const cubeNetFigureCSignature = cubeNetCanonicalSignature([
  { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 0, y: 1 },
  { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 },
]);

function cubeNetSavedSignatures(card) {
  return String(getTeachCustomResponse(card).cubeNetSavedSignatures || "")
    .split("||")
    .filter((signature) => /^\d,\d(?:;\d,\d){5}$/.test(signature))
    .slice(0, 3);
}

function renderCubeNetThumbnail(signature, index) {
  const cells = signature.split(";").map((entry) => entry.split(",").map(Number));
  return `
    <figure class="cube-net-thumbnail">
      <svg viewBox="0 0 100 100" role="img" aria-label="Saved valid cube net ${index + 1}">
        ${cells.map(([x, y]) => `<rect x="${8 + x * 18}" y="${8 + y * 18}" width="18" height="18"></rect>`).join("")}
      </svg>
      <figcaption>Saved net ${index + 1}</figcaption>
    </figure>
  `;
}

function renderCubeNetBuilder(card) {
  const cells = cubeNetCells(card);
  const selected = new Set(cells.map(({ x, y }) => `${x},${y}`));
  const saved = cubeNetSavedSignatures(card);
  const message = String(getTeachCustomResponse(card).cubeNetMessage || "Select exactly six edge-connected squares, then test and save the net.");
  const gridCells = [];
  for (let y = 0; y < 7; y += 1) {
    for (let x = 0; x < 7; x += 1) {
      const key = `${x},${y}`;
      gridCells.push(`
        <rect
          class="cube-net-grid-cell ${selected.has(key) ? "is-selected" : ""}"
          x="${15 + x * 50}"
          y="${15 + y * 50}"
          width="48"
          height="48"
          role="button"
          tabindex="0"
          data-cube-net-cell="${key}"
          aria-label="Grid square column ${x + 1}, row ${y + 1}"
          aria-pressed="${selected.has(key)}"
        ></rect>
      `);
    }
  }
  return `
    <section class="cube-net-builder" aria-label="Build three different valid cube nets">
      <figure class="cube-net-reference">
        <figcaption>Source Figure C is already one cube net. Build different arrangements.</figcaption>
        ${teachCropImage("lesson-15-p003-cube-net-reference.png", 335, 225, "Source Figure C cube net with six 3 by 3 square faces.")}
      </figure>
      <div class="cube-net-construction">
        <p>Select six squares. Squares must connect along full edges.</p>
        <svg viewBox="0 0 380 380" role="img" aria-label="Seven by seven square grid with ${cells.length} squares selected.">
          ${gridCells.join("")}
        </svg>
        <div class="cube-net-builder-actions">
          <button class="practice-submit" type="button" data-cube-net-save ${cells.length !== 6 || saved.length >= 3 ? "disabled" : ""}>Test and save net</button>
          <button class="hint-button" type="button" data-cube-net-clear ${cells.length === 0 ? "disabled" : ""}>Clear grid</button>
          <button class="hint-button" type="button" data-cube-net-reset-all ${saved.length === 0 && cells.length === 0 ? "disabled" : ""}>Reset saved nets</button>
        </div>
        <p class="cube-net-builder-message" aria-live="polite">${escapeHtml(message)}</p>
      </div>
      <div class="cube-net-saved" aria-label="Saved cube nets">
        <p>${saved.length} of 3 different valid nets saved</p>
        <div>${saved.map(renderCubeNetThumbnail).join("")}</div>
      </div>
    </section>
  `;
}

function labeledCubeNetStateId(question) {
  const raw = String(question?.netStateId || question?.id || "net");
  const safe = raw.replace(/[^a-z0-9-]/gi, "").slice(0, 48);
  return safe || "net";
}

function labeledCubeNetCellsField(question) {
  return `labeledCubeNet_${labeledCubeNetStateId(question)}_cells`;
}

function labeledCubeNetMessageField(question) {
  return `labeledCubeNet_${labeledCubeNetStateId(question)}_message`;
}

function labeledCubeNetCells(card, question) {
  const seen = new Set();
  return String(getTeachCustomResponse(card)[labeledCubeNetCellsField(question)] || "").split("|").map((entry) => {
    const [x, y] = entry.split(",").map(Number);
    return { x, y };
  }).filter(({ x, y }) => {
    const key = `${x},${y}`;
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || x > 6 || y < 0 || y > 6 || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 6);
}

function labeledCubeNetQuestionsSharingState(card, question) {
  const stateId = labeledCubeNetStateId(question);
  return (card.questions || []).filter((entry) => (
    labeledCubeNetStateId(entry) === stateId
    && (entry.visualType === "labeledCubeNet" || entry.requiredConstruction === "validCubeNet")
  ));
}

function renderLabeledCubeNetBuilder(card, question) {
  const cells = labeledCubeNetCells(card, question);
  const selected = new Set(cells.map(({ x, y }) => `${x},${y}`));
  const labelField = String(question?.netLabelField || "");
  const faceLabel = labelField ? questionSetValue(card, question.id, labelField).slice(0, 18) : "";
  const labelOffsetY = question?.netLabelPosition === "center" ? 44 : 29;
  const message = String(getTeachCustomResponse(card)[labeledCubeNetMessageField(question)]
    || "Select exactly six squares connected along full edges, then test the net.");
  const gridCells = [];
  for (let y = 0; y < 7; y += 1) {
    for (let x = 0; x < 7; x += 1) {
      const key = `${x},${y}`;
      gridCells.push(`
        <rect
          class="cube-net-grid-cell ${selected.has(key) ? "is-selected" : ""}"
          x="${15 + x * 50}"
          y="${15 + y * 50}"
          width="48"
          height="48"
          role="button"
          tabindex="0"
          data-labeled-cube-net-cell="${key}"
          data-question-id="${escapeHtml(question.id)}"
          aria-label="Grid square column ${x + 1}, row ${y + 1}"
          aria-pressed="${selected.has(key)}"
        ></rect>
        ${selected.has(key) && faceLabel ? `<text class="labeled-cube-net-label" x="${39 + x * 50}" y="${labelOffsetY + y * 50}" text-anchor="middle">${escapeHtml(faceLabel)}</text>` : ""}
      `);
    }
  }
  return `
    <section class="cube-net-builder labeled-cube-net-builder" aria-label="Draw and test a cube net">
      <div class="cube-net-construction">
        <p>Select six equal squares. A valid net must fold into six different faces without overlap.</p>
        <svg viewBox="0 0 380 380" role="img" aria-label="Seven by seven square grid with ${cells.length} squares selected.">
          ${gridCells.join("")}
        </svg>
        <div class="cube-net-builder-actions">
          <button class="practice-submit" type="button" data-labeled-cube-net-test data-question-id="${escapeHtml(question.id)}" ${cells.length === 6 ? "" : "disabled"}>Test net</button>
          <button class="hint-button" type="button" data-labeled-cube-net-clear data-question-id="${escapeHtml(question.id)}" ${cells.length === 0 ? "disabled" : ""}>Clear grid</button>
        </div>
        <p class="cube-net-builder-message" aria-live="polite">${escapeHtml(message)}</p>
      </div>
    </section>
  `;
}

function renderCubeMetricReference(question) {
  const edgeLabel = String(question?.edgeLabel || "edge length").slice(0, 24);
  return `
    <figure class="cube-metric-reference">
      <figcaption>Cube with edge length ${escapeHtml(edgeLabel)}</figcaption>
      <svg viewBox="0 0 520 350" role="img" aria-label="Cube with three visible edges labeled ${escapeHtml(edgeLabel)}.">
        <polygon class="cube-metric-top" points="130,98 300,46 408,112 238,164"></polygon>
        <polygon class="cube-metric-front" points="130,98 238,164 238,314 130,248"></polygon>
        <polygon class="cube-metric-side" points="238,164 408,112 408,262 238,314"></polygon>
        <text x="177" y="143" text-anchor="middle">${escapeHtml(edgeLabel)}</text>
        <text x="325" y="302" text-anchor="middle">${escapeHtml(edgeLabel)}</text>
        <text x="430" y="194">${escapeHtml(edgeLabel)}</text>
      </svg>
    </figure>
  `;
}

function renderMeasurementUnitBank(question) {
  const quantities = [
    ["parking-lot", "Perimeter of a parking lot"],
    ["semi-truck", "Volume of a semi truck"],
    ["refrigerator", "Surface area of a refrigerator"],
    ["eyelash", "Length of an eyelash"],
    ["state-area", "Area of a state"],
    ["ocean-volume", "Volume of an ocean"],
    ["miles-example", "A quantity measured in miles"],
    ["cubic-meters-example", "A quantity measured in cubic meters"],
  ];
  return `
    <section class="measurement-unit-bank" aria-label="Source quantities and unit bank">
      <div>
        <h4>Quantities</h4>
        <ol>
          ${quantities.map(([id, label]) => `<li class="${question?.id === id ? "is-active" : ""}">${escapeHtml(label)}</li>`).join("")}
        </ol>
      </div>
      <div>
        <h4>Source unit bank</h4>
        <ul>
          ${measurementUnitChoices.map((choice) => `<li>${escapeHtml(choice.label)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function renderExponentReferenceVisual() {
  return `
    <section class="exponent-reference" aria-label="Exponent reference for square area and cube volume">
      <article>
        <p class="exponent-reference-label">Squaring</p>
        <p class="exponent-reference-expression">5 × 5 = 5<sup>2</sup></p>
        <p>Two equal factors describe a square's area. Area uses square units, such as in<sup>2</sup>.</p>
      </article>
      <article>
        <p class="exponent-reference-label">Cubing</p>
        <p class="exponent-reference-expression">4 × 4 × 4 = 4<sup>3</sup></p>
        <p>Three equal factors describe a cube's volume. Volume uses cubic units, such as cm<sup>3</sup>.</p>
      </article>
    </section>
  `;
}

function renderExpressionComparisonVisual(question) {
  const pairs = [
    { id: "ten-times-three", left: "10 × 3", right: "10³" },
    { id: "thirteen-squared", left: "13²", right: "12 × 12" },
    { id: "six-groups-of-97", left: "97 + 97 + 97 + 97 + 97 + 97", right: "5 × 97" },
  ];
  return `
    <section class="expression-comparison" aria-label="Source expression pairs">
      <p>Compare structure, not calculated values.</p>
      <ol>
        ${pairs.map((pair) => `
          <li class="${question?.id === pair.id ? "is-active" : ""}">
            <span>${escapeHtml(pair.left)}</span>
            <strong>or</strong>
            <span>${escapeHtml(pair.right)}</span>
          </li>
        `).join("")}
      </ol>
    </section>
  `;
}

function eightCubeShapeCells(card, shapeId) {
  const field = shapeId === "B" ? "eightCubeShapeBCells" : "eightCubeShapeACells";
  const seen = new Set();
  return String(getTeachCustomResponse(card)[field] || "").split("|").map((entry) => {
    const [x, y, z] = entry.split(",").map(Number);
    return { x, y, z };
  }).filter(({ x, y, z }) => {
    const key = `${x},${y},${z}`;
    if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)
      || x < 0 || x > 3 || y < 0 || y > 3 || z < 0 || z > 7 || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function eightCubeShapeCellString(cells) {
  return [...cells].sort((a, b) => a.z - b.z || a.y - b.y || a.x - b.x)
    .map(({ x, y, z }) => `${x},${y},${z}`)
    .join("|");
}

function eightCubeShapeIsConnected(cells) {
  if (!Array.isArray(cells) || cells.length !== 8) return false;
  const keys = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
  if (keys.size !== 8) return false;
  const visited = new Set([`${cells[0].x},${cells[0].y},${cells[0].z}`]);
  const queue = [cells[0]];
  const directions = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  while (queue.length) {
    const cell = queue.shift();
    for (const [dx, dy, dz] of directions) {
      const neighbor = { x: cell.x + dx, y: cell.y + dy, z: cell.z + dz };
      const key = `${neighbor.x},${neighbor.y},${neighbor.z}`;
      if (keys.has(key) && !visited.has(key)) {
        visited.add(key);
        queue.push(neighbor);
      }
    }
  }
  return visited.size === 8;
}

function eightCubeShapeCanonicalSignature(cells) {
  const permutations = [
    [0, 1, 2], [0, 2, 1], [1, 0, 2],
    [1, 2, 0], [2, 0, 1], [2, 1, 0],
  ];
  const signatures = [];
  for (const permutation of permutations) {
    for (const sx of [-1, 1]) {
      for (const sy of [-1, 1]) {
        for (const sz of [-1, 1]) {
          const transformed = cells.map(({ x, y, z }) => {
            const values = [x, y, z];
            return [values[permutation[0]] * sx, values[permutation[1]] * sy, values[permutation[2]] * sz];
          });
          const mins = [0, 1, 2].map((axis) => Math.min(...transformed.map((point) => point[axis])));
          signatures.push(transformed.map((point) => point.map((value, axis) => value - mins[axis]))
            .sort((a, b) => a[2] - b[2] || a[1] - b[1] || a[0] - b[0])
            .map((point) => point.join(","))
            .join(";"));
        }
      }
    }
  }
  return signatures.sort()[0] || "";
}

function eightCubeShapeSurfaceArea(cells) {
  const keys = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
  let exposed = 0;
  const directions = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  cells.forEach(({ x, y, z }) => {
    directions.forEach(([dx, dy, dz]) => {
      if (!keys.has(`${x + dx},${y + dy},${z + dz}`)) exposed += 1;
    });
  });
  return exposed;
}

function eightCubeShapeValidity(card) {
  const shapeA = eightCubeShapeCells(card, "A");
  const shapeB = eightCubeShapeCells(card, "B");
  const shapeAValid = eightCubeShapeIsConnected(shapeA);
  const shapeBConnected = eightCubeShapeIsConnected(shapeB);
  const different = !shapeAValid || eightCubeShapeCanonicalSignature(shapeA) !== eightCubeShapeCanonicalSignature(shapeB);
  return {
    eightCubeShapeAValid: String(shapeAValid),
    eightCubeShapeBValid: String(shapeBConnected && different),
  };
}

function renderEightCubeSolid(cells, label) {
  if (!cells.length) {
    return `<g class="eight-cube-placeholder"><rect x="55" y="55" width="310" height="235" rx="6"></rect><text x="210" y="172" text-anchor="middle">Build ${escapeHtml(label)} on the layer grid.</text></g>`;
  }
  const cubes = [...cells].sort((a, b) => a.x + a.y + a.z - (b.x + b.y + b.z));
  return cubes.map(({ x, y, z }) => {
    const centerX = 210 + (x - y) * 34;
    const baseY = 270 + (x + y) * 17 - z * 42;
    return `
      <g class="eight-cube-solid-cube">
        <polygon class="eight-cube-top" points="${centerX},${baseY - 42} ${centerX + 30},${baseY - 27} ${centerX},${baseY - 12} ${centerX - 30},${baseY - 27}"></polygon>
        <polygon class="eight-cube-left" points="${centerX - 30},${baseY - 27} ${centerX},${baseY - 12} ${centerX},${baseY + 25} ${centerX - 30},${baseY + 10}"></polygon>
        <polygon class="eight-cube-right" points="${centerX},${baseY - 12} ${centerX + 30},${baseY - 27} ${centerX + 30},${baseY + 10} ${centerX},${baseY + 25}"></polygon>
      </g>
    `;
  }).join("");
}

function renderEightCubePreview(cells, label) {
  return `
    <figure class="eight-cube-preview">
      <figcaption>${escapeHtml(label)}: ${cells.length} of 8 cubes placed</figcaption>
      <svg viewBox="0 0 420 340" role="img" aria-label="${escapeHtml(label)} with ${cells.length} cubes placed.">
        ${renderEightCubeSolid(cells, label)}
      </svg>
    </figure>
  `;
}

function renderEightCubeBuilder(card, question) {
  if (question?.shapeId === "compare") {
    return `
      <section class="eight-cube-comparison" aria-label="Compare built Shapes A and B">
        ${renderEightCubePreview(eightCubeShapeCells(card, "A"), "Shape A")}
        ${renderEightCubePreview(eightCubeShapeCells(card, "B"), "Shape B")}
      </section>
    `;
  }
  const shapeId = question?.shapeId === "B" ? "B" : "A";
  const cells = eightCubeShapeCells(card, shapeId);
  const response = getTeachCustomResponse(card);
  const layerField = shapeId === "B" ? "eightCubeShapeBLayer" : "eightCubeShapeALayer";
  const activeLayer = clampNumber(Number(response[layerField]) || 0, 0, 7);
  const selected = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
  const gridCells = [];
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const key = `${x},${y},${activeLayer}`;
      gridCells.push(`
        <rect
          class="eight-cube-grid-cell ${selected.has(key) ? "is-selected" : ""}"
          x="${15 + x * 62}"
          y="${15 + y * 62}"
          width="60"
          height="60"
          role="button"
          tabindex="0"
          data-eight-cube-cell="${key}"
          data-shape-id="${shapeId}"
          aria-label="Shape ${shapeId}, layer ${activeLayer + 1}, column ${x + 1}, row ${y + 1}"
          aria-pressed="${selected.has(key)}"
        ></rect>
      `);
    }
  }
  const connected = eightCubeShapeIsConnected(cells);
  return `
    <section class="eight-cube-builder" aria-label="Build Shape ${shapeId} from 8 unit cubes">
      <div class="eight-cube-layer-board">
        <p>Select cube positions on each layer. New cubes must eventually form one connected shape.</p>
        <div class="eight-cube-layer-controls">
          <button class="hint-button" type="button" data-eight-cube-layer-delta="-1" data-shape-id="${shapeId}" ${activeLayer === 0 ? "disabled" : ""}>Previous layer</button>
          <span>Layer ${activeLayer + 1} of 8</span>
          <button class="hint-button" type="button" data-eight-cube-layer-delta="1" data-shape-id="${shapeId}" ${activeLayer === 7 ? "disabled" : ""}>Next layer</button>
        </div>
        <svg viewBox="0 0 278 278" role="img" aria-label="Four by four selection grid for layer ${activeLayer + 1}.">${gridCells.join("")}</svg>
        <div class="eight-cube-builder-status">
          <span>${cells.length} of 8 cubes placed${connected ? "; connected" : ""}</span>
          <button class="hint-button" type="button" data-eight-cube-reset data-shape-id="${shapeId}" ${cells.length === 0 ? "disabled" : ""}>Reset Shape ${shapeId}</button>
        </div>
      </div>
      ${renderEightCubePreview(cells, `Shape ${shapeId}`)}
    </section>
  `;
}

function snapCubeInventory(question) {
  return question?.cubeInventory === 64 ? 64 : 32;
}

function snapCubeCellsField(inventory) {
  return inventory === 64 ? "snapCube64Cells" : "snapCube32Cells";
}

function snapCubeLayerField(inventory) {
  return inventory === 64 ? "snapCube64Layer" : "snapCube32Layer";
}

function snapCubeCells(card, inventory) {
  const seen = new Set();
  return String(getTeachCustomResponse(card)[snapCubeCellsField(inventory)] || "").split("|").map((entry) => {
    const [x, y, z] = entry.split(",").map(Number);
    return { x, y, z };
  }).filter(({ x, y, z }) => {
    const key = `${x},${y},${z}`;
    if (![x, y, z].every(Number.isInteger)
      || x < 0 || x > 3 || y < 0 || y > 3 || z < 0 || z > 3 || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, inventory);
}

function snapCubeCellString(cells) {
  return [...cells]
    .sort((a, b) => a.z - b.z || a.y - b.y || a.x - b.x)
    .map(({ x, y, z }) => `${x},${y},${z}`)
    .join("|");
}

function snapCubeLargestEdge(inventory) {
  return Math.floor(Math.cbrt(inventory) + 1e-9);
}

function snapCubeIsLargestCompleteCube(cells, inventory) {
  const edge = snapCubeLargestEdge(inventory);
  if (cells.length !== edge ** 3) return false;
  const xs = [...new Set(cells.map(({ x }) => x))].sort((a, b) => a - b);
  const ys = [...new Set(cells.map(({ y }) => y))].sort((a, b) => a - b);
  const zs = [...new Set(cells.map(({ z }) => z))].sort((a, b) => a - b);
  const consecutive = (values) => values.length === edge
    && values.every((value, index) => index === 0 || value === values[index - 1] + 1);
  if (![xs, ys, zs].every(consecutive)) return false;
  const keys = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
  return xs.every((x) => ys.every((y) => zs.every((z) => keys.has(`${x},${y},${z}`))));
}

function renderSnapCubeSolid(cells, inventory) {
  if (!cells.length) {
    return `<g class="eight-cube-placeholder"><rect x="55" y="55" width="310" height="235" rx="6"></rect><text x="210" y="162" text-anchor="middle">Build with the ${inventory}-cube inventory.</text><text x="210" y="188" text-anchor="middle">Unused cubes stay in the hidden stack.</text></g>`;
  }
  return [...cells].sort((a, b) => a.x + a.y + a.z - (b.x + b.y + b.z)).map(({ x, y, z }) => {
    const centerX = 210 + (x - y) * 24;
    const baseY = 245 + (x + y) * 12 - z * 29;
    return `
      <g class="eight-cube-solid-cube">
        <polygon class="eight-cube-top" points="${centerX},${baseY - 30} ${centerX + 21},${baseY - 20} ${centerX},${baseY - 10} ${centerX - 21},${baseY - 20}"></polygon>
        <polygon class="eight-cube-left" points="${centerX - 21},${baseY - 20} ${centerX},${baseY - 10} ${centerX},${baseY + 18} ${centerX - 21},${baseY + 8}"></polygon>
        <polygon class="eight-cube-right" points="${centerX},${baseY - 10} ${centerX + 21},${baseY - 20} ${centerX + 21},${baseY + 8} ${centerX},${baseY + 18}"></polygon>
      </g>
    `;
  }).join("");
}

function renderSnapCubeBuilder(card, question) {
  const inventory = snapCubeInventory(question);
  const cells = snapCubeCells(card, inventory);
  const response = getTeachCustomResponse(card);
  const activeLayer = clampNumber(Number(response[snapCubeLayerField(inventory)]) || 0, 0, 3);
  const selected = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
  const gridCells = [];
  const missingLayerCells = [];
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const key = `${x},${y},${activeLayer}`;
      if (!selected.has(key)) missingLayerCells.push({ x, y, z: activeLayer });
      gridCells.push(`
        <rect
          class="eight-cube-grid-cell ${selected.has(key) ? "is-selected" : ""}"
          x="${15 + x * 62}"
          y="${15 + y * 62}"
          width="60"
          height="60"
          role="button"
          tabindex="0"
          data-snap-cube-cell="${key}"
          data-cube-inventory="${inventory}"
          aria-label="${inventory}-cube workspace, layer ${activeLayer + 1}, column ${x + 1}, row ${y + 1}"
          aria-pressed="${selected.has(key)}"
        ></rect>
      `);
    }
  }
  const validCube = snapCubeIsLargestCompleteCube(cells, inventory);
  const canFillLayer = missingLayerCells.length > 0 && cells.length + missingLayerCells.length <= inventory;
  return `
    <section class="snap-cube-builder eight-cube-builder" aria-label="Build the largest cube from ${inventory} unit cubes">
      <div class="eight-cube-layer-board">
        <p>${inventory === 64 ? "Optional extension" : "Required build"}: place cubes one layer at a time. The hidden stack has ${inventory} cubes.</p>
        <div class="eight-cube-layer-controls">
          <button class="hint-button" type="button" data-snap-cube-layer-delta="-1" data-cube-inventory="${inventory}" ${activeLayer === 0 ? "disabled" : ""}>Previous layer</button>
          <span>Layer ${activeLayer + 1} of 4</span>
          <button class="hint-button" type="button" data-snap-cube-layer-delta="1" data-cube-inventory="${inventory}" ${activeLayer === 3 ? "disabled" : ""}>Next layer</button>
        </div>
        <svg viewBox="0 0 278 278" role="img" aria-label="Four by four selection grid for layer ${activeLayer + 1}.">${gridCells.join("")}</svg>
        <div class="snap-cube-layer-actions">
          <button class="hint-button" type="button" data-snap-cube-fill-layer data-cube-inventory="${inventory}" ${canFillLayer ? "" : "disabled"}>Fill current layer</button>
          <button class="hint-button" type="button" data-snap-cube-clear-layer data-cube-inventory="${inventory}" ${missingLayerCells.length === 16 ? "disabled" : ""}>Clear current layer</button>
        </div>
        <div class="eight-cube-builder-status">
          <span>${cells.length} placed; ${inventory - cells.length} in hidden stack${validCube ? "; largest complete cube built" : ""}</span>
          <button class="hint-button" type="button" data-snap-cube-reset data-cube-inventory="${inventory}" ${cells.length === 0 ? "disabled" : ""}>Reset build</button>
        </div>
      </div>
      <figure class="eight-cube-preview snap-cube-preview">
        <figcaption>Current construction: ${cells.length} cubes</figcaption>
        <svg viewBox="0 0 420 340" role="img" aria-label="Current construction with ${cells.length} cubes.">${renderSnapCubeSolid(cells, inventory)}</svg>
      </figure>
    </section>
  `;
}

function resetSnapCubeQuestionSubmissions(card, inventory) {
  (card.questions || []).filter((question) => snapCubeInventory(question) === inventory).forEach((question) => {
    state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
  });
}

function validPrismDimensions(dimensions) {
  return dimensions && [dimensions.l, dimensions.w, dimensions.h]
    .every((value) => Number.isInteger(value) && value > 0 && value <= 20);
}

function renderPrismDimensionsVisual(question) {
  const shape = validPrismDimensions(question?.dimensions) ? question.dimensions : { l: 1, w: 1, h: 1 };
  const cell = Math.max(14, Math.min(34, 280 / shape.l));
  return `
    <figure class="prism-dimensions-visual">
      <figcaption>Prism ${escapeHtml(question.prismLabel)}: ${shape.l} cm by ${shape.w} cm by ${shape.h} cm</figcaption>
      <svg viewBox="0 0 700 330" role="img" aria-label="Prism ${escapeHtml(question.prismLabel)} with dimensions ${shape.l} by ${shape.w} by ${shape.h} centimeters.">
        ${renderIsometricPrism(shape, 130, 260, cell, `Prism ${question.prismLabel}: ${shape.l} x ${shape.w} x ${shape.h}`)}
      </svg>
    </figure>
  `;
}

function renderPrismDimensionSetVisual() {
  return `
    <section class="prism-dimension-set" aria-label="Source dimensions for Prisms A, B, and C">
      <div><strong>Prism A</strong><span>1 cm x 1 cm x 11 cm</span></div>
      <div><strong>Prism B</strong><span>1 cm x 2 cm x 7 cm</span></div>
      <div><strong>Prism C</strong><span>1 cm x 3 cm x 5 cm</span></div>
    </section>
  `;
}

function renderPrismPairExamplesVisual() {
  return `
    <section class="prism-pair-example-visual" aria-label="Compare two student-created rectangular prisms">
      <div><strong>First prism</strong><span>Enter three whole-number dimensions.</span></div>
      <div><strong>Second prism</strong><span>Enter three whole-number dimensions.</span></div>
      <p>Goal: equal surface areas and different volumes.</p>
    </section>
  `;
}

function renderCabinetDimensionsVisual(question) {
  return `
    <figure class="teach-visual-frame cabinet-dimensions-visual">
      <figcaption>${escapeHtml(question.visualDirections || "Cabinet dimensions in sticky-note units.")}</figcaption>
      <svg viewBox="0 0 680 430" role="img" aria-label="Cabinet modeled as a rectangular prism, 24 sticky notes high, 12 sticky notes wide, and 6 sticky notes deep.">
        <defs>
          <marker id="cabinet-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse">
            <path d="M0,0 L8,4 L0,8 Z" fill="#1f2d35"></path>
          </marker>
        </defs>
        <polygon class="cabinet-face cabinet-top" points="170,100 455,100 540,52 255,52"></polygon>
        <polygon class="cabinet-face cabinet-side" points="455,100 540,52 540,298 455,350"></polygon>
        <rect class="cabinet-face cabinet-front" x="170" y="100" width="285" height="250"></rect>
        <line class="cabinet-door-line" x1="312.5" y1="100" x2="312.5" y2="350"></line>
        <circle class="cabinet-handle" cx="302" cy="230" r="5"></circle>
        <circle class="cabinet-handle" cx="323" cy="230" r="5"></circle>
        <line class="cabinet-measure" x1="138" y1="100" x2="138" y2="350" marker-start="url(#cabinet-arrow)" marker-end="url(#cabinet-arrow)"></line>
        <text class="cabinet-measure-label" x="111" y="230" text-anchor="middle" transform="rotate(-90 111 230)">height 24</text>
        <line class="cabinet-measure" x1="170" y1="382" x2="455" y2="382" marker-start="url(#cabinet-arrow)" marker-end="url(#cabinet-arrow)"></line>
        <text class="cabinet-measure-label" x="312" y="414" text-anchor="middle">width 12</text>
        <line class="cabinet-measure" x1="475" y1="82" x2="550" y2="38" marker-start="url(#cabinet-arrow)" marker-end="url(#cabinet-arrow)"></line>
        <text class="cabinet-measure-label" x="556" y="87">depth 6</text>
        <text class="cabinet-face-label" x="314" y="290" text-anchor="middle">front</text>
        <text class="cabinet-face-label" x="498" y="215" text-anchor="middle" transform="rotate(-6 498 215)">side</text>
        <text class="cabinet-face-label" x="355" y="82" text-anchor="middle">top</text>
        <text class="cabinet-bottom-note" x="312" y="370" text-anchor="middle">bottom is not covered</text>
      </svg>
    </figure>
  `;
}

function renderCabinetRowVisual(question) {
  const cabinets = [0, 1, 2].map((index) => {
    const x = 120 + index * 145;
    return `
      <g transform="translate(${x} 92)">
        <rect class="cabinet-row-front" x="0" y="0" width="120" height="220"></rect>
        <line class="cabinet-door-line" x1="60" y1="0" x2="60" y2="220"></line>
        <circle class="cabinet-handle" cx="54" cy="110" r="4"></circle>
        <circle class="cabinet-handle" cx="66" cy="110" r="4"></circle>
        ${index < 2 ? `<line class="cabinet-shared-face" x1="132" y1="8" x2="132" y2="212"></line>` : ""}
      </g>
    `;
  }).join("");
  return `
    <figure class="teach-visual-frame cabinet-dimensions-visual cabinet-row-visual">
      <figcaption>${escapeHtml(question.visualDirections || "Cabinets pushed together share inside faces.")}</figcaption>
      <svg viewBox="0 0 680 390" role="img" aria-label="Three identical cabinets pushed side by side, with the shared side faces marked inside the row.">
        ${cabinets}
        <text class="cabinet-measure-label" x="340" y="348" text-anchor="middle">Shared side faces are inside, so they are not part of the outside surface.</text>
      </svg>
    </figure>
  `;
}

const parallelogramPairFallbackDefaults = {
  P: { base: 4, height: 4, shift: 2 },
  Q: { base: 5, height: 3, shift: 3 },
};

function parallelogramPairShapeIds(question) {
  const configured = Array.isArray(question?.shapeIds) ? question.shapeIds.filter(Boolean) : [];
  return configured.length === 2 ? configured : ["P", "Q"];
}

function parallelogramPairDefault(question, shapeId, field) {
  const configured = Number(question?.pairDefaults?.[shapeId]?.[field]);
  if (Number.isFinite(configured)) return configured;
  return Number(parallelogramPairFallbackDefaults[shapeId]?.[field]) || 1;
}

function parallelogramPairField(questionId, shapeId, field) {
  return `parallelogramPair_${questionId}_${shapeId}_${field}`;
}

function parallelogramPairLimits(question, field) {
  if (field === "base") return [2, Number(question?.pairBaseMax) || 10];
  if (field === "height") return [2, Number(question?.pairHeightMax) || 10];
  return [Number.isFinite(Number(question?.pairShiftMin)) ? Number(question.pairShiftMin) : 1,
    Number.isFinite(Number(question?.pairShiftMax)) ? Number(question.pairShiftMax) : 5];
}

function parallelogramPairValue(card, question, shapeId, field) {
  const fallback = parallelogramPairDefault(question, shapeId, field);
  const parsed = Number(getTeachCustomResponse(card)[parallelogramPairField(question.id, shapeId, field)]);
  if (!Number.isFinite(parsed)) return fallback;
  const limits = parallelogramPairLimits(question, field);
  return clampNumber(parsed, limits[0], limits[1]);
}

function parallelogramPairSignature(card, question, shapeId) {
  return ["base", "height", "shift"]
    .map((field) => parallelogramPairValue(card, question, shapeId, field))
    .join("x");
}

function parallelogramPairHasInteraction(card, question) {
  const response = getTeachCustomResponse(card);
  return parallelogramPairShapeIds(question).every((shapeId) => ["base", "height", "shift"].some((field) => (
    Object.prototype.hasOwnProperty.call(response, parallelogramPairField(question.id, shapeId, field))
  )));
}

function parallelogramPairIsCorrect(card, question) {
  const shapeIds = parallelogramPairShapeIds(question);
  const shapes = shapeIds.map((shapeId) => ({
    id: shapeId,
    base: parallelogramPairValue(card, question, shapeId, "base"),
    height: parallelogramPairValue(card, question, shapeId, "height"),
    shift: parallelogramPairValue(card, question, shapeId, "shift"),
  }));
  const [firstShape, secondShape] = shapes;
  const different = ["base", "height", "shift"].some((field) => firstShape[field] !== secondShape[field]);
  const bothChanged = !question.requireBothChanged || shapes.every((shape) => (
    ["base", "height", "shift"].some((field) => shape[field] !== parallelogramPairDefault(question, shape.id, field))
  ));
  const initialSignatures = new Set(shapeIds.map((shapeId) => (
    ["base", "height", "shift"].map((field) => parallelogramPairDefault(question, shapeId, field)).join("x")
  )));
  const allNew = !question.rejectInitialShapes || shapeIds.every((shapeId) => (
    !initialSignatures.has(parallelogramPairSignature(card, question, shapeId))
  ));
  const equalAreas = shapes.every((shape) => (
    shape.base * shape.height === firstShape.base * firstShape.height
  ));
  if (question.dynamicAnswer === "parallelogramPairArea20") {
    return shapes.every((shape) => shape.base * shape.height === 20 && shape.shift !== 0)
      && different
      && bothChanged;
  }
  return question.dynamicAnswer === "parallelogramPairEqualArea"
    && equalAreas
    && different
    && bothChanged
    && allNew;
}

function renderParallelogramPairRange(card, question, shapeId, field, label) {
  const [min, max] = parallelogramPairLimits(question, field);
  const value = parallelogramPairValue(card, question, shapeId, field);
  return `
    <label class="parallelogram-pair-range">
      <span>${escapeHtml(label)}: <strong>${value}</strong></span>
      <input
        type="range"
        min="${min}"
        max="${max}"
        step="1"
        value="${value}"
        data-parallelogram-pair-input="${card.id}"
        data-question-id="${escapeHtml(question.id)}"
        data-shape-id="${escapeHtml(shapeId)}"
        data-pair-field="${field}"
      >
    </label>
  `;
}

function renderParallelogramPairShape(card, question, shapeId, originX, positionClass) {
  const base = parallelogramPairValue(card, question, shapeId, "base");
  const height = parallelogramPairValue(card, question, shapeId, "height");
  const shift = parallelogramPairValue(card, question, shapeId, "shift");
  const shapeLabel = question.shapeLabels?.[shapeId] || `Parallelogram ${shapeId}`;
  const cell = 20;
  const baseY = 265;
  const topY = baseY - height * cell;
  const leftX = originX;
  const topLeftX = leftX + shift * 12;
  const bottomRightX = leftX + base * cell;
  const topRightX = topLeftX + base * cell;
  const heightX = topLeftX + Math.min(base - 1, 2) * cell;
  return `
    <g class="parallelogram-pair-shape ${positionClass}" data-pair-shape="${escapeHtml(shapeId)}">
      <text class="parallelogram-pair-name" x="${originX + 110}" y="34" text-anchor="middle">${escapeHtml(shapeLabel)}</text>
      <polygon points="${leftX},${baseY} ${bottomRightX},${baseY} ${topRightX},${topY} ${topLeftX},${topY}"></polygon>
      <line class="parallelogram-height-line" x1="${heightX}" y1="${topY}" x2="${heightX}" y2="${baseY}"></line>
      <path class="parallelogram-right-angle" d="M ${heightX} ${baseY - 13} L ${heightX + 13} ${baseY - 13} L ${heightX + 13} ${baseY}"></path>
      <text class="parallelogram-pair-measure" x="${leftX + base * cell / 2}" y="278" text-anchor="middle">base ${base}</text>
      <text class="parallelogram-pair-measure" x="${heightX + 10}" y="${topY + height * cell / 2}" text-anchor="start">height ${height}</text>
    </g>
  `;
}

function renderParallelogramPairWorkspace(card, question) {
  const shapeIds = parallelogramPairShapeIds(question);
  return `
    <figure class="teach-visual-frame parallelogram-pair-workspace">
      <figcaption>${escapeHtml(question.visualDirections)}</figcaption>
      <svg class="parallelogram-pair-stage" viewBox="0 0 760 300" role="img" aria-label="Two adjustable parallelograms on square grids.">
        <rect x="1" y="1" width="758" height="298" class="parallelogram-explore-board"></rect>
        <g aria-hidden="true">${gridLines(20, 10, 36, 14, 20)}</g>
        ${renderParallelogramPairShape(card, question, shapeIds[0], 75, "is-left")}
        ${renderParallelogramPairShape(card, question, shapeIds[1], 430, "is-right")}
      </svg>
      <div class="parallelogram-pair-controls">
        ${shapeIds.map((shapeId) => `
          <fieldset>
            <legend>${escapeHtml(question.shapeLabels?.[shapeId] || `Parallelogram ${shapeId}`)}</legend>
            ${renderParallelogramPairRange(card, question, shapeId, "base", "Base")}
            ${renderParallelogramPairRange(card, question, shapeId, "height", "Height")}
            ${renderParallelogramPairRange(card, question, shapeId, "shift", "Horizontal shift")}
          </fieldset>
        `).join("")}
      </div>
    </figure>
  `;
}

function renderTeachCard(card, group = { cards: [card], lessonNumber: card.lessonNumber }) {
  const visualContent = renderTeachVisualContent(card);
  const usesIndependentSubmission = card.responseType === "areaMeaning"
    || card.responseType === "gridFigureAreas"
    || card.responseType === "questionSet";
  return `
    <article class="teach-lesson-card teach-card" id="${teachCardDomId(card)}" data-teach-card="${card.id}" data-teach-lesson="${card.lessonNumber}">
      <div class="teach-lesson-copy">
        <p class="eyebrow">${escapeHtml(card.idea)} · Section ${escapeHtml(card.section)} · Lesson ${card.lessonNumber}</p>
        <div class="teach-card-heading">
          <div class="teach-title-group">
            <h2>${escapeHtml(card.title)}</h2>
            ${renderTeachPartSwitcher(group, card)}
          </div>
          <div class="teach-card-toolbar">
            ${renderTeachCardSourceLinks(card)}
          </div>
        </div>
        ${card.activityTitle ? `<p class="teach-activity-title">${escapeHtml(card.activityTitle)}</p>` : ""}
        ${card.sourceContext ? `<p class="teach-source-context">${escapeHtml(card.sourceContext)}</p>` : ""}
      </div>
      <div class="teach-card-body ${card.sourceDirections ? "has-visual-directions" : ""}">
        ${card.sourceDirections ? `<p class="teach-visual-directions">${escapeHtml(card.sourceDirections)}</p>` : ""}
        <div class="teach-workspace">
          ${visualContent}
        </div>
        <div class="answer-panel teach-answer-panel">
          ${renderTeachResponseControl(card)}
          ${usesIndependentSubmission ? "" : `
            <div class="practice-actions teach-actions">
              <button class="practice-submit" type="button" data-teach-submit="${card.id}">Submit</button>
              <button class="hint-button" type="button" data-teach-hint="${card.id}">${state.teachHints[card.id] ? "Hide hint" : "Show hint"}</button>
            </div>
            ${renderTeachFeedback(card)}
            ${renderTeachHint(card)}
          `}
        </div>
      </div>
    </article>
  `;
}

function renderTeachMe() {
  window.Unit1Polyhedra?.disposeAll();
  renderTeachLessonNav();
  const deck = document.getElementById("teachLessonDeck");
  if (!deck) return;
  deck.innerHTML = teachLessonGroups().map(renderTeachLessonGroup).join("");
  window.requestAnimationFrame(() => window.Unit1Polyhedra?.mountAll(deck));
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

const areaMeaningQuestionIds = ["drawings", "definition"];

function isAreaMeaningQuestionId(questionId) {
  return areaMeaningQuestionIds.includes(questionId);
}

function teachQuestionStateKey(cardId, questionId) {
  return `${cardId}:${questionId}`;
}

function isTeachQuestionSubmitted(card, questionId) {
  return Boolean(state.teachQuestionSubmitted[teachQuestionStateKey(card.id, questionId)]);
}

function isTeachQuestionHintVisible(card, questionId) {
  return Boolean(state.teachQuestionHints[teachQuestionStateKey(card.id, questionId)]);
}

function questionSetDefinition(card, questionId) {
  return card.questions?.find((question) => question.id === questionId) || null;
}

function questionSetActiveId(card) {
  const activeId = state.teachQuestionSetActive[card.id];
  const activeQuestion = questionSetDefinition(card, activeId);
  if (activeQuestion && questionSetQuestionUnlocked(card, activeQuestion)) return activeQuestion.id;
  return card.questions?.find((question) => questionSetQuestionUnlocked(card, question))?.id || "";
}

function questionSetField(questionId, field) {
  return `questionSet_${questionId}_${field}`;
}

function questionSetValue(card, questionId, field = "answer") {
  return String(getTeachCustomResponse(card)[questionSetField(questionId, field)] || "");
}

function questionSetSelections(card, question) {
  const selected = questionSetValue(card, question.id).split("|").filter(Boolean);
  return (question.choices || []).map((choice) => choice.id).filter((id) => selected.includes(id));
}

function questionSetFieldMatches(card, question, field, expected) {
  const value = questionSetValue(card, question.id, field.id);
  const acceptedValues = Array.isArray(expected) ? expected : [expected];
  if (field.responseType === "number") {
    return acceptedValues.some((accepted) => answerMatches(value, String(accepted)));
  }
  return acceptedValues.some((accepted) => normalizeAnswer(value) === normalizeAnswer(String(accepted)));
}

function questionSetWholeNumber(card, question, fieldId) {
  const value = parseMathNumber(questionSetValue(card, question.id, fieldId));
  return Number.isInteger(value) && value > 0 && value <= 20 ? value : null;
}

function prismDimensionSignature(l, w, h) {
  return [l, w, h].sort((a, b) => a - b).join("x");
}

function questionSetNonnegativeInteger(card, question, fieldId) {
  const value = parseMathNumber(questionSetValue(card, question.id, fieldId));
  return Number.isInteger(value) && value >= 0 && value <= 1000000 ? value : null;
}

function isPerfectWholeNumberPower(value, power) {
  if (!Number.isInteger(value) || value < 0 || !Number.isInteger(power) || power < 2) return false;
  const root = Math.round(value ** (1 / power));
  return root ** power === value;
}

function questionSetPowerExamplesAreCorrect(card, question, power, excludedValues = []) {
  const powerFieldIds = power === 2
    ? ["square1", "square2", "square3", "square4"]
    : ["cube1", "cube2", "cube3", "cube4"];
  const nonPowerFieldIds = power === 2
    ? ["notSquare1", "notSquare2"]
    : ["notCube1", "notCube2"];
  const values = [...powerFieldIds, ...nonPowerFieldIds]
    .map((fieldId) => questionSetNonnegativeInteger(card, question, fieldId));
  if (values.some((value) => value === null) || new Set(values).size !== values.length) return false;
  const powerValues = values.slice(0, powerFieldIds.length);
  const nonPowerValues = values.slice(powerFieldIds.length);
  return powerValues.every((value) => isPerfectWholeNumberPower(value, power) && !excludedValues.includes(value))
    && nonPowerValues.every((value) => !isPerfectWholeNumberPower(value, power));
}

function questionSetPerfectSquareAndCubeExamplesAreCorrect(card, question) {
  const tokens = normalizeAnswer(questionSetValue(card, question.id)).split(/[\s,;]+/).filter(Boolean);
  if (!tokens.length || !tokens.every((token) => /^\d+$/.test(token))) return false;
  const values = tokens.map(Number);
  return new Set(values).size === values.length
    && values.every((value) => value !== 15625
      && value <= 1000000
      && isPerfectWholeNumberPower(value, 2)
      && isPerfectWholeNumberPower(value, 3));
}

function tentFabricUnitsAreCorrect(card, question) {
  const units = normalizeAnswer(questionSetValue(card, question.id, "units"));
  return ["square feet", "square foot", "sq ft", "ft^2", "ft²", "square ft"]
    .some((accepted) => units === normalizeAnswer(accepted));
}

function tentFabricEstimateIsCorrect(card, question) {
  const plan = tentPlanFromResponse(tentPlanField("teach-l19"));
  const total = tentFabricTotal(plan);
  const estimate = parseMathNumber(questionSetValue(card, question.id, "estimate"));
  if (total === null || estimate === null || !tentFabricUnitsAreCorrect(card, question)) return false;
  return Math.abs(estimate - roundTentMeasure(total)) <= 0.11;
}

function tentComparisonSelectionIsCorrect(card, question, mode) {
  const selected = questionSetSelections(card, question)[0];
  return Boolean(selected && tentComparisonAnswerIds(mode).includes(selected));
}

function normalizedTextMatchesConcept(text, concept) {
  return Array.isArray(concept) && concept.length > 0
    && concept.every((term) => text.includes(String(term).toLowerCase()));
}

function normalizedTextConceptMatchCount(text, concepts) {
  return (Array.isArray(concepts) ? concepts : [])
    .filter((concept) => normalizedTextMatchesConcept(text, concept)).length;
}

function normalizedTextMeetsConceptRequirements(text, requirements) {
  return (Array.isArray(requirements) ? requirements : []).every((alternatives) => (
    Array.isArray(alternatives)
    && alternatives.some((concept) => normalizedTextMatchesConcept(text, concept))
  ));
}

const freeTextTermLabels = Object.freeze({
  cub: ["cube", "cubic"],
  decompos: ["decompose", "decomposition"],
  enclos: ["enclose", "enclosure"],
  mov: ["move", "moving"],
  rearrang: ["rearrange", "rearrangement"],
  rectang: ["rectangle", "rectangular"],
  triang: ["triangle", "triangular"],
});

function freeTextTermDescription(term) {
  const value = String(term);
  const labels = freeTextTermLabels[value.toLowerCase()] || [value];
  const quoted = labels.map((label) => `"${label}"`);
  return quoted.length === 1 ? quoted[0] : `(${quoted.join(" or ")})`;
}

function freeTextConceptDescription(concept) {
  return (Array.isArray(concept) ? concept : [])
    .map(freeTextTermDescription)
    .join(" + ");
}

function joinFreeTextAlternatives(items) {
  const values = items.filter(Boolean);
  if (values.length < 2) return values[0] || "";
  if (values.length === 2) return `${values[0]} or ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, or ${values.at(-1)}`;
}

function freeTextValidationCriteria({
  concepts = [],
  conceptRequirements = [],
  conceptsRequired = 1,
  requiresNumber = false,
  minimumLength = 1,
  validationGuidance = "",
} = {}) {
  const explicitGuidance = String(validationGuidance || "").trim().replace(/\.+$/, "");
  if (explicitGuidance) {
    const normalizedGuidance = explicitGuidance.charAt(0).toLowerCase() + explicitGuidance.slice(1);
    return `To pass this app check, ${normalizedGuidance}.`;
  }

  const criteria = [];
  if (Number.isInteger(minimumLength) && minimumLength > 1) {
    criteria.push(`write at least ${minimumLength} characters`);
  }

  const acceptedConcepts = (Array.isArray(concepts) ? concepts : [])
    .map(freeTextConceptDescription)
    .filter(Boolean);
  if (acceptedConcepts.length) {
    const requiredCount = Math.min(
      acceptedConcepts.length,
      Number.isInteger(conceptsRequired) ? Math.max(1, conceptsRequired) : 1
    );
    const countLabel = requiredCount === 1 ? "one" : String(requiredCount);
    criteria.push(`include at least ${countLabel} accepted word combination${requiredCount === 1 ? "" : "s"}: ${joinFreeTextAlternatives(acceptedConcepts)}`);
  }

  const requiredIdeas = (Array.isArray(conceptRequirements) ? conceptRequirements : [])
    .map((alternatives) => joinFreeTextAlternatives(
      (Array.isArray(alternatives) ? alternatives : []).map(freeTextConceptDescription)
    ))
    .filter(Boolean);
  if (requiredIdeas.length) {
    criteria.push(`include one accepted word combination for each required idea: ${requiredIdeas.map((description, index) => `(${index + 1}) ${description}`).join("; ")}`);
  }

  if (requiresNumber) criteria.push("include at least one number");
  if (!criteria.length) return "";
  return `To pass this app check, ${criteria.join("; ")}.`;
}

function freeTextFeedbackWithCriteria(baseFeedback, criteria) {
  const guidance = freeTextValidationCriteria(criteria);
  return [String(baseFeedback || "").trim(), guidance].filter(Boolean).join(" ");
}

function appendFeedbackCriteria(baseFeedback, criteriaFeedback) {
  const feedback = String(baseFeedback || "").trim();
  const criteria = String(criteriaFeedback || "").trim();
  if (!criteria || feedback.includes(criteria)) return feedback;
  return [feedback, criteria].filter(Boolean).join(" ");
}

function questionAnswerValidationCriteria(question) {
  return {
    concepts: question.answerConcepts,
    conceptRequirements: question.answerConceptRequirements,
    conceptsRequired: question.answerConceptsRequired,
    minimumLength: Number.isInteger(question.minLength) ? question.minLength : 1,
    validationGuidance: question.answerValidationGuidance,
  };
}

function questionReasoningValidationCriteria(question) {
  return {
    concepts: question.reasoningConcepts,
    conceptRequirements: question.reasoningConceptRequirements,
    conceptsRequired: question.reasoningConceptsRequired,
    requiresNumber: question.reasoningRequiresNumber,
    validationGuidance: question.reasoningValidationGuidance,
  };
}

function hasTaskSpecificFreeTextCriteria(criteria = {}) {
  return Boolean(
    String(criteria.validationGuidance || "").trim()
    || (Array.isArray(criteria.concepts) && criteria.concepts.length)
    || (Array.isArray(criteria.conceptRequirements) && criteria.conceptRequirements.length)
    || criteria.requiresNumber
  );
}

function unit1RequiredFreeTextCriteriaAudit() {
  const issues = [];
  const customRequiredFields = {
    areaMeaning: ["drawingReasoning", "areaDefinition"],
    quadrilateralDecompose: ["observations"],
    trianglePairsCompose: ["trianglePairReasoning"],
    triangleHeightMarks: ["heightReasoning"],
  };

  unit1TeachCards.forEach((card) => {
    if (card.reasoningRequired && !hasTaskSpecificFreeTextCriteria({
      concepts: card.reasoningConcepts,
      validationGuidance: card.reasoningValidationGuidance,
    })) {
      issues.push(`${card.id}: required card reasoning has no task-specific criteria`);
    }

    if (card.responseType === "gridFigureAreas" && card.requireReasoning) {
      (card.figures || []).forEach((figure) => {
        if (!hasTaskSpecificFreeTextCriteria({
          concepts: figure.reasoningConcepts,
          validationGuidance: figure.reasoningValidationGuidance || card.reasoningValidationGuidance,
        })) {
          issues.push(`${card.id}/${figure.id}: required grid reasoning has no task-specific criteria`);
        }
      });
    }

    if (card.responseType === "guidedFields") {
      (card.guidedReasoningRequirements || []).forEach((requirement) => {
        if (!hasTaskSpecificFreeTextCriteria({
          concepts: requirement.concepts,
          validationGuidance: requirement.validationGuidance,
        })) {
          issues.push(`${card.id}/${requirement.field}: required guided reasoning has no task-specific criteria`);
        }
      });
    }

    (customRequiredFields[card.responseType] || []).forEach((field) => {
      if (!String(card.freeTextValidationGuidance?.[field] || "").trim()) {
        issues.push(`${card.id}/${field}: custom required free text has no validation guidance`);
      }
    });

    (card.questions || []).forEach((question) => {
      if (question.responseType === "openResponse"
        && !question.answerOptional
        && !hasTaskSpecificFreeTextCriteria(questionAnswerValidationCriteria(question))) {
        issues.push(`${card.id}/${question.id}: required open response has no task-specific criteria`);
      }
      if (question.reasoningPrompt
        && !question.reasoningOptional
        && !hasTaskSpecificFreeTextCriteria(questionReasoningValidationCriteria(question))) {
        issues.push(`${card.id}/${question.id}: required reasoning has no task-specific criteria`);
      }
    });
  });

  return issues;
}

function questionSetAnswerIsCorrect(card, question) {
  const answerKey = Array.isArray(question.answerKey) ? question.answerKey : [];
  if (question.answerOptional) return true;
  if (question.dynamicAnswer === "baseHeightChallenge") {
    return baseHeightChallengeIsCorrect(card, question);
  }
  if (question.dynamicAnswer === "tangramConstruction") {
    const saved = Boolean(getTeachCustomResponse(card)[tangramSavedField(question.id)]);
    return saved && (!question.requireAreaAnswer || answerMatches(questionSetValue(card, question.id, "area"), String(question.targetArea)));
  }
  if (question.dynamicAnswer === "polyhedronPerFigure") {
    return polyhedronModelIds.every((modelId) => (
      polyhedronClassificationSubmitted(card, modelId)
      && polyhedronClassificationIsCorrect(card, modelId)
    ));
  }
  if (question.dynamicAnswer === "pyramidFamilyLooseNet") {
    return pyramidNetAnySaved(card) || pyramidNetAnalysis(card).valid;
  }
  if (question.dynamicAnswer === "rectangularPrismNet") {
    return rectangularPrismNetAnalysis(card).valid;
  }
  if (question.dynamicAnswer === "perfectSquareExamples") {
    return questionSetPowerExamplesAreCorrect(card, question, 2);
  }
  if (question.dynamicAnswer === "perfectCubeExamples") {
    return questionSetPowerExamplesAreCorrect(card, question, 3, [27]);
  }
  if (question.dynamicAnswer === "perfectSquareAndCubeExamples") {
    return questionSetPerfectSquareAndCubeExamplesAreCorrect(card, question);
  }
  if (question.dynamicAnswer === "tentPlanReady") {
    return tentPlanFromResponse(tentPlanField("teach-l19")).valid;
  }
  if (question.dynamicAnswer === "tentFabricEstimate") {
    return tentFabricEstimateIsCorrect(card, question);
  }
  if (question.dynamicAnswer === "tentComparisonLeast") {
    return tentComparisonSelectionIsCorrect(card, question, "least");
  }
  if (question.dynamicAnswer === "tentComparisonMost") {
    return tentComparisonSelectionIsCorrect(card, question, "most");
  }
  if (question.dynamicAnswer === "tentComparisonImpact") {
    return tentComparisonSelectionIsCorrect(card, question, "impact");
  }
  if (question.dynamicAnswer === "validCubeNet") {
    return cubeNetIsValid(labeledCubeNetCells(card, question));
  }
  if (question.responseType === "construction" && ["parallelogramPairArea20", "parallelogramPairEqualArea"].includes(question.dynamicAnswer)) {
    return parallelogramPairIsCorrect(card, question);
  }
  if (question.dynamicAnswer === "eightCubeShapeMetrics") {
    const shapeId = question.shapeId === "B" ? "B" : "A";
    const cells = eightCubeShapeCells(card, shapeId);
    return eightCubeShapeIsConnected(cells)
      && normalizeAnswer(questionSetValue(card, question.id, "name")).length >= 2
      && answerMatches(questionSetValue(card, question.id, "volume"), "8")
      && answerMatches(questionSetValue(card, question.id, "surfaceArea"), String(eightCubeShapeSurfaceArea(cells)));
  }
  if (question.dynamicAnswer === "sameSurfaceDifferentVolume") {
    const values = ["aL", "aW", "aH", "bL", "bW", "bH"].map((fieldId) => questionSetWholeNumber(card, question, fieldId));
    if (values.some((value) => value === null)) return false;
    const [aL, aW, aH, bL, bW, bH] = values;
    const first = { l: aL, w: aW, h: aH };
    const second = { l: bL, w: bW, h: bH };
    const sourceSignatures = new Set(["1x1x11", "1x2x7", "1x3x5"]);
    const includesNewPrism = !sourceSignatures.has(prismDimensionSignature(aL, aW, aH))
      || !sourceSignatures.has(prismDimensionSignature(bL, bW, bH));
    return includesNewPrism
      && prismSurfaceArea(first) === prismSurfaceArea(second)
      && prismVolume(first) !== prismVolume(second);
  }
  if (Array.isArray(question.fields) && question.fields.length > 0) {
    const acceptedSets = Array.isArray(question.acceptedFieldSets) ? question.acceptedFieldSets : [];
    if (acceptedSets.length > 0) {
      return acceptedSets.some((acceptedSet) => question.fields.every((field) => (
        Object.prototype.hasOwnProperty.call(acceptedSet, field.id)
          && questionSetFieldMatches(card, question, field, acceptedSet[field.id])
      )));
    }
    return question.fields.every((field) => questionSetFieldMatches(card, question, field, field.answerKey || []));
  }
  if (question.responseType === "singleChoice") {
    return questionSetSelections(card, question)[0] === answerKey[0];
  }
  if (question.responseType === "multiSelect") {
    const selected = [...questionSetSelections(card, question)].sort();
    const expected = [...answerKey].sort();
    return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
  }
  const value = questionSetValue(card, question.id);
  if (question.responseType === "number") {
    if (question.estimate) {
      const estimate = parseMathNumber(value);
      return estimate !== null && estimate > 0;
    }
    if (question.dynamicAnswer === "parallelogramArea") {
      return answerMatches(value, String(parallelogramExploreShape(card, question.id).area));
    }
    return answerKey.some((accepted) => answerMatches(value, accepted));
  }
  if (question.responseType === "shortAnswer") {
    const normalized = normalizeAnswer(value);
    return answerKey.some((accepted) => normalized === normalizeAnswer(String(accepted)));
  }
  const normalized = normalizeAnswer(value);
  const concepts = Array.isArray(question.answerConcepts) ? question.answerConcepts : [];
  const conceptRequirements = Array.isArray(question.answerConceptRequirements)
    ? question.answerConceptRequirements
    : [];
  const requiredConceptCount = Number.isInteger(question.answerConceptsRequired)
    ? Math.max(1, question.answerConceptsRequired)
    : 1;
  const minimumLength = Number.isInteger(question.minLength) ? question.minLength : 1;
  if (question.acceptAnyResponse) return normalized.length >= minimumLength;
  const conceptsCorrect = concepts.length === 0
    ? conceptRequirements.length > 0
    : normalizedTextConceptMatchCount(normalized, concepts) >= requiredConceptCount;
  return normalized.length >= minimumLength
    && conceptsCorrect
    && normalizedTextMeetsConceptRequirements(normalized, conceptRequirements);
}

function questionSetQuestionUnlocked(card, question) {
  if (!question?.unlockedAfterQuestionId) return true;
  const prerequisite = questionSetDefinition(card, question.unlockedAfterQuestionId);
  return Boolean(prerequisite
    && isTeachQuestionSubmitted(card, prerequisite.id)
    && questionSetQuestionIsCorrect(card, prerequisite));
}

function questionSetHasAnswer(card, question) {
  if (question.answerOptional) return true;
  if (question.dynamicAnswer === "baseHeightChallenge") {
    return baseHeightChallengeHasInteraction(card, question);
  }
  if (question.dynamicAnswer === "tangramConstruction") {
    const hasConstruction = Boolean(getTeachCustomResponse(card)[tangramSavedField(question.id)])
      || tangramIncludedPieceIds(card, question.id).length > 0;
    return hasConstruction && (!question.requireAreaAnswer || normalizeAnswer(questionSetValue(card, question.id, "area")).length > 0);
  }
  if (question.dynamicAnswer === "polyhedronPerFigure") {
    return polyhedronModelIds.every((modelId) => polyhedronClassificationValue(card, modelId));
  }
  if (question.dynamicAnswer === "pyramidFamilyLooseNet") {
    return pyramidNetTargetIds.some((target) => (
      pyramidNetPieces(card, target).length > 0 || pyramidNetSavedSignatures(card, target).length > 0
    ));
  }
  if (question.dynamicAnswer === "rectangularPrismNet") {
    return rectangularPrismNetFaces(card).length > 0;
  }
  if (question.responseType === "construction" && question.dynamicAnswer === "tentPlanReady") {
    return tentPlanHasInteraction();
  }
  if (question.responseType === "construction" && ["parallelogramPairArea20", "parallelogramPairEqualArea"].includes(question.dynamicAnswer)) {
    return parallelogramPairHasInteraction(card, question);
  }
  if (question.responseType === "construction" && question.dynamicAnswer === "validCubeNet") {
    return labeledCubeNetCells(card, question).length > 0;
  }
  if (Array.isArray(question.fields) && question.fields.length > 0) {
    return question.fields.every((field) => normalizeAnswer(questionSetValue(card, question.id, field.id)).length > 0);
  }
  if (question.responseType === "singleChoice" || question.responseType === "multiSelect") {
    return questionSetSelections(card, question).length > 0;
  }
  return normalizeAnswer(questionSetValue(card, question.id)).length > 0;
}

function questionSetReasoningEvaluation(card, question) {
  const reasoning = normalizeAnswer(questionSetValue(card, question.id, "reasoning"));
  if (!question.reasoningPrompt) return { answered: true, correct: true };
  if (question.reasoningOptional) return { answered: reasoning.length > 0, correct: true };
  const concepts = Array.isArray(question.reasoningConcepts) ? question.reasoningConcepts : [];
  const conceptRequirements = Array.isArray(question.reasoningConceptRequirements)
    ? question.reasoningConceptRequirements
    : [];
  const requiredConceptCount = Number.isInteger(question.reasoningConceptsRequired)
    ? Math.max(1, question.reasoningConceptsRequired)
    : 1;
  const conceptsCorrect = concepts.length === 0
    || normalizedTextConceptMatchCount(reasoning, concepts) >= requiredConceptCount;
  const numberCorrect = !question.reasoningRequiresNumber || /\d/.test(reasoning);
  const correct = reasoning.length > 0
    && conceptsCorrect
    && normalizedTextMeetsConceptRequirements(reasoning, conceptRequirements)
    && numberCorrect;
  return { answered: reasoning.length > 0, correct };
}

function questionSetRequiredStateSatisfied(card, question) {
  if (question.requireAreaCheck && !parallelogramExploreAreaIsShown(card, question.id)) return false;
  if (question.requiredConstruction === "sourceNetFoldComplete") {
    return surfaceNetFoldStep(card, question.netId) === 3;
  }
  if (question.requiredConstruction === "largestCube") {
    const inventory = snapCubeInventory(question);
    return snapCubeIsLargestCompleteCube(snapCubeCells(card, inventory), inventory);
  }
  if (question.requiredConstruction === "validCubeNet") {
    return cubeNetIsValid(labeledCubeNetCells(card, question));
  }
  if (question.requiredConstruction === "validRectangularPrismNet") {
    return rectangularPrismNetAnalysis(card).valid;
  }
  if (question.requiredConstruction === "savedTentPlan") {
    return tentPlanIsSavedFor(card);
  }
  const requirements = question.requiredCustomState || {};
  const entries = Object.entries(requirements);
  if (!entries.length) return true;
  const response = getTeachCustomResponse(card);
  return entries.every(([field, expected]) => String(response[field] ?? "") === String(expected));
}

function questionSetQuestionIsCorrect(card, question) {
  const adjustmentSatisfied = !question.requireAdjustment || parallelogramExploreWasAdjusted(card, question.id);
  return adjustmentSatisfied
    && parallelogramExploreIsUnique(card, question)
    && questionSetRequiredStateSatisfied(card, question)
    && questionSetAnswerIsCorrect(card, question)
    && questionSetReasoningEvaluation(card, question).correct;
}

function questionSetStatus(card, question) {
  if (!questionSetQuestionUnlocked(card, question)) return { className: "", text: "Locked" };
  if (question.dynamicAnswer === "polyhedronPerFigure") {
    const progress = polyhedronClassificationProgress(card);
    if (progress.correctCount === progress.totalCount) return { className: "is-correct", text: "Correct" };
    if (progress.submittedCount === progress.totalCount) return { className: "is-incorrect", text: "Revise" };
    if (progress.submittedCount > 0) return { className: "", text: `${progress.correctCount}/${progress.totalCount} correct` };
    return { className: "", text: "Not submitted" };
  }
  const submitted = isTeachQuestionSubmitted(card, question.id);
  if (!submitted) return { className: "", text: question.optional ? "Optional" : "Not submitted" };
  if (questionSetQuestionIsCorrect(card, question)) return { className: "is-correct", text: question.estimate || question.recordResponse ? "Recorded" : "Correct" };
  return { className: "is-incorrect", text: "Revise" };
}

function questionSetCompletedCount(card) {
  const correctCount = (card.questions || []).filter((question) => !question.optional && (
    isTeachQuestionSubmitted(card, question.id) && questionSetQuestionIsCorrect(card, question)
  )).length;
  return Math.min(correctCount, questionSetRequiredCount(card));
}

function questionSetRequiredCount(card) {
  const availableCount = (card.questions || []).filter((question) => !question.optional).length;
  if (Number.isInteger(card.minimumRequiredCount)) {
    return Math.max(0, Math.min(card.minimumRequiredCount, availableCount));
  }
  return availableCount;
}

function tentFabricCalculationExplanation(plan) {
  const details = tentFabricDetails(plan);
  if (!details) return "Complete a valid tent plan before calculating fabric.";
  if (plan.style === "a-frame") {
    return `The slanted roof width is ${formatTentMeasure(details.slant)} ft. Floor: ${plan.floorLength} × ${plan.floorWidth} = ${formatTentMeasure(details.floor)}; two roof panels: 2 × ${plan.floorLength} × ${formatTentMeasure(details.slant)} = ${formatTentMeasure(details.roofPair)}; two triangular ends: ${plan.floorWidth} × ${plan.height} = ${formatTentMeasure(details.endPair)}. Total: ${formatTentMeasure(details.total)} square feet.`;
  }
  return `Floor: ${plan.floorLength} × ${plan.floorWidth} = ${formatTentMeasure(details.floor)}; roof: ${plan.floorLength} × ${plan.floorWidth} = ${formatTentMeasure(details.roof)}; two long walls: 2 × ${plan.floorLength} × ${plan.height} = ${formatTentMeasure(details.longWalls)}; two end walls: 2 × ${plan.floorWidth} × ${plan.height} = ${formatTentMeasure(details.endWalls)}. Total: ${formatTentMeasure(details.total)} square feet.`;
}

function tentComparisonFeedback(mode) {
  const designs = tentComparisonDesigns();
  const correctIds = tentComparisonAnswerIds(mode);
  if (!designs.length || !correctIds.length) return "Complete 19.1 before comparing the tents.";
  if (mode === "impact") {
    const own = designs.find((design) => design.id === "own");
    const height = designs.find((design) => design.id === "height-change");
    const floor = designs.find((design) => design.id === "floor-change");
    return `Changing height changes the estimate by ${formatTentMeasure(Math.abs(height.fabric - own.fabric))} square feet. Changing the floor dimensions changes it by ${formatTentMeasure(Math.abs(floor.fabric - own.fabric))} square feet. The greater impact comes from ${correctIds.map(tentDesignLabel).join(" or ")}.`;
  }
  const summaries = correctIds.map((id) => {
    const design = designs.find((entry) => entry.id === id);
    return `${tentDesignLabel(id)} (${formatTentMeasure(design.fabric)} square feet)`;
  });
  return `The ${mode === "least" ? "smallest" : "largest"} estimate is ${summaries.join(" or ")}.`;
}

function pyramidNetRequiredInventoryText(targetDefinition) {
  return `1 ${targetDefinition.baseType} base and ${targetDefinition.triangleCount} ${targetDefinition.triangleDescription}`;
}

function pyramidNetFeedbackText(card) {
  const target = pyramidNetTargetId(card);
  const targetDefinition = pyramidNetTargetDefinition(target);
  const workspace = pyramidNetWorkspace(card, target);
  const analysis = pyramidNetAnalysis(card, target);
  const savedCount = workspace.savedSignatures.length;
  const completedTargets = pyramidNetTargetIds.filter((targetId) => pyramidNetSavedSignatures(card, targetId).length > 0);
  if (!workspace.submitted) {
    if (savedCount && !analysis.pieces.length) {
      return `${savedCount === 1 ? "One valid net is" : `${savedCount} valid nets are`} saved for Figure ${target}. Choose loose polygons when you are ready to try another arrangement.`;
    }
    if (completedTargets.length) {
      return `Question 3 is complete with Figure ${completedTargets.join(", ")}. Build and submit the active Figure ${target} workspace to test this pyramid too.`;
    }
    return "Submit Question 3 when you are ready for feedback on the active source pyramid.";
  }
  if (!analysis.pieces.length) {
    return `Choose polygons for Figure ${target} from the supply and place them on the workspace before submitting.`;
  }
  if (analysis.valid) {
    const another = savedCount > 1
      ? ` You have saved ${savedCount} different valid net structures for Figure ${target}.`
      : ` Clear the workspace to find another net or switch to Figure ${pyramidNetTargetIds.find((targetId) => targetId !== target) || "Q"}.`;
    return `Correct. Figure ${target}, the ${targetDefinition.label.toLowerCase()}, needs ${pyramidNetRequiredInventoryText(targetDefinition)}, and your pieces form one connected, non-overlapping net.${another}`;
  }
  if (!analysis.inventoryCorrect) {
    return `The selected face set needs revision. Figure ${target}, the ${targetDefinition.label.toLowerCase()}, has ${pyramidNetRequiredInventoryText(targetDefinition)} and no other faces.`;
  }
  if (analysis.overlap) {
    return "Your face set is correct, but at least two cut-outs overlap. Move the pieces so faces meet only along complete edges.";
  }
  if (!analysis.connected) {
    return "Your face set is correct, but the pieces are not all connected. Join every cut-out to one growing net along complete edges.";
  }
  if (!analysis.joinRolesValid) {
    return "Your face set is correct, but two triangular faces meet along base edges. A triangle's base edge belongs against the polygon base; triangular side faces join one another along their sloping edges.";
  }
  return "Your face set is correct, but the arrangement is not yet one flat net. Check for exactly one complete-edge connection between each new face and the growing figure.";
}

function questionSetResolvedFeedback(card, question, correct) {
  if (question.answerOptional && !normalizeAnswer(questionSetValue(card, question.id)).length) {
    return question.optionalEmptyFeedback || question.correctFeedback;
  }
  if (question.dynamicAnswer === "baseHeightChallenge") {
    return correct ? question.correctFeedback : question.incorrectFeedback;
  }
  if (question.dynamicAnswer === "tangramConstruction") {
    return correct ? question.correctFeedback : tangramConstructionFeedback(card, question);
  }
  if (question.dynamicAnswer === "pyramidFamilyLooseNet") {
    return pyramidNetFeedbackText(card);
  }
  if (question.dynamicAnswer === "rectangularPrismNet") {
    return `${correct ? "Correct. " : ""}${rectangularPrismNetFeedbackText(card)}`;
  }
  if (question.dynamicAnswer === "tentPlanReady") {
    const plan = tentPlanFromResponse(tentPlanField("teach-l19"));
    if (correct) {
      return `Your ${plan.floorLength}-by-${plan.floorWidth}-foot floor fits ${plan.capacity} standard ${plan.capacity === 1 ? "sleeping bag" : "sleeping bags"}, and your ${plan.height}-foot ${plan.style === "a-frame" ? "A-frame" : "wall"} tent includes a floor.`;
    }
    if (!plan.complete) return "Choose a capacity, bag arrangement, height, tent style, and both floor dimensions.";
    return `The ${plan.capacity} sleeping bags require at least ${formatTentMeasure(plan.requiredFloor.length)} by ${formatTentMeasure(plan.requiredFloor.width)} feet in this arrangement. Enlarge the floor and submit again.`;
  }
  if (question.dynamicAnswer === "tentFabricEstimate") {
    const explanation = tentFabricCalculationExplanation(tentPlanFromResponse(tentPlanField("teach-l19")));
    return correct
      ? `Correct. ${explanation}`
      : `Recheck the estimate and use square feet. ${explanation}`;
  }
  if (question.dynamicAnswer === "tentComparisonLeast") {
    return `${correct ? "Correct. " : "Compare the totals again. "}${tentComparisonFeedback("least")}`;
  }
  if (question.dynamicAnswer === "tentComparisonMost") {
    return `${correct ? "Correct. " : "Compare the totals again. "}${tentComparisonFeedback("most")}`;
  }
  if (question.dynamicAnswer === "tentComparisonImpact") {
    return `${correct ? "Correct. " : "Compare each change with your tent. "}${tentComparisonFeedback("impact")}`;
  }
  const feedback = correct ? question.correctFeedback : question.incorrectFeedback;
  return !correct && question.responseType === "openResponse" && !question.answerOptional
    ? freeTextFeedbackWithCriteria(feedback, questionAnswerValidationCriteria(question))
    : feedback;
}

function renderQuestionSetFeedback(card, question) {
  if (question.dynamicAnswer === "pyramidFamilyLooseNet") {
    const target = pyramidNetTargetId(card);
    const workspace = pyramidNetWorkspace(card, target);
    const analysis = pyramidNetAnalysis(card, target);
    const feedbackClass = workspace.submitted
      ? analysis.valid ? "is-correct" : "is-incorrect"
      : pyramidNetAnySaved(card) ? "is-correct" : "";
    return `<p class="practice-feedback teach-question-feedback ${feedbackClass}" data-question-set-feedback="${escapeHtml(question.id)}" aria-live="polite">${escapeHtml(pyramidNetFeedbackText(card))}</p>`;
  }
  const submitted = isTeachQuestionSubmitted(card, question.id);
  const answered = questionSetHasAnswer(card, question);
  const answerCorrect = answered && questionSetAnswerIsCorrect(card, question);
  const reasoning = questionSetReasoningEvaluation(card, question);
  const failedReasoningCriteria = question.reasoningPrompt
    && !question.reasoningOptional
    && !reasoning.correct
    ? freeTextValidationCriteria(questionReasoningValidationCriteria(question))
    : "";
  const adjustmentSatisfied = !question.requireAdjustment || parallelogramExploreWasAdjusted(card, question.id);
  const uniquenessSatisfied = parallelogramExploreIsUnique(card, question);
  const requiredStateSatisfied = questionSetRequiredStateSatisfied(card, question);
  const correct = submitted && adjustmentSatisfied && uniquenessSatisfied && requiredStateSatisfied && answerCorrect && reasoning.correct;
  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  const baseFeedbackText = !submitted
    ? `Submit ${question.label} when you are ready for feedback.`
    : !answered
      ? question.responseType === "openResponse" && !question.answerOptional
        ? freeTextFeedbackWithCriteria(
          question.missingResponseFeedback || `Enter a response for ${question.label}, then submit again.`,
          questionAnswerValidationCriteria(question)
        )
        : [
          question.missingResponseFeedback || `Choose or enter an answer for ${question.label}, then submit again.`,
          failedReasoningCriteria,
        ].filter(Boolean).join(" ")
      : !adjustmentSatisfied
        ? question.adjustmentFeedback || "Change the model before submitting this question."
        : !uniquenessSatisfied
          ? question.uniquenessFeedback || "Make this model different from the figures already recorded."
      : !requiredStateSatisfied
        ? question.requireAreaCheck
          ? question.areaCheckFeedback || "Use Show Area to check this figure before submitting it."
          : question.requiredStateFeedback || "Complete the required workspace action before submitting this question."
      : answerCorrect && question.reasoningPrompt && !question.reasoningOptional && !reasoning.answered
        ? freeTextFeedbackWithCriteria(
          question.reasoningRequiredFeedback || "Your answer is correct. Add your reasoning, then submit again.",
          questionReasoningValidationCriteria(question)
        )
        : answerCorrect && question.reasoningPrompt && !question.reasoningOptional && !reasoning.correct
          ? freeTextFeedbackWithCriteria(
            question.reasoningRevisionFeedback || "Your answer is correct, but strengthen the explanation; it did not pass the app check.",
            questionReasoningValidationCriteria(question)
          )
          : correct
            ? questionSetResolvedFeedback(card, question, true)
            : questionSetResolvedFeedback(card, question, false);
  const feedbackText = submitted
    ? appendFeedbackCriteria(baseFeedbackText, failedReasoningCriteria)
    : baseFeedbackText;
  return `<p class="practice-feedback teach-question-feedback ${feedbackClass}" data-question-set-feedback="${escapeHtml(question.id)}" aria-live="polite">${escapeHtml(feedbackText)}</p>`;
}

function renderQuestionSetHint(card, question) {
  if (!isTeachQuestionHintVisible(card, question.id)) return "";
  return `<p class="practice-hints teach-question-hint" data-question-set-hint-content="${escapeHtml(question.id)}"><strong>Hint:</strong> ${escapeHtml(question.hint)}</p>`;
}

function renderParallelogramAreaCheck(card, question) {
  if (!question.showAreaCheck) return "";
  const showArea = parallelogramExploreAreaIsShown(card, question.id);
  return `
    <div class="parallelogram-area-check-row">
      <button
        class="hint-button parallelogram-show-area"
        type="button"
        data-parallelogram-show-area="${card.id}"
        data-question-id="${escapeHtml(question.id)}"
        aria-pressed="${showArea}"
      >${showArea ? "Hide Area" : "Show Area"}</button>
      <span>${showArea ? "The applet now displays its calculated area in the workspace." : "Area is hidden."}</span>
    </div>
  `;
}

function renderQuestionSetAnswer(card, question) {
  if (question.responseType === "construction") {
    return `
      <p class="teach-question-note">${escapeHtml(question.constructionNote || "Use the construction controls in the workspace, then submit this question.")}</p>
      ${question.requireAreaAnswer ? `
        <label class="question-set-input-label">
          Area of the completed shape (square units)
          <input
            type="text"
            inputmode="decimal"
            maxlength="24"
            autocomplete="off"
            data-question-set-input="${card.id}"
            data-question-id="${escapeHtml(question.id)}"
            data-question-field="area"
            value="${escapeHtml(questionSetValue(card, question.id, "area"))}"
            placeholder="Enter the area"
          >
        </label>
      ` : ""}
    `;
  }
  if (Array.isArray(question.fields) && question.fields.length > 0) {
    return `
      <div class="question-set-field-grid">
        ${question.fields.map((field) => `
          <label class="question-set-input-label">
            ${escapeHtml(field.label)}
            <input
              type="text"
              inputmode="${field.responseType === "number" ? "decimal" : "text"}"
              maxlength="${field.responseType === "number" ? 24 : 120}"
              autocomplete="off"
              data-question-set-input="${card.id}"
              data-question-id="${escapeHtml(question.id)}"
              data-question-field="${escapeHtml(field.id)}"
              value="${escapeHtml(questionSetValue(card, question.id, field.id))}"
              placeholder="${escapeHtml(field.placeholder || "Type answer")}"
            >
          </label>
        `).join("")}
      </div>
    `;
  }
  if (question.responseType === "singleChoice" || question.responseType === "multiSelect") {
    const selected = questionSetSelections(card, question);
    return `
      <div class="option-grid teach-option-grid question-set-choice-grid ${question.visualType === "polyhedronSort" ? "polyhedron-sort-choice-grid" : ""}" role="group" aria-label="${escapeHtml(question.prompt)}">
        ${(question.choices || []).map((choice) => `
          <button
            class="option-button ${selected.includes(choice.id) ? "is-selected" : ""}"
            type="button"
            data-question-set-choice="${card.id}"
            data-question-id="${escapeHtml(question.id)}"
            data-option-id="${escapeHtml(choice.id)}"
            aria-pressed="${selected.includes(choice.id)}"
          >${escapeHtml(choice.label)}</button>
        `).join("")}
      </div>
    `;
  }
  if (question.responseType === "openResponse") {
    return `
      <label class="reasoning-field question-set-long-answer">
        ${escapeHtml(optionalFieldLabel(question.inputLabel || "Answer", question.answerOptional))}
        <textarea
          maxlength="${TEXTAREA_MAX_LENGTH}"
          data-question-set-input="${card.id}"
          data-question-id="${escapeHtml(question.id)}"
          data-question-field="answer"
          placeholder="${escapeHtml(question.placeholder || "Type your answer")}"
        >${escapeHtml(questionSetValue(card, question.id))}</textarea>
      </label>
    `;
  }
  const inputMode = question.responseType === "number" ? "decimal" : "text";
  return `
    <label class="question-set-input-label">
      ${escapeHtml(question.inputLabel || "Answer")}
      <input
        type="text"
        inputmode="${inputMode}"
        maxlength="${question.responseType === "number" ? 24 : 500}"
        autocomplete="off"
        data-question-set-input="${card.id}"
        data-question-id="${escapeHtml(question.id)}"
        data-question-field="answer"
        value="${escapeHtml(questionSetValue(card, question.id))}"
        placeholder="${escapeHtml(question.placeholder || "Type your answer")}"
      >
    </label>
    ${renderParallelogramAreaCheck(card, question)}
  `;
}

function renderPolyhedronClassificationControl(card, question) {
  const modelId = polyhedronSelectedModel(card);
  const selectedValue = polyhedronClassificationValue(card, modelId);
  const submitted = polyhedronClassificationSubmitted(card, modelId);
  const correct = submitted && polyhedronClassificationIsCorrect(card, modelId);
  const progress = polyhedronClassificationProgress(card);
  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  let feedbackText = `Choose a classification for Figure ${modelId}, then submit it for feedback.`;
  if (submitted && !selectedValue) {
    feedbackText = `Choose Polyhedron or Not a polyhedron for Figure ${modelId}, then submit it again.`;
  } else if (submitted) {
    const expectedLabel = polyhedronClassificationExpected(card, modelId) === "polyhedron"
      ? "a polyhedron"
      : "not a polyhedron";
    feedbackText = `${correct ? "Correct." : `Not quite. Figure ${modelId} is ${expectedLabel}.`} ${polyhedronClassificationExplanations[modelId]}`;
  }
  return `
    <div class="polyhedron-classification" data-polyhedron-classification="${modelId}">
      <div class="polyhedron-classification-heading">
        <p class="polyhedron-classification-prompt">Is Figure ${modelId} a polyhedron?</p>
        <p class="polyhedron-classification-progress" data-polyhedron-classification-progress>${progress.correctCount} of ${progress.totalCount} figures completed correctly.</p>
      </div>
      <div class="option-grid teach-option-grid polyhedron-classification-options" role="group" aria-label="Classify Figure ${modelId}">
        ${(question.choices || []).map((choice) => `
          <button
            class="option-button ${selectedValue === choice.id ? "is-selected" : ""}"
            type="button"
            data-polyhedron-classification-choice="${card.id}"
            data-model-id="${modelId}"
            data-classification="${escapeHtml(choice.id)}"
            aria-pressed="${selectedValue === choice.id}"
          >${escapeHtml(choice.label)}</button>
        `).join("")}
      </div>
      <div class="practice-actions teach-question-actions">
        <button class="practice-submit" type="button" data-polyhedron-classification-submit="${card.id}" data-model-id="${modelId}">Submit Figure ${modelId}</button>
        <button class="hint-button" type="button" data-question-set-hint="${card.id}" data-question-id="${escapeHtml(question.id)}">${isTeachQuestionHintVisible(card, question.id) ? "Hide hint" : "Show hint"}</button>
      </div>
      <p class="practice-feedback teach-question-feedback ${feedbackClass}" data-polyhedron-classification-feedback="${modelId}" aria-live="polite">${escapeHtml(feedbackText)}</p>
      ${renderQuestionSetHint(card, question)}
    </div>
  `;
}

function renderQuestionSetControl(card) {
  const activeId = questionSetActiveId(card);
  const question = questionSetDefinition(card, activeId);
  if (!question) return "";
  const completed = questionSetCompletedCount(card);
  const requiredCount = questionSetRequiredCount(card);
  const hasOptional = requiredCount !== (card.questions || []).length;
  return `
    <div class="question-set-response" data-question-set-response="${escapeHtml(activeId)}">
      <div class="question-set-progress" role="tablist" aria-label="Required questions">
        ${(card.questions || []).map((entry) => {
          const status = questionSetStatus(card, entry);
          const unlocked = questionSetQuestionUnlocked(card, entry);
          return `
            <button
              class="question-set-progress-item ${entry.id === activeId ? "is-active" : ""} ${status.className}"
              type="button"
              role="tab"
              data-question-set-select="${card.id}"
              data-question-id="${escapeHtml(entry.id)}"
              aria-selected="${entry.id === activeId}"
              ${unlocked ? "" : "disabled"}
            >
              <strong>${escapeHtml(entry.label)}</strong>
              <span>${escapeHtml(status.text)}</span>
            </button>
          `;
        }).join("")}
      </div>
      <p class="teach-question-note" data-question-set-completion>Completed ${completed} of ${requiredCount}${hasOptional ? " required" : ""} questions.</p>
      <section class="teach-independent-question question-set-question" aria-labelledby="${card.id}-${activeId}-prompt">
        <p class="teach-question-number">${escapeHtml(question.label)}</p>
        <p class="teach-response-prompt" id="${card.id}-${activeId}-prompt">${escapeHtml(question.prompt)}</p>
        ${question.dynamicAnswer === "polyhedronPerFigure" ? renderPolyhedronClassificationControl(card, question) : `
          ${renderQuestionSetAnswer(card, question)}
          ${question.reasoningPrompt ? `
            <label class="reasoning-field">
              ${escapeHtml(optionalFieldLabel(question.reasoningPrompt, question.reasoningOptional))}
              <textarea
                maxlength="${TEXTAREA_MAX_LENGTH}"
                data-question-set-input="${card.id}"
                data-question-id="${escapeHtml(question.id)}"
                data-question-field="reasoning"
                placeholder="Explain your thinking."
              >${escapeHtml(questionSetValue(card, question.id, "reasoning"))}</textarea>
            </label>
          ` : ""}
          <div class="practice-actions teach-question-actions">
            <button class="practice-submit" type="button" data-question-set-submit="${card.id}" data-question-id="${escapeHtml(question.id)}">Submit ${escapeHtml(question.label)}</button>
            <button class="hint-button" type="button" data-question-set-hint="${card.id}" data-question-id="${escapeHtml(question.id)}">${isTeachQuestionHintVisible(card, question.id) ? "Hide hint" : "Show hint"}</button>
          </div>
          ${renderQuestionSetFeedback(card, question)}
          ${renderQuestionSetHint(card, question)}
        `}
      </section>
    </div>
  `;
}

function areaMeaningDrawingSelections(card) {
  const selected = String(getTeachCustomResponse(card).drawingSelections || "").split("|").filter(Boolean);
  return card.drawingChoices.filter((choice) => selected.includes(choice));
}

function areaMeaningDrawingsAreCorrect(card) {
  const selected = [...areaMeaningDrawingSelections(card)].sort();
  const expected = [...card.drawingAnswerKey].sort();
  return selected.length === expected.length && selected.every((choice, index) => choice === expected[index]);
}

function areaMeaningDrawingReasoningEvaluation(card) {
  const reasoning = normalizeAnswer(getTeachCustomResponse(card).drawingReasoning || "");
  const hasCriterion = [
    "cover",
    "overlap",
    "gap",
    "same size",
    "unit square",
    "four small",
    "large square",
    "convert",
  ].some((term) => reasoning.includes(term));
  return { answered: reasoning.length > 0, correct: reasoning.length >= 12 && hasCriterion };
}

function areaDefinitionEvaluation(value) {
  const answer = normalizeAnswer(value);
  const hasRegion = /\b(two[- ]dimensional|2d|flat|region|shape|inside|surface)\b/.test(answer);
  const hasSquareUnits = /\b(square units?|unit squares?|same[- ]size squares?)\b/.test(answer);
  const hasCovering = /\b(cover|covers|covered|covering|fill|fills|filled|filling|tile|tiles|tiled|tiling)\b/.test(answer);
  const hasNoGaps = /\b(no|without)\b.{0,45}\bgaps?\b/.test(answer)
    || /\b(completely|fully|entirely)\b/.test(answer);
  const hasNoOverlaps = /\b(no|without)\b.{0,45}\boverlaps?\b/.test(answer)
    || /\b(do not|does not|don't|doesn't)\s+overlap\b/.test(answer)
    || /\bnon[- ]?overlapping\b/.test(answer);
  const missing = [];
  if (!hasRegion) missing.push("a two-dimensional region or shape");
  if (!hasSquareUnits) missing.push("square units or same-size unit squares");
  if (!hasCovering) missing.push("covering the region");
  if (!hasNoGaps) missing.push("no gaps");
  if (!hasNoOverlaps) missing.push("no overlaps");
  return {
    answered: answer.length > 0,
    correct: missing.length === 0,
    missing,
  };
}

function renderAreaMeaningQuestionFeedback(card, questionId) {
  const submitted = isTeachQuestionSubmitted(card, questionId);
  let correct = false;
  let feedbackText = `Submit Question ${questionId === "drawings" ? "1" : "2"} when you are ready for feedback.`;

  if (submitted && questionId === "drawings") {
    const selected = areaMeaningDrawingSelections(card);
    const selectionsCorrect = areaMeaningDrawingsAreCorrect(card);
    const reasoning = areaMeaningDrawingReasoningEvaluation(card);
    correct = selectionsCorrect && reasoning.correct;
    if (!selected.length) {
      feedbackText = "Select at least one drawing, then submit Question 1 again.";
    } else {
      const explanation = "A and D can be counted using a consistent square unit. B also works because four of its small squares equal one large square. C does not work because its squares overlap and leave part of the region uncovered.";
      feedbackText = !selectionsCorrect
        ? `Not quite. The correct drawings are A, B, and D. ${explanation}`
        : !reasoning.answered
          ? freeTextFeedbackWithCriteria(
            "Your selections A, B, and D are correct. Add an explanation of why the squares can be used, then submit again.",
            { validationGuidance: card.freeTextValidationGuidance?.drawingReasoning }
          )
          : !reasoning.correct
            ? freeTextFeedbackWithCriteria(
              "Your selections A, B, and D are correct. Strengthen the explanation; it did not pass the app check.",
              { validationGuidance: card.freeTextValidationGuidance?.drawingReasoning }
            )
            : `Correct. The drawings are A, B, and D. ${explanation}`;
    }
  }

  if (submitted && questionId === "definition") {
    const evaluation = areaDefinitionEvaluation(getTeachCustomResponse(card).areaDefinition);
    correct = evaluation.correct;
    const modelDefinition = "Area is the number of unit squares that cover a two-dimensional region without gaps or overlaps.";
    if (!evaluation.answered) {
      feedbackText = freeTextFeedbackWithCriteria(
        "Write your definition of area, then submit Question 2 again.",
        { validationGuidance: card.freeTextValidationGuidance?.areaDefinition }
      );
    } else if (evaluation.correct) {
      feedbackText = `Correct. ${modelDefinition}`;
    } else {
      feedbackText = freeTextFeedbackWithCriteria(
        `Not quite. ${modelDefinition} Your definition still needs to include: ${evaluation.missing.join(", ")}.`,
        { validationGuidance: card.freeTextValidationGuidance?.areaDefinition }
      );
    }
  }

  if (submitted && questionId === "drawings") {
    const reasoning = areaMeaningDrawingReasoningEvaluation(card);
    if (!reasoning.correct) {
      feedbackText = appendFeedbackCriteria(
        feedbackText,
        freeTextValidationCriteria({ validationGuidance: card.freeTextValidationGuidance?.drawingReasoning })
      );
    }
  }

  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  return `<p class="practice-feedback teach-question-feedback ${feedbackClass}" data-teach-question-feedback="${questionId}" aria-live="polite">${escapeHtml(feedbackText)}</p>`;
}

function renderAreaMeaningQuestionHint(card, questionId) {
  if (!isTeachQuestionHintVisible(card, questionId)) return "";
  const hint = questionId === "drawings" ? card.drawingHint : card.definitionHint;
  return `<p class="practice-hints teach-question-hint" data-teach-question-hint-content="${questionId}"><strong>Hint:</strong> ${escapeHtml(hint)}</p>`;
}

function renderAreaMeaningControl(card) {
  const selected = areaMeaningDrawingSelections(card);
  const drawingReasoning = getTeachCustomResponse(card).drawingReasoning || "";
  const definition = getTeachCustomResponse(card).areaDefinition || "";
  return `
    <div class="area-meaning-response">
      <section class="teach-independent-question" data-teach-question-section="drawings" aria-labelledby="${card.id}-drawings-prompt">
        <p class="teach-question-number">Question 1</p>
        <p class="teach-response-prompt" id="${card.id}-drawings-prompt">${escapeHtml(card.prompt)}</p>
        <div class="area-meaning-choice-grid" role="group" aria-label="Drawings whose squares could be used to find area">
          ${card.drawingChoices.map((choice) => `
            <button
              class="option-button area-meaning-choice ${selected.includes(choice) ? "is-selected" : ""}"
              type="button"
              data-area-meaning-choice="${card.id}"
              data-drawing-id="${choice}"
              aria-pressed="${selected.includes(choice)}"
            >
              Drawing ${choice}
            </button>
          `).join("")}
        </div>
        <label class="reasoning-field">
          Explain why the selected drawings can be used to find area and why the others cannot.
          <textarea
            data-teach-question-input="${card.id}"
            data-question-id="drawings"
            maxlength="${TEXTAREA_MAX_LENGTH}"
            placeholder="Explain your reasoning."
          >${escapeHtml(drawingReasoning)}</textarea>
        </label>
        <div class="practice-actions teach-question-actions">
          <button class="practice-submit" type="button" data-teach-question-submit="${card.id}" data-question-id="drawings">Submit Question 1</button>
          <button class="hint-button" type="button" data-teach-question-hint="${card.id}" data-question-id="drawings">${isTeachQuestionHintVisible(card, "drawings") ? "Hide hint" : "Show hint"}</button>
        </div>
        ${renderAreaMeaningQuestionFeedback(card, "drawings")}
        ${renderAreaMeaningQuestionHint(card, "drawings")}
      </section>
      <section class="teach-independent-question" data-teach-question-section="definition" aria-labelledby="${card.id}-definition-prompt">
        <p class="teach-question-number">Question 2</p>
        <label class="reasoning-field" id="${card.id}-definition-prompt">
          ${escapeHtml(card.definitionPrompt)}
          <textarea
            data-teach-question-input="${card.id}"
            data-question-id="definition"
            maxlength="${TEXTAREA_MAX_LENGTH}"
            placeholder="Write your definition."
          >${escapeHtml(definition)}</textarea>
        </label>
        <div class="practice-actions teach-question-actions">
          <button class="practice-submit" type="button" data-teach-question-submit="${card.id}" data-question-id="definition">Submit Question 2</button>
          <button class="hint-button" type="button" data-teach-question-hint="${card.id}" data-question-id="definition">${isTeachQuestionHintVisible(card, "definition") ? "Hide hint" : "Show hint"}</button>
        </div>
        ${renderAreaMeaningQuestionFeedback(card, "definition")}
        ${renderAreaMeaningQuestionHint(card, "definition")}
      </section>
    </div>
  `;
}

function gridFigureAreaDefinition(card, figureId) {
  return card.figures?.find((figure) => figure.id === figureId) || null;
}

function gridFigureAreaActiveId(card) {
  const activeId = state.teachGridAreaActive[card.id];
  return gridFigureAreaDefinition(card, activeId)?.id || card.figures?.[0]?.id || "";
}

function gridFigureAreaField(figureId, field) {
  return `figure${figureId}${field === "area" ? "Area" : "Reasoning"}`;
}

function gridFigureAreaValue(card, figureId, field) {
  return getTeachCustomResponse(card)[gridFigureAreaField(figureId, field)] || "";
}

function isGridFigureAreaAnswerCorrect(card, figureId) {
  const figure = gridFigureAreaDefinition(card, figureId);
  const value = gridFigureAreaValue(card, figureId, "area");
  return Boolean(figure && normalizeAnswer(value).length > 0 && answerMatches(value, figure.answer));
}

function gridFigureAreaReasoningEvaluation(card, figureId) {
  const figure = gridFigureAreaDefinition(card, figureId);
  const reasoning = gridFigureAreaValue(card, figureId, "reasoning").trim().toLowerCase();
  if (!card.requireReasoning) return { answered: reasoning.length > 0, correct: true };
  const concepts = Array.isArray(figure?.reasoningConcepts) ? figure.reasoningConcepts : [];
  const conceptMatch = concepts.length === 0 || concepts.some((concept) => (
    Array.isArray(concept) && concept.length > 0
      && concept.every((term) => typeof term === "string" && reasoning.includes(term.toLowerCase()))
  ));
  return {
    answered: reasoning.length > 0,
    correct: reasoning.length > 0 && conceptMatch,
  };
}

function isGridFigureAreaCorrect(card, figureId) {
  if (!isGridFigureAreaAnswerCorrect(card, figureId)) return false;
  return gridFigureAreaReasoningEvaluation(card, figureId).correct;
}

function gridFigureAreaStatus(card, figureId) {
  const submitted = isTeachQuestionSubmitted(card, figureId);
  if (!submitted) return { className: "", text: "Not submitted" };
  if (isGridFigureAreaCorrect(card, figureId)) return { className: "is-correct", text: "Correct" };
  return { className: "is-incorrect", text: "Revise" };
}

function gridFigureAreaCompletedCount(card) {
  return (card.figures || []).filter((figure) => (
    isTeachQuestionSubmitted(card, figure.id) && isGridFigureAreaCorrect(card, figure.id)
  )).length;
}

function gridFigureAreaVisualConfig(card) {
  const positiveInteger = (value, fallback) => (
    Number.isInteger(value) && value > 0 && value <= 4096 ? value : fallback
  );
  const validWeights = (weights, fallback) => (
    Array.isArray(weights) && weights.length > 0 && weights.length <= 6
      && weights.every((weight) => Number.isFinite(weight) && weight > 0 && weight <= 100)
      ? weights
      : fallback
  );
  const width = positiveInteger(card.visualWidth, 427);
  const height = positiveInteger(card.visualHeight, 350);
  return {
    width,
    height,
    displayMaxWidth: Math.min(positiveInteger(card.visualDisplayMaxWidth, width), width),
    columns: validWeights(card.visualColumnWeights, [1, 1]).map((weight) => `${weight}fr`).join(" "),
    rows: validWeights(card.visualRowWeights, [1, 1]).map((weight) => `${weight}fr`).join(" "),
  };
}

function gridFigureAreaPrompt(card, figureId) {
  const prompt = card.figurePrompt || "Find the area of the shaded region in Figure {figure} without counting every square.";
  return prompt.split("{figure}").join(figureId);
}

function gridFigureAreaHitStyle(figure) {
  const validIndex = (value) => Number.isInteger(value) && value >= 1 && value <= 6;
  if (!validIndex(figure.visualRow) || !validIndex(figure.visualColumn)) return "";
  const columnSpan = validIndex(figure.visualColumnSpan) ? figure.visualColumnSpan : 1;
  const rowSpan = validIndex(figure.visualRowSpan) ? figure.visualRowSpan : 1;
  return ` style="grid-row: ${figure.visualRow} / span ${rowSpan}; grid-column: ${figure.visualColumn} / span ${columnSpan};"`;
}

function renderGridFigureAreaVisual(card) {
  const activeId = gridFigureAreaActiveId(card);
  const visual = gridFigureAreaVisualConfig(card);
  return `
    <figure class="teach-visual-frame grid-area-visual">
      <div
        class="grid-area-image-shell"
        style="--figure-area-max-width: ${visual.displayMaxWidth}px; --figure-area-columns: ${visual.columns}; --figure-area-rows: ${visual.rows};"
      >
        <img
          src="${teachCropUrl(card)}"
          alt="${escapeHtml(card.visualAlt)}"
          width="${visual.width}"
          height="${visual.height}"
          loading="lazy"
        >
        <div class="grid-area-hit-grid" role="group" aria-label="Select a figure to answer">
          ${(card.figures || []).map((figure) => {
            const status = gridFigureAreaStatus(card, figure.id);
            return `
              <button
                class="grid-area-figure-button ${figure.id === activeId ? "is-active" : ""} ${status.className}"
                type="button"
                data-grid-area-select="${card.id}"
                data-grid-area-figure="${figure.id}"
                aria-label="Select Figure ${figure.id}. ${status.text}."
                aria-pressed="${figure.id === activeId}"
                ${gridFigureAreaHitStyle(figure)}
              ></button>
            `;
          }).join("")}
        </div>
      </div>
    </figure>
  `;
}

function renderGridFigureAreaFeedback(card, figure) {
  const submitted = isTeachQuestionSubmitted(card, figure.id);
  const answered = normalizeAnswer(gridFigureAreaValue(card, figure.id, "area")).length > 0;
  const areaCorrect = answered && isGridFigureAreaAnswerCorrect(card, figure.id);
  const reasoning = gridFigureAreaReasoningEvaluation(card, figure.id);
  const correct = submitted && answered && isGridFigureAreaCorrect(card, figure.id);
  const feedbackClass = submitted ? (correct ? "is-correct" : "is-incorrect") : "";
  const reasoningRequiredFeedback = (card.reasoningRequiredFeedback || "Your area is correct. Add your reasoning, then submit Figure {figure} again.")
    .split("{figure}").join(figure.id);
  const reasoningCriteria = {
    concepts: figure.reasoningConcepts,
    validationGuidance: figure.reasoningValidationGuidance || card.reasoningValidationGuidance,
  };
  const failedReasoningCriteria = card.requireReasoning && !reasoning.correct
    ? freeTextValidationCriteria(reasoningCriteria)
    : "";
  const baseFeedbackText = !submitted
    ? `Submit Figure ${figure.id} when you are ready for feedback.`
    : !answered
      ? `Enter the area of Figure ${figure.id}, then submit again.`
      : areaCorrect && card.requireReasoning && !reasoning.answered
        ? freeTextFeedbackWithCriteria(reasoningRequiredFeedback, reasoningCriteria)
      : areaCorrect && card.requireReasoning && !reasoning.correct
        ? freeTextFeedbackWithCriteria(
          figure.reasoningRevisionFeedback || reasoningRequiredFeedback,
          reasoningCriteria
        )
      : correct
        ? figure.correctFeedback
        : figure.incorrectFeedback;
  const feedbackText = submitted
    ? appendFeedbackCriteria(baseFeedbackText, failedReasoningCriteria)
    : baseFeedbackText;
  return `<p class="practice-feedback teach-question-feedback ${feedbackClass}" data-grid-area-feedback="${figure.id}" aria-live="polite">${escapeHtml(feedbackText)}</p>`;
}

function renderGridFigureAreaHint(card, figure) {
  if (!isTeachQuestionHintVisible(card, figure.id)) return "";
  return `<p class="practice-hints teach-question-hint" data-grid-area-hint-content="${figure.id}"><strong>Hint:</strong> ${escapeHtml(figure.hint)}</p>`;
}

function renderGridFigureAreaControl(card) {
  const activeId = gridFigureAreaActiveId(card);
  const figure = gridFigureAreaDefinition(card, activeId);
  if (!figure) return "";
  const area = gridFigureAreaValue(card, activeId, "area");
  const reasoning = gridFigureAreaValue(card, activeId, "reasoning");
  const completed = gridFigureAreaCompletedCount(card);
  const progressColumnCount = Math.min(Math.max((card.figures || []).length, 1), 4);
  const unitLabel = card.unitLabel || "square units";
  return `
    <div class="grid-area-response" data-grid-area-response="${activeId}">
      <div class="grid-area-progress" role="list" aria-label="Progress for required figures" style="--figure-area-count: ${progressColumnCount};">
        ${(card.figures || []).map((entry) => {
          const status = gridFigureAreaStatus(card, entry.id);
          return `
            <span class="grid-area-progress-item ${entry.id === activeId ? "is-active" : ""} ${status.className}" role="listitem" data-grid-area-progress="${entry.id}">
              <strong>Figure ${entry.id}</strong>
              <span class="grid-area-progress-status">${status.text}</span>
            </span>
          `;
        }).join("")}
      </div>
      <p class="teach-question-note" data-grid-area-completion>Completed ${completed} of ${(card.figures || []).length} figures.</p>
      <section class="teach-independent-question grid-area-question" aria-labelledby="${card.id}-${activeId}-prompt">
        <p class="teach-question-number">Figure ${activeId}</p>
        <p class="teach-response-prompt" id="${card.id}-${activeId}-prompt">${escapeHtml(gridFigureAreaPrompt(card, activeId))}</p>
        <label class="grid-area-number-label">
          Area of Figure ${activeId}
          <span class="grid-area-number-control">
            <input
              type="text"
              inputmode="decimal"
              maxlength="24"
              autocomplete="off"
              data-grid-area-input="${card.id}"
              data-grid-area-figure="${activeId}"
              data-grid-area-field="area"
              value="${escapeHtml(area)}"
              placeholder="Type area"
            >
            <span>${escapeHtml(unitLabel)}</span>
          </span>
        </label>
        <label class="reasoning-field">
          ${escapeHtml(card.reasoningPrompt)}
          <textarea
            maxlength="${TEXTAREA_MAX_LENGTH}"
            data-grid-area-input="${card.id}"
            data-grid-area-figure="${activeId}"
            data-grid-area-field="reasoning"
            placeholder="Explain your strategy."
          >${escapeHtml(reasoning)}</textarea>
        </label>
        <div class="practice-actions teach-question-actions">
          <button class="practice-submit" type="button" data-grid-area-submit="${card.id}" data-grid-area-figure="${activeId}">Submit Figure ${activeId}</button>
          <button class="hint-button" type="button" data-grid-area-hint="${card.id}" data-grid-area-figure="${activeId}">${isTeachQuestionHintVisible(card, activeId) ? "Hide hint" : "Show hint"}</button>
        </div>
        ${renderGridFigureAreaFeedback(card, figure)}
        ${renderGridFigureAreaHint(card, figure)}
      </section>
    </div>
  `;
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

function optionalFieldLabel(label, optional) {
  const text = String(label || "").trim();
  return optional && !/^optional\b/i.test(text) ? `Optional: ${text}` : text;
}

function customReasoningField(card, field, label, options = {}) {
  const value = getTeachCustomResponse(card)[field] || "";
  return `
    <label class="reasoning-field">
      ${escapeHtml(optionalFieldLabel(label, options.optional))}
      <textarea
        maxlength="${TEXTAREA_MAX_LENGTH}"
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
          maxlength="${TEXTAREA_MAX_LENGTH}"
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
      ${renderGuidedOptionalChallenge(card)}
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
  const response = getTeachCustomResponse(card);
  const workspaceReady = Object.entries(card.requiredWorkspaceState || {}).every(([field, expected]) => String(response[field] || "") === String(expected));
  return workspaceReady && card.guidedFields.every((field) => field.optional || guidedFieldAnswered(card, field));
}

function guidedReasoningIsStrong(card) {
  return (card.guidedReasoningRequirements || []).every((requirement) => {
    const value = normalizeAnswer(guidedFieldValue(card, requirement.field));
    return (requirement.concepts || []).some((concept) => concept.every((term) => value.includes(String(term).toLowerCase())));
  });
}

function isGuidedFieldsCorrect(card) {
  if (!hasGuidedFieldsResponse(card)) return false;
  if (card.guidedOpenEnded) return true;
  const answers = guidedAnswerMap(card);
  return guidedReasoningIsStrong(card) && Object.entries(answers).every(([fieldId, expected]) => {
    const field = card.guidedFields.find((entry) => entry.id === fieldId);
    return guidedFieldMatches(guidedFieldValue(card, fieldId), expected, field);
  });
}

function guidedOptionalChallengeIsCorrect(card) {
  const challenge = card.optionalChallenge;
  if (!challenge) return false;
  const value = normalizeAnswer(guidedFieldValue(card, challenge.field));
  const minimumLength = Number.isInteger(challenge.minLength) ? challenge.minLength : 1;
  return value.length >= minimumLength && (challenge.answerConcepts || []).some((concept) => (
    concept.every((term) => value.includes(String(term).toLowerCase()))
  ));
}

function renderGuidedOptionalChallenge(card) {
  const challenge = card.optionalChallenge;
  if (!challenge) return "";
  const submitted = isTeachQuestionSubmitted(card, challenge.id);
  const correct = submitted && guidedOptionalChallengeIsCorrect(card);
  const feedback = !submitted
    ? "Submit the optional challenge when you are ready for feedback."
    : correct
      ? challenge.correctFeedback
      : freeTextFeedbackWithCriteria(challenge.incorrectFeedback, {
        concepts: challenge.answerConcepts,
        minimumLength: Number.isInteger(challenge.minLength) ? challenge.minLength : 1,
        validationGuidance: challenge.validationGuidance,
      });
  return `
    <section class="guided-optional-challenge" aria-labelledby="${card.id}-${challenge.id}-prompt">
      <p class="teach-question-number">Optional challenge</p>
      <p class="teach-response-prompt" id="${card.id}-${challenge.id}-prompt">${escapeHtml(challenge.prompt)}</p>
      <label class="reasoning-field">
        ${escapeHtml(challenge.inputLabel || "Describe your construction.")}
        <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-teach-custom-input="${card.id}" data-teach-custom-field="${challenge.field}" placeholder="Explain your thinking.">${escapeHtml(guidedFieldValue(card, challenge.field))}</textarea>
      </label>
      <div class="practice-actions">
        <button class="practice-submit" type="button" data-guided-optional-submit="${card.id}">Submit optional challenge</button>
        <button class="hint-button" type="button" data-guided-optional-hint="${card.id}">${isTeachQuestionHintVisible(card, challenge.id) ? "Hide hint" : "Show hint"}</button>
      </div>
      <p class="practice-feedback teach-question-feedback ${submitted ? (correct ? "is-correct" : "is-incorrect") : ""}" data-guided-optional-feedback aria-live="polite">${escapeHtml(feedback)}</p>
      ${isTeachQuestionHintVisible(card, challenge.id) ? `<p class="practice-hints"><strong>Hint:</strong> ${escapeHtml(challenge.hint)}</p>` : ""}
    </section>
  `;
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
      <p class="tangram-response-prompt">Record the area of the small triangle, the medium triangle, and the large triangle in square units.</p>
      <div class="tangram-area-grid">
        ${customTextField(card, "smallTriangle", "Small triangle area", {
          inputmode: "decimal",
          placeholder: "Fraction or decimal",
        })}
        ${customTextField(card, "mediumTriangle", "Medium triangle area", {
          inputmode: "decimal",
          placeholder: "Fraction or decimal",
        })}
        ${customTextField(card, "largeTriangle", "Large triangle area", {
          inputmode: "decimal",
          placeholder: "Fraction or decimal",
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
      ${renderQuadrilateralExtension(card)}
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
      && normalizeAnswer(response.surfaceArea).length > 0;
  }
  if (card.builderMode === "compare8") {
    return normalizeAnswer(response.shapeA).length > 0
      && normalizeAnswer(response.shapeB).length > 0
      && normalizeAnswer(response.volumeA).length > 0
      && normalizeAnswer(response.surfaceAreaA).length > 0
      && normalizeAnswer(response.volumeB).length > 0
      && normalizeAnswer(response.surfaceAreaB).length > 0;
  }
  if (card.builderMode === "cube32") {
    return normalizeAnswer(response.edgeLength).length > 0
      && normalizeAnswer(response.cubesUsed).length > 0
      && normalizeAnswer(response.faceArea).length > 0
      && normalizeAnswer(response.cubeVolume).length > 0;
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
        ${customReasoningField(card, "prismReasoning", "Explain how your prism uses 12 cubes and how you found surface area.", { optional: true })}
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
        ${customReasoningField(card, "compareReasoning", "Explain what stays the same and what can change.", { optional: true })}
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
        ${customReasoningField(card, "cubeReasoning", "Explain why a larger cube cannot be built with 32 cubes.", { optional: true })}
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
  if (!correct && card.responseType === "triangleFit") return gridTriangleFitFeedback();
  if (correct) {
    const selectedChoice = state.teachSelections[card.id]?.[0];
    if (selectedChoice && card.choiceFeedback?.[selectedChoice]) {
      return `Response recorded. ${card.choiceFeedback[selectedChoice]} This task has no single correct pattern; a different choice can also work with a true distinguishing reason.`;
    }
    return variant?.correctFeedback || card.correctFeedback;
  }
  return variant?.incorrectFeedback || card.incorrectFeedback;
}

function teachReasoningEvaluation(card) {
  if (!card.reasoningRequired) return { answered: true, correct: true };
  const reasoning = normalizeAnswer(state.teachReasoning[card.id] || "");
  const minimumLength = Number.isInteger(card.reasoningMinLength) ? card.reasoningMinLength : 1;
  const concepts = card.reasoningConcepts || [];
  const conceptsCorrect = concepts.length === 0
    || concepts.some((group) => group.every((term) => reasoning.includes(String(term).toLowerCase())));
  return {
    answered: reasoning.length > 0,
    correct: reasoning.length >= minimumLength && conceptsCorrect,
  };
}

function teachReasoningMeetsRequirements(card) {
  return teachReasoningEvaluation(card).correct;
}

function hasStandardTeachPrimaryResponse(card) {
  if (!["open", "number", "singleChoice", "multiSelect"].includes(card.responseType)) return false;
  const value = getTeachValue(card);
  return Array.isArray(value) ? value.length > 0 : normalizeAnswer(value).length > 0;
}

function standardTeachAnswerIsCorrect(card) {
  const answer = getTeachValue(card);
  const answerKey = getTeachAnswerKey(card);
  if (card.responseType === "open") return normalizeAnswer(answer).length > 0;
  if (card.responseType === "number") {
    const givenNumber = parseMathNumber(answer);
    return answerKey.some((accepted) => {
      const acceptedNumber = parseMathNumber(accepted);
      if (givenNumber !== null && acceptedNumber !== null) return Math.abs(givenNumber - acceptedNumber) < 1e-9;
      return normalizeAnswer(answer) === normalizeAnswer(accepted);
    });
  }
  if (card.responseType === "singleChoice") {
    return card.acceptAnyChoice ? answerKey.includes(answer) : answer === answerKey[0];
  }
  if (card.responseType === "multiSelect") {
    const selected = [...answer].sort();
    const expected = [...answerKey].sort();
    return selected.length === expected.length && selected.every((value, index) => value === expected[index]);
  }
  return false;
}

function hasTeachResponse(card) {
  if (card.responseType === "tilingDesign") {
    return getEqualAreaTiling().pieces.length > 0;
  }
  if (card.responseType === "triangleFit") return gridTriangleFitWasChanged();
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
    return trianglePairTestedValues(response).length === trianglePairDefinitions.length
      && hasPairObservations
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
  const hasValue = Array.isArray(value) ? value.length > 0 : normalizeAnswer(value).length > 0;
  if (!hasValue) return false;
  return !card.reasoningRequired || normalizeAnswer(state.teachReasoning[card.id] || "").length > 0;
}

function isTeachSubmitted(card) {
  return Boolean(state.teachSubmitted[card.id]);
}

function isTeachCorrect(card) {
  if (!hasTeachResponse(card) || !hasRequiredTeachVariant(card)) return false;
  if (card.responseType === "tilingDesign") return equalAreaTilingIsCorrect();
  if (card.responseType === "triangleFit") return gridTriangleFitAnalysis().valid;
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
    return selectionsCorrect && workingSegmentsCorrect && quadrilateralObservationsAreStrong(card);
  }
  if (card.responseType === "trianglePairsCompose") {
    const response = getTeachCustomResponse(card);
    const observationsCorrect = trianglePairDefinitions.every((pair) => (
      trianglePairObservationValue(response, pair.id, "rectangle") === pair.rectangle
      && trianglePairObservationValue(response, pair.id, "parallelogram") === pair.parallelogram
    ));
    return trianglePairTestedValues(response).length === trianglePairDefinitions.length
      && observationsCorrect
      && response.rectangleConclusion === "some"
      && response.parallelogramConclusion === "all"
      && trianglePairReasoningIsStrong(response);
  }
  if (card.responseType === "parallelogramExplore") {
    return isParallelogramExploreCorrect(card);
  }
  if (card.responseType === "triangleHeightMarks") {
    const response = getTeachCustomResponse(card);
    return triangleHeightDiagrams.every((diagram) => triangleHeightIsCorrect(response, diagram))
      && triangleHeightReasoningIsStrong(card);
  }
  if (card.responseType === "prismBuild") {
    return isPrismBuildCorrect(card);
  }
  if (card.responseType === "guidedFields") {
    return isGuidedFieldsCorrect(card);
  }
  if (!teachReasoningMeetsRequirements(card)) return false;
  return standardTeachAnswerIsCorrect(card);
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
  if (card.responseType === "questionSet") {
    return renderQuestionSetControl(card);
  }
  if (card.responseType === "areaMeaning") {
    return renderAreaMeaningControl(card);
  }
  if (card.responseType === "gridFigureAreas") {
    return renderGridFigureAreaControl(card);
  }
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
  if (card.responseType === "tilingDesign") {
    const counts = equalAreaTilingCounts();
    return `
      ${renderTeachResponsePrompt(card)}
      <p class="tiling-design-summary">Current coverage: unit squares ${counts.squareArea} square units; dominoes ${counts.dominoArea} square units.</p>
    `;
  }
  if (card.responseType === "triangleFit") {
    const analysis = gridTriangleFitAnalysis();
    return `
      ${renderTeachResponsePrompt(card)}
      <p class="triangle-fit-response-summary">Current fit: ${analysis.insideIds.length} of 4 triangles are completely inside Figure D${analysis.overlap ? ", with an overlap to fix" : ""}.</p>
    `;
  }
  if (card.responseType === "open") {
    return `
      ${renderTeachResponsePrompt(card)}
      ${renderTeachVariantControl(card)}
      <label class="reasoning-field">
        ${escapeHtml(card.reasoningPrompt || "Show or explain your reasoning.")}
        <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-teach-input="${card.id}" placeholder="Explain your thinking.">${escapeHtml(state.teachResponses[card.id] || "")}</textarea>
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
      <textarea maxlength="${TEXTAREA_MAX_LENGTH}" data-teach-reasoning="${card.id}" placeholder="Explain your thinking.">${escapeHtml(state.teachReasoning[card.id] || "")}</textarea>
    </label>
  `;
}

function guidedReasoningValidationCriteria(card) {
  return {
    conceptRequirements: (card.guidedReasoningRequirements || []).map((requirement) => requirement.concepts),
    validationGuidance: card.guidedReasoningValidationGuidance,
  };
}

function customRequiredFreeTextCriteria(card) {
  const response = getTeachCustomResponse(card);
  let field = "";
  let passes = true;
  if (card.responseType === "quadrilateralDecompose") {
    field = "observations";
    passes = quadrilateralObservationsAreStrong(card);
  } else if (card.responseType === "trianglePairsCompose") {
    field = "trianglePairReasoning";
    passes = trianglePairReasoningIsStrong(response);
  } else if (card.responseType === "triangleHeightMarks") {
    field = "heightReasoning";
    passes = triangleHeightReasoningIsStrong(card);
  }
  if (!field || passes) return "";
  return freeTextValidationCriteria({
    validationGuidance: card.freeTextValidationGuidance?.[field],
  });
}

function renderTeachFeedback(card) {
  const submitted = isTeachSubmitted(card);
  const answered = hasTeachResponse(card);
  const hasVariant = hasRequiredTeachVariant(card);
  const correct = submitted && answered && isTeachCorrect(card);
  const standardPrimaryAnswered = hasStandardTeachPrimaryResponse(card);
  const standardPrimaryCorrect = standardPrimaryAnswered && standardTeachAnswerIsCorrect(card);
  const reasoning = teachReasoningEvaluation(card);
  const genericReasoningCriteria = card.reasoningRequired && !reasoning.correct
    ? freeTextValidationCriteria({
      concepts: card.reasoningConcepts,
      conceptsRequired: card.reasoningConceptsRequired,
      minimumLength: Number.isInteger(card.reasoningMinLength) ? card.reasoningMinLength : 1,
      validationGuidance: card.reasoningValidationGuidance,
    })
    : "";
  const guidedCriteria = card.responseType === "guidedFields" && !guidedReasoningIsStrong(card)
    ? freeTextValidationCriteria(guidedReasoningValidationCriteria(card))
    : "";
  const customCriteria = customRequiredFreeTextCriteria(card);
  const failedFreeTextCriteria = genericReasoningCriteria || guidedCriteria || customCriteria;
  const responseMissing = card.reasoningRequired && standardPrimaryAnswered ? false : !answered;
  const feedbackClass = submitted
    ? correct
      ? card.acceptAnyChoice ? "is-recorded" : "is-correct"
      : "is-incorrect"
    : "";
  const missingResponseText = card.responseType === "trianglePairsCompose"
    ? "Test and record each pair, choose both all/some/none conclusions, and explain one example before submitting again."
    : card.responseType === "tilingDesign"
      ? "Place squares and dominoes on the grid before submitting the optional challenge."
    : card.responseType === "triangleFit"
      ? "Move the triangles from their starting positions into Figure D before submitting."
    : card.responseType === "quadrilateralDecompose"
      ? "Draw decomposition segments for the quadrilaterals that work, choose the working labels, and explain what they have in common."
      : card.responseType === "parallelogramExplore"
        ? "Adjust the parallelogram, use Show Area to check, enter the area, and explain your reasoning."
        : card.responseType === "triangleHeightMarks"
          ? "Draw one height segment for each diagram, explain what makes the segments heights, then submit again."
          : card.responseType === "prismBuild"
            ? "Complete the build choices and measurements, then submit again."
            : card.responseType === "guidedFields"
              ? card.missingResponseFeedback || "Complete the required fields, then submit again."
              : "Choose or enter an answer first, then submit again.";
  const baseFeedbackText = !submitted
    ? card.variants?.length && !hasVariant
      ? "Choose a pattern, answer, and submit when you are ready for feedback."
      : "Submit when you are ready for feedback."
    : !hasVariant
      ? "Choose Pattern A or Pattern B first, then submit again."
    : card.reasoningRequired && standardPrimaryCorrect && !reasoning.correct
      ? freeTextFeedbackWithCriteria(
        reasoning.answered
          ? card.reasoningRevisionFeedback
            || getTeachFeedbackText(card, false)
            || "Your answer is correct, but the explanation did not pass the app check. Revise it and submit again."
          : card.reasoningRequiredFeedback || "Your answer is correct. Add the required explanation, then submit again.",
        {
          concepts: card.reasoningConcepts,
          conceptsRequired: card.reasoningConceptsRequired,
          minimumLength: Number.isInteger(card.reasoningMinLength) ? card.reasoningMinLength : 1,
          validationGuidance: card.reasoningValidationGuidance,
        }
      )
    : responseMissing
      ? [missingResponseText, failedFreeTextCriteria].filter(Boolean).join(" ")
      : correct
        ? getTeachFeedbackText(card, true)
        : [getTeachFeedbackText(card, false), failedFreeTextCriteria].filter(Boolean).join(" ");
  const feedbackText = submitted
    ? appendFeedbackCriteria(baseFeedbackText, failedFreeTextCriteria)
    : baseFeedbackText;
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

function updateBaseHeightChallengeDom(card, question) {
  const stage = document.querySelector(`[data-base-height-stage="${card.id}"][data-question-id="${question.id}"]`);
  if (!stage) return;
  const geometry = baseHeightChallengeGeometry(card, question);
  const { shape } = geometry;
  const setLine = (selector, start, end) => {
    const line = stage.querySelector(selector);
    if (!line) return;
    line.setAttribute("x1", start.x.toFixed(1));
    line.setAttribute("y1", start.y.toFixed(1));
    line.setAttribute("x2", end.x.toFixed(1));
    line.setAttribute("y2", end.y.toFixed(1));
  };
  stage.querySelector("[data-base-height-shape]")?.setAttribute("points", svgPointList(geometry.points));
  setLine('[data-base-height-support="base"]', geometry.supportStart, geometry.supportEnd);
  setLine('[data-base-height-support="opposite"]', geometry.oppositeStart, geometry.oppositeEnd);
  setLine("[data-base-height-line]", geometry.heightBottom, geometry.heightTop);
  stage.querySelector("[data-base-height-right-angle]")?.setAttribute("points", svgPointList(geometry.rightAngle));
  const baseLabel = stage.querySelector('[data-base-height-label="base"]');
  if (baseLabel) {
    baseLabel.setAttribute("x", geometry.baseLabel.x.toFixed(1));
    baseLabel.setAttribute("y", geometry.baseLabel.y.toFixed(1));
    baseLabel.textContent = `b = ${shape.base}`;
  }
  const heightLabel = stage.querySelector('[data-base-height-label="height"]');
  if (heightLabel) {
    heightLabel.setAttribute("x", geometry.heightLabel.x.toFixed(1));
    heightLabel.setAttribute("y", geometry.heightLabel.y.toFixed(1));
    heightLabel.textContent = `h = ${shape.height}`;
  }
  const handlePoints = {
    base: geometry.points[1],
    shape: geometry.points[3],
    "height-position": geometry.heightBottom,
  };
  Object.entries(handlePoints).forEach(([handleId, point]) => {
    const handle = stage.querySelector(`[data-base-height-handle="${handleId}"]`);
    if (!handle) return;
    handle.querySelectorAll("circle").forEach((circle) => {
      circle.setAttribute("cx", point.x.toFixed(1));
      circle.setAttribute("cy", point.y.toFixed(1));
    });
    const ariaValue = handleId === "base"
      ? shape.base
      : handleId === "shape"
        ? shape.height
        : Math.round(shape.heightPosition * 100);
    handle.setAttribute("aria-valuenow", String(ariaValue));
  });
  const workspace = stage.closest(".base-height-challenge-workspace");
  const controlValues = {
    base: shape.base,
    height: shape.height,
    slant: shape.slant,
    heightPosition: Math.round(shape.heightPosition * 100),
  };
  Object.entries(controlValues).forEach(([field, value]) => {
    const input = workspace?.querySelector(`[data-base-height-field="${field}"]`);
    if (input) input.value = String(value);
    const output = workspace?.querySelector(`[data-base-height-output="${field}"]`);
    if (output) output.textContent = String(value);
  });
  const rotationOutput = workspace?.querySelector(".base-height-rotation-output");
  if (rotationOutput) rotationOutput.textContent = `Orientation ${shape.rotation} degrees`;
}

function startBaseHeightChallengePointer(event) {
  const handle = event.target.closest("[data-base-height-handle]");
  if (!handle) return false;
  const stage = handle.closest("[data-base-height-stage]");
  const card = teachCardById(handle.dataset.cardId);
  const question = card ? questionSetDefinition(card, handle.dataset.questionId) : null;
  if (!stage || !card || question?.dynamicAnswer !== "baseHeightChallenge") return false;
  baseHeightChallengePointer = {
    pointerId: event.pointerId ?? "mouse",
    cardId: card.id,
    questionId: question.id,
    handleId: handle.dataset.baseHeightHandle,
    startPointer: tangramSvgPoint(stage, event),
    startShape: baseHeightChallengeShape(card, question),
  };
  if (event.pointerId !== undefined) handle.setPointerCapture?.(event.pointerId);
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateBaseHeightChallengePointer(event) {
  if (!baseHeightChallengePointer || (event.pointerId ?? "mouse") !== baseHeightChallengePointer.pointerId) return false;
  const card = teachCardById(baseHeightChallengePointer.cardId);
  const question = card ? questionSetDefinition(card, baseHeightChallengePointer.questionId) : null;
  const stage = document.querySelector(`[data-base-height-stage="${baseHeightChallengePointer.cardId}"][data-question-id="${baseHeightChallengePointer.questionId}"]`);
  if (!card || !question || !stage) return false;
  const pointer = tangramSvgPoint(stage, event);
  const dx = pointer.x - baseHeightChallengePointer.startPointer.x;
  const dy = pointer.y - baseHeightChallengePointer.startPointer.y;
  const radians = baseHeightChallengePointer.startShape.rotation * Math.PI / 180;
  const localDx = dx * Math.cos(radians) + dy * Math.sin(radians);
  const localDy = -dx * Math.sin(radians) + dy * Math.cos(radians);
  const startShape = baseHeightChallengePointer.startShape;
  const updates = {};
  if (baseHeightChallengePointer.handleId === "base") {
    updates.base = clampNumber(Math.round(startShape.base + localDx / baseHeightChallengeStage.cell), 3, 8);
  } else if (baseHeightChallengePointer.handleId === "shape") {
    updates.slant = clampNumber(Math.round(startShape.slant + localDx / baseHeightChallengeStage.cell), -3, 3);
    updates.height = clampNumber(Math.round(startShape.height - localDy / baseHeightChallengeStage.cell), 2, 7);
  } else if (baseHeightChallengePointer.handleId === "height-position") {
    updates.heightPosition = clampNumber(
      Math.round((startShape.heightPosition + localDx / (startShape.base * baseHeightChallengeStage.cell)) * 10) / 10,
      0.1,
      0.9,
    );
  }
  setBaseHeightChallengeValues(card, question, updates);
  updateBaseHeightChallengeDom(card, question);
  event.preventDefault();
  return true;
}

function endBaseHeightChallengePointer(event) {
  if (!baseHeightChallengePointer || (event.pointerId ?? "mouse") !== baseHeightChallengePointer.pointerId) return false;
  baseHeightChallengePointer = null;
  renderTeachMe();
  return true;
}

function updateActiveButtons(selector, value, attribute) {
  document.querySelectorAll(selector).forEach((button) => {
    const active = button.dataset[attribute] === value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function setTeachCustomResponseField(card, field, value) {
  if (!card || !field) return false;
  const id = card.id;
  const isOptionalChallengeField = card?.optionalChallenge?.field === field;
  state.teachCustomResponses[id] = {
    ...(state.teachCustomResponses[id] || {}),
    [field]: value,
  };
  if (!isOptionalChallengeField) state.teachSubmitted[id] = false;
  if (isOptionalChallengeField) {
    state.teachQuestionSubmitted[teachQuestionStateKey(id, card.optionalChallenge.id)] = false;
  }
  (card?.questions || []).forEach((question) => {
    if (Object.prototype.hasOwnProperty.call(question.requiredCustomState || {}, field)) {
      state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = false;
    }
  });
  state.sourceModalItemId = null;
  return true;
}

function updateTeachCustomResponse(input) {
  const id = input.dataset.teachCustomInput;
  const field = input.dataset.teachCustomField;
  if (!id || !field) return false;
  const card = teachCardById(id);
  const value = input.type === "checkbox" ? (input.checked ? "yes" : "") : enforceTextareaValueLimit(input);
  return setTeachCustomResponseField(card, field, value);
}

function tangramSvgPoint(svgNode, event) {
  const point = svgNode.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const matrix = svgNode.getScreenCTM();
  if (!matrix) return { x: 0, y: 0 };
  return point.matrixTransform(matrix.inverse());
}

function updateTilingPieceDom(pieceId) {
  document.querySelectorAll(`[data-tiling-piece="${pieceId}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", tilingPieceTransform(pieceId));
  });
}

function updateTilingPieceSelectionDom() {
  document.querySelectorAll("[data-tiling-piece]").forEach((pieceNode) => {
    const selected = pieceNode.dataset.tilingPiece === state.teachTilingSelectedPiece;
    pieceNode.querySelector(".tiling-comparison-piece")?.classList.toggle("is-selected", selected);
  });
}

function startTilingPiecePointer(event) {
  const pieceNode = event.target.closest("[data-tiling-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-tiling-piece-stage]");
  if (!svgNode) return false;
  const pieceId = pieceNode.dataset.tilingPiece;
  const piece = getTilingPieces()[pieceId];
  if (!piece) return false;
  state.teachTilingSelectedPiece = pieceId;
  tilingPiecePointer = {
    pointerId: event.pointerId ?? "mouse",
    pieceId,
    startPointer: tangramSvgPoint(svgNode, event),
    startPiece: { ...piece },
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updateTilingPieceSelectionDom();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateTilingPiecePointer(event) {
  if (!tilingPiecePointer || (event.pointerId ?? "mouse") !== tilingPiecePointer.pointerId) return false;
  const svgNode = document.querySelector("[data-tiling-piece-stage]");
  if (!svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - tilingPiecePointer.startPointer.x;
  const dy = pointer.y - tilingPiecePointer.startPointer.y;
  const piece = getTilingPieces()[tilingPiecePointer.pieceId];
  if (!piece) return false;
  piece.x = clampNumber(tilingPiecePointer.startPiece.x + dx, 48, tilingPieceStage.width - 48);
  piece.y = clampNumber(tilingPiecePointer.startPiece.y + dy, 48, tilingPieceStage.height - 62);
  updateTilingPieceDom(tilingPiecePointer.pieceId);
  event.preventDefault();
  return true;
}

function endTilingPiecePointer(event) {
  if (!tilingPiecePointer || (event.pointerId ?? "mouse") !== tilingPiecePointer.pointerId) return false;
  tilingPiecePointer = null;
  return true;
}

function placeEqualAreaTilingPiece(column, row) {
  const model = getEqualAreaTiling();
  const tool = state.teachEqualAreaTilingTool;
  if (tool === "erase") {
    const existing = equalAreaTilingPieceAt(column, row);
    if (!existing) {
      model.message = "That cell is already empty.";
      return;
    }
    model.pieces = model.pieces.filter((piece) => piece.id !== existing.id);
    model.message = `Removed one ${existing.type}.`;
  } else {
    const cells = tool === "square"
      ? [{ column, row }]
      : state.teachEqualAreaTilingOrientation === "vertical"
        ? [{ column, row }, { column, row: row + 1 }]
        : [{ column, row }, { column: column + 1, row }];
    const outside = cells.some((cell) => cell.column < 0 || cell.column >= equalAreaTilingBoard.columns || cell.row < 0 || cell.row >= equalAreaTilingBoard.rows);
    if (outside) {
      model.message = "That piece would extend beyond the grid. Choose another starting cell or turn the domino.";
      return;
    }
    if (cells.some((cell) => equalAreaTilingPieceAt(cell.column, cell.row))) {
      model.message = "That placement would overlap another piece. Choose empty cells.";
      return;
    }
    model.pieces.push({ id: `tiling-${model.nextId}`, type: tool, cells });
    model.nextId += 1;
    model.message = `Placed one ${tool}.`;
  }
  state.teachSubmitted["teach-l1-extension"] = false;
}

function updateTangramPieceDom(card, pieceId, questionId = "") {
  document.querySelectorAll(`[data-tangram-piece="${pieceId}"]`).forEach((pieceNode) => {
    if (pieceNode.closest("[data-teach-card]")?.dataset.teachCard !== card?.id) return;
    pieceNode.setAttribute("transform", tangramPieceTransform(card, pieceId, questionId));
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
  const card = teachCardById(pieceNode.closest("[data-teach-card]")?.dataset.teachCard);
  if (!svgNode || !card) return false;
  const questionId = svgNode.dataset.tangramQuestion || tangramWorkspaceQuestionId(card);
  const pieceId = pieceNode.dataset.tangramPiece;
  const pieces = getTangramPieces(card, questionId);
  const piece = pieces[pieceId];
  if (!piece) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  state.teachTangramSelectedPiece = pieceId;
  tangramPointer = {
    pointerId: event.pointerId ?? "mouse",
    cardId: card.id,
    questionId,
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
  const card = teachCardById(tangramPointer.cardId);
  if (!svgNode || !card) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - tangramPointer.startPointer.x;
  const dy = pointer.y - tangramPointer.startPointer.y;
  const pieces = getTangramPieces(card, tangramPointer.questionId);
  const piece = pieces[tangramPointer.pieceId];
  if (!piece) return false;
  piece.x = clampNumber(tangramPointer.startPiece.x + dx, -30, tangramStage.width - 28);
  piece.y = clampNumber(tangramPointer.startPiece.y + dy, -30, tangramStage.height - 28);
  if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) markTangramWorkspaceChanged(card, tangramPointer.questionId);
  updateTangramPieceDom(card, tangramPointer.pieceId, tangramPointer.questionId);
  event.preventDefault();
  return true;
}

function endTangramPointer(event) {
  if (!tangramPointer || (event.pointerId ?? "mouse") !== tangramPointer.pointerId) return false;
  tangramPointer = null;
  return true;
}

function rotateSelectedTangramPiece(card, delta) {
  const pieceId = state.teachTangramSelectedPiece;
  const questionId = tangramWorkspaceQuestionId(card);
  const pieces = getTangramPieces(card, questionId);
  const piece = pieces[pieceId];
  if (!piece) return;
  piece.angle = ((piece.angle + delta) % 360 + 360) % 360;
  if (delta) markTangramWorkspaceChanged(card, questionId);
}

function updateGridTrianglePieceDom(pieceId) {
  document.querySelectorAll(`[data-grid-triangle-piece="${pieceId}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", gridTriangleFitTransform(pieceId));
  });
}

function updateGridTriangleSelectionDom() {
  document.querySelectorAll("[data-grid-triangle-piece]").forEach((pieceNode) => {
    pieceNode.classList.toggle("is-selected", pieceNode.dataset.gridTrianglePiece === state.teachGridTriangleSelectedPiece);
  });
  document.querySelectorAll("[data-grid-triangle-select]").forEach((button) => {
    const selected = button.dataset.gridTriangleSelect === state.teachGridTriangleSelectedPiece;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function startGridTrianglePointer(event) {
  const pieceNode = event.target.closest("[data-grid-triangle-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-grid-triangle-stage]");
  if (!svgNode) return false;
  const pieceId = pieceNode.dataset.gridTrianglePiece;
  const piece = getGridTriangleFitPieces()[pieceId];
  if (!piece) return false;
  state.teachGridTriangleSelectedPiece = pieceId;
  gridTrianglePointer = {
    pointerId: event.pointerId ?? "mouse",
    pieceId,
    startPointer: tangramSvgPoint(svgNode, event),
    startPiece: { ...piece },
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updateGridTriangleSelectionDom();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateGridTrianglePointer(event) {
  if (!gridTrianglePointer || (event.pointerId ?? "mouse") !== gridTrianglePointer.pointerId) return false;
  const svgNode = document.querySelector("[data-grid-triangle-stage]");
  if (!svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const piece = getGridTriangleFitPieces()[gridTrianglePointer.pieceId];
  if (!piece) return false;
  const dx = pointer.x - gridTrianglePointer.startPointer.x;
  const dy = pointer.y - gridTrianglePointer.startPointer.y;
  piece.x = clampNumber(gridTrianglePointer.startPiece.x + dx, -100, gridTriangleFitStage.width - 25);
  piece.y = clampNumber(gridTrianglePointer.startPiece.y + dy, -100, gridTriangleFitStage.height - 25);
  if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) markGridTriangleFitChanged();
  updateGridTrianglePieceDom(gridTrianglePointer.pieceId);
  event.preventDefault();
  return true;
}

function endGridTrianglePointer(event) {
  if (!gridTrianglePointer || (event.pointerId ?? "mouse") !== gridTrianglePointer.pointerId) return false;
  gridTrianglePointer = null;
  return true;
}

function rotateSelectedGridTriangle(delta) {
  const piece = getGridTriangleFitPieces()[state.teachGridTriangleSelectedPiece];
  if (!piece) return;
  piece.angle = ((piece.angle + delta) % 360 + 360) % 360;
  if (delta) markGridTriangleFitChanged();
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
  if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) markTrianglePairTested(trianglePairPointer.pairId);
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
  if (delta) markTrianglePairTested(pairId);
}

function updateDecomposePieceDom(variantId, pieceId) {
  document.querySelectorAll(`[data-decompose-variant="${variantId}"][data-decompose-piece="${pieceId}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", decomposePieceTransform(variantId, pieceId));
  });
}

function updateDecomposeSelectionDom() {
  document.querySelectorAll("[data-decompose-piece]").forEach((pieceNode) => {
    const selected = pieceNode.dataset.decomposePiece === state.teachDecomposeSelectedPiece;
    pieceNode.querySelector(".decompose-piece")?.classList.toggle("is-selected", selected);
  });
  document.querySelectorAll("[data-decompose-select]").forEach((button) => {
    const selected = button.dataset.decomposeSelect === state.teachDecomposeSelectedPiece;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function startDecomposePointer(event) {
  const pieceNode = event.target.closest("[data-decompose-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-decompose-stage]");
  const card = teachCardById(pieceNode.closest("[data-teach-card]")?.dataset.teachCard);
  if (!svgNode || !card || card.customVisual !== "decomposeParallelogram") return false;
  const variantId = pieceNode.dataset.decomposeVariant;
  const pieceId = pieceNode.dataset.decomposePiece;
  const piece = getDecomposePieces(variantId)[pieceId];
  if (!piece) return false;
  state.teachDecomposeSelectedPiece = pieceId;
  decomposePointer = {
    pointerId: event.pointerId ?? "mouse",
    cardId: card.id,
    variantId,
    pieceId,
    startPointer: tangramSvgPoint(svgNode, event),
    startPiece: { ...piece },
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updateDecomposeSelectionDom();
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updateDecomposePointer(event) {
  if (!decomposePointer || (event.pointerId ?? "mouse") !== decomposePointer.pointerId) return false;
  const svgNode = document.querySelector("[data-decompose-stage]");
  if (!svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - decomposePointer.startPointer.x;
  const dy = pointer.y - decomposePointer.startPointer.y;
  const piece = getDecomposePieces(decomposePointer.variantId)[decomposePointer.pieceId];
  piece.x = clampNumber(decomposePointer.startPiece.x + dx, -80, decomposeStage.width - 30);
  piece.y = clampNumber(decomposePointer.startPiece.y + dy, -80, decomposeStage.height - 30);
  if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) {
    markDecomposePieceUsed(teachCardById(decomposePointer.cardId), decomposePointer.pieceId);
  }
  updateDecomposePieceDom(decomposePointer.variantId, decomposePointer.pieceId);
  event.preventDefault();
  return true;
}

function endDecomposePointer(event) {
  if (!decomposePointer || (event.pointerId ?? "mouse") !== decomposePointer.pointerId) return false;
  decomposePointer = null;
  return true;
}

function rotateSelectedDecomposePiece(card, delta) {
  const variantId = decomposeVariant(card);
  const pieceId = state.teachDecomposeSelectedPiece || "small";
  const piece = getDecomposePieces(variantId)[pieceId];
  if (!piece) return;
  piece.angle = ((piece.angle + delta) % 360 + 360) % 360;
  if (delta) markDecomposePieceUsed(card, pieceId);
}

function updatePyramidNetPieceDom(piece) {
  document.querySelectorAll(`[data-pyramid-net-piece="${piece.id}"]`).forEach((pieceNode) => {
    pieceNode.setAttribute("transform", pyramidNetPieceTransform(piece));
  });
}

function updatePyramidNetSelectionDom(card, target = pyramidNetTargetId(card)) {
  const selectedId = pyramidNetSelectedPieceId(card, target);
  document.querySelectorAll("[data-pyramid-net-piece]").forEach((pieceNode) => {
    const selected = pieceNode.dataset.pyramidNetPiece === selectedId;
    pieceNode.classList.toggle("is-selected", selected);
    pieceNode.setAttribute("aria-pressed", String(selected));
  });
}

function startPyramidNetPointer(event) {
  const pieceNode = event.target.closest("[data-pyramid-net-piece]");
  if (!pieceNode) return false;
  const svgNode = pieceNode.closest("[data-pyramid-net-stage]");
  const card = teachCardById(pieceNode.closest("[data-teach-card]")?.dataset.teachCard);
  if (!svgNode || !card || card.id !== "teach-l13-2") return false;
  const target = svgNode.dataset.pyramidNetStage;
  if (!pyramidNetTargetIds.includes(target) || target !== pyramidNetTargetId(card)) return false;
  const pieceId = pieceNode.dataset.pyramidNetPiece;
  const pieces = pyramidNetPieces(card, target);
  const piece = pieces.find((entry) => entry.id === pieceId);
  if (!piece) return false;
  setPyramidNetWorkspace(card, target, { pieces, selectedId: pieceId });
  pyramidNetPointer = {
    pointerId: event.pointerId ?? "mouse",
    cardId: card.id,
    target,
    pieceId,
    startPointer: tangramSvgPoint(svgNode, event),
    startPiece: { ...piece },
    moved: false,
  };
  if (event.pointerId !== undefined) pieceNode.setPointerCapture?.(event.pointerId);
  updatePyramidNetSelectionDom(card, target);
  event.preventDefault();
  event.stopPropagation();
  return true;
}

function updatePyramidNetPointer(event) {
  if (!pyramidNetPointer || (event.pointerId ?? "mouse") !== pyramidNetPointer.pointerId) return false;
  const card = teachCardById(pyramidNetPointer.cardId);
  const svgNode = document.querySelector(`[data-pyramid-net-stage="${pyramidNetPointer.target}"]`);
  if (!card || !svgNode) return false;
  const pointer = tangramSvgPoint(svgNode, event);
  const dx = pointer.x - pyramidNetPointer.startPointer.x;
  const dy = pointer.y - pyramidNetPointer.startPointer.y;
  const piece = pyramidNetPieces(card, pyramidNetPointer.target).find((entry) => entry.id === pyramidNetPointer.pieceId);
  if (!piece) return false;
  piece.x = clampNumber(pyramidNetPointer.startPiece.x + dx, pyramidNetPieceMargin, pyramidNetBoard.width - pyramidNetPieceMargin);
  piece.y = clampNumber(pyramidNetPointer.startPiece.y + dy, pyramidNetPieceMargin, pyramidNetBoard.height - pyramidNetPieceMargin);
  if (Math.abs(dx) >= 2 || Math.abs(dy) >= 2) pyramidNetPointer.moved = true;
  updatePyramidNetPieceDom(piece);
  event.preventDefault();
  return true;
}

function endPyramidNetPointer(event) {
  if (!pyramidNetPointer || (event.pointerId ?? "mouse") !== pyramidNetPointer.pointerId) return false;
  const card = teachCardById(pyramidNetPointer.cardId);
  const target = pyramidNetPointer.target;
  const pieceId = pyramidNetPointer.pieceId;
  const moved = pyramidNetPointer.moved;
  pyramidNetPointer = null;
  if (!card) return true;
  if (moved) {
    snapPyramidNetPiece(card, pieceId, target);
    markPyramidNetChanged(card, target);
  }
  renderTeachMe();
  return true;
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
    if (startBaseHeightChallengePointer(event)) return;
    if (startPyramidNetPointer(event)) return;
    if (startTangramPointer(event)) return;
    if (startGridTrianglePointer(event)) return;
    if (startTilingPiecePointer(event)) return;
    if (startTrianglePairPointer(event)) return;
    if (startDecomposePointer(event)) return;
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
    if (updateBaseHeightChallengePointer(event)) return;
    if (updatePyramidNetPointer(event)) return;
    if (updateTangramPointer(event)) return;
    if (updateGridTrianglePointer(event)) return;
    if (updateTilingPiecePointer(event)) return;
    if (updateTrianglePairPointer(event)) return;
    if (updateDecomposePointer(event)) return;
    updateSourceModalPointer(event);
  });
  document.addEventListener("pointerup", (event) => {
    if (endBaseHeightChallengePointer(event)) return;
    if (endPyramidNetPointer(event)) return;
    if (endTangramPointer(event)) return;
    if (endGridTrianglePointer(event)) return;
    if (endTilingPiecePointer(event)) return;
    if (endTrianglePairPointer(event)) return;
    if (endDecomposePointer(event)) return;
    endSourceModalPointer(event);
  });
  document.addEventListener("pointercancel", (event) => {
    if (endBaseHeightChallengePointer(event)) return;
    if (endPyramidNetPointer(event)) return;
    if (endTangramPointer(event)) return;
    if (endGridTrianglePointer(event)) return;
    if (endTilingPiecePointer(event)) return;
    if (endTrianglePairPointer(event)) return;
    if (endDecomposePointer(event)) return;
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
    const cutStageButton = event.target.closest("[data-cut-stage-card]");
    if (cutStageButton) {
      const card = teachCardById(cutStageButton.dataset.cutStageCard);
      const strategy = cutStageButton.dataset.cutStageStrategy;
      const value = Number(cutStageButton.dataset.cutStageValue);
      if (!card || !Object.prototype.hasOwnProperty.call(cutStrategyStages, strategy) || !Number.isInteger(value) || value < 0 || value > 2) return;
      setTeachCustomResponseField(card, `${strategy}Stage`, String(value));
      renderTeachMe();
      return;
    }
    const tilingRotateButton = event.target.closest("[data-tiling-piece-rotate]");
    if (tilingRotateButton) {
      const piece = getTilingPieces()[state.teachTilingSelectedPiece];
      if (!piece) return;
      piece.angle = ((piece.angle + (Number(tilingRotateButton.dataset.tilingPieceRotate) || 0)) % 360 + 360) % 360;
      renderTeachMe();
      return;
    }
    if (event.target.closest("[data-tiling-piece-hide]")) {
      const piece = getTilingPieces()[state.teachTilingSelectedPiece];
      if (!piece) return;
      piece.hidden = true;
      const visibleId = Object.keys(getTilingPieces()).find((pieceId) => !getTilingPieces()[pieceId].hidden);
      if (visibleId) state.teachTilingSelectedPiece = visibleId;
      renderTeachMe();
      return;
    }
    if (event.target.closest("[data-tiling-piece-show]")) {
      Object.values(getTilingPieces()).forEach((piece) => { piece.hidden = false; });
      renderTeachMe();
      return;
    }
    if (event.target.closest("[data-tiling-piece-reset]")) {
      state.teachTilingPieces = initialTilingPieces();
      state.teachTilingSelectedPiece = "triangle-1";
      renderTeachMe();
      return;
    }
    const equalTilingToolButton = event.target.closest("[data-equal-tiling-tool]");
    if (equalTilingToolButton) {
      const tool = equalTilingToolButton.dataset.equalTilingTool;
      if (!["square", "domino", "erase"].includes(tool)) return;
      state.teachEqualAreaTilingTool = tool;
      renderTeachMe();
      return;
    }
    const equalTilingOrientationButton = event.target.closest("[data-equal-tiling-orientation]");
    if (equalTilingOrientationButton) {
      const orientation = equalTilingOrientationButton.dataset.equalTilingOrientation;
      if (!["horizontal", "vertical"].includes(orientation)) return;
      if (state.teachEqualAreaTilingTool !== "domino") return;
      state.teachEqualAreaTilingOrientation = orientation;
      renderTeachMe();
      return;
    }
    if (event.target.closest("[data-equal-tiling-reset]")) {
      state.teachEqualAreaTiling = null;
      state.teachSubmitted["teach-l1-extension"] = false;
      renderTeachMe();
      return;
    }
    const equalTilingCell = event.target.closest("[data-equal-tiling-cell]");
    if (equalTilingCell) {
      placeEqualAreaTilingPiece(Number(equalTilingCell.dataset.column), Number(equalTilingCell.dataset.row));
      renderTeachMe();
      return;
    }
    const teachLessonLink = event.target.closest("[data-teach-lesson-link]");
    if (teachLessonLink) {
      event.preventDefault();
      const lessonNumber = Number(teachLessonLink.dataset.teachLessonLink);
      if (!teachLessonGroups().some((group) => group.lessonNumber === lessonNumber)) return;
      state.view = "unit1";
      state.mode = "teach";
      state.teachActiveLesson = lessonNumber;
      state.sourceModalItemId = null;
      renderView();
      window.history.replaceState(null, "", `#${teachLessonDomId(lessonNumber)}`);
      scrollToTeachLesson(lessonNumber);
      return;
    }
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
    const pyramidNetTargetButton = event.target.closest("[data-pyramid-net-target]");
    if (pyramidNetTargetButton) {
      const card = teachCardById(pyramidNetTargetButton.closest("[data-teach-card]")?.dataset.teachCard);
      const target = pyramidNetTargetButton.dataset.pyramidNetTarget;
      if (!card || !pyramidNetTargetIds.includes(target)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        pyramidNetTarget: target,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "compose-q")] = pyramidNetAnySaved(card);
      renderTeachMe();
      return;
    }
    const pyramidPieceAdd = event.target.closest("[data-pyramid-piece-add]");
    if (pyramidPieceAdd) {
      const card = teachCardById(pyramidPieceAdd.closest("[data-teach-card]")?.dataset.teachCard);
      const type = pyramidPieceAdd.dataset.pyramidPieceAdd;
      if (!card || !pyramidNetPieceTypes.includes(type)) return;
      addPyramidNetPiece(card, type);
      renderTeachMe();
      return;
    }
    const pyramidNetRotate = event.target.closest("[data-pyramid-net-rotate]");
    if (pyramidNetRotate) {
      const card = teachCardById(pyramidNetRotate.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const target = pyramidNetTargetId(card);
      const delta = Number(pyramidNetRotate.dataset.pyramidNetRotate);
      if (!rotateSelectedPyramidNetPiece(card, delta, target)) return;
      renderTeachMe();
      return;
    }
    const pyramidNetRemove = event.target.closest("[data-pyramid-net-remove]");
    if (pyramidNetRemove) {
      const card = teachCardById(pyramidNetRemove.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const target = pyramidNetTargetId(card);
      const selectedId = pyramidNetSelectedPieceId(card, target);
      setPyramidNetWorkspace(card, target, {
        pieces: pyramidNetPieces(card, target).filter((piece) => piece.id !== selectedId),
        selectedId: "",
        submitted: false,
      });
      markPyramidNetChanged(card, target);
      renderTeachMe();
      return;
    }
    const pyramidNetReset = event.target.closest("[data-pyramid-net-reset]");
    if (pyramidNetReset) {
      const card = teachCardById(pyramidNetReset.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const target = pyramidNetTargetId(card);
      setPyramidNetWorkspace(card, target, { pieces: [], selectedId: "", submitted: false });
      markPyramidNetChanged(card, target);
      renderTeachMe();
      return;
    }
    const prismNetFaceTypeButton = event.target.closest("[data-prism-net-face-type]");
    if (prismNetFaceTypeButton) {
      const card = teachCardById(prismNetFaceTypeButton.closest("[data-teach-card]")?.dataset.teachCard);
      const faceType = prismNetFaceTypeButton.dataset.prismNetFaceType;
      if (!card || !rectangularPrismNetFaceTypes.includes(faceType)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        prismNetFaceType: faceType,
      };
      renderTeachMe();
      return;
    }
    const prismNetRotate = event.target.closest("[data-prism-net-rotate]");
    if (prismNetRotate) {
      const card = teachCardById(prismNetRotate.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        prismNetFaceRotated: getTeachCustomResponse(card).prismNetFaceRotated === "true" ? "false" : "true",
      };
      renderTeachMe();
      return;
    }
    const prismNetFace = event.target.closest("[data-prism-net-face]");
    if (prismNetFace) {
      const card = teachCardById(prismNetFace.closest("[data-teach-card]")?.dataset.teachCard);
      const faceId = Number(prismNetFace.dataset.prismNetFace);
      if (!card || !rectangularPrismNetFaces(card).some((face) => face.id === faceId)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        prismNetSelectedFaceId: String(faceId),
        prismNetMessage: `Face ${faceId} selected. Choose a face tool and an attachment side.`,
      };
      renderTeachMe();
      return;
    }
    const prismNetPlaceFirst = event.target.closest("[data-prism-net-place-first]");
    if (prismNetPlaceFirst) {
      const card = teachCardById(prismNetPlaceFirst.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const faces = rectangularPrismNetFaces(card);
      if (faces.length) return;
      const tool = rectangularPrismNetTool(card);
      const firstFace = {
        id: 1,
        type: tool.type,
        rotated: tool.rotated,
        width: tool.width,
        height: tool.height,
        x: Math.floor((rectangularPrismNetBoard.width - tool.width) / 2),
        y: Math.floor((rectangularPrismNetBoard.height - tool.height) / 2),
      };
      storeRectangularPrismNet(card, [firstFace], { prismNetSelectedFaceId: "1", prismNetMessage: "" });
      renderTeachMe();
      return;
    }
    const prismNetAttach = event.target.closest("[data-prism-net-attach]");
    if (prismNetAttach) {
      const card = teachCardById(prismNetAttach.closest("[data-teach-card]")?.dataset.teachCard);
      const direction = prismNetAttach.dataset.prismNetAttach;
      if (!card || !["north", "east", "south", "west"].includes(direction)) return;
      const faces = rectangularPrismNetFaces(card);
      const selectedId = rectangularPrismNetSelectedFaceId(card, faces);
      const parent = faces.find((face) => face.id === selectedId);
      const tool = rectangularPrismNetTool(card);
      const placement = rectangularPrismNetPlacement(parent, tool, direction);
      if (faces.length >= 6) {
        state.teachCustomResponses[card.id] = { ...getTeachCustomResponse(card), prismNetMessage: "A prism net has six faces. Remove a face before adding another." };
      } else if (!placement) {
        state.teachCustomResponses[card.id] = { ...getTeachCustomResponse(card), prismNetMessage: `The current ${tool.width} by ${tool.height} face cannot attach ${direction} of Face ${selectedId}: the complete shared-edge lengths do not match.` };
      } else {
        const nextId = Math.max(0, ...faces.map((face) => face.id)) + 1;
        const candidate = { id: nextId, type: tool.type, rotated: tool.rotated, ...tool, ...placement };
        if (!rectangularPrismNetPlacementFits(faces, candidate)) {
          state.teachCustomResponses[card.id] = { ...getTeachCustomResponse(card), prismNetMessage: "That placement overlaps another face or leaves the graph-paper workspace. Select another face or attachment side." };
        } else {
          storeRectangularPrismNet(card, [...faces, candidate], { prismNetSelectedFaceId: String(nextId), prismNetMessage: "" });
        }
      }
      renderTeachMe();
      return;
    }
    const prismNetRemove = event.target.closest("[data-prism-net-remove]");
    if (prismNetRemove) {
      const card = teachCardById(prismNetRemove.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const faces = rectangularPrismNetFaces(card);
      const selectedId = rectangularPrismNetSelectedFaceId(card, faces);
      const nextFaces = faces.filter((face) => face.id !== selectedId);
      storeRectangularPrismNet(card, nextFaces, {
        prismNetSelectedFaceId: String(nextFaces.at(-1)?.id || ""),
        prismNetMessage: "",
      });
      renderTeachMe();
      return;
    }
    const prismNetReset = event.target.closest("[data-prism-net-reset]");
    if (prismNetReset) {
      const card = teachCardById(prismNetReset.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      storeRectangularPrismNet(card, [], { prismNetSelectedFaceId: "", prismNetMessage: "" });
      renderTeachMe();
      return;
    }
    const labeledCubeNetCell = event.target.closest("[data-labeled-cube-net-cell]");
    if (labeledCubeNetCell) {
      const card = teachCardById(labeledCubeNetCell.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, labeledCubeNetCell.dataset.questionId) : null;
      const [x, y] = String(labeledCubeNetCell.dataset.labeledCubeNetCell || "").split(",").map(Number);
      if (!card || question?.visualType !== "labeledCubeNet"
        || !Number.isInteger(x) || !Number.isInteger(y) || x < 0 || x > 6 || y < 0 || y > 6) return;
      const cells = labeledCubeNetCells(card, question);
      const key = `${x},${y}`;
      const selected = cells.some((cell) => `${cell.x},${cell.y}` === key);
      const nextCells = selected
        ? cells.filter((cell) => `${cell.x},${cell.y}` !== key)
        : cells.length < 6 ? [...cells, { x, y }] : cells;
      const message = !selected && cells.length >= 6
        ? "A cube net uses exactly six squares. Remove one before choosing another."
        : `${nextCells.length} of 6 squares selected.`;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [labeledCubeNetCellsField(question)]: cubeNetCellString(nextCells),
        [labeledCubeNetMessageField(question)]: message,
      };
      labeledCubeNetQuestionsSharingState(card, question).forEach((entry) => {
        state.teachQuestionSubmitted[teachQuestionStateKey(card.id, entry.id)] = false;
      });
      renderTeachMe();
      return;
    }
    const labeledCubeNetTest = event.target.closest("[data-labeled-cube-net-test]");
    if (labeledCubeNetTest) {
      const card = teachCardById(labeledCubeNetTest.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, labeledCubeNetTest.dataset.questionId) : null;
      if (!card || question?.visualType !== "labeledCubeNet") return;
      const cells = labeledCubeNetCells(card, question);
      const message = cells.length !== 6
        ? "Select exactly six squares before testing the net."
        : cubeNetIsValid(cells)
          ? "Valid cube net. This arrangement folds into six different faces without overlap."
          : "This arrangement does not fold into six different cube faces. Revise it and test again.";
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [labeledCubeNetMessageField(question)]: message,
      };
      renderTeachMe();
      return;
    }
    const labeledCubeNetClear = event.target.closest("[data-labeled-cube-net-clear]");
    if (labeledCubeNetClear) {
      const card = teachCardById(labeledCubeNetClear.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, labeledCubeNetClear.dataset.questionId) : null;
      if (!card || question?.visualType !== "labeledCubeNet") return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [labeledCubeNetCellsField(question)]: "",
        [labeledCubeNetMessageField(question)]: "Grid cleared. Select exactly six edge-connected squares.",
      };
      labeledCubeNetQuestionsSharingState(card, question).forEach((entry) => {
        state.teachQuestionSubmitted[teachQuestionStateKey(card.id, entry.id)] = false;
      });
      renderTeachMe();
      return;
    }
    const cubeNetCell = event.target.closest("[data-cube-net-cell]");
    if (cubeNetCell) {
      const card = teachCardById(cubeNetCell.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, questionSetActiveId(card)) : null;
      const [x, y] = String(cubeNetCell.dataset.cubeNetCell || "").split(",").map(Number);
      if (!card || question?.visualType !== "cubeNetBuilder" || !Number.isInteger(x) || !Number.isInteger(y) || x < 0 || x > 6 || y < 0 || y > 6) return;
      const cells = cubeNetCells(card);
      const key = `${x},${y}`;
      const selected = cells.some((cell) => `${cell.x},${cell.y}` === key);
      const nextCells = selected ? cells.filter((cell) => `${cell.x},${cell.y}` !== key) : cells.length < 6 ? [...cells, { x, y }] : cells;
      const message = !selected && cells.length >= 6
        ? "A cube net uses exactly six squares. Remove one before choosing another."
        : `${nextCells.length} of 6 squares selected.`;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        cubeNetCells: cubeNetCellString(nextCells),
        cubeNetMessage: message,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const cubeNetSave = event.target.closest("[data-cube-net-save]");
    if (cubeNetSave) {
      const card = teachCardById(cubeNetSave.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, questionSetActiveId(card)) : null;
      if (!card || question?.visualType !== "cubeNetBuilder") return;
      const cells = cubeNetCells(card);
      const saved = cubeNetSavedSignatures(card);
      const signature = cells.length === 6 ? cubeNetCanonicalSignature(cells) : "";
      let nextSaved = saved;
      let message = "Select exactly six squares before testing the net.";
      if (cells.length === 6 && !cubeNetIsValid(cells)) {
        message = "This arrangement does not fold into six different cube faces. Revise the connected squares and try again.";
      } else if (signature === cubeNetFigureCSignature) {
        message = "This arrangement is equivalent to source Figure C after a rotation or reflection. Build a different cube net.";
      } else if (saved.includes(signature)) {
        message = "You already saved this arrangement or one of its rotations or reflections. Build a different net.";
      } else if (signature) {
        nextSaved = [...saved, signature].slice(0, 3);
        message = `Valid cube net saved. ${nextSaved.length} of 3 different nets complete.`;
      }
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        cubeNetCells: nextSaved.length > saved.length ? "" : cubeNetCellString(cells),
        cubeNetSavedSignatures: nextSaved.join("||"),
        cubeNetSavedCount: String(nextSaved.length),
        cubeNetMessage: message,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const cubeNetClear = event.target.closest("[data-cube-net-clear]");
    if (cubeNetClear) {
      const card = teachCardById(cubeNetClear.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, questionSetActiveId(card)) : null;
      if (!card || question?.visualType !== "cubeNetBuilder") return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        cubeNetCells: "",
        cubeNetMessage: "Grid cleared. Select exactly six edge-connected squares.",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const cubeNetResetAll = event.target.closest("[data-cube-net-reset-all]");
    if (cubeNetResetAll) {
      const card = teachCardById(cubeNetResetAll.closest("[data-teach-card]")?.dataset.teachCard);
      const question = card ? questionSetDefinition(card, questionSetActiveId(card)) : null;
      if (!card || question?.visualType !== "cubeNetBuilder") return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        cubeNetCells: "",
        cubeNetSavedSignatures: "",
        cubeNetSavedCount: "0",
        cubeNetMessage: "Saved nets reset. Build three arrangements different from source Figure C.",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const snapCubeCell = event.target.closest("[data-snap-cube-cell]");
    if (snapCubeCell) {
      const card = teachCardById(snapCubeCell.closest("[data-teach-card]")?.dataset.teachCard);
      const inventory = Number(snapCubeCell.dataset.cubeInventory);
      const [x, y, z] = String(snapCubeCell.dataset.snapCubeCell || "").split(",").map(Number);
      const hasBuilder = card?.questions?.some((question) => question.visualType === "snapCubeBuilder" && snapCubeInventory(question) === inventory);
      if (!card || !hasBuilder || ![32, 64].includes(inventory)
        || ![x, y, z].every(Number.isInteger) || x < 0 || x > 3 || y < 0 || y > 3 || z < 0 || z > 3) return;
      const cells = snapCubeCells(card, inventory);
      const key = `${x},${y},${z}`;
      const selected = cells.some((cell) => `${cell.x},${cell.y},${cell.z}` === key);
      const nextCells = selected
        ? cells.filter((cell) => `${cell.x},${cell.y},${cell.z}` !== key)
        : cells.length < inventory ? [...cells, { x, y, z }] : cells;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [snapCubeCellsField(inventory)]: snapCubeCellString(nextCells),
      };
      resetSnapCubeQuestionSubmissions(card, inventory);
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const snapCubeLayerButton = event.target.closest("[data-snap-cube-layer-delta]");
    if (snapCubeLayerButton) {
      const card = teachCardById(snapCubeLayerButton.closest("[data-teach-card]")?.dataset.teachCard);
      const inventory = Number(snapCubeLayerButton.dataset.cubeInventory);
      if (!card || ![32, 64].includes(inventory)) return;
      const field = snapCubeLayerField(inventory);
      const nextLayer = clampNumber(
        (Number(getTeachCustomResponse(card)[field]) || 0) + Number(snapCubeLayerButton.dataset.snapCubeLayerDelta),
        0,
        3
      );
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [field]: String(nextLayer),
      };
      renderTeachMe();
      return;
    }
    const snapCubeFillLayer = event.target.closest("[data-snap-cube-fill-layer]");
    if (snapCubeFillLayer) {
      const card = teachCardById(snapCubeFillLayer.closest("[data-teach-card]")?.dataset.teachCard);
      const inventory = Number(snapCubeFillLayer.dataset.cubeInventory);
      if (!card || ![32, 64].includes(inventory)) return;
      const cells = snapCubeCells(card, inventory);
      const layer = clampNumber(Number(getTeachCustomResponse(card)[snapCubeLayerField(inventory)]) || 0, 0, 3);
      const keys = new Set(cells.map(({ x, y, z }) => `${x},${y},${z}`));
      const additions = [];
      for (let y = 0; y < 4; y += 1) {
        for (let x = 0; x < 4; x += 1) {
          if (!keys.has(`${x},${y},${layer}`)) additions.push({ x, y, z: layer });
        }
      }
      if (cells.length + additions.length > inventory) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [snapCubeCellsField(inventory)]: snapCubeCellString([...cells, ...additions]),
      };
      resetSnapCubeQuestionSubmissions(card, inventory);
      renderTeachMe();
      return;
    }
    const snapCubeClearLayer = event.target.closest("[data-snap-cube-clear-layer]");
    if (snapCubeClearLayer) {
      const card = teachCardById(snapCubeClearLayer.closest("[data-teach-card]")?.dataset.teachCard);
      const inventory = Number(snapCubeClearLayer.dataset.cubeInventory);
      if (!card || ![32, 64].includes(inventory)) return;
      const layer = clampNumber(Number(getTeachCustomResponse(card)[snapCubeLayerField(inventory)]) || 0, 0, 3);
      const nextCells = snapCubeCells(card, inventory).filter(({ z }) => z !== layer);
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [snapCubeCellsField(inventory)]: snapCubeCellString(nextCells),
      };
      resetSnapCubeQuestionSubmissions(card, inventory);
      renderTeachMe();
      return;
    }
    const snapCubeReset = event.target.closest("[data-snap-cube-reset]");
    if (snapCubeReset) {
      const card = teachCardById(snapCubeReset.closest("[data-teach-card]")?.dataset.teachCard);
      const inventory = Number(snapCubeReset.dataset.cubeInventory);
      if (!card || ![32, 64].includes(inventory)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [snapCubeCellsField(inventory)]: "",
        [snapCubeLayerField(inventory)]: "0",
      };
      resetSnapCubeQuestionSubmissions(card, inventory);
      renderTeachMe();
      return;
    }
    const eightCubeCell = event.target.closest("[data-eight-cube-cell]");
    if (eightCubeCell) {
      const card = teachCardById(eightCubeCell.closest("[data-teach-card]")?.dataset.teachCard);
      const shapeId = eightCubeCell.dataset.shapeId === "B" ? "B" : "A";
      const [x, y, z] = String(eightCubeCell.dataset.eightCubeCell || "").split(",").map(Number);
      if (!card || ![x, y, z].every(Number.isInteger) || x < 0 || x > 3 || y < 0 || y > 3 || z < 0 || z > 7) return;
      const cells = eightCubeShapeCells(card, shapeId);
      const previousShapeBValid = getTeachCustomResponse(card).eightCubeShapeBValid;
      const key = `${x},${y},${z}`;
      const selected = cells.some((cell) => `${cell.x},${cell.y},${cell.z}` === key);
      const nextCells = selected ? cells.filter((cell) => `${cell.x},${cell.y},${cell.z}` !== key) : cells.length < 8 ? [...cells, { x, y, z }] : cells;
      const cellField = shapeId === "B" ? "eightCubeShapeBCells" : "eightCubeShapeACells";
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [cellField]: eightCubeShapeCellString(nextCells),
      };
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        ...eightCubeShapeValidity(card),
      };
      const resetQuestionIds = shapeId === "A" ? ["shape-a", "compare-shapes"] : ["shape-b", "compare-shapes"];
      if (shapeId === "A" && previousShapeBValid !== getTeachCustomResponse(card).eightCubeShapeBValid) resetQuestionIds.push("shape-b");
      for (const questionId of resetQuestionIds) {
        state.teachQuestionSubmitted[teachQuestionStateKey(card.id, questionId)] = false;
      }
      renderTeachMe();
      return;
    }
    const eightCubeLayerButton = event.target.closest("[data-eight-cube-layer-delta]");
    if (eightCubeLayerButton) {
      const card = teachCardById(eightCubeLayerButton.closest("[data-teach-card]")?.dataset.teachCard);
      const shapeId = eightCubeLayerButton.dataset.shapeId === "B" ? "B" : "A";
      if (!card) return;
      const layerField = shapeId === "B" ? "eightCubeShapeBLayer" : "eightCubeShapeALayer";
      const nextLayer = clampNumber((Number(getTeachCustomResponse(card)[layerField]) || 0) + Number(eightCubeLayerButton.dataset.eightCubeLayerDelta), 0, 7);
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [layerField]: String(nextLayer),
      };
      renderTeachMe();
      return;
    }
    const eightCubeReset = event.target.closest("[data-eight-cube-reset]");
    if (eightCubeReset) {
      const card = teachCardById(eightCubeReset.closest("[data-teach-card]")?.dataset.teachCard);
      const shapeId = eightCubeReset.dataset.shapeId === "B" ? "B" : "A";
      if (!card) return;
      const previousShapeBValid = getTeachCustomResponse(card).eightCubeShapeBValid;
      const cellField = shapeId === "B" ? "eightCubeShapeBCells" : "eightCubeShapeACells";
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [cellField]: "",
      };
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        ...eightCubeShapeValidity(card),
      };
      const resetQuestionIds = shapeId === "A" ? ["shape-a", "compare-shapes"] : ["shape-b", "compare-shapes"];
      if (shapeId === "A" && previousShapeBValid !== getTeachCustomResponse(card).eightCubeShapeBValid) resetQuestionIds.push("shape-b");
      for (const questionId of resetQuestionIds) {
        state.teachQuestionSubmitted[teachQuestionStateKey(card.id, questionId)] = false;
      }
      renderTeachMe();
      return;
    }
    const surfaceNetFoldStepButton = event.target.closest("[data-surface-net-fold-delta]");
    if (surfaceNetFoldStepButton) {
      const card = teachCardById(surfaceNetFoldStepButton.closest("[data-teach-card]")?.dataset.teachCard);
      const questionId = surfaceNetFoldStepButton.dataset.questionId;
      const question = card ? questionSetDefinition(card, questionId) : null;
      const netId = surfaceNetFoldStepButton.dataset.surfaceNetId;
      if (!card || question?.visualType !== "surfaceNetFold" || question.netId !== netId || !["A", "B", "C"].includes(netId)) return;
      const field = `surfaceNetFold${netId}`;
      const nextStep = clampNumber(surfaceNetFoldStep(card, netId) + Number(surfaceNetFoldStepButton.dataset.surfaceNetFoldDelta), 0, 3);
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [field]: String(nextStep),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const surfaceNetFoldResetButton = event.target.closest("[data-surface-net-fold-reset]");
    if (surfaceNetFoldResetButton) {
      const card = teachCardById(surfaceNetFoldResetButton.closest("[data-teach-card]")?.dataset.teachCard);
      const questionId = surfaceNetFoldResetButton.dataset.questionId;
      const question = card ? questionSetDefinition(card, questionId) : null;
      const netId = surfaceNetFoldResetButton.dataset.surfaceNetId;
      if (!card || question?.visualType !== "surfaceNetFold" || question.netId !== netId || !["A", "B", "C"].includes(netId)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        [`surfaceNetFold${netId}`]: "0",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, question.id)] = false;
      renderTeachMe();
      return;
    }
    const polyhedronFoldButton = event.target.closest("[data-polyhedron-fold-delta]");
    if (polyhedronFoldButton) {
      const card = teachCardById(polyhedronFoldButton.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const nextStep = clampNumber(polyhedronFoldStep(card) + Number(polyhedronFoldButton.dataset.polyhedronFoldDelta), 0, 3);
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        polyhedronFoldStep: String(nextStep),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "assemble-a")] = false;
      renderTeachMe();
      return;
    }
    const polyhedronFoldReset = event.target.closest("[data-polyhedron-fold-reset]");
    if (polyhedronFoldReset) {
      const card = teachCardById(polyhedronFoldReset.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        polyhedronFoldStep: "0",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "assemble-a")] = false;
      renderTeachMe();
      return;
    }
    const baseHeightRotateButton = event.target.closest("[data-base-height-rotate]");
    if (baseHeightRotateButton) {
      const card = teachCardById(baseHeightRotateButton.dataset.baseHeightRotate);
      const question = card ? questionSetDefinition(card, baseHeightRotateButton.dataset.questionId) : null;
      if (!card || question?.dynamicAnswer !== "baseHeightChallenge") return;
      const shape = baseHeightChallengeShape(card, question);
      const delta = Number(baseHeightRotateButton.dataset.rotationDelta) || 0;
      setBaseHeightChallengeValues(card, question, { rotation: clampNumber(shape.rotation + delta, -60, 60) });
      renderTeachMe();
      return;
    }
    const baseHeightResetButton = event.target.closest("[data-base-height-reset]");
    if (baseHeightResetButton) {
      const card = teachCardById(baseHeightResetButton.dataset.baseHeightReset);
      const question = card ? questionSetDefinition(card, baseHeightResetButton.dataset.questionId) : null;
      if (!card || question?.dynamicAnswer !== "baseHeightChallenge") return;
      resetBaseHeightChallenge(card, question);
      renderTeachMe();
      return;
    }
    const parallelogramStrategyButton = event.target.closest("[data-parallelogram-strategy]");
    if (parallelogramStrategyButton) {
      const id = parallelogramStrategyButton.dataset.parallelogramStrategy;
      const questionId = parallelogramStrategyButton.dataset.questionId;
      const strategyId = parallelogramStrategyButton.dataset.strategyId;
      const card = teachCardById(id);
      const question = card ? parallelogramExploreQuestion(card, questionId) : null;
      if (!card || card.customVisual !== "parallelogramExplore" || !question || !["decompose", "enclose"].includes(strategyId)) return;
      const field = parallelogramExploreField(question.id, "strategy");
      const current = parallelogramExploreStrategy(card, question.id);
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [field]: current === strategyId ? "none" : strategyId,
      };
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionToggle = event.target.closest("[data-quadrilateral-extension-toggle]");
    if (quadrilateralExtensionToggle) {
      const card = teachCardById(quadrilateralExtensionToggle.dataset.quadrilateralExtensionToggle);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      state.teachQuadrilateralExtensionOpen = !state.teachQuadrilateralExtensionOpen;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionUndo = event.target.closest("[data-quadrilateral-extension-undo]");
    if (quadrilateralExtensionUndo) {
      const card = teachCardById(quadrilateralExtensionUndo.dataset.quadrilateralExtensionUndo);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      const response = getTeachCustomResponse(card);
      state.teachCustomResponses[card.id] = {
        ...response,
        extensionPoints: quadrilateralExtensionPoints(card).slice(0, -1),
        extensionDiagonal: "",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = false;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionClear = event.target.closest("[data-quadrilateral-extension-clear]");
    if (quadrilateralExtensionClear) {
      const card = teachCardById(quadrilateralExtensionClear.dataset.quadrilateralExtensionClear);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      const response = getTeachCustomResponse(card);
      state.teachCustomResponses[card.id] = {
        ...response,
        extensionPoints: [],
        extensionDiagonal: "",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = false;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionDiagonal = event.target.closest("[data-quadrilateral-extension-diagonal]");
    if (quadrilateralExtensionDiagonal) {
      const card = teachCardById(quadrilateralExtensionDiagonal.dataset.quadrilateralExtensionDiagonal);
      const diagonal = quadrilateralExtensionDiagonal.dataset.diagonal;
      if (!card || card.responseType !== "quadrilateralDecompose" || quadrilateralExtensionPoints(card).length !== 4 || !["0-2", "1-3"].includes(diagonal)) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        extensionDiagonal: diagonal,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = false;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionSubmit = event.target.closest("[data-quadrilateral-extension-submit]");
    if (quadrilateralExtensionSubmit) {
      const card = teachCardById(quadrilateralExtensionSubmit.dataset.quadrilateralExtensionSubmit);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = true;
      renderTeachMe();
      return;
    }
    const quadrilateralExtensionBoard = event.target.closest("[data-quadrilateral-extension-board]");
    if (quadrilateralExtensionBoard) {
      const card = teachCardById(quadrilateralExtensionBoard.dataset.quadrilateralExtensionBoard);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      const points = quadrilateralExtensionPoints(card);
      if (points.length >= 4) return;
      const rawPoint = tangramSvgPoint(quadrilateralExtensionBoard, event);
      const point = [
        clampNumber(20 + Math.round((rawPoint.x - 20) / 40) * 40, 20, 340),
        clampNumber(20 + Math.round((rawPoint.y - 20) / 40) * 40, 20, 260),
      ];
      if (points.some(([x, y]) => x === point[0] && y === point[1])) return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        extensionPoints: [...points, point],
        extensionDiagonal: "",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = false;
      renderTeachMe();
      return;
    }
    const questionSetSelectButton = event.target.closest("[data-question-set-select]");
    if (questionSetSelectButton) {
      const id = questionSetSelectButton.dataset.questionSetSelect;
      const questionId = questionSetSelectButton.dataset.questionId;
      const card = teachCardById(id);
      const question = card ? questionSetDefinition(card, questionId) : null;
      if (!card || card.responseType !== "questionSet" || !question || !questionSetQuestionUnlocked(card, question)) return;
      state.teachQuestionSetActive[id] = questionId;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const polyhedronModelSelectButton = event.target.closest("[data-polyhedron-model-select]");
    if (polyhedronModelSelectButton) {
      const id = polyhedronModelSelectButton.dataset.polyhedronModelSelect;
      const modelId = polyhedronModelSelectButton.dataset.modelId;
      const card = teachCardById(id);
      if (!card || card.id !== "teach-l13" || !polyhedronModelIds.includes(modelId)) return;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        polyhedronModel: modelId,
      };
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const polyhedronViewButton = event.target.closest("[data-polyhedron-view]");
    if (polyhedronViewButton) {
      window.Unit1Polyhedra?.control(polyhedronViewButton);
      return;
    }
    const polyhedronClassificationChoice = event.target.closest("[data-polyhedron-classification-choice]");
    if (polyhedronClassificationChoice) {
      const id = polyhedronClassificationChoice.dataset.polyhedronClassificationChoice;
      const modelId = polyhedronClassificationChoice.dataset.modelId;
      const classification = polyhedronClassificationChoice.dataset.classification;
      const card = teachCardById(id);
      const question = card ? polyhedronClassificationQuestion(card) : null;
      if (!card
        || card.id !== "teach-l13"
        || !question
        || !polyhedronModelIds.includes(modelId)
        || !polyhedronClassificationValues.includes(classification)) return;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [questionSetField(question.id, modelId)]: classification,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, `${question.id}:${modelId}`)] = false;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const polyhedronClassificationSubmit = event.target.closest("[data-polyhedron-classification-submit]");
    if (polyhedronClassificationSubmit) {
      const id = polyhedronClassificationSubmit.dataset.polyhedronClassificationSubmit;
      const modelId = polyhedronClassificationSubmit.dataset.modelId;
      const card = teachCardById(id);
      const question = card ? polyhedronClassificationQuestion(card) : null;
      if (!card || card.id !== "teach-l13" || !question || !polyhedronModelIds.includes(modelId)) return;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, `${question.id}:${modelId}`)] = true;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = polyhedronModelIds.every((entryId) => (
        polyhedronClassificationSubmitted(card, entryId)
      ));
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const questionSetChoiceButton = event.target.closest("[data-question-set-choice]");
    if (questionSetChoiceButton) {
      const id = questionSetChoiceButton.dataset.questionSetChoice;
      const questionId = questionSetChoiceButton.dataset.questionId;
      const optionId = questionSetChoiceButton.dataset.optionId;
      const card = teachCardById(id);
      const question = card ? questionSetDefinition(card, questionId) : null;
      if (!card || card.responseType !== "questionSet" || !question?.choices?.some((choice) => choice.id === optionId)) return;
      const current = questionSetSelections(card, question);
      const next = question.responseType === "multiSelect"
        ? current.includes(optionId)
          ? current.filter((value) => value !== optionId)
          : [...current, optionId]
        : [optionId];
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [questionSetField(questionId, "answer")]: next.join("|"),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, questionId)] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const questionSetSubmitButton = event.target.closest("[data-question-set-submit]");
    if (questionSetSubmitButton) {
      const id = questionSetSubmitButton.dataset.questionSetSubmit;
      const questionId = questionSetSubmitButton.dataset.questionId;
      const card = teachCardById(id);
      const question = card ? questionSetDefinition(card, questionId) : null;
      if (!card || card.responseType !== "questionSet" || !question) return;
      if (question.dynamicAnswer === "pyramidFamilyLooseNet") {
        const target = pyramidNetTargetId(card);
        const analysis = pyramidNetAnalysis(card, target);
        const saved = pyramidNetSavedSignatures(card, target);
        const savedSignatures = analysis.valid && analysis.signature && !saved.includes(analysis.signature)
          ? [...saved, analysis.signature]
          : saved;
        setPyramidNetWorkspace(card, target, { savedSignatures, submitted: true });
      }
      if (question.dynamicAnswer === "tangramConstruction") {
        const analysis = tangramConstructionAnalysis(card, question);
        if (analysis.valid) {
          state.teachCustomResponses[card.id] = {
            ...getTeachCustomResponse(card),
            [tangramSavedField(question.id)]: analysis.signature,
          };
        }
      }
      state.teachQuestionSubmitted[teachQuestionStateKey(id, questionId)] = true;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const questionSetHintButton = event.target.closest("[data-question-set-hint]");
    if (questionSetHintButton) {
      const id = questionSetHintButton.dataset.questionSetHint;
      const questionId = questionSetHintButton.dataset.questionId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "questionSet" || !questionSetDefinition(card, questionId)) return;
      const key = teachQuestionStateKey(id, questionId);
      state.teachQuestionHints[key] = !state.teachQuestionHints[key];
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const gridAreaSelectButton = event.target.closest("[data-grid-area-select]");
    if (gridAreaSelectButton) {
      const id = gridAreaSelectButton.dataset.gridAreaSelect;
      const figureId = gridAreaSelectButton.dataset.gridAreaFigure;
      const card = teachCardById(id);
      if (!card || card.responseType !== "gridFigureAreas" || !gridFigureAreaDefinition(card, figureId)) return;
      state.teachGridAreaActive[id] = figureId;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const gridAreaSubmitButton = event.target.closest("[data-grid-area-submit]");
    if (gridAreaSubmitButton) {
      const id = gridAreaSubmitButton.dataset.gridAreaSubmit;
      const figureId = gridAreaSubmitButton.dataset.gridAreaFigure;
      const card = teachCardById(id);
      if (!card || card.responseType !== "gridFigureAreas" || !gridFigureAreaDefinition(card, figureId)) return;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, figureId)] = true;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const gridAreaHintButton = event.target.closest("[data-grid-area-hint]");
    if (gridAreaHintButton) {
      const id = gridAreaHintButton.dataset.gridAreaHint;
      const figureId = gridAreaHintButton.dataset.gridAreaFigure;
      const card = teachCardById(id);
      if (!card || card.responseType !== "gridFigureAreas" || !gridFigureAreaDefinition(card, figureId)) return;
      const key = teachQuestionStateKey(id, figureId);
      state.teachQuestionHints[key] = !state.teachQuestionHints[key];
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const areaMeaningChoiceButton = event.target.closest("[data-area-meaning-choice]");
    if (areaMeaningChoiceButton) {
      const id = areaMeaningChoiceButton.dataset.areaMeaningChoice;
      const drawingId = areaMeaningChoiceButton.dataset.drawingId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "areaMeaning" || !card.drawingChoices.includes(drawingId)) return;
      const current = areaMeaningDrawingSelections(card);
      const next = current.includes(drawingId)
        ? current.filter((choice) => choice !== drawingId)
        : [...current, drawingId];
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        drawingSelections: card.drawingChoices.filter((choice) => next.includes(choice)).join("|"),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, "drawings")] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const teachQuestionSubmitButton = event.target.closest("[data-teach-question-submit]");
    if (teachQuestionSubmitButton) {
      const id = teachQuestionSubmitButton.dataset.teachQuestionSubmit;
      const questionId = teachQuestionSubmitButton.dataset.questionId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "areaMeaning" || !isAreaMeaningQuestionId(questionId)) return;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, questionId)] = true;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const teachQuestionHintButton = event.target.closest("[data-teach-question-hint]");
    if (teachQuestionHintButton) {
      const id = teachQuestionHintButton.dataset.teachQuestionHint;
      const questionId = teachQuestionHintButton.dataset.questionId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "areaMeaning" || !isAreaMeaningQuestionId(questionId)) return;
      const key = teachQuestionStateKey(id, questionId);
      state.teachQuestionHints[key] = !state.teachQuestionHints[key];
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const tentChoiceButton = event.target.closest("[data-tent-designer-choice]");
    if (tentChoiceButton) {
      const card = teachCardById(tentChoiceButton.dataset.tentDesignerChoice);
      const field = tentChoiceButton.dataset.tentField;
      const optionId = tentChoiceButton.dataset.optionId;
      const optionKeyByField = {
        tentCapacity: "capacity",
        tentArrangement: "arrangement",
        tentHeight: "height",
        tentStyle: "style",
      };
      const optionKey = optionKeyByField[field];
      const options = optionKey ? tentDesignerOptions[optionKey] : [];
      if (!card || card.id !== "teach-l19" || !options.some((option) => option.id === optionId)) return;
      const response = { ...tentPlanField("teach-l19"), [field]: optionId };
      if (["tentCapacity", "tentArrangement"].includes(field)) {
        const capacity = Number(response.tentCapacity);
        const arrangement = response.tentArrangement;
        const required = tentRequiredFloor(capacity, arrangement);
        if (required.rows > 0 && required.columns > 0) {
          response.tentFloorLength = String(required.recommendedLength);
          response.tentFloorWidth = String(required.recommendedWidth);
        }
      }
      state.teachCustomResponses[card.id] = response;
      invalidateTentPlanSubmissions();
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const tentStepButton = event.target.closest("[data-tent-step]");
    if (tentStepButton) {
      const card = teachCardById(tentStepButton.dataset.tentStep);
      const field = tentStepButton.dataset.tentField;
      const step = Number(tentStepButton.dataset.step);
      if (!card || card.id !== "teach-l19"
        || !["tentFloorLength", "tentFloorWidth"].includes(field)
        || ![-1, 1].includes(step)) return;
      const response = { ...tentPlanField("teach-l19") };
      const current = Number(response[field]);
      if (!Number.isInteger(current)) return;
      response[field] = String(Math.max(3, Math.min(30, current + step)));
      state.teachCustomResponses[card.id] = response;
      invalidateTentPlanSubmissions();
      state.sourceModalItemId = null;
      renderTeachMe();
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
    const decomposeSelectButton = event.target.closest("[data-decompose-select]");
    if (decomposeSelectButton) {
      const card = teachCardById(decomposeSelectButton.closest("[data-teach-card]")?.dataset.teachCard);
      const pieceId = decomposeSelectButton.dataset.decomposeSelect;
      if (!card || card.customVisual !== "decomposeParallelogram" || !["small", "trapezoid"].includes(pieceId)) return;
      state.teachDecomposeSelectedPiece = pieceId;
      renderTeachMe();
      return;
    }
    const decomposeRotateButton = event.target.closest("[data-decompose-rotate]");
    if (decomposeRotateButton) {
      const card = teachCardById(decomposeRotateButton.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card || card.customVisual !== "decomposeParallelogram") return;
      rotateSelectedDecomposePiece(card, Number(decomposeRotateButton.dataset.decomposeRotate) || 0);
      renderTeachMe();
      return;
    }
    const decomposeResetButton = event.target.closest("[data-decompose-reset]");
    if (decomposeResetButton) {
      const card = teachCardById(decomposeResetButton.dataset.decomposeReset);
      if (!card || card.customVisual !== "decomposeParallelogram") return;
      resetDecomposePieces(card);
      renderTeachMe();
      return;
    }
    const guidedOptionalSubmitButton = event.target.closest("[data-guided-optional-submit]");
    if (guidedOptionalSubmitButton) {
      const card = teachCardById(guidedOptionalSubmitButton.dataset.guidedOptionalSubmit);
      if (!card?.optionalChallenge) return;
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, card.optionalChallenge.id)] = true;
      renderTeachMe();
      return;
    }
    const guidedOptionalHintButton = event.target.closest("[data-guided-optional-hint]");
    if (guidedOptionalHintButton) {
      const card = teachCardById(guidedOptionalHintButton.dataset.guidedOptionalHint);
      if (!card?.optionalChallenge) return;
      const key = teachQuestionStateKey(card.id, card.optionalChallenge.id);
      state.teachQuestionHints[key] = !state.teachQuestionHints[key];
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
      if (card.customVisual === "decomposeParallelogram" && field === "parallelogram") {
        state.teachCustomResponses[id].decomposeSmallUsed = "";
        state.teachCustomResponses[id].decomposeTrapezoidUsed = "";
        state.teachDecomposeSelectedPiece = "small";
      }
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
      const questionId = parallelogramShowAreaButton.dataset.questionId;
      const card = teachCardById(id);
      const question = card && questionId ? questionSetDefinition(card, questionId) : null;
      if (card?.responseType === "questionSet" && question?.showAreaCheck) {
        const response = getTeachCustomResponse(card);
        const field = parallelogramExploreAreaCheckField(question.id);
        state.teachCustomResponses[id] = {
          ...response,
          [field]: response[field] === "yes" ? "no" : "yes",
        };
        state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = false;
        state.sourceModalItemId = null;
        renderTeachMe();
        return;
      }
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
    const triangleHeightRoundButton = event.target.closest("[data-triangle-height-round]");
    if (triangleHeightRoundButton) {
      const card = teachCardById(triangleHeightRoundButton.closest("[data-teach-card]")?.dataset.teachCard);
      const roundId = triangleHeightRoundButton.dataset.triangleHeightRound;
      if (!card || card.responseType !== "triangleHeightMarks" || !triangleHeightRounds[roundId]) return;
      if (roundId === "round2" && !triangleHeightRoundCompleted(getTeachCustomResponse(card), "round1")) return;
      state.teachTriangleHeightRound = roundId;
      state.teachTriangleHeightStartPoint = null;
      renderTeachMe();
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
    const tangramIncludeButton = event.target.closest("[data-tangram-include]");
    if (tangramIncludeButton) {
      const card = teachCardById(tangramIncludeButton.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const questionId = tangramWorkspaceQuestionId(card);
      const piece = getTangramPieces(card, questionId)[state.teachTangramSelectedPiece];
      if (!piece) return;
      piece.included = !piece.included;
      markTangramWorkspaceChanged(card, questionId);
      renderTeachMe();
      return;
    }
    const tangramRotateButton = event.target.closest("[data-tangram-rotate]");
    if (tangramRotateButton) {
      const card = teachCardById(tangramRotateButton.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      rotateSelectedTangramPiece(card, Number(tangramRotateButton.dataset.tangramRotate) || 0);
      renderTeachMe();
      return;
    }
    const tangramResetButton = event.target.closest("[data-tangram-reset]");
    if (tangramResetButton) {
      const card = teachCardById(tangramResetButton.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const questionId = tangramWorkspaceQuestionId(card);
      resetTangramPieces(card, questionId);
      markTangramWorkspaceChanged(card, questionId);
      renderTeachMe();
      return;
    }
    const gridTriangleSelectButton = event.target.closest("[data-grid-triangle-select]");
    if (gridTriangleSelectButton) {
      state.teachGridTriangleSelectedPiece = gridTriangleSelectButton.dataset.gridTriangleSelect;
      renderTeachMe();
      return;
    }
    const gridTriangleRotateButton = event.target.closest("[data-grid-triangle-rotate]");
    if (gridTriangleRotateButton) {
      rotateSelectedGridTriangle(Number(gridTriangleRotateButton.dataset.gridTriangleRotate) || 0);
      renderTeachMe();
      return;
    }
    const gridTriangleResetButton = event.target.closest("[data-grid-triangle-reset]");
    if (gridTriangleResetButton) {
      resetGridTriangleFit();
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
    enforceTextareaValueLimit(event.target);
    const quadrilateralExtensionInput = event.target.closest("[data-quadrilateral-extension-input]");
    if (quadrilateralExtensionInput) {
      const card = teachCardById(quadrilateralExtensionInput.dataset.quadrilateralExtensionInput);
      if (!card || card.responseType !== "quadrilateralDecompose") return;
      state.teachCustomResponses[card.id] = {
        ...getTeachCustomResponse(card),
        extensionRule: enforceTextareaValueLimit(quadrilateralExtensionInput),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(card.id, "optional-extension")] = false;
      return;
    }
    const parallelogramPairInput = event.target.closest("[data-parallelogram-pair-input]");
    if (parallelogramPairInput) {
      const id = parallelogramPairInput.dataset.parallelogramPairInput;
      const questionId = parallelogramPairInput.dataset.questionId;
      const shapeId = parallelogramPairInput.dataset.shapeId;
      const field = parallelogramPairInput.dataset.pairField;
      const card = teachCardById(id);
      const question = card ? questionSetDefinition(card, questionId) : null;
      if (!card
        || !["parallelogramPairArea20", "parallelogramPairEqualArea"].includes(question?.dynamicAnswer)
        || !parallelogramPairShapeIds(question).includes(shapeId)
        || !["base", "height", "shift"].includes(field)) return;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [parallelogramPairField(question.id, shapeId, field)]: parallelogramPairInput.value,
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const baseHeightInput = event.target.closest("[data-base-height-input]");
    if (baseHeightInput) {
      const card = teachCardById(baseHeightInput.dataset.baseHeightInput);
      const question = card ? questionSetDefinition(card, baseHeightInput.dataset.questionId) : null;
      const field = baseHeightInput.dataset.baseHeightField;
      if (!card || question?.dynamicAnswer !== "baseHeightChallenge" || !["base", "height", "slant", "heightPosition"].includes(field)) return;
      const value = field === "heightPosition" ? Number(baseHeightInput.value) / 100 : Number(baseHeightInput.value);
      setBaseHeightChallengeValues(card, question, { [field]: value });
      updateBaseHeightChallengeDom(card, question);
      return;
    }
    const parallelogramInput = event.target.closest("[data-parallelogram-input]");
    if (parallelogramInput) {
      const id = parallelogramInput.dataset.parallelogramInput;
      const questionId = parallelogramInput.dataset.questionId;
      const field = parallelogramInput.dataset.parallelogramField;
      const card = teachCardById(id);
      const question = card ? parallelogramExploreQuestion(card, questionId) : null;
      const isParallelogramWorkspace = card?.customVisual === "parallelogramExplore"
        || question?.visualType === "parallelogramExplore";
      if (!card || !isParallelogramWorkspace || !question?.model?.editable || !["base", "height", "slant"].includes(field)) return;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [parallelogramExploreField(question.id, field)]: parallelogramInput.value,
        [parallelogramExploreAreaCheckField(question.id)]: "no",
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, question.id)] = false;
      state.sourceModalItemId = null;
      renderTeachMe();
      return;
    }
    const questionSetInput = event.target.closest("[data-question-set-input]");
    if (questionSetInput) {
      const id = questionSetInput.dataset.questionSetInput;
      const questionId = questionSetInput.dataset.questionId;
      const field = questionSetInput.dataset.questionField;
      const card = teachCardById(id);
      const question = card ? questionSetDefinition(card, questionId) : null;
      const configuredField = question?.fields?.find((entry) => entry.id === field);
      const builtInField = ["answer", "reasoning"].includes(field)
        || (field === "area" && question?.requireAreaAnswer);
      if (!card || card.responseType !== "questionSet" || !question || (!configuredField && !builtInField)) return;
      const maxLength = field === "reasoning" || question.responseType === "openResponse"
        ? TEXTAREA_MAX_LENGTH
        : field === "area" || configuredField?.responseType === "number" || question.responseType === "number"
          ? 24
          : configuredField ? 120 : 500;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [questionSetField(questionId, field)]: enforceTextareaValueLimit(questionSetInput).slice(0, maxLength),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, questionId)] = false;
      state.sourceModalItemId = null;
      const cardNode = questionSetInput.closest("[data-teach-card]");
      const feedback = cardNode?.querySelector(`[data-question-set-feedback="${questionId}"]`);
      if (feedback) {
        feedback.textContent = `Submit ${question.label} when you are ready for feedback.`;
        feedback.classList.remove("is-correct", "is-incorrect");
      }
      const progress = cardNode?.querySelector(`[data-question-set-select="${id}"][data-question-id="${questionId}"]`);
      progress?.classList.remove("is-correct", "is-incorrect");
      const progressStatus = progress?.querySelector("span");
      if (progressStatus) progressStatus.textContent = "Not submitted";
      const completion = cardNode?.querySelector("[data-question-set-completion]");
      if (completion) {
        const requiredCount = questionSetRequiredCount(card);
        const hasOptional = requiredCount !== (card.questions || []).length;
        completion.textContent = `Completed ${questionSetCompletedCount(card)} of ${requiredCount}${hasOptional ? " required" : ""} questions.`;
      }
      return;
    }
    const gridAreaInput = event.target.closest("[data-grid-area-input]");
    if (gridAreaInput) {
      const id = gridAreaInput.dataset.gridAreaInput;
      const figureId = gridAreaInput.dataset.gridAreaFigure;
      const field = gridAreaInput.dataset.gridAreaField;
      const card = teachCardById(id);
      if (!card || card.responseType !== "gridFigureAreas" || !gridFigureAreaDefinition(card, figureId) || !["area", "reasoning"].includes(field)) return;
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [gridFigureAreaField(figureId, field)]: gridAreaInput.value.slice(0, field === "area" ? 24 : TEXTAREA_MAX_LENGTH),
      };
      state.sourceModalItemId = null;
      state.teachQuestionSubmitted[teachQuestionStateKey(id, figureId)] = false;
      const cardNode = gridAreaInput.closest("[data-teach-card]");
      const feedback = cardNode?.querySelector(`[data-grid-area-feedback="${figureId}"]`);
      if (feedback) {
        feedback.textContent = `Submit Figure ${figureId} when you are ready for feedback.`;
        feedback.classList.remove("is-correct", "is-incorrect");
      }
      const selectButton = cardNode?.querySelector(`[data-grid-area-select="${id}"][data-grid-area-figure="${figureId}"]`);
      selectButton?.classList.remove("is-correct", "is-incorrect");
      const progress = cardNode?.querySelector(`[data-grid-area-progress="${figureId}"]`);
      progress?.classList.remove("is-correct", "is-incorrect");
      const progressStatus = progress?.querySelector(".grid-area-progress-status");
      if (progressStatus) progressStatus.textContent = "Not submitted";
      const completion = cardNode?.querySelector("[data-grid-area-completion]");
      if (completion) completion.textContent = `Completed ${gridFigureAreaCompletedCount(card)} of ${(card.figures || []).length} figures.`;
      return;
    }
    const teachQuestionInput = event.target.closest("[data-teach-question-input]");
    if (teachQuestionInput) {
      const id = teachQuestionInput.dataset.teachQuestionInput;
      const questionId = teachQuestionInput.dataset.questionId;
      const card = teachCardById(id);
      if (!card || card.responseType !== "areaMeaning" || !isAreaMeaningQuestionId(questionId)) return;
      const field = questionId === "definition" ? "areaDefinition" : "drawingReasoning";
      state.teachCustomResponses[id] = {
        ...getTeachCustomResponse(card),
        [field]: enforceTextareaValueLimit(teachQuestionInput),
      };
      state.teachQuestionSubmitted[teachQuestionStateKey(id, questionId)] = false;
      state.sourceModalItemId = null;
      const feedback = teachQuestionInput.closest("[data-teach-question-section]")?.querySelector("[data-teach-question-feedback]");
      if (feedback) {
        feedback.textContent = `Submit Question ${questionId === "drawings" ? "1" : "2"} when you are ready for feedback.`;
        feedback.classList.remove("is-correct", "is-incorrect");
      }
      return;
    }
    const teachCustomInput = event.target.closest("[data-teach-custom-input]");
    if (teachCustomInput) {
      updateTeachCustomResponse(teachCustomInput);
      if (teachCustomInput.dataset.rerenderOnInput === "true") renderTeachMe();
      return;
    }
    const teachReasoning = event.target.closest("[data-teach-reasoning]");
    if (teachReasoning) {
      const id = teachReasoning.dataset.teachReasoning;
      state.teachReasoning[id] = enforceTextareaValueLimit(teachReasoning);
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const reasoning = event.target.closest("[data-practice-reasoning]");
    if (reasoning) {
      const id = reasoning.dataset.practiceReasoning;
      state.practiceReasoning[id] = enforceTextareaValueLimit(reasoning);
      state.practiceSubmitted[id] = false;
      state.practiceSamples[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const teachInput = event.target.closest("[data-teach-input]");
    if (teachInput) {
      const id = teachInput.dataset.teachInput;
      state.teachResponses[id] = enforceTextareaValueLimit(teachInput);
      state.teachSubmitted[id] = false;
      state.sourceModalItemId = null;
      return;
    }
    const input = event.target.closest("[data-practice-input]");
    if (!input) return;
    const id = input.dataset.practiceInput;
    state.practiceResponses[id] = enforceTextareaValueLimit(input);
    state.practiceSubmitted[id] = false;
    state.practiceSamples[id] = false;
    state.sourceModalItemId = null;
  });
  document.addEventListener("change", (event) => {
    const baseHeightInput = event.target.closest("[data-base-height-input]");
    if (baseHeightInput) {
      renderTeachMe();
      return;
    }
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
    const baseHeightHandle = event.target.closest?.("[data-base-height-handle]");
    if (baseHeightHandle && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      const card = teachCardById(baseHeightHandle.dataset.cardId);
      const question = card ? questionSetDefinition(card, baseHeightHandle.dataset.questionId) : null;
      if (!card || question?.dynamicAnswer !== "baseHeightChallenge") return;
      const shape = baseHeightChallengeShape(card, question);
      const handleId = baseHeightHandle.dataset.baseHeightHandle;
      const updates = {};
      if (handleId === "base" && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
        updates.base = clampNumber(shape.base + (event.key === "ArrowLeft" ? -1 : 1), 3, 8);
      } else if (handleId === "shape") {
        if (event.key === "ArrowLeft") updates.slant = clampNumber(shape.slant - 1, -3, 3);
        if (event.key === "ArrowRight") updates.slant = clampNumber(shape.slant + 1, -3, 3);
        if (event.key === "ArrowUp") updates.height = clampNumber(shape.height + 1, 2, 7);
        if (event.key === "ArrowDown") updates.height = clampNumber(shape.height - 1, 2, 7);
      } else if (handleId === "height-position" && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
        updates.heightPosition = clampNumber(
          Math.round((shape.heightPosition + (event.key === "ArrowLeft" ? -0.1 : 0.1)) * 10) / 10,
          0.1,
          0.9,
        );
      }
      if (Object.keys(updates).length > 0) {
        setBaseHeightChallengeValues(card, question, updates);
        event.preventDefault();
        renderTeachMe();
      }
      return;
    }
    const equalTilingCell = event.target.closest?.("[data-equal-tiling-cell]");
    if (equalTilingCell && (event.key === "Enter" || event.key === " ")) {
      placeEqualAreaTilingPiece(Number(equalTilingCell.dataset.column), Number(equalTilingCell.dataset.row));
      event.preventDefault();
      renderTeachMe();
      return;
    }
    const tilingPiece = event.target.closest?.("[data-tiling-piece]");
    if (tilingPiece && (event.key === "Enter" || event.key === " ")) {
      state.teachTilingSelectedPiece = tilingPiece.dataset.tilingPiece;
      event.preventDefault();
      renderTeachMe();
      return;
    }
    if (tilingPiece && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      const piece = getTilingPieces()[tilingPiece.dataset.tilingPiece];
      if (!piece) return;
      const distance = event.shiftKey ? 2 : 10;
      if (event.key === "ArrowLeft") piece.x -= distance;
      if (event.key === "ArrowRight") piece.x += distance;
      if (event.key === "ArrowUp") piece.y -= distance;
      if (event.key === "ArrowDown") piece.y += distance;
      piece.x = clampNumber(piece.x, 48, tilingPieceStage.width - 48);
      piece.y = clampNumber(piece.y, 48, tilingPieceStage.height - 62);
      state.teachTilingSelectedPiece = tilingPiece.dataset.tilingPiece;
      event.preventDefault();
      renderTeachMe();
      return;
    }
    const tangramPiece = event.target.closest?.("[data-tangram-piece]");
    if (tangramPiece && (event.key === "Enter" || event.key === " ")) {
      state.teachTangramSelectedPiece = tangramPiece.dataset.tangramPiece;
      event.preventDefault();
      renderTeachMe();
      return;
    }
    if (tangramPiece && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      const card = teachCardById(tangramPiece.closest("[data-teach-card]")?.dataset.teachCard);
      const questionId = tangramPiece.closest("[data-tangram-stage]")?.dataset.tangramQuestion || tangramWorkspaceQuestionId(card);
      const piece = card ? getTangramPieces(card, questionId)[tangramPiece.dataset.tangramPiece] : null;
      if (!card || !piece) return;
      const distance = event.shiftKey ? 2 : 10;
      if (event.key === "ArrowLeft") piece.x -= distance;
      if (event.key === "ArrowRight") piece.x += distance;
      if (event.key === "ArrowUp") piece.y -= distance;
      if (event.key === "ArrowDown") piece.y += distance;
      piece.x = clampNumber(piece.x, -30, tangramStage.width - 28);
      piece.y = clampNumber(piece.y, -30, tangramStage.height - 28);
      state.teachTangramSelectedPiece = tangramPiece.dataset.tangramPiece;
      markTangramWorkspaceChanged(card, questionId);
      event.preventDefault();
      renderTeachMe();
      return;
    }
    const gridTrianglePiece = event.target.closest?.("[data-grid-triangle-piece]");
    if (gridTrianglePiece && (event.key === "Enter" || event.key === " ")) {
      state.teachGridTriangleSelectedPiece = gridTrianglePiece.dataset.gridTrianglePiece;
      event.preventDefault();
      renderTeachMe();
      return;
    }
    if (gridTrianglePiece && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      const piece = getGridTriangleFitPieces()[gridTrianglePiece.dataset.gridTrianglePiece];
      if (!piece) return;
      const distance = event.shiftKey ? 2 : 10;
      if (event.key === "ArrowLeft") piece.x -= distance;
      if (event.key === "ArrowRight") piece.x += distance;
      if (event.key === "ArrowUp") piece.y -= distance;
      if (event.key === "ArrowDown") piece.y += distance;
      piece.x = clampNumber(piece.x, -100, gridTriangleFitStage.width - 25);
      piece.y = clampNumber(piece.y, -100, gridTriangleFitStage.height - 25);
      state.teachGridTriangleSelectedPiece = gridTrianglePiece.dataset.gridTrianglePiece;
      markGridTriangleFitChanged();
      event.preventDefault();
      renderTeachMe();
      return;
    }
    const pyramidPiece = event.target.closest?.("[data-pyramid-net-piece]");
    if (pyramidPiece && (event.key === "Enter" || event.key === " ")) {
      const card = teachCardById(pyramidPiece.closest("[data-teach-card]")?.dataset.teachCard);
      if (!card) return;
      const target = pyramidPiece.closest("[data-pyramid-net-stage]")?.dataset.pyramidNetStage || pyramidNetTargetId(card);
      setPyramidNetWorkspace(card, target, { selectedId: pyramidPiece.dataset.pyramidNetPiece });
      event.preventDefault();
      renderTeachMe();
      return;
    }
    if (pyramidPiece && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      const card = teachCardById(pyramidPiece.closest("[data-teach-card]")?.dataset.teachCard);
      const target = card
        ? pyramidPiece.closest("[data-pyramid-net-stage]")?.dataset.pyramidNetStage || pyramidNetTargetId(card)
        : "Q";
      const piece = card ? pyramidNetPieces(card, target).find((entry) => entry.id === pyramidPiece.dataset.pyramidNetPiece) : null;
      if (!card || !piece) return;
      const distance = event.shiftKey ? 2 : 10;
      if (event.key === "ArrowLeft") piece.x -= distance;
      if (event.key === "ArrowRight") piece.x += distance;
      if (event.key === "ArrowUp") piece.y -= distance;
      if (event.key === "ArrowDown") piece.y += distance;
      piece.x = clampNumber(piece.x, pyramidNetPieceMargin, pyramidNetBoard.width - pyramidNetPieceMargin);
      piece.y = clampNumber(piece.y, pyramidNetPieceMargin, pyramidNetBoard.height - pyramidNetPieceMargin);
      setPyramidNetWorkspace(card, target, { selectedId: piece.id });
      snapPyramidNetPiece(card, piece.id, target);
      markPyramidNetChanged(card, target);
      event.preventDefault();
      renderTeachMe();
      return;
    }
    const interactiveNetTarget = event.target.closest?.("[data-prism-net-face], [data-cube-net-cell], [data-labeled-cube-net-cell], [data-eight-cube-cell], [data-snap-cube-cell]");
    if (interactiveNetTarget && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      interactiveNetTarget.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      return;
    }
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
if (initialTeachLessonMatch) scrollToTeachLesson(initialTeachLesson);
