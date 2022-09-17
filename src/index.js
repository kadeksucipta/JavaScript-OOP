// aturan pertama karena blom pakek node js harus ditulis kalo import filenya extensi apa tadi kesalahan ada di modul1 tapi tidak pakai module1.js
// usahakan kalo bikin class atau fun kalo sifatnya di import depannya pakek kapital

import Hello from "./module1.js"
// import {salam} from "./module2.js"

// script di bawah kalo sudah belajar express baru bisa digunakan
// app.use ((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Autohorization')
//     next()

// })

Hello();

