import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  //   const { isLoading, error, data } = useQuery('repoData', () =>
  //   fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
  //     res.json()
  //   )
  // )
  // console.log(data)
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
