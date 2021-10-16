import React, { Component } from "react"
import {
  END_POINTS,
  fetchValidateName,
  makeFetch,
} from "../../components/Common/functions"
/* import { fetchValidateName } from '../../api/api';
 */ import iconEnter from "../../assets/images/sumra/icon-enter.svg"
import personIcon from "../../assets/images/sumra/icon-person.svg"
import personOrange from "../../assets/images/sumra/icon-person-orange.svg"
import iconBlock from "../../assets/images/sumra/icon-block.svg"
import checkGreen from "../../assets/images/sumra/icon-check-green.svg"
import { withAuthMain } from "../../components/hoc/withAuthMain"
class UserForm extends Component {
  constructor(props) {
    super(props)

    const { state } = this.props

    this.state = {
      ...state,

      username: "",
      invalidUserName: false,
    }

    this.timerID = null
  }

  render() {
    const { invalidUserName, username } = this.state
    let { className } = this.props

    className += " user-signup-form"

    let message, personIconSrc, validIconSrc, filedsetClassName

    if (!username) {
      filedsetClassName = "sumra-input-fieldset"
      personIconSrc = personIcon
      validIconSrc = personOrange
      message = null
    } else {
      filedsetClassName = "sumra-input-fieldset available"
      personIconSrc = personOrange
      if (invalidUserName) {
        validIconSrc = iconBlock
        message = (
          <div className="sumra-input-message error">
            This username is already taken.
          </div>
        )
      } else {
        validIconSrc = checkGreen
        message = (
          <div className="sumra-input-message success">
            This username is available.
          </div>
        )
      }
    }

    return (
      <div className={className}>
        <h1 className="h1-title">Enter username</h1>

        <form>
          <fieldset className={filedsetClassName}>
            <legend>User name</legend>

            <img
              className="sumra-input-fieldset-icon"
              src={personIconSrc}
              width="22"
              alt="person icon"
            />

            <input
              type="text"
              placeholder="Enter username"
              onChange={this._changeInput}
            />

            <img
              className="sumra-input-fieldset-icon-right"
              src={validIconSrc}
              width="22"
              alt="valid icon"
            />
          </fieldset>

          {message}

          <button className="sumra-Button" onClick={this._submitUserForm}>
            <img
              className="sumra-Button-icon-left"
              src={iconEnter}
              width="18"
              alt="icon enter"
            />

            <span>Submit</span>
          </button>
        </form>
      </div>
    )
  }

  _changeInput = event => {
    const value = event.target.value

    this.setState({ username: value })

    if (this.timerID) {
      clearTimeout(this.timerID)
    }

    this.timerID = setTimeout(() => {
      fetchValidateName(value)
        .then(response => {
          if (response.status === 200) {
            this.setState({ invalidUserName: false })
          } else {
            this.setState({ invalidUserName: true })
          }
        })
        .catch(console.error)
    }, 300)
  }

  _submitUserForm = async event => {
    event.preventDefault()

    if (this.state.invalidUserName) {
      return
    }

    let response = await makeFetch(END_POINTS.REGISTRATION, {
      code: this.state.verificationCode,
      username: this.state.username,
    })

    if (response.ok) {
      console.log(response)
      const json = await response.json()
      alert(json)
      console.log(json)
    }
  }
}

export default withAuthMain(UserForm)
