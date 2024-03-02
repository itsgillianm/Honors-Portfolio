<script lang="ts">
    export let style: string | undefined = undefined;
</script>

<div class="column" style={style}>
    <slot />
</div>

<style lang="scss">
    .column {
        flex: 1 1 0;
        min-width: 0;
    }
</style>
