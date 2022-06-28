<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <Logo />

  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
<style lang="scss">
  @import '@/assets/common.scss';
  .header{
    padding: 5px $pad-x;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 105px;
    background-color: transparent;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .nav-link{
    font-family: 'Gotham';
    font-weight: 500;
    font-size: 13px;
    line-height: 1;
    text-transform: uppercase;
    color: $white;
    text-decoration: none;
  }
</style>
