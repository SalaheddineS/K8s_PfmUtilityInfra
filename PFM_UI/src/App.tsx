import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import HeaderMiddle from './GlobalComponents/TopNavBar';
import WelcomePage from './Pages/WelcomePage';
export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme,primaryColor:'green' }} withGlobalStyles withNormalizeCSS>
    <HeaderMiddle links={[
    {
      "link": "/about",
      "label": "Home"
    }
  ]}></HeaderMiddle>
    <WelcomePage></WelcomePage>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}