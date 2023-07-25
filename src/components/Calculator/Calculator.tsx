import { useEffect } from 'react';
import { Form, Input } from "antd";
import styles from './Calculator.module.css';

const formulaRegex = /^[-+]?\d+(\*[+-]?\d+|[+-]?\d+|%\d+|%[-+]?\d+)*$/;

interface CalculatorProps {
  onChange: (formula: string) => void;
  onEqualPress: (formula: string) => void;
  formula: string;
}


const Calculator: React.FC<CalculatorProps> = ({onChange, onEqualPress, formula}) => {
  const operators = ['+', '-', '*'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [form] = Form.useForm();

  const handleOnChange = (e: any) => {
    onChange(e.target.value);
  }

  useEffect(() => {
    document.querySelector('#calculator_formula')?.addEventListener('keydown', (e: any) => {
      console.log(e.key);
      if (e.key === 'Enter') {
        e.preventDefault();
        onEqualPress(e.target.value);
      }
      if (e.key === 'Backspace') {
        return;
      }
      if (!`${e.key}`.match(/^[0-9-+%\*]$/)) {
        e.preventDefault();
        return;
      }
    });
  }, []);

  return (
    <div className={styles.calculator}>
      <div className={styles.formulaInput}>
        <Form
          form={form}
          name="calculator"
          onChange={handleOnChange}
        >
          <Form.Item
            name="formula"
            label=""
            value={formula}
            hasFeedback
            rules={[
              {
                pattern: formulaRegex,
                message: "Format is wrong"
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div className={styles.buttonsArea}>
        <div className={styles.numbers}>
          {
            numbers.map(number => (
              <button className={styles.calculatorButton} key={number}>{number}</button>
            ))
          }
        </div>
        <div className={styles.operators}>
          {
            operators.map(operator => (
              <button className={styles.calculatorButton} key={operator}>{operator}</button>
            ))
          }
          <button className={styles.calculatorButton} key='='>=</button>
        </div>
      </div>
    </div>
  )
}

export { Calculator };