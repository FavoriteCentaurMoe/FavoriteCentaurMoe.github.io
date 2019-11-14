<template>
  <div class="container">
    <div class="my-auto">
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto small-center">
          <h3 class="mb-0">Cyber City Rampage</h3>
          <h3>
            <small class="mb-3">2D Hack and Slash</small>
          </h3>
          <div class="embed-responsive embed-responsive-16by9 mb-3 col-md-8">
            <iframe
              width="560"
              height="315"
              :src="video"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="mb-4 col-md-8">
            <p>
              <b>Description</b>: This is a 2-4 player hack and slash game. Players can pick one of 4 classes and and fight the robot menance that has taken over the city. Each class had 4 unique moves.
            </p>
            <p> I worked on the special moves of each character as well as the boss fight. </p>
            <p> <b>Credits</b>: Christophe Saucier, Marlon Valladares, Nikhil Sharma, and Jared Chun. We made this game for a university project and we definetly overscoped hard. </p>
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
      video: "https://www.youtube.com/embed/lFF1Pt_rzZk",
      name: "Overthrone"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
