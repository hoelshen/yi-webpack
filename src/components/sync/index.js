import lodash from 'lodash-es'
import item from "./sync.css"
import { isArray } from 'util';
import help from "../common/help.js"
const sync = function(){
    console.log("sync")
    fetch("api/test")
    .then(response=> response.json())
    .then(data=>{
        console.log("fetch的结果", data.message);
    })
    setTimeout(function(){
        document.getElementById("app").innerHTML = `<h1 class="${item.test}">sjh</h1>`
    },2000)
}

const isArrayFun  = function(args){
    // console.log("isArray", lodash.isArray(args))
    console.log(isArray(args))
}
export {
    sync,
    isArrayFun
}