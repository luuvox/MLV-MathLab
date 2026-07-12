const state = {
  growthCount: 1,
  previousGrowthCount: 1,
  addAmount: 1,
  resetTarget: 1,
  lastGrowthAction: "start",
  lastGrowthAmount: 0,
  growthAnimation: null,
  recentRegroupTensCount: null,
  leftForm: "1",
  pizzaForm: "0.1",
  equivalenceKey: "twoTenths",
  equivalenceAmount: "0.2",
  equivalenceHighlight: "",
  operation: "compare",
  helpers: false,
  showRolloverBar: true,
  topic: "volume",
  mode: "teach",
  unitFocus: "all",
  vocabularySearch: "",
  vocabularyFilter: "all",
  practiceAnswers: {},
  practiceHints: {},
  practicePlanning: {},
  practiceAttempts: {},
  practiceModels: {},
  practiceFilters: {},
  practiceParts: {},
  practiceOpenPicker: "",
  fractionWholeParts: 4,
  fractionNumerator: 3,
  fractionDenominator: 4,
  fractionMeaningHighlight: "numerator",
  equivalentFractionKey: "half",
  equivalentMultiplier: 2,
  fractionDivisionKey: "threeByFour",
  sharingPresetKey: "3/4",
  sharingTotal: 3,
  sharingGroups: 4,
  mixedSharingKey: "5/2",
  unitFractionOfKey: "oneThirdOf6",
  nonUnitFractionOfKey: "twoThirdsOf6",
  multiplyPathKey: "twoThirdsOf6",
  expressionMatchKey: "twoThirdsOf6",
  expressionMatchFocus: "fraction",
  fractionAreaKey: "sixByTwoThirds",
  greaterAreaKey: "fourByFiveThirds",
  mixedAreaKey: "twoByThreeTwoFifths",
  estimateAreaKey: "sixByTwoThirds",
  fractionOverlapKey: "oneThirdByOneFourth",
  fractionOverlapFocus: "product",
  unitFractionDivisionKey: "oneThirdByFour",
  wholeUnitDivisionKey: "fourByOneThird",
  fractionStoryKey: "milkWhole",
  fractionLineKey: "oneFourth",
  fractionCompareKey: "halfVsThreeEighths",
  fractionCalcKey: "halfPlusQuarter",
  fractionPackNumerator: 5,
  fractionPackDenominator: 4,
  fractionPackPreset: "5/4",
  coordinateX: 4,
  coordinateY: 6,
  coordinatePreset: "4,6",
  unit7ShapeKey: "square",
  unit7CoordinateShapeKey: "rectangle",
  unit7HierarchyKey: "square",
  unit7StatementKey: "rectangleSquare",
  unit7PatternKey: "add4Add6",
  unit7PatternStep: 3,
  unit7PatternContextKey: "coins",
  unit6PlaceDigit: "6",
  unit6PowerExponent: 1,
  unit6MoveKey: "times10",
  unit6ConversionKey: "metersToCentimeters",
  unit6PredictKey: "metersToCentimeters",
  unit6RegroupKey: "twoOneFourthMinusThreeFourths",
  unit6LinePlotKey: "ribbonsTotal",
  unit6ScaleKey: "halfOf8",
  unit6CustomaryKey: "feetToInches",
  unit6MultiStepKey: "runner",
  unit6ConversionTableKey: "length",
  unit6FractionStoryKey: "recipe",
  unit6StrategyKey: "add",
  unit6MixedOperationKey: "add",
  unit6LineBuildKey: "ribbons",
  unit6LineMissingKey: "missingRibbon",
  unit6ScaleLineKey: "half",
  unit1CubeKey: "face",
  unit1Length: 4,
  unit1Width: 3,
  unit1Height: 2,
  unit1LayerKey: "twoByThreeByFour",
  unit1ExpressionKey: "dimensions",
  unit1MissingKey: "height",
  unit1CompositeKey: "lShape",
  unit4AreaKey: "twentyThreeByEighteen",
  unit4AlgorithmKey: "twentyThreeByEighteen",
  unit4DigitKey: "largest",
  unit4QuotientKey: "sixHundredEight",
  unit4PathKey: "sixHundredEight",
  unit4RemainderKey: "noodle",
  unit4ApplicationKey: "area",
  unit8ComputationKey: "largestProduct",
  unit8VolumeKey: "cubes126",
  unit8FractionGameKey: "sum",
  unit8DecimalKey: "raceOne",
  unit8ProductKey: "greatest",
  unit8RoutineKey: "notice"
};

const rolloverTimeline = {
  fillStart: 0.14,
  moveStart: 0.32,
  moveEnd: 0.82,
  finalStart: 0.88,
  durationMs: 5200,
  showEmptyOnesAfterMove: 0.68
};

const borrowTimeline = {
  prepStart: 0.12,
  moveStart: 0.24,
  moveEnd: 0.58,
  crossStart: 0.7,
  fadeStart: 0.82,
  finalStart: 0.94,
  durationMs: 7600,
  hideOnesPlateAfterMove: 0.68
};

const stepTimeline = {
  finalStart: 0.94,
  durationMs: 4200,
  subtractCookieLeavesOnesAt: 0.58
};

let rolloverFrameId = null;
let rolloverLastFrameTime = null;
let growthRenderCache = {};
let activePracticeOrderDrag = null;
let sourcePreviewReturnFocus = null;

const decimalPlaceClasses = ["tenth", "hundredth", "thousandth"];

const topicTitles = {
  volume: "Volume",
  fractionFoundations: "Fraction Foundations",
  multiplyingFractions: "Multiplying Fractions",
  dividingFractions: "Dividing Fractions",
  fractionWordProblems: "Fraction Word Problems",
  multiDigit: "Multi-Digit Multiplication & Division",
  decimals: "Decimals",
  decimalOperations: "Decimal Operations",
  expressionsPowers: "Expressions & Powers of Ten",
  addSubtractFractions: "Add & Subtract Fractions",
  coordinateGeometry: "Coordinate Plane & Geometry",
  mixedReview: "Mixed Review",
  vocabulary: "Vocabulary"
};

const unitFocusLabels = {
  all: "All Units",
  unit1: "Unit 1: Finding Volume",
  unit2: "Unit 2: Fractions as Quotients and Fraction Multiplication",
  unit3: "Unit 3: Multiplying and Dividing Fractions",
  unit4: "Unit 4: Wrapping Up Multiplication and Division",
  unit5: "Unit 5: Place Value Patterns and Decimal Operations",
  unit6: "Unit 6: More Decimal and Fraction Computation",
  unit7: "Unit 7: Shapes on the Coordinate Plane",
  unit8: "Unit 8: Putting It All Together"
};

const topicUnits = {
  volume: ["unit1", "unit4", "unit8"],
  fractionFoundations: ["unit2"],
  multiplyingFractions: ["unit2", "unit3", "unit6", "unit8"],
  dividingFractions: ["unit3"],
  fractionWordProblems: ["unit3", "unit6"],
  multiDigit: ["unit1", "unit4", "unit8"],
  decimals: ["unit5"],
  decimalOperations: ["unit5", "unit8"],
  expressionsPowers: ["unit5", "unit6"],
  addSubtractFractions: ["unit6", "unit8"],
  coordinateGeometry: ["unit7"],
  mixedReview: ["unit4", "unit5", "unit6", "unit7", "unit8"],
  vocabulary: ["unit1", "unit2", "unit3", "unit4", "unit5", "unit6", "unit7", "unit8"]
};

const unitFocusPrimaryTopic = {
  unit1: "volume",
  unit2: "fractionFoundations",
  unit3: "multiplyingFractions",
  unit4: "multiDigit",
  unit5: "decimals",
  unit6: "expressionsPowers",
  unit7: "coordinateGeometry",
  unit8: "multiDigit"
};

const unit6PathTopics = [
  "expressionsPowers",
  "addSubtractFractions",
  "fractionWordProblems",
  "multiplyingFractions",
  "mixedReview"
];

const vocabularyTagLabels = {
  unit1: "Unit 1",
  unit6: "Unit 6",
  unit2: "Unit 2",
  unit3: "Unit 3",
  unit4: "Unit 4",
  unit5: "Unit 5",
  fractions: "Fractions",
  division: "Division",
  multiplication: "Multiplication",
  area: "Area Models",
  models: "Visual Models",
  wordProblems: "Word Problems",
  estimation: "Estimation",
  unit7: "Unit 7",
  unit8: "Unit 8",
  geometry: "Geometry",
  coordinate: "Coordinate Plane",
  shapes: "Shapes",
  patterns: "Patterns",
  measurement: "Measurement",
  data: "Data",
  powers: "Powers of Ten",
  decimals: "Decimals",
  scaling: "Scaling"
};

const vocabularyTerms = [
  {
    term: "Volume",
    tags: ["unit1", "unit8", "measurement"],
    seenIn: ["Volume"],
    definition: "The amount of space a solid figure fills. Volume is measured with cubic units.",
    example: "A prism with 4 cubes in each layer and 3 layers has volume 12 cubic units.",
    visual: "space filled"
  },
  {
    term: "Unit Cube",
    tags: ["unit1", "unit8", "measurement", "models"],
    seenIn: ["Volume"],
    definition: "A cube with side lengths of 1 unit used to measure volume.",
    example: "A rectangular prism can be packed with unit cubes, then counted.",
    visual: "1 x 1 x 1"
  },
  {
    term: "Cubic Unit",
    tags: ["unit1", "unit8", "measurement", "models"],
    seenIn: ["Volume"],
    definition: "A unit for volume, such as cubic inches or cubic centimeters.",
    example: "A box that holds 24 unit cubes has volume 24 cubic units.",
    visual: "units³"
  },
  {
    term: "Rectangular Prism",
    tags: ["unit1", "unit8", "geometry", "measurement", "models"],
    seenIn: ["Volume"],
    definition: "A solid figure shaped like a box, with rectangular faces.",
    example: "A cereal box can be modeled as a rectangular prism.",
    visual: "box"
  },
  {
    term: "Layer",
    tags: ["unit1", "models", "multiplication"],
    seenIn: ["Volume"],
    definition: "One flat level of unit cubes inside a prism.",
    example: "If one layer has 12 cubes and there are 3 layers, the volume is 36 cubic units.",
    visual: "one level"
  },
  {
    term: "Base Area",
    tags: ["unit1", "measurement", "multiplication"],
    seenIn: ["Volume"],
    definition: "The number of square units in one base layer of a prism.",
    example: "A 4 by 3 base has base area 12, so 2 layers make 24 cubic units.",
    visual: "length x width"
  },
  {
    term: "Composed Figure",
    tags: ["unit1", "geometry", "measurement"],
    seenIn: ["Volume"],
    definition: "A figure made by joining smaller figures together.",
    example: "An L-shaped solid can be split into two rectangular prisms.",
    visual: "part + part"
  },
  {
    term: "Decompose",
    tags: ["unit1", "geometry", "models"],
    seenIn: ["Volume"],
    definition: "To split a figure into smaller pieces that are easier to measure.",
    example: "Decompose a composed solid into two prisms, find each volume, then add.",
    visual: "split"
  },
  {
    term: "Fraction",
    tags: ["unit2", "fractions"],
    seenIn: ["Fraction Foundations"],
    definition: "A number that names equal pieces of one whole or the size of one fair share.",
    example: "3 sandwiches shared by 4 students gives each student 3/4 of a sandwich.",
    visual: fractionHTML("3", "4")
  },
  {
    term: "Numerator",
    tags: ["unit2", "fractions"],
    seenIn: ["Fraction Foundations"],
    definition: "The top number in a fraction. It counts how many equal pieces or shares we have.",
    example: "In 5/8, the numerator is 5.",
    visual: fractionHTML("5", "8")
  },
  {
    term: "Denominator",
    tags: ["unit2", "fractions"],
    seenIn: ["Fraction Foundations"],
    definition: "The bottom number in a fraction. It tells how many equal pieces make one whole.",
    example: "In 5/8, the denominator is 8, so eighths are the size of the pieces.",
    visual: fractionHTML("5", "8")
  },
  {
    term: "Equal Shares",
    tags: ["unit2", "fractions", "division"],
    seenIn: ["Fraction Foundations"],
    definition: "Parts that are the same size, so each person or group gets a fair amount.",
    example: "4 brownies shared by 3 people means each person gets the same-size share.",
    visual: "same size"
  },
  {
    term: "Quotient",
    tags: ["unit2", "unit4", "unit5", "division", "fractions", "decimals"],
    seenIn: ["Fraction Foundations", "Multi-Digit Multiplication & Division", "Decimal Operations"],
    definition: "The answer to a division problem. Sometimes the quotient is a fraction.",
    example: `3 ÷ 4 = ${fractionHTML("3", "4")}`,
    visual: "answer"
  },
  {
    term: "Dividend",
    tags: ["unit2", "unit4", "division"],
    seenIn: ["Fraction Foundations", "Multi-Digit Multiplication & Division"],
    definition: "The amount being divided or shared.",
    example: "In 3 ÷ 4, the dividend is 3 because 3 wholes are being shared.",
    visual: "3 ÷ 4"
  },
  {
    term: "Divisor",
    tags: ["unit2", "unit4", "division"],
    seenIn: ["Fraction Foundations", "Multi-Digit Multiplication & Division"],
    definition: "The number of equal groups or shares in a division problem.",
    example: "In 3 ÷ 4, the divisor is 4 because the amount is shared 4 ways.",
    visual: "3 ÷ 4"
  },
  {
    term: "Partial Product",
    tags: ["unit4", "multiplication", "models"],
    seenIn: ["Multi-Digit Multiplication & Division"],
    definition: "One smaller product that comes from splitting a larger multiplication problem by place value.",
    example: "For 23 x 18, 20 x 10 and 3 x 8 are partial products.",
    visual: "area pieces"
  },
  {
    term: "Standard Algorithm",
    tags: ["unit4", "multiplication", "division"],
    seenIn: ["Multi-Digit Multiplication & Division"],
    definition: "A compact written method that keeps place-value steps organized while multiplying or dividing.",
    example: "In multiplication, each row still represents a place-value product.",
    visual: "compact steps"
  },
  {
    term: "Remainder",
    tags: ["unit4", "division", "wordProblems"],
    seenIn: ["Multi-Digit Multiplication & Division"],
    definition: "The amount left after making as many equal groups as possible.",
    example: "101 ÷ 10 is 10 remainder 1 because 1 is left after 10 full groups.",
    visual: "left over"
  },
  {
    term: "Unit Fraction",
    tags: ["unit2", "fractions", "multiplication"],
    seenIn: ["Multiplying Fractions"],
    definition: "A fraction with numerator 1. It names one equal piece of a whole.",
    example: "1/3 of 6 means split 6 into 3 equal groups and take 1 group.",
    visual: fractionHTML("1", "3")
  },
  {
    term: "Non-Unit Fraction",
    tags: ["unit2", "fractions", "multiplication"],
    seenIn: ["Multiplying Fractions"],
    definition: "A fraction with a numerator greater than 1. It names more than one equal piece.",
    example: "2/3 of 6 means take 2 of the 3 equal groups.",
    visual: fractionHTML("2", "3")
  },
  {
    term: "Improper Fraction",
    tags: ["unit2", "fractions"],
    seenIn: ["Fraction Foundations"],
    definition: "A fraction whose numerator is greater than or equal to its denominator.",
    example: "7/4 is more than 1 whole because 4/4 already makes 1 whole.",
    visual: fractionHTML("7", "4")
  },
  {
    term: "Mixed Number",
    tags: ["unit2", "unit6", "fractions"],
    seenIn: ["Fraction Foundations", "Multiplying Fractions", "Add & Subtract Fractions"],
    definition: "A whole number plus a fraction.",
    example: `7/4 can be renamed as 1 ${fractionHTML("3", "4")}.`,
    visual: `1 ${fractionHTML("3", "4")}`
  },
  {
    term: "Equivalent Fractions",
    tags: ["unit2", "unit6", "fractions"],
    seenIn: ["Fraction Foundations", "Add & Subtract Fractions"],
    definition: "Different fraction names for the same amount.",
    example: `1/2 and 2/4 are equivalent because they cover the same part of the same whole.`,
    visual: `${fractionHTML("1", "2")} = ${fractionHTML("2", "4")}`
  },
  {
    term: "Decimal",
    tags: ["unit5", "decimals"],
    seenIn: ["Decimals", "Decimal Operations"],
    definition: "A number written with a decimal point to show whole-number places and smaller-than-one places.",
    example: "3.125 has 3 ones, 1 tenth, 2 hundredths, and 5 thousandths.",
    visual: decimalHTML("3.125")
  },
  {
    term: "Decimal Point",
    tags: ["unit5", "decimals"],
    seenIn: ["Decimals", "Decimal Operations"],
    definition: "The point that separates the ones place from tenths, hundredths, and thousandths.",
    example: "In 4.08, the decimal point sits between 4 ones and 8 hundredths.",
    visual: decimalHTML("4.08")
  },
  {
    term: "Tenth",
    tags: ["unit5", "decimals", "fractions"],
    seenIn: ["Decimals"],
    definition: "One of 10 equal parts of a whole.",
    example: "0.1 is the same amount as 1/10.",
    visual: `${decimalHTML("0.1")} = ${fractionHTML("1", "10")}`
  },
  {
    term: "Hundredth",
    tags: ["unit5", "decimals", "fractions"],
    seenIn: ["Decimals"],
    definition: "One of 100 equal parts of a whole.",
    example: "0.25 is 25 hundredths, or 25/100.",
    visual: `${decimalHTML("0.25")} = ${fractionHTML("25", "100")}`
  },
  {
    term: "Thousandth",
    tags: ["unit5", "decimals", "fractions"],
    seenIn: ["Decimals"],
    definition: "One of 1,000 equal parts of a whole.",
    example: "0.008 is 8 thousandths.",
    visual: `${decimalHTML("0.008")} = ${fractionHTML("8", "1000")}`
  },
  {
    term: "Expanded Form",
    tags: ["unit5", "decimals", "powers"],
    seenIn: ["Decimals"],
    definition: "A way to write a number as the sum of the values of its digits.",
    example: "3.125 = 3 + 0.1 + 0.02 + 0.005.",
    visual: "3 + 0.1 + 0.02 + 0.005"
  },
  {
    term: "Benchmark",
    tags: ["unit5", "decimals", "estimation"],
    seenIn: ["Decimals"],
    definition: "A nearby familiar number used to compare, order, or round.",
    example: "To round 0.72 to the nearest tenth, compare it to 0.7 and 0.8.",
    visual: "0.7 | 0.72 | 0.8"
  },
  {
    term: "Sum",
    tags: ["unit5", "decimals"],
    seenIn: ["Decimal Operations"],
    definition: "The answer to an addition problem.",
    example: "0.4 + 0.35 has a sum of 0.75.",
    visual: "addition answer"
  },
  {
    term: "Difference",
    tags: ["unit5", "decimals"],
    seenIn: ["Decimal Operations"],
    definition: "The answer to a subtraction problem.",
    example: "1.5 - 0.25 has a difference of 1.25.",
    visual: "subtraction answer"
  },
  {
    term: "Common Denominator",
    tags: ["unit6", "fractions"],
    seenIn: ["Add & Subtract Fractions"],
    definition: "A denominator shared by two or more fractions, so the pieces are the same size.",
    example: `1/2 + 1/4 can be renamed as 2/4 + 1/4 because fourths are common pieces.`,
    visual: `${fractionHTML("2", "4")} + ${fractionHTML("1", "4")}`
  },
  {
    term: "Power of 10",
    tags: ["unit5", "unit6", "powers", "decimals"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "A number made by multiplying by 10 repeatedly.",
    example: "10^3 means 10 x 10 x 10, which is 1,000.",
    visual: "10^3"
  },
  {
    term: "Exponent",
    tags: ["unit6", "powers"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "A small raised number that tells how many times a factor is used.",
    example: "In 10^4, the exponent 4 tells us there are four factors of 10.",
    visual: "10^4"
  },
  {
    term: "Conversion",
    tags: ["unit6", "measurement"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "Renaming a measurement using a different unit without changing the actual amount.",
    example: "3.5 meters is the same length as 350 centimeters.",
    visual: "m -> cm"
  },
  {
    term: "Conversion Factor",
    tags: ["unit6", "measurement"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "The relationship number used to rename one unit as another unit.",
    example: "For feet to inches, the conversion factor is 12 because 1 foot = 12 inches.",
    visual: "1 ft = 12 in"
  },
  {
    term: "Metric System",
    tags: ["unit6", "measurement", "powers"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "A measurement system where many unit relationships use powers of 10.",
    example: "1 meter = 100 centimeters and 1 kilometer = 1,000 meters.",
    visual: "km m cm"
  },
  {
    term: "Customary Unit",
    tags: ["unit6", "measurement"],
    seenIn: ["Expressions & Powers of Ten"],
    definition: "A measurement unit such as inch, foot, yard, cup, pint, quart, or gallon.",
    example: "1 yard = 3 feet and 1 quart = 4 cups.",
    visual: "ft yd qt"
  },
  {
    term: "Benchmark Fraction",
    tags: ["unit6", "fractions", "estimation"],
    seenIn: ["Add & Subtract Fractions"],
    definition: "A familiar fraction such as 0, 1/2, or 1 used to check whether an answer is reasonable.",
    example: "5/6 - 1/4 should be a little more than 1/2.",
    visual: `${fractionHTML("1", "2")}`
  },
  {
    term: "Line Plot",
    tags: ["unit6", "fractions", "data"],
    seenIn: ["Fraction Word Problems"],
    definition: "A number line that uses marks, often Xs, to show how many data values are at each measurement.",
    example: "Three X marks above 1/2 means three measurements are 1/2.",
    visual: "X X X"
  },
  {
    term: "Scale Factor",
    tags: ["unit6", "multiplication", "scaling"],
    seenIn: ["Multiplying Fractions"],
    definition: "A number that resizes an amount by multiplying.",
    example: "A scale factor of 1/2 makes 8 shrink to 4.",
    visual: `${fractionHTML("1", "2")} x 8`
  },
  {
    term: "Product Comparison",
    tags: ["unit6", "multiplication", "scaling", "estimation"],
    seenIn: ["Multiplying Fractions"],
    definition: "Reasoning about whether a product is smaller, the same, or larger before calculating exactly.",
    example: "7/6 x 12 is greater than 12 because 7/6 is greater than 1.",
    visual: `${fractionHTML("7", "6")} x 12`
  },
  {
    term: "Factor",
    tags: ["unit2", "unit5", "unit6", "multiplication", "scaling", "decimals"],
    seenIn: ["Multiplying Fractions", "Decimal Operations"],
    definition: "A number being multiplied.",
    example: "In 6 x 2/3, both 6 and 2/3 are factors.",
    visual: `6 x ${fractionHTML("2", "3")}`
  },
  {
    term: "Product",
    tags: ["unit2", "unit5", "unit6", "multiplication", "scaling", "decimals"],
    seenIn: ["Multiplying Fractions", "Decimal Operations"],
    definition: "The answer to a multiplication problem.",
    example: `The product of 6 x 2/3 is 4.`,
    visual: "answer"
  },
  {
    term: "Expression",
    tags: ["unit2", "multiplication"],
    seenIn: ["Multiplying Fractions"],
    definition: "A math phrase without an equals sign.",
    example: "6 x 2/3 is an expression.",
    visual: `6 x ${fractionHTML("2", "3")}`
  },
  {
    term: "Equation",
    tags: ["unit2", "multiplication", "division"],
    seenIn: ["Fraction Foundations", "Multiplying Fractions"],
    definition: "A math sentence with an equals sign showing two amounts are the same.",
    example: "6 x 2/3 = 4 is an equation.",
    visual: `6 x ${fractionHTML("2", "3")} = 4`
  },
  {
    term: "Area",
    tags: ["unit2", "area", "multiplication"],
    seenIn: ["Multiplying Fractions"],
    definition: "The amount of flat space inside a shape, measured in square units.",
    example: "A rectangle that is 6 units by 2/3 unit has area 4 square units.",
    visual: "square units"
  },
  {
    term: "Side Length",
    tags: ["unit2", "area", "multiplication"],
    seenIn: ["Multiplying Fractions"],
    definition: "The length of one side of a shape.",
    example: "In a rectangle, the two side lengths can be multiplied to find area.",
    visual: "length"
  },
  {
    term: "Decompose",
    tags: ["unit2", "fractions", "multiplication", "area"],
    seenIn: ["Multiplying Fractions"],
    definition: "To break a number or shape into useful pieces.",
    example: "2 3/5 can be decomposed into 2 + 3/5 before multiplying.",
    visual: `2 + ${fractionHTML("3", "5")}`
  },
  {
    term: "Estimate",
    tags: ["unit2", "unit5", "unit6", "multiplication", "area", "estimation", "scaling", "decimals"],
    seenIn: ["Multiplying Fractions", "Decimal Operations", "Decimals"],
    definition: "A reasonable answer you can think about before doing exact calculation.",
    example: "6 x 2/3 should be less than 6 because 2/3 is less than 1.",
    visual: "about"
  },
  {
    term: "Fraction of a Fraction",
    tags: ["unit3", "fractions", "multiplication", "area"],
    seenIn: ["Multiplying Fractions"],
    definition: "Taking a fraction of a part that is already a fraction of the whole.",
    example: `1/4 of 1/3 is ${fractionHTML("1", "4")} x ${fractionHTML("1", "3")} = ${fractionHTML("1", "12")}.`,
    visual: `${fractionHTML("1", "4")} x ${fractionHTML("1", "3")}`
  },
  {
    term: "Overlap",
    tags: ["unit3", "fractions", "multiplication", "area", "models"],
    seenIn: ["Multiplying Fractions"],
    definition: "The part of a model where two selected fractions cover the same space.",
    example: "In an area model, the overlap is the product of the two fractions.",
    visual: "shared part"
  },
  {
    term: "Area Model",
    tags: ["unit3", "multiplication", "area", "models"],
    seenIn: ["Multiplying Fractions"],
    definition: "A rectangle or grid used to show multiplication by rows, columns, and shaded area.",
    example: `A 4 by 5 grid can show ${fractionHTML("2", "4")} x ${fractionHTML("3", "5")} = ${fractionHTML("6", "20")}.`,
    visual: "grid"
  },
  {
    term: "Tape Diagram",
    tags: ["unit3", "fractions", "division", "models"],
    seenIn: ["Dividing Fractions", "Fraction Word Problems"],
    definition: "A strip diagram that shows a whole amount and how it is split or counted.",
    example: `A tape can show ${fractionHTML("1", "3")} ÷ 4 by splitting one third into 4 equal pieces.`,
    visual: "strip"
  },
  {
    term: "Sharing Division",
    tags: ["unit3", "division", "wordProblems"],
    seenIn: ["Dividing Fractions", "Fraction Word Problems"],
    definition: "Division that asks how much is in each equal share.",
    example: `If ${fractionHTML("1", "2")} pound of potato salad is shared by 4 people, each person gets ${fractionHTML("1", "8")} pound.`,
    visual: "share size"
  },
  {
    term: "Measurement Division",
    tags: ["unit3", "division", "wordProblems"],
    seenIn: ["Dividing Fractions", "Fraction Word Problems"],
    definition: "Division that asks how many groups of a given size fit in an amount.",
    example: `4 ÷ ${fractionHTML("1", "3")} asks how many thirds fit in 4 wholes.`,
    visual: "how many fit"
  },
  {
    term: "Unknown Whole",
    tags: ["unit3", "fractions", "wordProblems"],
    seenIn: ["Fraction Word Problems"],
    definition: "A word-problem situation where a fraction of the whole is known, but the whole amount is missing.",
    example: `If 2 cups is ${fractionHTML("1", "3")} of a container, the whole container is 6 cups.`,
    visual: "find 1"
  },
  {
    term: "Coordinate Plane",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A numbered grid used to locate points exactly.",
    example: "The point (4, 6) is 4 units right and 6 units up from the origin.",
    visual: "(x, y)"
  },
  {
    term: "Coordinate Grid",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A grid with numbered axes that lets people name exact point locations.",
    example: "On a coordinate grid, (2, 8) names one exact intersection.",
    visual: "grid"
  },
  {
    term: "Coordinate",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "One number in an ordered pair that tells a point's horizontal or vertical position.",
    example: "In (7, 2), 7 is the x-coordinate and 2 is the y-coordinate.",
    visual: "position"
  },
  {
    term: "Origin",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "The point (0, 0) where the horizontal and vertical axes meet.",
    example: "Every ordered-pair trip starts at the origin.",
    visual: "(0, 0)"
  },
  {
    term: "Ordered Pair",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Two coordinates written in order, usually (x, y), to name a point.",
    example: "In (7, 2), 7 is the x-coordinate and 2 is the y-coordinate.",
    visual: "(7, 2)"
  },
  {
    term: "x-axis",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "The horizontal axis on a coordinate grid.",
    example: "A point with y-coordinate 0 is on the x-axis.",
    visual: "horizontal"
  },
  {
    term: "y-axis",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "The vertical axis on a coordinate grid.",
    example: "A point with x-coordinate 0 is on the y-axis.",
    visual: "vertical"
  },
  {
    term: "First Quadrant",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "The part of the coordinate plane where x and y coordinates are zero or positive.",
    example: "Grade 5 coordinate grids usually use the first quadrant.",
    visual: "positive x, positive y"
  },
  {
    term: "Horizontal",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Going left and right, like the x-axis.",
    example: "Points with the same y-coordinate are on a horizontal line.",
    visual: "left-right"
  },
  {
    term: "Vertical",
    tags: ["unit7", "coordinate", "geometry"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Going up and down, like the y-axis.",
    example: "Points with the same x-coordinate are on a vertical line.",
    visual: "up-down"
  },
  {
    term: "Parallel",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Lines or sides that stay the same distance apart and do not meet.",
    example: "Opposite sides of a rectangle are parallel.",
    visual: "same direction"
  },
  {
    term: "Perpendicular",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Lines or sides that meet to make a right angle.",
    example: "The x-axis and y-axis are perpendicular.",
    visual: "right angle"
  },
  {
    term: "Attribute",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A property used to describe or sort a shape.",
    example: "Right angles, parallel sides, and equal side lengths are attributes.",
    visual: "property"
  },
  {
    term: "Quadrilateral",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A polygon with 4 sides.",
    example: "Squares, rectangles, rhombuses, parallelograms, and trapezoids are quadrilaterals.",
    visual: "4 sides"
  },
  {
    term: "Trapezoid",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "In this curriculum, a quadrilateral with at least one pair of opposite sides parallel.",
    example: "A parallelogram counts as a trapezoid because it has at least one pair of parallel sides.",
    visual: "parallel pair"
  },
  {
    term: "Parallelogram",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A quadrilateral with 2 pairs of opposite sides parallel.",
    example: "Rectangles, rhombuses, and squares are all parallelograms.",
    visual: "2 parallel pairs"
  },
  {
    term: "Rectangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A quadrilateral with 4 right angles.",
    example: "A square is a rectangle because it has 4 right angles.",
    visual: "4 right angles"
  },
  {
    term: "Rhombus",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A quadrilateral with 4 equal side lengths.",
    example: "A square is a rhombus with 4 right angles.",
    visual: "4 equal sides"
  },
  {
    term: "Square",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A quadrilateral with 4 equal side lengths and 4 right angles.",
    example: "A square is both a rectangle and a rhombus.",
    visual: "equal + right"
  },
  {
    term: "Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A polygon with 3 sides.",
    example: "Triangles can be sorted by angle type and side-length type.",
    visual: "3 sides"
  },
  {
    term: "Right Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle with one right angle.",
    example: "A right triangle can be scalene or isosceles.",
    visual: "90 degrees"
  },
  {
    term: "Acute Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle where all three angles are acute.",
    example: "An equilateral triangle is also acute.",
    visual: "all acute"
  },
  {
    term: "Obtuse Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle with one obtuse angle.",
    example: "An obtuse triangle has one angle larger than a right angle.",
    visual: "wide angle"
  },
  {
    term: "Scalene Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle with no equal side lengths.",
    example: "A right triangle can be scalene if all its sides have different lengths.",
    visual: "no equal sides"
  },
  {
    term: "Isosceles Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle with at least two equal side lengths.",
    example: "Some right triangles are isosceles.",
    visual: "2 equal sides"
  },
  {
    term: "Equilateral Triangle",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A triangle with 3 equal side lengths.",
    example: "An equilateral triangle is also isosceles.",
    visual: "3 equal sides"
  },
  {
    term: "Hierarchy",
    tags: ["unit7", "geometry", "shapes"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A way to organize categories so broader groups contain more specific groups.",
    example: "Squares are inside both rectangles and rhombuses in the quadrilateral hierarchy.",
    visual: "families"
  },
  {
    term: "Corresponding Terms",
    tags: ["unit7", "patterns", "coordinate"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "Numbers in the same position in two patterns.",
    example: "If one rule gives 12 and the other gives 18 in the same column, (12, 18) is an ordered pair.",
    visual: "same column"
  },
  {
    term: "Numerical Pattern",
    tags: ["unit7", "patterns", "coordinate"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "A list of numbers made by following a rule.",
    example: "Start at 0 and add 4 gives 0, 4, 8, 12, ...",
    visual: "rule list"
  },
  {
    term: "Rule",
    tags: ["unit7", "patterns", "coordinate"],
    seenIn: ["Coordinate Plane & Geometry"],
    definition: "An instruction for making a pattern or matching input values to output values.",
    example: "A rule like add 6 can generate a column of table values.",
    visual: "start + add"
  },
  {
    term: "Partial Quotients",
    tags: ["unit4", "unit8", "division"],
    seenIn: ["Multi-Digit Multiplication & Division"],
    definition: "A division strategy that subtracts useful chunks of the divisor and adds those chunks to get the quotient.",
    example: "For 2,516 ÷ 37, subtracting 37 x 60 and then 37 x 8 gives a quotient of 68.",
    visual: "chunks"
  },
  {
    term: "Instructional Routine",
    tags: ["unit8", "models"],
    seenIn: ["Mixed Review"],
    definition: "A repeated activity structure, such as Notice and Wonder or Which One Doesn't Belong, used to focus thinking.",
    example: "A Number Talk routine sequences expressions so one expression helps with the next.",
    visual: "routine card"
  }
];

const unit6PlaceNames = [
  { key: "thousands", label: "1,000s", value: 1000 },
  { key: "hundreds", label: "100s", value: 100 },
  { key: "tens", label: "10s", value: 10 },
  { key: "ones", label: "1s", value: 1 },
  { key: "tenths", label: "0.1s", value: 0.1 },
  { key: "hundredths", label: "0.01s", value: 0.01 },
  { key: "thousandths", label: "0.001s", value: 0.001 }
];

const unit6MoveData = {
  times10: {
    expression: "3.42 x 10",
    result: "34.2",
    startDigits: { ones: "3", tenths: "4", hundredths: "2" },
    endDigits: { tens: "3", ones: "4", tenths: "2" },
    direction: "left",
    message: "Multiplying by 10 moves every digit one place left, so each digit is worth 10 times as much."
  },
  times100: {
    expression: "3.42 x 100",
    result: "342",
    startDigits: { ones: "3", tenths: "4", hundredths: "2" },
    endDigits: { hundreds: "3", tens: "4", ones: "2" },
    direction: "left",
    message: "Multiplying by 100 is two moves left because 100 is 10 x 10."
  },
  divide10: {
    expression: "3.42 ÷ 10",
    result: "0.342",
    startDigits: { ones: "3", tenths: "4", hundredths: "2" },
    endDigits: { tenths: "3", hundredths: "4", thousandths: "2" },
    direction: "right",
    message: "Dividing by 10 moves every digit one place right, so each digit is worth one-tenth as much."
  },
  divide100: {
    expression: "3.42 ÷ 100",
    result: "0.0342",
    startDigits: { ones: "3", tenths: "4", hundredths: "2" },
    endDigits: { hundredths: "3", thousandths: "4" },
    direction: "right",
    message: "Dividing by 100 is two moves right. The 2 would land in the ten-thousandths place, just beyond this board."
  }
};

const unit6ConversionData = {
  metersToCentimeters: {
    from: "3.5 meters",
    relation: "1 meter = 100 centimeters",
    operation: "3.5 x 100",
    result: "350 centimeters",
    sameAmount: "same length",
    message: "Centimeters are smaller than meters, so the same length needs more centimeter units."
  },
  metersToMillimeters: {
    from: "3.5 meters",
    relation: "1 meter = 1,000 millimeters",
    operation: "3.5 x 1,000",
    result: "3,500 millimeters",
    sameAmount: "same length",
    message: "Millimeters are very small, so the count grows by a factor of 1,000."
  },
  centimetersToMeters: {
    from: "350 centimeters",
    relation: "100 centimeters = 1 meter",
    operation: "350 ÷ 100",
    result: "3.5 meters",
    sameAmount: "same length",
    message: "Meters are larger than centimeters, so the same length uses fewer meter units."
  },
  metersToKilometers: {
    from: "1,250 meters",
    relation: "1,000 meters = 1 kilometer",
    operation: "1,250 ÷ 1,000",
    result: "1.25 kilometers",
    sameAmount: "same length",
    message: "Kilometers are larger than meters, so the number gets smaller."
  }
};

const unit6PredictData = {
  metersToCentimeters: {
    fromUnit: "meter",
    toUnit: "centimeter",
    unitSize: "centimeters are smaller",
    countChange: "the number gets larger",
    operation: "multiply by 100"
  },
  millilitersToLiters: {
    fromUnit: "milliliter",
    toUnit: "liter",
    unitSize: "liters are larger",
    countChange: "the number gets smaller",
    operation: "divide by 1,000"
  },
  feetToInches: {
    fromUnit: "foot",
    toUnit: "inch",
    unitSize: "inches are smaller",
    countChange: "the number gets larger",
    operation: "multiply by 12"
  },
  metersToKilometers: {
    fromUnit: "meter",
    toUnit: "kilometer",
    unitSize: "kilometers are larger",
    countChange: "the number gets smaller",
    operation: "divide by 1,000"
  }
};

const unit6RegroupData = {
  twoOneFourthMinusThreeFourths: {
    whole: 2,
    numerator: 1,
    denominator: 4,
    subtractWhole: 0,
    subtractNumerator: 3,
    subtractDenominator: 4,
    regroupedWhole: 1,
    regroupedNumerator: 5,
    resultWhole: 1,
    resultNumerator: 2,
    resultDenominator: 4,
    simplified: `1 ${fractionHTML("1", "2")}`,
    expression: `2 ${fractionHTML("1", "4")} - ${fractionHTML("3", "4")}`
  },
  threeOneFifthMinusFourFifths: {
    whole: 3,
    numerator: 1,
    denominator: 5,
    subtractWhole: 0,
    subtractNumerator: 4,
    subtractDenominator: 5,
    regroupedWhole: 2,
    regroupedNumerator: 6,
    resultWhole: 2,
    resultNumerator: 2,
    resultDenominator: 5,
    simplified: `2 ${fractionHTML("2", "5")}`,
    expression: `3 ${fractionHTML("1", "5")} - ${fractionHTML("4", "5")}`
  },
  fiveTwoThirdsMinusOneFiveSixths: {
    whole: 5,
    numerator: 2,
    denominator: 3,
    subtractWhole: 1,
    subtractNumerator: 5,
    subtractDenominator: 6,
    commonDenominator: 6,
    renamedNumerator: 4,
    regroupedWhole: 4,
    regroupedNumerator: 10,
    resultWhole: 3,
    resultNumerator: 5,
    resultDenominator: 6,
    simplified: `3 ${fractionHTML("5", "6")}`,
    expression: `5 ${fractionHTML("2", "3")} - 1 ${fractionHTML("5", "6")}`
  }
};

const unit6LinePlotData = {
  ribbonsTotal: {
    title: "Ribbon lengths in inches",
    denominator: 8,
    minWhole: 1,
    maxWhole: 2,
    values: [8, 10, 10, 11, 12, 12, 12, 14, 16],
    selected: [12, 12, 12, 14],
    prompt: "Select the ribbons that are 1 1/2 inches or longer.",
    equation: `${fractionHTML("12", "8")} + ${fractionHTML("12", "8")} + ${fractionHTML("12", "8")} + ${fractionHTML("14", "8")}`,
    message: "The X marks stack when the same measurement appears more than once. Selected data can become a fraction addition problem."
  },
  eggsCompare: {
    title: "Egg weights in ounces",
    denominator: 8,
    minWhole: 1,
    maxWhole: 2,
    values: [9, 9, 10, 11, 11, 12, 13, 13, 15, 16],
    selected: [16, 9],
    prompt: "Compare the heaviest egg with one of the lightest eggs.",
    equation: `${fractionHTML("16", "8")} - ${fractionHTML("9", "8")} = ${fractionHTML("7", "8")}`,
    message: "A line plot can support subtraction: choose the two measurements, then subtract same-size eighths."
  },
  apricotsAbove: {
    title: "Apricot weights in ounces",
    denominator: 8,
    minWhole: 0,
    maxWhole: 1,
    values: [3, 4, 4, 5, 6, 6, 7, 8],
    selected: [6, 6, 7, 8],
    prompt: "Use the points above 5/8 ounce.",
    equation: `${fractionHTML("6", "8")} + ${fractionHTML("6", "8")} + ${fractionHTML("7", "8")} + 1`,
    message: "Threshold questions start by deciding which X marks belong in the set."
  }
};

const unit6ScaleData = {
  halfOf8: {
    expression: `${fractionHTML("1", "2")} x 8`,
    factorText: "less than 1",
    original: 8,
    product: 4,
    productText: "4",
    comparison: "smaller",
    message: "A scale factor less than 1 takes part of the amount, so the product is smaller than 8."
  },
  oneTimes8: {
    expression: "1 x 8",
    factorText: "equal to 1",
    original: 8,
    product: 8,
    productText: "8",
    comparison: "the same",
    message: "Multiplying by 1 keeps the amount unchanged."
  },
  fiveFourthsOf8: {
    expression: `${fractionHTML("5", "4")} x 8`,
    factorText: "greater than 1",
    original: 8,
    product: 10,
    productText: "10",
    comparison: "larger",
    message: "A scale factor greater than 1 is one whole amount plus more, so the product is larger than 8."
  },
  sevenSixthsOf12: {
    expression: `${fractionHTML("7", "6")} x 12`,
    factorText: "greater than 1",
    original: 12,
    product: 14,
    productText: "14",
    comparison: "larger",
    message: "Because 7/6 is greater than 1, 7/6 x 12 must be greater than 12 even before calculating."
  }
};

const unit6CustomaryData = {
  feetToInches: {
    from: "4 feet",
    relation: "1 foot = 12 inches",
    operation: "4 x 12",
    result: "48 inches",
    factor: "12",
    message: "Inches are smaller than feet, so each foot opens into 12 inches."
  },
  yardsToFeet: {
    from: "3 yards",
    relation: "1 yard = 3 feet",
    operation: "3 x 3",
    result: "9 feet",
    factor: "3",
    message: "Yards are larger than feet, so the number of feet is greater."
  },
  quartsToCups: {
    from: "2 quarts",
    relation: "1 quart = 4 cups",
    operation: "2 x 4",
    result: "8 cups",
    factor: "4",
    message: "A quart opens into 4 cups. Two quarts open into 8 cups."
  },
  gallonsToQuarts: {
    from: "1.5 gallons",
    relation: "1 gallon = 4 quarts",
    operation: "1.5 x 4",
    result: "6 quarts",
    factor: "4",
    message: "Customary conversion factors can use decimals or fractions, but the relationship card still guides the operation."
  }
};

const unit6MultiStepData = {
  runner: {
    context: "A runner goes 2.4 kilometers. How many meters farther is that than 1,750 meters?",
    equation: "2.4 km = 2,400 m; 2,400 - 1,750 = 650 m",
    steps: [
      { label: "Start", value: "2.4 km", note: "The story compares with meters." },
      { label: "Rename", value: "2,400 m", note: "1 km = 1,000 m, so multiply by 1,000." },
      { label: "Solve", value: "650 m", note: "Now both measurements use meters." }
    ],
    message: "Multi-step conversion problems become ordinary operations after the measurements use the same unit."
  },
  juice: {
    context: "A jug has 3 liters of juice. Four cups of 250 milliliters are poured out. How much is left?",
    equation: "3 L = 3,000 mL; 4 x 250 = 1,000 mL; 3,000 - 1,000 = 2,000 mL",
    steps: [
      { label: "Start", value: "3 L", note: "The removed amount is in milliliters." },
      { label: "Rename", value: "3,000 mL", note: "1 L = 1,000 mL." },
      { label: "Solve", value: "2,000 mL", note: "Subtract the poured-out juice." }
    ],
    message: "Rename first, then combine or compare amounts in the same unit."
  },
  ribbon: {
    context: "A ribbon is 2 yards long. A piece 30 inches long is cut off. How many inches remain?",
    equation: "2 yd = 6 ft = 72 in; 72 - 30 = 42 in",
    steps: [
      { label: "Start", value: "2 yd", note: "The answer is requested in inches." },
      { label: "Rename", value: "6 ft then 72 in", note: "1 yd = 3 ft and 1 ft = 12 in." },
      { label: "Solve", value: "42 in", note: "Subtract the cut piece." }
    ],
    message: "Customary multi-step conversions may need more than one relationship card."
  }
};

const unit6ConversionTableData = {
  length: {
    title: "Same length, different metric units",
    equation: "1.25 m = 125 cm = 1,250 mm = 0.00125 km",
    rows: [
      { unit: "kilometers", amount: "0.00125 km", size: "largest unit", count: "fewest units" },
      { unit: "meters", amount: "1.25 m", size: "middle unit", count: "middle count" },
      { unit: "centimeters", amount: "125 cm", size: "smaller unit", count: "more units" },
      { unit: "millimeters", amount: "1,250 mm", size: "smallest unit", count: "most units" }
    ],
    message: "As the unit gets smaller, the count gets larger because more tiny units fit in the same length."
  },
  liquid: {
    title: "Same liquid volume, different customary units",
    equation: "2 qt = 4 pt = 8 cups = 64 fl oz",
    rows: [
      { unit: "quarts", amount: "2 qt", size: "largest shown", count: "fewest units" },
      { unit: "pints", amount: "4 pt", size: "half a quart", count: "twice as many" },
      { unit: "cups", amount: "8 cups", size: "half a pint", count: "more units" },
      { unit: "fluid ounces", amount: "64 fl oz", size: "smallest shown", count: "most units" }
    ],
    message: "Customary tables use relationship facts instead of powers of 10, but they still rename one amount."
  }
};

const unit6FractionStoryData = {
  recipe: {
    story: "A recipe uses 1/2 cup of oats and 1/3 cup of nuts. How much dry mix is that?",
    whole: "one cup",
    operation: "add",
    expression: `${fractionHTML("1", "2")} + ${fractionHTML("1", "3")}`,
    renamed: `${fractionHTML("3", "6")} + ${fractionHTML("2", "6")}`,
    result: `${fractionHTML("5", "6")} cup`,
    denominator: 6,
    parts: [3, 2],
    message: "The cup is the whole. Sixth-size pieces let the oats and nuts join as the same kind of pieces."
  },
  ribbon: {
    story: "A ribbon is 5/6 yard long. A piece 1/4 yard long is cut off. How much remains?",
    whole: "one yard",
    operation: "subtract",
    expression: `${fractionHTML("5", "6")} - ${fractionHTML("1", "4")}`,
    renamed: `${fractionHTML("10", "12")} - ${fractionHTML("3", "12")}`,
    result: `${fractionHTML("7", "12")} yard`,
    denominator: 12,
    parts: [10, 3],
    message: "The yard is the whole. Twelfths are small enough to describe both sixths and fourths."
  },
  garden: {
    story: "A garden bed has 3/4 planted with flowers and 1/8 planted with herbs. What fraction is planted?",
    whole: "one garden bed",
    operation: "add",
    expression: `${fractionHTML("3", "4")} + ${fractionHTML("1", "8")}`,
    renamed: `${fractionHTML("6", "8")} + ${fractionHTML("1", "8")}`,
    result: `${fractionHTML("7", "8")} planted`,
    denominator: 8,
    parts: [6, 1],
    message: "The whole is the garden bed. Eighths let both planted parts be counted together."
  }
};

const unit6StrategyData = {
  add: {
    expression: `${fractionHTML("1", "2")} + ${fractionHTML("1", "3")}`,
    result: `${fractionHTML("5", "6")}`,
    common: `${fractionHTML("3", "6")} + ${fractionHTML("2", "6")} = ${fractionHTML("5", "6")}`,
    benchmark: "1/2 plus a little more than 0 gives an answer between 1/2 and 1.",
    line: "Start at 0, jump 3 sixths, then 2 sixths more.",
    denominator: 6,
    first: 3,
    second: 2,
    message: "Exact common-denominator work and benchmark reasoning should agree."
  },
  subtract: {
    expression: `${fractionHTML("5", "6")} - ${fractionHTML("1", "4")}`,
    result: `${fractionHTML("7", "12")}`,
    common: `${fractionHTML("10", "12")} - ${fractionHTML("3", "12")} = ${fractionHTML("7", "12")}`,
    benchmark: "5/6 is close to 1. Removing 1/4 should leave a little more than 1/2.",
    line: "Start at 10 twelfths, then move back 3 twelfths.",
    denominator: 12,
    first: 10,
    second: 3,
    message: "A number line is a good reasonableness check for the exact subtraction."
  }
};

const unit6MixedOperationData = {
  add: {
    expression: `2 ${fractionHTML("1", "3")} + 1 ${fractionHTML("1", "6")}`,
    result: `3 ${fractionHTML("1", "2")}`,
    steps: [
      { label: "Wholes", value: "2 + 1 = 3" },
      { label: "Rename pieces", value: `${fractionHTML("1", "3")} = ${fractionHTML("2", "6")}` },
      { label: "Fraction pieces", value: `${fractionHTML("2", "6")} + ${fractionHTML("1", "6")} = ${fractionHTML("3", "6")} = ${fractionHTML("1", "2")}` }
    ],
    message: "Add wholes with wholes and fraction pieces with same-size fraction pieces."
  },
  subtract: {
    expression: `4 ${fractionHTML("1", "2")} - 2 ${fractionHTML("3", "4")}`,
    result: `1 ${fractionHTML("3", "4")}`,
    steps: [
      { label: "Rename", value: `4 ${fractionHTML("1", "2")} = 4 ${fractionHTML("2", "4")}` },
      { label: "Regroup", value: `4 ${fractionHTML("2", "4")} = 3 ${fractionHTML("6", "4")}` },
      { label: "Subtract", value: `3 ${fractionHTML("6", "4")} - 2 ${fractionHTML("3", "4")} = 1 ${fractionHTML("3", "4")}` }
    ],
    message: "When the top fraction part is too small, open one whole before subtracting."
  }
};

const unit6LineBuildData = {
  ribbons: {
    title: "Ribbon lengths in inches",
    denominator: 8,
    minWhole: 1,
    maxWhole: 2,
    values: [8, 10, 10, 12, 12, 13, 16],
    equation: "each card becomes one X",
    message: "Two 1 2/8 cards stack at the same tick. Two 1 4/8 cards stack at another tick."
  },
  seedlings: {
    title: "Seedling heights in inches",
    denominator: 8,
    minWhole: 0,
    maxWhole: 1,
    values: [3, 3, 4, 5, 6, 6, 8],
    equation: "same measurement, same stack",
    message: "The line plot keeps all the data visible while showing repeats as stacked X marks."
  }
};

const unit6LineMissingData = {
  missingRibbon: {
    title: "Ribbon lengths in inches",
    denominator: 8,
    minWhole: 1,
    maxWhole: 2,
    shownValues: [8, 10, 12, 12, 16],
    missingValues: [14],
    clue: "There are 6 ribbons. The total length is 9 1/4 inches.",
    equation: "shown total is 7 1/2; missing length is 1 3/4",
    message: "The missing X must land at 1 6/8 because 7 1/2 + 1 3/4 = 9 1/4."
  },
  missingPlant: {
    title: "Plant heights in inches",
    denominator: 8,
    minWhole: 0,
    maxWhole: 1,
    shownValues: [3, 4, 5, 6, 8],
    missingValues: [6, 7],
    clue: "There are 7 plants. Two missing plants are taller than 5/8 inch. One is 1/8 inch taller than the other.",
    equation: "the missing pair is 6/8 and 7/8",
    message: "Both missing X marks must be above 5/8, and neighboring eighths match the one-eighth-apart clue."
  }
};

const unit6ScaleLineData = {
  half: {
    expression: `8 x ${fractionHTML("1", "2")}`,
    original: 8,
    product: 4,
    factor: "less than 1",
    message: "The product lands before 8 because one-half of 8 is smaller than the original amount."
  },
  one: {
    expression: "8 x 1",
    original: 8,
    product: 8,
    factor: "equal to 1",
    message: "The product lands exactly on 8 because a scale factor of 1 keeps the amount unchanged."
  },
  threeHalves: {
    expression: `8 x ${fractionHTML("3", "2")}`,
    original: 8,
    product: 12,
    factor: "greater than 1",
    message: "The product lands beyond 8 because three-halves means one whole 8 plus another half of 8."
  }
};

const unit4AreaData = {
  twentyThreeByEighteen: {
    factors: [23, 18],
    top: [20, 3],
    side: [10, 8],
    message: "23 x 18 is not one mystery jump. It is four place-value rectangles whose areas can be added.",
    note: "Split each factor by place value, multiply each part, then add the partial products."
  },
  thirtyFourByTwelve: {
    factors: [34, 12],
    top: [30, 4],
    side: [10, 2],
    message: "34 x 12 keeps the same structure: tens and ones across, tens and ones down.",
    note: "The area model protects the meaning before the algorithm gets compact."
  },
  fortySixByTwentySeven: {
    factors: [46, 27],
    top: [40, 6],
    side: [20, 7],
    message: "When both numbers are larger, the pieces get larger too, but the idea stays the same.",
    note: "Every rectangle is one partial product from one part of each factor."
  }
};

const unit4AlgorithmData = {
  twentyThreeByEighteen: {
    factors: [23, 18],
    rows: [
      { label: "8 ones x 23", value: 184, place: "ones row" },
      { label: "1 ten x 23", value: 230, place: "tens row" }
    ],
    total: 414,
    message: "The row for 1 ten is 230, not 23. The zero is a place-value reminder."
  },
  fortySixByTwentySeven: {
    factors: [46, 27],
    rows: [
      { label: "7 ones x 46", value: 322, place: "ones row" },
      { label: "2 tens x 46", value: 920, place: "tens row" }
    ],
    total: 1242,
    message: "The 2 in 27 means 2 tens, so the second row represents 20 x 46."
  }
};

const unit4DigitData = {
  largest: {
    title: "Use 7, 5, 3, and 2 once",
    equation: "72 x 53 = 3,816",
    message: "The largest product comes from paying attention to both place value and balance. Big digits in tens places help, but the ones digits still change the result.",
    products: [
      { expression: "72 x 53", value: "3,816", highlight: true, note: "Strong tens places and balanced factors." },
      { expression: "73 x 52", value: "3,796", note: "Very close, but a little smaller." },
      { expression: "75 x 32", value: "2,400", note: "One factor became much smaller." }
    ]
  },
  swap: {
    title: "Same digits, different places",
    equation: "46 x 27 vs 64 x 27",
    message: "Swapping 4 and 6 changes which digit is worth tens. The factor 64 is 18 more than 46, so the product grows by 18 groups of 27.",
    products: [
      { expression: "46 x 27", value: "1,242", note: "4 is in the tens place." },
      { expression: "64 x 27", value: "1,728", highlight: true, note: "6 is in the tens place." },
      { expression: "18 x 27", value: "486 more", note: "This is the difference." }
    ]
  },
  balanced: {
    title: "Estimate before exact product",
    equation: "48 x 52 is near 50 x 50",
    message: "Estimation helps decide whether the exact product is reasonable before trusting the algorithm.",
    products: [
      { expression: "50 x 50", value: "2,500", highlight: true, note: "Friendly estimate." },
      { expression: "48 x 52", value: "2,496", note: "Exact product is very close." },
      { expression: "Reasonable?", value: "yes", note: "The check catches misplaced digits." }
    ]
  }
};

const unit4QuotientData = {
  sixHundredEight: {
    expression: "608 ÷ 32",
    divisor: 32,
    dividend: 608,
    chunks: [
      { quotient: 10, product: 320, remaining: 288 },
      { quotient: 5, product: 160, remaining: 128 },
      { quotient: 4, product: 128, remaining: 0 }
    ],
    total: 19,
    remainder: 0,
    message: "10 groups, then 5 groups, then 4 groups make 19 groups. Each subtraction is really multiplication by 32."
  },
  fiveHundredTwentyNine: {
    expression: "529 ÷ 23",
    divisor: 23,
    dividend: 529,
    chunks: [
      { quotient: 20, product: 460, remaining: 69 },
      { quotient: 3, product: 69, remaining: 0 }
    ],
    total: 23,
    remainder: 0,
    message: "A big chunk of 20 groups leaves 69, which is exactly 3 more groups of 23."
  },
  oneThousandFortyFour: {
    expression: "1,044 ÷ 29",
    divisor: 29,
    dividend: 1044,
    chunks: [
      { quotient: 30, product: 870, remaining: 174 },
      { quotient: 6, product: 174, remaining: 0 }
    ],
    total: 36,
    remainder: 0,
    message: "Estimate first: 29 x 30 is close. Then the leftover 174 makes 6 more groups."
  }
};

const unit4PathData = {
  sixHundredEight: {
    expression: "608 ÷ 32",
    paths: [
      {
        name: "Path A",
        chunks: [
          { quotient: 10, product: 320, remaining: 288 },
          { quotient: 5, product: 160, remaining: 128 },
          { quotient: 4, product: 128, remaining: 0 }
        ]
      },
      {
        name: "Path B",
        chunks: [
          { quotient: 15, product: 480, remaining: 128 },
          { quotient: 4, product: 128, remaining: 0 }
        ]
      }
    ],
    total: 19,
    message: "Both paths subtract 608 in all. The quotient chunks add to 19 either way."
  },
  oneThousandFortyFour: {
    expression: "1,044 ÷ 29",
    paths: [
      {
        name: "Path A",
        chunks: [
          { quotient: 30, product: 870, remaining: 174 },
          { quotient: 6, product: 174, remaining: 0 }
        ]
      },
      {
        name: "Path B",
        chunks: [
          { quotient: 20, product: 580, remaining: 464 },
          { quotient: 10, product: 290, remaining: 174 },
          { quotient: 6, product: 174, remaining: 0 }
        ]
      }
    ],
    total: 36,
    message: "One path starts bigger; the other takes more steps. The check is quotient times divisor."
  }
};

const unit4RemainderData = {
  noodle: {
    title: "Share 10,119 feet of noodle among 400 people",
    expression: "10,119 ÷ 400 = 25 R119",
    interpretation: "Each person gets 25 feet, with 119 feet still to share or describe as a fraction.",
    action: "share more precisely",
    message: "In an equal-sharing story, the leftover is still part of the amount, so a fraction can make sense."
  },
  teams: {
    title: "101 students make teams of 8",
    expression: "101 ÷ 8 = 12 R5",
    interpretation: "There are 12 full teams and 5 students left without a full team.",
    action: "left over",
    message: "Here the remainder names people who do not make a complete team of 8."
  },
  boxes: {
    title: "101 cans ship in boxes of 10",
    expression: "101 ÷ 10 = 10 R1",
    interpretation: "10 full boxes are not enough; the last can needs an 11th box.",
    action: "round up",
    message: "A container story often rounds up because the leftover still needs a container."
  }
};

const unit4ApplicationData = {
  area: {
    title: "Find a missing side length",
    equation: "area ÷ known side = missing side",
    message: "If area and one side are known, division finds the side that was multiplied.",
    rows: [
      ["Area", "816 square feet"],
      ["Known side", "24 feet"],
      ["Missing side", "816 ÷ 24 = 34 feet"]
    ]
  },
  volume: {
    title: "Complete a volume table",
    equation: "length x width x height = volume",
    message: "A volume table can hide any one measurement. First name the missing piece, then choose multiply or divide.",
    rows: [
      ["Length", "10 feet"],
      ["Width", "9 feet"],
      ["Volume", "900 cubic feet"],
      ["Height", "900 ÷ (10 x 9) = 10 feet"]
    ]
  },
  check: {
    title: "Check whether the answer is reasonable",
    equation: "estimate -> exact answer -> compare",
    message: "Estimates are not extra work. They tell you whether a compact algorithm answer is believable.",
    rows: [
      ["Estimate", "30 x 40 is about 1,200"],
      ["Exact", "29 x 43 = 1,247"],
      ["Decision", "1,247 is close to 1,200, so it is reasonable"]
    ]
  }
};

const unit1LayerData = {
  twoByThreeByFour: {
    length: 2,
    width: 3,
    height: 4,
    title: "2 by 3 base, 4 layers",
    message: "One layer has 2 x 3 = 6 cubes. Four equal layers make 24 cubic units."
  },
  fourByThreeByTwo: {
    length: 4,
    width: 3,
    height: 2,
    title: "4 by 3 base, 2 layers",
    message: "The base area is 12 square units. Two layers of 12 cubes make 24 cubic units."
  },
  fiveByTwoByThree: {
    length: 5,
    width: 2,
    height: 3,
    title: "5 by 2 base, 3 layers",
    message: "A thinner base can still build volume. 10 cubes in each layer repeated 3 times makes 30."
  }
};

const unit1ExpressionData = {
  dimensions: {
    expression: "4 x 3 x 2",
    title: "Name each dimension",
    message: "Length, width, and height each describe a direction in the prism."
  },
  baseLayer: {
    expression: "(4 x 3) x 2",
    title: "Group the base first",
    message: "The parentheses say to count one base layer first: 4 x 3 = 12."
  },
  layers: {
    expression: "12 x 2",
    title: "Repeat the layer",
    message: "After one layer is 12 cubes, the height says there are 2 equal layers."
  },
  frontSlices: {
    expression: "4 x (3 x 2)",
    title: "Group a different slice",
    message: "This groups a 3 by 2 side slice and repeats it 4 times. The same 24 cubes are counted."
  }
};

const unit1MissingData = {
  height: {
    title: "Missing height",
    known: [
      ["Volume", "36 cubic units"],
      ["Length", "4 units"],
      ["Width", "3 units"],
      ["Base area", "4 x 3 = 12"]
    ],
    equation: "12 x ? = 36",
    result: "? = 3 layers",
    dimensions: [4, 3, 3],
    message: "First find one layer. Then ask how many 12-cube layers fit into 36."
  },
  length: {
    title: "Missing length",
    known: [
      ["Volume", "40 cubic units"],
      ["Width", "4 units"],
      ["Height", "2 units"],
      ["Known slice", "4 x 2 = 8"]
    ],
    equation: "? x 8 = 40",
    result: "? = 5 units",
    dimensions: [5, 4, 2],
    message: "The unknown side is the missing factor that makes the known slice repeat to 40."
  },
  width: {
    title: "Missing width",
    known: [
      ["Volume", "30 cubic units"],
      ["Length", "5 units"],
      ["Height", "3 units"],
      ["Known slice", "5 x 3 = 15"]
    ],
    equation: "15 x ? = 30",
    result: "? = 2 units",
    dimensions: [5, 2, 3],
    message: "Volume relationships can be read backward because multiplication and division undo each other."
  }
};

const unit1CompositeData = {
  lShape: {
    title: "L-shaped solid",
    parts: [
      { label: "Tall prism", dimensions: [3, 2, 4], color: "teal" },
      { label: "Short prism", dimensions: [2, 2, 2], color: "orange" }
    ],
    equation: "(3 x 2 x 4) + (2 x 2 x 2) = 32",
    message: "The two prisms touch, but they do not overlap. Add 24 and 8 to get 32 cubic units."
  },
  stepSolid: {
    title: "Step solid",
    parts: [
      { label: "Lower step", dimensions: [5, 2, 1], color: "teal" },
      { label: "Upper step", dimensions: [3, 2, 2], color: "blue" }
    ],
    equation: "(5 x 2 x 1) + (3 x 2 x 2) = 22",
    message: "A step can be decomposed into a long low prism and a smaller prism stacked on part of it."
  },
  missingCorner: {
    title: "Missing-corner solid",
    parts: [
      { label: "Whole box", dimensions: [4, 3, 3], color: "teal" },
      { label: "Corner removed", dimensions: [1, 3, 2], color: "orange", subtract: true }
    ],
    equation: "(4 x 3 x 3) - (1 x 3 x 2) = 30",
    message: "Sometimes it is easier to start with the full box, then subtract the missing rectangular prism."
  }
};

const unit8ComputationData = {
  largestProduct: {
    title: "Largest product from 7, 5, 3, 2",
    equation: "73 x 52 = 3,796",
    message: "The largest digits do the most work in the tens places. Unit 8 asks students to test the claim, not just grab the biggest two-digit number.",
    cards: [
      { label: "Tens places", value: "7 and 5", note: "Put bigger digits where they are worth tens." },
      { label: "Ones places", value: "3 and 2", note: "The smaller digits still matter, but they carry less place value." },
      { label: "Check", value: "75 x 32 = 2,400", note: "The biggest factor alone does not guarantee the biggest product." }
    ]
  },
  zeros: {
    title: "Products with zeros keep the same core multiplication",
    equation: "26 x 35 -> 260 x 35 -> 260 x 350",
    message: "Multiply the non-zero parts first, then restore the powers of 10. This keeps the computation understandable instead of memorized.",
    cards: [
      { label: "Core product", value: "26 x 35 = 910", note: "No extra zero factors yet." },
      { label: "One factor x 10", value: "260 x 35 = 9,100", note: "The first factor is 10 times as large, so the product is 10 times as large." },
      { label: "Both factors include 10", value: "260 x 350 = 91,000", note: "Now the product is 100 times the core product." }
    ]
  },
  division: {
    title: "Partial quotients subtract useful chunks",
    equation: "2,516 ÷ 37 = 68",
    message: "A partial-quotients strategy is flexible: choose a big chunk, subtract it, then finish with a smaller chunk.",
    cards: [
      { label: "Estimate first", value: "37 x 70 = 2,590", note: "The quotient should be a little less than 70." },
      { label: "Take a big chunk", value: "37 x 60 = 2,220", note: "2,516 - 2,220 leaves 296." },
      { label: "Finish the chunk", value: "37 x 8 = 296", note: "60 + 8 makes the quotient 68." }
    ]
  }
};

const unit8VolumeData = {
  cubes126: {
    title: "Pack 126 cubes",
    equation: "6 x 7 x 3 = 126",
    message: "Different dimensions can hold the same number of cubes. The volume stays 126 cubic units when the layers match the factor triple.",
    dimensions: [6, 7, 3],
    cards: [
      { label: "Length", value: "6 cubes" },
      { label: "Width", value: "7 cubes" },
      { label: "Height", value: "3 layers" }
    ]
  },
  wagon: {
    title: "World's largest wagon estimate",
    equation: "27 ft x 13 ft x 2 ft = 702 cubic ft",
    message: "A real object is not a perfect box, but a rectangular prism estimate gives a useful first volume.",
    dimensions: [9, 5, 3],
    cards: [
      { label: "Measure", value: "length, width, height" },
      { label: "Unit", value: "cubic feet" },
      { label: "Interpret", value: "about 702 cubic ft" }
    ]
  },
  rainfall: {
    title: "Rainfall volume",
    equation: "roof area x rain height = water volume",
    message: "A thin layer of rain is still a volume. The height is small, but it spreads across a large roof area.",
    dimensions: [8, 6, 1],
    cards: [
      { label: "Base", value: "roof area" },
      { label: "Height", value: "rain depth" },
      { label: "Meaning", value: "water collected" }
    ]
  }
};

const unit8FractionGameData = {
  sum: {
    title: "Greatest Sum",
    expression: `${fractionHTML("8", "9")} + ${fractionHTML("7", "6")}`,
    message: "To make a large sum, try large numerators and smaller denominators, then calculate after the board is full.",
    slots: [
      { label: "large numerator", value: "8" },
      { label: "small denominator", value: "6" },
      { label: "large numerator", value: "7" },
      { label: "next denominator", value: "9" }
    ]
  },
  difference: {
    title: "Greatest Difference",
    expression: `${fractionHTML("9", "5")} - ${fractionHTML("2", "8")}`,
    message: "For a large difference, make the first fraction large and the second fraction small.",
    slots: [
      { label: "first numerator", value: "9" },
      { label: "first denominator", value: "5" },
      { label: "second numerator", value: "2" },
      { label: "second denominator", value: "8" }
    ]
  },
  smallDifference: {
    title: "Smallest Difference",
    expression: `${fractionHTML("5", "8")} - ${fractionHTML("4", "7")}`,
    message: "For a small positive difference, place numbers so the two fractions are close together.",
    slots: [
      { label: "first fraction", value: "5/8" },
      { label: "second fraction", value: "4/7" },
      { label: "strategy", value: "close values" }
    ]
  }
};

const unit8DecimalData = {
  raceOne: {
    title: "Race to 1",
    roll: 6,
    current: 0.32,
    choices: [
      { label: "6 tenths", value: 0.6, total: 0.92, note: "big move, still under 1" },
      { label: "6 hundredths", value: 0.06, total: 0.38, note: "safe but slow" }
    ],
    message: "The same roll can mean 0.6 or 0.06. Strategy means choosing the place value that helps reach the target."
  },
  nearOne: {
    title: "Near 1 without going over",
    roll: 7,
    current: 0.95,
    choices: [
      { label: "7 tenths", value: 0.7, total: 1.65, note: "too far" },
      { label: "7 hundredths", value: 0.07, total: 1.02, note: "still too far" },
      { label: "7 thousandths", value: 0.007, total: 0.957, note: "safe move" }
    ],
    message: "When the total is close to 1, a thousandth can be the smartest move."
  },
  race500: {
    title: "Race to 500",
    roll: "2, 3, 9",
    current: 416.2,
    choices: [
      { label: "239", value: 239, total: 655.2, note: "reaches 500 quickly" },
      { label: "2.39", value: 2.39, total: 418.59, note: "legal but tiny" },
      { label: "392", value: 392, total: 808.2, note: "even/odd place rules may block this arrangement" }
    ],
    message: "Decimal Race to 500 makes students think about place-value rules and how much each digit changes the sum."
  }
};

const unit8ProductData = {
  greatest: {
    title: "Greatest product",
    expression: `${fractionHTML("8", "3")} x ${fractionHTML("7", "2")}`,
    message: "Put larger numbers in numerator spots and smaller numbers in denominator spots when the goal is the greatest product.",
    factors: ["greater than 1", "greater than 1"],
    result: "product grows a lot"
  },
  smallest: {
    title: "Smallest product",
    expression: `${fractionHTML("2", "8")} x ${fractionHTML("3", "7")}`,
    message: "Put smaller numbers in numerator spots and larger numbers in denominator spots when the goal is the smallest product.",
    factors: ["less than 1", "less than 1"],
    result: "product shrinks"
  },
  compareOne: {
    title: "Compare to 1 first",
    expression: `${fractionHTML("6", "6")} x ${fractionHTML("5", "4")}`,
    message: "A factor equal to 1 keeps the other factor. A factor greater than 1 makes the product bigger than the other factor.",
    factors: ["equal to 1", "greater than 1"],
    result: "product is greater than 1"
  }
};

const unit8RoutineData = {
  notice: {
    title: "Notice and Wonder",
    purpose: "Invite many observations and questions before naming a method.",
    source: "Lesson 14: sharing bread",
    design: "Choose an image with enough structure for students to notice equal shares, leftovers, or a missing amount.",
    prompt: "What do you notice? What do you wonder?"
  },
  estimate: {
    title: "Estimation Exploration",
    purpose: "Make students set too-low, about-right, and too-high anchors.",
    source: "Lesson 15: estimation design",
    design: "Use a countable or measurable image, then hide the exact answer until estimates are discussed.",
    prompt: "Record an estimate that is too low, about right, and too high."
  },
  numberTalk: {
    title: "Number Talk",
    purpose: "Sequence expressions so one mental strategy helps with the next.",
    source: "Lesson 16: division number talks",
    design: "Start with a friendly expression, then change one part at a time.",
    prompt: "How did the previous expression help you solve this one?"
  },
  trueFalse: {
    title: "True or False",
    purpose: "Use structure to decide whether equations make sense.",
    source: "Lesson 17: true or false design",
    design: "Write related equations that can be judged without long calculation.",
    prompt: "Is the equation true or false? How do you know?"
  },
  wodb: {
    title: "Which One Doesn't Belong",
    purpose: "Make every choice defensible for a different mathematical reason.",
    source: "Lesson 18: shape cards",
    design: "Choose four objects so each object has at least one reason it does not belong.",
    prompt: "Which one does not belong? Give a reason for each choice."
  }
};

const starterPracticeSets = {
  fractionFoundations: [
    {
      id: "share-five-fourths",
      skill: "Fair sharing",
      prompt: "5 sandwiches are shared equally by 4 students. What is one student's share?",
      visual: { type: "sharing", total: 5, groups: 4, object: "sandwich" },
      choices: [
        { value: "5/4", label: fractionHTML("5", "4"), correct: true },
        { value: "4/5", label: fractionHTML("4", "5") },
        { value: "1/4", label: fractionHTML("1", "4") },
        { value: "5", label: "5 whole sandwiches" }
      ],
      hints: [
        "Each sandwich is cut into 4 equal pieces because there are 4 students.",
        "One student gets 1/4 from each of the 5 sandwiches.",
        "Five pieces of size 1/4 makes 5/4."
      ],
      correctFeedback: "Yes. One share gets 1/4 from each of 5 sandwiches, so the share is 5/4.",
      incorrectFeedback: "Not quite. The numerator counts the sandwiches being shared, and the denominator counts the students."
    },
    {
      id: "division-to-fraction",
      skill: "Division as a fraction",
      prompt: "Which equation names the same fair-sharing amount as 3 ÷ 5?",
      visual: { type: "sharing", total: 3, groups: 5, object: "sandwich" },
      choices: [
        { value: "3/5", label: `3 ÷ 5 = ${fractionHTML("3", "5")}`, correct: true },
        { value: "5/3", label: `3 ÷ 5 = ${fractionHTML("5", "3")}` },
        { value: "15", label: "3 ÷ 5 = 15" },
        { value: "2", label: "3 ÷ 5 = 2" }
      ],
      hints: [
        "The dividend, 3, becomes the numerator.",
        "The divisor, 5, becomes the denominator.",
        "3 things shared 5 ways gives each share 3/5."
      ],
      correctFeedback: "Exactly. a ÷ b can be named a/b, so 3 ÷ 5 = 3/5.",
      incorrectFeedback: "Try matching the division order to the fraction order: dividend over divisor."
    },
    {
      id: "pack-seven-fourths",
      skill: "Improper to mixed number",
      prompt: "7 fourths can be packed into which mixed number?",
      visual: { type: "pack", numerator: 7, denominator: 4 },
      choices: [
        { value: "1 3/4", label: `1 + ${fractionHTML("3", "4")}`, correct: true },
        { value: "1 4/3", label: `1 + ${fractionHTML("4", "3")}` },
        { value: "2 1/4", label: `2 + ${fractionHTML("1", "4")}` },
        { value: "3 1/4", label: `3 + ${fractionHTML("1", "4")}` }
      ],
      hints: [
        "Four fourths make one whole.",
        "7 fourths contains one full group of 4 fourths.",
        "After 4 fourths are packed into 1 whole, 3 fourths are left."
      ],
      correctFeedback: "Right. 4/4 makes 1 whole, and 3/4 is left, so 7/4 = 1 + 3/4.",
      incorrectFeedback: "Pack a full set of 4 fourths first, then count what is left."
    },
    {
      id: "denominator-job",
      skill: "Numerator and denominator",
      prompt: `In ${fractionHTML("4", "6")}, what does the denominator 6 tell us?`,
      visual: { type: "meaning", numerator: 4, denominator: 6 },
      choices: [
        { value: "pieces", label: "One whole is split into 6 equal pieces.", correct: true },
        { value: "shaded", label: "There are 6 shaded pieces." },
        { value: "wholes", label: "There are 6 whole sandwiches." },
        { value: "students", label: "The answer must be 6." }
      ],
      hints: [
        "The denominator names the size of the pieces.",
        "Sixths are made when one whole is cut into 6 equal pieces.",
        "The numerator 4 counts how many sixths are shaded."
      ],
      correctFeedback: "Yes. The denominator tells what kind of pieces: sixths.",
      incorrectFeedback: "Look at the bottom number. It tells how many equal pieces make the whole."
    }
  ],
  multiplyingFractions: [
    {
      id: "one-third-of-twelve",
      skill: "Unit fraction of a whole number",
      prompt: `What is ${fractionHTML("1", "3")} of 12?`,
      visual: {
        type: "fractionOf",
        model: {
          numerator: 1,
          denominator: 3,
          whole: 12,
          itemName: "counter",
          itemPlural: "counters",
          context: "12 counters are split into 3 equal groups."
        }
      },
      choices: [
        { value: "4", label: "4", correct: true },
        { value: "3", label: "3" },
        { value: "9", label: "9" },
        { value: "36", label: "36" }
      ],
      hints: [
        "A unit fraction has numerator 1, so take one group.",
        "Split 12 into 3 equal groups.",
        "12 ÷ 3 = 4."
      ],
      correctFeedback: "Yes. One third of 12 is one of 3 equal groups, and each group has 4.",
      incorrectFeedback: "Start by dividing the whole number by the denominator."
    },
    {
      id: "three-fourths-of-twenty",
      skill: "Non-unit fraction of a whole number",
      prompt: `What is ${fractionHTML("3", "4")} of 20?`,
      visual: {
        type: "fractionOf",
        model: {
          numerator: 3,
          denominator: 4,
          whole: 20,
          itemName: "counter",
          itemPlural: "counters",
          context: "20 counters are split into 4 equal groups."
        }
      },
      choices: [
        { value: "15", label: "15", correct: true },
        { value: "5", label: "5" },
        { value: "24", label: "24" },
        { value: "60", label: "60" }
      ],
      hints: [
        "The denominator 4 splits 20 into 4 equal groups.",
        "Each group has 5 counters.",
        "The numerator 3 says to count 3 groups: 5 + 5 + 5."
      ],
      correctFeedback: "Correct. 20 ÷ 4 = 5, then 5 x 3 = 15.",
      incorrectFeedback: "First find one fourth of 20, then take three of those groups."
    },
    {
      id: "divide-first-expression",
      skill: "Equivalent expressions",
      prompt: `Which expression shows the divide-first way to find ${fractionHTML("2", "3")} of 18?`,
      visual: {
        type: "fractionOf",
        model: {
          numerator: 2,
          denominator: 3,
          whole: 18,
          itemName: "counter",
          itemPlural: "counters",
          context: "18 counters are split into 3 equal groups."
        }
      },
      choices: [
        { value: "divide-first", label: "(18 ÷ 3) x 2", correct: true },
        { value: "add", label: "18 + 3 + 2" },
        { value: "wrong-order", label: "(18 ÷ 2) x 3" },
        { value: "subtract", label: "18 - 3 - 2" }
      ],
      hints: [
        "The denominator tells how many equal groups to make.",
        "The numerator tells how many groups to count.",
        "Divide by 3 first, then multiply by 2."
      ],
      correctFeedback: "Yes. The denominator 3 divides 18 first, then the numerator 2 counts two groups.",
      incorrectFeedback: "Use the denominator for the division step and the numerator for the multiplication step."
    },
    {
      id: "area-five-by-three-fourths",
      skill: "Area model",
      prompt: `A rectangle is 5 units long and ${fractionHTML("3", "4")} unit high. What is its area?`,
      visual: {
        type: "area",
        model: {
          length: 5,
          numerator: 3,
          denominator: 4,
          context: "A 5-unit by 3/4-unit rectangle is split into fourths."
        }
      },
      choices: [
        { value: "15/4", label: `${fractionHTML("15", "4")} square units`, correct: true },
        { value: "8/4", label: `${fractionHTML("8", "4")} square units` },
        { value: "15", label: "15 square units" },
        { value: "5/4", label: `${fractionHTML("5", "4")} square units` }
      ],
      hints: [
        "There are 5 columns.",
        "Each column has 3 fourth-size pieces shaded.",
        "5 x 3 shaded fourths makes 15 fourths."
      ],
      correctFeedback: "Right. 5 columns times 3 fourths gives 15 fourths, or 15/4 square units.",
      incorrectFeedback: "Count the shaded fourth-size pieces across all 5 columns."
    },
    {
      id: "estimate-four-by-five-thirds",
      skill: "Estimate products",
      prompt: `Before calculating 4 x ${fractionHTML("5", "3")}, what should you expect?`,
      visual: {
        type: "area",
        model: {
          length: 4,
          numerator: 5,
          denominator: 3,
          context: "A 4-unit by 5/3-unit rectangle is taller than 1 unit."
        }
      },
      choices: [
        { value: "greater", label: "The product should be greater than 4.", correct: true },
        { value: "less", label: "The product should be less than 4." },
        { value: "equal", label: "The product should be exactly 4." },
        { value: "zero", label: "The product should be 0." }
      ],
      hints: [
        "Compare 5/3 to 1.",
        "5/3 is greater than 1 because 3/3 is one whole.",
        "Multiplying 4 by a number greater than 1 makes a product greater than 4."
      ],
      correctFeedback: "Yes. Since 5/3 is greater than 1, 4 x 5/3 must be greater than 4.",
      incorrectFeedback: "Estimate by comparing the fraction factor to 1 before multiplying."
    }
  ]
};

function mergePracticeBanks(banks) {
  return banks.reduce((merged, bank) => {
    Object.entries(bank || {}).forEach(([topic, questions]) => {
      merged[topic] = [
        ...(merged[topic] || []),
        ...(Array.isArray(questions) ? questions : [])
      ];
    });
    return merged;
  }, {});
}

const loadedPracticeBanks = (typeof window !== "undefined")
  ? [window.unit1PracticeBank, window.unit2PracticeBank, window.unit3PracticeBank, window.unit4PracticeBank, window.unit5PracticeBank, window.unit6PracticeBank, window.unit7PracticeBank, window.unit8PracticeBank].filter(Boolean)
  : [];

const practiceSets = loadedPracticeBanks.length
  ? mergePracticeBanks(loadedPracticeBanks)
  : starterPracticeSets;

const pizzaMessages = {
  "0.1": "0.1 means 1 out of 10 equal pizza slices. One tenth is shaded.",
  "0.10": "0.10 means 10 out of 100 smaller pieces. The shaded area is the same one tenth.",
  "0.100": "0.100 means 100 out of 1000 even smaller pieces. The amount is still one tenth."
};

const equivalenceData = {
  twoTenths: {
    amount: "0.2",
    title: "Two tenths",
    forms: [
      { label: "decimal", value: decimalHTML("0.2") },
      { label: "fraction", value: fractionHTML("2", "10") },
      { label: "renamed", value: `${fractionHTML("20", "100")} = ${decimalHTML("0.20")}` }
    ],
    visual: "grid",
    shaded: 20,
    shadedClass: "is-tenth",
    caption: "Two tenths can be renamed as twenty hundredths. The shaded part stays the same."
  },
  oneAndQuarter: {
    amount: "1.25",
    title: "One and twenty-five hundredths",
    forms: [
      { label: "decimal", value: decimalHTML("1.25") },
      { label: "fraction", value: `1 + ${fractionHTML("25", "100")}` },
      { label: "renamed", value: `${decimalHTML("1.00")} + ${decimalHTML("0.25")}` }
    ],
    visual: "whole-grid",
    shaded: 25,
    shadedClass: "is-shaded",
    caption: "One whole stays whole. The .25 part is twenty-five hundredths, the same as one quarter."
  },
  fiveWholes: {
    amount: "5",
    title: "Five wholes",
    forms: [
      { label: "whole", value: "5" },
      { label: "fraction", value: fractionHTML("5", "1") },
      { label: "decimal", value: decimalHTML("5.0") }
    ],
    visual: "cookies",
    cookies: 5,
    caption: "Five cookies can be named 5, 5/1, or 5.0. Zero tenths adds no extra part."
  }
};

const equivalentFractionData = {
  half: { numerator: 1, denominator: 2 },
  thirds: { numerator: 2, denominator: 3 },
  quarters: { numerator: 3, denominator: 4 }
};

const fractionDivisionData = {
  threeByFour: { total: 3, groups: 4 },
  twoByThree: { total: 2, groups: 3 },
  fiveByFour: { total: 5, groups: 4 }
};

const sharingPresetData = {
  "3/4": { total: 3, groups: 4, object: "sandwich" },
  "2/3": { total: 2, groups: 3, object: "sandwich" },
  "5/4": { total: 5, groups: 4, object: "sandwich" }
};

const mixedSharingData = {
  "5/2": { total: 5, groups: 2, object: "sandwich" },
  "7/3": { total: 7, groups: 3, object: "sandwich" },
  "9/4": { total: 9, groups: 4, object: "sandwich" }
};

const fractionOfWholeData = {
  oneThirdOf6: {
    numerator: 1,
    denominator: 3,
    whole: 6,
    itemName: "mile",
    context: "A 6-mile trail is split into 3 equal parts."
  },
  oneFourthOf12: {
    numerator: 1,
    denominator: 4,
    whole: 12,
    itemName: "orange",
    context: "12 oranges are split into 4 equal groups."
  },
  oneFifthOf10: {
    numerator: 1,
    denominator: 5,
    whole: 10,
    itemName: "paper",
    itemPlural: "papers",
    context: "10 papers are split into 5 equal stacks."
  },
  twoThirdsOf6: {
    numerator: 2,
    denominator: 3,
    whole: 6,
    itemName: "mile",
    context: "A 6-mile trail is split into 3 equal parts, and 2 parts are used."
  },
  threeFourthsOf12: {
    numerator: 3,
    denominator: 4,
    whole: 12,
    itemName: "orange",
    context: "12 oranges are split into 4 equal groups, and 3 groups are used."
  },
  threeFifthsOf10: {
    numerator: 3,
    denominator: 5,
    whole: 10,
    itemName: "paper",
    itemPlural: "papers",
    context: "10 papers are split into 5 equal stacks, and 3 stacks are used."
  }
};

const fractionAreaData = {
  sixByTwoThirds: {
    length: 6,
    numerator: 2,
    denominator: 3,
    context: "A rectangle is 6 units long and 2/3 unit tall."
  },
  fiveByThreeFourths: {
    length: 5,
    numerator: 3,
    denominator: 4,
    context: "A rectangle is 5 units long and 3/4 unit tall."
  },
  eightByOneFourth: {
    length: 8,
    numerator: 1,
    denominator: 4,
    context: "A rectangle is 8 units long and 1/4 unit tall."
  },
  fourByFiveThirds: {
    length: 4,
    numerator: 5,
    denominator: 3,
    context: "A rectangle is 4 units long and 5/3 units tall."
  },
  threeBySevenFourths: {
    length: 3,
    numerator: 7,
    denominator: 4,
    context: "A rectangle is 3 units long and 7/4 units tall."
  },
  sixByEightFifths: {
    length: 6,
    numerator: 8,
    denominator: 5,
    context: "A rectangle is 6 units long and 8/5 units tall."
  }
};

const mixedAreaData = {
  twoByThreeTwoFifths: {
    length: 2,
    whole: 3,
    numerator: 2,
    denominator: 5,
    context: "A rectangle is 2 units by 3 2/5 units."
  },
  fiveByOneThreeFourths: {
    length: 5,
    whole: 1,
    numerator: 3,
    denominator: 4,
    context: "A rectangle is 5 units by 1 3/4 units."
  },
  threeByTwoOneThird: {
    length: 3,
    whole: 2,
    numerator: 1,
    denominator: 3,
    context: "A rectangle is 3 units by 2 1/3 units."
  }
};

const fractionOverlapData = {
  oneThirdByOneFourth: {
    rowNumerator: 1,
    rowDenominator: 3,
    colNumerator: 1,
    colDenominator: 4,
    context: "A pan is 1/3 full, and someone eats 1/4 of the filled part.",
    firstLabel: "1/3 of the whole is shaded in rows.",
    secondLabel: "1/4 of that part is selected in columns.",
    productLabel: "Only 1 of the 12 small pieces is in both selections."
  },
  twoFourthByThreeFifth: {
    rowNumerator: 2,
    rowDenominator: 4,
    colNumerator: 3,
    colDenominator: 5,
    context: "A park is split into fourths one way and fifths the other way.",
    firstLabel: "2 of 4 rows are selected.",
    secondLabel: "3 of 5 columns are selected.",
    productLabel: "The overlap has 2 x 3 = 6 pieces out of 4 x 5 = 20."
  },
  threeFourthBySevenFifth: {
    rowNumerator: 3,
    rowDenominator: 4,
    colNumerator: 7,
    colDenominator: 5,
    context: "One side length is 3/4 unit and the other is 7/5 units, which is more than one whole.",
    firstLabel: "3 of 4 rows are selected.",
    secondLabel: "7 fifth-columns are selected, so the model stretches past one whole.",
    productLabel: "There are 3 x 7 = 21 twentieths, or 1 1/20 square units."
  }
};

const unitFractionDivisionData = {
  oneThirdByFour: {
    unitDenominator: 3,
    groups: 4,
    context: "1/3 pan of macaroni is shared by 4 people.",
    object: "pan"
  },
  oneHalfByFive: {
    unitDenominator: 2,
    groups: 5,
    context: "1/2 gallon of lemonade is shared by 5 friends.",
    object: "gallon"
  },
  oneFourthByThree: {
    unitDenominator: 4,
    groups: 3,
    context: "1/4 yard of ribbon is shared by 3 students.",
    object: "yard"
  }
};

const wholeUnitDivisionData = {
  fourByOneThird: {
    whole: 4,
    unitDenominator: 3,
    context: "There are 4 wholes. Each group is 1/3 of a whole.",
    object: "whole"
  },
  threeByOneFourth: {
    whole: 3,
    unitDenominator: 4,
    context: "There are 3 wholes. Each group is 1/4 of a whole.",
    object: "whole"
  },
  twoByOneFifth: {
    whole: 2,
    unitDenominator: 5,
    context: "There are 2 wholes. Each group is 1/5 of a whole.",
    object: "whole"
  }
};

const fractionStoryData = {
  milkWhole: {
    title: "Milk container",
    prompt: "Two cups of milk fill 1/3 of a container. How many cups fit in the whole container?",
    whole: "the full container",
    known: "2 cups is 1/3 of the container",
    unknown: "the whole container",
    action: "unknown whole",
    diagram: "tape",
    equationHTML: `2 ÷ ${fractionHTML(1, 3)} = 6`,
    checkHTML: `${fractionHTML(1, 3)} x 6 = 2`,
    answer: "6 cups",
    reason: "If one third is 2 cups, then three thirds are 6 cups."
  },
  hamburgersFit: {
    title: "Hamburgers",
    prompt: "A cook has 2 pounds of beef. Each burger uses 1/4 pound. How many burgers can the cook make?",
    whole: "1 pound",
    known: "2 pounds total and 1/4 pound per burger",
    unknown: "how many 1/4-pound groups fit",
    action: "measurement division",
    diagram: "count",
    equationHTML: `2 ÷ ${fractionHTML(1, 4)} = 8`,
    checkHTML: `8 x ${fractionHTML(1, 4)} = 2`,
    answer: "8 burgers",
    reason: "Each pound has 4 fourths. Two pounds have 8 fourths."
  },
  saladShare: {
    title: "Potato salad",
    prompt: "A family shares 1/2 pound of potato salad equally among 4 people. How much does each person get?",
    whole: "1 pound",
    known: "1/2 pound shared by 4",
    unknown: "one person's share",
    action: "sharing division",
    diagram: "split",
    equationHTML: `${fractionHTML(1, 2)} ÷ 4 = ${fractionHTML(1, 8)}`,
    checkHTML: `${fractionHTML(1, 8)} x 4 = ${fractionHTML(1, 2)}`,
    answer: "1/8 pound",
    reason: "Splitting one half into 4 equal shares makes eighths."
  },
  distancePart: {
    title: "Distance",
    prompt: "A trail is 6 kilometers long. A student walks 2/3 of the trail. How far did the student walk?",
    whole: "the 6-kilometer trail",
    known: "2/3 of 6 kilometers",
    unknown: "the walked distance",
    action: "part of an amount",
    diagram: "area",
    equationHTML: `${fractionHTML(2, 3)} x 6 = 4`,
    checkHTML: `6 ÷ 3 x 2 = 4`,
    answer: "4 kilometers",
    reason: "One third of 6 is 2 kilometers. Two thirds are 4 kilometers."
  }
};

const fractionLineData = {
  oneFourth: { numerator: 1, denominator: 4 },
  fourFourths: { numerator: 4, denominator: 4 },
  fiveFourths: { numerator: 5, denominator: 4 },
  sevenThirds: { numerator: 7, denominator: 3 }
};

const fractionCompareData = {
  halfVsThreeEighths: {
    left: { numerator: 1, denominator: 2 },
    right: { numerator: 3, denominator: 8 }
  },
  twoThirdsVsThreeQuarters: {
    left: { numerator: 2, denominator: 3 },
    right: { numerator: 3, denominator: 4 }
  },
  fiveSixthsVsSevenTwelfths: {
    left: { numerator: 5, denominator: 6 },
    right: { numerator: 7, denominator: 12 }
  }
};

const fractionCalcData = {
  halfPlusQuarter: {
    operation: "+",
    left: { numerator: 1, denominator: 2 },
    right: { numerator: 1, denominator: 4 }
  },
  twoThirdsPlusSixth: {
    operation: "+",
    left: { numerator: 2, denominator: 3 },
    right: { numerator: 1, denominator: 6 }
  },
  threeQuartersMinusEighth: {
    operation: "-",
    left: { numerator: 3, denominator: 4 },
    right: { numerator: 1, denominator: 8 }
  },
  fiveSixthsMinusThird: {
    operation: "-",
    left: { numerator: 5, denominator: 6 },
    right: { numerator: 1, denominator: 3 }
  }
};

const operationData = {
  compare: {
    title: "Compare 1.525 and 1.5",
    places: ["ones", "dot", "10ths", "100ths", "1000ths"],
    beforeRows: [
      { label: "A", cells: ["1", ".", "5", "2", "5"] },
      { label: "B", cells: ["1", ".", "5", "", ""] }
    ],
    afterRows: [
      { label: "A", cells: ["1", ".", "5", "2", "5"] },
      { label: "B", cells: ["1", ".", "5", { value: "0", helper: true }, { value: "0", helper: true }] }
    ],
    beforeResult: "First line up the decimal points.",
    afterResult: "1.525 > 1.500, so 1.525 > 1.5.",
    fractionSteps: [
      "1.525 = 1525/1000",
      "1.5 = 1500/1000",
      "1525/1000 is greater than 1500/1000"
    ]
  },
  add: {
    title: "Add 0.1 + 0.10",
    places: ["ones", "dot", "10ths", "100ths", ""],
    beforeRows: [
      { label: "+", cells: ["0", ".", "1", "", ""] },
      { label: "", cells: ["0", ".", "1", "0", ""] }
    ],
    afterRows: [
      { label: "+", cells: ["0", ".", "1", { value: "0", helper: true }, ""] },
      { label: "", cells: ["0", ".", "1", "0", ""] }
    ],
    beforeResult: "The tenths match, but the hundredths place needs a helper zero.",
    afterResult: "0.10 + 0.10 = 0.20, and 0.20 = 0.2.",
    fractionSteps: [
      "0.1 = 1/10 = 10/100",
      "0.10 = 10/100",
      "10/100 + 10/100 = 20/100 = 0.20"
    ]
  },
  subtract: {
    title: "Subtract 1.5 - 0.25",
    places: ["ones", "dot", "10ths", "100ths", ""],
    beforeRows: [
      { label: "-", cells: ["1", ".", "5", "", ""] },
      { label: "", cells: ["0", ".", "2", "5", ""] }
    ],
    afterRows: [
      { label: "-", cells: ["1", ".", "5", { value: "0", helper: true }, ""] },
      { label: "", cells: ["0", ".", "2", "5", ""] }
    ],
    beforeResult: "Rename 1.5 so the hundredths place has something to line up with.",
    afterResult: "1.50 - 0.25 = 1.25.",
    fractionSteps: [
      "1.5 = 1.50 = 150/100",
      "0.25 = 25/100",
      "150/100 - 25/100 = 125/100 = 1.25"
    ]
  }
};

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function setActive(selector, value, attrName) {
  qsa(selector).forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attrName] === value);
  });
}

function fractionHTML(numerator, denominator) {
  return `<span class="frac"><span>${numerator}</span><span>${denominator}</span></span>`;
}

function decimalDigitsHTML(digits, helperPlaces = []) {
  return digits
    .split("")
    .map((digit, index) => {
      const helperClass = helperPlaces.includes(index) ? " helper" : "";
      return `<span class="${decimalPlaceClasses[index] || "thousandth"}${helperClass}">${digit}</span>`;
    })
    .join("");
}

function decimalHTML(value, helperPlaces = []) {
  const [whole, decimal = ""] = value.split(".");
  const wholeHTML = whole
    .split("")
    .map((digit) => `<span class="whole">${digit}</span>`)
    .join("");

  if (!decimal) {
    return wholeHTML;
  }

  return `${wholeHTML}<span class="thousandth">.</span>${decimalDigitsHTML(decimal, helperPlaces)}`;
}

function clickableMathPart(part, html, label) {
  const active = state.equivalenceHighlight === part ? " is-active" : "";
  const pressed = state.equivalenceHighlight === part ? "true" : "false";
  return `
    <button class="math-part${active}" type="button" data-equivalence-highlight="${part}" aria-label="${label}" aria-pressed="${pressed}">
      ${html}
    </button>
  `;
}

function fractionPartButton(part, html, label) {
  const active = state.fractionMeaningHighlight === part ? " is-active" : "";
  const pressed = state.fractionMeaningHighlight === part ? "true" : "false";
  return `
    <button class="math-part fraction-focus-part${active}" type="button" data-fraction-highlight="${part}" aria-label="${label}" aria-pressed="${pressed}">
      ${html}
    </button>
  `;
}

function plural(count, singular, pluralForm = `${singular}s`) {
  return count === 1 ? singular : pluralForm;
}

function fractionPieceName(denominator, count = 2) {
  const names = {
    2: ["half", "halves"],
    3: ["third", "thirds"],
    4: ["fourth", "fourths"],
    5: ["fifth", "fifths"],
    6: ["sixth", "sixths"],
    7: ["seventh", "sevenths"],
    8: ["eighth", "eighths"],
    9: ["ninth", "ninths"],
    10: ["tenth", "tenths"],
    11: ["eleventh", "elevenths"],
    12: ["twelfth", "twelfths"]
  };
  const fallback = [`${denominator}th`, `${denominator}ths`];
  const [singular, pluralName] = names[denominator] || fallback;
  return count === 1 ? singular : pluralName;
}

function clampInteger(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, number));
}

function greatestCommonDivisor(a, b) {
  let left = Math.abs(a);
  let right = Math.abs(b);
  while (right) {
    const next = left % right;
    left = right;
    right = next;
  }
  return left || 1;
}

function leastCommonMultiple(a, b) {
  return Math.abs(a * b) / greatestCommonDivisor(a, b);
}

function simplifyFractionParts(numerator, denominator) {
  if (numerator === 0) {
    return { numerator: 0, denominator: 1 };
  }
  const divisor = greatestCommonDivisor(numerator, denominator);
  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor
  };
}

function fractionText(fraction) {
  return `${fraction.numerator}/${fraction.denominator}`;
}

function mixedNumberHTML(numerator, denominator) {
  const whole = Math.floor(numerator / denominator);
  const leftover = numerator % denominator;

  if (leftover === 0) {
    return `${whole}`;
  }

  if (whole === 0) {
    return fractionHTML(numerator, denominator);
  }

  return `${whole} + ${fractionHTML(leftover, denominator)}`;
}

function mixedNumberText(numerator, denominator) {
  const whole = Math.floor(numerator / denominator);
  const leftover = numerator % denominator;

  if (leftover === 0) {
    return `${whole}`;
  }

  if (whole === 0) {
    return `${numerator}/${denominator}`;
  }

  return `${whole} ${leftover}/${denominator}`;
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function commonFractionModel(left, right) {
  const denominator = leastCommonMultiple(left.denominator, right.denominator);
  return {
    denominator,
    left: {
      ...left,
      commonNumerator: left.numerator * denominator / left.denominator
    },
    right: {
      ...right,
      commonNumerator: right.numerator * denominator / right.denominator
    }
  };
}

function sanitizeWholeInput(value) {
  return value.replace(/\D/g, "").slice(0, 3);
}

function getWholeModel(rawValue) {
  const raw = sanitizeWholeInput(rawValue);
  const display = raw || "0";
  const numeric = Number(display);
  const padded = display.padStart(3, "0");
  const written = display.padStart(3, " ");
  const hundreds = Number(padded[0]);
  const tens = Number(padded[1]);
  const ones = Number(padded[2]);

  return {
    display,
    numeric,
    padded,
    written,
    hundreds,
    tens,
    ones
  };
}

function sanitizeDecimalInput(value) {
  const cleaned = String(value).replace(",", ".").replace(/[^\d.]/g, "");
  const dotIndex = cleaned.indexOf(".");

  if (cleaned === "") return "0";

  if (dotIndex === -1) {
    if (cleaned === "0") return "0";
    return `0.${cleaned.replace(/\D/g, "").slice(0, 3)}`;
  }

  const decimalDigits = cleaned
    .slice(dotIndex + 1)
    .replace(/\D/g, "")
    .slice(0, 3);

  return `0.${decimalDigits}`;
}

function getDecimalModel(rawValue) {
  const display = sanitizeDecimalInput(rawValue);
  const decimalDigits = display.includes(".")
    ? display.split(".")[1]
    : "";
  const paddedDigits = decimalDigits.padEnd(3, "0").slice(0, 3);
  const thousandths = Number(paddedDigits);
  const basePrecision = thousandths % 100 === 0
    ? 1
    : thousandths % 10 === 0
      ? 2
      : 3;

  return {
    display,
    thousandths,
    basePrecision
  };
}

function sanitizeEquivalenceInput(value) {
  const cleaned = String(value).replace(",", ".").replace(/[^\d.]/g, "");
  const dotIndex = cleaned.indexOf(".");
  const rawWhole = dotIndex === -1 ? cleaned : cleaned.slice(0, dotIndex);
  const wholeDigits = rawWhole.replace(/\D/g, "");
  const whole = Math.min(9, Number(wholeDigits || "0"));

  if (dotIndex === -1) {
    return String(whole);
  }

  const decimalDigits = cleaned
    .slice(dotIndex + 1)
    .replace(/\D/g, "")
    .slice(0, 3);

  return `${whole}.${decimalDigits}`;
}

function getEquivalenceAmountModel(rawValue) {
  const display = sanitizeEquivalenceInput(rawValue);
  const [wholePart, decimalPart = ""] = display.split(".");
  const whole = Number(wholePart || "0");
  const decimalDigits = decimalPart.slice(0, 3);
  const paddedDigits = decimalDigits.padEnd(3, "0").slice(0, 3);
  const fractionThousandths = Number(paddedDigits);
  const trimmedDigits = decimalDigits.replace(/0+$/, "");
  const precision = trimmedDigits.length;
  const denominator = precision === 0 ? 1 : 10 ** precision;
  const fractionNumerator = precision === 0 ? 0 : Number(trimmedDigits);

  return {
    display,
    whole,
    decimalDigits,
    fractionThousandths,
    precision,
    denominator,
    fractionNumerator,
    totalThousandths: whole * 1000 + fractionThousandths
  };
}

function decimalDisplayForAmount(model, precision = model.precision) {
  if (precision <= 0) return String(model.whole);

  const digits = String(model.fractionThousandths).padStart(3, "0").slice(0, precision);
  return `${model.whole}.${digits}`;
}

function renderWholeDisplay(display, highlightZeros = true) {
  const placeClassesFromRight = ["ones-color", "tens-color", "hundreds-color"];
  return display
    .split("")
    .map((digit, index) => {
      const placeClass = placeClassesFromRight[display.length - 1 - index] || "hundreds-color";
      return `<span class="${digit === "0" && highlightZeros ? "helper" : placeClass}">${digit}</span>`;
    })
    .join("");
}

function renderTinyCookies(count) {
  return Array.from({ length: count }, () => '<span class="mini-cookie"></span>').join("");
}

function renderHundredPlate() {
  return `
    <div class="cookie-plate hundred-cookie-plate" aria-label="plate of 100 cookies">
      <div class="plate-cookies hundred-plate-grid">${renderTinyCookies(100)}</div>
      <span class="plate-count">100</span>
    </div>
  `;
}

function renderTenPlate(isHighlighted = false) {
  return `
    <div class="cookie-plate ten-cookie-plate ${isHighlighted ? "is-regroup-highlight" : ""}" aria-label="plate of 10 cookies">
      <div class="plate-cookies ten-plate-grid">${renderTinyCookies(10)}</div>
      <span class="plate-count">10</span>
    </div>
  `;
}

function renderTenPlatePlaceholder() {
  return '<div class="cookie-plate ten-cookie-plate is-placeholder" aria-hidden="true"></div>';
}

function renderLooseCookie() {
  return '<span class="cookie" aria-label="single cookie"></span>';
}

function renderTraySlot(content = "", extraClass = "") {
  return `<span class="tray-cookie-slot ${extraClass}">${content}</span>`;
}

function renderTrayCookies(count, options = {}) {
  const slots = [];
  const emptyBefore = options.emptyBefore || 0;
  const movingSlot = options.movingSlot || null;

  for (let index = 0; index < emptyBefore; index += 1) {
    slots.push(renderTraySlot("", "is-empty"));
  }

  if (movingSlot === "before") {
    slots.push(renderTraySlot("", "is-empty is-moving-slot"));
  }

  for (let index = 0; index < count; index += 1) {
    slots.push(renderTraySlot(renderLooseCookie()));
  }

  if (movingSlot === "after") {
    slots.push(renderTraySlot("", "is-empty is-moving-slot"));
  }

  return slots.join("");
}

function renderPlateStack(count, renderPlate, emptyLabel) {
  if (count === 0) {
    return `
      <div class="empty-plate">
        <span>0</span>
        <small>${emptyLabel}</small>
      </div>
    `;
  }

  return Array.from({ length: count }, () => renderPlate()).join("");
}

function renderTenPlateStack(count, highlightedTensCount = null, reserveBorrowedSlot = false) {
  if (count === 0 && !reserveBorrowedSlot) {
    return renderEmptyPlaceLabel("no tens yet");
  }

  const plates = Array.from({ length: count }, (_, index) => renderTenPlate(index + 1 === highlightedTensCount));
  if (reserveBorrowedSlot) {
    plates.push(renderTenPlatePlaceholder());
  }

  return plates.join("");
}

function renderEmptyPlaceLabel(label) {
  return `<div class="empty-plate empty-plate-plain"><small>${label}</small></div>`;
}

function getGrowthModel() {
  const count = Math.max(0, Math.min(99, state.growthCount));
  return {
    count,
    tens: Math.floor(count / 10),
    ones: count % 10
  };
}

function clampCookieAmount(value) {
  return Math.max(1, Math.min(9, Number.isFinite(value) ? value : 1));
}

function clampResetAmount(value) {
  return Math.max(0, Math.min(99, Number.isFinite(value) ? value : 1));
}

function placeCountHTML(value, place) {
  const className = place === "tens" ? "tens-color" : "ones-color";
  return `<span class="${className} place-count-text">${value}</span>`;
}

function neutralGrowthMessage(model) {
  return `${model.count} ${plural(model.count, "cookie")} means ${model.tens} ${plural(model.tens, "plate")} of 10 and ${model.ones} loose ${plural(model.ones, "cookie")}.`;
}

function getRolloverPhase(progress) {
  if (progress < rolloverTimeline.fillStart) return "ready";
  if (progress < rolloverTimeline.moveStart) return "fill";
  if (progress < rolloverTimeline.finalStart) return "move";
  return "final";
}

function easeInOut(progress) {
  if (progress < 0.5) {
    return 2 * progress * progress;
  }

  return 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

function getMoveProgress(progress) {
  if (progress <= rolloverTimeline.moveStart) return 0;
  if (progress >= rolloverTimeline.moveEnd) return 1;
  return easeInOut((progress - rolloverTimeline.moveStart) / (rolloverTimeline.moveEnd - rolloverTimeline.moveStart));
}

function getAnimationType(animation = state.growthAnimation) {
  return animation?.type || "ones-to-tens";
}

function getTimelineDuration(animation = state.growthAnimation) {
  if (animation?.durationMs) {
    return animation.durationMs;
  }

  return getAnimationType(animation) === "tens-to-ones"
    ? borrowTimeline.durationMs
    : rolloverTimeline.durationMs;
}

function getSteppedCount(progress, totalSteps, start = 0, end = stepTimeline.finalStart) {
  if (totalSteps <= 0 || progress <= start) return 0;
  if (progress >= end) return totalSteps;

  const localProgress = (progress - start) / (end - start);
  return Math.min(totalSteps, Math.floor(localProgress * (totalSteps + 1)));
}

function getCookieStepMotion(progress, totalSteps, start = 0, end = stepTimeline.finalStart, includeAtStart = false) {
  if (totalSteps <= 0) {
    return { completed: 0, isMoving: false, stepProgress: 0, movingIndex: null };
  }

  if (includeAtStart ? progress < start : progress <= start) {
    return { completed: 0, isMoving: false, stepProgress: 0, movingIndex: null };
  }

  if (progress >= end) {
    return { completed: totalSteps, isMoving: false, stepProgress: 1, movingIndex: null };
  }

  const localProgress = (progress - start) / (end - start);
  const scaledProgress = localProgress * totalSteps;
  const movingIndex = Math.min(totalSteps - 1, Math.floor(scaledProgress));
  return {
    completed: movingIndex,
    isMoving: true,
    stepProgress: easeInOut(scaledProgress - movingIndex),
    movingIndex
  };
}

function getAddManyParts(animation = state.growthAnimation) {
  const fromOnes = animation.from % 10;
  const fillNeeded = Math.max(0, 10 - fromOnes);
  const crossesIntoTens = fromOnes + animation.amount >= 10;
  const remainder = crossesIntoTens ? Math.max(0, animation.amount - fillNeeded) : 0;

  return {
    fromOnes,
    fillNeeded,
    remainder,
    crossesIntoTens
  };
}

function getAddManySegments(animation = state.growthAnimation) {
  const { fillNeeded, remainder, crossesIntoTens } = getAddManyParts(animation);
  if (!crossesIntoTens) {
    return {
      addEnd: stepTimeline.finalStart,
      finalStart: stepTimeline.finalStart
    };
  }

  const fillWeight = Math.max(1, fillNeeded);
  const holdWeight = 1.15;
  const remainderWeight = Math.max(0, remainder);
  const moveWeight = 4;
  const finalWeight = 0.7;
  const totalWeight = fillWeight + holdWeight + remainderWeight + moveWeight + finalWeight;
  const fillEnd = fillWeight / totalWeight;
  const holdEnd = (fillWeight + holdWeight) / totalWeight;
  const remainderEnd = (fillWeight + holdWeight + remainderWeight) / totalWeight;
  const moveEnd = (fillWeight + holdWeight + remainderWeight + moveWeight) / totalWeight;

  return {
    fillEnd,
    holdEnd,
    remainderEnd,
    moveStart: remainderEnd,
    moveEnd,
    finalStart: moveEnd
  };
}

function getAddManyStage(animation = state.growthAnimation) {
  const segments = getAddManySegments(animation);
  const { crossesIntoTens } = getAddManyParts(animation);
  const progress = animation.progress;

  if (!crossesIntoTens) {
    return progress < segments.finalStart ? "add" : "final";
  }

  if (progress < segments.fillEnd) return "fill";
  if (progress < segments.holdEnd) return "hold";
  if (progress < segments.remainderEnd) return "remainder";
  if (progress < segments.finalStart) return "move";
  return "final";
}

function getAddManyMoveProgress(animation = state.growthAnimation) {
  const segments = getAddManySegments(animation);
  const progress = animation.progress;
  if (progress <= segments.moveStart) return 0;
  if (progress >= segments.moveEnd) return 1;
  return easeInOut((progress - segments.moveStart) / (segments.moveEnd - segments.moveStart));
}

function getSubtractManyStage(animation = state.growthAnimation) {
  if (getAnimationType(animation) === "subtract-many-from-ones") {
    return animation.progress < stepTimeline.finalStart ? "remove" : "final";
  }

  const consumeEnd = animation.consumeEnd ?? 0;
  return animation.progress < consumeEnd ? "remove" : "borrow";
}

function getSubtractBorrowProgress(animation = state.growthAnimation) {
  const consumeEnd = animation.consumeEnd ?? 0;
  if (animation.progress <= consumeEnd) return 0;
  return Math.min(1, (animation.progress - consumeEnd) / (1 - consumeEnd));
}

function isBorrowMoveAnimation(animation = state.growthAnimation) {
  if (!animation) return false;
  const type = getAnimationType(animation);
  return type === "tens-to-ones"
    || (type === "subtract-many-with-borrow" && getSubtractManyStage(animation) === "borrow");
}

function getEffectiveBorrowProgress(animation = state.growthAnimation) {
  return getAnimationType(animation) === "subtract-many-with-borrow"
    ? getSubtractBorrowProgress(animation)
    : animation.progress;
}

function getEffectiveMoveProgress(animation = state.growthAnimation) {
  if (getAnimationType(animation) === "add-many-to-tens") {
    return getAddManyMoveProgress(animation);
  }

  return getMoveProgress(animation.progress);
}

function getBorrowCookieMotion(progress, amount) {
  return getCookieStepMotion(progress, amount, borrowTimeline.crossStart, borrowTimeline.finalStart);
}

function activeCookieCount(motion) {
  return motion.isMoving ? 1 : 0;
}

function subtractMovingCookieHasLeftOnes(motion) {
  return motion.isMoving && motion.stepProgress >= stepTimeline.subtractCookieLeavesOnesAt;
}

function subtractVisualRemovedCount(motion) {
  return motion.completed + activeCookieCount(motion);
}

function subtractDigitRemovedCount(motion) {
  return motion.completed + (subtractMovingCookieHasLeftOnes(motion) ? 1 : 0);
}

function getActiveMovingCookie(animation = state.growthAnimation) {
  if (!animation) return null;

  const type = getAnimationType(animation);
  if (type === "add-many-to-tens") {
    const stage = getAddManyStage(animation);
    const { fillNeeded, remainder, crossesIntoTens } = getAddManyParts(animation);
    const segments = getAddManySegments(animation);

    if (!crossesIntoTens) {
      const motion = getCookieStepMotion(animation.progress, animation.amount, 0, stepTimeline.finalStart, true);
      return motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null;
    }

    if (stage === "fill") {
      const motion = getCookieStepMotion(animation.progress, fillNeeded, 0, segments.fillEnd, true);
      return motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null;
    }

    if (stage === "remainder") {
      const motion = getCookieStepMotion(animation.progress, remainder, segments.holdEnd, segments.remainderEnd, true);
      return motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null;
    }

    return null;
  }

  if (type === "subtract-many-from-ones") {
    const motion = getCookieStepMotion(animation.progress, animation.amount);
    return motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null;
  }

  if (type === "subtract-many-with-borrow") {
    if (getSubtractManyStage(animation) === "remove") {
      const motion = getCookieStepMotion(animation.progress, animation.looseOnesToRemove, 0, animation.consumeEnd);
      return motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null;
    }

    const borrowProgress = getSubtractBorrowProgress(animation);
    const motion = getBorrowCookieMotion(borrowProgress, animation.borrowAmount);
    return motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null;
  }

  if (type === "tens-to-ones") {
    const motion = getBorrowCookieMotion(animation.progress, animation.amount);
    return motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null;
  }

  return null;
}

function getBorrowStage(progress) {
  if (progress < borrowTimeline.prepStart) return "ready";
  if (progress < borrowTimeline.moveStart) return "prep";
  if (progress < borrowTimeline.moveEnd) return "move";
  if (progress < borrowTimeline.crossStart) return "open";
  if (progress < borrowTimeline.fadeStart) return "cross";
  if (progress < borrowTimeline.finalStart) return "fade";
  return "final";
}

function getBorrowMoveProgress(progress) {
  if (progress <= borrowTimeline.moveStart) return 0;
  if (progress >= borrowTimeline.moveEnd) return 1;
  return easeInOut((progress - borrowTimeline.moveStart) / (borrowTimeline.moveEnd - borrowTimeline.moveStart));
}

function borrowTensHasLeft(progress) {
  const stage = getBorrowStage(progress);
  return !["ready", "prep", "move"].includes(stage);
}

function shouldHideBorrowOnesPlate(progress) {
  return getBorrowStage(progress) === "move"
    && getBorrowMoveProgress(progress) >= borrowTimeline.hideOnesPlateAfterMove;
}

function getBorrowFadeProgress(progress) {
  if (progress <= borrowTimeline.fadeStart) return 0;
  if (progress >= borrowTimeline.finalStart) return 1;
  return (progress - borrowTimeline.fadeStart) / (borrowTimeline.finalStart - borrowTimeline.fadeStart);
}

function shouldShowMovingEmptyPlaceholder(progress) {
  return getRolloverPhase(progress) === "move"
    && getMoveProgress(progress) >= rolloverTimeline.showEmptyOnesAfterMove;
}

function getTimelineRenderMarker(animation = state.growthAnimation) {
  if (!animation) return "";

  const type = getAnimationType(animation);
  if (type === "add-many-to-tens") {
    const stage = getAddManyStage(animation);
    const { fillNeeded, remainder, crossesIntoTens } = getAddManyParts(animation);
    const segments = getAddManySegments(animation);
    const fillMotion = getCookieStepMotion(animation.progress, fillNeeded, 0, segments.fillEnd ?? stepTimeline.finalStart, true);
    const remainderMotion = getCookieStepMotion(animation.progress, remainder, segments.holdEnd ?? 0, segments.remainderEnd ?? 0, true);
    const directMotion = getCookieStepMotion(animation.progress, animation.amount, 0, stepTimeline.finalStart, true);
    return crossesIntoTens
      ? `${stage}:${fillMotion.completed}:${fillMotion.isMoving}:${remainderMotion.completed}:${remainderMotion.isMoving}:${getAddManyMoveProgress(animation).toFixed(2)}`
      : `${stage}:${directMotion.completed}:${directMotion.isMoving}`;
  }

  if (type === "subtract-many-from-ones") {
    const motion = getCookieStepMotion(animation.progress, animation.amount);
    return `${getSubtractManyStage(animation)}:${motion.completed}:${motion.isMoving}:${subtractMovingCookieHasLeftOnes(motion)}`;
  }

  if (type === "subtract-many-with-borrow") {
    if (getSubtractManyStage(animation) === "remove") {
      const motion = getCookieStepMotion(animation.progress, animation.looseOnesToRemove, 0, animation.consumeEnd);
      return `remove:${motion.completed}:${motion.isMoving}:${subtractMovingCookieHasLeftOnes(motion)}`;
    }

    const borrowProgress = getSubtractBorrowProgress(animation);
    const borrowMotion = getBorrowCookieMotion(borrowProgress, animation.borrowAmount);
    return `borrow:${getBorrowStage(borrowProgress)}:${borrowTensHasLeft(borrowProgress)}:${shouldHideBorrowOnesPlate(borrowProgress)}:${borrowMotion.completed}:${borrowMotion.isMoving}:${subtractMovingCookieHasLeftOnes(borrowMotion)}`;
  }

  const phase = getRolloverPhase(animation.progress);
  if (type === "tens-to-ones") {
    const borrowStage = getBorrowStage(animation.progress);
    const borrowMotion = getBorrowCookieMotion(animation.progress, animation.amount);
    return `${borrowStage}:${borrowTensHasLeft(animation.progress)}:${shouldHideBorrowOnesPlate(animation.progress)}:${borrowMotion.completed}:${borrowMotion.isMoving}:${subtractMovingCookieHasLeftOnes(borrowMotion)}`;
  }

  return `${phase}:${shouldShowMovingEmptyPlaceholder(animation.progress)}`;
}

function growthMessage(model) {
  const rolloverPhase = state.growthAnimation ? getRolloverPhase(state.growthAnimation.progress) : null;
  const animationType = getAnimationType();

  if (state.growthAnimation && animationType === "add-many-to-tens") {
    const { amount, from, to } = state.growthAnimation;
    const { fillNeeded, remainder, crossesIntoTens } = getAddManyParts(state.growthAnimation);
    const stage = getAddManyStage(state.growthAnimation);

    if (!crossesIntoTens) {
      return `Add ${amount} ${plural(amount, "cookie")} one by one. The ones digit can still hold the answer.`;
    }

    if (stage === "fill") {
      return `Start at ${from}. Add ${fillNeeded} ${plural(fillNeeded, "cookie")} to fill the ones plate to 10.`;
    }

    if (stage === "hold") {
      return "The ones plate is full. The ones digit disappears because one place only has digits 0 through 9.";
    }

    if (stage === "remainder") {
      return `The blue plate waits as one full ten. The remaining ${remainder} ${plural(remainder, "cookie")} start a fresh ones plate.`;
    }

    if (stage === "move") {
      return "After every new cookie has arrived, the blue full-ten plate moves into the tens place.";
    }

    return `${from} + ${amount} = ${to}. The full ten moved over, leaving ${to % 10} loose ${plural(to % 10, "cookie")}.`;
  }

  if (state.growthAnimation && animationType === "subtract-many-from-ones") {
    const motion = getCookieStepMotion(state.growthAnimation.progress, state.growthAnimation.amount);
    const removed = subtractDigitRemovedCount(motion);
    return `Subtract ${state.growthAnimation.amount} ${plural(state.growthAnimation.amount, "cookie")} one by one. ${removed} ${plural(removed, "cookie")} removed so far.`;
  }

  if (state.growthAnimation && animationType === "subtract-many-with-borrow") {
    if (getSubtractManyStage(state.growthAnimation) === "remove") {
      const motion = getCookieStepMotion(state.growthAnimation.progress, state.growthAnimation.looseOnesToRemove, 0, state.growthAnimation.consumeEnd);
      const removed = subtractDigitRemovedCount(motion);
      return `Remove the loose ones first: ${removed} of ${state.growthAnimation.looseOnesToRemove} removed. Then one ten will open into more ones.`;
    }

    const amount = state.growthAnimation.borrowAmount;
    const finalTens = Math.floor(state.growthAnimation.to / 10);
    const finalOnes = state.growthAnimation.to % 10;
    const borrowProgress = getSubtractBorrowProgress(state.growthAnimation);
    const borrowStage = getBorrowStage(borrowProgress);

    if (borrowStage === "ready" || borrowStage === "prep") {
      return "The loose ones are gone, so one plate of 10 gets ready to open.";
    }

    if (borrowStage === "move") {
      if (borrowTensHasLeft(borrowProgress)) {
        return "Now the blue plate has left the tens place, so the tens digit drops by 1.";
      }

      return "Keep the tens digit the same until the blue plate has moved out of the tens place.";
    }

    if (borrowStage === "open") {
      return "The plate opens into 10 loose ones first. Now there are ones to subtract from.";
    }

    if (borrowStage === "cross") {
      return `Move the remaining ${amount} ${plural(amount, "cookie")} from the ones plate to the side.`;
    }

    if (borrowStage === "fade") {
      return `The removed ${plural(amount, "cookie")} ${amount === 1 ? "moves" : "move"} to the side, leaving ${finalOnes} loose ${plural(finalOnes, "cookie")}.`;
    }

    return `After regrouping and subtracting, the number is ${state.growthAnimation.to}: ${finalTens} ${plural(finalTens, "ten")} and ${finalOnes} ${plural(finalOnes, "one")}.`;
  }

  if (state.growthAnimation && animationType === "tens-to-ones") {
    const amount = state.growthAnimation.amount;
    const finalTens = Math.floor(state.growthAnimation.to / 10);
    const finalOnes = state.growthAnimation.to % 10;
    const borrowStage = getBorrowStage(state.growthAnimation.progress);

    if (borrowStage === "ready" || borrowStage === "prep") {
      return "Use the bar to watch one plate of 10 move from the tens place into the ones place.";
    }

    if (borrowStage === "move") {
      if (borrowTensHasLeft(state.growthAnimation.progress)) {
        return "Now the blue plate has left the tens place, so the tens digit drops by 1.";
      }

      return "Keep the tens digit the same until the blue plate has moved out of the tens place.";
    }

    if (borrowStage === "open") {
      return "The plate opens into 10 loose ones first. Now there are ones to subtract from.";
    }

    if (borrowStage === "cross") {
      return `Move ${amount} ${plural(amount, "cookie")} from the ones plate to the side.`;
    }

    if (borrowStage === "fade") {
      return `The removed ${plural(amount, "cookie")} ${amount === 1 ? "moves" : "move"} to the side, leaving ${finalOnes} loose ${plural(finalOnes, "cookie")}.`;
    }

    return `The plate opened into 10 ones. After subtracting ${amount}, the number is ${state.growthAnimation.to}: ${finalTens} ${plural(finalTens, "ten")} and ${finalOnes} ${plural(finalOnes, "one")}.`;
  }

  if (rolloverPhase === "ready") {
    return "Use the bar to watch what happens when 9 ones get one more cookie.";
  }

  if (rolloverPhase === "fill") {
    return "The new cookie lands in the ones plate. The ones digit disappears because one place only has digits 0 through 9.";
  }

  if (rolloverPhase === "move") {
    return "Those 10 ones pack into one plate of 10 and move to the tens place.";
  }

  if (rolloverPhase === "final") {
    return "The ones digit is 0, and the new plate of 10 is in the tens place. The blue outline keeps the regrouped plate easy to follow.";
  }

  const previous = state.previousGrowthCount;
  const amount = state.lastGrowthAmount;
  const previousTens = Math.floor(previous / 10);
  const crossedUp = state.lastGrowthAction === "add" && previousTens < model.tens;
  const crossedDown = state.lastGrowthAction === "subtract" && previousTens > model.tens;

  if (state.lastGrowthAction === "reset") {
    return neutralGrowthMessage(model);
  }

  if (state.lastGrowthAction === "subtract" && previous === model.count) {
    return "There are no cookies to subtract. The count stays at 0.";
  }

  if (crossedDown) {
    return `To subtract ${amount}, one plate of 10 opens back into 10 ones. After removing cookies, the number is ${model.count}: ${model.tens} ${plural(model.tens, "ten")} and ${model.ones} ${plural(model.ones, "one")}.`;
  }

  if (state.lastGrowthAction === "subtract") {
    return `${previous} - ${amount} = ${model.count}. The tens digit is ${model.tens}, and the ones digit is ${model.ones}.`;
  }

  if (crossedUp && model.count !== 10) {
    return `The ones passed 9, so 10 ones packed into a plate of 10. Now the number is ${model.count}: ${model.tens} ${plural(model.tens, "ten")} and ${model.ones} ${plural(model.ones, "one")}.`;
  }

  if (model.count < 9) {
    return `${model.count} ${plural(model.count, "cookie")} still fit in the ones place. Keep adding single cookies until the ones place reaches 10.`;
  }

  if (model.count === 9) {
    return "The ones place has 9 single cookies. One more cookie will make a full group of 10.";
  }

  if (model.count === 10) {
    return "9 + 1 ones cannot stay as one digit in the ones place. The ones digit resets to 0, and the tens digit becomes 1.";
  }

  return `${model.count} cookies means ${model.tens} ${plural(model.tens, "plate")} of 10 and ${model.ones} loose ${plural(model.ones, "cookie")}. Full groups of 10 live in the tens place; leftovers stay in the ones place.`;
}

function growthRuleHTML(model) {
  const previousTens = Math.floor(state.previousGrowthCount / 10);
  const crossedDown = state.lastGrowthAction === "subtract" && previousTens > model.tens;
  const animationType = getAnimationType();

  if (
    animationType === "tens-to-ones"
    || animationType === "subtract-many-with-borrow"
    || crossedDown
  ) {
    return `
      <strong>1 ten</strong>
      <span>opens into</span>
      <strong>10 ones</strong>
    `;
  }

  return `
    <strong>9 + 1 ones</strong>
    <span>become</span>
    <strong>1 ten</strong>
  `;
}

function plainGrowthRenderModel(count, summaryHTML, phaseClass = "is-timeline-controlled", extras = {}) {
  const tens = Math.floor(count / 10);
  const ones = count % 10;
  return {
    count,
    tens,
    ones,
    equationTens: tens,
    equationOnes: ones,
    tensDigit: tens,
    onesDigit: ones,
    tensPlateCount: tens,
    onesCookieCount: ones,
    hideOnesDigit: false,
    summaryHTML,
    movingPlate: false,
    highlightedTensCount: null,
    highlightOnesPlate: false,
    showOnesPlate: true,
    showEmptyOnesPlaceholder: true,
    phaseClass,
    ...extras
  };
}

function getAddManyRenderModel(animation) {
  const { from, to, amount, progress } = animation;
  const fromTens = Math.floor(from / 10);
  const toTens = Math.floor(to / 10);
  const toOnes = to % 10;
  const { fromOnes, fillNeeded, remainder, crossesIntoTens } = getAddManyParts(animation);
  const segments = getAddManySegments(animation);
  const stage = getAddManyStage(animation);

  if (!crossesIntoTens) {
    const motion = getCookieStepMotion(progress, amount, 0, stepTimeline.finalStart, true);
    const added = motion.completed;
    const current = from + added;
    return plainGrowthRenderModel(
      stage === "final" ? to : current,
      added === amount
        ? `${placeCountHTML(toTens, "tens")} ${plural(toTens, "ten")} and ${placeCountHTML(toOnes, "ones")} ${plural(toOnes, "one")} make ${to} ${plural(to, "cookie")}.`
        : `Add ${amount} ${plural(amount, "cookie")} one at a time. ${added} ${plural(added, "cookie")} added so far.`,
      "is-timeline-controlled",
      {
        sideTrayCount: Math.max(0, amount - motion.completed - activeCookieCount(motion)),
        sideTrayEmptyBefore: motion.completed,
        sideTrayMovingSlot: motion.isMoving ? "before" : null,
        sideTrayMode: "add",
        movingCookie: motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null
      }
    );
  }

  if (stage === "fill") {
    const motion = getCookieStepMotion(progress, fillNeeded, 0, segments.fillEnd, true);
    const added = motion.completed;
    const onesCookieCount = fromOnes + added;
    const current = from + added;
    const fullPlate = onesCookieCount === 10;
    return {
      count: current,
      tens: fromTens,
      ones: onesCookieCount,
      equationTens: fromTens,
      equationOnes: onesCookieCount,
      tensDigit: fromTens,
      onesDigit: fullPlate ? "" : onesCookieCount,
      tensPlateCount: fromTens,
      onesCookieCount,
      hideOnesDigit: fullPlate,
      summaryHTML: fullPlate
        ? `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} and ${placeCountHTML(10, "ones")} ones make a full group.`
        : `Add ${amount} ${plural(amount, "cookie")} one at a time. The ones place is counting up to 10.`,
      movingPlate: false,
      highlightedTensCount: null,
      highlightOnesPlate: fullPlate,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: Math.max(0, amount - motion.completed - activeCookieCount(motion)),
      sideTrayEmptyBefore: motion.completed,
      sideTrayMovingSlot: motion.isMoving ? "before" : null,
      sideTrayMode: "add",
      movingCookie: motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null,
      phaseClass: "is-filling-ten is-timeline-controlled"
    };
  }

  if (stage === "hold") {
    const current = from + fillNeeded;
    return {
      count: current,
      tens: fromTens,
      ones: 10,
      equationTens: fromTens,
      equationOnes: 10,
      tensDigit: fromTens,
      onesDigit: "",
      tensPlateCount: fromTens,
      onesCookieCount: 10,
      hideOnesDigit: true,
      summaryHTML: `${placeCountHTML(10, "ones")} ones cannot stay as one digit, so the full ones plate turns blue and gets ready to move.`,
      movingPlate: false,
      highlightedTensCount: null,
      highlightOnesPlate: true,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: remainder,
      sideTrayEmptyBefore: fillNeeded,
      sideTrayMode: "add",
      phaseClass: "is-filling-ten is-timeline-controlled"
    };
  }

  if (stage === "remainder") {
    const motion = getCookieStepMotion(progress, remainder, segments.holdEnd, segments.remainderEnd, true);
    const remainderAdded = motion.completed;
    const current = from + fillNeeded + remainderAdded;
    return {
      count: current,
      tens: fromTens,
      ones: remainderAdded,
      equationTens: fromTens,
      equationOnes: 10 + remainderAdded,
      tensDigit: fromTens,
      onesDigit: remainderAdded,
      tensPlateCount: fromTens,
      onesCookieCount: remainderAdded,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(10, "ones")} ones are packed in the blue plate. ${placeCountHTML(remainderAdded, "ones")} more ${plural(remainderAdded, "cookie")} ${remainderAdded === 1 ? "starts" : "start"} a fresh ones plate.`,
      movingPlate: true,
      movingPlateDirection: "to-tens",
      moveProgress: 0,
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: Math.max(0, remainder - motion.completed - activeCookieCount(motion)),
      sideTrayEmptyBefore: fillNeeded + motion.completed,
      sideTrayMovingSlot: motion.isMoving ? "before" : null,
      sideTrayMode: "add",
      movingCookie: motion.isMoving ? { direction: "add", progress: motion.stepProgress } : null,
      phaseClass: "is-moving-ten is-holding-full-ten is-timeline-controlled"
    };
  }

  if (stage === "move") {
    return {
      count: to,
      tens: fromTens,
      ones: toOnes,
      equationTens: fromTens,
      equationOnes: 10 + toOnes,
      tensDigit: fromTens,
      onesDigit: toOnes,
      tensPlateCount: fromTens,
      onesCookieCount: toOnes,
      hideOnesDigit: false,
      summaryHTML: `All ${amount} ${plural(amount, "cookie")} have arrived. The full blue plate now moves into the tens place.`,
      movingPlate: true,
      movingPlateDirection: "to-tens",
      moveProgress: getAddManyMoveProgress(animation),
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: 0,
      sideTrayMode: "add",
      keepSideTraySpace: true,
      phaseClass: "is-moving-ten is-holding-full-ten is-timeline-controlled"
    };
  }

  return {
    count: to,
    tens: toTens,
    ones: toOnes,
    equationTens: toTens,
    equationOnes: toOnes,
    tensDigit: toTens,
    onesDigit: toOnes,
    tensPlateCount: toTens,
    onesCookieCount: toOnes,
    hideOnesDigit: false,
    summaryHTML: `${placeCountHTML(toTens, "tens")} ${plural(toTens, "ten")} and ${placeCountHTML(toOnes, "ones")} ${plural(toOnes, "one")} make ${to} ${plural(to, "cookie")}.`,
    movingPlate: false,
    moveProgress: 1,
    highlightedTensCount: toTens,
    highlightOnesPlate: false,
    showOnesPlate: true,
    showEmptyOnesPlaceholder: true,
    sideTrayCount: 0,
    sideTrayMode: "add",
    phaseClass: "is-timeline-controlled"
  };
}

function getSubtractManyFromOnesRenderModel(animation) {
  const { from, to, amount, progress } = animation;
  const fromOnes = from % 10;
  const motion = getCookieStepMotion(progress, amount);
  const digitRemoved = subtractDigitRemovedCount(motion);
  const visualRemoved = subtractVisualRemovedCount(motion);
  const current = progress >= stepTimeline.finalStart ? to : from - digitRemoved;
  const visualOnes = progress >= stepTimeline.finalStart ? to % 10 : Math.max(0, fromOnes - visualRemoved);
  const headerOnes = progress >= stepTimeline.finalStart ? to % 10 : Math.max(0, fromOnes - digitRemoved);
  return plainGrowthRenderModel(
    current,
    digitRemoved === amount
      ? `${from} - ${amount} = ${to}. The ones digit is ${to % 10}.`
      : `Subtract ${amount} ${plural(amount, "cookie")} one at a time. ${digitRemoved} ${plural(digitRemoved, "cookie")} removed so far.`,
    "is-timeline-controlled",
    {
      onesCookieCount: visualOnes,
      onesHeaderCount: headerOnes,
      showEmptyOnesPlaceholder: headerOnes === 0,
      sideTrayCount: motion.completed,
      sideTrayMovingSlot: motion.isMoving ? "after" : null,
      sideTrayMode: "subtract",
      movingCookie: motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null
    }
  );
}

function getSubtractManyWithBorrowRenderModel(animation) {
  const stage = getSubtractManyStage(animation);
  if (stage === "remove") {
    const motion = getCookieStepMotion(animation.progress, animation.looseOnesToRemove, 0, animation.consumeEnd);
    const digitRemoved = subtractDigitRemovedCount(motion);
    const visualRemoved = subtractVisualRemovedCount(motion);
    const fromOnes = animation.from % 10;
    const current = animation.from - digitRemoved;
    return plainGrowthRenderModel(
      current,
      `First remove the ${animation.looseOnesToRemove} loose ${plural(animation.looseOnesToRemove, "cookie")} that are already in the ones place.`,
      "is-timeline-controlled",
      {
        onesCookieCount: Math.max(0, fromOnes - visualRemoved),
        onesHeaderCount: Math.max(0, fromOnes - digitRemoved),
        showEmptyOnesPlaceholder: Math.max(0, fromOnes - digitRemoved) === 0,
        sideTrayCount: motion.completed,
        sideTrayMovingSlot: motion.isMoving ? "after" : null,
        sideTrayMode: "subtract",
        movingCookie: motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null
      }
    );
  }

  return getBorrowRenderModel({
    from: animation.borrowFrom,
    to: animation.to,
    progress: getSubtractBorrowProgress(animation),
    amount: animation.borrowAmount,
    sideTrayBase: animation.looseOnesToRemove
  });
}

function getBorrowRenderModel({ from, to, progress, amount, sideTrayBase = 0 }) {
  const fromTens = Math.floor(from / 10);
  const fromOnes = from % 10;
  const toTens = Math.floor(to / 10);
  const toOnes = to % 10;
  const openedTens = Math.max(0, fromTens - 1);
  const stage = getBorrowStage(progress);
  const moveProgress = getBorrowMoveProgress(progress);
  const tensHaveLeft = borrowTensHasLeft(progress);

  if (stage === "ready" || stage === "prep") {
    return {
      count: from,
      tens: fromTens,
      ones: fromOnes,
      equationTens: fromTens,
      equationOnes: fromOnes,
      tensDigit: fromTens,
      onesDigit: fromOnes,
      tensPlateCount: fromTens,
      onesCookieCount: fromOnes,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} and ${placeCountHTML(fromOnes, "ones")} ${plural(fromOnes, "one")} are ready to subtract ${amount}.`,
      movingPlate: false,
      movingPlateDirection: "to-ones",
      moveProgress: 0,
      highlightedTensCount: fromTens,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: sideTrayBase,
      sideTrayMode: "subtract",
      phaseClass: "is-timeline-controlled"
    };
  }

  if (stage === "move") {
    const hideOnesPlate = shouldHideBorrowOnesPlate(progress);
    const visibleTens = tensHaveLeft ? openedTens : fromTens;
    return {
      count: from,
      tens: visibleTens,
      ones: fromOnes,
      equationTens: visibleTens,
      equationOnes: fromOnes,
      tensDigit: visibleTens,
      onesDigit: "",
      tensPlateCount: visibleTens,
      tensVisualPlateCount: openedTens,
      reserveBorrowedTensSlot: !tensHaveLeft,
      onesCookieCount: 0,
      hideOnesDigit: true,
      summaryHTML: tensHaveLeft
        ? `${placeCountHTML(openedTens, "tens")} ${plural(openedTens, "ten")} ${openedTens === 1 ? "remains" : "remain"} while the blue plate heads to the ones place.`
        : `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} ${fromTens === 1 ? "is" : "are"} still counted until the blue plate leaves the tens place.`,
      movingPlate: true,
      movingPlateDirection: "to-ones",
      moveProgress,
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: !hideOnesPlate,
      showEmptyOnesPlaceholder: !hideOnesPlate,
      sideTrayCount: sideTrayBase,
      sideTrayMode: "subtract",
      phaseClass: "is-moving-ten is-timeline-controlled"
    };
  }

  if (stage === "open") {
    return {
      count: from,
      tens: openedTens,
      ones: 10,
      equationTens: openedTens,
      equationOnes: 10,
      tensDigit: openedTens,
      onesDigit: "",
      tensPlateCount: openedTens,
      onesCookieCount: 10,
      hideOnesDigit: true,
      summaryHTML: `${placeCountHTML(openedTens, "tens")} ${plural(openedTens, "ten")} and ${placeCountHTML(10, "ones")} loose ones make ${from} before subtracting.`,
      movingPlate: false,
      movingPlateDirection: "to-ones",
      moveProgress: 1,
      highlightedTensCount: null,
      highlightOnesPlate: true,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: sideTrayBase,
      sideTrayMode: "subtract",
      phaseClass: "is-timeline-controlled"
    };
  }

  if (stage === "cross" || stage === "fade") {
    const motion = getBorrowCookieMotion(progress, amount);
    const digitRemoved = subtractDigitRemovedCount(motion);
    const visualRemoved = subtractVisualRemovedCount(motion);
    const remainingOnes = Math.max(0, 10 - digitRemoved);
    const visualOnes = Math.max(0, 10 - visualRemoved);
    return {
      count: from - digitRemoved,
      tens: openedTens,
      ones: remainingOnes,
      equationTens: openedTens,
      equationOnes: remainingOnes,
      tensDigit: openedTens,
      onesDigit: "",
      tensPlateCount: openedTens,
      onesCookieCount: visualOnes,
      onesHeaderCount: remainingOnes,
      hideOnesDigit: true,
      showEmptyOnesPlaceholder: remainingOnes === 0,
      summaryHTML: `${placeCountHTML(openedTens, "tens")} ${plural(openedTens, "ten")} and ${placeCountHTML(10, "ones")} loose ones make ${from} before subtracting.`,
      movingPlate: false,
      movingPlateDirection: "to-ones",
      moveProgress: 1,
      highlightedTensCount: null,
      highlightOnesPlate: true,
      showOnesPlate: true,
      sideTrayCount: sideTrayBase + motion.completed,
      sideTrayMovingSlot: motion.isMoving ? "after" : null,
      sideTrayMode: "subtract",
      movingCookie: motion.isMoving ? { direction: "subtract", progress: motion.stepProgress } : null,
      phaseClass: "is-timeline-controlled"
    };
  }

  if (stage === "final") {
    return {
      count: to,
      tens: toTens,
      ones: toOnes,
      equationTens: toTens,
      equationOnes: toOnes,
      tensDigit: toTens,
      onesDigit: toOnes,
      tensPlateCount: toTens,
      onesCookieCount: toOnes,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(toTens, "tens")} ${plural(toTens, "ten")} and ${placeCountHTML(toOnes, "ones")} ${plural(toOnes, "one")} make ${to} ${plural(to, "cookie")}.`,
      movingPlate: false,
      movingPlateDirection: "to-ones",
      moveProgress: 1,
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      sideTrayCount: sideTrayBase + amount,
      sideTrayMode: "subtract",
      phaseClass: "is-timeline-controlled"
    };
  }

  return {
    count: from,
    tens: fromTens,
    ones: fromOnes,
    equationTens: fromTens,
    equationOnes: fromOnes,
    tensDigit: fromTens,
    onesDigit: fromOnes,
    tensPlateCount: fromTens,
    onesCookieCount: fromOnes,
    hideOnesDigit: false,
    summaryHTML: `The ${placeCountHTML(1, "tens")} ten plate is getting ready to open into ${placeCountHTML(10, "ones")} loose ones.`,
    movingPlate: false,
    movingPlateDirection: "to-ones",
    moveProgress: 0,
    highlightedTensCount: fromTens,
    highlightOnesPlate: false,
    showOnesPlate: true,
    showEmptyOnesPlaceholder: true,
    sideTrayCount: sideTrayBase,
    sideTrayMode: "subtract",
    phaseClass: "is-filling-ten is-timeline-controlled"
  };
}

function getGrowthRenderModel() {
  if (!state.growthAnimation) {
    const model = getGrowthModel();
    return {
      ...model,
      equationTens: model.tens,
      equationOnes: model.ones,
      tensDigit: model.tens,
      onesDigit: model.ones,
      tensPlateCount: model.tens,
      onesCookieCount: model.ones,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(model.tens, "tens")} ${plural(model.tens, "ten")} and ${placeCountHTML(model.ones, "ones")} ${plural(model.ones, "one")} make ${model.count} ${plural(model.count, "cookie")}.`,
      movingPlate: false,
      highlightedTensCount: model.ones === 0 ? state.recentRegroupTensCount : null,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      phaseClass: ""
    };
  }

  const { from, to, progress } = state.growthAnimation;
  const fromTens = Math.floor(from / 10);
  const toTens = Math.floor(to / 10);
  const phase = getRolloverPhase(progress);
  const moveProgress = getMoveProgress(progress);

  if (getAnimationType() === "add-many-to-tens") {
    return getAddManyRenderModel(state.growthAnimation);
  }

  if (getAnimationType() === "subtract-many-from-ones") {
    return getSubtractManyFromOnesRenderModel(state.growthAnimation);
  }

  if (getAnimationType() === "subtract-many-with-borrow") {
    return getSubtractManyWithBorrowRenderModel(state.growthAnimation);
  }

  if (getAnimationType() === "tens-to-ones") {
    return getBorrowRenderModel(state.growthAnimation);
  }

  if (phase === "ready") {
    const ones = from % 10;
    return {
      count: from,
      tens: fromTens,
      ones,
      equationTens: fromTens,
      equationOnes: ones,
      tensDigit: fromTens,
      onesDigit: ones,
      tensPlateCount: fromTens,
      onesCookieCount: ones,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} and ${placeCountHTML(ones, "ones")} ${plural(ones, "one")} are ready for one more cookie.`,
      movingPlate: false,
      moveProgress: 0,
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      phaseClass: "is-timeline-controlled"
    };
  }

  if (phase === "move") {
    return {
      count: to,
      tens: fromTens,
      ones: 0,
      equationTens: fromTens,
      equationOnes: 10,
      tensDigit: fromTens,
      onesDigit: "",
      tensPlateCount: fromTens,
      onesCookieCount: 0,
      hideOnesDigit: true,
      summaryHTML: `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} and ${placeCountHTML(10, "ones")} ones are moving into the tens place.`,
      movingPlate: true,
      moveProgress,
      highlightedTensCount: null,
      highlightOnesPlate: false,
      showOnesPlate: shouldShowMovingEmptyPlaceholder(progress),
      showEmptyOnesPlaceholder: shouldShowMovingEmptyPlaceholder(progress),
      phaseClass: "is-moving-ten is-timeline-controlled"
    };
  }

  if (phase === "final") {
    return {
      count: to,
      tens: toTens,
      ones: 0,
      equationTens: toTens,
      equationOnes: 0,
      tensDigit: toTens,
      onesDigit: 0,
      tensPlateCount: toTens,
      onesCookieCount: 0,
      hideOnesDigit: false,
      summaryHTML: `${placeCountHTML(toTens, "tens")} ${plural(toTens, "ten")} and ${placeCountHTML(0, "ones")} ones make ${to} ${plural(to, "cookie")}.`,
      movingPlate: false,
      moveProgress: 1,
      highlightedTensCount: toTens,
      highlightOnesPlate: false,
      showOnesPlate: true,
      showEmptyOnesPlaceholder: true,
      phaseClass: "is-timeline-controlled"
    };
  }

  return {
    count: to,
    tens: fromTens,
    ones: 10,
    equationTens: fromTens,
    equationOnes: 10,
    tensDigit: fromTens,
    onesDigit: "",
    tensPlateCount: fromTens,
    onesCookieCount: 10,
    hideOnesDigit: true,
    summaryHTML: `${placeCountHTML(fromTens, "tens")} ${plural(fromTens, "ten")} and ${placeCountHTML(10, "ones")} ones make ${to} ${plural(to, "cookie")}.`,
    movingPlate: false,
    moveProgress: 0,
    highlightedTensCount: null,
    highlightOnesPlate: true,
    showOnesPlate: true,
    showEmptyOnesPlaceholder: true,
    phaseClass: "is-filling-ten is-timeline-controlled"
  };
}

function renderRolloverControls() {
  if (!state.growthAnimation) return "";

  const progress = Math.round(state.growthAnimation.progress * 100);
  const playLabel = state.growthAnimation.isPlaying ? "Pause" : "Play";
  const doneLabel = state.growthAnimation.progress >= 1 ? "Done" : "Finish";
  const animationType = getAnimationType();
  const sliderLabel = ["tens-to-ones", "subtract-many-with-borrow"].includes(animationType)
    ? "Regroup"
    : animationType.startsWith("subtract")
      ? "Subtract"
      : "Add";

  return `
    <div class="rollover-controls" aria-label="Rollover timeline controls">
      <button class="choice-button timeline-button" type="button" id="rolloverPlayPause">${playLabel}</button>
      <label class="rollover-slider-label" for="rolloverProgress">
        <span>${sliderLabel}</span>
        <input id="rolloverProgress" type="range" min="0" max="100" value="${progress}" aria-label="Rollover progress">
        <output for="rolloverProgress">${progress}%</output>
      </label>
      <button class="action-button timeline-button" type="button" id="rolloverFinish">${doneLabel}</button>
    </div>
  `;
}

function renderRolloverControlsHost() {
  const host = qs("#rolloverControlsHost");
  if (!host) return;

  if (!state.growthAnimation || !state.showRolloverBar) {
    host.innerHTML = "";
    return;
  }

  if (!qs("#rolloverProgress", host)) {
    host.innerHTML = renderRolloverControls();
  }

  syncRolloverControls();
}

function ensureGrowthBoardShell() {
  const board = qs("#growthBoard");
  if (qs("#growthPlaces", board)) return;

  growthRenderCache = {};
  board.innerHTML = `
    <div class="growth-number-card">
      <span class="growth-total" id="growthTotal"></span>
      <p id="growthSummary"></p>
    </div>
    <div class="growth-places" id="growthPlaces">
      <div class="growth-place" id="growthTensPlace">
        <div class="cookie-bin-header">
          <span>Tens place</span>
          <strong id="growthTensHeader"></strong>
        </div>
        <div class="place-value-visual tens-place-visual">
          <span class="place-big-digit tens-color" id="growthTensDigit"></span>
          <div class="plate-stack growth-stack" id="growthTensStack"></div>
        </div>
      </div>
      <div class="growth-place" id="growthOnesPlace">
        <div class="cookie-bin-header">
          <span>Ones place</span>
          <strong id="growthOnesHeader"></strong>
        </div>
        <div class="ones-place-plate" id="growthOnesPlate">
          <div class="ones-plate-label">ones place plate</div>
          <span class="place-big-digit ones-color" id="growthOnesDigit"></span>
          <div class="plate-stack single-stack growth-ones-stack" id="growthOnesStack"></div>
        </div>
      </div>
      <div id="regroupAnimationHost"></div>
      <div id="cookieMotionHost"></div>
      <label class="rollover-option" for="timelineControlToggle">
        <input id="timelineControlToggle" type="checkbox" checked>
        <span>Show timeline control bar for place-value moves</span>
      </label>
      <div class="regroup-rule" id="growthRule"></div>
    </div>
  `;
}

function setHTMLIfChanged(selector, cacheKey, html) {
  const element = qs(selector);
  if (!element || growthRenderCache[cacheKey] === html) return;

  element.innerHTML = html;
  growthRenderCache[cacheKey] = html;
}

function setTextIfChanged(selector, cacheKey, text) {
  const element = qs(selector);
  if (!element || growthRenderCache[cacheKey] === text) return;

  element.textContent = text;
  growthRenderCache[cacheKey] = text;
}

function setClassIfChanged(selector, cacheKey, className) {
  const element = qs(selector);
  if (!element || growthRenderCache[cacheKey] === className) return;

  element.className = className;
  growthRenderCache[cacheKey] = className;
}

function getPointRelativeToGrowthPlaces(element) {
  const growthPlaces = qs("#growthPlaces");
  if (!growthPlaces || !element) return null;

  const containerRect = growthPlaces.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return {
    x: elementRect.left + elementRect.width / 2 - containerRect.left,
    y: elementRect.top + elementRect.height / 2 - containerRect.top
  };
}

function captureTimelineGeometry() {
  if (!isBorrowMoveAnimation()) return;

  const highlightedTensPlate = qs("#growthTensStack .ten-cookie-plate.is-regroup-highlight");
  const onesPlate = qs("#growthOnesPlate");
  const startPoint = getPointRelativeToGrowthPlaces(highlightedTensPlate);
  const endPoint = getPointRelativeToGrowthPlaces(onesPlate);

  if (startPoint) {
    state.growthAnimation.motionStartPoint = startPoint;
  }

  if (endPoint) {
    state.growthAnimation.motionEndPoint = endPoint;
  }
}

function renderGrowthScene() {
  const model = getGrowthRenderModel();
  const isAnimating = Boolean(state.growthAnimation);
  const onesPlateClass = model.showOnesPlate === false ? "is-hidden-during-move" : "";
  const onesStackClass = model.onesCookieCount >= 9 ? "is-crowded-cookie-layout" : "";
  const tensVisualPlateCount = model.tensVisualPlateCount ?? model.tensPlateCount;
  const onesCookies = model.onesCookieCount === 0
    ? (model.showEmptyOnesPlaceholder === false ? "" : renderEmptyPlaceLabel("no loose ones"))
    : Array.from({ length: model.onesCookieCount }, renderLooseCookie).join("");
  const movingPlateClass = model.movingPlateDirection === "to-ones" || getAnimationType() === "add-many-to-tens"
    ? "is-measured-motion"
    : "";
  const movingPlateHTML = model.movingPlate
    ? `<div class="regroup-animation-layer"><div class="moving-ten-plate ${movingPlateClass}">${renderTenPlate(true)}</div></div>`
    : "";
  const showSideTray = Boolean(model.sideTrayCount || model.movingCookie);
  const reserveSideTraySpace = Boolean(showSideTray || model.keepSideTraySpace);
  const cookieMotionHTML = showSideTray
    ? `
      <div class="cookie-motion-layer">
        <div class="cookie-side-tray ${model.sideTrayMode === "subtract" ? "is-subtracting" : "is-adding"}" id="cookieSideTray" aria-label="cookie side tray">
          <div class="cookie-tray-cookies">${renderTrayCookies(model.sideTrayCount || 0, {
            emptyBefore: model.sideTrayEmptyBefore || 0,
            movingSlot: model.sideTrayMovingSlot || null
          })}</div>
        </div>
        ${model.movingCookie ? `<div class="moving-cookie" data-direction="${model.movingCookie.direction}">${renderLooseCookie()}</div>` : ""}
      </div>
    `
    : "";

  ensureGrowthBoardShell();
  qs("#growthEquation").innerHTML = `
    <span class="math-token is-active">${renderWholeDisplay(String(model.count), false)}</span>
    <span class="math-equals">=</span>
    <span class="math-token"><span class="tens-color">${model.equationTens}</span> x 10</span>
    <span class="math-equals">+</span>
    <span class="math-token"><span class="ones-color">${model.equationOnes}</span> x 1</span>
  `;

  setHTMLIfChanged("#growthTotal", "growthTotal", renderWholeDisplay(String(model.count), false));
  setHTMLIfChanged("#growthSummary", "growthSummary", model.summaryHTML);
  setClassIfChanged(
    "#growthPlaces",
    "growthPlacesClass",
    `growth-places ${model.phaseClass} ${reserveSideTraySpace ? "has-cookie-tray" : ""}`.trim()
  );
  setHTMLIfChanged(
    "#growthTensHeader",
    "growthTensHeader",
    `${placeCountHTML(model.tensPlateCount, "tens")} ${plural(model.tensPlateCount, "plate")} of 10`
  );
  setTextIfChanged("#growthTensDigit", "growthTensDigit", String(model.tensDigit));
  setClassIfChanged(
    "#growthTensStack",
    "growthTensStackClass",
    "plate-stack growth-stack"
  );
  setHTMLIfChanged(
    "#growthTensStack",
    "growthTensStack",
    renderTenPlateStack(tensVisualPlateCount, model.highlightedTensCount, Boolean(model.reserveBorrowedTensSlot))
  );
  setHTMLIfChanged(
    "#growthOnesHeader",
    "growthOnesHeader",
    `${placeCountHTML(model.onesHeaderCount ?? model.onesCookieCount, "ones")} loose ${plural(model.onesHeaderCount ?? model.onesCookieCount, "cookie")}`
  );
  setClassIfChanged(
    "#growthOnesPlate",
    "growthOnesPlateClass",
    `ones-place-plate ${model.highlightOnesPlate ? "is-regroup-highlight" : ""} ${onesPlateClass}`.trim()
  );
  setClassIfChanged(
    "#growthOnesDigit",
    "growthOnesDigitClass",
    `place-big-digit ones-color ${model.hideOnesDigit ? "is-erased" : ""}`.trim()
  );
  setTextIfChanged("#growthOnesDigit", "growthOnesDigit", String(model.onesDigit));
  setClassIfChanged(
    "#growthOnesStack",
    "growthOnesStackClass",
    `plate-stack single-stack growth-ones-stack ${onesStackClass}`.trim()
  );
  setHTMLIfChanged("#growthOnesStack", "growthOnesStack", onesCookies);
  captureTimelineGeometry();
  setHTMLIfChanged("#regroupAnimationHost", "regroupAnimationHost", movingPlateHTML);
  setHTMLIfChanged("#cookieMotionHost", "cookieMotionHost", cookieMotionHTML);
  syncTimelineVisuals();
  const timelineToggle = qs("#timelineControlToggle");
  if (timelineToggle) {
    timelineToggle.checked = state.showRolloverBar;
  }
  setHTMLIfChanged("#growthRule", "growthRule", growthRuleHTML(model));
  renderRolloverControlsHost();
  qs("#growthMessage").textContent = growthMessage(model);
  qs("#addCookiesInput").value = state.addAmount;
  qs("#resetCookiesInput").value = state.resetTarget;
  qsa("#place-growth .growth-controls button, #place-growth .growth-controls input").forEach((control) => {
    control.disabled = isAnimating;
  });
}

function leftZeroMessage(model) {
  const hundredText = `${model.hundreds} ${plural(model.hundreds, "plate")} of 100`;
  const tenText = `${model.tens} ${plural(model.tens, "plate")} of 10`;
  const oneText = `${model.ones} single ${plural(model.ones, "cookie")}`;
  const equation = `${model.hundreds * 100} + ${model.tens * 10} + ${model.ones} = ${model.numeric}`;

  if (model.display === "01") {
    return "01 means zero plates of 10 cookies and one single cookie. The zero names an empty tens group, so the amount is still 1 cookie.";
  }

  if (model.display === "001") {
    return "001 means zero plates of 100 cookies, zero plates of 10 cookies, and one single cookie. The zeros name empty groups, so the amount is still 1 cookie.";
  }

  return `${model.display} means ${hundredText}, ${tenText}, and ${oneText}. That is ${equation} ${plural(model.numeric, "cookie")}.`;
}

function renderLeftZeros() {
  const model = getWholeModel(state.leftForm);
  if (model.numeric === 1) {
    qs("#leftZeroEquation").innerHTML = ["1", "01", "001"]
      .map((form) => `<span class="math-token ${form === model.display ? "is-active" : ""}">${renderWholeDisplay(form)}</span>`)
      .join('<span class="math-equals">=</span>');
  } else {
    qs("#leftZeroEquation").innerHTML = `
      <span class="math-token is-active">${renderWholeDisplay(model.display)}</span>
      <span class="math-equals">=</span>
      <span class="math-token"><span class="hundreds-color">${model.hundreds}</span> x 100</span>
      <span class="math-equals">+</span>
      <span class="math-token"><span class="tens-color">${model.tens}</span> x 10</span>
      <span class="math-equals">+</span>
      <span class="math-token"><span class="ones-color">${model.ones}</span> x 1</span>
      <span class="math-equals">=</span>
      <span class="math-token">${model.numeric} ${plural(model.numeric, "cookie")}</span>
    `;
  }

  const columns = [
    {
      label: "hundreds",
      digit: model.written[0],
      colorClass: "hundreds-color",
      meaning: `${model.hundreds} ${plural(model.hundreds, "plate")} of 100`
    },
    {
      label: "tens",
      digit: model.written[1],
      colorClass: "tens-color",
      meaning: `${model.tens} ${plural(model.tens, "plate")} of 10`
    },
    {
      label: "ones",
      digit: model.written[2],
      colorClass: "ones-color",
      meaning: `${model.ones} single ${plural(model.ones, "cookie")}`
    }
  ];

  qs("#leftPlaceBoard").innerHTML = columns
    .map((column) => {
      const digit = column.digit.trim() || "0";
      const isWritten = Boolean(column.digit.trim());
      const digitClass = isWritten ? (digit === "0" ? "is-helper-zero" : column.colorClass) : "is-hidden";
      const digitHTML = isWritten && digit === "0" ? `<span class="helper-marker">${digit}</span>` : digit;
      return `
        <div class="place-column">
          <div class="place-label">${column.label}</div>
          <div class="place-digit ${digitClass}">${digitHTML}</div>
          <div class="place-meaning">${isWritten ? column.meaning : "not written"}</div>
        </div>
      `;
    })
    .join("");

  qs("#cookiePlaceStage").innerHTML = `
    <div class="cookie-bin place-visual">
      <div class="cookie-bin-header">
        <span>Hundreds</span>
        <strong>${model.hundreds} ${plural(model.hundreds, "plate")} of 100</strong>
      </div>
      <div class="plate-stack">${renderPlateStack(model.hundreds, renderHundredPlate, "no plates of 100")}</div>
    </div>
    <div class="cookie-bin place-visual">
      <div class="cookie-bin-header">
        <span>Tens</span>
        <strong>${model.tens} ${plural(model.tens, "plate")} of 10</strong>
      </div>
      <div class="plate-stack">${renderPlateStack(model.tens, renderTenPlate, "no plates of 10")}</div>
    </div>
    <div class="cookie-bin place-visual">
      <div class="cookie-bin-header">
        <span>Ones</span>
        <strong>${model.ones} single ${plural(model.ones, "cookie")}</strong>
      </div>
      <div class="plate-stack single-stack">
        ${model.ones === 0 ? '<div class="empty-plate"><span>0</span><small>no single cookies</small></div>' : Array.from({ length: model.ones }, renderLooseCookie).join("")}
      </div>
    </div>
  `;

  qs("#leftZeroMessage").textContent = leftZeroMessage(model);
  qs("#wholeNumberInput").value = model.display;
  state.leftForm = model.display;
  setActive("[data-left-form]", model.display, "leftForm");
}

function polarPoint(radius, angleDegrees) {
  const radians = (angleDegrees - 90) * Math.PI / 180;
  return {
    x: radius * Math.cos(radians),
    y: radius * Math.sin(radians)
  };
}

function wedgePath(radius, startAngle, endAngle) {
  const start = polarPoint(radius, startAngle);
  const end = polarPoint(radius, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return `M 0 0 L ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)} Z`;
}

function renderPizza(sliceCount, shadedSlices = 1) {
  const lines = [];
  const step = 360 / sliceCount;
  for (let index = 0; index < sliceCount; index += 1) {
    const angle = index * step;
    const outer = polarPoint(94, angle);
    const strong = sliceCount === 10 || index % 10 === 0;
    lines.push(`
      <line
        class="pizza-line ${strong ? "" : "is-soft"}"
        x1="0"
        y1="0"
        x2="${outer.x.toFixed(2)}"
        y2="${outer.y.toFixed(2)}"
        stroke-width="${strong ? 1.4 : 0.55}"
      />
    `);
  }

  const shade = shadedSlices <= 0
    ? ""
    : shadedSlices >= sliceCount
      ? '<circle class="pizza-shade" cx="0" cy="0" r="94"></circle>'
      : `<path class="pizza-shade" d="${wedgePath(94, 0, step * shadedSlices)}"></path>`;

  return `
    <svg class="pizza-svg" viewBox="-112 -112 224 224" role="img" aria-label="Pizza with ${shadedSlices} of ${sliceCount} slices shaded">
      <circle class="pizza-crust" cx="0" cy="0" r="108"></circle>
      <circle class="pizza-cheese" cx="0" cy="0" r="94"></circle>
      ${shade}
      ${lines.join("")}
      <circle class="pepperoni" cx="-34" cy="-30" r="9"></circle>
      <circle class="pepperoni" cx="38" cy="-24" r="8"></circle>
      <circle class="pepperoni" cx="-45" cy="35" r="10"></circle>
      <circle class="pepperoni" cx="36" cy="45" r="11"></circle>
      <circle class="pepperoni" cx="8" cy="4" r="9"></circle>
      <circle cx="0" cy="0" r="3" fill="#6b3e1d"></circle>
    </svg>
  `;
}

function renderThousandGrid(shadedCount, highlightShaded = false) {
  const gridHighlight = highlightShaded && shadedCount > 0 ? " is-part-highlighted" : "";
  const cells = Array.from({ length: 1000 }, (_, index) => {
    const shaded = index < shadedCount ? "is-shaded" : "";
    const highlight = shaded && highlightShaded ? " is-part-highlighted" : "";
    return `<span class="thousand-cell ${shaded}${highlight}"></span>`;
  }).join("");
  return `<div class="thousand-grid${gridHighlight}" aria-label="${shadedCount} of 1000 pieces shaded">${cells}</div>`;
}

function decimalFormForDenominator(numerator, denominator) {
  const precision = Math.log10(denominator);
  return (numerator / denominator).toFixed(precision);
}

function decimalHelperPlaces(value, basePrecision) {
  const decimalDigits = value.split(".")[1] || "";
  return decimalDigits
    .split("")
    .map((digit, index) => (index >= basePrecision && digit === "0" ? index : null))
    .filter((index) => index !== null);
}

function pieceName(denominator, count) {
  if (denominator === 10) return plural(count, "tenth");
  if (denominator === 100) return plural(count, "hundredth");
  return plural(count, "thousandth");
}

function joinPhrases(phrases) {
  if (phrases.length <= 1) return phrases.join("");
  if (phrases.length === 2) return `${phrases[0]} or ${phrases[1]}`;
  return `${phrases.slice(0, -1).join(", ")}, or ${phrases[phrases.length - 1]}`;
}

function getDecimalPanels(model) {
  return [10, 100, 1000]
    .map((denominator) => {
      const numerator = model.thousandths * denominator / 1000;
      if (!Number.isInteger(numerator)) return null;

      const value = decimalFormForDenominator(numerator, denominator);
      return {
        key: value,
        title: `${decimalHTML(value, decimalHelperPlaces(value, model.basePrecision))} = ${fractionHTML(numerator, denominator)}`,
        caption: `${numerator} out of ${denominator}`,
        numerator,
        denominator,
        visual: denominator === 1000
          ? renderThousandGrid(numerator)
          : renderPizza(denominator, numerator)
      };
    })
    .filter(Boolean);
}

function getPizzaMessage(model, panels) {
  const amountName = decimalFormForDenominator(model.thousandths, 1000).replace(/0+$/, "").replace(/\.$/, "");
  const piecePhrases = panels.map((panel) => `${panel.numerator} ${pieceName(panel.denominator, panel.numerator)}`);

  if (piecePhrases.length <= 1) {
    return `${amountName} means ${piecePhrases[0] || "0 tenths"}. Type a number that can be renamed with helper zeros to compare more views.`;
  }

  return `${amountName} means ${joinPhrases(piecePhrases)}. The shaded amount stays the same.`;
}

function renderPizzaPanel({ key, title, caption, visual }) {
  const active = state.pizzaForm === key ? "is-active" : "";
  return `
    <div class="pizza-panel ${active}">
      <div class="pizza-label">
        <span>${title}</span>
        <span class="pizza-caption">${caption}</span>
      </div>
      <div class="pizza-svg-wrap">${visual}</div>
    </div>
  `;
}

function renderPizzaScene() {
  const model = getDecimalModel(state.pizzaForm);
  const panels = getDecimalPanels(model);

  qs("#pizzaEquivalence").innerHTML = panels
    .map((panel) => `<span class="form-chip ${state.pizzaForm === panel.key ? "is-active" : ""}">${panel.title}</span>`)
    .join('<span class="math-equals">=</span>');

  qs("#pizzaCompare").innerHTML = panels.map(renderPizzaPanel).join("");
  qs("#pizzaMessage").textContent = getPizzaMessage(model, panels);
  const decimalInput = qs("#decimalNumberInput");
  if (decimalInput && document.activeElement !== decimalInput) {
    decimalInput.value = state.pizzaForm;
  }
  setActive("[data-pizza-form]", state.pizzaForm, "pizzaForm");
}

function renderTopic() {
  const title = topicTitles[state.topic] || "Math";
  let hasModePane = false;
  qsa("[data-topic-pane]").forEach((pane) => {
    const paneMode = pane.dataset.modePane || "teach";
    const isVisible = pane.dataset.topicPane === state.topic
      && paneMode === state.mode
      && elementSupportsUnit(pane);
    pane.hidden = !isVisible;
    hasModePane = hasModePane || isVisible;
  });

  const fallbackPane = qs("[data-practice-fallback]");
  if (fallbackPane) {
    const shouldShowFallback = state.mode === "practice" && !hasModePane;
    fallbackPane.hidden = !shouldShowFallback;
    if (shouldShowFallback) {
      qs("#practiceFallbackEyebrow").textContent = `${title} Practice`;
      qs("#practiceFallbackTitle").textContent = `${title} practice is coming next.`;
      qs("#practiceFallbackDescription").textContent = `The ${title} Teach Me path is ready. A focused Practice set will be added here using the same visual style and answer feedback.`;
    }
  }

  setActive("[data-topic]", state.topic, "topic");
  setActive("[data-mode]", state.mode, "mode");
  qsa("[data-topic]").forEach((button) => {
    button.setAttribute("aria-current", button.dataset.topic === state.topic ? "page" : "false");
  });
  qsa("[data-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.mode === state.mode ? "true" : "false");
  });
  qs("#topicTitle").textContent = title;
  qs(".mode-tabs").setAttribute("aria-label", `${title} mode`);
  document.title = `4th Grade GT Math Lab - ${title} ${state.mode === "teach" ? "Teach Me" : "Practice"}`;
  applyUnitFocusToVisiblePane();
  renderUnitFocus();
}

function renderVocabularyTag(tag) {
  return vocabularyTagLabels[tag] || tag;
}

function vocabularyTermMatchesSearch(term, query) {
  if (!query) return true;
  const searchText = [
    term.term,
    term.definition,
    term.example,
    term.visual,
    ...term.seenIn,
    ...term.tags.map(renderVocabularyTag)
  ].join(" ").toLowerCase();
  return searchText.includes(query);
}

function vocabularyTermMatchesFilter(term, filter) {
  return filter === "all" || term.tags.includes(filter);
}

function renderVocabularyCard(term) {
  const tags = term.tags
    .map((tag) => `<span class="vocabulary-tag">${renderVocabularyTag(tag)}</span>`)
    .join("");

  return `
    <article class="vocabulary-card">
      <div class="vocabulary-card-head">
        <h3>${term.term}</h3>
        <div class="vocabulary-visual" aria-hidden="true">${term.visual}</div>
      </div>
      <p class="vocabulary-definition">${term.definition}</p>
      <p class="vocabulary-example"><strong>Example:</strong> ${term.example}</p>
      <p class="vocabulary-meta"><strong>Seen in:</strong> ${term.seenIn.join(", ")}</p>
      <div class="vocabulary-tags">${tags}</div>
    </article>
  `;
}

function renderVocabulary() {
  const list = qs("#vocabularyList");
  if (!list) return;

  const input = qs("#vocabularySearchInput");
  const status = qs("#vocabularyStatus");
  const query = state.vocabularySearch.trim().toLowerCase();
  const terms = vocabularyTerms.filter((term) => (
    vocabularyTermMatchesFilter(term, state.vocabularyFilter)
    && vocabularyTermMatchesSearch(term, query)
  ));

  if (input && document.activeElement !== input) {
    input.value = state.vocabularySearch;
  }

  setActive("[data-vocabulary-filter]", state.vocabularyFilter, "vocabularyFilter");
  qsa("[data-vocabulary-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.vocabularyFilter === state.vocabularyFilter ? "true" : "false");
  });

  if (status) {
    const filterLabel = renderVocabularyTag(state.vocabularyFilter);
    const searchText = query ? ` matching "${state.vocabularySearch.trim()}"` : "";
    if (state.vocabularyFilter === "all" && !query) {
      status.textContent = `${terms.length} vocabulary terms available.`;
    } else {
      const filterText = state.vocabularyFilter === "all" ? "" : ` for ${filterLabel}`;
      status.textContent = `${terms.length} ${terms.length === 1 ? "term" : "terms"} found${filterText}${searchText}.`;
    }
  }

  list.innerHTML = terms.length
    ? terms.map(renderVocabularyCard).join("")
    : `<div class="vocabulary-empty">No matching vocabulary yet. Try a different word or filter.</div>`;
}

function getPracticeQuestion(topic, questionId) {
  return (practiceSets[topic] || []).find((question) => question.id === questionId)
    || Object.values(practiceSets)
      .flat()
      .find((question) => question.id === questionId);
}

function isUnit3PracticeQuestion(question) {
  return String(question?.id || "").startsWith("u3-");
}

function isUnit1PracticeQuestion(question) {
  return question?.unit === "unit1" || String(question?.id || "").startsWith("u1-");
}

function isUnit4PracticeQuestion(question) {
  return question?.unit === "unit4" || String(question?.id || "").startsWith("u4-");
}

function isUnit6PracticeQuestion(question) {
  return question?.unit === "unit6" || String(question?.id || "").startsWith("u6-");
}

function isUnit7PracticeQuestion(question) {
  return question?.unit === "unit7" || String(question?.id || "").startsWith("u7-");
}

function isUnit8PracticeQuestion(question) {
  return question?.unit === "unit8" || String(question?.id || "").startsWith("u8-");
}

function isUnit2PracticeQuestion(question) {
  return question?.unit === "unit2"
    || (!question?.unit && !isUnit1PracticeQuestion(question) && !isUnit3PracticeQuestion(question) && !isUnit4PracticeQuestion(question) && !isUnit6PracticeQuestion(question) && !isUnit7PracticeQuestion(question) && !isUnit8PracticeQuestion(question));
}

function getDefaultPracticeFocus(topic) {
  return "all";
}

function getPracticeFilter(topic) {
  if (!state.practiceFilters[topic]) {
    state.practiceFilters[topic] = {
      focus: getDefaultPracticeFocus(topic),
      lesson: "all"
    };
  }

  return state.practiceFilters[topic];
}

function setPracticeFilter(topic, patch) {
  const current = getPracticeFilter(topic);
  state.practiceFilters[topic] = {
    ...current,
    ...patch
  };
}

function normalizePracticeFilterForUnitFocus(topic) {
  const filter = getPracticeFilter(topic);
  if (!["all", "missed"].includes(filter.focus)) {
    setPracticeFilter(topic, { focus: "all", lesson: "all" });
    return state.practiceFilters[topic];
  }

  return filter;
}

function practiceQuestionMatchesUnitFocus(question) {
  if (state.unitFocus === "all") return true;
  if (state.unitFocus === "unit1") return isUnit1PracticeQuestion(question);
  if (state.unitFocus === "unit6") return isUnit6PracticeQuestion(question);
  if (state.unitFocus === "unit3") return isUnit3PracticeQuestion(question);
  if (state.unitFocus === "unit4") return isUnit4PracticeQuestion(question);
  if (state.unitFocus === "unit7") return isUnit7PracticeQuestion(question);
  if (state.unitFocus === "unit8") return isUnit8PracticeQuestion(question);
  if (state.unitFocus === "unit2") return isUnit2PracticeQuestion(question);
  return question?.unit === state.unitFocus;
}

function getPracticeBaseQuestions(topic) {
  return (practiceSets[topic] || []).filter(practiceQuestionMatchesUnitFocus);
}

function syncPracticeFiltersForUnitFocus() {
  Object.keys(practiceSets).forEach((topic) => {
    setPracticeFilter(topic, { focus: "all", lesson: "all" });
  });
}

function getPracticeAttemptHistory(question) {
  return Array.isArray(state.practiceAttempts[question.id])
    ? state.practiceAttempts[question.id]
    : [];
}

function getLatestPracticeAttempt(question) {
  const history = getPracticeAttemptHistory(question);
  return history.length ? history[history.length - 1] : null;
}

function practiceQuestionIsMissed(question) {
  const latestAttempt = getLatestPracticeAttempt(question);
  return Boolean(latestAttempt && latestAttempt.correct === false);
}

function normalizePracticeLesson(lesson) {
  if (lesson === null || typeof lesson === "undefined" || lesson === "") return "Other";
  return String(lesson);
}

function formatPracticeLessonLabel(lesson) {
  const normalized = normalizePracticeLesson(lesson);
  if (/^\d+$/.test(normalized)) return `Lesson ${normalized}`;
  return normalized;
}

function getPracticeVisibleQuestions(topic) {
  const filter = normalizePracticeFilterForUnitFocus(topic);
  const baseQuestions = getPracticeBaseQuestions(topic);
  let questions = baseQuestions;

  if (filter.focus === "missed") {
    questions = baseQuestions.filter(practiceQuestionIsMissed);
  }

  if (filter.lesson !== "all") {
    questions = questions.filter((question) => normalizePracticeLesson(question.lesson) === filter.lesson);
  }

  return questions;
}

function stripHTML(value) {
  return String(value ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function describePracticeAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (question.responseType === "multi") {
    const multiAnswer = getPracticeMultiAnswer(question);
    return multiAnswer.selectedValues.length
      ? multiAnswer.selectedValues.join(", ")
      : "No choices selected";
  }

  if (question.responseType === "numberLinePoint") {
    const selectedTick = Number.isFinite(answer?.selectedTick) ? answer.selectedTick : null;
    return selectedTick !== null
      ? stripHTML(formatNumberLinePlacementHTML(question.visual, selectedTick))
      : "No point selected";
  }

  if (question.responseType === "numberLineOrder") {
    if (isGoDistanceQuestion(question)) {
      const q1 = getPracticeOrderAnswer(question);
      const q2 = getGoDistanceQuestion2Answer(question);
      const q1Text = getPracticeOrderPlacedIds(question).length
        ? getPracticeOrderPlacedIds(question)
          .map((id) => `${getPracticeOrderItemLabel(question, id)} at ${formatPracticeOrderValueText(q1.placements[id])}`)
          .join("; ")
        : "Q1 no runners placed";
      const q2Text = getGoDistanceQuestion2Blanks(question)
        .map((blank) => `${blank.name}: ${q2.responses[blank.id] || "blank"}`)
        .join("; ");
      return `Q1 ${q1Text}; Q2 ${q2Text}`;
    }
    const orderAnswer = getPracticeOrderAnswer(question);
    const placedIds = getPracticeOrderPlacedIds(question);
    return placedIds.length
      ? placedIds
        .map((id) => `${getPracticeOrderItemLabel(question, id)} at ${formatPracticeOrderValueText(orderAnswer.placements[id])}`)
        .join("; ")
      : "No runners placed";
  }

  if (question.responseType === "whoRanFarther") {
    const answer = getWhoRanFartherAnswer(question);
    const names = (ids) => ids.map((id) => getWhoRanFartherRunnerName(question, id)).join(", ") || "blank";
    const slots = getWhoRanFartherSlots(question)
      .map((slot) => `${slot.label}: ${getWhoRanFartherRunnerInitial(question, answer.slots[slot.id] || "") || "blank"}`)
      .join("; ");
    return [
      `Farther: ${names(answer.farther)}`,
      `Not as far: ${names(answer.notAsFar)}`,
      `Order: ${names(answer.order)}`,
      `Slots: ${slots}`,
      `Missing distance: ${answer.missingDistance || "blank"}`
    ].join("; ");
  }

  if (question.responseType === "productComparisonBlanks") {
    const q1 = getProductComparisonQuestion1Answer(question);
    const q2 = getProductComparisonQuestion2Answer(question);
    const q3 = getProductComparisonQuestion3Answer(question);
    const q1Text = getProductComparisonQuestion1Rows(question)
      .map((row) => `${row.label}: ${q1.symbols[row.id] || "blank"}`)
      .join("; ");
    const q2Text = getProductComparisonQuestion2Rows(question)
      .map((row) => `${row.label}: ${q2.values[row.id] || "blank"}`)
      .join("; ");
    const q3Text = getProductComparisonQuestion3Rows(question)
      .map((row) => `${row.label}: ${q3.values[row.id] || "blank"}`)
      .join("; ");
    return `Q1 ${q1Text}; Q2 ${q2Text}; Q3 ${q3Text}`;
  }

  if (question.responseType === "diagramMatch") {
    const answer = getPracticeDiagramMatchAnswer(question);
    return getPracticeDiagramMatchDiagrams(question)
      .map((diagram) => {
        const expression = getPracticeDiagramMatchExpressions(question)
          .find((choice) => String(choice.id) === answer.matches[String(diagram.id)]);
        return `${diagram.label || diagram.id}: ${expression?.label || "blank"}`;
      })
      .join("; ");
  }

  if (question.responseType === "scaleFactorLocation") {
    const answer = getPracticeScaleLocationAnswer(question);
    const locations = getPracticeScaleLocationItems(question)
      .map((item) => `${item.expression || item.label}: ${answer.zones[String(item.id)] || "blank"}`)
      .join("; ");
    const blanks = getPracticeScaleLocationBlanks(question)
      .map((blank) => `${blank.label}: ${answer.blanks[String(blank.id)] || "blank"}`)
      .join("; ");
    const comparisons = getPracticeScaleLocationComparisons(question)
      .map((comparison) => `${comparison.label}: ${answer.comparisons[String(comparison.id)] || "blank"}`)
      .join("; ");
    return `Locations ${locations}; Boxes ${blanks || "none"}; Comparisons ${comparisons || "none"}`;
  }

  if (question.responseType === "shortAnswerSet") {
    const answer = getPracticeShortAnswerSetAnswer(question);
    return getPracticeShortAnswerSetRows(question)
      .map((row) => `${row.label || row.id}: ${answer.values[String(row.id)] || "blank"}`)
      .join("; ");
  }

  if (question.responseType === "coordinatePlot") {
    const answer = getPracticeCoordinatePlotAnswer(question);
    return Number.isFinite(answer.x) && Number.isFinite(answer.y)
      ? `(${answer.x}, ${answer.y})`
      : "No point selected";
  }

  if (question.responseType === "groupMatch") {
    const answer = getPracticeGroupMatchAnswer(question);
    const choices = getPracticeGroupMatchChoices(question);
    const labelForChoice = (choiceId) => {
      const choice = choices.find((item) => String(item.id) === String(choiceId));
      return stripHTML(choice?.label || choiceId);
    };
    return getPracticeGroupMatchGroups(question)
      .map((group) => {
        const selected = answer.matches[String(group.id)] || [];
        return `${group.label || group.id}: ${selected.length ? selected.map(labelForChoice).join(", ") : "blank"}`;
      })
      .join("; ");
  }

  if (question.responseType === "shadeRectangleParts") {
    const selectedPieces = Array.isArray(answer?.selectedPieces) ? answer.selectedPieces.length : 0;
    return `${selectedPieces} shaded ${plural(selectedPieces, "part")}`;
  }

  if (question.responseType === "shadeAreaOverlap") {
    const selectedCells = Array.isArray(answer?.selectedCells) ? answer.selectedCells.length : 0;
    return `${selectedCells} shaded ${plural(selectedCells, "piece")}`;
  }

  if (question.responseType === "regionChoice") {
    const regionAnswer = getPracticeRegionAnswer(question);
    const region = question.visual?.regions?.find((item) => item.id === regionAnswer.selectedRegion);
    return region?.label || regionAnswer.selectedRegion || "No region selected";
  }

  if (question.responseType === "open") {
    return "Reviewed sample response";
  }

  const selectedChoice = question.choices?.find((choice) => choice.value === answer);
  return selectedChoice ? selectedChoice.value : String(answer || "No answer");
}

function recordPracticeAttempt(question) {
  const history = getPracticeAttemptHistory(question);
  const nextAttempt = {
    number: history.length + 1,
    answer: describePracticeAnswer(question),
    correct: practiceQuestionIsCorrect(question)
  };
  state.practiceAttempts[question.id] = [...history, nextAttempt];
}

function getPracticeMultiAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (Array.isArray(answer)) {
    return {
      selectedValues: answer,
      submitted: false
    };
  }

  if (answer && typeof answer === "object" && Array.isArray(answer.selectedValues)) {
    return {
      selectedValues: answer.selectedValues,
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    selectedValues: [],
    submitted: false
  };
}

function getPracticeOpenAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer === "reviewed") {
    return {
      responseText: "",
      reviewed: true
    };
  }

  if (typeof answer === "string") {
    return {
      responseText: answer,
      reviewed: false
    };
  }

  if (answer && typeof answer === "object") {
    return {
      responseText: typeof answer.responseText === "string" ? answer.responseText : "",
      reviewed: Boolean(answer.reviewed)
    };
  }

  return {
    responseText: "",
    reviewed: false
  };
}

function getPracticeRegionAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    return {
      selectedRegion: typeof answer.selectedRegion === "string" ? answer.selectedRegion : "",
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    selectedRegion: typeof answer === "string" ? answer : "",
    submitted: false
  };
}

function getPracticeRegionTarget(visual) {
  if (!visual) return "";
  if (visual.targetRegion) return visual.targetRegion;
  return (visual.regions || []).find((region) => region.correct)?.id || "";
}

function isGoDistanceQuestion(question) {
  return question?.id === "u6-l16-go-the-distance";
}

function isCompareExpressionsQuestion(question) {
  return question?.id === "u6-l16-compare-expressions";
}

function isWhoRanFartherQuestion(question) {
  return question?.id === "u6-l17-who-ran-farther";
}

function isSectionCCheckpointQuestion(question) {
  return question?.id === "u6-assess-section-c-number-line";
}

function isPracticePartQuestion(question) {
  return isGoDistanceQuestion(question)
    || isCompareExpressionsQuestion(question)
    || isWhoRanFartherQuestion(question)
    || isSectionCCheckpointQuestion(question);
}

function getPracticeDiagramMatchAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    return {
      matches: answer.matches && typeof answer.matches === "object"
        ? Object.fromEntries(Object.entries(answer.matches).map(([key, value]) => [String(key), String(value ?? "")]))
        : {},
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    matches: {},
    submitted: false
  };
}

function setPracticeDiagramMatchAnswer(question, value) {
  state.practiceAnswers[question.id] = value;
}

function getPracticeDiagramMatchDiagrams(question) {
  return Array.isArray(question?.visual?.diagrams) ? question.visual.diagrams : [];
}

function getPracticeDiagramMatchExpressions(question) {
  return Array.isArray(question?.visual?.expressions) ? question.visual.expressions : [];
}

function getPracticeDiagramMatchExpression(question, expressionId) {
  return getPracticeDiagramMatchExpressions(question)
    .find((expression) => String(expression.id) === String(expressionId));
}

function practiceDiagramMatchIsFullyAnswered(question) {
  const answer = getPracticeDiagramMatchAnswer(question);
  return getPracticeDiagramMatchDiagrams(question)
    .every((diagram) => answer.matches[String(diagram.id)]);
}

function practiceDiagramMatchIsCorrect(question) {
  const answer = getPracticeDiagramMatchAnswer(question);
  return Boolean(
    answer.submitted
    && practiceDiagramMatchIsFullyAnswered(question)
    && getPracticeDiagramMatchDiagrams(question).every((diagram) => (
      answer.matches[String(diagram.id)] === String(diagram.correctExpression)
    ))
  );
}

function getPracticeScaleLocationAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    return {
      zones: answer.zones && typeof answer.zones === "object"
        ? Object.fromEntries(Object.entries(answer.zones).map(([key, value]) => [String(key), String(value ?? "")]))
        : {},
      blanks: answer.blanks && typeof answer.blanks === "object"
        ? Object.fromEntries(Object.entries(answer.blanks).map(([key, value]) => [String(key), String(value ?? "")]))
        : {},
      comparisons: answer.comparisons && typeof answer.comparisons === "object"
        ? Object.fromEntries(Object.entries(answer.comparisons).map(([key, value]) => [String(key), String(value ?? "")]))
        : {},
      submittedParts: answer.submittedParts && typeof answer.submittedParts === "object"
        ? Object.fromEntries(Object.entries(answer.submittedParts).map(([key, value]) => [String(key), Boolean(value)]))
        : {},
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    zones: {},
    blanks: {},
    comparisons: {},
    submittedParts: {},
    submitted: false
  };
}

function setPracticeScaleLocationAnswer(question, value) {
  state.practiceAnswers[question.id] = value;
}

function getPracticeScaleLocationSections(question) {
  return Array.isArray(question?.visual?.sections) ? question.visual.sections : [];
}

function getPracticeScaleLocationItems(question) {
  return getPracticeScaleLocationSections(question)
    .flatMap((section) => (Array.isArray(section.items) ? section.items : []));
}

function getPracticeScaleLocationBlanks(question) {
  return Array.isArray(question?.visual?.blanks) ? question.visual.blanks : [];
}

function getPracticeScaleLocationComparisons(question) {
  return Array.isArray(question?.visual?.comparisons) ? question.visual.comparisons : [];
}

function getPracticeScaleLocationPartKeys(question) {
  return isSectionCCheckpointQuestion(question) ? ["q1", "q2"] : [];
}

function getPracticeScaleLocationActivePart(question) {
  const keys = getPracticeScaleLocationPartKeys(question);
  if (!keys.length) return "";
  const part = getPracticePart(question);
  return keys.includes(part) ? part : keys[0];
}

function getPracticeScaleLocationSubmittedParts(question) {
  const answer = getPracticeScaleLocationAnswer(question);
  return answer.submittedParts || {};
}

function getPracticeScaleLocationVisibleNumberLines(question) {
  const visual = question?.visual || {};
  if (!isSectionCCheckpointQuestion(question)) {
    return visual.numberLines;
  }
  return getPracticeScaleLocationActivePart(question) === "q2" ? visual.numberLines : [];
}

function getPracticeScaleLocationVisibleComparisons(question) {
  const comparisons = getPracticeScaleLocationComparisons(question);
  if (!isSectionCCheckpointQuestion(question)) return comparisons;
  const activePart = getPracticeScaleLocationActivePart(question);
  const prefix = activePart === "q2" ? "q-" : "one-";
  return comparisons.filter((comparison) => String(comparison.id || "").startsWith(prefix));
}

function getPracticeScaleLocationActiveCaption(question) {
  const visual = question?.visual || {};
  if (!isSectionCCheckpointQuestion(question)) {
    return visual.caption || "Compare each factor to 1 before calculating.";
  }
  return getPracticeScaleLocationActivePart(question) === "q2"
    ? "Use the number line: Q is to the right of 19/17, so choose the expression that is greater than 19/17."
    : "Use factor size to compare each product with the original value.";
}

function getPracticeScaleLocationVisibleReasoningPrompts(question) {
  const visual = question?.visual || {};
  const prompts = Array.isArray(visual.reasoningPrompts) ? visual.reasoningPrompts : [];
  if (!isSectionCCheckpointQuestion(question)) return prompts;
  return getPracticeScaleLocationActivePart(question) === "q2" ? prompts : [];
}

function practiceScaleLocationPartIsSubmitted(question, part = getPracticeScaleLocationActivePart(question)) {
  if (!isSectionCCheckpointQuestion(question)) {
    return getPracticeScaleLocationAnswer(question).submitted;
  }
  const answer = getPracticeScaleLocationAnswer(question);
  const submittedParts = getPracticeScaleLocationSubmittedParts(question);
  return Boolean(
    submittedParts[part]
    || (answer.submitted && !Object.keys(submittedParts).length)
  );
}

function practiceScaleLocationItemIsCorrect(question, item) {
  const answer = getPracticeScaleLocationAnswer(question);
  return answer.zones[String(item.id)] === String(item.correctZone);
}

function practiceScaleBlankValue(blank, response) {
  const input = parsePracticeNumberInput(response);
  const factor = Number(blank.factor) || 1;
  if (!Number.isFinite(input) || input <= 0) return null;

  if (blank.inputPart === "denominator") {
    const numerator = Number(blank.numerator) || 0;
    return (numerator / input) * factor;
  }

  const denominator = Number(blank.denominator) || 1;
  return (input / denominator) * factor;
}

function practiceScaleBlankIsCorrect(blank, response) {
  const value = practiceScaleBlankValue(blank, response);
  return compareProductValues(value, blank.operator, Number(blank.right));
}

function practiceScaleComparisonIsCorrect(question, comparison) {
  const answer = getPracticeScaleLocationAnswer(question);
  return answer.comparisons[String(comparison.id)] === String(comparison.correct);
}

function practiceScaleLocationIsFullyAnswered(question) {
  const answer = getPracticeScaleLocationAnswer(question);
  const itemsComplete = getPracticeScaleLocationItems(question)
    .every((item) => answer.zones[String(item.id)]);
  const blanksComplete = getPracticeScaleLocationBlanks(question)
    .every((blank) => String(answer.blanks[String(blank.id)] || "").trim());
  const comparisonsComplete = getPracticeScaleLocationComparisons(question)
    .every((comparison) => answer.comparisons[String(comparison.id)]);
  return itemsComplete && blanksComplete && comparisonsComplete;
}

function practiceScaleLocationVisibleIsFullyAnswered(question) {
  const answer = getPracticeScaleLocationAnswer(question);
  const itemsComplete = getPracticeScaleLocationItems(question)
    .every((item) => answer.zones[String(item.id)]);
  const blanksComplete = getPracticeScaleLocationBlanks(question)
    .every((blank) => String(answer.blanks[String(blank.id)] || "").trim());
  const comparisonsComplete = getPracticeScaleLocationVisibleComparisons(question)
    .every((comparison) => answer.comparisons[String(comparison.id)]);
  return itemsComplete && blanksComplete && comparisonsComplete;
}

function practiceScaleLocationPartIsCorrect(question, part = getPracticeScaleLocationActivePart(question)) {
  const comparisons = isSectionCCheckpointQuestion(question)
    ? getPracticeScaleLocationComparisons(question).filter((comparison) => {
        const prefix = part === "q2" ? "q-" : "one-";
        return String(comparison.id || "").startsWith(prefix);
      })
    : getPracticeScaleLocationComparisons(question);
  const answer = getPracticeScaleLocationAnswer(question);
  const items = getPracticeScaleLocationItems(question);
  const blanks = getPracticeScaleLocationBlanks(question);
  const hasWork = items.length || blanks.length || comparisons.length;
  return Boolean(
    practiceScaleLocationPartIsSubmitted(question, part)
    && hasWork
    && items.every((item) => practiceScaleLocationItemIsCorrect(question, item))
    && blanks.every((blank) => practiceScaleBlankIsCorrect(blank, answer.blanks[String(blank.id)]))
    && comparisons.every((comparison) => practiceScaleComparisonIsCorrect(question, comparison))
  );
}

function practiceScaleLocationIsCorrect(question) {
  const answer = getPracticeScaleLocationAnswer(question);
  const partKeys = getPracticeScaleLocationPartKeys(question);
  return Boolean(
    answer.submitted
    && practiceScaleLocationIsFullyAnswered(question)
    && (!partKeys.length || partKeys.every((part) => practiceScaleLocationPartIsSubmitted(question, part)))
    && getPracticeScaleLocationItems(question).every((item) => practiceScaleLocationItemIsCorrect(question, item))
    && getPracticeScaleLocationBlanks(question).every((blank) => practiceScaleBlankIsCorrect(blank, answer.blanks[String(blank.id)]))
    && getPracticeScaleLocationComparisons(question).every((comparison) => practiceScaleComparisonIsCorrect(question, comparison))
  );
}

function getPracticeShortAnswerSetAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    return {
      values: answer.values && typeof answer.values === "object"
        ? Object.fromEntries(Object.entries(answer.values).map(([key, value]) => [String(key), String(value ?? "")]))
        : {},
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    values: {},
    submitted: false
  };
}

function setPracticeShortAnswerSetAnswer(question, value) {
  state.practiceAnswers[question.id] = value;
}

function getPracticeShortAnswerSetRows(question) {
  if (Array.isArray(question?.visual?.rowsForAnswer)) return question.visual.rowsForAnswer;
  return Array.isArray(question?.visual?.rows) ? question.visual.rows : [];
}

function practiceShortAnswerValueIsCorrect(row, response) {
  const normalized = String(response || "").trim().replace(/\s+/g, " ").toLowerCase();
  if (!normalized) return false;
  if (row.acceptAny) return true;
  const accepted = Array.isArray(row.accepted) ? row.accepted.map((value) => String(value).trim().toLowerCase()) : [];
  if (accepted.includes(normalized)) return true;

  const value = parsePracticeNumberInput(normalized);
  const correctValue = Number(row.correctValue);
  return Number.isFinite(value)
    && Number.isFinite(correctValue)
    && Math.abs(value - correctValue) < 0.0001;
}

function normalizePracticeShortAnswerTableText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/×/g, "x")
    .replace(/[^a-z0-9]+/g, "");
}

function getPracticeShortAnswerColumnAliases(column) {
  const key = normalizePracticeShortAnswerTableText(column);
  const aliases = {
    kilometers: ["kilometers", "kilometer", "km"],
    km: ["kilometers", "kilometer", "km"],
    meters: ["meters", "meter", "m"],
    m: ["meters", "meter", "m"],
    centimeters: ["centimeters", "centimeter", "cm"],
    cm: ["centimeters", "centimeter", "cm"],
    millimeters: ["millimeters", "millimeter", "mm"],
    mm: ["millimeters", "millimeter", "mm"],
    liters: ["liters", "liter", "l"],
    liter: ["liters", "liter", "l"],
    l: ["liters", "liter", "L"],
    ml: ["milliliters", "milliliter", "mL", "ml"],
    milliliters: ["milliliters", "milliliter", "mL", "ml"],
    milliliter: ["milliliters", "milliliter", "mL", "ml"],
    area: ["area", "square feet", "square yards", "square kilometers", "square units"],
    product: ["product", "partial product", "value"],
    products: ["product", "partial product", "value"],
    quotient: ["quotient", "number of groups", "groups"],
    quotients: ["quotient", "number of groups", "groups"],
    estimate: ["estimate", "reasonable estimate"],
    comparison: ["comparison", "compare"],
    length: ["length", "long"],
    width: ["width", "wide"],
    height: ["height", "tall"],
    base: ["base", "base area", "base square feet"],
    volume: ["volume", "cubic feet", "cubic inches", "cubic units"],
    "numberofgroups": ["number of groups", "groups", "quotient"],
    "totalproduct": ["total product", "product"]
  };
  return aliases[key] || [];
}

function practiceShortAnswerCellIsBlank(value) {
  return value === "" || value === null || typeof value === "undefined";
}

function getPracticeShortAnswerCellValue(row, column, index) {
  if (Array.isArray(row)) return row[index];
  if (row && typeof row === "object" && Object.prototype.hasOwnProperty.call(row, column)) {
    return row[column];
  }
  return "";
}

function buildPracticeShortAnswerGeneratedTables(question) {
  const visual = question.visual || {};
  const hasSourceTables = Array.isArray(visual.contextTables) && visual.contextTables.length;
  const isConversionTable = ["conversionTable", "metric conversion table", "comparisonTable"].includes(visual.type);
  if (hasSourceTables || !isConversionTable || !Array.isArray(visual.columns) || !visual.columns.length || !Array.isArray(visual.knownRows) || !visual.knownRows.length) {
    return [];
  }

  return [{
    title: "Complete the table",
    columns: visual.columns,
    rows: visual.knownRows.map((row) => visual.columns.map((column) => (
      row && Object.prototype.hasOwnProperty.call(row, column) ? row[column] : ""
    )))
  }];
}

function getPracticeShortAnswerTables(question) {
  const visual = question.visual || {};
  if (Array.isArray(visual.contextTables) && visual.contextTables.length) return visual.contextTables;
  return buildPracticeShortAnswerGeneratedTables(question);
}

function buildPracticeShortAnswerTableLabelCandidates(row, columns) {
  const descriptors = [];
  const measurements = [];
  const keyedDescriptors = [];
  const rawValues = [];

  columns.forEach((column, index) => {
    const value = getPracticeShortAnswerCellValue(row, column, index);
    if (practiceShortAnswerCellIsBlank(value)) return;
    rawValues.push(String(value));

    const aliases = getPracticeShortAnswerColumnAliases(column);
    if (!aliases.length) {
      descriptors.push(String(value));
      keyedDescriptors.push(`${value} ${column}`);
      return;
    }

    aliases.forEach((alias) => {
      measurements.push(`${value} ${alias}`);
    });
  });

  const candidates = [
    ...rawValues,
    rawValues.join(" "),
    ...descriptors,
    ...measurements,
    ...keyedDescriptors
  ].filter(Boolean);
  descriptors.forEach((descriptor) => {
    measurements.forEach((measurement) => {
      candidates.push(`${descriptor}: ${measurement}`);
      candidates.push(`${descriptor} ${measurement}`);
    });
  });

  return candidates.map(normalizePracticeShortAnswerTableText);
}

function practiceShortAnswerExpressionMatchesColumn(row, column) {
  const expression = normalizePracticeShortAnswerTableText(row.expression || row.prompt || "");
  const aliases = getPracticeShortAnswerColumnAliases(column);
  return [column, ...aliases].some((alias) => normalizePracticeShortAnswerTableText(alias) === expression);
}

function getPracticeShortAnswerTableCellKey(tableIndex, rowIndex, columnIndex) {
  return `${tableIndex}:${rowIndex}:${columnIndex}`;
}

function getPracticeShortAnswerTableMapping(question, tables) {
  const rows = getPracticeShortAnswerSetRows(question);
  const mappedRowIds = new Set();
  const cellRows = new Map();

  tables.forEach((table, tableIndex) => {
    const columns = Array.isArray(table.columns) ? table.columns : [];
    const tableRows = Array.isArray(table.rows) ? table.rows : [];

    tableRows.forEach((sourceRow, rowIndex) => {
      const labelCandidates = buildPracticeShortAnswerTableLabelCandidates(sourceRow, columns);
      if (!labelCandidates.length) return;

      columns.forEach((column, columnIndex) => {
        const value = getPracticeShortAnswerCellValue(sourceRow, column, columnIndex);
        if (!practiceShortAnswerCellIsBlank(value)) return;

        const answerRow = rows.find((row) => {
          const rowId = String(row.id);
          if (mappedRowIds.has(rowId)) return false;
          const label = normalizePracticeShortAnswerTableText(row.label || "");
          return labelCandidates.includes(label) && practiceShortAnswerExpressionMatchesColumn(row, column);
        });

        if (answerRow) {
          mappedRowIds.add(String(answerRow.id));
          cellRows.set(getPracticeShortAnswerTableCellKey(tableIndex, rowIndex, columnIndex), answerRow);
        }
      });
    });
  });

  return { cellRows, mappedRowIds };
}

function renderPracticeShortAnswerContextTables(tables, question = null, answer = null, tableMapping = null) {
  if (!Array.isArray(tables) || !tables.length) return "";
  return `
    <div class="practice-unit6-context-tables">
      ${tables.map((table, tableIndex) => {
        const columns = Array.isArray(table.columns) ? table.columns : [];
        const rows = Array.isArray(table.rows) ? table.rows : [];
        return `
          <div class="practice-unit6-table-wrap">
            ${table.title ? `<strong class="practice-unit6-context-title">${escapeHTML(table.title)}</strong>` : ""}
            <table class="practice-unit6-table">
              ${columns.length ? `
                <thead>
                  <tr>${columns.map((column) => `<th>${mathTextHTML(column)}</th>`).join("")}</tr>
                </thead>
              ` : ""}
              <tbody>
                ${rows.map((row, rowIndex) => `
                  <tr>
                    ${columns.map((column, index) => {
                      const value = Array.isArray(row) ? row[index] : row[column];
                      const answerRow = tableMapping?.cellRows?.get(getPracticeShortAnswerTableCellKey(tableIndex, rowIndex, index));
                      if (answerRow && question && answer) {
                        const answerValue = answer.values[String(answerRow.id)] || "";
                        const inputCopy = getPracticeShortAnswerInputCopy(answerRow);
                        const stateClass = answer.submitted
                          ? (practiceShortAnswerValueIsCorrect(answerRow, answerValue) ? " is-correct" : " is-incorrect")
                          : "";
                        return `
                          <td class="practice-unit6-table-answer-cell${stateClass}">
                            ${renderPracticeShortAnswerInput(question, answerRow, answerValue, inputCopy, "practice-table-cell-input")}
                          </td>
                        `;
                      }
                      return `<td>${practiceShortAnswerCellIsBlank(value) ? "<span class=\"practice-unit6-blank\">fill in</span>" : mathTextHTML(value)}</td>`;
                    }).join("")}
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function practiceShortAnswerSetIsFullyAnswered(question) {
  const answer = getPracticeShortAnswerSetAnswer(question);
  return getPracticeShortAnswerSetRows(question)
    .every((row) => String(answer.values[String(row.id)] || "").trim());
}

function practiceShortAnswerSetIsCorrect(question) {
  const answer = getPracticeShortAnswerSetAnswer(question);
  return Boolean(
    answer.submitted
    && practiceShortAnswerSetIsFullyAnswered(question)
    && getPracticeShortAnswerSetRows(question).every((row) => (
      practiceShortAnswerValueIsCorrect(row, answer.values[String(row.id)])
    ))
  );
}

function getPracticeCoordinatePlotTarget(question) {
  const target = question?.visual?.target || question?.answerKey || {};
  const x = Number(target.x);
  const y = Number(target.y);
  return {
    x: Number.isFinite(x) ? x : null,
    y: Number.isFinite(y) ? y : null
  };
}

function getPracticeCoordinatePlotAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    const x = Number(answer.x);
    const y = Number(answer.y);
    return {
      x: Number.isFinite(x) ? x : null,
      y: Number.isFinite(y) ? y : null,
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    x: null,
    y: null,
    submitted: false
  };
}

function practiceCoordinatePlotIsCorrect(question) {
  const answer = getPracticeCoordinatePlotAnswer(question);
  const target = getPracticeCoordinatePlotTarget(question);
  return Boolean(
    answer.submitted
    && answer.x === target.x
    && answer.y === target.y
  );
}

function getPracticeGroupMatchAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (answer && typeof answer === "object") {
    const matches = {};
    Object.entries(answer.matches || {}).forEach(([key, value]) => {
      matches[String(key)] = Array.isArray(value) ? value.map(String) : [];
    });
    return {
      matches,
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    matches: {},
    submitted: false
  };
}

function setPracticeGroupMatchAnswer(question, value) {
  state.practiceAnswers[question.id] = value;
}

function getPracticeGroupMatchGroups(question) {
  return Array.isArray(question?.visual?.groups) ? question.visual.groups : [];
}

function getPracticeGroupMatchChoices(question) {
  return Array.isArray(question?.visual?.choices) ? question.visual.choices : [];
}

function practiceGroupMatchIsFullyAnswered(question) {
  const answer = getPracticeGroupMatchAnswer(question);
  return getPracticeGroupMatchGroups(question)
    .every((group) => Array.isArray(answer.matches[String(group.id)]) && answer.matches[String(group.id)].length > 0);
}

function practiceGroupMatchGroupIsCorrect(question, group) {
  const answer = getPracticeGroupMatchAnswer(question);
  const selected = answer.matches[String(group.id)] || [];
  const correct = Array.isArray(group.correctChoices) ? group.correctChoices.map(String) : [];
  return sameStringSet(selected, correct);
}

function practiceGroupMatchIsCorrect(question) {
  const answer = getPracticeGroupMatchAnswer(question);
  return Boolean(
    answer.submitted
    && practiceGroupMatchIsFullyAnswered(question)
    && getPracticeGroupMatchGroups(question).every((group) => practiceGroupMatchGroupIsCorrect(question, group))
  );
}

function getPracticePart(question) {
  return state.practiceParts[question.id] || "q1";
}

function getGoDistanceStoredAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  if (!answer || typeof answer !== "object") {
    return {};
  }
  return answer;
}

function getGoDistancePartAnswer(question, part) {
  const answer = getGoDistanceStoredAnswer(question);
  if (answer[part] && typeof answer[part] === "object") {
    return answer[part];
  }
  if (part === "q1" && (answer.placements || answer.selectedOrder)) {
    return answer;
  }
  return {};
}

function setGoDistancePartAnswer(question, part, value) {
  const current = getGoDistanceStoredAnswer(question);
  state.practiceAnswers[question.id] = {
    q1: part === "q1" ? value : getGoDistancePartAnswer(question, "q1"),
    q2: part === "q2" ? value : getGoDistancePartAnswer(question, "q2"),
    activePart: getPracticePart(question)
  };
}

function getPracticeOrderItems(question) {
  return Array.isArray(question?.visual?.runners)
    ? question.visual.runners
    : Array.isArray(question?.visual?.items)
      ? question.visual.items
      : [];
}

function getPracticeOrderTarget(question) {
  if (Array.isArray(question?.visual?.correctOrder) && question.visual.correctOrder.length) {
    return question.visual.correctOrder.map(String);
  }

  return getPracticeOrderItems(question)
    .slice()
    .sort((left, right) => Number(left.position) - Number(right.position))
    .map((item) => String(item.id));
}

function getPracticeOrderTargetPlacements(question) {
  return getPracticeOrderItems(question).reduce((placements, item) => {
    const id = String(item.id);
    const position = Number(item.position);
    if (id && Number.isFinite(position)) {
      placements[id] = position;
    }
    return placements;
  }, {});
}

function getPracticeOrderAnswer(question) {
  const answer = isGoDistanceQuestion(question)
    ? getGoDistancePartAnswer(question, "q1")
    : state.practiceAnswers[question.id];
  if (answer && typeof answer === "object" && answer.placements && typeof answer.placements === "object") {
    return {
      placements: Object.entries(answer.placements).reduce((placements, [id, value]) => {
        const numericValue = Number(value);
        if (Number.isFinite(numericValue)) {
          placements[String(id)] = numericValue;
        }
        return placements;
      }, {}),
      submitted: Boolean(answer.submitted)
    };
  }

  if (answer && typeof answer === "object" && Array.isArray(answer.selectedOrder)) {
    const targetPlacements = getPracticeOrderTargetPlacements(question);
    return {
      placements: answer.selectedOrder.reduce((placements, id) => {
        const normalizedId = String(id);
        if (Number.isFinite(targetPlacements[normalizedId])) {
          placements[normalizedId] = targetPlacements[normalizedId];
        }
        return placements;
      }, {}),
      submitted: Boolean(answer.submitted)
    };
  }

  return {
    placements: {},
    submitted: false
  };
}

function setPracticeOrderAnswer(question, value) {
  if (isGoDistanceQuestion(question)) {
    setGoDistancePartAnswer(question, "q1", value);
    return;
  }

  state.practiceAnswers[question.id] = value;
}

function getPracticeOrderPlacedIds(question) {
  const answer = getPracticeOrderAnswer(question);
  return getPracticeOrderItems(question)
    .map((item) => String(item.id))
    .filter((id) => Number.isFinite(answer.placements[id]));
}

function getPracticeOrderItemLabel(question, itemId) {
  const item = getPracticeOrderItems(question).find((entry) => String(entry.id) === String(itemId));
  return item?.name || item?.label || String(itemId);
}

function formatPracticeOrderValueText(value, denominator = 4) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return "";
  const safeDenominator = Math.max(1, Number(denominator) || 4);
  const numerator = Math.round(numericValue * safeDenominator);
  if (numerator % safeDenominator === 0) {
    return String(numerator / safeDenominator);
  }
  const reduceFraction = (top, bottom) => {
    const gcd = (left, right) => (right === 0 ? left : gcd(right, left % right));
    const divisor = gcd(Math.abs(top), Math.abs(bottom)) || 1;
    return [top / divisor, bottom / divisor];
  };
  if (numerator > safeDenominator) {
    const whole = Math.floor(numerator / safeDenominator);
    const [top, bottom] = reduceFraction(numerator % safeDenominator, safeDenominator);
    return `${whole} ${top}/${bottom}`;
  }
  const [top, bottom] = reduceFraction(numerator, safeDenominator);
  return `${top}/${bottom}`;
}

function getPracticeOrderSnapValues(question) {
  const visual = question?.visual || {};
  if (Array.isArray(visual.snapValues) && visual.snapValues.length) {
    return visual.snapValues.map(Number).filter(Number.isFinite);
  }

  if (Array.isArray(visual.ticks) && visual.ticks.length) {
    return visual.ticks.map((tick) => Number(tick.value)).filter(Number.isFinite);
  }

  return [0, 0.25, 0.5, 0.75, 1, 1.25];
}

function practiceOrderPlacementIsCorrect(question, itemId) {
  const answer = getPracticeOrderAnswer(question);
  const targetPlacements = getPracticeOrderTargetPlacements(question);
  const selectedValue = answer.placements[String(itemId)];
  const targetValue = targetPlacements[String(itemId)];
  return Number.isFinite(selectedValue)
    && Number.isFinite(targetValue)
    && Math.abs(selectedValue - targetValue) < 0.001;
}

function practiceOrderIsFullyPlaced(question) {
  const answer = getPracticeOrderAnswer(question);
  return getPracticeOrderItems(question)
    .every((item) => Number.isFinite(answer.placements[String(item.id)]));
}

function getGoDistanceQuestion2Config(question) {
  return question?.visual?.question2 || {};
}

function getGoDistanceQuestion2Blanks(question) {
  const config = getGoDistanceQuestion2Config(question);
  if (Array.isArray(config.blanks) && config.blanks.length) {
    return config.blanks;
  }

  return [
    { id: "diego", name: "Diego", min: 0.5, max: 1.25, relation: "farther than Noah, but not as far as Kiran" },
    { id: "lin", name: "Lin", min: 1.25, max: 2.5, relation: "farther than Kiran, but not twice as far as Kiran" },
    { id: "tyler", name: "Tyler", min: 0.5, max: 0.75, relation: "farther than Noah, but not as far as Elena" }
  ];
}

function getGoDistanceQuestion2Answer(question) {
  const answer = getGoDistancePartAnswer(question, "q2");
  return {
    responses: answer.responses && typeof answer.responses === "object"
      ? Object.fromEntries(Object.entries(answer.responses).map(([key, value]) => [key, String(value ?? "")]))
      : {},
    submitted: Boolean(answer.submitted)
  };
}

function parsePracticeNumberInput(value) {
  const normalized = String(value ?? "")
    .trim()
    .replace(/[−–—]/g, "-")
    .replace(/\s+/g, " ");
  if (!normalized) return null;

  if (/^-?\d+(\.\d+)?$/.test(normalized)) {
    return Number(normalized);
  }

  const mixedMatch = normalized.match(/^(-?\d+)\s*(?:\+|\s)\s*(\d+)\/(\d+)$/);
  if (mixedMatch) {
    const whole = Number(mixedMatch[1]);
    const numerator = Number(mixedMatch[2]);
    const denominator = Number(mixedMatch[3]);
    if (denominator !== 0) {
      return whole + Math.sign(whole || 1) * (numerator / denominator);
    }
  }

  const fractionMatch = normalized.match(/^(-?\d+)\/(\d+)$/);
  if (fractionMatch) {
    const numerator = Number(fractionMatch[1]);
    const denominator = Number(fractionMatch[2]);
    return denominator === 0 ? null : numerator / denominator;
  }

  return null;
}

function goDistanceQuestion2ResponseIsCorrect(blank, response) {
  const value = parsePracticeNumberInput(response);
  return Number.isFinite(value) && value > Number(blank.min) && value < Number(blank.max);
}

function goDistanceQuestion2IsCorrect(question) {
  const answer = getGoDistanceQuestion2Answer(question);
  return Boolean(
    answer.submitted
    && getGoDistanceQuestion2Blanks(question).every((blank) => (
      goDistanceQuestion2ResponseIsCorrect(blank, answer.responses[blank.id])
    ))
  );
}

function practiceOrderOnlyIsCorrect(question) {
  const answer = getPracticeOrderAnswer(question);
  return Boolean(
    answer.submitted
    && practiceOrderIsFullyPlaced(question)
    && getPracticeOrderItems(question).every((item) => practiceOrderPlacementIsCorrect(question, item.id))
  );
}

function getWhoRanFartherRunners(question, includePriya = false) {
  const runners = Array.isArray(question?.visual?.runners) ? question.visual.runners : [];
  return includePriya ? runners : runners.filter((runner) => !runner.reference);
}

function getWhoRanFartherAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  return {
    farther: Array.isArray(answer?.farther) ? answer.farther.map(String) : [],
    notAsFar: Array.isArray(answer?.notAsFar) ? answer.notAsFar.map(String) : [],
    order: Array.isArray(answer?.order) ? answer.order.map(String) : [],
    slots: answer?.slots && typeof answer.slots === "object"
      ? Object.fromEntries(Object.entries(answer.slots).map(([key, value]) => [String(key), String(value ?? "")]))
      : {},
    missingDistance: String(answer?.missingDistance ?? ""),
    submitted: Boolean(answer?.submitted)
  };
}

function setWhoRanFartherAnswer(question, value) {
  state.practiceAnswers[question.id] = value;
}

function getWhoRanFartherCorrect(question) {
  const visual = question?.visual || {};
  return visual.correct || {};
}

function sameIdSet(left, right) {
  return sameStringSet(left || [], right || []);
}

function whoRanFartherGroupIsCorrect(question, group) {
  const answer = getWhoRanFartherAnswer(question);
  const correct = getWhoRanFartherCorrect(question)[group] || [];
  return sameIdSet(answer[group], correct);
}

function whoRanFartherOrderIsCorrect(question) {
  const answer = getWhoRanFartherAnswer(question);
  const correct = getWhoRanFartherCorrect(question).order || [];
  return answer.order.length === correct.length
    && correct.every((id, index) => String(answer.order[index]) === String(id));
}

function getWhoRanFartherSlots(question) {
  return Array.isArray(question?.visual?.lineSlots) ? question.visual.lineSlots : [];
}

function whoRanFartherSlotsAreComplete(question) {
  const answer = getWhoRanFartherAnswer(question);
  return getWhoRanFartherSlots(question).every((slot) => answer.slots[String(slot.id)]);
}

function whoRanFartherSlotsAreCorrect(question) {
  const answer = getWhoRanFartherAnswer(question);
  const correctSlots = getWhoRanFartherCorrect(question).slots || {};
  return getWhoRanFartherSlots(question).every((slot) => (
    answer.slots[String(slot.id)] === String(correctSlots[String(slot.id)] || slot.correctRunner || "")
  ));
}

function whoRanFartherMissingDistanceIsCorrect(question) {
  const answer = getWhoRanFartherAnswer(question);
  const expected = question?.visual?.missingDistance || {};
  const value = parsePracticeNumberInput(answer.missingDistance);
  if (!Number.isFinite(value)) return false;
  if (Number.isFinite(Number(expected.value)) && Math.abs(value - Number(expected.value)) < 0.001) {
    return true;
  }
  const normalized = answer.missingDistance.trim().replace(/\s+/g, "");
  return Array.isArray(expected.accepted) && expected.accepted.some((entry) => (
    normalized === String(entry).replace(/\s+/g, "")
  ));
}

function whoRanFartherIsFullyAnswered(question) {
  const answer = getWhoRanFartherAnswer(question);
  const runnerCount = getWhoRanFartherRunners(question).length;
  const orderCount = getWhoRanFartherRunners(question, true).length;
  return Boolean(
    answer.farther.length
    && answer.notAsFar.length
    && answer.order.length === orderCount
    && whoRanFartherSlotsAreComplete(question)
    && answer.missingDistance.trim()
    && runnerCount
  );
}

function whoRanFartherPartIsComplete(question, part) {
  const answer = getWhoRanFartherAnswer(question);
  switch (part) {
    case "q1":
      return answer.farther.length > 0;
    case "q2":
      return answer.notAsFar.length > 0;
    case "q3":
      return answer.order.length === getWhoRanFartherRunners(question, true).length;
    case "q4":
      return whoRanFartherSlotsAreComplete(question);
    case "q5":
      return Boolean(answer.missingDistance.trim());
    default:
      return false;
  }
}

function whoRanFartherIsCorrect(question) {
  const answer = getWhoRanFartherAnswer(question);
  return Boolean(
    answer.submitted
    && whoRanFartherIsFullyAnswered(question)
    && whoRanFartherGroupIsCorrect(question, "farther")
    && whoRanFartherGroupIsCorrect(question, "notAsFar")
    && whoRanFartherOrderIsCorrect(question)
    && whoRanFartherSlotsAreCorrect(question)
    && whoRanFartherMissingDistanceIsCorrect(question)
  );
}

function getWhoRanFartherRunnerName(question, runnerId) {
  const runner = getWhoRanFartherRunners(question, true)
    .find((entry) => String(entry.id) === String(runnerId));
  return runner?.name || String(runnerId);
}

function getWhoRanFartherRunnerInitial(question, runnerId) {
  const runner = getWhoRanFartherRunners(question, true)
    .find((entry) => String(entry.id) === String(runnerId));
  return runner?.initial || (runner?.name || String(runnerId)).slice(0, 1).toUpperCase();
}

function getProductComparisonConfig(question) {
  return question?.visual?.questions || {};
}

function getProductComparisonQuestion1Rows(question) {
  const config = getProductComparisonConfig(question);
  if (Array.isArray(config.q1?.rows) && config.q1.rows.length) {
    return config.q1.rows;
  }

  return [
    { id: "a", label: "a", left: "5/4 x 100", right: "100", correct: ">", explanation: "5/4 is greater than 1, so 5/4 of 100 is greater than 100." },
    { id: "b", label: "b", left: "5/7 x 2", right: "2", correct: "<", explanation: "5/7 is less than 1, so 5/7 of 2 is less than 2." },
    { id: "c", label: "c", left: "1/3 x 50", right: "100", correct: "<", explanation: "1/3 of 50 is less than 50, so it is also less than 100." }
  ];
}

function getProductComparisonQuestion2Rows(question) {
  const config = getProductComparisonConfig(question);
  if (Array.isArray(config.q2?.rows) && config.q2.rows.length) {
    return config.q2.rows;
  }

  return [
    { id: "a", label: "a", denominator: 9, factor: 50, operator: "<", right: 50, threshold: 9, explanation: "A numerator less than 9 makes the fraction less than 1, so the product is less than 50." },
    { id: "b", label: "b", denominator: 9, factor: 50, operator: "=", right: 50, threshold: 9, explanation: "A numerator of 9 makes 9/9 equal 1, so the product equals 50." },
    { id: "c", label: "c", denominator: 9, factor: 50, operator: ">", right: 50, threshold: 9, explanation: "A numerator greater than 9 makes the fraction greater than 1, so the product is greater than 50." }
  ];
}

function getProductComparisonQuestion3Rows(question) {
  const config = getProductComparisonConfig(question);
  if (Array.isArray(config.q3?.rows) && config.q3.rows.length) {
    return config.q3.rows;
  }

  return [
    { id: "a", label: "a", numerator: 9, factor: 50, operator: "<", right: 50, threshold: 9, explanation: "A denominator greater than 9 makes 9 over that number less than 1, so the product is less than 50." },
    { id: "b", label: "b", numerator: 9, factor: 50, operator: "=", right: 50, threshold: 9, explanation: "A denominator of 9 makes 9/9 equal 1, so the product equals 50." },
    { id: "c", label: "c", numerator: 9, factor: 50, operator: ">", right: 50, threshold: 9, explanation: "A positive denominator less than 9 makes 9 over that number greater than 1, so the product is greater than 50." }
  ];
}

function getProductComparisonStoredAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  return answer && typeof answer === "object" ? answer : {};
}

function getProductComparisonPartAnswer(question, part) {
  const answer = getProductComparisonStoredAnswer(question);
  if (answer[part] && typeof answer[part] === "object") {
    return answer[part];
  }
  return {};
}

function setProductComparisonPartAnswer(question, part, value) {
  state.practiceAnswers[question.id] = {
    q1: part === "q1" ? value : getProductComparisonPartAnswer(question, "q1"),
    q2: part === "q2" ? value : getProductComparisonPartAnswer(question, "q2"),
    q3: part === "q3" ? value : getProductComparisonPartAnswer(question, "q3"),
    activePart: getPracticePart(question)
  };
}

function getProductComparisonQuestion1Answer(question) {
  const answer = getProductComparisonPartAnswer(question, "q1");
  return {
    symbols: answer.symbols && typeof answer.symbols === "object"
      ? Object.fromEntries(Object.entries(answer.symbols).map(([key, value]) => [key, String(value ?? "")]))
      : {},
    submitted: Boolean(answer.submitted)
  };
}

function getProductComparisonQuestion2Answer(question) {
  const answer = getProductComparisonPartAnswer(question, "q2");
  return {
    values: answer.values && typeof answer.values === "object"
      ? Object.fromEntries(Object.entries(answer.values).map(([key, value]) => [key, String(value ?? "")]))
      : {},
    submitted: Boolean(answer.submitted)
  };
}

function getProductComparisonQuestion3Answer(question) {
  const answer = getProductComparisonPartAnswer(question, "q3");
  return {
    values: answer.values && typeof answer.values === "object"
      ? Object.fromEntries(Object.entries(answer.values).map(([key, value]) => [key, String(value ?? "")]))
      : {},
    submitted: Boolean(answer.submitted)
  };
}

function compareProductValues(left, operator, right) {
  const tolerance = 0.0001;
  if (!Number.isFinite(left) || !Number.isFinite(right)) return false;
  if (operator === "<") return left < right - tolerance;
  if (operator === ">") return left > right + tolerance;
  if (operator === "=") return Math.abs(left - right) <= tolerance;
  return false;
}

function productComparisonQuestion2Value(row, response) {
  const numerator = parsePracticeNumberInput(response);
  const denominator = Number(row.denominator) || 1;
  const factor = Number(row.factor) || 1;
  return Number.isFinite(numerator) ? (numerator / denominator) * factor : null;
}

function productComparisonQuestion3Value(row, response) {
  const denominator = parsePracticeNumberInput(response);
  const numerator = Number(row.numerator) || 0;
  const factor = Number(row.factor) || 1;
  return Number.isFinite(denominator) && denominator > 0 ? (numerator / denominator) * factor : null;
}

function productComparisonQuestion1RowIsCorrect(question, row) {
  const answer = getProductComparisonQuestion1Answer(question);
  return answer.symbols[row.id] === row.correct;
}

function productComparisonQuestion2RowIsCorrect(row, response) {
  const value = productComparisonQuestion2Value(row, response);
  return compareProductValues(value, row.operator, Number(row.right));
}

function productComparisonQuestion3RowIsCorrect(row, response) {
  const value = productComparisonQuestion3Value(row, response);
  return compareProductValues(value, row.operator, Number(row.right));
}

function productComparisonQuestion1IsCorrect(question) {
  const answer = getProductComparisonQuestion1Answer(question);
  return Boolean(
    answer.submitted
    && getProductComparisonQuestion1Rows(question).every((row) => productComparisonQuestion1RowIsCorrect(question, row))
  );
}

function productComparisonQuestion2IsCorrect(question) {
  const answer = getProductComparisonQuestion2Answer(question);
  return Boolean(
    answer.submitted
    && getProductComparisonQuestion2Rows(question).every((row) => (
      productComparisonQuestion2RowIsCorrect(row, answer.values[row.id])
    ))
  );
}

function productComparisonQuestion3IsCorrect(question) {
  const answer = getProductComparisonQuestion3Answer(question);
  return Boolean(
    answer.submitted
    && getProductComparisonQuestion3Rows(question).every((row) => (
      productComparisonQuestion3RowIsCorrect(row, answer.values[row.id])
    ))
  );
}

function practiceQuestionIsCorrect(question) {
  const selected = state.practiceAnswers[question.id];
  if (question.responseType === "numberLinePoint") {
    return Boolean(
      selected
      && typeof selected === "object"
      && selected.submitted
      && selected.selectedTick === getNumberLineTargetTick(question.visual)
    );
  }

  if (question.responseType === "numberLineOrder") {
    if (isGoDistanceQuestion(question)) {
      return practiceOrderOnlyIsCorrect(question) && goDistanceQuestion2IsCorrect(question);
    }
    return practiceOrderOnlyIsCorrect(question);
  }

  if (question.responseType === "whoRanFarther") {
    return whoRanFartherIsCorrect(question);
  }

  if (question.responseType === "productComparisonBlanks") {
    return productComparisonQuestion1IsCorrect(question)
      && productComparisonQuestion2IsCorrect(question)
      && productComparisonQuestion3IsCorrect(question);
  }

  if (question.responseType === "diagramMatch") {
    return practiceDiagramMatchIsCorrect(question);
  }

  if (question.responseType === "scaleFactorLocation") {
    return practiceScaleLocationIsCorrect(question);
  }

  if (question.responseType === "shortAnswerSet") {
    return practiceShortAnswerSetIsCorrect(question);
  }

  if (question.responseType === "coordinatePlot") {
    return practiceCoordinatePlotIsCorrect(question);
  }

  if (question.responseType === "groupMatch") {
    return practiceGroupMatchIsCorrect(question);
  }

  if (question.responseType === "shadeRectangleParts") {
    const selectedPieces = selected && typeof selected === "object" && Array.isArray(selected.selectedPieces)
      ? selected.selectedPieces
      : [];
    const expectedCount = getShadeRectangleTargetPieces(question.visual).length;
    return Boolean(
      selected
      && typeof selected === "object"
      && selected.submitted
      && selectedPieces.length === expectedCount
    );
  }

  if (question.responseType === "shadeAreaOverlap") {
    const selectedCells = selected && typeof selected === "object" && Array.isArray(selected.selectedCells)
      ? selected.selectedCells
      : [];
    const rows = Math.max(1, question.visual?.rows || 1);
    const columns = Math.max(1, question.visual?.columns || 1);
    const correctCells = getPracticeAreaGridCorrectCells(question, rows * columns);
    return Boolean(
      selected
      && typeof selected === "object"
      && selected.submitted
      && sameNumberSet(selectedCells, correctCells)
    );
  }

  if (question.responseType === "open") {
    return getPracticeOpenAnswer(question).reviewed;
  }

  if (question.responseType === "regionChoice") {
    const answer = getPracticeRegionAnswer(question);
    return Boolean(
      answer.submitted
      && answer.selectedRegion
      && answer.selectedRegion === getPracticeRegionTarget(question.visual)
    );
  }

  if (question.responseType === "multi") {
    const answer = getPracticeMultiAnswer(question);
    if (!answer.submitted) return false;
    const correctValues = question.choices
      .filter((choice) => choice.correct)
      .map((choice) => choice.value);
    return (
      answer.selectedValues.length === correctValues.length
      && correctValues.every((value) => answer.selectedValues.includes(value))
    );
  }

  return question.choices.some((choice) => choice.value === selected && choice.correct);
}

function sameNumberSet(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
  const leftSorted = [...left].sort((a, b) => a - b);
  const rightSorted = [...right].sort((a, b) => a - b);
  return leftSorted.every((value, index) => value === rightSorted[index]);
}

function sameStringSet(left, right) {
  if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) return false;
  const leftSorted = [...left].map(String).sort();
  const rightSorted = [...right].map(String).sort();
  return leftSorted.every((value, index) => value === rightSorted[index]);
}

function practiceQuestionIsAnswered(question) {
  const selected = state.practiceAnswers[question.id];
  if (question.responseType === "numberLinePoint") {
    return Boolean(selected && typeof selected === "object" && selected.submitted);
  }
  if (question.responseType === "numberLineOrder") {
    if (isGoDistanceQuestion(question)) {
      return Boolean(getPracticeOrderAnswer(question).submitted && getGoDistanceQuestion2Answer(question).submitted);
    }
    return getPracticeOrderAnswer(question).submitted;
  }
  if (question.responseType === "whoRanFarther") {
    return Boolean(getWhoRanFartherAnswer(question).submitted && whoRanFartherIsFullyAnswered(question));
  }
  if (question.responseType === "productComparisonBlanks") {
    return Boolean(
      getProductComparisonQuestion1Answer(question).submitted
      && getProductComparisonQuestion2Answer(question).submitted
      && getProductComparisonQuestion3Answer(question).submitted
    );
  }
  if (question.responseType === "diagramMatch") {
    return getPracticeDiagramMatchAnswer(question).submitted;
  }
  if (question.responseType === "scaleFactorLocation") {
    const answer = getPracticeScaleLocationAnswer(question);
    return Boolean(
      answer.submitted
      && (!isSectionCCheckpointQuestion(question) || practiceScaleLocationIsFullyAnswered(question))
    );
  }
  if (question.responseType === "shortAnswerSet") {
    return getPracticeShortAnswerSetAnswer(question).submitted;
  }
  if (question.responseType === "coordinatePlot") {
    return getPracticeCoordinatePlotAnswer(question).submitted;
  }
  if (question.responseType === "groupMatch") {
    return getPracticeGroupMatchAnswer(question).submitted;
  }
  if (question.responseType === "shadeRectangleParts") {
    return Boolean(selected && typeof selected === "object" && selected.submitted);
  }
  if (question.responseType === "shadeAreaOverlap") {
    return Boolean(selected && typeof selected === "object" && selected.submitted);
  }
  if (question.responseType === "multi") {
    return getPracticeMultiAnswer(question).submitted;
  }
  if (question.responseType === "open") {
    return getPracticeOpenAnswer(question).reviewed;
  }
  if (question.responseType === "regionChoice") {
    const answer = getPracticeRegionAnswer(question);
    return Boolean(answer.selectedRegion && answer.submitted);
  }
  return Array.isArray(selected) ? selected.length > 0 : Boolean(selected);
}

function renderPracticePackVisual(numerator, denominator) {
  const wholes = Math.floor(numerator / denominator);
  const leftover = numerator % denominator;
  const leftoverVisual = leftover > 0
    ? renderFractionSegmentBar(leftover, denominator, {
      className: "is-pack",
      ariaLabel: `${leftover} leftover of ${denominator} pieces`
    })
    : '<div class="no-leftover">no leftover pieces</div>';

  return `
    <div class="fraction-pack-layout">
      <article class="fraction-visual-card">
        <h3>Loose fraction pieces</h3>
        <div class="fraction-pack-row">${renderFractionUnitStack(numerator, denominator)}</div>
      </article>
      <article class="fraction-visual-card">
        <h3>Packed into wholes</h3>
        <div class="packed-result">
          <div class="packed-whole-count">
            <span>${wholes}</span>
            <small>${plural(wholes, "whole")}</small>
          </div>
          ${leftoverVisual}
        </div>
      </article>
    </div>
  `;
}

function getNumberLineTargetValue(visual) {
  if (Number.isFinite(visual.targetValue)) {
    return visual.targetValue;
  }

  if (Number.isFinite(visual.targetNumerator) && Number.isFinite(visual.targetDenominator)) {
    return visual.targetNumerator / visual.targetDenominator;
  }

  return null;
}

function getNumberLineTickCount(visual) {
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const max = Number.isFinite(visual.max) ? visual.max : 1;
  const denominator = Math.max(1, visual.denominator || 1);
  const span = Math.max(1, max - min);
  return span * denominator;
}

function getNumberLineTargetTick(visual) {
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const denominator = Math.max(1, visual.denominator || 1);
  const targetValue = getNumberLineTargetValue(visual);
  if (targetValue === null) return null;
  return Math.round((targetValue - min) * denominator);
}

function formatNumberLineTickHTML(visual, tick) {
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const denominator = Math.max(1, visual.denominator || 1);
  const numerator = min * denominator + tick;

  if (numerator % denominator === 0) {
    return String(numerator / denominator);
  }

  const improper = fractionHTML(numerator, denominator);
  const mixed = mixedNumberHTML(numerator, denominator);
  return mixed === improper
    ? improper
    : `${improper} <span class="math-equals">=</span> ${mixed}`;
}

function formatNumberLinePlacementHTML(visual, tick) {
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const denominator = Math.max(1, visual.denominator || 1);
  const numerator = min * denominator + tick;

  if (numerator % denominator === 0) {
    return String(numerator / denominator);
  }

  if (numerator > denominator) {
    return mixedNumberHTML(numerator, denominator);
  }

  return fractionHTML(numerator, denominator);
}

function getNumberLineAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  return answer && typeof answer === "object" ? answer : null;
}

function renderPracticeNumberLine(visual, question = null) {
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const max = Number.isFinite(visual.max) ? visual.max : 1;
  const denominator = Math.max(1, visual.denominator || 1);
  const tickCount = getNumberLineTickCount(visual);
  const isInteractive = question?.responseType === "numberLinePoint";
  const answer = isInteractive ? getNumberLineAnswer(question) : null;
  const submitted = Boolean(answer?.submitted);
  const selectedTick = Number.isFinite(answer?.selectedTick) ? answer.selectedTick : null;
  const targetTick = getNumberLineTargetTick(visual);
  const isCorrect = submitted && selectedTick === targetTick;
  const showGuides = !isInteractive || Boolean(answer?.revealedGuides || submitted);
  const ticks = Array.from({ length: tickCount + 1 }, (_, index) => {
    const value = min + index / denominator;
    const isWhole = index % denominator === 0;
    if (!showGuides && !isWhole) return "";
    const label = isWhole ? `<span class="practice-number-line-label">${value}</span>` : "";
    return `
      <span
        class="practice-number-line-tick${isWhole ? " is-whole-tick" : ""}"
        style="left: ${(index / tickCount) * 100}%;"
      >${label}</span>
    `;
  }).join("");
  const selectedMarker = selectedTick !== null
    ? `
      <span
        class="practice-number-line-marker is-student-marker${submitted ? (isCorrect ? " is-correct" : " is-incorrect") : ""}"
        style="left: ${(selectedTick / tickCount) * 100}%;"
      >
        <span>${submitted ? "your point" : "selected"}</span>
      </span>
    `
    : "";
  const targetMarker = submitted && !isCorrect && targetTick !== null
    ? `
      <span
        class="practice-number-line-marker is-target-marker"
        style="left: ${(targetTick / tickCount) * 100}%;"
      >
        <span>correct</span>
      </span>
    `
    : "";
  const presetMarker = !isInteractive && visual.showMarker !== false && targetTick !== null
    ? `
      <span class="practice-number-line-marker" style="left: ${(targetTick / tickCount) * 100}%;">
        <span>${visual.markerLabel || ""}</span>
      </span>
    `
    : "";

  return `
    <div class="practice-number-line-card${isInteractive ? " is-interactive" : ""}${showGuides ? " has-guides" : ""}">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Number line"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div
        class="practice-number-line-track"
        ${isInteractive ? `data-practice-number-line="${question.id}"` : ""}
        aria-label="${visual.ariaLabel || "practice number line"}"
      >
        ${ticks}
        ${presetMarker}
        ${targetMarker}
        ${selectedMarker}
      </div>
    </div>
  `;
}

function getShadeRectangleTargetPieces(visual) {
  const denominator = Math.max(1, visual.denominator || visual.parts || 1);
  const numerator = Math.max(0, Math.min(denominator, visual.numerator || visual.shaded || 0));
  return Array.from({ length: numerator }, (_, index) => index);
}

function getShadeRectangleAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  return answer && typeof answer === "object" ? answer : null;
}

function renderPracticeShadeRectangle(visual, question = null) {
  const denominator = Math.max(1, visual.denominator || visual.parts || 1);
  const numerator = Math.max(0, Math.min(denominator, visual.numerator || visual.shaded || 0));
  const isInteractive = question?.responseType === "shadeRectangleParts";
  const answer = isInteractive ? getShadeRectangleAnswer(question) : null;
  const selectedPieces = Array.isArray(answer?.selectedPieces) ? answer.selectedPieces : [];
  const submitted = Boolean(answer?.submitted);
  const targetCount = getShadeRectangleTargetPieces(visual).length;
  const isCorrect = submitted && selectedPieces.length === targetCount;
  const showShaded = isInteractive ? false : visual.showShaded !== false;
  const orientation = visual.orientation === "vertical" ? "vertical" : "horizontal";
  const cells = Array.from({ length: denominator }, (_, index) => {
    const selected = selectedPieces.includes(index);
    const shaded = showShaded && index < numerator;
    const classes = [
      "practice-rect-piece",
      shaded ? "is-shaded" : "",
      isInteractive ? "is-clickable" : "",
      selected ? "is-selected" : "",
      submitted && selected && !isCorrect ? "is-incorrect" : "",
      submitted && selected && isCorrect ? "is-correct" : ""
    ].filter(Boolean).join(" ");
    return `
      <button
        class="${classes}"
        type="button"
        ${isInteractive ? `data-practice-shade-piece="${question.id}" data-shade-piece-index="${index}"` : "disabled"}
        aria-pressed="${selected ? "true" : "false"}"
        aria-label="Part ${index + 1} of ${denominator}"
      ></button>
    `;
  }).join("");

  return `
    <div class="practice-shade-card${isInteractive ? " is-interactive" : ""}${submitted ? " is-submitted" : ""}">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Rectangle model"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div
        class="practice-shade-rectangle is-${orientation}"
        style="--rect-parts: ${denominator};"
        aria-label="${visual.ariaLabel || `${numerator} of ${denominator} equal parts`}"
      >
        ${cells}
      </div>
    </div>
  `;
}

function getPracticeAreaGridAnswer(question) {
  const answer = state.practiceAnswers[question.id];
  return answer && typeof answer === "object" ? answer : null;
}

function getPracticeAreaGridPlanning(question) {
  const planning = state.practicePlanning[question.id];
  if (planning && typeof planning === "object" && Array.isArray(planning.selectedCells)) {
    return planning.selectedCells;
  }
  return [];
}

function getPracticeAreaGridTargetCount(question) {
  const visual = question.visual || {};
  return Math.max(0, visual.targetCells || question.answerKey?.selectedCells || visual.selectedCells || 0);
}

function clampCount(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getPracticeAreaGridOverlapCells(visual, rows, columns) {
  if (Array.isArray(visual.correctCells)) {
    const totalCells = rows * columns;
    return visual.correctCells
      .map(Number)
      .filter((index) => Number.isInteger(index) && index >= 0 && index < totalCells);
  }

  const fractions = [visual.firstFraction, visual.secondFraction]
    .map(parseFractionString)
    .filter(Boolean)
    .map((fraction) => ({
      numerator: Math.max(0, fraction.numerator),
      denominator: Math.max(1, fraction.denominator)
    }));

  let selectedRows = null;
  let selectedColumns = null;

  fractions.forEach((fraction) => {
    if (fraction.denominator === rows && fraction.denominator !== columns && selectedRows === null) {
      selectedRows = clampCount(fraction.numerator, 0, rows);
    }
    if (fraction.denominator === columns && fraction.denominator !== rows && selectedColumns === null) {
      selectedColumns = clampCount(fraction.numerator, 0, columns);
    }
  });

  fractions.forEach((fraction) => {
    if (fraction.denominator === rows && selectedRows === null) {
      selectedRows = clampCount(fraction.numerator, 0, rows);
    } else if (fraction.denominator === columns && selectedColumns === null) {
      selectedColumns = clampCount(fraction.numerator, 0, columns);
    }
  });

  if (selectedRows === null || selectedColumns === null) {
    return null;
  }

  const cells = [];
  for (let row = 0; row < selectedRows; row += 1) {
    for (let column = 0; column < selectedColumns; column += 1) {
      cells.push(row * columns + column);
    }
  }
  return cells;
}

function getPracticeAreaGridCorrectCells(question, totalCells) {
  const visual = question.visual || {};
  const rows = Math.max(1, visual.rows || 1);
  const columns = Math.max(1, visual.columns || 1);
  const overlapCells = getPracticeAreaGridOverlapCells(visual, rows, columns);
  if (overlapCells) {
    return overlapCells;
  }

  const targetCount = Math.min(totalCells, getPracticeAreaGridTargetCount(question));
  return Array.from({ length: targetCount }, (_, index) => index);
}

function renderPracticeAreaGrid(visual, question = null) {
  const rows = Math.max(1, visual.rows || 1);
  const columns = Math.max(1, visual.columns || 1);
  const totalCells = rows * columns;
  const isInteractive = question?.responseType === "shadeAreaOverlap";
  const canPlan = Boolean(question && !isInteractive && visual.allowStudentPlanning);
  const answer = isInteractive ? getPracticeAreaGridAnswer(question) : null;
  const interactiveCells = Array.isArray(answer?.selectedCells) ? answer.selectedCells : [];
  const planningCells = canPlan ? getPracticeAreaGridPlanning(question) : [];
  const submitted = Boolean(answer?.submitted);
  const targetCount = isInteractive ? getPracticeAreaGridTargetCount(question) : Math.max(0, visual.selectedCells || 0);
  const interactiveCorrectCells = isInteractive && question
    ? getPracticeAreaGridCorrectCells(question, totalCells)
    : [];
  const isCorrect = submitted && sameNumberSet(interactiveCells, interactiveCorrectCells);
  const showShaded = !isInteractive && visual.showShaded !== false;
  const showCorrectOutline = canPlan && practiceQuestionIsCorrect(question);
  const visualOverlapCells = getPracticeAreaGridOverlapCells(visual, rows, columns);
  const shadedCells = visualOverlapCells || Array.from({ length: Math.min(totalCells, targetCount) }, (_, index) => index);
  const correctCells = showCorrectOutline
    ? (question ? getPracticeAreaGridCorrectCells(question, totalCells) : shadedCells)
    : [];
  const cells = Array.from({ length: totalCells }, (_, index) => {
    const selected = isInteractive ? interactiveCells.includes(index) : planningCells.includes(index);
    const shaded = showShaded && shadedCells.includes(index);
    const answerOutline = correctCells.includes(index);
    const classes = [
      "practice-area-grid-cell",
      shaded ? "is-shaded" : "",
      isInteractive || canPlan ? "is-clickable" : "",
      selected ? "is-selected" : "",
      submitted && selected && isCorrect ? "is-correct" : "",
      submitted && selected && !isCorrect ? "is-incorrect" : "",
      answerOutline ? "is-answer-outline" : ""
    ].filter(Boolean).join(" ");

    if (isInteractive || canPlan) {
      return `
        <button
          class="${classes}"
          type="button"
          ${isInteractive ? `data-practice-area-cell="${question.id}"` : `data-practice-area-plan="${question.id}"`}
          data-area-cell-index="${index}"
          aria-pressed="${selected ? "true" : "false"}"
          aria-label="${canPlan ? "Planning" : "Small area"} piece ${index + 1} of ${totalCells}"
        ></button>
      `;
    }

    return `<span class="${classes}" aria-label="${shaded ? "shaded" : "unshaded"} area piece"></span>`;
  }).join("");

  return `
    <div class="practice-area-grid-card${isInteractive ? " is-interactive" : ""}${canPlan ? " is-planning" : ""}${submitted ? " is-submitted" : ""}">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Area grid"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-area-grid" style="--practice-area-rows: ${rows}; --practice-area-cols: ${columns};">
        ${cells}
      </div>
    </div>
  `;
}

function renderPracticeGreaterThanOneGrid(visual, question = null) {
  const rows = Math.max(1, visual.rows || 1);
  const selectedRows = Math.max(0, Math.min(rows, visual.selectedRows || 0));
  const showShaded = visual.showShaded !== false;
  const denominator = 2;
  const columns = Math.max(1, Math.round((visual.wholes || 1) * denominator));
  const wholeBoundary = denominator;
  const totalCells = rows * columns;
  const canPlan = Boolean(question && visual.allowStudentPlanning);
  const planningCells = canPlan ? getPracticeAreaGridPlanning(question) : [];
  const showCorrectOutline = canPlan && practiceQuestionIsCorrect(question);
  const cells = [];
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const cellIndex = row * columns + column;
      const shaded = showShaded && row < selectedRows;
      const selected = planningCells.includes(cellIndex);
      const answerOutline = showCorrectOutline && row < selectedRows;
      const boundary = column + 1 === wholeBoundary ? " is-whole-boundary" : "";
      const classes = [
        "practice-area-grid-cell",
        shaded ? "is-shaded" : "",
        canPlan ? "is-clickable" : "",
        selected ? "is-selected" : "",
        answerOutline ? "is-answer-outline" : "",
        boundary.trim()
      ].filter(Boolean).join(" ");
      cells.push(canPlan
        ? `
          <button
            class="${classes}"
            type="button"
            data-practice-area-plan="${question.id}"
            data-area-cell-index="${cellIndex}"
            aria-pressed="${selected ? "true" : "false"}"
            aria-label="Planning piece ${cellIndex + 1} of ${totalCells}"
          ></button>
        `
        : `<span class="${classes}"></span>`);
    }
  }

  return `
    <div class="practice-area-grid-card${canPlan ? " is-planning" : ""}">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Area model greater than one"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-area-grid" style="--practice-area-rows: ${rows}; --practice-area-cols: ${columns};">
        ${cells.join("")}
      </div>
    </div>
  `;
}

function parseUnitFraction(value) {
  const match = String(value || "").match(/^1\/(\d+)$/);
  return match ? Number(match[1]) : 1;
}

function parseFractionString(value) {
  const match = String(value || "").match(/^(\d+)\/(\d+)$/);
  if (!match) return null;
  return {
    numerator: Number(match[1]),
    denominator: Number(match[2])
  };
}

function renderPracticeTapeDiagram(visual) {
  const title = visual.title || "Tape diagram";
  const caption = visual.caption || "";

  if (visual.wholeParts && visual.splitSelectedInto) {
    const wholeParts = Math.max(1, visual.wholeParts);
    const selectedPart = Math.max(1, Math.min(wholeParts, visual.selectedPart || 1));
    const splitCount = Math.max(1, visual.splitSelectedInto);
    const pieces = Array.from({ length: wholeParts }, (_, index) => {
      const selected = index + 1 === selectedPart;
      const content = selected
        ? `
          <div class="practice-tape-subpieces" style="--tape-subpieces: ${splitCount};">
            ${Array.from({ length: splitCount }, () => "<span></span>").join("")}
          </div>
        `
        : "";
      return `<div class="practice-tape-piece${selected ? " is-selected" : ""}">${content}</div>`;
    }).join("");

    return `
      <div class="practice-tape-card">
        <div class="practice-visual-caption">
          <strong>${title}</strong>
          ${caption ? `<span>${caption}</span>` : ""}
        </div>
        <div class="practice-tape" style="--tape-parts: ${wholeParts};">${pieces}</div>
      </div>
    `;
  }

  if (visual.knownPart && visual.knownFraction) {
    const fraction = parseFractionString(visual.knownFraction) || { numerator: 1, denominator: visual.totalParts || 1 };
    const cells = Array.from({ length: fraction.denominator }, (_, index) => {
      const known = index < fraction.numerator;
      const label = known && index === 0 ? `${visual.knownPart}` : (known ? "" : "?");
      return `<div class="practice-tape-piece${known ? " is-known" : ""}"><span>${label}</span></div>`;
    }).join("");

    return `
      <div class="practice-tape-card">
        <div class="practice-visual-caption">
          <strong>${title}</strong>
          ${caption ? `<span>${caption}</span>` : ""}
        </div>
        <div class="practice-tape" style="--tape-parts: ${fraction.denominator};">${cells}</div>
      </div>
    `;
  }

  if (visual.knownPart && visual.totalParts) {
    const totalParts = Math.max(1, visual.totalParts);
    const cells = Array.from({ length: totalParts }, (_, index) => `
      <div class="practice-tape-piece${index === 0 ? " is-known" : ""}">
        <span>${index === 0 ? visual.knownPart : "?"}</span>
      </div>
    `).join("");

    return `
      <div class="practice-tape-card">
        <div class="practice-visual-caption">
          <strong>${title}</strong>
          ${caption ? `<span>${caption}</span>` : ""}
        </div>
        <div class="practice-tape" style="--tape-parts: ${totalParts};">${cells}</div>
      </div>
    `;
  }

  if (visual.total && visual.selectedFraction) {
    const fraction = parseFractionString(visual.selectedFraction) || { numerator: 1, denominator: 1 };
    const cells = Array.from({ length: fraction.denominator }, (_, index) => `
      <div class="practice-tape-piece${index < fraction.numerator ? " is-selected" : ""}">
        <span>${index < fraction.numerator ? "" : ""}</span>
      </div>
    `).join("");

    return `
      <div class="practice-tape-card">
        <div class="practice-visual-caption">
          <strong>${title}</strong>
          ${caption ? `<span>${caption}</span>` : ""}
        </div>
        <div class="practice-tape-total">${visual.total} total</div>
        <div class="practice-tape" style="--tape-parts: ${fraction.denominator};">${cells}</div>
      </div>
    `;
  }

  return `
    <div class="practice-tape-card">
      <div class="practice-visual-caption">
        <strong>${title}</strong>
        ${caption ? `<span>${caption}</span>` : ""}
      </div>
    </div>
  `;
}

function renderPracticeTapeComparison(visual) {
  const divisors = Array.isArray(visual.divisors) && visual.divisors.length
    ? visual.divisors
    : [2, 3];
  const tapes = divisors.map((divisor) => {
    const splitCount = Math.max(1, Number(divisor) || 1);
    const cells = Array.from({ length: splitCount }, () => "<span></span>").join("");
    return `
      <article>
        <strong>Split into ${splitCount}</strong>
        <div class="practice-tape-subpieces" style="--tape-subpieces: ${splitCount};">${cells}</div>
      </article>
    `;
  }).join("");

  return `
    <div class="practice-tape-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Compare equal shares"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>The same amount split into more groups makes smaller shares.</span>"}
      </div>
      <div class="practice-tape-comparison">
        ${tapes}
      </div>
    </div>
  `;
}

function renderPracticeStripDiagram(visual) {
  const length = Math.max(1, Number(visual.length) || 1);
  const denominator = parseUnitFraction(visual.unitSize);
  const rows = Array.from({ length }, (_, wholeIndex) => `
    <div class="practice-strip-row">
      <span class="practice-strip-label">${wholeIndex + 1}</span>
      <div class="practice-strip" style="--strip-parts: ${denominator};">
        ${Array.from({ length: denominator }, (_, partIndex) => `
          <span class="practice-strip-piece is-counted"><small>${wholeIndex * denominator + partIndex + 1}</small></span>
        `).join("")}
      </div>
    </div>
  `).join("");

  return `
    <div class="practice-strip-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Strip diagram"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-strip-stack">
        ${rows}
      </div>
    </div>
  `;
}

function renderPracticeStrategyCard(visual) {
  return `
    <div class="practice-strategy-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Strategy card"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="story-routine-board is-practice">
        <article class="routine-card"><span>1</span><strong>Whole</strong><p>What amount is 1?</p></article>
        <article class="routine-card"><span>2</span><strong>Known</strong><p>What amount is given?</p></article>
        <article class="routine-card"><span>3</span><strong>Unknown</strong><p>What is missing?</p></article>
        <article class="routine-card"><span>4</span><strong>Action</strong><p>Part of, sharing, or how many fit?</p></article>
      </div>
    </div>
  `;
}

function renderPracticeStripSet(visual) {
  const count = Math.max(1, visual.count || 1);
  const denominator = Math.max(1, visual.denominator || 1);
  const shadedValues = Array.isArray(visual.shadedPerStrip)
    ? visual.shadedPerStrip
    : Array.from({ length: count }, () => visual.shadedPerStrip || 0);
  const strips = Array.from({ length: count }, (_, stripIndex) => {
    const shaded = Math.max(0, Math.min(denominator, shadedValues[stripIndex] || 0));
    const pieces = Array.from({ length: denominator }, (_, pieceIndex) => {
      return `<span class="practice-strip-piece${pieceIndex < shaded ? " is-shaded" : ""}"></span>`;
    }).join("");
    const label = visual.stripLabels?.[stripIndex] || "";
    return `
      <div class="practice-strip-row">
        ${label ? `<span class="practice-strip-label">${label}</span>` : ""}
        <div class="practice-strip" style="--strip-parts: ${denominator};">
          ${pieces}
        </div>
      </div>
    `;
  }).join("");

  return `
    <div class="practice-strip-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Strip diagram"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-strip-stack">
        ${strips}
      </div>
    </div>
  `;
}

function renderPracticeAreaThumbnail(model) {
  const denominator = model.denominator || 1;
  const numerator = Number.isFinite(model.totalNumerator)
    ? model.totalNumerator
    : (model.whole || 0) * denominator + (model.numerator || 0);
  return `
    <article class="practice-area-mini">
      <h3>${model.title || model.context || "Area model"}</h3>
      ${model.dimensions ? `<p>${model.dimensions}</p>` : ""}
      ${renderAreaGrid(model.length, numerator, denominator)}
    </article>
  `;
}

function renderPracticeAreaComparison(visual) {
  const models = visual.models || [];
  return `
    <div class="practice-area-comparison">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Compare the rectangles"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-area-mini-grid">
        ${models.map(renderPracticeAreaThumbnail).join("")}
      </div>
    </div>
  `;
}

function renderPracticeExpressionList(visual) {
  const rows = visual.rows || [];
  return `
    <div class="practice-expression-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Expression cards"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div class="practice-expression-list">
        ${rows.map((row) => `
          <article>
            ${row.label ? `<span>${row.label}</span>` : ""}
            <strong>${row.expression}</strong>
            ${row.note ? `<small>${row.note}</small>` : ""}
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPracticeGenericCard(visual, defaults = {}) {
  const title = visual.title || defaults.title || "Think about the situation";
  const caption = visual.caption || defaults.caption || "";
  const rows = defaults.rows || [];

  return `
    <div class="practice-generic-card">
      <div class="practice-visual-caption">
        <strong>${title}</strong>
        ${caption ? `<span>${caption}</span>` : ""}
      </div>
      ${rows.length ? `
        <div class="practice-generic-list">
          ${rows.map((row) => `
            <article>
              ${row.label ? `<span>${row.label}</span>` : ""}
              <strong>${row.value}</strong>
            </article>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function titleCaseWords(value) {
  return String(value || "")
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function mathTextHTML(value) {
  let text = escapeHTML(value);
  text = text.replace(/(\d+)\s+([1-9]\d*)\/([1-9]\d*)/g, (_, whole, numerator, denominator) => `${whole} ${fractionHTML(numerator, denominator)}`);
  text = text.replace(/(?<![\w.])([1-9]\d*)\/([1-9]\d*)(?![\w.])/g, (_, numerator, denominator) => fractionHTML(numerator, denominator));
  text = text.replace(/10\^([0-9]+)/g, "10<sup>$1</sup>");
  return text;
}

function getPracticeArtifactFolder(question) {
  const unitMatch = String(question?.unit || "").match(/^unit(\d+)$/);
  return unitMatch ? `artifacts/unit ${unitMatch[1]}` : "artifacts/unit 6";
}

function getPracticeSourceFolder(question) {
  if (question?.sourceFolder) return question.sourceFolder;
  const previewMatch = String(question?.previewPath || "").match(/^_rendered-previews\/([^/]+)\//);
  return previewMatch ? previewMatch[1] : "";
}

function getPracticePreviewSrc(question) {
  if (!question?.previewPath) return "";
  return encodeURI(`${getPracticeArtifactFolder(question)}/${question.previewPath}`);
}

function getPracticeSourcePdfSrc(question) {
  const sourceFolder = getPracticeSourceFolder(question);
  if (!question?.sourceFile || !sourceFolder) return "";
  const pageHash = question.sourcePage ? `#page=${question.sourcePage}&zoom=150` : "#zoom=150";
  return `${encodeURI(`${getPracticeArtifactFolder(question)}/${sourceFolder}/${question.sourceFile}`)}${pageHash}`;
}

function getPracticeSourceLabel(question) {
  const sourceLabel = [question.sourceFile, question.sourcePage ? `page ${question.sourcePage}` : ""]
    .filter(Boolean)
    .join(", ");
  return sourceLabel || "Source page preview";
}

function renderPracticeSourcePreview(question, override = {}) {
  const sourceQuestion = { ...(question || {}), ...(override || {}) };
  if (!sourceQuestion?.previewPath) return "";
  const previewSrc = getPracticePreviewSrc(sourceQuestion);
  const pdfSrc = getPracticeSourcePdfSrc(sourceQuestion);
  const sourceLabel = getPracticeSourceLabel(sourceQuestion);

  return `
    <button
      class="practice-source-preview-link"
      type="button"
      data-source-preview-open
      data-source-preview-title="${escapeHTML(sourceLabel)}"
      data-source-preview-img="${escapeHTML(previewSrc)}"
      data-source-preview-pdf="${escapeHTML(pdfSrc)}"
    >
      <span aria-hidden="true">▸</span>
      Source page preview
    </button>
  `;
}

function renderPracticeUnit6Table(visual, question) {
  const columns = Array.isArray(visual.columns) && visual.columns.length
    ? visual.columns
    : ["given", "renamed", "notes"];
  const knownRows = Array.isArray(visual.knownRows) && visual.knownRows.length
    ? visual.knownRows
    : Array.from({ length: Math.min(4, Math.max(2, Object.keys(question.answerKey || {}).length || 3)) }, () => ({}));

  return `
    <div class="practice-unit6-card">
      <div class="practice-visual-caption">
        <strong>${titleCaseWords(question.activityForm || visual.type || "Unit 6 table")}</strong>
        <span>${question.sourcePromptSummary ? mathTextHTML(question.sourcePromptSummary) : "Use the table structure from the source problem."}</span>
      </div>
      <div class="practice-unit6-table-wrap">
        <table class="practice-unit6-table">
          <thead>
            <tr>${columns.map((column) => `<th>${escapeHTML(titleCaseWords(column))}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${knownRows.map((row) => `
              <tr>
                ${columns.map((column) => {
                  const value = row && Object.prototype.hasOwnProperty.call(row, column) ? row[column] : "";
                  return `<td>${value === "" || value === null || typeof value === "undefined" ? "<span class=\"practice-unit6-blank\">fill in</span>" : escapeHTML(value)}</td>`;
                }).join("")}
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit6LinePlot(visual, question) {
  const tickUnit = visual.tickUnit || "fractional units";
  const ticks = tickUnit === "eighths"
    ? ["0", "1/8", "2/8", "3/8", "4/8", "5/8", "6/8", "7/8", "1"]
    : ["0", "1/4", "1/2", "3/4", "1", "1 1/4", "1 1/2", "1 3/4", "2"];

  return `
    <div class="practice-unit6-card">
      <div class="practice-visual-caption">
        <strong>${titleCaseWords(question.activityForm || "Fraction line plot")}</strong>
        <span>${question.sourcePromptSummary ? mathTextHTML(question.sourcePromptSummary) : `Use ${escapeHTML(tickUnit)} on the number line and stack repeated measurements.`}</span>
      </div>
      ${Array.isArray(visual.spinnerValues) && visual.spinnerValues.length ? `
        <div class="practice-unit6-token-row" aria-label="Spinner values">
          ${visual.spinnerValues.map((value) => `<span class="practice-unit6-token">${mathTextHTML(value)}</span>`).join("")}
        </div>
      ` : ""}
      <div class="practice-unit6-line-plot" aria-label="Fraction line plot workspace">
        <div class="practice-unit6-line-plot-track">
          ${ticks.map((tick) => `
            <span class="practice-unit6-line-plot-tick">
              <i></i>
              <small>${mathTextHTML(tick)}</small>
            </span>
          `).join("")}
        </div>
      </div>
      <div class="practice-generic-list">
        <article><span>Context</span><strong>${escapeHTML(visual.context || visual.dataSource || "fraction measurements")}</strong></article>
        <article><span>Tick unit</span><strong>${escapeHTML(tickUnit)}</strong></article>
        ${Array.isArray(visual.questions) ? visual.questions.map((questionText, index) => `
          <article><span>Question ${index + 1}</span><strong>${mathTextHTML(questionText)}</strong></article>
        `).join("") : ""}
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit6NumberLine(visual, question) {
  const base = visual.baseAmount || visual.basePoint || visual.point || "1 whole";
  return `
    <div class="practice-unit6-card">
      <div class="practice-visual-caption">
        <strong>${titleCaseWords(question.activityForm || "Scaling number line")}</strong>
        <span>${question.sourcePromptSummary ? mathTextHTML(question.sourcePromptSummary) : "Estimate where the scaled amount belongs before calculating."}</span>
      </div>
      <div class="practice-unit6-scale-model" aria-label="Scaling number line workspace">
        <div class="practice-unit6-scale-track">
          <span style="left: 0%;"><b>0</b></span>
          <span class="is-base" style="left: 55%;"><b>${escapeHTML(base)}</b></span>
          <span style="left: 100%;"><b>beyond</b></span>
        </div>
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function getGoDistanceLineTicks(max = 1.25, baseAmount = "5 miles") {
  const steps = Math.round(max / 0.25);
  return Array.from({ length: steps + 1 }, (_, index) => ({
    value: index * 0.25,
    label: index === 4 ? "1" : "",
    note: index === 4 ? baseAmount : ""
  }));
}

function renderPracticeDistanceTicks(ticks, min, max) {
  const percentForValue = (value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || max === min) return 0;
    return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
  };

  return ticks.map((tick) => `
    <span class="practice-distance-tick" style="left: ${percentForValue(tick.value)}%;">
      <i></i>
      ${tick.showLabel || Number(tick.value) === 1 ? `
        <b>${mathTextHTML(tick.showLabel ? (tick.label || "1") : "1")}</b>
        ${tick.note ? `<small>${mathTextHTML(tick.note)}</small>` : ""}
      ` : ""}
    </span>
  `).join("");
}

function renderGoDistanceQuestion2Visual(question) {
  const visual = question.visual || {};
  const config = getGoDistanceQuestion2Config(question);
  const min = Number.isFinite(config.min) ? config.min : 0;
  const max = Number.isFinite(config.max) ? config.max : 2.5;
  const ticks = Array.isArray(config.ticks) && config.ticks.length
    ? config.ticks
    : getGoDistanceLineTicks(max, visual.baseAmount || "5 miles");
  const statements = Array.isArray(config.statement) && config.statement.length
    ? config.statement
    : [
      "Fill in the blanks to make each statement true.",
      "Diego ran farther than Noah, but not as far as Kiran.",
      "Lin ran farther than Kiran, but not twice as far as Kiran.",
      "Tyler ran farther than Noah, but not as far as Elena."
    ];
  const percentForValue = (value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || max === min) return 0;
    return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
  };
  const referenceMarkers = getPracticeOrderItems(question).map((item, index) => {
    const label = item.name || item.label || item.id;
    const offset = index % 2 === 0 ? "-18px" : "18px";
    return `
      <span
        class="practice-distance-slider is-reference"
        style="left: ${percentForValue(item.position)}%; --reference-offset: ${offset};"
        aria-label="${escapeHTML(label)} reference point at ${escapeHTML(item.factor || "")}"
      >
        <span>
          <strong>${escapeHTML(label)}</strong>
        </span>
      </span>
    `;
  }).join("");
  const referenceValues = getPracticeOrderItems(question)
    .filter((item) => item.factor)
    .map((item) => `
      <span
        class="practice-distance-reference-value"
        style="left: ${percentForValue(item.position)}%;"
        aria-hidden="true"
      >
        ${mathTextHTML(item.factor)}
      </span>
    `).join("");

  return `
    <div class="practice-distance-order-card">
      <div class="practice-visual-caption">
        <strong>${config.title || "Question 2: Fill in the blanks"}</strong>
        <span>${config.caption ? mathTextHTML(config.caption) : "Use the known runner positions to choose any value in each interval."}</span>
      </div>
      <div class="practice-distance-statement">
        ${statements.map((line) => `<p>${mathTextHTML(line)}</p>`).join("")}
      </div>
      <div class="practice-distance-line" aria-label="Reference number line with quarter partition marks">
        <div class="practice-distance-track">
          ${renderPracticeDistanceTicks(ticks, min, max)}
          ${referenceMarkers}
          ${referenceValues}
        </div>
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function productExpressionHTML(value) {
  return mathTextHTML(String(value || "").replace(/\s+x\s+/gi, " × "));
}

function renderPracticeProductNumeratorInput(question, row, value, activePart) {
  return `
    <span class="practice-product-fraction-input">
      <input
        type="text"
        value="${escapeHTML(value)}"
        aria-label="Numerator for ${escapeHTML(row.label)}"
        data-practice-product-number="${question.id}"
        data-product-part="${activePart}"
        data-product-row="${escapeHTML(row.id)}"
      >
      <span>${escapeHTML(row.denominator)}</span>
    </span>
  `;
}

function renderPracticeProductDenominatorInput(question, row, value, activePart) {
  return `
    <span class="practice-product-fraction-input is-denominator-input">
      <span class="practice-product-fixed-numerator">${escapeHTML(row.numerator)}</span>
      <input
        type="text"
        value="${escapeHTML(value)}"
        aria-label="Denominator for ${escapeHTML(row.label)}"
        data-practice-product-number="${question.id}"
        data-product-part="${activePart}"
        data-product-row="${escapeHTML(row.id)}"
      >
    </span>
  `;
}

function renderPracticeProductComparison(question) {
  const activePart = getPracticePart(question);
  const config = getProductComparisonConfig(question);
  const partConfig = config[activePart] || config.q1 || {};
  const title = partConfig.title || (activePart === "q3"
    ? "Question 3: Fill in the denominators"
    : activePart === "q2"
    ? "Question 2: Fill in the boxes"
    : "Question 1: Compare products");
  const caption = partConfig.caption || (activePart === "q3"
    ? "Write a denominator under 9 that makes each comparison true."
    : activePart === "q2"
    ? "Write a numerator over 9 that makes each comparison true."
    : "Choose < or > for each blank without multiplying every product.");
  const rows = activePart === "q3"
    ? getProductComparisonQuestion3Rows(question)
    : activePart === "q2"
    ? getProductComparisonQuestion2Rows(question)
    : getProductComparisonQuestion1Rows(question);
  const q1Answer = getProductComparisonQuestion1Answer(question);
  const q2Answer = getProductComparisonQuestion2Answer(question);
  const q3Answer = getProductComparisonQuestion3Answer(question);

  const rowMarkup = activePart === "q3"
    ? rows.map((row) => {
      const value = q3Answer.values[row.id] || "";
      const isSubmitted = q3Answer.submitted;
      const isCorrect = productComparisonQuestion3RowIsCorrect(row, value);
      const stateClass = isSubmitted ? (isCorrect ? " is-correct" : " is-incorrect") : "";
      return `
        <article class="practice-product-row${stateClass}">
          <span class="practice-product-label">${escapeHTML(row.label)}.</span>
          ${renderPracticeProductDenominatorInput(question, row, value, activePart)}
          <span class="practice-product-expression">× ${mathTextHTML(row.factor)}</span>
          <span class="practice-product-symbol">${escapeHTML(row.operator)}</span>
          <span class="practice-product-expression">${mathTextHTML(row.right)}</span>
        </article>
      `;
    }).join("")
    : activePart === "q2"
    ? rows.map((row) => {
      const value = q2Answer.values[row.id] || "";
      const isSubmitted = q2Answer.submitted;
      const isCorrect = productComparisonQuestion2RowIsCorrect(row, value);
      const stateClass = isSubmitted ? (isCorrect ? " is-correct" : " is-incorrect") : "";
      return `
        <article class="practice-product-row${stateClass}">
          <span class="practice-product-label">${escapeHTML(row.label)}.</span>
          ${renderPracticeProductNumeratorInput(question, row, value, activePart)}
          <span class="practice-product-expression">× ${mathTextHTML(row.factor)}</span>
          <span class="practice-product-symbol">${escapeHTML(row.operator)}</span>
          <span class="practice-product-expression">${mathTextHTML(row.right)}</span>
        </article>
      `;
    }).join("")
    : rows.map((row) => {
      const selected = q1Answer.symbols[row.id] || "";
      const isSubmitted = q1Answer.submitted;
      const isCorrect = productComparisonQuestion1RowIsCorrect(question, row);
      const stateClass = isSubmitted ? (isCorrect ? " is-correct" : " is-incorrect") : "";
      return `
        <article class="practice-product-row${stateClass}">
          <span class="practice-product-label">${escapeHTML(row.label)}.</span>
          <span class="practice-product-expression">${productExpressionHTML(row.left)}</span>
          <span class="practice-product-symbol-picker">
            <button
              class="practice-product-symbol-toggle${selected ? " is-selected" : ""}"
              type="button"
              aria-label="Comparison for ${escapeHTML(row.label)}"
              aria-haspopup="menu"
            >
              <span>${selected ? escapeHTML(selected) : ""}</span>
              <span aria-hidden="true">▾</span>
            </button>
            <span class="practice-product-symbol-menu" role="menu">
              ${["<", ">"].map((symbol) => `
                <button
                  type="button"
                  role="menuitem"
                  data-practice-product-symbol="${question.id}"
                  data-product-row="${escapeHTML(row.id)}"
                  data-product-symbol="${escapeHTML(symbol)}"
                >${escapeHTML(symbol)}</button>
              `).join("")}
            </span>
          </span>
          <span class="practice-product-expression">${productExpressionHTML(row.right)}</span>
        </article>
      `;
    }).join("");
  const sourceOverride = partConfig.previewPath || partConfig.sourcePage
    ? {
      previewPath: partConfig.previewPath || question.previewPath,
      sourcePage: partConfig.sourcePage || question.sourcePage
    }
    : {};

  return `
    <div class="practice-product-comparison-card">
      <div class="practice-visual-caption">
        <strong>${title}</strong>
        <span>${mathTextHTML(caption)}</span>
      </div>
      <div class="practice-product-prompt">
        ${activePart === "q3"
          ? "Write a denominator in each box to make the statement true."
          : activePart === "q2"
          ? "Write a number in each box to make the statement true."
          : "Choose &lt; or &gt; from each dropdown to make the statement true."}
      </div>
      <div class="practice-product-list">
        ${rowMarkup}
      </div>
      ${renderPracticeSourcePreview(question, sourceOverride)}
    </div>
  `;
}

function renderPracticeDiagramFractionStrip(fractionText) {
  const parsed = parseFractionString(fractionText) || { numerator: 1, denominator: 1 };
  const denominator = Math.max(1, Number(parsed.denominator) || 1);
  const numerator = Math.max(0, Number(parsed.numerator) || 0);
  const wholeRows = Math.floor(numerator / denominator);
  const extra = numerator % denominator;
  const rowCount = Math.max(1, wholeRows + (extra ? 1 : 0));
  const cells = [];

  for (let row = 0; row < rowCount; row += 1) {
    for (let index = 0; index < denominator; index += 1) {
      const isWholeRow = row < wholeRows;
      const isExtra = row === wholeRows && index < extra;
      cells.push(`<span class="${isWholeRow || isExtra ? "is-shaded" : ""}"></span>`);
    }
  }

  return `
    <div
      class="practice-diagram-fraction-strip"
      style="--diagram-denominator: ${denominator}; --diagram-rows: ${rowCount};"
      aria-label="${escapeHTML(fractionText)} shaded"
    >
      ${cells.join("")}
    </div>
  `;
}

function renderPracticeDiagramMatchNumberLine(diagram) {
  const lineMax = Math.max(1, Number(diagram.lineMax) || 1);
  const lineMiddle = Number.isFinite(Number(diagram.lineMiddle)) ? Number(diagram.lineMiddle) : lineMax / 2;
  const point = Math.max(0, Math.min(lineMax, Number(diagram.point) || 0));
  const xForValue = (value) => 18 + (Math.max(0, Math.min(lineMax, Number(value) || 0)) / lineMax) * 204;
  const startX = xForValue(0);
  const middleX = xForValue(lineMiddle);
  const endX = xForValue(lineMax);
  const pointX = xForValue(point);

  return `
    <svg class="practice-diagram-source-line" viewBox="0 0 240 76" role="img" aria-label="Source number line for ${escapeHTML(diagram.label || "row")}">
      <line x1="${startX}" y1="34" x2="${endX}" y2="34"></line>
      <g class="practice-diagram-source-line-tick">
        <line x1="${startX}" y1="24" x2="${startX}" y2="44"></line>
        <text x="${startX}" y="64">${escapeHTML(diagram.lineStartLabel || "0")}</text>
      </g>
      <g class="practice-diagram-source-line-tick">
        <line x1="${middleX}" y1="24" x2="${middleX}" y2="44"></line>
        <text x="${middleX}" y="64">${escapeHTML(diagram.lineMiddleLabel || lineMiddle)}</text>
      </g>
      <g class="practice-diagram-source-line-tick">
        <line x1="${endX}" y1="24" x2="${endX}" y2="44"></line>
        <text x="${endX}" y="64">${escapeHTML(diagram.lineMaxLabel || lineMax)}</text>
      </g>
      <circle cx="${pointX}" cy="34" r="4.5"></circle>
    </svg>
  `;
}

function renderPracticeDiagramMatchArea(diagram) {
  const denominator = Math.max(1, Number(diagram.denominator) || 7);
  const shadedParts = Math.max(0, Number(diagram.shadedParts) || 0);
  const totalParts = Math.max(denominator, shadedParts, Number(diagram.totalParts) || denominator);
  const widthFactor = Math.max(1, Number(diagram.widthFactor || diagram.width) || 1);
  const maxWidthFactor = Math.max(widthFactor, Number(diagram.maxWidthFactor) || 5);
  const partHeight = totalParts > denominator ? 7 : 9;
  const rectHeight = totalParts * partHeight;
  const rectWidth = 196 * (widthFactor / maxWidthFactor);
  const x = 52;
  const y = 24;
  const bracketY = 14;
  const wholeHeight = Math.min(denominator, totalParts) * partHeight;
  const shadedRows = Array.from({ length: Math.min(shadedParts, totalParts) }, (_, index) => (
    `<rect x="${x}" y="${y + index * partHeight}" width="${rectWidth}" height="${partHeight}" class="is-shaded"></rect>`
  )).join("");
  const rowLines = Array.from({ length: totalParts - 1 }, (_, index) => {
    const lineY = y + (index + 1) * partHeight;
    const className = index + 1 === denominator ? " is-whole-boundary" : "";
    return `<line class="practice-diagram-source-row-line${className}" x1="${x}" y1="${lineY}" x2="${x + rectWidth}" y2="${lineY}"></line>`;
  }).join("");
  const unitLines = Array.from({ length: widthFactor - 1 }, (_, index) => {
    const lineX = x + ((index + 1) / widthFactor) * rectWidth;
    return `<line class="practice-diagram-source-unit-line" x1="${lineX}" y1="${y}" x2="${lineX}" y2="${y + rectHeight}"></line>`;
  }).join("");

  return `
    <svg class="practice-diagram-source-area" viewBox="0 0 270 142" role="img" aria-label="Source rectangle model for ${escapeHTML(diagram.label || "row")}">
      <path class="practice-diagram-source-bracket" d="M ${x} ${bracketY} H ${x + rectWidth}"></path>
      <path class="practice-diagram-source-bracket" d="M ${x} ${bracketY} v 5 M ${x + rectWidth} ${bracketY} v 5"></path>
      <text class="practice-diagram-source-top-label" x="${x + rectWidth / 2}" y="10">${escapeHTML(diagram.widthLabel || widthFactor)}</text>
      <path class="practice-diagram-source-bracket" d="M ${x - 14} ${y} V ${y + wholeHeight}"></path>
      <path class="practice-diagram-source-bracket" d="M ${x - 14} ${y} h 7 M ${x - 14} ${y + wholeHeight} h 7"></path>
      <text class="practice-diagram-source-left-label" x="${x - 26}" y="${y + wholeHeight / 2 + 5}" text-anchor="end">1</text>
      <g class="practice-diagram-source-grid">
        ${shadedRows}
        <rect x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}"></rect>
        ${rowLines}
        ${unitLines}
      </g>
    </svg>
  `;
}

function renderPracticeDiagramMatchModel(diagram) {
  if (diagram.visualKind === "numberLine") {
    return `
      <div class="practice-diagram-single-model is-number-line">
        ${renderPracticeDiagramMatchNumberLine(diagram)}
      </div>
    `;
  }

  if (diagram.visualKind === "rectangle") {
    return `
      <div class="practice-diagram-single-model is-rectangle">
        ${renderPracticeDiagramMatchArea(diagram)}
      </div>
    `;
  }

  if (diagram.sourceRow) {
    return `
      <div class="practice-diagram-source-row-model">
        ${renderPracticeDiagramMatchNumberLine(diagram)}
        ${renderPracticeDiagramMatchArea(diagram)}
      </div>
    `;
  }

  const lineMax = Math.max(1, Number(diagram.lineMax) || 1);
  const point = Math.max(0, Math.min(lineMax, Number(diagram.point) || 0));
  const pointPercent = (point / lineMax) * 100;
  const mid = lineMax / 2;

  return `
    <div class="practice-diagram-match-model">
      <div class="practice-diagram-number-line" aria-label="Number line from 0 to ${lineMax}">
        <span class="practice-diagram-line-tick is-start"><b>0</b></span>
        <span class="practice-diagram-line-tick is-mid"><b>${mathTextHTML(mid)}</b></span>
        <span class="practice-diagram-line-tick is-end"><b>${mathTextHTML(lineMax)}</b></span>
        <span class="practice-diagram-line-dot" style="left: ${pointPercent}%;" aria-hidden="true"></span>
      </div>
      <div class="practice-diagram-area-model">
        <div class="practice-diagram-area-note">
          <strong>${mathTextHTML(diagram.fraction || "?")}</strong>
          <span>of ${mathTextHTML(diagram.width || "?")}</span>
        </div>
        ${renderPracticeDiagramFractionStrip(diagram.fraction || "1/1")}
      </div>
    </div>
  `;
}

function renderPracticeDiagramMatchPicker(question, diagram, expressions, selected, selectedByOtherTarget) {
  const pickerId = `${question.id}:${diagram.id}`;
  const isOpen = state.practiceOpenPicker === pickerId;
  const selectedExpression = selected ? getPracticeDiagramMatchExpression(question, selected) : null;
  const buttonLabel = selectedExpression
    ? mathTextHTML(selectedExpression.label)
    : "Choose expression";

  return `
    <div class="practice-diagram-match-picker${isOpen ? " is-open" : ""}">
      <button
        class="practice-diagram-match-picker-trigger${selectedExpression ? " has-value" : ""}"
        type="button"
        data-practice-diagram-match-picker="${question.id}"
        data-diagram-id="${escapeHTML(diagram.id)}"
        aria-haspopup="listbox"
        aria-expanded="${isOpen ? "true" : "false"}"
        aria-label="Choose expression for ${escapeHTML(diagram.label || diagram.id)}"
      >
        <span class="practice-diagram-match-picker-value">${buttonLabel}</span>
        <span class="practice-diagram-match-picker-caret" aria-hidden="true"></span>
      </button>
      ${isOpen ? `
        <div class="practice-diagram-match-menu" role="listbox" aria-label="Expression choices for ${escapeHTML(diagram.label || diagram.id)}">
          ${expressions.map((expression) => {
            const expressionId = String(expression.id);
            const isSelected = selected === expressionId;
            const isDisabled = selectedByOtherTarget.has(expressionId);
            return `
              <button
                class="${isSelected ? "is-selected" : ""}"
                type="button"
                role="option"
                data-practice-diagram-match-choice="${question.id}"
                data-diagram-id="${escapeHTML(diagram.id)}"
                data-expression-id="${escapeHTML(expressionId)}"
                aria-selected="${isSelected ? "true" : "false"}"
                ${isDisabled ? "disabled" : ""}
              >
                ${mathTextHTML(expression.label)}
              </button>
            `;
          }).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function renderPracticeDiagramMatch(question) {
  const visual = question.visual || {};
  const diagrams = getPracticeDiagramMatchDiagrams(question);
  const expressions = getPracticeDiagramMatchExpressions(question);
  const answer = getPracticeDiagramMatchAnswer(question);
  const isSourceRowMatch = visual.type === "sourceRowNumberLineAreaMatching";
  const isIndependentMatch = visual.type === "independentNumberLineAreaMatching";
  const matchGroups = Array.isArray(visual.groups) && visual.groups.length
    ? visual.groups
    : [{ id: "all", label: "", description: "" }];
  const diagramGroups = isIndependentMatch
    ? matchGroups.map((group) => ({
        ...group,
        diagrams: diagrams.filter((diagram) => String(diagram.matchGroup || "all") === String(group.id))
      })).filter((group) => group.diagrams.length)
    : [{ id: "all", label: "", description: "", diagrams }];

  return `
    <div class="practice-diagram-match-card${isSourceRowMatch ? " is-source-row-match" : ""}${isIndependentMatch ? " is-independent-match" : ""}">
      <div class="practice-visual-caption">
        <strong>${visual.title || titleCaseWords(question.activityForm || "Match the diagram")}</strong>
        <span>${visual.caption ? mathTextHTML(visual.caption) : "Choose the expression that matches each visual model."}</span>
      </div>
      <div class="practice-diagram-expression-bank" aria-label="Expression choices">
        ${expressions.map((expression) => `<span>${mathTextHTML(expression.label)}</span>`).join("")}
      </div>
      ${diagramGroups.map((group) => `
        <section class="practice-diagram-match-group" aria-label="${escapeHTML(group.label || "Diagrams")}">
          ${group.label ? `
            <div class="practice-diagram-match-group-heading">
              <h4>${escapeHTML(group.label)}</h4>
              ${group.description ? `<p>${escapeHTML(group.description)}</p>` : ""}
            </div>
          ` : ""}
          <div class="practice-diagram-match-list">
            ${group.diagrams.map((diagram) => {
              const selected = answer.matches[String(diagram.id)] || "";
              const currentGroup = String(diagram.matchGroup || "all");
              const selectedByOtherTarget = new Set(Object.entries(answer.matches)
                .filter(([diagramId]) => String(diagramId) !== String(diagram.id))
                .filter(([diagramId]) => {
                  const otherDiagram = diagrams.find((item) => String(item.id) === String(diagramId));
                  return String(otherDiagram?.matchGroup || "all") === currentGroup;
                })
                .map(([, expressionId]) => String(expressionId))
                .filter(Boolean));
              const isSubmitted = answer.submitted;
              const isCorrect = selected && selected === String(diagram.correctExpression);
              const stateClass = isSubmitted && selected
                ? (isCorrect ? " is-correct" : " is-incorrect")
                : "";
              return `
                <article class="practice-diagram-match-item${stateClass}">
                  <h4>${escapeHTML(diagram.label || diagram.id)}</h4>
                  ${renderPracticeDiagramMatchModel(diagram)}
                  <div class="practice-diagram-match-options" role="group" aria-label="Expression choices for ${escapeHTML(diagram.label || diagram.id)}">
                    ${isSourceRowMatch || isIndependentMatch ? `
                      <div class="practice-diagram-match-picker-wrap">
                        <span>Match this visual to</span>
                        ${renderPracticeDiagramMatchPicker(question, diagram, expressions, selected, selectedByOtherTarget)}
                      </div>
                    ` : expressions.map((expression) => {
                        const isSelected = selected === String(expression.id);
                        return `
                          <button
                            class="${isSelected ? "is-selected" : ""}"
                            type="button"
                            data-practice-diagram-match="${question.id}"
                            data-diagram-id="${escapeHTML(diagram.id)}"
                            data-expression-id="${escapeHTML(expression.id)}"
                            aria-pressed="${isSelected ? "true" : "false"}"
                          >
                            ${mathTextHTML(expression.label)}
                          </button>
                        `;
                      }).join("")}
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        </section>
      `).join("")}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeScaleLocationLine(base) {
  return `
    <div class="practice-scale-line" aria-label="Number line with ${base} as the landmark">
      <span class="practice-scale-line-tick is-start"><b>0</b></span>
      <span class="practice-scale-line-tick is-base"><b>${mathTextHTML(base)}</b></span>
      <span class="practice-scale-zone-label is-left">less than ${mathTextHTML(base)}</span>
      <span class="practice-scale-zone-label is-base">at ${mathTextHTML(base)}</span>
      <span class="practice-scale-zone-label is-right">greater than ${mathTextHTML(base)}</span>
    </div>
  `;
}

function renderPracticeScaleBlankFraction(question, blank, value) {
  const input = `
    <input
      type="text"
      value="${escapeHTML(value)}"
      aria-label="${blank.inputPart === "denominator" ? "Denominator" : "Numerator"} for ${escapeHTML(blank.label)}"
      data-practice-scale-blank="${question.id}"
      data-scale-blank-id="${escapeHTML(blank.id)}"
    >
  `;
  const numerator = blank.inputPart === "numerator" ? input : `<span>${mathTextHTML(blank.numerator)}</span>`;
  const denominator = blank.inputPart === "denominator" ? input : `<span>${mathTextHTML(blank.denominator)}</span>`;

  return `
    <span class="practice-scale-blank-fraction">
      <span>${numerator}</span>
      <span>${denominator}</span>
    </span>
  `;
}

function renderPracticeScaleFactorLocation(question) {
  const visual = question.visual || {};
  const answer = getPracticeScaleLocationAnswer(question);
  const base = visual.base || 12;
  const zones = [
    { id: "left", label: `left of ${base}` },
    { id: "base", label: `at ${base}` },
    { id: "right", label: `right of ${base}` }
  ];
  const sections = getPracticeScaleLocationSections(question);
  const blanks = getPracticeScaleLocationBlanks(question);
  const comparisons = getPracticeScaleLocationVisibleComparisons(question);
  const visibleNumberLines = getPracticeScaleLocationVisibleNumberLines(question);
  const activePart = getPracticeScaleLocationActivePart(question);
  const partSubmitted = practiceScaleLocationPartIsSubmitted(question, activePart);
  const rewritePrompts = Array.isArray(visual.rewritePrompts) ? visual.rewritePrompts : [];
  const reasoningPrompts = getPracticeScaleLocationVisibleReasoningPrompts(question);
  const comparisonSymbols = Array.isArray(visual.comparisonSymbols) && visual.comparisonSymbols.length
    ? visual.comparisonSymbols
    : ["<", "=", ">"];

  return `
    <div class="practice-scale-location-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || titleCaseWords(question.activityForm || "Approximate location")}</strong>
        <span>${mathTextHTML(getPracticeScaleLocationActiveCaption(question))}</span>
      </div>
      ${renderPracticeShortAnswerNumberLines(visibleNumberLines)}
      ${rewritePrompts.length ? `
        <div class="practice-scale-note-panel">
          <h4>Rewrite first</h4>
          <div class="practice-scale-rewrite-list">
            ${rewritePrompts.map((prompt) => `
              <article>
                <span class="practice-product-label">${escapeHTML(prompt.label)}.</span>
                <span>${productExpressionHTML(prompt.expression || "")}</span>
                <strong>${prompt.rewrite ? productExpressionHTML(prompt.rewrite) : "write your rewrite"}</strong>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}
      ${sections.length ? `
        <div class="practice-scale-location-sections">
          ${sections.map((section) => `
          <article class="practice-scale-location-section">
            <h4>${escapeHTML(section.title || "Partner")}</h4>
            ${renderPracticeScaleLocationLine(base)}
            <div class="practice-scale-location-items">
              ${(section.items || []).map((item) => {
                const selected = answer.zones[String(item.id)] || "";
                const stateClass = answer.submitted && selected
                  ? (practiceScaleLocationItemIsCorrect(question, item) ? " is-correct" : " is-incorrect")
                  : "";
                return `
                  <div class="practice-scale-location-item${stateClass}">
                    <span class="practice-product-label">${escapeHTML(item.label)}.</span>
                    <strong>${mathTextHTML(item.expression)}</strong>
                    <div class="practice-scale-location-options" role="group" aria-label="Location for ${escapeHTML(item.expression)}">
                      ${zones.map((zone) => `
                        <button
                          class="is-zone-${escapeHTML(zone.id)}${selected === zone.id ? " is-selected" : ""}"
                          type="button"
                          data-practice-scale-zone="${question.id}"
                          data-scale-item-id="${escapeHTML(item.id)}"
                          data-scale-zone="${escapeHTML(zone.id)}"
                          aria-pressed="${selected === zone.id ? "true" : "false"}"
                        >
                          ${escapeHTML(zone.label)}
                        </button>
                      `).join("")}
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </article>
          `).join("")}
        </div>
      ` : ""}
      ${(blanks.length || comparisons.length) ? `<div class="practice-scale-blank-panel">
        ${blanks.length ? `
          <div class="practice-product-prompt">Choose a number for each box to make the statement true.</div>
          <div class="practice-scale-blank-list">
            ${blanks.map((blank) => {
              const value = answer.blanks[String(blank.id)] || "";
              const stateClass = partSubmitted
                ? (practiceScaleBlankIsCorrect(blank, value) ? " is-correct" : " is-incorrect")
                : "";
              return `
                <article class="practice-scale-blank-row${stateClass}">
                  <span class="practice-product-label">${escapeHTML(blank.label)}.</span>
                  ${renderPracticeScaleBlankFraction(question, blank, value)}
                  <span class="practice-product-expression">× ${mathTextHTML(blank.factor)}</span>
                  <span class="practice-product-symbol">${escapeHTML(blank.operator)}</span>
                  <span class="practice-product-expression">${mathTextHTML(blank.right)}</span>
                </article>
              `;
            }).join("")}
          </div>
        ` : ""}
        ${comparisons.length ? `
          <div class="practice-product-prompt">Choose &lt;, =, or &gt; to compare each scaled value with the original value.</div>
          <div class="practice-scale-comparison-list">
            ${comparisons.map((comparison) => {
              const selected = answer.comparisons[String(comparison.id)] || "";
              const stateClass = partSubmitted
                ? (practiceScaleComparisonIsCorrect(question, comparison) ? " is-correct" : " is-incorrect")
                : "";
              return `
                <article class="practice-scale-comparison-row${stateClass}">
                  <span class="practice-product-label">${escapeHTML(comparison.label)}.</span>
                  <span class="practice-product-expression">${productExpressionHTML(comparison.left)}</span>
                  <div class="practice-product-symbol-choices" role="group" aria-label="Comparison for ${escapeHTML(comparison.label)}">
                    ${comparisonSymbols.map((symbol) => `
                      <button
                        class="${selected === symbol ? "is-selected" : ""}"
                        type="button"
                        data-practice-scale-comparison="${question.id}"
                        data-scale-comparison-id="${escapeHTML(comparison.id)}"
                        data-scale-comparison-symbol="${escapeHTML(symbol)}"
                        aria-pressed="${selected === symbol ? "true" : "false"}"
                      >
                        ${escapeHTML(symbol)}
                      </button>
                    `).join("")}
                  </div>
                  <span class="practice-product-expression">${productExpressionHTML(comparison.right)}</span>
                </article>
              `;
            }).join("")}
          </div>
        ` : ""}
      </div>` : ""}
      ${reasoningPrompts.length && partSubmitted ? `
        <div class="practice-scale-note-panel">
          <h4>Reasoning to check after comparing</h4>
          <ul class="practice-scale-reasoning-list">
            ${reasoningPrompts.map((prompt) => `<li>${mathTextHTML(prompt)}</li>`).join("")}
          </ul>
        </div>
      ` : ""}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeShortAnswerLinePlot(linePlot = {}) {
  const min = Number.isFinite(linePlot.min) ? linePlot.min : 0;
  const max = Number.isFinite(linePlot.max) ? linePlot.max : 1;
  const step = Number.isFinite(linePlot.step) && linePlot.step > 0 ? linePlot.step : 0.25;
  const points = Array.isArray(linePlot.points) ? linePlot.points : [];
  const ticks = [];
  for (let value = min; value <= max + step / 2; value += step) {
    const rounded = Math.round(value * 1000) / 1000;
    ticks.push(rounded);
  }
  const percentForValue = (value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || max === min) return 0;
    return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
  };
  const marks = points.flatMap((point) => {
    const count = Math.max(0, Number(point.count) || 0);
    return Array.from({ length: count }, (_, index) => `
      <span
        class="practice-line-plot-x"
        style="left: ${percentForValue(point.value)}%; --stack-index: ${index};"
        aria-hidden="true"
      >×</span>
    `);
  }).join("");

  return `
    <div class="practice-line-plot-model" aria-label="${escapeHTML(linePlot.title || "Line plot")}">
      <h4>${escapeHTML(linePlot.title || "Line Plot")}</h4>
      <div class="practice-line-plot-track">
        ${ticks.map((tick) => {
          const showLabel = Array.isArray(linePlot.labelValues)
            ? linePlot.labelValues.some((value) => Math.abs(Number(value) - tick) < 0.001)
            : Number.isInteger(tick);
          return `
            <span class="practice-line-plot-tick" style="left: ${percentForValue(tick)}%;">
              <i></i>
              ${showLabel ? `<small>${mathTextHTML(formatPracticeOrderValueText(tick, 8))}</small>` : ""}
            </span>
          `;
        }).join("")}
        ${marks}
      </div>
      ${linePlot.axisLabel ? `<p>${escapeHTML(linePlot.axisLabel)}</p>` : ""}
    </div>
  `;
}

function renderPracticeShortAnswerNumberLines(numberLines = []) {
  if (!Array.isArray(numberLines) || !numberLines.length) return "";

  const renderLine = (line) => {
    const min = Number.isFinite(line.min) ? line.min : 0;
    const max = Number.isFinite(line.max) ? line.max : 1;
    const percentForValue = (value) => {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue) || max === min) return 0;
      return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
    };
    const ticks = Array.isArray(line.ticks) ? line.ticks : [];
    const markers = Array.isArray(line.markers) ? line.markers : [];

    return `
      <article class="practice-short-number-line">
        ${line.title ? `<strong>${escapeHTML(line.title)}</strong>` : ""}
        ${line.caption ? `<p>${mathTextHTML(line.caption)}</p>` : ""}
        <div class="practice-distance-line is-short-answer-line" aria-label="${escapeHTML(line.title || "Number line diagram")}">
          <div class="practice-distance-track">
            ${ticks.map((tick) => `
              <span class="practice-distance-tick" style="left: ${percentForValue(tick.value)}%;">
                <i></i>
                ${tick.label ? `<b>${mathTextHTML(tick.label)}</b>` : ""}
                ${tick.note ? `<small>${mathTextHTML(tick.note)}</small>` : ""}
              </span>
            `).join("")}
            ${markers.map((marker) => `
              <span
                class="practice-distance-slider is-reference"
                style="left: ${percentForValue(marker.value)}%; --reference-offset: ${marker.offset || "0px"};"
                aria-label="${escapeHTML(marker.label || "")}"
              >
                <span><strong>${mathTextHTML(marker.label || "")}</strong></span>
              </span>
            `).join("")}
          </div>
        </div>
      </article>
    `;
  };

  return `
    <div class="practice-short-number-lines">
      ${numberLines.map(renderLine).join("")}
    </div>
  `;
}

function getPracticeShortAnswerInputCopy(row = {}) {
  const placeholder = String(row.placeholder || "answer");
  const longPlaceholder = placeholder.length > 18 || /\b(for example|describe|explain|tell|write)\b/i.test(placeholder);
  return {
    placeholder: longPlaceholder ? "type here" : placeholder,
    helper: longPlaceholder ? placeholder : ""
  };
}

function practiceShortAnswerNeedsTextarea(row = {}) {
  const text = [
    row.id,
    row.label,
    row.expression,
    row.prompt,
    row.placeholder
  ].filter(Boolean).join(" ");
  return /\b(explain|reasoning|reason|pattern|sentence|describe|tell why|show your thinking|record comparison|unit choice)\b/i.test(text);
}

function practiceShortAnswerHasInlineBlank(row = {}) {
  return !practiceShortAnswerNeedsTextarea(row)
    && /_{3,}/.test(String(row.expression || row.prompt || ""));
}

function renderPracticeShortAnswerInput(question, row, value, inputCopy, className = "") {
  return `
    <input
      class="${escapeHTML(className)}"
      type="text"
      value="${escapeHTML(value)}"
      placeholder="${escapeHTML(inputCopy.placeholder)}"
      aria-label="Answer for ${escapeHTML(row.label || row.id)}"
      data-practice-short-answer="${question.id}"
      data-short-answer-id="${escapeHTML(row.id)}"
    >
  `;
}

function renderPracticeShortAnswerTextarea(question, row, value, inputCopy) {
  return `
    <textarea
      placeholder="${escapeHTML(inputCopy.placeholder)}"
      aria-label="Answer for ${escapeHTML(row.label || row.id)}"
      data-practice-short-answer="${question.id}"
      data-short-answer-id="${escapeHTML(row.id)}"
    >${escapeHTML(value)}</textarea>
  `;
}

function renderPracticeInlineBlankExpression(question, row, value, inputCopy) {
  const expression = String(row.expression || row.prompt || "");
  const pieces = expression.split(/_{3,}/);
  const input = renderPracticeShortAnswerInput(question, row, value, inputCopy, "practice-inline-blank-input");
  return `
    <span class="practice-short-answer-equation" aria-label="${escapeHTML(expression.replace(/_{3,}/g, "blank"))}">
      ${pieces.map((piece, index) => `
        ${piece ? `<span class="practice-short-answer-equation-part">${productExpressionHTML(piece)}</span>` : ""}
        ${index < pieces.length - 1 ? input : ""}
      `).join("")}
    </span>
  `;
}

function renderPracticeShortAnswerSet(question) {
  const visual = question.visual || {};
  const rows = getPracticeShortAnswerSetRows(question);
  const answer = getPracticeShortAnswerSetAnswer(question);
  const contextTables = getPracticeShortAnswerTables(question);
  const tableMapping = getPracticeShortAnswerTableMapping(question, contextTables);
  const visibleRows = rows.filter((row) => !tableMapping.mappedRowIds.has(String(row.id)));

  return `
    <div class="practice-short-answer-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || titleCaseWords(question.activityForm || "Answer each item")}</strong>
        <span>${visual.caption ? mathTextHTML(visual.caption) : "Write an answer for each row, then submit."}</span>
      </div>
      ${renderPracticeSupplementalModel(visual.model, question)}
      ${renderPracticeShortAnswerContextTables(contextTables, question, answer, tableMapping)}
      ${visual.linePlot ? renderPracticeShortAnswerLinePlot(visual.linePlot) : ""}
      ${renderPracticeShortAnswerNumberLines(visual.numberLines)}
      ${visibleRows.length ? `
        <div class="practice-short-answer-list">
          ${visibleRows.map((row) => {
          const value = answer.values[String(row.id)] || "";
          const stateClass = answer.submitted
            ? (practiceShortAnswerValueIsCorrect(row, value) ? " is-correct" : " is-incorrect")
            : "";
          const inputCopy = getPracticeShortAnswerInputCopy(row);
          const useTextarea = practiceShortAnswerNeedsTextarea(row);
          const useInlineBlank = practiceShortAnswerHasInlineBlank(row);
          const field = useTextarea
            ? renderPracticeShortAnswerTextarea(question, row, value, inputCopy)
            : renderPracticeShortAnswerInput(question, row, value, inputCopy);
          if (useInlineBlank) {
            return `
              <article class="practice-short-answer-row is-equation-answer${stateClass}">
                <span class="practice-product-label">${escapeHTML(row.label || row.id)}.</span>
                <span class="practice-short-answer-equation-field">
                  ${renderPracticeInlineBlankExpression(question, row, value, inputCopy)}
                  ${inputCopy.helper ? `<small>${escapeHTML(inputCopy.helper)}</small>` : ""}
                </span>
              </article>
            `;
          }
          return `
            <article class="practice-short-answer-row${useTextarea ? " is-long-answer" : ""}${stateClass}">
              <span class="practice-product-label">${escapeHTML(row.label || row.id)}.</span>
              <span class="practice-short-answer-expression">${productExpressionHTML(row.expression || row.prompt || "")}</span>
              <span class="practice-short-answer-field">
                ${field}
                ${inputCopy.helper ? `<small>${escapeHTML(inputCopy.helper)}</small>` : ""}
              </span>
            </article>
          `;
          }).join("")}
        </div>
      ` : ""}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeSupplementalModel(model, question) {
  if (!model || typeof model !== "object") return "";

  if (model.type === "unit1PrismModel") {
    return renderPracticeUnit1PrismModel(model, question, { inset: true });
  }

  if (model.type === "unit1CompositeModel") {
    return renderPracticeUnit1CompositeModel(model, question, { inset: true });
  }

  return "";
}

function renderPracticeGroupMatchLine(group) {
  const max = Number(group.max) || Math.max(Number(group.baseValue) || 1, Number(group.pointValue) || 1, 1);
  const baseValue = Number(group.baseValue) || 1;
  const pointValue = Number(group.pointValue) || 0;
  const basePercent = Math.max(0, Math.min(100, (baseValue / max) * 100));
  const pointPercent = Math.max(0, Math.min(100, (pointValue / max) * 100));

  return `
    <div class="practice-group-match-line" aria-label="Number line for ${escapeHTML(group.label || group.id)}">
      <span class="practice-group-match-tick is-start"><b>0</b></span>
      <span class="practice-group-match-tick is-base" style="left: ${basePercent}%;" aria-hidden="true"></span>
      <span class="practice-group-match-benchmark-label" style="left: ${basePercent}%;">${mathTextHTML(group.baseLabel || group.baseValue || "")}</span>
      <span class="practice-group-match-dot" style="left: ${pointPercent}%;" aria-hidden="true"></span>
    </div>
  `;
}

function renderPracticeGroupMatch(question) {
  const visual = question.visual || {};
  const groups = getPracticeGroupMatchGroups(question);
  const choices = getPracticeGroupMatchChoices(question);
  const answer = getPracticeGroupMatchAnswer(question);

  return `
    <div class="practice-group-match-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || titleCaseWords(question.activityForm || "Match expressions")}</strong>
        <span>${visual.caption ? mathTextHTML(visual.caption) : "Match each expression to the visual that shows the same value."}</span>
      </div>
      <div class="practice-diagram-expression-bank" aria-label="Expression choices">
        ${choices.map((choice) => `<span>${mathTextHTML(choice.label)}</span>`).join("")}
      </div>
      <div class="practice-group-match-list">
        ${groups.map((group) => {
          const selected = answer.matches[String(group.id)] || [];
          const stateClass = answer.submitted
            ? (practiceGroupMatchGroupIsCorrect(question, group) ? " is-correct" : " is-incorrect")
            : "";
          return `
            <article class="practice-group-match-item${stateClass}">
              <h4>${escapeHTML(group.label || group.id)}</h4>
              ${Number.isFinite(Number(group.baseValue)) || Number.isFinite(Number(group.pointValue))
                ? renderPracticeGroupMatchLine(group)
                : ""}
              <div class="practice-group-match-options" role="group" aria-label="Expressions for ${escapeHTML(group.label || group.id)}">
                ${choices.map((choice) => {
                  const isSelected = selected.includes(String(choice.id));
                  return `
                    <button
                      class="${isSelected ? "is-selected" : ""}"
                      type="button"
                      data-practice-group-match="${question.id}"
                      data-group-id="${escapeHTML(group.id)}"
                      data-choice-id="${escapeHTML(choice.id)}"
                      aria-pressed="${isSelected ? "true" : "false"}"
                    >
                      ${mathTextHTML(choice.label)}
                    </button>
                  `;
                }).join("")}
              </div>
            </article>
          `;
        }).join("")}
      </div>
      ${Array.isArray(visual.followUpPrompts) && visual.followUpPrompts.length ? `
        <div class="practice-scale-note-panel">
          <h4>Follow-up reasoning</h4>
          <ul class="practice-scale-reasoning-list">
            ${visual.followUpPrompts.map((prompt) => `<li>${mathTextHTML(prompt)}</li>`).join("")}
          </ul>
        </div>
      ` : ""}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit6DistanceOrdering(visual, question) {
  if (isGoDistanceQuestion(question) && getPracticePart(question) === "q2") {
    return renderGoDistanceQuestion2Visual(question);
  }

  const items = getPracticeOrderItems(question);
  const answer = getPracticeOrderAnswer(question);
  const isSubmitted = answer.submitted;
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const max = Number.isFinite(visual.max) ? visual.max : 1.25;
  const ticks = Array.isArray(visual.ticks) && visual.ticks.length
    ? visual.ticks
    : [
      { value: 0, label: "0" },
      { value: 0.25, label: "1/4" },
      { value: 0.5, label: "1/2" },
      { value: 0.75, label: "3/4" },
      { value: 1, label: "1 whole", note: visual.baseAmount || "5 miles" },
      { value: 1.25, label: "1 1/4" }
    ];
  const statementLines = Array.isArray(visual.statement) && visual.statement.length
    ? visual.statement
    : items.map((item) => item.statement).filter(Boolean);
  const percentForValue = (value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || max === min) return 0;
    return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
  };
  const markers = items
    .filter((item) => Number.isFinite(answer.placements[String(item.id)]))
    .map((item) => {
      const id = String(item.id);
      const placement = answer.placements[id];
      const correctnessClass = !isSubmitted
        ? ""
        : practiceOrderPlacementIsCorrect(question, id)
          ? " is-correct"
          : " is-incorrect";
      return `
        <button
          class="practice-distance-slider${correctnessClass}"
          type="button"
          style="left: ${percentForValue(placement)}%;"
          data-practice-runner-drag="${question.id}"
          data-order-item-id="${escapeHTML(id)}"
          aria-label="${escapeHTML(getPracticeOrderItemLabel(question, id))} placed at ${formatPracticeOrderValueText(placement)}"
        >
          <span>${escapeHTML(item.name || item.label || id)}</span>
        </button>
      `;
    }).join("");
  const itemButtons = items.map((item) => {
    const id = String(item.id);
    const isPlaced = Number.isFinite(answer.placements[id]);
    if (isPlaced) return "";
    return `
      <button
        class="practice-runner-token"
        type="button"
        data-practice-runner-drag="${question.id}"
        data-order-item-id="${escapeHTML(id)}"
        aria-label="Drag ${escapeHTML(item.name || item.label || id)} onto the number line"
      >
        <strong>${escapeHTML(item.name || item.label || id)}</strong>
      </button>
    `;
  }).join("");

  return `
    <div class="practice-distance-order-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || titleCaseWords(question.activityForm || "Distance ordering")}</strong>
        <span>${visual.caption ? mathTextHTML(visual.caption) : "Use the fraction marks to order the distances from least to greatest."}</span>
      </div>
      <div class="practice-distance-statement">
        ${statementLines.map((line) => `<p>${mathTextHTML(line)}</p>`).join("")}
      </div>
      <div class="practice-distance-line" aria-label="Fractional multiples of a 5-mile trail">
        <div
          class="practice-distance-track"
          data-practice-order-track="${question.id}"
        >
          ${renderPracticeDistanceTicks(ticks, min, max)}
          ${markers}
        </div>
      </div>
      <div class="practice-runner-tray" role="group" aria-label="Runner tags waiting to be placed on the number line">
        <span>Drag to the line</span>
        <div>${itemButtons || "<p>All runners are on the number line.</p>"}</div>
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderWhoRanFartherFacts(question) {
  const runners = getWhoRanFartherRunners(question, true);
  return `
    <div class="practice-who-facts" aria-label="Runner facts">
      <strong>Runner facts</strong>
      <div>
        ${runners.map((runner) => `
          <span class="practice-who-fact${runner.reference ? " is-reference" : ""}">
            <b>${escapeHTML(runner.name)}</b>
            <span>${mathTextHTML(runner.factor || "1")}</span>
          </span>
        `).join("")}
      </div>
    </div>
  `;
}

function renderWhoRanFartherChoiceGroup(question, group, title, caption) {
  const answer = getWhoRanFartherAnswer(question);
  const selected = answer[group] || [];
  const submitted = answer.submitted;
  const correct = getWhoRanFartherCorrect(question)[group] || [];
  const choices = getWhoRanFartherRunners(question).map((runner) => {
    const id = String(runner.id);
    const isSelected = selected.includes(id);
    const isCorrect = correct.includes(id);
    const stateClass = submitted && isSelected
      ? (isCorrect ? " is-correct" : " is-incorrect")
      : "";
    return `
      <button
        class="practice-who-choice${isSelected ? " is-selected" : ""}${stateClass}"
        type="button"
        data-practice-who-toggle="${question.id}"
        data-who-group="${group}"
        data-runner-id="${escapeHTML(id)}"
        aria-pressed="${isSelected ? "true" : "false"}"
      >
        ${escapeHTML(runner.name)}
      </button>
    `;
  }).join("");

  return `
    <section class="practice-who-section">
      <h4>${escapeHTML(title)}</h4>
      <p>${escapeHTML(caption)}</p>
      <div class="practice-who-choice-row" role="group" aria-label="${escapeHTML(title)}">
        ${choices}
      </div>
    </section>
  `;
}

function renderWhoRanFartherOrderBuilder(question) {
  const answer = getWhoRanFartherAnswer(question);
  const runners = getWhoRanFartherRunners(question, true);
  const remaining = runners.filter((runner) => !answer.order.includes(String(runner.id)));
  const orderSlots = Array.from({ length: runners.length }, (_, index) => {
    const id = answer.order[index] || "";
    return `
      <span class="practice-who-order-slot${id ? " is-filled" : ""}">
        <small>${index + 1}</small>
        <strong>${id ? escapeHTML(getWhoRanFartherRunnerName(question, id)) : "choose"}</strong>
      </span>
    `;
  }).join("");

  return `
    <section class="practice-who-section">
      <h4>Question 3: Shortest to Longest</h4>
      <p>Click names in order from shortest distance run to longest.</p>
      <div class="practice-who-order-slots" aria-label="Chosen runner order">
        ${orderSlots}
      </div>
      <div class="practice-who-choice-row" role="group" aria-label="Runner order choices">
        ${remaining.map((runner) => `
          <button
            class="practice-who-choice"
            type="button"
            data-practice-who-order-add="${question.id}"
            data-runner-id="${escapeHTML(runner.id)}"
          >
            ${escapeHTML(runner.name)}
          </button>
        `).join("") || "<span class=\"practice-who-empty\">Order complete.</span>"}
        <button
          class="choice-button"
          type="button"
          data-practice-who-order-clear="${question.id}"
          ${answer.order.length ? "" : "disabled"}
        >
          Clear order
        </button>
      </div>
    </section>
  `;
}

function renderWhoRanFartherSourceLine(question, activePart = "q4") {
  const visual = question.visual || {};
  const answer = getWhoRanFartherAnswer(question);
  const min = Number.isFinite(Number(visual.min)) ? Number(visual.min) : 0;
  const max = Number.isFinite(Number(visual.max)) ? Number(visual.max) : 2;
  const percentForValue = (value) => {
    const numericValue = Number(value);
    if (!Number.isFinite(numericValue) || max === min) return 0;
    return Math.max(0, Math.min(100, ((numericValue - min) / (max - min)) * 100));
  };
  const slots = getWhoRanFartherSlots(question);
  const selectedSlotValues = new Set(Object.values(answer.slots).filter(Boolean));
  const missingValue = parsePracticeNumberInput(answer.missingDistance);
  const missingMarker = Number.isFinite(missingValue)
    ? `
      <span
        class="practice-who-missing-marker"
        style="left: ${percentForValue(missingValue)}%;"
        aria-label="Student-labeled missing distance"
      >
        ${mathTextHTML(answer.missingDistance)}
      </span>
    `
    : "";

  const lineSlots = slots.map((slot) => {
    const selectedRunner = answer.slots[String(slot.id)] || "";
    const selectedInitial = selectedRunner ? getWhoRanFartherRunnerInitial(question, selectedRunner) : "";
    return `
      <span
        class="practice-who-line-slot"
        style="left: ${percentForValue(slot.value)}%;"
        aria-label="${escapeHTML(slot.label)}"
      >
        <span>${selectedInitial ? escapeHTML(selectedInitial) : ""}</span>
      </span>
    `;
  }).join("");

  const slotCards = slots.map((slot) => {
    const selectedRunner = answer.slots[String(slot.id)] || "";
    const correctRunner = String(slot.correctRunner || "");
    const isSubmitted = answer.submitted;
    const stateClass = isSubmitted && selectedRunner
      ? (selectedRunner === correctRunner ? " is-correct" : " is-incorrect")
      : "";
    const choices = getWhoRanFartherRunners(question)
      .map((runner) => {
        const id = String(runner.id);
        const isSelected = selectedRunner === id;
        const isUsedElsewhere = selectedSlotValues.has(id) && !isSelected;
        return `
          <button
            class="practice-who-initial-choice${isSelected ? " is-selected" : ""}"
            type="button"
            data-practice-who-slot="${question.id}"
            data-slot-id="${escapeHTML(slot.id)}"
            data-runner-id="${escapeHTML(id)}"
            aria-pressed="${isSelected ? "true" : "false"}"
            ${isUsedElsewhere ? "disabled" : ""}
          >
            ${escapeHTML(getWhoRanFartherRunnerInitial(question, id))}
          </button>
        `;
      }).join("");
    return `
      <article class="practice-who-slot-card${stateClass}">
        <strong>${escapeHTML(slot.label)}</strong>
        <div class="practice-who-initial-row" role="group" aria-label="Initial choices for ${escapeHTML(slot.label)}">
          ${choices}
        </div>
      </article>
    `;
  }).join("");

  const showSlots = activePart !== "q5";
  const showDistanceInput = activePart !== "q4";
  const title = activePart === "q5"
    ? "Question 5: Missing Student Distance"
    : "Question 4: Source Blanks";
  const caption = activePart === "q5"
    ? "Label the distance for the student who is missing from the source number line."
    : "Write the initial of each student in the three blanks shown in the source. One student is missing.";

  return `
    <section class="practice-who-section practice-who-number-line-section">
      <h4>${title}</h4>
      <p>${caption}</p>
      <div class="practice-who-line" aria-label="Source number line with P for Priya">
        <div class="practice-who-track">
          <span class="practice-who-end-tick is-start"><i></i><b>0</b></span>
          <span class="practice-who-priya" style="left: ${percentForValue(1)}%;"><span>P</span><i></i></span>
          ${lineSlots}
          ${missingMarker}
        </div>
      </div>
      ${showSlots ? `<div class="practice-who-slot-grid">${slotCards}</div>` : ""}
      ${showDistanceInput ? `
        <label class="practice-who-distance-input">
          <span>Distance for the missing student</span>
          <input
            type="text"
            value="${escapeHTML(answer.missingDistance)}"
            placeholder="for example, 3/5"
            data-practice-who-missing-distance="${question.id}"
          >
        </label>
      ` : ""}
    </section>
  `;
}

function renderWhoRanFartherActivePart(question) {
  switch (getPracticePart(question)) {
    case "q2":
      return renderWhoRanFartherChoiceGroup(
        question,
        "notAsFar",
        "Question 2: Which students did not run as far as Priya?",
        "Select every student whose factor is less than 1."
      );
    case "q3":
      return renderWhoRanFartherOrderBuilder(question);
    case "q4":
      return renderWhoRanFartherSourceLine(question, "q4");
    case "q5":
      return renderWhoRanFartherSourceLine(question, "q5");
    case "q1":
    default:
      return renderWhoRanFartherChoiceGroup(
        question,
        "farther",
        "Question 1: Which students ran farther than Priya?",
        "Select every student whose factor is greater than 1."
      );
  }
}

function getWhoRanFartherActiveCaption(question) {
  const visual = question.visual || {};
  switch (getPracticePart(question)) {
    case "q1":
      return "Use the runner facts to choose every student whose factor is greater than 1.";
    case "q2":
      return "Use the runner facts to choose every student whose factor is less than 1.";
    case "q3":
      return "Use the runner facts to order the runners from shortest distance to longest distance.";
    case "q4":
    case "q5":
      return visual.caption || "Point P is Priya's distance. Compare each factor to 1, then use the source number line.";
    default:
      return "Compare each factor to Priya's distance.";
  }
}

function renderPracticeWhoRanFarther(question) {
  const visual = question.visual || {};
  const caption = getWhoRanFartherActiveCaption(question);

  return `
    <div class="practice-who-card">
      <div class="practice-visual-caption">
        <strong>${escapeHTML(visual.title || "17.2: Who Ran Farther?")}</strong>
        <span>${mathTextHTML(caption)}</span>
      </div>
      ${renderWhoRanFartherFacts(question)}
      ${renderWhoRanFartherActivePart(question)}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit6TokenVisual(visual, question) {
  const tokens = [
    ...(Array.isArray(visual.cards) ? visual.cards : []),
    ...(Array.isArray(visual.values) ? visual.values : []),
    ...(Array.isArray(visual.choices) ? visual.choices : []),
    ...(Array.isArray(visual.categories) ? visual.categories : []),
    ...(Array.isArray(visual.factors) ? visual.factors : []),
    ...(Array.isArray(visual.strategies) ? visual.strategies : []),
    ...(Array.isArray(visual.operations) ? visual.operations : []),
    ...(Array.isArray(visual.examples) ? visual.examples : [])
  ];
  const rows = Object.entries(visual)
    .filter(([key, value]) => !["type", "originalType", "cards", "values", "choices", "categories", "factors", "strategies", "operations", "examples"].includes(key)
      && (typeof value === "string" || typeof value === "number"))
    .map(([key, value]) => ({ label: titleCaseWords(key), value: escapeHTML(value) }));

  return `
    <div class="practice-unit6-card">
      <div class="practice-visual-caption">
        <strong>${titleCaseWords(question.activityForm || visual.type || "Unit 6 model")}</strong>
        <span>${question.sourcePromptSummary ? mathTextHTML(question.sourcePromptSummary) : "Use the source structure to reason about the problem."}</span>
      </div>
      ${renderPracticeShortAnswerContextTables(visual.contextTables)}
      ${tokens.length ? `
        <div class="practice-unit6-token-row">
          ${tokens.map((token) => `<span class="practice-unit6-token">${mathTextHTML(token)}</span>`).join("")}
        </div>
      ` : ""}
      ${rows.length ? `
        <div class="practice-generic-list">
          ${rows.map((row) => `<article><span>${row.label}</span><strong>${row.value}</strong></article>`).join("")}
        </div>
      ` : ""}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit6Visual(question) {
  const visual = question.visual || {};
  if (isCompareExpressionsQuestion(question)) {
    return renderPracticeProductComparison(question);
  }

  if (question.responseType === "diagramMatch") {
    return renderPracticeDiagramMatch(question);
  }

  if (question.responseType === "scaleFactorLocation") {
    return renderPracticeScaleFactorLocation(question);
  }

  if (question.responseType === "shortAnswerSet") {
    return renderPracticeShortAnswerSet(question);
  }

  if (question.responseType === "groupMatch") {
    return renderPracticeGroupMatch(question);
  }

  if (question.responseType === "whoRanFarther") {
    return renderPracticeWhoRanFarther(question);
  }

  if (visual.type === "distanceOrderingNumberLine") {
    return renderPracticeUnit6DistanceOrdering(visual, question);
  }

  if (["conversionTable", "comparisonTable", "metric conversion table"].includes(visual.type)) {
    return renderPracticeUnit6Table(visual, question);
  }

  if (["linePlotBuilder", "linePlotDataSelector", "linePlotConstraintBuilder"].includes(visual.type)) {
    return renderPracticeUnit6LinePlot(visual, question);
  }

  if (["scaleFactorNumberLine", "approximateProductNumberLine", "unknownScaleNumberLine", "numberLineExpressionMatch", "numberLineExpressionChoice", "distanceNumberLineCritique"].includes(visual.type)) {
    return renderPracticeUnit6NumberLine(visual, question);
  }

  return renderPracticeUnit6TokenVisual(visual, question);
}

function renderPracticeUnit7SourceCard(visual, question) {
  const rows = Array.isArray(visual.rows) ? visual.rows : [];
  return `
    <div class="practice-unit7-card practice-unit7-source-card">
      <div class="practice-visual-caption">
        <strong>${escapeHTML(visual.title || titleCaseWords(question.activityForm || "Unit 7 source card"))}</strong>
        ${visual.caption ? `<span>${mathTextHTML(visual.caption)}</span>` : ""}
      </div>
      ${rows.length ? `
        <div class="practice-generic-list">
          ${rows.map((row) => `
            <article>
              <span>${escapeHTML(row.label || "")}</span>
              <strong>${mathTextHTML(row.value || "")}</strong>
            </article>
          `).join("")}
        </div>
      ` : ""}
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit1FactCards(facts = []) {
  if (!Array.isArray(facts) || !facts.length) return "";
  return `
    <div class="practice-unit1-facts">
      ${facts.map((fact) => `
        <article>
          <span>${escapeHTML(fact.label || "")}</span>
          <strong>${mathTextHTML(fact.value || "")}</strong>
        </article>
      `).join("")}
    </div>
  `;
}

function renderPracticeUnit1PrismModel(visual, question, options = {}) {
  const dimensions = Array.isArray(visual.dimensions) ? visual.dimensions.map(Number) : [3, 2, 2];
  const [length, width, height] = [
    Math.max(1, dimensions[0] || 3),
    Math.max(1, dimensions[1] || 2),
    Math.max(1, dimensions[2] || 2)
  ];
  const base = length * width;
  const volume = base * height;
  const facts = Array.isArray(visual.facts) && visual.facts.length
    ? visual.facts
    : [
        { label: "Length", value: `${length}` },
        { label: "Width", value: `${width}` },
        { label: "Height", value: `${height}` }
      ];

  return `
    <div class="practice-unit1-card${options.inset ? " is-inset" : ""}">
      <div class="practice-visual-caption">
        <strong>${escapeHTML(visual.title || titleCaseWords(question?.activityForm || "Volume model"))}</strong>
        ${visual.caption ? `<span>${mathTextHTML(visual.caption)}</span>` : ""}
      </div>
      <div class="practice-unit1-model-grid">
        <article class="practice-unit1-model-panel">
          <span class="unit6-small-label">One base layer</span>
          ${renderUnit1CubeGrid(length, width, { className: "is-large" })}
        </article>
        <article class="practice-unit1-model-panel">
          <span class="unit6-small-label">Stacked layers</span>
          ${renderUnit1LayerStack(length, width, height, { highlightAll: Boolean(visual.highlightAll) })}
        </article>
      </div>
      ${renderPracticeUnit1FactCards(facts)}
      ${visual.showVolume ? `<p class="practice-unit1-note">Volume: ${volume} cubic units.</p>` : ""}
    </div>
  `;
}

function renderPracticeUnit1CompositeModel(visual, question, options = {}) {
  const parts = Array.isArray(visual.parts) && visual.parts.length ? visual.parts : [];
  return `
    <div class="practice-unit1-card${options.inset ? " is-inset" : ""}">
      <div class="practice-visual-caption">
        <strong>${escapeHTML(visual.title || titleCaseWords(question?.activityForm || "Composed solid"))}</strong>
        ${visual.caption ? `<span>${mathTextHTML(visual.caption)}</span>` : ""}
      </div>
      <div class="practice-unit1-composite-list">
        ${parts.map((part) => {
          const dimensions = Array.isArray(part.dimensions) ? part.dimensions.map(Number) : [1, 1, 1];
          const [length, width, height] = [
            Math.max(1, dimensions[0] || 1),
            Math.max(1, dimensions[1] || 1),
            Math.max(1, dimensions[2] || 1)
          ];
          const volume = length * width * height;
          return `
            <article class="unit1-part-card is-${escapeHTML(part.color || "teal")}">
              <span>${escapeHTML(part.label || "Part")}</span>
              <strong>${length} x ${width} x ${height}${visual.hidePartVolumes ? "" : ` = ${volume}`}</strong>
              ${renderUnit1LayerStack(length, width, height)}
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderPracticeUnit1Visual(question) {
  const visual = question.visual || {};
  if (question.responseType === "shortAnswerSet") {
    return renderPracticeShortAnswerSet(question);
  }

  if (visual.type === "unit1PrismModel") {
    return `${renderPracticeUnit1PrismModel(visual, question)}${renderPracticeSourcePreview(question)}`;
  }

  if (visual.type === "unit1CompositeModel") {
    return `${renderPracticeUnit1CompositeModel(visual, question)}${renderPracticeSourcePreview(question)}`;
  }

  if (visual.type === "unit1SourceCard") {
    return renderPracticeUnit7SourceCard({
      ...visual,
      title: visual.title || titleCaseWords(question.activityForm || "Unit 1 source card"),
      caption: visual.caption || question.sourcePromptSummary || "Use the source page and volume reasoning to answer."
    }, question);
  }

  return renderPracticeUnit7SourceCard({
    type: "unit1SourceCard",
    title: titleCaseWords(question.activityForm || visual.type || "Unit 1 model"),
    caption: question.sourcePromptSummary || visual.caption || "Use the source structure to reason about this Unit 1 item.",
    rows: [
      { label: "Section", value: question.sectionName || "Unit 1" },
      { label: "Activity form", value: titleCaseWords(question.activityForm || visual.type || "source task") }
    ]
  }, question);
}

function renderPracticeUnit7CoordinateGrid(question) {
  const visual = question.visual || {};
  const xMax = Math.max(1, Number(visual.xMax) || 10);
  const yMax = Math.max(1, Number(visual.yMax) || 10);
  const answer = getPracticeCoordinatePlotAnswer(question);
  const target = getPracticeCoordinatePlotTarget(question);
  const points = [];
  for (let y = 0; y <= yMax; y += 1) {
    for (let x = 0; x <= xMax; x += 1) {
      const isSelected = answer.x === x && answer.y === y;
      points.push(`
        <button
          class="practice-unit7-coordinate-point${isSelected ? " is-selected" : ""}"
          type="button"
          style="left: ${(x / xMax) * 100}%; top: ${((yMax - y) / yMax) * 100}%;"
          data-practice-coordinate-point="${question.id}"
          data-coordinate-x="${x}"
          data-coordinate-y="${y}"
          aria-label="Select point (${x}, ${y})"
          aria-pressed="${isSelected ? "true" : "false"}"
        ></button>
      `);
    }
  }

  const selectedText = Number.isFinite(answer.x) && Number.isFinite(answer.y)
    ? `Selected (${answer.x}, ${answer.y})`
    : "No point selected yet";

  return `
    <div class="practice-unit7-card practice-unit7-coordinate-card">
      <div class="practice-visual-caption">
        <strong>${escapeHTML(visual.title || "Coordinate grid")}</strong>
        <span>${mathTextHTML(visual.caption || "Click the intersection named by the ordered pair.")}</span>
      </div>
      <div class="practice-unit7-coordinate-wrap">
        <div class="practice-unit7-coordinate-grid" aria-label="Coordinate grid from 0 to ${xMax} and 0 to ${yMax}">
          <span class="practice-unit7-axis-label is-origin">0</span>
          <span class="practice-unit7-axis-label is-xmax">${xMax}</span>
          <span class="practice-unit7-axis-label is-ymax">${yMax}</span>
          <span class="practice-unit7-axis-label is-xaxis">x</span>
          <span class="practice-unit7-axis-label is-yaxis">y</span>
          ${points.join("")}
        </div>
      </div>
      <div class="practice-unit7-coordinate-status">
        <span>${escapeHTML(selectedText)}</span>
        <strong>Target: ${escapeHTML(visual.orderedPair || `(${target.x}, ${target.y})`)}</strong>
      </div>
      ${renderPracticeSourcePreview(question)}
    </div>
  `;
}

function renderPracticeUnit7Visual(question) {
  const visual = question.visual || {};
  if (question.responseType === "coordinatePlot") {
    return renderPracticeUnit7CoordinateGrid(question);
  }

  if (visual.type === "unit7SourceCard") {
    return renderPracticeUnit7SourceCard(visual, question);
  }

  return renderPracticeUnit7SourceCard({
    type: "unit7SourceCard",
    title: titleCaseWords(question.activityForm || visual.type || "Unit 7 model"),
    caption: question.sourcePromptSummary || visual.caption || "Use the source structure to reason about this Unit 7 item.",
    rows: [
      { label: "Section", value: question.sectionName || "Unit 7" },
      { label: "Activity form", value: titleCaseWords(question.activityForm || visual.type || "source task") }
    ]
  }, question);
}

function renderPracticeUnit8Visual(question) {
  const visual = question.visual || {};
  if (visual.type === "unit8SourceCard") {
    return renderPracticeUnit7SourceCard({
      ...visual,
      title: visual.title || titleCaseWords(question.activityForm || "Unit 8 source card"),
      caption: visual.caption || question.sourcePromptSummary || "Use the source structure to reason about this Unit 8 item."
    }, question);
  }

  return renderPracticeUnit7SourceCard({
    type: "unit8SourceCard",
    title: titleCaseWords(question.activityForm || visual.type || "Unit 8 model"),
    caption: question.sourcePromptSummary || visual.caption || "Use the source structure to reason about this Unit 8 item.",
    rows: [
      { label: "Section", value: question.sectionName || "Unit 8" },
      { label: "Activity form", value: titleCaseWords(question.activityForm || visual.type || "source task") }
    ]
  }, question);
}

function renderPracticeUnit4Visual(question) {
  const visual = question.visual || {};
  if (question.responseType === "shortAnswerSet") {
    return renderPracticeShortAnswerSet(question);
  }

  if (visual.type === "unit4SourceCard") {
    return renderPracticeUnit7SourceCard({
      ...visual,
      title: visual.title || titleCaseWords(question.activityForm || "Unit 4 source card"),
      caption: visual.caption || question.sourcePromptSummary || "Use the source structure to reason about this Unit 4 item."
    }, question);
  }

  return renderPracticeUnit7SourceCard({
    type: "unit4SourceCard",
    title: titleCaseWords(question.activityForm || visual.type || "Unit 4 model"),
    caption: question.sourcePromptSummary || visual.caption || "Use the source structure to reason about this Unit 4 item.",
    rows: [
      { label: "Section", value: question.sectionName || "Unit 4" },
      { label: "Activity form", value: titleCaseWords(question.activityForm || visual.type || "source task") }
    ]
  }, question);
}

function renderPracticeExpressionCards(visual) {
  const rows = visual.rows || [];
  if (rows.length) {
    return renderPracticeExpressionList({
      ...visual,
      title: visual.title || "Expression cards"
    });
  }

  if (visual.expression) {
    return renderPracticeExpressionList({
      title: visual.title || "Expression",
      caption: visual.caption || "Reason about what this expression means before choosing.",
      rows: [{ label: "Expression", expression: visual.expression }]
    });
  }

  return renderPracticeGenericCard(visual, {
    title: "Expression choices",
    caption: "Use the answer choices as cards. Compare their meanings before selecting."
  });
}

function renderPracticePairedAreaGrids(visual) {
  const rows = Math.max(1, visual.rows || 1);
  const columns = Math.max(1, visual.columns || 1);
  const renderGrid = (gridRows, gridColumns) => {
    const gridWidth = gridColumns >= gridRows ? 240 : 160;
    const cells = Array.from({ length: gridRows * gridColumns }, (_, index) => (
      `<span class="practice-area-grid-cell${index === 0 ? " is-shaded" : ""}"></span>`
    )).join("");

    return `
      <div
        class="practice-area-grid is-paired-diagram"
        style="--practice-area-rows: ${gridRows}; --practice-area-cols: ${gridColumns}; --practice-grid-aspect: ${gridColumns} / ${gridRows}; --paired-grid-width: ${gridWidth}px;"
      >
        ${cells}
      </div>
    `;
  };

  return `
    <div class="practice-area-comparison">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Same amount, different diagrams"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>Different splits can show the same amount of the whole.</span>"}
      </div>
      <div class="practice-area-mini-grid">
        <article class="practice-area-mini">
          <h3>Diagram A</h3>
          <p>Halves across, thirds down</p>
          ${renderGrid(rows, columns)}
        </article>
        <article class="practice-area-mini">
          <h3>Diagram B</h3>
          <p>Diagram A turned 90 degrees</p>
          ${renderGrid(columns, rows)}
        </article>
      </div>
    </div>
  `;
}

function renderPracticeDiagramExpressionTable(visual) {
  const rows = Math.max(1, visual.rows || 1);
  const columns = Math.max(1, visual.columns || 1);
  const selectedCells = Math.max(0, Math.min(rows * columns, visual.selectedCells || 0));
  const overlapCells = getPracticeAreaGridOverlapCells(visual, rows, columns);
  const cells = Array.from({ length: rows * columns }, (_, index) => (
    `<span class="practice-area-grid-cell${(overlapCells ? overlapCells.includes(index) : index < selectedCells) ? " is-shaded" : ""}"></span>`
  )).join("");

  return `
    <div class="practice-table-model">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Diagram, expression, area"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>Use the diagram to connect the expression with the shaded area.</span>"}
      </div>
      <div class="practice-area-grid" style="--practice-area-rows: ${rows}; --practice-area-cols: ${columns};">
        ${cells}
      </div>
      <div class="practice-generic-list">
        <article><span>Rows</span><strong>${rows}</strong></article>
        <article><span>Columns</span><strong>${columns}</strong></article>
      </div>
    </div>
  `;
}

function renderPracticeRectangleArea(visual) {
  const length = visual.length || visual.width || "?";
  const width = visual.height || visual.width || "?";
  const context = visual.context || "rectangle";
  return `
    <div class="practice-rectangle-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Rectangle area"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>Area is side length times side length.</span>"}
      </div>
      <div class="practice-rectangle-model">
        <span class="practice-rectangle-label is-top">${width}</span>
        <div class="practice-rectangle-shape">${context}</div>
        <span class="practice-rectangle-label is-side">${length}</span>
      </div>
    </div>
  `;
}

function renderPracticeFlagDiagram(visual) {
  const selectedFraction = parseFractionString(visual.selectedFraction) || { numerator: 1, denominator: 2 };
  const stripes = Array.from({ length: selectedFraction.denominator }, (_, index) => (
    `<span class="${index < selectedFraction.numerator ? "is-selected" : ""}"></span>`
  )).join("");

  return `
    <div class="practice-flag-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || `${visual.country || "Flag"} diagram`}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>The shaded stripe is a fraction of the whole flag.</span>"}
      </div>
      <div class="practice-flag-model" style="--flag-stripes: ${selectedFraction.denominator};">
        ${stripes}
      </div>
    </div>
  `;
}

function renderPracticeContainerModel(visual) {
  const fraction = parseFractionString(visual.filledFraction || visual.knownFraction) || { numerator: 1, denominator: 2 };
  const fillPercent = Math.min(100, Math.max(0, (fraction.numerator / fraction.denominator) * 100));
  const rows = [];
  if (visual.capacity) rows.push({ label: "Capacity", value: visual.capacity });
  if (visual.knownAmount) rows.push({ label: "Known amount", value: visual.knownAmount });
  rows.push({ label: "Filled", value: `${fraction.numerator}/${fraction.denominator}` });

  return `
    <div class="practice-container-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Container model"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : "<span>Identify the whole container and the fraction that is filled.</span>"}
      </div>
      <div class="practice-container-model">
        <span style="height: ${fillPercent}%;"></span>
      </div>
      <div class="practice-generic-list">
        ${rows.map((row) => `<article><span>${row.label}</span><strong>${row.value}</strong></article>`).join("")}
      </div>
    </div>
  `;
}

function renderPracticeNumberBoxPuzzle(visual) {
  const numbers = visual.numbers || ["?", "?", "?", "?"];
  return renderPracticeGenericCard(visual, {
    title: visual.operation === "quotient" ? "Make a quotient" : "Make a product",
    caption: "Place the numbers strategically before calculating.",
    rows: [
      { label: "Number cards", value: numbers.join(", ") },
      { label: "Goal", value: visual.operation === "quotient" ? "reason about quotient size" : "reason about product size" }
    ]
  });
}

function renderPracticeStoryCard(visual) {
  return renderPracticeGenericCard(visual, {
    title: visual.title || "Story structure",
    caption: visual.caption || "Decide what the whole is, what is known, and what is unknown.",
    rows: [
      { label: "Context", value: visual.context || visual.object || "story problem" }
    ]
  });
}

function renderPracticeCardSort(visual) {
  return renderPracticeGenericCard(visual, {
    title: visual.title || "Sort by meaning",
    caption: visual.caption || "Match the card to the operation meaning, not just the numbers.",
    rows: [
      { label: "Cards", value: visual.cards || visual.context || "expression and situation cards" }
    ]
  });
}

function renderPracticeLabeledRegionDiagram(visual, question) {
  const rows = Math.max(1, Number(visual.rows) || 1);
  const columns = Math.max(1, Number(visual.columns) || 1);
  const regions = Array.isArray(visual.regions) ? visual.regions : [];
  const answer = question?.responseType === "regionChoice" ? getPracticeRegionAnswer(question) : null;
  const targetRegion = getPracticeRegionTarget(visual);
  const isInteractive = question?.responseType === "regionChoice";

  const cells = regions.map((region) => {
    const id = String(region.id || region.label || "");
    const row = Math.max(1, Number(region.row) || 1);
    const column = Math.max(1, Number(region.column) || 1);
    const rowSpan = Math.max(1, Number(region.rowSpan) || 1);
    const columnSpan = Math.max(1, Number(region.columnSpan) || 1);
    const isSelected = answer?.selectedRegion === id;
    const isSubmitted = Boolean(answer?.submitted);
    const stateClass = isSubmitted && isSelected && id === targetRegion
      ? " is-correct"
      : isSubmitted && isSelected
        ? " is-incorrect"
        : "";
    const tagName = isInteractive ? "button" : "div";
    const typeAttribute = isInteractive ? ' type="button"' : "";
    const dataAttributes = isInteractive
      ? ` data-practice-region="${question.id}" data-region-id="${escapeHTML(id)}" aria-pressed="${isSelected ? "true" : "false"}"`
      : "";

    return `
      <${tagName}
        class="practice-region-cell is-region-${escapeHTML(region.color || "teal")}${isSelected ? " is-selected" : ""}${stateClass}"
        style="--region-row: ${row}; --region-column: ${column}; --region-row-span: ${rowSpan}; --region-column-span: ${columnSpan};"
        ${typeAttribute}${dataAttributes}
      >
        <strong>${region.label || id}</strong>
        ${region.note ? `<span>${region.note}</span>` : ""}
      </${tagName}>
    `;
  }).join("");

  return `
    <div class="practice-region-diagram-card">
      <div class="practice-visual-caption">
        <strong>${visual.title || "Labeled region diagram"}</strong>
        ${visual.caption ? `<span>${visual.caption}</span>` : ""}
      </div>
      <div
        class="practice-region-diagram"
        style="--region-rows: ${rows}; --region-columns: ${columns};"
        aria-label="${escapeHTML(visual.ariaLabel || visual.title || "Labeled region diagram")}"
      >
        ${cells}
      </div>
    </div>
  `;
}

function renderPracticeVisual(question) {
  const visual = question.visual;
  if (!visual) {
    return renderPracticeGenericCard({}, {
      title: question.activityForm || "Question card",
      caption: "Use the information in the problem and choose the best answer.",
      rows: question.sourceType ? [{ label: "Source type", value: question.sourceType }] : []
    });
  }

  if (question.responseType === "shortAnswerSet") {
    return renderPracticeShortAnswerSet(question);
  }

  if (isUnit1PracticeQuestion(question)) {
    return renderPracticeUnit1Visual(question);
  }

  if (isUnit7PracticeQuestion(question)) {
    return renderPracticeUnit7Visual(question);
  }

  if (isUnit8PracticeQuestion(question)) {
    return renderPracticeUnit8Visual(question);
  }

  if (isUnit4PracticeQuestion(question)) {
    return renderPracticeUnit4Visual(question);
  }

  if (isUnit6PracticeQuestion(question)) {
    return renderPracticeUnit6Visual(question);
  }

  if (visual.type === "sharing") {
    if ((Number(visual.total) || 0) > 12 || (Number(visual.groups) || 0) > 10) {
      return renderPracticeStoryCard({
        ...visual,
        title: visual.title || "Fair sharing story",
        caption: visual.caption || "Use division to reason about equal shares."
      });
    }
    return renderSharingLab(visual.total, visual.groups, {
      object: visual.object || "sandwich",
      compact: true,
      emphasizeForms: false,
      showShareAmount: false
    });
  }

  if (visual.type === "pack") {
    return renderPracticePackVisual(visual.numerator, visual.denominator);
  }

  if (visual.type === "numberLine") {
    return renderPracticeNumberLine(visual, question);
  }

  if (visual.type === "shadeRectangle") {
    return renderPracticeShadeRectangle(visual, question);
  }

  if (visual.type === "areaGrid") {
    return renderPracticeAreaGrid(visual, question);
  }

  if (visual.type === "areaGridGreaterThanOne") {
    return renderPracticeGreaterThanOneGrid(visual, question);
  }

  if (visual.type === "pairedAreaGrids") {
    return renderPracticePairedAreaGrids(visual);
  }

  if (visual.type === "diagramExpressionTable") {
    return renderPracticeDiagramExpressionTable(visual);
  }

  if (visual.type === "tapeDiagram") {
    return renderPracticeTapeDiagram(visual);
  }

  if (visual.type === "tapeDiagramComparison") {
    return renderPracticeTapeComparison(visual);
  }

  if (visual.type === "stripDiagram") {
    return renderPracticeStripDiagram(visual);
  }

  if (visual.type === "strategyCard") {
    return renderPracticeStrategyCard(visual);
  }

  if (visual.type === "stripSet") {
    return renderPracticeStripSet(visual);
  }

  if (visual.type === "areaComparison") {
    return renderPracticeAreaComparison(visual);
  }

  if (visual.type === "expressionList") {
    return renderPracticeExpressionList(visual);
  }

  if (["expressionCards", "expressionCard", "expressionComparison"].includes(visual.type)) {
    return renderPracticeExpressionCards(visual);
  }

  if (visual.type === "rectangleArea") {
    return renderPracticeRectangleArea(visual);
  }

  if (visual.type === "flagDiagram") {
    return renderPracticeFlagDiagram(visual);
  }

  if (visual.type === "containerModel") {
    return renderPracticeContainerModel(visual);
  }

  if (["storyCard", "groupSizeStory", "storyBuilder", "infoGapCards"].includes(visual.type)) {
    return renderPracticeStoryCard(visual);
  }

  if (visual.type === "labeledRegionDiagram") {
    return renderPracticeLabeledRegionDiagram(visual, question);
  }

  if (["cardSort", "matchingCards"].includes(visual.type)) {
    return renderPracticeCardSort(visual);
  }

  if (visual.type === "numberBoxPuzzle") {
    return renderPracticeNumberBoxPuzzle(visual);
  }

  if (visual.type === "meaning") {
    return `
      <div class="fraction-meaning-layout">
        <div class="fraction-meaning-card">
          <span class="form-label">Fraction</span>
          <div class="interactive-fraction" aria-label="${visual.numerator} over ${visual.denominator}">
            <span>${visual.numerator}</span>
            <span>${visual.denominator}</span>
          </div>
        </div>
        <div class="fraction-meaning-card">
          <span class="form-label">Picture</span>
          ${renderFractionSegmentBar(visual.numerator, visual.denominator, {
            className: "is-large",
            highlight: "denominator",
            ariaLabel: `${visual.numerator} of ${visual.denominator} equal pieces shaded`
          })}
        </div>
      </div>
    `;
  }

  if (visual.type === "fractionOf") {
    return renderFractionOfWholeModel(visual.model, visual.model.numerator);
  }

  if (visual.type === "area") {
    return renderFractionAreaModel(visual.model, { areaSummaryMode: "expression" });
  }

  if (visual.type === "mixedArea") {
    return renderMixedAreaModel(visual.model, { areaSummaryMode: "expression" });
  }

  return "";
}

function renderPracticeChoice(question, choice, selectedValue) {
  const multiAnswer = question.responseType === "multi"
    ? getPracticeMultiAnswer(question)
    : null;
  const selectedValues = multiAnswer
    ? multiAnswer.selectedValues
    : (Array.isArray(selectedValue) ? selectedValue : [selectedValue].filter(Boolean));
  const showAssessment = multiAnswer ? multiAnswer.submitted : selectedValues.length > 0;
  const isSelected = selectedValues.includes(choice.value);
  const stateClass = showAssessment && isSelected && choice.correct
    ? " is-correct"
    : showAssessment && isSelected && !choice.correct
      ? " is-incorrect"
      : "";
  const selectedClass = isSelected ? " is-selected" : "";
  return `
    <button
      class="practice-option${stateClass}${selectedClass}"
      type="button"
      data-practice-question="${question.id}"
      data-practice-option="${choice.value}"
      aria-pressed="${isSelected ? "true" : "false"}"
    >
      ${choice.label}
    </button>
  `;
}

function renderPracticeRegionAnswer(question) {
  const answer = getPracticeRegionAnswer(question);
  const regions = question.visual?.regions || [];
  const selectedRegion = regions.find((region) => region.id === answer.selectedRegion);

  return `
    <div class="practice-open-response">
      <p>${question.responsePrompt || "Click a region in the diagram, then submit."}</p>
      ${selectedRegion ? `<p>Selected region: <strong>${selectedRegion.label || selectedRegion.id}</strong></p>` : ""}
      <button
        class="action-button"
        type="button"
        data-practice-region-submit="${question.id}"
        ${answer.selectedRegion ? "" : "disabled"}
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeCoordinatePlotAnswer(question) {
  const answer = getPracticeCoordinatePlotAnswer(question);
  const hasSelection = Number.isFinite(answer.x) && Number.isFinite(answer.y);
  return `
    <div class="practice-open-response practice-coordinate-response">
      <p>${hasSelection ? "Submit this point, or click another intersection first." : (question.responsePrompt || "Click an intersection on the grid.")}</p>
      <button
        class="action-button"
        type="button"
        data-practice-coordinate-submit="${question.id}"
        ${hasSelection ? "" : "disabled"}
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeFeedback(question, selectedValue) {
  if (question.responseType === "numberLinePoint") {
    const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
    const selectedTick = Number.isFinite(answer?.selectedTick) ? answer.selectedTick : null;
    const targetTick = getNumberLineTargetTick(question.visual);

    if (!answer?.submitted) {
      if (selectedTick !== null) {
        return `
          <div class="practice-feedback" aria-live="polite">
            Selected point: <strong>${formatNumberLinePlacementHTML(question.visual, selectedTick)}</strong>. Submit when you are ready.
          </div>
        `;
      }

      return '<div class="practice-feedback">Click the number line to choose a point. The guide ticks appear after your first try.</div>';
    }

    const isCorrect = selectedTick === targetTick;
    const selectedText = selectedTick !== null
      ? formatNumberLineTickHTML(question.visual, selectedTick)
      : "no point";
    const targetText = targetTick !== null
      ? formatNumberLineTickHTML(question.visual, targetTick)
      : "";
    const feedback = isCorrect
      ? question.correctFeedback
      : `${question.incorrectFeedback} The correct point is ${targetText}.`;

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>You picked ${selectedText}. ${feedback}</span>
      </div>
    `;
  }

  if (question.responseType === "numberLineOrder") {
    if (isGoDistanceQuestion(question) && getPracticePart(question) === "q2") {
      const answer = getGoDistanceQuestion2Answer(question);
      if (!answer.submitted) {
        return '<div class="practice-feedback">Type a fraction or mixed number for each blank, then submit.</div>';
      }

      const rows = getGoDistanceQuestion2Blanks(question).map((blank) => {
        const response = answer.responses[blank.id] || "";
        const isCorrect = goDistanceQuestion2ResponseIsCorrect(blank, response);
        const interval = `${formatPracticeOrderValueText(blank.min)} and ${formatPracticeOrderValueText(blank.max)}`;
        return `
          <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
            <strong>${blank.name}</strong>
            <span>${escapeHTML(response || "blank")} ${isCorrect ? "works" : `does not work. It must be between ${interval}.`}</span>
          </li>
        `;
      }).join("");
      const isCorrect = goDistanceQuestion2IsCorrect(question);

      return `
        <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
          <strong>${isCorrect ? "Correct" : "Try again"}</strong>
          <span>${isCorrect ? "Each value fits the required interval." : "At least one value is outside the required interval."}</span>
          <ul class="practice-check-list">${rows}</ul>
        </div>
      `;
    }

    const answer = getPracticeOrderAnswer(question);
    const placedCount = getPracticeOrderPlacedIds(question).length;
    const totalCount = getPracticeOrderItems(question).length;
    const targetText = getPracticeOrderTarget(question)
      .map((id) => getPracticeOrderItemLabel(question, id))
      .join(" -> ");

    if (!answer.submitted) {
      return placedCount
        ? `
          <div class="practice-feedback" aria-live="polite">
            ${placedCount} of ${totalCount} runners are on the number line. Drag any tag along the line to adjust its position.
          </div>
        `
        : '<div class="practice-feedback">Drag each runner tag onto the number line, then slide it to the distance that matches the statement.</div>';
    }

    const isGoDistance = isGoDistanceQuestion(question);
    const isCorrect = isGoDistance ? practiceOrderOnlyIsCorrect(question) : practiceQuestionIsCorrect(question);
    const feedback = isCorrect
      ? (isGoDistance && !goDistanceQuestion2IsCorrect(question)
        ? "Question 1 is correct. Use Question 2 to choose values that fit the distance clues."
        : question.correctFeedback)
      : `${question.incorrectFeedback} The increasing order is ${targetText}.`;

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${feedback}</span>
      </div>
    `;
  }

  if (question.responseType === "whoRanFarther") {
    const answer = getWhoRanFartherAnswer(question);
    const readyParts = [
      answer.farther.length,
      answer.notAsFar.length,
      answer.order.length === getWhoRanFartherRunners(question, true).length,
      whoRanFartherSlotsAreComplete(question),
      answer.missingDistance.trim()
    ].filter(Boolean).length;

    if (!answer.submitted) {
      return readyParts
        ? `<div class="practice-feedback" aria-live="polite">${readyParts} of 5 parts are ready. Submit when every part is complete.</div>`
        : '<div class="practice-feedback">Answer the five source parts, then submit.</div>';
    }

    const rows = [
      {
        label: "Farther than Priya",
        correct: whoRanFartherGroupIsCorrect(question, "farther"),
        text: "Jada and Clare have factors greater than 1."
      },
      {
        label: "Not as far as Priya",
        correct: whoRanFartherGroupIsCorrect(question, "notAsFar"),
        text: "Han and Mai have factors less than 1."
      },
      {
        label: "Shortest to longest",
        correct: whoRanFartherOrderIsCorrect(question),
        text: "The order is Mai, Han, Priya, Clare, Jada."
      },
      {
        label: "Number-line blanks",
        correct: whoRanFartherSlotsAreCorrect(question),
        text: "The three source blanks are H, C, and J from left to right."
      },
      {
        label: "Missing distance",
        correct: whoRanFartherMissingDistanceIsCorrect(question),
        text: "Mai is missing, and Mai's distance is 3/5 of Priya's distance."
      }
    ];
    const rowHTML = rows.map((row) => `
      <li class="${row.correct ? "is-correct" : "is-incorrect"}">
        <strong>${row.label}.</strong>
        <span>${row.text}</span>
      </li>
    `).join("");
    const isCorrect = whoRanFartherIsCorrect(question);

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? question.correctFeedback : question.incorrectFeedback}</span>
        <ul class="practice-check-list">${rowHTML}</ul>
      </div>
    `;
  }

  if (question.responseType === "productComparisonBlanks") {
    const activePart = getPracticePart(question);
    if (activePart === "q3") {
      const answer = getProductComparisonQuestion3Answer(question);
      const rows = getProductComparisonQuestion3Rows(question);
      const filledCount = rows.filter((row) => String(answer.values[row.id] || "").trim()).length;

      if (!answer.submitted) {
        return filledCount
          ? `<div class="practice-feedback" aria-live="polite">${filledCount} of ${rows.length} denominator boxes have a value. Submit when you are ready.</div>`
          : '<div class="practice-feedback">Type a denominator in each box, then submit.</div>';
      }

      const rowFeedback = rows.map((row) => {
        const response = answer.values[row.id] || "";
        const isCorrect = productComparisonQuestion3RowIsCorrect(row, response);
        return `
          <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
            <strong>${escapeHTML(row.label)}.</strong>
            <span>${escapeHTML(response || "blank")} ${isCorrect ? "works" : `does not work. ${row.explanation}`}</span>
          </li>
        `;
      }).join("");
      const isCorrect = productComparisonQuestion3IsCorrect(question);

      return `
        <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
          <strong>${isCorrect ? "Correct" : "Try again"}</strong>
          <span>${isCorrect ? "Each denominator makes the comparison true." : "At least one denominator does not make the comparison true."}</span>
          <ul class="practice-check-list">${rowFeedback}</ul>
        </div>
      `;
    }

    if (activePart === "q2") {
      const answer = getProductComparisonQuestion2Answer(question);
      const rows = getProductComparisonQuestion2Rows(question);
      const filledCount = rows.filter((row) => String(answer.values[row.id] || "").trim()).length;

      if (!answer.submitted) {
        return filledCount
          ? `<div class="practice-feedback" aria-live="polite">${filledCount} of ${rows.length} boxes have a value. Submit when you are ready.</div>`
          : '<div class="practice-feedback">Type a number in each box, then submit.</div>';
      }

      const rowFeedback = rows.map((row) => {
        const response = answer.values[row.id] || "";
        const isCorrect = productComparisonQuestion2RowIsCorrect(row, response);
        return `
          <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
            <strong>${escapeHTML(row.label)}.</strong>
            <span>${escapeHTML(response || "blank")} ${isCorrect ? "works" : `does not work. ${row.explanation}`}</span>
          </li>
        `;
      }).join("");
      const isCorrect = productComparisonQuestion2IsCorrect(question);

      return `
        <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
          <strong>${isCorrect ? "Correct" : "Try again"}</strong>
          <span>${isCorrect ? "Each numerator makes the comparison true." : "At least one numerator does not make the comparison true."}</span>
          <ul class="practice-check-list">${rowFeedback}</ul>
        </div>
      `;
    }

    const answer = getProductComparisonQuestion1Answer(question);
    const rows = getProductComparisonQuestion1Rows(question);
    const selectedCount = rows.filter((row) => answer.symbols[row.id]).length;

    if (!answer.submitted) {
      return selectedCount
        ? `<div class="practice-feedback" aria-live="polite">${selectedCount} of ${rows.length} comparison symbols selected. Submit when you are ready.</div>`
        : '<div class="practice-feedback">Choose &lt; or &gt; for each blank, then submit.</div>';
    }

    const rowFeedback = rows.map((row) => {
      const isCorrect = productComparisonQuestion1RowIsCorrect(question, row);
      const selected = answer.symbols[row.id] || "blank";
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${escapeHTML(row.label)}.</strong>
          <span>${escapeHTML(selected)} ${isCorrect ? "works" : `does not work. ${row.explanation}`}</span>
        </li>
      `;
    }).join("");
    const isCorrect = productComparisonQuestion1IsCorrect(question);

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? "Each symbol makes the comparison true." : "At least one symbol does not make the comparison true."}</span>
        <ul class="practice-check-list">${rowFeedback}</ul>
      </div>
    `;
  }

  if (question.responseType === "diagramMatch") {
    const answer = getPracticeDiagramMatchAnswer(question);
    const diagrams = getPracticeDiagramMatchDiagrams(question);
    const selectedCount = diagrams.filter((diagram) => answer.matches[String(diagram.id)]).length;

    if (!answer.submitted) {
      return selectedCount
        ? `<div class="practice-feedback" aria-live="polite">${selectedCount} of ${diagrams.length} diagrams have a match. Submit when you are ready.</div>`
        : '<div class="practice-feedback">Choose one expression for each diagram, then submit.</div>';
    }

    const rowFeedback = diagrams.map((diagram) => {
      const selected = answer.matches[String(diagram.id)] || "";
      const expression = getPracticeDiagramMatchExpressions(question)
        .find((choice) => String(choice.id) === selected);
      const correctExpression = getPracticeDiagramMatchExpressions(question)
        .find((choice) => String(choice.id) === String(diagram.correctExpression));
      const isCorrect = selected === String(diagram.correctExpression);
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${escapeHTML(diagram.label || diagram.id)}.</strong>
          <span>${expression ? mathTextHTML(expression.label) : "blank"} ${isCorrect ? "matches" : `does not match. Look for ${mathTextHTML(correctExpression?.label || "")}.`}</span>
        </li>
      `;
    }).join("");
    const isCorrect = practiceDiagramMatchIsCorrect(question);

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? question.correctFeedback : question.incorrectFeedback}</span>
        <ul class="practice-check-list">${rowFeedback}</ul>
      </div>
    `;
  }

  if (question.responseType === "scaleFactorLocation") {
    const answer = getPracticeScaleLocationAnswer(question);
    const items = getPracticeScaleLocationItems(question);
    const blanks = getPracticeScaleLocationBlanks(question);
    const comparisons = getPracticeScaleLocationVisibleComparisons(question);
    const activePart = getPracticeScaleLocationActivePart(question);
    const partSubmitted = practiceScaleLocationPartIsSubmitted(question, activePart);
    const selectedCount = items.filter((item) => answer.zones[String(item.id)]).length;
    const blankCount = blanks.filter((blank) => String(answer.blanks[String(blank.id)] || "").trim()).length;
    const comparisonCount = comparisons.filter((comparison) => answer.comparisons[String(comparison.id)]).length;
    const progressParts = [];
    if (items.length) progressParts.push(`${selectedCount} of ${items.length} product locations chosen`);
    if (blanks.length) progressParts.push(`${blankCount} of ${blanks.length} boxes filled`);
    if (comparisons.length) progressParts.push(`${comparisonCount} of ${comparisons.length} comparisons chosen`);

    if (!partSubmitted) {
      return selectedCount || blankCount || comparisonCount
        ? `<div class="practice-feedback" aria-live="polite">${progressParts.join(", ")}. Submit when you are ready.</div>`
        : `<div class="practice-feedback">${comparisons.length && !items.length ? "Choose a comparison symbol for each row, then submit." : "Choose a location for each product, complete the comparison work, then submit."}</div>`;
    }

    const itemFeedback = items.map((item) => {
      const selected = answer.zones[String(item.id)] || "blank";
      const isCorrect = practiceScaleLocationItemIsCorrect(question, item);
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${mathTextHTML(item.expression || item.label)}.</strong>
          <span>${escapeHTML(selected)} ${isCorrect ? "works" : `does not work. ${item.explanation || "Compare the fraction factor to 1."}`}</span>
        </li>
      `;
    }).join("");
    const blankFeedback = blanks.map((blank) => {
      const response = answer.blanks[String(blank.id)] || "";
      const isCorrect = practiceScaleBlankIsCorrect(blank, response);
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${escapeHTML(blank.label)}.</strong>
          <span>${escapeHTML(response || "blank")} ${isCorrect ? "works" : `does not work. ${blank.explanation || "Make the fraction less than, equal to, or greater than 1."}`}</span>
        </li>
      `;
    }).join("");
    const comparisonFeedback = comparisons.map((comparison) => {
      const selected = answer.comparisons[String(comparison.id)] || "blank";
      const isCorrect = practiceScaleComparisonIsCorrect(question, comparison);
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${escapeHTML(comparison.label)}.</strong>
          <span>${escapeHTML(selected)} ${isCorrect ? "works" : `does not work. ${comparison.explanation || "Compare the factor to 1."}`}</span>
        </li>
      `;
    }).join("");
    const isCorrect = practiceScaleLocationPartIsCorrect(question, activePart);
    const fullCardIsCorrect = practiceScaleLocationIsCorrect(question);
    const correctText = fullCardIsCorrect
      ? question.correctFeedback
      : "Correct for this question. Finish the other tab to complete the card.";

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? correctText : question.incorrectFeedback}</span>
        <ul class="practice-check-list">${itemFeedback}${blankFeedback}${comparisonFeedback}</ul>
      </div>
    `;
  }

  if (question.responseType === "groupMatch") {
    const answer = getPracticeGroupMatchAnswer(question);
    const groups = getPracticeGroupMatchGroups(question);
    const matchedCount = groups.filter((group) => (answer.matches[String(group.id)] || []).length).length;

    if (!answer.submitted) {
      return matchedCount
        ? `<div class="practice-feedback" aria-live="polite">${matchedCount} of ${groups.length} number lines have at least one expression. Submit when you are ready.</div>`
        : '<div class="practice-feedback">Select every expression that matches each number line, then submit.</div>';
    }

    const rowFeedback = groups.map((group) => {
      const selected = answer.matches[String(group.id)] || [];
      const isCorrect = practiceGroupMatchGroupIsCorrect(question, group);
      return `
        <li class="${isCorrect ? "is-correct" : "is-incorrect"}">
          <strong>${escapeHTML(group.label || group.id)}.</strong>
          <span>${selected.length ? selected.join(", ") : "blank"} ${isCorrect ? "matches" : `does not match. ${group.explanation || "Check the marked point and the benchmark value."}`}</span>
        </li>
      `;
    }).join("");
    const isCorrect = practiceGroupMatchIsCorrect(question);

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? question.correctFeedback : question.incorrectFeedback}</span>
        <ul class="practice-check-list">${rowFeedback}</ul>
      </div>
    `;
  }

  if (question.responseType === "shadeRectangleParts") {
    const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
    const selectedPieces = Array.isArray(answer?.selectedPieces) ? answer.selectedPieces : [];
    const expectedCount = getShadeRectangleTargetPieces(question.visual).length;

    if (!answer?.submitted) {
      return selectedPieces.length
        ? `
          <div class="practice-feedback" aria-live="polite">
            You shaded <strong>${selectedPieces.length}</strong> of <strong>${question.visual.denominator}</strong> equal parts. Submit when you are ready.
          </div>
        `
        : '<div class="practice-feedback">Click equal parts of the rectangle to shade them, then submit your answer.</div>';
    }

    const isCorrect = selectedPieces.length === expectedCount;
    const feedback = isCorrect
      ? question.correctFeedback
      : `${question.incorrectFeedback} The numerator tells you to shade ${expectedCount} of the ${question.visual.denominator} equal parts.`;

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${feedback}</span>
      </div>
    `;
  }

  if (question.responseType === "shadeAreaOverlap") {
    const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
    const selectedCells = Array.isArray(answer?.selectedCells) ? answer.selectedCells : [];
    const expectedCount = getPracticeAreaGridTargetCount(question);
    const totalCells = (question.visual.rows || 1) * (question.visual.columns || 1);
    const correctCells = getPracticeAreaGridCorrectCells(question, totalCells);

    if (!answer?.submitted) {
      return selectedCells.length
        ? `
          <div class="practice-feedback" aria-live="polite">
            You shaded <strong>${selectedCells.length}</strong> of <strong>${totalCells}</strong> small pieces. Submit when you are ready.
          </div>
        `
        : '<div class="practice-feedback">Click the small area piece or pieces that make the overlap, then submit your answer.</div>';
    }

    const isCorrect = sameNumberSet(selectedCells, correctCells);
    const feedback = isCorrect
      ? question.correctFeedback
      : `${question.incorrectFeedback} This overlap should shade ${expectedCount} specific ${plural(expectedCount, "piece")} of the ${totalCells} equal pieces.`;

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${feedback}</span>
      </div>
    `;
  }

  if (question.responseType === "open") {
    const answer = getPracticeOpenAnswer(question);
    if (!answer.reviewed) {
      return answer.responseText.trim()
        ? '<div class="practice-feedback">Your reasoning is saved. Reveal the sample response when you are ready to compare.</div>'
        : '<div class="practice-feedback">Write your reasoning first, then reveal a sample response to compare with your thinking.</div>';
    }

    return `
      <div class="practice-feedback is-correct" aria-live="polite">
        <strong>Sample response</strong>
        <span>${question.sampleAnswer || question.correctFeedback || "Reasoning reviewed."}</span>
      </div>
    `;
  }

  if (question.responseType === "coordinatePlot") {
    const answer = getPracticeCoordinatePlotAnswer(question);
    const target = getPracticeCoordinatePlotTarget(question);
    const hasSelection = Number.isFinite(answer.x) && Number.isFinite(answer.y);
    if (!answer.submitted) {
      return `
        <div class="practice-feedback" aria-live="polite">
          ${hasSelection ? `Selected point: <strong>(${answer.x}, ${answer.y})</strong>.` : "Choose a point on the grid."}
        </div>
      `;
    }

    const isCorrect = answer.x === target.x && answer.y === target.y;
    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${isCorrect ? question.correctFeedback : `${question.incorrectFeedback} You picked (${answer.x}, ${answer.y}); the target is (${target.x}, ${target.y}).`}</span>
      </div>
    `;
  }

  if (question.responseType === "regionChoice") {
    const answer = getPracticeRegionAnswer(question);
    const regions = question.visual?.regions || [];
    const selectedRegion = regions.find((region) => region.id === answer.selectedRegion);
    const targetRegion = getPracticeRegionTarget(question.visual);
    const isCorrect = answer.submitted && answer.selectedRegion === targetRegion;

    if (!answer.selectedRegion) {
      return '<div class="practice-feedback">Click the region that matches the expression, then submit your answer.</div>';
    }

    if (!answer.submitted) {
      return `
        <div class="practice-feedback" aria-live="polite">
          You selected <strong>${selectedRegion?.label || answer.selectedRegion}</strong>. Submit when you are ready.
        </div>
      `;
    }

    const feedback = isCorrect
      ? question.correctFeedback
      : `${question.incorrectFeedback} ${selectedRegion?.explanation || "Try naming the selected region as a fraction of the whole."}`;

    return `
      <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
        <strong>${isCorrect ? "Correct" : "Try again"}</strong>
        <span>${feedback}</span>
      </div>
    `;
  }

  if (question.responseType === "multi") {
    const answer = getPracticeMultiAnswer(question);
    if (!answer.submitted) {
      return answer.selectedValues.length
        ? `
          <div class="practice-feedback" aria-live="polite">
            You selected <strong>${answer.selectedValues.length}</strong> ${plural(answer.selectedValues.length, "choice")}. Submit when you are ready.
          </div>
        `
        : '<div class="practice-feedback">Select every choice that fits, then submit your answer.</div>';
    }
  }

  if (!practiceQuestionIsAnswered(question)) {
    return '<div class="practice-feedback">Choose an answer, then check the explanation here.</div>';
  }

  const isCorrect = practiceQuestionIsCorrect(question);
  const feedback = isCorrect ? question.correctFeedback : question.incorrectFeedback;
  return `
    <div class="practice-feedback ${isCorrect ? "is-correct" : "is-incorrect"}" aria-live="polite">
      <strong>${isCorrect ? "Correct" : "Try again"}</strong>
      <span>${feedback}</span>
    </div>
  `;
}

function renderPracticeHints(question) {
  const visibleHintCount = state.practiceHints[question.id] || 0;
  const hints = question.hints.slice(0, visibleHintCount)
    .map((hint, index) => `<li><strong>Hint ${index + 1}:</strong> ${hint}</li>`)
    .join("");
  const canShowMore = visibleHintCount < question.hints.length;

  return `
    <div class="practice-hints">
      ${hints ? `<ol>${hints}</ol>` : '<p>No hints shown yet.</p>'}
      <button class="choice-button" type="button" data-practice-hint="${question.id}" ${canShowMore ? "" : "disabled"}>
        ${canShowMore ? "Show hint" : "All hints shown"}
      </button>
    </div>
  `;
}

function renderPracticeAttemptFlow(question) {
  const history = getPracticeAttemptHistory(question);
  const latestAttempt = getLatestPracticeAttempt(question);
  const isAnswered = practiceQuestionIsAnswered(question);
  const modelVisible = Boolean(state.practiceModels[question.id]);
  const canShowModel = isAnswered && (question.sampleAnswer || question.correctFeedback);
  const canRetry = isAnswered || history.length > 0;
  const historyItems = history.slice(-3).map((attempt) => `
    <li class="${attempt.correct ? "is-correct" : "is-incorrect"}">
      <span>Try ${attempt.number}</span>
      <strong>${attempt.correct ? "Correct" : "Needs another try"}</strong>
      <small>${escapeHTML(attempt.answer)}</small>
    </li>
  `).join("");

  if (!history.length && !canRetry && !canShowModel && !modelVisible) {
    return "";
  }

  return `
    <div class="practice-attempt-flow">
      ${latestAttempt ? `
        <div class="practice-attempt-summary">
          <strong>${latestAttempt.correct ? "Latest try is correct" : "Latest try needs another look"}</strong>
          <span>${history.length} ${plural(history.length, "try")} saved</span>
        </div>
      ` : ""}
      ${historyItems ? `<ol class="practice-attempt-list">${historyItems}</ol>` : ""}
      <div class="practice-attempt-actions">
        ${canRetry ? `<button class="choice-button" type="button" data-practice-retry="${question.id}">Try again</button>` : ""}
        ${canShowModel ? `
          <button class="choice-button" type="button" data-practice-model="${question.id}" aria-pressed="${modelVisible ? "true" : "false"}">
            ${modelVisible ? "Hide model" : "Show model"}
          </button>
        ` : ""}
      </div>
      ${modelVisible ? `
        <div class="practice-model">
          <strong>Model response</strong>
          <span>${question.sampleAnswer || question.correctFeedback}</span>
        </div>
      ` : ""}
    </div>
  `;
}

function renderPracticeOpenWorkspace(question) {
  const answer = getPracticeOpenAnswer(question);
  const visual = renderPracticeVisual(question);
  return `
    ${visual}
    <label class="practice-written-response">
      <span>Your reasoning</span>
      <textarea
        data-practice-open-writing="${question.id}"
        rows="8"
        placeholder="Write your steps, equation, or explanation here."
      >${escapeHTML(answer.responseText)}</textarea>
    </label>
  `;
}

function renderPracticeOpenAnswer(question) {
  const answer = getPracticeOpenAnswer(question);
  return `
    <div class="practice-open-response">
      <p>${question.responsePrompt || "Write or say your reasoning, then compare it with the sample response."}</p>
      <button class="action-button" type="button" data-practice-reveal="${question.id}" ${answer.reviewed ? "disabled" : ""}>
        ${answer.reviewed ? "Sample shown" : "Show sample response"}
      </button>
    </div>
  `;
}

function renderPracticeNumberLineAnswer(question, selectedValue) {
  const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
  const hasSelection = Number.isFinite(answer?.selectedTick);
  const submitted = Boolean(answer?.submitted);
  const prompt = hasSelection
    ? "You can move the point by clicking again, or submit your answer."
    : (question.responsePrompt || "Click the number line to choose a point.");

  return `
    <div class="practice-open-response practice-number-line-response">
      <p>${prompt}</p>
      <button
        class="action-button"
        type="button"
        data-practice-number-line-submit="${question.id}"
        ${hasSelection ? "" : "disabled"}
      >
        ${submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeOrderAnswer(question) {
  if (isGoDistanceQuestion(question) && getPracticePart(question) === "q2") {
    return renderGoDistanceQuestion2Answer(question);
  }

  const answer = getPracticeOrderAnswer(question);
  const targetCount = getPracticeOrderItems(question).length;
  const selectedCount = getPracticeOrderPlacedIds(question).length;
  const prompt = selectedCount === targetCount
    ? "Slide any runner if needed, then submit your answer."
    : (question.responsePrompt || "Drag each runner onto the number line.");

  return `
    <div class="practice-open-response practice-order-response">
      <p>${prompt}</p>
      <button
        class="action-button"
        type="button"
        data-practice-order-submit="${question.id}"
        ${selectedCount === targetCount ? "" : "disabled"}
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
      <button
        class="choice-button"
        type="button"
        data-practice-order-clear="${question.id}"
        ${selectedCount ? "" : "disabled"}
      >
        Clear order
      </button>
    </div>
  `;
}

function renderWhoRanFartherAnswer(question) {
  const answer = getWhoRanFartherAnswer(question);
  const complete = whoRanFartherIsFullyAnswered(question);
  return `
    <div class="practice-open-response practice-who-response">
      <p>${complete ? "Submit your answers, or revise any part first." : "Complete all five parts of 17.2."}</p>
      <button
        class="action-button"
        type="button"
        data-practice-who-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderGoDistanceQuestion2Answer(question) {
  const answer = getGoDistanceQuestion2Answer(question);
  const blanks = getGoDistanceQuestion2Blanks(question);

  return `
    <div class="practice-open-response practice-fill-response">
      <p>Type a fraction or mixed number that makes each statement true. Example: 3/4.</p>
      <div class="practice-fill-grid">
        ${blanks.map((blank) => `
          <label>
            <span>${escapeHTML(blank.name)}</span>
            <input
              type="text"
              value="${escapeHTML(answer.responses[blank.id] || "")}"
              data-practice-go-distance-input="${question.id}"
              data-go-distance-blank="${escapeHTML(blank.id)}"
            >
          </label>
        `).join("")}
      </div>
      <button
        class="action-button"
        type="button"
        data-practice-go-distance-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeProductComparisonAnswer(question) {
  const activePart = getPracticePart(question);
  const answer = activePart === "q3"
    ? getProductComparisonQuestion3Answer(question)
    : activePart === "q2"
    ? getProductComparisonQuestion2Answer(question)
    : getProductComparisonQuestion1Answer(question);
  const prompt = activePart === "q3"
    ? "Fill each denominator box, then submit."
    : activePart === "q2"
    ? "Fill each numerator box, then submit."
    : "Choose &lt; or &gt; from each dropdown, then submit.";

  return `
    <div class="practice-open-response practice-product-response">
      <p>${prompt}</p>
      <button
        class="action-button"
        type="button"
        data-practice-product-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeDiagramMatchAnswer(question) {
  const answer = getPracticeDiagramMatchAnswer(question);
  const complete = practiceDiagramMatchIsFullyAnswered(question);
  const selectedCount = getPracticeDiagramMatchDiagrams(question)
    .filter((diagram) => answer.matches[String(diagram.id)])
    .length;

  return `
    <div class="practice-open-response practice-diagram-match-response">
      <p>${complete ? "Submit your matches, or change any expression first." : `${selectedCount} of ${getPracticeDiagramMatchDiagrams(question).length} diagrams matched.`}</p>
      <button
        class="action-button"
        type="button"
        data-practice-diagram-match-submit="${question.id}"
        ${complete ? "" : "disabled"}
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeScaleLocationAnswer(question) {
  const answer = getPracticeScaleLocationAnswer(question);
  const complete = practiceScaleLocationVisibleIsFullyAnswered(question);
  const itemCount = getPracticeScaleLocationItems(question)
    .filter((item) => answer.zones[String(item.id)])
    .length;
  const blankCount = getPracticeScaleLocationBlanks(question)
    .filter((blank) => String(answer.blanks[String(blank.id)] || "").trim())
    .length;
  const comparisonCount = getPracticeScaleLocationVisibleComparisons(question)
    .filter((comparison) => answer.comparisons[String(comparison.id)])
    .length;
  const progressParts = [];
  const itemTotal = getPracticeScaleLocationItems(question).length;
  const blankTotal = getPracticeScaleLocationBlanks(question).length;
  const comparisonTotal = getPracticeScaleLocationVisibleComparisons(question).length;
  if (itemTotal) progressParts.push(`${itemCount} locations chosen`);
  if (blankTotal) progressParts.push(`${blankCount} boxes filled`);
  if (comparisonTotal) progressParts.push(`${comparisonCount} comparisons chosen`);
  const progressText = progressParts.length ? progressParts.join(", ") : "No entries yet";

  return `
    <div class="practice-open-response practice-scale-response">
      <p>${complete ? "Submit this question, or change any entry first." : `${progressText}.`}</p>
      <button
        class="action-button"
        type="button"
        data-practice-scale-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeShortAnswerSetAnswer(question) {
  const answer = getPracticeShortAnswerSetAnswer(question);
  const complete = practiceShortAnswerSetIsFullyAnswered(question);
  const answeredCount = getPracticeShortAnswerSetRows(question)
    .filter((row) => String(answer.values[String(row.id)] || "").trim())
    .length;

  return `
    <div class="practice-open-response practice-short-answer-response">
      <p>${complete ? "Submit your answers, or edit any row first." : `${answeredCount} of ${getPracticeShortAnswerSetRows(question).length} answers filled.`}</p>
      <button
        class="action-button"
        type="button"
        data-practice-short-answer-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeGroupMatchAnswer(question) {
  const answer = getPracticeGroupMatchAnswer(question);
  const complete = practiceGroupMatchIsFullyAnswered(question);
  const matchedCount = getPracticeGroupMatchGroups(question)
    .filter((group) => (answer.matches[String(group.id)] || []).length)
    .length;

  return `
    <div class="practice-open-response practice-group-match-response">
      <p>${complete ? "Submit your matches, or change any expression first." : `${matchedCount} of ${getPracticeGroupMatchGroups(question).length} number lines have a match.`}</p>
      <button
        class="action-button"
        type="button"
        data-practice-group-match-submit="${question.id}"
      >
        ${answer.submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticePartSwitcher(question) {
  if (!isPracticePartQuestion(question)) return "";
  const activePart = getPracticePart(question);
  let parts = [];
  if (isGoDistanceQuestion(question)) {
    parts = [
      { key: "q1", label: "Question 1", done: practiceOrderOnlyIsCorrect(question) },
      { key: "q2", label: "Question 2", done: goDistanceQuestion2IsCorrect(question) }
    ];
  } else if (isCompareExpressionsQuestion(question)) {
    parts = [
      { key: "q1", label: "Question 1", done: productComparisonQuestion1IsCorrect(question) },
      { key: "q2", label: "Question 2", done: productComparisonQuestion2IsCorrect(question) },
      { key: "q3", label: "Question 3", done: productComparisonQuestion3IsCorrect(question) }
    ];
  } else if (isWhoRanFartherQuestion(question)) {
    parts = [
      { key: "q1", label: "Q1 Farther", done: whoRanFartherPartIsComplete(question, "q1") },
      { key: "q2", label: "Q2 Not as Far", done: whoRanFartherPartIsComplete(question, "q2") },
      { key: "q3", label: "Q3 Order", done: whoRanFartherPartIsComplete(question, "q3") },
      { key: "q4", label: "Q4 Blanks", done: whoRanFartherPartIsComplete(question, "q4") },
      { key: "q5", label: "Q5 Missing", done: whoRanFartherPartIsComplete(question, "q5") }
    ];
  } else if (isSectionCCheckpointQuestion(question)) {
    parts = [
      { key: "q1", label: "Q1 Compare", done: practiceScaleLocationPartIsCorrect(question, "q1") },
      { key: "q2", label: "Q2 Find Q", done: practiceScaleLocationPartIsCorrect(question, "q2") }
    ];
  }
  const buttons = parts.map((part) => `
    <button
      class="practice-part-chip ${activePart === part.key ? "is-active" : ""}"
      type="button"
      data-practice-part="${question.id}"
      data-practice-part-key="${part.key}"
      aria-pressed="${activePart === part.key ? "true" : "false"}"
    >
      ${part.label}${part.done ? " ✓" : ""}
    </button>
  `).join("");

  return `<div class="practice-part-switcher" aria-label="Choose question">${buttons}</div>`;
}

function renderPracticeSourceRow(question) {
  if (!question.source && !isPracticePartQuestion(question)) return "";
  return `
    <div class="practice-source-row">
      ${question.source ? `<span class="practice-source">${question.source}</span>` : "<span></span>"}
      ${renderPracticePartSwitcher(question)}
    </div>
  `;
}

function renderPracticeShadeRectangleAnswer(question, selectedValue) {
  const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
  const selectedPieces = Array.isArray(answer?.selectedPieces) ? answer.selectedPieces : [];
  const submitted = Boolean(answer?.submitted);
  const prompt = selectedPieces.length
    ? "Click a shaded part again to unshade it, or submit your answer."
    : (question.responsePrompt || "Click parts of the rectangle to shade them.");

  return `
    <div class="practice-open-response practice-shade-response">
      <p>${prompt}</p>
      <button
        class="action-button"
        type="button"
        data-practice-shade-submit="${question.id}"
        ${selectedPieces.length ? "" : "disabled"}
      >
        ${submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeAreaGridAnswer(question, selectedValue) {
  const answer = selectedValue && typeof selectedValue === "object" ? selectedValue : null;
  const selectedCells = Array.isArray(answer?.selectedCells) ? answer.selectedCells : [];
  const submitted = Boolean(answer?.submitted);
  const prompt = selectedCells.length
    ? "Click a shaded piece again to unshade it, or submit your answer."
    : (question.responsePrompt || "Click the overlap pieces in the area grid.");

  return `
    <div class="practice-open-response practice-area-grid-response">
      <p>${prompt}</p>
      <button
        class="action-button"
        type="button"
        data-practice-area-submit="${question.id}"
        ${selectedCells.length ? "" : "disabled"}
      >
        ${submitted ? "Submit again" : "Submit"}
      </button>
    </div>
  `;
}

function renderPracticeMultiAnswer(question, selectedValue) {
  const answer = getPracticeMultiAnswer(question);
  const selectedCount = answer.selectedValues.length;
  const prompt = selectedCount
    ? "Change your selections if needed, then submit your answer."
    : (question.responsePrompt || "Select all choices that apply.");

  return `
    <div class="practice-answer-stack">
      <div class="practice-answer-grid" role="group" aria-label="Answers for ${question.skill}">
        ${question.choices.map((choice) => renderPracticeChoice(question, choice, selectedValue)).join("")}
      </div>
      <div class="practice-open-response practice-multi-response">
        <p>${prompt}</p>
        <button
          class="action-button"
          type="button"
          data-practice-multi-submit="${question.id}"
          ${selectedCount ? "" : "disabled"}
        >
          ${answer.submitted ? "Submit again" : "Submit"}
        </button>
      </div>
    </div>
  `;
}

function renderPracticeQuestion(question, topic) {
  const selectedValue = state.practiceAnswers[question.id] || (question.responseType === "multi" ? { selectedValues: [], submitted: false } : "");
  const source = renderPracticeSourceRow(question);
  const visualArea = question.responseType === "open"
    ? renderPracticeOpenWorkspace(question)
    : renderPracticeVisual(question);
  const answerArea = question.responseType === "numberLinePoint"
    ? renderPracticeNumberLineAnswer(question, selectedValue)
    : question.responseType === "numberLineOrder"
    ? renderPracticeOrderAnswer(question)
    : question.responseType === "whoRanFarther"
    ? renderWhoRanFartherAnswer(question)
    : question.responseType === "productComparisonBlanks"
    ? renderPracticeProductComparisonAnswer(question)
    : question.responseType === "diagramMatch"
    ? renderPracticeDiagramMatchAnswer(question)
    : question.responseType === "scaleFactorLocation"
    ? renderPracticeScaleLocationAnswer(question)
    : question.responseType === "shortAnswerSet"
    ? renderPracticeShortAnswerSetAnswer(question)
    : question.responseType === "coordinatePlot"
    ? renderPracticeCoordinatePlotAnswer(question)
    : question.responseType === "groupMatch"
    ? renderPracticeGroupMatchAnswer(question)
    : question.responseType === "shadeRectangleParts"
    ? renderPracticeShadeRectangleAnswer(question, selectedValue)
    : question.responseType === "shadeAreaOverlap"
    ? renderPracticeAreaGridAnswer(question, selectedValue)
    : question.responseType === "open"
    ? renderPracticeOpenAnswer(question)
    : question.responseType === "regionChoice"
    ? renderPracticeRegionAnswer(question)
    : question.responseType === "multi"
    ? renderPracticeMultiAnswer(question, selectedValue)
    : `
      <div class="practice-answer-grid" role="group" aria-label="Answers for ${question.skill}">
        ${question.choices.map((choice) => renderPracticeChoice(question, choice, selectedValue)).join("")}
      </div>
    `;
  return `
    <article class="practice-card" data-practice-card="${question.id}">
      <div class="practice-card-header">
        <span class="practice-skill">${question.skill}</span>
        <h3>${question.prompt}</h3>
        ${source}
      </div>
      <div class="practice-layout">
        <div class="practice-visual">${visualArea}</div>
        <div class="practice-work">
          ${answerArea}
          ${renderPracticeFeedback(question, selectedValue)}
          ${renderPracticeHints(question)}
          ${renderPracticeAttemptFlow(question)}
        </div>
      </div>
    </article>
  `;
}

function renderPracticeFilterButton(topic, focus, label, count, isActive) {
  return `
    <button
      class="practice-filter-chip${isActive ? " is-active" : ""}"
      type="button"
      data-practice-filter-topic="${topic}"
      data-practice-focus="${focus}"
      aria-pressed="${isActive ? "true" : "false"}"
    >
      <span>${label}</span>
      <small>${count}</small>
    </button>
  `;
}

function renderPracticeLessonButton(topic, lesson, label, count, isActive) {
  return `
    <button
      class="practice-filter-chip${isActive ? " is-active" : ""}"
      type="button"
      data-practice-filter-topic="${topic}"
      data-practice-lesson="${lesson}"
      aria-pressed="${isActive ? "true" : "false"}"
    >
      <span>${label}</span>
      <small>${count}</small>
    </button>
  `;
}

function renderPracticeOrganizer(topic, visibleQuestions) {
  const panel = qs(`[data-practice-topic="${topic}"]`);
  if (!panel) return;

  let organizer = panel.querySelector(`[data-practice-organizer="${topic}"]`);
  if (!organizer) {
    organizer = document.createElement("div");
    organizer.className = "practice-organizer";
    organizer.dataset.practiceOrganizer = topic;
    const header = panel.querySelector(".practice-header");
    if (header) {
      header.insertAdjacentElement("afterend", organizer);
    } else {
      panel.prepend(organizer);
    }
  }

  const filter = normalizePracticeFilterForUnitFocus(topic);
  const baseQuestions = getPracticeBaseQuestions(topic);
  const missedQuestions = baseQuestions.filter(practiceQuestionIsMissed);
  const lessonScopeQuestions = filter.focus === "missed" ? missedQuestions : baseQuestions;
  const lessonCounts = new Map();

  lessonScopeQuestions.forEach((question) => {
    const lesson = normalizePracticeLesson(question.lesson);
    lessonCounts.set(lesson, (lessonCounts.get(lesson) || 0) + 1);
  });

  const lessonButtons = [
    renderPracticeLessonButton(topic, "all", "All lessons", lessonScopeQuestions.length, filter.lesson === "all"),
    ...[...lessonCounts.entries()]
      .sort((left, right) => {
        const [leftLesson] = left;
        const [rightLesson] = right;
        const leftNumber = Number(leftLesson);
        const rightNumber = Number(rightLesson);
        if (Number.isFinite(leftNumber) && Number.isFinite(rightNumber)) return leftNumber - rightNumber;
        if (Number.isFinite(leftNumber)) return -1;
        if (Number.isFinite(rightNumber)) return 1;
        return leftLesson.localeCompare(rightLesson);
      })
      .map(([lesson, count]) => renderPracticeLessonButton(
        topic,
        lesson,
        formatPracticeLessonLabel(lesson),
        count,
        filter.lesson === lesson
      ))
  ].join("");

  const cardButtons = [
    renderPracticeFilterButton(topic, "all", "All cards", baseQuestions.length, filter.focus === "all"),
    renderPracticeFilterButton(topic, "missed", "Missed only", missedQuestions.length, filter.focus === "missed")
  ].join("");

  organizer.innerHTML = `
    <div class="practice-organizer-row">
      <span class="practice-organizer-label">Cards</span>
      <div class="practice-filter-group">${cardButtons}</div>
    </div>
    <div class="practice-organizer-row">
      <span class="practice-organizer-label">Lessons</span>
      <div class="practice-filter-group">${lessonButtons}</div>
    </div>
  `;
}

function renderPracticeSet(topic) {
  const questions = getPracticeVisibleQuestions(topic);
  const list = qs(`#${topic}PracticeList`);
  if (!list) return;

  renderPracticeOrganizer(topic, questions);

  const answeredCount = questions.filter(practiceQuestionIsAnswered).length;
  const correctCount = questions.filter(practiceQuestionIsCorrect).length;
  const missedCount = questions.filter(practiceQuestionIsMissed).length;
  const status = qs(`#${topic}PracticeStatus`);
  if (status) {
    status.textContent = `${correctCount} of ${questions.length} complete | ${answeredCount} answered | ${missedCount} to review`;
  }

  list.innerHTML = questions.length
    ? questions.map((question) => renderPracticeQuestion(question, topic)).join("")
    : `<div class="practice-empty">No cards match this practice view yet.</div>`;
}

function renderPracticeSets() {
  Object.keys(practiceSets).forEach(renderPracticeSet);
}

function renderFractionSegmentBar(numerator, denominator, options = {}) {
  const {
    className = "",
    highlight = "",
    ariaLabel = `${numerator} of ${denominator} pieces shaded`
  } = options;
  const cells = Array.from({ length: denominator }, (_, index) => {
    const shaded = index < numerator;
    const countHighlight = highlight === "numerator" && shaded ? " is-count-highlight" : "";
    const sizeHighlight = highlight === "denominator" ? " is-size-highlight" : "";
    return `<span class="fraction-segment${shaded ? " is-shaded" : ""}${countHighlight}${sizeHighlight}"></span>`;
  }).join("");

  return `
    <div class="fraction-segment-bar ${className}" style="--fraction-parts: ${denominator};" aria-label="${ariaLabel}">
      ${cells}
    </div>
  `;
}

function renderUnequalPieces() {
  return `
    <div class="unequal-piece-bar" aria-label="Uneven pieces are not fair fraction pieces">
      <span style="--piece-grow: 1.2;"></span>
      <span style="--piece-grow: 0.55;"></span>
      <span style="--piece-grow: 1.75;"></span>
      <span style="--piece-grow: 0.9;"></span>
    </div>
  `;
}

function renderFractionWholeDemo() {
  const parts = state.fractionWholeParts;
  const pieceNameText = fractionPieceName(parts, parts);

  qs("#fractionWholeEquation").innerHTML = `
    <span class="math-token"><span class="whole">1 whole</span></span>
    <span class="math-equals">split into</span>
    <span class="math-token">${parts} equal ${pieceNameText}</span>
  `;

  qs("#fractionWholeBoard").innerHTML = `
    <div class="fraction-compare-grid">
      <article class="fraction-visual-card">
        <h3>Equal pieces</h3>
        ${renderFractionSegmentBar(1, parts, {
          highlight: "denominator",
          ariaLabel: `One whole split into ${parts} equal pieces`
        })}
        <p>Every piece has the same size, so each one can be called one ${fractionPieceName(parts, 1)}.</p>
      </article>
      <article class="fraction-visual-card is-warning">
        <h3>Uneven pieces</h3>
        ${renderUnequalPieces()}
        <p>The pieces have different sizes, so counting pieces would not be fair.</p>
      </article>
    </div>
  `;

  qs("#fractionWholeMessage").textContent = `The denominator ${parts} means the same whole is cut into ${parts} equal ${pieceNameText}.`;
  setActive("[data-whole-parts]", String(parts), "wholeParts");
}

function renderInteractiveFraction(numerator, denominator) {
  return `
    <div class="interactive-fraction" aria-label="${numerator} over ${denominator}">
      ${fractionPartButton("numerator", String(numerator), `${numerator} shaded ${fractionPieceName(denominator, numerator)}`)}
      ${fractionPartButton("denominator", String(denominator), `${denominator} equal pieces in the whole`)}
    </div>
  `;
}

function renderFractionMeaning() {
  const denominator = clampInteger(state.fractionDenominator, 1, 12);
  const numerator = clampInteger(state.fractionNumerator, 0, denominator);
  state.fractionDenominator = denominator;
  state.fractionNumerator = numerator;

  const numeratorInput = qs("#fractionNumeratorInput");
  const denominatorInput = qs("#fractionDenominatorInput");
  if (numeratorInput) numeratorInput.value = numerator;
  if (denominatorInput) denominatorInput.value = denominator;

  qs("#fractionMeaningEquation").innerHTML = `
    <span class="math-token">${fractionHTML(numerator, denominator)}</span>
    <span class="math-equals">means</span>
    <span class="math-token">${numerator} of ${denominator} equal pieces</span>
  `;

  qs("#fractionMeaningBoard").innerHTML = `
    <div class="fraction-meaning-layout">
      <div class="fraction-meaning-card">
        <span class="form-label">Fraction</span>
        ${renderInteractiveFraction(numerator, denominator)}
      </div>
      <div class="fraction-meaning-card">
        <span class="form-label">Picture</span>
        ${renderFractionSegmentBar(numerator, denominator, {
          className: "is-large",
          highlight: state.fractionMeaningHighlight,
          ariaLabel: `${numerator} of ${denominator} equal pieces shaded`
        })}
      </div>
    </div>
  `;

  const shadedText = `${numerator} ${fractionPieceName(denominator, numerator)}`;
  const wholeText = `${denominator} ${fractionPieceName(denominator, denominator)}`;
  qs("#fractionMeaningMessage").textContent = `${numerator}/${denominator} uses ${wholeText} to make one whole, and ${shadedText} are shaded.`;
}

function renderEquivalentFractions() {
  const base = equivalentFractionData[state.equivalentFractionKey];
  const multiplier = state.equivalentMultiplier;
  const renamedNumerator = base.numerator * multiplier;
  const renamedDenominator = base.denominator * multiplier;

  qs("#equivalentFractionEquation").innerHTML = `
    <span class="math-token">${fractionHTML(base.numerator, base.denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${fractionHTML(renamedNumerator, renamedDenominator)}</span>
  `;

  qs("#equivalentFractionBoard").innerHTML = `
    <div class="equivalent-bars">
      <article class="fraction-visual-card">
        <h3>Start name</h3>
        ${renderFractionSegmentBar(base.numerator, base.denominator, {
          className: "is-large",
          ariaLabel: `${base.numerator} of ${base.denominator} equal pieces shaded`
        })}
        <div class="fraction-card-label">${fractionHTML(base.numerator, base.denominator)}</div>
      </article>
      <article class="fraction-visual-card">
        <h3>Renamed pieces</h3>
        ${renderFractionSegmentBar(renamedNumerator, renamedDenominator, {
          className: "is-large is-renamed",
          ariaLabel: `${renamedNumerator} of ${renamedDenominator} equal pieces shaded`
        })}
        <div class="fraction-card-label">${fractionHTML(renamedNumerator, renamedDenominator)}</div>
      </article>
    </div>
  `;

  qs("#equivalentFractionMessage").textContent = `Each original piece is split into ${multiplier} smaller pieces, so ${base.numerator}/${base.denominator} is renamed as ${renamedNumerator}/${renamedDenominator}. The shaded amount stays fixed.`;
  setActive("[data-equivalent-fraction]", state.equivalentFractionKey, "equivalentFraction");
  setActive("[data-equivalent-multiplier]", String(multiplier), "equivalentMultiplier");
}

function renderSharedWholes(total, groups) {
  return Array.from({ length: total }, (_, wholeIndex) => {
    const pieces = Array.from({ length: groups }, (_, groupIndex) => `
      <span class="shared-whole-piece owner-${groupIndex % 4}">${groupIndex + 1}</span>
    `).join("");
    return `
      <div class="shared-whole-row">
        <span class="shared-whole-label">Whole ${wholeIndex + 1}</span>
        <div class="shared-whole-bar" style="--fraction-parts: ${groups};">
          ${pieces}
        </div>
      </div>
    `;
  }).join("");
}

function renderSharePlates(total, groups, options = {}) {
  const {
    showShareAmount = true
  } = options;

  return Array.from({ length: groups }, (_, groupIndex) => {
    const pieces = Array.from({ length: total }, () => `
      <span class="share-piece owner-${groupIndex % 4}">1/${groups}</span>
    `).join("");
    return `
      <div class="share-plate">
        <strong>Student ${groupIndex + 1}</strong>
        <div class="share-pieces">${pieces}</div>
        ${showShareAmount ? `<span>${fractionHTML(total, groups)}</span>` : ""}
      </div>
    `;
  }).join("");
}

function sharingAmountLabel(total, groups) {
  const mixed = mixedNumberText(total, groups);
  return mixed === `${total}/${groups}` ? `${total}/${groups}` : `${total}/${groups} or ${mixed}`;
}

function sharingAmountHTML(total, groups) {
  const improper = fractionHTML(total, groups);
  const mixed = mixedNumberHTML(total, groups);
  if (mixed === improper) {
    return improper;
  }
  return `${improper} <span class="math-equals">=</span> ${mixed}`;
}

function getSharingDescription(total, groups, object = "sandwich") {
  return `${total} ${plural(total, object, `${object}es`)} shared by ${groups} ${plural(groups, "person", "people")}`;
}

function renderSharingFormCards(total, groups, object = "sandwich") {
  const isMoreThanOne = total > groups;
  const isWhole = total % groups === 0;
  const mixedLabel = isWhole
    ? `${total / groups} ${plural(total / groups, "whole")} each`
    : isMoreThanOne
      ? mixedNumberHTML(total, groups)
      : "less than 1 whole";

  return `
    <div class="sharing-form-grid">
      <article class="sharing-form-card">
        <span>Story</span>
        <strong>${getSharingDescription(total, groups, object)}</strong>
      </article>
      <article class="sharing-form-card">
        <span>Division</span>
        <strong>${total} ÷ ${groups}</strong>
      </article>
      <article class="sharing-form-card">
        <span>Fraction</span>
        <strong>${fractionHTML(total, groups)}</strong>
      </article>
      <article class="sharing-form-card">
        <span>${isMoreThanOne || isWhole ? "Mixed / whole form" : "Size check"}</span>
        <strong>${mixedLabel}</strong>
      </article>
    </div>
  `;
}

function renderSharingLab(total, groups, options = {}) {
  const {
    object = "sandwich",
    compact = false,
    emphasizeForms = true,
    showShareAmount = true
  } = options;
  const wholeTitle = `${total} ${plural(total, object, `${object}es`)} cut into ${groups} equal ${plural(groups, "share")}`;
  const shareTitle = showShareAmount
    ? `Each person gets ${sharingAmountLabel(total, groups)}`
    : "Each person's share";

  return `
    <div class="sharing-lab-board ${compact ? "is-compact" : ""}">
      ${emphasizeForms ? renderSharingFormCards(total, groups, object) : ""}
      <div class="sharing-model-grid">
        <article class="fraction-visual-card sharing-visual-card">
          <h3>${wholeTitle}</h3>
          <div class="shared-wholes">${renderSharedWholes(total, groups)}</div>
        </article>
        <article class="fraction-visual-card sharing-visual-card">
          <h3>${shareTitle}</h3>
          <div class="share-plates">${renderSharePlates(total, groups, { showShareAmount })}</div>
        </article>
      </div>
    </div>
  `;
}

function renderSharingIntro() {
  const preset = sharingPresetData[state.sharingPresetKey] || sharingPresetData["3/4"];
  const { total, groups, object } = preset;
  state.sharingTotal = total;
  state.sharingGroups = groups;

  const equation = qs("#sharingEquation");
  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${total} ${plural(total, object, `${object}es`)}</span>
      <span class="math-equals">shared by</span>
      <span class="math-token">${groups} ${plural(groups, "person", "people")}</span>
    `;
  }

  const board = qs("#sharingBoard");
  if (board) {
    board.innerHTML = renderSharingLab(total, groups, { object });
  }

  const message = qs("#sharingMessage");
  if (message) {
    message.textContent = `Cut each ${object} into ${groups} equal pieces. One person gets 1/${groups} from each ${object}, so one fair share is ${total}/${groups}.`;
  }

  setActive("[data-sharing-preset]", state.sharingPresetKey, "sharingPreset");
}

function renderDivisionNames() {
  const total = state.sharingTotal;
  const groups = state.sharingGroups;
  const equation = qs("#divisionNamesEquation");
  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${total} ÷ ${groups}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${fractionHTML(total, groups)}</span>
    `;
  }

  const board = qs("#divisionNamesBoard");
  if (board) {
    board.innerHTML = `
      <div class="division-names-stack">
        ${renderSharingFormCards(total, groups)}
        <div class="sharing-focus-card">
          <strong>Same amount, different names</strong>
          <p>The division expression tells the action: share ${total} things into ${groups} equal groups. The fraction tells the size of one share: ${total}/${groups}.</p>
        </div>
      </div>
    `;
  }

  const message = qs("#divisionNamesMessage");
  if (message) {
    message.textContent = `${total} ÷ ${groups} and ${total}/${groups} should point to the same picture. The equation is a shortcut for the sharing story.`;
  }
}

function renderMixedSharing() {
  const data = mixedSharingData[state.mixedSharingKey] || mixedSharingData["5/2"];
  const { total, groups, object } = data;
  const whole = Math.floor(total / groups);
  const leftover = total % groups;

  const equation = qs("#mixedSharingEquation");
  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${fractionHTML(total, groups)}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${mixedNumberHTML(total, groups)}</span>
    `;
  }

  const board = qs("#mixedSharingBoard");
  if (board) {
    board.innerHTML = renderSharingLab(total, groups, { object });
  }

  const message = qs("#mixedSharingMessage");
  if (message) {
    const leftoverText = leftover === 0
      ? "with no leftover fraction"
      : `and ${leftover}/${groups} more`;
    message.textContent = `${total}/${groups} means each person gets ${whole} whole ${plural(whole, object, `${object}es`)} ${leftoverText}. That is why ${total}/${groups} and ${mixedNumberText(total, groups)} name the same amount.`;
  }

  setActive("[data-mixed-sharing]", state.mixedSharingKey, "mixedSharing");
}

function renderTrySharing() {
  const total = clampInteger(state.sharingTotal, 1, 9);
  const groups = clampInteger(state.sharingGroups, 2, 8);
  state.sharingTotal = total;
  state.sharingGroups = groups;

  const totalInput = qs("#customSharingTotalInput");
  const groupsInput = qs("#customSharingGroupsInput");
  if (totalInput) totalInput.value = total;
  if (groupsInput) groupsInput.value = groups;

  const equation = qs("#trySharingEquation");
  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${total} ÷ ${groups}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${sharingAmountHTML(total, groups)}</span>
    `;
  }

  const board = qs("#trySharingBoard");
  if (board) {
    board.innerHTML = renderSharingLab(total, groups, { object: "sandwich" });
  }

  const message = qs("#trySharingMessage");
  if (message) {
    const comparison = total % groups === 0
      ? `exactly ${total / groups} ${plural(total / groups, "whole")}`
      : total < groups
        ? "less than one whole"
        : "more than one whole";
    const reason = total < groups
      ? "less than"
      : total === groups
        ? "the same as"
        : "greater than";
    message.textContent = `${total} ÷ ${groups} = ${total}/${groups}. Since ${total} is ${reason} ${groups}, each fair share is ${comparison}.`;
  }
}

function renderFractionFoundationsTeachMe() {
  renderSharingIntro();
  renderDivisionNames();
  renderFractionMeaning();
  renderMixedSharing();
  renderTrySharing();
}

function getFractionOfWholeModel(key) {
  return fractionOfWholeData[key] || fractionOfWholeData.twoThirdsOf6;
}

function fractionOfWholeResult(model) {
  return model.whole / model.denominator * model.numerator;
}

function fractionOfWholeGroupSize(model) {
  return model.whole / model.denominator;
}

function fractionOfWholeItemPlural(model, count = model.whole) {
  return model.itemPlural || plural(count, model.itemName);
}

function renderFractionSetGroups(model, selectedGroups = model.numerator) {
  const groupSize = fractionOfWholeGroupSize(model);
  return Array.from({ length: model.denominator }, (_, groupIndex) => {
    const selected = groupIndex < selectedGroups;
    const items = Array.from({ length: groupSize }, (_, itemIndex) => `
      <span class="fraction-set-item" aria-label="${model.itemName} ${groupIndex * groupSize + itemIndex + 1}"></span>
    `).join("");
    return `
      <div class="fraction-set-group ${selected ? "is-selected" : ""}">
        <span class="set-group-label">Group ${groupIndex + 1}</span>
        <div class="fraction-set-items">${items}</div>
      </div>
    `;
  }).join("");
}

function renderFractionOfSummaryCards(model, selectedGroups = model.numerator) {
  const groupSize = fractionOfWholeGroupSize(model);
  const result = groupSize * selectedGroups;
  return `
    <div class="fraction-of-summary-grid">
      <article class="sharing-form-card">
        <span>Whole number</span>
        <strong>${model.whole} ${fractionOfWholeItemPlural(model)}</strong>
      </article>
      <article class="sharing-form-card">
        <span>Split into</span>
        <strong>${model.denominator} equal ${plural(model.denominator, "group")}</strong>
      </article>
      <article class="sharing-form-card">
        <span>Take</span>
        <strong>${selectedGroups} of ${model.denominator} ${plural(model.denominator, "group")}</strong>
      </article>
      <article class="sharing-form-card">
        <span>Answer</span>
        <strong>${result} ${fractionOfWholeItemPlural(model, result)}</strong>
      </article>
    </div>
  `;
}

function renderFractionOfWholeModel(model, selectedGroups = model.numerator) {
  return `
    <div class="fraction-of-model">
      ${renderFractionOfSummaryCards(model, selectedGroups)}
      <div class="fraction-set-stage">
        <div>
          <h3>${model.context}</h3>
          <p>${model.denominator} equal groups means each group has ${fractionOfWholeGroupSize(model)} ${fractionOfWholeItemPlural(model, fractionOfWholeGroupSize(model))}.</p>
        </div>
        <div class="fraction-set-groups" style="--set-group-count: ${model.denominator};">
          ${renderFractionSetGroups(model, selectedGroups)}
        </div>
      </div>
    </div>
  `;
}

function renderUnitFractionOfNumber() {
  const model = getFractionOfWholeModel(state.unitFractionOfKey);
  const groupSize = fractionOfWholeGroupSize(model);

  qs("#unitFractionOfEquation").innerHTML = `
    <span class="math-token">${fractionHTML(1, model.denominator)} of ${model.whole}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${model.whole} ÷ ${model.denominator}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${groupSize}</span>
  `;

  qs("#unitFractionOfBoard").innerHTML = renderFractionOfWholeModel(model, 1);
  qs("#unitFractionOfMessage").textContent = `To find 1/${model.denominator} of ${model.whole}, split ${model.whole} into ${model.denominator} equal groups. One group has ${groupSize}.`;
  setActive("[data-unit-fraction-of]", state.unitFractionOfKey, "unitFractionOf");
}

function renderNonUnitFractionOfNumber() {
  const model = getFractionOfWholeModel(state.nonUnitFractionOfKey);
  const groupSize = fractionOfWholeGroupSize(model);
  const result = fractionOfWholeResult(model);

  qs("#nonUnitFractionOfEquation").innerHTML = `
    <span class="math-token">${fractionHTML(model.numerator, model.denominator)} of ${model.whole}</span>
    <span class="math-equals">=</span>
    <span class="math-token">(${model.whole} ÷ ${model.denominator}) × ${model.numerator}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${result}</span>
  `;

  qs("#nonUnitFractionOfBoard").innerHTML = renderFractionOfWholeModel(model, model.numerator);
  qs("#nonUnitFractionOfMessage").textContent = `One ${fractionPieceName(model.denominator, 1)} of ${model.whole} is ${groupSize}. The numerator ${model.numerator} says to take ${model.numerator} of those groups, so the amount is ${result}.`;
  setActive("[data-nonunit-fraction-of]", state.nonUnitFractionOfKey, "nonunitFractionOf");
}

function renderMultiplicationPath() {
  const model = getFractionOfWholeModel(state.multiplyPathKey);
  const groupSize = fractionOfWholeGroupSize(model);
  const result = fractionOfWholeResult(model);

  qs("#multiplyPathEquation").innerHTML = `
    <span class="math-token">${fractionHTML(model.numerator, model.denominator)} × ${model.whole}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${model.whole} ÷ ${model.denominator} × ${model.numerator}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${result}</span>
  `;

  qs("#multiplyPathBoard").innerHTML = `
    <div class="fraction-path-layout">
      <div class="fraction-path-cards">
        <article class="path-card">
          <span>Step 1</span>
          <strong>${model.whole} ÷ ${model.denominator} = ${groupSize}</strong>
          <p>The denominator splits the whole number into equal groups.</p>
        </article>
        <article class="path-card">
          <span>Step 2</span>
          <strong>${groupSize} × ${model.numerator} = ${result}</strong>
          <p>The numerator tells how many groups to count.</p>
        </article>
        <article class="path-card is-result">
          <span>Product</span>
          <strong>${result}</strong>
          <p>${fractionHTML(model.numerator, model.denominator)} of ${model.whole} is ${result}.</p>
        </article>
      </div>
      <div class="fraction-set-stage">
        <h3>Watch the same two steps in the picture</h3>
        <div class="fraction-set-groups" style="--set-group-count: ${model.denominator};">
          ${renderFractionSetGroups(model, model.numerator)}
        </div>
      </div>
    </div>
  `;

  qs("#multiplyPathMessage").textContent = `${fractionText(model)} of ${model.whole} can be read as ${model.whole} divided by ${model.denominator}, then multiplied by ${model.numerator}.`;
  setActive("[data-multiply-path]", state.multiplyPathKey, "multiplyPath");
}

function renderExpressionChoice(focus, html, description) {
  const active = state.expressionMatchFocus === focus ? " is-active" : "";
  const pressed = state.expressionMatchFocus === focus ? "true" : "false";
  return `
    <button class="expression-choice${active}" type="button" data-expression-focus="${focus}" aria-pressed="${pressed}">
      <strong>${html}</strong>
      <span>${description}</span>
    </button>
  `;
}

function renderSameDiagramExpressions() {
  const model = getFractionOfWholeModel(state.expressionMatchKey);
  const groupSize = fractionOfWholeGroupSize(model);
  const result = fractionOfWholeResult(model);
  const focusMessages = {
    fraction: `${fractionText(model)} × ${model.whole} says: take ${model.numerator} out of ${model.denominator} equal groups of ${model.whole}.`,
    commutative: `${model.whole} × ${fractionText(model)} names the same product. The factors switched places, but the amount stayed ${result}.`,
    divideFirst: `${model.whole} ÷ ${model.denominator} finds one equal group. Multiplying by ${model.numerator} counts the selected groups.`,
    groupCount: `${model.numerator} × ${groupSize} says there are ${model.numerator} selected groups, with ${groupSize} in each group.`
  };

  qs("#sameDiagramEquation").innerHTML = `
    <span class="math-token">${fractionHTML(model.numerator, model.denominator)} × ${model.whole}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${result}</span>
  `;

  qs("#sameDiagramBoard").innerHTML = `
    <div class="same-diagram-layout">
      <div class="fraction-set-stage">
        <h3>One picture</h3>
        <div class="fraction-set-groups" style="--set-group-count: ${model.denominator};">
          ${renderFractionSetGroups(model, model.numerator)}
        </div>
      </div>
      <div class="expression-choice-grid">
        ${renderExpressionChoice("fraction", `${fractionHTML(model.numerator, model.denominator)} × ${model.whole}`, "fraction of a number")}
        ${renderExpressionChoice("commutative", `${model.whole} × ${fractionHTML(model.numerator, model.denominator)}`, "same factors, switched order")}
        ${renderExpressionChoice("divideFirst", `(${model.whole} ÷ ${model.denominator}) × ${model.numerator}`, "divide first, then count groups")}
        ${renderExpressionChoice("groupCount", `${model.numerator} × ${groupSize}`, "selected groups times group size")}
      </div>
      <div class="sharing-focus-card">
        <strong>${state.expressionMatchFocus ? "Why this expression fits" : "Pick an expression"}</strong>
        <p>${focusMessages[state.expressionMatchFocus] || "Choose a card to connect its expression to the diagram."}</p>
      </div>
    </div>
  `;

  qs("#sameDiagramMessage").textContent = `All four expression cards describe the same selected groups, so they all land on ${result}.`;
  setActive("[data-expression-match]", state.expressionMatchKey, "expressionMatch");
}

function getFractionAreaModel(key) {
  return fractionAreaData[key] || fractionAreaData.sixByTwoThirds;
}

function getMixedAreaModel(key) {
  return mixedAreaData[key] || mixedAreaData.twoByThreeTwoFifths;
}

function areaProductNumerator(model) {
  return model.length * model.numerator;
}

function areaProductHTML(numerator, denominator) {
  if (numerator % denominator === 0) {
    return String(numerator / denominator);
  }

  if (numerator > denominator) {
    return `${fractionHTML(numerator, denominator)} <span class="math-equals">=</span> ${mixedNumberHTML(numerator, denominator)}`;
  }

  return fractionHTML(numerator, denominator);
}

function areaProductText(numerator, denominator) {
  if (numerator % denominator === 0) {
    return String(numerator / denominator);
  }

  if (numerator > denominator) {
    return `${numerator}/${denominator} or ${mixedNumberText(numerator, denominator)}`;
  }

  return `${numerator}/${denominator}`;
}

function mixedSideHTML(model) {
  return `${model.whole} ${fractionHTML(model.numerator, model.denominator)}`;
}

function mixedSideText(model) {
  return `${model.whole} ${model.numerator}/${model.denominator}`;
}

function renderAreaGrid(length, numerator, denominator) {
  const totalRows = Math.ceil(numerator / denominator) * denominator;
  const cells = [];
  for (let row = 0; row < totalRows; row += 1) {
    for (let column = 0; column < length; column += 1) {
      const shaded = row < numerator;
      const boundary = (row + 1) % denominator === 0 ? " is-whole-boundary" : "";
      cells.push(`
        <span class="area-cell${shaded ? " is-shaded" : ""}${boundary}" aria-label="${shaded ? "shaded" : "unshaded"} area piece"></span>
      `);
    }
  }

  return `
    <div class="area-grid" style="--area-cols: ${length}; --area-rows: ${totalRows};" aria-label="${length} by ${numerator}/${denominator} area model">
      ${cells.join("")}
    </div>
  `;
}

function renderAreaSummaryCards(model, options = {}) {
  const productNumerator = areaProductNumerator(model);
  const areaSummary = options.areaSummaryMode === "expression"
    ? `${model.length} x ${fractionHTML(model.numerator, model.denominator)} sq units`
    : `${areaProductHTML(productNumerator, model.denominator)} sq units`;
  return `
    <div class="area-summary-grid">
      <article class="sharing-form-card">
        <span>Length</span>
        <strong>${model.length} units</strong>
      </article>
      <article class="sharing-form-card">
        <span>Fractional side</span>
        <strong>${fractionHTML(model.numerator, model.denominator)} unit</strong>
      </article>
      <article class="sharing-form-card">
        <span>Small pieces</span>
        <strong>${productNumerator} ${fractionPieceName(model.denominator, productNumerator)} of a square unit</strong>
      </article>
      <article class="sharing-form-card">
        <span>Area</span>
        <strong>${areaSummary}</strong>
      </article>
    </div>
  `;
}

function renderFractionAreaModel(model, options = {}) {
  return `
    <div class="fraction-area-model">
      ${renderAreaSummaryCards(model, options)}
      <div class="area-stage">
        <div>
          <h3>${model.context}</h3>
          <p>Each full square unit is split into ${model.denominator} equal horizontal pieces. The shaded height uses ${model.numerator} of those pieces.</p>
        </div>
        ${renderAreaGrid(model.length, model.numerator, model.denominator)}
      </div>
    </div>
  `;
}

function renderFractionArea() {
  const model = getFractionAreaModel(state.fractionAreaKey);
  const productNumerator = areaProductNumerator(model);

  qs("#fractionAreaEquation").innerHTML = `
    <span class="math-token">${model.length} × ${fractionHTML(model.numerator, model.denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${areaProductHTML(productNumerator, model.denominator)}</span>
  `;

  qs("#fractionAreaBoard").innerHTML = renderFractionAreaModel(model);
  qs("#fractionAreaMessage").textContent = `${model.length} columns times ${model.numerator}/${model.denominator} of a unit high makes ${productNumerator} pieces of size 1/${model.denominator}. The area is ${areaProductText(productNumerator, model.denominator)} square units.`;
  setActive("[data-fraction-area]", state.fractionAreaKey, "fractionArea");
}

function renderGreaterThanOneArea() {
  const model = getFractionAreaModel(state.greaterAreaKey);
  const productNumerator = areaProductNumerator(model);
  const whole = Math.floor(model.numerator / model.denominator);
  const leftover = model.numerator % model.denominator;

  qs("#greaterAreaEquation").innerHTML = `
    <span class="math-token">${model.length} × ${fractionHTML(model.numerator, model.denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${model.length} × ${mixedNumberHTML(model.numerator, model.denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${areaProductHTML(productNumerator, model.denominator)}</span>
  `;

  qs("#greaterAreaBoard").innerHTML = renderFractionAreaModel(model);
  qs("#greaterAreaMessage").textContent = `${model.numerator}/${model.denominator} is ${whole} whole ${plural(whole, "unit")} ${leftover ? `and ${leftover}/${model.denominator} more` : ""}. Since the side length is greater than 1, the area is greater than ${model.length}.`;
  setActive("[data-greater-area]", state.greaterAreaKey, "greaterArea");
}

function renderWholeAreaGrid(length, whole) {
  const cells = Array.from({ length: length * whole }, () => '<span class="mixed-area-cell is-whole"></span>').join("");
  return `
    <div class="mixed-whole-grid" style="--mixed-cols: ${length}; --mixed-rows: ${whole};" aria-label="${length} by ${whole} whole area">
      ${cells}
    </div>
  `;
}

function renderFractionStripGrid(length, numerator, denominator) {
  const cells = [];
  for (let row = 0; row < denominator; row += 1) {
    for (let column = 0; column < length; column += 1) {
      cells.push(`<span class="mixed-area-cell ${row < numerator ? "is-fraction" : ""}"></span>`);
    }
  }
  return `
    <div class="mixed-fraction-grid" style="--mixed-cols: ${length}; --mixed-rows: ${denominator};" aria-label="${length} by ${numerator}/${denominator} fractional area">
      ${cells.join("")}
    </div>
  `;
}

function renderMixedAreaModel(model, options = {}) {
  const wholeArea = model.length * model.whole;
  const fractionNumerator = model.length * model.numerator;
  const totalNumerator = wholeArea * model.denominator + fractionNumerator;
  const fractionArea = areaProductHTML(fractionNumerator, model.denominator);
  const totalArea = areaProductHTML(totalNumerator, model.denominator);
  const expressionOnly = options.areaSummaryMode === "expression";
  const wholeSummary = expressionOnly
    ? `${model.length} × ${model.whole}`
    : `${model.length} × ${model.whole} = ${wholeArea}`;
  const fractionSummary = expressionOnly
    ? `${model.length} × ${fractionHTML(model.numerator, model.denominator)}`
    : `${model.length} × ${fractionHTML(model.numerator, model.denominator)} = ${fractionArea}`;
  const totalSummary = expressionOnly
    ? `${model.length} × ${model.whole} + ${model.length} × ${fractionHTML(model.numerator, model.denominator)}`
    : totalArea;

  return `
    <div class="mixed-area-model">
      <div class="area-summary-grid">
        <article class="sharing-form-card">
          <span>Rectangle</span>
          <strong>${model.length} × ${mixedSideHTML(model)}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Whole part</span>
          <strong>${wholeSummary}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Fraction part</span>
          <strong>${fractionSummary}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Total area</span>
          <strong>${totalSummary}</strong>
        </article>
      </div>
      <div class="mixed-area-stage">
        <div>
          <h3>${model.context}</h3>
          <p>Split ${mixedSideText(model)} into ${model.whole} wholes and ${model.numerator}/${model.denominator}. Then find each area and add them.</p>
        </div>
        <div class="mixed-area-visual" style="--whole-fr: ${model.whole * model.denominator}; --fraction-fr: ${model.numerator};">
          <div class="mixed-region is-whole-region">
            <strong>Whole area</strong>
            ${renderWholeAreaGrid(model.length, model.whole)}
          </div>
          <div class="mixed-region is-fraction-region">
            <strong>Fraction area</strong>
            ${renderFractionStripGrid(model.length, model.numerator, model.denominator)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMixedArea() {
  const model = getMixedAreaModel(state.mixedAreaKey);
  const wholeArea = model.length * model.whole;
  const fractionNumerator = model.length * model.numerator;
  const totalNumerator = wholeArea * model.denominator + fractionNumerator;

  qs("#mixedAreaEquation").innerHTML = `
    <span class="math-token">${model.length} × ${mixedSideHTML(model)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">(${model.length} × ${model.whole}) + (${model.length} × ${fractionHTML(model.numerator, model.denominator)})</span>
    <span class="math-equals">=</span>
    <span class="math-token">${areaProductHTML(totalNumerator, model.denominator)}</span>
  `;

  qs("#mixedAreaBoard").innerHTML = renderMixedAreaModel(model);
  qs("#mixedAreaMessage").textContent = `The whole part gives ${wholeArea}. The fractional part gives ${areaProductText(fractionNumerator, model.denominator)}. Together the area is ${areaProductText(totalNumerator, model.denominator)} square units.`;
  setActive("[data-mixed-area]", state.mixedAreaKey, "mixedArea");
}

function getEstimateModel(key) {
  if (mixedAreaData[key]) {
    const mixed = mixedAreaData[key];
    return {
      length: mixed.length,
      numerator: mixed.whole * mixed.denominator + mixed.numerator,
      denominator: mixed.denominator,
      label: `${mixed.length} × ${mixedSideHTML(mixed)}`,
      textLabel: `${mixed.length} x ${mixedSideText(mixed)}`
    };
  }

  const model = getFractionAreaModel(key);
  return {
    length: model.length,
    numerator: model.numerator,
    denominator: model.denominator,
    label: `${model.length} × ${fractionHTML(model.numerator, model.denominator)}`,
    textLabel: `${model.length} x ${model.numerator}/${model.denominator}`
  };
}

function renderEstimateArea() {
  const model = getEstimateModel(state.estimateAreaKey);
  const productNumerator = areaProductNumerator(model);
  const productText = areaProductText(productNumerator, model.denominator);
  const factorRelation = model.numerator < model.denominator
    ? "less than 1"
    : model.numerator === model.denominator
      ? "equal to 1"
      : "greater than 1";
  const productRelation = model.numerator < model.denominator
    ? "less than"
    : model.numerator === model.denominator
      ? "equal to"
      : "greater than";

  qs("#estimateAreaEquation").innerHTML = `
    <span class="math-token">${model.label}</span>
    <span class="math-equals">is</span>
    <span class="math-token">${productRelation} ${model.length}</span>
  `;

  qs("#estimateAreaBoard").innerHTML = `
    <div class="estimate-area-model">
      <div class="estimate-card-grid">
        <article class="path-card">
          <span>Look at the fraction</span>
          <strong>${fractionHTML(model.numerator, model.denominator)} is ${factorRelation}</strong>
          <p>Compare the fraction factor to 1 before calculating.</p>
        </article>
        <article class="path-card is-result">
          <span>Estimate</span>
          <strong>Product is ${productRelation} ${model.length}</strong>
          <p>The product should make sense before we multiply.</p>
        </article>
        <article class="path-card">
          <span>Exact check</span>
          <strong>${productText}</strong>
          <p>${model.textLabel} = ${productText}.</p>
        </article>
      </div>
      <div class="estimate-number-line" aria-label="Estimate number line">
        <span class="estimate-line"></span>
        <span class="estimate-point is-factor" style="left: ${Math.min(92, Math.max(8, model.numerator / Math.max(model.denominator * 2, model.numerator) * 84 + 8))}%;">factor</span>
        <span class="estimate-one" style="left: ${Math.min(92, Math.max(8, model.denominator / Math.max(model.denominator * 2, model.numerator) * 84 + 8))}%;">1</span>
      </div>
    </div>
  `;

  qs("#estimateAreaMessage").textContent = `Because the fraction factor is ${factorRelation}, ${model.textLabel} must be ${productRelation} ${model.length}. The exact product is ${productText}.`;
  setActive("[data-estimate-area]", state.estimateAreaKey, "estimateArea");
}

function getFractionOverlapModel(key) {
  return fractionOverlapData[key] || fractionOverlapData.oneThirdByOneFourth;
}

function fractionLabel(numerator, denominator) {
  return `${numerator}/${denominator}`;
}

function fractionOverlapProduct(model) {
  return {
    numerator: model.rowNumerator * model.colNumerator,
    denominator: model.rowDenominator * model.colDenominator
  };
}

function renderOverlapPartButton(part, html, label) {
  const active = state.fractionOverlapFocus === part ? " is-active" : "";
  const pressed = state.fractionOverlapFocus === part ? "true" : "false";
  return `
    <button class="expression-choice overlap-expression${active}" type="button" data-overlap-focus="${part}" aria-pressed="${pressed}">
      <strong>${html}</strong>
      <span>${label}</span>
    </button>
  `;
}

function renderFractionOverlapGrid(model) {
  const visibleCols = Math.max(model.colDenominator, model.colNumerator);
  const focus = state.fractionOverlapFocus;
  const cells = [];

  for (let row = 0; row < model.rowDenominator; row += 1) {
    for (let col = 0; col < visibleCols; col += 1) {
      const rowSelected = row < model.rowNumerator;
      const colSelected = col < model.colNumerator;
      const inBaseWhole = col < model.colDenominator;
      const overlap = rowSelected && colSelected;
      const focusCell = (
        (focus === "first" && rowSelected && inBaseWhole)
        || (focus === "second" && colSelected)
        || (focus === "numerator" && overlap)
        || (focus === "product" && overlap)
        || (focus === "denominator" && inBaseWhole)
      );
      const classes = [
        "overlap-cell",
        rowSelected ? "is-row-selected" : "",
        colSelected ? "is-col-selected" : "",
        overlap ? "is-overlap" : "",
        !inBaseWhole ? "is-extra-column" : "",
        col + 1 === model.colDenominator ? "is-whole-boundary" : "",
        focusCell ? "is-focus" : ""
      ].filter(Boolean).join(" ");
      cells.push(`<span class="${classes}" aria-label="${overlap ? "overlap product piece" : "fraction area piece"}"></span>`);
    }
  }

  return `
    <div class="overlap-grid-wrap">
      <div class="overlap-grid" style="--overlap-rows: ${model.rowDenominator}; --overlap-cols: ${visibleCols};" aria-label="Fraction overlap area model">
        ${cells.join("")}
      </div>
      <div class="overlap-legend" aria-label="Area model color key">
        <span><i class="legend-row"></i> first fraction</span>
        <span><i class="legend-column"></i> second fraction</span>
        <span><i class="legend-overlap"></i> overlap product</span>
      </div>
    </div>
  `;
}

function renderFractionOverlapModel(model, options = {}) {
  const product = fractionOverlapProduct(model);
  const productHTML = areaProductHTML(product.numerator, product.denominator);
  const denominatorParts = model.rowDenominator * model.colDenominator;
  const numeratorParts = model.rowNumerator * model.colNumerator;
  const firstHTML = fractionHTML(model.rowNumerator, model.rowDenominator);
  const secondHTML = fractionHTML(model.colNumerator, model.colDenominator);
  const expressionGrid = `
    <div class="expression-choice-grid overlap-choice-grid">
      ${renderOverlapPartButton("first", firstHTML, model.firstLabel)}
      ${renderOverlapPartButton("second", secondHTML, model.secondLabel)}
      ${renderOverlapPartButton("denominator", `${model.rowDenominator} x ${model.colDenominator} = ${denominatorParts}`, "denominators create the total equal pieces in one whole square")}
      ${renderOverlapPartButton("numerator", `${model.rowNumerator} x ${model.colNumerator} = ${numeratorParts}`, "numerators count the overlapping selected pieces")}
    </div>
  `;

  return `
    <div class="fraction-overlap-model">
      <div class="area-summary-grid">
        <article class="sharing-form-card">
          <span>First factor</span>
          <strong>${firstHTML}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Second factor</span>
          <strong>${secondHTML}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Overlap pieces</span>
          <strong>${numeratorParts}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Product</span>
          <strong>${productHTML}</strong>
        </article>
      </div>
      <div class="overlap-stage">
        <div>
          <h3>${model.context}</h3>
          <p>${options.ruleMode ? "Click each expression part to highlight where it lives in the model." : "The product is the part covered by both fraction choices."}</p>
        </div>
        <div class="overlap-layout">
          ${renderFractionOverlapGrid(model)}
          ${expressionGrid}
        </div>
      </div>
    </div>
  `;
}

function renderFractionOverlap() {
  const model = getFractionOverlapModel(state.fractionOverlapKey);
  const product = fractionOverlapProduct(model);

  qs("#fractionOverlapEquation").innerHTML = `
    <span class="math-token">${fractionHTML(model.rowNumerator, model.rowDenominator)} × ${fractionHTML(model.colNumerator, model.colDenominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${areaProductHTML(product.numerator, product.denominator)}</span>
  `;

  qs("#fractionOverlapBoard").innerHTML = renderFractionOverlapModel(model);
  qs("#fractionOverlapMessage").textContent = `${fractionLabel(model.rowNumerator, model.rowDenominator)} x ${fractionLabel(model.colNumerator, model.colDenominator)} has ${product.numerator} selected small pieces. Each small piece is 1/${product.denominator} of a square unit.`;
  setActive("[data-unit3-overlap]", state.fractionOverlapKey, "unit3Overlap");
}

function renderFractionProductRule() {
  const model = getFractionOverlapModel(state.fractionOverlapKey);
  const product = fractionOverlapProduct(model);
  const focusMessages = {
    first: `The first factor selects ${model.rowNumerator} of ${model.rowDenominator} rows.`,
    second: `The second factor selects ${model.colNumerator} of ${model.colDenominator} columns. When the numerator is greater than the denominator, the model extends past one whole.`,
    denominator: `${model.rowDenominator} rows times ${model.colDenominator} columns make ${product.denominator} equal pieces in one whole square unit.`,
    numerator: `${model.rowNumerator} selected rows times ${model.colNumerator} selected columns make ${product.numerator} overlapping pieces.`,
    product: `The overlap names the product: ${product.numerator}/${product.denominator}.`
  };

  qs("#fractionRuleEquation").innerHTML = `
    <span class="math-token">${fractionHTML(model.rowNumerator, model.rowDenominator)} × ${fractionHTML(model.colNumerator, model.colDenominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${fractionHTML(`${model.rowNumerator}×${model.colNumerator}`, `${model.rowDenominator}×${model.colDenominator}`)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${areaProductHTML(product.numerator, product.denominator)}</span>
  `;

  qs("#fractionRuleBoard").innerHTML = renderFractionOverlapModel(model, { ruleMode: true });
  qs("#fractionRuleMessage").textContent = focusMessages[state.fractionOverlapFocus] || focusMessages.product;
}

function renderMultiplyingFractionsTeachMe() {
  renderUnitFractionOfNumber();
  renderNonUnitFractionOfNumber();
  renderMultiplicationPath();
  renderSameDiagramExpressions();
  renderFractionArea();
  renderGreaterThanOneArea();
  renderMixedArea();
  renderEstimateArea();
  renderFractionOverlap();
  renderFractionProductRule();
}

function unitFractionDivisionProduct(model) {
  return model.unitDenominator * model.groups;
}

function renderUnitFractionDivisionTape(model) {
  const quotientDenominator = unitFractionDivisionProduct(model);
  const pieces = Array.from({ length: model.unitDenominator }, (_, index) => {
    const selected = index === 0;
    const subPieces = selected
      ? `<div class="unit-share-slices" style="--share-count: ${model.groups};">
          ${Array.from({ length: model.groups }, (_, shareIndex) => `
            <span class="${shareIndex === 0 ? "is-answer-share" : ""}">${fractionHTML(1, quotientDenominator)}</span>
          `).join("")}
        </div>`
      : "";
    return `
      <div class="division-tape-cell ${selected ? "is-selected" : ""}">
        ${selected ? subPieces : `<span>${fractionHTML(1, model.unitDenominator)}</span>`}
      </div>
    `;
  }).join("");

  return `
    <div class="division-tape-model">
      <div class="division-tape" style="--division-cols: ${model.unitDenominator};">
        ${pieces}
      </div>
      <p>The shaded ${fractionHTML(1, model.unitDenominator)} is cut into ${model.groups} equal shares. One share is ${fractionHTML(1, quotientDenominator)}.</p>
    </div>
  `;
}

function renderWholeUnitDivisionTapes(model) {
  const quotient = model.whole * model.unitDenominator;
  const rows = Array.from({ length: model.whole }, (_, wholeIndex) => `
    <div class="whole-unit-row">
      <span class="shared-whole-label">Whole ${wholeIndex + 1}</span>
      <div class="division-tape" style="--division-cols: ${model.unitDenominator};">
        ${Array.from({ length: model.unitDenominator }, (_, partIndex) => `
          <div class="division-tape-cell is-counted">
            <span>${wholeIndex * model.unitDenominator + partIndex + 1}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");

  return `
    <div class="division-tape-model">
      <div class="whole-unit-tapes">${rows}</div>
      <p>Each whole contains ${model.unitDenominator} groups of ${fractionHTML(1, model.unitDenominator)}. ${model.whole} wholes contain ${quotient} groups.</p>
    </div>
  `;
}

function renderDivisionStories() {
  const shareModel = unitFractionDivisionData.oneThirdByFour;
  const fitModel = wholeUnitDivisionData.fourByOneThird;

  qs("#divisionStoriesEquation").innerHTML = `
    <span class="math-token">${fractionHTML(1, 3)} ÷ 4</span>
    <span class="math-equals">is not the same action as</span>
    <span class="math-token">4 ÷ ${fractionHTML(1, 3)}</span>
  `;

  qs("#divisionStoriesBoard").innerHTML = `
    <div class="division-story-grid">
      <article class="division-story-card">
        <span>Sharing division</span>
        <h3>How big is each share?</h3>
        ${renderUnitFractionDivisionTape(shareModel)}
      </article>
      <article class="division-story-card">
        <span>Measurement division</span>
        <h3>How many groups fit?</h3>
        ${renderWholeUnitDivisionTapes(fitModel)}
      </article>
    </div>
  `;

  qs("#divisionStoriesMessage").textContent = "The first story starts with one small part and splits it. The second starts with 4 wholes and counts many small parts.";
}

function renderUnitFractionDivision() {
  const model = unitFractionDivisionData[state.unitFractionDivisionKey] || unitFractionDivisionData.oneThirdByFour;
  const quotientDenominator = unitFractionDivisionProduct(model);

  qs("#unitFractionDivisionEquation").innerHTML = `
    <span class="math-token">${fractionHTML(1, model.unitDenominator)} ÷ ${model.groups}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${fractionHTML(1, quotientDenominator)}</span>
  `;

  qs("#unitFractionDivisionBoard").innerHTML = `
    <div class="fraction-division-teach-model">
      <div class="area-summary-grid">
        <article class="sharing-form-card">
          <span>Known amount</span>
          <strong>${fractionHTML(1, model.unitDenominator)} ${model.object}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Split into</span>
          <strong>${model.groups} equal shares</strong>
        </article>
        <article class="sharing-form-card">
          <span>One share</span>
          <strong>${fractionHTML(1, quotientDenominator)}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Check</span>
          <strong>${fractionHTML(1, quotientDenominator)} x ${model.groups} = ${fractionHTML(1, model.unitDenominator)}</strong>
        </article>
      </div>
      <div class="division-stage">
        <h3>${model.context}</h3>
        ${renderUnitFractionDivisionTape(model)}
      </div>
    </div>
  `;

  qs("#unitFractionDivisionMessage").textContent = `The share is smaller than 1/${model.unitDenominator}, because one small part was split into ${model.groups} equal pieces.`;
  setActive("[data-unit-fraction-division]", state.unitFractionDivisionKey, "unitFractionDivision");
}

function renderWholeByUnitDivision() {
  const model = wholeUnitDivisionData[state.wholeUnitDivisionKey] || wholeUnitDivisionData.fourByOneThird;
  const quotient = model.whole * model.unitDenominator;

  qs("#wholeByUnitDivisionEquation").innerHTML = `
    <span class="math-token">${model.whole} ÷ ${fractionHTML(1, model.unitDenominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${quotient}</span>
  `;

  qs("#wholeByUnitDivisionBoard").innerHTML = `
    <div class="fraction-division-teach-model">
      <div class="area-summary-grid">
        <article class="sharing-form-card">
          <span>Known amount</span>
          <strong>${model.whole} ${plural(model.whole, model.object)}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Group size</span>
          <strong>${fractionHTML(1, model.unitDenominator)}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Groups that fit</span>
          <strong>${quotient}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Check</span>
          <strong>${quotient} x ${fractionHTML(1, model.unitDenominator)} = ${model.whole}</strong>
        </article>
      </div>
      <div class="division-stage">
        <h3>${model.context}</h3>
        ${renderWholeUnitDivisionTapes(model)}
      </div>
    </div>
  `;

  qs("#wholeByUnitDivisionMessage").textContent = `The quotient is larger than ${model.whole}, because each group is only 1/${model.unitDenominator} of a whole.`;
  setActive("[data-whole-unit-division]", state.wholeUnitDivisionKey, "wholeUnitDivision");
}

function renderDivisionCheck() {
  const shareModel = unitFractionDivisionData.oneThirdByFour;
  const shareDenominator = unitFractionDivisionProduct(shareModel);
  const fitModel = wholeUnitDivisionData.fourByOneThird;
  const fitQuotient = fitModel.whole * fitModel.unitDenominator;

  qs("#divisionCheckEquation").innerHTML = `
    <span class="math-token">${fractionHTML(1, 3)} ÷ 4 = ${fractionHTML(1, shareDenominator)}</span>
    <span class="math-equals">and</span>
    <span class="math-token">4 ÷ ${fractionHTML(1, 3)} = ${fitQuotient}</span>
  `;

  qs("#divisionCheckBoard").innerHTML = `
    <div class="division-check-grid">
      <article class="path-card">
        <span>Split a fraction</span>
        <strong>${fractionHTML(1, 3)} ÷ 4 = ${fractionHTML(1, 12)}</strong>
        <p>Check: ${fractionHTML(1, 12)} x 4 = ${fractionHTML(1, 3)}.</p>
      </article>
      <article class="path-card is-result">
        <span>Order matters</span>
        <strong>same numbers, different job</strong>
        <p>The dividend is the amount you start with. Changing the dividend changes the story.</p>
      </article>
      <article class="path-card">
        <span>Count small parts</span>
        <strong>4 ÷ ${fractionHTML(1, 3)} = 12</strong>
        <p>Check: 12 x ${fractionHTML(1, 3)} = 4.</p>
      </article>
    </div>
  `;

  qs("#divisionCheckMessage").textContent = "A multiplication check always asks: quotient times divisor equals dividend?";
}

function renderDividingFractionsTeachMe() {
  renderDivisionStories();
  renderUnitFractionDivision();
  renderWholeByUnitDivision();
  renderDivisionCheck();
}

function renderStoryDiagram(story) {
  if (story.diagram === "count") {
    return renderWholeUnitDivisionTapes({ whole: 2, unitDenominator: 4, object: "pound", context: story.prompt });
  }

  if (story.diagram === "split") {
    return renderUnitFractionDivisionTape({ unitDenominator: 2, groups: 4, object: "pound", context: story.prompt });
  }

  if (story.diagram === "area") {
    return `
      <div class="story-area-model">
        <div class="fraction-set-groups" style="--set-group-count: 3;">
          ${renderFractionSetGroups({ denominator: 3, whole: 6, numerator: 2, itemName: "kilometer" }, 2)}
        </div>
      </div>
    `;
  }

  return `
    <div class="story-tape-unknown">
      ${Array.from({ length: 3 }, (_, index) => `
        <span class="${index === 0 ? "is-known" : ""}">${index === 0 ? "2 cups" : "?"}</span>
      `).join("")}
    </div>
  `;
}

function renderFractionStory() {
  const story = fractionStoryData[state.fractionStoryKey] || fractionStoryData.milkWhole;

  qs("#fractionStoryEquation").innerHTML = `
    <span class="math-token">${story.equationHTML}</span>
    <span class="math-equals">check</span>
    <span class="math-token">${story.checkHTML}</span>
  `;

  qs("#fractionStoryBoard").innerHTML = `
    <div class="fraction-story-model">
      <article class="story-prompt-card">
        <span>${story.title}</span>
        <h3>${story.prompt}</h3>
        <p><strong>Answer:</strong> ${story.answer}</p>
      </article>
      <div class="story-analysis-grid">
        <article class="sharing-form-card">
          <span>Whole</span>
          <strong>${story.whole}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Known</span>
          <strong>${story.known}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Unknown</span>
          <strong>${story.unknown}</strong>
        </article>
        <article class="sharing-form-card">
          <span>Action</span>
          <strong>${story.action}</strong>
        </article>
      </div>
      <div class="story-diagram-stage">
        <div>
          <h3>Diagram first, equation second</h3>
          <p>${story.reason}</p>
        </div>
        ${renderStoryDiagram(story)}
      </div>
    </div>
  `;

  qs("#fractionStoryMessage").textContent = `This is ${story.action}: ${story.reason}`;
  setActive("[data-fraction-story]", state.fractionStoryKey, "fractionStory");
}

function renderSameContextBoard() {
  qs("#sameContextBoard").innerHTML = `
    <div class="same-context-grid">
      <article class="path-card">
        <span>Known whole</span>
        <strong>${fractionHTML(1, 3)} x 6 = 2</strong>
        <p>If the whole container is 6 cups, then 1/3 of it is 2 cups. This is part-of multiplication.</p>
      </article>
      <article class="path-card is-result">
        <span>Known part</span>
        <strong>2 ÷ ${fractionHTML(1, 3)} = 6</strong>
        <p>If 2 cups is only 1/3, then the whole must be 3 copies of 2 cups. This is an unknown-whole division problem.</p>
      </article>
      <article class="path-card">
        <span>Reasonableness</span>
        <strong>whole should be bigger</strong>
        <p>When a known amount is only a fraction of the whole, the full whole must be larger than the known part.</p>
      </article>
    </div>
  `;
}

function renderFractionWordProblemsTeachMe() {
  renderFractionStory();
  renderSameContextBoard();
}

const unit7ShapeData = {
  square: {
    name: "Square",
    points: "30,20 90,20 90,80 30,80",
    attributes: ["4 sides", "4 equal sides", "4 right angles", "2 pairs of parallel sides"],
    sideType: "4 equal sides",
    angleType: "4 right angles",
    categories: ["quadrilateral", "trapezoid", "parallelogram", "rectangle", "rhombus", "square"],
    message: "A square has both jobs: it is a rectangle because it has 4 right angles, and it is a rhombus because it has 4 equal sides."
  },
  rectangle: {
    name: "Rectangle",
    points: "18,25 102,25 102,70 18,70",
    attributes: ["4 sides", "4 right angles", "opposite sides equal", "2 pairs of parallel sides"],
    sideType: "opposite sides equal",
    angleType: "4 right angles",
    categories: ["quadrilateral", "trapezoid", "parallelogram", "rectangle"],
    message: "A rectangle is a parallelogram because opposite sides are parallel. It is not always a square because the sides do not have to all be equal."
  },
  tiltedSquare: {
    name: "Tilted square",
    points: "60,10 98,48 60,86 22,48",
    attributes: ["4 sides", "4 equal sides", "4 right angles", "2 pairs of parallel sides", "not lined up with the axes"],
    sideType: "4 equal sides",
    angleType: "4 right angles",
    categories: ["quadrilateral", "trapezoid", "parallelogram", "rectangle", "rhombus", "square"],
    message: "Turning a square does not change its attributes. It is still a square, rectangle, rhombus, parallelogram, trapezoid, and quadrilateral."
  },
  rhombus: {
    name: "Rhombus",
    points: "60,13 96,45 60,78 24,45",
    attributes: ["4 sides", "4 equal sides", "opposite angles equal", "2 pairs of parallel sides"],
    sideType: "4 equal sides",
    angleType: "opposite angles equal",
    categories: ["quadrilateral", "trapezoid", "parallelogram", "rhombus"],
    message: "A rhombus has 4 equal sides. It does not need right angles, so it is not always a square."
  },
  parallelogram: {
    name: "Parallelogram",
    points: "33,22 102,22 86,75 17,75",
    attributes: ["4 sides", "opposite sides equal", "2 pairs of parallel sides", "opposite angles equal"],
    sideType: "opposite sides equal",
    angleType: "opposite angles equal",
    categories: ["quadrilateral", "trapezoid", "parallelogram"],
    message: "A parallelogram has 2 pairs of parallel sides. In this curriculum, that also makes it a trapezoid."
  },
  trapezoid: {
    name: "Trapezoid",
    points: "28,28 92,28 104,76 16,76",
    attributes: ["4 sides", "at least 1 pair of parallel sides", "may or may not be a parallelogram"],
    sideType: "side lengths can vary",
    angleType: "angles can vary",
    categories: ["quadrilateral", "trapezoid"],
    message: "The course uses the inclusive definition: a trapezoid has at least one pair of opposite sides parallel."
  },
  rightTriangle: {
    name: "Right scalene triangle",
    points: "27,76 92,76 27,22",
    attributes: ["3 sides", "1 right angle", "no equal side lengths", "not a quadrilateral"],
    sideType: "scalene",
    angleType: "right",
    categories: ["triangle", "right triangle", "scalene triangle"],
    message: "This triangle is right because it has 1 right angle, and scalene because all 3 side lengths are different."
  },
  equilateralTriangle: {
    name: "Equilateral triangle",
    points: "60,14 104,82 16,82",
    attributes: ["3 sides", "3 equal side lengths", "all acute angles", "also isosceles"],
    sideType: "equilateral and isosceles",
    angleType: "acute",
    categories: ["triangle", "acute triangle", "isosceles triangle", "equilateral triangle"],
    message: "An equilateral triangle has 3 equal sides. It is also isosceles because it has at least 2 equal sides."
  },
  obtuseIsoscelesTriangle: {
    name: "Obtuse isosceles triangle",
    points: "24,78 96,78 60,27",
    attributes: ["3 sides", "2 equal side lengths", "1 obtuse angle", "not a right triangle"],
    sideType: "isosceles",
    angleType: "obtuse",
    categories: ["triangle", "obtuse triangle", "isosceles triangle"],
    message: "This triangle is isosceles by side length and obtuse by angle size. Triangle names can come from both kinds of attributes."
  }
};

const unit7CoordinateShapeData = {
  rectangle: {
    name: "Rectangle",
    vertices: [
      [2, 2],
      [8, 2],
      [8, 6],
      [2, 6]
    ],
    labels: ["A", "B", "C", "D"],
    message: "The bottom vertices share y = 2, the top vertices share y = 6, the left vertices share x = 2, and the right vertices share x = 8."
  },
  rightTriangle: {
    name: "Right triangle",
    vertices: [
      [2, 2],
      [8, 2],
      [2, 7]
    ],
    labels: ["A", "B", "C"],
    message: "A right angle appears at A because one side is horizontal and one side is vertical."
  },
  tiltedSquare: {
    name: "Tilted square",
    vertices: [
      [5, 1],
      [8, 4],
      [5, 7],
      [2, 4]
    ],
    labels: ["A", "B", "C", "D"],
    message: "This square is not lined up with the axes, but its vertices still name the exact shape."
  }
};

const unit7StatementData = {
  rectangleSquare: {
    statement: "A rectangle is a square.",
    verdict: "Sometimes",
    explanation: "A square is a rectangle, but a long rectangle with unequal side lengths is not a square.",
    examples: [
      { label: "This one works", shapeKey: "square", note: "4 right angles and 4 equal sides" },
      { label: "Counterexample", shapeKey: "rectangle", note: "4 right angles, but not 4 equal sides" }
    ]
  },
  squareRectangle: {
    statement: "A square is a rectangle.",
    verdict: "Always",
    explanation: "Every square has 4 right angles, so every square fits the rectangle category.",
    examples: [
      { label: "Example", shapeKey: "square", note: "4 right angles" },
      { label: "Rotated example", shapeKey: "tiltedSquare", note: "still 4 right angles" }
    ]
  },
  rectangleNeverSquare: {
    statement: "A rectangle is never a square.",
    verdict: "False",
    explanation: "A square is a counterexample because it is both a rectangle and a square.",
    examples: [
      { label: "Counterexample", shapeKey: "square", note: "rectangle and square" },
      { label: "Another counterexample", shapeKey: "tiltedSquare", note: "rotation does not matter" }
    ]
  },
  parallelogramTrapezoid: {
    statement: "A parallelogram is a trapezoid.",
    verdict: "Always in Unit 7",
    explanation: "Unit 7 uses the inclusive definition: a trapezoid has at least one pair of parallel sides. A parallelogram has two pairs.",
    examples: [
      { label: "Parallelogram", shapeKey: "parallelogram", note: "2 parallel pairs" },
      { label: "Rectangle", shapeKey: "rectangle", note: "also 2 parallel pairs" }
    ]
  },
  triangleRight: {
    statement: "A triangle is a right triangle.",
    verdict: "Sometimes",
    explanation: "Some triangles have a right angle. Others are acute or obtuse.",
    examples: [
      { label: "This one works", shapeKey: "rightTriangle", note: "1 right angle" },
      { label: "Counterexample", shapeKey: "equilateralTriangle", note: "all acute angles" }
    ]
  }
};

const unit7PatternData = {
  add4Add6: {
    title: "Rule 1: start at 0, add 4. Rule 2: start at 0, add 6.",
    xStart: 0,
    xAdd: 4,
    yStart: 0,
    yAdd: 6,
    xLabel: "rule 1",
    yLabel: "rule 2",
    xMax: 24,
    yMax: 36,
    message: "Each y-value is 1 1/2 times the matching x-value. The table columns become graph points."
  },
  add8Add2: {
    title: "Rule 1: start at 0, add 8. Rule 2: start at 0, add 2.",
    xStart: 0,
    xAdd: 8,
    yStart: 0,
    yAdd: 2,
    xLabel: "rule 1",
    yLabel: "rule 2",
    xMax: 48,
    yMax: 12,
    message: "Each x-value is 4 times the matching y-value, because rule 1 grows by 8 while rule 2 grows by 2."
  },
  add10Add40: {
    title: "Rule 1: start at 0, add 10. Rule 2: start at 0, add 40.",
    xStart: 0,
    xAdd: 10,
    yStart: 0,
    yAdd: 40,
    xLabel: "rule 1",
    yLabel: "rule 2",
    xMax: 60,
    yMax: 240,
    message: "Each y-value is 4 times the matching x-value. That relationship shows up in the table and on the graph."
  }
};

const unit7PatternContextData = {
  coins: {
    title: "Quarter count and value",
    xLabel: "quarters",
    yLabel: "cents",
    xMax: 6,
    yMax: 150,
    xTicks: [0, 1, 2, 3, 4, 5, 6],
    yTicks: [0, 25, 50, 75, 100, 125, 150],
    terms: [
      { label: "A", x: 1, y: 25 },
      { label: "B", x: 2, y: 50 },
      { label: "C", x: 3, y: 75 },
      { label: "D", x: 4, y: 100 },
      { label: "E", x: 5, y: 125 }
    ],
    message: "The point (4, 100) means 4 quarters have a value of 100 cents. The y-axis counts by 25s because cents grow faster."
  },
  perimeter: {
    title: "Rectangle length and perimeter when width is 3",
    xLabel: "length",
    yLabel: "perimeter",
    xMax: 6,
    yMax: 24,
    xTicks: [0, 1, 2, 3, 4, 5, 6],
    yTicks: [0, 4, 8, 12, 16, 20, 24],
    terms: [
      { label: "A", x: 1, y: 8 },
      { label: "B", x: 2, y: 10 },
      { label: "C", x: 3, y: 12 },
      { label: "D", x: 4, y: 14 },
      { label: "E", x: 5, y: 16 }
    ],
    message: "A point like (5, 16) means length 5 and perimeter 16 when the width is 3."
  },
  area: {
    title: "Rectangle length and area when width is 4",
    xLabel: "length",
    yLabel: "area",
    xMax: 6,
    yMax: 24,
    xTicks: [0, 1, 2, 3, 4, 5, 6],
    yTicks: [0, 4, 8, 12, 16, 20, 24],
    terms: [
      { label: "A", x: 1, y: 4 },
      { label: "B", x: 2, y: 8 },
      { label: "C", x: 3, y: 12 },
      { label: "D", x: 4, y: 16 },
      { label: "E", x: 5, y: 20 }
    ],
    message: "A point like (3, 12) means length 3 and area 12 square units when the width is 4."
  }
};

function coordinatePointMessage(x, y) {
  if (x === 0 && y === 0) {
    return "The origin is (0, 0). It is where every coordinate trip starts.";
  }
  if (y === 0) {
    return `(${x}, 0) is on the x-axis because it moves ${x} right and 0 up.`;
  }
  if (x === 0) {
    return `(0, ${y}) is on the y-axis because it moves 0 right and ${y} up.`;
  }
  return `(${x}, ${y}) means move ${x} units right from the origin, then ${y} units up.`;
}

function renderCoordinateGridSvg(x, y) {
  const left = 44;
  const bottom = 334;
  const step = 28;
  const top = bottom - 10 * step;
  const right = left + 10 * step;
  const pointX = left + x * step;
  const pointY = bottom - y * step;

  const gridLines = Array.from({ length: 11 }, (_, index) => {
    const px = left + index * step;
    const py = bottom - index * step;
    const axisClass = index === 0 ? " is-axis" : "";
    return `
      <line class="unit7-grid-line${axisClass}" x1="${px}" y1="${top}" x2="${px}" y2="${bottom}"></line>
      <line class="unit7-grid-line${axisClass}" x1="${left}" y1="${py}" x2="${right}" y2="${py}"></line>
      <text class="unit7-grid-label" x="${px}" y="${bottom + 24}" text-anchor="middle">${index}</text>
      <text class="unit7-grid-label" x="${left - 18}" y="${py + 5}" text-anchor="middle">${index}</text>
    `;
  }).join("");

  const clickTargets = Array.from({ length: 11 }, (_, gridY) => (
    Array.from({ length: 11 }, (_, gridX) => `
      <circle class="unit7-grid-target" cx="${left + gridX * step}" cy="${bottom - gridY * step}" r="10" data-coordinate-grid-point="${gridX},${gridY}"></circle>
    `).join("")
  )).join("");

  return `
    <svg class="unit7-grid-svg" viewBox="0 0 390 380" role="img" aria-label="Coordinate grid from 0 to 10 showing point (${x}, ${y})">
      <rect class="unit7-grid-bg" x="${left}" y="${top}" width="${right - left}" height="${bottom - top}"></rect>
      ${gridLines}
      <line class="unit7-path-line is-x" x1="${left}" y1="${bottom}" x2="${pointX}" y2="${bottom}"></line>
      <line class="unit7-path-line is-y" x1="${pointX}" y1="${bottom}" x2="${pointX}" y2="${pointY}"></line>
      <line class="unit7-guide-line" x1="${left}" y1="${pointY}" x2="${pointX}" y2="${pointY}"></line>
      <line class="unit7-guide-line" x1="${pointX}" y1="${bottom}" x2="${pointX}" y2="${pointY}"></line>
      <circle class="unit7-origin-dot" cx="${left}" cy="${bottom}" r="5"></circle>
      <circle class="unit7-point-dot" cx="${pointX}" cy="${pointY}" r="8"></circle>
      <text class="unit7-point-label" x="${Math.min(pointX + 12, right - 34)}" y="${Math.max(pointY - 12, top + 16)}">(${x}, ${y})</text>
      <text class="unit7-axis-label" x="${right + 22}" y="${bottom + 4}">x</text>
      <text class="unit7-axis-label" x="${left - 1}" y="${top - 18}">y</text>
      ${clickTargets}
    </svg>
  `;
}

function renderCoordinatePoint() {
  const x = clampInteger(state.coordinateX, 0, 10);
  const y = clampInteger(state.coordinateY, 0, 10);
  state.coordinateX = x;
  state.coordinateY = y;

  qs("#coordinatePointEquation").innerHTML = `
    <span class="math-token">(${x}, ${y})</span>
    <span class="math-equals">=</span>
    <span class="math-token">${x} right</span>
    <span class="math-token">${y} up</span>
  `;

  qs("#coordinatePointBoard").innerHTML = `
    <div class="unit7-coordinate-layout">
      ${renderCoordinateGridSvg(x, y)}
      <div class="unit7-coordinate-steps">
        <article>
          <span>1</span>
          <strong>Start at the origin.</strong>
          <p>The origin is (0, 0).</p>
        </article>
        <article>
          <span>2</span>
          <strong>Move right ${x}.</strong>
          <p>The first coordinate is horizontal.</p>
        </article>
        <article>
          <span>3</span>
          <strong>Move up ${y}.</strong>
          <p>The second coordinate is vertical.</p>
        </article>
      </div>
    </div>
  `;

  qs("#coordinatePointMessage").textContent = coordinatePointMessage(x, y);
  setActive("[data-coordinate-preset]", `${x},${y}`, "coordinatePreset");

  const xInput = qs("#coordinateXInput");
  const yInput = qs("#coordinateYInput");
  if (xInput && document.activeElement !== xInput) xInput.value = x;
  if (yInput && document.activeElement !== yInput) yInput.value = y;
}

function renderCoordinateShapeGridSvg(shape) {
  const left = 44;
  const bottom = 334;
  const step = 28;
  const top = bottom - 10 * step;
  const right = left + 10 * step;
  const pointFor = ([x, y]) => ({ x: left + x * step, y: bottom - y * step });
  const gridLines = Array.from({ length: 11 }, (_, index) => {
    const px = left + index * step;
    const py = bottom - index * step;
    const axisClass = index === 0 ? " is-axis" : "";
    return `
      <line class="unit7-grid-line${axisClass}" x1="${px}" y1="${top}" x2="${px}" y2="${bottom}"></line>
      <line class="unit7-grid-line${axisClass}" x1="${left}" y1="${py}" x2="${right}" y2="${py}"></line>
      <text class="unit7-grid-label" x="${px}" y="${bottom + 24}" text-anchor="middle">${index}</text>
      <text class="unit7-grid-label" x="${left - 18}" y="${py + 5}" text-anchor="middle">${index}</text>
    `;
  }).join("");
  const polygonPoints = shape.vertices
    .map((vertex) => {
      const point = pointFor(vertex);
      return `${point.x},${point.y}`;
    })
    .join(" ");
  const vertexEls = shape.vertices.map((vertex, index) => {
    const point = pointFor(vertex);
    const label = shape.labels[index];
    const labelX = Math.min(point.x + 12, right - 24);
    const labelY = Math.max(point.y - 12, top + 16);
    return `
      <circle class="unit7-vertex-dot" cx="${point.x}" cy="${point.y}" r="7"></circle>
      <text class="unit7-vertex-label" x="${labelX}" y="${labelY}">${label}(${vertex[0]}, ${vertex[1]})</text>
    `;
  }).join("");

  return `
    <svg class="unit7-grid-svg" viewBox="0 0 390 380" role="img" aria-label="Coordinate grid showing ${shape.name} vertices">
      <rect class="unit7-grid-bg" x="${left}" y="${top}" width="${right - left}" height="${bottom - top}"></rect>
      ${gridLines}
      <polygon class="unit7-coordinate-shape" points="${polygonPoints}"></polygon>
      ${vertexEls}
      <text class="unit7-axis-label" x="${right + 22}" y="${bottom + 4}">x</text>
      <text class="unit7-axis-label" x="${left - 1}" y="${top - 18}">y</text>
    </svg>
  `;
}

function renderCoordinateShape() {
  const shape = unit7CoordinateShapeData[state.unit7CoordinateShapeKey] || unit7CoordinateShapeData.rectangle;
  const vertexList = shape.vertices.map((vertex, index) => `
    <article>
      <span>${shape.labels[index]}</span>
      <strong>(${vertex[0]}, ${vertex[1]})</strong>
    </article>
  `).join("");

  qs("#coordinateShapeBoard").innerHTML = `
    <div class="unit7-coordinate-layout">
      ${renderCoordinateShapeGridSvg(shape)}
      <div class="unit7-coordinate-steps">
        <article>
          <span>1</span>
          <strong>Plot every vertex.</strong>
          <p>Each corner has its own ordered pair.</p>
        </article>
        <article>
          <span>2</span>
          <strong>Connect the vertices.</strong>
          <p>The segments make the shape.</p>
        </article>
        <article>
          <span>3</span>
          <strong>Describe it with coordinates.</strong>
          <p>Another person can redraw it exactly.</p>
        </article>
        <div class="unit7-vertex-list">${vertexList}</div>
      </div>
    </div>
  `;
  qs("#coordinateShapeMessage").textContent = `${shape.name}: ${shape.message}`;
  setActive("[data-unit7-coordinate-shape]", state.unit7CoordinateShapeKey, "unit7CoordinateShape");
}

function renderShapeSvg(shape) {
  return `
    <svg class="unit7-shape-svg" viewBox="0 0 120 96" role="img" aria-label="${shape.name}">
      <polygon points="${shape.points}"></polygon>
    </svg>
  `;
}

function renderShapeAttributes() {
  const shape = unit7ShapeData[state.unit7ShapeKey] || unit7ShapeData.square;
  const categoryList = shape.categories.map((category) => `
    <span class="unit7-category-chip">${category}</span>
  `).join("");
  const attributeList = shape.attributes.map((attribute) => `
    <article>
      <span></span>
      <strong>${attribute}</strong>
    </article>
  `).join("");
  const classificationList = `
    <article>
      <span></span>
      <strong>Side type: ${shape.sideType}</strong>
    </article>
    <article>
      <span></span>
      <strong>Angle type: ${shape.angleType}</strong>
    </article>
  `;

  qs("#shapeAttributesBoard").innerHTML = `
    <div class="unit7-shape-layout">
      <article class="unit7-selected-shape">
        <span>Selected shape</span>
        ${renderShapeSvg(shape)}
        <h3>${shape.name}</h3>
      </article>
      <div class="unit7-attribute-panel">
        <h3>Attributes we can see</h3>
        <div class="unit7-attribute-list">${attributeList}</div>
        <h3>Side and angle classification</h3>
        <div class="unit7-attribute-list">${classificationList}</div>
        <h3>Category names that fit</h3>
        <div class="unit7-category-list">${categoryList}</div>
      </div>
    </div>
  `;

  qs("#shapeAttributesMessage").textContent = shape.message;
  setActive("[data-unit7-shape]", state.unit7ShapeKey, "unit7Shape");
}

function hierarchyClass(category) {
  const shape = unit7ShapeData[state.unit7HierarchyKey] || unit7ShapeData.square;
  return shape.categories.includes(category) ? " is-active" : "";
}

function renderShapeHierarchy() {
  const shape = unit7ShapeData[state.unit7HierarchyKey] || unit7ShapeData.square;
  qs("#shapeHierarchyBoard").innerHTML = `
    <div class="unit7-hierarchy-layout">
      <div class="unit7-hierarchy-map">
        <div class="unit7-h-node${hierarchyClass("quadrilateral")}">
          <strong>Quadrilaterals</strong>
          <span>4 sides</span>
          <div class="unit7-h-node${hierarchyClass("trapezoid")}">
            <strong>Trapezoids</strong>
            <span>at least 1 parallel pair</span>
            <div class="unit7-h-node${hierarchyClass("parallelogram")}">
              <strong>Parallelograms</strong>
              <span>2 parallel pairs</span>
              <div class="unit7-h-split">
                <div class="unit7-h-node${hierarchyClass("rectangle")}">
                  <strong>Rectangles</strong>
                  <span>4 right angles</span>
                </div>
                <div class="unit7-h-node${hierarchyClass("rhombus")}">
                  <strong>Rhombuses</strong>
                  <span>4 equal sides</span>
                </div>
              </div>
              <div class="unit7-h-node is-square${hierarchyClass("square")}">
                <strong>Squares</strong>
                <span>4 right angles and 4 equal sides</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article class="unit7-hierarchy-card">
        ${renderShapeSvg(shape)}
        <h3>${shape.name}</h3>
        <p>${shape.message}</p>
      </article>
    </div>
  `;

  const path = shape.categories.filter((category) => category !== "triangle" && category !== "right triangle");
  qs("#shapeHierarchyMessage").textContent = path.length
    ? `${shape.name} fits: ${path.join(" -> ")}.`
    : `${shape.name} is not in the quadrilateral hierarchy because it has 3 sides.`;
  setActive("[data-unit7-hierarchy]", state.unit7HierarchyKey, "unit7Hierarchy");
}

function renderShapeStatements() {
  const statement = unit7StatementData[state.unit7StatementKey] || unit7StatementData.rectangleSquare;
  const examples = statement.examples.map((example) => {
    const shape = unit7ShapeData[example.shapeKey] || unit7ShapeData.square;
    return `
      <article class="unit7-statement-example">
        <span>${example.label}</span>
        ${renderShapeSvg(shape)}
        <strong>${shape.name}</strong>
        <p>${example.note}</p>
      </article>
    `;
  }).join("");

  qs("#shapeStatementBoard").innerHTML = `
    <div class="unit7-statement-layout">
      <article class="unit7-statement-card">
        <span>Statement</span>
        <strong>${statement.statement}</strong>
        <div class="unit7-verdict-chip">${statement.verdict}</div>
        <p>${statement.explanation}</p>
      </article>
      <div class="unit7-statement-examples">${examples}</div>
    </div>
  `;
  qs("#shapeStatementMessage").textContent = statement.explanation;
  setActive("[data-unit7-statement]", state.unit7StatementKey, "unit7Statement");
}

function getPatternTerms(model) {
  return Array.from({ length: 6 }, (_, index) => ({
    label: String.fromCharCode(65 + index),
    x: model.xStart + index * model.xAdd,
    y: model.yStart + index * model.yAdd
  }));
}

function renderPatternGraph(model, terms, activeIndex) {
  const left = 52;
  const bottom = 296;
  const width = 330;
  const height = 240;
  const top = bottom - height;
  const xScale = width / model.xMax;
  const yScale = height / model.yMax;
  const xLines = Array.from({ length: 7 }, (_, index) => {
    const xValue = model.xMax / 6 * index;
    const px = left + xValue * xScale;
    return `
      <line class="unit7-grid-line${index === 0 ? " is-axis" : ""}" x1="${px}" y1="${top}" x2="${px}" y2="${bottom}"></line>
      <text class="unit7-grid-label" x="${px}" y="${bottom + 24}" text-anchor="middle">${Math.round(xValue)}</text>
    `;
  }).join("");
  const yLines = Array.from({ length: 7 }, (_, index) => {
    const yValue = model.yMax / 6 * index;
    const py = bottom - yValue * yScale;
    return `
      <line class="unit7-grid-line${index === 0 ? " is-axis" : ""}" x1="${left}" y1="${py}" x2="${left + width}" y2="${py}"></line>
      <text class="unit7-grid-label" x="${left - 22}" y="${py + 5}" text-anchor="middle">${Math.round(yValue)}</text>
    `;
  }).join("");
  const pointEls = terms.map((term, index) => {
    const px = left + term.x * xScale;
    const py = bottom - term.y * yScale;
    return `
      <g class="unit7-pattern-point ${index === activeIndex ? "is-active" : ""}">
        <circle cx="${px}" cy="${py}" r="${index === activeIndex ? 7 : 5}"></circle>
        <text x="${px + 9}" y="${py - 8}">${term.label}</text>
      </g>
    `;
  }).join("");

  return `
    <svg class="unit7-pattern-svg" viewBox="0 0 420 340" role="img" aria-label="Graph of ordered pairs from two pattern rules">
      <rect class="unit7-grid-bg" x="${left}" y="${top}" width="${width}" height="${height}"></rect>
      ${xLines}
      ${yLines}
      ${pointEls}
      <text class="unit7-axis-label" x="${left + width / 2}" y="${bottom + 52}" text-anchor="middle">${model.xLabel}</text>
      <text class="unit7-axis-label" x="16" y="${top + height / 2}" transform="rotate(-90 16 ${top + height / 2})" text-anchor="middle">${model.yLabel}</text>
    </svg>
  `;
}

function renderPatternPoints() {
  const model = unit7PatternData[state.unit7PatternKey] || unit7PatternData.add4Add6;
  const terms = getPatternTerms(model);
  const activeIndex = Math.max(0, Math.min(terms.length - 1, state.unit7PatternStep));
  const active = terms[activeIndex];
  const tableHeaders = terms.map((term, index) => `
    <th><button type="button" class="${index === activeIndex ? "is-active" : ""}" data-unit7-pattern-step="${index}">${term.label}</button></th>
  `).join("");
  const xCells = terms.map((term, index) => `<td class="${index === activeIndex ? "is-active" : ""}">${term.x}</td>`).join("");
  const yCells = terms.map((term, index) => `<td class="${index === activeIndex ? "is-active" : ""}">${term.y}</td>`).join("");

  qs("#patternPointEquation").innerHTML = `
    <span class="math-token">${active.label}</span>
    <span class="math-equals">column gives</span>
    <span class="math-token">(${active.x}, ${active.y})</span>
  `;

  qs("#patternPointsBoard").innerHTML = `
    <div class="unit7-pattern-layout">
      <article class="unit7-pattern-table-card">
        <span>${model.title}</span>
        <table class="unit7-pattern-table">
          <thead>
            <tr><th>column</th>${tableHeaders}</tr>
          </thead>
          <tbody>
            <tr><th>${model.xLabel}</th>${xCells}</tr>
            <tr><th>${model.yLabel}</th>${yCells}</tr>
          </tbody>
        </table>
        <p>Click a table column to see the matching ordered pair on the graph.</p>
      </article>
      ${renderPatternGraph(model, terms, activeIndex)}
    </div>
  `;

  qs("#patternPointMessage").textContent = `Column ${active.label} pairs ${active.x} from ${model.xLabel} with ${active.y} from ${model.yLabel}, so the graph point is (${active.x}, ${active.y}). ${model.message}`;
  setActive("[data-unit7-pattern]", state.unit7PatternKey, "unit7Pattern");
}

function renderContextGraph(model) {
  const left = 54;
  const bottom = 296;
  const width = 330;
  const height = 240;
  const top = bottom - height;
  const xScale = width / model.xMax;
  const yScale = height / model.yMax;
  const xLines = model.xTicks.map((xValue) => {
    const px = left + xValue * xScale;
    return `
      <line class="unit7-grid-line${xValue === 0 ? " is-axis" : ""}" x1="${px}" y1="${top}" x2="${px}" y2="${bottom}"></line>
      <text class="unit7-grid-label" x="${px}" y="${bottom + 24}" text-anchor="middle">${xValue}</text>
    `;
  }).join("");
  const yLines = model.yTicks.map((yValue) => {
    const py = bottom - yValue * yScale;
    return `
      <line class="unit7-grid-line${yValue === 0 ? " is-axis" : ""}" x1="${left}" y1="${py}" x2="${left + width}" y2="${py}"></line>
      <text class="unit7-grid-label" x="${left - 24}" y="${py + 5}" text-anchor="middle">${yValue}</text>
    `;
  }).join("");
  const points = model.terms.map((term) => {
    const px = left + term.x * xScale;
    const py = bottom - term.y * yScale;
    return `
      <g class="unit7-pattern-point is-active">
        <circle cx="${px}" cy="${py}" r="5"></circle>
        <text x="${px + 9}" y="${py - 8}">${term.label}</text>
      </g>
    `;
  }).join("");

  return `
    <svg class="unit7-pattern-svg" viewBox="0 0 430 350" role="img" aria-label="${model.title} coordinate graph">
      <rect class="unit7-grid-bg" x="${left}" y="${top}" width="${width}" height="${height}"></rect>
      ${xLines}
      ${yLines}
      ${points}
      <text class="unit7-axis-label" x="${left + width / 2}" y="${bottom + 52}" text-anchor="middle">${model.xLabel}</text>
      <text class="unit7-axis-label" x="16" y="${top + height / 2}" transform="rotate(-90 16 ${top + height / 2})" text-anchor="middle">${model.yLabel}</text>
    </svg>
  `;
}

function renderPatternContexts() {
  const model = unit7PatternContextData[state.unit7PatternContextKey] || unit7PatternContextData.coins;
  const tableRows = model.terms.map((term) => `
    <tr>
      <th>${term.label}</th>
      <td>${term.x}</td>
      <td>${term.y}</td>
      <td>(${term.x}, ${term.y})</td>
    </tr>
  `).join("");

  qs("#patternContextBoard").innerHTML = `
    <div class="unit7-pattern-layout">
      <article class="unit7-pattern-table-card">
        <span>${model.title}</span>
        <table class="unit7-pattern-table">
          <thead>
            <tr>
              <th>point</th>
              <th>${model.xLabel}</th>
              <th>${model.yLabel}</th>
              <th>ordered pair</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
        <p>The scale on each axis should fit the numbers. Unit 7 graphs often count by 1s, 5s, 10s, 20s, or 25s.</p>
      </article>
      ${renderContextGraph(model)}
    </div>
  `;
  qs("#patternContextMessage").textContent = model.message;
  setActive("[data-unit7-pattern-context]", state.unit7PatternContextKey, "unit7PatternContext");
}

function renderCoordinateGeometryTeachMe() {
  renderCoordinatePoint();
  renderCoordinateShape();
  renderShapeAttributes();
  renderShapeHierarchy();
  renderShapeStatements();
  renderPatternPoints();
  renderPatternContexts();
}

function renderFractionDivision() {
  const data = fractionDivisionData[state.fractionDivisionKey];
  const { total, groups } = data;

  qs("#fractionDivisionEquation").innerHTML = `
    <span class="math-token">${total} ÷ ${groups}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${fractionHTML(total, groups)}</span>
  `;

  qs("#fractionDivisionBoard").innerHTML = `
    <div class="fraction-division-layout">
      <article class="fraction-visual-card">
        <h3>${total} ${plural(total, "whole")} shared by ${groups}</h3>
        <div class="shared-wholes">${renderSharedWholes(total, groups)}</div>
      </article>
      <article class="fraction-visual-card">
        <h3>Each student gets</h3>
        <div class="share-plates">${renderSharePlates(total, groups)}</div>
      </article>
    </div>
  `;

  qs("#fractionDivisionMessage").textContent = `${total} ÷ ${groups} means ${total} wholes are shared equally by ${groups}. Each student gets ${total} pieces that are each 1/${groups}, so each share is ${total}/${groups}.`;
  setActive("[data-fraction-division]", state.fractionDivisionKey, "fractionDivision");
}

function renderFractionNumberLineTicks(numerator, denominator, maxWhole) {
  const totalParts = maxWhole * denominator;
  const ticks = Array.from({ length: totalParts + 1 }, (_, index) => {
    const left = totalParts === 0 ? 0 : index / totalParts * 100;
    const wholeClass = index % denominator === 0 ? " is-whole-tick" : "";
    const activeClass = index === numerator ? " is-active-tick" : "";
    return `<span class="number-line-tick${wholeClass}${activeClass}" style="left: ${left}%;"></span>`;
  }).join("");
  const labels = Array.from({ length: maxWhole + 1 }, (_, whole) => `
    <span class="number-line-label" style="left: ${whole / maxWhole * 100}%;">${whole}</span>
  `).join("");

  return `${ticks}${labels}`;
}

function renderFractionNumberLine() {
  const fraction = fractionLineData[state.fractionLineKey];
  const { numerator, denominator } = fraction;
  const whole = Math.floor(numerator / denominator);
  const leftover = numerator % denominator;
  const maxWhole = Math.max(2, whole + (leftover > 0 ? 1 : 0));
  const markerLeft = numerator / (maxWhole * denominator) * 100;
  const mixedLabel = mixedNumberHTML(numerator, denominator);
  const mixedText = mixedNumberText(numerator, denominator);

  qs("#fractionLineEquation").innerHTML = `
    <span class="math-token">${fractionHTML(numerator, denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${mixedLabel}</span>
  `;

  qs("#fractionLineBoard").innerHTML = `
    <div class="fraction-number-line-layout">
      <article class="fraction-visual-card">
        <h3>Count ${fractionPieceName(denominator, denominator)} on the line</h3>
        <div class="fraction-number-line-visual" aria-label="${numerator}/${denominator} on a number line">
          <div class="fraction-number-line-track">
            ${renderFractionNumberLineTicks(numerator, denominator, maxWhole)}
            <span class="fraction-line-marker" style="left: ${markerLeft}%;">
              ${fractionHTML(numerator, denominator)}
            </span>
          </div>
        </div>
      </article>
      <article class="fraction-visual-card">
        <h3>What the point means</h3>
        <div class="number-line-meaning">
          <span>${whole}</span>
          <small>${plural(whole, "whole")}</small>
          <strong>${leftover > 0 ? `${leftover}/${denominator} more` : "exactly"}</strong>
        </div>
      </article>
    </div>
  `;

  const wholeText = whole > 0
    ? `${whole} ${plural(whole, "whole")}`
    : "0 wholes";
  const leftoverText = leftover > 0
    ? ` and ${leftover}/${denominator} more`
    : "";
  qs("#fractionLineMessage").textContent = `${numerator}/${denominator} is a number at ${wholeText}${leftoverText}. That is ${mixedText}.`;
  setActive("[data-fraction-line]", state.fractionLineKey, "fractionLine");
}

function renderFractionPairCards(left, right, options = {}) {
  const { leftTitle = "Left", rightTitle = "Right", denominator = null } = options;
  const leftNumerator = denominator ? left.commonNumerator : left.numerator;
  const rightNumerator = denominator ? right.commonNumerator : right.numerator;
  const leftDenominator = denominator || left.denominator;
  const rightDenominator = denominator || right.denominator;

  return `
    <div class="fraction-pair-grid">
      <article class="fraction-visual-card">
        <h3>${leftTitle}</h3>
        ${renderFractionSegmentBar(leftNumerator, leftDenominator, {
          className: "is-large",
          ariaLabel: `${leftNumerator} of ${leftDenominator} equal pieces shaded`
        })}
        <div class="fraction-card-label">${fractionHTML(leftNumerator, leftDenominator)}</div>
      </article>
      <article class="fraction-visual-card">
        <h3>${rightTitle}</h3>
        ${renderFractionSegmentBar(rightNumerator, rightDenominator, {
          className: "is-large",
          ariaLabel: `${rightNumerator} of ${rightDenominator} equal pieces shaded`
        })}
        <div class="fraction-card-label">${fractionHTML(rightNumerator, rightDenominator)}</div>
      </article>
    </div>
  `;
}

function renderFractionCompare() {
  const data = fractionCompareData[state.fractionCompareKey];
  const common = commonFractionModel(data.left, data.right);
  const sign = common.left.commonNumerator === common.right.commonNumerator
    ? "="
    : common.left.commonNumerator > common.right.commonNumerator ? ">" : "<";

  qs("#fractionCompareEquation").innerHTML = `
    <span class="math-token">${fractionHTML(common.left.commonNumerator, common.denominator)}</span>
    <span class="math-equals">${sign}</span>
    <span class="math-token">${fractionHTML(common.right.commonNumerator, common.denominator)}</span>
  `;

  qs("#fractionCompareBoard").innerHTML = `
    <div class="fraction-board-stack">
      <section>
        <h3>Different piece sizes</h3>
        ${renderFractionPairCards(data.left, data.right, {
          leftTitle: fractionText(data.left),
          rightTitle: fractionText(data.right)
        })}
      </section>
      <section>
        <h3>Rename to ${common.denominator} equal pieces</h3>
        ${renderFractionPairCards(common.left, common.right, {
          leftTitle: `${fractionText(data.left)} becomes`,
          rightTitle: `${fractionText(data.right)} becomes`,
          denominator: common.denominator
        })}
      </section>
    </div>
  `;

  qs("#fractionCompareMessage").textContent = `After renaming, ${common.left.commonNumerator}/${common.denominator} ${sign} ${common.right.commonNumerator}/${common.denominator}, so ${fractionText(data.left)} ${sign} ${fractionText(data.right)}.`;
  setActive("[data-compare-fractions]", state.fractionCompareKey, "compareFractions");
}

function renderFractionOperationBar(leftCount, rightCount, denominator, operation) {
  const resultCount = operation === "+" ? leftCount + rightCount : Math.max(0, leftCount - rightCount);
  const cells = Array.from({ length: denominator }, (_, index) => {
    let segmentClass = "";
    if (operation === "+") {
      if (index < leftCount) segmentClass = " is-left-addend";
      else if (index < resultCount) segmentClass = " is-right-addend";
    } else if (index < resultCount) {
      segmentClass = " is-left-addend";
    } else if (index < leftCount) {
      segmentClass = " is-removed-piece";
    }
    return `<span class="fraction-segment${segmentClass}"></span>`;
  }).join("");

  return `
    <div class="fraction-segment-bar is-large is-operation" style="--fraction-parts: ${denominator};" aria-label="Operation shown with ${denominator} equal pieces">
      ${cells}
    </div>
  `;
}

function renderFractionCalculation() {
  const data = fractionCalcData[state.fractionCalcKey];
  const common = commonFractionModel(data.left, data.right);
  const leftCount = common.left.commonNumerator;
  const rightCount = common.right.commonNumerator;
  const resultCount = data.operation === "+" ? leftCount + rightCount : leftCount - rightCount;
  const simplified = simplifyFractionParts(resultCount, common.denominator);
  const resultLabel = simplified.denominator === common.denominator
    ? fractionHTML(resultCount, common.denominator)
    : `${fractionHTML(resultCount, common.denominator)} = ${fractionHTML(simplified.numerator, simplified.denominator)}`;

  qs("#fractionCalcEquation").innerHTML = `
    <span class="math-token">${fractionHTML(leftCount, common.denominator)}</span>
    <span class="math-equals">${data.operation}</span>
    <span class="math-token">${fractionHTML(rightCount, common.denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${resultLabel}</span>
  `;

  qs("#fractionCalcBoard").innerHTML = `
    <div class="fraction-board-stack">
      <section>
        <h3>Rename first</h3>
        ${renderFractionPairCards(common.left, common.right, {
          leftTitle: `${fractionText(data.left)} becomes`,
          rightTitle: `${fractionText(data.right)} becomes`,
          denominator: common.denominator
        })}
      </section>
      <section class="fraction-operation-card">
        <h3>${data.operation === "+" ? "Join" : "Remove"} same-size pieces</h3>
        ${renderFractionOperationBar(leftCount, rightCount, common.denominator, data.operation)}
        <div class="fraction-card-label">${resultLabel}</div>
      </section>
    </div>
  `;

  const actionText = data.operation === "+" ? "add" : "subtract";
  qs("#fractionCalcMessage").textContent = `Both fractions are renamed into ${common.denominator}ths, so we can ${actionText} the numerators: ${leftCount} ${data.operation} ${rightCount} = ${resultCount}.`;
  setActive("[data-fraction-calc]", state.fractionCalcKey, "fractionCalc");
}

function renderFractionUnitStack(totalNumerator, denominator) {
  const unitCount = Math.max(1, Math.ceil(totalNumerator / denominator));
  return Array.from({ length: unitCount }, (_, index) => {
    const usedPieces = Math.max(0, Math.min(denominator, totalNumerator - index * denominator));
    const label = usedPieces === denominator ? "1 whole" : `${usedPieces}/${denominator}`;
    return `
      <div class="fraction-pack-unit">
        ${renderFractionSegmentBar(usedPieces, denominator, {
          className: "is-pack",
          ariaLabel: `${usedPieces} of ${denominator} pieces shaded`
        })}
        <span>${label}</span>
      </div>
    `;
  }).join("");
}

function renderFractionWholes() {
  const denominator = clampInteger(state.fractionPackDenominator, 1, 12);
  const numerator = clampInteger(state.fractionPackNumerator, 0, 24);
  state.fractionPackDenominator = denominator;
  state.fractionPackNumerator = numerator;

  const numeratorInput = qs("#packNumeratorInput");
  const denominatorInput = qs("#packDenominatorInput");
  if (numeratorInput) numeratorInput.value = numerator;
  if (denominatorInput) denominatorInput.value = denominator;

  const wholes = Math.floor(numerator / denominator);
  const leftover = numerator % denominator;
  const mixedLabel = leftover === 0
    ? `${wholes} ${plural(wholes, "whole")}`
    : wholes > 0
      ? `${wholes} + ${leftover}/${denominator}`
      : `${leftover}/${denominator}`;

  qs("#fractionWholesEquation").innerHTML = `
    <span class="math-token">${fractionHTML(numerator, denominator)}</span>
    <span class="math-equals">=</span>
    <span class="math-token">${mixedLabel}</span>
  `;

  qs("#fractionWholesBoard").innerHTML = `
    <div class="fraction-pack-layout">
      <article class="fraction-visual-card">
        <h3>Loose fraction pieces</h3>
        <div class="fraction-pack-row">
          ${renderFractionUnitStack(numerator, denominator)}
        </div>
      </article>
      <article class="fraction-visual-card">
        <h3>Packed into wholes</h3>
        <div class="packed-result">
          <div class="packed-whole-count">
            <span>${wholes}</span>
            <small>${plural(wholes, "whole")}</small>
          </div>
          ${leftover > 0 ? renderFractionSegmentBar(leftover, denominator, {
            className: "is-pack",
            ariaLabel: `${leftover} leftover of ${denominator} pieces`
          }) : '<div class="no-leftover">no leftover pieces</div>'}
        </div>
      </article>
    </div>
  `;

  const leftoverText = leftover > 0
    ? ` with ${leftover}/${denominator} left over`
    : " with no pieces left over";
  qs("#fractionWholesMessage").textContent = `${denominator}/${denominator} makes 1 whole. ${numerator}/${denominator} packs into ${wholes} ${plural(wholes, "whole")}${leftoverText}.`;
  const presetValue = `${numerator}/${denominator}`;
  state.fractionPackPreset = ["4/4", "5/4", "7/3"].includes(presetValue) ? presetValue : "";
  setActive("[data-pack-fraction]", state.fractionPackPreset, "packFraction");
}

function renderHundredGrid(shadedCount, shadedClass = "is-shaded", highlightShaded = false) {
  const gridHighlight = highlightShaded && shadedCount > 0 ? " is-part-highlighted" : "";
  const cells = Array.from({ length: 100 }, (_, index) => {
    const shaded = index < shadedCount ? shadedClass : "";
    const highlight = shaded && highlightShaded ? " is-part-highlighted" : "";
    return `<span class="hundred-cell ${shaded}${highlight}"></span>`;
  }).join("");
  return `<div class="hundred-grid${gridHighlight}" aria-label="${shadedCount} of 100 hundredths shaded">${cells}</div>`;
}

function renderCookieRow(count) {
  return Array.from({ length: count }, () => '<span class="cookie" aria-label="cookie"></span>').join("");
}

function renderWholeUnits(count, highlightWhole = false) {
  if (count <= 0) return "";

  const highlightClass = highlightWhole ? " is-part-highlighted" : "";

  if (count === 1) {
    return `<div class="whole-block${highlightClass}">1 whole</div>`;
  }

  const layers = Array.from({ length: count }, (_, index) => {
    const layerIndex = count - 1 - index;
    const frontLayer = index === count - 1
      ? `
        <span>${count}</span>
        <small>${plural(count, "whole")}</small>
      `
      : "";
    return `
      <div class="whole-stack-layer${highlightClass}" style="--layer-x: ${layerIndex * 6}px; --layer-y: -${layerIndex * 6}px;" aria-hidden="true">
        ${frontLayer}
      </div>
    `;
  }).join("");

  return `
    <div class="whole-stack" style="--stack-offset-total: ${(count - 1) * 6}px;" aria-label="${count} ${plural(count, "whole")}">
      ${layers}
    </div>
  `;
}

function renderFractionAmountVisual(model, highlightFraction = false) {
  if (model.fractionThousandths <= 0) return "";

  if (model.fractionThousandths % 100 === 0) {
    return renderHundredGrid(model.fractionThousandths / 10, "is-tenth", highlightFraction);
  }

  if (model.fractionThousandths % 10 === 0) {
    return renderHundredGrid(model.fractionThousandths / 10, "is-shaded", highlightFraction);
  }

  return renderThousandGrid(model.fractionThousandths, highlightFraction);
}

function amountTitle(model) {
  if (model.fractionThousandths === 0) {
    return `${model.whole} ${plural(model.whole, "whole")}`;
  }

  const fractionText = `${model.fractionNumerator} ${pieceName(model.denominator, model.fractionNumerator)}`;
  if (model.whole > 0) {
    return `${model.whole} ${plural(model.whole, "whole")} and ${fractionText}`;
  }

  return fractionText;
}

function decimalAmountHTML(model) {
  if (model.fractionThousandths === 0) {
    return clickableMathPart(
      "whole",
      decimalHTML(String(model.whole)),
      `${model.whole} whole part`
    );
  }

  if (model.whole > 0) {
    const decimalDigits = model.decimalDigits || String(model.fractionThousandths).padStart(3, "0").slice(0, model.precision);
    return `
      ${clickableMathPart("whole", decimalHTML(String(model.whole)), `${model.whole} whole part`)}
      ${clickableMathPart("fraction", `<span class="thousandth">.</span>${decimalDigitsHTML(decimalDigits)}`, `${decimalDigits} decimal part`)}
    `;
  }

  return clickableMathPart(
    "fraction",
    decimalHTML(model.display),
    `${model.display} decimal part`
  );
}

function mixedFractionHTML(model) {
  if (model.fractionThousandths === 0) {
    return clickableMathPart(
      "whole",
      fractionHTML(model.whole, "1"),
      `${model.whole} over 1, the whole amount`
    );
  }

  const fraction = clickableMathPart(
    "fraction",
    fractionHTML(model.fractionNumerator, model.denominator),
    `${model.fractionNumerator} over ${model.denominator}, the fractional part`
  );
  return model.whole > 0
    ? `${clickableMathPart("whole", `<span class="whole">${model.whole}</span>`, `${model.whole} whole part`)} + ${fraction}`
    : fraction;
}

function renamedAmountHTML(model) {
  if (model.fractionThousandths === 0) {
    const decimal = `${model.whole}.0`;
    return clickableMathPart("whole", decimalHTML(decimal), `${decimal}, the whole amount`);
  }

  if (model.whole > 0) {
    const precision = Math.max(2, model.precision);
    const wholePart = `${model.whole}.${"0".repeat(precision)}`;
    const fractionDigits = String(model.fractionThousandths).padStart(3, "0").slice(0, precision);
    const fractionPart = `0.${fractionDigits}`;
    return `
      ${clickableMathPart("whole", decimalHTML(wholePart), `${wholePart}, the whole part`)}
      +
      ${clickableMathPart("fraction", decimalHTML(fractionPart), `${fractionPart}, the fractional part`)}
    `;
  }

  const renamedDenominator = model.denominator < 1000 ? model.denominator * 10 : 1000;
  const renamedNumerator = model.fractionThousandths * renamedDenominator / 1000;
  const renamedDecimal = decimalFormForDenominator(renamedNumerator, renamedDenominator);
  return `
    ${clickableMathPart("fraction", fractionHTML(renamedNumerator, renamedDenominator), `${renamedNumerator} over ${renamedDenominator}, the fractional amount`)}
    =
    ${clickableMathPart("fraction", decimalHTML(renamedDecimal, decimalHelperPlaces(renamedDecimal, model.precision)), `${renamedDecimal}, the same fractional amount`)}
  `;
}

function combinedFractionHTML(model) {
  if (model.whole <= 0 || model.fractionThousandths === 0) return "";

  const wholeNumerator = model.whole * model.denominator;
  const totalNumerator = wholeNumerator + model.fractionNumerator;
  return `
    ${clickableMathPart("whole", fractionHTML(wholeNumerator, model.denominator), `${wholeNumerator} over ${model.denominator}, the whole part`)}
    +
    ${clickableMathPart("fraction", fractionHTML(model.fractionNumerator, model.denominator), `${model.fractionNumerator} over ${model.denominator}, the fractional part`)}
    =
    ${clickableMathPart("all", fractionHTML(totalNumerator, model.denominator), `${totalNumerator} over ${model.denominator}, the whole amount`)}
  `;
}

function equivalenceForms(model) {
  const forms = [
    {
      label: model.fractionThousandths === 0 ? "whole" : "decimal",
      value: decimalAmountHTML(model)
    },
    {
      label: "fraction",
      value: mixedFractionHTML(model)
    }
  ];

  if (model.whole > 0 && model.fractionThousandths > 0) {
    forms.push({
      label: "combine",
      value: combinedFractionHTML(model)
    });
  }

  forms.push({
    label: model.fractionThousandths === 0 ? "decimal" : "renamed",
    value: renamedAmountHTML(model)
  });

  return forms;
}

function equivalenceCaption(model) {
  if (model.fractionThousandths === 0) {
    return `${model.whole} ${plural(model.whole, "whole")} can be named ${model.whole}, ${model.whole}/1, or ${model.whole}.0. Zero tenths adds no extra part.`;
  }

  const fractionText = `${model.fractionNumerator} ${pieceName(model.denominator, model.fractionNumerator)}`;
  if (model.whole > 0) {
    return `${model.whole} ${plural(model.whole, "whole")} ${model.whole === 1 ? "stays" : "stay"} whole. The ${decimalDisplayForAmount({ ...model, whole: 0 })} part is ${fractionText}.`;
  }

  return `${model.display} can be named as ${fractionText}. The picture changes form, but the amount stays fixed.`;
}

function renderEquivalenceVisual(model) {
  const highlightWhole = state.equivalenceHighlight === "whole" || state.equivalenceHighlight === "all";
  const highlightFraction = state.equivalenceHighlight === "fraction" || state.equivalenceHighlight === "all";
  const visual = `${renderWholeUnits(model.whole, highlightWhole)}${renderFractionAmountVisual(model, highlightFraction)}`;

  if (visual) {
    return `<div class="whole-row amount-unit-row">${visual}</div>`;
  }

  return `<div class="whole-row amount-unit-row">${renderHundredGrid(0)}</div>`;
}

function renderEquivalenceBoard() {
  const model = getEquivalenceAmountModel(state.equivalenceAmount);
  const forms = equivalenceForms(model)
    .map((form) => `
      <div class="form-row">
        <span class="form-label">${form.label}</span>
        <span class="form-chip">${form.value}</span>
      </div>
    `)
    .join("");

  qs("#equivalenceBoard").innerHTML = `
    <div class="form-list">
      <h3>${amountTitle(model)}</h3>
      ${forms}
    </div>
    <div class="visual-amount">
      ${renderEquivalenceVisual(model)}
      <p class="amount-caption">${equivalenceCaption(model)}</p>
    </div>
  `;

  const input = qs("#equivalenceNumberInput");
  if (input && document.activeElement !== input) {
    input.value = state.equivalenceAmount;
  }
  setActive("[data-equivalence-key]", state.equivalenceKey, "equivalenceKey");
}

function normalizeCell(cell) {
  if (typeof cell === "string") {
    return { value: cell, helper: false };
  }
  return cell;
}

function cellClass(value, index, helper) {
  if (!value) return "is-blank";
  if (value === ".") return "is-dot";
  if (helper) return "is-helper";
  if (index === 0) return "whole";
  if (index === 2) return "tenth";
  if (index === 3) return "hundredth";
  return "thousandth";
}

function renderMathRows(rows) {
  return rows
    .map((row) => `
      <div class="math-row">
        <span class="row-label">${row.label}</span>
        ${row.cells.map((rawCell, index) => {
          const cell = normalizeCell(rawCell);
          const value = cell.value || "";
          return `<span class="digit-cell ${cellClass(value, index, cell.helper)}">${value}</span>`;
        }).join("")}
      </div>
    `)
    .join("");
}

function renderPlaceNames(places) {
  return `
    <div class="place-name-row">
      <span></span>
      ${places.map((place) => `<span class="place-name">${place}</span>`).join("")}
    </div>
  `;
}

function renderOperationBoard() {
  const data = operationData[state.operation];
  const rows = state.helpers ? data.afterRows : data.beforeRows;
  const result = state.helpers ? data.afterResult : data.beforeResult;

  qs("#helperToggle").textContent = state.helpers ? "Hide helper zeros" : "Add helper zeros";
  qs("#helperToggle").classList.toggle("is-active", state.helpers);

  qs("#operationBoard").innerHTML = `
    <div class="operation-main">
      <h3 class="operation-title">${data.title}</h3>
      <div class="aligned-math">${renderMathRows(rows)}</div>
      ${renderPlaceNames(data.places)}
      <p class="operation-result">${result}</p>
    </div>
    <div class="fraction-track">
      <h3>Fraction track</h3>
      <div class="fraction-steps">
        ${data.fractionSteps.map((step) => `<div class="fraction-step">${step.replaceAll("/", " / ")}</div>`).join("")}
      </div>
    </div>
  `;

  setActive("[data-operation]", state.operation, "operation");
}

function formatUnit6PlaceValue(digit, value) {
  const amount = Number(digit) * value;
  if (amount >= 1) return String(amount);
  return amount.toFixed(value === 0.001 ? 3 : value === 0.01 ? 2 : 1);
}

function renderUnit6PlaceValue() {
  const digit = String(state.unit6PlaceDigit || "6");
  const equation = qs("#unit6PlaceValueEquation");
  const board = qs("#unit6PlaceValueBoard");
  const message = qs("#unit6PlaceValueMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${digit} in tens = ${Number(digit) * 10}</span>
      <span class="math-equals">but</span>
      <span class="math-token">${digit} in tenths = ${(Number(digit) / 10).toFixed(1)}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-place-grid">
      ${unit6PlaceNames.map((place) => `
        <div class="unit6-place-cell ${["tens", "ones", "tenths"].includes(place.key) ? "is-active" : ""}">
          <span>${place.label}</span>
          <strong>${digit}</strong>
          <small>${formatUnit6PlaceValue(digit, place.value)}</small>
        </div>
      `).join("")}
    </div>
    <div class="unit6-card-grid">
      <article class="unit6-card is-highlight">
        <span>Move left</span>
        <strong>x 10</strong>
        <p>The same digit moves to a place worth 10 times as much.</p>
      </article>
      <article class="unit6-card">
        <span>Move right</span>
        <strong>÷ 10</strong>
        <p>The same digit moves to a place worth one-tenth as much.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = `The digit ${digit} keeps its shape, but its value changes because each neighboring place is 10 times larger or one-tenth as large.`;
  }
  setActive("[data-unit6-place]", digit, "unit6Place");
}

function renderUnit6Power() {
  const exponent = clampInteger(state.unit6PowerExponent, 1, 6);
  state.unit6PowerExponent = exponent;
  const value = 10 ** exponent;
  const factors = Array.from({ length: exponent }, () => "10");
  const equation = qs("#unit6PowerEquation");
  const board = qs("#unit6PowerBoard");
  const message = qs("#unit6PowerMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">10<sup>${exponent}</sup></span>
      <span class="math-equals">=</span>
      <span class="math-token">${value.toLocaleString()}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-power-chain" aria-label="${factors.join(" times ")}">
      ${factors.map((factor, index) => `
        ${index > 0 ? '<span class="math-equals">x</span>' : ""}
        <span class="unit6-power-factor">${factor}</span>
      `).join("")}
      <span class="math-equals">=</span>
      <span class="math-token">${value.toLocaleString()}</span>
    </div>
    <div class="unit6-card-grid">
      <article class="unit6-card">
        <span>Exponent</span>
        <strong>${exponent}</strong>
        <p>The exponent counts how many factors of 10 are being multiplied.</p>
      </article>
      <article class="unit6-card is-highlight">
        <span>Place moves</span>
        <strong>${exponent}</strong>
        <p>Multiplying by 10<sup>${exponent}</sup> moves digits ${exponent} ${plural(exponent, "place")} left.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = `10^${exponent} is a compact way to write ${factors.join(" x ")}.`;
  }
  setActive("[data-unit6-power]", String(exponent), "unit6Power");
}

function renderUnit6DigitRow(digits) {
  return unit6PlaceNames.map((place) => {
    const value = digits[place.key] || "";
    return `<td class="${value ? "is-active" : ""}">${value || " "}</td>`;
  }).join("");
}

function renderUnit6Move() {
  const data = unit6MoveData[state.unit6MoveKey] || unit6MoveData.times10;
  const equation = qs("#unit6MoveEquation");
  const board = qs("#unit6MoveBoard");
  const message = qs("#unit6MoveMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.result}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-move-layout">
      <table class="unit6-table">
        <thead>
          <tr>${unit6PlaceNames.map((place) => `<th>${place.label}</th>`).join("")}</tr>
        </thead>
        <tbody>
          <tr>${renderUnit6DigitRow(data.startDigits)}</tr>
          <tr>${renderUnit6DigitRow(data.endDigits)}</tr>
        </tbody>
      </table>
      <div class="unit6-card is-highlight">
        <span>Direction</span>
        <strong>${data.direction === "left" ? "Left" : "Right"}</strong>
        <p>${data.direction === "left" ? "Digits move into larger-value places." : "Digits move into smaller-value places."}</p>
      </div>
    </div>
  `;

  if (message) {
    message.textContent = data.message;
  }
  setActive("[data-unit6-move]", state.unit6MoveKey, "unit6Move");
}

function renderUnit6Conversion() {
  const data = unit6ConversionData[state.unit6ConversionKey] || unit6ConversionData.metersToCentimeters;
  const equation = qs("#unit6ConversionEquation");
  const board = qs("#unit6ConversionBoard");
  const message = qs("#unit6ConversionMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.operation}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.result}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-conversion-layout">
      <div class="unit6-conversion-strip">
        <div>
          <span class="unit6-small-label">Start</span>
          <strong>${data.from}</strong>
        </div>
        <div>
          <span class="unit6-small-label">Relationship</span>
          <strong>${data.relation}</strong>
        </div>
        <div>
          <span class="unit6-small-label">Rename</span>
          <strong>${data.result}</strong>
        </div>
      </div>
      <article class="unit6-card is-highlight">
        <span>Amount</span>
        <strong>${data.sameAmount}</strong>
        <p>The measurement is not changing size. Only the unit name changes.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = data.message;
  }
  setActive("[data-unit6-conversion]", state.unit6ConversionKey, "unit6Conversion");
}

function renderUnit6Predict() {
  const data = unit6PredictData[state.unit6PredictKey] || unit6PredictData.metersToCentimeters;
  const board = qs("#unit6PredictBoard");
  const message = qs("#unit6PredictMessage");
  if (!board) return;

  board.innerHTML = `
    <div class="unit6-predict-strip">
      <div>
        <span class="unit6-small-label">From</span>
        <strong>${data.fromUnit}</strong>
      </div>
      <div>
        <span class="unit6-small-label">Unit size</span>
        <strong>${data.unitSize}</strong>
      </div>
      <div>
        <span class="unit6-small-label">Prediction</span>
        <strong>${data.countChange}</strong>
      </div>
    </div>
    <div class="unit6-card-grid">
      <article class="unit6-card is-highlight">
        <span>Reason first</span>
        <strong>${data.operation}</strong>
        <p>Choose the operation after deciding whether the target unit is smaller or larger.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = `Going from ${data.fromUnit}s to ${data.toUnit}s: ${data.unitSize}, so ${data.countChange}.`;
  }
  setActive("[data-unit6-predict]", state.unit6PredictKey, "unit6Predict");
}

function renderUnit6Regroup() {
  const data = unit6RegroupData[state.unit6RegroupKey] || unit6RegroupData.twoOneFourthMinusThreeFourths;
  const equation = qs("#unit6RegroupEquation");
  const board = qs("#unit6RegroupBoard");
  const message = qs("#unit6RegroupMessage");
  if (!board) return;

  const denominator = data.commonDenominator || data.denominator;
  const startNumerator = data.renamedNumerator || data.numerator;
  const subtractNumerator = data.subtractNumerator;
  const startFraction = data.commonDenominator
    ? fractionHTML(data.renamedNumerator, data.commonDenominator)
    : fractionHTML(data.numerator, data.denominator);

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.simplified}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-regroup-layout">
      <div class="unit6-regroup-steps">
        <article class="unit6-regroup-step">
          <span class="unit6-small-label">Start</span>
          <div class="unit6-whole-stack">
            ${Array.from({ length: data.whole }, (_, index) => `<span class="unit6-whole-chip">whole ${index + 1}</span>`).join("")}
            ${renderFractionSegmentBar(startNumerator, denominator, { className: "is-large" })}
          </div>
        </article>
        <article class="unit6-regroup-step">
          <span class="unit6-small-label">Open one whole</span>
          <div class="unit6-whole-stack">
            ${Array.from({ length: data.regroupedWhole }, (_, index) => `<span class="unit6-whole-chip">whole ${index + 1}</span>`).join("")}
            ${renderFractionSegmentBar(data.regroupedNumerator, denominator, { className: "is-large is-renamed" })}
          </div>
        </article>
        <article class="unit6-regroup-step">
          <span class="unit6-small-label">Subtract matching pieces</span>
          <div class="unit6-whole-stack">
            ${Array.from({ length: data.resultWhole }, (_, index) => `<span class="unit6-whole-chip">whole ${index + 1}</span>`).join("")}
            ${renderFractionSegmentBar(data.resultNumerator, denominator, { className: "is-large" })}
          </div>
        </article>
      </div>
      <article class="unit6-card is-highlight">
        <span>Rename</span>
        <strong>${startFraction} becomes ${fractionHTML(data.regroupedNumerator, denominator)}</strong>
        <p>One whole opens into ${denominator}/${denominator}, so the fraction part has enough pieces to subtract.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = `Regrouping does not change the amount. It changes the form so ${subtractNumerator}/${denominator} can be removed from same-size pieces.`;
  }
  setActive("[data-unit6-regroup]", state.unit6RegroupKey, "unit6Regroup");
}

function unit6LinePlotLabel(tick, denominator) {
  return mixedNumberHTML(tick, denominator).replace(" + ", " ");
}

function renderUnit6LinePlot() {
  const data = unit6LinePlotData[state.unit6LinePlotKey] || unit6LinePlotData.ribbonsTotal;
  const equation = qs("#unit6LinePlotEquation");
  const board = qs("#unit6LinePlotBoard");
  const message = qs("#unit6LinePlotMessage");
  if (!board) return;

  const minTick = data.minWhole * data.denominator;
  const maxTick = data.maxWhole * data.denominator;
  const ticks = Array.from({ length: maxTick - minTick + 1 }, (_, index) => minTick + index);
  const counts = new Map();
  data.values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  const selectedCounts = new Map();
  data.selected.forEach((value) => selectedCounts.set(value, (selectedCounts.get(value) || 0) + 1));

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.prompt}</span>
      <span class="math-equals">uses</span>
      <span class="math-token">${data.equation}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-line-plot-layout">
      <div class="unit6-line-plot">
        <strong>${data.title}</strong>
        <div class="unit6-line-plot-row" style="--plot-ticks: ${ticks.length};">
          ${ticks.map((tick) => {
            const count = counts.get(tick) || 0;
            const selectedCount = selectedCounts.get(tick) || 0;
            return `
              <div class="unit6-line-plot-stack">
                ${Array.from({ length: count }, (_, index) => `<span class="unit6-x ${index < selectedCount ? "is-selected" : ""}">x</span>`).join("")}
              </div>
            `;
          }).join("")}
        </div>
        <div class="unit6-line-labels" style="--plot-ticks: ${ticks.length};">
          ${ticks.map((tick) => `<span>${unit6LinePlotLabel(tick, data.denominator)}</span>`).join("")}
        </div>
      </div>
      <div class="unit6-card is-highlight">
        <span>Measurement cards</span>
        <div class="unit6-measurement-tray">
          ${data.values.map((value) => `<span class="unit6-measurement-card">${unit6LinePlotLabel(value, data.denominator)}</span>`).join("")}
        </div>
      </div>
    </div>
  `;

  if (message) {
    message.textContent = data.message;
  }
  setActive("[data-unit6-line-plot]", state.unit6LinePlotKey, "unit6LinePlot");
}

function renderUnit6Scaling() {
  const data = unit6ScaleData[state.unit6ScaleKey] || unit6ScaleData.halfOf8;
  const equation = qs("#unit6ScalingEquation");
  const board = qs("#unit6ScalingBoard");
  const message = qs("#unit6ScalingMessage");
  if (!board) return;

  const max = Math.max(data.original, data.product);
  const originalPosition = `${Math.min(100, data.original / max * 92)}%`;
  const productPosition = `${Math.min(100, data.product / max * 92)}%`;
  const originalWidth = `${Math.max(8, data.original / max * 100)}%`;
  const productWidth = `${Math.max(8, data.product / max * 100)}%`;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">is</span>
      <span class="math-token">${data.comparison} than ${data.original}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-scaling-layout">
      <div>
        <div class="unit6-scale-track" aria-label="Number line for original and scaled product">
          <span class="unit6-scale-point is-original" style="left: ${originalPosition};"><span>start ${data.original}</span></span>
          <span class="unit6-scale-point" style="left: ${productPosition};"><span>product ${data.productText}</span></span>
        </div>
        <div class="unit6-scale-bars">
          <div class="unit6-scale-bar" style="--bar-width: ${originalWidth};">
            <span>original</span>
            <div></div>
          </div>
          <div class="unit6-scale-bar is-product" style="--bar-width: ${productWidth};">
            <span>product</span>
            <div></div>
          </div>
        </div>
      </div>
      <article class="unit6-card is-highlight">
        <span>Scale factor</span>
        <strong>${data.factorText}</strong>
        <p>Predict the size first: shrink, same, or grow.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = data.message;
  }
  setActive("[data-unit6-scale]", state.unit6ScaleKey, "unit6Scale");
}

function renderUnit6Customary() {
  const data = unit6CustomaryData[state.unit6CustomaryKey] || unit6CustomaryData.feetToInches;
  const equation = qs("#unit6CustomaryEquation");
  const board = qs("#unit6CustomaryBoard");
  const message = qs("#unit6CustomaryMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.operation}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.result}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-conversion-layout">
      <div class="unit6-conversion-strip">
        <div>
          <span class="unit6-small-label">Start</span>
          <strong>${data.from}</strong>
        </div>
        <div>
          <span class="unit6-small-label">Relationship card</span>
          <strong>${data.relation}</strong>
        </div>
        <div>
          <span class="unit6-small-label">Rename</span>
          <strong>${data.result}</strong>
        </div>
      </div>
      <article class="unit6-card is-highlight">
        <span>Conversion factor</span>
        <strong>${data.factor}</strong>
        <p>Customary units use facts like 12, 3, 4, and 16 instead of powers of 10.</p>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-customary]", state.unit6CustomaryKey, "unit6Customary");
}

function renderUnit6MultiStep() {
  const data = unit6MultiStepData[state.unit6MultiStepKey] || unit6MultiStepData.runner;
  const equation = qs("#unit6MultiStepEquation");
  const board = qs("#unit6MultiStepBoard");
  const message = qs("#unit6MultiStepMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit6-flow-layout">
      <article class="unit6-card is-highlight">
        <span>Story</span>
        <p>${data.context}</p>
      </article>
      <div class="unit6-flow-steps">
        ${data.steps.map((step, index) => `
          <article class="unit6-flow-step">
            <span class="unit6-small-label">${index + 1}. ${step.label}</span>
            <strong>${step.value}</strong>
            <p>${step.note}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-multi-step]", state.unit6MultiStepKey, "unit6MultiStep");
}

function renderUnit6ConversionTable() {
  const data = unit6ConversionTableData[state.unit6ConversionTableKey] || unit6ConversionTableData.length;
  const equation = qs("#unit6ConversionTableEquation");
  const board = qs("#unit6ConversionTableBoard");
  const message = qs("#unit6ConversionTableMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit6-table-card">
      <h3>${data.title}</h3>
      <table class="unit6-table">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Amount</th>
            <th>Unit size</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          ${data.rows.map((row, index) => `
            <tr>
              <td class="${index === 1 ? "is-active" : ""}">${row.unit}</td>
              <td class="is-result">${row.amount}</td>
              <td>${row.size}</td>
              <td>${row.count}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-conversion-table]", state.unit6ConversionTableKey, "unit6ConversionTable");
}

function renderUnit6FractionStory() {
  const data = unit6FractionStoryData[state.unit6FractionStoryKey] || unit6FractionStoryData.recipe;
  const equation = qs("#unit6FractionStoryEquation");
  const board = qs("#unit6FractionStoryBoard");
  const message = qs("#unit6FractionStoryMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">becomes</span>
      <span class="math-token">${data.renamed}</span>
    `;
  }

  const resultPieces = data.operation === "add" ? data.parts[0] + data.parts[1] : data.parts[0] - data.parts[1];
  board.innerHTML = `
    <div class="unit6-story-layout">
      <article class="unit6-card is-highlight">
        <span>Story</span>
        <p>${data.story}</p>
      </article>
      <div class="unit6-story-steps">
        <article class="unit6-card">
          <span>Whole</span>
          <strong>${data.whole}</strong>
          <p>All fractions describe parts of this one whole.</p>
        </article>
        <article class="unit6-card">
          <span>Rename</span>
          <strong>${data.renamed}</strong>
          ${renderFractionSegmentBar(data.parts[0], data.denominator, { className: "is-large" })}
          ${renderFractionSegmentBar(data.parts[1], data.denominator, { className: "is-large is-secondary" })}
        </article>
        <article class="unit6-card is-highlight">
          <span>Result</span>
          <strong>${data.result}</strong>
          ${renderFractionSegmentBar(resultPieces, data.denominator, { className: "is-large is-renamed" })}
        </article>
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-fraction-story]", state.unit6FractionStoryKey, "unit6FractionStory");
}

function renderUnit6Strategy() {
  const data = unit6StrategyData[state.unit6StrategyKey] || unit6StrategyData.add;
  const equation = qs("#unit6StrategyEquation");
  const board = qs("#unit6StrategyBoard");
  const message = qs("#unit6StrategyMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.result}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-strategy-grid">
      <article class="unit6-card is-highlight">
        <span>Common denominator</span>
        <strong>${data.common}</strong>
        ${renderFractionSegmentBar(data.first, data.denominator, { className: "is-large" })}
        ${renderFractionSegmentBar(data.second, data.denominator, { className: "is-large is-secondary" })}
      </article>
      <article class="unit6-card">
        <span>Benchmark check</span>
        <p>${data.benchmark}</p>
      </article>
      <article class="unit6-card">
        <span>Number line check</span>
        <p>${data.line}</p>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-strategy]", state.unit6StrategyKey, "unit6Strategy");
}

function renderUnit6MixedOperation() {
  const data = unit6MixedOperationData[state.unit6MixedOperationKey] || unit6MixedOperationData.add;
  const equation = qs("#unit6MixedOperationEquation");
  const board = qs("#unit6MixedOperationBoard");
  const message = qs("#unit6MixedOperationMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.result}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-flow-steps">
      ${data.steps.map((step, index) => `
        <article class="unit6-flow-step">
          <span class="unit6-small-label">${index + 1}. ${step.label}</span>
          <strong>${step.value}</strong>
        </article>
      `).join("")}
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-mixed-op]", state.unit6MixedOperationKey, "unit6MixedOperation");
}

function renderUnit6MiniLinePlot({ title, denominator, minWhole, maxWhole, values, missingValues = [] }) {
  const minTick = minWhole * denominator;
  const maxTick = maxWhole * denominator;
  const ticks = Array.from({ length: maxTick - minTick + 1 }, (_, index) => minTick + index);
  const counts = new Map();
  values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  const missingCounts = new Map();
  missingValues.forEach((value) => missingCounts.set(value, (missingCounts.get(value) || 0) + 1));

  return `
    <div class="unit6-line-plot">
      <strong>${title}</strong>
      <div class="unit6-line-plot-row" style="--plot-ticks: ${ticks.length};">
        ${ticks.map((tick) => {
          const count = counts.get(tick) || 0;
          const missingCount = missingCounts.get(tick) || 0;
          return `
            <div class="unit6-line-plot-stack">
              ${Array.from({ length: count }, () => `<span class="unit6-x">x</span>`).join("")}
              ${Array.from({ length: missingCount }, () => `<span class="unit6-x is-missing">?</span>`).join("")}
            </div>
          `;
        }).join("")}
      </div>
      <div class="unit6-line-labels" style="--plot-ticks: ${ticks.length};">
        ${ticks.map((tick) => `<span>${unit6LinePlotLabel(tick, denominator)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderUnit6LinePlotBuild() {
  const data = unit6LineBuildData[state.unit6LineBuildKey] || unit6LineBuildData.ribbons;
  const equation = qs("#unit6LinePlotBuildEquation");
  const board = qs("#unit6LinePlotBuildBoard");
  const message = qs("#unit6LinePlotBuildMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit6-line-plot-layout">
      ${renderUnit6MiniLinePlot(data)}
      <article class="unit6-card is-highlight">
        <span>Measurement cards</span>
        <div class="unit6-measurement-tray">
          ${data.values.map((value) => `<span class="unit6-measurement-card">${unit6LinePlotLabel(value, data.denominator)}</span>`).join("")}
        </div>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-line-build]", state.unit6LineBuildKey, "unit6LineBuild");
}

function renderUnit6LinePlotMissing() {
  const data = unit6LineMissingData[state.unit6LineMissingKey] || unit6LineMissingData.missingRibbon;
  const equation = qs("#unit6LinePlotMissingEquation");
  const board = qs("#unit6LinePlotMissingBoard");
  const message = qs("#unit6LinePlotMissingMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit6-line-plot-layout">
      ${renderUnit6MiniLinePlot({
        title: data.title,
        denominator: data.denominator,
        minWhole: data.minWhole,
        maxWhole: data.maxWhole,
        values: data.shownValues,
        missingValues: data.missingValues
      })}
      <article class="unit6-card is-highlight">
        <span>Clues</span>
        <p>${data.clue}</p>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-line-missing]", state.unit6LineMissingKey, "unit6LineMissing");
}

function renderUnit6ScaleLine() {
  const data = unit6ScaleLineData[state.unit6ScaleLineKey] || unit6ScaleLineData.half;
  const equation = qs("#unit6ScaleLineEquation");
  const board = qs("#unit6ScaleLineBoard");
  const message = qs("#unit6ScaleLineMessage");
  if (!board) return;

  const max = Math.max(data.original, data.product, 12);
  const originalPosition = `${data.original / max * 100}%`;
  const productPosition = `${data.product / max * 100}%`;

  if (equation) {
    equation.innerHTML = `
      <span class="math-token">${data.expression}</span>
      <span class="math-equals">=</span>
      <span class="math-token">${data.product}</span>
    `;
  }

  board.innerHTML = `
    <div class="unit6-scale-line-layout">
      <div class="unit6-scale-track">
        <span class="unit6-scale-point is-original" style="left: ${originalPosition};"><span>8</span></span>
        <span class="unit6-scale-point" style="left: ${productPosition};"><span>${data.product}</span></span>
      </div>
      <article class="unit6-card is-highlight">
        <span>Factor</span>
        <strong>${data.factor}</strong>
        <p>${data.message}</p>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit6-scale-line]", state.unit6ScaleLineKey, "unit6ScaleLine");
}

function renderUnit6ProductCompare() {
  const board = qs("#unit6ProductCompareBoard");
  const message = qs("#unit6ProductCompareMessage");
  if (!board) return;

  board.innerHTML = `
    <div class="unit6-product-compare-grid">
      <article class="unit6-card">
        <span>Shrinks</span>
        <strong>${fractionHTML("2", "3")} x 15</strong>
        <p>The factor is less than 1, so the product is less than 15.</p>
      </article>
      <article class="unit6-card is-highlight">
        <span>Stays same</span>
        <strong>1 x 15</strong>
        <p>The factor is exactly 1, so the product is 15.</p>
      </article>
      <article class="unit6-card">
        <span>Grows</span>
        <strong>${fractionHTML("5", "4")} x 15</strong>
        <p>The factor is greater than 1, so the product is greater than 15.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = "This is the Unit 6 habit: decide product size first, then calculate.";
  }
}

function formatUnit4Number(value) {
  return Number(value).toLocaleString("en-US");
}

function renderUnit4AreaCells(data) {
  return data.side.map((sidePart) => (
    `<div class="unit4-area-side">${formatUnit4Number(sidePart)}</div>${
    data.top.map((topPart) => {
      const product = sidePart * topPart;
      return `
        <article class="unit4-area-cell">
          <span>${formatUnit4Number(topPart)} x ${formatUnit4Number(sidePart)}</span>
          <strong>${formatUnit4Number(product)}</strong>
        </article>
      `;
    }).join("")}`
  )).join("");
}

function renderUnit4Area() {
  const data = unit4AreaData[state.unit4AreaKey] || unit4AreaData.twentyThreeByEighteen;
  const equation = qs("#unit4AreaEquation");
  const board = qs("#unit4AreaBoard");
  const message = qs("#unit4AreaMessage");
  if (!board) return;

  const total = data.factors[0] * data.factors[1];
  const partials = data.side.flatMap((sidePart) => data.top.map((topPart) => sidePart * topPart));
  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.factors[0]} x ${data.factors[1]}</span><span class="math-equals">=</span><span class="math-token">${partials.map(formatUnit4Number).join(" + ")}</span><span class="math-equals">=</span><span class="math-token">${formatUnit4Number(total)}</span>`;
  }

  board.innerHTML = `
    <div class="unit4-area-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Area model</span>
        <h3>${data.factors[0]} x ${data.factors[1]}</h3>
        <p>${data.note}</p>
      </article>
        <div class="unit4-area-model" aria-label="Partial product area model">
          <div class="unit4-area-corner"></div>
          ${data.top.map((part) => `<div class="unit4-area-heading">${formatUnit4Number(part)}</div>`).join("")}
          ${renderUnit4AreaCells(data)}
        </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-area]", state.unit4AreaKey, "unit4Area");
}

function renderUnit4Algorithm() {
  const data = unit4AlgorithmData[state.unit4AlgorithmKey] || unit4AlgorithmData.twentyThreeByEighteen;
  const equation = qs("#unit4AlgorithmEquation");
  const board = qs("#unit4AlgorithmBoard");
  const message = qs("#unit4AlgorithmMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.factors[0]} x ${data.factors[1]}</span><span class="math-equals">=</span><span class="math-token">${formatUnit4Number(data.total)}</span>`;
  }

  board.innerHTML = `
    <div class="unit4-algorithm-layout">
      <div class="unit4-partial-list">
        ${data.rows.map((row) => `
          <article class="unit6-card">
            <span>${row.place}</span>
            <strong>${row.label}</strong>
            <p>${formatUnit4Number(row.value)}</p>
          </article>
        `).join("")}
      </div>
      <article class="unit4-vertical-work" aria-label="Standard algorithm place-value work">
        <div>${data.factors[0]}</div>
        <div>x ${data.factors[1]}</div>
        <hr>
        ${data.rows.map((row, index) => `<div class="${index ? "is-tens-row" : ""}">${formatUnit4Number(row.value)}</div>`).join("")}
        <hr>
        <strong>${formatUnit4Number(data.total)}</strong>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-algorithm]", state.unit4AlgorithmKey, "unit4Algorithm");
}

function renderUnit4DigitPlacement() {
  const data = unit4DigitData[state.unit4DigitKey] || unit4DigitData.largest;
  const equation = qs("#unit4DigitEquation");
  const board = qs("#unit4DigitBoard");
  const message = qs("#unit4DigitMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-strategy-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Digit placement</span>
        <h3>${data.title}</h3>
        <p>Compare products by asking which digits are doing tens work and which are doing ones work.</p>
      </article>
      <div class="unit8-card-grid">
        ${data.products.map((product) => `
          <article class="unit6-card${product.highlight ? " is-highlight" : ""}">
            <span>${product.expression}</span>
            <strong>${product.value}</strong>
            <p>${product.note}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-digit]", state.unit4DigitKey, "unit4Digit");
}

function renderUnit4ChunkTable(chunks, divisor) {
  return `
    <div class="unit4-chunk-table" role="table" aria-label="Partial quotient chunks">
      <div role="row">
        <span role="columnheader">chunk</span>
        <span role="columnheader">subtract</span>
        <span role="columnheader">left</span>
      </div>
      ${chunks.map((chunk) => `
        <div role="row">
          <span role="cell">${chunk.quotient} groups</span>
          <span role="cell">${divisor} x ${chunk.quotient} = ${formatUnit4Number(chunk.product)}</span>
          <span role="cell">${formatUnit4Number(chunk.remaining)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderUnit4Quotient() {
  const data = unit4QuotientData[state.unit4QuotientKey] || unit4QuotientData.sixHundredEight;
  const equation = qs("#unit4QuotientEquation");
  const board = qs("#unit4QuotientBoard");
  const message = qs("#unit4QuotientMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span><span class="math-equals">=</span><span class="math-token">${data.total}${data.remainder ? ` R${data.remainder}` : ""}</span>`;
  }

  board.innerHTML = `
    <div class="unit4-quotient-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Start</span>
        <h3>${formatUnit4Number(data.dividend)} split by ${data.divisor}</h3>
        <p>Subtract useful groups until the remaining amount is smaller than the divisor.</p>
      </article>
      ${renderUnit4ChunkTable(data.chunks, data.divisor)}
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-quotient]", state.unit4QuotientKey, "unit4Quotient");
}

function renderUnit4Paths() {
  const data = unit4PathData[state.unit4PathKey] || unit4PathData.sixHundredEight;
  const equation = qs("#unit4PathEquation");
  const board = qs("#unit4PathBoard");
  const message = qs("#unit4PathMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span><span class="math-equals">=</span><span class="math-token">${data.total}</span>`;
  }

  const divisor = unit4QuotientData[state.unit4PathKey]?.divisor || unit4QuotientData.sixHundredEight.divisor;
  board.innerHTML = `
    <div class="unit4-path-layout">
      ${data.paths.map((pathData) => `
        <article class="unit4-path-card">
          <h3>${pathData.name}</h3>
          ${renderUnit4ChunkTable(pathData.chunks, divisor)}
          <p>${pathData.chunks.map((chunk) => chunk.quotient).join(" + ")} = ${data.total}</p>
        </article>
      `).join("")}
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-path]", state.unit4PathKey, "unit4Path");
}

function renderUnit4Remainder() {
  const data = unit4RemainderData[state.unit4RemainderKey] || unit4RemainderData.noodle;
  const equation = qs("#unit4RemainderEquation");
  const board = qs("#unit4RemainderBoard");
  const message = qs("#unit4RemainderMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-strategy-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Story context</span>
        <h3>${data.title}</h3>
        <p>${data.interpretation}</p>
      </article>
      <article class="unit6-card is-highlight">
        <span>Remainder move</span>
        <strong>${data.action}</strong>
        <p>The operation is not complete until the leftover has a story meaning.</p>
      </article>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-remainder]", state.unit4RemainderKey, "unit4Remainder");
}

function renderUnit4Application() {
  const data = unit4ApplicationData[state.unit4ApplicationKey] || unit4ApplicationData.area;
  const equation = qs("#unit4ApplicationEquation");
  const board = qs("#unit4ApplicationBoard");
  const message = qs("#unit4ApplicationMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit4-application-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Application model</span>
        <h3>${data.title}</h3>
        <strong>${data.equation}</strong>
        <p>Find what is missing before choosing multiply or divide.</p>
      </article>
      <div class="unit4-application-table" role="table" aria-label="${data.title}">
        ${data.rows.map(([label, value]) => `
          <div role="row">
            <span role="cell">${label}</span>
            <strong role="cell">${value}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit4-application]", state.unit4ApplicationKey, "unit4Application");
}

function renderUnit4TeachMe() {
  renderUnit4Area();
  renderUnit4Algorithm();
  renderUnit4DigitPlacement();
  renderUnit4Quotient();
  renderUnit4Paths();
  renderUnit4Remainder();
  renderUnit4Application();
}

function renderUnit1CubeGrid(length, width, options = {}) {
  const total = Math.max(1, length * width);
  return `
    <div class="unit1-cube-grid ${options.className || ""}" style="--unit1-cols: ${length};" aria-hidden="true">
      ${Array.from({ length: total }, (_, index) => {
        const active = options.activeCells?.includes(index) ? " is-active" : "";
        return `<span class="unit1-cube${active}"></span>`;
      }).join("")}
    </div>
  `;
}

function renderUnit1LayerStack(length, width, height, options = {}) {
  const layerCount = Math.max(1, Math.min(6, height));
  return `
    <div class="unit1-layer-stack" style="--unit1-layers: ${layerCount};">
      ${Array.from({ length: layerCount }, (_, index) => `
        <article class="unit1-layer-card${index === 0 || options.highlightAll ? " is-highlight" : ""}">
          <span>Layer ${index + 1}</span>
          ${renderUnit1CubeGrid(length, width)}
        </article>
      `).join("")}
    </div>
  `;
}

function renderUnit1DimensionCards(length, width, height) {
  const base = length * width;
  const volume = base * height;
  return renderUnit8Cards([
    { label: "Length", value: `${length} cubes`, note: "one row direction" },
    { label: "Width", value: `${width} cubes`, note: "the other row direction" },
    { label: "Height", value: `${height} ${plural(height, "layer")}`, note: "how many copies of the base" },
    { label: "Volume", value: `${volume} cubic units`, note: `${base} cubes per layer x ${height}` }
  ]);
}

function renderUnit1CubeUnits() {
  const board = qs("#unit1CubeBoard");
  const equation = qs("#unit1CubeEquation");
  const message = qs("#unit1CubeMessage");
  if (!board) return;

  const isSolid = state.unit1CubeKey === "solid";
  if (equation) {
    equation.innerHTML = isSolid
      ? `<span class="math-token">3 x 4 x 2</span><span class="math-equals">=</span><span class="math-token">24 cubic units</span>`
      : `<span class="math-token">3 x 4</span><span class="math-equals">=</span><span class="math-token">12 square units on one face</span>`;
  }

  board.innerHTML = `
    <div class="unit1-compare-layout">
      <article class="unit8-feature-card${!isSolid ? " is-active" : ""}">
        <span class="unit6-small-label">Flat face</span>
        <h3>Square units show one surface</h3>
        ${renderUnit1CubeGrid(4, 3, { className: "is-flat" })}
        <p>These 12 squares measure one face. They do not fill the inside.</p>
      </article>
      <article class="unit8-feature-card${isSolid ? " is-active" : ""}">
        <span class="unit6-small-label">Solid volume</span>
        <h3>Cubic units fill space</h3>
        ${renderUnit1LayerStack(4, 3, 2, { highlightAll: isSolid })}
        <p>Two layers of 12 unit cubes fill the prism: 24 cubic units.</p>
      </article>
    </div>
  `;

  if (message) {
    message.textContent = isSolid
      ? "Volume counts all the unit cubes in the solid, including cubes hidden behind the front face."
      : "Area is flat. It can describe a face, but it is not the whole volume.";
  }

  setActive("[data-unit1-cube]", state.unit1CubeKey, "unit1Cube");
}

function renderUnit1PrismBuilder() {
  const board = qs("#unit1PrismBoard");
  const equation = qs("#unit1PrismEquation");
  const message = qs("#unit1PrismMessage");
  if (!board) return;

  const length = clampInteger(state.unit1Length, 1, 8);
  const width = clampInteger(state.unit1Width, 1, 6);
  const height = clampInteger(state.unit1Height, 1, 6);
  const base = length * width;
  const volume = base * height;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${length} x ${width}</span><span class="math-equals">makes one layer</span><span class="math-token">${base}</span><span class="math-equals">then x ${height}</span><span class="math-token">${volume}</span>`;
  }

  board.innerHTML = `
    <div class="unit1-prism-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Build the base</span>
        <h3>${length} by ${width} layer</h3>
        ${renderUnit1CubeGrid(length, width, { className: "is-large" })}
      </article>
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Stack equal layers</span>
        <h3>${height} ${plural(height, "layer")}</h3>
        ${renderUnit1LayerStack(length, width, height)}
      </article>
    </div>
    ${renderUnit1DimensionCards(length, width, height)}
  `;

  if (message) {
    message.textContent = `${length} rows by ${width} columns makes ${base} cubes in one layer. ${height} layers make ${volume} cubic units.`;
  }

  const lengthInput = qs("#unit1LengthInput");
  const widthInput = qs("#unit1WidthInput");
  const heightInput = qs("#unit1HeightInput");
  if (lengthInput && document.activeElement !== lengthInput) lengthInput.value = length;
  if (widthInput && document.activeElement !== widthInput) widthInput.value = width;
  if (heightInput && document.activeElement !== heightInput) heightInput.value = height;
}

function renderUnit1Layers() {
  const data = unit1LayerData[state.unit1LayerKey] || unit1LayerData.twoByThreeByFour;
  const board = qs("#unit1LayerBoard");
  const equation = qs("#unit1LayerEquation");
  const message = qs("#unit1LayerMessage");
  if (!board) return;

  const base = data.length * data.width;
  const volume = base * data.height;
  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.length} x ${data.width} = ${base}</span><span class="math-equals">base layer</span><span class="math-token">${base} x ${data.height} = ${volume}</span>`;
  }

  board.innerHTML = `
    <div class="unit1-prism-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Base area</span>
        <h3>${data.title}</h3>
        ${renderUnit1CubeGrid(data.length, data.width, { className: "is-large" })}
        <p>The base layer has ${base} unit cubes.</p>
      </article>
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Height</span>
        <h3>Repeat ${data.height} ${plural(data.height, "time")}</h3>
        ${renderUnit1LayerStack(data.length, data.width, data.height, { highlightAll: true })}
      </article>
    </div>
    ${renderUnit8Cards([
      { label: "Base area", value: `${base} square units`, note: `${data.length} x ${data.width}` },
      { label: "Height", value: `${data.height} ${plural(data.height, "layer")}`, note: "how many copies of the base" },
      { label: "Volume", value: `${volume} cubic units`, note: `${base} x ${data.height}` }
    ])}
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit1-layer]", state.unit1LayerKey, "unit1Layer");
}

function renderUnit1Expressions() {
  const data = unit1ExpressionData[state.unit1ExpressionKey] || unit1ExpressionData.dimensions;
  const board = qs("#unit1ExpressionBoard");
  const equation = qs("#unit1ExpressionEquation");
  const message = qs("#unit1ExpressionMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span><span class="math-equals">=</span><span class="math-token">24 cubic units</span>`;
  }

  board.innerHTML = `
    <div class="unit1-expression-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Same prism</span>
        <h3>4 by 3 by 2</h3>
        ${renderUnit1LayerStack(4, 3, 2, { highlightAll: state.unit1ExpressionKey !== "dimensions" })}
      </article>
      <div class="unit6-card-grid">
        ${Object.entries(unit1ExpressionData).map(([key, item]) => `
          <article class="unit6-card${key === state.unit1ExpressionKey ? " is-highlight" : ""}">
            <span>${item.title}</span>
            <strong>${item.expression}</strong>
            <p>${item.message}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit1-expression]", state.unit1ExpressionKey, "unit1Expression");
}

function renderUnit1MissingDimension() {
  const data = unit1MissingData[state.unit1MissingKey] || unit1MissingData.height;
  const board = qs("#unit1MissingBoard");
  const equation = qs("#unit1MissingEquation");
  const message = qs("#unit1MissingMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span><span class="math-equals">so</span><span class="math-token">${data.result}</span>`;
  }

  board.innerHTML = `
    <div class="unit1-missing-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">${data.title}</span>
        <h3>${data.equation}</h3>
        ${renderUnit1LayerStack(...data.dimensions)}
      </article>
      <div class="unit4-application-table" role="table" aria-label="${data.title}">
        ${data.known.map(([label, value]) => `
          <div role="row">
            <span role="cell">${label}</span>
            <strong role="cell">${value}</strong>
          </div>
        `).join("")}
        <div role="row">
          <span role="cell">Missing factor</span>
          <strong role="cell">${data.result}</strong>
        </div>
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit1-missing]", state.unit1MissingKey, "unit1Missing");
}

function renderUnit1ComposedSolids() {
  const data = unit1CompositeData[state.unit1CompositeKey] || unit1CompositeData.lShape;
  const board = qs("#unit1CompositeBoard");
  const equation = qs("#unit1CompositeEquation");
  const message = qs("#unit1CompositeMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit1-composite-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Decompose</span>
        <h3>${data.title}</h3>
        <p>Mark each rectangular prism part before calculating.</p>
      </article>
      <div class="unit1-composite-parts">
        ${data.parts.map((part) => {
          const [length, width, height] = part.dimensions;
          const volume = length * width * height;
          return `
            <article class="unit1-part-card is-${part.color}${part.subtract ? " is-subtract" : ""}">
              <span>${part.subtract ? "Subtract" : "Add"} ${part.label}</span>
              <strong>${length} x ${width} x ${height} = ${volume}</strong>
              ${renderUnit1LayerStack(length, width, height)}
            </article>
          `;
        }).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit1-composite]", state.unit1CompositeKey, "unit1Composite");
}

function renderUnit1TeachMe() {
  renderUnit1CubeUnits();
  renderUnit1PrismBuilder();
  renderUnit1Layers();
  renderUnit1Expressions();
  renderUnit1MissingDimension();
  renderUnit1ComposedSolids();
}

function renderUnit8Cards(cards) {
  return `
    <div class="unit8-card-grid">
      ${cards.map((card) => `
        <article class="unit6-card${card.highlight ? " is-highlight" : ""}">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          ${card.note ? `<p>${card.note}</p>` : ""}
        </article>
      `).join("")}
    </div>
  `;
}

function renderUnit8Computation() {
  const data = unit8ComputationData[state.unit8ComputationKey] || unit8ComputationData.largestProduct;
  const equation = qs("#unit8ComputationEquation");
  const board = qs("#unit8ComputationBoard");
  const message = qs("#unit8ComputationMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-strategy-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Strategy focus</span>
        <h3>${data.title}</h3>
        <p>Choose the structure first. Then the arithmetic has a reason.</p>
      </article>
      ${renderUnit8Cards(data.cards.map((card, index) => ({ ...card, highlight: index === 0 })))}
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit8-computation]", state.unit8ComputationKey, "unit8Computation");
}

function renderUnit8Prism(dimensions) {
  const [length, width, height] = dimensions;
  const cells = Math.min(length * width, 48);
  return `
    <div class="unit8-prism" style="--unit8-cols: ${Math.min(length, 12)};">
      <div class="unit8-prism-grid">
        ${Array.from({ length: cells }, (_, index) => `<span class="${index < width * Math.min(length, 12) ? "is-front-layer" : ""}"></span>`).join("")}
      </div>
      <div class="unit8-prism-depth" style="--unit8-depth: ${Math.min(height, 6)};">
        ${Array.from({ length: Math.min(height, 6) }, (_, index) => `<span>layer ${index + 1}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderUnit8Volume() {
  const data = unit8VolumeData[state.unit8VolumeKey] || unit8VolumeData.cubes126;
  const equation = qs("#unit8VolumeEquation");
  const board = qs("#unit8VolumeBoard");
  const message = qs("#unit8VolumeMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.equation}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-volume-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Context</span>
        <h3>${data.title}</h3>
        ${renderUnit8Prism(data.dimensions)}
      </article>
      ${renderUnit8Cards(data.cards.map((card, index) => ({ ...card, highlight: index === 1 })))}
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit8-volume]", state.unit8VolumeKey, "unit8Volume");
}

function renderUnit8FractionGame() {
  const data = unit8FractionGameData[state.unit8FractionGameKey] || unit8FractionGameData.sum;
  const equation = qs("#unit8FractionGameEquation");
  const board = qs("#unit8FractionGameBoard");
  const message = qs("#unit8FractionGameMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-game-board">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Game goal</span>
        <h3>${data.title}</h3>
        <p>Place each spun number before the final calculation. Once a box is filled, it stays.</p>
      </article>
      <div class="unit8-slot-row">
        ${data.slots.map((slot) => `
          <article class="unit8-slot-card">
            <span>${slot.label}</span>
            <strong>${slot.value}</strong>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit8-fraction-game]", state.unit8FractionGameKey, "unit8FractionGame");
}

function renderUnit8Decimal() {
  const data = unit8DecimalData[state.unit8DecimalKey] || unit8DecimalData.raceOne;
  const equation = qs("#unit8DecimalEquation");
  const board = qs("#unit8DecimalBoard");
  const message = qs("#unit8DecimalMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">roll ${data.roll}</span><span class="math-equals">current total</span><span class="math-token">${data.current}</span>`;
  }

  const maxTotal = state.unit8DecimalKey === "race500" ? 500 : 1;
  board.innerHTML = `
    <div class="unit8-decimal-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Target thinking</span>
        <h3>${data.title}</h3>
        <p>A digit is not just a digit. Its place controls the size of the move.</p>
      </article>
      <div class="unit8-decimal-options">
        ${data.choices.map((choice) => `
          <article class="unit8-decimal-choice">
            <span>${choice.label}</span>
            <strong>${data.current} + ${choice.value} = ${choice.total}</strong>
            <div class="unit8-progress" style="--unit8-progress: ${Math.min(100, (choice.total / maxTotal) * 100)}%;"></div>
            <p>${choice.note}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit8-decimal]", state.unit8DecimalKey, "unit8Decimal");
}

function renderUnit8Product() {
  const data = unit8ProductData[state.unit8ProductKey] || unit8ProductData.greatest;
  const equation = qs("#unit8ProductEquation");
  const board = qs("#unit8ProductBoard");
  const message = qs("#unit8ProductMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.expression}</span>`;
  }

  board.innerHTML = `
    <div class="unit8-product-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">Goal</span>
        <h3>${data.title}</h3>
        <strong>${data.result}</strong>
      </article>
      <div class="unit8-factor-stack">
        ${data.factors.map((factor, index) => `
          <article class="unit6-card ${factor.includes("greater") ? "is-highlight" : ""}">
            <span>Factor ${index + 1}</span>
            <strong>${factor}</strong>
            <p>${factor.includes("less") ? "This factor shrinks the product." : factor.includes("equal") ? "This factor keeps the other amount." : "This factor grows the product."}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `;

  if (message) message.textContent = data.message;
  setActive("[data-unit8-product]", state.unit8ProductKey, "unit8Product");
}

function renderUnit8Routine() {
  const data = unit8RoutineData[state.unit8RoutineKey] || unit8RoutineData.notice;
  const equation = qs("#unit8RoutineEquation");
  const board = qs("#unit8RoutineBoard");
  const message = qs("#unit8RoutineMessage");
  if (!board) return;

  if (equation) {
    equation.innerHTML = `<span class="math-token">${data.title}</span><span class="math-equals">invites</span><span class="math-token">student thinking</span>`;
  }

  board.innerHTML = `
    <div class="unit8-routine-layout">
      <article class="unit8-feature-card">
        <span class="unit6-small-label">${data.source}</span>
        <h3>${data.title}</h3>
        <p>${data.purpose}</p>
      </article>
      <article class="unit6-card">
        <span>Design move</span>
        <strong>Hide the answer path</strong>
        <p>${data.design}</p>
      </article>
      <article class="unit6-card is-highlight">
        <span>Starter prompt</span>
        <strong>${data.prompt}</strong>
      </article>
    </div>
  `;

  if (message) message.textContent = "A good Unit 8 routine has a clear purpose and leaves room for classmates to reason.";
  setActive("[data-unit8-routine]", state.unit8RoutineKey, "unit8Routine");
}

function renderUnit8TeachMe() {
  renderUnit8Computation();
  renderUnit8Volume();
  renderUnit8FractionGame();
  renderUnit8Decimal();
  renderUnit8Product();
  renderUnit8Routine();
}

function renderUnit6TeachMe() {
  renderUnit6PlaceValue();
  renderUnit6Power();
  renderUnit6Move();
  renderUnit6Conversion();
  renderUnit6Predict();
  renderUnit6Customary();
  renderUnit6MultiStep();
  renderUnit6ConversionTable();
  renderUnit6Regroup();
  renderUnit6FractionStory();
  renderUnit6Strategy();
  renderUnit6MixedOperation();
  renderUnit6LinePlot();
  renderUnit6LinePlotBuild();
  renderUnit6LinePlotMissing();
  renderUnit6Scaling();
  renderUnit6ScaleLine();
  renderUnit6ProductCompare();
}

function unitsFromDataset(element) {
  return String(element?.dataset?.units || "")
    .split(/\s+/)
    .filter(Boolean);
}

function topicSupportsUnit(topic, unit = state.unitFocus) {
  if (unit === "all") return true;
  return (topicUnits[topic] || []).includes(unit);
}

function elementSupportsUnit(element, unit = state.unitFocus) {
  if (unit === "all") return true;
  const units = unitsFromDataset(element);
  return units.length ? units.includes(unit) : true;
}

function renderUnitFocus() {
  const focus = state.unitFocus;
  const label = qs("#unitFocusLabel");
  if (label) {
    label.textContent = unitFocusLabels[focus] || "All Units";
  }

  setActive("[data-unit-focus]", focus, "unitFocus");
  qsa("[data-unit-focus]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.unitFocus === focus ? "true" : "false");
  });

  const unit6Path = qs("#unit6LearningPath");
  if (unit6Path) {
    unit6Path.hidden = focus !== "unit6";
  }

  qsa("[data-unit-path-topic]").forEach((button) => {
    button.classList.toggle("is-active", focus === "unit6" && button.dataset.unitPathTopic === state.topic);
  });

  qsa("[data-topic]").forEach((button) => {
    const isMatch = focus === "all" || topicSupportsUnit(button.dataset.topic, focus);
    button.classList.toggle("is-unit-focus-match", focus !== "all" && isMatch);
    button.classList.toggle("is-unit-focus-dim", focus !== "all" && !isMatch);
    button.disabled = focus !== "all" && !isMatch;
    button.setAttribute("aria-disabled", button.disabled ? "true" : "false");
  });
}

function applyUnitFocusToVisiblePane() {
  qsa(".lesson-pane:not([hidden]) [data-units]").forEach((element) => {
    if (element.matches("[data-topic-pane]")) return;
    element.hidden = !elementSupportsUnit(element);
  });
}

function cancelRolloverFrame() {
  if (rolloverFrameId !== null) {
    window.cancelAnimationFrame(rolloverFrameId);
  }

  rolloverFrameId = null;
  rolloverLastFrameTime = null;
}

function syncRolloverControls() {
  if (!state.growthAnimation) return;

  const progress = Math.round(state.growthAnimation.progress * 100);
  const slider = qs("#rolloverProgress");
  const output = qs('.rollover-slider-label output');
  const playButton = qs("#rolloverPlayPause");
  const finishButton = qs("#rolloverFinish");

  if (slider) {
    slider.value = progress;
  }

  if (output) {
    output.textContent = `${progress}%`;
  }

  if (playButton) {
    playButton.textContent = state.growthAnimation.isPlaying ? "Pause" : "Play";
  }

  if (finishButton) {
    finishButton.textContent = state.growthAnimation.progress >= 1 ? "Done" : "Finish";
  }
}

function syncMovingPlatePosition() {
  if (!state.growthAnimation) return;

  const movingPlate = qs(".moving-ten-plate");
  if (!movingPlate) return;

  const movesToOnes = isBorrowMoveAnimation();
  const moveProgress = movesToOnes
    ? getBorrowMoveProgress(getEffectiveBorrowProgress(state.growthAnimation))
    : getEffectiveMoveProgress(state.growthAnimation);
  if (movesToOnes && state.growthAnimation.motionStartPoint && state.growthAnimation.motionEndPoint) {
    const start = state.growthAnimation.motionStartPoint;
    const end = state.growthAnimation.motionEndPoint;
    movingPlate.style.setProperty("--move-left", `${start.x + (end.x - start.x) * moveProgress}px`);
    movingPlate.style.setProperty("--move-top", `${start.y + (end.y - start.y) * moveProgress}px`);
    movingPlate.style.setProperty("--move-scale", (1 - 0.04 * moveProgress).toFixed(3));
    return;
  }

  if (getAnimationType() === "add-many-to-tens") {
    const growthPlaces = qs("#growthPlaces");
    const onesPlace = qs("#growthOnesPlace");
    const tensPlace = qs("#growthTensPlace");
    if (growthPlaces && onesPlace && tensPlace) {
      const containerRect = growthPlaces.getBoundingClientRect();
      const onesRect = onesPlace.getBoundingClientRect();
      const tensRect = tensPlace.getBoundingClientRect();
      const start = {
        x: onesRect.right - containerRect.left - 58,
        y: onesRect.top - containerRect.top + 74
      };
      const end = {
        x: tensRect.left + tensRect.width / 2 - containerRect.left,
        y: tensRect.top + tensRect.height / 2 - containerRect.top
      };
      movingPlate.style.setProperty("--move-left", `${start.x + (end.x - start.x) * moveProgress}px`);
      movingPlate.style.setProperty("--move-top", `${start.y + (end.y - start.y) * moveProgress}px`);
      movingPlate.style.setProperty("--move-scale", (0.9 - 0.02 * moveProgress).toFixed(3));
      return;
    }
  }

  const desktopStart = movesToOnes ? 25 : 75;
  const desktopDelta = movesToOnes ? 50 : -50;
  const mobileStart = movesToOnes ? 26 : 74;
  const mobileDelta = movesToOnes ? 48 : -48;
  movingPlate.style.setProperty("--move-left", `${desktopStart + desktopDelta * moveProgress}%`);
  movingPlate.style.setProperty("--move-mobile-top", `${mobileStart + mobileDelta * moveProgress}%`);
  movingPlate.style.setProperty("--move-scale", (1 - 0.04 * moveProgress).toFixed(3));
}

function syncMovingCookiePosition() {
  const movingCookie = qs(".moving-cookie");
  if (!movingCookie) return;

  const motion = getActiveMovingCookie();
  if (!motion) return;

  const tray = qs("#cookieSideTray");
  const movingTraySlot = qs("#cookieSideTray .tray-cookie-slot.is-moving-slot");
  const onesPlate = qs("#growthOnesPlate");
  const startElement = motion.direction === "add" ? (movingTraySlot || tray) : onesPlate;
  const endElement = motion.direction === "add" ? onesPlate : (movingTraySlot || tray);
  const startPoint = getPointRelativeToGrowthPlaces(startElement);
  const endPoint = getPointRelativeToGrowthPlaces(endElement);

  if (!startPoint || !endPoint) return;

  const progress = motion.progress;
  const lift = Math.sin(progress * Math.PI) * -22;
  const x = startPoint.x + (endPoint.x - startPoint.x) * progress;
  const y = startPoint.y + (endPoint.y - startPoint.y) * progress + lift;

  movingCookie.style.setProperty("--cookie-left", `${x}px`);
  movingCookie.style.setProperty("--cookie-top", `${y}px`);
  movingCookie.style.setProperty("--cookie-scale", "1");
}

function syncCookieSideTrayPosition() {
  const tray = qs("#cookieSideTray");
  const toolSurface = qs("#place-growth .tool-surface");
  const onesPlace = qs("#growthOnesPlace");
  const growthPlaces = qs("#growthPlaces");
  if (!tray || !toolSurface || !onesPlace || !growthPlaces) return;

  const containerRect = growthPlaces.getBoundingClientRect();
  const toolRect = toolSurface.getBoundingClientRect();
  const onesRect = onesPlace.getBoundingClientRect();
  const trayWidth = tray.offsetWidth || 84;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const outsideGap = 12;
  let x = toolRect.right - containerRect.left + outsideGap + trayWidth / 2;
  const y = onesRect.top - containerRect.top + 92;
  const wouldOverflowViewport = containerRect.left + x + trayWidth / 2 + outsideGap > viewportWidth;

  if (wouldOverflowViewport) {
    const fallbackRight = onesRect.right - containerRect.left - outsideGap - trayWidth / 2;
    const fallbackMax = containerRect.width - outsideGap - trayWidth / 2;
    x = Math.max(outsideGap + trayWidth / 2, Math.min(fallbackRight, fallbackMax));
  }

  tray.style.setProperty("--tray-left", `${x}px`);
  tray.style.setProperty("--tray-top", `${y}px`);
}

function syncTimelineVisuals() {
  syncMovingPlatePosition();
  syncCookieSideTrayPosition();
  syncMovingCookiePosition();
}

function setRolloverProgress(progress, renderMode = "full") {
  if (!state.growthAnimation) return;

  const previousRenderMarker = getTimelineRenderMarker();
  state.growthAnimation.progress = Math.max(0, Math.min(1, progress));
  if (state.growthAnimation.progress >= 1) {
    state.growthAnimation.progress = 1;
    state.growthAnimation.isPlaying = false;
    state.growthCount = state.growthAnimation.to;
    state.recentRegroupTensCount = ["ones-to-tens", "add-many-to-tens"].includes(getAnimationType())
      ? Math.floor(state.growthAnimation.to / 10)
      : null;
    cancelRolloverFrame();
    if (!state.showRolloverBar) {
      state.growthAnimation = null;
      renderGrowthScene();
      return;
    }
  } else {
    state.growthCount = state.growthAnimation.from;
    state.recentRegroupTensCount = null;
  }

  const nextRenderMarker = getTimelineRenderMarker();
  if (
    renderMode === "auto"
    && previousRenderMarker === nextRenderMarker
  ) {
    syncRolloverControls();
    syncTimelineVisuals();
    return;
  }

  if (renderMode) {
    renderGrowthScene();
  } else {
    syncRolloverControls();
    syncTimelineVisuals();
  }
}

function advanceRollover(timestamp) {
  rolloverFrameId = null;
  if (!state.growthAnimation?.isPlaying) return;

  if (rolloverLastFrameTime === null) {
    rolloverLastFrameTime = timestamp;
  }

  const elapsed = timestamp - rolloverLastFrameTime;
  rolloverLastFrameTime = timestamp;
  setRolloverProgress(state.growthAnimation.progress + elapsed / getTimelineDuration(), "auto");

  if (state.growthAnimation?.isPlaying) {
    rolloverFrameId = window.requestAnimationFrame(advanceRollover);
  }
}

function playRollover() {
  if (!state.growthAnimation) return;

  if (state.growthAnimation.progress >= 1) {
    setRolloverProgress(0);
  }

  state.growthAnimation.isPlaying = true;
  rolloverLastFrameTime = null;
  if (rolloverFrameId === null) {
    rolloverFrameId = window.requestAnimationFrame(advanceRollover);
  }
  syncRolloverControls();
}

function pauseRollover(shouldRender = false) {
  if (!state.growthAnimation) return;

  state.growthAnimation.isPlaying = false;
  cancelRolloverFrame();
  if (shouldRender) {
    renderGrowthScene();
  } else {
    syncRolloverControls();
  }
}

function finishRollover() {
  if (!state.growthAnimation) return;

  const to = state.growthAnimation.to;
  const animationType = getAnimationType();
  cancelRolloverFrame();
  state.growthCount = to;
  state.recentRegroupTensCount = ["ones-to-tens", "add-many-to-tens"].includes(animationType) ? Math.floor(to / 10) : null;
  state.growthAnimation = null;
  renderGrowthScene();
}

function stepAnimationDuration(amount, extra = 0) {
  return 3000 + amount * 620 + extra;
}

function startRegroupAnimation(from, to, type = "ones-to-tens", amount = 1, options = {}) {
  cancelRolloverFrame();
  state.previousGrowthCount = from;
  state.lastGrowthAction = type.includes("subtract") || type === "tens-to-ones" ? "subtract" : "add";
  state.lastGrowthAmount = amount;
  state.growthCount = from;
  state.recentRegroupTensCount = null;
  state.growthAnimation = { type, from, to, amount, progress: 0, isPlaying: true, ...options };
  renderGrowthScene();
  rolloverFrameId = window.requestAnimationFrame(advanceRollover);
}

function startSubtractManyWithBorrow(from, to, amount) {
  const looseOnesToRemove = from % 10;
  const borrowFrom = from - looseOnesToRemove;
  const borrowAmount = amount - looseOnesToRemove;
  const consumeEnd = looseOnesToRemove > 0 ? 0.28 : 0;
  startRegroupAnimation(from, to, "subtract-many-with-borrow", amount, {
    looseOnesToRemove,
    borrowFrom,
    borrowAmount,
    consumeEnd,
    durationMs: stepAnimationDuration(amount, 4400)
  });
}

function handleRolloverButton(button) {
  if (!state.growthAnimation) return;

  if (button.id === "rolloverPlayPause") {
    if (state.growthAnimation?.isPlaying) {
      pauseRollover();
    } else {
      playRollover();
    }
    return;
  }

  if (button.id === "rolloverFinish") {
    finishRollover();
  }
}

function handleRolloverPointerDown(event) {
  if (!state.growthAnimation) return;

  const host = qs("#rolloverControlsHost");
  if (event.target.id === "rolloverProgress" && state.growthAnimation.isPlaying) {
    pauseRollover(false);
    return;
  }

  const button = event.target.closest("#rolloverPlayPause, #rolloverFinish");
  if (!button || !host.contains(button)) return;

  event.preventDefault();
  handleRolloverButton(button);
}

function handleRolloverMouseDown(event) {
  if (window.PointerEvent) return;
  handleRolloverPointerDown(event);
}

function handleRolloverClick(event) {
  if (!state.growthAnimation || event.detail !== 0) return;

  const host = qs("#rolloverControlsHost");
  const button = event.target.closest("#rolloverPlayPause, #rolloverFinish");
  if (!button || !host.contains(button)) return;

  handleRolloverButton(button);
}

function handleRolloverInput(event) {
  if (!state.growthAnimation || event.target.id !== "rolloverProgress") return;

  if (state.growthAnimation.isPlaying) {
    pauseRollover(false);
  }
  setRolloverProgress(Number(event.target.value) / 100, "auto");
}

function handleGrowthBoardChange(event) {
  if (event.target.id !== "timelineControlToggle") return;

  state.showRolloverBar = event.target.checked;
  renderRolloverControlsHost();

  if (!state.growthAnimation || state.showRolloverBar) return;

  if (state.growthAnimation.progress >= 1) {
    finishRollover();
  } else {
    playRollover();
  }
}

function getPracticeNumberLineTickFromClick(track, visual, event) {
  const rect = track.getBoundingClientRect();
  const tickCount = getNumberLineTickCount(visual);
  const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
  return Math.round(ratio * tickCount);
}

function getPracticeOrderValueFromClientX(question, track, clientX) {
  const visual = question?.visual || {};
  const min = Number.isFinite(visual.min) ? visual.min : 0;
  const max = Number.isFinite(visual.max) ? visual.max : 1.25;
  const rect = track.getBoundingClientRect();
  const ratio = rect.width ? Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)) : 0;
  const rawValue = min + (max - min) * ratio;
  const snapValues = getPracticeOrderSnapValues(question);
  return snapValues.reduce((nearest, value) => (
    Math.abs(value - rawValue) < Math.abs(nearest - rawValue) ? value : nearest
  ), snapValues[0] ?? rawValue);
}

function practiceOrderPointerIsNearTrack(track, event) {
  const rect = track.getBoundingClientRect();
  return event.clientX >= rect.left - 18
    && event.clientX <= rect.right + 18
    && event.clientY >= rect.top - 78
    && event.clientY <= rect.bottom + 78;
}

function removePracticeOrderDragGhost() {
  if (activePracticeOrderDrag?.ghost) {
    activePracticeOrderDrag.ghost.remove();
  }
}

function syncPracticeOrderDragGhost(event) {
  if (!activePracticeOrderDrag?.ghost) return;
  activePracticeOrderDrag.ghost.style.left = `${event.clientX}px`;
  activePracticeOrderDrag.ghost.style.top = `${event.clientY}px`;
}

function startPracticeOrderDrag(event, panel) {
  const dragButton = event.target.closest("[data-practice-runner-drag]");
  if (!dragButton || !panel.contains(dragButton)) return;

  const topic = panel.dataset.practiceTopic;
  const question = getPracticeQuestion(topic, dragButton.dataset.practiceRunnerDrag);
  if (!question || question.responseType !== "numberLineOrder") return;

  event.preventDefault();
  const itemId = dragButton.dataset.orderItemId;
  const answer = getPracticeOrderAnswer(question);
  const ghost = document.createElement("div");
  ghost.className = "practice-runner-drag-ghost";
  ghost.textContent = getPracticeOrderItemLabel(question, itemId);
  document.body.append(ghost);

  activePracticeOrderDrag = {
    topic,
    questionId: question.id,
    itemId,
    wasPlaced: Number.isFinite(answer.placements[itemId]),
    ghost
  };
  syncPracticeOrderDragGhost(event);
}

function handlePracticeOrderPointerMove(event) {
  if (!activePracticeOrderDrag) return;
  event.preventDefault();
  syncPracticeOrderDragGhost(event);
}

function handlePracticeOrderPointerUp(event) {
  if (!activePracticeOrderDrag) return;

  const drag = activePracticeOrderDrag;
  const question = getPracticeQuestion(drag.topic, drag.questionId);
  const track = qs(`[data-practice-order-track="${drag.questionId}"]`);
  const shouldPlace = question && track && (drag.wasPlaced || practiceOrderPointerIsNearTrack(track, event));

  removePracticeOrderDragGhost();
  activePracticeOrderDrag = null;

  if (!shouldPlace) return;

  const answer = getPracticeOrderAnswer(question);
  setPracticeOrderAnswer(question, {
    placements: {
      ...answer.placements,
      [drag.itemId]: getPracticeOrderValueFromClientX(question, track, event.clientX)
    },
    submitted: false
  });
  renderPracticeSet(drag.topic);
}

function openPracticeSourcePreview(trigger) {
  const modal = qs("#sourcePreviewModal");
  if (!modal) return;

  const title = trigger.dataset.sourcePreviewTitle || "Source page preview";
  const pdfSrc = trigger.dataset.sourcePreviewPdf || "";
  const imageSrc = trigger.dataset.sourcePreviewImg || "";
  const titleEl = qs("#sourcePreviewTitle");
  const frame = qs("#sourcePreviewFrame");
  const image = qs("#sourcePreviewImage");
  const openLink = qs("#sourcePreviewOpenLink");
  const closeButton = modal.querySelector("[data-source-preview-close]:not(.source-preview-backdrop)");

  sourcePreviewReturnFocus = trigger;
  if (titleEl) titleEl.textContent = title;
  if (frame) {
    frame.hidden = !pdfSrc;
    frame.src = pdfSrc || "about:blank";
  }
  if (image) {
    image.hidden = Boolean(pdfSrc) || !imageSrc;
    image.src = imageSrc || "";
    image.alt = title;
  }
  if (openLink) {
    openLink.hidden = !pdfSrc;
    openLink.href = pdfSrc || "#";
  }

  modal.hidden = false;
  closeButton?.focus();
}

function closePracticeSourcePreview() {
  const modal = qs("#sourcePreviewModal");
  if (!modal || modal.hidden) return;
  const frame = qs("#sourcePreviewFrame");
  const image = qs("#sourcePreviewImage");
  modal.hidden = true;
  if (frame) frame.src = "about:blank";
  if (image) image.src = "";
  sourcePreviewReturnFocus?.focus?.();
  sourcePreviewReturnFocus = null;
}

function handlePracticeSourcePreviewClick(event) {
  const openButton = event.target.closest("[data-source-preview-open]");
  if (openButton) {
    openPracticeSourcePreview(openButton);
    return;
  }

  if (event.target.closest("[data-source-preview-close]")) {
    closePracticeSourcePreview();
  }
}

function bindControls() {
  qsa("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTopic = button.dataset.topic;
      if (state.unitFocus !== "all" && !topicSupportsUnit(nextTopic)) {
        return;
      }
      state.topic = nextTopic;
      renderTopic();
      renderPracticeSets();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-unit-focus]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unitFocus = button.dataset.unitFocus;
      syncPracticeFiltersForUnitFocus();
      if (state.unitFocus !== "all" && !topicSupportsUnit(state.topic)) {
        state.topic = unitFocusPrimaryTopic[state.unitFocus] || state.topic;
      }
      renderTopic();
      renderPracticeSets();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-unit-path-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unitFocus = "unit6";
      state.topic = button.dataset.unitPathTopic;
      state.mode = "teach";
      setPracticeFilter(state.topic, { focus: "all", lesson: "all" });
      renderTopic();
      renderPracticeSets();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      renderTopic();
      renderPracticeSets();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  qsa("[data-practice-topic]").forEach((panel) => {
    panel.addEventListener("pointerdown", (event) => {
      startPracticeOrderDrag(event, panel);
    });

    panel.addEventListener("input", (event) => {
      const topic = panel.dataset.practiceTopic;
      const goDistanceInput = event.target.closest("[data-practice-go-distance-input]");
      if (goDistanceInput && panel.contains(goDistanceInput)) {
        const question = getPracticeQuestion(topic, goDistanceInput.dataset.practiceGoDistanceInput);
        if (!isGoDistanceQuestion(question)) return;
        const current = getGoDistanceQuestion2Answer(question);
        setGoDistancePartAnswer(question, "q2", {
          responses: {
            ...current.responses,
            [goDistanceInput.dataset.goDistanceBlank]: goDistanceInput.value
          },
          submitted: false
        });
        return;
      }

      const whoMissingInput = event.target.closest("[data-practice-who-missing-distance]");
      if (whoMissingInput && panel.contains(whoMissingInput)) {
        const question = getPracticeQuestion(topic, whoMissingInput.dataset.practiceWhoMissingDistance);
        if (!isWhoRanFartherQuestion(question)) return;
        const current = getWhoRanFartherAnswer(question);
        setWhoRanFartherAnswer(question, {
          ...current,
          missingDistance: whoMissingInput.value,
          submitted: false
        });
        return;
      }

      const productNumberInput = event.target.closest("[data-practice-product-number]");
      if (productNumberInput && panel.contains(productNumberInput)) {
        const question = getPracticeQuestion(topic, productNumberInput.dataset.practiceProductNumber);
        if (!isCompareExpressionsQuestion(question)) return;
        const activePart = productNumberInput.dataset.productPart === "q3" ? "q3" : "q2";
        const current = activePart === "q3"
          ? getProductComparisonQuestion3Answer(question)
          : getProductComparisonQuestion2Answer(question);
        setProductComparisonPartAnswer(question, activePart, {
          values: {
            ...current.values,
            [productNumberInput.dataset.productRow]: productNumberInput.value
          },
          submitted: false
        });
        return;
      }

      const scaleBlankInput = event.target.closest("[data-practice-scale-blank]");
      if (scaleBlankInput && panel.contains(scaleBlankInput)) {
        const question = getPracticeQuestion(topic, scaleBlankInput.dataset.practiceScaleBlank);
        if (!question || question.responseType !== "scaleFactorLocation") return;
        const answer = getPracticeScaleLocationAnswer(question);
        const activePart = getPracticeScaleLocationActivePart(question);
        const submittedParts = { ...answer.submittedParts };
        if (activePart) submittedParts[activePart] = false;
        setPracticeScaleLocationAnswer(question, {
          zones: { ...answer.zones },
          blanks: {
            ...answer.blanks,
            [scaleBlankInput.dataset.scaleBlankId]: scaleBlankInput.value
          },
          comparisons: { ...answer.comparisons },
          submittedParts,
          submitted: false
        });
        return;
      }

      const shortAnswerInput = event.target.closest("[data-practice-short-answer]");
      if (shortAnswerInput && panel.contains(shortAnswerInput)) {
        const question = getPracticeQuestion(topic, shortAnswerInput.dataset.practiceShortAnswer);
        if (!question || question.responseType !== "shortAnswerSet") return;
        const answer = getPracticeShortAnswerSetAnswer(question);
        setPracticeShortAnswerSetAnswer(question, {
          values: {
            ...answer.values,
            [shortAnswerInput.dataset.shortAnswerId]: shortAnswerInput.value
          },
          submitted: false
        });
        return;
      }

      const writingBox = event.target.closest("[data-practice-open-writing]");
      if (!writingBox || !panel.contains(writingBox)) return;
      const question = getPracticeQuestion(topic, writingBox.dataset.practiceOpenWriting);
      if (!question || question.responseType !== "open") return;
      const answer = getPracticeOpenAnswer(question);
      state.practiceAnswers[question.id] = {
        ...answer,
        responseText: writingBox.value
      };
    });

    panel.addEventListener("change", (event) => {
      const topic = panel.dataset.practiceTopic;
    });

    panel.addEventListener("click", (event) => {
      const topic = panel.dataset.practiceTopic;
      const focusButton = event.target.closest("[data-practice-focus]");
      if (focusButton) {
        setPracticeFilter(topic, {
          focus: focusButton.dataset.practiceFocus,
          lesson: "all"
        });
        renderPracticeSet(topic);
        return;
      }

      const partButton = event.target.closest("[data-practice-part]");
      if (partButton) {
        const question = getPracticeQuestion(topic, partButton.dataset.practicePart);
        if (!isPracticePartQuestion(question)) return;
        state.practiceParts[question.id] = partButton.dataset.practicePartKey || "q1";
        renderPracticeSet(topic);
        return;
      }

      const whoToggle = event.target.closest("[data-practice-who-toggle]");
      if (whoToggle) {
        const question = getPracticeQuestion(topic, whoToggle.dataset.practiceWhoToggle);
        if (!isWhoRanFartherQuestion(question)) return;
        const group = whoToggle.dataset.whoGroup;
        const runnerId = String(whoToggle.dataset.runnerId || "");
        const current = getWhoRanFartherAnswer(question);
        const selected = new Set(current[group] || []);
        if (selected.has(runnerId)) {
          selected.delete(runnerId);
        } else {
          selected.add(runnerId);
        }
        setWhoRanFartherAnswer(question, {
          ...current,
          [group]: Array.from(selected),
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const whoOrderAdd = event.target.closest("[data-practice-who-order-add]");
      if (whoOrderAdd) {
        const question = getPracticeQuestion(topic, whoOrderAdd.dataset.practiceWhoOrderAdd);
        if (!isWhoRanFartherQuestion(question)) return;
        const runnerId = String(whoOrderAdd.dataset.runnerId || "");
        const current = getWhoRanFartherAnswer(question);
        if (!current.order.includes(runnerId)) {
          setWhoRanFartherAnswer(question, {
            ...current,
            order: [...current.order, runnerId],
            submitted: false
          });
        }
        renderPracticeSet(topic);
        return;
      }

      const whoOrderClear = event.target.closest("[data-practice-who-order-clear]");
      if (whoOrderClear) {
        const question = getPracticeQuestion(topic, whoOrderClear.dataset.practiceWhoOrderClear);
        if (!isWhoRanFartherQuestion(question)) return;
        const current = getWhoRanFartherAnswer(question);
        setWhoRanFartherAnswer(question, {
          ...current,
          order: [],
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const whoSlot = event.target.closest("[data-practice-who-slot]");
      if (whoSlot) {
        const question = getPracticeQuestion(topic, whoSlot.dataset.practiceWhoSlot);
        if (!isWhoRanFartherQuestion(question)) return;
        const current = getWhoRanFartherAnswer(question);
        const slotId = String(whoSlot.dataset.slotId || "");
        const runnerId = String(whoSlot.dataset.runnerId || "");
        setWhoRanFartherAnswer(question, {
          ...current,
          slots: {
            ...current.slots,
            [slotId]: current.slots[slotId] === runnerId ? "" : runnerId
          },
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const whoSubmit = event.target.closest("[data-practice-who-submit]");
      if (whoSubmit) {
        const question = getPracticeQuestion(topic, whoSubmit.dataset.practiceWhoSubmit);
        if (!isWhoRanFartherQuestion(question)) return;
        const current = getWhoRanFartherAnswer(question);
        setWhoRanFartherAnswer(question, {
          ...current,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const productSymbol = event.target.closest("[data-practice-product-symbol]");
      if (productSymbol) {
        const question = getPracticeQuestion(topic, productSymbol.dataset.practiceProductSymbol);
        if (!isCompareExpressionsQuestion(question)) return;
        const answer = getProductComparisonQuestion1Answer(question);
        setProductComparisonPartAnswer(question, "q1", {
          symbols: {
            ...answer.symbols,
            [productSymbol.dataset.productRow]: productSymbol.dataset.productSymbol
          },
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const diagramMatchButton = event.target.closest("[data-practice-diagram-match]");
      if (diagramMatchButton) {
        const question = getPracticeQuestion(topic, diagramMatchButton.dataset.practiceDiagramMatch);
        if (!question || question.responseType !== "diagramMatch") return;
        const answer = getPracticeDiagramMatchAnswer(question);
        state.practiceOpenPicker = "";
        setPracticeDiagramMatchAnswer(question, {
          matches: {
            ...answer.matches,
            [diagramMatchButton.dataset.diagramId]: diagramMatchButton.dataset.expressionId
          },
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const diagramMatchPicker = event.target.closest("[data-practice-diagram-match-picker]");
      if (diagramMatchPicker) {
        const question = getPracticeQuestion(topic, diagramMatchPicker.dataset.practiceDiagramMatchPicker);
        if (!question || question.responseType !== "diagramMatch") return;
        const pickerId = `${question.id}:${diagramMatchPicker.dataset.diagramId}`;
        state.practiceOpenPicker = state.practiceOpenPicker === pickerId ? "" : pickerId;
        renderPracticeSet(topic);
        return;
      }

      const diagramMatchChoice = event.target.closest("[data-practice-diagram-match-choice]");
      if (diagramMatchChoice) {
        const question = getPracticeQuestion(topic, diagramMatchChoice.dataset.practiceDiagramMatchChoice);
        if (!question || question.responseType !== "diagramMatch") return;
        const answer = getPracticeDiagramMatchAnswer(question);
        state.practiceOpenPicker = "";
        setPracticeDiagramMatchAnswer(question, {
          matches: {
            ...answer.matches,
            [diagramMatchChoice.dataset.diagramId]: diagramMatchChoice.dataset.expressionId
          },
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const diagramMatchSubmit = event.target.closest("[data-practice-diagram-match-submit]");
      if (diagramMatchSubmit) {
        const question = getPracticeQuestion(topic, diagramMatchSubmit.dataset.practiceDiagramMatchSubmit);
        if (!question || question.responseType !== "diagramMatch") return;
        const answer = getPracticeDiagramMatchAnswer(question);
        state.practiceOpenPicker = "";
        setPracticeDiagramMatchAnswer(question, {
          ...answer,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const scaleZoneButton = event.target.closest("[data-practice-scale-zone]");
      if (scaleZoneButton) {
        const question = getPracticeQuestion(topic, scaleZoneButton.dataset.practiceScaleZone);
        if (!question || question.responseType !== "scaleFactorLocation") return;
        const answer = getPracticeScaleLocationAnswer(question);
        const activePart = getPracticeScaleLocationActivePart(question);
        const submittedParts = { ...answer.submittedParts };
        if (activePart) submittedParts[activePart] = false;
        setPracticeScaleLocationAnswer(question, {
          zones: {
            ...answer.zones,
            [scaleZoneButton.dataset.scaleItemId]: scaleZoneButton.dataset.scaleZone
          },
          blanks: { ...answer.blanks },
          comparisons: { ...answer.comparisons },
          submittedParts,
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const scaleComparisonButton = event.target.closest("[data-practice-scale-comparison]");
      if (scaleComparisonButton) {
        const question = getPracticeQuestion(topic, scaleComparisonButton.dataset.practiceScaleComparison);
        if (!question || question.responseType !== "scaleFactorLocation") return;
        const answer = getPracticeScaleLocationAnswer(question);
        const activePart = getPracticeScaleLocationActivePart(question);
        const submittedParts = { ...answer.submittedParts };
        if (activePart) submittedParts[activePart] = false;
        setPracticeScaleLocationAnswer(question, {
          zones: { ...answer.zones },
          blanks: { ...answer.blanks },
          comparisons: {
            ...answer.comparisons,
            [scaleComparisonButton.dataset.scaleComparisonId]: scaleComparisonButton.dataset.scaleComparisonSymbol
          },
          submittedParts,
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const scaleSubmit = event.target.closest("[data-practice-scale-submit]");
      if (scaleSubmit) {
        const question = getPracticeQuestion(topic, scaleSubmit.dataset.practiceScaleSubmit);
        if (!question || question.responseType !== "scaleFactorLocation") return;
        const answer = getPracticeScaleLocationAnswer(question);
        const activePart = getPracticeScaleLocationActivePart(question);
        const currentZones = { ...answer.zones };
        const currentBlanks = { ...answer.blanks };
        const currentComparisons = { ...answer.comparisons };
        qsa(`[data-practice-scale-zone="${question.id}"].is-selected`, panel).forEach((button) => {
          currentZones[button.dataset.scaleItemId] = button.dataset.scaleZone;
        });
        qsa(`[data-practice-scale-comparison="${question.id}"].is-selected`, panel).forEach((button) => {
          currentComparisons[button.dataset.scaleComparisonId] = button.dataset.scaleComparisonSymbol;
        });
        qsa(`[data-practice-scale-blank="${question.id}"]`, panel).forEach((input) => {
          currentBlanks[input.dataset.scaleBlankId] = input.value;
        });
        const submittedParts = { ...answer.submittedParts };
        if (activePart) submittedParts[activePart] = true;
        const partKeys = getPracticeScaleLocationPartKeys(question);
        const submitted = partKeys.length
          ? partKeys.every((part) => submittedParts[part])
          : true;
        setPracticeScaleLocationAnswer(question, {
          zones: currentZones,
          blanks: currentBlanks,
          comparisons: currentComparisons,
          submittedParts,
          submitted
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const shortAnswerSubmit = event.target.closest("[data-practice-short-answer-submit]");
      if (shortAnswerSubmit) {
        const question = getPracticeQuestion(topic, shortAnswerSubmit.dataset.practiceShortAnswerSubmit);
        if (!question || question.responseType !== "shortAnswerSet") return;
        const answer = getPracticeShortAnswerSetAnswer(question);
        const currentValues = { ...answer.values };
        qsa(`[data-practice-short-answer="${question.id}"]`, panel).forEach((input) => {
          currentValues[input.dataset.shortAnswerId] = input.value;
        });
        setPracticeShortAnswerSetAnswer(question, {
          values: currentValues,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const groupMatchButton = event.target.closest("[data-practice-group-match]");
      if (groupMatchButton) {
        const question = getPracticeQuestion(topic, groupMatchButton.dataset.practiceGroupMatch);
        if (!question || question.responseType !== "groupMatch") return;
        const answer = getPracticeGroupMatchAnswer(question);
        const groupId = String(groupMatchButton.dataset.groupId || "");
        const choiceId = String(groupMatchButton.dataset.choiceId || "");
        const selected = [...(answer.matches[groupId] || [])];
        const selectedIndex = selected.indexOf(choiceId);
        if (selectedIndex >= 0) {
          selected.splice(selectedIndex, 1);
        } else {
          selected.push(choiceId);
        }
        setPracticeGroupMatchAnswer(question, {
          matches: {
            ...answer.matches,
            [groupId]: selected
          },
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const groupMatchSubmit = event.target.closest("[data-practice-group-match-submit]");
      if (groupMatchSubmit) {
        const question = getPracticeQuestion(topic, groupMatchSubmit.dataset.practiceGroupMatchSubmit);
        if (!question || question.responseType !== "groupMatch") return;
        const answer = getPracticeGroupMatchAnswer(question);
        setPracticeGroupMatchAnswer(question, {
          ...answer,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const productSubmit = event.target.closest("[data-practice-product-submit]");
      if (productSubmit) {
        const question = getPracticeQuestion(topic, productSubmit.dataset.practiceProductSubmit);
        if (!isCompareExpressionsQuestion(question)) return;
        const activePart = getPracticePart(question);
        if (activePart === "q3") {
          const answer = getProductComparisonQuestion3Answer(question);
          setProductComparisonPartAnswer(question, "q3", {
            ...answer,
            submitted: true
          });
        } else if (activePart === "q2") {
          const answer = getProductComparisonQuestion2Answer(question);
          setProductComparisonPartAnswer(question, "q2", {
            ...answer,
            submitted: true
          });
        } else {
          const answer = getProductComparisonQuestion1Answer(question);
          setProductComparisonPartAnswer(question, "q1", {
            ...answer,
            submitted: true
          });
        }
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const lessonButton = event.target.closest("[data-practice-lesson]");
      if (lessonButton) {
        setPracticeFilter(topic, { lesson: lessonButton.dataset.practiceLesson });
        renderPracticeSet(topic);
        return;
      }

      const orderClear = event.target.closest("[data-practice-order-clear]");
      if (orderClear) {
        const question = getPracticeQuestion(topic, orderClear.dataset.practiceOrderClear);
        if (!question || question.responseType !== "numberLineOrder") return;
        setPracticeOrderAnswer(question, {
          placements: {},
          submitted: false
        });
        renderPracticeSet(topic);
        return;
      }

      const orderSubmit = event.target.closest("[data-practice-order-submit]");
      if (orderSubmit) {
        const question = getPracticeQuestion(topic, orderSubmit.dataset.practiceOrderSubmit);
        const answer = question ? getPracticeOrderAnswer(question) : null;
        if (!question || question.responseType !== "numberLineOrder" || !answer || !practiceOrderIsFullyPlaced(question)) return;
        setPracticeOrderAnswer(question, {
          ...answer,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const goDistanceSubmit = event.target.closest("[data-practice-go-distance-submit]");
      if (goDistanceSubmit) {
        const question = getPracticeQuestion(topic, goDistanceSubmit.dataset.practiceGoDistanceSubmit);
        if (!isGoDistanceQuestion(question)) return;
        const answer = getGoDistanceQuestion2Answer(question);
        setGoDistancePartAnswer(question, "q2", {
          ...answer,
          submitted: true
        });
        if (practiceQuestionIsAnswered(question)) {
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const numberLineTrack = event.target.closest("[data-practice-number-line]");
      if (numberLineTrack && panel.contains(numberLineTrack)) {
        const question = getPracticeQuestion(topic, numberLineTrack.dataset.practiceNumberLine);
        if (!question || question.responseType !== "numberLinePoint") return;
        state.practiceAnswers[question.id] = {
          selectedTick: getPracticeNumberLineTickFromClick(numberLineTrack, question.visual, event),
          revealedGuides: true,
          submitted: false
        };
        renderPracticeSet(topic);
        return;
      }

      const numberLineSubmit = event.target.closest("[data-practice-number-line-submit]");
      if (numberLineSubmit) {
        const question = getPracticeQuestion(topic, numberLineSubmit.dataset.practiceNumberLineSubmit);
        const answer = question ? getNumberLineAnswer(question) : null;
        if (!question || !answer || !Number.isFinite(answer.selectedTick)) return;
        state.practiceAnswers[question.id] = {
          ...answer,
          revealedGuides: true,
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const coordinatePoint = event.target.closest("[data-practice-coordinate-point]");
      if (coordinatePoint) {
        const question = getPracticeQuestion(topic, coordinatePoint.dataset.practiceCoordinatePoint);
        if (!question || question.responseType !== "coordinatePlot") return;
        state.practiceAnswers[question.id] = {
          x: Number(coordinatePoint.dataset.coordinateX),
          y: Number(coordinatePoint.dataset.coordinateY),
          submitted: false
        };
        renderPracticeSet(topic);
        return;
      }

      const coordinateSubmit = event.target.closest("[data-practice-coordinate-submit]");
      if (coordinateSubmit) {
        const question = getPracticeQuestion(topic, coordinateSubmit.dataset.practiceCoordinateSubmit);
        const answer = question ? getPracticeCoordinatePlotAnswer(question) : null;
        if (!question || question.responseType !== "coordinatePlot" || !Number.isFinite(answer?.x) || !Number.isFinite(answer?.y)) return;
        state.practiceAnswers[question.id] = {
          ...answer,
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const shadePiece = event.target.closest("[data-practice-shade-piece]");
      if (shadePiece) {
        const question = getPracticeQuestion(topic, shadePiece.dataset.practiceShadePiece);
        if (!question || question.responseType !== "shadeRectangleParts") return;
        const pieceIndex = Number(shadePiece.dataset.shadePieceIndex);
        if (!Number.isFinite(pieceIndex)) return;
        const currentAnswer = getShadeRectangleAnswer(question);
        const selectedPieces = Array.isArray(currentAnswer?.selectedPieces)
          ? [...currentAnswer.selectedPieces]
          : [];
        const existingIndex = selectedPieces.indexOf(pieceIndex);
        if (existingIndex >= 0) {
          selectedPieces.splice(existingIndex, 1);
        } else {
          selectedPieces.push(pieceIndex);
        }
        state.practiceAnswers[question.id] = {
          selectedPieces: selectedPieces.sort((left, right) => left - right),
          submitted: false
        };
        renderPracticeSet(topic);
        return;
      }

      const shadeSubmit = event.target.closest("[data-practice-shade-submit]");
      if (shadeSubmit) {
        const question = getPracticeQuestion(topic, shadeSubmit.dataset.practiceShadeSubmit);
        const answer = question ? getShadeRectangleAnswer(question) : null;
        if (!question || !answer || !Array.isArray(answer.selectedPieces) || !answer.selectedPieces.length) return;
        state.practiceAnswers[question.id] = {
          ...answer,
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const areaPlanCell = event.target.closest("[data-practice-area-plan]");
      if (areaPlanCell) {
        const question = getPracticeQuestion(topic, areaPlanCell.dataset.practiceAreaPlan);
        if (!question || !question.visual?.allowStudentPlanning) return;
        const cellIndex = Number(areaPlanCell.dataset.areaCellIndex);
        if (!Number.isFinite(cellIndex)) return;
        const selectedCells = [...getPracticeAreaGridPlanning(question)];
        const existingIndex = selectedCells.indexOf(cellIndex);
        if (existingIndex >= 0) {
          selectedCells.splice(existingIndex, 1);
        } else {
          selectedCells.push(cellIndex);
        }
        state.practicePlanning[question.id] = {
          selectedCells: selectedCells.sort((left, right) => left - right)
        };
        renderPracticeSet(topic);
        return;
      }

      const areaCell = event.target.closest("[data-practice-area-cell]");
      if (areaCell) {
        const question = getPracticeQuestion(topic, areaCell.dataset.practiceAreaCell);
        if (!question || question.responseType !== "shadeAreaOverlap") return;
        const cellIndex = Number(areaCell.dataset.areaCellIndex);
        if (!Number.isFinite(cellIndex)) return;
        const currentAnswer = getPracticeAreaGridAnswer(question);
        const selectedCells = Array.isArray(currentAnswer?.selectedCells)
          ? [...currentAnswer.selectedCells]
          : [];
        const existingIndex = selectedCells.indexOf(cellIndex);
        if (existingIndex >= 0) {
          selectedCells.splice(existingIndex, 1);
        } else {
          selectedCells.push(cellIndex);
        }
        state.practiceAnswers[question.id] = {
          selectedCells: selectedCells.sort((left, right) => left - right),
          submitted: false
        };
        renderPracticeSet(topic);
        return;
      }

      const areaSubmit = event.target.closest("[data-practice-area-submit]");
      if (areaSubmit) {
        const question = getPracticeQuestion(topic, areaSubmit.dataset.practiceAreaSubmit);
        const answer = question ? getPracticeAreaGridAnswer(question) : null;
        if (!question || !answer || !Array.isArray(answer.selectedCells) || !answer.selectedCells.length) return;
        state.practiceAnswers[question.id] = {
          ...answer,
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const regionButton = event.target.closest("[data-practice-region]");
      if (regionButton) {
        const question = getPracticeQuestion(topic, regionButton.dataset.practiceRegion);
        if (!question || question.responseType !== "regionChoice") return;
        state.practiceAnswers[question.id] = {
          selectedRegion: regionButton.dataset.regionId,
          submitted: false
        };
        renderPracticeSet(topic);
        return;
      }

      const regionSubmit = event.target.closest("[data-practice-region-submit]");
      if (regionSubmit) {
        const question = getPracticeQuestion(topic, regionSubmit.dataset.practiceRegionSubmit);
        const answer = question ? getPracticeRegionAnswer(question) : null;
        if (!question || question.responseType !== "regionChoice" || !answer?.selectedRegion) return;
        state.practiceAnswers[question.id] = {
          ...answer,
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const multiSubmit = event.target.closest("[data-practice-multi-submit]");
      if (multiSubmit) {
        const question = getPracticeQuestion(topic, multiSubmit.dataset.practiceMultiSubmit);
        const answer = question ? getPracticeMultiAnswer(question) : null;
        if (!question || question.responseType !== "multi" || !answer || !answer.selectedValues.length) return;
        state.practiceAnswers[question.id] = {
          selectedValues: [...answer.selectedValues],
          submitted: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const optionButton = event.target.closest("[data-practice-option]");
      if (optionButton) {
        const question = getPracticeQuestion(topic, optionButton.dataset.practiceQuestion);
        if (!question) return;
        if (question.responseType === "multi") {
          const currentAnswer = getPracticeMultiAnswer(question);
          const selectedValues = [...currentAnswer.selectedValues];
          const selectedIndex = selectedValues.indexOf(optionButton.dataset.practiceOption);
          if (selectedIndex >= 0) {
            selectedValues.splice(selectedIndex, 1);
          } else {
            selectedValues.push(optionButton.dataset.practiceOption);
          }
          state.practiceAnswers[question.id] = {
            selectedValues,
            submitted: false
          };
        } else {
          state.practiceAnswers[question.id] = optionButton.dataset.practiceOption;
          recordPracticeAttempt(question);
        }
        renderPracticeSet(topic);
        return;
      }

      const revealButton = event.target.closest("[data-practice-reveal]");
      if (revealButton) {
        const question = getPracticeQuestion(topic, revealButton.dataset.practiceReveal);
        if (!question || question.responseType !== "open") return;
        const answer = getPracticeOpenAnswer(question);
        state.practiceAnswers[question.id] = {
          ...answer,
          reviewed: true
        };
        recordPracticeAttempt(question);
        renderPracticeSet(topic);
        return;
      }

      const hintButton = event.target.closest("[data-practice-hint]");
      if (hintButton) {
        const question = getPracticeQuestion(topic, hintButton.dataset.practiceHint);
        if (!question) return;
        const currentHintCount = state.practiceHints[question.id] || 0;
        state.practiceHints[question.id] = Math.min(question.hints.length, currentHintCount + 1);
        renderPracticeSet(topic);
        return;
      }

      const retryButton = event.target.closest("[data-practice-retry]");
      if (retryButton) {
        const question = getPracticeQuestion(topic, retryButton.dataset.practiceRetry);
        if (!question) return;
        delete state.practiceAnswers[question.id];
        delete state.practiceModels[question.id];
        renderPracticeSet(topic);
        return;
      }

      const modelButton = event.target.closest("[data-practice-model]");
      if (modelButton) {
        const question = getPracticeQuestion(topic, modelButton.dataset.practiceModel);
        if (!question) return;
        state.practiceModels[question.id] = !state.practiceModels[question.id];
        renderPracticeSet(topic);
        return;
      }

      const resetButton = event.target.closest("[data-practice-reset]");
      if (resetButton) {
        const resetQuestions = getPracticeVisibleQuestions(topic);
        (resetQuestions.length ? resetQuestions : practiceSets[topic] || []).forEach((question) => {
          delete state.practiceAnswers[question.id];
          delete state.practiceHints[question.id];
          delete state.practicePlanning[question.id];
          delete state.practiceAttempts[question.id];
          delete state.practiceModels[question.id];
        });
        renderPracticeSet(topic);
      }
    });
  });

  const vocabularySearchInput = qs("#vocabularySearchInput");
  if (vocabularySearchInput) {
    vocabularySearchInput.addEventListener("input", (event) => {
      state.vocabularySearch = event.target.value;
      renderVocabulary();
    });
  }

  qsa("[data-vocabulary-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.vocabularyFilter = button.dataset.vocabularyFilter;
      renderVocabulary();
    });
  });

  qsa("[data-sharing-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sharingPresetKey = button.dataset.sharingPreset;
      renderSharingIntro();
      renderDivisionNames();
      renderTrySharing();
    });
  });

  qsa("[data-mixed-sharing]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mixedSharingKey = button.dataset.mixedSharing;
      renderMixedSharing();
    });
  });

  qsa("[data-unit-fraction-of]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unitFractionOfKey = button.dataset.unitFractionOf;
      renderUnitFractionOfNumber();
    });
  });

  qsa("[data-nonunit-fraction-of]").forEach((button) => {
    button.addEventListener("click", () => {
      state.nonUnitFractionOfKey = button.dataset.nonunitFractionOf;
      renderNonUnitFractionOfNumber();
    });
  });

  qsa("[data-multiply-path]").forEach((button) => {
    button.addEventListener("click", () => {
      state.multiplyPathKey = button.dataset.multiplyPath;
      renderMultiplicationPath();
    });
  });

  qsa("[data-expression-match]").forEach((button) => {
    button.addEventListener("click", () => {
      state.expressionMatchKey = button.dataset.expressionMatch;
      state.expressionMatchFocus = "fraction";
      renderSameDiagramExpressions();
    });
  });

  const sameDiagramBoard = qs("#sameDiagramBoard");
  if (sameDiagramBoard) {
    sameDiagramBoard.addEventListener("click", (event) => {
      const expressionButton = event.target.closest("[data-expression-focus]");
      if (!expressionButton) return;
      state.expressionMatchFocus = expressionButton.dataset.expressionFocus;
      renderSameDiagramExpressions();
    });
  }

  qsa("[data-fraction-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionAreaKey = button.dataset.fractionArea;
      renderFractionArea();
    });
  });

  qsa("[data-greater-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.greaterAreaKey = button.dataset.greaterArea;
      renderGreaterThanOneArea();
    });
  });

  qsa("[data-mixed-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mixedAreaKey = button.dataset.mixedArea;
      renderMixedArea();
    });
  });

  qsa("[data-estimate-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.estimateAreaKey = button.dataset.estimateArea;
      renderEstimateArea();
    });
  });

  qsa("[data-unit3-overlap]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionOverlapKey = button.dataset.unit3Overlap;
      state.fractionOverlapFocus = "product";
      renderFractionOverlap();
      renderFractionProductRule();
    });
  });

  qsa("#fractionOverlapBoard, #fractionRuleBoard").forEach((board) => {
    board.addEventListener("click", (event) => {
      const focusButton = event.target.closest("[data-overlap-focus]");
      if (!focusButton) return;
      state.fractionOverlapFocus = focusButton.dataset.overlapFocus;
      renderFractionOverlap();
      renderFractionProductRule();
    });
  });

  qsa("[data-unit-fraction-division]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unitFractionDivisionKey = button.dataset.unitFractionDivision;
      renderUnitFractionDivision();
    });
  });

  qsa("[data-whole-unit-division]").forEach((button) => {
    button.addEventListener("click", () => {
      state.wholeUnitDivisionKey = button.dataset.wholeUnitDivision;
      renderWholeByUnitDivision();
    });
  });

  qsa("[data-fraction-story]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionStoryKey = button.dataset.fractionStory;
      renderFractionStory();
    });
  });

  qsa("[data-coordinate-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      const [x, y] = button.dataset.coordinatePreset.split(",").map(Number);
      state.coordinateX = x;
      state.coordinateY = y;
      state.coordinatePreset = button.dataset.coordinatePreset;
      renderCoordinatePoint();
    });
  });

  const coordinatePointBoard = qs("#coordinatePointBoard");
  if (coordinatePointBoard) {
    coordinatePointBoard.addEventListener("click", (event) => {
      const point = event.target.closest("[data-coordinate-grid-point]");
      if (!point) return;
      const [x, y] = point.dataset.coordinateGridPoint.split(",").map(Number);
      state.coordinateX = x;
      state.coordinateY = y;
      state.coordinatePreset = `${x},${y}`;
      renderCoordinatePoint();
    });
  }

  const coordinateXInput = qs("#coordinateXInput");
  if (coordinateXInput) {
    coordinateXInput.addEventListener("input", (event) => {
      state.coordinateX = clampInteger(event.target.value, 0, 10);
      state.coordinatePreset = `${state.coordinateX},${state.coordinateY}`;
      renderCoordinatePoint();
    });
  }

  const coordinateYInput = qs("#coordinateYInput");
  if (coordinateYInput) {
    coordinateYInput.addEventListener("input", (event) => {
      state.coordinateY = clampInteger(event.target.value, 0, 10);
      state.coordinatePreset = `${state.coordinateX},${state.coordinateY}`;
      renderCoordinatePoint();
    });
  }

  qsa("[data-unit7-shape]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7ShapeKey = button.dataset.unit7Shape;
      renderShapeAttributes();
    });
  });

  qsa("[data-unit7-coordinate-shape]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7CoordinateShapeKey = button.dataset.unit7CoordinateShape;
      renderCoordinateShape();
    });
  });

  qsa("[data-unit7-hierarchy]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7HierarchyKey = button.dataset.unit7Hierarchy;
      renderShapeHierarchy();
    });
  });

  qsa("[data-unit7-statement]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7StatementKey = button.dataset.unit7Statement;
      renderShapeStatements();
    });
  });

  qsa("[data-unit7-pattern]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7PatternKey = button.dataset.unit7Pattern;
      state.unit7PatternStep = 3;
      renderPatternPoints();
    });
  });

  qsa("[data-unit7-pattern-context]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit7PatternContextKey = button.dataset.unit7PatternContext;
      renderPatternContexts();
    });
  });

  const patternPointsBoard = qs("#patternPointsBoard");
  if (patternPointsBoard) {
    patternPointsBoard.addEventListener("click", (event) => {
      const stepButton = event.target.closest("[data-unit7-pattern-step]");
      if (!stepButton) return;
      state.unit7PatternStep = clampInteger(stepButton.dataset.unit7PatternStep, 0, 5);
      renderPatternPoints();
    });
  }

  const customSharingTotalInput = qs("#customSharingTotalInput");
  if (customSharingTotalInput) {
    customSharingTotalInput.addEventListener("input", (event) => {
      state.sharingTotal = clampInteger(event.target.value, 1, 9);
      state.sharingPresetKey = "";
      renderTrySharing();
    });
  }

  const customSharingGroupsInput = qs("#customSharingGroupsInput");
  if (customSharingGroupsInput) {
    customSharingGroupsInput.addEventListener("input", (event) => {
      state.sharingGroups = clampInteger(event.target.value, 2, 8);
      state.sharingPresetKey = "";
      renderTrySharing();
    });
  }

  qsa("[data-whole-parts]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionWholeParts = clampInteger(button.dataset.wholeParts, 2, 12);
      renderFractionWholeDemo();
    });
  });

  qs("#fractionNumeratorInput").addEventListener("input", (event) => {
    state.fractionNumerator = clampInteger(event.target.value, 0, 12);
    renderFractionMeaning();
  });

  qs("#fractionDenominatorInput").addEventListener("input", (event) => {
    state.fractionDenominator = clampInteger(event.target.value, 1, 12);
    state.fractionNumerator = Math.min(state.fractionNumerator, state.fractionDenominator);
    renderFractionMeaning();
  });

  qs("#fractionMeaningBoard").addEventListener("click", (event) => {
    const partButton = event.target.closest("[data-fraction-highlight]");
    if (!partButton) return;
    state.fractionMeaningHighlight = partButton.dataset.fractionHighlight;
    renderFractionMeaning();
  });

  qsa("[data-equivalent-fraction]").forEach((button) => {
    button.addEventListener("click", () => {
      state.equivalentFractionKey = button.dataset.equivalentFraction;
      renderEquivalentFractions();
    });
  });

  qsa("[data-equivalent-multiplier]").forEach((button) => {
    button.addEventListener("click", () => {
      state.equivalentMultiplier = clampInteger(button.dataset.equivalentMultiplier, 2, 4);
      renderEquivalentFractions();
    });
  });

  qsa("[data-fraction-division]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionDivisionKey = button.dataset.fractionDivision;
      renderFractionDivision();
    });
  });

  qsa("[data-fraction-line]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionLineKey = button.dataset.fractionLine;
      renderFractionNumberLine();
    });
  });

  qsa("[data-compare-fractions]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionCompareKey = button.dataset.compareFractions;
      renderFractionCompare();
    });
  });

  qsa("[data-fraction-calc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.fractionCalcKey = button.dataset.fractionCalc;
      renderFractionCalculation();
    });
  });

  qsa("[data-pack-fraction]").forEach((button) => {
    button.addEventListener("click", () => {
      const [numerator, denominator] = button.dataset.packFraction.split("/").map(Number);
      state.fractionPackNumerator = numerator;
      state.fractionPackDenominator = denominator;
      state.fractionPackPreset = button.dataset.packFraction;
      renderFractionWholes();
    });
  });

  qs("#packNumeratorInput").addEventListener("input", (event) => {
    state.fractionPackNumerator = clampInteger(event.target.value, 0, 24);
    state.fractionPackPreset = "";
    renderFractionWholes();
  });

  qs("#packDenominatorInput").addEventListener("input", (event) => {
    state.fractionPackDenominator = clampInteger(event.target.value, 1, 12);
    state.fractionPackPreset = "";
    renderFractionWholes();
  });

  qsa("[data-unit6-place]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6PlaceDigit = button.dataset.unit6Place;
      renderUnit6PlaceValue();
    });
  });

  qsa("[data-unit6-power]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6PowerExponent = clampInteger(button.dataset.unit6Power, 1, 6);
      renderUnit6Power();
    });
  });

  qsa("[data-unit6-move]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6MoveKey = button.dataset.unit6Move;
      renderUnit6Move();
    });
  });

  qsa("[data-unit6-conversion]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6ConversionKey = button.dataset.unit6Conversion;
      renderUnit6Conversion();
    });
  });

  qsa("[data-unit6-predict]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6PredictKey = button.dataset.unit6Predict;
      renderUnit6Predict();
    });
  });

  qsa("[data-unit6-customary]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6CustomaryKey = button.dataset.unit6Customary;
      renderUnit6Customary();
    });
  });

  qsa("[data-unit6-multi-step]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6MultiStepKey = button.dataset.unit6MultiStep;
      renderUnit6MultiStep();
    });
  });

  qsa("[data-unit6-conversion-table]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6ConversionTableKey = button.dataset.unit6ConversionTable;
      renderUnit6ConversionTable();
    });
  });

  qsa("[data-unit6-regroup]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6RegroupKey = button.dataset.unit6Regroup;
      renderUnit6Regroup();
    });
  });

  qsa("[data-unit6-fraction-story]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6FractionStoryKey = button.dataset.unit6FractionStory;
      renderUnit6FractionStory();
    });
  });

  qsa("[data-unit6-strategy]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6StrategyKey = button.dataset.unit6Strategy;
      renderUnit6Strategy();
    });
  });

  qsa("[data-unit6-mixed-op]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6MixedOperationKey = button.dataset.unit6MixedOp;
      renderUnit6MixedOperation();
    });
  });

  qsa("[data-unit6-line-plot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6LinePlotKey = button.dataset.unit6LinePlot;
      renderUnit6LinePlot();
    });
  });

  qsa("[data-unit6-line-build]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6LineBuildKey = button.dataset.unit6LineBuild;
      renderUnit6LinePlotBuild();
    });
  });

  qsa("[data-unit6-line-missing]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6LineMissingKey = button.dataset.unit6LineMissing;
      renderUnit6LinePlotMissing();
    });
  });

  qsa("[data-unit6-scale]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6ScaleKey = button.dataset.unit6Scale;
      renderUnit6Scaling();
    });
  });

  qsa("[data-unit6-scale-line]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit6ScaleLineKey = button.dataset.unit6ScaleLine;
      renderUnit6ScaleLine();
    });
  });

  qsa("[data-unit1-cube]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit1CubeKey = button.dataset.unit1Cube;
      renderUnit1CubeUnits();
    });
  });

  const unit1LengthInput = qs("#unit1LengthInput");
  if (unit1LengthInput) {
    unit1LengthInput.addEventListener("input", (event) => {
      state.unit1Length = clampInteger(event.target.value, 1, 8);
      renderUnit1PrismBuilder();
    });
  }

  const unit1WidthInput = qs("#unit1WidthInput");
  if (unit1WidthInput) {
    unit1WidthInput.addEventListener("input", (event) => {
      state.unit1Width = clampInteger(event.target.value, 1, 6);
      renderUnit1PrismBuilder();
    });
  }

  const unit1HeightInput = qs("#unit1HeightInput");
  if (unit1HeightInput) {
    unit1HeightInput.addEventListener("input", (event) => {
      state.unit1Height = clampInteger(event.target.value, 1, 6);
      renderUnit1PrismBuilder();
    });
  }

  qsa("[data-unit1-layer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit1LayerKey = button.dataset.unit1Layer;
      renderUnit1Layers();
    });
  });

  qsa("[data-unit1-expression]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit1ExpressionKey = button.dataset.unit1Expression;
      renderUnit1Expressions();
    });
  });

  qsa("[data-unit1-missing]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit1MissingKey = button.dataset.unit1Missing;
      renderUnit1MissingDimension();
    });
  });

  qsa("[data-unit1-composite]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit1CompositeKey = button.dataset.unit1Composite;
      renderUnit1ComposedSolids();
    });
  });

  qsa("[data-unit4-area]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4AreaKey = button.dataset.unit4Area;
      renderUnit4Area();
    });
  });

  qsa("[data-unit4-algorithm]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4AlgorithmKey = button.dataset.unit4Algorithm;
      renderUnit4Algorithm();
    });
  });

  qsa("[data-unit4-digit]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4DigitKey = button.dataset.unit4Digit;
      renderUnit4DigitPlacement();
    });
  });

  qsa("[data-unit4-quotient]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4QuotientKey = button.dataset.unit4Quotient;
      renderUnit4Quotient();
    });
  });

  qsa("[data-unit4-path]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4PathKey = button.dataset.unit4Path;
      renderUnit4Paths();
    });
  });

  qsa("[data-unit4-remainder]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4RemainderKey = button.dataset.unit4Remainder;
      renderUnit4Remainder();
    });
  });

  qsa("[data-unit4-application]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit4ApplicationKey = button.dataset.unit4Application;
      renderUnit4Application();
    });
  });

  qsa("[data-unit8-computation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8ComputationKey = button.dataset.unit8Computation;
      renderUnit8Computation();
    });
  });

  qsa("[data-unit8-volume]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8VolumeKey = button.dataset.unit8Volume;
      renderUnit8Volume();
    });
  });

  qsa("[data-unit8-fraction-game]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8FractionGameKey = button.dataset.unit8FractionGame;
      renderUnit8FractionGame();
    });
  });

  qsa("[data-unit8-decimal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8DecimalKey = button.dataset.unit8Decimal;
      renderUnit8Decimal();
    });
  });

  qsa("[data-unit8-product]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8ProductKey = button.dataset.unit8Product;
      renderUnit8Product();
    });
  });

  qsa("[data-unit8-routine]").forEach((button) => {
    button.addEventListener("click", () => {
      state.unit8RoutineKey = button.dataset.unit8Routine;
      renderUnit8Routine();
    });
  });

  qs("#growthBoard").addEventListener("change", handleGrowthBoardChange);
  qs("#rolloverControlsHost").addEventListener("pointerdown", handleRolloverPointerDown);
  qs("#rolloverControlsHost").addEventListener("mousedown", handleRolloverMouseDown);
  qs("#rolloverControlsHost").addEventListener("click", handleRolloverClick);
  qs("#rolloverControlsHost").addEventListener("input", handleRolloverInput);
  document.addEventListener("pointermove", handlePracticeOrderPointerMove);
  document.addEventListener("pointerup", handlePracticeOrderPointerUp);
  document.addEventListener("pointercancel", handlePracticeOrderPointerUp);
  document.addEventListener("click", handlePracticeSourcePreviewClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePracticeSourcePreview();
    }
  });

  qs("#addCookiesButton").addEventListener("click", () => {
    const amount = clampCookieAmount(Number(qs("#addCookiesInput").value));
    const actualAmount = Math.min(amount, 99 - state.growthCount);
    const fromOnes = state.growthCount % 10;
    state.addAmount = amount;
    if (actualAmount <= 0) {
      renderGrowthScene();
      return;
    }

    if (amount === 1 && fromOnes === 9 && state.growthCount < 99) {
      startRegroupAnimation(state.growthCount, state.growthCount + 1);
      return;
    }

    if (amount > 1) {
      const crossesIntoTens = fromOnes + actualAmount >= 10;
      startRegroupAnimation(
        state.growthCount,
        state.growthCount + actualAmount,
        "add-many-to-tens",
        actualAmount,
        { durationMs: stepAnimationDuration(actualAmount, crossesIntoTens ? 3600 : 0) }
      );
      return;
    }

    state.previousGrowthCount = state.growthCount;
    state.lastGrowthAction = "add";
    state.lastGrowthAmount = actualAmount;
    state.growthCount = Math.min(99, state.growthCount + actualAmount);
    if (state.growthCount % 10 !== 0) {
      state.recentRegroupTensCount = null;
    }
    renderGrowthScene();
  });

  qs("#subtractCookiesButton").addEventListener("click", () => {
    const amount = clampCookieAmount(Number(qs("#addCookiesInput").value));
    const actualAmount = Math.min(amount, state.growthCount);
    state.addAmount = amount;
    if (actualAmount <= 0) {
      state.previousGrowthCount = state.growthCount;
      state.lastGrowthAction = "subtract";
      state.lastGrowthAmount = 0;
      renderGrowthScene();
      return;
    }

    if (actualAmount > 1 && actualAmount <= state.growthCount % 10) {
      startRegroupAnimation(
        state.growthCount,
        state.growthCount - actualAmount,
        "subtract-many-from-ones",
        actualAmount,
        { durationMs: stepAnimationDuration(actualAmount) }
      );
      return;
    }

    if (actualAmount > state.growthCount % 10 && state.growthCount >= 10) {
      startSubtractManyWithBorrow(state.growthCount, state.growthCount - actualAmount, actualAmount);
      return;
    }

    if (
      actualAmount > 0
      && state.growthCount >= 10
      && state.growthCount % 10 === 0
    ) {
      startRegroupAnimation(state.growthCount, state.growthCount - actualAmount, "tens-to-ones", actualAmount);
      return;
    }

    state.previousGrowthCount = state.growthCount;
    state.lastGrowthAction = "subtract";
    state.lastGrowthAmount = actualAmount;
    state.growthCount = Math.max(0, state.growthCount - amount);
    state.recentRegroupTensCount = null;
    renderGrowthScene();
  });

  qs("#resetCookiesButton").addEventListener("click", () => {
    const target = clampResetAmount(Number(qs("#resetCookiesInput").value));
    state.resetTarget = target;
    state.previousGrowthCount = state.growthCount;
    state.growthCount = target;
    state.lastGrowthAction = "reset";
    state.lastGrowthAmount = 0;
    state.recentRegroupTensCount = null;
    renderGrowthScene();
  });

  qs("#addCookiesInput").addEventListener("input", (event) => {
    const amount = clampCookieAmount(Number(event.target.value));
    state.addAmount = amount;
  });

  qs("#resetCookiesInput").addEventListener("input", (event) => {
    state.resetTarget = clampResetAmount(Number(event.target.value));
  });

  qsa("[data-left-form]").forEach((button) => {
    button.addEventListener("click", () => {
      state.leftForm = button.dataset.leftForm;
      renderLeftZeros();
    });
  });

  qs("#wholeNumberInput").addEventListener("input", (event) => {
    const cleanValue = sanitizeWholeInput(event.target.value);
    if (event.target.value !== cleanValue) {
      event.target.value = cleanValue;
    }
    state.leftForm = cleanValue || "0";
    renderLeftZeros();
  });

  qsa("[data-pizza-form]").forEach((button) => {
    button.addEventListener("click", () => {
      state.pizzaForm = button.dataset.pizzaForm;
      renderPizzaScene();
    });
  });

  qs("#decimalNumberInput").addEventListener("input", (event) => {
    const cleanValue = sanitizeDecimalInput(event.target.value);
    if (event.target.value !== cleanValue) {
      event.target.value = cleanValue;
    }
    state.pizzaForm = cleanValue || "0";
    renderPizzaScene();
  });

  qsa("[data-equivalence-key]").forEach((button) => {
    button.addEventListener("click", () => {
      state.equivalenceKey = button.dataset.equivalenceKey;
      state.equivalenceAmount = equivalenceData[state.equivalenceKey].amount;
      state.equivalenceHighlight = "";
      renderEquivalenceBoard();
    });
  });

  qs("#equivalenceNumberInput").addEventListener("input", (event) => {
    const cleanValue = sanitizeEquivalenceInput(event.target.value);
    if (event.target.value !== cleanValue) {
      event.target.value = cleanValue;
    }
    state.equivalenceAmount = cleanValue;
    const matchingPreset = Object.entries(equivalenceData)
      .find(([, data]) => data.amount === cleanValue);
    state.equivalenceKey = matchingPreset ? matchingPreset[0] : "";
    state.equivalenceHighlight = "";
    renderEquivalenceBoard();
  });

  qs("#equivalenceBoard").addEventListener("click", (event) => {
    const partButton = event.target.closest("[data-equivalence-highlight]");
    if (!partButton) return;
    state.equivalenceHighlight = partButton.dataset.equivalenceHighlight;
    renderEquivalenceBoard();
  });

  qsa("[data-operation]").forEach((button) => {
    button.addEventListener("click", () => {
      state.operation = button.dataset.operation;
      state.helpers = false;
      renderOperationBoard();
    });
  });

  qs("#helperToggle").addEventListener("click", () => {
    state.helpers = !state.helpers;
    renderOperationBoard();
  });
}

function init() {
  bindControls();
  renderTopic();
  renderVocabulary();
  renderPracticeSets();
  renderFractionFoundationsTeachMe();
  renderMultiplyingFractionsTeachMe();
  renderDividingFractionsTeachMe();
  renderFractionWordProblemsTeachMe();
  renderCoordinateGeometryTeachMe();
  renderUnit1TeachMe();
  renderUnit4TeachMe();
  renderUnit6TeachMe();
  renderUnit8TeachMe();
  if (qs("#fractionWholeBoard")) renderFractionWholeDemo();
  renderFractionMeaning();
  if (qs("#equivalentFractionBoard")) renderEquivalentFractions();
  if (qs("#fractionDivisionBoard")) renderFractionDivision();
  if (qs("#fractionLineBoard")) renderFractionNumberLine();
  renderFractionCompare();
  renderFractionCalculation();
  renderFractionWholes();
  renderGrowthScene();
  renderLeftZeros();
  renderPizzaScene();
  renderEquivalenceBoard();
  renderOperationBoard();
}

init();
