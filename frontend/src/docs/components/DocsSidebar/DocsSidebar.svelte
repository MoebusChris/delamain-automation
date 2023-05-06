<script lang='ts'>
	import { page } from '$app/stores';
    import { writable, type Writable  } from 'svelte/store';

    // Iconify to load icons
    import Icon from '@iconify/svelte';
    // Menu links for the sidebar
    import { menuNavLinks } from '../../links';

    import { AppRail, AppRailTile} from '@skeletonlabs/skeleton';

    // Stores
	import { storeCurrentUrl } from '../../stores/stores';
    import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

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
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'workflow');
                break;
            case ('accounting'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'accounting');
                break;
            case ('finance'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => ['finance', 'input', 'output'].includes(linkSet.id));
                break;
            case ('automation'): 
                filteredMenuNavLinks = menuNavLinks.filter((linkSet: any) => linkSet.id === 'automation');
                break;
        }
    }
    
    // Lifecycle
    page.subscribe((p) => {
        let pathMatch: string = p.url.pathname.split('/')[1];
        if (!pathMatch) return;
        if (['input', 'output'].includes(pathMatch)) pathMatch = 'finance';
        setNavCategory(pathMatch);
    });
    storeCategory.subscribe((c: string) => setNavCategory(c));



    // Reactive
    $: classesActive = (href: string) => ($storeCurrentUrl?.includes(href) ? 'bg-primary-active-token' : '');


</script>


<!-- App Rail -->
<div class="grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 {$$props.class ?? ''}">
    <!--App Rail-->
    <AppRail selected={storeCategory} background="bg-transparent" border="border-r border-surface-500/30">
        <div class="lg:hidden">
            <AppRailTile label="Home" tag="a" href="/" value={'home'} on:click={onListItemClick}><i class="fa-solid fa-home text-2xl" /></AppRailTile>
            <hr class="opacity-30" />
        </div>
    	<AppRailTile label="Workflow" value={'workflow'}><i class="fa-sharp fa-solid fa-display text-2xl" /></AppRailTile>
    	<AppRailTile label="Accounting" value={'accounting'}><i class="fa-sharp fa-solid fa-book text-2xl" /></AppRailTile>
    	<AppRailTile label="Finance" value={'finance'}><i class="fa-sharp fa-solid fa-money-check-dollar text-2xl" /></AppRailTile>
        <AppRailTile label="Automation" value={'automation'}><i class="fa-sharp fa-solid fa-robot text-2xl" /></AppRailTile>
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