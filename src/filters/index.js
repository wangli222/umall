import Vue from 'vue'

import filterPrice from "./filterPrice"
import filterTime from "./filterTime"
import filterTel from "./filterTel"
let filters={
    filterPrice,
    filterTime,
    filterTel
}

for(let key in filters){
    Vue.filter(key,filters[key])
}