
const Content = ()=>{
    const handleNameChange = () =>{
        const nmes = ["Bob", "Alice","John"];
        const int = Math.floor(Math.random()*3);
        return nmes[int];
    }
    return (
       <main>
        <p>Hello {handleNameChange()}</p>
       </main>
    );
}

export default Content;