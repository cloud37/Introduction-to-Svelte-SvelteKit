<script>
	import { flip } from "svelte/animate";

	let sortedBy = "letter";

	const columns = [
		{ key: "letter", label: "Letters:" },
		{ key: "number", label: "Numbers:" }
	];

	let data = [
		{letter: 'A', number: 5},
		{letter: 'D', number: 3},
		{letter: 'C', number: 8},
		{letter: 'E', number: 1},
		{letter: 'H', number: 4},
		{letter: 'G', number: 2},
		{letter: 'F', number: 7},
		{letter: 'B', number: 6},
		{letter: 'I', number: 9},
	];

	$: data = data.sort((a, b) => {
		if(sortedBy === 'letter') {
			return a.letter.localeCompare(b.letter)
		} else {
			return a.number - b.number;
		}
	})
</script>

<div class="center">
	<select bind:value={sortedBy} style="margin-bottom: 1rem">
		<option value="letter">Letters</option>
		<option value="number">Numbers</option>
	</select>
	<table>
		<tr class="row">
			{#each columns as { key, label }}
				{@const sorted = key === sortedBy}
				<th class="item title" class:sorted>{label}</th>
			{/each}
		</tr>

		{#each data as row, i (row.number)}
			<tr class="row" animate:flip>
				{#each columns as { key }}
					{@const sorted = key === sortedBy}
					<td class="item" class:sorted>{row[key]}</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style>
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	table {
		width: 600px;
	}
	.item {
		width: 200px;
		text-align: center;
		padding: 0.5em;
	}
	.title {
		background: #cacaca;
		font-weight: 800;
	}
	.sorted {
		background: #f2cc96;
	}
</style>
