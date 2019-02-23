<template>
  <div class="container">
        <div class="my-auto">
          <div class="resume-item d-flex flex-column flex-md-row mb-2">
            <div class="resume-content mr-auto">
                <h3 class="mb-0">Shape Escape</h3> 
                <h3><small class="mb-3">One of my first games</small></h3>
                <div class=" embed-responsive embed-responsive-16by9 mb-3 col-md-8">
                  <iframe  width="560" height="315" :src= "video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mb-4 col-md-8" >
                  <p> This is one of first "complete" games I worked on. It's a simple platformer with enemies, spikes, moving platforms. The wall jumping was never implemented properly, which makes the game quite difficult in certain sections. </p>
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
      video : 'https://www.youtube.com/embed/24PzQkq0EV0',
      name: 'Shape Escape',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
