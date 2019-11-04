<!-- Needs one div -->
<template>
  <div>
    <section class="pt-3 pt-lg-5" id="experience">
      <div class="my-auto small-center">
        <h2 class="mb-2">Projects</h2>
        <div v-bind:key="project.title" v-for="project in projects">
          <div class="row">
            <div class="col-md-6">
              <a href="#">
                 <img class="img-fluid rounded mb-3 mb-md-0"  v-bind:src="project.image" alt />
              </a>
            </div>
            <div class="col-md-5 small-center">
              <h3>
                {{project.title}}
                <br />
                <small> {{project.subtitle}}</small>
              </h3>
              <p> {{project.description}}</p>
              <router-link :to="project.destination">
                <a class="btn btn-primary" href="#">View Project</a>
              </router-link>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  </div>

  <!--
  <div class="row">
    <div class="col-md-6">
      <a href="#">
        <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/Overthrone.png" alt />
      </a>
    </div>
    <div class="col-md-5 small-center">
      <h3>
        Overthrone
        <br />
        <small>Capstone Project</small>
      </h3>
      <p>A local multiplayer battle royale where players battle in an arena littered with weapons and powerups to.</p>
      <router-link to="/Overthrone">
        <a class="btn btn-primary" href="#">View Project</a>
      </router-link>
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: "Projects",
  props: ["projects"]
};
</script>


<style scoped>
</style>
