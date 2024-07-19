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
  <div class="mb-5 mt-3 w-75 m-auto">
    <h1>Lista fatta giorno 18 (senza router-view)</h1>
    <ProjectsList :projects="projects" :selectedProject="selectedProject"
      @update:selectedProject="selectedProject = $event" />
  </div>

  <!-- <div class="mb-5 w-75 m-auto">
    <h1>Lista fatta giorno 19 (con router-view)</h1>
    <router-view :projects="projects" :selectedProject="selectedProject"
      @update:selectedProject="selectedProject = $event"></router-view>
  </div> -->
    <div class="mb-5 w-75 m-auto">
    <h1>Lista fatta giorno 19 (con router-view)</h1>
    <router-view></router-view>
  </div>

</template>

<style scoped>
/* Aggiungi il tuo stile personalizzato qui */
</style>
