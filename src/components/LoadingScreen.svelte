<script lang="ts">
    import { onMount } from "svelte";
    
    // time until loading screen disappears
    // DURATION_MS >= $start-delay + $mid-delay
    const DURATION_MS = 1800;
    let loadingTimeout: number | null = -1; // nonnull so done is not set
    
    // visible externally
    export let done: boolean;
    $: done = (loadingTimeout === null);

    onMount(() => {
        loadingTimeout = setTimeout(() => {
            loadingTimeout = null;
        }, DURATION_MS);
    });

    const clearLoading = () => {
        if (loadingTimeout != null) {
            clearTimeout(loadingTimeout);
        }
        loadingTimeout = null;
    }
</script>

<div id="loading-wrapper" style={`--duration:${DURATION_MS}ms`}>
    <div
        id="loading-screen"
        on:click={clearLoading}
        role="presentation"
    >
        <div id="loading-inner" class="bg-record" />
    </div>
</div>

<style lang="scss">
    #loading-wrapper {
        // time to wait until entering
        $start-delay: 200ms;
        // time to wait while stopped in the middle
        $mid-delay: 600ms;

        $trans-time: calc(
            (var(--duration) - #{$start-delay} - #{$mid-delay}) / 2
        );
    
        #loading-screen {
            $loading-screen-color: var(--color-secondary-dark);
    
            @keyframes screen-fade {
                to {background-color: rgba($loading-screen-color, 0);}
            }
    
            // styles
            z-index: 1;
            position: fixed;
            inset: 0;
            background-color: $loading-screen-color;
            $delay: calc(var(--duration) - #{$trans-time});
            animation: screen-fade $trans-time ease $delay forwards;
        }
    
        #loading-inner {
            $size: 10rem;            

            @keyframes spin {
                from {transform: rotate(0deg);}
                to   {transform: rotate(360deg);}
            }
    
            @keyframes loading-enter {
                to   {left: calc(50% - (#{$size} / 2));}
            }
    
            @keyframes loading-exit {
                to   {left: 100%;}
            }
    
            // styles
            width: $size;
            height: $size;
            position: fixed;
            left: calc(-#{$size});
            top: calc(50% - (#{$size} / 2));
            // background-image set by class
            background-size: cover;
            background-position: center;

            $exit-delay: calc(#{$start-delay} + #{$trans-time} + #{$mid-delay});
            animation:
                spin 1s linear infinite,
                loading-enter $trans-time ease-out $start-delay forwards,
                loading-exit $trans-time ease-in $exit-delay forwards
            ;
        }
    }
</style>