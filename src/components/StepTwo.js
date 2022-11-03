const [switch1, setSwitch1] = useState(false);

const StepTwo = (props) => {
  console.log(props);
  return (
    <div className="result">
      <h1>Result</h1>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>

      <button
        onClick={() => {
          setSwitch1;
        }}
      >
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
