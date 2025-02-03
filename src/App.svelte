<script>
  import Grid from './lib/components/Grid.svelte';
  import TextCell from './lib/components/TextCell.svelte';
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
    <div class="header-cell"></div>
      {#each Array(pageOptions.numColumns) as _, columnIndex}
        <div class="header-cell">{String.fromCharCode(65 + columnIndex)}</div>
      {/each}

    {#each Array(pageOptions.numRows) as _, rowIndex}
        <div class="header-cell">{rowIndex + 1}</div>
        {#each Array(pageOptions.numColumns) as _, columnIndex}
          <TextCell id={`cell-${rowIndex + 1}-${columnIndex + 1}`} row={rowIndex + 1} column={columnIndex + 1} content={gridData.find(cell => cell.row === rowIndex + 1 && cell.column === columnIndex + 1)?.content || ""} />
        {/each}
    {/each}
  </Grid>
  <BottomBar />
</main>

<style>
  :global(body) {
      margin: 0;
      padding: 0;
  }
  main {
    margin: 0 auto;
    height: 100%;
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .header-row {
    display: flex;
  }

  .header-cell {
    max-height: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    font-weight: bold;
    border: 1px solid #ccc;
  }

  .row {
    display: flex;
  }
</style>
