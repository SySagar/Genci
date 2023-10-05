'use client'
import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { APIMethods } from '@/app/lib/axios/api'
import roomTypes from './types/roomTypes'
import { toast } from "react-hot-toast";
import { useRouter } from 'next/navigation'

export default function page() {

  const [roomId, setRoomId] = React.useState<string|undefined>('');
  const router = useRouter()
  const openPlaygrounds = () => {
    router.push(`/battlegrounds/${roomId}`)
  }

  const generateRoom = () => {

    try {
      const fetchRoomId = async () => {
        return await APIMethods.playgrounds.createRoom();
      }
  
      fetchRoomId().then((res) => {
        const resData = res  as unknown as roomTypes;
        if(resData.status== 201)
        {
          setRoomId(resData.data.roomId);
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

  return (
    <Stack minHeight={'90vh'} direction={'row'} justifyContent={'center'} alignItems={'center'}>
      <Stack className='form' minWidth={'40vw'} padding={16} gap={5} borderRadius={5} border={'1px solid grey'}>
      <TextField id="roomField" value={roomId} label="" placeholder={"Enter a code"} variant="outlined" />
      <Typography component={Button} onClick={generateRoom}>
        Generate room
      </Typography>

      <Stack width={'100%'} justifyContent={'center'} alignItems={'center'}>
        <Button
        onClick={openPlaygrounds} 
        disabled={roomId == '' ? true : false}
        sx={{
          minWidth: '140px',
        }}>
          Join
        </Button>
      </Stack>
      </Stack>
    </Stack>
  )
}
