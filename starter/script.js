// start of the lifequest.
let name = prompt("Greeting Summoner, I am the great Kurama, the keeper of the 7 dying stars heavenly kingdom. I will grant you one wish, you need only speak your name...")
// getting users name and displaying option
let lifePath = prompt(name + ", very well...listen carefully to my words I can only grant in one of the 3 aspects of humananity, health, wealth or happiness...choose wisely");
// HEALTH PATH
if (lifePath == "health"){
  let healthPrime = prompt(" You are in peak physical condition, the absolute paradigm of perfection may you use it wisely...WOOOOOSH (Kurama dissappears) what will you do now? 1.Will you test your might in the Kumite?(bloodsport) 2. Will you go the safe route and be a famous male or female model(model) 3. Will you ask out that person you be eye-balling in the office (date)")
  maxHealth(healthPrime);
}
//WEALTH PATH
else if (lifePath == "wealth"){
}
//HAPPINESS PATH
else if (lifePath == "happiness"){
}
else{prompt("as I said I can only great wishes in one of the 3 realms of humanity  health  wealth or happiness");
}

function maxHealth(healthd){
  if (healthd == "bloodsport"){
    health2 = prompt("You made it all the way to the end and fought Chun li, you have discovered valuable lesson, fighting is not only about strength. thankfully you did not die, but have suffered a serious injury. what do you want to do? 1.Cut your losses and take a sweet developer job(a) 2.Train again and pervere and beat Chun Li even though the doctors told you not to (b) or 3. Recover gradually and never compete again and find something else to do(c) ");
    healthPart3(healtd);
  }
  else if (healthd == "model"){
    health2 = prompt("Your career is going great, your doing coke with johnny depp your in the coolest parties and so on but somethings missing what will you do now 1.Move back home and do some soul searching(soul) 2. like fast and die young(fast)");
    healthPart3(healtd);
  }
  else if (healthd == "date")
    alert("thing went well, in fact very well. You think back to other things that you could've wished for, but then you look your partners eyes and you think you already have everything you need and in sappy romantic kiss the scene fade to black and credit roll. -Life");
}



function healthPart3(healthd2){
  if (health2 == "soul"){
    alert("after heading home you suprisingly have reconnected with your family, and you come to appreciate it realize that a fast life is just that you live of the rest of your day in peace and tranquility");
  };
  if (health2 == "fast"){
    alert("You chose the live a flash existance");
  }
}
