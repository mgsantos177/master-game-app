import { useNavigate } from 'react-router-dom';
import { CategoryButtonContainer } from './styles'


interface ICategoryButton {
  category: {
    id: string;
    label: string;
    color: string
  };
}

export default function CategoryButton({ category }: ICategoryButton) {
  const { id, label, color } = category
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate(`/question/${id}`)
  }

  return (
    <CategoryButtonContainer type='button' style={{ backgroundColor: color }} onClick={handleClickButton}><h3>{label}</h3></CategoryButtonContainer>
  )
}
