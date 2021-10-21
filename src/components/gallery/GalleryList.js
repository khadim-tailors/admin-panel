import React from 'react'

const galleryItems = [
    {
        thumbImage: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
        name: 'Frock',
        totallImages: 15
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1617288991572-9e8755a88209?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Lahanga',
        totallImages: 10
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1610276347467-2f3a6053d297?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
        name: 'Bridal',
        totallImages: 15
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80',
        name: 'Men Suit',
        totallImages: 5
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Laddies Suit',
        totallImages: 25
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        name: 'Men Shirt',
        totallImages: 12
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80',
        name: 'Shirt Paint',
        totallImages: 12
    },
    {
        thumbImage: 'https://images.unsplash.com/photo-1624378441287-7cd7d7aac84f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80',
        name: 'Jeans',
        totallImages: 5
    },
]

function GalleryList() {
    return <div className="galleryContainer">
        <div className="row gx-3 gy-3"> 
            {
                galleryItems.map(item => {
                    return  <div className="col-4 col-lg-3">
                        <div className="galleryCard">
                            <div className="__image">
                                <img src={item.thumbImage} alt="" />
                            </div>
                            <div className="__heading">
                                <h5>{item.name}</h5>
                                <h5>({item.totallImages})</h5>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
            
    </div>
}

export default GalleryList
