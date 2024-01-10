const mongoose = require('mongoose')
const connectDB= (uri)=>{
    mongoose.connect(`${uri}`)
        .then(() => {
            console.log('Connect DB success...')
        })
        .catch((err) => {
            console.log(err)
        })
} 

module.exports = connectDB

