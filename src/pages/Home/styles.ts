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
    margin: 2rem 1rem;
    gap: 0.5rem;
    color:#fff;
    -webkit-font-smoothing: antialiased;

    img {
      width: 100px;
    }
  }

`

export const CategoryList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 2rem;
    gap: 0.5rem;
`