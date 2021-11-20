import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Loader from '../../common/Loader';
import Swal from "sweetalert2";
import { Alert } from '../../common/alerts';
// import CreateShop from './CreateShop';
import EditShop from './EditShop';
import { Link } from 'react-router-dom';

function StaticShopsList() {
    const [shops, setShops] = useState([]);
    const [loaderActive, setLoaderActive] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [shopOnEditMode, setShopOnEditMode] = useState(null)

    const toggaleShop = (shop_id) =>{
        const shopIndex = shops.findIndex(shop=> shop.shop_id ===  shop_id)
        if(shopIndex !== -1){
            const tempShops = shops;
            tempShops[shopIndex].status = !tempShops[shopIndex].status;
            setShops(JSON.parse(JSON.stringify(tempShops)))
        } 
    }

    const handleEdit = (shop) =>{
        setShopOnEditMode(shop)
        handleEditShops();
    }

    const handleEditShops = () => setEditMode(!editMode)

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
                        return Alert('Saved!', 'success')
                    }
                   return Alert('Something went wrong', 'error')
                }).catch((err) => {
                    return Swal.fire(err.message, '', 'error')
                })
            }
        })
    }

    return <div className="staticShopsList">
        { 
            loaderActive ? <Loader /> :
            <table className="table table-striped table-bordered" style={{verticalAlign: "middle"}}>
                <thead className="table-dark borderless">
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Timings</th>
                        <th>Working Days</th>
                        <th>Location</th>
                        <th>Map</th>
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
                                <div className="editButton cursor-pointer w-100 d-flex justify-content-center">
                                    <i className="fas fa-map-marked-alt fz-18"></i>
                                </div>
                            </td>
                            <td>
                                <Link className="editButton cursor-pointer w-100 d-flex justify-content-center" to={"/shops/edit-shop/"+shop.shop_id}>
                                    <i className="fas fa-edit fz-18"></i>
                                </Link>
                            </td>
                            <td>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" onChange={(e) => checkActive(shop)} type="checkbox" checked={shop.status} role="switch" id={shop.shop_id} />
                                    <label className="form-check-label" htmlFor={shop.shop_id}>{shop.status ? 'Active': 'Inactive'}</label>
                                </div>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        }
    </div>
}

export default StaticShopsList
