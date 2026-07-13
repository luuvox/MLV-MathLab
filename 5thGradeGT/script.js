const state = {
  view: "unit1",
  mode: "teach",
  areaUnit: "triangle",
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

const areaUnits = {
  triangle: {
    equation: "1 triangle unit = 1 triangle unit",
    message: "One triangle is the comparison unit. Every other area here is measured by how many of these congruent triangles it contains.",
    count: 1,
  },
  rhombus: {
    equation: "1 rhombus = 2 triangle units",
    message: "A rhombus can be decomposed into 2 congruent triangles, so one rhombus covers twice the area of the triangle unit.",
    count: 2,
  },
  trapezoid: {
    equation: "1 trapezoid = 3 triangle units",
    message: "A trapezoid can be decomposed into 3 triangle units. Piece count alone is misleading unless the pieces are equal-area pieces.",
    count: 3,
  },
  hexagon: {
    equation: "1 hexagon = 6 triangle units",
    message: "The hexagon uses 6 triangle units. Rearranging the pieces can change the shape without changing the area.",
    count: 6,
  },
};

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

function sourcePreviewUrl(item) {
  return encodeURI(`artifacts/unit 1/${item.previewPath}`);
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
  const item = practiceBank.find((entry) => entry.id === state.sourceModalItemId);
  if (!item || !canOpenPracticeSource(item)) return "";
  return `
    <div class="source-modal-backdrop" data-source-modal-backdrop>
      <section class="source-modal" style="${sourceModalStyle()}" role="dialog" aria-modal="true" aria-labelledby="sourceModalTitle">
        <div class="source-modal-header" data-source-drag-handle>
          <div>
            <p class="eyebrow">Rendered source</p>
            <h3 id="sourceModalTitle">Source p.${item.sourcePage}</h3>
            <p>${escapeHtml(item.source)}</p>
          </div>
          <button class="source-modal-close" type="button" data-source-close-button aria-label="Close source modal">Close</button>
        </div>
        <div class="source-modal-body">
          <img src="${sourcePreviewUrl(item)}" alt="Rendered source page for ${escapeHtml(item.skill)}">
        </div>
        <div class="source-modal-resize-handle" data-source-resize-handle role="separator" aria-label="Resize source modal" title="Resize source modal"></div>
      </section>
    </div>
  `;
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

function renderAreaModel() {
  const unit = areaUnits[state.areaUnit];
  const pieces = [];
  const points = [
    "210,34 170,102 250,102",
    "170,102 130,170 210,170",
    "250,102 210,170 290,170",
    "130,170 90,238 170,238",
    "210,170 170,238 250,238",
    "290,170 250,238 330,238",
  ];
  for (let index = 0; index < unit.count; index += 1) {
    pieces.push(`<polygon points="${points[index]}" class="shape-fill ${index % 2 ? "amber" : "teal"}"></polygon>`);
  }
  const label = `<text x="210" y="264" text-anchor="middle" class="measure-label">${unit.count} triangle unit${unit.count === 1 ? "" : "s"}</text>`;
  document.getElementById("areaModel").innerHTML = svg(`${pieces.join("")}${label}`);
  setText("areaEquation", unit.equation);
  setText("areaMessage", unit.message);
  updateActiveButtons("[data-area-unit]", state.areaUnit, "areaUnit");
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
  document.querySelectorAll("[data-area-unit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.areaUnit = button.dataset.areaUnit;
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
    document.getElementById(`parallelogram${name}`).addEventListener("input", (event) => {
      state[`parallelogram${name}`] = Number(event.target.value);
      renderParallelogramModel();
    });
  });
  [["prismLength", "prismLength"], ["prismWidth", "prismWidth"], ["prismHeight", "prismHeight"]].forEach(([id, key]) => {
    document.getElementById(id).addEventListener("input", (event) => {
      state[key] = Math.max(1, Number(event.target.value) || 1);
      renderSurfaceModel();
    });
  });
  document.getElementById("cubeEdge").addEventListener("input", (event) => {
    state.cubeEdge = Number(event.target.value);
    renderCubeModel();
  });
  document.getElementById("vocabularySearch").addEventListener("input", (event) => {
    state.vocabularySearch = event.target.value;
    renderVocabulary();
  });
  document.addEventListener("pointerdown", (event) => {
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
  document.addEventListener("pointermove", updateSourceModalPointer);
  document.addEventListener("pointerup", endSourceModalPointer);
  document.addEventListener("pointercancel", endSourceModalPointer);
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
    const sourceButton = event.target.closest("[data-source-modal]");
    if (sourceButton) {
      const item = practiceBank.find((entry) => entry.id === sourceButton.dataset.sourceModal);
      if (!item || !canOpenPracticeSource(item)) return;
      state.sourceModalItemId = item.id;
      renderPractice();
      document.querySelector("[data-source-close-button]")?.focus();
      return;
    }
    if (event.target.closest("[data-source-close-button]") || event.target.matches("[data-source-modal-backdrop]")) {
      state.sourceModalItemId = null;
      renderPractice();
      return;
    }
    const filterButton = event.target.closest("[data-practice-filter]");
    if (filterButton) {
      state.practiceFilter = filterButton.dataset.practiceFilter;
      state.sourceModalItemId = null;
      renderPractice();
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
    }
  });
  document.addEventListener("input", (event) => {
    const reasoning = event.target.closest("[data-practice-reasoning]");
    if (reasoning) {
      const id = reasoning.dataset.practiceReasoning;
      state.practiceReasoning[id] = reasoning.value;
      state.practiceSubmitted[id] = false;
      state.practiceSamples[id] = false;
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
    renderPractice();
  });
  window.addEventListener("resize", () => {
    if (!state.sourceModalItemId || !state.sourceModalLayout) return;
    state.sourceModalLayout = normalizeSourceModalLayout();
    applySourceModalLayout();
  });
}

function renderAll() {
  renderAreaModel();
  renderParallelogramModel();
  renderTriangleModel();
  renderPolygonModel();
  renderSurfaceModel();
  renderCubeModel();
  renderTentModel();
  renderView();
}

bindEvents();
renderAll();
