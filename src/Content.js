
const Content = ()=>{
    const handleNameChange = () =>{
        const nmes = ["Bob", "Alice","John"];
        const int = Math.floor(Math.random()*3);
        return nmes[int];
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
        <p>Hello {handleNameChange()}</p>
        <p>{displayInstructions()}</p>
        <button onClick={() => handleClick("Sankar")}>Click me</button>
       </main>
    );
}

export default Content;