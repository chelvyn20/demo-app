import { Component } from "react";
import { SubmitBtn } from "../SubmitBtn";

export class CustomForm extends Component {
  constructor(props) {
    super(props);

    this.state = { userName: "user", inputName: "" };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ inputName: event.target.value });
  }

  needToResubmit(inputName) {
    return inputName !== this.state.userName;
  }

  onSubmit(event) {
    const { inputName } = this.state;
    if (this.needToResubmit(inputName)) {
      this.setState({ userName: inputName });
    }
    event.preventDefault();
  }

  render() {
    const { userName, inputName } = this.state;
    return (
      <div>
        <p>Welcome, {userName}!</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={inputName} onChange={this.onChange} />
          <SubmitBtn children="ok" />
        </form>
      </div>
    );
  }
}

// export function CustomForm() {
//     const [userName, setUserName] = useState("User");
//     const [inputName, setInputName] = useState("");

//     const onChange = (event) => {
//       setInputName(event.target.value);
//     };

//     const needToResubmit = (input) => {
//       return input !== userName;
//     };

//     const onSubmit = (event) => {
//       if (needToResubmit(inputName)) {
//         setUserName(inputName);
//       }
//       event.preventDefault();
//     };

//     return (
//       <div>
//         <p>Welcome, {userName}!</p>
//         <form onSubmit={onSubmit}>
//           <input type="text" value={inputName} onChange={onChange} />
//           <SubmitBtn children="ok" />
//         </form>
//       </div>
//     );
//   }
