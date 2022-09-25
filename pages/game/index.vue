<template>
  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">
    BATTLE ARENA
  </h1>

  <div id="playersDiv" class="flex flex-wrap text-white justify-center mt-4">
    <PlayerTemplate
      playerColor="#ED5252"
      playerClass="mage"
      playerName="MR. JETSET"
    />
  </div>

  <div class="flex flex-wrap justify-center">
    <button class="btn btn-yellow-ability">STUN</button>
    <button class="btn btn-yellow-ability">CD</button>
    <button class="btn btn-yellow-ability">NEXT</button>
  </div>
</template>

<script lang="ts">
import PlayerTemplate from "~~/componenets/PlayerTemplate.vue";
import { Player } from "~/logic/Player";

export default {
  name: "game",
  components: {
    //PlayerTemplate,
  },
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    this.players = JSON.parse(localStorage.getItem("players")) as Player[];

    this.players.forEach((player: Player) => {
      var playerTemplateHtml =
        '<PlayerTemplate playerColor="' +
        //player.ColorHex() +
        "#ED5252" +
        '" playerClass="' +
        player.Class.Name +
        '" playerName="' +
        player.Name +
        '"/>';

      document.getElementById("playersDiv").innerHTML += playerTemplateHtml;
    });
  },
};
</script>


<style lang="scss">
.containerPadding {
  @apply p-7;
}
</style>
