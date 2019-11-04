<template>
  <div class="container">
    
        <div class="my-auto small-center">
          <h2 class="mb-3">Games</h2>  
        </div>
    

      <Overthrone/>
      <hr>
      <GGJ19/>
      <hr>
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
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
