import fs from 'fs'

export default function(wcui_temp){
    fs.rmSync(wcui_temp,{
        recursive:true,
    })
    console.log(`[WCUIer] clean ${ wcui_temp }`)
}