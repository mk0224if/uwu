
const quizData = [
  {
    question: "水の化学式はどれ？",
    choices: ["H2O", "CO2", "NaCl", "O2"],
    correct: 0,
    explanation: "水はH（水素）2つとO（酸素）1つからなるので、H2Oが正解です。"
  },
  {
    question: "塩（食塩）の化学式はどれ？",
    choices: ["NaCl", "KCl", "HCl", "CaCl2"],
    correct: 0,
    explanation: "食塩はナトリウム（Na）と塩素（Cl）の化合物で、NaClが正解です。"
  },
  {
    question: "酸素の化学式はどれ？",
    choices: ["O", "O2", "O3", "CO"],
    correct: 1,
    explanation: "通常の酸素分子は2個の酸素原子からできており、O2が正解です。"
  }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const quiz = quizData[currentQuiz];
  document.getElementById("question").textContent = quiz.question;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  quiz.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(index);
    choicesDiv.appendChild(btn);
  });
  document.getElementById("explanation").textContent = "";
  document.getElementById("nextBtn").style.display = "none";
}

function selectAnswer(selectedIndex) {
  const quiz = quizData[currentQuiz];
  const explanation = document.getElementById("explanation");
  if (selectedIndex === quiz.correct) {
    score++;
    explanation.innerHTML = `<span style="color: green;">◯</span> 正解！<br>${quiz.explanation}`;
  } else {
    explanation.innerHTML = `<span style="color: green;">×</span> 不正解。<br>${quiz.explanation}`;
  }
  // 選択肢を無効化
  document.querySelectorAll(".choice").forEach(btn => btn.disabled = true);
  document.getElementById("nextBtn").style.display = "inline-block";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    showResult();
  }
});

function showResult() {
  document.querySelector(".quiz-box").innerHTML = `
    <h2>クイズ終了！</h2>
    <p class="result">あなたのスコア: ${score} / ${quizData.length}</p>
  `;
}

loadQuiz();
