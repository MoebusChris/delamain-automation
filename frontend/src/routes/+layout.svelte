<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';

	// Dependency for Highlight.js
	import hljs from 'highlight.js';
	import '../docs/styles/highlight-js.css'
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Dependency for Floating UI
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Most of your app wide CSS should be put in this file
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	// Skeleton Stylesheets
	import '../app.postcss';
	import '../docs/styles/blog.css';

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
 