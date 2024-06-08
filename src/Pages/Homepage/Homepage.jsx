import App from "../../App";

const Homepage = () => {
    return (
        <div>
            <p>Homepage</p>
            <App isLoggedIn={true}></App>
        </div>
    );
};

export default Homepage;