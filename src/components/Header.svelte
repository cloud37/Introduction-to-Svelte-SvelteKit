<script>
    import cloud37Darkmode from '../assets/LogoDarkmode.svg'
    import cloud37 from '../assets/Logo.svg'
    import {themeStore} from "../stores/themeStore.js";
	import { page } from '$app/stores';

    $: logoSrc = $themeStore === 'light' ? cloud37 : cloud37Darkmode;
    $: title = $page.url.pathname.includes('/de') ? 'Ein Überblick über Svelte & SvelteKit' : 'An Overview of Svelte & Svelte Kit'
</script>
<header>
    <div class="container">
        <nav>
            <a href="cloud37.de"><img src={logoSrc} alt="Cloud37 company logo"/></a>
        </nav>
        <div class="right">
            {title}
        </div>
    </div>
</header>
<style>
    .container {
        display: flex;
        font-size: 1.2rem;
        padding: 2rem 0;
    }
    .right {
        display: flex;
        gap: 1rem;
        flex-shrink: 0;
    }
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem 0;
        flex-grow: 1;
    }
</style>