<template>
  <div class="container">
    <div class="my-auto">
      <div class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto small-center">
          <h3 class="mb-0">Overthrone</h3>
          <h3>
            <small class="mb-3">Team Capstone Project at UC Irvine</small>
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
              <b>Description</b>: Overthrone is a local multiplayer battle royale where 2-4 players battle each other with a plethora of weapons and powerups. After some time the map will behin to crumble, shrinking the battlefield and forcing enocunters to occur. When a player dies, they come back as a "Ghost" and float along the sides of the map. They can throw in bombs that destroy pieces of the map, addiing to the chaos
            </p>
            <p>Overthrone was the winner of the 2019 IEEE GameSIG Computer Game Showcase!</p>
            <p>
              <b>My role</b>: Gameplay Developer/Designer
            </p>
            <ul>
              <li>Implemented gameplay mechanics such as player movement, weapons, and powerups</li>
              <li>Led the design and development of the ghost player</li>
              <li>Led playtesting sessions and collaborated with the team to incorporate feedback</li>
              <li>Used OOD and scriptable objects to develop the game architecture and combat systems</li>
              <li>Created shaders to indicate projectile path and improve UI</li>
            </ul>
            <p>
              <a href="https://stealthbomb.itch.io/overthrone">Check it out on Itch.io!</a>
            </p>
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
      video: "https://www.youtube.com/embed/6Ws8yVSCvD8",
      name: "Overthrone"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
