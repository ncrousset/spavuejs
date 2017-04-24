<template>
  <div class="dashboard">
    <sidebar></sidebar>
    <div>Dashboard</div>
  </div>
</template>
<script>

import Sidebar from './Sidebar'

export default {
  name: 'dashboard',
  components: {
    Sidebar
  }
}
</script>
