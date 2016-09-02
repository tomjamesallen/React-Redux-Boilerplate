import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment } from '../redux/modules/counter'

const mapStateToProps = (state) => {
  return state.counter
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onClick: increment
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
