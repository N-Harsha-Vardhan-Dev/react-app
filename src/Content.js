import {useState} from 'react';
const Content = ()=>{
    const [name,setName]=useState("Sankar")
    const handleNameChange = () =>{
        const nmes = ["Bob", "Alice","John"];
        const int = Math.floor(Math.random()*3);
        setName(nmes[int]);
    }
    const displayInstructions = () =>{
        const instructions = ["Click the button to change the name", "Click the button to change the name", "Click the button to change the name"];
        const int = Math.floor(Math.random()*3);
        return instructions[int];
        
    }
    const handleClick = (name) =>{
        console.log(`${name}Button clicked`);
    }
    return (
       <main>
        <p>Hello {name}</p>
        <p>{displayInstructions()}</p>
        <button onClick={() => handleClick("Sankar")}>Click me</button>
        <button onClick={handleNameChange}>Change Name</button>
       </main>
    );
}

export default Content;