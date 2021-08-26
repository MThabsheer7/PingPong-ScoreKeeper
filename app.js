const p1 = {
    score: 0,
    button:  document.querySelector('#plr1'),
    display: document.querySelector('.p1')
}

const p2 = {
    score: 0,
    button:  document.querySelector('#plr2'),
    display: document.querySelector('.p2')
}

const score = document.querySelector('.score-head');
const play_to = document.querySelector('#playing_to');

const rst = document.querySelector('#rst');

p1.button.disabled = true;
p2.button.disabled = true;
let max_scr;


function updateScore(player, opponent){
    player.score++;
    if(player.score === max_scr){
        player.display.style.color = "green";
        opponent.display.style.color = "red"
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
    player.display.innerText = `${player.score}`;
}

function reset(){
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.display.style.color = 'black';
    p2.display.style.color = 'black';
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = `${0}`;
    p2.display.innerText = `${0}`;
}

play_to.addEventListener('change', function(){
    let play = play_to.value;
    max_scr = parseInt(play);
    reset();
});

p1.button.addEventListener('click',function(){
    updateScore(p1,p2);
});

p2.button.addEventListener('click',function(){
    updateScore(p2,p1);
});

rst.addEventListener('click', function(){
    reset();
});