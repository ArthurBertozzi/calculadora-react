
import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  // criamos o estado current number e a função que manipula o valor
  // que será controlada pelo useState do react
  // inicialmente é zero
  const [currentNumber, setCurrentNumber] = useState('0');

  // estado para manipular as operações
  const [firstNumber, setFirstNumber] = useState('0');

  // estado de operação
  const [ operation, setOperation ] = useState('');
  


  //função para limpar
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  // função para adicionar um número e juntar eles
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  // função da soma
  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

   // função de subtração
   const handleSubNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  // função de multiplicação
  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('*')
    }else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  // função de divisão
  const handleDivNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const mult = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  // função para o botão de = com switch case
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case '*':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default: break;
      }
    }
  }

  // criação da aplicação
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="*" onClick={handleMultNumber}/>
          <Button label="/" onClick={handleDivNumber}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="™"/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleSubNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>    
      </Content>    
    </Container> 
  );
}

export default App;
