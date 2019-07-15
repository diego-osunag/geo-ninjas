<template>
    <div class="signup container">
        <form class="card-panel" @submit.prevent="signup">
            <h2 class="center deep-purple-text">Signup</h2>
            <div class="field">
                <label for="email">Email:</label>
                <input type="email" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="alias">Alias:</label>
                <input type="text" name="alias" v-model="alias">
            </div>
            <p class="field center" v-if="feedback">{{ feedback }}</p>
            <div class="field center">
                <button class="btn deep-purple">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init.js'

export default {
    data(){
        return{
            email: null,
            password: null,
            alias: null,
            feedback: null,
            slug: null
        }
    },
    methods: {
        signup(){
            if(this.alias){
                 this.slug = slugify(this.alias, {
                     replacement: '-',
                     remove: /[$*_+~.()'"!\-:@]/g,
                     lower: true
                 })
                 console.log(this.slug);
            }else{
                this.feedback = "You must enter an alias"
            }
        }
    }
}
</script>

<style>
.signup{
    max-width: 400px;
    margin-top: 60px;
}

.signup h2{
    font-size: 2.4em;
}

.signup .field{
    margin-bottom: 16px;
}
</style>
