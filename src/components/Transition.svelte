<script>
    import { fade} from 'svelte/transition';

    let visible = false;
</script>

<label>
    <input type="checkbox" bind:checked={visible}>
    Toggle me
</label>
{#if visible}
    <p in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">I'm visible now</p>
{/if}
