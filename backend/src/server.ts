import express from 'express'
import cors from 'cors'
import AppDataSource from './data-source'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', authRoutes);
app.use('/api', userRoutes);

AppDataSource.initialize()
    .then(() => {

        console.log("Database Connected")

        app.get('/', (req: any, res: any) => {
            res.send("Hello World!");
        })

        app.listen(5000, () => {
            console.log("Backend running on 5000");
        });
    })

