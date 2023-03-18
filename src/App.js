import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import './App.css';

function App() {


  const configuration = new Configuration({
    apiKey : process.env.REACT_APP_OPENAI_KEY
  })

  const openai = new OpenAIApi(configuration)

  const [prompt , setprompt] = useState("")
  const [result, setResult] = useState("")
 
  const handelClick = async () =>{

    try{
  
      const response = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : prompt ,
        temperature : 0.5,
        max_tokens : 100

      })
     
      setResult(response.data.choices[0].text)

      


    }catch(error){console.log(error)}

  }

  return (
    <div className="App">
  
   <div className='text'>
    <textarea name="" id="" cols="40" rows="10" onChange={(e) => setprompt(e.target.value)}></textarea>
    <button className='generate' onClick={()=>handelClick()}>Generate</button>
    </div>

    <p className='response'>{result}</p>
      
      
    </div>
  );
}

export default App;
