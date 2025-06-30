import React from 'react'
/**
 * @copyright 2024 Versenco
 * @license Apache-2.0
 */
/**
 * Node modules
 */
import PropTypes from 'prop-types'; 

/**
 * Primary Button
 */


const ButtonPrimary = ({
    href, target = 'self', label, icon ,classes
}) => {
    if (href) {
      return (
        <a href={href} target={target} className={"btn btn-primary " + classes}>
          {label}

          {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined}
        </a>
      )
    } else {
      return (
        <button className={"btn btn-primary " + classes}>
          {label}
          
          {icon ?
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined}

        </button>
      )
    }
}

ButtonPrimary.propTypes={
    label: PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}


/**
 * OUtline Button
 */


const ButtonOutline = ({
  href, target = 'self', label, icon ,classes
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-Outline " + classes}>
        {label}

        {icon ?
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
        : undefined}
      </a>
    )
  } else {
    return (
      <button className={"btn btn-Outline " + classes}>
        {label}
        
        {icon ?
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
        : undefined}

      </button>
    )
  }
}

ButtonOutline.propTypes={
  label: PropTypes.string.isRequired,
  href:PropTypes.string,
  target:PropTypes.string,
  icon:PropTypes.string,
  classes:PropTypes.string
}

export {
    ButtonPrimary,
    ButtonOutline
}