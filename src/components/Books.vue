<template>
  <div>
        <h1>Books</h1>
        <div class="books">
            <div class="col my-5" :key="book.id" v-for="book in books">
                <div :id="'book-' + book.id"  class="book">
                    <a :href="'/books/' + book.id + '/edit'">
                        <div class="card text-center">
                            <div class="card-title">
                                <h4>{{book.nom}}</h4>
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
                    </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Books',
    data() {
        return {
            books: []
        }
    },
    created() {
    
        // this.$http.get("http://127.0.0.1:8000/api/books", {mode: 'no-cors'})
        // .then(response => {
        //     return this.books = response.body
        // }, response => {

        // });
        fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
            response.json().then(data => {
                console.log(data)
                return this.books = data
            });
        }, response => {
            console.log("Erreur")
        });
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
