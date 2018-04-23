
let one = "img/1.png";
let two = "img/2.png";
let three = "img/angry.png";
let four = "img/4.png";
let five = "img/5.png";
let six = "img/6.png";


function random_dice() {
    let dice = [one, two, three, four, five, six];
    return dice[Math.floor(Math.random() * 6)]
}

function reset() {
    if ($('#hold1').attr('class') === 'button active') {
        $('#hold1').toggleClass("active");
    }
    if ($('#hold2').attr('class') === 'button active') {
        $('#hold2').toggleClass("active");
    }
}


function checkStage() {
    if ($('#die1').attr('src') === three && $('#die2').attr('src') === three) {
        document.getElementById("stage").innerText = "Stage 1";
        reset()
    }
    else if ($('#die2').attr('src') === three && $('#die1').attr('src') === three) {
        document.getElementById("stage").innerText = "Stage 1";
        reset()
    }
    if (document.getElementById("stage").innerText === "Stage 1") {
        if ($('#die1').attr('src') === one && $('#die2').attr('src') === two) {
            document.getElementById("stage").innerText = "Stage 2";
            reset()
        }
        else if ($('#die2').attr('src') === one && $('#die1').attr('src') === two) {
            document.getElementById("stage").innerText = "Stage 2";
            reset()
        }
    }
    if (document.getElementById("stage").innerText === "Stage 2") {
        if ($('#die1').attr('src') === three && $('#die2').attr('src') === four) {
            document.getElementById("stage").innerText = "Stage 3";
            reset()
        }
        else if ($('#die1').attr('src') === four && $('#die2').attr('src') === three) {
            document.getElementById("stage").innerText = "Stage 3";
            reset()
        }
    }
    else if (document.getElementById("stage").innerText === "Stage 3") {
        if ($('#die1').attr('src') === five && $('#die2').attr('src') === six) {
            document.getElementById("stage").innerText = "WINNER";
            $('#play').toggleClass('active');
            reset()
        }
        else if ($('#die1').attr('src') === six && $('#die2').attr('src') === five) {
            document.getElementById("stage").innerText = "WINNER";
            $('#play').toggleClass('active');
            reset()
        }
    }
}

$('#hold1').on({'click': function(){
    if ($('#die1').attr('src') !== six) {
        $(this).toggleClass("active")}
}});


$('#hold2').on({'click': function(){
    if ($('#die2').attr('src') !== six) {
        $(this).toggleClass("active")}
}});


$('#roll').on({'click': function(){
    if ($('#play').hasClass('button active')){
        if ($('#hold1').hasClass('button active')){
        }
        else {
            $('#die1').attr('src',random_dice());
        }
        if ($('#hold2').hasClass('button active')) {
        }
        else {
            $('#die2').attr('src',random_dice());
        }
        checkStage()
        }
}});


$('#play').on({'click': function(){
    $(this).toggleClass("active");
    document.getElementById("stage").innerText = "Stage 1";
    reset()
}});