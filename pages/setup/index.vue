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
      if (settings.PlayerCount < 1) {
        alert("Select number of players");
        return;
      }

      this.$router.push("createPlayers");
    },
  },
};
</script>

<style lang="scss">
</style>