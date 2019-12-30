import * as axios from 'axios'

export default class HomeApi {

    static error() {
        console.log("Error Request!")
        sessionStorage.clear();
        return Promise.reject();
    }

    static SessionRequest() {
        return axios.default.post('https://test.adopets.app/v1/auth/session-request', 
        {
            system_api_key: "505763d6-4202-4b05-9efc-93b366939bcf"
        }).then((response) => {
            if (response.data.status === 200) {
                return response.data.data;
            } else {
                return this.error();
            }
        }).catch((err) => {
            return this.error();
        });
    }

    static SessionRegister(email: string, password: string) {
        var url = 'https://test.adopets.app/v1/auth/session-register'
        var body = {
            "organization_user": {
                "email": email, 
                "password": password
            }
        }
        return axios.default.post(url, body, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('key-session')
            }
        }).then((response) => {
            if (response.data.status === 200) {
                return response.data.data;
            } else {
                return this.error();
            }
        }).catch((err) => {
            return this.error();
        });
    }
}