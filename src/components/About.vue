
<template>
  <div>
    <div class="container">
      <Intro />
      <Projects v-bind:projects="projects" />

      <!-- Pagination 
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
      -->
    </div>
  </div>
</template>

<script>
//import Overthrone from './components/Overthrone.vue'
import Intro from "./Intro.vue";
import Projects from "./Project.vue";

import OverthroneImage from "../assets/Overthrone.png";
import ShapeEscapeImage from "../assets/pShape_Escape.png";
import GGJImage from "../assets/pGGJ19.png";

export default {
  components: {
    Intro,
    Projects
  },
  data() {
    return {
      projects: [
        {
          title: "Overthrone",
          subtitle: "Capstone Project",
          description:
            "A local multiplayer twin-stick battle royale with a ton of weapons and power-ups. Players battle each other in an arena across multiple rounds, king of the hill style. ",
          image: OverthroneImage,
          destination: "/Overthrone"
        },
        {
          title: "The Taste of Home",
          description:
            "Global Game Jam 2019 Project. A cooking themed shoot'em up",
          image: GGJImage,
          destination: "/GGJ19"
        },
        {
          title: "Shape Escape",
          description: "A platformer about an alien trying to find its way home",
          image: ShapeEscapeImage,
          destination: "/Shape_Escape"
        }
      ]
    };
  },
  head: {
    title: { inner: "Nikhil Sharma" },
    meta: [{ name: "nikhil", content: "Nikhil Sharma's portfolio website" }],
    link: [{ rel: "icon", href: "../static/player1.png" }]
  }

  /*
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
  */
};
</script>