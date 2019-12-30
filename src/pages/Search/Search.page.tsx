import React from 'react';
import { Select, Col, Row, Card, Icon } from 'antd';
import './Search.css'
import HeaderComponent from '../../components/Header/Header.compoents';
import FadeComponent from '../../components/Fade/Fade.components';

type SearchProps = {
    exit: Function,
    onChangeFilter: Function,
    pagination: Function,
    onChangeSort: Function,
    onChangeSense: Function,
    pets: Array<object>,
    page: number,
    load: boolean,
    sortAsc: boolean,
};

interface MyEnum {
    [key: string]: any,
}

const LabelSize: MyEnum = {
    XS: "Small",
    S: "Small",
    M: "Medium",
    L: "Large",
    XL: "Extra Large",
}

const LabelSex: MyEnum = {
    MALE: "Male",
    FEMALE: "Female",
}

const LabelAge: MyEnum = {
    BABY: "Baby",
    YOUNG: "Young",
    ADULT: "Adult",
    SENIOR: "Senior"
}
const SearchPage = ({exit, onChangeFilter, pets, page, pagination, load, onChangeSort, sortAsc, onChangeSense} : SearchProps) => {

  return (
    <div className="Search">
        <HeaderComponent
            exit={exit}
        />
        <div style={{ width: '100%', height: '100%'}}>
            <Row style={{ padding: '30px 30px'}}>
                <Col span={8}>
                    <Row>
                        <label className="labelFilter">Sex: </label>
                        <Select defaultValue="" className="selectFilter" onChange={(value: string) => onChangeFilter('sex', value)} placeholder="Select the sex">
                            <Select.Option value="">All</Select.Option>
                            <Select.Option value="MALE">Male</Select.Option >
                            <Select.Option value="FEMALE">Female</Select.Option >
                        </Select>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        <label className="labelFilter">Size: </label>
                        <Select defaultValue="" className="selectFilter"  onChange={(value: string) => onChangeFilter('size', value)} placeholder="Select the size">
                            <Select.Option value="">All</Select.Option>
                            <Select.Option value="S">Small</Select.Option >
                            <Select.Option value="M">Medium</Select.Option >
                            <Select.Option value="L">Large</Select.Option >
                            <Select.Option value="XL">Extra Large</Select.Option >
                        </Select>
                    </Row>
                </Col>
                <Col span={8}>
                    <Row>
                        <label className="labelFilter">Age: </label>
                        <Select defaultValue="" className="selectFilter" onChange={(value: string) => onChangeFilter('age', value)} placeholder="Select the age">
                            <Select.Option value="">All</Select.Option>
                            <Select.Option value="BABY">Baby</Select.Option >
                            <Select.Option value="YOUNG">Young</Select.Option >
                            <Select.Option value="ADULT">Adult</Select.Option >
                            <Select.Option value="SENIOR">Senior</Select.Option >
                        </Select>
                    </Row>

                </Col>
            </Row>
            <Row>
                <Select className="selectSort" showArrow={false} defaultValue="name" onChange={(value: string) => onChangeSort(value)}>
                    <Select.Option value="name">Name</Select.Option>
                    <Select.Option value="age_key">Age</Select.Option >
                    <Select.Option value="size_key">Size</Select.Option >
                    <Select.Option value="price">Price</Select.Option >
                </Select>
                <Icon 
                    className="iconSort" 
                    type={sortAsc ? "down" : "up"}
                    onClick={() => onChangeSense()}
                />
            </Row>
            <Row>
                <div className="gridCard" style={{ height: window.innerHeight - 210}}>
                    <FadeComponent load={load}/>
                    {
                        pets.map((pet: any) => {
                            return <Card className="cardPet">
                                <Row>
                                    <Col span={8}>
                                        <label style={{ fontSize: '20px'}}><strong>{pet.name}</strong></label>
                                    </Col>
                                    <Col span={8}>
                                        <label><strong>sex: </strong>{LabelSex[pet.sex_key]}</label>
                                    </Col>
                                    <Col span={8}>
                                        <label><strong>price: </strong>{`$${pet.price}`}</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                        <label><strong>specie: </strong>{pet.specie.name}</label>
                                    </Col>
                                    <Col span={8}>
                                        <label><strong>age: </strong>{LabelAge[pet.age_key]}</label>
                                    </Col>
                                    <Col span={8}>
                                        <label><strong>size: </strong>{LabelSize[pet.size_key]}</label>
                                    </Col>
                                </Row>
                            </Card>
                        })
                    }
                </div>
            </Row>
            <Row >
                <Col span={24} className="pagination">
                    <div>
                        <Icon type="left" onClick={() => pagination(-1)}/>
                            {page}
                        <Icon type="right" onClick={() => pagination(1)}/>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default SearchPage;
