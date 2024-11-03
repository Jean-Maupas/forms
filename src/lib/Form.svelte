<script lang="ts">
    import Radio from './Radio.svelte';
    import Switch from './Switch.svelte';

    let error = $state();
    let switch0 = $state("")
    let switch1 = $state("")
    interface Todo {
        id: number;
        description: string;
    }
    
    interface Data {
        todos?: Todo[];
    }
    
    let data: Data = $state({ todos: [] });
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    async function testEndPoint (endpoint: string) {
        const request = new Request(endpoint, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ username: "example" }),
        });
        

        try {
            const response = await fetch(request);

            if (!response.ok) {
                throw  new Error(`Response status: ${response.status}`);
            }

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
            const contentType = response.headers.get("content-type");
                throw new TypeError("JSON response expected but got "+contentType);
            }
            console.log(response.status);
            const text = await response.text(); // json()
            console.log(text);
        } catch (e) {
            console.error((e as Error)?.message);
        }
    }
</script>

  
<div class="centered">
	<h1>Test actions</h1>

    {#if error}
		<p class="error">{error}</p>
	{/if}

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
      <label><button class="radio1" name="radio" value="yes" aria-label="Yes"> </button>Yes</label>
	  <label><button class="radio1" name="radio" value="no"  aria-label="No"> </button>No</label>
	</fieldset>
  </form>

  <form method="POST" action="?/test1">
    <label>
        add a todo:
        <input
            name="description"
            autocomplete="off"
            required
        />
    </label>
</form>

    {#if data && data.todos}
	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				<form method="POST" action="?/test6">
					<input type="hidden" name="id" value={todo.id} />
					<span>{todo.description}</span>
					<button aria-label="Mark as complete"></button>
				</form>
			</li>
		{/each}
	</ul>
    {/if}

    <hr/>
    <Radio options={["Yes","No"]}  bind:value={switch0}/>
    <hr/>
    <div>result: {switch0}</div>
    <hr/>
    <Switch options={["No","Yes"]} bind:value={switch1} /> 
    <hr/>
    <div>result: {switch1}</div>
    <hr/>

    <div class="button-group">
        <label class="lab"> <button class="radio1" data-radio-group="group1" data-radio-value="option1" aria-label="Yes"> </button>Yes</label>
        <label class="lab"> <button class="radio1" data-radio-group="group1" data-radio-value="option2" aria-label="No"> </button>No</label>
    </div>
    

</div>


<style>
    .button-group {
        display:flex;
        flex-direction:row;
        width: 8rem;
        margin-bottom: 2rem;
        justify-content: space-evenly;
    }
.lab{
    width: 50%;
    display:flex;
    justify-items: center;
    justify-content: space-evenly;
    margin-left: .5rem;
    margin-right: .5rem;
}
    .radio1 { 
        outline: 0;
        border: none;
        color: green;
        appearance: none;
        text-decoration: none;
        border-color: black;
        border-radius: 50%;
        background-color: green;
        display: inline-block;
        box-shadow:0;
        text-shadow:0;
        width:1rem;
        height:1rem;
        padding: 0;
        margin: 0;
        cursor: pointer;
        text-align: center;
        font-size: 1rem;
        opacity:1;
        }

    .radio1:hover {
        border: 1 solid;
        border-color: black;
        background-color: rgb(13, 255, 0);
        
    }
   
  .radio1:active {
        border: 1 solid;
        border-color: black;
        background-color: white;
        top: 2px;
  left: 1px;
}
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

	span {
		flex: 1;
	}
 

</style>
