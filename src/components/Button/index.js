
import { ButtonContainer } from './styles'

// criamos o componente primeiro e estilizamos
// posteriormente passamos as propriedades {} dentro do componente
// para dar vida ao mesmo
const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  