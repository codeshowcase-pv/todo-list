<template>
  <form
      action="#"
      class="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center gap-3 border p-4 rounded"
      @submit.prevent="form_submit_event"
  >
    <input type="text" class="form-control" placeholder="название задачи" v-model="todo_name">
    <textarea class="form-control" rows="3" placeholder="содержание задачи" v-model="todo_content"/>
    <button class="btn btn-success">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "create_todo",
  data() {
    return {
      todo_name: '',
      todo_content: ''
    }
  },
  methods: {
    form_submit_event () {
      // вызываем метод мутации add_new_todo в store
      this.$store.commit('add_new_todo', {
        name: this.todo_name,
        content: this.todo_content,
      });

      this.todo_name = '';
      this.todo_content = '';
    }
  }
}
</script>

<style scoped>

</style>