<template>
  <div>
    <section class="content-container">
      <div class="main-tool">
        <div class="main-tool-hellow">
          <div class="main-tool-btn">
            <router-link :to="'/manage'" href="#" class="btn"><i class="fa fa-chevron-left"></i>  返回上一页</router-link>
            <!-- <a href="#" class="btn save" @click="getSubmit"><i class="fa fa-save"></i>保存文章</a> -->
          </div>
        </div>
      </div>
      <div class="content-wrapper">
          <div class="content-form-item">
            <label class="form-item__label">管理员名称</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.username" class="con-input__text w400"></div></div>
          </div>
      <template v-if="id">
          <div class="content-form-item">
            <label class="form-item__label">原密码</label>
            <div class="form-item__content"><div class="con-input"><input type="password" v-model="dat.old_password" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">新密码</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.new_password" class="con-input__text w400"></div></div>
          </div>
          <div class="content-form-item">
            <label class="form-item__label">重复新密码</label>
            <div class="form-item__content"><div class="con-input"><input type="text" v-model="dat.re_password" class="con-input__text w400"></div></div>
          </div>
      </template>
      <template v-else>
          <div class="content-form-item">
            <label class="form-item__label">管理员密码</label>
            <div class="form-item__content"><div class="con-input"><input type="password" v-model="dat.password" class="con-input__text w400"></div></div>
          </div>
      </template>
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
      dat: {}
    }
  },
  created () {
    if (this.id) {
      this.getData()
    }
  },
  methods: {
    getData (params) {
      if (!params) params = {}
      this.$api.get('manage/' + this.id, params, r => {
        this.dat = r.data
      })
    },
    getSubmit () {
      if (this.id) {
        let d = this.dat
        if (!d.old_password) {
          window.alert('老密码不能为空')
          return
        }
        if (!d.new_password) {
          window.alert('新密码不能为空')
          return
        }
        if (d.old_password === d.new_password) {
          window.alert('老密码和新密码相同')
          return
        }
        if (d.new_password !== d.re_password) {
          window.alert('两次密码不一致')
          return
        }
        this.$api.put('manage/' + this.id, d, r => {
          window.alert('编辑成功')
          this.$router.go(-1)
        })
      } else {
        this.$api.post('manage', this.dat, r => {
          window.alert('添加成功')
          this.$router.go(-1)
        })
      }
    }
  }
}
</script>
