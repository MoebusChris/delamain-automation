<script lang='ts'>


    // Types
    import type { DrawerSettings } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';

    // Docs
    import DocsIcon from '../DocsIcon/DocsIcon.svelte'; 


    // Iconify to load icons
    import Icon from '@iconify/svelte';

    // Components
    import { AppBar } from '@skeletonlabs/skeleton';
    
    // Utilities
    import { LightSwitch } from '@skeletonlabs/skeleton'
    import { popup } from '@skeletonlabs/skeleton';

    // Stores
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

    // Drawer Handler
    function drawerOpen(): void {
        const s: DrawerSettings = { id: 'doc-sidenav' };
        drawerStore.open(s);
    }

    // Popup Handler
    let popupSettings: PopupSettings = {
        event: 'click',
        target: 'features'
    };

</script>


    <!-- App Bar -->
    <AppBar shadow="shadow-xl">
        <svelte:fragment slot="lead">

            <div class="flex items-center space-x-4">
                <!-- Hamburger Menu -->
                <button on:click={drawerOpen} class="lg:!hidden">
                    <i class="fa-solid fa-bars text-xl" />
                </button>
                <!-- Logo -->
                <a class="lg:!ml-0 lg:w-auto overflow-hidden" href="/" title="Go to Homepage">
                    <strong class="text-xl uppercase">Delamain</strong>
                </a>
            </div>
            
        </svelte:fragment>
        <svelte:fragment slot="trail">

            <!-- Jump to -->
            <div>
                <!-- Trigger -->
                <button class="btn hover:variant-soft-primary" use:popup={popupSettings}>
                    <span>Jump to</span>
                    <i class="fa-solid fa-caret-down opacity-50" />
                </button>
                <!-- popup -->
                <div class="card p-4 w-60 shadow-xl" data-popup="features">
                    <nav class="list-nav">
                        <ul>
                            <section class="flex justify-between items-center">
                                <h6 class="h6">Mode</h6>
                                <LightSwitch />
                            </section>
                            <hr class="!my-4" />
                            <li>
                                <a href="/">
                                    <span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
                                    <span>Homepage</span>
                                </a>
                            </li>
                            <li>
                                <a href="/blog">
                                    <span class="w-6 text-center"><i class="fa-solid fa-leaf" /></span>
                                    <span>Blog</span>
                                </a>
                            </li>
                            <hr class="!my-4" />
                            <li>
                                <a href="/workflow/mytask">
                                    <span class="w-6 text-center"><i class="fa-solid fa-display" /></span>
                                    <span>Workflow</span>
                                </a>
                            </li>
                            <li>
                                <a href="/accounting/asset">
                                    <span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
                                    <span>Accounting</span>
                                </a>
                            </li>
                            <li>
                                <a href="/finance/dashboard">
                                    <span class="w-6 text-center"><i class="fa-solid fa-money-check-dollar" /></span>
                                    <span>Finance</span>
                                </a>
                            </li>
                            <li>
                                <a href="/automation/pdf-tool">
                                    <span class="w-6 text-center"><i class="fa-solid fa-robot" /></span>
                                    <span>Automation</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- Setting -->

            <button type="button" class="btn-icon bg-initial hover:variant-soft-primary">
                <i class="fa-sharp fa-solid fa-gear text-md" />
            </button>

            <!-- Login -->
            <a
                class="btn bg-initial hover:variant-soft-primary"
                href="/"
            >
            Login
            </a>                   
        </svelte:fragment>
    </AppBar>