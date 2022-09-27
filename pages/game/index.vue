<template>
  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">
    BATTLE ARENA
  </h1>

  <div class="flex flex-wrap text-white justify-center mt-4">
    <PlayerTemplate
      v-for="player in this.players"
      :key="player"
      :playerColor="player.ColorHex"
      :playerClass="player.Class.Name"
      :playerName="player.Name"
    />
  </div>

  <div class="flex flex-wrap justify-center">
    <button class="btn btn-yellow-ability">STUN</button>
    <button class="btn btn-yellow-ability">CD</button>
    <button class="btn btn-yellow-ability">NEXT</button>
  </div>
</template>

<script lang="ts">
import PlayerTemplate from "~~/components/PlayerTemplate.vue";
import { Player } from "~/logic/Player";

export default {
  name: "game",
  components: {
    PlayerTemplate,
  },
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    this.players = JSON.parse(localStorage.getItem("players")) as Player[];
  },
};
</script>


<style lang="scss">
.containerPadding {
  @apply p-7;
}
</style>
