import { useState } from "react";
import { Calculator } from "../Calculator/Calculator";

const calculatorManager = () => {
  const [formula, setFormula] = useState('');
  const onChange = (_formula: string) => {
    setFormula(_formula);
  }
  const onEqualPress = (_formula: string) => {
    setFormula(_formula);
  }

  return (
    <div>
      <Calculator onChange={onChange} onEqualPress={onEqualPress} formula={formula} />
    </div>
  )
};