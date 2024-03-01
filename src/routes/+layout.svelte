<script lang="ts">
    import { base } from "$app/paths";
    import Navbar from "components/Navbar.svelte";
    import NavbarItem from "components/NavbarItem.svelte";
    import LoadingScreen from "components/LoadingScreen.svelte";

    let loadingDone: boolean;
</script>

{#if !loadingDone}
    <LoadingScreen bind:done={loadingDone} />
{/if}

<Navbar title="portfolio">
    <NavbarItem href="{base}/about">About</NavbarItem>
    <NavbarItem href="{base}/freshman">Freshman</NavbarItem>
    <NavbarItem href="{base}/sophomore">Sophomore</NavbarItem>
    <NavbarItem href="{base}/junior">Junior</NavbarItem>
    <NavbarItem href="{base}/senior">Senior</NavbarItem>
</Navbar>

<div id="background">
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    @import "../global.scss";

    #background {
        // see global.css for background image options
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        width: 100%;
        flex: 1;
    }

    main {
        width: 65vw;
        margin: 0 auto;
        padding-top: 3em;
    }

    @media screen and (max-width: $screen-width-small) {
        main {
            width: auto;
            padding: 0 1em;
        }
    }

</style>
