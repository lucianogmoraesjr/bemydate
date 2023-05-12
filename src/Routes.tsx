import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LittleAss } from './pages/LittleAss';
import App from './App';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={App}/>
        <Route path={'/little-ass'} component={LittleAss} />
      </Switch>
    </BrowserRouter>
  )
}