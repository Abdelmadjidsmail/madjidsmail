<template>
  <nav class="flex-center upercase" id="">
    <a class="logo" href="/">
      <h5>
        @madjsmail
      </h5>
    </a>

    <ul class="nav flex-center">
      <li><router-link class="links" to="/">Home</router-link></li>
      <li><router-link class="links" to="/Portfolio">portfolio</router-link></li>
      <li><router-link class="links" to="/about">About</router-link></li>
      <li><router-link class="links" to="/Contact">Contact</router-link> </li>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss"></style>
