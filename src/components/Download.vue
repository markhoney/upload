<template>
	<button class="w-32 bg-gray-300 hover:bg-grey text-grey-900 font-bold py-2 px-4 rounded inline-flex items-center" @click="download">
		<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
		<span>Download</span>
	</button>
</template>

<script>
	import XLSX from 'xlsx';
	export default {
		props: ['value'],
		methods: {
			download() { // Download the manipulated data as an Excel spreadsheet
				const workbook = XLSX.utils.book_new(); // Make a new spreadsheet object
				XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(this.output), 'Sheet1'); // Convert our output data to a workbook and append it to our empty export spreadsheet
				XLSX.writeFile(workbook, 'Test.xlsx'); // Write our file (as this is done in the browser, it automagically initiates a file download)
			},
		},
	};
</script>
