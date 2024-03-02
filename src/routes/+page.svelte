<script lang="ts">
    import { base } from "$app/paths";
    import Column from "components/Column.svelte";
    import ColumnContainer from "components/ColumnContainer.svelte";
    import GraphicNav from "components/GraphicNav.svelte";
    import GraphicNavItem from "components/GraphicNavItem.svelte";
    import Title from "components/Title.svelte";
</script>

<Title title="home page" subtitle="home subtitle" imgSrc="{base}/images/butters.jpeg" />

<hr>

<ColumnContainer>
    <Column>
        <h2>Learning Statement</h2>
        <p>“I want to be great or nothing,”
            <br>&emsp;- Amy March</p>
        <p>Alanis Morisette sings, “swallow it down, that jagged little pill,” off her song You Learn. If I had to categorize my undergraduate experience, it would be that entire album, all based around that one line. My life is centered around music. When I have hard days, or good days, or any days, I end up back at there. Listening to it, creating it, experiencing it. Understanding my college years as albums can help paint the experiences I went through as a Husky from 2020-2024.</p>
    </Column>
    <Column>
        <h2>Navigation</h2>
        <GraphicNav>
            <GraphicNavItem href="{base}/about">About</GraphicNavItem>
            <GraphicNavItem href="{base}/freshman">Freshman</GraphicNavItem>
            <GraphicNavItem href="{base}/sophomore">Sophomore</GraphicNavItem>
            <GraphicNavItem href="{base}/junior">Junior</GraphicNavItem>
            <GraphicNavItem href="{base}/senior">Senior</GraphicNavItem>
        </GraphicNav>
    </Column>
</ColumnContainer>
