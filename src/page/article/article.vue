<template lang="html">
  <section class="content-container">
    <div class="main-tool">
      <div class="main-tool-hellow">
        <div class="main-tool-btn">
          <a href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</a>
          <a href="#" class="btn add"><i class="fa fa-plus"></i>  <router-link :to="'/article/add'" class="zeng">添加文章</router-link>  </a>
        </div>
      </div>
    </div>
    <div class="toolbar">
      <div class="content-form-sea">
        <div class="con-form-item__cha">
          <div class="con-input"><input placeholder="标题"  v-model="param.title" type="text" class="con-input__text"></div>
          <input type="button" value="搜索" @click="goSearch()" class="input_submit">
        </div>
      </div>
    </div>
    <div class="con-table">
      <table width="100%" class="table">
        <tr>
          <th width="5%">ID</th>
          <th width="30%">文章标题</th>
          <th width="20%">作者</th>
          <th width="15%">归属栏目</th>
          <th width="15%">时间</th>
          <th width="15%">操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.author}}</td>
          <td>{{item.channel.name}}</td>
          <td>{{item.time}}</td>
          <td><router-link :to="'/article/edit/'+item.id" class="mini edit">修改</router-link><a class="mini del" @click="getDel(item.id)">删除</a></td>
        </tr>
      </table>
         <pagination :curr="param.page" :total="total" @returnPage="goPage"></pagination>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      dat: {},
      list: [],
      param: {
        title: '',
        page: 1
      },
      total: 1
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('article', this.param, r => {
        this.list = r.data.list
        this.total = r.data.total
        // console.log(this.total)
      })
    },
    getDel (id) {
      if (window.confirm('你确定要删除这条数据么')) {
        this.$api.delete('article/' + id, null, r => {
          this.getData()
        })
      }
    },
    goPage (e) {
      this.param.page = e
      this.getData()
    },
    goSearch () {
      this.param.page = 1
      this.getData()
    }
  //   getPage (i) {
  //     this.page = i
  //     this.getData()
  //   },
  //   getmo () {
  //     this.page = Math.ceil(this.total / 10)
  //     // console.log(this.page)
  //     this.getData()
  //   },
  //   indexs () {
  //     var zu = []
  //     var min = 0
  //     var max = Math.ceil(this.total / 10)
  //     if (this.page < 3) {
  //       min = 0
  //       max = 5
  //     } else if ((max - this.page) < 2) {
  //       min = max - 5
  //       max = Math.ceil(this.total / 10)
  //     } else {
  //       min = this.page - 3
  //       max = this.page + 2
  //     }
  //     for (var i = min; i < max; i++) {
  //       // console.log(i)
  //       zu.push(i + 1)
  //     }
  //     console.log(zu)
  //     // this.zu = zu
  //     return zu
  //   }
  }
}
</script>
