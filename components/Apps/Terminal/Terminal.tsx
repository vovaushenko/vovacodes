import React from 'react';
import * as Styled from './Terminal.styles';
import Trmnl from 'terminal-in-react';
import { useRouter } from 'next/router';
import { useTerminalConfig } from './Terminal.config';

/**
 *Renders Terminal Component
 *@function Terminal
 *@returns {JSX.Element} - Rendered CardContent component
 */
//https://github.com/nitin42/terminal-in-react
const Terminal = (): JSX.Element => {
  const { openVSCode, openGoogle, openResume, greetingMessage, hack, sad } =
    useTerminalConfig();

  const router = useRouter();

  const redirectToProjects = async () => {
    return await router.push('/portfolio');
  };

  return (
    <Styled.Container>
      <Trmnl
        hideTopBar
        color="#2bff88"
        backgroundColor="#010606"
        barColor="#2bff88"
        startState={'maximised'}
        style={{ fontWeight: 'bold', fontSize: '1.25rem' }}
        commands={{
          code: () => openVSCode(),
          google: () => openGoogle(),
          resume: () => openResume(),
          showmsg: () => greetingMessage,
          hack: () => hack,
          popup: () => alert('hello'),
          write: () => console.log('HELLO'),
          portfolio: redirectToProjects,
          ng: () => sad,
        }}
        description={{
          code: 'opens Visual Studio Code',
          google: 'opens Google search',
          resume: 'opens resume',
          alert: 'alert',
          popup: 'alert',
          showmsg: 'will show greeting message',
        }}
        msg={greetingMessage}
      />
    </Styled.Container>
  );
};

export default Terminal;
