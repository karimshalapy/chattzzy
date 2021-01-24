import React from 'react'
import classes from './Button.module.scss'

interface Props {
    variant: "primary" | "white" | "secondary"
    onClick?: (e: React.MouseEvent) => void,
    className?: string,
    disabled?: boolean,
    type?: "button" | "submit" | "reset",
}

const Button: React.FC<Props> = ({ variant, children, ...rest }) => {
    const buttonClasses = `${classes.Button} ${variant === "primary" ? classes.ButtonPrimary : ""} ${variant === "white" ? classes.ButtonWhite : ""}`
    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}

export default Button
