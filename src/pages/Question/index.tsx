import { useNavigate, useParams } from "react-router-dom";
import { ControllButtonsContent, CustomButton, HomeContainer, OptionButton, OptionContainer, QuestionContent } from "./styles";
import leftIcon from '../../assets/left-small.png'
import { CSSProperties, useEffect, useState } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";

import 'react-spinner-animated/dist/index.css'

interface IQuestion {
  id: string;
  question: string;
  options?: string[];
  answer: string;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


export function Question() {
  const url = import.meta.env.VITE_API_URL
  const [question, setQuestion] = useState<IQuestion>();
  const [loading, setLoading] = useState(false)


  const navigate = useNavigate();
  let { category } = useParams();

  const handleAnswer = async () => {
    // set answer
    if (question) {
      localStorage.setItem('MASTER-GAME-ANSWER', question?.answer)
      await axios.put(`${url}/cards/${question.id}`)
      navigate('/answer');
    }
  }

  const handleSkip = async () => {
    if (category) {
      await getQuestion(category)
    }
  }

  useEffect(() => {
    if (category) {
      getQuestion(category)
    }
  }, [category])

  async function getQuestion(category: string) {
    setLoading(true)
    await axios.get(`${url}/cards/${category}`).then((response) => { setQuestion(response.data) }
    ).catch(err => console.log(err))

    setLoading(false)
  }

  return (
    <HomeContainer>
      <header>
        <img src={leftIcon} onClick={() => navigate('/')} />
        {category}</header>
      <QuestionContent>
        <h4>Pergunta:</h4>
        {!loading && <h2>{question?.question}</h2>}

      </QuestionContent>
      {loading && <PacmanLoader color="yellow" cssOverride={override} />}
      {!loading && question?.options && question.options?.length > 0 && (
        <OptionContainer>
          {question?.options.map(option => <OptionButton>{option}</OptionButton>)}
        </OptionContainer>
      )}
      <ControllButtonsContent>
        <CustomButton type="button" onClick={() => handleSkip()} style={{ background: '#d2691e' }}>Pular</CustomButton>
        <CustomButton type="button" onClick={() => handleAnswer()} style={{ background: '#018749' }}>Resposta</CustomButton>
      </ControllButtonsContent>
    </HomeContainer>
  )
}
