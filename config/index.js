require ('dotenv').config();

dbData={
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME
};

const config ={
    port: process.env.PORT,
    db:{
        url:`mongodb+srv://${dbData.dbUser}:${dbData.dbPassword}@${dbData.dbHost}/${dbData.dbName}?retryWrites=true&w=majority`
    }
}

module.exports = {config}