<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';
	import BottomBar from './lib/components/BottomBar.svelte';

  const pageOptions = {
    numRows: 4,
    numColumns: 4
  };

  const gridData = [
    { content: "Cell 1: Click to edit", row: 1, column: 1 },
    { content: "Cell 2: Click to edit", row: 1, column: 2 },
    { content: "Cell 3: Click to edit", row: 1, column: 3 },
    { content: "Cell 4: Click to edit", row: 1, column: 4 },
    { content: "Cell 9: Click to edit", row: 3, column: 1 },
    { content: "Cell 10: Click to edit", row: 3, column: 2 },
    { content: "Cell 11: Click to edit", row: 3, column: 3 },
    { content: "Cell 12: Click to edit", row: 3, column: 4 },
    { content: "Cell 14: Click to edit", row: 4, column: 2 },
    { content: "Cell 15: Click to edit", row: 4, column: 3 },
    { content: "Cell 16: Click to edit", row: 4, column: 4 }
  ];
</script>

<main>
  <Grid numRows={pageOptions.numRows} numColumns={pageOptions.numColumns}>
    {#each Array(pageOptions.numRows) as _, rowIndex}
      {#each Array(pageOptions.numColumns) as _, columnIndex}
        <Cell id={`cell-${rowIndex + 1}-${columnIndex + 1}`} row={rowIndex + 1} column={columnIndex + 1} content={gridData.find(cell => cell.row === rowIndex + 1 && cell.column === columnIndex + 1)?.content || ""} />
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
