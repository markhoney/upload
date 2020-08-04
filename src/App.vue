<template>
	<upload @input="input = event" />
	<div class="flex flex-col items-center mx-16">
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
				<input type="text" v-model="append" class="shadow appearance-none border rounded py-2 px-3 text-grey-darker">
			</div>
		</div>
		<div v-if="output && output.length" class="mt-16 mb-8"><!-- File download -->
			<download :value="input" />
		</div>
		<data-table v-model="input" :multiplier="multiplier" :append="append" />
	</div>
</template>

<script>
	import XLSX from 'xlsx';
	import Upload from './components/Upload.vue';
	import Download from './components/Download.vue';
	import DataTable from './components/Table.vue';
	export default {
		name: 'Upload',
		components: {
			Upload,
			Download,
			DataTable,
		},
		data() {
			return {
				filename: '', // The uploaded filename
				input: [], // The contents of the uploaded spreadsheet
				multiplier: 1, // Used for a data manipulation test
				append: '', // Another data manipulation test
			};
		},
	};
</script>
