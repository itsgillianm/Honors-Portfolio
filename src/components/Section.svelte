<script lang="ts">
    import classNames from "classnames";

    export let widthFactor = 1;
    export let vCenter = false;
</script>

<div
    class={classNames('column', {'v-center': vCenter})}
    style="--width-factor:{widthFactor}"
>
    <slot />
</div>

<style lang="scss">
    .column {
        flex: var(--width-factor);
        min-width: 0;
        display: flex;
        flex-direction: column;

        &.v-center {
            justify-content: center;

            :global(:first-child) {
                margin-top: 0;
            }

            :global(:last-child) {
                margin-bottom: 0;
            }
        }
    }
</style>
