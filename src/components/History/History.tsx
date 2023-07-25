import { useAppSelector, useAppDispatch } from  '../../app/hooks'
import { selectLastsClicks, clearClicks } from '../CalculatorManager/CalculatorManagerSlice'

const History = () => {
  const dispatch = useAppDispatch();
  const lastsClicks = useAppSelector(selectLastsClicks);
  return (
    <div>
      <ol>
        {lastsClicks.map((clickChar, index) => <li key={index}>{clickChar}</li>)}
      </ol>
      <button onClick={() => dispatch(clearClicks())}>Clear History</button>
    </div>
  )

};

export { History };