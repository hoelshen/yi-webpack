import lodash from 'lodash-es'
import item from "./sync.css"
import { isArray } from 'util';
const sync = function(){
    console.log("sync")
    // document.getElementById("app").innerHTML = `<h1 class="${item.test}">H1</h1>`
}

const isArrayFun  = function(args){
    // console.log("isArray", lodash.isArray(args))
    console.log(isArray(args))
}
export {
    sync,
    isArrayFun
}