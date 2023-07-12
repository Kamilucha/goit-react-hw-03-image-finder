import { Component } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/Searchbar/Searchbar'
import  ImageGallery  from 'components/ImageGallery/ImageGallery'
import { fetchImg } from "services/pixabay-api";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
  }
  componentDidMount() {
    this.setState({ loading: true, })
    
     fetchImg("initialImage", 1)
      .then(({ hits }) => this.setState({ images: hits }))
       .catch(error => console.log('Error fetching images:', error))
       .finally(() => {
        this.setState({ loading: false });
      });
}

  handleSearch =  async (imageName) => {
  const { hits } = await  fetchImg(imageName, 1);
  this.setState({ images: hits });
  };

  render() {
    const { images, loading,  } = this.state


    return <>
      <ToastContainer autoClose={3000} />
      <SearchBar onSubmit={this.handleSearch} />
      {loading && <div>loading</div>}
     <ImageGallery images={images} loading={loading } />
    </>
  }
}
