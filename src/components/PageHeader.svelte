<script lang="ts">
    import Column from "$components/Column.svelte";
    import ColumnContainer from "$components/ColumnContainer.svelte";

    export let title: string;
    export let subtitle: string = "";
    export let imgSrc: string;
    export let imgAlt: string;
</script>

<ColumnContainer>
    <Column>
        <img src={imgSrc} alt={imgAlt}>
    </Column>
    <Column style="display:flex; flex-direction:column; justify-content:center;">
        <h1>{title}</h1>
        {#if subtitle}
            <h2>{subtitle}</h2>
        {/if}
    </Column>
</ColumnContainer>
