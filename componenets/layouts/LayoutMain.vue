<template>
  <div>
    <div class="logo">
      <div>
        <img src="/gfx/logo.png"/>
      </div>
    </div>
    <div class="content">
      <main class="main-content">
        <slot/>
      </main>
      <footer>
        <slot name="footer"/>
      </footer>
    </div>
  </div>
</template>
<style scoped lang="scss">
.logo {
  @apply flex justify-center my-5;
}
.content {
  @apply m-10;
  .footer {

  }

  .main-content {

  }
}


</style>
