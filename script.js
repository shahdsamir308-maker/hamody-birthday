// ============================================
// ✏️ عدّلي هنا بسهولة
// ============================================

const config = {
  name: "Hamody❤️",
  yourName: "Shahodaa",
  messageTitle: "حموودى🥰",

  arabicMessage: `"كل سنه و أنت طيب و بخير يا حبيبي 🥳❤️ كل سنه و أنت معايا و عيد ميلادك الجاى نكون سوا فى بيتنا إن شاء الله 🥰 بتمنالك التوفيق و السعاده فى حياتك الجايه لان سعادتك هى سعادتى و نجاحك نجاحى✨❤️  تأكد انى فخوره بك و بكل خطوة بتعملها فى حياتنا و واثقه أنك هتكون أنجح حد فى الدنيا كلها 🌎❤️ ربنا يديمك فى حياتى العمر كله و نتشارك أيامنا و تفاصيلنا الصغيره و نبنى سوا ذكريات جميله  بحبك 🥹❤️`,

  englishMessage: `Happy Birthday katkoty 🥰❤️`,

  // ========== الأسئلة ==========
  // correct: رقم الإجابة الصحيحة (0 = الأولى، 1 = الثانية، 2 = الثالثة)
  questions: [
    {
      question: "بتحب ايه أكتر؟",
      options: ["أنا", "النوم", "القطط"],
      correct: 0
    },
    {
      question: "لو خيروك تتنازل عن حاجه بتحبها علشان تسعدني هتعمل اى؟",
      options: [
        "مش هتنازل عن حاجه بحبها",
        "هتنازل عن كل حاجه علشانك",
        "هتنازل بس هتكون حاجه صغيره"
      ],
      correct: 1
    },
    {
      question: "جواب على السؤال ده صح و هتلاقي مفاجأه حلوه",
      options: [
        "خروجه مع صحابك",
        "تنام",
        "نخرج سوا حتى لو 2 بليل"
      ],
      correct: 2
    }
  ],

  // ========== الصور ==========
  photos: [
    { src: "2.jpeg", date: " 8 JUN 2025 " },
    { src: "5.jpeg", date: " 6 JUL 2025 " },
    { src: "1.jpeg", date: " 7 NOV 2025 " },
    { src: "3.jpeg", date: " 8 JUN 2025 " },
    { src: "9.jpeg", date: " 3 JUL 2025 " },
    { src: "8.jpeg", date: " 8 JUN 2025 " },
    { src: "6.jpeg", date: " 6 JUL 2025 " },
    { src: "7.jpeg", date: " 10 JUL 2025 " }
  ]
};

// ============================================
// الكود الأساسي (متعدليش فيه)
// ============================================

let selectedAnswers = [];

document.addEventListener("DOMContentLoaded", () => {
  // الأسماء
  document.getElementById("name").textContent = config.name;
  document.getElementById("name2").textContent = config.name;
  document.getElementById("name3").textContent = config.name;
  document.getElementById("your-name").textContent = config.yourName;
  document.getElementById("message-title").textContent = config.messageTitle;

  // الرسائل
  document.getElementById("arabic-message").textContent = config.arabicMessage;
  document.getElementById("english-message").innerHTML = config.englishMessage.replace(/\n/g, "<br>");

  renderQuestions();
  renderPhotos();
});

function renderQuestions() {
  const box = document.getElementById("question-box");
  box.innerHTML = "";
  selectedAnswers = [];

  config.questions.forEach((q, qIndex) => {
    const div = document.createElement("div");
    div.className = "question";

    let optionsHTML = "";
    q.options.forEach((opt, oIndex) => {
      optionsHTML += `
        <label class="option" data-q="${qIndex}" data-o="${oIndex}">
          <input type="radio" name="q${qIndex}" value="${oIndex}">
          ${opt}
        </label>
      `;
    });

    div.innerHTML = `
      <h3>السؤال ${qIndex + 1}<br>${q.question}</h3>
      ${optionsHTML}
    `;
    box.appendChild(div);
  });

  // تفعيل الضغط على الاختيارات
  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function () {
      const qIndex = parseInt(this.dataset.q);
      const oIndex = parseInt(this.dataset.o);

      // شيل التحديد من باقي اختيارات نفس السؤال
      this.parentElement.querySelectorAll(".option").forEach(opt => {
        opt.classList.remove("selected");
      });

      // حدد الاختيار الحالي
      this.classList.add("selected");
      selectedAnswers[qIndex] = oIndex;

      console.log("تم اختيار:", selectedAnswers); // للتأكد
    });
  });

  document.getElementById("submit-btn").style.display = "block";
}

function checkAnswers() {
  // التأكد إن كل الأسئلة متجاوب عليها
  if (selectedAnswers.length < config.questions.length || selectedAnswers.includes(undefined)) {
    alert("جاوب على كل الأسئلة الأول 😊");
    return;
  }

  // التحقق من الإجابات
  let allCorrect = true;
  config.questions.forEach((q, i) => {
    if (selectedAnswers[i] !== q.correct) {
      allCorrect = false;
    }
  });

  if (allCorrect) {
    // نجح → روح لصفحة الاحتفال
    document.getElementById("quiz").classList.remove("active");
    document.getElementById("celebration").classList.add("active");
    createConfetti();
  } else {
    // غلط → أظهر الرسالة
    document.getElementById("error-modal").classList.add("show");
  }
}

function closeModal() {
  document.getElementById("error-modal").classList.remove("show");
  selectedAnswers = [];
  document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
}

function startQuiz() {
  document.getElementById("welcome").classList.remove("active");
  document.getElementById("quiz").classList.add("active");
}

function renderPhotos() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  config.photos.forEach(photo => {
    const card = document.createElement("div");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${photo.src}" alt="memory" loading="lazy">
      <div class="photo-date">${photo.date}</div>
    `;
    gallery.appendChild(card);
  });
}

function createConfetti() {
  const container = document.getElementById("confetti");
  container.innerHTML = ""; // مسح الكونفيتي القديم
  const colors = ["#ff6b9d", "#c45c7a", "#ff9ecd", "#ffd1dc", "#a855f7", "#f472b6"];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 3 + 2) + "s";
    piece.style.animationDelay = Math.random() * 2 + "s";
    piece.style.width = (Math.random() * 8 + 6) + "px";
    piece.style.height = (Math.random() * 12 + 8) + "px";
    container.appendChild(piece);
  }
}
