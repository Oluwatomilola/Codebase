//const quizData = [
  /*  {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Meta Language",
        c: "HyperText Markup Level",
        d: "HyperText Meta Level",
        correct: "a"
    },
    {
        question: "Which HTML element is used to define a paragraph?",
        a: "<p>",
        b: "<div>",
        c: "<span>",
        d: "<h1>",
        correct: "a"
    },
    {
        question: "How do you link to an external stylesheet in HTML?",
        a: "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">",
        b: "<script src=\"style.css\"></script>",
        c: "<style src=\"style.css\"></style>",
        d: "<a href=\"style.css\">",
        correct: "a"
    },
    {
        question: "What is the purpose of the `alt` attribute in an `img` tag?",
        a: "To specify the image source",
        b: "To specify the image width and height",
        c: "To provide alternative text for the image",
        d: "To specify the image border",
        correct: "c"
    },
    {
        question: "How do you create a hyperlink in HTML?",
        a: "<a href=\"https://www.example.com\">Visit Example</a>",
        b: "<link href=\"https://www.example.com\">Visit Example</link>",
        c: "<button href=\"https://www.example.com\">Visit Example</button>",
        d: "<img href=\"https://www.example.com\">Visit Example</img>",
        correct: "a"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Systems",
        c: "Cascading Style Syntax",
        d: "Cascading Style Standards",
        correct: "a"
    },
    {
        question: "How do you apply a CSS style to a specific HTML element?",
        a: "Using the `class` attribute",
        b: "Using the `id` attribute",
        c: "Using the `style` attribute",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What is the difference between `margin` and `padding` properties?",
        a: "`margin` is used for internal spacing, while `padding` is used for external spacing",
        b: "`margin` is used for external spacing, while `padding` is used for internal spacing",
        c: "`margin` and `padding` are used for the same purpose",
        d: "`margin` is used for vertical spacing, while `padding` is used for horizontal spacing",
        correct: "b"
    },
    {
        question: "How do you create a CSS class?",
        a: "Using the `.` notation",
        b: "Using the `#` notation",
        c: "Using the `[]` notation",
        d: "Using the `{}` notation",
        correct: "a"
    },
    {
        question: "What is the purpose of the `display` property in CSS?",
        a: "To specify the font family",
        b: "To specify the font size",
        c: "To specify the element's display type",
        d: "To specify the element's position",
        correct: "c"
    },
    {
        question: "What does JavaScript stand for?",
        a: "Just Scripting Anywhere",
        b: "Java Scripting Anywhere",
        c: "Just Amazing Scripting",
        d: "None of the above",
        correct: "d"
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "Using the `var` keyword",
        b: "Using the `let` keyword",
        c: "Using the `const` keyword",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "What is the purpose of the `console.log()` function in JavaScript?",
        a: "To display an alert box",
        b: "To display a confirmation box",
        c: "To print output to the console",
        d: "To redirect to a new webpage",
        correct: "c"
    },
    {
        question: "How do you create a JavaScript array?",
        a: "Using the `[]` notation",
        b: "Using the `{}` notation",
        c: "Using the `()` notation",
        d: "Using the `new Array()` constructor",
        correct: "a"
    },
    {
        question: "What is the purpose of the `for` loop in JavaScript?",
        a: "To iterate over an array",
        b: "To iterate over an object",
        c: "To execute a block of code repeatedly",
        d: "All of the above",
        correct: "d"
    },
    {
        question: "How do you add an event listener to an HTML element in JavaScript?",
        a: "Using the `addEventListener()` method",
        b: "Using the `attachEvent()` method",
        c: "Using the `listenEvent()`",
        correct: "a"
    },
{
    question: "What is the correct HTML element for the largest heading?",
    a: "<h1>",
    b: "<h6>",
    c: "<heading>",
    d: "<head>",
    correct: "a"
},
{
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    a: "alt",
    b: "src",
    c: "title",
    d: "longdesc",
    correct: "a"
},
{
    question: "Which HTML element is used to specify a footer for a document or section?",
    a: "<footer>",
    b: "<bottom>",
    c: "<section>",
    d: "<foot>",
    correct: "a"
},
{
    question: "Which HTML element is used to define important text?",
    a: "<strong>",
    b: "<important>",
    c: "<b>",
    d: "<i>",
    correct: "a"
},
{
    question: "Which HTML element is used to define emphasized text?",
    a: "<em>",
    b: "<italic>",
    c: "<i>",
    d: "<strong>",
    correct: "a"
},
{
    question: "Which CSS property is used to change the text color of an element?",
    a: "color",
    b: "text-color",
    c: "font-color",
    d: "text-style",
    correct: "a"
},
{
    question: "Which CSS property controls the text size?",
    a: "font-size",
    b: "text-size",
    c: "font-style",
    d: "text-style",
    correct: "a"
},
{
    question: "Which CSS property is used to change the background color?",
    a: "background-color",
    b: "color",
    c: "bgcolor",
    d: "background",
    correct: "a"
},
{
    question: "Which CSS property is used to change the font of an element?",
    a: "font-family",
    b: "font-style",
    c: "font-weight",
    d: "font-size",
    correct: "a"
},
{
    question: "How do you make each word in a text start with a capital letter in CSS?",
    a: "text-transform: capitalize",
    b: "text-transform: uppercase",
    c: "text-transform: lowercase",
    d: "text-transform: none",
    correct: "a"
},
{
    question: "Which CSS property is used to change the left margin of an element?",
    a: "margin-left",
    b: "padding-left",
    c: "indent",
    d: "margin",
    correct: "a"
},
{
    question: "How do you select an element with id 'demo' in CSS?",
    a: "#demo",
    b: ".demo",
    c: "demo",
    d: "*demo",
    correct: "a"
},
{
    question: "How do you select elements with class name 'test' in CSS?",
    a: ".test",
    b: "#test",
    c: "*test",
    d: "test",
    correct: "a"
},
{
    question: "How do you select all p elements in a div element in CSS?",
    a: "div p",
    b: "div.p",
    c: "div#p",
    d: "div+p",
    correct: "a"
},
{
    question: "Which CSS property is used to make the text bold?",
    a: "font-weight",
    b: "font-style",
    c: "text-decoration",
    d: "text-transform",
    correct: "a"
},
{
    question: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function:myFunction()",
    c: "function = myFunction()",
    d: "function => myFunction()",
    correct: "a"
},
{
    question: "How do you call a function named 'myFunction' in JavaScript?",
    a: "myFunction()",
    b: "call myFunction()",
    c: "call function myFunction()",
    d: "execute myFunction()",
    correct: "a"
},
{
    question: "How do you write an IF statement in JavaScript?",
    a: "if (i == 5)",
    b: "if i = 5 then",
    c: "if i == 5 then",
    d: "if i = 5",
    correct: "a"
},
{
    question: "How do you write an IF statement for executing some code if 'i' is NOT equal to 5?",
    a: "if (i != 5)",
    b: "if i <> 5",
    c: "if (i <> 5)",
    d: "if i =! 5 then",
    correct: "a"
},
{
    question: "How does a WHILE loop start in JavaScript?",
    a: "while (i <= 10)",
    b: "while i <= 10",
    c: "while (i <= 10; i++)",
    d: "while (i = 0; i <= 10)",
    correct: "a"
},
{
    question: "How does a FOR loop start in JavaScript?",
    a: "for (i = 0; i <= 5; i++)",
    b: "for i = 1 to 5",
    c: "for (i <= 5; i++)",
    d: "for (i = 0; i <= 5)",
    correct: "a"
},
{
    question: "How can you add a comment in JavaScript?",
    a: "// This is a comment",
    b: "' This is a comment",
    c: "<!-- This is a comment -->",
    d: "/* This is a comment */",
   // correct: "a"
