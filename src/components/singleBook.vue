<template>
    <div>
        <h1>{{book.title}}</h1>
        <article>
            {{book.body}}
        </article>
    </div>
</template>

<script>
    export default {
        name: 'singleBook',
        data() {
            return {
                id: this.$route.params.id,
                book: {}
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(data => {
                this.book = data.body;
            });
        }
    }
</script>

<style scoped>
    
</style>