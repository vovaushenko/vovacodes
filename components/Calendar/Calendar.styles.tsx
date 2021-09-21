import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.space.md};
  backdrop-filter: blur(20.5px);

  .react-calendar {
    background-color: transparent;
    border: 0;

    .react-calendar__month-view__days__day {
      color: ${({ theme }) => theme.primary.text};
    }

    .react-calendar__month-view__days__day--weekend {
      color: ${({ theme }) => theme.colors.buttons.settingsButton.activeBg};
    }

    .react-calendar__tile--active {
      background: ${({ theme }) => theme.colors.blue.icon};
      border-radius: ${({ theme }) => theme.borderRadius};
      font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }

    .react-calendar__navigation {
      button {
        color: ${({ theme }) => theme.primary.text};
        font-weight: bold;
      }
    }

    .react-calendar__navigation__label {
      background-color: transparent;

      span {
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
      }
    }

    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background: ${({ theme }) => theme.colors.blue.icon};
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: ${({ theme }) => theme.colors.blue.icon};
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    .react-calendar__tile--now {
      background: ${({ theme }) => theme.colors.blue.icon};

      border-radius: ${({ theme }) => theme.borderRadius};
    }

    abbr {
      text-underline: none;
      text-decoration: none;
    }
  }
`;
