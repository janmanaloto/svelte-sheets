<script lang="ts">
  import BaseCell from './BaseCell.svelte';
  import { activeCell } from '../stores/activeCell.js';
  import { get } from 'svelte/store';

  export let id: string;
  export let content: string;
  export let row: number;
  export let column: number;

  let internalContent: string;
  let editing = false;
  let textareaElem: HTMLTextAreaElement;
  let baseCellComponent: BaseCell;

  $: if (content) {
    internalContent = content;
  }

  function startEditing() {
    console.log('startEditing');
    editing = true;
  }

  $: if (editing && textareaElem) {
    textareaElem.focus();
  }

  function handleEditKeydown(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === 'Enter') {
      event.preventDefault();
      editing = false;
      baseCellComponent.focusCell();
    }

    if (event.key === 'Escape') {
      editing = false;
      baseCellComponent.focusCell();
    }
  }

  function handleBlur() {
    editing = false;
  }
</script>

<BaseCell 
  bind:this={baseCellComponent}
  {id} 
  {row} 
  {column} 
  {content} 
  on:startEdit={startEditing}
>
  {#if editing}
    <textarea
      class="editor"
      bind:this={textareaElem}
      bind:value={internalContent}
      on:blur={handleBlur}
      on:keydown={handleEditKeydown}
    ></textarea>
  {:else}
    <div class="cell">
      {internalContent}
    </div>
  {/if}
</BaseCell>

<style>
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