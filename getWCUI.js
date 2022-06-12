import process from 'process'
import child_process from 'child_process'
import path from 'path'
import os from 'os'
import fs from 'fs'

const WCUITarget = 'git@github.com:ZyanWlayor/WCUI.git'
const WCUITargetType = 'git'

export default function () {
    return new Promise((resolve, reject) => {
        const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'WCUI-'))
        console.log('[WCUIer] start pull WCUI ...')
        child_process.exec(`git clone ${WCUITarget} ${tmpDir}`, {
        }, function (error) {
            if(error){
                reject(error)
                return
            }
            console.log('[WCUIer] pulled WCUI')
            resolve(tmpDir)
        })
    })

}