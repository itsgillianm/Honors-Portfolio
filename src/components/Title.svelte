<script lang="ts">
    export let title: string;
    export let subtitle: string | null = null
    export let imgSrc: string | null = null
</script>

<div class="title-container">
    <div class="text-container">
        <h1>{title}</h1>
        {#if subtitle}
            <h2>{subtitle}</h2>
        {/if}
    </div>
    {#if imgSrc}
        <img src={imgSrc} alt={imgSrc}>
    {/if}
</div>

<style lang="scss">
    @import "../global.scss";

    .title-container {
        display: flex;
        flex-direction: row;
        padding: 10% 6%;
        margin-bottom: 2.4rem;
        border: 2px solid var(--color-secondary-dark);
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        flex-grow: 1;
        text-align: center;

        h1, h2 {
            margin: 0;
        }

        h2 {
            font-size: 1.6rem;
            text-transform: uppercase;
        }
    }

    img {
        width: 50%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }

    @media screen and (max-width: $screen-width-small) {
        .title-container {
            margin-bottom: 1.6rem;
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;
            padding: 6%;
        }

        img {
            width: 100%;
        }
    }
</style>
