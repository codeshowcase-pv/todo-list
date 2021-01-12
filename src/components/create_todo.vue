<template>
  <form action="#" class="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center gap-3 border p-4 rounded">
    <input type="text" class="form-control" placeholder="название задачи">
    <textarea class="form-control" rows="3" placeholder="содержание задачи"/>
    <button class="btn btn-success">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "create_todo"
}
</script>

<style scoped>

</style>