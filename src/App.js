import "./App.css";
import CourseForm from "./components/CourseForm";
import CourseSearch from "./components/CourseSearch";
import CourseValue from "./components/CourseValue";
import Courselist from "./components/Courselist";

function App() {
  return (
    <div className="container">
      <CourseForm />
      <CourseSearch />
      <Courselist />
      <CourseValue />
    </div>
  );
}

export default App;
