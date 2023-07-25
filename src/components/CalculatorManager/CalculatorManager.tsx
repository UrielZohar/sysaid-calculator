import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addClick, selectCurrentFormula, setCurrentFormula } from './CalculatorManagerSlice'; 
import { Calculator } from "../Calculator/Calculator";
import styles from './CalculatorManager.module.css';

const CalculatorManager = () => {
  const [formula, setFormula] = useState(useAppSelector(selectCurrentFormula));
  const dispatch = useAppDispatch();
  const onChange = (_formula: string, lastChar: string) => {
    dispatch(addClick(lastChar));
    dispatch(setCurrentFormula(_formula));
    setFormula(_formula);
  }
  const onEqualPress = (_formula: string) => {
    dispatch(setCurrentFormula(_formula));
    setFormula(_formula);
  }

  return (
    <div className={styles.calculatorManager}>
      <Calculator onChange={onChange} onEqualPress={onEqualPress} formula={formula} />
    </div>
  )
};

export { CalculatorManager };