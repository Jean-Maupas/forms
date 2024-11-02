<script lang="ts">
    import Form from "$lib/Form.svelte";
    import { onMount } from 'svelte';

  let data: { items: any; };

  onMount(async () => {
    try {
        data = await fetch('/api/test4').then(response => response.json());
        console.log(data);
    } catch (err) {
        //$inspect(err)
        console.log(data);
    }
  });

  let promise: Promise<any>;
  const handleClick = async () => {
		data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((x) => x.json());
        promise = fetch('https://api.coindesk.com/v1/bpi/currentprice.json').then((x) => x.json());
	};
</script>


<h1>Welcome to SvelteKit</h1>

<Form data/>

<!-- Render data -->
{#if data}
  {#each data.items as item}
    {item.name} - {item.description}
  {/each}
{/if}


<button on:click={handleClick}> Click to Load Data </button>
<pre>
  {JSON.stringify(data, null, 2)}
</pre>

{#await promise}
	<!-- optionally show something while promise is pending -->
{:then data}
	<!-- promise was fulfilled -->
	<pre>
    {JSON.stringify(data, null, 2)}
  </pre>
{:catch error}
	<!-- optionally show something while promise was rejected -->
{/await}