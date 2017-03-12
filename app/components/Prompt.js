var React = require('react')
var PropTypes = React.PropTypes
var MainContainer = require('./MainContainer')

function Prompt (props) {
  return (
    <MainContainer>
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
              className='btn btn-large btn-success'
              type='submit' >
              Submit
            </button>
          </div>
        </form>
      </div>
    </MainContainer>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt
