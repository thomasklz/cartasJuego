
import express from 'express';
import cors from "cors";
import { PORT } from './config/config.js';;
import rotuerTypeUsers from './router/TypeUsersRouter.js';
import  routerUser from './router/UserRouter.js';
import  routerPrueba from './router/PruebaRouter.js';
import  routerPalo from './router/PaloRouter.js';
import  routerPenitencia from './router/PenitenciaRouter.js';
import  routerNumero from './router/NumeroRouter.js';
import { sequelize } from "./db/conexion.js";

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/v0', rotuerTypeUsers);
app.use('/api/v0', routerUser);
app.use('/api/v0', routerPrueba);
app.use('/api/v0', routerPalo);
app.use('/api/v0', routerPenitencia);
app.use('/api/v0', routerNumero);
const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ force: false })
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();

