import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 24px;
  margin-right: 16px;

  @media (max-width: 968px){
    margin-right: 0px;
    width: 100%
  }
`;

export const Publications = styled.main`

`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;

  border: none;
  padding: 16px;
  
  resize: none;

  background: ${({theme})=> theme.colors.background.light};
  
  color: ${({theme})=> theme.colors.text.light};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  @media (max-width: 968px){
    font-size: 14px;
  }
`