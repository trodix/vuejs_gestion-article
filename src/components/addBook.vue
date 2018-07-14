<template>
    <div>
        <h1>addBook</h1>
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
                <button class="btn btn-success px-5" v-on:click.prevent="post">Add</button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
  name: 'addBook',
  components: {

  },
  props: {
    msg: String
  },
  data() {
        return {
            book: {
                isbn: "",
                title: "",
                description: "",
                author: ""
            }
        }      
  },
  methods: {
      post: function() {
          this.$http.post("https://jsonplaceholder.typicode.com/posts", {
              title: this.book.title,
              body: this.book.description
          }).then(data => {
              console.log(data);
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

