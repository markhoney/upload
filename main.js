const app = new Vue({
	el: '#app',
	data: {
		filename: '',
		input: [],
		multiplier: 1,
		append: '',
	},
	computed: {
		output() {
			return this.input.map((row) => {
				const output = {};
				for (const [key, value] of Object.entries(row)) {
					output[key] = (isNaN(value) ? value : value * this.multiplier) + this.append;
				}
				return output;
			});
		},
	},
	methods: {
		upload(event) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const workbook = XLSX.read(new Uint8Array(e.target.result), {type: 'array'});
				this.input = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet1']);
			};
			this.filename = event.target.files[0].name;
			reader.readAsArrayBuffer(event.target.files[0]);
		},
		download() {
			const workbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(this.output), 'Sheet1');
			XLSX.writeFile(workbook, 'Test.xlsx');
		},
	},
});
