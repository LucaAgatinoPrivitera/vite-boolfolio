<script>
export default {
    props: ['project']
}
</script>

<template>
    <div>
        <h3>{{ project.name_project }}</h3>
        <p>{{ project.description }}</p>
        <p>{{ project.date }}</p>
        <p v-if="project.group">Progetto svolto in gruppo</p>
        <p v-else>Progetto non svolto in gruppo</p>
        <p>{{ project.type_id }}</p>
        <p>{{ project.type.name_type }}</p>
    </div>
</template>


<style scoped>
.read-the-docs {
    color: #888;
}
</style>