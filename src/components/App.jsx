import { Component } from "react"
import SearchBar from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
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



  // componentDidMount() {
  //   fetch('https://pixabay.com/api/?q={imageName}&page=1&key=36788641-8cf00dcd24f2681e40d99dde8&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ images: data.hits });
  //     })
  //     .catch(error => {
  //     console.log('Error fetching images:', error);
  //   });

  // }