<template>
  <div class="container">
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="game in games" :key="game.id">
            <div class="resume-content mr-auto">
                <h2 class="mb-3">{{ game.title }}</h2> 
                <div class=" embed-responsive embed-responsive-16by9 mb-3">
                  <iframe  width="560" height="315" :src= "game.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mb-4" >
                  <p v-for="l in game.description" :key="l.id"> {{ l.line }}</p>
                </div>  
              </div>
          </div>
        </div>
  </div>


</template>

<script>
export default {
  data()
  {
    return{
      name: 'Game',
      games: [
            {
              title: 'Overthrone',
              pitch: "A 2-4 player twin-stick battle royale with a ton of weapons and power-ups.",
              description: [
                {line: '"Overthrown" is my Capstone Project at UC Irvine. It is currently in development and I\'ve been working on it with 5 others since September 2018.'},
                {line: 'Players fight to be the last man standing for multiple rounds, gaining experience and levels as they fight. The player that reaches level 10 wins and is the new king. Dead players will turn into ghosts and will be able to throw in bombs to cause mayhem by breaking bits of the map.'},             
                {line: 'The art aims to create a medieval fantasy world, built out of simple shapes and low-poly models. Bright colors that visually pop out at the player will be used to draw attention to the important elements of the game. Inspiration is drawn from Lovely Planet’s art direction and Monument Valley’s orthographic view.'},
                {line: 'Overthrone is trying to capture the mix of Accessibility and Competition that is present in local multiplayer games like Mario Kart and Super Smash Brothers. Gameplay should be simple enough for a newcomer to have a good time, but complex enough to reward skilled players.'},
                {line: 'A lot more shall be written'},
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
</style>
