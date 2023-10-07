import playground from "@models/playground";
import PlaygroundQuestion from "@models/playground";

export const getQuestions = async (roomId: string) => {
    try {
        const questionData = await playground.find({roomId:roomId});
        return questionData;
      } catch (error) {
        console.log(error);
        return false;
      }
}

export const createQuestion = async (questionData: any) => {
    try {
        console.log('questionData', questionData)
        const newQuestion = new PlaygroundQuestion(questionData);
        await newQuestion.save();
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
}

export const getComparedResult = async (compiledResult:any,input:any,roomId:any) => {
    try {
      roomId = "12345"
        console.log('compiledResult', compiledResult)
        console.log('input', input)
        console.log('roomId', roomId)

        const expectedOutput = await playground.find({roomId}).select('testcases')
        console.log('expectedOutput', expectedOutput)
        if(expectedOutput[0].testCases[0].output === compiledResult)
        {
            const result = await PlaygroundQuestion.updateOne({roomId},{$inc:{solvers:1}});
            return true;
        }
        else
        return false;
    } catch (error) {
        
    }
    }
