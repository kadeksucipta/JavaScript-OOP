// huruf depan pembuatan fun harus kapital
function salam(){
    return "selamat datang"
}

// ini kusus nanti kalo belajar express
// akan error ketika di jalankan di js biasa karena butuh node dan deklarasi variable app juga.
app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Autohorization')
    next()

})

export {salam}