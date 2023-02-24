
import {InputContainer} from './styles'
// disabled para não poder manipular o input por fora
// somente por funções
const Input = ({value}) => {
    return (
      <InputContainer>
        <input disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;
  