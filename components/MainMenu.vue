<template>
  <div class="menu">
    <div class="link">
      <NuxtLink to="selectPlayers" class="btn btn-yellow">create game</NuxtLink>
    </div>
    <div class="link">
      <NuxtLink to="join" class="btn btn-yellow">join game</NuxtLink>
    </div>
    <div class="link">
      <NuxtLink to="rules" class="btn btn-yellow">rules</NuxtLink>
    </div>
    <div class="link">
      <NuxtLink to="about" class="btn btn-yellow">about</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style lang="scss">
.menu {
  div {
    @apply flex justify-center;
  }

  .link {
    @apply mb-6;
  }

  .btn-yellow {
    text-transform: uppercase;
  }
}
</style>