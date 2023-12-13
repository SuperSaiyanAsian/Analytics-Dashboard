<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms'
	import { invalidateAll } from '$app/navigation';

	export let data;
	export let form;

	// Reload page after logging out so user can log in again 
	onMount(() => {
		invalidateAll();
	});
</script>

<div class="centered">
	{#if form?.receivedResponse && !form.success}
		<center>
			<p id="invalidInfo">Unable to find account! Please try again.</p>
		</center>
	{/if}

	{#if data.userToken}
		<center id="loggedIn">
			<h1>You are logged in!</h1>
			<a href="/logout" data-sveltekit-preload-data="tap">Log out?</a>
		</center>
	{:else}
		<center>
			<h1>Login</h1>
		</center>

		<form method="POST" use:enhance>
			<label class="loginField">
				Email:

				<input
					type="email" 
					name="email"
					autocomplete="off"
					required
				/>
			</label>

			<label class="loginField">
				Password:

				<input
					type="password" 
					name="password"
					autocomplete="off"
					required
				/>
			</label>

			<button type="submit">Log In</button>
		</form>
	{/if}
</div>


<style>
    .centered {
		max-width: 20em;
		margin: 0 auto;
	}

	#invalidInfo {
		color: red;
	}

	#loggedIn {
		/* display: flex; */
		justify-self: center;
	}

	.loginField {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	input {
		width: 17em;
	}

	label + label {
		margin-top: 5px;
	}
	label + button {
		margin-top: 5px;
		width: 100%;
	}
</style>