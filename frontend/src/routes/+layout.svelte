<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { Writable, writable } from 'svelte/store';
	import { page } from '$app/stores';
	
	// Conponents here
	import Navbar from '$lib/components/navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// This is an example of how to use a store to control the selected value of the AppRail
	const storeValue: Writable<number> = writable(0);





</script>



<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-auto">
	<!-- Navigation Bar -->
	<svelte:fragment slot="header">
		<Navbar />
	</svelte:fragment>
	<!-- App Rail -->
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />

	</svelte:fragment>


	
	<!-- Page Route Content -->
	<slot />

		
	<svelte:fragment slot="footer">
		
	</svelte:fragment>
</AppShell>
 