<script>
    export let number = 0;
</script>

<style>
    .red {
        color: blue
    }
</style>

<p>The number <span class:red={number === 5}>{number}</span> has been passed as a prop</p>