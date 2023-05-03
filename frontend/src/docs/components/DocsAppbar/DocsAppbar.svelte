<script lang='ts'>


    // Types
    import type { DrawerSettings } from '@skeletonlabs/skeleton';

    // Docs
    import DocsIcon from '../DocsIcon/DocsIcon.svelte'; 


    // Iconify to load icons
    import Icon from '@iconify/svelte';

    // Components
    import { AppBar } from '@skeletonlabs/skeleton';


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

            <div class="flex items-center space-x-4">
                <!-- Hamburger Menu -->
                <button on:click={drawerOpen} class="lg:!hidden">
                    <Icon icon="ic:twotone-menu" style="font-size: 40px" />
                </button>
                <!-- Logo -->
                <a class="lg:!ml-0 lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
                    <strong class="text-xl uppercase">Delamain</strong>
                </a>
            </div>
            
        </svelte:fragment>
        <svelte:fragment slot="trail">

            <!-- Blog -->
            <a
                class="btn variant-ghost-surface"
                href="/blog"
            >
            Blog
            </a>            
            <!-- Setting -->

            <button type="button" class="btn bg-initial">
                <Icon icon="akar-icons:gear" style="font-size:20px;" />
            </button>

            <!-- Login -->
            <a
                class="btn bg-initial"
                href="/"
            >
            Login
            </a>                   
        </svelte:fragment>
    </AppBar>