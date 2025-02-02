<script>
  export let title = 'Cell';
  export let description = 'This is a cell.';
</script>

<style>
  .grid-item {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .grid-item h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
  }

  .grid-item p {
    margin: 0;
    color: #666;
  }
</style>

<div class="grid-item">
  <h3>{title}</h3>
  <p>{description}</p>
</div> 