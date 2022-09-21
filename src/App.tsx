import React from 'react';
import { Amplify } from 'aws-amplify';
import {
  defaultDarkModeOverride,
  Authenticator,
  Heading,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
  ColorMode,
  Card,
  Flex,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Route, Routes } from 'react-router-dom';

import awsExports from './aws-exports';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
Amplify.configure(awsExports);

function App() {
  const [colorMode, setColorMode] = React.useState<ColorMode>('system');
  const theme = {
    name: 'my-theme',
    overrides: [defaultDarkModeOverride],
  };
  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <Card>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <Heading level={1}>My Forum Amplify</Heading>
          <ToggleButtonGroup
            value={colorMode}
            isExclusive
            onChange={(value) => setColorMode(value as ColorMode)}
          >
            <ToggleButton value="light">Light</ToggleButton>
            <ToggleButton value="dark">Dark</ToggleButton>
            <ToggleButton value="system">System</ToggleButton>
          </ToggleButtonGroup>
        </Flex>
        <Authenticator>
          {({ signOut, user }: any) => (
            <Routes>
              <Route path="/" element={<Home user={user} signOut={signOut} />} />
              <Route path="/post/new" element={<NewPost />} />
              <Route path="*" element={<Heading level={2}>404 - Not Found</Heading>} />
            </Routes>
          )}
        </Authenticator>
      </Card>

    </ThemeProvider>

  );
}

export default App;
