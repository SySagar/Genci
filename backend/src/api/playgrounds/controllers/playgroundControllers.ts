import { v4 as uuidv4 } from 'uuid';

const generateRoom = async (req:any, res:any) => {
    try {
        const newRoomId = uuidv4();
        res.status(201).send({
                roomId: newRoomId,
                status: '201',
                message: 'Room created successfully'
        })
    } catch (error) {
        res.status(429).send({
            status: '429',
            message: 'Too many requests!'
        })   
    }

};

export { generateRoom };