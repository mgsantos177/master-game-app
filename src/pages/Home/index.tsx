import CategoryButton from "../../components/CategoryButton";
import { CategoryList, HomeContainer } from "./styles";
import logoIcon from '../../assets/logo.png'


export function Home() {

  const options = [
    { id: 'ARTES', label: 'Artes', color: '#662d91' },
    { id: 'CIENCIAS', label: 'Ciências e Tecnologia', color: '#7CB9E8' },
    { id: 'ENTRETENIMENTO', label: 'Entretenimento', color: '#4FFFB0' },
    { id: 'ESPORTES', label: 'Esportes', color: '#FEBE10' },
    { id: 'GEOGRAFIA', label: 'Geografia', color: '#FF7F50' },
    { id: 'HISTORIA', label: 'História', color: '#F9629F' }
  ];

  console.log(import.meta.env.VITE_API_URL) // 123
  return (
    <HomeContainer>
      <header>
        <img src={logoIcon} />
      </header>
      <h2> {'Selecione a categoria: '}</h2>
      <CategoryList>
        {options.map(option => (
          <CategoryButton category={option} />
        ))}
      </CategoryList>

    </HomeContainer>
  )
}
