import { Component } from "react";
import { Header, SearchBarForm, Input, ButtonForm, ButtonLabel } from "./Searchbar.styled";
import { fetchImg } from "services/pixabay-api";

export default class SearchBar extends Component{
    state = {
      imageName: '',
    }
  

    handleNameChange = e => {
    this.setState({imageName: e.currentTarget.value.toLowerCase()})
    }

    
    handleSubmit = async (e) => {
      e.preventDefault();
      const images = await fetchImg(this.state.imageName, 1);
      this.props.onSubmit(images);
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
    
    // handleSubmit = async e => {
    //   e.preventDefault();
    //   const { hits } = await fetchImg(this.state.imageName, 1)
    //     this.props.onSubmit(hits)
    // }