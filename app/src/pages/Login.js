import React, { Component } from 'react';
import '../css/Login.css';
import axios from 'axios';
import md5 from 'md5';
import { NavLink } from 'react-router-dom';

// const baseUrl = "http://localhost:5000/api/employee";

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
        await axios.get(`http://localhost:5000/api/user/login?dni=${this.state.form.username}&password=${md5(this.state.form.password)}`)
            .then(response => {
                console.log(response.data);
                console.log(response.data.token.value.token);
                return response.data;
            })
            .then(response => {
                console.log(response.id);
                this.props.cookies.set('id', response.id, { path: "/" });
                this.props.cookies.set('email', response.email, { path: "/" });
                this.props.cookies.set('ruc', response.ruc, { path: "/" });
                this.props.cookies.set('dni', response.dni, { path: "/" });
                this.props.cookies.set('address', response.address, { path: "/" });
                this.props.cookies.set('name', response.name, { path: "/" });
                this.props.cookies.set('surname', response.surname, { path: "/" });
                this.props.cookies.set('telephone', response.telephone, { path: "/" });
                this.props.cookies.set('token', response.token.value.token, { path: "/" });
                alert(`Bienvenido ${response.name} ${response.surname}`);
                window.location.href = "./ordencompra";

            })
            .catch(error => {
                alert('El usuario o la contraseña no son correctos');
                console.log(error.response);
            })

    }

    componentDidMount() {
        if (this.props.cookies.get('username')) {
            window.location.href = "./ordencompra";
        }
    }


    render() {
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Dni: </label>
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
                        <div className="containerSecundario">
                            <NavLink to="/registro">Registrate</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;