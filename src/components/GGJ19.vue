<template>
  <div class="container">
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-2">
            <div class="resume-content mr-auto small-center">
                <h3 class="mb-0">The Taste of Home </h3> 
                <h3><small class="mb-3">Global Game Jam 2019 Project</small></h3>
                <div class=" embed-responsive embed-responsive-16by9 mb-3 col-md-8">
                  <iframe  width="560" height="315" :src= "video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mb-4 col-md-8" >
                  <p> The theme of this Game Jam was <i>"What does home mean to you?"</i>.<p>
                  <p> My team and I wanted to make a game about cooking food for a family. The idea was to have cooking themed mini-games with a story section that was affected by the player's performance in the minigaems. I worked on a shoot'em up minigame that would be "shooting" ingredients to chop them for cooking. The story section was suppsed to take</p>
                  <p> Unfortunaely there wasn't enough time to make a story and multiple min-games. We managed to finish the shoot'em up and I was happy with that.  
                  <p><b>My role</b>: I worked on the kitchen shoot'em up, and coordinating the team.</p>
                  <p><a href="https://globalgamejam.org/2019/games/taste-home-1"> Link to the Global Game Jam page </a> </p>
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
      video : 'https://www.youtube.com/embed/lnyRaznc-tc',
      name: 'The Taste of Home',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
