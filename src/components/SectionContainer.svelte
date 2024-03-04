<script lang="ts" context="module">
    export type ContainerDir = 'row' | 'column';
</script>

<script lang="ts">
    import { screenWidth } from "$lib/stores";
    import { SCREEN_WIDTH_NARROW } from "$lib/global";

    export let dir: ContainerDir = 'column';
    let override = dir;
    $: override = $screenWidth <= SCREEN_WIDTH_NARROW ? 'row' : dir;
</script>

<div class={`container ${override}-container`}>
    <slot />
</div>

<style lang="scss">
    @import "@styles/global.scss";

    .container {
        display: flex;
    }

    .column-container {
        flex-direction: row;
        gap: 3rem;
    }

    .row-container {
        flex-direction: column;
        gap: 2rem;
        
    }
</style>
