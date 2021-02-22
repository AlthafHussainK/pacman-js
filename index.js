const squares = Array.from(document.querySelectorAll('.grid div'))

let layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,1,1,2,1,2,1,1,2,1,2,1,1,1,1,2,1,
    1,2,1,2,2,1,2,2,2,2,1,2,2,2,2,1,2,1,
    1,2,1,2,1,1,2,1,1,2,1,1,1,1,2,1,2,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1, 
    1,1,1,2,1,2,1,4,4,4,1,2,1,2,1,2,1,1,
    1,3,3,2,1,2,1,4,4,4,1,2,1,2,1,2,1,1,
    1,1,1,2,1,2,1,4,4,4,1,2,1,2,1,2,1,1,
    1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,2,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,
    1,1,2,1,1,1,1,1,2,2,1,1,1,1,1,2,1,1,
    1,2,2,1,2,2,2,2,2,2,2,2,2,2,1,2,1,1,
    1,2,1,1,2,1,1,1,1,2,1,2,1,1,1,2,1,1,
    1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

for (let i = 0; i < layout.length; i++){
    if (layout[i] === 1){
        squares[i].classList.add('wall') 
    }
    if (layout[i] === 2){
      squares[i].classList.add('pac-dot')
    }
    if (layout[i] === 3){
      squares[i].classList.add('power-pellet')
    }
    if (layout[i] === 4){
      squares[i].classList.add('pacman')
    }
    if (layout[i] === 5){
      squares[i].classList.add('blinky')
    }
    if (layout[i] === 6){
      squares[i].classList.add('inky')
    }
    if(layout[i] === 7){
      squares[i].classList.add('pinky')
    }
    if (layout[i] === 8){
      squares[i].classList.add('clyde')
    }
}