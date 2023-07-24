import React from 'react'
import "./gallery.css"
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
    description: 'Render custom slides (such as videos)',
    renderItem: _renderVideo.bind(this)
  },
  
];

function _renderVideo(item) {
  return (
    <div>
      {
        <div className='video-wrapper'>
            <iframe
       
              src={item.embedUrl}
              frameBorder='0'
              allowFullScreen
              onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"
            >
            </iframe>
        </div>
      }
    </div>
  );
}


const Gallery = ({active}) => {
  

  return (active &&
      <ImageGallery
        items={images}
        infinite={true}
        showBullets={true}
        showFullscreenButton={true}
        showPlayButton={false}
        showThumbnails={true}
        showIndex={false}
        showNav={true}
        additionalClass="app-image-gallery"
      />
  )
}

export default Gallery