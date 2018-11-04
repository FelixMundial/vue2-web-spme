<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <slide-show :slides="slides" :inv="invTime"></slide-show>
  </div>
</template>

<script>
import slideShow from 'vueslideshow'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      invTime: 2000,
      slides: [
        {
          src: require('../assets/nature.jpg'),
          title: '测试1',
          href: '/about'
        },
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试2',
          href: '/about'
        }
      ]
    }
  },
  components: {
    slideShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
