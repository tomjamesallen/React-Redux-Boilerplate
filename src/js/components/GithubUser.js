import React, { Component, PropTypes } from 'react'

const Profile = ({
  name,
  avatar_url: img,
  blog,
  bio
}) => (
  <div>
    <h3>{name}</h3>
    {img &&
      <div>
        <img
          src={img}
          style={{
            maxWidth: '200px'
          }}
        />
      </div>
    }
    {blog &&
      <a
        href={blog}
        target='_blank'
      >{blog}</a>
    }
    {bio &&
      <p>{bio}</p>
    }
  </div>
)

Profile.propTypes = {
  name: PropTypes.string,
  avatar_url: PropTypes.string,
  blog: PropTypes.string,
  bio: PropTypes.string
}

Profile.defaultProps = {
  name: '',
  avatar_url: '',
  blog: '',
  bio: ''
}

class GithubUser extends Component {
  static propTypes = {
    fetchUser: PropTypes.func,
    isFetching: PropTypes.bool,
    user: PropTypes.string,
    userData: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchUser('github')
  }

  render() {
    const { isFetching, userData, user: loadedUser } = this.props
    const user = this.state.user || loadedUser || ''
    return (
      <div>
        <h2>GitHub User Component</h2>
        <input
          type='text'
          value={user || ''}
          ref='input'
          onChange={this.handleChange}
        />
        <button onClick={this.handleClickFetch.bind(this)}>Fetch</button>
        {isFetching &&
          <div>Loading data...</div>
        }
        {(!isFetching && userData.name) &&
          <Profile
            {...userData}
          />
        }
        {(!isFetching && !userData.name) &&
          <div>Invalid user / error loading</div>
        }
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      user: this.refs.input.value
    })
  }

  handleClickFetch() {
    this.props.fetchUser(this.refs.input.value)
  }
}

export default GithubUser
