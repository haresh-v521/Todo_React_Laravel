import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";
import axios from 'axios';
import TodoList from './TodoList';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: [],
            title: '',
            description: '',
            updateBtn: false,
            updateid:''
        }
    }



    state = {
        ...this.returnStateObject()
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



    // componentDidUpdate() {

    // }

    returnStateObject() {

        return {
            title: '',
            description: ''
        }

    }




    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDelete = (index) => {


        if (index != '') {

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/deletetodo',
                data: { 'id': index },
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




    handleEdit = (index) => {
        if (index != '') {
            const data = { 'id': index };

            fetch('http://127.0.0.1:8000/api/updatetodo', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                    //'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                this.setState({
                    updateid : data && data.id || '',
                    title: data && data.name || '',
                    description: data && data.description || '',
                    updateBtn: true
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
          console.log(">>>>>>>>>>>>>>>>>>>>>>>");
          console.log(this.state);
        // console.log(this.props.currentIndex);
        if (this.props.currentIndex == -1) {

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/addtodo',
                data: this.state,
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

            });

            this.props.addtodoTransaction(this.state)

        }
    }

    updateSubmit = (e) => {
        e.preventDefault()
        //   console.log(">>>>>>>>>>>>>>>>>>>>>>>");
        //   console.log(this.state);
        // console.log(this.props.currentIndex);
        if (this.props.currentIndex == -1) {

           const dataall = { 'id': this.state.updateid,'title': this.state.title,'description': this.state.description};

            axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/updatetodoentry',
                data: dataall,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                },
            }).then(function (response) {
                //  console.log(">>>>>>>>>>>1111111111>>>>>>>>>>>>");
                //  console.log(response);
                alert(response.data);
                window.location.reload();
            }).catch(function (error) {
                //  console.log(">>>>>>>>>>>22222222222>>>>>>>>>>>>");
                //  console.log(error);

            });


        }
    }

    render() {
        const { error, products, title, description, updateBtn,updateid } = this.state;
        // console.log("title-------", title)
        // console.log("description-------", description)
        return (
            <div>

                <div class="contact agileinfo">
                    <div class="container">
                        <h1 class="title">To Do</h1>
                        <div class="contact-top">
                            <div class="col-md-6 col-sm-6 cl  agileinfo-1">
                                <h4>{this.response}</h4>
                                <h4>ADD TO DO</h4>


                                <form  autoComplete="off">
                                    <input type="text" name="title" placeholder="ENTER TITLE" onChange={this.handleInputChange} value={this.state.title} /><br />
                                    <textarea name="description" placeholder="ENTER DESCRIPTION" onChange={this.handleInputChange} value={this.state.description} /><br />
                                    {!updateBtn ? (<button onClick={this.handleSubmit} class="hvr-rectangle-in" type="submit">Submit</button>) : (<button onClick={this.updateSubmit}  class="hvr-rectangle-in" type="submit">Update</button>)}
                                    
                                </form>
                            </div>
                            <div class="col-md-6 col-sm-6 cr  agileinfo-2">
                                <h4>Todo List</h4>
                                {/* <TodoList/> */}
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

                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// const Signup = () =>{
//     return <h1>Reg page</h1>;
// }

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addtodoTransaction: actions.addtodo,
        deletetodoTransaction: actions.deletetodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)