<script lang="ts">
    let { options, value = $bindable() }: { options: string[], value: string } = $props();

    let currentOption = $state(options[0])
    let checked = $state(false);
    let group = $state("");
    let radioChecked = $state([false,false]);

    function radioClick(event: MouseEvent & { currentTarget: EventTarget & HTMLInputElement; }) {
      if (event.currentTarget.checked) value=null //getAttribute("name") == radioValue)
    }
</script>
  
  <!-- <div>
    <FormField>
      <Checkbox bind:checked />
      <span slot="label">Remember me.</span>
    </FormField>
  </div>
   -->

{#each ['yes', 'no'] as option, id}
  <formfield style="margin-right: .5em;">
    <label>
      <input type="radio" bind:group={value} name={option} value={option} onclick={radioClick}/>
      {option}
    </label>
  </formfield>
{/each}
<p>
	{value} is selected
</p>

<!-- <div class="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label for="airplane-mode">Airplane Mode</Label>
</div> -->
<hr/>
<button class:checked onclick={()=>checked=!checked}></button>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button[type="button"]:focus {
  outline: none;
  outline-style:none;
}
button:hover {
  transform: none; /* or transform: 1; */
  filter:none
}

    button {
      box-shadow: none;
  transform: none;
  filter: none;
  border-style: solid;

      outline-style:none;
        position: relative;
        border: 2 solid black;
        width:1rem;
        height:1rem;
        background-color: green;
        color:blue;
        cursor: pointer;
        border-radius: 50%;   text-decoration: none;
        display: inline-block;
    }
    button.checked {
      background-color: yellow;
      border-style: solid;

    }
    button:active {
  border-style: solid;
}
    /* button:hover {
        background: #46ba48;
    } */
    button:active{
        /* transform: scale(0.95); */
        box-shadow: none;
  transform: none;
  filter: none;

    }
</style>