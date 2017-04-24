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

  import Sidebar from './components/Sidebar'
  import Navbar from './components/Navbar'
  import MyFooter from './components/MyFooter'

  export default {
    name: 'app',
    components: {
      Sidebar, Navbar, MyFooter
    }
  }
</script>

