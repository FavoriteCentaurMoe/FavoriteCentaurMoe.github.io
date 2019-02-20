
<template>

  <div class="container">
    <div class="my-auto mb-3">
          <h1 class="mb-2">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-2">{{ address }}
            <a href="mailto:nik41507@gmail.com">{{ email }}</a>
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
        <div class="my-auto">
            <h2 class="mb-2">Projects</h2>
            

      <!-- Project One -->
      <div class="row">
        <div class="col-md-6">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="./OverthroneGIF.gif" alt="">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Overthrone <br/> <small>Capstone Project</small></h3>      
          <p>A 2-4 player twin-stick battle royale with a ton of weapons and power-ups</p>
          <router-link to="/overthrone">
            <a class="btn btn-primary" href="#">View Project</a>
          </router-link>
        </div>
      </div>
      <!-- /.row -->

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

export default {
  data () {
    return {
      name: 'Nikhil',
      surname: 'Sharma',
      address: '110 Berkeley Avenue · Irvine, CA 92612 · (925) 660-9265 ·',
      email: 'nik41507@gmail.com',
      aboutMe: 'I\'m a Computer Game Science student studying at UC Irvine.',

    }
  }
}
</script>