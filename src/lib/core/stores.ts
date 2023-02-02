import { writable, type Writable } from "svelte/store";
import { persisted } from "svelte-local-storage-store";
import PocketBase, { type Admin } from "pocketbase";
import type { User } from "./types";

// NERD-MODE
export const nerd: Writable<boolean> = persisted("nerd", false);

// PocketBase Config
export const pb = new PocketBase("http://127.0.0.1:8090");

export const authStore: Writable<User | Admin | null> = writable(null);