//},
/*{
    question: "How do you add a multi-line comment in JavaScript?",
    a: "/* This is a comment */",
  /*  b: "// This is a comment //",
    c: "<!-- This is a comment -->",
    d: "' This is a comment",
    correct: "a"
},
{
    question: "What is the correct way to write a JavaScript array?",
    a: "var colors = ['red', 'green', 'blue']",
    b: "var colors = 'red', 'green', 'blue'",
    c: "var colors = (1:'red', 2:'green', 3:'blue')",
    d: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    correct: "a"
},
{
    question: "How do you round the number 7.25 to the nearest integer in JavaScript?",
    a: "Math.round(7.25)",
    b: "Math.rnd(7.25)",
    c: "round(7.25)",
    d: "rnd(7.25)",
    correct: "a"
},
{
    question: "How do you find the number with the highest value of x and y in JavaScript?",
    a: "Math.max(x, y)",
    b: "Math.ceil(x, y)",
    c: "Math.floor(x, y)",
    d: "ceil(x, y)",
    correct: "a"
},
{
    question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    a: "w2 = window.open(url)",
    b: "w2 = window.new(url)",
    c: "w2 = window.create(url)",
    d: "w2 = window.open.new(url)",
    correct: "a"
},
{
    question: "How do you write a JavaScript object?",
    a: "var person = {firstName:'John', lastName:'Doe'}",
    b: "var person = (firstName:'John', lastName:'Doe')",
    c: "var person = [firstName:'John', lastName:'Doe']",
    d: "var person = firstName:'John', lastName:'Doe'",
    correct: "a"
},
{
    question: "How do you access the first element of an array in JavaScript?",
    a: "array[0]",
    b: "array[1]",
    c: "array.first",
    d: "array.first()",
    correct: "a"
},
{
    question: "How do you find the length of an array in JavaScript?",
    a: "array.length",
    b: "array.size",
    c: "array.count",
    d: "array.index",
    correct: "a"
},
{
    question: "How do you add a new element to an array in JavaScript?",
    a: "array.push(element)",
    b: "array.add(element)",
    c: "array.insert(element)",
    d: "array.append(element)",
    correct: "a"
},
{
    question: "How do you remove the last element from an array in JavaScript?",
    a: "array.pop()",
    b: "array.remove()",
    c: "array.delete()",
    d: "array.shift()",
    correct: "a"
},
{
    question: "How do you convert a string to a number in JavaScript?",
    a: "Number(string)",
    b: "string.toNumber()",
    c: "parseInt(string)",
    d: "parseFloat(string)",
    correct: "a"
},
{
    question: "How do you convert a number to a string in JavaScript?",
    a: "number.toString()",
    b: "String(number)",
    c: "number.toText()",
    d: "number.toChar()",
    correct: "a"
}
];//

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
*/