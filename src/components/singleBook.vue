<template>
    <div class="my-5">
        <div class="col card my-3">
            <div class="">
                <h1>{{book.title}}</h1>
                <article>
                    {{book.description}}
                </article>
            </div>
            <div class="">
                <button class="btn btn-warning px-5 m-5" name="btn-update" v-on:click.prevent="showForm()">Update</button>
                <button class="btn btn-danger px-5 m-5" name="btn-remove" v-on:click.prevent="remove()">Remove</button>
            </div>
        </div>
        <div v-if="update_form" class="">
            <h1>Update book</h1>
            <div>
                <form>
                    <div class="form-group">
                        <label for="f-isbn">isbn</label>
                        <input class="form-control" type="text" placeholder="isbn" id="f-isbn" v-model="book.isbn">
                    </div>
                    <div class="form-group">
                        <label for="f-title">title</label>
                        <input class="form-control" type="text" placeholder="title" id="f-title" v-model="book.title">
                    </div>
                    <div class="form-group">
                        <label for="f-description">description</label>
                        <textarea class="form-control" placeholder="description" id="f-description" v-model="book.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="f-author">author</label>
                        <input class="form-control" type="text" placeholder="author" id="f-author" v-model="book.author">
                    </div>
                    <button class="btn btn-success px-5" v-on:click.prevent="update">Validate</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Router from "../main.js"

    export default {
        name: 'singleBook',
        data() {
            return {
                id: this.$route.params.id,
                book: {},
                update_form: false
            }
        },
        created() {
            this.loadDate()
        },
        methods: {
            showForm: function() {
                this.update_form = !this.update_form
            },
            update: function() {
                this.$http.put('http://127.0.0.1:8000/api/books/' + this.id, {
                    isbn: this.book.isbn,
                    title: this.book.title,
                    description: this.book.description,
                    author: this.book.author,
                    publicationDate: new Date().toISOString()
                }).then(data => { 
                    this.showForm()
                    console.log(data)
                }, (err) => {
                    console.log(err)
                });
            },
            remove: function() {
                this.$http.delete('http://127.0.0.1:8000/api/books/' + this.id).then(data => { 
                    $router.go('/')
                    console.log(data)
                }, (err) => {
                    console.log(err)
                });
            },
            loadDate: function() {
                this.$http.get('http://127.0.0.1:8000/api/books/' + this.id).then(data => {
                    this.book = data.body;
                });
            }
        }
    }
</script>

<style scoped>

</style>