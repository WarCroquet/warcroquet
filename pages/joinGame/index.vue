<template>
  <LayoutMain>
    <h3>NEW GAME</h3>
    <h2 @click="someFunc">NUMBER OF PLAYERS</h2>

    <NuxtLink to="game" class="btn btn-yellow">JOIN GAME</NuxtLink>
    <p>Message is: {{ message }}</p>
    <input v-model.string="message" placeholder="edit me" />
    <FormKit
      type="text"
      label="European city"
      help="What is your favorite European city?"
      v-model="message"
    />
    <template #footer>
      <div class="link">
      </div>
    </template>
  </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '~/componenets/layouts/LayoutMain'
import {someLogic} from '~/logic/main'

var message = "" 

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
