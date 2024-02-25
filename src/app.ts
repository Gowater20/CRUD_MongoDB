import express from 'express';

import {router as UserApi} from './routes/user.route';

export const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Server is running!" });
});

app.use("/users", UserApi);

//export default app; //cerca perchè utilizzi default

