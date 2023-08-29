const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise; //ES6 - promise
const MONGO_URL = process.env.MONGO_URL;

before((done) =>{

mongoose.connect(MONGO_URL, {useNewUrlParser:true});
mongoose.connection
.once('open', () => {
    //console.log("Connected")
    done();
})
.on('error', (error)=> {
    console.log("Your Error", error)
});

});


beforeEach((done)=>{
    mongoose.connection.collections.students.drop(() =>{
        console.log("Drop collection succesful")
        done();
    });
})


module.exports = mongoose;

