import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { Users } from './entities/Users'
import { Message } from './entities/Message'
import { Conversation } from './entities/Conversation'

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root123",
    database: "chat_application",
    logging: true,
    synchronize: true,
    entities: [ Users, Message, Conversation ]
})

export default AppDataSource