import { Component } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/Searchbar/Searchbar'
import  ImageGallery  from 'components/ImageGallery/ImageGallery'
import { fetchImg } from "services/pixabay-api";
import { Loader } from "./Loader/Loader";
import { ButtonLoadMore } from "./Button/Button";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    showModal: false,
    modalValue: {},
    loadMore: false,
    page: 1,
    name: '', 
    totalImages: 0,

  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.name !== this.state.name ||
  //     prevState.page !== this.state.page) {
  //     this.setState({ loading: true })
      
  //     fetchImg("name", 1).then(({ hits }) => this.setState({ ...this.state, images: hits }))
  //       .catch(error => console.log('Error fetching images:', error))
  //       .finally(() => {
  //       this.setState({ ...this.state, loading: false });
  //     });
  //   }
  // }

  // handleSearch = async (name) => {
  //   const { hits } = await fetchImg(name, 1);
  //    this.setState({ images: hits, loading: false });
    
  //   if (this.state.name === name) {
  //     return alert ('ви вже переглядаєте')
  //   }
  //   console.log(name)
  //   this.setState({
  //     name: name.toLowerCase(), images: [], page: 1,
  //   })
  // }
  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }
  
  componentDidMount() {
    this.setState({ loading: true, })
    
     fetchImg("initialImage", 1)
      .then(({ hits }) => this.setState({ ...this.state, images: hits }))
       .catch(error => console.log('Error fetching images:', error))
       .finally(() => {
        this.setState({ ...this.state, loading: false });
      });
  }
  
  togleModal = modalValue => {
    this.setState({ modalValue })

    this.setState(({ showModal }) => ({
      showModal: !showModal
    }))
  }

  handleSearch = async (imageName) => {
    this.setState({ images: [], loading: true });

    const { hits } = await  fetchImg(imageName, 1);
    this.setState({ images: hits, loading: false });
    this.setState({ page: 1 })
    this.setState({loadMore: true})
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1
    }))
   
  }
//   onLoadMore = async () => {
//   const { page, images } = this.state;
//   const { imageName } = this.props;
//   const nextPage = page + 1;

//   try {
//     const { hits } = await fetchImg(imageName, nextPage);
//     this.setState(prevState => ({
//       images: [...prevState.images, ...hits],
//       page: nextPage
//     }));
//   } catch (error) {
//     console.log('Error fetching more images:', error);
//   }
// }


  render() {
    const { images, loading, showModal, modalValue, page, loadMore } = this.state;


    return <>
      {showModal && <Modal onClick={this.togleModal} data={modalValue} onClose={ this.togleModal} />}
      {loading && <Loader/>}
      <SearchBar onSubmit={this.handleSearch} />
      <ImageGallery images={images} loading={loading} onClick={this.togleModal} loadMore={ this.onLoadMore} />
      {loadMore && <ButtonLoadMore onClick={this.onLoadMore} />}
      <ToastContainer autoClose={3000} />
    </>
  };
}
