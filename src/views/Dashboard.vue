<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 md5>
          <router-link to="/penaestrada">
            <v-img src="img/others/0.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Pé na Estrada</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/paposerio">
            <v-img src="img/others/1.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Papo Sério com Bino</div>
          </router-link>
        </v-flex>
        <v-flex xs5 md5>
          <router-link to="/paraaonde">
            <v-img src="img/others/2.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Bino, vamos parar aonde?</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/chamaalguem">
            <v-img src="img/others/3.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Chama alguém, Bino!</div>
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
