<template>
  <div>
    <section class="content-container">
      <div class="main-tool">
        <div class="main-tool-hellow">
          <div class="main-tool-btn">
            <router-link :to="'/article'" href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</router-link>
            <!-- <a href="#" class="btn save" @click="getSubmit"><i class="fa fa-save"></i>保存文章</a> -->
          </div>
        </div>
      </div>
      <div class="content-wrapper">
          <div class="content-form-item">
            <label class="form-item__label">标题</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.title"  class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">作者</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.author"  class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">来源</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.origin" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">编者</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="lists.editor"  class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">栏目</label>
            <div class ="form-item__content">
              <div class="con-input">
              <select class="con-input__text w400" v-model="lists.channel_id">
                <option v-for="item in channel" :value="item.id" v-text="item.name"></option>
              </select>
              </div>
           </div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">内容</label>
            <div class="form-item__content"><div class="con-input"><textarea  v-model="lists.content"  class="textarea__inner"></textarea></div></div>
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
      lists: {},
      channel: []
    }
  },
  created () {
    this.getChannel()
    if (this.id) {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.$api.get('article/' + this.id, null, r => {
        this.lists = r.data
        // console.log(this.lists)
      })
    },
    getChannel () {
      this.$api.get('channel', null, r => {
        this.channel = r.data.list
      })
    },
    getSubmit () {
      if (this.id) {
        this.$api.put('article/' + this.id, this.lists, r => {
          window.alert('修改成功')
          this.$router.go(-1)
        })
      } else {
        this.$api.post('article', this.lists, r => {
          window.alert('新增成功')
          this.$router.go(-1)
        })
      }
    }
  }
}
</script>
