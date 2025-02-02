<script>
    import { activeCell } from '../stores/activeCell';
</script>

<div class="fixed-bottom">
  {#if $activeCell}
    <div class="active-cell">
      {JSON.stringify($activeCell)}
    </div>
  {/if}
</div>

<style lang="css">
    .fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e5e7eb;
}

.active-cell {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
}

</style>