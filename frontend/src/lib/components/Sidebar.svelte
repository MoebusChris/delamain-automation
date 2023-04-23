<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';

    // Iconify to load icons
    import Icon from '@iconify/svelte';

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
    const storeCategory: Writable<string> = writable('workflow'); // workflow | accounting | finance | tools ---You should figure out what the props do in the writable.
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
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['finance','input','output'].includes(linkSet.id)); 
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
    <!--App Rail-->
    <AppRail selected={storeCategory} class="border-r border-surface-500/30">
    	<AppRailTile label="Workflow" value={'workflow'}><Icon icon="typcn:arrow-repeat-outline" style="font-size: 40px; " /></AppRailTile>
    	<AppRailTile label="Accounting" value={'accounting'}><Icon icon="typcn:calculator" style="font-size: 40px; " /></AppRailTile>
    	<AppRailTile label="Finance" value={'finance'}><Icon icon="typcn:chart-bar-outline" style="font-size: 40px; " /></AppRailTile>
        <AppRailTile label="Automation" value={'automation'}><Icon icon="typcn:spanner-outline" style="font-size: 40px; " /></AppRailTile>
    </AppRail>
    <!--Nav Link-->
	<section class="p-4 pb-20 space-y-4 overflow-y-auto w-64">
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