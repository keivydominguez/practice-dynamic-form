import NavbarMenu from "./components/NavbarMenu";
import Introduccion from "./components/Introduccion/Introduccion";
import Services from "./components/Services/Services";
import DynamicForm from "./components/DynamicForm/DynamicForm";

function App() {
    return (
        <div>
            <NavbarMenu/>
            <Introduccion/>
            <Services/>
            <DynamicForm/>
        </div>
    );
}

export default App;
