<script>
import axios from 'axios';

export default {
    props: ['project'],
    name: 'ProjectShow',
    components: {

    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            projects: [],
            selectedProject: null,
            project: ''
        }
    },
    mounted() {
        console.log("Qui c'è this.$route.params.slug", this.$route.params.slug);

        axios
            .get(`${this.base_url}/api/projects/${this.$route.params.slug}`)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    // save the response into the vue instance

                    console.log(response.data.project);
                    this.project = response.data.project

                } /*else {
                    console.log(response.data.message);
                    // redirect to a 404 
                    this.$router.push({ name: 'not-found' });
                }*/

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
    <!-- project=true? -->
    <div v-if="project">
        <h3>{{ project.name_project }}</h3>

        <!-- Immagine -->
        <div class="container">
            <!-- <template v-if="!project.cover_image.startsWith('http')">
                <img class="img-fluid" :src="base_url + '/storage/' + project.cover_image" alt="" loading="lazy">
            </template>
<template v-else>
                <img class="img-fluid" :src="project.cover_image" alt="" loading="lazy">
            </template> -->

            <template>
                <img :src="getImageUrl(project.cover_image)" alt="Cover Image">
            </template>
        </div>

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