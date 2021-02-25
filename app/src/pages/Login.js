import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:5000/api/employee";
const cookies = new Cookies();

class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion = async () => {
        // ERROR AXIOS con PARAMS esta trayendo todos los datos sin importar los parametros enviados
        // revisar https://stackoverflow.com/questions/61478796/how-to-pass-parameter-to-http-get-method-from-net-core-react
        // await axios.get(baseUrl, {params: {dni: this.state.form.username, password: md5(this.state.form.password)}})

        //login validado en backend; con dni y contraseña
        await axios.get(`http://localhost:5000/api/employee/login?dni=${this.state.form.username}&password=${md5(this.state.form.password)}`)
            .then(response => {
                console.log(response.data);
                console.log(md5(this.state.form.password));
                return response.data;
            })
            .then(response => {
                console.log(response.id);
                cookies.set('id', response.id, { path: "/" });
                cookies.set('email', response.email, { path: "/" });
                cookies.set('dni', response.dni, { path: "/" });
                cookies.set('password', response.password, { path: "/" });
                cookies.set('name', response.name, { path: "/" });
                cookies.set('surname', response.surname, { path: "/" });
                alert(`Bienvenido ${response.name} ${response.surname}`);
                window.location.href="./ordencompra";

            })
            .catch(error => {
                alert('El usuario o la contraseña no son correctos');
                console.log(error.response);
            })

    }

    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href="./ordencompra";
        }
    }


    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                        />
                        <br />
                        <label>Contraseña: </label>
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;