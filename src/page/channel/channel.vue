<template lang="html">
  <section class="content-container">
    <div class="main-tool">
      <div class="main-tool-hellow">
        <div class="main-tool-btn">
          <a href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</a>
          <a href="#" class="btn add"><i class="fa fa-plus"></i>  <router-link :to="'/channel/add'" class="zeng">添加栏目</router-link>  </a>
        </div>
      </div>
    </div>
    <div class="toolbar">
      <div class="content-form-sea">
        <div class="con-form-item__cha">
          <div class="con-input"><input placeholder="名称" v-model="param.name" type="text" class="con-input__text"></div>
          <input type="button" value="搜索" @click="goseach()" class="input_submit"/>
        </div>
      </div>
    </div>
    <div class="con-table">
      <table width="100%" class="table">
        <tr>
          <th width="5%">ID</th>
          <th width="35%">名称</th>
          <th width="20%">时间</th>
          <th width="15%">操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.time}}</td>
          <td><router-link :to="'/channel/edit/'+item.id" class="mini edit">修改</router-link><a class="mini del" @click="getDel(item.id)">删除</a></td>
        </tr>
      </table>
      <pagination :curr="param.page" :total="total" @returnPage="goPage"></pagination>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      param: {
        name: '',
        page: 1
      },
      total: 1
    }
  },
  created () {
    this.getChannel()
  },
  methods: {
    getChannel () {
      this.$api.get('channel', this.param, r => {
        this.list = r.data.list
        this.total = r.data.total
        // console.log(this.list)
      })
    },
    getDel (id) {
      if (window.confirm('你确定要删除这条数据么')) {
        this.$api.delete('channel/' + id, null, r => {
          this.getChannel()
        })
      }
    },
    goPage (e) {
      this.param.page = e
      this.getChannel()
    },
    goseach () {
      this.param.page = 1
      this.getChannel()
    }
  }
}
</script>
