<template>
    <ul class="nav MenuNav">
      <li class="active">
        <router-link to="/dashboard">
          <i class="pe-7s-graph"></i>
          <p>Dashboard</p>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="pe-7s-user"></i>
          <p>User Profile</p>
        </router-link>
      </li>
      <li>
        <a href="table.html">
          <i class="pe-7s-note2"></i>
          <p>Table List</p>
        </a>
      </li>
      <li>
        <a href="typography.html">
          <i class="pe-7s-news-paper"></i>
          <p>Typography</p>
        </a>
      </li>
      <li>
        <a href="icons.html">
          <i class="pe-7s-science"></i>
          <p>Icons</p>
        </a>
      </li>
      <li>
        <a href="maps.html">
          <i class="pe-7s-map-marker"></i>
          <p>Maps</p>
        </a>
      </li>
      <li>
        <a href="notifications.html">
          <i class="pe-7s-bell"></i>
          <p>Notifications</p>
        </a>
      </li>
      <li class="active-pro">
        <a href="upgrade.html">
          <i class="pe-7s-rocket"></i>
          <p>Upgrade to PRO</p>
        </a>
      </li>
    </ul>
</template>

<script>
  export default{
    name: 'MenuNav'
  }
</script>
