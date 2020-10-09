import React, { Component, useState } from 'react';
import { connect } from 'react-redux'
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";
import axios from 'axios';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: []
        }
    }

    componentDidMount() {
        const apiUrl = 'http://127.0.0.1:8000/api/todolist';


        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log("====================");
                    // console.log(result);
                    this.setState({
                        products: result
                    });

                },
                (error) => {
                    // console.log("====================");
                    // console.log(error);
                    this.setState({ error });
                }
            )
    }

    handleDelete = (index) => {
        

        if (index != '') {

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/deletetodo',
                data: {'id':index},
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                },
            }).then(function (response) {
                // console.log(">>>>>>>>>>>1111111111>>>>>>>>>>>>");
                // console.log(response);
                alert(response.data);
                window.location.reload();
            }).catch(function (error) {
                // console.log(">>>>>>>>>>>22222222222>>>>>>>>>>>>");
                // console.log(error);
                window.location.reload();
            });

            this.props.deletetodoTransaction(this.state)
           
        }
    }
    
    // handleEdit = (index) => {
    //     this.props.updatetodoTransactionIndex(index)
    // }

    handleEdit = (index) => {
        if (index != '') {

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/updatetodo',
                data: {'id':index},
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                },
            }).then(function (response) {
                console.log(">>>>>>>>>>>1111111111>>>>>>>>>>>>");
                console.log(response.data);
                this.setState({
                    title: response.data && response.data.name || '' ,
                    description:  response.data && response.data.description || ''
                })
            }).catch(function (error) {
                console.log(">>>>>>>>>>>22222222222>>>>>>>>>>>>");
                console.log(error);
                
            });

            this.props.deletetodoTransaction(this.state)
           
        }
    }

    render() {
        const { error, products } = this.state;
        return (

            <div class="bs-docs-example">
                <table class="table">

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {products.map(product => (
                            <p>{product.title}</p>
                        ))} */}
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.description}</td>

                                <td><button class="hvr-rectangle-in" onClick={() => this.handleEdit(product.id)}>Edit</button></td>
                                <td><button class="hvr-rectangle-in" onClick={() => this.handleDelete(product.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        //updatetodoTransactionIndex: actions.updatetodoIndex,
        deletetodoTransaction: actions.deletetodo
    }, dispatch)
}

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)