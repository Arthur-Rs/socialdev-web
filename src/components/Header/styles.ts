import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 72px;

  position: fixed;
  top: 0;
  z-index: 16;

  background-color: ${({theme})=> theme.colors.background.light};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 64px;

  > div{
    display: flex;
    align-items: center;
  }

  
  @media (max-width: 968px){
    font-size: 21px;
    padding: 0 16px;
    justify-content: center;
    height: 64px;

    position: static;
  }
`;

export const Title = styled.h1`
  font-size: 32px;

  @media (max-width: 968px){
    font-size: 21px;
  }
`

export const ProfileContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  border-radius: 8px;
  padding: 5px 10px;

  transition: background-color 0.1s;

  &:hover{
    background-color: ${({theme}) => theme.colors.background.lightness};

  }

  span{
    font-size: 24px;
  }

  img{
    width: 48px;
    height: 48px;

    border-radius: 50%;
    margin-left: 16px;
  }

  @media (max-width: 968px){
    display: none;
  }
`

export const HeaderNav = styled.nav`

  margin-left: 5px;

  svg{
    width: 32px;
    height: 32px;
    cursor: pointer;

    *{
      fill: ${({theme}) => theme.colors.text.light};
      transition: fill 0.1s;
    }

    &:hover *{
      fill: ${({theme}) => theme.colors.primary};
    }

    & + svg {
      margin-left: 8px;
    }
  }

  @media (max-width: 968px){
    display: none;
  }
`
