<script lang="ts">
	import LetterBox from './LetterBox.svelte';

	export let value: string;
	export let solution: string;
	export let submitted: boolean;

	const colors = ['', '', '', '', ''];

	const handleSubmit = async () => {
		const s = solution;
		const v = value;

		const temp = ['gray', 'gray', 'gray', 'gray', 'gray'];
		const letterPool: string[] = [];

		for (let i = 0; i < 5; i++) {
			if (s[i] === v[i]) {
				temp[i] = 'green';
			} else {
				letterPool.push(s[i]);
			}
		}

		for (let i = 0; i < 5; i++) {
			if (temp[i] === 'gray') {
				if (letterPool.includes(v[i])) {
					letterPool.splice(letterPool.indexOf(v[i]), 1);
					temp[i] = 'yellow';
				}
			}
			colors[i] = temp[i];
			await new Promise((resolve) => setTimeout(resolve, 500));
		}
	};

	$: if (submitted) {
		handleSubmit();
	}
</script>

<div class="flex gap-1">
	{#each Array.from({ length: 5 }) as _, i}
		<LetterBox letter={value[i] ?? ''} color={colors[i]} />
	{/each}
</div>
