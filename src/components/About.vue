
<template>
  <div>
    <div class="container">
      <Intro />   
      <Projects v-bind:projects="projects" />
    </div>
  </div>
</template>

<script>
//import Overthrone from './components/Overthrone.vue'
import Intro from "./Intro.vue";
import Projects from "./Project.vue";

import OverthroneImage from "../assets/Overthrone.png";
import ShapeEscapeImage from "../assets/pShape_Escape.png";
import GGJImage from "../assets/pGGJ19.png";
import StartFromNotingImage from "../assets/Space.gif"
import EndlessMotionImage from "../assets/EndlessMotion.gif"

import Game from './Game'

export default {
  components: {
    Intro,
    Game,
    Projects
  },
  data() {
    return {
      projects: [
        {
          title: "Overthrone",
          subtitle: "Capstone Project",
          description:
            "A local multiplayer twin-stick battle royale with a ton of weapons and power-ups. Players battle each other in an arena across multiple rounds, king of the hill style. I was a Gameplay Programmer for this game.",
          image: OverthroneImage,
          destination: "/Overthrone"
        },
        {
          title: "Start From Nothing",
          description:
            "A space shooter about mining and collecting scrap from asteroids",
          image: StartFromNotingImage,
          link: "https://github.com/FavoriteCentaurMoe/Start-With-Nothing",
          linkDest:"Check it out on Github!"
    
        },
        {
          title: "Endless Motion",
          description:
            "A platformer made for the game jam theme 'Only One'. This game has only one shape and the player moves at a fixed speed. ",
          image: EndlessMotionImage,
          link: "https://favoritecentaurmoe.itch.io/endless-motion",
          linkDest:"Check it out on Itch.io!",
    
        },
        {
          title: "The Taste of Home",
          description:
            "A game made during the Global Game Jam 2019 Project. The theme was 'What does home mean to you?' so our team created a cooking themed shoot'em up ",
          image: GGJImage,
          destination: "/GGJ19"
        },
      ]
    };
  },
  head: {
    title: { inner: "Nikhil Sharma" },
    meta: [{ name: "nikhil", content: "Nikhil Sharma's portfolio website" }],
    link: [{ rel: "icon", href: "../static/player1.png" }]
  }
};
</script>