import { writable, type Writable } from "svelte/store";
import { writable as ls_writable } from "svelte-local-storage-store";
import PocketBase, { type Admin } from "pocketbase";
import type { User } from "./types";

// NERD-MODE
export const nerd: Writable<boolean> = ls_writable("nerd", false);

// PocketBase Config
export const pb = new PocketBase("https://pb.schindlerfelix.de");

export const authStore: Writable<User | Admin | null> = writable(null);
