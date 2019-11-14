<!-- Needs one div -->
<template>

<div>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark mb-4">
      <div class="container d-flex flex-column flex-md-row justify-content-between">

        <div class="text-right">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/" class="">
                <a class="nav-link navbar-brand" href="#" >Home <span class="sr-only">(current)</span></a> 
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Games" class="rLink"> 
                <a class="nav-link navbar-brand" href="#">Games</a> 
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>

</template>

<script>
export default {
}
</script>


<style scoped>

</style>
