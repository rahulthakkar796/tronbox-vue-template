<template>
  <div class="home" style="margin-top:2%">
    <img height="200px" alt="Vue logo" src="../assets/logo.png">
    <HomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "home",
  components: {
    HomePage
  }
};
</script>
