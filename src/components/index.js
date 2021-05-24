import Vue from 'vue'

import vHeader from './vHeader'
import vNav from './vNav'
let components={
    vHeader,
    vNav,
}

for(let key in components){
    Vue.component(key,components[key])
}