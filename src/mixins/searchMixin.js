export default {
    computed: {
        filteredBooks: function() {
            return this.books.filter((book) => {
                return book.title.match(this.search);
            });
        }
    }
}