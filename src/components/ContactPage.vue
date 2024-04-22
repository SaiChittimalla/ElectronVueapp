<template>
    <HomePage />
    <div class=" row">
        <div class=" col-2 pdf-list">
            <h2>PDF List</h2>
            <ul>
                <li v-for="(pdf, index) in pdfList" :key="index" @click="showPreview(pdf)">
                    {{ pdf.name }}
                </li>
            </ul>
        </div>

        <div class="col-10 pdf-preview">
            <h2>PDF Preview</h2>
            <div v-if="selectedPDF">
                <embed :src="pdfList.data.thumbnail" type="application/pdf" width="100%" height="600px" />
            </div>
            <div v-else>
                <p>No PDF selected</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import HomePage from './HomePage.vue';


export default {
    data() {
        return {
            pdfList: [],
            selectedPDF: null,
        };
    },
    mounted() {
        this.fetchPDFs();
    },
    components: {
        HomePage

    },
    methods: {
        fetchPDFs() {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            axios.get('https://www.reddit.com/r/aww.json')
                .then(response => {
                    this.pdfList = response.data.data.children; // Assuming the API response contains an array of PDF objects
                })
                .catch(error => {
                    console.error('Error fetching PDFs:', error);
                });
        },
        showPreview(pdf) {
            this.selectedPDF = pdf.name;
        },
    },
};
</script>
  
<style>
/* Add your CSS styles here */
/* Same styling as provided in the previous example */
</style>
  
  