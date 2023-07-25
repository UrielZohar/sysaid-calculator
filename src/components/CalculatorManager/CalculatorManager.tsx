import { useState } from "react";
import { Calculator } from "../Calculator/Calculator";

import styles from './CalculatorManager.module.css';

const CalculatorManager = () => {
  const [formula, setFormula] = useState('');
  const onChange = (_formula: string) => {
    setFormula(_formula);
  }
  const onEqualPress = (_formula: string) => {
    setFormula(_formula);
  }

  return (
    <div className={styles.calculatorManager}>
      <Calculator onChange={onChange} onEqualPress={onEqualPress} formula={formula} />
    </div>
  )
};

export { CalculatorManager };