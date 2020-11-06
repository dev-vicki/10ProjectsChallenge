const quizData = [
{
  question: 'Actually your an F***ing idiot?',
  a: 'Yes',
  b: 'No',
  c: 'Maybe',
  d: 'Dont you know! ',
  correct: 'd'
}, {
  question: 'What is the most used programming language in 2020?',
  a: 'Java',
  b: 'Python',
  c: 'C++',
  d: 'Javascript',
  correct: 'd'
}, {
  question: 'Who is the president of us?',
  a: 'Joe Biden',
  b: 'Donald J Trump',
  c: 'Kamala Harris',
  d: 'Mike Pence',
  correct: 'b'
}, {
  question: 'What does HTML stand for?',
  a: 'Hyper to makeup langauage',
  b: 'Hypo text money langauage',
  c: 'Hyper text markup langauage',
  d: 'Hyper text makeup langauge',
  correct: 'c'
}, {
  question: 'Which year javascript was introduced?',
  a: '1995',
  b: '1999',
  c: '2008',
  d: '1991',
  correct: 'a'
}
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  
  const currentQuizdata = quizData[currentQuiz];
  
  questionEl.innerText = currentQuizdata.question;
  a_text.innerText = currentQuizdata.a;
  b_text.innerText = currentQuizdata.b;
  c_text.innerText = currentQuizdata.c;
  d_text.innerText = currentQuizdata.d;

}

function getSelected() {
    let answer = undefined;

  answersEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer = answerEl.id;
    }
  });
    return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
//  check to see the answer
     const answer = getSelected();
  
    if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    
    currentQuiz++;
    if(currentQuiz< quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
      <button onclick ="location.reload()">Reload</button>
      `;
    
    }
  }
});