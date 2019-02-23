<template>
  <div class="container">
    
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-2" v-for="game in games" :key="game.id">
            <div class="resume-content mr-auto">
                <h2 class="mb-3">Games</h2>    
              </div>
          </div>
        </div>
    

      <Overthrone/>
      <GGJ19/>
      <Shape_Escape />
   
  </div>


</template>


<script>
import Overthrone from './Overthrone.vue'
import GGJ19 from './GGJ19.vue'
import Shape_Escape from './Shape_Escape.vue'
export default {
  components: {
    Overthrone,
    GGJ19,
    Shape_Escape,
  },
  data()
  {
    return{
      name: 'Game',
      games: [
            {
              title: 'Overthrone',
              subtitle: 'Team Capstone Project at UC Irvine',
              pitch: "A 2-4 player twin-stick battle royale with a ton of weapons and power-ups.",
              description: [
                {line:  'Overthrone is made in Unity. My role for this game was Gameplay Programmer, and I primarily worked on player movement, weapons, and audio. The role of Designer was shared between all team members. I helped conduct playtesting sessions, gather feedback, and balance the game '},
                {line: 'Players fight to be the last one standing for multiple rounds, gaining experience and levels as they fight. The player that reaches level 10 wins and is the new king. Dead players turn into ghosts and can throw bombs into the map to cause mayhem by breaking bits of the map.'},             
                {line: 'Mechanics: Twin-stick movement, aiming, and shooting are the basic mechanics. Additionally, there is dashing, dynamic map destruction, and a level system.'},
                {line: 'Dynamics: Shooting, dodging, picking up power-ups/weapons.'},
                {line: 'Aesthetics: Competition, Cartoonish , Chaotic.'},
                {line: 'Overthrone is trying to capture the mix of Accessibility and Competition that is present in local multiplayer games like Mario Kart and Super Smash Brothers. Gameplay should be simple enough for a newcomer to have a good time, but complex enough to reward skilled players.'},
                {line: 'Check in a while for some updates!'},
              ],
              video : 'https://www.youtube.com/embed/CLjk1oTeB-4',
            },
            /*
            {
              title: 'The Taste of Home',
              description : 'A Global Game Jam 2019 Project.',
              video : 'https://www.youtube.com/embed/lnyRaznc-tc',
            },
                    {
              title: 'Shape Escape',
              description : 'A simple sidescroller I made last year',
              video : 'https://www.youtube.com/embed/s6yK3V03ZqA',
            },
            */
          ],
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
*/
</style>
