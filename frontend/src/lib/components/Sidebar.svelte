<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

    // Menu links for the sidebar
    import { menuNavLinks } from '../../docs/links';

    import { AppRail, AppRailTile} from '@skeletonlabs/skeleton';
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
    // Drawer Utility
    import { writable, type Writable  } from 'svelte/store';
	import { storeCurrentUrl } from '../../docs/stores/stores';

    //Svelte Page
	import { page } from '$app/stores';
	


    // Props
    export let embedded = false;

    // Local
    const storeCategory: Writable<string> = writable(); // workflow | accounting | finance | tools ---You should figure out what the props do in the writable.
    let filteredMenuNavLinks: any [] = menuNavLinks;

    // ListItem Click Handler
    function onListItemClick(): void {
        // On drawer embed only
        if (!embedded) return;
        drawerStore.close();
    }

    function setNavCategory(c: string): void {
        if (c === 'blog') return;
        storeCategory.set(c);
        // Prettier-ignore
        switch($storeCategory) {
            case ('workflow'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['workflow'].includes(linkSet.id)); 
                break;
            case ('accounting'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['accounting'].includes(linkSet.id)); 
                break;
            case ('finance'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['finance'].includes(linkSet.id)); 
                break;
            case ('automation'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['automation'].includes(linkSet.id)); 
                break;
        }
    }
    
    // Lifecycle
    page.subscribe((p) => {
        let pathMatch: string = p.url.pathname.split('/')[1];
        if (!pathMatch) return;
        setNavCategory(pathMatch);
    });
    storeCategory.subscribe((c: string) => setNavCategory(c));



    // Reactive
    $: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '');


</script>


<!-- App Rail -->
<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
    <AppRail selected={storeCategory} height="h-full">
    	<AppRailTile label="Workflow" value={'workflow'}><i class="fa-duotone fa-arrows-spin" /></AppRailTile>
    	<AppRailTile label="Accounting" value={'accounting'}>(icon)</AppRailTile>
    	<AppRailTile label="Finance" value={'finance'}>(icon)</AppRailTile>
        <AppRailTile label="Automation" value={'automation'}>(icon)</AppRailTile>
    </AppRail>


	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
		{#each filteredMenuNavLinks as { id, title, list }, i}
			{#if list.length > 0}
				<!-- Title -->
				<div {id} class="text-primary-700 dark:text-primary-500 font-bold uppercase px-4">{title}</div>
				<!-- Navigation List -->
				<nav class="list-nav">
					<ul>
						{#each list as { href, label, badge }}
							<li on:click={onListItemClick} on:keypress>
								<a {href} class={classesActive(href)} data-sveltekit-preload-data="hover">
									<span class="flex-auto">{@html label}</span>
									{#if badge}<span class="badge variant-filled-secondary">{badge}</span>{/if}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
				<!-- Divider -->
				{#if i + 1 < filteredMenuNavLinks.length}<hr class="!my-6 opacity-50" />{/if}
			{/if}
		{/each}
	</section>
</div>    