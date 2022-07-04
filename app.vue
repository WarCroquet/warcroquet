<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script lang="ts">

</script>
<style lang="scss">

//Font to be used globally
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400&display=swap');

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


    .btn-yellow-front {
      @apply text-green-1200 pr-10 pl-10 pt-6 pb-6 rounded-lg shadow-xl bg-gradient-to-b from-yellow-1100 to-yellow-1200 font-extrabold text-xl w-64 mt-4;
      &:hover {
        @apply bg-yellow-400;
      }
    }
  }
</style>
