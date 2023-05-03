<script lang="ts">
    //import { storeVercelProductionMode } from "$docs/stores/stores";
    //import { TableOfContents } from '@skeletonlabs/skeleton';

    //props
    export let sidebar: boolean = false;
    export let tocKey: any = undefined;

    // Classes
    const cBase = 'page-padding flex items-start gap-10';
    const cColLeft = 'page-container-aside';
    const cColRight = 'sticky top-10 hidden xl:block space-y-4 w-72';

    // Reactive
    $: classesBase = `${cBase} ${$$props.class ?? ''}`;
    $: classesColLeft = `${cColLeft}`;
    $: classesColRight = `${cColRight}`;
</script>

<div class="layout-docs {classesBase}">
    <!-- Content -->
    <div class="layout-docs-content {classesColLeft}">
        <slot />
    </div>
</div>