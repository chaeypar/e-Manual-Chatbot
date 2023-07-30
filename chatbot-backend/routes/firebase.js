import express from 'express';
import { database } from './config.js';
import { ref, set, get, child} from '@firebase/database';

const router = express.Router();

let idx = 0;

router.get('/save', function(req, res){
    set(ref(database, '/test'), idx++);
    get(child(ref(database), '/test')).then((snapshot) => {
        if (snapshot.exists()){
            console.log(snapshot);
        }
        else{
            console.log('aaa');
        }
    });
});

export default router;