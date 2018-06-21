/* 
Hangman single player game co-created by 
Alex Mannix, Brittany Miltenberger, Darius Minus 
& Bonnie Wolfe. Written in vanilla Javascript. 
Game development started on 2018-04-28.
*/

const wordBankHard = ["aardvark","aardvarks","abacterial","basil","basin","basinet","basinets","basins","basketweaves","basketwork","basketworks","basking","basks","compactifies","compactify","compactifying","compacting","compaction","compactions","compactly","compactness","compactnesses","compactor","compactors","devested","devesting","devests","deviate","deviated","deviates","deviating","deviation","deviled","elect","furnish","furnished","furnisher","furnishers","geode","geodes","icy","id","idea","ideaed","ideal","idealist","jawline","jawlines","jaws","jaybird","jaybirds","jaywalker","jaywalkers","jaywalking","kebob","labyrinth","obstructor","obstructors","obstructs",'race',"sandcastle","sandcastles","unachievable","vibe","vibes","wantons","wants","yikes","yippee","yo"]

const wordBankImpossible = ["aardwolf","aardwolves","aargh","aasvogel","aasvogels","abandonwares","abands","abapical","abas","basifier","basifiers","basifies","basifixed","basifugal","basify","basifying","basij","basilar","basilary","basilect","basilects","basilic","basilica","basilicae","basilical","basilican","basilicas","basilicon","basilicons","basilisk","basilisks","basils","basinal","basined","basinful","basinfuls","basing","basinlike","companionhoods","deviationism","deviationisms","deviationist","devildoms","deviless","elecampane","elecampanes","electabilities","electioneerers","electioneering","electioneerings","electioneers","elections","elective","furlable","furlana","furlanas","furled","furler","furlers","furless","furling","furlong","furlongs","furlough","furloughed","furloughing","furloughs","furls","furnace","furnaced","furnaces","furnacing","furniment","furniments","furrings","furrow","genus","genuses","geo","geobotanic","geobotanical","geocaching","geocachings","geocarpic","geocarpies","geocarpy","geocentric","geochronological","geochronologically","geochronologies","geochronologist","geochronologists","geochronology","geocorona","geocoronae","geocoronas","geodemographics","geodesic","hause","haused","hausen","hausens","hauses","hausfrau","hausfrauen","hausfraus","hausing","haussmannise","haussmannised","haussmannises","haussmannising","haussmannize","haussmannized","haussmannizes","haussmannizing","haustella","haustellate","haustellum","haustoria","haustorial","haustorium","ictic","ictus","ictuses","idant","idants","ide","idealess","idealiser","idealisers","idealises","idealising","idealism","idealisms","idealistic","jawless","jawlike","jaxie","jaxies","jaxy","jay","jaycee","jaycees","jaygee","jaywalk","jaywalked","kebbock","kebbocks","kebbuck","kebbucks","kebele","kebeles","keblah","keblahs","keckles","keckling","kecklings","kecks","keckses","kecksies","kecksy","ked","labrum","labrums","labrusca","labrys","labryses","labs","laburnum","laburnums","labyrinthically","lac","meshugaas","meshugaasen","meshugah","meshugas","meshuggah","meshugge","meshuggenah","meshuggenahs","meshuggeneh","meshuggenehs","meshuggener","meshuggeners","meshwork","meshworks","meshy","mesiad","mesial","mesially","mesian","mesic","mesmerisers","mesmerises","neophilia","neophiliac","neophiliacs","neophilias","neophobe","neophyte","neophytes","neoplasties","neoplasty","neorealists","neosoul","neosouls","neostigmine","neostigmines","neoteinia","neoteinias","obstructives","obstruent","obstruents","obtain","obtainabilities","pally","palmations","palmatipartite","palmatisect","palmcorder","palmfuls","palmhouse","palmhouses","quicksilverish","quicksilvers","quicksilvery","quickstep","quickstepped","quickstepping","quicksteps","quickthorn","quickthorns","quicky","quid","quidam","quidams","quiescences","quiescencies","quiescency","quiescent","quiescently","quiesces","quiescing","quiet","raceable","racecard","racecards","racecourse","racecourses","raced","racegoer","racegoers","racegoing","racegoings","racemoid","racemose","racemosely","racemous","racemously","racepath","racepaths","racer","racers","races","sandburs","sandcrack","sandcracks","sanddab","sanddabs","sanded","sandek","sandeks","tarantaraing","tarantaras","tarantas","tarantases","tarantass","tarantasses","tarantella","tarantellas","tarantulae","tarantulas","taras","taratantara","taratantaraed","unaccredited","unaccrued","unacculturated","unaccusable","unaccusably","unaccused","unaccustomed","unaccustomedly","unacerbic","unachieved","unaching","unacidic","unacknowledged","unacquaint","viand","viands","vias","viatic","viatica","viatical","viaticals","viaticum","viaticums","viator","viatores","viatorial","viators","vibex","vibey","vibices","vibier","vibiest","wantonize","wantonized","wantonizes","wantonizing","wantonly","wantonness","wantonnesses","wanty","wanwordy","wanworth","wanworths","wany","wanze","yiking","yikker","yikkered","yikkering","yikkers","yill","yills","yin","yince","yindie","yindies","yins","yip","yipe","yipes","yipped","yipper","yippers","yippie","yippies","yipping","yities","yitten","ylem","ylems","ylike","ylke","ylkes","ymolt","ymolten","ympe","ympes","ymping","ympt","ynambu","ynambus","yob","yobberies","yobbery","yobbish","yobbishly","yobbism","zoogonidia","zoogonidium","zoogonies","zoogonous","zoogony","zoograft"]

