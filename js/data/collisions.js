
const collisionsLevel1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

const spikesLevel1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,3,0,0,3,0,0,3,0,0,0,0,0,
0,0,0,0,0,3,3,0,3,3,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,3,0,3,0,3,0,0,0,0,0,
0,0,0,0,0,3,0,3,0,3,0,3,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]


const winnerLevel1 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]


// 2

const collisionsLevel2 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,
1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,
1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,
1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const spikesLevel2 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,
0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,
0,0,3,0,0,0,0,3,0,3,0,0,0,3,0,0,
0,0,0,3,0,0,3,0,3,0,3,0,0,3,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,
0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,
0,0,0,0,3,3,0,0,0,0,3,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const winnerLevel2 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]



// 3

const collisionsLevel3 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,
1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,
1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const spikesLevel3 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,3,0,0,0,3,0,0,0,0,0,0,3,0,0,
0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,
0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,0,
0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,3,0,3,0,0,0,0,3,0,3,0,0,0,
0,0,3,0,3,0,3,0,0,3,0,3,0,3,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const winnerLevel3 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]


const collisionsLevel4 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const spikesLevel4 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,3,0,0,0,0,0,0,3,0,0,0,0,0,3,0,
0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,3,0,3,0,3,0,0,3,0,0,0,3,0,0,0,
0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,
0,0,0,3,0,0,0,0,3,0,0,3,0,3,0,0,
0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,3,0,0,3,0,0,0,3,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const winnerLevel4 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]





const collisionsLevel5 = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,
1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

const spikesLevel5 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,3,0,3,0,3,0,3,0,0,0,0,
0,0,0,3,0,3,0,3,0,3,0,3,0,0,0,0,
0,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0,
0,0,0,3,0,3,0,3,0,3,0,3,0,3,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const winnerLevel5 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]


const collisionsLevel6 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,
0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,
0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,
0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,
0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,
0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,
0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const spikesLevel6 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

const winnerLevel6 = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]