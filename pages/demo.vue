<template>
  <div class="my-container">
    <vue-element-loading  spinner="bar-fade-scale" color="#1877f2" :active="isActive" :is-full-screen="true"/>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isActive:true
    }
  }
};
</script>

<style>

</style>