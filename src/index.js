import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  state = {
    clicou: "ainda não clicou"
  }

  componentDidMount() {
    console.log("[App] - apareceu na tela")
  }

  handleClick() {
    this.setState({
      clicou: "clicou"
    })
  }

  render () {
    console.log("[App] - Renderizou")
    return (
      <div>
        <h1>Olá {this.props.name}, você {this.state.clicou}</h1>
        <button onClick={this.handleClick.bind(this)}>Clique Aqui</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App name={"Diego"} />
  </React.StrictMode>,
  document.getElementById('root')
);

