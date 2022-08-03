<template>

  <h1 class="text-white font-bold text-center mt-5 mb-5 text-xl">BATTLE ARENA</h1>


  <div class="flex flex-wrap text-white justify-center mt-4">

    <div class="containerPaddingComponent">
      <div :id="playerName + '-playercolor-ring'" class="relative w-28 h-28 rounded-full -z-10 shadow-warCircle"
        :style="{ backgroundColor: '#' + playerColor }">

        <div :id="playerName + '-class-container'"
          class="absolute top-50% right-50% mt-4 ml-4 w-20 h-20 rounded-full shadow-warCircle bg-black-500">
          <img :id="playerName + '-class-img'" :src="'~/assets/icon-' + playerClass + '.png'" alt="class logo icon"
            class="rounded-full shadow-warCircle" />

          <span :id="playerName + '-stun-span'"
            class="absolute h-9 w-9 rounded-full bg-iconGrey bottom-16 right-12 shadow-warCircle">
            <img :id="playerName + '-stun-img'" src="~/assets/stun-icon.png" alt="class logo icon"
              class="rounded-full w-6 h-6 mx-auto my-2" />
          </span>

          <span :id="playerName + '-ability-span'"
            class="absolute h-9 w-9 rounded-full bg-iconGrey bottom-5 right-[4.5rem] shadow-warCircle">
            <img :id="playerName + '-ability-img'" src="~/assets/ability-icon.png" alt="class logo icon"
              class="rounded-full p-2" />
          </span>
        </div>
      </div>
      <p :id="playerName + '-name-paragraph'" class="font-bold text-xl text-center mt-3 mb-1 text-white">{{ playerName
      }}</p>
      <p :id="playerName + '-class-parapraph'" class="font-bold text-sm text-center mb-2 text-green-1100"
        style="text-transform: uppercase;">{{ playerClass }}</p>
    </div>

    <playerTemplate playerColor="ED5252" playerClass="mage" playerName="MR. JETSET" />
    <playerTemplate playerColor="ED9C52" playerClass="hunter" playerName="TT" />
    <playerTemplate playerColor="52ED6B" playerClass="shaman" playerName="PLAYER 4" />
    <playerTemplate playerColor="52ED6B" playerClass="shaman" playerName="PLAYER 4z" />



  </div>

  <div class="flex flex-wrap justify-center">
    <button class="btn btn-yellow-ability">STUN</button>
    <button class="btn btn-yellow-ability">CD</button>
    <button class="btn btn-yellow-ability">NEXT</button>
  </div>



</template>

<script setup lang="ts">
import PlayerTemplate from '~/componenets/layouts/playerTemplate.vue';
</script>


<style lang="scss">
.containerPadding {
  @apply p-7;
}
</style>
