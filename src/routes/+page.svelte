<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms'

	let data;
	let form;
</script>

<div class="centered">
	<center>
		<h1>Analytics Dashboard</h1>
		<p>Visit <a href="https://linear.app/strucalc/issue/OAD-32/analytics-dashboard-practice-app">the linear issue</a> for more information ;&#41;</p>
		<p>Click <a href="/login">here</a> to log in.</p>
	</center>
</div>

<style>
    .centered {
		max-width: 25em;
		margin: 0 auto;
	}
</style>