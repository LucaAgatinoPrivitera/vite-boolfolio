<script>
import axios from 'axios';
import ProjectsList from './components/ProjectsList.vue'

export default {
  name: 'App',
  components: {
    ProjectsList
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: [],
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
  <ProjectsList :projects="projects" 
      :selectedProject="selectedProject"
      @update:selectedProject="selectedProject = $event" />
</template>

<style scoped>
/* Aggiungi il tuo stile personalizzato qui */
</style>
