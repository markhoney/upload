<template>
	<div class="border border-dashed border-gray-500 relative"><!-- File upload -->
		<input ref="import" type="file" @input="$emit('input', $event.target.files[0])" class="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50">
		<div class="text-center p-10 absolute top-0 right-0 left-0 m-auto">
			<h4>
				Drop a file here to upload
				<br/>or
			</h4>
			<p>Click to browse for a file</p>
		</div>
	</div>
</template>
