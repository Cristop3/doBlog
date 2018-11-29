import Vue from 'vue'
import Router from 'vue-router'

//引入路由模板
import index from '../components/content.vue'
import content from '../components/content.vue'
import archive from '../components/archive.vue'
import read from '../components/read.vue'
import about from '../components/about.vue'
import contentleft from '../components/contentLeft.vue'
import archiveleft from '../components/archive.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'index',
            component:content
        },
        {
            path:'/archive',
            name:'archive',
            component:content,
            children:[
                {
                    path:'archiveleft',
                    component:archiveleft
                }
            ]
        },
        {
            path:'/read',
            name:'read',
            component:read
        },
        {
            path:'/index',
            name:'content',
            component:content,
            children:[
                {
                    path:'contentleft',
                    component:contentleft
                }
            ]
        },
        {
            path:'/about',
            name:'about',
            component:content,
            children:[
                {
                    path:'aboutleft',
                    component:about
                }
            ]
        }
    ]
})