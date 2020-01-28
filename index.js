function getMood() {
  const Mood = ["Happy", "Overjoyed", "Ecstatic", "Excited", "Blessed"];
  return Mood[Math.floor(Math.random() * Mood.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World! I am {getMood()}</h1>
      </div>
    );
  }
}

const rootElem = document.querySelector("#root");
ReactDOM.render(<JSXDemo />, rootElem);
