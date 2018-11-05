<template>
  <div class="welcome">
    <template>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in imgLibrary" :key="item">
          <img :src="item.src" width="100%" class="swiper-slide-img"/>
          <h1 class="swiper-slide-title">{{ item.title }}</h1>
        </swiper-slide>
      </swiper>
    </template>

    <el-row style="margin: 1rem" :gutter="15">
      <el-col :span="collapseSpanLeft">
        <el-radio-group v-model="isCollapsed" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开目录</el-radio-button>
          <el-radio-button :label="true">收起目录</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapsed">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title" style="margin-right: 2rem">近期成果</span>
            </template>
            <el-menu-item-group title="近期发表">
              <el-menu-item index="1-1" @click="enableSec(1)">选项1-1</el-menu-item>
              <el-menu-item index="1-2">选项1-2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="近期基金">
              <el-menu-item index="2-1">选项2-1</el-menu-item>
            </el-menu-item-group>
            <!--<el-submenu index="3-1">-->
              <!--<span slot="title">选项3-1</span>-->
              <!--<el-menu-item index="3-1-1">选项3-1-1</el-menu-item>-->
            <!--</el-submenu>-->
          </el-submenu>
          <el-menu-item index="2" @click="enableSec(2)">
            <span slot="title">近期提醒</span>
            <i class="el-icon-date"></i>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <span slot="title">导航三</span>
            <i class="el-icon-loading"></i>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="collapseSpanRight" id="welcome-publications" v-if="secAEnabled">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="collapseSpanRight" id="welcome-reminders" v-if="secBEnabled">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-badge value="new" class="item" style="margin-top: 1rem">
            <el-tag>近期提醒</el-tag>
          </el-badge>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      // slidesTitleSeen: false,
      // currentIndex: null,
      activeNames: ['1'],
      isCollapsed: true,
      collapseSpanLeft: 2,
      collapseSpanRight: 22,
      secAEnabled: true,
      secBEnabled: false,
      swiperOption: {
        width: window.innerWidth,
        height: window.innerHeight,
        on: {
          resize: function () {
            this.params.width = window.innerWidth
            this.params.height = window.innerHeight
            this.update()
          }
        },
        autoplay: true,
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: -100,
          depth: 500,
          modifier: 1,
          slideShadows: true
        },
        loop: true,
        grabCursor: true
      },
      imgLibrary: [
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试1',
          href: '/about'
        },
        {
          src: require('../assets/nature.jpg'),
          title: '测试2',
          href: '/about'
        },
        {
          src: require('../assets/city-lights.jpg'),
          title: '测试3',
          href: '/about'
        }
      ]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    enableSec (index) {
      if (index === 1) {
        this.secAEnabled = true
        this.secBEnabled = false
      } else if (index === 2) {
        this.secAEnabled = false
        this.secBEnabled = true
      }
    }
    // enableSlidesTitle (index) {
    //   this.slidesTitleSeen = true
    //   this.currentIndex = index
    // },
    // disableSlidesTitle () {
    //   this.slidesTitleSeen = false
    //   this.currentIndex = null
    // }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  },
  watch: {
    isCollapsed (newVal, oldVal) {
      if (newVal === false) {
        this.collapseSpanLeft = 6
        this.collapseSpanRight = 18
      } else {
        this.collapseSpanLeft = 2
        this.collapseSpanRight = 22
      }
    }
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
.welcome {
  margin: 1rem 0;
}
.swiper-slide-img {
  border-radius: 5px;
}
.swiper-slide-title {
  background: -webkit-linear-gradient(bottom, lightgray, rgba(255,255,255,0));
  border-radius: 5px;
  padding: .5rem .1rem;
  font-family: Verdana,sans-serif;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /*min-height: 400px;*/
}
</style>
