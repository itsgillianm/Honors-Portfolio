<script lang="ts">
    import { base } from "$app/paths";
    import classNames from "classnames";
    import NavbarItem from "./NavbarItem.svelte";

    export let title: string;

    let width: number;
    $: narrow = width <= 768;

    // narrow screen
    let dropdownOpen = false;
    // close if screen widens
    $: if (narrow) dropdownOpen = false;

    let toggleDropdown = () => dropdownOpen = !dropdownOpen;
</script>

<!-- block element so the page is pushed down the correct amount -->
<div id="navbar-spacer">
    <div id="navbar" bind:clientWidth={width} class={classNames({narrow})}>
        {#if narrow}
            <!-- dropdown menu for narrow screens -->
            <div class={classNames('dropdown', {'open': dropdownOpen})}>
                <button type="button" on:click={toggleDropdown}>
                    <div class="menu-icon">
                        <div class="burger-top" />
                        <div class="burger-bottom" />
                    </div>
                </button>
                <div class="menu">
                    <ul>
                        <NavbarItem href="{base}/">{title}</NavbarItem>
                        <slot />
                    </ul>
                </div>
            </div>
        {:else}
            <!-- full width navbar -->
            <div class="inner">
                <a href="{base}/" class="title">{title}</a>
                <ul>
                    <slot />
                </ul>
            </div>
        {/if}
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

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        a.title {
            color: var(--color-light);
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
    
            @include alt-link;
        }
    }

    // wide screen
    #navbar:not(.narrow) {
        .inner {
            height: 100%;
            margin: 0 1.5rem;
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        ul {
            height: 100%;
            margin-left: auto;
            display: flex;
            flex-direction: row;
        }
    }

    // narrow screen, dropdown
    #navbar.narrow {
        .dropdown {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 100%; // height of navbar
            transition: height 400ms ease;
            
            button {
                height: $navbar-height;
                width: $navbar-height;
                flex-shrink: 0;
                background: none;
                border: none;
                padding: none;
                align-self: flex-end;
                padding-right: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;

                .menu-icon {
                    $icon-size: 2rem;
                    width: $icon-size;
                    height: $icon-size;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: calc(#{$icon-size} * 0.3);

                    div {
                        width: 100%;
                        height: calc(#{$icon-size} * 0.08);
                        background-color: var(--color-light);
                    }
                }
            }
            
            .menu {
                width: 100%;
                flex-grow: 1;
                background-color: var(--color-primary);

                :global(li) {
                    padding: 0.7rem 0;
                }
            }

            &.open {
                height: 100lvh;
            }
        }
    }
</style>
