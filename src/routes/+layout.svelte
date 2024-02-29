<script lang="ts">
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import Navbar from "components/Navbar.svelte";
    import NavbarItem from "components/NavbarItem.svelte";

    export const BACKGROUND_IMAGE_URL = "";

    let loadingTimeout: number | null = -1;
    const LOADING_DURATION = 2000;

    onMount(() => {
        loadingTimeout = setTimeout(() => {
            loadingTimeout = null;
        }, LOADING_DURATION);
    });

    const clearLoading = () => {
        if (loadingTimeout != null) {
            clearTimeout(loadingTimeout);
            loadingTimeout = null;
        }
    }
</script>

{#if loadingTimeout != null}
    <div
        id="loading"
        style={`--loading-duration:${LOADING_DURATION}ms`}
        on:click={clearLoading}
        role="presentation"
    />
{/if}

<Navbar title="portfolio">
    <NavbarItem href="{base}/about">About</NavbarItem>
    <NavbarItem href="{base}/freshman">Freshman</NavbarItem>
    <NavbarItem href="{base}/sophomore">Sophomore</NavbarItem>
    <NavbarItem href="{base}/junior">Junior</NavbarItem>
    <NavbarItem href="{base}/senior">Senior</NavbarItem>
</Navbar>

<div
    id="background"
    style={BACKGROUND_IMAGE_URL && `background-image:url(${BACKGROUND_IMAGE_URL})`}
>
    <main>
        <slot />
    </main>
</div>

<style lang="scss">
    @import "../global.scss";

    #background {
        // background-image set inline so $base can be used
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        width: 100%;
        flex: 1;
    }

    @keyframes loading {
        0% {opacity: 0.8;}
    }

    // should start in the "off" style and have animation initiate
    #loading {
        position: fixed;
        inset: 0;
        background-color: var(--color-primary);
        opacity: 0;
        animation-name: loading;
        animation-duration: var(--loading-duration);
        z-index: 1;
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
