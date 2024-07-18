<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: '',
      selectedProject: null
    }
  },
  mounted() {
    axios
      .get(`${this.base_url}/api/projects`)
      .then(response => {
        console.log(response);
        this.projects = response.data.projects;
      })
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
    }
  }
}
</script>

<template>
  <div>
    <div v-if="selectedProject">
      <ProjectCard :project="selectedProject" />
      <button @click="selectedProject = null" class="btn btn-secondary">Back</button>
    </div>
    <div v-else class="row mx-5 my-3">
      <div v-for="project in projects.data" :key="project.id" class="col-3 rounded">
        <div class="d-flex flex-column justify-content-center border singleCard px-2 py-1">
          <h4>Progetto: {{ project.name_project }}</h4>
          <p>Descrizione: {{ project.description }}</p>
          <p>Data pubblicazione: {{ project.date }}</p>
          <p v-if="project.group">Progetto svolto in gruppo</p>
          <p v-else>Progetto non svolto in gruppo</p>
          <p>id: {{ project.type_id }}</p>
          <p>Tipologia del progetto: {{ project.type.name_type }}</p>
          <button @click="selectProject(project)" class="btn btn-primary">more details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Aggiungi il tuo stile personalizzato qui */
</style>
