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
  @tailwind base;

  body {
    @apply bg-green-900;
    .btn {
      @apply font-bold py-2 px-4 rounded w-56 block text-center text-2xl;
    }

    .btn-yellow {
      @apply bg-yellow-300 text-green-900;
      &:hover {
        @apply bg-yellow-400;
      }
    }
  }
</style>
