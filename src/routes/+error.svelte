<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error">
	<h1 class="text-3xl font-bold">
		{$page.status}
		{$page.error.message}
	</h1>
	<img
		src="https://c.tenor.com/zrpyKEyxZGwAAAAM/fat-cat-laser-eyes.gif"
		alt="cat with lasers"
		class="rounded-full object-cover"
	/>
</div>
