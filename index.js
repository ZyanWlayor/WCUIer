import process from 'process'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

import getWCUI from "./getWCUI.js";
import install from './install.js'
import update from './update.js'
import clean from './clean.js'


yargs(hideBin(process.argv))
    .command('install', 'install WCUI at current directory', () => { }, (_argv) => {
        getWCUI().then((wcui_temp) => {
            install(wcui_temp, process.cwd()).then(()=>{
                clean(wcui_temp)
            })
        })
    })
    .command(['update'], 'update WCUI at current directory', () => { }, (_argv) => {
        getWCUI().then((wcui_temp) => {
            update(wcui_temp, process.cwd()).then(()=>{
                clean(wcui_temp)
            })
        })
    }).argv

