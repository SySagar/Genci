import express from 'express';
import { generateRoom } from '../controllers/playgroundControllers';
import validateToken from '@utils/validateToken';

const router = express.Router();

router.get('/createRoom',validateToken, generateRoom);

export default router;