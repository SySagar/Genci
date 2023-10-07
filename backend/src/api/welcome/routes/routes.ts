import express from 'express';

const router = express.Router();

router.get('/', (req:any, res:any) => {
    res.send(
        {status:200, message:"👋 Hi there.Everything is working fine."}
    )
});

export default router;