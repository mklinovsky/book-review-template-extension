<script lang="ts">
	import MarkdownPreview from './lib/components/MarkdownPreview.svelte';
	import { getBookDetailsFromContentScript } from './lib/services/get-book-details';
	import { onMount } from 'svelte';
	import type { Book } from './app.types';
	import { getMarkdownTemplate } from './lib/services/markdown-templates';

	let book = $state<Book | undefined>(undefined);
	let markdownTemplate = $derived(getMarkdownTemplate(book));

	onMount(async () => {
		book = await getBookDetailsFromContentScript();
	});
</script>

{#if book}
	<MarkdownPreview {markdownTemplate} />
{:else}
	<p>Go to a book detail page on Goodreads to see the template.</p>
{/if}
