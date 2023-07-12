import { ImageItem, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
    return (
     <ImageItem key={id}>
  <Image src={webformatURL} alt={tags} />
</ImageItem>
 )
}