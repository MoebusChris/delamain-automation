<!-- Layout: (root) -->
<script lang='ts'>
	// Dependency for Highlight.js
	import hljs from 'highlight.js';
	import '../docs/styles/highlight-js.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Dependency for Floating UI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Sveltekit Importer
	import { browser } from '$app/environment'
	import { page } from '$app/stores';




	// Components & Utilities
	import { AppShell } from '@skeletonlabs/skeleton';


	// Skeleton Stylesheets
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '../app.postcss';



	// Conponents here
	import DocsAppbar from '../docs/components/DocsAppbar/DocsAppbar.svelte';
	import DocsSidebar from '../docs/components/DocsSidebar/DocsSidebar.svelte';
	import DocsDrawer from '../docs/components/DocsDrawer/DocsDrawer.svelte';

	// Set where appbar and sidebar show
	function matchPathWhitelist(pageUrlPath: string): boolean {
		// If homepage route
		if (pageUrlPath === '/') return true;
		// If any blog route
		if (pageUrlPath.includes('/blog')) return true;
		return false;
	}

	// Pass an object containing each of the Floating UI
	storePopup.set({
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	});



	// Reactive
	// Disable left sidebar on homepage and blog
	$: slotSidebarLeft = matchPathWhitelist($page.url.pathname) ? 'w-0' : 'bg-surface-50-900-token lg:w-auto'
</script>

<!-- Overlay -->
<DocsDrawer />


<!-- App Shell -->
<AppShell {slotSidebarLeft} regionPage="overflow-y-scroll" slotFooter="bg-black p-4">
	<!-- Header (Navbar) -->
	<svelte:fragment slot="header">
		<DocsAppbar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<DocsSidebar class="hidden lg:grid w-[360px] overflow-hidden" />
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

		
	<svelte:fragment slot="footer">
		
	</svelte:fragment>
</AppShell>
 