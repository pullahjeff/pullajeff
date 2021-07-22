//import logo from './logo.svg';
import './App.css';
import {MyFunctionalComponent} from './components/MyFunctionalComponent';

import MyClassComponent from './components/MyClassComponent';

function App() {
  const user =  
    {
      name: 'ELON MUSK',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    //},
    //{
      //name: 'Chris Morgan',
      //location: 'Florida',
      //foodType: 'Chiken and Chips',
      //age: 45,
      //likes: 'Swimming and Reading',
      //twitterUsername: 'Morgan45',
      //avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
    const user_1 = {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }
    //]
  return (
    <div className="App">
      
      <MyClassComponent page =  {user}/>
      <MyClassComponent page =  {user_1}/>
    </div>
  );
}

export default App;
