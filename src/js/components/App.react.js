import React from 'react'
import CounterContainer from '../containers/CounterContainer'
import GithubUserContainer from '../containers/GithubUserContainer'
import bemClassGenerator from 'bem-class-generator';

const bem = bemClassGenerator('app');

const App = () => (
  <div className={bem()}>
    <h1 className={bem('header')}>Redux Boilerplate</h1>
    <CounterContainer />
    <GithubUserContainer />
  </div>
)

export default App
