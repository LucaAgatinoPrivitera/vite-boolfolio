<script>
import axios from 'axios';
import ProjectsList from './components/ProjectsList.vue'
import ProjectIndex from './views/ProjectIndex.vue'
import { router } from './main';

export default {
  name: 'App',
  components: {
    ProjectsList,
    ProjectIndex
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: [],
      selectedProject: null,
      menu: [
        {
          name: 'index',
          route: 'index'
        },
        {
          name: 'about',
          route: 'about'
        },
        {
          name: 'contacts',
          route: 'contacts'
        }
      ]
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
  },

  computed: {
    menuItems() {
      console.log(this.$router.options.routes)

      return this.$router.options.routes;

      // Così escludo l'oggetto dove exlucdefromlist è false
      // return this.$router.options.routes.filter(item => !item.excludeFromlist);

    }
  }
}
</script>

<template>
  <!-- <div class="mb-5 mt-3 w-75 m-auto">
    <h1>Lista fatta giorno 18 (senza router-view)</h1>
    <ProjectsList :projects="projects" :selectedProject="selectedProject"
      @update:selectedProject="selectedProject = $event" />
  </div> -->

  <!-- <div class="mb-5 w-75 m-auto">
    <h1>Lista fatta giorno 19 (con router-view)</h1>
    <router-view :projects="projects" :selectedProject="selectedProject"
      @update:selectedProject="selectedProject = $event"></router-view>
  </div> -->

  <!-- <li v-for="(item, index) in projects" :key="index">
    <router-link :to="{ name: item.routeName }" class="nav-link">
      {{ item.label }}
    </router-link>
  </li> -->

  <div>
    <nav class=" mx-4 mt-2 d-flex gap-2">
      <!-- Ciclare sull'array di oggetti del router non va bene perché li prende tutti e quindi cerca di dare lo slug a tutti -->
      <span v-for="(item, index) in menu" :key="index">
        <router-link :to="{ name: item.name }" class="nav-link">
          {{ item.name }}
        </router-link>
      </span>
    </nav>
    <router-view />
  </div>

  <!-- <ProjectIndex :projects="projects" :selectedProject="selectedProject"
    @update:selectedProject="selectedProject = $event"></ProjectIndex> -->

</template>

<style scoped>
/* Aggiungi il tuo stile personalizzato qui */
</style>
