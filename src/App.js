
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/route/Router';



function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
