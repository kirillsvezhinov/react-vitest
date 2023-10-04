import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { increment } from '../../app/count'
import { useEffect, useState } from 'react'

type ButtonProps = {
  testId: string
}
type Todo = {
  id: string;
  title: string
}
const Button = (props: ButtonProps) => {
  const [todos, settodos] = useState<Todo[]>([])
  const val = useSelector((state:RootState) => state.count.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(increment())
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => settodos(json))
  }, [])
  
  return (
    <div>
      <button role='dialog' data-testId={props.testId} onClick={handleClick}>button</button>
      <div data-testId='counter'>{val}</div>
      {todos.map(el => <div style={{border:'1px solid blue', padding: '20px'}} key={el.id} data-testId={`todo_${el.id}`}>{el.title}</div>
      )}
    </div>
  )
}

export default Button