<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

    // Iconify to load icons
    import Icon from '@iconify/svelte';

    // Importing AppBar
    import { AppBar } from '@skeletonlabs/skeleton';

    // Types
    import type { DrawerSettings } from '@skeletonlabs/skeleton';

    // Stores
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

    // Drawer Handler
    function drawerOpen(): void {
        const s: DrawerSettings = { id: 'doc-sidenav' };
        drawerStore.open(s);
    } 

</script>


    <!-- App Bar -->
    <AppBar shadow="shadow-xl">
        <svelte:fragment slot="lead">
            <div class="flex item-center space-x-4">
                <button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
                    <strong class="text-xl uppercase">Delamain</strong>
                </button>
                <a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
                    <Icon icon="majesticons:menu-expand-right" style="font-size: 40px; " />
                </a>
            </div>
            
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
                Blog
            </a>
            <a
            class="btn btn-sm variant-ghost-surface"
            href=""
            target="_blank"
            rel="noreferrer"
        >
        <i class="fa fa-cog" aria-hidden="true"></i>
        </a>
            <a
                href="/"
            >
                
            </a>
            <a
                
                href=""
                target="_blank"
                rel="noreferrer"
            >
                Login
            </a>
        </svelte:fragment>
    </AppBar>


