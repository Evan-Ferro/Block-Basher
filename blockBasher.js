let score = 0;
let bombsAvoided = 0;
let bombsBashed = 0;
let blocksMissed = 0;
let blocksBashed = 0;
let goldenBlocksBashed = 0;
let goldenBlocksMissed = 0;
let orangeBlocksClicked = 0;
let orangeBlocksMissed = 0;
let c = 0;
let t = 1500;
let s = 1000;
let o = 10000;
let x = 14000;
let g = 30000;
let paused = false;
let goldenBlockClicked = false;
let scoreOrangeBlocks = false;
let lastRow;
let blocksArray = [];
let xBlocksArray = [];
let goldenBlockDestroyed = [];
let clickedBlocksArray = [];
let endGameCalled = false;
let redSpeed = 6;
let blueSpeed = 5.5;
let orangeSpeed = 5;
let xSpeed = 4;
let goldenSpeed = 2.5;
let singleGoldenBlockScore = 0;

function startGame(){
    gameStarted = true;
    hideStartMenu();

    if(goldenBlockClicked === true){
        return
    }
    
    // interval = setInterval(spawnBlocks, t);
    spawnInterval = setInterval(spawnBlueBlocks, s);
    spawnXBombsInterval = setInterval(spawnXblocks, x);
    spawnGoldenBlocksInterval = setInterval(spawnGoldenBlocks, g);
    
    clickedInterval = setInterval(clickedBlocks, c);
    collisionInterval = setInterval(blockCollision, c);

    console.log('Game Started');
}

function increaseBlockSpeed(){
    let score50 = false;
    let score150 = false;
    let score500 = false;

    if(score === 50){
        score50 = true;
    }
    if(score === 150){
        score150 = true;
    }
    if(score === 500){
        score500 = true;
    }

    if(score50 === true){
        redSpeed -= 0.1;
        blueSpeed -= 0.1;
        score50 = false;
        // Red Blocks Spawn Speed
        // t = Math.floor(t * 0.99);
        // clearInterval(spawnBlocks);
        // interval = setInterval(spawnBlocks, t);
        // Blue Blocks Spawn Speed
        s = Math.floor(s * 0.99);
        clearInterval(spawnBlueBlocks);
        spawnInterval = setInterval(spawnBlueBlocks, s);
        // Call orange block spawn interval
        
        spawnOrangeBlocksInterval = setInterval(spawnOrangeBlocks, o);
    }

    if(score150 === true){
        redSpeed -= 0.1;
        blueSpeed -= 0.1;
        xSpeed -= 0.3;
        orangeSpeed -= 0.1;
        // Red Blocks Spawn Speed
        // t = Math.floor(t * 0.999);
        // clearInterval(spawnBlocks);
        // interval = setInterval(spawnBlocks, t);
        // Blue Blocks Spawn Speed
        s = Math.floor(s * 0.99);
        clearInterval(spawnBlueBlocks);
        spawnInterval = setInterval(spawnBlueBlocks, s);
        // X Blocks Spawn Speed
        x = Math.floor(x * 0.97);
        clearInterval(spawnXblocks);
        spawnXBombsInterval = setInterval(spawnXblocks, x);
        // Orange Blocks Spawn Speed
        o = Math.floor(o * 0.99);
        clearInterval(spawnOrangeBlocks);
        spawnOrangeBlocksInterval = setInterval(spawnOrangeBlocks, o);
        // Golden Blocks Spawn Speed
        // g = Math.floor(g * 0.99);
        // clearInterval(spawnGoldenBlocks);
        // spawnGoldenBlocksInterval = setInterval(spawnGoldenBlocks, g);
        score150 = false;
    }

    if(score500 === true){
        redSpeed -= 0.1;
        blueSpeed -= 0.1;
        xSpeed -= 0.1;
        goldenSpeed -= 0.1;
        orangeSpeed -= 0.1;
        // Red Blocks Spawn Speed
        // t = Math.floor(t * 0.999);
        // clearInterval(spawnBlocks);
        // interval = setInterval(spawnBlocks, t);
        // Blue Blocks Spawn Speed
        s = Math.floor(s * 0.99);
        clearInterval(spawnBlueBlocks);
        spawnInterval = setInterval(spawnBlueBlocks, s);
        // X Blocks Spawn Speed
        x = Math.floor(x * 0.97);
        clearInterval(spawnXblocks);
        spawnXBombsInterval = setInterval(spawnXblocks, x);
        // Golden Blocks Spawn Speed
        // g = Math.floor(g * 0.99);
        // clearInterval(spawnGoldenBlocks);
        // spawnGoldenBlocksInterval = setInterval(spawnGoldenBlocks, g);
        score500 = false;
    }
    console.log(redSpeed);
    console.log(blueSpeed);
}

