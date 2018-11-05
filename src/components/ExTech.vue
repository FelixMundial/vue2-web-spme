<template>
  <el-carousel :interval="5000" arrow="always" height="768px">
    <el-carousel-item v-for="item in imgLibrary" :key="item">
      <img class="extech-slides-img" :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: 'ExTech',
  data () {
    return {
      imgLibrary: [
        {
          src: require('../assets/nature.jpg'),
          title: '测试1',
          href: '/about'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试2',
          href: '/about'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试3',
          href: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
