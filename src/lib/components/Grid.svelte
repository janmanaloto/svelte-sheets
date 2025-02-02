<script lang="ts">
  import { activeCell } from '../stores/activeCell.js';
  import { onMount } from 'svelte';

  onMount(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        event.preventDefault();
        activeCell.update((current: { row: number; column: number } | null) => {
          if (!current) return { row: 1, column: 1 };
          const newRow = event.key === 'ArrowDown' ? current.row + 1 : event.key === 'ArrowUp' ? current.row - 1 : current.row;
          const newColumn = event.key === 'ArrowRight' ? current.column + 1 : event.key === 'ArrowLeft' ? current.column - 1 : current.column;
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
    padding: 1rem;
  }
</style>

<div class="grid">
  {#if $activeCell}
    <div class="active-cell">
      {JSON.stringify($activeCell)}
    </div>
  {/if}
  <slot />
</div> 