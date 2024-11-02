<script>
   import { actions } from '$lib/actions';
 
   let { data } = $props();
  
    let formData = {};
  
    function handleSubmit(event) {
      actions.test4({ request: event.request, formData });
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

	<form method="POST"  action="?/test2">
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
