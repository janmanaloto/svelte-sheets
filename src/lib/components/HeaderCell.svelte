# Create a new file
<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';

  export let id: string;
  export let content: string;
  export let row: number;
  export let column: number;
  export let isColumnHeader = false;

  let containerElem: HTMLDivElement;

  $: isActive = false;

  function handleHeaderClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }
</script>

<div
  class="header-cell {isColumnHeader ? 'column-header' : 'row-header'}"
  tabindex="-1"
  role="columnheader"
  on:click={handleHeaderClick}
  bind:this={containerElem}
>
  <div class="cell">
    {content}
  </div>
</div>

<style>
  .header-cell {
    margin: -1px;
    user-select: none;
    cursor: default;
  }

  .cell {
    width: 100%;
    height: 100%;
    min-height: 1.5em;
    white-space: pre-wrap;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    font-weight: bold;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  .column-header .cell {
    border-top: 2px solid #969ca5;
  }

  .row-header .cell {
    border-left: 2px solid #969ca5;
  }

  .header-cell:focus {
    outline: none;
  }
</style>
