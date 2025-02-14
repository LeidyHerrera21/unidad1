const starBtn = document.querySelector(".start-btn");
const popuInfo = document.getElementById("popup-info");
const exitBtn = document.getElementById(".exit-bnt");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");



function mostrar() {
   popuInfo.style.display = "block";
}

function ocultar() {
   exitBtn.style.display = "block"
}

continueBtn.onclick = () => {
   quizSection.classList.add("active")
   popuInfo.classList.remove("active");
   main.classList.remove("active");
   quizBox.classList.add("active");
   showquestions(0);  
}

let questionCount = 0;

const nextBtn = document. querySelector('.next-btn');

    nextBtn.onclick = () =>{
        questionCount++;
        showQuestions(questionCount);
   }

    const optionList = document.querySelector('.option-list'); 

    // getting questions and options from array
 function showquestions(index) { 
    const questionText = document. querySelector('.question-text');
    questionText.textContent = '${questions[index] .numb} .   ${questions[index] . Question}';

    let optionTag = '<div class="option"><span>${questions[index].options[0]}</span></div>;
                <div class ="option"><span>${questions[index].options[1]}</span> </div>
              <div class="option"><span>${questions[index].options[2]}</span> </div>
              <div class="option"><span>${questions[index].options[3]}</span> </div>
              optionList.innerHTML  
   }
