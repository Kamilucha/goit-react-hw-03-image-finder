import { ImageItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags, onClick }) => {
    
    return (
        <ImageItem key={id} onClick={() => {
            onClick({largeImageURL, tags})
       }}>
      <Image src={webformatURL} alt={tags} />
      </ImageItem>
 )
}