<ul class="graphic-nav-container">
    <slot />
</ul>

<style lang="scss">
    .graphic-nav-container {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: grid;
        max-width: 28rem;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        justify-items: center;
        align-items: center;
    }
</style>
