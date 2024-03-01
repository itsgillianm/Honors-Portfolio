<script lang="ts">
    import { base } from "$app/paths";
    import ImageBlock from "components/ImageBlock.svelte";
    import ColumnContainer from "components/ColumnContainer.svelte";
    import Column from "components/Column.svelte";
</script>


<ColumnContainer>
    <Column>
        <img src="{base}/images/butters.jpeg" alt="butters page title">
    </Column>
    <Column>
        <h1>Sour</h1>
        <h2>Sophomore Year</h2>
    </Column>
</ColumnContainer>

<hr>
