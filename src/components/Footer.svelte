<script>
    import {onMount} from "svelte";
    import ThemeSwitch from "./ThemeSwitch.svelte";
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    import {pageOrder as list} from "../routes/page-order.js";

    $: currentIndex = list.indexOf('/'+$page.routeId);
    $: next = (currentIndex < (list.length -1)) ? list[currentIndex +1] : null
    $: prev = (currentIndex > 0) ? list[currentIndex -1] : null
    $: languageToSwitchTo = $page.url.pathname.includes("/de") ? 'en' : 'de'
    $: languageSwitchLink = languageToSwitchTo === 'en' ?  $page.url.pathname.replace('/de', '/en') : $page.url.pathname.replace('/en', '/de')
    $: beginningOfEnglish = $page.url.pathname === '/slides/en'
    $: startOrNextText = currentIndex === 0 || beginningOfEnglish ? 'start':'next'

    function isInEditor(e) {
        let el = e.target;
        while(el) {
            if(el.classList?.contains('svelte-inline-editor')) {
                return true;
            }
            if(el === el.parentNode) {
                break;
            }
            el = el.parentNode;
        }
        false;
    }
    const keyNavListener = e => {
        if((e.key === ' ' || e.key === 'ArrowRight') && next != null) {
            if(!isInEditor(e)) {
                goto(next)
            }
        } else if(e.key === 'ArrowLeft' && prev != null) {
            if(!isInEditor(e)) {
                goto(prev)
            }
        }
    }
    onMount(()=>{
        document.body.addEventListener('keyup',keyNavListener)
        return ()=> document.body.removeEventListener("keyup",keyNavListener)
    })
</script>
<footer>
    <div class="container">
        <span>Dominik R &copy; 2022-2023</span>
        <nav>
            <a href={languageSwitchLink}>{languageToSwitchTo}</a>
            {#if prev && !beginningOfEnglish}
                <a href={prev}>prev</a>
            {/if}
            {#if next}
                <a href={next}>{startOrNextText}</a>
            {/if}
            <ThemeSwitch/>
        </nav>
    </div>
</footer>
<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0 0.5rem;
        padding: 1rem 0.25rem;
        font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
        }
    }

    nav {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
</style>
