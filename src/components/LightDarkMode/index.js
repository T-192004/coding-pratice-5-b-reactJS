// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {mode: 'dark', modeStatus: 'Light Mode'}

  onMode = () => {
    const {mode, modeStatus} = this.state
    if (mode === 'dark') {
      this.setState(prevState => ({
        mode: 'light',
        modeStatus: 'Dark Mode',
      }))
    } else {
      this.setState(prevState => ({
        mode: 'dark',
        modeStatus: 'Light Mode',
      }))
    }
  }

  render() {
    const {mode, modeStatus} = this.state
    const cardClass = `card ${mode}`
    return (
      <div className="bg-container">
        <div className={cardClass}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="btn" type="button" onClick={this.onMode}>
            {modeStatus}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
