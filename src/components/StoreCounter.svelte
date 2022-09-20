<script>
    import { count } from './countStore.js';

    const decrement = () => {
        $count = $count - 1;
    }
    const increment = () => {
        $count = $count + 1;
    }
</script>

<div class="counter">
    <span>Count: {$count}</span>
    <button on:click={decrement}>
        -
    </button>
    <button on:click={increment}>
        +
    </button>
</div>


<style>
    .counter {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>