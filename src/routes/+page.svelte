<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Tweetr</title>
</svelte:head>

<main
	class="h-screen w-screen grid lg:grid-cols-2 md:grid-cols-1"
	in:fly={{ x: -100, duration: 250, delay: 300 }}
	out:fly={{ x: -100, duration: 250 }}
>
	<section
		class="bg-secondary grid place-content-center text-center"
	>
		<h1 class="font-bold leading-tight text-5xl">Tweetr</h1>
		<p
			class="bg-primary font-bold p-4 rotate-2 -translate-y-3"
		>
			Share your nerd tips !
		</p>
	</section>
	<section class="bg-primary grid place-content-center">
		<a class="btn" href="/home">Start sharing</a>
	</section>
</main>
