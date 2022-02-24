import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ isAuthenticated }) => {
  const notify = () => {
    toast.success("successful", { autoClose: 3000 });
  };
  return (
    <div className="container text-center">
      <div className="jumbotron mt-5">
        <h1 className="display-4">
          Welcome to <span className="fw-bold">GhorKuno</span>
        </h1>
        <p className="lead">
          This is an system with production level features!
        </p>
        <hr className="my-4" />
      </div>
      {isAuthenticated ? notify() : null}
    </div>
  );
};

export default Home;
