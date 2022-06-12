import fs from 'fs'
import path from 'path'
export default function(source,target){
    return new Promise((resolve,reject)=>{
        console.log(`[WCUIer] start install ${ source } to ${target}`)
        fs.cp(source,target,{
            force:true,
            filter:(source)=>(path.basename(source) !== '.git'),
            recursive:true
        },(error)=>{
            if(error){
                reject(error)
                return
            }
            console.log(`[WCUIer] installed ${ source } to ${target}`)
            resolve()
        })
    })
}