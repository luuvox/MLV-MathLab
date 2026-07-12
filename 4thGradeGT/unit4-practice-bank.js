// Curated from artifacts/unit 4 materials. See artifacts/unit 4/Unit4-Problem-Bank.md for the full source index.
window.unit4PracticeBank = {
  "multiDigit": [
    {
      "id": "u4-l1-estimate-18-by-418",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 1,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-1-Lesson-student-task-statements.pdf",
      "source": "Lesson 1 Task Statement: Grade5-4-1-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-1-Lesson-student-task-statements/page-002.png",
      "skill": "Estimate products and judge reasonableness",
      "activityForm": "estimate and explain",
      "prompt": "Which estimate is most reasonable for 18 x 418?",
      "responseType": "multi",
      "responsePrompt": "Choose the best estimate, then submit.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "1.1: Reasonable Estimates",
        "caption": "Round 18 to 20 and 418 to about 400, then decide which estimate is closest.",
        "rows": [
          { "label": "Product", "value": "18 x 418" },
          { "label": "Helpful estimate", "value": "20 x 400" },
          { "label": "Question", "value": "Which estimate is reasonable before calculating exactly?" }
        ]
      },
      "hints": [
        "20 x 400 is 8,000, so the answer should be near that.",
        "18 is a little less than 20, and 418 is a little more than 400."
      ],
      "sampleAnswer": "A reasonable estimate is about 8,000. The exact product is 7,524, so 7,500 is closest.",
      "correctFeedback": "Yes. 18 x 418 is close to 20 x 400, and the exact product is 7,524.",
      "incorrectFeedback": "Estimate with friendly numbers first: 20 x 400 is 8,000.",
      "choices": [
        { "value": "7500", "label": "7,500", "correct": true },
        { "value": "4000", "label": "4,000", "correct": false },
        { "value": "3000", "label": "3,000", "correct": false },
        { "value": "1500", "label": "1,500", "correct": false }
      ],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l1-multiply-by-18",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 1,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-1-Lesson-student-task-statements.pdf",
      "source": "Lesson 1 Task Statement: Grade5-4-1-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-1-Lesson-student-task-statements/page-003.png",
      "skill": "Use 18 as 10 plus 8",
      "activityForm": "product input set",
      "prompt": "Find the value of each expression by thinking of 18 as 10 + 8.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill the products, then submit.",
      "visual": {
        "type": "productSet",
        "title": "1.2: Multiply by 18",
        "caption": "Break 18 into 10 + 8, then add the partial products.",
        "rows": [
          { "id": "p1", "label": "1", "expression": "18 x 9 = ___", "correctValue": 162, "accepted": ["162"] },
          { "id": "p2", "label": "2", "expression": "18 x 49 = ___", "correctValue": 882, "accepted": ["882"] },
          { "id": "p3", "label": "3", "expression": "18 x 149 = ___", "correctValue": 2682, "accepted": ["2682", "2,682"] },
          { "id": "explain", "label": "Explain your strategy", "expression": "write a sentence", "placeholder": "describe how 10 groups and 8 groups helped", "acceptAny": true }
        ]
      },
      "hints": [
        "18 x n = 10 x n + 8 x n.",
        "For 18 x 49, find 490 and 392, then add."
      ],
      "sampleAnswer": "For 18 x 49, I used 10 x 49 = 490 and 8 x 49 = 392. The sum is 882.",
      "correctFeedback": "Yes. The products match the 10 + 8 decomposition.",
      "incorrectFeedback": "Check each partial product before adding.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l2-42-by-33-partial-products",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 2,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-2-Lesson-student-task-statements.pdf",
      "source": "Lesson 2 Task Statement: Grade5-4-2-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-2-Lesson-student-task-statements/page-002.png",
      "skill": "Complete an area model with partial products",
      "activityForm": "partial-products diagram",
      "prompt": "Complete the partial products for 42 x 33 and find the total product.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill each rectangle value and the total.",
      "visual": {
        "type": "partialProductsTable",
        "title": "2.1: Decompose in Many Ways",
        "caption": "The source diagram splits 42 into 40 + 2 and 33 into 30 + 3.",
        "contextTables": [
          {
            "title": "Area pieces",
            "columns": ["factor pieces", "product"],
            "rows": [
              ["40 x 30", ""],
              ["40 x 3", ""],
              ["2 x 30", ""],
              ["2 x 3", ""]
            ]
          }
        ],
        "rows": [
          { "id": "40x30", "label": "40 x 30", "expression": "product", "correctValue": 1200, "accepted": ["1200", "1,200"] },
          { "id": "40x3", "label": "40 x 3", "expression": "product", "correctValue": 120, "accepted": ["120"] },
          { "id": "2x30", "label": "2 x 30", "expression": "product", "correctValue": 60, "accepted": ["60"] },
          { "id": "2x3", "label": "2 x 3", "expression": "product", "correctValue": 6, "accepted": ["6"] },
          { "id": "total", "label": "42 x 33", "expression": "total product", "correctValue": 1386, "accepted": ["1386", "1,386"] }
        ]
      },
      "hints": [
        "Each rectangle is one piece of the decomposed product.",
        "Add every partial product to get 42 x 33."
      ],
      "sampleAnswer": "The partial products are 1,200, 120, 60, and 6. Their sum is 1,386.",
      "correctFeedback": "Yes. Those four pieces make the whole product.",
      "incorrectFeedback": "Check that each piece uses one part of 42 and one part of 33.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l2-515-by-24-diagrams",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 2,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-2-Lesson-student-task-statements.pdf",
      "source": "Lesson 2 Task Statement: Grade5-4-2-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-2-Lesson-student-task-statements/page-003.png",
      "skill": "Use a decomposed diagram to calculate a product",
      "activityForm": "partial-products diagram",
      "prompt": "Use partial products to find 515 x 24.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill the partial products and total.",
      "visual": {
        "type": "partialProductsTable",
        "title": "2.2: Calculate in Many Ways",
        "caption": "One source diagram splits 515 into 500 + 10 + 5 and 24 into 20 + 4.",
        "contextTables": [
          {
            "title": "Partial products",
            "columns": ["factor pieces", "product"],
            "rows": [
              ["500 x 20", ""],
              ["10 x 20", ""],
              ["5 x 20", ""],
              ["500 x 4", ""],
              ["10 x 4", ""],
              ["5 x 4", ""]
            ]
          }
        ],
        "rows": [
          { "id": "500x20", "label": "500 x 20", "expression": "product", "correctValue": 10000, "accepted": ["10000", "10,000"] },
          { "id": "10x20", "label": "10 x 20", "expression": "product", "correctValue": 200, "accepted": ["200"] },
          { "id": "5x20", "label": "5 x 20", "expression": "product", "correctValue": 100, "accepted": ["100"] },
          { "id": "500x4", "label": "500 x 4", "expression": "product", "correctValue": 2000, "accepted": ["2000", "2,000"] },
          { "id": "10x4", "label": "10 x 4", "expression": "product", "correctValue": 40, "accepted": ["40"] },
          { "id": "5x4", "label": "5 x 4", "expression": "product", "correctValue": 20, "accepted": ["20"] },
          { "id": "total", "label": "515 x 24", "expression": "total product", "correctValue": 12360, "accepted": ["12360", "12,360"] }
        ]
      },
      "hints": [
        "The 20-row and the 4-row both need every part of 515.",
        "The biggest partial product is 500 x 20."
      ],
      "sampleAnswer": "10,000 + 200 + 100 + 2,000 + 40 + 20 = 12,360.",
      "correctFeedback": "Yes. Every place-value piece is included.",
      "incorrectFeedback": "Look for any missing piece from 500 + 10 + 5 or 20 + 4.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l3-245-by-36-partial-products",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 3,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-3-Lesson-student-task-statements.pdf",
      "source": "Lesson 3 Task Statement: Grade5-4-3-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-3-Lesson-student-task-statements/page-002.png",
      "skill": "Select partial products that make the whole product",
      "activityForm": "expression matching",
      "prompt": "Select all partial products that can be added to find 245 x 36.",
      "responseType": "multi",
      "responsePrompt": "Select every needed expression, then submit.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "3.1: Partial Products Everywhere",
        "caption": "Think of 245 as 200 + 40 + 5 and 36 as 30 + 6.",
        "rows": [
          { "label": "Factor 1", "value": "245 = 200 + 40 + 5" },
          { "label": "Factor 2", "value": "36 = 30 + 6" },
          { "label": "Goal", "value": "Pick the area pieces that cover the full product." }
        ]
      },
      "hints": [
        "Each part of 245 must multiply by 30 and by 6.",
        "There should be 3 x 2 partial products."
      ],
      "sampleAnswer": "Use 200 x 30, 40 x 30, 5 x 30, 200 x 6, 40 x 6, and 5 x 6.",
      "correctFeedback": "Yes. Those six partial products cover the full area.",
      "incorrectFeedback": "Check that every piece of 245 pairs with every piece of 36.",
      "choices": [
        { "value": "200x30", "label": "200 x 30", "correct": true },
        { "value": "40x30", "label": "40 x 30", "correct": true },
        { "value": "5x30", "label": "5 x 30", "correct": true },
        { "value": "200x6", "label": "200 x 6", "correct": true },
        { "value": "40x6", "label": "40 x 6", "correct": true },
        { "value": "5x6", "label": "5 x 6", "correct": true },
        { "value": "245x30", "label": "245 x 30 only", "correct": false },
        { "value": "245x6", "label": "245 x 6 only", "correct": false }
      ],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l4-standard-algorithm-place-values",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 4,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-4-Lesson-student-task-statements.pdf",
      "source": "Lesson 4 Task Statement: Grade5-4-4-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-4-Lesson-student-task-statements/page-002.png",
      "skill": "Explain digits in the standard algorithm",
      "activityForm": "standard algorithm workspace",
      "prompt": "Explain what the composed digits in Elena's standard algorithm represent.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Write the place-value meanings, then submit.",
      "visual": {
        "type": "standardAlgorithmMeaning",
        "title": "4.1: Compose with the Standard Algorithm",
        "caption": "The standard algorithm is a compact record of partial products and composed units.",
        "rows": [
          { "id": "two", "label": "The 2 above the calculation", "expression": "write a sentence", "placeholder": "explain the new unit being composed", "acceptAny": true },
          { "id": "five", "label": "The 5 in the solution", "expression": "write a sentence", "placeholder": "explain which place value it counts", "acceptAny": true }
        ]
      },
      "hints": [
        "A written digit can represent tens, hundreds, or thousands depending on its place.",
        "Connect each compact digit back to a partial product or a composed unit."
      ],
      "sampleAnswer": "A composed digit records a new unit made from a product, such as 10 ones becoming 1 ten or 10 tens becoming 1 hundred. The 5 in the answer counts its place value, not just five ones.",
      "correctFeedback": "Good. Your explanation names the place value instead of treating the digits as isolated ones.",
      "incorrectFeedback": "Describe what unit each digit counts: ones, tens, hundreds, or thousands.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l7-greatest-product",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 7,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-7-Lesson-student-task-statements.pdf",
      "source": "Lesson 7 Task Statement: Grade5-4-7-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-7-Lesson-student-task-statements/page-002.png",
      "skill": "Use digit placement to build a large product",
      "activityForm": "digit placement product builder",
      "prompt": "Use the digits 8, 7, 6, 5, and 4 once each to make a large two-digit by three-digit product.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Enter your factors, product, and reasoning.",
      "visual": {
        "type": "digitPlacementBuilder",
        "title": "7.1: Greatest Product",
        "caption": "Digit-placement games reward place-value thinking. Try to put larger digits in more valuable positions.",
        "tokens": ["8", "7", "6", "5", "4"],
        "rows": [
          { "id": "factor2", "label": "Two-digit factor", "expression": "use two of the digits", "placeholder": "for example, 86", "acceptAny": true },
          { "id": "factor3", "label": "Three-digit factor", "expression": "use the other three digits", "placeholder": "for example, 754", "acceptAny": true },
          { "id": "product", "label": "Product", "expression": "multiply your factors", "placeholder": "answer", "acceptAny": true },
          { "id": "reason", "label": "Explain why this product is large", "expression": "write a sentence", "placeholder": "compare your placement with another possible placement", "acceptAny": true }
        ]
      },
      "hints": [
        "The largest digit does not always simply go in the biggest place if it makes the factors very unbalanced.",
        "Compare two or three candidate products."
      ],
      "sampleAnswer": "One strong placement is 86 x 754 = 64,844. Other placements can be compared by multiplying and checking the product.",
      "correctFeedback": "Good. You used all digits once and compared products.",
      "incorrectFeedback": "Check that every digit is used exactly once and that the product matches the factors.",
      "visualRows": [],
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l10-dancer-groups",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 10,
      "sourceType": "Practice Problem",
      "sourceFolder": "Practice Problems",
      "sourceFile": "Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set.pdf",
      "source": "Section B Practice Problem: Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set.pdf",
      "sourcePage": 1,
      "previewPath": "_rendered-previews/Practice Problems/Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set/page-001.png",
      "skill": "Interpret division as making equal groups",
      "activityForm": "partial-quotients workspace",
      "prompt": "A group has 480 dancers. How many groups can they make?",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill both group counts and explain one strategy.",
      "visual": {
        "type": "divisionStory",
        "title": "Groups of dancers",
        "caption": "The same total can be split into different group sizes.",
        "contextTables": [
          {
            "title": "Complete the group table",
            "columns": ["total dancers", "dancers per group", "number of groups"],
            "rows": [
              ["480", "15", ""],
              ["480", "30", ""]
            ]
          }
        ],
        "rows": [
          { "id": "groups15", "label": "480 dancers: 15 per group", "expression": "number of groups", "correctValue": 32, "accepted": ["32", "32 groups"] },
          { "id": "groups30", "label": "480 dancers: 30 per group", "expression": "number of groups", "correctValue": 16, "accepted": ["16", "16 groups"] },
          { "id": "reason", "label": "Explain one strategy", "expression": "write a sentence", "placeholder": "show how partial quotients or multiplication checked your answer", "acceptAny": true }
        ]
      },
      "hints": [
        "30 is twice 15, so groups of 30 should be half as many groups.",
        "Check with multiplication: groups x dancers per group."
      ],
      "sampleAnswer": "480 ÷ 15 = 32 and 480 ÷ 30 = 16. Since 30 is twice as large as 15, there are half as many groups.",
      "correctFeedback": "Yes. The group counts check with multiplication.",
      "incorrectFeedback": "Use multiplication to check how many dancers your groups account for.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l12-complete-partial-quotients",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 12,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-12-Lesson-student-task-statements.pdf",
      "source": "Lesson 12 Task Statement: Grade5-4-12-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-12-Lesson-student-task-statements/page-003.png",
      "skill": "Complete partial-quotient division",
      "activityForm": "partial-quotients workspace",
      "prompt": "Use partial quotients to find each quotient.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill each quotient, then submit.",
      "visual": {
        "type": "partialQuotientsSet",
        "title": "12.2: Complete the Solution",
        "caption": "Use useful chunks of the divisor until the remainder is 0.",
        "rows": [
          { "id": "q492", "label": "1", "expression": "492 ÷ 12 = ___", "correctValue": 41, "accepted": ["41"] },
          { "id": "q630", "label": "2", "expression": "630 ÷ 15 = ___", "correctValue": 42, "accepted": ["42"] },
          { "id": "q364", "label": "3", "expression": "364 ÷ 14 = ___", "correctValue": 26, "accepted": ["26"] },
          { "id": "check", "label": "Check one answer", "expression": "write a sentence", "placeholder": "use divisor x quotient to check", "acceptAny": true }
        ]
      },
      "hints": [
        "Subtract a large friendly multiple of the divisor first.",
        "The final quotient is the sum of the partial quotients."
      ],
      "sampleAnswer": "492 ÷ 12 = 41, 630 ÷ 15 = 42, and 364 ÷ 14 = 26. For example, 12 x 41 = 492.",
      "correctFeedback": "Yes. Each quotient checks with multiplication.",
      "incorrectFeedback": "Add the partial quotients and multiply back to check.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l13-estimate-and-solve-quotients",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 13,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-13-Lesson-student-task-statements.pdf",
      "source": "Lesson 13 Task Statement: Grade5-4-13-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-13-Lesson-student-task-statements/page-003.png",
      "skill": "Estimate and solve division with two-digit divisors",
      "activityForm": "partial-quotients workspace",
      "prompt": "Estimate, then find each quotient.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill the estimates and quotients.",
      "visual": {
        "type": "divisionEstimateTable",
        "title": "13.2: Estimate and Solve",
        "caption": "Estimate first so the partial quotient work has a reasonableness check.",
        "contextTables": [
          {
            "title": "Division work",
            "columns": ["expression", "estimate", "quotient"],
            "rows": [
              ["612 ÷ 34", "", ""],
              ["529 ÷ 23", "", ""],
              ["1,044 ÷ 29", "", ""]
            ]
          }
        ],
        "rows": [
          { "id": "e612", "label": "612 ÷ 34", "expression": "estimate", "acceptAny": true, "placeholder": "near 20" },
          { "id": "q612", "label": "612 ÷ 34", "expression": "quotient", "correctValue": 18, "accepted": ["18"] },
          { "id": "e529", "label": "529 ÷ 23", "expression": "estimate", "acceptAny": true, "placeholder": "near 20" },
          { "id": "q529", "label": "529 ÷ 23", "expression": "quotient", "correctValue": 23, "accepted": ["23"] },
          { "id": "e1044", "label": "1,044 ÷ 29", "expression": "estimate", "acceptAny": true, "placeholder": "near 35" },
          { "id": "q1044", "label": "1,044 ÷ 29", "expression": "quotient", "correctValue": 36, "accepted": ["36"] }
        ]
      },
      "hints": [
        "Use nearby multiples, such as 34 x 20 or 29 x 30.",
        "Your exact quotient should be close to your estimate."
      ],
      "sampleAnswer": "The exact quotients are 18, 23, and 36.",
      "correctFeedback": "Yes. Your estimates and quotients line up.",
      "incorrectFeedback": "Multiply the divisor by your quotient to check.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l14-practice-partial-quotients",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 14,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-14-Lesson-student-task-statements.pdf",
      "source": "Lesson 14 Task Statement: Grade5-4-14-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-14-Lesson-student-task-statements/page-003.png",
      "skill": "Practice a partial-quotients algorithm",
      "activityForm": "partial-quotients workspace",
      "prompt": "Find each quotient using partial quotients.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill all quotients, then submit.",
      "visual": {
        "type": "partialQuotientsSet",
        "title": "14.2: Practice Problems",
        "caption": "After each quotient, check with divisor x quotient.",
        "rows": [
          { "id": "q768", "label": "1", "expression": "768 ÷ 16 = ___", "correctValue": 48, "accepted": ["48"] },
          { "id": "q1305", "label": "2", "expression": "1,305 ÷ 29 = ___", "correctValue": 45, "accepted": ["45"] },
          { "id": "q8715", "label": "3", "expression": "8,715 ÷ 21 = ___", "correctValue": 415, "accepted": ["415"] },
          { "id": "q6572", "label": "4", "expression": "6,572 ÷ 53 = ___", "correctValue": 124, "accepted": ["124"] }
        ]
      },
      "hints": [
        "Use a friendly large chunk first, such as 10 groups or 100 groups.",
        "The remainder should be 0 for each of these."
      ],
      "sampleAnswer": "The quotients are 48, 45, 415, and 124.",
      "correctFeedback": "Yes. Each quotient checks by multiplication.",
      "incorrectFeedback": "Check one line at a time with divisor x quotient.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l15-missing-area-side-lengths",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 15,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-15-Lesson-student-task-statements.pdf",
      "source": "Lesson 15 Task Statement: Grade5-4-15-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-15-Lesson-student-task-statements/page-002.png",
      "skill": "Find missing side lengths from area",
      "activityForm": "table completion",
      "prompt": "Complete the area table by using area = length x width.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Type directly into the blank table cells, then submit.",
      "visual": {
        "type": "areaTable",
        "title": "15.1: Find the Missing Side Length, Part 1",
        "caption": "Use multiplication to find area and division to find a missing side length.",
        "contextTables": [
          {
            "title": "Complete the table",
            "columns": ["area", "length", "width"],
            "rows": [
              ["816", "24", ""],
              ["1,248", "", "48"],
              ["", "23", "253"],
              ["5,796", "", "36"]
            ]
          }
        ],
        "rows": [
          { "id": "r1-width", "label": "816 24", "expression": "width", "correctValue": 34, "accepted": ["34"] },
          { "id": "r2-length", "label": "1,248 48", "expression": "length", "correctValue": 26, "accepted": ["26"] },
          { "id": "r3-area", "label": "23 253", "expression": "area", "correctValue": 5819, "accepted": ["5819", "5,819"] },
          { "id": "r4-length", "label": "5,796 36", "expression": "length", "correctValue": 161, "accepted": ["161"] }
        ]
      },
      "hints": [
        "If area and one side are known, divide to find the missing side.",
        "If both sides are known, multiply to find area."
      ],
      "sampleAnswer": "The missing values are 34, 26, 5,819, and 161.",
      "correctFeedback": "Yes. Each row matches area = length x width.",
      "incorrectFeedback": "Decide whether each row needs multiplication or division.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l15-missing-volume-dimensions",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 15,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-15-Lesson-student-task-statements.pdf",
      "source": "Lesson 15 Task Statement: Grade5-4-15-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-15-Lesson-student-task-statements/page-003.png",
      "skill": "Find missing prism dimensions from volume",
      "activityForm": "table completion",
      "prompt": "Complete the volume table by using volume = base area x height.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Type directly into the blank table cells, then submit.",
      "visual": {
        "type": "volumeTable",
        "title": "15.2: Find the Missing Side Length, Part 2",
        "caption": "A missing height can be found by dividing volume by base area.",
        "contextTables": [
          {
            "title": "Complete the table",
            "columns": ["volume", "base", "height"],
            "rows": [
              ["375", "15", ""],
              ["1,176", "28", ""]
            ]
          },
          {
            "title": "Clare's prism",
            "columns": ["volume", "length", "width", "height"],
            "rows": [
              ["882", "6", "7", ""]
            ]
          }
        ],
        "rows": [
          { "id": "r1-height", "label": "375 15", "expression": "height", "correctValue": 25, "accepted": ["25"] },
          { "id": "r2-height", "label": "1,176 28", "expression": "height", "correctValue": 42, "accepted": ["42"] },
          { "id": "clare-height", "label": "882 6 7", "expression": "height", "correctValue": 21, "accepted": ["21"] },
          { "id": "clare-step", "label": "Clare's next step", "expression": "write a sentence", "placeholder": "explain how to use 6 x 7 before dividing", "acceptAny": true }
        ]
      },
      "hints": [
        "Base area can mean length x width.",
        "For Clare's prism, first find 6 x 7."
      ],
      "sampleAnswer": "The missing heights are 25, 42, and 21. For Clare, 6 x 7 = 42, and 882 ÷ 42 = 21.",
      "correctFeedback": "Yes. You used volume relationships correctly.",
      "incorrectFeedback": "Check whether you need base area first before dividing.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l16-noodle-serving",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 16,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-16-Lesson-student-task-statements.pdf",
      "source": "Lesson 16 Task Statement: Grade5-4-16-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-16-Lesson-student-task-statements/page-002.png",
      "skill": "Estimate a quotient in context",
      "activityForm": "measurement story problem",
      "prompt": "A single noodle is about 10,119 feet long and serves 400 people. Estimate how many feet of noodle each person gets.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Enter an estimate and explain how you know it is reasonable.",
      "visual": {
        "type": "estimateQuotientStory",
        "title": "16.1: How Many Feet in One Serving?",
        "caption": "This is an estimation problem. A clear nearby quotient is more important than a perfectly exact answer.",
        "contextTables": [
          {
            "title": "Situation",
            "columns": ["total length", "people served", "operation"],
            "rows": [["about 10,119 feet", "400 people", "total length ÷ people"]]
          }
        ],
        "rows": [
          { "id": "estimate", "label": "Estimate per person", "expression": "feet", "accepted": ["25", "about 25", "25 feet", "about 25 feet"] },
          { "id": "reason", "label": "Explain your estimate", "expression": "write a sentence", "placeholder": "use nearby numbers such as 10,000 and 400", "acceptAny": true }
        ]
      },
      "hints": [
        "10,000 ÷ 400 is the same as 100 ÷ 4.",
        "100 ÷ 4 = 25."
      ],
      "sampleAnswer": "About 25 feet each, because 10,000 ÷ 400 = 25 and 10,119 is close to 10,000.",
      "correctFeedback": "Yes. Your estimate uses nearby numbers and explains the quotient.",
      "incorrectFeedback": "Try estimating with 10,000 ÷ 400.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l19-garbage-patch-areas",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 19,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-19-Lesson-student-task-statements.pdf",
      "source": "Lesson 19 Task Statement: Grade5-4-19-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-19-Lesson-student-task-statements/page-003.png",
      "skill": "Compare large areas using multiplication",
      "activityForm": "measurement story problem",
      "prompt": "Compare state-size rectangles to a garbage patch that covers about 1,000,000 square kilometers.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Complete the areas and comparisons.",
      "visual": {
        "type": "areaComparisonTable",
        "title": "19.2: So Much Trash",
        "caption": "Approximate each state as a rectangle, then compare with 1,000,000 square kilometers.",
        "contextTables": [
          {
            "title": "State area estimates",
            "columns": ["place", "length", "width", "area"],
            "rows": [
              ["Rhode Island", "77 km", "60 km", ""],
              ["Delaware", "154 km", "48 km", ""],
              ["New Mexico", "596 km", "552 km", ""]
            ]
          }
        ],
        "rows": [
          { "id": "ri-area", "label": "Rhode Island 77 km 60 km", "expression": "area", "correctValue": 4620, "accepted": ["4620", "4,620"] },
          { "id": "ri-compare", "label": "Rhode Island 77 km 60 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] },
          { "id": "de-area", "label": "Delaware 154 km 48 km", "expression": "area", "correctValue": 7392, "accepted": ["7392", "7,392"] },
          { "id": "de-compare", "label": "Delaware 154 km 48 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] },
          { "id": "nm-area", "label": "New Mexico 596 km 552 km", "expression": "area", "correctValue": 328992, "accepted": ["328992", "328,992"] },
          { "id": "nm-compare", "label": "New Mexico 596 km 552 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] }
        ]
      },
      "hints": [
        "Use length x width for each state estimate.",
        "All three products are much less than 1,000,000."
      ],
      "sampleAnswer": "Rhode Island is about 4,620 sq km, Delaware about 7,392 sq km, and New Mexico about 328,992 sq km. Each is smaller than 1,000,000 sq km.",
      "correctFeedback": "Yes. The multiplication estimates show the garbage patch is larger.",
      "incorrectFeedback": "Check each area product before comparing with 1,000,000.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-pp-b-field-length",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": "Practice",
      "sourceType": "Practice Problem",
      "sourceFolder": "Practice Problems",
      "sourceFile": "Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set.pdf",
      "source": "Section B Practice Problem: Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set.pdf",
      "sourcePage": 4,
      "previewPath": "_rendered-previews/Practice Problems/Grade5-4-B-Multi-digit-Division-Using-Partial-Quotients-curated-practice-problem-set/page-004.png",
      "skill": "Use division to find a missing side length",
      "activityForm": "measurement story problem",
      "prompt": "A rectangular field has area 8,320 square yards and width 65 yards. How long is the field?",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Find the length and explain your reasoning.",
      "visual": {
        "type": "missingSideStory",
        "title": "Area field problem",
        "caption": "Use area ÷ width to find the missing length.",
        "contextTables": [
          {
            "title": "Field information",
            "columns": ["area", "width", "length"],
            "rows": [["8,320 square yards", "65 yards", ""]]
          }
        ],
        "rows": [
          { "id": "length", "label": "8,320 square yards 65 yards", "expression": "length", "correctValue": 128, "accepted": ["128", "128 yards"] },
          { "id": "check", "label": "Check your answer", "expression": "write a sentence", "placeholder": "use width x length = area", "acceptAny": true }
        ]
      },
      "hints": [
        "Find 8,320 ÷ 65.",
        "65 x 100 = 6,500, then keep adding groups of 65."
      ],
      "sampleAnswer": "The length is 128 yards because 65 x 128 = 8,320.",
      "correctFeedback": "Yes. The length checks with width x length.",
      "incorrectFeedback": "Use multiplication to check your quotient.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l5-compare-413-by-21-algorithms",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 5,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-5-Lesson-student-task-statements.pdf",
      "source": "Lesson 5 Task Statement: Grade5-4-5-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-5-Lesson-student-task-statements/page-002.png",
      "skill": "Compare standard algorithms and partial-product reasoning",
      "activityForm": "worked-example comparison",
      "prompt": "Compare two algorithms for finding 413 x 21. Explain where the steps in the first algorithm show up in the standard algorithm.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Use the source page, then write your comparisons.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "5.1: Compare Two Algorithms",
        "caption": "The source shows a step-by-step partial-product record and a compact standard algorithm for the same product.",
        "rows": [
          { "label": "Expression", "value": "413 x 21" },
          { "label": "Source task", "value": "Compare how the two algorithms are the same and different." },
          { "label": "Action", "value": "Explain how each partial product is represented in the compact algorithm." }
        ]
      },
      "hints": [
        "Look for 413 x 1 and 413 x 20 in both records.",
        "A compact standard algorithm can hide zeros and place values, so name the units."
      ],
      "sampleAnswer": "Both algorithms multiply 413 by 1 and by 20, then add the parts. The standard algorithm is shorter because the second partial product is written one place to the left to show tens.",
      "correctFeedback": "Good. You compared the algorithms by their place-value parts.",
      "incorrectFeedback": "Use the source page to connect each partial product to a line or digit in the compact algorithm.",
      "visualRows": [],
      "choices": [],
      "visual": {
        "type": "unit4SourceCard",
        "title": "5.1: Compare Two Algorithms",
        "caption": "The source shows a step-by-step partial-product record and a compact standard algorithm for the same product.",
        "rows": [
          { "label": "Expression", "value": "413 x 21" },
          { "label": "Source task", "value": "Compare how the two algorithms are the same and different." },
          { "label": "Action", "value": "Explain how each partial product is represented in the compact algorithm." }
        ],
        "rowsForAnswer": [
          { "id": "same", "label": "How are they the same?", "expression": "write a sentence", "placeholder": "name the partial products both algorithms use", "acceptAny": true },
          { "id": "different", "label": "How are they different?", "expression": "write a sentence", "placeholder": "describe what the compact algorithm hides", "acceptAny": true },
          { "id": "step-map", "label": "Where do you see 413 x 20?", "expression": "write a sentence", "placeholder": "point to the tens-place line or shift", "acceptAny": true }
        ]
      },
      "topic": "multiDigit"
    },
    {
      "id": "u4-l6-compose-new-unit-241-by-23",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 6,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-6-Lesson-student-task-statements.pdf",
      "source": "Lesson 6 Task Statement: Grade5-4-6-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-6-Lesson-student-task-statements/page-002.png",
      "skill": "Explain composing new units in the multiplication algorithm",
      "activityForm": "standard algorithm workspace",
      "prompt": "Find 241 x 23, then explain where 241 x 3 and 241 x 20 appear in Lin's work.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill the product and explain the place-value meanings.",
      "visual": {
        "type": "standardAlgorithmMeaning",
        "title": "6.1: Compose a New Unit",
        "caption": "Use the source work to connect each compact digit to a multiplication by ones or tens.",
        "rows": [
          { "id": "product", "label": "241 x 23", "expression": "product", "correctValue": 5543, "accepted": ["5543", "5,543"] },
          { "id": "times3", "label": "Where is 241 x 3?", "expression": "write a sentence", "placeholder": "describe the ones-row product in Lin's work", "acceptAny": true },
          { "id": "times20", "label": "Where is 241 x 20?", "expression": "write a sentence", "placeholder": "describe the tens-row product in Lin's work", "acceptAny": true },
          { "id": "compose", "label": "What does the 1 above 241 represent?", "expression": "write a sentence", "placeholder": "name the composed unit", "acceptAny": true }
        ]
      },
      "hints": [
        "The 3 in 23 counts ones; the 2 in 23 counts tens.",
        "A small digit written above the problem records a composed unit from a previous product."
      ],
      "sampleAnswer": "241 x 23 = 5,543. The ones part is 241 x 3, the tens part is 241 x 20, and the small 1 records a composed ten from multiplying ones.",
      "correctFeedback": "Yes. You connected the compact algorithm to the place-value products.",
      "incorrectFeedback": "Separate 23 into 20 + 3, then find where each part appears.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l8-targeted-products-35689",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 8,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-8-Lesson-student-task-statements.pdf",
      "source": "Lesson 8 Task Statement: Grade5-4-8-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-8-Lesson-student-task-statements/page-003.png",
      "skill": "Use digit placement to make products close to targets",
      "activityForm": "digit placement product builder",
      "prompt": "Use the digits 3, 5, 6, 8, and 9 once each to make products close to the two targets.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Enter factors for both targets and explain your choices.",
      "visual": {
        "type": "digitPlacementBuilder",
        "title": "8.2: Targeted Products",
        "caption": "The source gives two target products. Larger digits should usually carry more place value, but balanced factors also matter.",
        "tokens": ["3", "5", "6", "8", "9"],
        "rows": [
          { "id": "near50000", "label": "Close to 50,000", "expression": "two-digit x three-digit factors", "placeholder": "for example, 95 x 638", "acceptAny": true },
          { "id": "product50000", "label": "Product near 50,000", "expression": "product", "placeholder": "multiply your factors", "acceptAny": true },
          { "id": "near20000", "label": "Close to 20,000", "expression": "two-digit x three-digit factors", "placeholder": "for example, 35 x 689", "acceptAny": true },
          { "id": "product20000", "label": "Product near 20,000", "expression": "product", "placeholder": "multiply your factors", "acceptAny": true },
          { "id": "reason", "label": "Why do your placements make sense?", "expression": "write a sentence", "placeholder": "compare place values and factor sizes", "acceptAny": true }
        ]
      },
      "hints": [
        "Try a few products and compare their distance from the target.",
        "If the product is too high, make one factor smaller or move a large digit to a smaller place."
      ],
      "sampleAnswer": "A strong answer uses each digit once for each target, multiplies to check the product, and compares how far the product is from the target.",
      "correctFeedback": "Good. You made and checked targeted products.",
      "incorrectFeedback": "Check that each target uses the five digits once and that the product matches the factors.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l11-choose-partial-quotients",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 11,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-11-Lesson-student-task-statements.pdf",
      "source": "Lesson 11 Task Statement: Grade5-4-11-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-11-Lesson-student-task-statements/page-003.png",
      "skill": "Choose useful partial quotients",
      "activityForm": "partial-quotients workspace",
      "prompt": "Choose one starting partial quotient for each division expression on the source page, then continue the division.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Record your starting chunks, quotients, and reasoning.",
      "visual": {
        "type": "partialQuotientsSet",
        "title": "11.2: Choose Your Own Partial Quotients",
        "caption": "The source page gives possible starting chunks. Pick a useful one, then keep subtracting multiples of the divisor.",
        "rows": [
          { "id": "start1", "label": "Expression 1", "expression": "starting partial quotient", "placeholder": "choose a chunk from the source", "acceptAny": true },
          { "id": "quotient1", "label": "Expression 1", "expression": "quotient", "placeholder": "final quotient", "acceptAny": true },
          { "id": "start2", "label": "Expression 2", "expression": "starting partial quotient", "placeholder": "choose a chunk from the source", "acceptAny": true },
          { "id": "quotient2", "label": "Expression 2", "expression": "quotient", "placeholder": "final quotient", "acceptAny": true },
          { "id": "start3", "label": "Expression 3", "expression": "starting partial quotient", "placeholder": "choose a chunk from the source", "acceptAny": true },
          { "id": "quotient3", "label": "Expression 3", "expression": "quotient", "placeholder": "final quotient", "acceptAny": true },
          { "id": "strategy", "label": "How did you choose?", "expression": "write a sentence", "placeholder": "explain why a chunk was useful", "acceptAny": true }
        ]
      },
      "hints": [
        "A useful first chunk removes a large, easy-to-check amount.",
        "After each chunk, multiply divisor x partial quotient to know what to subtract."
      ],
      "sampleAnswer": "A strong answer chooses a partial quotient that is easy to multiply by the divisor, subtracts that chunk, and keeps going until the leftover is less than the divisor.",
      "correctFeedback": "Good. Your work shows useful chunks and a quotient for each expression.",
      "incorrectFeedback": "Use the source choices and multiply each partial quotient by the divisor before subtracting.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l12-division-worked-example-critique",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 12,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-12-Lesson-student-task-statements.pdf",
      "source": "Lesson 12 Task Statement: Grade5-4-12-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-12-Lesson-student-task-statements/page-002.png",
      "skill": "Critique partial-quotient work",
      "activityForm": "worked-example critique",
      "prompt": "Study the partial-quotient work on the source page. Explain what is correct, what needs another look, and how to revise it.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Use the source work, then write your critique.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "12.1: Critique Division Work",
        "caption": "Do not just calculate from scratch. Read each partial quotient as a chunk that was removed.",
        "rows": [
          { "label": "Action target", "value": "The worked example on the source page" },
          { "label": "Check", "value": "Each chunk should equal divisor x partial quotient." },
          { "label": "Finish", "value": "The partial quotients should add to the final quotient." }
        ],
        "rowsForAnswer": [
          { "id": "correct", "label": "What makes sense?", "expression": "write a sentence", "placeholder": "name one correct chunk or step", "acceptAny": true },
          { "id": "revise", "label": "What would you revise?", "expression": "write a sentence", "placeholder": "identify a chunk, subtraction, or quotient to fix", "acceptAny": true },
          { "id": "check", "label": "How can you check the quotient?", "expression": "write a sentence", "placeholder": "multiply divisor x quotient", "acceptAny": true }
        ]
      },
      "hints": [
        "Check every subtraction by multiplying the divisor by the partial quotient.",
        "The quotient is the sum of the chunks, not the last chunk only."
      ],
      "sampleAnswer": "A strong critique names a correct chunk, identifies any place where the subtraction or quotient total needs checking, and checks by multiplying back.",
      "correctFeedback": "Good. You treated the worked example as math to inspect.",
      "incorrectFeedback": "Pick one row of the worked example and check divisor x partial quotient.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l16-serving-estimate-critique",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 16,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-16-Lesson-student-task-statements.pdf",
      "source": "Lesson 16 Task Statement: Grade5-4-16-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-16-Lesson-student-task-statements/page-003.png",
      "skill": "Critique an estimate in context",
      "activityForm": "worked-example critique",
      "prompt": "Use the source work to decide whether the noodle-serving estimate is reasonable.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Write your critique and a check.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "16.2: Is the Estimate Reasonable?",
        "caption": "Compare the estimate with nearby numbers and units, not just the digits.",
        "rows": [
          { "label": "Context", "value": "A very long noodle is shared by many people." },
          { "label": "Check", "value": "Use total length divided by people served." },
          { "label": "Goal", "value": "Decide whether the estimate has a reasonable size and unit." }
        ],
        "rowsForAnswer": [
          { "id": "claim", "label": "Is the estimate reasonable?", "expression": "write a sentence", "placeholder": "yes/no and why", "acceptAny": true },
          { "id": "nearby", "label": "Nearby-number check", "expression": "write a sentence", "placeholder": "show a friendly quotient", "acceptAny": true },
          { "id": "unit", "label": "What unit should the answer use?", "expression": "unit", "placeholder": "feet per person", "acceptAny": true }
        ]
      },
      "hints": [
        "10,000 divided by 400 is a friendly check.",
        "The answer should be a length for one person, not a total length."
      ],
      "sampleAnswer": "A reasonable estimate should be close to 25 feet per person because 10,000 ÷ 400 = 25.",
      "correctFeedback": "Good. Your critique checks both size and units.",
      "incorrectFeedback": "Use a nearby quotient and name what one person gets.",
      "choices": [],
      "topic": "multiDigit"
    },
    {
      "id": "u4-l17-fractions-as-partial-quotients",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 17,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-17-Lesson-student-task-statements.pdf",
      "source": "Lesson 17 Task Statement: Grade5-4-17-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-17-Lesson-student-task-statements/page-002.png",
      "skill": "Connect equivalent division expressions to partial quotients",
      "activityForm": "expression matching",
      "prompt": "Use the source expressions to decide which ones are equivalent, then explain the value using partial quotients.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Record the equivalent expressions and explain.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "17.1: Select Expressions",
        "caption": "This optional page connects division, fractions, and partial quotients. Keep equivalent expressions grouped by value.",
        "rows": [
          { "label": "Action target", "value": "Each expression choice on the source page" },
          { "label": "Need to show", "value": "Which expressions are equivalent and why" },
          { "label": "Check", "value": "Use partial quotients or multiplication to confirm the value." }
        ],
        "rowsForAnswer": [
          { "id": "equivalent", "label": "Equivalent choices", "expression": "write letters or expressions", "placeholder": "list the source choices that match", "acceptAny": true },
          { "id": "value", "label": "Value", "expression": "answer", "placeholder": "write the value you found", "acceptAny": true },
          { "id": "reason", "label": "Reasoning", "expression": "write a sentence", "placeholder": "explain with partial quotients or multiplication", "acceptAny": true }
        ]
      },
      "hints": [
        "Equivalent expressions have the same value, even if they are split into different chunks.",
        "Use multiplication to check the quotient or value."
      ],
      "sampleAnswer": "A strong answer groups the expressions that make the same value and explains why the decomposed pieces still represent the original division.",
      "correctFeedback": "Good. You connected equivalent expressions to a value.",
      "incorrectFeedback": "Choose one expression and check it with multiplication or partial quotients first.",
      "choices": [],
      "topic": "multiDigit"
    }
  ],
  "volume": [
    {
      "id": "u4-l9-birdhouse-volume-ranges",
      "unit": "unit4",
      "section": "A",
      "sectionName": "Multi-digit Multiplication Using the Standard Algorithm",
      "lesson": 9,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-9-Lesson-student-task-statements.pdf",
      "source": "Lesson 9 Task Statement: Grade5-4-9-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-9-Lesson-student-task-statements/page-003.png",
      "skill": "Find volume ranges from floor area and height range",
      "activityForm": "table completion",
      "prompt": "Complete the birdhouse table by finding the recommended range of volumes for each species.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Type directly into the blank table cells.",
      "visual": {
        "type": "volumeTable",
        "title": "9.2: What is the Volume?",
        "caption": "Use volume = floor area x height. Because the height is a range, the volume is a range too.",
        "contextTables": [
          {
            "title": "Birdhouse volume ranges",
            "columns": ["type of bird", "side lengths of floor", "height", "range of volume"],
            "rows": [
              ["chickadee", "4 in by 4 in", "6 to 10 in", ""],
              ["wood duck", "10 in by 18 in", "10 to 24 in", ""],
              ["barn owl", "10 in by 18 in", "15 to 18 in", ""],
              ["red-headed woodpecker", "6 in by 6 in", "12 to 15 in", ""],
              ["bluebird", "5 in by 5 in", "8 to 12 in", ""],
              ["swallow", "6 in by 6 in", "6 to 8 in", ""]
            ]
          }
        ],
        "rows": [
          { "id": "chickadee-volume", "label": "chickadee", "expression": "range of volume", "accepted": ["96 to 160", "96-160", "96 to 160 cubic inches", "96-160 cubic inches"] },
          { "id": "wood-duck-volume", "label": "wood duck", "expression": "range of volume", "accepted": ["1800 to 4320", "1,800 to 4,320", "1800-4320", "1,800-4,320"] },
          { "id": "barn-owl-volume", "label": "barn owl", "expression": "range of volume", "accepted": ["2700 to 3240", "2,700 to 3,240", "2700-3240", "2,700-3,240"] },
          { "id": "woodpecker-volume", "label": "red-headed woodpecker", "expression": "range of volume", "accepted": ["432 to 540", "432-540", "432 to 540 cubic inches", "432-540 cubic inches"] },
          { "id": "bluebird-volume", "label": "bluebird", "expression": "range of volume", "accepted": ["200 to 300", "200-300", "200 to 300 cubic inches", "200-300 cubic inches"] },
          { "id": "swallow-volume", "label": "swallow", "expression": "range of volume", "accepted": ["216 to 288", "216-288", "216 to 288 cubic inches", "216-288 cubic inches"] },
          { "id": "explain-range", "label": "Explain one row", "expression": "write a sentence", "placeholder": "show floor area x low height and high height", "acceptAny": true }
        ]
      },
      "hints": [
        "Find the floor area first, then multiply by each height endpoint.",
        "For chickadee, 4 x 4 gives the floor area."
      ],
      "sampleAnswer": "For chickadee, 4 x 4 = 16 square inches. Then 16 x 6 = 96 and 16 x 10 = 160, so the range is 96 to 160 cubic inches.",
      "correctFeedback": "Yes. The volume ranges use both ends of each height range.",
      "incorrectFeedback": "Check that each row uses floor area times the low and high heights.",
      "choices": [],
      "topic": "volume"
    },
    {
      "id": "u4-vol-l15-missing-prism-dimensions",
      "unit": "unit4",
      "section": "B",
      "sectionName": "Multi-digit Division Using Partial Quotients",
      "lesson": 15,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-15-Lesson-student-task-statements.pdf",
      "source": "Lesson 15 Task Statement: Grade5-4-15-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-15-Lesson-student-task-statements/page-003.png",
      "skill": "Use volume to find missing dimensions",
      "activityForm": "table completion",
      "prompt": "Complete the prism table. Use volume = base area x height, and divide when a dimension is missing.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Type directly into the blank cells.",
      "visual": {
        "type": "volumeTable",
        "title": "15.2: Missing Side Lengths in Prisms",
        "caption": "A missing height can be found by dividing volume by base area.",
        "contextTables": [
          {
            "title": "Complete the table",
            "columns": ["volume", "base area", "height"],
            "rows": [
              ["375", "15", ""],
              ["1,176", "28", ""]
            ]
          },
          {
            "title": "Clare's prism",
            "columns": ["volume", "length", "width", "height"],
            "rows": [
              ["882", "6", "7", ""]
            ]
          }
        ],
        "rows": [
          { "id": "375-height", "label": "375 15", "expression": "height", "correctValue": 25, "accepted": ["25"] },
          { "id": "1176-height", "label": "1,176 28", "expression": "height", "correctValue": 42, "accepted": ["42"] },
          { "id": "clare-prism-height", "label": "882 6 7", "expression": "height", "correctValue": 21, "accepted": ["21"] },
          { "id": "strategy", "label": "Explain Clare's row", "expression": "write a sentence", "placeholder": "find base area, then divide volume by base area", "acceptAny": true }
        ]
      },
      "hints": [
        "For Clare's prism, first find 6 x 7.",
        "If volume and base area are known, divide."
      ],
      "sampleAnswer": "The missing heights are 25, 42, and 21. Clare's prism has base area 42, and 882 ÷ 42 = 21.",
      "correctFeedback": "Yes. You used volume relationships correctly.",
      "incorrectFeedback": "Check whether each row needs multiplication first or division right away.",
      "choices": [],
      "topic": "volume"
    },
    {
      "id": "u4-l18-milk-for-everyone",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 18,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-18-Lesson-student-task-statements.pdf",
      "source": "Lesson 18 Task Statement: Grade5-4-18-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-18-Lesson-student-task-statements/page-002.png",
      "skill": "Estimate volume in layered real-world groups",
      "activityForm": "estimate and explain",
      "prompt": "Estimate the volume of milk, in cubic inches, that each group would drink in one day.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Record estimates and explain your assumptions.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "18.1: Milk for Everyone",
        "caption": "This source task is about reasonable estimates. You choose sensible assumptions, then scale them up.",
        "rows": [
          { "label": "Smallest group", "value": "you" },
          { "label": "Larger groups", "value": "class, grade, school, 10 schools" },
          { "label": "Need to explain", "value": "what assumptions you used and why the numbers make sense" }
        ]
      },
      "hints": [
        "Pick a reasonable amount for one person first.",
        "To scale up, multiply by the number of people in the group."
      ],
      "sampleAnswer": "A strong answer states assumptions, such as about how many cubic inches one person drinks, then multiplies by estimated group sizes.",
      "correctFeedback": "Good. Your estimates include assumptions and scale up by group size.",
      "incorrectFeedback": "State your one-person estimate and group-size assumptions before multiplying.",
      "visualRows": [],
      "choices": [],
      "visual": {
        "type": "unit4SourceCard",
        "title": "18.1: Milk for Everyone",
        "caption": "This source task is about reasonable estimates. You choose sensible assumptions, then scale them up.",
        "rows": [
          { "label": "Smallest group", "value": "you" },
          { "label": "Larger groups", "value": "class, grade, school, 10 schools" },
          { "label": "Need to explain", "value": "what assumptions you used and why the numbers make sense" },
          { "label": "Response", "value": "Use the writing area to record your estimates." }
        ],
        "rowsForAnswer": [
          { "id": "you", "label": "You", "expression": "estimate in cubic inches", "placeholder": "estimate", "acceptAny": true },
          { "id": "class", "label": "Your class", "expression": "estimate in cubic inches", "placeholder": "estimate", "acceptAny": true },
          { "id": "grade", "label": "Your grade", "expression": "estimate in cubic inches", "placeholder": "estimate", "acceptAny": true },
          { "id": "school", "label": "Your school", "expression": "estimate in cubic inches", "placeholder": "estimate", "acceptAny": true },
          { "id": "ten-schools", "label": "10 schools", "expression": "estimate in cubic inches", "placeholder": "estimate", "acceptAny": true },
          { "id": "reason", "label": "Reasoning", "expression": "write a sentence", "placeholder": "explain the assumptions and multiplications", "acceptAny": true }
        ]
      },
      "topic": "volume"
    },
    {
      "id": "u4-l19-trash-area-comparison-volume-topic",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 19,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-19-Lesson-student-task-statements.pdf",
      "source": "Lesson 19 Task Statement: Grade5-4-19-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-19-Lesson-student-task-statements/page-003.png",
      "skill": "Estimate large areas and compare them to a benchmark",
      "activityForm": "measurement story problem",
      "prompt": "Approximate state areas as rectangles and compare each area to about 1,000,000 square kilometers.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Complete the areas and comparisons.",
      "visual": {
        "type": "areaComparisonTable",
        "title": "19.2: So Much Trash",
        "caption": "Use length x width for each rectangle estimate, then compare with the million-square-kilometer benchmark.",
        "contextTables": [
          {
            "title": "State area estimates",
            "columns": ["place", "length", "width", "area"],
            "rows": [
              ["Rhode Island", "77 km", "60 km", ""],
              ["Delaware", "154 km", "48 km", ""],
              ["New Mexico", "596 km", "552 km", ""]
            ]
          }
        ],
        "rows": [
          { "id": "ri-area-vol", "label": "Rhode Island 77 km 60 km", "expression": "area", "correctValue": 4620, "accepted": ["4620", "4,620"] },
          { "id": "ri-compare-vol", "label": "Rhode Island 77 km 60 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] },
          { "id": "de-area-vol", "label": "Delaware 154 km 48 km", "expression": "area", "correctValue": 7392, "accepted": ["7392", "7,392"] },
          { "id": "de-compare-vol", "label": "Delaware 154 km 48 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] },
          { "id": "nm-area-vol", "label": "New Mexico 596 km 552 km", "expression": "area", "correctValue": 328992, "accepted": ["328992", "328,992"] },
          { "id": "nm-compare-vol", "label": "New Mexico 596 km 552 km", "expression": "comparison", "accepted": ["smaller", "less", "less than 1,000,000", "garbage patch is larger"] }
        ]
      },
      "hints": [
        "Area is length x width.",
        "Compare each area with 1,000,000 after multiplying."
      ],
      "sampleAnswer": "The estimates are 4,620 sq km, 7,392 sq km, and 328,992 sq km. Each is less than 1,000,000 sq km.",
      "correctFeedback": "Yes. Your areas and comparisons fit the benchmark.",
      "incorrectFeedback": "Check each area product before comparing.",
      "choices": [],
      "topic": "volume"
    },
    {
      "id": "u4-l20-plastic-palooza-estimate",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 20,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-20-Lesson-student-task-statements.pdf",
      "source": "Lesson 20 Task Statement: Grade5-4-20-Lesson-student-task-statements.pdf",
      "sourcePage": 3,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-20-Lesson-student-task-statements/page-003.png",
      "skill": "Use volume estimates to test a real-world claim",
      "activityForm": "measurement story problem",
      "prompt": "Decide whether elementary schools could produce enough recyclable plastic to fill the cargo containers shipped each year.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Record estimates and explain your conclusion.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "20.2: Plastic Palooza",
        "caption": "The source page asks for a chain of estimates. Keep the cargo-container volume and school plastic estimates visible.",
        "rows": [
          { "label": "Action target", "value": "Compare estimated recyclable-plastic volume with cargo-container capacity." },
          { "label": "Important habit", "value": "Use units at every step." },
          { "label": "Conclusion", "value": "Decide whether the estimate seems possible." }
        ]
      },
      "hints": [
        "Estimate one container first, then scale by the number of containers.",
        "Estimate plastic from one school, then scale by the number of schools."
      ],
      "sampleAnswer": "A strong answer estimates a cargo container's volume, estimates school plastic volume over time, and compares the two totals using the same unit.",
      "correctFeedback": "Good. Your conclusion is based on comparable volume estimates.",
      "incorrectFeedback": "Make sure both estimates use the same volume unit before comparing.",
      "visualRows": [],
      "choices": [],
      "visual": {
        "type": "unit4SourceCard",
        "title": "20.2: Plastic Palooza",
        "caption": "The source page asks for a chain of estimates. Keep the cargo-container volume and school plastic estimates visible.",
        "rows": [
          { "label": "Action target", "value": "Compare estimated recyclable-plastic volume with cargo-container capacity." },
          { "label": "Important habit", "value": "Use units at every step." },
          { "label": "Conclusion", "value": "Decide whether the estimate seems possible." }
        ],
        "rowsForAnswer": [
          { "id": "container-volume", "label": "Container volume estimate", "expression": "cubic feet or cubic meters", "placeholder": "estimate", "acceptAny": true },
          { "id": "school-plastic", "label": "School plastic estimate", "expression": "volume over time", "placeholder": "estimate", "acceptAny": true },
          { "id": "comparison", "label": "Comparison", "expression": "write a sentence", "placeholder": "can schools fill the containers?", "acceptAny": true },
          { "id": "units", "label": "Units check", "expression": "write a sentence", "placeholder": "explain how units match", "acceptAny": true }
        ]
      },
      "topic": "volume"
    },
    {
      "id": "u4-l21-food-waste-estimates",
      "unit": "unit4",
      "section": "C",
      "sectionName": "Let's Put it to Work",
      "lesson": 21,
      "sourceType": "Task Statement",
      "sourceFolder": "Task Statements",
      "sourceFile": "Grade5-4-21-Lesson-student-task-statements.pdf",
      "source": "Lesson 21 Task Statement: Grade5-4-21-Lesson-student-task-statements.pdf",
      "sourcePage": 2,
      "previewPath": "_rendered-previews/Task Statements/Grade5-4-21-Lesson-student-task-statements/page-002.png",
      "skill": "Scale annual food-waste data to different groups and time spans",
      "activityForm": "measurement story problem",
      "prompt": "Use 219 pounds per person per year to estimate food waste for different groups and time spans.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Fill estimates and explain the scaling.",
      "visual": {
        "type": "comparisonTable",
        "title": "21.1: Food Waste in the United States",
        "caption": "Start from 219 pounds per person per year. Divide for shorter time spans and multiply for larger groups.",
        "contextTables": [
          {
            "title": "Food-waste estimates",
            "columns": ["situation", "estimate"],
            "rows": [
              ["a person in 1 month", ""],
              ["a person in 1 week", ""],
              ["your family in 1 year", ""],
              ["your class in 1 year", ""],
              ["everyone in your state in 1 year", ""]
            ]
          }
        ],
        "rows": [
          { "id": "person-month", "label": "a person in 1 month", "expression": "estimate", "accepted": ["18.25", "about 18", "18 pounds", "about 18 pounds"] },
          { "id": "person-week", "label": "a person in 1 week", "expression": "estimate", "accepted": ["4.2", "about 4", "4 pounds", "about 4 pounds"] },
          { "id": "family-year", "label": "your family in 1 year", "expression": "estimate", "placeholder": "use your family size", "acceptAny": true },
          { "id": "class-year", "label": "your class in 1 year", "expression": "estimate", "placeholder": "use your class size", "acceptAny": true },
          { "id": "state-year", "label": "everyone in your state in 1 year", "expression": "estimate", "placeholder": "use a state population estimate", "acceptAny": true },
          { "id": "explain-scale", "label": "Explain your scaling", "expression": "write a sentence", "placeholder": "say when you divided and when you multiplied", "acceptAny": true }
        ]
      },
      "hints": [
        "There are 12 months in a year and about 52 weeks in a year.",
        "For a group, multiply 219 by the number of people."
      ],
      "sampleAnswer": "One person produces about 18 pounds in a month and about 4 pounds in a week. Larger groups depend on how many people are in the group.",
      "correctFeedback": "Good. You scaled the yearly amount by time and group size.",
      "incorrectFeedback": "Start from 219 pounds per person per year, then decide whether to divide or multiply.",
      "choices": [],
      "topic": "volume"
    }
  ],
  "mixedReview": [
    {
      "id": "u4-family-support-strategy-sort",
      "unit": "unit4",
      "section": "R",
      "sectionName": "Mixed Unit 4 Review",
      "lesson": "Family Support",
      "sourceType": "Family Support",
      "sourceFolder": "Family Support Materials",
      "sourceFile": "Family Support Materials.pdf",
      "source": "Family Support: Family Support Materials.pdf",
      "sourcePage": 1,
      "skill": "Choose a strategy based on the problem type",
      "activityForm": "review routine",
      "prompt": "Choose the strategy you would use for each Unit 4 problem type.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Name a strategy for each situation.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "Unit 4 Strategy Review",
        "caption": "Use the operation and units to decide whether the problem calls for partial products, the standard algorithm, partial quotients, or volume reasoning.",
        "rows": [
          { "label": "Product of two multi-digit numbers", "value": "choose a multiplication strategy" },
          { "label": "Large total split into equal groups", "value": "choose a division strategy" },
          { "label": "Rectangular prism or birdhouse", "value": "use volume relationships" },
          { "label": "Huge real-world quantity", "value": "estimate first, then calculate" }
        ],
        "rowsForAnswer": [
          { "id": "multiplication", "label": "Multi-digit product", "expression": "strategy", "placeholder": "partial products or standard algorithm", "acceptAny": true },
          { "id": "division", "label": "Multi-digit quotient", "expression": "strategy", "placeholder": "partial quotients", "acceptAny": true },
          { "id": "volume", "label": "Volume situation", "expression": "strategy", "placeholder": "length x width x height or divide for missing side", "acceptAny": true },
          { "id": "estimate", "label": "Large-number story", "expression": "strategy", "placeholder": "estimate and check units", "acceptAny": true }
        ]
      },
      "hints": [
        "Look at what is unknown: product, quotient, missing side, or comparison.",
        "Unit 4 problems often need an estimate before exact calculation."
      ],
      "sampleAnswer": "Use partial products or the standard algorithm for products, partial quotients for quotients, volume formulas for prisms, and estimation for large real-world stories.",
      "correctFeedback": "Good. You matched strategies to problem structures.",
      "incorrectFeedback": "Ask what quantity is unknown before choosing a strategy.",
      "choices": [],
      "topic": "mixedReview"
    },
    {
      "id": "u4-center-game-workspace-review",
      "unit": "unit4",
      "section": "R",
      "sectionName": "Mixed Unit 4 Review",
      "lesson": "Blackline",
      "sourceType": "Blackline Master",
      "sourceFolder": "Blackline Masters",
      "sourceFile": "center-number-puzzles-multiplication-and-division-4-5-stage-2-multi-digit-factors-number-puzzles-mult-stage-2-recording-sheet.pdf",
      "source": "Blackline Master: center-number-puzzles-multiplication-and-division-4-5-stage-2-multi-digit-factors-number-puzzles-mult-stage-2-recording-sheet.pdf",
      "sourcePage": 1,
      "previewPath": "_rendered-previews/Blackline Masters/center-number-puzzles-multiplication-and-division-4-5-stage-2-multi-digit-factors-number-puzzles-mult-stage-2-recording-/page-001.png",
      "skill": "Use game records to practice multiplication and division facts",
      "activityForm": "game recording sheet",
      "prompt": "Use the number-puzzle recording sheet as a workspace. Record one multiplication puzzle and one division puzzle, then explain how you checked each.",
      "responseType": "shortAnswerSet",
      "responsePrompt": "Record two game moves and checks.",
      "visual": {
        "type": "unit4SourceCard",
        "title": "Center Review: Number Puzzles",
        "caption": "The center sheets repeat the same Unit 4 habits: make products or quotients, then check with the inverse operation.",
        "rows": [
          { "label": "Multiplication move", "value": "choose factors, find product" },
          { "label": "Division move", "value": "choose dividend/divisor, find quotient" },
          { "label": "Check", "value": "use the inverse operation" }
        ],
        "rowsForAnswer": [
          { "id": "mult-move", "label": "Multiplication puzzle", "expression": "equation", "placeholder": "factor x factor = product", "acceptAny": true },
          { "id": "mult-check", "label": "Multiplication check", "expression": "write a sentence", "placeholder": "explain how you checked", "acceptAny": true },
          { "id": "div-move", "label": "Division puzzle", "expression": "equation", "placeholder": "dividend ÷ divisor = quotient", "acceptAny": true },
          { "id": "div-check", "label": "Division check", "expression": "write a sentence", "placeholder": "explain how multiplication checks division", "acceptAny": true }
        ]
      },
      "hints": [
        "Every division answer can be checked with multiplication.",
        "Every multiplication answer can be checked by decomposing or estimating."
      ],
      "sampleAnswer": "A complete game record includes an equation for each move and a check, such as divisor x quotient = dividend.",
      "correctFeedback": "Good. You used the game sheet as a reasoning workspace.",
      "incorrectFeedback": "Add an inverse-operation check for each puzzle.",
      "choices": [],
      "topic": "mixedReview"
    }
  ]
};
