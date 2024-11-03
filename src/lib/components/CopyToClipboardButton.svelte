<script lang="ts">
	interface Props {
		valueToCopy: string;
	}
	const { valueToCopy }: Props = $props();

	const beforeCopyText = 'Copy to clipboard 📚';
	let buttonTitle = $state(beforeCopyText);

	let timeout: number;

	async function onButtonClick() {
		if (timeout) {
			clearTimeout(timeout);
		}

		await navigator.clipboard.writeText(valueToCopy);
		buttonTitle = 'Copied ✅';

		timeout = setTimeout(() => {
			buttonTitle = beforeCopyText;
		}, 1500);
	}
</script>

<button onclick={onButtonClick}>{buttonTitle}</button>

<style>
	button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
	}

	button:hover {
		border-color: #646cff;
	}
</style>
