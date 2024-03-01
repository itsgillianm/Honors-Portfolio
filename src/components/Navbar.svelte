<script lang="ts">
    import { base } from "$app/paths";

    export let title: string;
</script>

<div id="navbar-spacer">
    <div id="navbar">
        <div class="inner">
            <a href="{base}/" class="title">{title}</a>
            <ul>
                <slot />
            </ul>
        </div>
    </div>
</div>

<style lang="scss">
    @import "../global.scss";

    $navbar-height: 4rem;

    #navbar-spacer {
        width: 100%;
        height: $navbar-height;
    }

    #navbar {
        position: fixed;
        top: 0;
        width: 100%;
        height: $navbar-height;
        background-color: var(--color-primary);
        
        .inner {
            height: 100%;
            margin: 0 1.5rem;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
    }
    a.title {
        color: var(--color-light);
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        @include alt-link;
    }

    ul {
        height: 100%;
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-left: auto;
        display: flex;
        flex-direction: row;
    }
</style>
