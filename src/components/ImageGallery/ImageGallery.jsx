import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import { ImageList } from './ImageGallery.styled';
import { toast } from 'react-toastify';



export default class ImageGallery extends Component{
  async componentDidUpdate(prevProps, prevState){
    const { loadMore, page, imageName, } = this.props;

    if (prevProps.imageName !== imageName || prevProps.page !== page) {
      if (prevProps.imageName !== imageName) {
        loadMore(false);
        this.setState({ images: [], page: 1 });
      }
    }
    
  }
    render() {
      const { images, isLoading, onClick } = this.props;

         if (!images || images.length === 0) {
      return <p>No images found.</p>;
      };
        
        return  (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags,}) => (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={onClick}
              />
            ))}
          </ImageList>
        )}
      </div>
    );
  };
};
