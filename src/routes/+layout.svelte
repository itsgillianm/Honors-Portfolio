<script lang="ts">
    import { base } from "$app/paths";
    import Navbar from "components/Navbar.svelte";
    import NavbarItem from "components/NavbarItem.svelte";
</script>

<Navbar title="portfolio">
    <NavbarItem href="{base}/about">About</NavbarItem>
    <NavbarItem href="{base}/freshman">Freshman</NavbarItem>
    <NavbarItem href="{base}/sophomore">Sophomore</NavbarItem>
    <NavbarItem href="{base}/junior">Junior</NavbarItem>
    <NavbarItem href="{base}/senior">Senior</NavbarItem>
</Navbar>
<main>
    <slot />
</main>

<style lang="scss">
    @import "../global.scss";

    main {
        min-height: 100%;
        margin: 0;
        width: 65vw;
        margin-top: 3em;
    }

    @media screen and (max-width: $screen-width-small) {
        main {
            width: auto;
            padding: 0 1em;
        }
    }

</style>
