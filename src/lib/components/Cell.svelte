<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';
  import { get } from 'svelte/store';

  export let id: string;
  export let content: string;
  export let row: number;
  export let column: number;

  let internalContent: string;
  let editing = false;
  let textareaElem: HTMLTextAreaElement;
  let cellElem: HTMLDivElement;
  let containerElem: HTMLDivElement;

  $: if (content) {
    internalContent = content;
  }

  $: isActive = $activeCell?.row === row && $activeCell?.column === column;

  function handleNonEditClick() {
    activeCell.set({ row, column });
  }

  function handleDoubleClick() {
    startEditing();
  }

  function startEditing() {
    if (isActive) {
      editing = true;
    }
  }

  $: if (editing && textareaElem) {
    textareaElem.focus();
  }

  $: if (cellElem) {
    containerElem.focus();
  }

  function handleEditKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter') {
          event.preventDefault();
          if (editing) {
              editing = false;
          } else if (isActive) {
              startEditing();
          }
      }

      if (event.key === 'Escape') {
          editing = false;
      }
  }

  function handleBlur() {
    editing = false;
  }
</script>

<div class="grid-item" tabindex="0" role="gridcell"
     on:click={handleNonEditClick}
     on:dblclick={handleDoubleClick}
     on:focus={handleNonEditClick}
     on:keydown={handleEditKeydown}
     bind:this={containerElem}
>
  {#if editing}
    <textarea
      class="editor"
      bind:this={textareaElem}
      bind:value={internalContent}
      on:blur={handleBlur}></textarea>
  {:else if isActive}
    <div class="cell" bind:this={cellElem}>
      {internalContent}
    </div>
  {:else}
    <div class="cell">
      {internalContent}
    </div>
  {/if}
</div>

<style>

  .grid-item {
      margin: -1px; /* Adjust margin to overlap borders */
  }

  .cell {
    width: 100%;
    height: 100%;
      min-height: 1.5em;
    white-space: pre-wrap;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    transition: background-color 0.2s ease;
    border: 2px solid #969ca5;
    box-sizing: border-box;
  }

  .grid-item:focus {
    outline: 2px solid #4285f4;
    background-color: #e0f7fa;
  }

  .editor {
    width: 100%;
    height: 100%;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    resize: none;
    box-sizing: border-box;
  }

  .editor:focus {
    outline: 2px solid #4285f4;
  }
</style>
