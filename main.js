function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    if (question1 == "answera") {
        correct++;
    }
    if (question2 == "answerc") {
        correct++;
    }
    if (question3 == "answerb") {
        correct++;
    }
    if (question4 == "answerb") {
        correct++;
    }
    if (question5 == "answera") {
        correct++;
    }

    var pictures = ["img/good.gif", "img/okay.gif", "img/bad.gif"]

    var range;

    if (correct < 1){
        range = 2;
    }
    if (correct > 1 && correct < 4) {
        range = 1;
    }
    if (correct > 3) {
        range = 0;
    }

    document.getElementById("after-submit").style.visibility = "visible";

    document.getElementById("number-correct").innerHTML = "You got " + correct + "/5 correct.";
    document.getElementById("picture").src = pictures[range];
}