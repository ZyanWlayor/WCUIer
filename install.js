import fs from 'fs'
export default function(source,target){
    fs.cp(source,target,{
        force:true,
        filter:(name)=>!name === '.git'
    })
}