<template>
  <div id="app" class="wrapper">
    <sidebar></sidebar>
    <div class="main-panel">
      <navbar></navbar>
      <router-view></router-view>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>

  import Sidebar from './components/layout/Sidebar'
  import Navbar from './components/layout/Navbar'
  import MyFooter from './components/layout/MyFooter'

  export default {
    name: 'app',
    components: {
      Sidebar, Navbar, MyFooter
    }
  }
</script>

