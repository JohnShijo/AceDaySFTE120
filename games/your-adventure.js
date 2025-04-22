const story = {
    start: {
      text: "You awaken from your bed on your farm. Life is simple, but a tad boring. This morning however, there appears to be some exciting news in the paper.",
      choices: [
        { text: "Eh, you have work to do", next: "farmEnd" },
        { text: "Read today's paper", next: "paper" }
      ]
    },
    farmEnd: {
      text: "You push the thoughts aside, the animals need feeding, the land needs tilling, cows milked, sheep sheared. After a long, hard day of work, you head back to your bed and are too tired to do anything else. Was there something you forgot? Eh, it probably doesn't matter. Same thing tomorrow, right?",
      choices: [
        { text: "Time to sleep, ready for the next day?", next: "start" },
      ]
    },
    paper: {
      text: "You pick up today's paper. On the cover it tells of a great hero named Jim who has defeated the evil Yug Dab! You feel inspired by Jim's valiant deeds!",
      choices: [
        { text: "Hmm, maybe I can also be a hero!", next: "choice1" },
        { text: "Sounds amazing, but you have work to do on the farm.", next: "farmEnd" }
      ]
    },
    choice1: {
      text: "YES! You have decided to go out into the world, fight the great evil threatening the land, and save the world! You stop to think, \"Wait a minute, there is evil out there, right?\"",
      choices: [
        { text: "Of course there is! Let's go find it!", next: "woods" },
        { text: "Uh, if Jim defeated Yug Dab, maybe not. Maybe find him and ask?", next: "jim1" }
      ]
    },
    woods: {
      text: "Off into the woods you go, searching for evil to vanquish! You wander along, but after a couple hours, you don't find any evil, and you get disappointed. You sit down on a rock and think. As you think, a goblin jumps out of the bush at you!",
      choices: [
        { text: "Maybe it's friendly? Try talking to it.", next: "goblinRiddle" },
        { text: "Attack the goblin!", next: "fightGoblin" }
      ]
    },
    goblinRiddle: {
      text: "You say to the goblin \"Hello? Are you evil?\" The goblin shouts \"I HAVE A RIDDLE FOR YOU, SILLY MAN! Here it is! Solve it and I'll tell you of a LEGENDARY TREASURE! I have towns, but no people, forests but no trees, and rivers but no water. What kind of place could I be?\"",
      choices: [
        {text: "Hmm, oh, I know! Typhon's Cursed Land!", next: "cursedLandEnd" },
        { text: "A map!", next: "goblinLegendarySword" }
      ]
    },
    fightGoblin: {
      text: "This is your chance to be a hero! You jump up and put up your hands. You then remember you have no idea how to actually fight.",
      choices: [
        { text: "Go for the defensive move, take some cover.", next: "rocBird"},
        { text: "Take a swing, it's a little goblin, it can't be that tough.", next: "gobFight" }
      ]
    },
    rocBird: {
      text: "You were smart to take cover, as a giant shadow swoops down and snatches the goblin away. You look up to see a massive bird, a roc. But rocs don't live this far from the mountains, could something be going on?",
      choices: [
        { text: "You didn't realize that you'd have to deal with ROCS! Time to go back to the farm.", next: "farmEnd" },
        { text: "Hmm, is this what your destiny is? To find out what's happening?", next: "deepWoods"}
      ]
    },
    gobFight: {
      text: "You take a swing at the goblin, but it ducks under your slow strike. It takes out a dagger and stabs you in your stomach. It takes your gold and leaves you to die.",
      choices: [
        { text: "Start over?", next: "start" }
      ]
    },
    deepWoods: {
      text: "You decide to explore more, as such birds rarely stray from their mountain homes. You enter deeper into the forest, and you see a dryad resting under an apple tree. She does not seem to notice you, but as you look around, you realize you are very lost.",
      choices: [
        { text: "Ignore her and continue onwards", next: "spiderNestEnterP" },
        { text: "Go up to talk", next: "dryad"},
        {text: "Try to sneak and take some apples", next: "appleThief"}
      ]
    },
    spiderNestEnterP: {
      text: "You think smartly, a dryad is a fey creature, and the fey can be very tricky and dangerous. Best to stay clear. You decide that you don't need her help and can find your way on your own. You keep walking, but you slip on some mud and fall into a spider nest! These are clearly not normal spiders though, they are very big, and clearly very hungry. You spot the remains of a former adventurer, with a gleaming silver sword sticking out. Unfortunately, there is a spider in the way.",
      choices: [
        { text: "Try and talk to the spiders", next: "spiderBless" },
        { text: "Run away", next: "spiderLunchEnd"},
        { text: "Try to grab the sword and fight", next: "spiderLunchEnd2"}
      ]
    },
    spiderLunchEnd: {
      text: "You try to scramble away, but your foot gets caught on a strand of sticky spider silk! You trip and fall down, more of your body getting stuck to the webs. You panic as one of the spiders scuttles over to you and starts wrapping you up in more silk. One bite later and you are spider lunch.",
      choices: [
        { text: "Start over?", next: "start"}
      ]
    },
    spiderLunchEnd2: {
      text: "You leap to grab the sword, but just as your hands grasp the hilt, you feel a pair of fangs dig deep into your back. Your vision goes dark. You are spider food.",
      choices: [
        { text: "Start over?", next: "start"}
      ]
    },
    appleThief: {
      text: "You carefully sneak back behind the dryad and pluck a few apples. You notice two things: First, that there is a small knife, likely used for cooking, on the ground. And secondly, as you look over the dryad's shoulder, you see that she has a pamphlet. A pamphlet with Yug Dab's symbol on it, detailing how to resurrect him and where to join his cause. With several apples in your possesion, you think about what to do now.",
      choices: [
        { text: "Leave quietly with your apples", next: "tower" },
        { text: "Take the knife and end the threat", next: "dryadMurder"}
      ]
    },
    goblinLegendarySword: {
      text: "The goblin cackles and says \"That is........... CORRECT! Now I'll tell you of the LEGENDARY TREASURE! Off the path, there is a fabled sword, stuck in a log! It is said to guide whoever is worthy to their DESTINY!\"",
      choices: [
        { text: "A legendary sword that guides to my destiny? Count me in!", next: "logSword" },
        { text: "Really? That doesn't seem very legendary.", next: "rude"}
      ]
    },
    rude: {
      text: "Well that was rude. Anyways:",
      choices: [
        { text: "Continue?", next: "rudeResponse"}
      ]
    },
    rudeResponse: {
      text: "The goblin looks hurt and says, \"B-but... It's a LEGENDARY sword! You solveded my riddle so you can haves it! Fine then MEANIE! You can't have it!\" The goblin starts running off into the forest crying.",
      choices: [
        { text: "Follow the goblin.", next: "logSwordGoblin" },
        { text: "Ignore it, you have a destiny to catch!", next: "beehive"}
      ]
    },
    beehive: {
      text: "As you continue your journey, searching for evil to vanquish, you come across a tree with a large beehive hanging from one of the branches. Many small bees swarm around it, and you can see honey dripping down from it. You are getting a little peckish, perhaps you could try to get some honey?",
      choices: [
        { text: "Ignore it, too dangerous", next: "night1v1" },
        { text: "Yummy honey, right?", next: "stungEnd"}
      ]
    },
    stungEnd: {
      text: "You try to nab some honey, because it looks so tasty. You are able to snatch some good mouthfuls of the sugary substance, but unfortunately there was a bee in a bite that you ate, and it stings you in the throat. Your neck swells and you choke to death within minutes.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    night1v1: {
      text: "As you set up camp for the night, you can't help but feel dissapointed with the lack of adventure you have found. Should you just head beak to your farm? It was peaceful at least, or should you continue on your journey, to save the kingdom from evil?",
      choices: [
        { text: "Head home", next: "farmEnd" },
        { text: "Find the evil that is definitely real", next: "morning2v1"}
      ]
    },
    morning2v1: {
      text: "As you wake in the morning, you see it! Finally, some evil to vanquish! You see a small demonic creature chasing some travelers! You have to help, but how?",
      choices: [
        { text: "Jump in and fight!", next: "demonHeroDeath" },
        { text: "Use the bees!", next: "demonBees"}
      ]
    },
    demonHeroDeath: {
      text: "You see a stick on the ground and pick it up. You throw yourself into battle, yelling a battle cry loudly. You lunge forward, smacking the little demon in the face, but it is tough! The people it was chasing are able to escape! You continue to battle with the little monster, but your stick does not seem to hurt it, just annoy it. You keep at it however, and even though it scratches you several times, you are determined to defeat it! You keep hitting it over and over on the head, and your stick starts to splinter, but the demon eventually stops moving. You collapse from your injuries as the other people make their way over to you. They say, \"You saved us!\" as your vision gets blurry from the blood loss. You look down at your arms and see that the scratches are turning black. It seems the demon's claws were venomous. At least you saved these three people, right? That makes you a hero in my book.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    demonBees: {
      text: "You quickly pick up the beehive and throw it at the demon! The bees swarm out and attack the nearest creature to the now-destroyed nest, which is the demon. The demon screeches as hundreds of bees go out and sting the demon over and over again. After suffering so many stings, the venom builds up and the demon dies. You check to see if the others are safe, and the have run away, most likely to the nearby town. Good has been done here, what will you do now?",
      choices: [
        { text: "Head to town", next: "town1" },
        { text: "Continue in the wilderness", next: "slipslide"}
      ]
    },
    town1: {
      text: "You make your way into town and can see that it is bustling with activity. There are people talking, selling, travelling, and all other manner of things going on. There are lots of posters of Jim, praising his achievement of defeating Yug Dab. You look around and see a casino! A little gambling can't hurt, right?",
      choices: [
        { text: "Go to the casino", next: "casino" },
        { text: "Nah, keep looking", next: "jim1"}
      ]
    },
    casino: {
      text: "You enter into the casino and see Jim! He is playing at a roulette table, and there are some open spots! You decide to join, but just as you sit down, Jim gets up and leaves! Maube he has an important mission he is going to. The opperator looks at you and asks for your bet. You panic and put everything you own.",
      choices: [
        { text: "Put it all on red!", next: "poorEnd" },
        { text: "Put it all on black!", next: "richEnd"}
      ]
    },
    poorEnd: {
      text: "Oh, unlucky! The wheel does not turn in your favor and you lose everything, including your own clothes. You can't go back to the farm, as you no longer own it, and you can't buy anything. You are thrown out of the casino into the street to beg for assistance. Welp, it can't get much worse than this, right? It starts raining.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    richEnd: {
      text: "Success! See? You knew gambling was a good idea! You take your winnings and admire all of your newfound wealth, and decide to live up a life of luxury. You use your money to help others and to help yourself, creating a prosperous construction buisness that provides affordable housing for people. It wasn't the kind of hero you thought you'd be, but you're helping people nonetheless.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    jim1: {
      text: "You find Jim! You had made it all the way to the town and found the great hero! You run up to him and ask if there is any evil that you can defeat. He looks back at you and says, \"Ah, a fan! It is good that you want to vanquish evil, but where is your weapon? Your armor? What gives you the strength to do such great things?\" He stops speaking and notices a potato shaped birthmark on your arm. He changes his expression and says, \"Ah, I have been mistaken! That mark is the Mark of Destiny! Yes, come with me on an adventure, I know of another evil we must defeat!\"",
      choices: [
        { text: "Accept Jim's offer", next: "jim2" },
        { text: "Reject Jim's proposal", next: "rejectionEnd"}
      ]
    },
    rejectionEnd: {
      text: "After thinking through the situation, you decide that the life of adventure is far too dangerous for you. It was fun while it lasted, but Jim is right, you don't have any weapons or armor, it could be very dangerous. You decide to wait on your adventuring until you are ready. Jim goes off on his new adventure alone.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    jim2: {
      text: "You agree with excitement. Jim says \"Fantastic! I think we will get along very well! Let's go off the save the world!\" So the two of you head off in search of evil to vanquish. Jim tells you of a terrible monster that came from Typhon's Cursed Land, and it guards a treasure that you and Jim must not let fall into the wrong hands. Jim says that he monster is holding on to it until the monster's master returns, which is why the two of you have to go and get it.",
      choices: [
        { text: "Continue", next: "jim3"}
      ]
    },
    jim3: {
      text: "You travel with Jim out of the town, into the woods, and far away from everything you have ever known. Jim tells you of some of the stories of his adventures. He reassures you that no one is \"born ready\" for their destiny, and that it is the real heroes who go and chase their destiny even though they aren't ready. The two of you continue, but suddenly slip an fall into a ravine filled with mud. There are lots of large bugs and they are quite spooked by your sudden appearance.",
      choices: [
        { text: "Fight the bugs", next: "bugFight" },
        { text: "Back off", next: "bugEnd"}
      ]
    },
    bugEnd: {
      text: "You back off, but the two of you accidently step onto the legs of a massive centipede! It rears up and wraps around you, biting and constricting. You hear Jim shouting out, trying to cleave his way over to save you, but the centipede's venom has already taken effect. It seems your adventure is over.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    bugFight: {
      text: "Jim throws you a sword as you both decide to fight. You stand back to back with Jim, stabbing and slashing at the approaching bugs. You work together well, with Jim complimenting you and giving instructions when you look confused. You eventually cause the bugs to retreat, but a giant centipede decides it wants to take a bite out of you. Jim holds his sword ready, saying, \"We can defeat it together, come on! You take the left, I'll distract it!\"",
      choices: [
        { text: "Attack from the left", next: "centiWin" },
        { text: "Try to sneak in and stab it", next: "centiLose"}
      ]
    },
    centiLose: {
      text: "You ignore Jim's idea and dash in! Unfortunately, the centipede is very quick and bites your head before you can strike. You would continue, but it is difficult to do so when your skull is crushed.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    centiWin: {
      text: "You sneak to the side and jam your sword into the side of the large creature, using the opening that Jim is giving you. It screeches and falls down, dead. Jim comes up to you and says \"That was good! You have a lot of potential! Oh, your mark! Did it help you?\"",
      choices: [
        { text: "Yes, I felt its power", next: "potatYes" },
        { text: "No, I didn't feel anything", next: "potatNo"}
      ]
    },
    potatNo: {
      text: "Jim says, \"Oh, I guess we'll see in time then.\"",
      choices: [
        { text: "Continue", next: "cave"}
      ]
    },
    potatYes: {
      text: "Jim says, \"AHAH! I knew you'd be special! Come on, let's go save the day! The cave is not very far from here, then our journey will be complete!",
      choices: [
        { text: "Continue", next: "cave"}
      ]
    },
    cave: {
      text: "You have made it with Jim to the cave where the treasure is, and you head inside. It is dark, so Jim lights a torch so you all can see. The walls are covered in dried blood and old bones. You continue onwards, and you can actually feel your birthmark start to heat up and glow ever so slightly. Jim sees and says, \"Huzzah my friend! It seems we really are exactly where we are supposed to be! Come on then, our destiny is just through here!\" You both keep walking further into the cave, it gets darker and darker. You get this sudden chill down your spine and in your very soul. Jim is in front of you, defenseless. You still have the sword he gave you. You could end him now, take the treasure and blame Jim's death on the monster.",
      choices: [
        { text: "Draw your sword and end him", next: "backstab" },
        { text: "Push the thoughts aside", next: "Fell"}
      ]
    },
    backstab: {
      text: "You quietly draw your blade and plunge it into Jim's back. He gasps, before choking up a burble of blood. He turns back and just asks, \"Why?\", before falling down and dying. You drop your sword and it latters to the cold stone floor. You look down at your hands, still covered in Jim's blood.",
      choices: [
        { text: "What have you done?", next: "backstabEnd"}
      ]
    },
    backstabEnd: {
      text: "As you look down at Jim's lifeless body, you feel that same chill come over you again. A horrible voice speaks in your mind. It says, \"Good...Good. You were quite easy to convince. Unfortunately for you, I no longer tolerate your presence here. But it seems you want en explaination. Too bad. All you need to know is that I told you to do something, and you did. Goodbye\" A shadowy tendril lashes out from the darkness, impaling you and slaying you within seconds.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    Fell: {
      text: "NO! You push those thoughs aside. Jim is a hero! And more than that he's your friend! Why would you think to do that? Although, both of you make it to the back of the cave, and it seems you have found your answer. You both see a large, horrible creature with stingers, tails, tendrils, and spikes. Looking at it gives you a headache, perhaps it has some kind of mind altering ability? You see the treasure behind it, and Jim readies for battle. You raise your blade as well, unsure of what this creature, no, this fiend is capable of.",
      choices: [
        { text: "Call to Jim and warn him to be wary", next: "FightFell1" },
        { text: "Attack quickly before the fiend can react", next: "FellFight1"}
      ]
    },
    FightFell1: {
      text: "You call out to Jim, and he takes your advice to heart. The creature raises one of its tails to strike at Jim, but he dodges out of the way. Jim calls out, \"This devil is a Fell! They are very dangerous!\" The Fell turns back to you and goes to sweep out your legs.",
      choices: [
        { text: "Jump over the attack", next: "FightFell1Fail" },
        { text: "Counterattack the tail", next: "FightFell2"}
      ]
    },
    FightFell1Fail: {
      text: "You go to jump over the tail swipe, but it seems to be able to change its direction quickly. While you are in the air, the Fell switches direction and skewers you from your foot to your skull. You die in an instant.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    FightFell2: {
      text: "You swing your blade as a parry and manage to deflect the attack. As you repel the strike, you cut off a good chunk of fur, exposing the flesh underneath. The Fell is bleeding ever so slightly. This will probably take a while. Jim says, \"Haha! If it can bleed, it can die! Keep at it friend!\" The Fell raises a claw to swipe at you.",
      choices: [
        { text: "Dodge to the side", next: "FightFell3" },
        { text: "Block the strike", next: "FightFell2Fail"}
      ]
    },
    FightFell2Fail: {
      text: "You try to block the claw swipe, but the Fell is too fast. Before you can set your guard it slashes downward, spliting you in half. You die immediately.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    FightFell3: {
      text: "You sidestep and slash at the claw. You see an opening and stab at the Fell. It screeches in pain and you back off again. You see Jim as he is also battling the creature. It seems to be slowing down, but still has a bit of fight left in it. It goes to pierce you with its tail.",
      choices: [
        { text: "Dodge out of the way", next: "FightFell4" },
        { text: "Grab the tail for a counter", next: "FightFell3Fail"}
      ]
    },
    FightFell3Fail: {
      text: "You try to grab the tail, but you hand slips and the tail pierces you through the chest. It pumps you pull of venom and your blood ignites. You die.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    FightFell4: {
      text: "Stepping out of the way, you hack at the spot you struck earlier. Your sword slices clean through, severing the end of its tail. The Fell recoils in pain as Jim goes in for another strike. Just one more attack should do it now.",
      choices: [
        { text: "Attack with your sword", next: "FightFellDead1" },
        { text: "Pick up the tail and attack", next: "FightFellDead2"}
      ]
    },
    FightFellDead1: {
      text: "You charge forward, and Jim goes around from behind. Both of you leap into the air and slash downwards on the horrible creature. Its flesh gives way as it splits open with a screech. You have defeated the Fell.",
      choices: [
        { text: "Continue", next: "Artifact"}
      ]
    },
    FightFellDead2: {
      text: "Picking up the severed tail, you sprint forward and jam it into the chest of this monster. It goes to rip your head off, but Jim dives in and cuts the beast's claw straight off. As it bleeds out, you can see its blood start to burn, as if the stinger has a venom in it that caused combustion. It burns away. You have defeated the Fell.",
      choices: [
        { text: "Continue", next: "Artifact"}
      ]
    },
    FellFight1: {
      text: "You go in to strike, but you were careless. This thing is fast. You go to attack, but it quickly dodges out of the way. It scratches you on the arm, and you can feel the wound burn. Jim goes around behind and attacks, but his sword strikes are deflected. You both stumble back, determined to keep fighting.",
      choices: [
        { text: "Attack again", next: "FellFight1Fail" },
        { text: "Wait for a counter", next: "FellFight2"}
      ]
    },
    FellFight1Fail: {
      text: "You rush in, but you watch in horror as the thing stabs Jim in the chest with one of its tails and throws him at you. Both of you crumble to the ground, and the creature leaps atop you, crushing you both under its weight.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    FellFight2: {
      text: "You decide to wait patiently, and you see an oppertunity. The creature goes to stab its tail at you, but you duck under it and lunge. You strike true, hitting the main body, but it retaliates, rending your back with its claw. You stumble back and see that Jim is not doing much better. He says, \"Hoo, this thing is tough! It's a Fell, and I'm not sure if we can beat it!\" But then your birthmark glows brightly.",
      choices: [
        { text: "Investigate the glowing mark", next: "FellFight2Fail" },
        { text: "This is a sign, attack!", next: "FellFight3"}
      ]
    },
    FellFight2Fail: {
      text: "In your moment of hesitation to examine the mark, the Fell sees an oppertunity. It lunges forward and clamps its jaws around your neck, and the last thing you hear is a sickening crunch.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    FellFight3: {
      text: "Feeling your potato mark's power, you surge forward with a burst of energy and skewer the Fell on your sword. It falls over dead, but you are now feeling very light headed from all the blood loss. Jim rushes over to you, clutching his own wounds as he says, \"Whoa there pal, sit down. Those injuries look pretty bad.\" You sit down as the world keeps getting dizzy around you. Jim sits down next to you wih a solemn expression. He says, \"I can't do anything to save you. I'm sorry. But I can make sure they'll remember you.\"",
      choices: [
        { text: "Continue", next: "rememberMe"}
      ]
    },
    rememberMe: {
      text: "Your vision goes dark.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    Artifact: {
      text: "Victorious over the Fell, you and Jim go to claim the artifact. Jim goes up to it, it is a shiny green orb, and he says, \"Finally, I have it. Thank you for helping me get this far. Though, I suppose I should be honest with you now.\" Jim turns back, holding the orb. He says, \"I didn't come here to rescue this artifact. I came here because I wanted it all to myself. And in order to make it work, I needed the blood of one with the Mark of Destiny. So, I'm offering you one chance to offer yourself willingly. What do you say?\"",
      choices: [
        { text: "What? Never! That's evil!", next: "JIM" },
        { text: "Give in.", next: "JIMEND"}
      ]
    },
    JIMEND: {
      text: "You stop to think. Jim is the hero who defeated Yug Dab, maybe he is doing this in order to defeat another threat? And this is the only way... You look up at Jim and nod your head. You close your eyes as he raises his sword. \"I'll make sure they remember you\" Jim says before slicing downwards.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    JIM: {
      text: "You shout at Jim as you raise your blade, \"This is not the hero you said you were! I won't let you do this!\" Jim readies to battle.",
      choices: [
        { text: "Fight", next: "jimFight1" },
        { text: "Run away", next: "noEscape"}
      ]
    },
    noEscape: {
      text: "That's not an option anymore",
      choices: [
        { text: "Battle Jim", next: "jimFight1"}
      ]
    },
    jimFight1: {
      text: "Jim leaps down and slashes at you. You block. He is very skilled, but you have an opening.",
      choices: [
        { text: "Go for the orb", next: "orb" },
        { text: "Go for Jim", next: "ineffective"}
      ]
    },
    ineffective: {
      text: "Jim blocks, but his guard is wavering from the battle with the Fell. Attacking again might go through.",
      choices: [
        { text: "Attack Jim again", next: "jimFightFail" },
        { text: "Defensive position!", next: "jimFight2"}
      ]
    },
    orb: {
      text: "You hit the orb, and it starts glowing and cracking. It continues to do so until it explodes, destroying both you and Jim.",
      choices: [
        { text: "Try Again?", next: "start"}
      ]
    },
    jimFightFail: {
      text: "Your second attack was unsuccessful, it seems that Jim tricked you into believing he had a weak guard. One slash to your stomach later, and you are looking at your own guts on the floor.",
      choices: [
        { text: "Try Again?", next: "start"}
      ]
    },
    jimFight2: {
      text: "You take a defensive position to parry Jim's incoming attack. Your potato mark glows.",
      choices: [
        { text: "Investigate it", next: "jimFightpotatFail" },
        { text: "Attack Jim", next: "jimDefeat"}
      ]
    },
    jimFightpotatFail: {
      text: "In your distraction, Jim cuts off your arm and then slashes your neck open. You bleed out in mere moments.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    jimDefeat: {
      text: "With a surge of power, you lunge forward and stab Jim with your sword, pinning him against the wall. He coughs up blood and says, \"I guess that's as far as I go... Well done...\" Jim stops moving. You've done it. You've saved the world from evil. Do you go and tell the world that you've killed Jim? Or do you live your life carrying this secret? At this point, the story is up to you.",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    cursedLandEnd: {
      text: "The goblin looks at you confused and says, \"Uh... I guess? Well, that's not the answer I was looking for! Now you can go to Typhon's Cursed Land!\" The goblin casts a spell on you and teleports you to Typhon's Cursed Land. A demonic flying creature almost immediately swoops down and snatches you, tearing you limb from limb.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    logSwordGoblin: {
      text: "You follow the goblin sneakily, and he runs up to a rusted sword stuck in a log. You are dissapointed, you thought maybe it actually was something legendary. Eh, this doesn't interest you. You continue onwards.",
      choices: [
        { text: "Continue", next: "rocSpot"}
      ]
    },
    rocSpot: {
      text: "You continue through the forest, and suddenly everything goes quiet. You don't know why, what do you do?",
      choices: [
        { text: "Take no chances and hide", next: "rocSpot2" },
        { text: "Ignore it and continue", next: "rocBirdFood"}
      ]
    },
    rocBirdFood: {
      text: "Eh, you're sure it's nothing. You continue on until you get to a clearing. You pause to admire your surroundings, when a giant bird swoops down and digs its claws into you and lifts you off into the sky. You try to struggle out of its grasp, but you must have been acting stupid from the shock, because as you break free you realize that it took you several hundred feet off the ground. You close your eyes so you don't see the fall.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    rocSpot2: {
      text: "You find a hiding spot and look around. As you do so, a massive shadow flies over the area. You look up and see a roc, a species of enormous bird. But this is weird, rocs normally live high in the mountains, what is it doing all the way down here?",
      choices: [
        { text: "Rocs? Nope, nope, NOPE! I ain't dealing with that!", next: "farmEnd" },
        { text: "Investigate why the roc is here", next: "deepWoods"}
      ]
    },
    dryad: {
      text: "The dryad sees you and waves over. As you approach, she makes her eyes glow and she casts a spell on you. You are now under the complete mind control of the dryad.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    spiderBless: {
      text: "You ask the spiders if you can have the sword. They look surprised that you are talking with them. They give you their blessing and you take the sword. One of the spiders say to you, \"There is a horrible cult outside, our webs are here to stop them. You are kind, not attacking us on sight. Perhaps you can defeat them? You have the spiders' blessing to do so.",
      choices: [
        { text: "Don't listen to them, attack the spiders", next: "cultEnd" },
        { text: "This is the evil you were searching for!", next: "cultFight"}
      ]
    },
    cultEnd: {
      text: "You ignore them, they are clearly trying to convince you to attack some innocent people! You instead attack the spiders, and with your new silver sword it is easy. After all of the spiders are dead, you go to check on the people beyond. You see them and they appear to be in the middle of some kind of ceremony. You approach and they put a bag over your head and knock you out cold. You wake up to see you are in the middle of an occultish circle, about to be sacrificed with your own silver sword. You close your eyes as they drop the blade, slicing you open.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    cultFight: {
      text: "You thank the spiders and leave the way they say. You approach and you see that there is indeed a cult residing here. They appear to be getting ready for a sacrifice.",
      choices: [
        { text: "Sneak in and take them out", next: "spiderCultWin" },
        { text: "Charge forward and attack", next: "spiderCultLose"}
      ]
    },
    spiderCultLose: {
      text: "You charge forward, shouting a battle cry. You cut down cultist after cultist, but once the element of surprise is gone, they quickly overwhelm you, casting spells and slicing blades. You got maybe nine of them before they kill you.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    spiderCultWin: {
      text: "You see there are too many of them to take on at once, so you sneak around instead. You feel the blessing of the spiders, hiding you from detection. You take them out one by one, until there is only the last one left, the leader. You reveal yourself as he prepares to battle you. He swings, but you parry and counterattack. Your silver blade cuts cleanly through his throat and he falls down, defeated. You have beaten the cult and saved the land from their evil! The land will hear of your valiant deeds!",
      choices: [
        { text: "Play again?", next: "start"}
      ]
    },
    tower: {
      text: "You haed away, not wanting to try your luck with whatever is going on. You eventually find a tower, and on top of it, a truly gargantuan bird nest. It seems this is where the roc was from.",
      choices: [
        { text: "Enter in", next: "tower2" },
        { text: "Stay outside and wait", next: "towerRocLunch"}
      ]
    },
    towerRocLunch: {
      text: "You wait outside to see if anything happens, but this proves to be a mistake. As you are waiting, the roc returns and swoops down, grabbing you in its talons and bringing you up to the nest. It then lands on you, crushing you with its immense weight before swallowing you whole.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    tower2: {
      text: "You enter into the tower, and can see there are multiple skeletons lying on the ground. One of them has a sword sticking out of it. You take it and continue upwards. Eventually you encounter a door that leads to the top. You head up and come face to face with the roc nest. There are eggs. The roc is not here.",
      choices: [
        { text: "Smash the eggs", next: "eggSmash" },
        { text: "Wait for the roc", next: "tower3"}
      ]
    },
    eggSmash: {
      text: "You take your sword and smash the eggs, getting covered with nasty goo and trying to ignore the half formed birds left in the shells. You look up in horror just in time to see that the roc has returned and is very angry. It doesn't even bother to grab you. It just skewers you with its talons.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    tower3: {
      text: "You wait for the roc to return, hiding behind the eggs and remains of past meals. Eventually it returns, and you jump out to face it. It is too big to battle, even giants have a hard time with them, so you think of something else. You take out the apples you got and offer them to the roc. It looks confused but accepts. It eats a few and tries to eat more, but you take them away and point over to the mountains. The roc seems to understand. You gie it the rest of the apples, it takes its eggs and flys off back to the mountain. You have saved the land from a giant predatory bird, good job!",
      choices: [
        { text: "Play again?", next: "start"}
      ]
    },
    dryadMurder: {
      text: "You take the knife and slit her throat from behind. She gurgles on the blood, but still falls over and dies. You hide as you hear some people approaching. One man comes into view and picks up the bloody knife. He looks around confused, and later some others arrive you come out of hiding.",
      choices: [
        { text: "Blame this stranger", next: "blame" },
        { text: "Say you killed the dryad", next: "arrested"}
      ]
    },
    arrested: {
      text: "You admit to killing the dryad, and the group is horrified. After they collect themselves, they say you are under arrest for murder. You look around, and you can see there is no escape, they have dogs which are a lot faster than you, so you let them take you in without a hastle. They throw you in jail until your trial. No one's going to believe you area hero now.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    blame: {
      text: "You point at the man holding the knife and the others quickly arrest him. You escape without a hitch.",
      choices: [
        { text: "Continue", next: "guilt"}
      ]
    },
    guilt: {
      text: "You head out and you start to feel guilty about what you've done. Should you have blamed the other man? Should you have slain that dryad? The other men seemed horrified.",
      choices: [
        { text: "It was for the best", next: "dragonEggs" },
        { text: "Head back to the farm, you can't do this", next: "farmEnd"}
      ]
    },
    dragonEggs: {
      text: "You steel your resolve, you did what you had to do. You continue onwards, having taken the knife from the dryad. As you go on, you stumble across a cave, inside of which are four dragon eggs. After some investigation, you determine that these are chromatic dragon eggs, but not exactly which kind. You see several human skeletons, burned and chewed to ruin. They were wearing some form of dark clothing, but the organization is unidentifiable. The cave does not go far past the eggs.",
      choices: [
        { text: "Smash the eggs", next: "smashDragonEgg" },
        { text: "Steal an egg", next: "dragonEggThiefEnd" },
        { text: "Wait for the dragon to return", next: "dragonThankEnd"}
      ]
    },
    dragonEggThiefEnd: {
      text: "You try to pick up one of the eggs, but they are WAY heavier than you expected them to be. You hurt your back, but manage to pick one up. You start to walk out of the cave, but as soon as you turn around, you see the dragon is standing in front of the cave, and doesn't look happy. One fire breath later and you are toast.",
      choices: [
        { text: "Try again?", next: "start"}
      ]
    },
    dragonThankEnd: {
      text: "You wait for the dragon to return, and after a couple of minutes you hear a loud thud outside the cave. The dragon has returned. You go to greet them. The dragon sees you, and sees that you spared the eggs. The dragon thanks you handsomely with gold from its hoard. You return home with full pockets and live your life in comfort.",
      choices: [
        { text: "Play again?", next: "start"}
      ]
    },
    smashDragonEgg: {
      text: "You smash the eggs, knowing that they could grow up into terrible dragons. You hear a thud outside as you can tell the dragon has returned. You quickly think of a plan. You sneak by the side an ready to throw your knife at a loose rock above the dragon, and once it gets under you throw your knife and cause the rocks to fall under the dragon, letting you escape.",
      choices: [
        { text: "Head home", next: "I1" },
        { text: "Continue forward", next: "her0"}
      ]
    },
    I1: {
      text: "That's not an option anymore",
      choices: [
        { text: "Back", next: "smashDragonEgg2"}
      ]
    },
    smashDragonEgg2: {
      text: "You smash the eggs, knowing that they could grow up into terrible dragons. You hear a thud outside as you can tell the dragon has returned. You quickly think of a plan. You sneak by the side an ready to throw your knife at a loose rock above the dragon, and once it gets under you throw your knife and cause the rocks to fall under the dragon, letting you escape.",
      choices: [
        { text: "Head home", next: "I2" },
        { text: "Continue forward", next: "her0"},
      ]
    },
    I2: {
      text: "As I said, that isn't an option anymore.",
      choices: [
        { text: "Back", next: "smashDragonEgg3"}
      ]
    },
    smashDragonEgg3: {
      text: "You smash the eggs, knowing that they could grow up into terrible dragons. You hear a thud outside as you can tell the dragon has returned. You quickly think of a plan. You sneak by the side an ready to throw your knife at a loose rock above the dragon, and once it gets under you throw your knife and cause the rocks to fall under the dragon, letting you escape.",
      choices: [
        { text: "Head home", next: "I3" },
        { text: "Continue forward", next: "her0"},
      ]
    },
    I3: {
      text: "What? You can't stand the feeling of your own sins crawling on your back?",
      choices: [
        { text: "I don't want this option", next: "I4" },
        { text: "Back", next: "smashDragonEgg3"}
      ]
    },
    I4: {
      text: "Since when did you think you were in control?",
      choices: [
        { text: "Back", next: "smashDragonEgg3"}
      ]
    },
    her0: {
      text: "You continue, the weight of your sins weighing you down. You stop to rest, and a young adventurer comes up to you, with hope and innocence in their eyes. The same innocence that was in your eyes once. They come up and draw their blade. They say, \"I heard the kingdom was in trouble, I came to stop you.\"",
      choices: [
        { text: "Again?", next: "start"}
      ]
    },
    logSword: {
      text: "You thank the goblin and head to the spot he told you. You see an old, rusted sword in the log, stuck and forgotten. You go up to it and ready your hands around the handle. You pull with all your might, and the blade springs free! You feel very heroic! Unfortunately, you cut yourself on the rusty blade and have to go back home to clean the wound so you don't get tetanus. However, once it heals, you will be a great hero, I'm sure of it!",
      choices: [
        { text: "Play Again?", next: "start"}
      ]
    },
    slipslide: {
      text: "You walk, but you end up slipping on some mud! You tumble down and stop at the bottom of a muddy slip and slide. You are very hurt, you think you may have broken bones. You decide to wait here until the pain is more bearable, then to head back home to tend to your wounds. You've done good, now it is time to rest.",
      choices: [
        { text: "Play again?", next: "start"}
      ]
    },
  };

  const storyDiv = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");

  function showScene(sceneKey) {
    const scene = story[sceneKey];
    storyDiv.textContent = scene.text;
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice.text;
      btn.className = "choice-button";
      btn.onclick = () => showScene(choice.next);
      choicesDiv.appendChild(btn);
    });
  }

  showScene("start");

  document.getElementById("home-button").addEventListener("click", () => {
    const confirmHome = confirm("Are you sure you want to return to the home page? Your progress will be lost.");
    if (confirmHome) {
      window.location.href = "index.html";
    }
  });
  
  document.getElementById("refresh-button").addEventListener("click", () => {
    const confirmRefresh = confirm("Are you sure you want to restart the adventure? Your progress will be lost.");
    if (confirmRefresh) {
      location.reload();
    }
  });
