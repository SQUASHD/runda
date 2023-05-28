<script lang="ts">
	import { Tooltip } from 'radix-svelte';
	import { cn } from '$lib/utils';
	// These are internal icons, but they're not exported from the package.
	// Use your own icons instead.	import { Plus } from 'lucide-svelte';
	interface $$Props {
		content: string;
		class?: string;
	}
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<slot />
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content
				class={cn(
					'animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
					$$props.class
				)}
			>
				{$$props.content}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
