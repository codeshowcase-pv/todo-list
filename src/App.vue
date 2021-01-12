<template>
  <div class="container d-flex flex-column align-items-center py-4">
    <h1>Todo list</h1>
    <create_todo_component/>
  </div>
</template>

<script>

import create_todo_component from "@/components/create_todo";

export default {
  name: 'App',
  components: {
    create_todo_component
  }
}
</script>