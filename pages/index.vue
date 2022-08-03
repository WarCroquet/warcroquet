<template>
  <div class="menu flex flex-col">
    <div class="logo">
      <img src="~/assets/warcrocket_full.png" class="w-52 mt-10 mb-20">
    </div>
    
      <div class="link">
        <NuxtLink to="createGame" class="btn btn-yellow">CREATE GAME</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink to="joinGame" class="btn btn-yellow">JOIN GAME</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink to="rules" class="btn btn-yellow">RULES</NuxtLink>
      </div>
      <div class="link">
        <NuxtLink to="about" class="btn btn-yellow">ABOUT</NuxtLink>
      </div>
  </div>
</template>

<script lang="ts">

</script>

<style lang="scss">
  .menu {
    div {
      @apply flex justify-center;
    }
    .link {
      @apply mb-6;
    }
  }
</style>
