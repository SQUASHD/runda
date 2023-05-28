<script lang="ts">
	import { cn } from '$lib/utils';
	export let letter: string;
	export let color: string;
</script>

<div
	class={cn(
		'flex h-12 w-12 items-center justify-center border-2 border-black text-2xl font-bold uppercase',
		color === 'gray' && 'bg-gray-300',
		color === 'green' && 'bg-green-300',
		color === 'yellow' && 'bg-yellow-300'
	)}
>
	{letter}
</div>
