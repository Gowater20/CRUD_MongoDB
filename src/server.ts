import mongoose from 'mongoose';
import {app} from './app';

//environments
const CONNECTION_URL: string = 'mongodb://localhost:27017/DatabaseCRUD';
const PORT = 3000;

//connect node.js to mongoDB (local)
mongoose
    .connect(CONNECTION_URL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(
                `Node API app is running on port http://localhost:${PORT}`
            );
        });
    })
    .catch((error) => console.error(error));