import React from 'react'
import classes from './Paragraph.module.scss'

interface Props {
    isSent?: boolean
}

const Paragraph: React.FC<Props> = props => {
    return (
        <p className={`${classes.Paragraph} ${props.isSent ? classes.Sent : classes.Received}`}>
            {props.children}
        </p>
    )
}

export default Paragraph
