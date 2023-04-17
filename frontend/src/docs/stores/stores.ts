import { writable, type Writable } from 'svelte/store';
import { localStorageStore } from '$lib/utilities/LocalStorageStore/LocalStorageStore';

// Svelte Writable Store ---

// Set within root layout, persists current SvelteKit $page.url.pathname
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);

// Set within root layout, set TRUE if served in Vercel production mode
export const storeIsVercelProduction: Writable<boolean> = writable(false);

// Local Storage Store ---

// Persists the tab selection for the user'spreferred onboarding method
export const storeOnboardingMethod: Writable<string> = localStorageStore('onboardingMethod', 'cli');

