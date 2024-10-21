import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  await connect(
    'mongodb+srv://gigley7:UADBsqK5OLO34qQA@database.4vhis.mongodb.net/?retryWrites=true&w=majority&appName=DataBase'
  );

  console.log('Connected to database');
};
