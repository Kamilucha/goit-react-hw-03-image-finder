import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { Component } from 'react'
import { ImageList } from './ImageGallery.styled'



export default class ImageGallery extends Component{
    state = {

    }
    render() {
        const { images, isLoading } = this.props

         if (!images || images.length === 0) {
      return <p>No images found.</p>;
    }
        
        return  (
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ImageList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            ))}
          </ImageList>
        )}
      </div>
    );
 }
}
//   render() {  
//       const { images } = this.props
//     return (
//           <div>
//       {images && images.length > 0 ? (
//        <ImageList>
//         {images.map(({ id, webformatURL, largeImageURL, tags }) => {
//             return ( 
//                 <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={ largeImageURL} tags={tags} />
//             )})}
//     </ImageList>
//         ) : (
//         <p>No images found.</p>)}
//     </div>
//    )}



    //         <div>
    //     {images && images.length > 0 ? (
    //       <>
    //         <ImageList>
    //           {images.slice(0, loadMore).map(image => (
    //             <ImageGalleryItem key={image.id}>
    //               <Image src={image.webformatURL} alt={image.tags} />
    //             </ImageGalleryItem>
    //           ))}
    //         </ImageList>
    //         {loadMore < images.length && (
    //           <button onClick={this.handleLoadMore}>Load more</button>
    //         )}
    //       </>
    //     ) : (
    //       <p>No images found.</p>
    //     )}
    //   </div>


         