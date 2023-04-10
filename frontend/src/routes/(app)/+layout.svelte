<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { Writable, writable } from 'svelte/store';
	import { page } from '$app/stores';
	


	// This is an example of how to use a store to control the selected value of the AppRail
	const storeValue: Writable<number> = writable(0);





</script>



<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Delamain Automation</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href=""
					target=""
					rel=""
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href=""
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href=""
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>

		<!-- App Rail -->







		

	</svelte:fragment>


	<!--side bar-->
	
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<AppRailTile label="Tile 1" value={0}>(icon)</AppRailTile>
			<AppRailTile label="Tile 2" value={1}>(icon)</AppRailTile>
			<AppRailTile label="Tile 3" value={2}>(icon)</AppRailTile>
		</AppRail>
	</svelte:fragment>
	
	<!-- Page Route Content -->
	<slot />

		<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
 