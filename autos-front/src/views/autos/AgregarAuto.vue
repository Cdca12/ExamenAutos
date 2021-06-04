<template>
  <div>
    <h1>Agregar Auto</h1>
    <b-form @submit.prevent="guardarAuto()">
      <Input
        v-model="auto.Modelo"
        id="Modelo"
        titulo="Modelo"
        placeholder="Ingrese el modelo del auto"
        :maxlength="50"
        :error="erroresValidacion && !validacionModelo"
        mensajeError="Es necesario ingresar el modelo del auto"
        class="mt-3"
      />
      <Input
        v-model="auto.Marca"
        id="Marca"
        titulo="Marca"
        placeholder="Ingrese la marca del auto"
        :maxlength="60"
        class="mt-3"
      />
      <Input
        v-model="auto.Anio"
        id="Anio"
        titulo="Año"
        placeholder="Ingrese el año del auto"
        :maxlength="4"
        :error="erroresValidacion && !validacionAnio"
        mensajeError="Es necesario ingresar el año del auto"
        class="mt-3"
      />
      <Input
        v-model="auto.Color"
        id="Color"
        titulo="Color"
        placeholder="Ingrese el color del auto"
        :maxlength="20"
        class="mt-3"
      />
      <b-button type="submit" class="mt-2" variant="primary">Agregar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../../components/Input";

export default {
  name: "AgregarAuto",
  components: {
    Input,
  },
  data() {
    return {
      auto: {
        Modelo: "",
        Marca: "",
        Anio: "",
        Color: ""
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionModelo() {
      return (
        this.auto.Modelo !== undefined &&
        this.auto.Modelo.trim() !== ""
      );
    },
    validacionAnio() {
        return (
            this.auto.Anio !== undefined &&
        this.auto.Anio.trim() !== ""
      );
          },
  },
  methods: {
    ...mapActions(["agregarAuto"]),
    guardarAuto() {
      if (
        !(
          this.validacionModelo &&
          this.validacionAnio
        )
      ) {
        this.erroresValidacion = true;
      }  else {
          // Agregar auto
          this.erroresValidacion = false;
        this.agregarAuto({
          params: this.auto,
          onComplete: (response) => {
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "Autos",
            });
          },
          onError: (err) => {
            this.$notify({
              type: "error",
              title: err.response.data.mensaje,
            });
          },
        });
      }
    },
  },
  // Life Cycle methods
};
</script>

<style></style>
