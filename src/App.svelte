<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';
  import { activeCell } from './lib/stores/activeCell';

  let name = 'Svelte with Hot Reload';

  activeCell.set({ row: 1, column: 1 });

  if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      console.log('Hot reloaded!');
    });
  }
</script>

<main>
  <h1>Minimal Grid Example</h1>
  <Grid>
    <Cell id="1" row={1} column={1} content="Cell 1: Click to edit" />
    <Cell id="2" row={1} column={2} content="Cell 2: Click to edit" />
    <Cell id="3" row={1} column={3} content="Cell 3: Click to edit" />
    <Cell id="4" row={2} column={1} content="Cell 4: Click to edit" />
  </Grid>
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  h1 {
    text-align: center;
    color: #333;
  }
</style> 