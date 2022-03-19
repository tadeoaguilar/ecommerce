import { ReactNode, FC, ComponentType, HTMLAttributes } from "react";
import style from './Box.module.css'

interface Props {
  children: ReactNode | ReactNode[]
  el?: ComponentType<HTMLAttributes<HTMLElement>>
}


const Box: FC<Props> = ({children, el: Component = "div"}) => {

  return (
    <Component
      className={style.root}>
      {children}
    </Component>
  )
}

export default Box;