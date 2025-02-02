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
  let nonEditElem: HTMLDivElement;

  $: if (content && !internalContent) {
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

  $: if (nonEditElem) {
    nonEditElem.focus();
  }

  function handleEditKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      editing = false;
    }
  }

  function handleBlur() {
    editing = false;
  }
</script>

<style>


  .non-edit {
    width: 100%;
    min-height: 80px;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    padding: 0.5rem;
    transition: background-color 0.2s ease;
    border: 2px solid #969ca5;
  }

  .non-edit:focus {
    outline: 2px solid #4285f4;
    background-color: #e0f7fa;
  }

  .editor {
    width: 100%;
    min-height: 80px;
    margin-bottom: 0.5rem;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    background: white;
    resize: none;
  }

  .editor:focus {
    outline: 2px solid #4285f4;
    background-color: #e0f7fa;
  }
</style>

<div class="grid-item">
  {#if editing}
    <textarea
      class="editor"
      bind:this={textareaElem}
      bind:value={internalContent}
      on:keydown={(event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          editing = false;
        } else {
          handleEditKeydown(event);
        }
      }}
      on:blur={handleBlur}
    >editing</textarea>
  {:else if isActive}
    <div
      class="non-edit"
      bind:this={nonEditElem}
      tabindex="0"
      on:click={handleNonEditClick}
      on:dblclick={handleDoubleClick}
      on:keydown={(event) => { if (event.key === 'Enter') startEditing(); }}
    >
      {internalContent}
    </div>
  {:else}
    <div class="non-edit">
      {internalContent}
    </div>
  {/if}
</div>
