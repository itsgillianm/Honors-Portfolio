<div class="column-container">
    <slot />
</div>

<style lang="scss">
    @import "@styles/global.scss";

    .column-container {
        display: flex;
        flex-direction: row;
        gap: 3rem;

        @media screen and (max-width: $screen-width-narrow) {
            flex-direction: column;
            gap: 2rem;
        }
    }
</style>
