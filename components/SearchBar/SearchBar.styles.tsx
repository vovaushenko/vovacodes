import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  box-shadow: 0 3px 5px 0 rgb(0 0 0 / 10%);
`;

export const Label = styled.label`
  /* position */
  position: absolute;
  top: 50%;
  left: 1rem;
  /* display */
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform */
  transform: translateY(-50%);
  /* styling */
  color: ${({ theme }) => theme.colors.gray.lightest};
  cursor: text;
  user-select: none;
  transition: 0.15s ease-in-out;
  font-size: ${({ theme }) => theme.fontSize.medium};

  .search-icon {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.blue.icon};
    margin-right: 0.5rem;
  }
`;

export const Input = styled.input`
  display: block;
  padding: ${({ theme }) => theme.space.xs};
  width: 100%;

  border: 0;
  border-bottom: ${({ theme }) => `2px ${theme.colors.blue.icon} solid`};
  color: ${({ theme }) => theme.primary.text};
  background: ${({ theme }) => theme.colors.appCenter.searchBarBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;

  [data-empty='false'] + label,
  :valid + label,
  :focus + label {
    top: -11px;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.primary.text};
  }
`;
