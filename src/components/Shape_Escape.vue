<template>
  <div class="container">
    <div class="my-auto">
      <div class="resume-item d-flex flex-column flex-md-row mb-2">
        <div class="resume-content mr-auto small-center">
          <h3 class="mb-0">Shape Escape</h3>
          <h3>
            <small class="mb-3">Platformer</small>
          </h3>
          <img class="img-fluid mb-4" width="560" height="315" src="../assets/pShape_Escape.png" />
          <div class="mb-4 col-md-8">
            <p>This is one of first games I worked on. I worked on this for 2 weeks for a university project. It's a simple platformer with enemies, spikes, moving platforms. This game is quite difficult, in part because I had a hard time figuring out how to implement wall jumps. This led to some fun playtesting sessions.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: "https://www.youtube.com/embed/24PzQkq0EV0",
      name: "Shape Escape"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
