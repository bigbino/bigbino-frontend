<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 md5>
          <router-link to="/praondevai">
            <v-img src="img/others/6.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Bino é chapa e sabe tudo que eu tenho!</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/vamosimbora">
            <v-img src="img/others/7.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Bino te ajuda a achar um ponto de saúde</div>
          </router-link>
        </v-flex>
        <v-flex xs4 md4></v-flex>
        <v-flex xs5 md5>
          <router-link to="/vamosimbora">
            <v-img src="img/others/8.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Vamos manter Bino atualizado?</div>
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
