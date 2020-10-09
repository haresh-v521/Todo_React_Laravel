import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import '../css/style.css';
import '../css/animate.min.css';
import '../css/bootstrap.min.css';
//import Service from '../Service';
import { Link } from "react-router-dom";



class App extends Component {


    render() {
        return (
            <div>
                <div class="header" >
                    <nav class="navbar navbar-default navbar-fixed-top" style={{backgroundColor: "#016773"}}>
                        <div class="container">
                            <div class="navbar-header wow fadeInLeft animated animated" data-wow-delay=".5s" >
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="navbar-brand" style={{marginRight:"550px"}}>Dignizant</a>
                            </div>
                            <div id="navbar" class="navbar-collapse collapse">
                                <ul class="nav navbar-nav wow fadeInRight animated animated" data-wow-delay=".5s" >

                                <Link to="/Signin">
                                    <li class="hover-effect scroll">
                                       
                                        <span>
                                            <span>SIGN IN</span>
                                            <span>SIGN IN</span>
                                            <span></span>
                                        </span>
                                        
                                   </li>
                                   </Link>
                                   <Link to="/Signup">
                                    <li class="hover-effect scroll">
                                        <span>
                                            <span>SIGN UP</span>
                                            <span>SIGN UP</span>
                                            <span></span>
                                        </span>
                                    </li>
                                    </Link>
                                    <Link to="/Todo">
                                    <li class="hover-effect scroll">
                                        <span>
                                            <span>TO DO</span>
                                            <span>TO DO</span>
                                            <span></span>
                                        </span>
                                    </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                
            </div>
        );
    }
}

export default App;
