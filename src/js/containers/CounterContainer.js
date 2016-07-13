import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment } from '../redux/modules/counter'

const mapStateToProps = (state) => {
  return state.counter
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(increment())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
