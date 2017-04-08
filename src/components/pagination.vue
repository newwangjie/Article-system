<template lang="html">
  <div class="pages">
    <template v-if="page > 1">
      <a @click="getPage(1)">首页</a>
      <a @click="getPage(page - 1)">上一页</a>
    </template>
    <template v-else>
      <a class="disable">首页</a>
      <a class="disable">上一页</a>
    </template>

     <a v-for="index in indexs()"  @click="getPage(index)">{{index}}</a>

     <template v-if="page < Math.ceil(this.total / 10)">
       <a @click="getPage(page + 1)">下一页</a>
       <a @click="getmo()">末页</a>
     </template>
     <template v-else>
       <a class="disable">下一页</a>
       <a class="disable">末页</a>
     </template>
  </div>
</template>

<script>
export default {
  props: {
    total: null,
    currs: 1
  },
  data () {
    return {
      page: 1,
      pagecount: 10
    }
  },
  created () {
    this.page = this.page
  },
  methods: {
    getPage (i) {
      this.page = i
      this.$emit('gopage', i)
      this.getData()
    },
    getmo () {
      this.page = Math.ceil(this.total / 10)
      // console.log(this.page)
      this.getData()
    },
    indexs () {
      var zu = []
      var min = 0
      var max = Math.ceil(this.total / 10)
      if (this.page < 3) {
        min = 0
        max = 5
      } else if ((max - this.page) < 2) {
        min = max - 5
        max = Math.ceil(this.total / 10)
      } else {
        min = this.page - 3
        max = this.page + 2
      }
      for (var i = min; i < max; i++) {
        // console.log(i)
        zu.push(i + 1)
      }
      console.log(zu)
      // this.zu = zu
      return zu
    }
  }
}
</script>
