<script lang="ts">
    import { base } from "$app/paths";
    import Section from "$components/Section.svelte";
    import SectionContainer from "$components/SectionContainer.svelte";
    import GraphicNav from "$components/GraphicNav.svelte";
    import GraphicNavItem from "$components/GraphicNavItem.svelte";
    import Title from "$components/Title.svelte";
</script>

<Title title="gillian mcmahon" subtitle="honors portfolio" imgSrc="{base}/images/headers/front.png" />

<hr>

<SectionContainer>
    <Section>
        <h2>welcome to downpour records</h2>
        <p>“I want to be great or nothing,”
            <br>&emsp;- Amy March</p>
        <p>Alanis Morisette sings, “swallow it down, that jagged little pill,” off her song You Learn. If I had to categorize my undergraduate experience, it would be that entire album, all based around that one line. My life is centered around music. When I have hard days, or good days, or any days, I end up back at there. Listening to it, creating it, experiencing it. Understanding my college years as albums can help paint the experiences I went through as a Husky from 2020-2024.</p>
    </Section>
    <Section>
        <h2>navigation</h2>
        <GraphicNav>
            <GraphicNavItem href="{base}/about">
                <img src="{base}/images/nav/record_about.png" alt="about">
            </GraphicNavItem>
            <GraphicNavItem href="{base}/freshman">
                <img src="{base}/images/nav/record_freshman.png" alt="freshman">
            </GraphicNavItem>
            <GraphicNavItem href="{base}/sophomore">
                <img src="{base}/images/nav/record_sophomore.png" alt="sophomore">
            </GraphicNavItem>
            <GraphicNavItem href="{base}/junior">
                <img src="{base}/images/nav/record_junior.png" alt="junior">
            </GraphicNavItem>
            <GraphicNavItem href="{base}/senior">
                <img src="{base}/images/nav/record_senior.png" alt="senior">
            </GraphicNavItem>
        </GraphicNav>
    </Section>
</SectionContainer>
