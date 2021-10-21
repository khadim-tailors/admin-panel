import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Loader from '../../common/Loader';
import AlertPopup from '../../common/AlertPopup';
import Swal from "sweetalert2";

function StaticShopsList() {
    const [shops, setShops] = useState([]);
    const [loaderActive, setLoaderActive] = useState(true);

    const toggaleShop = (shop_id) =>{
        const shopIndex = shops.findIndex(shop=> shop.shop_id ===  shop_id)
        if(shopIndex !== -1){
            const tempShops = shops;
            tempShops[shopIndex].status = !tempShops[shopIndex].status;
            setShops(JSON.parse(JSON.stringify(tempShops)))
        } 
    }
    useEffect(() => {
        axios.get("https://us-central1-khadim-tailors.cloudfunctions.net/shops/fetchShops").then( res => {
            setLoaderActive(false)
            const data = res.data;
            if(data.status)
            setShops(data.result)
        }).catch(error =>{
            setLoaderActive(false)
            console.log(error)
        })
    }, [])

    const checkActive = (shop) => {
        Swal.fire({
            title: `Are you sure to ${shop.status ? 'Deactivate' : 'Activate' } this shop?`,
            showCancelButton: true,
            confirmButtonText: 'Yes',
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(shop.shop_id)
                axios.post('http://localhost:5001/khadim-tailors/us-central1/shops/toggleShop', {shop_id: shop.shop_id})
                .then(response => {
                    if(response.data.status) {
                        toggaleShop(shop.shop_id);
                       return Swal.fire('Saved!', '', 'success')
                    }
                   return Swal.fire('Something went wrong', '', 'error')
                }).catch((err) => {
                    return Swal.fire(err.message, '', 'error')
                })
            }
        })
    }

    return <div className="staticShopsList">
        { 
            loaderActive ? <Loader /> :
            <table class="table table-striped table-bordered" style={{verticalAlign: "middle"}}>
                <thead class="table-dark borderless">
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Timings</th>
                        <th>Working Days</th>
                        <th>Location</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    shops.map(shop=>(
                        <tr key={shop.shop_id}>
                            <td>{shop.shopName}</td>
                            <td>{shop.phone}</td>
                            <td><a href={`mailto:${shop.email}`}>{shop.email}</a></td>
                            <td>{shop.openAt} - {shop.closeAt}</td>
                            <td>Sun, Mon, Tue, Wed, Thu, Fri, Sat</td>
                            <td>{shop.address}, {shop.city}, {shop.zip} {shop.state}</td>
                            <td>
                                <div className="editButton w-100 d-flex justify-content-center">
                                    <i className="fas fa-edit"></i>
                                </div>
                            </td>
                            <td>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" onChange={(e) => checkActive(shop)} type="checkbox" checked={shop.status} role="switch" id={shop.shop_id} />
                                    <label class="form-check-label" for={shop.shop_id}>{shop.status ? 'Active': 'Inactive'}</label>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        }
        {/* <AlertPopup/> */}
       
    </div>
}

export default StaticShopsList
