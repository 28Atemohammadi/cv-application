import GeneralInfo from "./components/GeneralInfo" ;
import Educatonal from "./components/Educational";
import Practical from "./components/Practical";
import "../src/App.css";

function App () {
   return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "white", fontFamily : "Dana Bold , peyda "}}>CV Application</h1>
      <h3 style={{textAlign: "center", color: "gray", fontFamily : "Dana Bold , peyda "}}>Build your professional identity with ease</h3>
      <GeneralInfo />
      <Educatonal />
      <Practical />
    </div>
   );
}
export default App;