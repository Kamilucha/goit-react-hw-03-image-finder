import { Component } from "react";
import { Header, SearchBarForm, Input, ButtonForm, ButtonLabel } from "./Searchbar.styled";
import { toast } from 'react-toastify';


export default class SearchBar extends Component{
    state = {
      imageName: '',
    }
  

  handleNameChange = e => {
      e.preventDefault();
    this.setState({imageName: e.currentTarget.value.toLowerCase()})
    }

    
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.warning('Please write what you are looking for.');
      return;
    }  

    console.log(this.state.imageName)
      this.props.onSubmit(this.state.imageName);
    };
    
    render() {
      return (
        <Header>
  <SearchBarForm onSubmit={this.handleSubmit}>
    <ButtonForm type="submit" >
      <ButtonLabel>Search</ButtonLabel>
    </ButtonForm>

    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.imageName}
      onChange={this.handleNameChange}
      />
  </SearchBarForm>
</Header>
        )
      }
}