const columnOne = document.getElementById('columnOne');
const columnTwo = document.getElementById('columnTwo');
const columnThree = document.getElementById('columnThree');
const columnFour = document.getElementById('columnFour');
const columnFive = document.getElementById('columnFive');
const columnSix = document.getElementById('columnSix');

// function spawnBlocks(){

//     if(paused === true || endGameCalled === true){
//         return;
//     }
//     if(goldenBlockClicked === true){
//         return
//     }

//     // Height the blocks are falling
//     columnRect = columnOne.getBoundingClientRect();
//     columnHeight = columnRect.height / 16 - 2;

//     blockCollision();
//     const columnSpawn = Math.floor(Math.random() * 6);
    
//     if(columnSpawn === 0){
//         if(lastRow != 0){
//             lastRow = 0;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnOne.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);
//             blocksArray.push(fallingBlock);
//         }
        
//     }
//     if(columnSpawn === 1){
//         if(lastRow != 1){
//             lastRow = 1;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnTwo.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);   
//             blocksArray.push(fallingBlock);
//         }
//     }
//     if(columnSpawn === 2){
//         if(lastRow != 2){
//             lastRow = 2;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnThree.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);
//             blocksArray.push(fallingBlock);
//         }
//     }
//     if(columnSpawn === 3){
//         if(lastRow != 3){
//             lastRow = 3;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnFour.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);
//             blocksArray.push(fallingBlock);
//         }  
//     }
//     if(columnSpawn === 4){
//         if(lastRow != 4){
//             lastRow = 4;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnFive.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);
//             blocksArray.push(fallingBlock);
//         }
//     }
//     if(columnSpawn === 5){
//         if(lastRow != 5){
//             lastRow = 5;
//             const fallingBlock = document.createElement('div');
//             fallingBlock.setAttribute('id', 'blockCollision');
//             fallingBlock.classList.add('falling-block');
//             columnSix.append(fallingBlock);
//             setTimeout(() => {
//                 fallingBlock.style.transitionDuration = `${redSpeed}s`;
//                 fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
//             }, 200);
//             blocksArray.push(fallingBlock);
//         }
//     }
// }

function spawnBlueBlocks(){

    if(paused === true || endGameCalled === true){
        return;
    }
    if(goldenBlockClicked === true){
        return
    }

    // Height the blocks are falling
    columnRect = columnOne.getBoundingClientRect();
    columnHeight = columnRect.height / 16 - 2;

    blockCollision();
    const secondSpawn = Math.floor(Math.random() * 6);
    const blockColorPicker = Math.floor(Math.random() * 4);
    
    if(secondSpawn === 0){
        if(lastRow != 0){
            lastRow = 0;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnOne.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }
        
    }
    if(secondSpawn === 1){
        if(lastRow != 1){
            lastRow = 1;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnTwo.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);   
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }
    }
    if(secondSpawn === 2){
        if(lastRow != 2){
            lastRow = 2;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnThree.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }
    }
    if(secondSpawn === 3){
        if(lastRow != 3){
            lastRow = 3;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnFour.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }  
    }
    if(secondSpawn === 4){
        if(lastRow != 4){
            lastRow = 4;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnFive.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }
    }
    if(secondSpawn === 5){
        if(lastRow != 5){
            lastRow = 5;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            columnSix.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${blueSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);

            if(blockColorPicker === 0){
                fallingBlock.classList.add('red-block');
            }
            else if(blockColorPicker === 1){
                fallingBlock.classList.add('blue-block');
            }
            else if(blockColorPicker === 2){
                fallingBlock.classList.add('green-block');
            }
            else if(blockColorPicker === 3){
                fallingBlock.classList.add('purple-block');
            }
        }
    }
}

