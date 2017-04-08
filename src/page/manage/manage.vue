<template lang="html">
  <section class="content-container">
    <div class="main-tool">
      <div class="main-tool-hellow">
        <div class="main-tool-btn">
          <a href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</a>
          <a href="#" class="btn add"><i class="fa fa-plus"></i>  <router-link :to="'/manage/add'" class="zeng">添加管理员</router-link>  </a>
        </div>
      </div>
    </div>
    <div class="toolbar">
      <div class="content-form-sea">
        <div class="con-form-item__cha">
          <div class="con-input"><input placeholder="用户名"  type="text" class="con-input__text"></div>
          <input type="button" value="搜索" class="input_submit">

        </div>
      </div>
    </div>
    <div class="con-table">
      <table width="100%" class="table">
        <tr>
          <th width="10%">ID</th>
          <th width="55%">用户名</th>
          <th width="20%">时间</th>
          <th width="15%">操作</th>
        </tr>
        <tr v-for="item in list">
          <td>{{item.id}}</td>
          <td>{{item.username}}</td>
          <td>{{item.time}}</td>
          <td><router-link :to="'/manage/edit/'+item.id" class="mini edit">修改</router-link><a class="mini del" @click="getDel(item.id)">删除</a></td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dat: {},
      list: []
    }
  },
  created () {
    this.getManage()
  },
  methods: {
    getManage () {
      this.$api.get('manage', null, r => {
        this.list = r.data.list
        console.log(this.list)
      })
    },
    getDel (id) {
      if (window.confirm('你确定要删除这个管理员么')) {
        this.$api.delete('manage/' + id, null, r => {
          this.getManage()
        })
      }
    }
  }
}
</script>
