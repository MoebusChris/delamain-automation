<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../../app.postcss';


    import { AppBar } from '@skeletonlabs/skeleton';
</script>


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


