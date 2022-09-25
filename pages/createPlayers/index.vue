<template>
  <LayoutMain>
    <CreatePlayer @create-player="createPlayer" />

    <!--Lav knap til at starte game her med playersArray som param-->
  </LayoutMain>
</template>

<script lang="ts">
import LayoutMain from "~~/components/layouts/LayoutMain.vue";
import CreatePlayer from "~~/components/CreatePlayer.vue";
import { Player } from "~/logic/Player";

export default {
  name: "createPlayers",
  components: {
    LayoutMain,
    CreatePlayer,
  },
  data() {
    return {
      playersArray: [],
    };
  },
  methods: {
    createPlayer(player: Player) {
      this.playersArray.push(player);
    },
  },
};
</script>

<style lang="scss">
h3 {
  @apply text-green-1100 text-center font-bold text-lg;
}

h2 {
  @apply text-white text-center font-bold text-2xl;
}

.select {
  color: black;
}
</style>
