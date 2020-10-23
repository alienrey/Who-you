function openDrawer() {
    document.getElementById("menu").style.width = "300px";
  }
  
  function closeDrawer() {
    document.getElementById("menu").style.width = "0";
  }
  
  function incrementScore(characterName) {
    const charIndex = characters.findIndex(char => char == characterName);
    if (charIndex !== -1) scoreboard[charIndex] += 1;
  }
  
  function youAre() {
    const highestScore = Math.max(...scoreboard);
    const winnerIndex = scoreboard.indexOf(highestScore);
    return characters[winnerIndex];
  }
  
  function assignAnswer(questionNo, answerVal){ 
    answers[questionNo] = answerVal
    console.log(answers)
  }
  const characters = [
    "Snake",
    "Doom Slayer",
    "Mario",
    "Steve",
    "Sonic"
  ];
  
  const taglines = {
    "Snake": "He who controls the battlefield, controls history.",
    "Doom Slayer": "Rip and tear until it is done.",
    "Mario": "It's a-me, Mario!",
    "Steve": "Ooof!",
    "Sonic": "Let's blast through with Sonic Speed!"
  }
  
  const pictureDir = {
    "Snake":"images/snake.jpg",
    "Doom Slayer": "images/doomSlayer.jpg",
    "Mario": "images/mario.jpg",
    "Steve": "images/steve.png",
    "Sonic": "images/sonic.jpg"
  }
  
  let scoreboard = new Array(characters.length).fill(0);
  
  let answers = {
    "q1": "",
    "q2": "",
    "q3": "",
    "q4": "",
    "q5": "",
  }
  