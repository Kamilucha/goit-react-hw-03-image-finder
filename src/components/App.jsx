import { Component } from "react"
import SearchBar from 'components/Searchbar/Searchbar'
import  ImageGallery  from 'components/ImageGallery/ImageGallery'
import { fetchImg } from "services/pixabay-api";

export default class App extends Component {
  state = {
    images: [],
  }
  componentDidMount() {
     fetchImg("initialImage", 1)
      .then(images => this.setState({ images }))
      .catch(error => console.log('Error fetching images:', error));
}

  handleSearch =  async (imageName) => {
  const { hits } = await  fetchImg(imageName, 1);
  this.setState({ images: hits });
  };

  render() {
    return <>
      <SearchBar onSubmit={this.handleSearch} />
      <ImageGallery images={this.state.images} />
    </>
  }
}
