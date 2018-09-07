<template>
  <div>
        <h1>Books</h1>
        <input type="text" class="form-control" v-model="search" placeholder="search books">
        <div class="books">
            <div class="col my-5" :key="book.id" v-for="book in filteredBooks">
            <!-- <div class="col my-5" :key="book.id" v-for="book in books"> -->
                <div :id="'book-' + book.id"  class="book">
                    <router-link v-bind:to="'/book/' + book.id">
                        <div class="card text-center">
                            <div class="card-title">
                                <h4>{{ book.nom }}</h4>
                            </div>
                            <div class="card-body">
                                <p>{{book.id}}</p>
                                <p>{{book.isbn}}</p>
                                <h4>{{book.title}}</h4>
                                <p>{{book.description}}</p>
                                <p>{{book.author}}</p>
                                <p>{{book.publicationDate}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin'

export default {
    name: 'Books',
    data() {
        return {
            books: [],
            search: ''
        }
    },
    created() {
    
        this.$http.get("http://127.0.0.1:8000/api/books.json").then(response => {
            response.json().then(data => {
                console.log(data)
                return this.books = data
            });
        }, response => {
            console.log("Erreur")
        });
        // fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        //     response.json().then(data => {
        //         console.log(data)
        //         return this.books = data
        //     });
        // }, response => {
        //     console.log("Erreur")
        // });
        
    },
    computed: {

    },
    mixins: [
        searchMixin
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
