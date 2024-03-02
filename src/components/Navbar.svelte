<script lang="ts">
    import classNames from "classnames";
    import { navigating } from "$app/stores";

    let width: number;
    $: narrow = width <= 768;

    // narrow screen
    let dropdownOpen = false;
    // close if screen widens
    $: if (narrow || $navigating) dropdownOpen = false;


    let toggleDropdown = () => dropdownOpen = !dropdownOpen;
</script>

<svelte:body on:load={() => console.log("loaded!")} />

<!-- block element so the page is pushed down the correct amount -->
<div id="navbar-spacer">
    <div id="navbar" bind:clientWidth={width} class={classNames({narrow, 'dropdown-open': dropdownOpen})}>
        {#if narrow}
            <!-- dropdown menu for narrow screens -->
            <button type="button" on:click={toggleDropdown}>
                <div class="menu-icon">
                    <div class="burger-top" />
                    <div class="burger-bottom" />
                </div>
            </button>
            <div class="dropdown">
                <div class="menu">
                    <ul>
                        <slot />
                    </ul>
                </div>
            </div>
        {:else}
            <!-- full width navbar -->
            <div class="inner">
                <ul>
                    <slot />
                </ul>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import "@styles/global.scss";

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
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: var(--color-primary);

        ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
    }

    // wide screen
    #navbar:not(.narrow) {
        .inner {
            height: 100%;
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
        }

        $icon-size: 2rem;
        $line-width: calc(#{$icon-size} * 0.08);
        $line-gap: calc(#{$icon-size} * 0.4);
        .menu-icon {
            width: $icon-size;
            height: $icon-size;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: $line-gap;

            div {
                width: 100%;
                height: 0;
                transition: transform 100ms ease;
                
                &::after {
                    content: "";
                    display: block;
                    transform: translateY(-50%);
                    height: $line-width;
                    width: 100%;
                    background-color: var(--color-light);
                }
            }
        }

        &.dropdown-open .menu-icon {
            .burger-top {
                transform:
                    translateY(calc(#{$line-gap} / 2))
                    rotate(45deg)
                ;
            }

            .burger-bottom {
                transform:
                    translateY(calc(#{$line-gap} / -2))
                    rotate(-45deg)
                ;
            }
        }

        .dropdown {
            overflow: hidden;
            position: absolute;
            width: 100%;
            padding-top: $navbar-height;
            height: 0; // height of navbar
            display: flex;
            flex-direction: column;
            transition: height 400ms ease;
            pointer-events: none;

            * {
                pointer-events: auto;
            }
        }

        &.dropdown-open .dropdown {
            height: 100lvh;
        }

        .menu {
            width: 100%;
            flex-grow: 1;
            background-color: var(--color-primary);

            :global(a) {
                padding: 0.7rem 0;
            }
        }
    }
</style>
