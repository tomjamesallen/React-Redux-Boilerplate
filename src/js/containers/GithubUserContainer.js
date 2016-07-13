import { connect } from 'react-redux'
import GithubUser from '../components/GithubUser'
import { fetchUser } from '../redux/modules/githubUser'

const mapStateToProps = (state) => {
  return state.githubUser
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => {
      fetchUser(user)(dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubUser)
