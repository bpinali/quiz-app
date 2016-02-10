$(document).ready(function () {
    var questions = [
//Question 1
        {
            question: 'To accommodate a larger logo, Fender enlarged what part of the Stratocaster in late 1965?',
            choices: ['Bridge', 'Pickguard', 'Headstock', 'Body'],
            correct: 2,
            correctDetails: 'The headstock of the 1965 Stratocaster was enlarged to make room for a new logo.'
    },

//Question 2
        {
            question: 'What is Leo Fender\'s given first name by birth?',
            choices: ['John', 'Clarence', 'Thomas', 'Mark'],
            correct: 1,
            correctDetails: 'Leo Fender\'s birth name was Clarence Leo Fender.'
    }];
    var questionNum = 0;
    var questionTotal = questions.length;
    var correctTotal = 0;

    function displayQuestions() {
        $('#questionNum').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#question').text("Q: " + questions[questionNum].question);
        $('.quiz-choices').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //displays the answer choices
            $('.quiz-choices').append("<input type='radio' class='choices' name='choices' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
        }
    }
    $('.quiz-section').hide();
    $('.results-section').hide();
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.results-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        $('#result_msg').empty();
        displayQuestions();
    });
    $('.quiz-section').on('click', '.choices', function () {
        var answer = $("input[class='choices']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {
            //if correct answer was selected
            correctTotal++;
            //console.log(correctTotal);
        }
        $('#result_msg').append("<p>Q: " + questions[questionNum].question + "<br />");
        $('#result_msg').append("A: " + questions[questionNum].correctDetails + "</p>");

        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {
            $('#finalScore').text(correctTotal + "/" + questionTotal);
            $('.start-section').hide();
            $('.quiz-section').hide();
            $('.results-section').show();
        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }
    });

    $('#tryAgain').click(function () {
        $('.quiz-section').hide();
        $('.results-section').hide();
        $('.start-section').show();
        questionNum = 0;
        correctTotal = 0;
    });

});
