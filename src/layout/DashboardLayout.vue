<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar :background-color="sidebarBackground" short-title="Argon" title="Argon">
      <template slot="links">
        <!-- <sidebar-item
          :link="{
            name: 'Início',
            icon: 'ni ni-tv-2 text-primary',
            path: '/'
          }"
        />-->

        <!-- <sidebar-item :link="{name: 'Visão Geral', icon: 'fas fa-home', path: '/visaogeral'}"/>
        <sidebar-item :link="{name: 'Denúncias', icon: 'fas fa-exclamation-triangle', path: '/denuncia'}"/>
        <sidebar-item :link="{name: 'Sobre', icon: 'ni ni-single-02', path: '/sobre'}"/>-->
        <v-expansion-panel class="noshadow">
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <i
                  class="fa fa-road"
                  aria-hidden="true"
                  :link="{name: 'Pé na Estrada', path: '/penaestrada'}"
                ></i> Pé na Estrada
              </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Pra onde a gente vai mesmo?', path: '/praondevai'}" />
            </div>
            <div>
              <sidebar-item :link="{name: 'Vamo simbora!', path: '/vamosimbora'}" />
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <i
                  class="fa fa-exclamation"
                  :link="{name: 'Papo Sério com Bino', path: '/paposerio'}"
                ></i> Papo Sério com Bino
              </div>
            </template>
            <div>
              <sidebar-item
                :link="{name: 'Bino é chapa e sabe tudo que eu tenho!', path: '/sabetudo'}"
              />
            </div>
            <div>
              <sidebar-item
                :link="{name: 'Bino te ajuda a achar um ponto de saúde', path: '/teajudasaude'}"
              />
            </div>
            <div>
              <sidebar-item
                :link="{name: 'Vamo manter Bino atualizado?', path: '/manteratualizado'}"
              />
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <i class="fas fa-truck"></i> Bino, vamos parar aonde?
              </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Comer e comer bem!', path: '/comer'}" />
            </div>
            <div>
              <sidebar-item :link="{name: 'Ficar 2km na horizontal', path: '/dormir'}" />
            </div>
            <div>
              <sidebar-item :link="{name: 'Alimentar o possante', path: '/posto'}" />
            </div>
          </v-expansion-panel-content>

          <v-expansion-panel-content>
            <template v-slot:header>
              <div>
                <i class="fas fa-exclamation-triangle"></i> Chama alguém, Bino!
              </div>
            </template>
            <div>
              <sidebar-item :link="{name: 'Informar Acidente', path: '/acidente'}" />
            </div>
            <div>
              <sidebar-item :link="{name: 'Informar Problemas de Saúde', path: '/problemasaude'}" />
            </div>
            <div>
              <sidebar-item :link="{name: 'Informar Assalto', path: '/assalto'}" />
            </div>
            <div>
              <sidebar-item
                :link="{name: 'Informar Problemas com o Veículo', path: '/problemaveiculo'}"
              />
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    ContentFooter,
    FadeTransition
  },
  data() {
    return {
      sidebarBackground: "vue" //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
<style lang="scss">
.noshadow {
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  box-shadow: none !important;
  border: none !important;
}

li {
  border: none !important;
}
</style>
