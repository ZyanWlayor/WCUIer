import process from 'process'
import getWCUI from "./getWCUI.js";

if(process.argv[2] === 'init'){
    console.log('init')
}else if(process.argv[2] === 'update'){
    console.log('update')
}