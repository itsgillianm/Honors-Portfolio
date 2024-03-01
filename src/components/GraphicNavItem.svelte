<script lang="ts">
    export let href: string;
</script>

<li class="graphic-nav-item">
    <a href={href}>
        <slot />
    </a>
</li>

<style lang="scss">
    @import "../global.scss";

    .graphic-nav-item {
        width: 100%;
        height: 100%;
        max-width: 12em;
        overflow: hidden;
        display: flex;
        border-radius: 100%;
        
        // stolen from https://spin.atomicobject.com/css-responsive-square/
        &:after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        a {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-primary);

            @include alt-link;
        }

        :global(img) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>
