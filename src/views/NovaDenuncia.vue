<template>
  <div>
    <v-form v-model="valid">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md12>
            <h2 align="center">Cadastro de Denúncia</h2>
          </v-flex>
          <v-flex xs12 md6>
            <v-select
              :items="cidades"
              v-model="cidadeSelecionada"
              v-on:change="loadObrasCidade"
              attach
              label="Selecione a cidade"
            ></v-select>
          </v-flex>
          <v-flex xs12 md6>
            <v-select
              :items="obras"
              v-model="obraSelecionada"
              attach
              item-text="descricaoObraServico"
              label="Selecione a obra"
            ></v-select>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="nome" v-model="nome" label="Nome"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :items="obras" v-model="telefone" label="Telefone"></v-text-field>
          </v-flex>
          <v-flex xs12 md12>
            <v-textarea name="input-7-1" label="Texto da Denúncia" auto-grow></v-textarea>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="blue-grey"
              class="white--text"
              @click="loader = 'loading3'"
            >
              Anexar Imagem
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn @click="clear" color="blue-grey" class="white--text">Enviar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cidades: [
        "Acari",
        "Açu",
        "Afonso Bezerra",
        "Água Nova",
        "Alexandria",
        "Almino Afonso",
        "Alto do Rodrigues",
        "Angicos",
        "Antônio Martins",
        "Apodi",
        "Areia Branca",
        "Arês",
        "Augusto Severo",
        "Baía Formosa",
        "Baraúna",
        "Barcelona",
        "Bento Fernandes",
        "Bodó",
        "Bom Jesus",
        "Brejinho",
        "Caiçara do Norte",
        "Caiçara do Rio do Vento",
        "Caicó",
        "Campo Redondo",
        "Canguaretama",
        "Caraúbas",
        "Carnaúba dos Dantas",
        "Carnaubais",
        "Ceará-Mirim",
        "Cerro Corá",
        "Coronel Ezequiel",
        "Coronel João Pessoa",
        "Cruzeta",
        "Currais Novos",
        "Doutor Severiano",
        "Encanto",
        "Equador",
        "Espírito Santo",
        "Extremoz",
        "Felipe Guerra",
        "Fernando Pedroza",
        "Florânia",
        "Francisco Dantas",
        "Frutuoso Gomes",
        "Galinhos",
        "Goianinha",
        "Governador Dix-Sept Rosado",
        "Grossos",
        "Guamaré",
        "Ielmo Marinho",
        "Ipanguaçu",
        "Ipueira",
        "Itajá",
        "Itaú",
        "Jaçanã",
        "Jandaíra",
        "Janduís",
        "Januário Cicco",
        "Japi",
        "Jardim de Angicos",
        "Jardim de Piranhas",
        "Jardim do Seridó",
        "João Câmara",
        "João Dias",
        "José da Penha",
        "Jucurutu",
        "Jundiá",
        "Lagoa d'Anta",
        "Lagoa de Pedras",
        "Lagoa de Velhos",
        "Lagoa Nova",
        "Lagoa Salgada",
        "Lajes",
        "Lajes Pintadas",
        "Lucrécia",
        "Luís Gomes",
        "Macaíba",
        "Macau",
        "Major Sales",
        "Marcelino Vieira",
        "Martins",
        "Maxaranguape",
        "Messias Targino",
        "Montanhas",
        "Monte Alegre",
        "Monte das Gameleiras",
        "Mossoró",
        "Natal",
        "Nísia Floresta",
        "Nova Cruz",
        "Olho-d'Água do Borges",
        "Ouro Branco",
        "Paraná",
        "Paraú",
        "Parazinho",
        "Parelhas",
        "Parnamirim",
        "Passa e Fica",
        "Passagem",
        "Patu",
        "Pau dos Ferros",
        "Pedra Grande",
        "Pedra Preta",
        "Pedro Avelino",
        "Pedro Velho",
        "Pendências",
        "Pilões",
        "Poço Branco",
        "Portalegre",
        "Porto do Mangue",
        "Presidente Juscelino",
        "Pureza",
        "Rafael Fernandes",
        "Rafael Godeiro",
        "Riacho da Cruz",
        "Riacho de Santana",
        "Riachuelo",
        "Rio do Fogo",
        "Rodolfo Fernandes",
        "Ruy Barbosa",
        "Santa Cruz",
        "Santa Maria",
        "Santana do Matos",
        "Santana do Seridó",
        "Santo Antônio",
        "São Bento do Norte",
        "São Bento do Trairí",
        "São Fernando",
        "São Francisco do Oeste",
        "São Gonçalo do Amarante",
        "São João do Sabugi",
        "São José de Mipibu",
        "São José do Campestre",
        "São José do Seridó",
        "São Miguel",
        "São Miguel de Touros",
        "São Paulo do Potengi",
        "São Pedro",
        "São Rafael",
        "São Tomé",
        "São Vicente",
        "Senador Elói de Souza",
        "Senador Georgino Avelino",
        "Serra de São Bento",
        "Serra do Mel",
        "Serra Negra do Norte",
        "Serrinha",
        "Serrinha dos Pintos",
        "Severiano Melo",
        "Sítio Novo",
        "Taboleiro Grande",
        "Taipu",
        "Tangará",
        "Tenente Ananias",
        "Tenente Laurentino Cruz",
        "Tibau",
        "Tibau do Sul",
        "Timbaúba dos Batistas",
        "Touros",
        "Triunfo Potiguar",
        "Umarizal",
        "Upanema",
        "Várzea",
        "Venha-Ver",
        "Vera Cruz",
        "Viçosa",
        "Vila Flor"
      ],
      obras: [],
      cidadeSelecionada: null,
      obraSelecionada: null
    };
  },
  mounted() {},
  methods: {
    loadObrasCidade() {
      let uri =
        "http://localhost:8080/api/v1/obras/obras/" + this.cidadeSelecionada;

      this.$http.get(uri).then(
        response => {
          this.obras = response.data;
          this.pagination.totalItems = this.obras.length;
          this.isLoading = false;
        },
        response => {
          this.isLoading = false;
        }
      );
    }
  }
};
</script>

<style>
.custom {
  -webkit-box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 5px 23px -4px rgba(0, 0, 0, 0.75);
  margin: 3em;
  margin-top: 5em;
  border-radius: 15px;
  /* background-color: #7d8c9e; */
  color: #ffffff !important;
  min-height: 30em;
}

.custom-txt {
  color: #ffffff !important;
}
</style>