<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">NUMBER OF PLAYERS</h2>

    <template #footer>
      <div class="link">
        <NuxtLink to="game" class="btn btn-yellow">JOIN GAME</NuxtLink>
        <p>Message is: {{ message }}</p>
	      <input v-model="message" placeholder="edit me" />
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '~/componenets/layouts/LayoutMain'
import {someLogic} from '~/logic/main'

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
</style>
