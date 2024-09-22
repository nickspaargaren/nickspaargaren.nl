<script lang="ts">
	export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a class="underline" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<ul>
	{#each data.skills as skill}
		<li>{skill.title}</li>
	{/each}
</ul>
