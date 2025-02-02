<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';
  import { onMount } from 'svelte';

  const maxRows = 2;
  const maxColumns = 3;

  onMount(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const isEditing = document.activeElement?.tagName === 'TEXTAREA';
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
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
</style>

<div class="grid">
  <slot />
</div>
