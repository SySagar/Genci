import express from 'express';
import validateToken from '@utils/validateToken';

const router = express.Router();

router.post('/verify', validateToken, (req:any, res:any) => {
    res.send(
        {status:200, message:"token verified",user:req.user}
    )
});

export default router;