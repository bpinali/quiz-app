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
            question: 'In 1964, Fender introduced dot inlays made of what material?',
            choices: ['Bakelite', 'Clay', 'Maple', 'Pearloid'],
            correct: 3,
            correctDetails: 'By the fall of 1964, the previous clay fingerboard dots were changed to Pearloid.'
    },
//Question 3
        {
            question: 'Which of the following is the name of a famous craftsman who worked at Fender in the 1950\'s?',
            choices: ['Tadeo Gomez', 'Roberto Guerra', 'John Rodriguez', 'Pedro Ybarra'],
            correct: 0,
            correctDetails: 'Tadeo Gomez worked at Fender in the 50\'s and necks bearing his initials, "T.G." are especially revered.'
    },

//Question 4
        {
            question: 'In what year did CBS buy Fender?',
            choices: ['1964', '1965', '1966', '1968'],
            correct: 1,
            correctDetails: 'In early 1965, Leo Fender sold his company to the Columbia Broadcasting System (CBS) for $13 million.'
    },
//Question 5
        {
            question: 'Which of the following is NOT a vintage Fender color?',
            choices: ['Charcoal Frost Metallic', 'Olympic White', 'Emerald Green', 'Shoreline Gold Metallic'],
            correct: 2,
            correctDetails: 'There was never a vintage Fender color called Emerald Green.'
    },
//Question 6
        {
            question: 'What was the first Signature Series guitar Fender ever made?',
            choices: ['Eric Clapton Stratocaster', 'Jeff Beck Stratocaster', 'Muddy Waters Telecaster', 'James Burton Telecaster'],
            correct: 0,
            correctDetails: 'The Eric Clapton Signature Model Stratocaster was introduced in 1988, and was the first Signature Series guitar made by Fender.'
    },
//Question 7
        {
            question: 'Prior to 1951, the Telecaster had a different name. What was it called?',
            choices: ['Swampcaster', 'Broadcaster', 'Tele-squire', 'Soundcaster'],
            correct: 1,
            correctDetails: 'The name Broadcaster had to be changed in February of 1951 after a legal threat from Gretsch alleging similarity to their "BroadKaster" drum set.'
    },
//Question 8
        {
            question: 'What was the list price of a new Stratocaster in 1954?',
            choices: ['$275.00', '$225.99', '$325.00', '$249.50'],
            correct: 3,
            correctDetails: 'In their first year of availability, a brand new Strat would cost you a cool $249.50 USD.'
    },
//Question 9
        {
            question: 'In what year did a budget line of Fender guitars begin production in Japan under the "Squier" name?',
            choices: ['1980', '1982', '1984', '1986'],
            correct: 1,
            correctDetails: 'The initial Squier models were launched in July/August 1982.'
    },
//Question 10
        {
            question: 'What is Leo Fender\'s given first name by birth?',
            choices: ['John', 'Clarence', 'Thomas', 'Mark'],
            correct: 1,
            correctDetails: 'Leo Fender\'s full birth name was Clarence Leonidas Fender.'
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
        $('#result_msg').append("<p class='results-question'>Q: " + questions[questionNum].question + "</p>");
        $('#result_msg').append("<p class='results-answer'>A: " + questions[questionNum].correctDetails + "</p>");

        //quiz is finished, show result-section
        if ((questionNum + 1) == questionTotal) {
            $('#finalScore').text(correctTotal + "/" + questionTotal);
            $('.start-section').hide();
            $('.quiz-section').hide();
            $('.results-section').show();
        } else {
            //continue to next question
            questionNum++;
            displayQuestions();
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
