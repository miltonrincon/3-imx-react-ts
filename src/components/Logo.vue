<template>
  <div
    class="logo-container"
  >
    <img class="logo" src="/logo.svg" alt="logo tunky">
  </div>
</template>

<style lang="scss">
  @import '@/assets/common.scss';
  .logo-container {
    height: 24px;
    max-width: 100px;
    @include breakpoint(sm){
      max-width: 120px;
    }
  }
  .logo{
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
</style>
