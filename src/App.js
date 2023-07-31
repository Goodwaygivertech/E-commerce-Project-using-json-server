import { Counter } from './features/counter/Counter';
import './App.css';
import router from './router/MyRouter';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';



function App() {





  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
