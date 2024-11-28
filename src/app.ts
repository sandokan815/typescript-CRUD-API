import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
