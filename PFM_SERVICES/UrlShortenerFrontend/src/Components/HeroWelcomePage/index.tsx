import { Title, Text,createStyles, rem,Container } from '@mantine/core';
import { useState } from 'react';
import InputBar from '../InputBar'
import CopyToClipboardComponent from '../OutputSection';
const useStyles = createStyles((theme) => ({
 

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 1200,
    fontSize: rem(60),
    letterSpacing: rem(-1),
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
   
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: rem(42),
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: 0,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function HeroImageBackground() {
  const { classes } = useStyles();
  const [currentUrl,setCurrentUrl] = useState<string>('');
  const [shortenedUrl,setShortenedUrl] = useState<string>('');


  return (
    <div >
      <div className={classes.inner}>
        
        <Title  className={classes.title}>
          Try our open source{' '}
          <Text component="span" inherit className={classes.highlight}>
            URL Shortener{' '}
          </Text>
          Now !
        </Title>
        <Container size="md">
          <InputBar currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} setShortenedUrl={setShortenedUrl} shortenedUrl={shortenedUrl}></InputBar>
          {shortenedUrl && <CopyToClipboardComponent shortenedUrl={shortenedUrl}></CopyToClipboardComponent> }
        </Container>
        
      </div>
    </div>
  );
}