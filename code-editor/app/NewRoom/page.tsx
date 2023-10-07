'use client'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { APIMethods } from '../lib/axios/api';
import roomTypes from '../home/types/roomTypes';
import TestCaseModal from './components/Testcase';
import usePlayground from './hooks/usePlayground';

interface TestCase {
    input: string;
    output: string;
  }

export default function page() {

    const {playgroundQuestions , setRoomId , setTitle , setQuestion , setAllTestCases} = usePlayground();
    const router = useRouter()
    const generateRoom = () => {
        try {
          const fetchRoomId = async () => {
            return await APIMethods.playgrounds.createRoom();
          }
      
          fetchRoomId().then((res) => {
            const resData = res  as unknown as roomTypes;
            if(resData.status== 201)
            {
              setRoomId(resData.data.roomId as string);
              toast.success("You have created the room!", {
                style: {
                  padding: '16px',
                  color: '#0D0D0D',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
              });
            }
                    
      
           
        }).catch((err) => {
          if(err.response.status == 429)
          {toast.error("Please wait for a while...", {
            style: {
              padding: '16px',
              color: '#0D0D0D',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE',
            },
          });}
          else{
            toast.error("Something went wrong!", {
              style: {
                padding: '16px',
                color: '#0D0D0D',
              },
              iconTheme: {
                primary: 'red',
                secondary: '#FFFAEE',
              },
            });
          }
        });
        } catch (error) {
          console.error("Error ", error);
        }
    
    
    }

    const submitPlayground = ()=>{
        console.log("sending");
        const sendToDB = async () => {
            await APIMethods.playgrounds.createPlayground(playgroundQuestions).then((res) => {
            }).catch((err:any) => {
                console.log(err);
                }
            )
        }
        sendToDB().then(()=>{
            toast.success("You have submitted the question!", {
                style: {
                  padding: '16px',
                  color: '#0D0D0D',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
              });
            router.push('/home');
        }
        )

    }

    const [isModalOpen, setIsModalOpen] = useState(false);
  const [testCases, setTestCases] = useState<TestCase[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTestCases = (newTestCases: TestCase[]) => {
    setTestCases([...testCases, ...newTestCases]);
    setAllTestCases([...testCases, ...newTestCases]);
  };

  

  return (
    <Stack minHeight={'90vh'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
    <Stack className='form' minWidth={'40vw'} padding={10} marginY={8} gap={5} borderRadius={3} border={'1px solid grey'}>
    
    <Typography variant='h4'>
      Create a room
    </Typography>

    <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} gap={1}>
    <TextField id="roomField"
     fullWidth
    value={
    playgroundQuestions?.roomId
    }
    onChange={
        (e)=>setRoomId(e.target.value)
    }
     label="" 
     placeholder={"Enter a code"}
     variant="outlined" />
 <Button
 variant='contained'
    color='primary'
    sx={{
        maxWidth: '160px'
    }}
 onClick={generateRoom}
 >
      generate room
    </Button>
     </Stack>

    <Stack
    className='form'
    gap={4}
    >
        <Stack>
            <Typography>
                Add Title
            </Typography>
    <TextField
     fullWidth
      label="" 
      onChange={(e) => setTitle(e.target.value)}
      placeholder={"Enter title"}
      variant="outlined" />

        </Stack>

        <Stack>
            <Typography>
                Enter question
            </Typography>
    <TextField
     fullWidth
      label="" 
      onChange={(e) => setQuestion(e.target.value)}
      multiline
      rows={5}
      placeholder='Type your question here'
      variant="outlined" />

        </Stack>

        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={4}>
    
        <Button onClick={handleOpenModal}>Create custom testcases</Button> 
        <TestCaseModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTestCases}
      />
        </Stack>

        <Button
       onClick={submitPlayground} 
        sx={{
            marginTop:'3rem'
        }}>
            Submit
        </Button>
    </Stack>
   
    </Stack>
  </Stack>
  )
}
