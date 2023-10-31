let questions = [
  {
    question: "What temperature does water boil at?",
    opt1: "50 degrees Celcius",
    opt2: "25 degrees Celcius",
    opt3: "100 degrees Celcius",
    opt4: "150 degrees Celcius",
    answer: "100 degrees Celcius",
  },

  {
    question: "Who wrote Julius Caesar, Macbeth and Hamlet?",
    opt1: "Wole Soyinka",
    opt2: "William Shakespeare",
    opt3: "Ngozi Chimamanda Adichie",
    opt4: "Dan Brown",
    answer: "William Shakespeare",
  },

  {
    question: "What did the crocodile swallow in Peter Pan?",
    opt1: "A Book",
    opt2: "A Computer",
    opt3: "A pair of shoes",
    opt4: "Alarm Clock",
    answer: "Alarm Clock",
  },

  {
    question: "Which is the only mammal that can’t jump?",
    opt1: "Dog",
    opt2: "Elephant",
    opt3: "Goat",
    opt4: "Lion",
    answer: "Elephant",
  },

  {
    question: "Who lived at 221B, Baker Street, London?",
    opt1: "Tony Stark",
    opt2: "Morgan Freeman",
    opt3: "Sherlock Holmes",
    opt4: "Samuel L. Jackson",
    answer: "Sherlock Holmes",
  },

  {
    question: "What colour is a panda?",
    opt1: "Green and Yellow",
    opt2: "Blue and Red",
    opt3: "Green and White",
    opt4: "Black and White",
    answer: "Black and White",
  },

  {
    question: "Where is the smallest bone in the human body?",
    opt1: "The Chest",
    opt2: "The Ear",
    opt3: "The Legs",
    opt4: "The Hands",
    answer: "The Ear",
  },

  {
    question: "What does the roman numeral C represent?",
    opt1: "100",
    opt2: "10",
    opt3: "10,000",
    opt4: "1,000,000",
    answer: "100",
  },

  {
    question: "What takes place in Hong Kong's Happy Valley?",
    opt1: "Chicken Wrestling",
    opt2: "Horse racing",
    opt3: "Street Racing",
    opt4: "Arm Wrestling",
    answer: "Horse racing",
  },

  {
    question: "Who painted the Mona Lisa?",
    opt1: "Alexander Graham Bell",
    opt2: "Sir Isaac Newton",
    opt3: "Leonardo Da Vinci",
    opt4: "Albert Einstein",
    answer: "Leonardo Da Vinci",
  },

  {
    question: "What’s the most important book in the Moslem religion?",
    opt1: "The Koran",
    opt2: "The Dictionary",
    opt3: "The Bible",
    opt4: "The Chemistry text Book",
    answer: "The Koran",
  },

  {
    question: "What’s the capital of Ethiopia?",
    opt1: "Cape Town",
    opt2: "San Francisco",
    opt3: "Addis Ababa",
    opt4: "Syndey",
    answer: "Addis Ababa",
  },

  {
    question: "How many squares are there on a chess board?",
    opt1: "128",
    opt2: "64",
    opt3: "32",
    opt4: "256",
    answer: "64",
  },

  {
    question: "Who invented the electric light bulb?",
    opt1: "Tom Cruise",
    opt2: "Barack Obama",
    opt3: "Wole Soyinka",
    opt4: "Thomas Edison",
    answer: "Thomas Edison",
  },

  {
    question: "What are the first three words of the bible?",
    opt1: "be with everyone",
    opt2: "Again Jesus asked",
    opt3: "In the beginning",
    opt4: "At that time",
    answer: "In the beginning",
  },
];

let para = document.getElementById("ques");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let button = document.getElementById("next-btn");
let timer = document.getElementById("timer");
let index = 0;
let score = 0;
let min = 1;
let sec = 59;

setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
  }
  if (min < 0) {
    min = 1;
    sec = 59;
    nextQuestion();
  }
}, 1000);

function nextQuestion() {
  var getOptions = document.getElementsByName("options");

  for (var i = 0; i < getOptions.length; i++) {
    document.getElementById("number").innerHTML = `Question ${index + 1} of ${
      questions.length
    }`;
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedQues = questions[index - 1]["question"];
      var selectedAns = questions[index - 1][`opt${selectedValue}`];
      var correctAns = questions[index - 1]["answer"];
      if (selectedAns == correctAns) {
        score++;
      }
    }
    getOptions[i].checked = false;
  }
  button.disabled = true;

  if (index > questions.length - 1) {
    if (score < 5) {
      Swal.fire(
        "Sorry!",
        "You have failed the quiz, your score is " + score + " out of 15",
        "error"
      );
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } else if (score > 4 && score < 10) {
      Swal.fire(
        "Learn More!",
        "You failed to answer some questions correctly, your score is " +
          score +
          " out of 15",
        "error"
      );
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    } else if (score > 9) {
      Swal.fire(
        "Great!",
        "You passed the test with the score of " + score + " out of 15",
        "success"
      );
      setTimeout(function () {
        window.location.reload();
      }, 5000);
    }
  } else {
    question.innerHTML = questions[index].question;
    opt1.innerHTML = questions[index].opt1;
    opt2.innerHTML = questions[index].opt2;
    opt3.innerHTML = questions[index].opt3;
    opt4.innerHTML = questions[index].opt4;
    index++;
  }
  min = 1;
  sec = 59;
}

function clicked() {
  button.disabled = false;
}

nextQuestion();
