import React from 'react';
import SearchPage from './Search.page';
import SearchApi from './Search.api';


interface MyState {
    [key: string]: any,
}

class SearchContainer extends React.Component<{}, MyState> {
    state = {
        sex: '',
        size: '',
        age: '',
        page: 1,
        maxPages: 0,
        fieldSort: 'name',
        sortAsc: true,
        pets: [],
        load: false,
    };

    componentDidMount() {
        var user = sessionStorage.getItem('key-user');
        if (!user) {
            this.exit();
        }
        this.search();
    }

    exit() {
        sessionStorage.clear();
        window.location.href =  '/';
    }

    search() {
        this.setState({ load: true})
        SearchApi.SearchPet(
            this.state.sex, 
            this.state.size, 
            this.state.age,
            this.state.page,
            Math.floor((window.innerHeight - 170)/120),
            this.state.sortAsc ? this.state.fieldSort : `-${this.state.fieldSort}`,
        ).then((response) => {
            console.log(response)
            this.setState({
                pets: response.result,
                maxPages: response.pages,
                load: false,
            });
        });
    }

    onChangeFilter(key: string, value: string) {
        this.setState({ [key]: value, page: 1 })
        setTimeout(() => {
            this.search();
        })
    }

    pagination(page: number) {
        var newPage = this.state.page + page;

        if (newPage >= 1 && newPage <= this.state.maxPages) {
            this.setState({
                page: this.state.page + page
            });
            setTimeout(() => {
                this.search();
            })
        }

    }

    onChangeSort(value: string) {
        this.setState({ fieldSort: value});
        setTimeout(() => {
            this.search();
        })
    }

    onChangeSense() {
        this.setState((state) => ({
            sortAsc: !state.sortAsc
        }));
        setTimeout(() => {this.search()})
    }
    
    render() {
        return (
            <SearchPage
                exit={this.exit.bind(this)}
                onChangeFilter={this.onChangeFilter.bind(this)}
                pagination={this.pagination.bind(this)}
                onChangeSort={this.onChangeSort.bind(this)}
                onChangeSense={this.onChangeSense.bind(this)}
                pets={this.state.pets}
                page={this.state.page}
                load={this.state.load}
                sortAsc={this.state.sortAsc}
            />
        )
    }
}

export default SearchContainer;