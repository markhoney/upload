var app = new Vue({
	el: '#app',
	data: {
		filename: '',
		workbook: [],
	},
	methods: {
		upload(event) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const data = new Uint8Array(e.target.result);
				const workbook = XLSX.read(data, {type: 'array'});
				this.workbook = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']);
			}
			// reader.readAsText(event.target.files[0]);
			this.filename = event.target.files[0].name;
			reader.readAsArrayBuffer(event.target.files[0]);
		},
		download() {
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(this.workbook), 'Sheet1');
			XLSX.writeFile(workbook, 'Test.xlsx');
			/* const blob = new Blob(XLSX.utils.json_to_sheet(this.workbook), {type: 'application/vnd.ms-excel', name: 'Test.xslx'});
			const link = document.createElement('a');
			link.href = URL.createObjectURL(blob);
			link.download = 'Test.xlsx';
			link.click();
			URL.revokeObjectURL(link.href); */
		}
	},
});
