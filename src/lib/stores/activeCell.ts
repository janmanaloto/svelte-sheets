import { writable } from 'svelte/store';

export const activeCell = writable<{ row: number; column: number } | null>(null); 