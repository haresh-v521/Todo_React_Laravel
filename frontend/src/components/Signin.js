import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from "../actions/transactionActions"
import { bindActionCreators } from "redux";
import axios from 'axios';

class Signin extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
       
            return {
                username: '',
                password: ''
            }
       
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>");
        // console.log(this.state);
        // console.log(this.props.currentIndex);
        if (this.props.currentIndex == -1)
        {
           
            axios({
                method: 'post',
                url:'http://127.0.0.1:8000/api/postdata',
                data: this.state,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:8000',
                },
            }).then(function (response) {
                // console.log(">>>>>>>>>>>1111111111>>>>>>>>>>>>");
                // console.log(response);
                if(response.data=='Valid')
                {
                    alert("Login Successfully")
                }else{
                    alert("Invalid Data");
                }
            }).catch(function (error) {
               // console.log(">>>>>>>>>>>22222222222>>>>>>>>>>>>");
                console.log(error);
            });
            this.props.loginTransaction(this.state)
        }
       

    }

    render() {
        return (
            <div>
                
                <div class="contact agileinfo">
		<div class="container">
			<h1 class="title">Sign In</h1>
			<div class="contact-top">
			<div class="col-md-6 col-sm-6 cl  agileinfo-1">
			<h4>SIGN IN</h4>
        

                <form onSubmit={this.handleSubmit} autoComplete="off">
					<input type="email" name="username" placeholder="YOUR EMAIL" onChange={this.handleInputChange} value={this.state.username} /><br/>
					<input type="password" name="password" placeholder="YOUR PASSWORD" onChange={this.handleInputChange} value={this.state.password}/><br/>
					
                    <br/>
                    <button class="hvr-rectangle-in"  type="submit">Submit</button>
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

// const Signin = () =>{
//     return <h1>login page</h1>;
// }

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginTransaction: actions.login
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)