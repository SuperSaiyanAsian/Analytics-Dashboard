<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms'
	import { onMount } from 'svelte';

	type ModuleInfo = {
		id: number;
		name: string;
		module_type_id: number;
		module_type: string;
		project: string;
		project_id: number;
		date_created: string;
		date_updated: string;
	};

	// export let data;
	export let form;
	let designModules: ModuleInfo[];

	onMount(async () => {
		designModules = JSON.parse(form?.resData).data;
	})
</script>

<div class="centered">
	<center>
		<h1>Design Modules</h1>

		<form method="POST" use:enhance>
			<button type="submit">Fetch design modules</button>
		</form>

		{#if form?.success}
			<p>{JSON.stringify(form.resData)}</p>
			<!-- <table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Module Type ID</th>
						<th>Module Type</th>
						<th>Project</th>
						<th>Project ID</th>
						<th>Date Created</th>
						<th>Date Updated</th>
					</tr>
				</thead>
				<tbody>
					{#each designModules as row}
						<tr>
							<td>{row.id}</td>
							<td>{row.name}</td>
							<td>{row.module_type_id}</td>
							<td>{row.module_type}</td>
							<td>{row.project}</td>
							<td>{row.project_id}</td>
							<td>{row.date_created}</td>
							<td>{row.date_updated}</td>
						</tr>
					{/each}
				</tbody>
			</table> -->
		{/if}
	</center>
</div>

<style>
    .centered {
		max-width: 25em;
		margin: 0 auto;
	}
</style>