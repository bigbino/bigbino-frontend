<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 md5>
          <router-link to="/praondevai">
            <v-img src="img/others/4.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Pra onde a gente vai mesmo?</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/vamosimbora">
            <v-img src="img/others/5.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Vamo simbora!</div>
          </router-link>
        </v-flex>
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
