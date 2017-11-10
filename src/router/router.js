import main from '../main.vue'
import home from '../page/home/index'

export default [{
    path: '/',
    component: main,
    name: 'main',
    children: [{
        path: '/',
        component: home,
        name: 'home'
    }]
}]