import express from 'express';
import { generateRoom , populatePlayground, createPlayground, getResult } from '../controllers/playgroundControllers';
import validateToken from '@utils/validateToken';

const router = express.Router();

router.get('/createRoom',validateToken, generateRoom);
router.post('/populatePlayground', populatePlayground);
router.post('/createPlayground', createPlayground); // no token validation left purposely because didn't had time to implemet the ui in frontend for creation..hope you consider😅
router.post('/results', getResult);

export default router;