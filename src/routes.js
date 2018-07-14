import Books from './components/Books.vue'
import addBook from './components/addBook.vue'
import singleBook from './components/singleBook.vue'

export default [
    { path: '/', component: Books },
    { path: '/add', component: addBook },
    { path: '/book/:id', component: singleBook }
]