const wordBankEasy = ["apple", "artist", "arrow", "afro", "apollo", "answer", "awesome", "anniversary", "appeal", "appoint","application", "approve","architect", "argue", "arise","assist","attractive","benefit", "behavior", "beehive", "bee", "beside", "beyond","better", "between", "bike", "billion", "bible", "blow", "board","card", "care", "catholic", "cast", "celebrate", "carbon", "cell", "ceremony", "chain", "champion", "channel","charity", "cold", "combination", "comfort", "conflict", "depot", "development", "devote", "dialogue", "diet", "different", "discover", "dominant", "double", "drop", "dust", "drink", "earth", "economic", "editor", "editon", "edge", "english", "environment", "entry", "exercise", "expect", "eye", "fade", "facade", "fall", "fail", "failure", "forest", "focus", "feelings", "fantasy", "fate", "father", "fault", "film", "first", "gain", "generate", "german", "go", "giant", "gifted", "girl", "guide", "guess", "great", "greatest", "hair", "hand", "headline", "hello", "highlight", "him", "hope", "hero", "heroic", "hold", "hot", "husband", "human", "ice", "ideal", "identify", "impact", "incentive", "income", "increase", "indian", "injury", "insurance", "intense", "into", "irish", "italian", "job", "jersey", "justice", "juice", "joke", "joy", "journey", "judge", "jury", "key", "know", "kitchen", "kid", "knock", "knowledge", "kind", "key", "keyring", "knife", "lab", "laboratory", "lack", "leak", "laugh", "launch", "lawn", "law", "lawyer", "lawsuit", "leader", "lead", "leadership", "leaf", "legislation", "lesson", "level", "library", "live", "life","mad", "mercy", "madman", "military", "manners", "manager", "mark", "market", "matter", "meaning", "measure", "meat", "mere", "metal", "method", "middle", "might", "minister", "minor", "miracle", "moon", "music", "myth", "name", "nation", "native", "natural", "nature", "negative", "news", "next", "net", "nerve", "nervous", "never", "new", "nice", "nobody", "nose", "nut", "observe", "obtain", "obvious", "occur", "occasion", "occupy", "ocean", "odd", "olympic", "online", "ongoing", "onto", "option", "origin", "other", "ourselves", "oven", "own", "owner", "painting", "paint", "palm", "pan", "panel", "paper", "passenger", "paper", "pool", "poor", "pay", "pause", "perform", "period", "pink", "planet", "player", "popular", "powder","protect", "rare", "raw", "real", "reality", "reason", "recall", "reduce", "refer", "regular", "regulate", "rely", "replace", "republican", "require", "resist", "resort", "rice", "risk", "roll", "role", "rush", "russian", "sales", "sand", "sauce", "save", "scared", "say", "scale", "scene", "scheme", "scream", "script", "season", "secret", "seek", "seize", "senior", "serve", "server", "set", "setting", "seven", "shade", "sharp", "sheet", "shoot", "shut", "shrug", "sight", "skill", "smoke", "tail", "tape", "target", "task", "taxpayer", "technology", "teenager", "telescope", "terrible", "terror", "thin", "thick", "thing", "thousand", "ticket", "tight", "tobacco", "tongue", "tool", "toward", "trail", "translate", "trust", "typical", "type", "ultimate", "uncle", "unique", "unusual", "upon", "urban", "usual", "valley", "vary", "vehicle", "vessel", "victim", "violate", "virtue", "virus", "vision", "vote", "vulnerable", "want", "wash", "waste", "water", "wave", "way", "weak", "welcome", "welfare", "wheel", "whisper", "white", "wild", "will", "willing", "winter", "wish", "within", "wonder", "wonderful", "world", "wound", "wrap", "yesterday", "young", "your", "yourself", "youth", "yell", "writer"]

