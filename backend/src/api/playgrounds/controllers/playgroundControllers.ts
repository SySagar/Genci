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
        const { roomId } = req.body;
        console.log('roomId', roomId)

        
        const questions = async ()=>await getQuestions(roomId);

        questions().then((response) => {
            console.log('response', response)
            res.send({
                status: '200',
                message: 'success',
                questions: response
            })
        }
        ).catch((error) => {
            console.error(error);
        }
    );
        
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
        language,
        roomId,
      } = req.body;

      const playground = await getQuestions(roomId);


      const testcases = playground[0].testCases;
        console.log('testcases', testcases)
      const results = [];
      var testFailed = false;
      
      try {
        for (let i = 0; i < testcases.length; i++) {
            const singleTestcase = testcases[i];
            const options = {
                method: 'POST',
                url: 'https://online-code-compiler.p.rapidapi.com/v1/',
                headers: {
                  'content-type': 'application/json',
                  'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                  'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
                },
                data: {
                  language: language as string,
                  version: 'latest',
                  code: code as string,
                  input:  singleTestcase.input
                }
              };
              
              const compileOutput =async ()=> await axios.request(options);
              compileOutput().then((response) => {
                  const compiledOutput = response.data.output as string;
                  const expectedOutput = singleTestcase.output as string;
                 
                      const isPassed = compiledOutput.trim() == expectedOutput.trim();
                      console.log('isPassed', isPassed)
                      if(isPassed)
                      {
                          results.push(true);
                          res.send({
                            message: 'success'
                        })
                        }
                        else
                        {
                            results.push(false);
                            testFailed = true;
                            res.send({
                                message: `Testcase ${i+1} failed`
                            })
                        }
                        
                    
                    }
                ).catch((error) => {
                    console.error(error);
                }
            );

        }
        //   console.log('testAgainst', testAgainst)
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