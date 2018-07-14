<template>
    <div>
        <app-navbar></app-navbar>
        <div class="container">
            <!-- <app-books></app-books>
            <app-addBook></app-addBook> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Books from './components/Books.vue';
import addBook from './components/addBook.vue';

export default {
  name: 'app',
  components:{
      'app-navbar': Navbar,
      'app-books': Books,
      'app-addBook': addBook
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    nav {
        background-color: #6c5ce7;
    }
</style>

