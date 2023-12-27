import { useNavigate } from "react-router-dom";
import { ControllButtonsContent, CustomButton, HomeContainer, QuestionContent } from "./styles";

export function Answer() {

  const navigate = useNavigate();
  const answer = localStorage.getItem('MASTER-GAME-ANSWER')

  return (
    <HomeContainer>
      <header>Resposta</header>
      <p>A resposta correta é :</p>
      <QuestionContent>
        <h2>{answer}</h2>
      </QuestionContent>
      <ControllButtonsContent>
        <CustomButton onClick={() => navigate('/')} style={{ background: '#87A2FF' }}>Voltar para o inicio</CustomButton>
      </ControllButtonsContent>
    </HomeContainer>
  )
}
