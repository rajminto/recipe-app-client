import React from 'react'
import styles from './toggle-button.module.scss'
import { ReactComponent as DeleteIcon } from '../../../assets/svgs/delete.svg'
import { ReactComponent as AddNewIcon } from '../../../assets/svgs/plus.svg'

const ToggleButton = ({ variant }) => {
  const { svgWrapper } = styles
  return(
    <div className={svgWrapper}>
      {variant === 'plus' ? <AddNewIcon /> : <DeleteIcon />}
    </div>
  )
}
export default ToggleButton