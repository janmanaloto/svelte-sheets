<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let id: string;
  export let row: number;
  export let column: number;
  export let content: string;

  let containerElem: HTMLDivElement;
  
  $: isActive = $activeCell?.row === row && $activeCell?.column === column;

  // Focus the container element when the cell becomes active
  $: if (isActive && containerElem) {
    containerElem.focus();
  }

  export function focusCell() {
    containerElem?.focus();
  }

  function handleNonEditClick() {
    activeCell.set({ row, column });
  }

  function handleDoubleClick() {
    if (isActive) {
      dispatch('startEdit');
    }
  }

  function handleEditKeydown(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === 'Enter') {
      event.preventDefault();
      if (isActive) {
        console.log('startEdit');
        dispatch('startEdit');
      }
    }
  }
</script>

<div 
  class="grid-item" 
  tabindex="0" 
  role="gridcell"
  on:click={handleNonEditClick}
  on:dblclick={handleDoubleClick}
  on:focus={handleNonEditClick}
  on:keydown={handleEditKeydown}
  bind:this={containerElem}
>
  <slot />
</div>

<style>
  .grid-item {
    margin: -1px;
  }

  .grid-item:focus {
    outline: 2px solid #4285f4;
    background-color: #e0f7fa;
  }
</style>