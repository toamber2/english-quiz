function generateQuiz(questions, quizContainer, resultsContainer,submitButton){
    function showQuestions(questions, quizContainer){

    }

    function showResults(questions, quizContainer, resultsContainer){

    
     showQuestions(questions, quizContainer);
     // we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
}
var myQuestions = [
    {
        question:"1. I ___ English for two years.",
        answers: {
            a: "was study",
            b: "make studying",
            c: "have studying",
            d: "have been studying",
        },
        correctAnswer: "d"
    },
    {
        question:"2. Her bike ___ from outside the school.",
        answers: {
            a: "has stolen",
            b: "is steal",
            c: "was stolen",
            d: "was stole",
        },
        correctAnswer: "c"
    },
    {
        question:"3. I ___ waking up early on the weekend.",
        answers: {
            a: "am hating",
            b: "hated",
            c: "hating",
            d: "hate",
        },
        correctAnswer: "d"
    },
    {
        question:"4. Tomorrow, ___ to the dentist.",
        answers: {
            a: "I going",
            b: "I am going",
            c: "I will to go",
            d: "I is go",
        },
        correctAnswer: "b"
    },
    {
        question:"5. She ___ a new laptop for her sister last week.",
        answers: {
            a: "bought",
            b: "is buying",
            c: "had bought",
            d: "will buy",
        },
        correctAnswer: "a"
    },
    {
        question:"6. Do you want to ___ in Lapland with me?",
        answers: {
            a: "play skiing",
            b: "do ski",
            c: "make skiing",
            d: "go skiing",
        },
        correctAnswer: "d"
    },
    {
        question:"7. They ___ all the cookies before he arrived.",
        answers: {
            a: "had finished",
            b: "to finish",
            c: "finishing",
            d: "has finished",
        },
        correctAnswer: "a"
    },
    {
        question:"8. By this time next year, Jason ___ college.",
        answers: {
            a: "has graduated",
            b: "will have graduated",
            c: "is graduating",
            d: "going to graduate",
        },
        correctAnswer: "b"
    },
    {
        question:"9. I ___ to the movies, but I was too busy studying.",
        answers: {
            a: "would to go",
            b: "would going",
            c: "would had go",
            d: "would have gone",
        },
        correctAnswer: "d"
    },
    {
        question:"10. I think ___ with your family is important.",
        answers: {
            a: "spend time",
            b: "spending time",
            c: "spent time",
            d: "had spent time",
        },
        correctAnswer: "b"
    },
]