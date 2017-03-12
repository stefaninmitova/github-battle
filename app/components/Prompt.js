var React = require('react')
var PropTypes = React.PropTypes

function Prompt (props) {
  return (
    <div className='prompt-container'>
      <h1>{props.header}</h1>
      <div className='prompt-form-container'>
        <form onSubmit={props.onSubmitUser}>
          <div className='prompt-form'>
            <input
              className='prompt-input'
              placeholder='Github Username'
              onChange={props.onUpdateUser}
              value={props.username}
              type='text' />
          </div>
          <div className='prompt-button-container'>
            <button
              className='prompt-button'
              type='submit' >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt
