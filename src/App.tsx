import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greetings from "./components/Greetings";
// import CounterUseState from "./components/CounterUseState";
// import CounterUseReducer from "./components/CounterUseReducer";
import MyForm from "./components/MyForm";
// import ReducerSample from "./components/ReducerSample";


// const App: React.FC = () => {
function App() {
    // const onClick = (name:string) => {
    //     console.log(`${name} say hello`);
    // }
    //
    const onSubmit = (form:{name: string, description: string}) => {
        console.log(form);
    };

    return (
        <div className="App">
            <header className="App-header">
                {/*<Greetings name='world' onClick={onClick}/>*/}
                {/*<CounterUseState/>*/}
                {/*<CounterUseReducer/>*/}
                <MyForm onSubmit={onSubmit} />
                {/*<ReducerSample/>*/}
            </header>
        </div>
    );
}


export default App;
