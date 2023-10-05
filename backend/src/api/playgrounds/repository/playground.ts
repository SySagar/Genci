import PlaygroundQuestion from "@models/playground";

export const getQuestions = async (roomId: string) => {
    try {
        const questionData = await PlaygroundQuestion.find({roomId});
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
        const expectedOutput = await PlaygroundQuestion.find({roomId}).where('testCases.input').equals(input);
        if(expectedOutput[0].testCases[0].expectedOutput === compiledResult)
        {
            const result = await PlaygroundQuestion.updateOne({roomId},{$inc:{solvers:1}});
            return true;
        }
        else
        return false;
    } catch (error) {
        
    }
    }
