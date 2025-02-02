<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';
	import BottomBar from './lib/components/BottomBar.svelte';

  const gridData = [
    [
      { content: "Cell 1: Click to edit", row: 1, column: 1 },
      { content: "Cell 2: Click to edit", row: 1, column: 2 },
      { content: "Cell 3: Click to edit", row: 1, column: 3 },
      { content: "Cell 4: Click to edit", row: 1, column: 4 }
    ],
    [
      { content: "Cell 1: Click to edit", row: 2, column: 1 },
      { content: "Cell 2: Click to edit", row: 2, column: 2 },
      { content: "Cell 3: Click to edit", row: 2, column: 3 },
      { content: "Cell 4: Click to edit", row: 2, column: 4 }
    ],
    [
      { content: "Cell 1: Click to edit", row: 3, column: 1 },
      { content: "Cell 2: Click to edit", row: 3, column: 2 },
      { content: "Cell 3: Click to edit", row: 3, column: 3 },
      { content: "Cell 4: Click to edit", row: 3, column: 4 }
    ],
    [
      { content: "Cell 1: Click to edit", row: 4, column: 1 },
      { content: "Cell 2: Click to edit", row: 4, column: 2 },
      { content: "Cell 3: Click to edit", row: 4, column: 3 },
      { content: "Cell 4: Click to edit", row: 4, column: 4 }
    ]
  ];
</script>

<main>
  <Grid>
    {#each gridData as row, rowIndex}
      {#each row as cell}
        <Cell id={`cell-${cell.row}-${cell.column}`} row={cell.row} column={cell.column} content={cell.content} />
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
