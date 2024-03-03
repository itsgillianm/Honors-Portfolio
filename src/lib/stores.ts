import { SCREEN_WIDTH_NARROW } from "$lib/global";
import { writable } from "svelte/store";

export const screenWidth = writable(SCREEN_WIDTH_NARROW+1); // start wide
