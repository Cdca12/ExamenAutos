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
        :error="erroresValidacion && !validacionMarca"
        mensajeError="Es necesario ingresar la marca del auto"
        class="mt-3"
      />
      <Input
        v-model="auto.Anio"
        id="Anio"
        titulo="Año"
        tipo="number"
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
        :error="erroresValidacion && !validacionColor"
        mensajeError="Es necesario ingresar el color del auto"
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
    validacionMarca() {
        return (
            this.auto.Marca !== undefined &&
        this.auto.Marca.trim() !== ""
      );
        },
    validacionAnio() {
        return (
            this.auto.Anio !== undefined &&
        this.auto.Anio.trim() !== ""
      );
          },
    validacionColor() {
        return (
            this.auto.Color !== undefined &&
        this.auto.Color.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["agregarAuto"]),
    guardarAuto() {
      if (
        !(
          this.validacionModelo &&
          this.validacionMarca &&
          this.validacionAnio &&
          this.validacionColor
        )
      ) {
        this.erroresValidacion = true;
      }  else {
          // Agregar auto
          this.erroresValidacion = false;
        this.agregarAuto({
          params: this.auto,
          onComplete: (res) => {
            this.$notify({
              type: "success",
              title: res.data.mensaje,
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
