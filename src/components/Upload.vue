<template>
	<div class="border border-dashed border-gray-500 relative">
		<input ref="import" type="file" @input="upload" class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50">
		<div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
			<h4>
				Drop a file here to upload
				<br/>or
			</h4>
			<p>Click to browse for a file</p>
		</div>
	</div>
</template>

<script>
	import XLSX from 'xlsx';
	export default {
		methods: {
			upload(event) { // Upload an Excel file
				const reader = new FileReader();
				reader.onload = (e) => { // When the file's been loaded
					const workbook = XLSX.read(new Uint8Array(e.target.result), {type: 'array'}); // Read the Excel file
					this.$emit('input', XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1'])); // Turn the first spreadsheet tab's data into JSON, and save it as dynamic Vue data (this should probably not be hard coded to "Sheet1")
				};
				this.filename = event.target.files[0].name; // Grab the uploaded filename (we don't use this at the moment, but it might be useful as the download filename)
				reader.readAsArrayBuffer(event.target.files[0]); // Read the loaded file
			},
		},
	};
</script>
