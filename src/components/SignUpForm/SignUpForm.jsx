import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
    const navigate = useNavigate;
    navigate('/home');
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className='form-container'>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label style={{ fontSize: '25px' }}>Name</label>
            <input style={{ fontSize: '25px' }} type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label style={{ fontSize: '25px' }}>Email</label>
            <input style={{ fontSize: '25px' }} type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label style={{ fontSize:'25px' }}>Password</label>
            <input style={{ fontSize: '25px' }} type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label style={{ fontSize: '25px' }}>Confirm</label>
            <input style={{ fontSize: '25px' }} type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <div className="button-container">
            <button type="submit" disabled={disable}>SIGN UP</button>
            </div>
          </form>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}