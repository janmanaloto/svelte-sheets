<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';
	import BottomBar from './lib/components/BottomBar.svelte';
</script>

<main>
  <Grid>
    <Cell id="1" row={1} column={1} content="Cell 1: Click to edit" />
    <Cell id="2" row={1} column={2} content="Cell 2: Click to edit" />
    <Cell id="3" row={1} column={3} content="Cell 3: Click to edit" />
    <Cell id="4" row={2} column={1} content="Cell 4: Click to edit" />
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