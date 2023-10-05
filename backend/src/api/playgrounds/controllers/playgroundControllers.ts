import { v4 as uuidv4 } from 'uuid';
import {getQuestions,createQuestion,getComparedResult} from '../repository/playground'
import axios from 'axios';

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

const populatePlayground = async (req:any, res:any) => {
    try {
        const { roomId } = req.query;
        console.log('roomId', roomId)

        const questions = await getQuestions(roomId);
        console.log('questions', questions)

        
    } catch (error) {
        console.log(error)
        res.send({
            status: '500',
            message: 'Internal server error'
        })
    }
}

const createPlayground = async (req:any, res:any) => {
    try {
       const playgroundQuestion = req.body;

       console.log('playgroundQuestion', playgroundQuestion)

        const response = await createQuestion(playgroundQuestion);
        if(response)
        res.send({
            status: '200',
            message: 'Playground question created successfully'
        })
        else
        res.send({
            status: '500',
            message: 'Internal server error'
        })

        
    } catch (error) {
        console.log(error)
        res.send({
            status: '500',
            message: 'Internal server error'
        })
    }
}

const getResult = async (req:any, res:any) => {
    try {
      const {
        code,
        input,
        language,
        roomId
      } = req.body;

      const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
          language: language,
          version: 'latest',
          code: code,
          input: null
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);

          const testAgainst = getComparedResult(response.data.output,input,roomId);
          console.log('testAgainst', testAgainst)
      } catch (error) {
          console.error(error);
      }
        
    } catch (error) {
        console.log(error)
        res.send({
            status: '500',
            message: 'Internal server error'
        })
    }

}
export { generateRoom , populatePlayground, createPlayground, getResult };