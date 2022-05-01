const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]



// // unscalable / used basic for loop than for of loop / used basic if-else statements than ternary 


// const gamesList = document.createElement('ul');


// for (let i = 0; i< warriorsGames.length; i++){

//   const {awayTeam, homeTeam} = warriorsGames[i];


//   const listing = document.createElement('li');
    
//   //destruct team and points to compare points later on
//   const {team: awayteam, points: awaypoints} = awayTeam;
//   const {team:hometeam, points:homepoints} = homeTeam;


  
//   const teams = `${awayteam} @ ${hometeam}`;
  
//   let score;
  
//   if (awaypoints > homepoints)
//   {

//     score = `<b>${awaypoints}</b> - ${homepoints}`;
  
//   }
  
//   else
//   {

//     score = `${awaypoints} - <b>${homepoints}</b>`;
//   }  

    
//   const warriors = hometeam ==='Golden State' ?  homeTeam : awayTeam;

//   if (warriors.isWinner === true){

//     listing.classList.add('win')

//   }

//   else{

//     listing.classList.add('loss');

//   }

//     listing.innerHTML = `${teams} ${score}`;



//    gamesList.append(listing);

  
// }

//  document.body.append(gamesList);









 ////////////////////// REUSABLE VERSION /////////////////////// ////////////////////// REUSABLE VERSION ///////////////////////


//targetTeam parameter to specify its games result
 const getGames = (games, targetTeam)=>{

  const gamesList = document.createElement('ul');


  for (let i = 0; i< games.length; i++){
  
   
    const listing = document.createElement('li');
    listing.innerHTML = getScores(games[i]);
    
    if(checkWinner(games[i], targetTeam)){

    listing.classList.add('win')

  }
  else{

   listing.classList.add('loss');
  }
   
      
  gamesList.append(listing);
  
  }
  //returns list of games with colors according to game result of targeted team
  return gamesList;
 };

 const checkWinner = ({awayTeam, homeTeam}, targetTeam)=>{

    //where it checks if team is same with homeTeam and sends game result
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
 }

const getScores = ({awayTeam, homeTeam}) =>{

  //destruct team and points to compare points later on
  const {team: awayteam, points: awaypoints} = awayTeam;
  const {team:hometeam, points:homepoints} = homeTeam;

  const teams = `${awayteam} @ ${hometeam}`;

  let score;
  
  if (awaypoints > homepoints)
  {

    score = `<b>${awaypoints}</b> - ${homepoints}`;
  
  }
  
  else
  {

    score = `${awaypoints} - <b>${homepoints}</b>`;
  }  

  return `${teams} ${score}`;

}

 const game1 = getGames(warriorsGames, 'Houston');
 document.body.append(game1);

 const game2 = getGames(warriorsGames, 'Golden State');
 document.body.append(game2);


 const gsw = document.querySelector('#gsw');
 const rockets = document.querySelector('#rockets');

rockets.append(game1);
gsw.append(game2);
