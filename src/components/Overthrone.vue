<template>
  <div class="container">
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto small-center">
                <h3 class="mb-0">Overthrone </h3> 
                <h3><small class="mb-3">Team Capstone Project at UC Irvine</small></h3>
                <div class=" embed-responsive embed-responsive-16by9 mb-3 col-md-8">
                  <iframe  width="560" height="315" :src= "video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mb-4 col-md-8" >
                  <p><b>Description</b>: Overthrone is a 2-4 player twin-stick arena fighter. Grab weapons and power-ups that are scattered around the arena to give yourself an edge in this frantic competition for the crown. If you fall in combat, fear not; take revenge as a ghost by destroying the ground underneath your killer and plummeting them to their doom!  In the end, only one can emerge victoriously and claim the crown. Will you triumph? Or will you be… OVERTHRONE?!</p>
                <p><b>My role</b>: Gameplay Developer/Designer</p>
                <ul>
                    <li>I worked on movement and combat. Specifically, I worked a lot on "Ghost Mode". When a player dies they spawn on the sideo f the map as a ghost and can throw bombs into the map to break up bits of it.</li>
                    <li>Additionally, I created simple shaders (the ghost's aiming line), particle effects (the bow's charge), and some simple 3d models (the ghost's bomb, the arrow)</li>
                </ul>    
                <p> <a href="https://stealthbomb.itch.io/overthrone"> Check it out on Itch.io! </a> </p>
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
      video : 'https://www.youtube.com/embed/YF0tfTCPq6M',
      name: 'Overthrone',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
