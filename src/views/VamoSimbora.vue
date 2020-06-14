 <template>
<div>
  <head>
    <title>Teste</title>
  </head>
  <v-form v-model="valid">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md12>
          <h2 align="center">Rotas Cadastradas</h2>
        </v-flex>
        <v-flex xs12 md4 v-for="rota in rotas" :key="rotas">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="display-1 text--primary">{{rota.origem}} à {{rota.destino}}</p>
              <p>Total de Paradas: {{rota.paradas.length}}</p>
              <p>
                Paradas (Em ordem):
                <br />
                {{rota.paradas.join(', ')}}
              </p>
              <p>Tempo estimado: {{rota.tempoEstimado}}</p>
              <div class="text--primary">Notificações ativadas:</div>
            </v-card-text>
            <v-card-actions>
              <v-img
                v-for="notificacao in rota.notificacoesAtivas"
                :key="rota.notificacoesAtivas"
                :src="notificacao.url"
                :alt="notificacao.alt"
                max-width="50"
                max-height="50"
              />
              <!-- <v-img v-for="notificacao in notificacoesAtivas" :key="notificacoesAtivas" :src='img/others/'+{{notificacao}}+'.png' aspect-ratio="1" max-width="50" max-height="50" /> -->
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</div>
</template>

<script>
export default {
  data: () => ({
    rotas: [
      {
        origem: "São Paulo",
        destino: "Natal",
        paradas: ["Recife", "João Pessoa", "Natal"],
        tempoEstimado: "4 dias e 2 horas",
        notificacoesAtivas: [
          { url: "img/others/9.png", alt: "Comer" },
          { url: "img/others/10.png", alt: "Dormir" },
          { url: "img/others/16.png", alt: "Problemas nas Estradas" },
          { url: "img/others/17.png", alt: "Alertas de Saúde" }
        ]
      },
      {
        origem: "São Paulo",
        destino: "Curitiba",
        paradas: ["Curitiba"],
        tempoEstimado: "1 dia",
        notificacoesAtivas: [
          { url: "img/others/9.png", alt: "Comer" },
          { url: "img/others/16.png", alt: "Problemas nas Estradas" }
        ]
      }
    ],
    obras: [],
    cidadeSelecionada: null,
    obraSelecionada: null
  }),
  mounted() {},
  methods: {}
};
</script>
