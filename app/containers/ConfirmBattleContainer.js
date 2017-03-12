var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    console.log('GetInitialState')
    return {
      isLoading: true,
      playersInfo: []
    }
  },
  componentWillMount: function () {
    console.log('CompponentWillMount')
  },
  componentDidMount: function () {
    var query = this.props.location.query
    var that = this
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      that.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    })
  },
  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps')
  },
  componentWillUnmount: function () {
    console.log('CompponentWillUnmount')
  },
  handleInitiateBattler: function () {
    this.context.router.push({
      pathname: '/results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  },
  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattler}
        playersInfo={this.state.playersInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer
