<script LANG="ts">
    import {
        language as selectedLanguage
    } from '@inlang/sdk-js';

    import LanguageSwitcher from "./LanguageSwitcher.svelte";
</script>
<p>selectedLanguage: {selectedLanguage}</p>
{#if selectedLanguage}
    <LanguageSwitcher/>
    <slot/>
{:else }
    <p>Redirecting to proper language: <a href="/en">/en</a> or <a href="/de">/de</a></p>
{/if}
