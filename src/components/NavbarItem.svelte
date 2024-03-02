<script lang="ts">
    import { page } from "$app/stores";
    import classNames from "classnames";

    export let href: string;
</script>

<li class={classNames('navbar-item', { 'active': $page.url.pathname == href })}>
    <a href={href}>
        <slot />
    </a>
</li>

<style lang="scss">
    @import "../global.scss";

    .navbar-item {
        a {
            height: 100%;
            padding: 0 1.4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--color-light);

            @include alt-link;
        }

        &.active {
            background-color: var(--color-secondary-dark);

            a {
                &:hover {
                    color: var(--color-light);
                }
            }
        }
    }
</style>
