<template>
  <div class="container">
    
        <div class="my-auto small-center">
          <h2 class="mb-3">Games</h2>  
        </div>
    

      <Overthrone/>
      <hr>
      <Space/>
      <hr>
      <Endless_Motion/>
      <hr>
      <GGJ19/>
      <hr>
      <Cyber_City/>
      <hr>
      <Chomp/>
      <hr>
      <Shape_Escape/>
   
  </div>


</template>


<script>
import Overthrone from './Overthrone.vue'
import GGJ19 from './GGJ19.vue'
import Shape_Escape from './Shape_Escape.vue'
import Endless_Motion from './Endless_Motion'
import Cyber_City from './Cyber_City_Rampge'
import Tower from './TowerDefence'
import Space from './SpaceGame'
import Chomp from './Chomp_Champs'
export default {
  components: {
    Overthrone,
    GGJ19,
    Shape_Escape,
    Endless_Motion,
    Cyber_City,
    Tower,
    Space,
    Chomp
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
