// We would like you to build an accessible, typed button component which:
//
// 1. Forwards its ref to the actual dom element it returns.
//
// 2. Has the following props:
//      - variant<string>: Defines the button style to show, there are two variants, as depicted in 'buttons.png':
//          - 'primary' - the primary button style
//          - 'secondary' - the secondary button style
//
// 3. Also accepts any other props of a regular HTML button, such as disabled, and also any additional classNames.
//
// 4. Can have text and icons as content as depicted in buttons.png. Please use the provided umbrella svg for the icon.
//
// 5. Can be easily themed with a brand colour other than blue.
//
// Notes:
// We are using css modules in this project, so you can add styles from the button module file with styles[className] - https://github.com/css-modules/css-modules
// You may add any helper libraries you need

import React, {SVGProps} from "react";
import classNames from "classnames";

import styles from "./_button.module.css";

const VARIANT_PRIMARY = "primary";
const VARIANT_SECONDARY = "secondary";

type Variant = typeof VARIANT_PRIMARY | typeof VARIANT_SECONDARY;

type Props =  React.HTMLProps<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset" | undefined;
    variant?: Variant;
    Icon?: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

const Button = React.forwardRef<HTMLButtonElement, Props>((
    {
        children,
        className,
        variant = "primary",
        Icon,
        ...props
    },
    ref
) => {
    const cssClasses = classNames(styles.button, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
    })

    return (
        <button {...props} ref={ref} className={`${cssClasses} ${className}`}>
            <span>{children}</span>
            {Icon && <Icon className={styles.icon} />}
        </button>
    );
});

export default Button;

