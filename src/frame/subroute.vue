<template lang="html">
  <div>
   <header class="head">
    <div class="head-logo"><i class="fa fa-archive"></i>  <span>简单文章管理系统</span></div>
    <div class="head-right">
      <a href="#" @click="getTui">退出登录</a>
    </div>
  </header>
   <nav class="content-menu">
     <dl v-for="item in lists">
       <dt><i class="fa" :class="item.icon"></i>  {{item.title}}</dt>
       <dd v-for="itemm in item.children">
         <router-link :to="itemm.router" v-text="itemm.title"></router-link>
       </dd>
     </dl>
   </nav>
  <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lists: [
          {
            id: 1,
            title: '文章管理',
            icon: 'fa-id-card',
            children: [
              {id: 1, title: '文章起始', router: '/'},
              {id: 2, title: '文章列表', router: '/article'},
              {id: 3, title: '栏目管理', router: '/channel'}
            ]
          },
          {
            id: 2,
            title: '系统管理',
            icon: 'fa-life-buoy',
            children: [
              {id: 1, title: '管理员设置', router: '/manage'},
              {id: 1, title: '文章设置', router: '/site'}
            ]
          },
          {
            id: 3,
            title: '管理设置',
            icon: 'fa-send',
            children: [

            ]
          }
        ]
      }
    },
    created () {
    },
    methods: {
      getTui () {
        this.$api.get('logout', null, r => {
          this.$router.push('/login')
        })
      }
    }
}
</script>
