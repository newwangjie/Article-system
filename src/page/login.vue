<template lang="html">
  <div class="modal-overlay">
    <div class="modal-holder">
      <div class="modal">
        <div class="modal-head"><h2>用户登录</h2></div>
        <div class="modal-section">
          <span>用户名</span>
          <input  type="text" value="  " class="madal-inp" v-model="dat.account">
        </div>
        <div class="modal-section">
          <span>密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
          <input  type="password" value="  "  class="madal-inp" v-model="dat.password">
        </div>
        <div class="modal-section">
          <button  class="sib" @click="goSubmit">立即登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dat: {
        account: '',
        password: ''
      }
    }
  },
  created () {

  },
  methods: {
    goSubmit () {
      this.$api.post('login', this.dat, r => {
        this.$router.push('/')
        // console.log(this.dat)
      })
    }
  }
}
</script>

<style lang="css">
</style>
