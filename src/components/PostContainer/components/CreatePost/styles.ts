import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;

  background-color: ${({theme})=> theme.colors.background.light};

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  header{
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${({theme})=> theme.colors.background.lightness};

    span{
      font-size: 24px;
    }
  }

  footer{
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid ${({theme})=> theme.colors.background.lightness};


    height: 64px;

    padding: 0 16px;


    input {
      display: none;
    }

    svg {
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
  }
  @media (max-width: 968px){
    width: 100%;
    border-radius: 0px;
    box-shadow: none;

    header{
      height: 48px;

      span{
        font-size: 21px;
      }
    }
    
    footer{
      height: 48px;

      svg {
      size:24px;
      width: 24px;
      height: 24px;
    }
    }
  }
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