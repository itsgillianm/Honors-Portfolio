<script lang="ts">
    import Section from "$components/Section.svelte";
    import SectionContainer from "$components/SectionContainer.svelte";

    export let title: string;
    export let subtitle: string | undefined = undefined;
    export let imgSrc: string;
    export let imgAlt: string;
</script>

<SectionContainer>
    <Section>
        <img src={imgSrc} alt={imgAlt}>
    </Section>
    <Section vCenter={true}>
        <h1>{title}</h1>
        {#if subtitle}
            <h2>{subtitle}</h2>
        {/if}
    </Section>
</SectionContainer>
