//Class based component ...
import React from "react";
import UserContext from "../utils/userContext";
import { Link } from "react-router-dom";
class Userbyclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "unknown",
        location: "unknown",
        avatar_url: "unknown",
      },
    };

    //    console.log(this.props.name + "children Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Children componentDidMount");
    const userData = await fetch(
      "https://api.github.com/users/tushar11kumar2001"
    );
    const json = await userData.json();
    // console.log(json);

    this.setState({
      userinfo: json,
    });
  }
  componentDidUpdate(prevprops, prevState) {
    if (this.state.count !== prevState.count) console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log(this.props.name + "children render");

    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="userclass relative top-10 flex flex-col items-center gap-4  h-screen">
        <h2 className="text-lg font-semibold"> {name.toUpperCase()}</h2>
        <h3 className="font-medium">Location : {location}</h3>
        <img className="rounded-lg" style={{ width: "160px", height: "150px" }} src={avatar_url} />
        <div className="flex gap-5 justify-center">
          <Link to="https://www.instagram.com/tushar_11822/"><i className="fa-brands fa-square-instagram text-red-600 text-3xl"></i></Link>
          <Link to="https://www.linkedin.com/in/tushar-kumar-b164a9256/"><i className="fa-brands fa-linkedin text-blue-600 text-3xl"></i></Link>
          <Link to="https://github.com/tushar11kumar2001"><i class="fa-brands fa-square-github text-3xl"></i></Link>
        </div>
      </div>
    );
  }
}

export default Userbyclass;
