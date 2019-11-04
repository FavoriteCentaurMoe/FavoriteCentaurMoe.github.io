<!-- Needs one div -->
<template>

<div>
    <h1> {{name}}   </h1>
    <p> {{msg}} </p>
</div>

</template>

<script>
export default {
      name: 'Heyyyy',
      props: {
          msg : String
      }
}
</script>


<style scoped>

</style>
