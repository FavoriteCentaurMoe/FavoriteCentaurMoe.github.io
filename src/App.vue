<template>


<div>
  
  
    <div class="container">

    <nav id="newNav" class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 navbar-fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="">
              <a class="nav-link navbar-brand" href="#" >Home <span class="sr-only">(current)</span></a> 
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/game" class="rLink"> 
              <a class="nav-link" href="#">Overthrone</a> 
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

     <router-view />

      <!--
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h3 class="mb-5">Games</h3>
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="game in games" :key="game.id">
            <div class="resume-content mr-auto">
                <h4 class="mb-0">{{ game.title }}</h4>
                <div class="subheading mb-3"></div>
                <div class="mb-4">{{ game.description }}</div>      
                <div class=" col-md-8  mb-3">
                  <iframe  width="560" height="315" :src= "game.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
          </div>
        </div>
      </section>
      -->

    <!--
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">

          <h3 class="mb-4">Education</h3>
          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h4 class="mb-0">University of California Irvine</h4>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Computer Game Science</div>
              <p>GPA: 3.0</p> 
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2015 - June 2019</span>
            </div>
          </div>

          <h3 class="mb-4">Experience</h3>
          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.id">
            <div class="resume-content mr-auto">
              <h4 class="mb-0">{{ job.position }}</h4>
              <div class="subheading mb-3">{{ job.company }}</div>
              <ul> 
                <li v-for="p in job.points" :key="p.id">
                    {{p.point}}
                </li> 
              </ul>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>
      -->
        



    </div>
  </div>
</template>

<script>

import Game from './components/Game.vue'
export default {
  components: {
    Game
  },
  data () {
    return {
      title: 'My portfolio',
      experience: [
        {
          position: 'Student Web Developer',
          company: 'UCI Procurement Services',
          points :[ 
            { point : 'Built webpages and templates in a CMS'},
            { point : 'Redesigned website layout to improve site navigation, aesthetics, and responsiveness.'},
          ]  ,
          startDate: 'May 2018',
          endDate: 'Present'
        },
        {
          position: 'Programming Projects',
          points :[ 
            { point : 'Developed a Python web scraper that searches for and downloads manga'},
            { point : 'Created a simple file system in C++ that can create/destroy files and write data into them'},
            { point : 'Designed a database in MySQL that stores sensor information from a college campus'},
            { point : 'Designed, prototyped and developed several games made in Unity with C#'},   
          ]  ,
        },
      ],
      games: [
        {
          title: 'Overthrone',
          description : 'A 2-4 player twin-stick battle royale with a ton of weapons and power-ups. Players battle each other across multiple rounds, gaining experience as they fight. Maps begin to shrink as the round progresses. ',
          video : 'https://www.youtube.com/embed/CLjk1oTeB-4',
        },
        {
          title: 'The Taste of Home',
          description : 'A Global Game Jam 2019 Project.',
          video : 'https://www.youtube.com/embed/lnyRaznc-tc',
        },
                {
          title: 'Shape Escape',
          description : 'A simple sidescroller I made last year',
          video : 'https://www.youtube.com/embed/s6yK3V03ZqA',
        },
      ],
    }
  },
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
}
</script>

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
  background-color: #9BD3FA !important;
}

.text-primary {
  color: #9BD3FA !important;
}
a {
  color: #9BD3FA;
}
a:hover, a:focus, a:active {
  color: rgb(38, 103, 150);
}
</style>