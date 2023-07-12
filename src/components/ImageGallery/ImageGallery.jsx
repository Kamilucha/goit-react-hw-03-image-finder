import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { Component } from 'react'
import { ImageList } from './ImageGallery.styled'


export default class ImageGallery extends Component{
 
    render() {  
        const images = this.props
        return (
              <div>
          {images && images.length > 0 ? (
           <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => {
                return ( 
                    <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={ largeImageURL} tags={tags} />
                )})}
        </ImageList>
            ) : (
            <p>No images found.</p>)}
        </div>
       )}
    }

