<template>
    <section class="content-container">
      <div class="main-tool">
        <div class="main-tool-hellow">
          <div class="main-tool-btn">
            <a href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</a>
            <!-- <a href="#" class="btn save" @click="getSubmit"><i class="fa fa-save"></i>保存文章</a> -->
          </div>
        </div>
      </div>
      <div class="content-wrapper">
          <div class="content-form-item">
            <label class="form-item__label">网站名称</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.name" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">网站标题</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.title" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">网站图片</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.logo" class="con-input__text w300 dis"><button type="button" class="con-button"><span><i class="fa fa-picture-o"></i>  选择图片</span></button><input type="file" name="file" class="none"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">网站版权</label>
            <div class="form-item__content"><div class="con-input"><textarea type="text" v-model="dat.copyright" class="textarea__inner"></textarea></div></div>
          </div>
          <div class="content-form-item">
            <div class="form-item__content">
              <button type="button" class="con-button"><span @click="getSubmit">立即保存</span></button>
            </div>
          </div>

      </div>
    </section>
</template>
<script>
export default {
  data () {
    return {
      dat: []
    }
  },
  created () {
    this.getSite()
  },
  methods: {
    getSite () {
      this.$api.get('site', null, r => {
        this.dat = r.data
        console.log(this.dat)
      })
    },
    getSubmit () {
      this.$api.put('site', this.dat, r => {
        window.alert('编辑成功')
        this.getSite()
      })
    }
  }
}
</script>
