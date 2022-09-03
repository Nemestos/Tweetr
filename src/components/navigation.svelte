<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	$: path = $page.url.pathname;
</script>

<aside class="">
	<div class="sticky top-0">
		<nav>
			<ul class="">
				<li>
					<a href="/" class="logo">🐦️</a>
				</li>
				<li class:active={path === '/home'}>
					<a href="/home">
						<Icon
							width="32"
							height="32"
							icon="ant-design:home-filled"
						/>
						<span>Home</span>
					</a>
				</li>
				<li class:active={path === '/home/profile/matia'}>
					<a href="/home/profile/matia">
						<Icon
							width="32"
							height="32"
							name="iconoir:profile-circled"
						/>
						<span>Profile</span>
					</a>
				</li>
			</ul>
		</nav>
		<button class="btn text-center">Tweet</button>
	</div>
</aside>
