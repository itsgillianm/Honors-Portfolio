<script lang="ts">
    import ColumnContainer from "$components/ColumnContainer.svelte";
    import Column from "$components/Column.svelte";
    import { SCREEN_WIDTH_NARROW } from "$lib/global";
    import { screenWidth } from "$lib/stores";

    export let first: 'img' | 'text' = 'img';

    const order = Array(2);
    const setOrder = (f: typeof first) => {
        order[f === 'img' ? 0 : 1] = 'img';
        order[f === 'text' ? 0 : 1] = 'text';
    }
    setOrder(first);

    $: setOrder($screenWidth <= SCREEN_WIDTH_NARROW ? 'img' : first);
</script>

<div class="page-block">
    <ColumnContainer>
        {#each order as e}
            {#if e === 'img' && $$slots.img}
                <Column vCenter={true} widthFactor={0.5}>
                    <slot name="img" />
                </Column>
            {:else if e === 'text' && $$slots.text}
                <Column vCenter={true}>
                    <slot name="text" />
                </Column>
            {/if}
        {/each}
    </ColumnContainer>
</div>

<style lang="scss">
    :global(.page-block + .page-block) {
        margin-top: 3rem;
    }
</style>