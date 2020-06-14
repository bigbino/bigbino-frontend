<template>
  <div>
    <v-container fill-height fluid grid-list-xl>
      <v-layout justify-center wrap>
        <v-flex md12>
          <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            class="mx-auto"
            max-width="63em"
          >
            <v-card></v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["dialog", "item"],
  data() {
    return {
      agendamentoDto: null,
      modalJustificativaCancelamento: false
    };
  },
  mounted() {},
  methods: {
    close() {
      this.$emit("fn-close");
    }
  }
};
</script>
