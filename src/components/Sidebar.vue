<template>
  <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text">
          Creative Tim
        </a>
      </div>
      <menu-nav></menu-nav>
    </div>
  </div>
</template>
<script>

  import MenuNav from './MenuNav'

  export default {
    name: 'sidebar',
    components: { MenuNav }
  }
</script>
