function WelcomeProp(props){
    return <h1>Hello, {props.name}</h1>
}

function App(){
    return(
        <div>
            <WelcomeProp name="안유진" />
        </div>
    );
}

export default App;