<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">Player 1 of {{ numberOfPlayers }}</h2>

    <p>Class:</p>
    <select class="select">
      <option disabled selected>Select class</option>
      <option>Druid</option>
      <option>Death Knight</option>
      <option>Hunter</option>
      <option>Mage</option>
      <option>Paladin</option>
      <option>Priest</option>
      <option>Rogue</option>
      <option>Shaman</option>
      <option>Warlock</option>
      <option>Warrior</option>
    </select><br /><br />

    <p>Player name:</p>
    <input style="color:black"><br /><br />

    <p>Color:</p>
    <select class="select">
      <option disabled selected value="">Select color</option>
      <option>Red</option>
      <option>Yellow</option>
      <option>Green</option>
      <option>Black</option>
    </select><br /><br />

    <template #footer>
      <div class="link">
        <NuxtLink to="game" class="btn btn-yellow">CREATE PLAYER</NuxtLink>
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '~/componenets/layouts/LayoutMain'
import { someLogic } from '~/logic/main'
import { ref } from 'vue'

const params = (new URL(document.location)).searchParams;

const numberOfPlayers = ref(params.get('numberOfPlayers'))


const someFunc = async () => {
  console.log(await someLogic())
}
</script>'

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
