import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IProduct } from '../models/products';
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct, listProducts } from '../redux/feature/productSlice';


type Props = {
    products: IProduct[];
    onRemove: (id: string | undefined) => void
}
// type ProductList = {
//     products: IProduct[];
//     onRemove: (id: number | undefined) => void
// }
const List = (props: Props) => {

    const products = useSelector((state: any) => state.product.products)
    const dispatch = useDispatch<any>()
    useEffect(() => {
        dispatch(listProducts())
        console.log(products)
    }, [dispatch])
    // const navigate = useNavigate();

    const onRemove = (id: any) => {

        const confirm = window.confirm("Ban co chac chan muon xoa khong")
        if (confirm) {
            dispatch(removeProduct(id))
            // navigate("/")

        }
    }
    
    return (
        <div>
            <div>

                <div className="card">
                    <div className="card-header">
                        <Link to="/add">
                            <button>Add</button>
                        </Link>
                    </div>

                    <div className="table-responsive text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Photo</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {products.data?.map((item: any, index: number) => {
                                    return <tr>
                                        <td>
                                            <strong>{index + 1}</strong>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>
                                            {/* <span className="badge bg-label-danger me-1">{item.img} </span> */}
                                            <img src={item.img} alt="" width="50px" />
                                        </td>
                                        <td>
                                            <span className="badge bg-label-danger me-1">{item.price} $</span>
                                        </td>

                                        <td>
                                            <div className="dropdown">
                                                <div className="dropdown-menu">
                                                    <Link to={`/${item.id}/edit`}>
                                                        <a className="dropdown-item" id="edit" >
                                                            <i className="bx bx-edit-alt me-1" /> Edit
                                                        </a>
                                                    </Link>
                                                    <button className="dropdown-item" id="button_remove"
                                                        onClick={() => onRemove(item.id)}
                                                    >
                                                        <i className="bx bx-trash me-1" /> Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default List