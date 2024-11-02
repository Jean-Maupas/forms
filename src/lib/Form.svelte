<script lang="ts">
   import { actions } from '../routes/api/+server';
 
   let { data } = $props();
  
    let formData = {};
  
    /**
     * @param {{ request: any; }} event
     */
    function handleSubmit(event) {
      actions.test4({ request: event.request, formData });
    }


	async function getData() {
		const url = "https://example.org/products.json";
		try {
			const response = await fetch(url);
			if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			console.log(json);
		} catch (error) {
			console.error(error?.message);
		}
	}
</script>

  
<div class="centered">
	<h1>Test actions</h1>

    <form method="POST" action="?/test1">
        <label>
            Test
            <input name="test" type="text">
        </label>
        <button type="submit">test1</button>
        <button formaction="?/test2">test2</button>
    </form>

	<form method="POST" action="?/test2">
		<label>
			add a todo:
			<input
				name="test"
				autocomplete="off"
			/>
		</label>
        <button>test2</button>
	</form>

    <!-- UserForm.svelte -->
<form method="POST" action="?/test4">
    <label>
        Test
        <input name="test4" type="text">
    </label>
    <button type="submit">test4</button>

  </form>
  
 <!-- Form which will send a POST request to the current URL -->
<form method="post" action="?/test5">
	<label>
	  Name:
	  <input name="submitted-name" autocomplete="name" />
	</label>
	<button>Save</button>
  </form>
  
  <!-- Form with fieldset, legend, and label -->
  <form method="post"  action="?/test6">
	<fieldset>
	  <legend>Do you agree to the terms?</legend>
	  <label><input type="radio" name="radio" value="yes" /> Yes</label>
	  <label><input type="radio" name="radio" value="no" /> No</label>
	</fieldset>
  </form>


	<ul class="todos">
        {#if data && data.todos}
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
        {/if}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

</style>
