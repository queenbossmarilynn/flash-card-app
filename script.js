const term = document.querySelector('.term');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const definition = document.querySelector('.definition');

// Terms and Definitions List (DICTIONARY)
words = {
    Cosmetology: "The art and science of beautifying and improving the skin, nails, hair, and includes the study of cosmetics and their application.",
    Ethics: "The moral principles by which we live and work.",
    "Game Plan": "The conscious act of planning your life, instead of just letting things happen.",
    "Game Setting": "The identification of long-term and short-term goals that helps you decide what you want out of life.",
    "Mission Statement": "A statement that establishes the values that an individuals or institution lives by, as well as future goals.",
    Perfectionism: "An unhealthy compulsion to do things perfectly.",
    Prioritize: "To make a list of task that needs to be done in the order of most-to-least important.",
    Procrastination: "Putting off until tomorrow what you can do today.",
}

//Grab the Term/Definition
data = Object.entries(words)

//Get a Random Term/Definition Function
function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    // console.log(randomTerm);
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

checkButton.addEventListener('click', function(){
    // Check the Check Btn Works
    // console.log("You Clicked the Check Button")
    definition.style.display = 'block';
})

nextButton.addEventListener('click', function(){
    // Check the Next Btn Works
    // console.log("You Clicked the Next Button")
    getRandomWord();
})

