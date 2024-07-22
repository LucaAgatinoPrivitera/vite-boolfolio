<script>
import axios from 'axios';
import ProjectShow from './ProjectShow.vue';

export default {
  name: 'ProjectIndex',
  components: {
    ProjectShow
  },
  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: [],
      selectedProject: null,
    }
  },
  mounted() {
    axios
      .get(`${this.base_url}/api/projects`)
      .then(response => {
        console.log(response.data.projects.data);
        this.projects = response.data.projects.data;
      })
  },
  props: {
    // selectedProject: {
    //   type: Object,
    //   default: null
    // }
  },
  methods: {
    selectProject(project) {
      this.$emit('update:selectedProject', project);
    },

    getImageUrl(imagePath) {
      // if imagePath è null o undefined
      if (typeof imagePath !== 'string') {
        return 'http://127.0.0.1:8000/storage/default-image.jpg';
      }

      // Verifica se l'URL è già un URL completo
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
      } else {
        // Se è un percorso relativo, aggiungi il prefisso dell'API o del server
        return `http://127.0.0.1:8000/storage/${imagePath}`;
      }
    }
  }
}
</script>

<template>
  <div>
    <!-- <div v-if="selectedProject">
      <ProjectShow :project="selectedProject" />
      <button @click="$emit('update:selectedProject', null)" class="btn btn-secondary">Back</button>
    </div> 
    <div v-else class="row mx-5 my-3">-->

    <!-- <p>prova {{ projects }}</p> -->

    <h2 class="mx-5 my-3 px-2 py-1">Lista dei miei progetti</h2>

    <div class="row mx-5 my-3">
      <div v-for="project in projects" :key="project.id" class="col-3 rounded">
        <div class="d-flex flex-column justify-content-center border singleCard px-2 py-1">
          <!-- La funzione chiamata è a riga 35 e si collega allo storage, MA AL MOMENTO FUNZIONA SOLO DALLO STORAGE -->
          <img :src="getImageUrl(project.cover_image)" alt="Cover Image">
          <h4>Progetto: {{ project.name_project }}</h4>
          <p>Descrizione: {{ project.description }}</p>
          <p>Data pubblicazione: {{ project.date }}</p>
          <p v-if="project.group">Progetto svolto in gruppo</p>
          <p v-else>Progetto non svolto in gruppo</p>
          <p>id: {{ project.type_id }}</p>
          <p>Tipologia del progetto: {{ project.type.name_type }}</p>
          <button @click="selectProject(project)" class="btn btn-primary">more details</button>
          <router-link :to="{ name: 'project', params: { slug: project.slug } }">read more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
