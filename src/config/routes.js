// 引用子路由
import Frame from '../frame/subroute.vue'
// 引用模块
import index from '../page/index.vue'
import login from '../page/login.vue'
// 引用子页面
// 文章系统
import userArticle from '../page/article/article.vue'
import articleEdit from '../page/article/edit.vue'
//  栏目系统
import userChannel from '../page/channel/channel.vue'
import channelEdit from '../page/channel/edit.vue'
// 管理员设置
import userManage from '../page/manage/manage.vue'
import manageEdit from '../page/manage/edit.vue'
// 系统设置
import userSite from '../page/site/site.vue'

// 配置路由
export default[
  {
    path: '/',
    component: Frame,
    children: [
      {path: '/', component: index},
          {path: 'article', component: userArticle},
          {path: 'channel', component: userChannel},
          {path: 'manage', component: userManage},
          {path: 'site', component: userSite},
          {path: 'article/edit/:id', component: articleEdit},
          {path: 'article/add', component: articleEdit},
          {path: 'channel/edit/:id', component: channelEdit},
          {path: 'channel/add', component: channelEdit},
          {path: 'manage/edit/:id', component: manageEdit},
          {path: 'manage/add', component: manageEdit}
    ]
  },
  {
    path: '',
    component: index
  },
  {
    path: '/login',
    component: login
  }
]
