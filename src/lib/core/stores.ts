import { writable } from "svelte/store";
import { writable as ls_writable } from "svelte-local-storage-store";
import PocketBase from "pocketbase";

export const authStore = writable({ model: null });

export const nerd = ls_writable("nerd", false);

export const pb = new PocketBase("https://pb.schindlerfelix.de");
