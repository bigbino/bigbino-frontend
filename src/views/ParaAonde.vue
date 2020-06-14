<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 md5>
          <router-link to="/comer">
            <v-img src="img/others/9.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Comer e comer bem!</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/dormir">
            <v-img src="img/others/10.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Ficar 2km na horizontal</div>
          </router-link>
        </v-flex>
        <v-flex xs4 md4></v-flex>
        <v-flex xs5 md5>
          <router-link to="/posto">
            <v-img src="img/others/11.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Alimentar o possante</div>
          </router-link>
        </v-flex>
        <v-flex xs3 md3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style></style>
