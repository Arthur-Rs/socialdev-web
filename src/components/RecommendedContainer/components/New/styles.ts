import styled from 'styled-components';

export const Container = styled.main`
  width: 404px;
  height: 404px;

  background-color: ${({theme})=> theme.colors.background.light};

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  margin-bottom: 32px;
`;
