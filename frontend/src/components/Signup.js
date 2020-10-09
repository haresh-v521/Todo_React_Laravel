import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";
import axios from 'axios';

class Signup extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
       
            return {
                name: '',
                address: '',
                email:'',
                password:'',
                response:'hh'
            }
       
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
         console.log(">>>>>>>>>>>>>>>>>>>>>>>");
         console.log(this.state);
        // console.log(this.props.currentIndex);
        if (this.props.currentIndex == -1)
        {
           
            axios({
                method: 'post',
                url:'http://127.0.0.1:8000/api/registration',
                data: this.state,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                },
            }).then(function (response) {
                // console.log(">>>>>>>>>>>1111111111>>>>>>>>>>>>");
                // console.log(response);
                alert(response.data);
            }).catch(function (error) {
                // console.log(">>>>>>>>>>>22222222222>>>>>>>>>>>>");
                // console.log(error);
                
            });
            
            this.props.registrationTransaction(this.state)
        }
       

    }

    render() {
        return (
            <div>

                <div class="contact agileinfo">
                    <div class="container">
                        <h1 class="title">Sign Up</h1>
                        <div class="contact-top">
                            <div class="col-md-6 col-sm-6 cl  agileinfo-1">
                                <h4>{this.response}</h4>
                                <h4>SIGN UP</h4>


                                <form onSubmit={this.handleSubmit} autoComplete="off">
                                    <input type="text" name="name" placeholder="YOUR NAME" onChange={this.handleInputChange} value={this.state.name} /><br />
                                    <input type="text" name="address" placeholder="YOUR ADDRESS" onChange={this.handleInputChange} value={this.state.address} /><br />
                                    <input type="email" name="email" placeholder="YOUR EMAIL" onChange={this.handleInputChange} value={this.state.email} /><br />
                                    <input type="password" name="password" placeholder="YOUR PASSWORD" onChange={this.handleInputChange} value={this.state.password} /><br />

                                    <br />
                                    <button class="hvr-rectangle-in" type="submit">Submit</button>
                                </form>
                            </div>
                            <div class="col-md-6 col-sm-6 cr  agileinfo-2">
                                <h4>Blanditiis praesentium</h4>
                                <h5>Dignissimos at vero eos et accusamus et iusto odio ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat officia deserunt mollitia laborum et dolorum fuga. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecat</h5>

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
        registrationTransaction: actions.registration
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)