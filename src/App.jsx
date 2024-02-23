import "./App.css";
import Student from "./components/monsterBox/monsterBox";


const App = () => {

    const rubrik = "Hej";
    const age = 21;
    const checkAge = (age) => {
        if (age >= 18) {
            return "Välkommen";
        }
        else {
            return "Hej då";
        }
    }

    return (
        <>
            <h1>🍌 Hello World! 🛸</h1>;
            <section>
                <h2>{checkAge(age)}</h2>
                <Student />
                <Student />
                <Student />
            </section>
        </>
    )
}

export default App;

