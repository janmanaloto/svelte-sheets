import { writable } from "svelte/store";

export const activeCell = writable<{ row: number; column: number }>({
  row: 1,
  column: 1,
});
