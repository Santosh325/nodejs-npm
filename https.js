// const {send} = require('./classic/request')
// const {read} = require('./classic/response')

const {send, read} = require('./classic')
// ecma script -> 6
// import {send} = './request.mjs'
function https(url, data) {
    send(url,data)
    return read()
}


const helloworld = https('https://youtube.com', 'data')
console.log(helloworld);