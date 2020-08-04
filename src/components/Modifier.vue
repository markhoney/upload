<template>
	<div class="flex my-8">
		<div class="custom-number-input h-10 w-64"><!-- Multiplier -->
			<label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Numeric cell multiplier</label>
			<div class="flex flex-row h-10 w-32 rounded-lg relative bg-transparent mt-1">
				<button @click="multiplier -= 1" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"><span class="m-auto text-2xl font-thin">−</span></button>
				<input type="number" v-model="multiplier" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" />
				<button @click="multiplier += 1" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"><span class="m-auto text-2xl font-thin">+</span></button>
			</div>
		</div>
		<div class="append h-10 w-64"><!-- Text append -->
			<label for="append" class="w-64 text-gray-700 text-sm font-semibold">Append text to all cells</label>
			<input type="text" @input="$emit('append', $event.target.value)" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				multiplier: 1,
			};
		},
		watch: {
			multiplier(value) {
				this.$emit('multiplier', value);
			},
		},
	};
</script>
