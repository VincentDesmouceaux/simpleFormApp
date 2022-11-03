import "./App.css";
import { useState } from "react";
import Footer from "../src/components/Footer";
import StepTwo from "../src/components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("TEST SUBMIT FORM");

    if (password === confirmPassword) {
      alert("Données envoyées");
    } else {
      setErrorMessage("Les mots de passes sont différents");
    }
  };
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="App">
      <h1>Create account</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <p>Email</p>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <p>Password</p>
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>Confirm your Password</p>
        <input
          placeholder="Confirm your Password"
          type="password"
          name="confirm your password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <div>
          <input className="button" type="submit" value="Register" />
        </div>

        <p className="erreur">
          {errorMessage && "Les mots de passes sont différents"}
        </p>
      </form>

      <StepTwo name={name} email={email} password={password} />

      <Footer />
    </div>
  );
}

export default App;
