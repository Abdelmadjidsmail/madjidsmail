<template>
  <nav class="flex-center upercase" id="">
    <a class="logo" href="/">
      <h5>
        @madjsmail
      </h5>
    </a>

    <ul class="nav flex-center">
      <li>
        <router-link
          class="links"
          v-bind:class="created ? 'nav-links' : ''"
          to="/"
          >Home</router-link
        >
      </li>
      <li>
        <router-link
          class="links"
          v-bind:class="created ? 'nav-links' : ''"
          to="/Portfolio"
        >
          portfolio
        </router-link>
      </li>
      <li>
        <router-link
          class="links"
          v-bind:class="created ? 'nav-links' : ''"
          to="/about"
          >About</router-link
        >
      </li>
      <li>
        <router-link
          class="links"
          v-bind:class="created ? 'nav-links' : ''"
          to="/Contact"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
  <div></div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      created: null,
    };
  },
  created() {
    this.created = true;
  },
};
</script>
<style lang="scss"></style>
