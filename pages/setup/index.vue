<template>
  <LayoutMain>
    <GameSetup @settings-next="next" />
  </LayoutMain>
</template>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";
import GameSetup from "~~/components/GameSetup.vue";
import { GameSettings } from "~/logic/GameSettings";

export default {
  name: "setup",
  components: {
    LayoutMain,
    GameSetup,
  },
  methods: {
    next(settings: GameSettings) {
      localStorage.setItem("gameSettings", JSON.stringify(settings));
      this.$router.push("createPlayers");
    },
  },
};
</script>

<style lang="scss">
</style>