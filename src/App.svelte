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
    <Cell title="Item 1" description="This is the first item." />
    <Cell title="Item 2" description="This is the second item." />
    <Cell title="Item 3" description="This is the third item." />
    <Cell title="Item 4" description="This is the fourth item." />
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