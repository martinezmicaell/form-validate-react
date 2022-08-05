import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
    // const [userName, setUserName] = useState('');
    // const userNameRef = useRef()



    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <FormInput placeholder="Username" />
                <FormInput placeholder="Email" />
                <FormInput placeholder="Full Name" />
                <FormInput placeholder="I dont know" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
