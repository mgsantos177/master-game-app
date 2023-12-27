import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 5px;
  margin-top: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem;
    gap: 0.5rem;
    color:#fff;
    -webkit-font-smoothing: antialiased;
    margin-bottom: 5rem;
  }

  p {
    color: green;
  }
`


export const QuestionContent = styled.div`
  width: auto;
  margin-top: 2rem;
  border: 2px #28272A solid;
  border-radius: 10px;
  padding: 2rem;
  
  h2 {
    color: #fff
  }

`

export const ControllButtonsContent = styled.footer`
  display: flex;
  position: fixed;
  bottom: 15rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  gap: 1rem;
`
export const CustomButton = styled.button`
    width: 300px;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    border: 0;

    color:#fff;
    -webkit-font-smoothing: antialiased;
`