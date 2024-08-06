import { Outlet } from 'react-router-dom';
import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { setBannerData, setImageUrl} from './store/movieSlice';
import { useDispatch } from 'react-redux';

// const api_key = process.env.REACT_APP_ACCEES_API_KEY;
// const BASE_URL = "https://api.themoviedb.org/3";

function App() {

  const dispatch=useDispatch()

  const  fetchTrendingData = async()=>{

    // const api = axios.create({
    //   baseURL: BASE_URL
    // });
    // const getUpcoming = api.get("trending/all/week?language=en-US",
    //   {
    //     params:api_key
    //   }
    // );
    // getUpcoming.then(response =>{
    //   console.log(response.data.results)
    //   dispatch(setBannerData(response.data.results))
    // })

    try{
      const response = await axios.get('/trending/all/week?language=en-US')
      dispatch(setBannerData(response.data.results))
    }catch(error){
      console.log("error", error) 
    }
  }

  const fetchConfiguration = async()=>{
    try {
      const response = await axios.get("/configuration")
      dispatch(setImageUrl(response.data.images.base_url+"original"))
      
    } catch (error) {
      
    }
  }
useEffect(()=>{
  fetchTrendingData()
  fetchConfiguration()
},[])

  return (
    <main className='pb-14 lg:pb-0'>
      <Headers/>
      <div className='min-h-[90vh]'>
       <Outlet/>
       </div>
       <Footer/>
       <MobileNavigation/>
    </main>
  );
}

export default App;
