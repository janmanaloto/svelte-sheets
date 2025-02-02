<script lang="ts">
  export let content: string;
  let internalContent: string;
  let active = false;

  $: if (content && !internalContent) {
    internalContent = content;
  }
</script>

<style>
  .grid-item {
    background: #f4f4f4;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 100px;
  }

  .content {
    width: 100%;
    min-height: 80px;
    margin-bottom: 0.5rem;
    outline: none;
    white-space: pre-wrap;
    font-family: inherit;
    font-size: inherit;
    background: none;
    border: none;
    resize: none;
    color: inherit;
    display: block;
    padding: 0;
  }

  .content.active {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
    background: white;
  }

  button {
    display: block;
    margin-top: 0.5rem;
  }
</style>

<div class="grid-item">
  <textarea
    class="content"
    class:active
    readonly={!active}
    bind:value={internalContent}
  ></textarea>
  <button on:click={() => active = !active}>
    {active ? 'Save' : 'Edit'}
  </button>
</div>
