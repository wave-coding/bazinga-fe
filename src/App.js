import { AppProvider } from "./context/useContext";

import Header from "./components/template/Header";

function App() {
    return (
        <AppProvider>
            <Header />
        </AppProvider>
    );
}

export default App;