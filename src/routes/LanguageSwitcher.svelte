<script lang="ts">
    import {
        languages,
        switchLanguage,
        loadResource,
        language as selectedLanguage
    } from '@inlang/sdk-js';

</script>

<div>
    {#if languages}
        {#each languages as language}
            <button
                    on:focus={() => loadResource(language)}
                    on:mouseover={() => loadResource(language)}
                    on:click={() => switchLanguage(language)}
                    class:secondary={(language === selectedLanguage)}
            >
                    {language}
            </button>
        {/each}
    {/if}
</div>
