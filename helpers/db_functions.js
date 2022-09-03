const fs = require('fs');
const db_file = process.env.FILEDB;

const savingDB = ( data ) => {
    fs.writeFileSync( db_file, JSON.stringify(data) );
}

const readingDB = () => {
    
    if( !fs.existsSync(db_file) ){
        return null;
    }
    
    const info = fs.readFileSync(db_file, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}



module.exports = {
    savingDB,
    readingDB
}