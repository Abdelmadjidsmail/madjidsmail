<template>
  <div class="Portfolio">
    <div class="container container-Portfolio">
      <h1 class="upercase">
        my work
      </h1>

      <div class="card" v-for="(work, index) in works" v-bind:key="index">
        <div class="card-content">
          <h3 class="upercase">{{ work.title }}</h3>
          <p>
            {{ work.body }}
          </p>
        </div>
        <div class="card-img">
          <img :src="work.photo" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      works: [
        {
          title: "moadaly",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorum, eius illo Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quasi mollitia dignissimos, veritatis dolore
            voluptates esse enim quam nostrum quaerat est, facere assumenda
            animi, eos illo.`,
          photo: require("../assets/pic1.jpg")
        },
        {
          title: "moadaly",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorlusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorlusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorlusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorlusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorlo lorem strum quaerat est, facere assumenda
            animi, eos illo.`,
          photo: require("../assets/pic1.jpg")
        },
        {
          title: "moadaly",
          body: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium architecto officia blanditiis, nostrum ut vel corrupti
            sequi. Dolorum, eius illo Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quasi mollitia dignissimos, veritatis dolore
            voluptates esse enim quam nostrum quaerat est, facere assumenda
            animi, eos illo.`,
          photo: require("../assets/pic1.jpg")
        },
      ]
    };
  },
  created() {
    this.active = true;
  }
};
</script>

<style></style>
