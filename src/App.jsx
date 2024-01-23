import style from './App.module.css';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className={style.container}>
      <div>
        <form className={style.formContainer}>
          <div className={style.centralizar}>
            <div>
              <h1>Login</h1>
              <Inputs type="email" name='email' placeholder="Informe seu email..." id='email'/>
              <Inputs type="password" name='senha' placeholder="Informe sua senha..." id='senha' />
              <div>
                <input type="radio" name="radio" id="radio" />
                <label htmlFor="radio">Salvar dados de login...</label>
              </div>
              <input type="submit" value="Login" className={style.login} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
