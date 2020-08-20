import { Router } from 'express';
const router = Router();
import cors from 'cors';

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

router.get('/', cors(corsOptions), (req, res) => {
    res.send([
        {name: "Jhon Doe"},
        {name: "Emma Watson"},
        {name: "Pedro Perez"},
        {name: "Emma Stone"}
    ]);
});

export default router;
