import "./App.css";


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
                <infoBox />
                <infoBox />
                <infoBox />
            </section>
        </>)
}

export default App;

