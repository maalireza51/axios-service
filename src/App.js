import './App.css';
import { useEffect } from 'react';
import { get, HttpClient } from './services/HttpClient';

const httpClient = new HttpClient();

function App() {

  
  useEffect(() => {
    // function method
    // get('posts',{
    //   params:{
    //     id: 2
    //   }
    // }).then(response=>response)

    // class method
    httpClient.get('posts', {
      params: {
        id: 2
      }
    }).then(response => {
      console.log(`Nothing complex but unfortunately forbidden`);
      console.log(response);
    })
    
  }, [])
  
  return (
    <div className="App">
      Here is Iran and you need to use VPN to see results in console
    </div>
  );
}

export default App;
