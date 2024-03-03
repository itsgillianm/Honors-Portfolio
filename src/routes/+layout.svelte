<script lang="ts">
    import { base } from "$app/paths";
    import Navbar from "$components/Navbar.svelte";
    import NavbarItem from "$components/NavbarItem.svelte";
    import LoadingScreen from "$components/LoadingScreen.svelte";
    import { screenWidth } from "$lib/stores";

    let loadingDone: boolean;
</script>

<svelte:window bind:innerWidth={$screenWidth} />

{#if !loadingDone}
    <LoadingScreen bind:done={loadingDone} />
{/if}

<Navbar>
    <NavbarItem href="{base}/">Home</NavbarItem>
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
    @import "@styles/global.scss";

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
        max-width: 60rem;
        margin: 0 auto;
        padding: 3rem 0 2rem;
    }

    @media screen and (max-width: $screen-width-narrow) {
        main {
            width: auto;
            padding: 2rem 1rem;
        }
    }

</style>
