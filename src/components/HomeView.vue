<template>
    <HomePage />
    <div>
        <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-6">
                <ul class=" list-group list-group-flush ms-2  ">
                    <li class=" list-group-item flex-container" v-for=" (post, index) in posts" :key="index">
                        <img :src="post.data.thumbnail" alt="" class="image-two">
                        <div class="ms-2"> {{ post.data.title }}</div>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
import HomePage from './HomePage.vue';
const axios = require("axios")
export default {
    data() {
        return {
            posts: []
        }
    },
    components: {
        HomePage
    },
    created() {
        axios.get("https://www.reddit.com/r/aww.json")
            .then(response => {
                this.posts = response.data.data.children;
            })
            .catch(error => {
                console.log(error)
            })
    }

}
</script>

<style  scoped>
.flex-container {
    display: flex;
    align-items: center;
    height: 80px;
    font-family: Poppins;
    cursor: pointer;
}

.flex-container:hover {
    background-color: rgb(240, 240, 240);

}

.image-two {
    width: 44px;
    height: 44px;
    border-radius: 50%;

}
</style>