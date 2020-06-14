<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex xs12 md12>
          <h2 align="center" style="margin: 1em;">Listagem de Obras</h2>
        </v-flex>
        <v-flex md8>
          <v-select
            :items="cidades"
            v-model="cidadeSelecionada"
            v-on:change="loadObrasCidade"
            attach
            label="Selecione a cidade"
          ></v-select>
        </v-flex>
        <v-flex md12>
          <material-card color="blue">
            <v-data-table
              :headers="headers"
              :items="obras"
              :loading="true"
              item-key="descricaoObraServico"
              hide-actions
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <v-progress-linear color="blue" v-slot:progress indeterminate></v-progress-linear>
              <template v-slot:no-data>Nenhuma obra foi encontrada.</template>
              <template v-slot:items="props">
                <td
                  @click="abrirModalInfoObra(props.item)"
                  class="text-xs-left"
                >{{ props.item.descricaoObraServico }}</td>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
              <v-pagination v-model="pagination.page" :length="pages" color="#000000"></v-pagination>
            </div>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>

    <ModalInfoObra
      :dialog="ModalInfoObra"
      :item="obraSelecionada"
      @fn-close="ModalInfoObra = false"
    ></ModalInfoObra>
  </div>
</template>

<script>
import ModalInfoObra from "./ModalInfoObra";

export default {
  components: {
    ModalInfoObra
  },
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
      pagination: {},
      cidadeSelecionada: null,
      isLoading: true,
      headers: [
        {
          text: "Nome",
          align: "left",
          sortable: true,
          value: "descricaoObraServico"
        }
      ],
      obraSelecionada: null,
      modalInfoObra: false
    };
  },
  mounted() {
    this.loadObras();
  },
  computed: {
    pages() {
      if (this.pagination.totalItems == null) return 0;
      this.pagination.rowsPerPage = 5;
      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  methods: {
    loadObras() {
      let uri = "http://localhost:8080/api/v1/obras/obras/";

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
    },
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
    },
    abrirModalInfoObra(obra) {
      // eslint-disable-next-line
      this.obraSelecionada = obra;
      this.modalInfoObra = true;
    }
  }
};
</script>

<style>
.btn {
  margin: 1em;
}

.v-flex {
  font-size: 10px !important;
}
</style>