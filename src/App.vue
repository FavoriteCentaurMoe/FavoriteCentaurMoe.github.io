
<template>


<div>

    <!--
    <Header/>
    <div class="container-fluid">
      <div class = "container">
         <Intro/> 
         <Projects v-bind:projects="projects"/>
      </div>
    

    </div>
    -->
     <router-view />
  </div>
</template>

<script>

//import Overthrone from './components/Overthrone.vue'
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Projects from './components/Project.vue'

import OverthroneImage from './assets/Overthrone.png'
import ShapeEscapeImage from './assets/pShape_Escape.png'
import GGJImage from './assets/pGGJ19.png'

export default {
  components: {
    Header,
    Intro,
    Projects
  },
  data () {
    return {
      projects: [
        {
          title: 'Overthrone',
          subtitle: 'Capstone Project',
          description : 'A 2-4 player twin-stick battle royale with a ton of weapons and power-ups. Players battle each other across multiple rounds, gaining experience as they fight. Maps begin to shrink as the round progresses. ',
          image : OverthroneImage,
        },
        {
          title: 'The Taste of Home',
          description : 'Global Game Jam 2019 Project. A cooking themed shoot\'em up',
          image : OverthroneImage,
        },
                {
          title: 'Shape Escape',
          description : 'A simple sidescroller I made last year',
          image : OverthroneImage,
        },
      ],
    }
  },
   head: {
    title: { inner: 'Nikhil Sharma' },
    meta: [ { name: 'nikhil', content: 'Nikhil Sharma\'s portfolio website'  }, ],
    link: [ { rel: 'icon', href: '../static/player1.png'}, 
    ],
   },

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
}
</script>





<!-- These are the global stylesx-->

<style>

.list-social-icons a {
  color: #495057;
}
.list-social-icons a:hover {
  color: #9BD3FA;
}
.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}
.list-icons {
  font-size: 3rem;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
}
section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}
section.resume-section .resume-item .resume-date {
  min-width: none;
}
@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}
@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
.bg-primary {
  background-color: rgb(11, 12, 14) !important;
}


</style>