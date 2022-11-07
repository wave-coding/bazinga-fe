import Header from "./components/Header";
import { AppProvider } from "./context/useContext";

function App() {
    return (
        <AppProvider>
            <Header />
        </AppProvider>
    );
}

export default App;