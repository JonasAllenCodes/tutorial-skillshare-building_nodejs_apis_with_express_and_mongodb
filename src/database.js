import mongoose from 'mongoose'

export const databaseConnect = () => {
    return mongoose
        .connect('mongodb://localhost/express-app-dev', { useNewUrlParser: true })
        .then(() => console.log('MongoDB is Ready!'))
        .catch(error => console.log(`Something  went wrong ${error}`))
}