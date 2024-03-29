import React, {Component} from 'react'
import {register} from './UserFunctions'

class Register extends Component {

    constructor(){
        super()
        this.state = {
            first_name:'',
            last_name:'',
            email: '',
            password: '',
            error:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})

    }
    onSubmit(e){
        e.preventDefault()
        const user = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            password:this.state.password
        }

       /*  register(user).then(res =>{
            if(res){
                this.props.history.push('/login')
            }
        }) */

        register(user).then(
            (res) => this.props.history.push('/login'),
            (err) => this.setState({ error: err.response.data.error })
        )
    }
    render(){
        return(
            <div className="container">
             <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal"> Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" 
                            className="form-control"
                            name="first_name"
                            placehelder="Enter First Name"
                            value={this.state.first_name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" 
                            className="form-control"
                            name="first_name"
                            placehelder="Enter Last Name"
                            value={this.state.last_name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="mail" 
                            className="form-control"
                            name="email"
                            placehelder="Enter Email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" 
                            className="form-control"
                            name="password"
                            placehelder="Enter Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" 
                        className="btn btn-lg btn-primary btn-block">
                            Register
                        </button>
                    </form>
                </div>
             </div>
            </div>
        )
    }
}

export default Register