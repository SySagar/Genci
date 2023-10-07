import { create } from 'zustand';

interface TestCase {
    input: string;
    output: string;
  }

interface PlaygroundQuestion {
  roomId: string;
  title: string;
  question: string;
  testCases: TestCase[];
}

interface PlaygroundStore {
  playgroundQuestions: PlaygroundQuestion;
  setRoomId: (roomId: string) => void;
  setTitle: (title: string) => void;
  setQuestion: (question: string) => void;
  setAllTestCases: (testCases: TestCase[]) => void;
}

const usePlayground = create<PlaygroundStore>((set) => ({
  playgroundQuestions: {
    roomId: '',
    title: '',
    question: '',
    testCases: [],
    solution: [],
    discussion: [],
    difficulty: 'Easy',
    solvers: 25,
  },
  setRoomId: (roomId) => set((state) => ({
    playgroundQuestions: {
      ...state.playgroundQuestions,
      roomId,
    }
  })),
  setTitle: (title) => set((state) => ({
    playgroundQuestions: {
      ...state.playgroundQuestions,
      title,
    }
  })),
  setQuestion: (question) => set((state) => ({
    playgroundQuestions: {
      ...state.playgroundQuestions,
      question,
    }
  })),
  setAllTestCases: (testCases) => set((state) => ({
    playgroundQuestions: {
      ...state.playgroundQuestions,
      testCases,
    }
  })),
}));

export default usePlayground;
