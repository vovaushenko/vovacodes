import React, { FC } from 'react';
import * as Styled from './SearchBar.styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { FiSearch } from 'react-icons/fi';

export interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
}

/**
 * Text input form control
 *@function SearchBar
 *@param {string} name - label && input name
 *@param {string} type - input type
 *@param {string} placeholder - input placeholder
 *@param {string} value - value of input
 *@param {function} setValue - setter from useState to control value
 *@param {boolean} required - is required, default to false
 *@returns {JSX.Element} - Rendered Form text control element
 */
const SearchBar: FC<Props> = ({ name, type, placeholder, value, setValue }) => {
  const { theme } = useTypedSelector((state) => state.ui);
  return (
    <Styled.Container>
      <Styled.Input
        type={type}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        themeMode={theme}
        required
      />
      <Styled.Label htmlFor={name}>
        <FiSearch className={'search-icon'} />
        {placeholder}
      </Styled.Label>
    </Styled.Container>
  );
};

export default SearchBar;
