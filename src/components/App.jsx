import { Component } from "react"
import SearchBar from 'components/Searchbar/Searchbar'
import { ImageGallery } from 'components/ImageGallery/ImageGallery'
import { fetchImg } from "services/pixabay-api";

export default class App extends Component {
  state = {
    images: [],
  }


  handleSearch = async (imageName) => {
    // const images = await fetchImg(imageName, 1);
    // this.setState({ images });
    const images = await fetchImg(imageName, 1);
    this.setState({ images });
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