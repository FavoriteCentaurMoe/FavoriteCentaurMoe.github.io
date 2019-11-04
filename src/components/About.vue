
<template>

  <div class="container">
    <div class="my-auto mb-3 small-center">
          <h1 class="mb-2">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-2">{{ address }}
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
  
      <section class=" pt-3 pt-lg-5" id="experience">
        <div class="my-auto small-center">
            <h2 class="mb-2">Projects</h2>
            

      <!-- Overthrone -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/Overthrone.png" alt="">
          </a>
        </div>
        <div class="col-md-5 small-center">
          <h3>Overthrone <br/> <small>Capstone Project</small></h3>      
          <p>A local multiplayer battle royale where players battle in an arena littered with weapons and powerups to.</p>
          <router-link to="/Overthrone">
            <a class="btn btn-primary" href="#">View Project</a>
          </router-link>
        </div>
      </div>
      <!-- /.row -->

      <hr>
      
      <!-- GGJ19 -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/pGGJ19.png" alt="">
          </a>
        </div>
        <div class="col-md-5 small-center " >
          <h3>The Taste of Home <br/> <small>Global Game Jam 2019</small></h3>      
          <p>A cooking themed shoot'em.</p>
          <router-link to="/GGJ19" >
            <a class="btn btn-primary " href="#">View Project</a>
          </router-link>
        </div>
      </div>

      <hr>

      <!-- Shape Escape -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../assets/pShape_Escape.png" alt="">
          </a>
        </div>
        <div class="col-md-5 small-center " >
          <h3>Shape Escape <br/> <small></small></h3>      
          <p>A simple platformer.</p>
          <router-link to="/Shape_Escape" >
            <a class="btn btn-primary " href="#">View Project</a>
          </router-link>
        </div>
      </div>

      <hr>

      <!-- Project Two 
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Project Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <a class="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
      <hr>
      -->
      <!-- /.row -->

      


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
      </section>
  </div>

  
</template>

<script>
/*
import Header from './components/Header.vue'
import Intro from './components/Intro.vue'
import Projects from './components/Project.vue'

import OverthroneImage from './assets/Overthrone.png'
import GGJ19Image from './assets/pGGJ19.png'
import ShapeEscapeImage from './assets/pShape_Escape.png'
*/

export default {
  data () {
    return {
      name: 'Nikhil',
      surname: 'Sharma',
      address: 'Irvine, CA · (925) 660-9265 ·',
      email: 'nik41507@gmail.com',
      aboutMe: 'I\'m a game developer and software engineer',

    }
  }
}
</script>