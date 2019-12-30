import React from 'react';
import './Home.css';
import HomePage from './Home.page';
import HomeApi from './Home.api';
import MemoryStorage from '../../memory_storage';


interface MyProps {}

interface MyState {
    [key: string]: string,
}


class HomeContainer extends React.Component<MyProps, MyState> {

    componentDidMount() {
        HomeApi.SessionRequest().then((response) => {
            sessionStorage.setItem('key-session', response.access_key);
            this.setState({
                email: '',
                password: '',
            });
        }).catch((err) => {
            console.log(err);
            window.location.reload();
        });
    }

    enter() {
        HomeApi.SessionRegister(this.state.email, this.state.password).then((response) => {
            MemoryStorage.set('key-user', response.access_key);
            window.location.href = '/search'
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
            <HomePage
                enter={this.enter.bind(this)}
                changeValue={this.changeValue.bind(this)}
            />
        )
    }
}

export default HomeContainer;