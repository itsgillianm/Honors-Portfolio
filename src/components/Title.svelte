<script lang="ts">
    export let title: string;
    export let subtitle: string | null = null
    export let imgSrc: string | null = null
</script>

<div class="title-container">
    <div class="text-container">
        <h1>{title}</h1>
        {#if subtitle}
            <h2 class="subtitle">{subtitle}</h2>
        {/if}
    </div>
    {#if imgSrc}
        <img src={imgSrc} alt="front page">
    {/if}
</div>

<style lang="scss">
    @import "@styles/global.scss";

    .title-container {
        display: flex;
        flex-direction: row;
        gap: 3rem;
        padding: 3rem;
        margin-bottom: 2.4rem;
        border: 2px solid var(--color-secondary-dark);
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.2rem;
        flex-grow: 1;
        text-align: center;

        h1, h2 {
            margin: 0;
        }

        h2 {
            font-size: 1.5rem;
            // font-family: var(--fontfamily-body);
            // font-weight: normal;
        }
    }

    img {
        width: 50%;
        object-fit: cover;
    }

    @media screen and (max-width: $screen-width-small) {
        .title-container {
            margin-bottom: 1.6rem;
            flex-direction: column-reverse;
            align-items: center;
            gap: 2rem;
            padding: 6%;
            padding-bottom: 12%;
        }

        img {
            width: 100%;
        }
    }
</style>
