import * as axios from 'axios'

export default class SearchApi {

    static error() {
        console.log("Error Request!")
        return Promise.reject();
    }

    static SearchPet(sex: string, size: string, age: string, page: number, elementsPage: number, sort: string) {
        var url = 'https://test.adopets.app/v1/pet/search '
        var filtros = {}

        if (age !== '') filtros = {...filtros, ...{"age_key": age}}
        if (size !== '') filtros = {...filtros, ...{"size_key": size}}
        if (sex !== '') filtros = {...filtros, ...{"sex_key": sex}}

        var body = {
            "search": {
                ...filtros,
                "_fields": [
                    "id",
                    "uuid",
                    "custom_code",
                    "name",
                    "specie_id",
                    "breed_primary_id",
                    "price",
                    "created_date",
                    "status_key",
                    "branch_id",
                    "payment_model_key",
                    "sex_key", 
                    "size_key",
                    "age_key"
                ],
                "specie": {
                    "with": {
                        "_fields": [
                            "id",
                            "name"
                        ]
                    }
                },
                "breed_primary": {
                    "with": {
                        "_fields": [
                            "id",
                            "name"
                        ]
                    }
                },
                "branch": {
                    "with": {
                        "uuid" : "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
                        "_fields": [
                            "id",
                            "uuid"
                        ]
                    }
                }
            },
            "options": {
                "page": page,
                "limit": elementsPage >= 5 ? elementsPage : 5,
                "sort": [sort]
            }
        }
        return axios.default.post(url, body, {
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('key-user')
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