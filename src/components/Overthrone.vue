<template>
  <div class="container">
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
                <h3 class="mb-0">Overthrone </h3> 
                <h3><small class="mb-3">Team Capstone Project at UC Irvine</small></h3>
                <div class=" embed-responsive embed-responsive-16by9 mb-3 col-md-8">
                  <iframe  width="560" height="315" :src= "video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mb-4 col-md-8" >
                  <p><b>Description</b>: Players fight to be the last one standing for multiple rounds, gaining experience and levels as they fight. The player that reaches level 10 wins and is the new king. Dead players turn into ghosts and can throw bombs into the map to cause mayhem by breaking bits of the map.</p>
                  <p><b>My role</b>: Gameplay Programmer/Designer. I primarily worked on player movement, weapons, audio, and a few shaders. The role of Designer was shared between all team members. I helped conduct playtesting sessions, gather feedback, and balance the game </p>
                  <p><b>Mechanics</b>: Twin-stick movement, aiming, and shooting are the basic mechanics. Additionally, there is dashing, dynamic map destruction, and a level system. </p>
                  <p><b>Dynamics</b>: Shooting, dodging, picking up power-ups/weapons. </p>
                  <p><b>Aesthetics</b>: Competition, Cartoonish , Chaotic. </p>
                  <p><i>Overthrone</i> is trying to capture the mix of Accessibility and Competition that is present in local multiplayer games like Mario Kart and Super Smash Brothers. Gameplay should be simple enough for a newcomer to have a good time, but complex enough to reward skilled players. </p>
                  <p> <a href="https://favoritecentaurmoe.itch.io/overthrone"> Check it out here! </a> </p>
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
      video : 'https://www.youtube.com/embed/CLjk1oTeB-4',
      name: 'Overthrone',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
