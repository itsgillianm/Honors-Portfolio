<script lang="ts">
    export let title: string | null = null;
</script>

<div class="image-block-container">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <div class="inner">
        <!-- img class options: left, right, page-title -->
        <slot />
    </div>
</div>

<style lang="scss">
    @import "@styles/global.scss";
    .image-block-container {
        // clearfix hack to stop floating image overflow
        &::after {
            content: "";
            clear: both;
            display: table;
        }

        .inner {
            margin: 0.5rem;
            :global(img) {
                margin-bottom: 1rem;
                object-fit: cover;
                width: 35%;
                min-width: 9rem;


                @media screen and (max-width: $screen-width-narrow) {
                    width: 100%;
                }
            }


            :global(img.left) {
                float: left;
                margin-right: 1rem;
            }

            :global(img.right) {
                float: right;
                margin-left: 1rem;
            }

            :global(img.page-title) {
                width: 45%;
                aspect-ratio: 4/3;
                margin-right: 1.6rem;
            }

            :global(ul) {
                overflow: hidden;
            }
        }

    }
</style>
