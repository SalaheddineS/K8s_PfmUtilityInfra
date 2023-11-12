import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';
import {  IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import GenerateUrl from '../../Handlers/GenerateUrl';
interface InputWithButtonProps {
    currentUrl: string; // Specify the type for currentUrl
    shortenedUrl:string
    setCurrentUrl: React.Dispatch<React.SetStateAction<string>>; // Specify the type for setCurrentUrl
    setShortenedUrl : React.Dispatch<React.SetStateAction<string>>
  }

interface response {
  url:string
}

export default function InputWithButton(props:InputWithButtonProps) {
  const theme = useMantineTheme();
  return (
    <TextInput
      onChange={(input)=>{
        props.setCurrentUrl(input.target.value)
      }}
      radius="xs"
      size="xl"
      rightSection={
        <ActionIcon
        onClick={ ()=>{
            GenerateUrl(props.currentUrl)
          .then((res:response)=>{
            console.log(res)
            props.setShortenedUrl(res.url)
          })
        }}
        size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Generate URL"
      rightSectionWidth={42}
      
    />
  );
}