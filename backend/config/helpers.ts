import mongoose from 'mongoose';
/**
 * @EXPORTS
 */
export { connectWithDB };

/**
 *Instantiates connection with database
 *@function connectWithDB
 *@instantiates connection with MongoDB
 */
const connectWithDB = (): void => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.connect(process.env.DB_URI ?? '', {}, (err) => {
    if (err) throw err;
    console.log('Connected to DB');
  });
};
export default connectWithDB;
