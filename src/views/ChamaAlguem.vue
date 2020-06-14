<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs5 md5>
          <router-link to="/acidente">
            <v-img src="img/others/12.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Informar Acidente</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/problemasaude">
            <v-img src="img/others/13.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Informar Problemas de Saúde</div>
          </router-link>
        </v-flex>
        <v-flex xs5 md5>
          <router-link to="/assalto">
            <v-img src="img/others/14.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Informar Assalto</div>
          </router-link>
        </v-flex>
        <v-flex xs2 md2></v-flex>
        <v-flex xs5 md5>
          <router-link to="/problemaveiculo">
            <v-img src="img/others/15.png" aspect-ratio="1" max-width="256" max-height="256" />
            <div class="title mb-1" align="center">Informar Problemas com o Veículo</div>
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
