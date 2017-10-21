import Mongoose from 'mongoose';
import config from './config.dev';

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    try {
      const uri = `mongodb://${dbHost}@${dbPort}/${dbName}`;
        await Mongoose.connect(uri, { useMongoClient: true });
        console.info('Connected to mongo!');
    }
    catch (err) {
        console.error('Could not connect to MongoDB ', err);
    }
}

export default connectToDb;
