<template>
  <Header />
  <MainMenu />
</template>

<script>
import Header from "~~/components/Header.vue";
import MainMenu from "~~/components/MainMenu.vue";

export default {
  name: "index",
  components: {
    Header,
    MainMenu,
  },
};
</script>

<style lang="scss">
</style>
