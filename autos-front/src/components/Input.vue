<template>
	<div>
		<label :for="id">{{ titulo }}</label>
		<input
			:id="id"
			class="form-control"
			:value="value"
			:type="tipo"
			:maxlength="maxlength"
			:disabled="disabled"
			:placeholder="placeholder"
			@input="$emit('input', $event.target.value)"
		/>
		<span v-if="error" class="text-danger">{{ mensajeError }}</span>
	</div>
</template>

<script>
export default {
	name: "Input",
	props: {
		id: {
			type: [String, Number],
			required: true,
		},
		titulo: String,
		value: [String, Number],
		tipo: {
			type: String,
			default: "text",
		},
		maxlength: {
			type: Number,
			default: 100,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: "Ingresa la información",
		},
		mensajeError: {
			type: String,
			default: "Campo obligatorio",
		},
		error: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style></style>
