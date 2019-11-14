<!-- Needs one div -->
<template>
  <div>
    <div class="my-auto mb-3 small-center">
      <h1 class="mb-2">
        {{ name }}
        <span class="text-primary">{{ surname }}</span>
      </h1>
      <div class="subheading mb-2">
        {{ address }}
        <a href="mailto:nik41507@gmail.com" style="color:rgb(59, 95, 121)">{{ email }}</a>
      </div>
      <p class="mb-2">{{ aboutMe }}</p>
      <ul class="list-inline list-social-icons mb-0">
        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/nikhil-sharma-a79a1796">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="https://github.com/FavoriteCentaurMoe">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nikhil",
      surname: "Sharma",
      address: "Irvine, CA · (925) 660-9265 ·",
      email: "nik41507@gmail.com",
      aboutMe: "I'm a game developer and software engineer. Here is a collection of the game I have worked on. Overthrone is the coolest one and it won 1st place at the IEEE GameSIG Computer Game Showcase."
    };
  }
};
</script>


<style scoped>
</style>
