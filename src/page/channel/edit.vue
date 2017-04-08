<template>
  <div>
    <section class="content-container">
      <div class="main-tool">
        <div class="main-tool-hellow">
          <div class="main-tool-btn">
            <router-link :to="'/channel'" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</router-link>
            <!-- <a href="#" class="btn save" @click="getSubmit"><i class="fa fa-save"></i>保存文章</a> -->
          </div>
        </div>
      </div>
      <div class="content-wrapper">
          <div class="content-form-item">
            <label class="form-item__label">名字</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.name" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">时间</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.time"  class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <div class="form-item__content">
              <button type="button" class="con-button"><span @click="getSubmit">立即保存</span></button>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      lists: {}
    }
  },
  created () {
    if (this.id) {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.$api.get('channel/' + this.id, null, r => {
        this.lists = r.data
      })
    },
    getSubmit () {
      if (this.id) {
        this.$api.put('channel/' + this.id, this.lists, r => {
          window.alert('修改成功')
          this.$router.go(-1)
        })
      } else {
        this.$api.post('channel', this.lists, r => {
          window.alert('新增成功')
          this.$router.go(-1)
        })
      }
    }
  }
}
</script>
