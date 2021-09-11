import React from 'react';
import * as Styled from './Terminal.styles';
import Trmnl from 'terminal-in-react';
import { useRouter } from 'next/router';
import { useTerminalConfig } from './Terminal.config';

/**
 *Renders Terminal Component
 *https://github.com/nitin42/terminal-in-react
 *@function Terminal
 *@returns {JSX.Element} - Rendered CardContent component
 */

const Terminal = (): JSX.Element => {
  const {
    openVSCode,
    openGoogle,
    openResume,
    openLanding,
    greetingMessage,
    hack,
    sad,
  } = useTerminalConfig();

  const router = useRouter();

  const redirectToPortfolio = async () => {
    return await router.push('/portfolio');
  };
  const redirectToProjects = async () => {
    return await router.push('/portfolio/projects');
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
          portfolio: redirectToPortfolio,
          projects: redirectToProjects,
          SECRET_COMMAND: () => {
            openLanding();
            return sad;
          },
        }}
        descriptions={{
          code: 'opens Visual Studio Code',
          portfolio: 'open portfolio',
          projects: 'open recent projects',
          google: 'opens Google search',
          resume: 'opens resume',
          alert: 'alert',
          popup: 'alert',
          showmsg: 'will show greeting message',
          hack: 'hack wifi of annoying neighbors',
          SECRET_COMMAND: `💀 DON'T USE THIS COMMAND! OR YOU WILL BE FIRED! 💀`,
        }}
        msg={greetingMessage}
      />
    </Styled.Container>
  );
};

export default Terminal;
