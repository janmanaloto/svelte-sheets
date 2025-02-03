<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';

  export let numRows: number;
  export let numColumns: number;

  const maxRows = numRows;
  const maxColumns = numColumns;

  function handleKeydown(event: KeyboardEvent) {
      const isEditing = document.activeElement?.className.split(" ").find(className => className === 'editor') !== undefined;
      if (!isEditing && (
          event.key === 'ArrowDown' ||
          event.key === 'ArrowUp' ||
          event.key === 'ArrowLeft' ||
          event.key === 'ArrowRight'
      )) {
          event.preventDefault();
          activeCell.update((current: { row: number; column: number } | null) => {
              if (!current) return { row: 1, column: 1 };
              const newRow = event.key === 'ArrowDown' ? Math.min(current.row + 1, maxRows) : event.key === 'ArrowUp' ? Math.max(current.row - 1, 1) : current.row;
              const newColumn = event.key === 'ArrowRight' ? Math.min(current.column + 1, maxColumns) : event.key === 'ArrowLeft' ? Math.max(current.column - 1, 1) : current.column;
              return { row: newRow, column: newColumn };
          });
      }
  }


  $: {
    const activeElement = document.querySelector('.active');
    if (activeElement) {
      (activeElement as HTMLElement).focus();
    }
  }
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 50px repeat(var(--numColumns), 200px);
    grid-auto-rows: minmax(40px, auto);
    gap: 1px;
    overflow: auto;
    max-width: 100%;
  }
</style>

<div class="grid" role="grid" tabindex="-1" style="--numColumns: {numColumns};" on:keydown={handleKeydown}>
  <slot />
</div>
