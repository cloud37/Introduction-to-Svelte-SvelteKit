import {browser} from "$app/environment";
import {themeStore} from "../stores/themeStore.js";

export const getTheme = () => {
    if(browser) {
        if (!window) {
            return 'light';
        }
        const storedValue = window.localStorage.getItem('theme');
        if (storedValue) {
            themeStore.set(storedValue);
            return storedValue;
        }
        const preference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        themeStore.set(preference);
        return preference;
    }
    return 'light';
}
