<template>
	<div class="flex flex-col items-center mx-16">
		<file-upload class="w-full" @input="(data) => input = data" />
		<modifier @multiplier="(value) => multiplier = value" @append="(text) => append = text" />
		<div v-if="output && output.length" class="mt-16 mb-8"><!-- File download -->
			<file-download :value="output" />
		</div>
		<data-table :value="output" />
	</div>
</template>

<script>
	import XLSX from 'xlsx';
	import FileUpload from './components/Upload.vue';
	import FileDownload from './components/Download.vue';
	import Modifier from './components/Modifier.vue';
	import DataTable from './components/Table.vue';
	export default {
		name: 'Upload',
		components: {
			FileUpload,
			FileDownload,
			Modifier,
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
		methods: {

		},
		computed: {
			output() { // This is where we dynamically manipulate the uploaded data. This version will be used
				return this.input && this.input.length && this.input.map((row) => { // For each row of data in our spreadsheet
					const output = {};
					for (const [key, value] of Object.entries(row)) { // For each cell in the row
						output[key] = (isNaN(value) ? value : value * this.multiplier) + this.append; // Multiply the cell value (if it's a number), and then append some text
					}
					return output;
				});
			},
		},
	};
</script>
