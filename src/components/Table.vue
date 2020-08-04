<template>
	<table class="w-full text-md bg-white shadow-md rounded"><!-- Uploaded data table -->
		<thead>
			<tr class="bg-gray-200">
				<th class="text-left p-3 px-5" v-for="(data, column) in value[0]" :key="column">{{column}}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(row, index) in value" class="border-b hover:bg-orange-100" :class="[index % 2 ? 'bg-gray-100' : 'bg-white']" :key="index">
				<td v-for="(data, index) in row" class="p-3 px-5" :key="index">{{data}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
	export default {
		props: ['value', 'multiplier', 'append'],
	}
</script>