function spawnOrangeBlocks(){

    if(paused === true || endGameCalled === true){
        return;
    }
    if(goldenBlockClicked === true){
        return
    }

    // Height the blocks are falling
    columnRect = columnOne.getBoundingClientRect();
    columnHeight = columnRect.height / 16 - 2;

    blockCollision();
    const columnSpawn = Math.floor(Math.random() * 6);
    
    if(columnSpawn === 0){
        if(lastRow != 0){
            lastRow = 0;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnOne.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
        
    }
    if(columnSpawn === 1){
        if(lastRow != 1){
            lastRow = 1;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnTwo.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);   
            blocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 2){
        if(lastRow != 2){
            lastRow = 2;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnThree.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 3){
        if(lastRow != 3){
            lastRow = 3;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnFour.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }  
    }
    if(columnSpawn === 4){
        if(lastRow != 4){
            lastRow = 4;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnFive.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 5){
        if(lastRow != 5){
            lastRow = 5;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('orange-block');
            columnSix.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${orangeSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
}

function spawnXblocks(){

    if(paused === true || endGameCalled === true){
        return;
    }
    if(goldenBlockClicked === true){
        return
    }

    // Height the blocks are falling
    columnRect = columnOne.getBoundingClientRect();
    columnHeight = columnRect.height / 16 - 2;

    blockCollision();
    const columnSpawn = Math.floor(Math.random() * 6);
    
    if(columnSpawn === 0){
        if(lastRow != 0){
            lastRow = 0;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnOne.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            xBlocksArray.push(fallingBlock);
        }
        
    }
    if(columnSpawn === 1){
        if(lastRow != 1){
            lastRow = 1;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnTwo.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);   
            xBlocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 2){
        if(lastRow != 2){
            lastRow = 2;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnThree.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            xBlocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 3){
        if(lastRow != 3){
            lastRow = 3;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnFour.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            xBlocksArray.push(fallingBlock);
        }  
    }
    if(columnSpawn === 4){
        if(lastRow != 4){
            lastRow = 4;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnFive.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            xBlocksArray.push(fallingBlock);
        }
    }
    if(columnSpawn === 5){
        if(lastRow != 5){
            lastRow = 5;
            const fallingBlock = document.createElement('div');
            const xBlockText = document.createElement('p');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('x-block');
            xBlockText.innerText = "X";
            fallingBlock.append(xBlockText);
            xBlockText.classList.add('x-block-text');
            columnSix.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${xSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            xBlocksArray.push(fallingBlock);
        }
    }
}

function spawnGoldenBlocks(){
    if(paused === true || endGameCalled === true){
        return;
    }
    if(goldenBlockClicked === true){
        return
    }

    // Height the blocks are falling
    columnRect = columnOne.getBoundingClientRect();
    columnHeight = columnRect.height / 16 - 2;

    blockCollision();
    const secondSpawn = Math.floor(Math.random() * 6);
    
    if(secondSpawn === 0){
        if(lastRow != 0){
            lastRow = 0;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnOne.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
        
    }
    if(secondSpawn === 1){
        if(lastRow != 1){
            lastRow = 1;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnTwo.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);   
            blocksArray.push(fallingBlock);
        }
    }
    if(secondSpawn === 2){
        if(lastRow != 2){
            lastRow = 2;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnThree.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
    if(secondSpawn === 3){
        if(lastRow != 3){
            lastRow = 3;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnFour.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }  
    }
    if(secondSpawn === 4){
        if(lastRow != 4){
            lastRow = 4;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnFive.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
    if(secondSpawn === 5){
        if(lastRow != 5){
            lastRow = 5;
            const fallingBlock = document.createElement('div');
            fallingBlock.setAttribute('id', 'blockCollision');
            fallingBlock.classList.add('golden-block');
            columnSix.append(fallingBlock);
            setTimeout(() => {
                fallingBlock.style.transitionDuration = `${goldenSpeed}s`;
                fallingBlock.style.transform = `translate(0rem, ${columnHeight}rem)`;
            }, 200);
            blocksArray.push(fallingBlock);
        }
    }
}

// X Counter Score
function missedBlocks(){
    const xCounter = document.getElementById('x-counter');

    if(blocksMissed === 1){
        xCounter.classList.remove('hide');
        xCounter.classList.add('flex');
    }
    else if(blocksMissed === 2){
        const xCount = document.createElement('h4');
        xCount.classList.add('x-count');
        xCount.innerText = "X";
        xCounter.append(xCount);
    }
    else if(blocksMissed === 3){
        endGameCalled = true;
        setTimeout(endGame, c);
        const xCount = document.createElement('h4');
        xCount.classList.add('x-count');
        xCount.innerText = "X";
        xCounter.append(xCount);
    }
}

// Blocks colliding with bottom of the board
function blockCollision(){ 
    const collisionBottomBoard = document.getElementById('bottomBoardCollision');

    for(let i = 0; i < blocksArray.length; i++){
        fallingBlockCollision = blocksArray[i].getBoundingClientRect();
        fallingBlockBottom = fallingBlockCollision.bottom;

        collisionBox = collisionBottomBoard.getBoundingClientRect();
        collisionTop = collisionBox.top;
        if(fallingBlockBottom >= collisionTop){ 
            if(blocksArray[i].classList.contains('golden-block')){
                blocksArray[i].remove();
                goldenBlocksMissed ++;
            }
            if(blocksArray[i].classList.contains('orange-block')){
                blocksArray[i].remove();
                orangeBlocksMissed ++;
            }
            else{
                blocksArray[i].remove();
                blocksMissed ++;
                missedBlocks();
            } 
        }
    }
    // Test if block was a bomb
    
    for(let i = 0; i < xBlocksArray.length; i++){
        fallingBlockCollision = xBlocksArray[i].getBoundingClientRect();
        fallingBlockBottom = fallingBlockCollision.bottom;

        collisionBox = collisionBottomBoard.getBoundingClientRect();
        collisionTop = collisionBox.top;
        
        if(fallingBlockBottom >= collisionTop && xBlocksArray[i].classList.contains('x-block')){
            xBlocksArray[i].remove();
            bombsAvoided ++;
        }
    }
}

function clickedBlocksScore(){
    const scoreBox = document.getElementById('score');
    const endScore = document.getElementById('endScore');
    score ++;
    
    scoreBox.innerText = score;
    endScore.innerText = score;
}

function clickedBlocks(){
    const scoreBox = document.getElementById('score');
    const gameArea = document.getElementById('gameArea');
    const scoreIindicatorText = document.getElementById('score-indicator-text');
    for(let i = 0; i < blocksArray.length; i++){
        blocksArray[i].ontouchstart = function(){
            if(blocksArray[i].classList.contains('golden-block') && blocksArray[i] != undefined){
                blocksArray[i].remove();
                clickedBlocksArray.push(blocksArray[i]);
                goldenBlocksBashed += 1;
                goldenBlockEffect();
            }
            if(blocksArray[i].classList.contains('orange-block') && blocksArray[i] != undefined){
                blocksArray[i].remove();
                clickedBlocksArray.push(blocksArray[i]);
                score += 3;
                orangeBlocksClicked++;
                scoreIindicatorText.innerText = '+' + 3;
                scoreBox.innerText = score;

                scoreIindicatorText.classList.remove('hide');
                scoreIindicatorText.classList.add('show');
                setTimeout(() => {
                    scoreIindicatorText.classList.remove('show');
                    scoreIindicatorText.classList.add('hide');
                    scoreIindicatorText.innerText = 0;
                }, 1500);
            }
            else{
                blocksArray[i].remove();
                clickedBlocksArray.push(blocksArray[i]);
                clickedBlocksScore()
                blocksBashed += 1;
            }
            increaseBlockSpeed();
        };  
    }

    for(let i = 0; i < xBlocksArray.length; i++){
        xBlocksArray[i].ontouchstart = function(){
            xBlocksArray[i].remove();
            clickedBlocksArray.push(xBlocksArray[i]);
            blocksMissed ++;
            missedBlocks();
            gameArea.style.backgroundColor = "white";
            setTimeout(() => {
                gameArea.style.backgroundColor = 'rgb(57, 76, 92)'
            }, 600);
            bombsBashed += 1;
            // Maybe play sound Effect
        }; 
    }
}

function goldenBlockEffect(){
    const scoreBox = document.getElementById('score');
    const scoreIindicatorText = document.getElementById('score-indicator-text');
    goldenBlockClicked = true;
    // Bombs
    for(let i = 0; i < xBlocksArray.length; i++){
        xBlocksArray[i].remove();
    }

    for(let i = 0; i < blocksArray.length; i++){
        goldenBlockDestroyed.push(blocksArray[i]);
        blocksArray[i].remove();
    }
    // Needs re-working, counting the blocks golden destoys and add to score
    setTimeout(() => {
        for(let i = 0; i < goldenBlockDestroyed.length; i++){
            if(goldenBlockDestroyed[i].classList.contains('x-block')){
                score --;
            }
            setTimeout(() => {
                goldenBlockDestroyed.length = 0;
                goldenBlockDestroyed.splice(0,goldenBlockDestroyed.length);
            }, 200);
        }
        score +=  goldenBlockDestroyed.length - clickedBlocksArray.length;
        scoreBox.innerText = score;

        singleGoldenBlockScore += goldenBlockDestroyed.length - clickedBlocksArray.length;
        scoreIindicatorText.innerText = '+' + singleGoldenBlockScore;
        setTimeout(() => {
            singleGoldenBlockScore = 0;
        }, 1500);
        scoreIindicatorText.classList.remove('hide');
        scoreIindicatorText.classList.add('show');
        setTimeout(() => {
            scoreIindicatorText.classList.remove('show');
            scoreIindicatorText.classList.add('hide');
        }, 1500);
        console.log(goldenBlockDestroyed.length);
        console.log(clickedBlocksArray.length);
    }, 200);
    setTimeout(() => {
        goldenBlockClicked = false;
    }, 1000);
    
    increaseBlockSpeed();

    const gameArea = document.getElementById('gameArea');
    gameArea.style.backgroundColor = "rgba(234, 227, 130, 0.964)";
    setTimeout(() => {
        gameArea.style.backgroundColor = 'rgb(57, 76, 92)'
    }, 600);
}

function showPlayerStats(){
    const playerStats = document.getElementById('playerStats');
    playerStats.classList.remove('hide');
    playerStats.classList.add('show');

    const startMenu = document.getElementById('startMenu');
    startMenu.classList.add('hide');

    getPlayerStats();
}

function getPlayerStats(){
    const result = {bombsAvoided, blocksBashed, bombsBashed, score, goldenBlocksBashed, goldenBlocksMissed, 
        orangeBlocksClicked, orangeBlocksMissed}; 
    const savedScores = localStorage.getItem('highscore') || '[]';
    let allScores = JSON.parse(savedScores);
    allScores.push(result);
    allScores.sort((a, b) => b.blocksBashed - a.blocksBashed);
    localStorage.setItem('highscore', JSON.stringify(allScores));

    const highScoreText = document.getElementById('highScore'); 
    const bombsAvoidedText = document.getElementById('bombsAvoided');
    const blocksBashedText = document.getElementById('blocksClicked');
    const bombsClickedText = document.getElementById('bombsClicked');
    const goldenClickedText = document.getElementById('goldenClicked');
    const goldenMissedText = document.getElementById('goldenMissed');
    const orangeBlocksClickedText = document.getElementById('orangeBlocksClicked');
    const orangeBlocksMissedText = document.getElementById('orangeBlocksMissed');

    let allBlocks = 0;
    let allBombsBashed = 0;
    let allBombsAvoided = 0;
    let allGoldenBlocks = 0;
    let allGoldenBlocksMissed = 0;
    let allOrangeBlocks = 0;
    let allOrangeBlocksMissed = 0;
    
    for(let i = 0; i < allScores.length; i++){
        if(allScores[i].blocksBashed === 0 && allScores[i].bombsBashed === 0 
        && allScores[i].bombsAvoided === 0 && allScores[i].goldenBlocksBashed === 0 
        && allScores[i].goldenBlocksMissed === 0){
            allScores.splice(i);
            break;
        }
        
        allBlocks += allScores[i].blocksBashed;
        allBombsBashed += allScores[i].bombsBashed;
        allBombsAvoided += allScores[i].bombsAvoided;
        allGoldenBlocks += allScores[i].goldenBlocksBashed;
        allGoldenBlocksMissed += allScores[i].goldenBlocksMissed;
        allOrangeBlocks += allScores[i].orangeBlocksClicked;
        allOrangeBlocksMissed += allScores[i].orangeBlocksMissed;

        highScoreText.innerText = `${allScores[0].score}`
        bombsAvoidedText.innerText = allBombsAvoided;
        bombsClickedText.innerText = allBombsBashed;
        blocksBashedText.innerText = allBlocks;
        goldenClickedText.innerText = allGoldenBlocks;
        goldenMissedText.innerText = allGoldenBlocksMissed;
        orangeBlocksClickedText.innerText = allOrangeBlocks;
        orangeBlocksMissedText.innerText = allOrangeBlocksMissed;
    }
    console.log(allScores);
}

function loadingAnimation(){
    const loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.classList.toggle('show');
}
function hideStartMenu(){
    const startMenu = document.getElementById('startMenu');
    const blockBasher = document.getElementById('blockBasherfreePlay');
    startMenu.classList.add('hide');
    blockBasher.classList.remove('hide');
    blockBasher.classList.add('show');
}

function showblockRules(){
    const startMenu = document.getElementById('startMenu');
    const blockBasherRules = document.getElementById('blockBasherRules');
    startMenu.classList.add('hide');
    blockBasherRules.classList.remove('hide');
    blockBasherRules.classList.add('show');
}

function reloadPage(){
    location.reload();
}

function endGame(){
    getPlayerStats();
    const gameOver = document.getElementById('gameOver');
    gameOver.classList.add('show');
    gameOver.classList.remove('hide');

    const backgroundBlur = document.getElementById('entireScreen');
    backgroundBlur.classList.remove('hide');
    backgroundBlur.classList.add('show');
}

