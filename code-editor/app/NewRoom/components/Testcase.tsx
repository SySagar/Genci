import React, { useState } from 'react';
import { Button, TextField, Modal, Stack } from '@mui/material';
import usePlayground from '../hooks/usePlayground';

interface TestCase {
  input: string;
  output: string;
}

interface TestCaseModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (testCases: TestCase[]) => void;
}

const TestCaseModal: React.FC<TestCaseModalProps> = ({ open, onClose, onSave }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([{ input: '', output: '' }]);

  const { setAllTestCases} = usePlayground();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedTestCases = [...testCases];
    updatedTestCases[index][event.target.name as keyof TestCase] = event.target.value;
    setTestCases(updatedTestCases);
  };

  const handleAddTestCase = () => {
    setTestCases([...testCases, { input: '', output: '' }]);
  };

  const handleSave = () => {
    setAllTestCases(testCases);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Stack padding={10} sx={{background:'white'}} margin={20}>
        {testCases.map((testCase, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <TextField
              label={`Input ${index + 1}`}
              variant="outlined"
              fullWidth
              name="input"
              value={testCase.input}
              onChange={(e:any) => handleInputChange(e, index)}
              margin="normal"
            />
            <TextField
              label={`Output ${index + 1}`}
              variant="outlined"
              fullWidth
              name="output"
              value={testCase.output}
              onChange={(e:any) => handleInputChange(e, index)}
              margin="normal"
            />
          </div>
        ))}
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={5}>
        <Button variant="outlined" sx={{width:'160px'}} onClick={handleAddTestCase}>Add Test Case</Button>
        <Button variant="contained" sx={{width:'160px'}} color="primary" onClick={handleSave} style={{ marginLeft: '10px' }}>Save</Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default TestCaseModal;
