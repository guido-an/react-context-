import React from 'react'
import LanguageContext from '../context /LanguageContext'
import ColorContext from '../context /ColorContext'
class Button extends React.Component {
  renderSubmit (value) {
    return value === 'english' ? 'submit' : 'vorleggen'
  }

  renderButton (color) {
    return (
      <div className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </div>
    )
  }

  render () {
    return (
      <ColorContext.Consumer>
        {(color) =>
          this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button
