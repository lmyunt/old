

const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const audio1 = new Audio("https://www.fesliyanstudios.com/play-mp3/2");
const button = document.querySelector("#audioButton");
const icon = document.querySelector("#audioButton > i");
const audio = document.querySelector("audio");


button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    audio.loop = true;
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});



let state = {}



function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => {
        selectOption(option)
        audio1.play()
      })
      optionButtonsElement.appendChild(button)
     
       
    }
  })
}

function showOption(option) {
 return option.requiredState == null //|| option.requiredState(state)//
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
   showTextNode(nextTextNodeId)
 }

const textNodes = [
  {

    id: 1,
    text: 'WELCOME!\n\nINDAgavi is an interstellar communications company that dreams of connecting the world. Our world-class technology brings isolated planets into the 26th century. Over 5,000 planets have made the switch, increasing trade, job opportunities, and most importantly connecting people together. And that is where you come in. The first step to implementing our communication system is getting as much data as possible on our potential consumers! To do so we send scouts to make initial connections and gather information about the planets they journey to. \n\nTo help you succeed we’ve given you multiple tools. The Gavisuit you will be provided will not only provide you with oxygen, but it can monitor your health as well. The INDAgo you’re provided is a small tablet that keeps you connected while you are away from your ship to our AI system we’ve affectionately named INDA. INDA can do almost anything you can imagine and more,  and we consider her to be the heart of our operation. We know you will love INDA as much as we do. You received a complete overview of your mission prior to starting your journey, the original debrief as well as any updates will be included below!\n \nSCOUT MISSION GUIDE Sector 1066 Planet AE298B:\n' +'\nGOALS -\n\nUtilize INDA to gather data and interact with local sentient beings, fauna, and flora.\n \nMISSION NOTES:\n \nThe atmosphere has been confirmed as optimal for human life. Previous contact shows that locals are friendly and willing to connect.\n\nWhat would you like to inquire about?\n',
    options: [
      {
        text: 'SHIP STATUS',
        nextText: 1_0
      },
      {
        text: 'MISSION STATUS',
        nextText: 1_1
      }
    ]
  },
  {
    id: 1_0,
    text: 'ANALYZING SHIP LOG...\n\nThank you for your patience!\n \nIt appears that while you slept our navigation system experienced a malfunction,' + 
    'knocking us off course.' 
    +'This unfortunately resulted in an emergency landing on a planet that cannot be located in the INDAGAVI PLANETARY GUIDE. Diagnostic tests indicate' + 
    'that the vessel is currently inoperable due to major damage incurred during landing,' + 
    'and a distress signal has been sent out on all available channels. \n\nINDIGAVI protocol 103B has been initiated. A scan of the surrounding planet has ' + 
    'been completed.\n\n!!MISSION UPDATED!!\n \nSYSTEM CRASH PROTOCOL ENGAGED\n',
    options: [
      {
        text: 'MISSION STATUS',
        nextText: 1_1
      }
     
    
      
    ]
  },
  {
    id: 1_1,
    text: 'INITIAL MISSION PARAMETERS: \nUtilize INDA to gather data and interact with local sentient beings, fauna, and flora.\n\ \nUPDATED MISSION PARAMETERS ISSUED:\n Scans indicate life on current planet, protocol 8649 requires alignment with original mission parameters\n \nPlease Select CONFIRM to confrim that you consent to updated parameters. \n\n!! WARNING !!\n \nDECLINING MISSION PARAMETER UPDATES WILL RESULT IN IMMEDIATE TERMINATION OF EMPLOYEMENT\n',
    options: [
      {
        text: 'CONFIRM',
        nextText: 1_1_1,
      },
      {
        text: 'DECLINE',
        nextText: 1_1_0
      }
    ]
  },
  {
    id: 1_1_0,
    text: 'INDA: "I am legally required to inform you your employment has been terminated. GoodBye." \nThe power cuts out, the terminal stops responding no matter what you try. You are never found, the ship distress signals lost in the darkness of space.\n \n\nTHE END.\n',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 1_1_1,
    text: 'INDA: "Thank you for your continued cooperation with INDAgavi, we appreciate you and all that you do! \nThe door has been unlocked, please proceed!"',
    options: [
      {
        text:'Go outside',
        nextText:1_1_1_0
      },

      { text:'Equip Gavisuit',
        nextText:1_1_1_1

      }
    ]
  },
  {
    id: 1_1_1_0,
    text: 'You proceed outside, as soon as the door shuts behind you the world begins to spin. It didn\'t occur to you that the atmosphere could be poisonous, but the intensity of it causes you to fall to your knees. As your consciousness fades you bitterly remember that this was supposed to be an "easy job". \n\nTHE END\n',
    options: [
      
        {
            text: 'Restart',
            nextText: -1
          }
      
    ]
  },
  {
    id: 1_1_1_1,
    text: 'The suit goes on perfectly. \n\nINDA: "Don\'t forget to equip your INDAgo tablet, without that we won\'t remain connected once you are more than 10 meters away!."',
    options: [
      {
        text: 'Equip INDAgo',
        nextText: 1_1_1_1_0
      },

      {
        text: 'Ignore and go outside',
        nextText: 1_1_1_1_1
      }
     
    ]
  },
  {
    id: 1_1_1_1_1,
    text: 'Why do you need to bring along the AI that is forcing you to be in this situation in the first place? You think to yourself as you press the flashing \'door\' button. The light is blinding as you take your first step into this new world. But before you have a moment to process the bright colors infront of you you hear sliding sound of the door behind you. \n\nYou spin around as you hear the click of the doorlock. \n\nYour hands slide over the front of the door searching for a handle to no avail. Panic sets in and you begin to bang on the door before a familiar voice floods into your helmet speaker. \nINDA: "You have violated code m385-e, failure to comply with equipment requirements, and appear to be escaping with INDAgavi technology. The protocol indicates that I am legally required to inform you that this has resulted in your immediate termination. You are now no longer recognized as an authorized user, disconnecting from Gavisuit.\n"Everything goes dark as your helmet goes black, the power to the suit being cut off. Your attempts to escape the suit make you want to scream in frustration, the locks refusing to budge. So you sit in the dark silence, unable to cry as the claustraphobia overwhelms, realizing slowly that this is where your journey ends. \nThe End\n',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 1_1_1_1_0,
    text: 'The tablet slides into your armband, a familiar connection jingle rings as the loading screen lights up. You lock eyes with the flash light labeled, taking a deep breath as the press of the button causes the door to swing open.Light floods into the darkened room you caled home for the past three months, and you take your first step forward. \n\nThe scene infront of you is brightly colored, the ground itself a crimson red covered in a dark grass and a field of what you\'d describe as dandelions still covered in their cottony white seeds. \nThe field streches until it reaches a body of water, similar to a small lake that reflects the orange sky above. You stare in amazement before INDA cuts in. \n\nINDA: "My scans indicate that indcators of life on this planet are highest to the East and to the West of your current location."\n',
    options: [
      {
        text: 'Look to the East Forest',
        nextText: 1_1_1_1_0_0
      },

      {
        text: 'Look to the West Mountains',
        nextText: 1_1_1_1_0_0_1
      }
    ]
  },
  {
    id: 1_1_1_1_0_0,
    text: 'You look towards the East instinctively and large forest comes into view. The trees look ancient by Earth standards, with black leaves reflecting their true purple and maroon hues when the light hits at just the right angle. Amongst the tightly packed trees you spot a larger opening, with a path that was most likely made by whoever or whatever regularly entered.',
    options: [
      {
        text: 'Go to the East Forest',
        nextText: 1_1_1_1_0_0_0
      },

      {
        text: 'Go to the West Mountains',
        nextText: 1_1_1_1_0_0_1
      }


    ]
  },
  {
    id: 1_1_1_1_0_0_1,
    text: 'Something about the forest makes you uneasy. You look to see the mountains, the risen red earth blanketed in the white snow looks beautiful in a way that you can\'t describe. An urge to go there overcomes you and you begin your journey. You\'re surprised by how fast you arrive,  2 hours flying by and you\'re at the base of the summit. The weather that seemed fine moments ago begins to turn into a blizzard, overwhelming you in a moment completely obfuscating your view. Returning looks to be your best bet, so you turn around and attempt to go back the way you came trudging through quickly building snow until you trip over an unseen rock. The world spins as you tumble down, finally landing with a thud the air knocked out of your lungs. You plead with your body to move but you feel frozen in place, wondering if this is where everything ends. When suddenly a shadow is cast over you and you come face to face with a helmet just like your own attached to who or whatever was looking down at you...\n\nTO BE CONTINUED\n',
    options: [
      {      
        text: 'Restart',
        nextText: -1
      }
    ]
  },

  //east forest path begins
  {
    id: 1_1_1_1_0_0_0,
    text: 'You approach the entrance to the forest, you\'re surprised that it\'s large enough that you don\'t need to duck down and you proceed down the path. The sights and sounds overwhelm you, the fallen tree leaves crunch under your feet, bright magenta flowers grow in vines around the trees, and the chirp of unsceen insects continue to grow around you until you reach a fork in the path.',
    options: [
      {
        text: 'Go Left',
        nextText: 2
      },

      {
        text: 'Go Right',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: 'Left seems to be the way to go, you continue along the path taking in the sites when you notice something out of place in this world of purples, a large yellow flower. The flower itself had large petals daintly draped outwards it\'s width appeared close to a meter in length, which was all supported by a large green base. \n\nINDA: "Friendly reminder that if you find something interesting, investigate!" You roll your eyes, and take a couple steps closer before stopping',
    options: [
      {
        text: 'Get closer to investigate',
        nextText: 2_0
      },

      {
        text: 'Keep observing',
        nextText: 2_1
      }
    ]
    },
    {

      id: 2_0,
      text: 'You approach the flower, admiring how beautiful it was up close. It was then that you noticed that the middle of the plant seemed to almost sparkle. As you leaned in closer to investigate the source of the shine everything went dark in the blink of an eye. It was then you realized the flower had swallowed you whole, and before you could yell for help the air was knocked out of you by the squeeze of the flower.\n\nTHE END\n',
      options: [
        {      
          text: 'Restart',
          nextText: -1
        }
      ]
    },

    {
    
      id: 2_1,
      text: 'You rather be safe than sorry, so you continue to study the plant from afar until you saw a bird the size of a housecat fly over it. \n\nIn the blink of an eye the flower\'s petals had closed and caught the bird midflight. Your mouth fell open and within 30 seconds the flower had returned to it\'s original state. You shiver and continue down the path trying to get away as quickly as possible. \n\nIt\'s not long until you discover another oddity, a nest so big that you could comfortably fit inside.\n',
      options: [
        {
            text: 'Observe from afar',
            nextText: 2_1_0
          },
    
          {
            text:  'Keep walking',
            nextText: 2_1_1
          }
      ]
    },
    {
      id: 2_1_0,
      text: 'Well it IS your job to at least observe this world and what lives here, so you get close enough to get a visual of the inside of the nest but maintain your distance. \nInside are light blue eggs the size of bowling balls, and you stretch your neck to try and get a count of how many are in the nest.\n\n As you confirm that there are at least 4 eggs you hear a loud creak in the trees above you. You look up to find the source of the noise and make eye contact with the biggest bird you have ever seen.n/ The bird was easily the size of a grown man if not bigger, it had dark purple feathers and a long sharp orange beak. And it was staring directly at you.',      
      options: [
        {
          text: 'Turn around and run away as fast as you can',
          nextText: 2_1_0_0
        },
      
        {
          text: 'Maintain eye contact and slowly walk away backwards',
          nextText: 2_1_0_1
        }
      ]
    },
    {
      id: 2_1_0_0,
      text: 'Your heart is beating so loud you can hear it in your ears as you run away, but it\'s no use. You can hear it screaching and flying after you, the claws hit your back and you fall. The world spins as you\'re crawling in an attempt to escape. \nIt\'s too little too late as your vision is filled with the purple feathers.\n \nTHE END\n',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
    {
      id: 2_1_0_1,
      text: 'You take a deep breath in and hold it as you slowly walk backwards, careful to not trip or fall as you maintain eye contact with the threatening bird as it stares unblinkingly back. You do so until you finally round a corner, before running as fast as you can down the path. Your lungs are on fire but you don\'t stop until you\'re sure you haven\'t been followed. As you try to catch your breath you take in your surroundings, and notice far ahead in the distance what appears to be someone sitting on a treestump, tending to a fire. \n\nBefore you have a chance to think you see a hand waiving at you\n',
      options: [
        {
            text: 'Approach the stranger',
            nextText: 4_0
          },
        
          {
            text: 'Ignore and keep walking',
            nextText: 4_1
          }
      ]
    },

    {
    
        id: 2_1_1,
        text: 'Learning your lesson isn\'t hard in this place, so you opt to keep going down the path. As you gaze upon the sights and sounds, a weird feeling overcomes you, as if you\'re being watched. A sudden gust of wind blows by and you look in it\'s direction to see a huge bird flying above. You wonder if that could be the owner of the nest, and decide it\'s better to pick up the pace. Eventually you\'re stopped in your tracks when you see what appears to be a fire up ahead. And you lock eyes with the waving hand of the person tending to the fire, beckoning you over.',
        options: [
            {
                text: 'Approach the stranger',
                nextText: 4_0
              },
            
              {
                text: 'Ignore and keep walking',
                nextText: 4_1
              }
        ]
      },
      {
      id: 3,
    text: 'Right is always right, you head down the path admiring the structure of the forest, the way the green and blue vines wrap around the trees. n/ As you walk some movement in a nearby bush catches your eye and stops you in your tracks. Slowly a creature no bigger than your childhood cat emerged from the bush, it\'s white body and thin legs contrasting it\'s dark surroundings. But what really caught your eye was that it appeared to have three heads...shaped like mushrooms. The longer you observe the creature the more you come to the conclusion that maybe this was some type of living fungi.',
    options: [
      {
        text: 'Touch the creature directly',
        nextText: 3_0
      },

      {
        text: 'Use a stick to touch the creature',
        nextText: 3_1
      }
    ]
    },
    {

      id: 3_0,
      text: 'You can\'t resist the urge to see what the fungi feels like and you reach your hand out and lightly graze the surface of one of the blue heads. Instantly the glove begins to melt, you pull your hand back causing the melted material to spread further. Warning alarms blare as the points of contact also begin to melt, exposing you directly to the poisonous atmosphere of the planet. Your curiousity got the better of you, as the fungi wobbles away. \n\nTHE END\n',
      options: [
        {      
          text: 'Restart',
          nextText: -1
        }
      ]
    },

    {
    
      id: 3_1,
      text: 'As much as you wish you could touch the creature directly, you see a large stick that would let you satisfy your curiousity while maintaining some distance. You pick up the stick and slowl approach, the creature doesn\'t react to you but as soon as the stick touches it the end of the stick begins to bubble and melt. You pull the stick back and carefully walk around the fungi, and hurry down the path thankful for the stick that protected you but a bit nervous about the poison on the other end.',
      options: [
        {
            text: 'Discard stick',
            nextText: 3_1_0
          },
    
          {
            text:  'Keep stick',
            nextText: 3_1_1
          }
      ]
    },
    {
      id: 3_1_0,
      text: 'You drop the stick without a second thought and keep walking. /nThe forest is getting darker as you go down the path and you get the feeling that someone or something is watching you. /n You nervously glance around, not realzing until you\'re already on the ground that there was an obstacle right infront of you. When you look to see what caused you to fall you come face to face with a mouth bigger than your head coming at you. In a second you\'re swallowed and face your demise to a giant serpent. \n\nTHE END\n',      
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
    },
 
    {
      id: 3_1_1,
      text: 'You hold the stick in your hand for a second and keep walking. The forest is getting darker as you go down the path and you get the feeling that someone or something is watching you. You nervously glance around, not realzing until you\'re already on the ground that there was an obstacle right infront of you. When you look to see what caused you to fall you come face to face with a mouth bigger than your head coming at you. Almost instinctively you shove the stick into the mouth of your attacker, letting go as the thing thrashes violently. You scramble to get up and away from it, only getting a glance of what looks to be a 10 meter long snake before running away as fast as you could. You run until you feel your legs and lungs about to give out, as you slow down you see what appears to be smoke coming from a fire. You slowly walk towards the source, until a small campsite comes into view. Before you can think of what to do you see there\'s someone sitting at the campsite, and they wave at you.',
      options: [
        {
            text: 'Approach the stranger',
            nextText: 4_0
          },
        
          {
            text: 'Ignore and keep walking',
            nextText: 4_1
          }
      ]
    },

    {
    
        id: 4_0,
        text: 'This is exactly what you\'re here for, and maybe if you do a good enough job you\'ll get a raise or something! You think as you head towards the waiving person, noting that it appears that they have created a small campsite with a makeshift shelter. You\'re greeted with a smile from a white-bearded face as you approach, and if they didn\'t have dark blue skin someone could easily mistake this person as an old human man. You stop close by the entrance to the camp, and it\'s then when they say something in a language you don\'t understand. \n\nINDA:"A language match has been found, enabling translation function." \nSuddenly the unfamiliar words being spoken transform into English as you catch the end of a sentence. \n\nUnknown Alein: " and -it\'s been so long since I\'ve seen someone else...can you understand me?"\n You nod your head yes, they look relieved. \n\n Unknown Alien: "My joy is undescribable! You can call me Vos. It has been years since I last spoke to another. Please sit please sit!" \n\nThe alien is speaking a mile a minute, as they gesture for you to sit. You take a step forward but your movement is interrupted by a warning noise in your ear from INDA.',
        options: [
            {
                text: 'Press the mute button',
                nextText: 4_0_0
              },
            
              {
                text: 'Listen to INDA',
                nextText: 4_1_1
              }
        ]
      },

      {
        id: 4_0_0,
        text: 'Trusting INDA is the last thing on your mind, and you feel confident that Vos could be exactly who you need to speak with, and trusting them seems like the lesser of two evils. You return the smile as you sit down with Vos and motion for them to continue. Vos\'s smile looks slightly sad as they begin. \n\nVos: "This place used to be filled with life...but it all started going wrong the day my neighbor\'s daughter dissapeared. It destroyed our small community as more and more children dissapeared. We tried everything we could think of, and a night patrol that was formed seemed to help for awhile, until the morning none of them returned. I\'ve always been a coward so when I was added to the next night patrol, I ran away. And by the next lunar cycle everyone was gone." \n\nVos takes a shaky breath and your mouth feels dry, you\'re unsure how to comfort them. The ring of a warning alarm startles you both \n\nINDA: "SECOND WARNING, sentient life detected in surrounding area, my data does not lie. Please proceed with extreme caution" \nVos laughs, or makes a sound you could compare to a laugh before looking at you directly \nVOS: "Your friend doesn\'t seem to like me... but I can show you how the others dissapeared" You\'re shocked, there shouldn\'t be a way for them to hear INDA\'s voice in your ear..\n \nTHE END\n',
        options: [
          {
            text: 'Restart',
            nextText: -1
          }
        ]
      },
      {
      id: 4_1,
      text: 'This is exactly what you\'re here for, and maybe if you do a good enough job you\'ll get a raise or something! You think as you head towards the waiving person, noting that it appears that they have created a small campsite with a makeshift shelter. You\'re greeted with a smile from a white-bearded face as you approach, and if they didn\'t have dark blue skin someone could easily mistake this person as an old human man. You stop close by the entrance to the camp, and it\'s then when they say something in a language you don\'t understand. \n\nINDA:"A language match has been found, enabling translation function." \nSuddenly the unfamiliar words being spoken transform into English as you catch the end of a sentence. \n\nUnknown Alein: " and -it\'s been so long since I\'ve seen someone else...can you understand me?"\n You nod your head yes, they look relieved. \n\n Unknown Alien: "My joy is undescribable! You can call me Vos. It has been years since I last spoke to another. Please sit please sit!" \n\nThe alien is speaking a mile a minute, as they gesture for you to sit. You take a step forward but your movement is interrupted by a warning noise in your ear from INDA.',
      options: [
        {
          text: 'Continue running down the path',
          nextText: 5
        },
      
        {
          text: 'Run off the path into the trees',
          nextText: 6
        }
      ]
    },
      {
      
        id: 4_1_1,
        text: 'As much as you have your doubts about INDA, she\'s right data does not lie. You stand where you are and try to put on a friendly smile for the stranger infront of you. Vos looks like they\'re studying you and their eyes turn completely black. \n\nVos: It\'s rude to reject someone\'s hospitality, but it sounds like your friend doesn\'t like me much." \n\nYou take a step back, there\'s no way anyone would be able to hear INDA in your ear, let alone from that far away. You glance to confirm your exit path, and your ears start to ring when you look back to see the alien replaced with something undescribable. The only thing you\'re able to register is a black smoke that appears to be swallowing everything around it as you run towards the path.',
        options: [
          {
              text: 'Continue running down the path',
              nextText: 5
            },
          
            {
              text: 'Run off the path into the trees',
              nextText: 6
            }
        ]
      },
  
      {
      
          id: 5,
          text: 'You continue running as fast as you can trying not to look behind you. It feels like you\'ve been running forever when you\'re suddenly grabbed by the arm and pulled into the woods. You struggle at first but freeze when you feel something sharp poking you in the back as you gasp for air. \n\nAssailant: "Shut up and listen, you have two options. Live by coming with me or Die by yourself.\"',
          options: [
              {
                  text: 'Fight back',
                  nextText: 5_0
                },
              
                {
                  text: 'Nod in agreement',
                  nextText: 5_1
                }
          ]
        },
        {
        id: 5_0,
      text: 'There\'s no way you can trust someone that\'s threatening you like this, you try to pull away as hard as you can and you fall foward as you\'re let go. You look up and see a figure of short stature, their face obscured by a cloth covering. They shake their head at you before dissapearing into the trees. You look around and walk cautiously in the direction of the path, realizing that it has seemingly dissapeared you start running in what you hope is the right direction. You ask INDA what the right direction is but she\'s gone silent, and you swear you\'ve seen the same tree 10 times. When you can\'t run any further you rest your back against a tree and slide down tears stinging your eyes. It\'s so quiet the only sound you can hear is your labored breaths. A buzzing noise suddenly begins to fill the silence, your heart sinks and you scramble to get onto your feet, you are only able to run a couple steps before you trip and fall. Only then you realize that the ground is covered in the black smoke you saw come from that...thing...before. You try at first but you\'re unable to get up, the buzzing filling your head with a weird sense of calm. You feel no fear as you hear your helmet crack, the smoke and poisonous atmosphere filling your lungs and the only thing you see is black. \nThe End\n',
      options: [
        {
          text: 'Restart',
          nextText: -1
        }
      ]
      },
      {
        id: 5_1,
        text: 'The sharp pain of the weapon against your path makes you nod quickly, and at this point what other option do you really have? The person loosens their grip slowly \n\nAssailant: "Hands behind your head and turn around slowly"\n \nYou follow the instructions and you finally are face to face with your attacker. They\'re shorter than you and they\'re wearing what was most likely a white space suit that has gone yellow with age, and covered in hastily done repairs. The glass of their helmet obscures their facial features, and you\'re straining to make out any clues to their identity before they grab your arm \n\nAssailant:"There\'s no time we have to go"\n \nYou let yourself get pulled along through twists and turns through the thick trees, until you reach a small clearing and you see the entrance of a cave in the distance. A rumbling noise erupts too close for comfort behind you, pushing you to run with the stranger into the cave. You head deep inside, thankful for the night vision of your suit as you stumble over loose rocks. After what feels like forever you\'re stopped at what appears to a door. The stranger knocks \n\nAssailant: "It\'s Olivia, let me in"\n \nYour assailant, who is apparently named Olivia, looks above the door and you notice the camera pointing at the two of you. You hear a click as the door is unlocked and slides open, you follow behind her and step into a small room space, the door hissing as it closes and locks back into place behind you. The small room reminds you of the entrance to the space station you lived on as a child, the grey metal stained brown with age and moisture from the cave. In front of the two of you is another door and as you wonder where that leads the sound of the chamber depressurizing fills the space. A clicking sound infront of you draws your eyes back to Olivia, and you realize as it\'s happening that she\'s removing her helmet and turing to you, revealing a middle aged human woman with mousy brown hair. You stare in shock, a human on a planet with no record of existing in the first place is impossible let alone with this level of technology. As if sensing your confusion she gives a small smile before turning back around and reaching for the door infront of her \n\nOlivia: "We have a lot to talk about."',
        options: [
         
          {
            text: 'TO BE CONTINUED',
            nextText: 7
          }
        ]
      },
      {
        id: 6,
        text: 'You veer off the path into the darkness of the trees, ignoring the tugging and scratches as you try to navigate the dense foliage. When you try to get a response from INDA for help she\'s silent, you\'re all on your own unable to see more than few feet ahead the sunlight unable to pierce through. The lack of wildlife should also surprise you, but you assume they are also running from whatever that thing is. You run and run until you stumble into an open field of blindingly bright orange flowers, and you blink in surprise as you see what appears to be someone in a spacesuit strinkingly similar to your own, holding a bouquet of the field flowers in their hands. A loud crashing noise behind you brings you back to reality.',
        options: [
          {
            text:'Approach the stranger',
            nextText:6_0
          },
    
          { text:'Run away',
            nextText:6_1
    
          }
        ]
      },
      {
        id: 6_1,
        text: 'There\'s no way of knowing who that stranger is and you don\'t have time to find out, so you slowly step backwards and slip back into the trees. You push through the endless trees until you finally see light peaking through the leaves ahead and you run towards it and you stumble out of the trees your hands going outward to soften your fall. You lift your head and see that you ended up back at the alien camp where you started. You panic and pick yourself up in a hurry and head back into the trees, making sure you head in the opposite direction of where you came from. But again you head towards the light and you\'re back where you began. Again and again you try to escape, wandering the dark woods only to find the only exit to be the same. After what feels like hundreds of tries you feel like it\s all pointless and walk towards the campsite, sitting down on the same stump the creature sat on before, until you feel a hand on your shoulder...\n\nTHE END.\n',
        options: [
          
            {
                text: 'Restart',
                nextText: -1
              }
          
        ]
      },
      {
        id: 6_0,
        text: 'You decide to slowly approach them, your hands up to show you mean no harm. As you get closer you realize they\'re much shorter than you probably less than 140cm tall. Suddenly they take a step back and appear to look behind you and then turn around and run towards the trees. They stop and look back at you and motion you to follow.',
        options: [
          {
            text: 'Follow them',
            nextText: 6_0_0
          },
    
          {
            text: 'Run away',
            nextText: 6_1
          }
         
        ]
      },
    {
      id: 6_0_0,
      text: 'You follow them into the trees, their ability to maneuver the dense foliage surprises you. It isn\'t long until you reach a small clearing that reveals the entrance to a cave. They head inside without slowing down, and you feel like trusting them is your ownly choice at this point and enter the cave as well. Stumbling into the darkness you struggle to keep up and realize you\'ve lost them. In a panic you head forward blindly, until suddenly something is pulled over your head and you feel someone much larger than yourself grab you. Struggling against them does nothing as you\'re dragged deeper into the cave, until you find yourself being tied up sitting on a chair. \n\nIt feels like forever until the cover is removed and you look up to see a tall bearded man crossing his arms looking down at you. Your eyes dart around, and realize you\'re in what looks like a space station lab from 20 years ago. Amidst your confusion as to how in the world not only a human exists on this undocumented planet, but that that they have an entire lab set up, the man pulls out what looks to be a gun and points it at you.\n  \n\nThe Man:"Who are you and why were you following my son?"\n \nYour attempt to answer is intterupted \n\nThe Son: "Dad, I told you I found them wondering outside, I\'m the one who got them to follow me what was I supposed to do leave them to die?"\n\n You nod your head quickly in agreement. The father looks to you for a second considering his child\s words, and slowly lowers the gun. \n\nThe Man:"Fine. You live for now, but the rest of the group will have to agree."\n \nAnd he leaves you there tied up, awaiting trial from an unknown jury...\n',
      options: [
        {
          text: 'TO BE CONTINUED',
          nextText: 7
        }
      ]
      },
      {
        id: 7,
        text: 'YOU HAVE REACHED THE END OF INDAGAVI PART 1 \n\nTHANK YOU FOR PLAYING KEEP ANY EYE OUT FOR THE NEXT PART TO CONTINUE YOUR JOURNEY\n',
    
        options: [
          {
            text: 'Restart',
            nextText: -1
          }
      ]
    }
  ]

  
  
startGame()