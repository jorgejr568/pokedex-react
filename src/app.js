import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HomePage } from './components/pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
