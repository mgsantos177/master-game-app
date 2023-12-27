import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 5px;
  margin-top: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 2rem 1rem;
    gap: 0.5rem;
    color:#fff;
    -webkit-font-smoothing: antialiased;

    img {
      cursor: pointer;
      color:#fff;
      padding: 0 1rem;
    }
  }
`

export const CategoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const QuestionContent = styled.div`
  width: auto;
  margin: 1rem;
  border: 2px #28272A solid;
  border-radius: 10px;
  padding: 2rem;
`

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  margin-bottom: 1rem;
`

export const OptionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 312px;
  height: 52px;
  background-color: #28272A;
  border-radius: 10px;
  margin: 0.5rem;
`

export const ControllButtonsContent = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 5rem;
`

export const CustomButton = styled.button`
    width: 148px;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    border: 0;

    color:#fff;
    -webkit-font-smoothing: antialiased;
`