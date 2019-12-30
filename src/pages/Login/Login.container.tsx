import React from 'react';
import './Login.css';
import LoginPage from './Login.page';
import LoginApi from './Login.api';

interface MyProps {}

interface MyState {
    [key: string]: any,
}


class LoginContainer extends React.Component<MyProps, MyState> {
    state = {
        email: '',
        password: '',
        load: false,
    }

    componentDidMount() {
        LoginApi.SessionRequest().then((response) => {
            sessionStorage.setItem('key-session', response.access_key);
        }).catch((err) => {
            console.log(err);
            window.location.reload();
        });
    }

    enter() {
        this.setState({load: true})
        LoginApi.SessionRegister(this.state.email, this.state.password).then((response) => {
            sessionStorage.setItem('key-user', response.access_key);
            window.location.href = '/search'
            this.setState({load: false})
        }).catch((err) => {
            console.log(err);
            sessionStorage.clear();
            window.location.reload();
        });
    }
    

    changeValue(key: string, value: string) {
        this.setState({[key]: value});
    }

    render() {
        return (
            <LoginPage
                load={this.state.load}
                enter={this.enter.bind(this)}
                changeValue={this.changeValue.bind(this)}
            />
        )
    }
}

export default LoginContainer;