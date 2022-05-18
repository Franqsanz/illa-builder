import { FC, HTMLAttributes } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@illa-design/button"
import { BuilderState } from "@/redux/reducers/interface"

interface QueryEditorProps extends HTMLAttributes<HTMLDivElement> {}

export const QueryEditor: FC<QueryEditorProps> = (props) => {
  const { className } = props

  const dispatch = useDispatch()
  const dragValue = useSelector(
    (state: BuilderState) => state.editor.present.drag,
  )

  return (
    <div className={className}>
      QueryEditor
      <div>drag:</div>
      <div>{dragValue.value}</div>
      <Button onClick={() => dispatch({ type: "GET_DATA" })}>getDate</Button>
      <Button onClick={() => console.log(dragValue)}>showDate</Button>
    </div>
  )
}

QueryEditor.displayName = "QueryEditor"
