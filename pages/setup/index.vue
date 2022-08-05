<template>
  <LayoutMain>
    <GameSetup :GameSettings="gameSettings" />

    <div class="link">
      <NuxtLink
        :to="{ name: 'createPlayers', query: { gameSettings } }"
        class="btn btn-yellow"
        >next</NuxtLink
      >
    </div>
  </LayoutMain>
</template>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";
import GameSetup from "~~/components/GameSetup.vue";

export default {
  name: "about",
  components: {
    LayoutMain,
    GameSetup,
  },
};
</script>

<style lang="scss">
</style>
