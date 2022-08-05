<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
</script>

<style lang="scss">
//Font to be used globally
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap");

@tailwind base;

body {
  @apply bg-green-900;
  .btn {
    @apply font-bold py-2 px-4 rounded w-56 block text-center text-2xl;
  }

  .btn-yellow {
    @apply text-green-1200 pr-10 pl-10 pt-4 pb-4 rounded-lg shadow-xl bg-gradient-to-b from-yellow-1100 to-yellow-1200 font-extrabold text-xl w-64 mt-4;
    &:hover {
      @apply bg-yellow-400;
    }
  }

  .btn-yellow-ability {
    @apply text-green-1200 pr-10 pl-10 pt-4 pb-4 mr-2 rounded-lg shadow-xl bg-gradient-to-b from-yellow-1100 to-yellow-1200 font-extrabold text-lg w-36 mt-4;
    &:hover {
      @apply bg-yellow-400;
    }
  }

  .btn-yellow-front {
    @apply text-green-1200 pr-10 pl-10 pt-6 pb-6 rounded-lg shadow-xl bg-gradient-to-b from-yellow-1100 to-yellow-1200 font-extrabold text-xl w-64 mt-4;
    &:hover {
      @apply bg-yellow-400;
    }
  }

  .input-text {
    padding: 10px;
    background-color: #609284;
    border-radius: 10px;
    color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 0px;
    width: 70%;
  }
}
</style>
