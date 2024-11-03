<script lang="ts">
    let { options, value = $bindable() }: { options: string[], value: string } = $props();
    
    let active = {button1: false, button2: false, button3: false};
    let flipped = $state(false);
    value=options[0] 

    //const toggleBtn = document.querySelector(".toggle-btn")

    function toggle() {
      //toggleBtn.classList.toggle("active");
      active.button1 = !active.button1
      flipped = !flipped
      value = flipped ? options[1] : options[0]
      console.log(  flipped)
    }
</script>

<div class="toggle-btn" class:flipped onclick={toggle}>
    <div class="icon">
    </div>
</div>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle-btn {
    position: relative;
    height: 1rem;
    width: 2rem;
    background-color: grey;
    border-radius: .5rem;
    cursor: pointer;
    transition: all 0.4s ease;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 1 solid black;
  }
  .toggle-btn.flipped {
    background-color: lightblue;
    border: 1 solid black;
  }
  .toggle-btn .icon {
    position: absolute;
    top: 50%;
    left: -1px;
    transform: translateY(-50%);
    height: 1.2rem;
    width: 1.2rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightblue;
    border: 1px solid black;
    border-radius: 50%;
    transition: all 0.4s ease;
  }
  .toggle-btn.flipped .icon {
    left: calc(50%);
    border: 1px solid black;
    background-color: rgb(83, 134, 255);
    animation: linear 0.5s;
    background-color: blue;
}


</style>