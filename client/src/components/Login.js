import React, {Component} from 'react'
import {login} from './UserFunctions'

class Login extends Component {

    constructor(){
        super()
        this.state = {

            email: '',
            password: '',
            error:''
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value  })

    }
    onSubmit(e){
        e.preventDefault()
        this.setState({ error:'' });

        const user = {
            email:this.state.email,
            password:this.state.password
        }
        
      /*   login(user).then(
            res => {                 
                if(res){
                    this.props.history.push('/profile')
                }else this.setState({ error: res.data.error })
            }
            
        ) */
        
       
       login(user).then(
           (res) => this.props.history.push('/profile'),
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

                        { this.state.error && <div className="alert alert-danger"> { this.state.error } </div> }

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" 
                            className="form-control"
                            name="email"
                            placehelder="Enter Email"
                            value={this.state.email}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="Password" 
                            className="form-control"
                            name="password"
                            placehelder="Enter Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            />
                        </div>
                        <button type="submit" 
                        className="btn btn-lg btn-primary btn-block">
                            Sign in
                        </button>
                    </form>
                    
                </div>
             </div>
            </div>
        )
    }
}

export default Login