<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';
	import BottomBar from './lib/components/BottomBar.svelte';

  const gridData = [
    ["Cell 1: Click to edit", "Cell 2: Click to edit", "Cell 3: Click to edit", "Cell 4: Click to edit"],
    ["Cell 4: Click to edit", "Cell 5: Click to edit", "Cell 6: Click to edit", "Cell 7: Click to edit"],
    ["Cell 7: Click to edit", "Cell 8: Click to edit", "Cell 9: Click to edit", "Cell 10: Click to edit"],
    ["Cell 10: Click to edit", "Cell 11: Click to edit", "Cell 12: Click to edit", "Cell 13: Click to edit"],
  ];
</script>

<main>
  <Grid>
    {#each gridData as row, rowIndex}
      {#each row as content, columnIndex}
        <Cell id={`cell-${rowIndex + 1}-${columnIndex + 1}`} row={rowIndex + 1} column={columnIndex + 1} content={content} />
      {/each}
    {/each}
  </Grid>
  <BottomBar />
</main>

<style>
  main {
    margin: 0 auto;
    height: 100%;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  BottomBar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f8f9fa;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
  }
</style>
