<template>
  <div>
    <h1>Autos</h1>
    <b-button variant="dark" to="autos/agregar">Agregar auto</b-button>
    <Table :items="autos" :fields="fields" />
  </div>
</template>

<script>
import Table from "../../components/Table";
import { mapState, mapActions } from "vuex";

export default {
    name: 'Autos',
    components: {
        Table
    },
    data() {
        return {
            fields: [
				{ key: "AutoID", label: "ID" },
				{ key: "Modelo", label: "Modelo" },
				{ key: "Marca", label: "Marca" },
				{ key: "Anio", label: "Año" },
				{ key: "Color", label: "Color" }
			],
        }
    },
    computed: {
        ...mapState(["autos"]),
    },
    methods: {
        ...mapActions(["setAutos"]),

    },
    // Life cycle methods
    created() {
		this.setAutos();
	},
};
</script>

<style></style>
