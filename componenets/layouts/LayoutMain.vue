<template>
  <div>
    <div class="logo">
      <div>
        <img src="/gfx/logo.png"/>
        
      </div>
    </div>
    <div class="content">
      <div class="headerText">
        <slot name="headerText"/>
      </div>
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
  @apply ml-10 mr-10 mb-10;
  .footer {

  }

  .main-content {

    @apply text-white;
  }

  .headerText{
    @apply pb-10;
  }
}


</style>
