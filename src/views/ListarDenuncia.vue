<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex md8>
          <v-select attach :items="cidades" label="Selecione a cidade"></v-select>
        </v-flex>
        <v-flex md12>
          <material-card color="blue" title="Listagem">
            <v-data-table
              :headers="headers"
              :items="alunos"
              item-key="nome"
              hide-actions
              :pagination.sync="pagination"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td
                  class="text-xs-left"
                >{{ props.item.nome }}</td>
                <td>{{ props.item.matricula }}</td>
                <td>{{ props.item.curso }}</td>
                <td>{{ props.item.periodoIngresso }}</td>
                <td class="text-xs-centered" v-if="props.item.status == 'SITUAÇÃO NORMAL'">
                  <v-btn round small color="success" dark>{{props.item.status}}</v-btn>
                </td>
                <td class="text-xs-centered" v-else-if="props.item.status == 'RISCO DE EVASÃO'">
                  <v-btn round small color="danger" dark>{{props.item.status}}</v-btn>
                </td>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
              <v-pagination color="blue" v-model="pagination.page" :length="pages"></v-pagination>
            </div>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
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
      pagination: {},
      selected: [],
      alunoEscolhido: null,
      modalInfoAluno: false,
      headers: [
        {
          text: "Aluno",
          align: "left",
          sortable: true,
          value: "nome"
        },
        { text: "Matrícula", value: "matricula" },
        { text: "Curso", value: "curso" },
        { text: "Período de Ingresso", value: "periodoIngresso" },
        { text: "Situação", value: "status" }
      ],
      alunos: [
      ]
    };
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      // eslint-disable-next-line
      this.pagination.rowsPerPage = 10;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    }
  },
  methods: {
    abrirModalInfoAluno(aluno) {
      // eslint-disable-next-line
      console.log("Entrei aqui com...", aluno);
      this.alunoEscolhido = aluno;
      this.modalInfoAluno = true;
    }
  }
};
</script>

<style>
.btn {
  margin: 1em;
}

.v-flex{
    font-size: 10px !important;
}
</style>