import { handleKeyPress } from './Calculator.utils';
import styles from './Calculator.module.css';

const formulaRegex = /^[-+]?\d+(\*[+-]?\d+|[+-]?\d+|%\d+|%[-+]?\d+)*$/;

interface CalculatorProps {
  onChange: (formula: string) => void;
  onEqualPress: (formula: string) => void;
  formula: string;
}


const Calculator: React.FC<CalculatorProps> = ({onChange, onEqualPress, formula}) => {
  const operators = ['+', '-', '*'];
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const isValid = (formula === '') || formulaRegex.test(formula);

  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  }

  const handleOnEqualPress = () => {
    if (!isValid || formula === '') {
      return;
    }
    const result = eval(formula);
    onEqualPress(result);
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.formulaInput}>
        <input
          className={`${styles.formulaInput} ${!isValid ? styles.formulaInputInvalid: ''}`} 
          value={formula} 
          onChange={handleOnChange} 
          onKeyDown={(e) => handleKeyPress(e, handleOnEqualPress, formula)} 
        />
      </div>
      <div className={styles.buttonsArea}>
        <div className={styles.numbers}>
          {
            numbers.map(number => (
              <button
                className={styles.calculatorButton}
                onClick={() => onChange(`${formula}${number}`)} 
                key={number}>
                {number}
              </button>
            ))
          }
        </div>
        <div className={styles.operators}>
          {
            operators.map(operator => (
              <button
                onClick={() => onChange(`${formula}${operator}`)} 
                className={styles.calculatorButton} 
                key={operator}>
                {operator}
              </button>
            ))
          }
          <button 
            className={styles.calculatorButton}
            onClick={handleOnEqualPress} 
            key='='
            disabled={!isValid}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export { Calculator };