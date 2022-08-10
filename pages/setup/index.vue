<template>
  <LayoutMain>
    <GameSetup @settings-next="next" />
  </LayoutMain>
</template>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";
import GameSetup from "~~/components/GameSetup.vue";
import { GameSettings } from "~/logic/GameSettings";

function next(settings: GameSettings) {} // Navigate to /createPlayers

export default {
  name: "setup",
  components: {
    LayoutMain,
    GameSetup,
  },
  methods: {
    next(settings: GameSettings) {
      // Navigate to /createPlayers
      console.log("ready to navigate to createrPlayers");
      console.log("PlayerCount:" + settings.PlayerCount);
    },
  },
};
</script>

<style lang="scss">
</style>