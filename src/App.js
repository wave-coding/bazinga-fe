import { AppProvider } from "./context/useContext";

import Header from "./components/template/Header";

import Footer from "./components/template/footer/Footer";

function App() {
    return (
        <AppProvider>
            <Header />
            <Footer />
        </AppProvider>
    );
}

export default App;