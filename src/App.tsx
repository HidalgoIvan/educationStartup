import { setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Route } from 'react-router';
import { HashRouter, Switch, Redirect } from 'react-router-dom';

import TopicList from './pages/TopicListPage/TopicListPage';
import TopicPage from './pages/TopicPage/TopicPage';

setupIonicReact();

const App: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/topic/:topicId">
        <TopicPage />
      </Route>
      <Route exact path="/">
        <TopicList />
      </Route>
      <Route path="*">
        <TopicList />
      </Route>
    </Switch>
  </HashRouter>
);
export default App;
{
  /* <HashRouter>
<IonApp>
	<IonReactRouter basename={`/${process.env.PUBLIC_URL}`}>
		<IonRouterOutlet>
			<Route path="/educationStartup/topic/:topicId">
				<TopicPage />
			</Route>
			<Route exact path="/educationStartup/">
				<TopicList />
			</Route>
		</IonRouterOutlet>
	</IonReactRouter>
</IonApp>
</HashRouter> */
}
