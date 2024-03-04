<script lang="ts">
    import SectionContainer, { type ContainerDir } from "$components/SectionContainer.svelte";
    import Section from "$components/Section.svelte";
    import { SCREEN_WIDTH_NARROW } from "$lib/global";
    import { screenWidth } from "$lib/stores";
    import classNames from "classnames";

    type SlotName = 'img' | 'text';
    export let first: SlotName = 'img';
    export let dir: ContainerDir = 'column';

    const order: SlotName[] = Array(2);
    const setOrder = (f: SlotName) => {
        order[f === 'img' ? 0 : 1] = 'img';
        order[f === 'text' ? 0 : 1] = 'text';
    }
    setOrder(first);

    $: setOrder($screenWidth <= SCREEN_WIDTH_NARROW ? 'text' : first);
</script>

<div class={classNames('page-block', {'no-image': !$$slots.img})}>
    <SectionContainer dir={dir}>
        {#each order as e}
            {#if e === 'img' && $$slots.img}
                <Section vCenter={true} widthFactor={0.5}>
                    <slot name="img" />
                </Section>
            {:else if e === 'text' && $$slots.text}
                <Section vCenter={true}>
                    <slot name="text" />
                </Section>
            {/if}
        {/each}
    </SectionContainer>
</div>

<style lang="scss">
    .page-block {
        margin-bottom: 2rem;
    }

    :global(.page-block + .page-block) {
        margin-top: 3rem;

        &.no-image {
            margin-top: 1rem;
        }
    }

    :global(img + img) {
        margin-top: 1.5rem;
    }

    :global(iframe) {
        aspect-ratio: 4 / 3;
    }
</style>