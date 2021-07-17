<script lang="ts">
	import { v4 as uuid } from 'uuid';
	let todos = [];
	let newTodoText = '';

	const addTodo = () => {
		todos = [{ id: uuid(), text: newTodoText}, ...todos];
		newTodoText = '';
	};
	const deleteTodo = (id) => todos = todos.filter((t) => t.id !== id);
</script>

<main>
	<h2>Todo App</h2>
	<div>
		<input bind:value={newTodoText}/>
		<button on:click={addTodo}>Add</button>
	</div>
	{#each todos as t (t.id)}
		<div>
			{t.text}
			<button on:click={deleteTodo(t.id)}>Delete</button>
		</div>
	{/each}
</main>
