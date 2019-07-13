function generateQuiz(questions, quizContainer, resultsContainer,submitButton){
    function showQuestions(questions, quizContainer){

    }

    function showResults(questions, quizContainer, resultsContainer){

    
     showQuestions(questions, quizContainer);

    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }
}
}
var myQuestions = [
    {
        question:"",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ''
    },
    
]