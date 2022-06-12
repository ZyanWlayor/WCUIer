import fs from 'fs'
import path from 'path'
const IGNORE_FILE_NAMES = [
    '.git','package.json'
]
export default function(source,target){
    return new Promise((resolve,reject)=>{
        console.log(`[WCUIer] start update ${ source } to ${target}`)
        fs.cp(source,target,{
            force:true,
            filter:(source)=>(IGNORE_FILE_NAMES.indexOf(path.basename(source)) === -1),
            recursive:true
        },(error)=>{
            if(error){
                reject(error)
                return
            }
            // update package.json
            let packages_wcui = JSON.parse(fs.readFileSync(path.resolve(source,'package.json'),'utf-8'))
            let packages_current = JSON.parse(fs.readFileSync(path.resolve(target,'package.json'),'utf-8'))
            console.log('packages_current.dependencies:',packages_current.dependencies)
            console.log('packages_wcui.dependencies:',packages_wcui.dependencies)
            packages_current.dependencies = updateDeps(packages_current.dependencies,packages_wcui.dependencies)
            console.log('packages_current.dependencies after update:',packages_current.dependencies)
            packages_current.devDependencies = updateDeps(packages_current.devDependencies,packages_wcui.devDependencies)

            fs.writeFileSync(path.resolve(target,'package.json'),JSON.stringify(packages_current,undefined,2))

            console.log(`[WCUIer] updated ${ source } to ${target}`)
            resolve()
        })
    })
}

function updateDeps(target,newTarget){
    return Object.assign({},target,newTarget)
}