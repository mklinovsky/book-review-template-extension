<script lang="ts">
	import CopyToClipboardButton from './CopyToClipboardButton.svelte';

	interface Props {
		markdownTemplate: string;
	}

	let { markdownTemplate }: Props = $props();
</script>

<textarea
	rows="25"
	bind:value={markdownTemplate}
></textarea>

<CopyToClipboardButton valueToCopy={markdownTemplate} />

<style>
	textarea {
		font-size: 0.8rem;
		padding: 1rem;
		width: 700px;
		display: block;
		margin-bottom: 10px;
	}
</style>