const wordBankDemo = ["array"];

function hangman() {
  let hangmanPics = [" +---+\n  |     |\n  |\n  |\n  |\n  |\n=========","  +---+\n  |       | \n  |      0\n  |\n  |\n  |\n ========= ","  +---+\n  |      |\n  |     0\n  |     +\n  |\n  |\n=========","  +---+\n  |      |\n  |     0\n  |    -+\n  | \n  |\n=========","  +---+\n  |      |\n  |     0\n  |    -+-\n  |      |\n  |\n=========","  +---+\n  |      |\n  |     0\n  |    -+-\n  |      |\n  |     /\n=========","  +---+\n  |       |\n  |      0\n  |     -+-\n  |       |\n  |      / \\  \n========="];

  // Global Variables
  let randomWordArr = [];
  let randomWordStr = "";
  let whichGame;
  let gallow = hangmanPics[0];
  let reveal = [];
  let wrongGuesses = [];
  let losingPoints = 0;
  let totalGuesses = [];
  let gameOver = false;
  let score = 100;
  let warGamesText = "\n\n\n Do you want to play a game?\n\n           Type yes or no. \n\n\n\n";
  let badInput = "\n\n\n I don't understand your input. \n\n\n\n     Click 'OK' and try again.\n\n\n ";
  let aiGreeting = "Awesome! My name is H.A.L. I have drawn the gallows.";
  let aiRandomWord = "I have picked a random word.";
  let noScreen = "\n\n\n ok, maybe some other time\n\n\n";
  let revealDisplay = '';

  function wannaPlay() {
    let userResponse = prompt(warGamesText).toLowerCase();

    if (userResponse === "no") {
      alert(noScreen);
    } else if (userResponse === "yes") {
      return diffChoice();
    } else {
      alert(badInput);
    }

    return wannaPlay();
  }

  function diffChoice() {
    let wordBank = [];
    let userResponse = prompt("\n\n\n\n\n Choose a difficulty level: 'easy' or 'hard' or 'impossible' \n\n\n\n\n ").toLowerCase();

    if (userResponse === 'easy') {
      wordBank = wordBankEasy;
      whichGame = "easy";
    } else if (userResponse === 'hard') {
      wordBank = wordBankHard;
      whichGame = "hard";
    } else if (userResponse === 'impossible') {
      wordBank = wordBankImpossible;
      whichGame = "impossible";
    } else if (userResponse === 'demo') {
      wordBank = wordBankDemo;
      whichGame = "demo";
    } else {
       alert(badInput);
       return diffChoice();
    }

    randomWordStr = wordBank[Math.floor(Math.random() * wordBank.length)];
    randomWordArr = randomWordStr.split('');
    randomWordArr.forEach(function(el) {
      reveal.push("_")
    });
    revealDisplay = reveal.join(" ");
  }

  function playGame() {
    if (totalGuesses.length === 0) {
      userGuess = prompt(aiGreeting +"\n" + gallow + "\n" + aiRandomWord +"\n" + revealDisplay + "\n" + wrongGuesses + "\n" + "Guess a letter or go to sudden\ndeath by guessing the whole word: ");
    } else {
      userGuess = prompt(gallow + "\n" + "Reveal: " + revealDisplay + "\n" + "Guessed Letters: " + wrongGuesses + "\n" + "Guess a letter or go to sudden\ndeath by guessing the whole word: ");
    }

    while (userGuess === "" || userGuess.match(/[^a-zA-Z]/g)) {
      if (userGuess.match(/[^a-zA-Z]/g)) {
        alert("\n\n\nOnly letters will be accepted.\n\n\n\n      Click 'OK' to continue.\n\n\n")
        userGuess = playGame();
      } else {
        alert(badInput);
        userGuess = playGame();
      }
    }

    userGuess = userGuess.toLowerCase().trim();
    return userGuess;
  }

  function afterCorrectGuess(arr, val) {
    const indexes = [];
    arr.forEach(function(el, index) {
      if (el === val) {
        indexes.push(index);
      }
    });

    indexes.forEach(function(el) {
      reveal.splice(el, 1, userGuess);
    });

    revealDisplay = reveal.join(" ");
    totalGuesses.push(userGuess);

    if (reveal.indexOf('_') < 0) {
      gameOverStatus("win");
    }
  }

  function afterWrongGuess() {
    wrongGuesses.push(userGuess);
    gallow = hangmanPics[wrongGuesses.length];
    losingPoints++;
    totalGuesses.push(userGuess);

    if (losingPoints === 6) {
      gameOverStatus("lose")
    }
  }

  function gameOverStatus (status) {
    gameOver = true;
    if (status === "win") {
      return alert(gallow + '\nYOU WON the ' + whichGame + ' game!\n   You guessed: ' +randomWordStr +'\n   Your score is ' + (score - (wrongGuesses.length*2)));
    } else {
      return alert(hangmanPics[6] + '\nYOU LOST the ' + whichGame + ' game :(\n' + 'The chosen word was: ' + randomWordStr + '.');
    }
  }

  wannaPlay();
  // future change - ideally the game would execute wannaPlay and then execute each of the other main higher order functions one after the other
  // diffChoice()
  // playGame()
  // hangMan()

  while (gameOver === false) {
    let userGuess = "";
    userGuess = playGame();

    // User has already guessed input
    while (totalGuesses.includes(userGuess)) {
      alert ("\n\n\n     You already guessed that you FOOL!\nHere are the letters you've guessed so far: " + totalGuesses.sort()+"\n\n\n\n                    Click 'OK' to continue\n\n\n ");
      userGuess = playGame();
    }

    // Quick end to game
    if (userGuess.length > 1) {
      (userGuess === randomWordStr) ? gameOverStatus("win") : gameOverStatus("lose");
    }

    // If user guess is in word
    if (randomWordArr.includes(userGuess)) {
      afterCorrectGuess(randomWordArr, userGuess);
    }
    // If user guess is NOT in word
    else {
      afterWrongGuess();
    }
  }

hangman();
}

hangman()
