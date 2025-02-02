<script>
  import Grid from './lib/components/Grid.svelte';
  import Cell from './lib/components/Cell.svelte';

  let name = 'Svelte with Hot Reload';

  if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      console.log('Hot reloaded!');
    });
  }
</script>

<main>
  <h1>Minimal Grid Example</h1>
  <Grid>
    <Cell content="Cell 1: Click to edit" />
    <Cell content="Cell 2: Click to edit" />
    <Cell content="Cell 3: Click to edit" />
    <Cell content="Cell 4: Click to edit" />
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