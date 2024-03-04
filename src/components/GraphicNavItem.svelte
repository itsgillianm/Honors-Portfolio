<script lang="ts">
    export let href: string;
</script>

<li class="graphic-nav-item">
    <a href={href}>
        <slot />
    </a>
</li>

<style lang="scss">
    @import "@styles/global.scss";

    .graphic-nav-item {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        border-radius: 100%;
        aspect-ratio: 1 / 1;

        &:hover {
            animation: spin 3.5s linear infinite;
        }

        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            @include alt-link;
        }

        :global(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
