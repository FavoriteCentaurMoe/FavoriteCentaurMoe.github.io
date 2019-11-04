
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
    <Header />
    <div class="container fluid">
      <router-view />
    </div>
  </div>
</template>


<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
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





<!-- These are the global stylesx-->

<style>
.list-social-icons a {
  color: #495057;
}
.list-social-icons a:hover {
  color: #9bd3fa;
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