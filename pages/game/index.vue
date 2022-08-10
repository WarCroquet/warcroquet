<template>
  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">
    BATTLE ARENA
  </h1>

  <div class="flex flex-wrap text-white justify-center mt-4">
    <!-- <PlayerTemplate
      playerColor="ED5252"
      playerClass="mage"
      playerName="MR. JETSET"
    />
    <PlayerTemplate playerColor="ED9C52" playerClass="hunter" playerName="TT" />
    <PlayerTemplate
      playerColor="52ED6B"
      playerClass="shaman"
      playerName="PLAYER 4"
    />
    <PlayerTemplate
      playerColor="52ED6B"
      playerClass="shaman"
      playerName="PLAYER 4z"
    /> -->
  </div>

  <div class="flex flex-wrap justify-center">
    <button class="btn btn-yellow-ability">STUN</button>
    <button class="btn btn-yellow-ability">CD</button>
    <button class="btn btn-yellow-ability">NEXT</button>
  </div>
</template>

<script>
// import PlayerTemplate from "~~/componenets/PlayerTemplate.vue";

export default {
  name: "game",
  components: {
    // PlayerTemplate,
  },
};
</script>


<style lang="scss">
.containerPadding {
  @apply p-7;
}
</style>
