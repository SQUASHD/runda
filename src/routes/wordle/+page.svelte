<script lang="ts">
	import GuessRow from './GuessRow.svelte';

	// TODO: Add a random word
	const solution = 'queen';
	let guesses = ['', '', '', '', '', ''];
	let currentGuessIndex = 0;
	let gameOver = false;

	const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const ACTIONS = ['enter', 'backspace'];
	const VALID_KEYS = [...ALPHABET, ...ACTIONS];

	let currentGuess = '';
	$: guesses[currentGuessIndex] = currentGuess;

	const handleSubmit = () => {
		if (currentGuess.length !== 5) {
			return;
		}
		if (currentGuess === solution || currentGuessIndex === 5) {
			gameOver = true;
		}

		currentGuessIndex += 1;
		currentGuess = '';
	};
</script>

<main class="bg-slate-50">
	<section class="flex h-screen flex-col items-center justify-center gap-4">
		<div class="flex flex-col items-center justify-center">
			<h1 class="text-4xl font-black capitalize text-slate-800">Svelte Wordle</h1>
			<h2 class="text-slate-600">Guess the 5-letter word</h2>
		</div>
		<div class="flex flex-col gap-1">
			{#each guesses as guess, i}
				<GuessRow value={guess ?? ''} {solution} submitted={i < currentGuessIndex} />
			{/each}
		</div>
		<form on:submit|preventDefault={handleSubmit}>
			<input
				disabled={gameOver}
				type="text"
				class="rounded-lg border bg-transparent"
				bind:value={currentGuess}
				maxlength={5}
			/>
		</form>
	</section>
</main>
