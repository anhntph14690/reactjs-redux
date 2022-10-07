import axios from 'axios';
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct } from '../models/products';
import {useDispatch } from 'react-redux'
import { addProduct, updateProduct } from '../redux/feature/productSlice';
import { read } from '../api/products';


// type ProductAddProps = {
//     name: string,
//     onAdd: (product: TypeInputs) => void
// };
type TypeInputs = {
    name: string,
    price: number,
    img: string
}
type EventChange = any

const Edit = () => {
    const dispatch = useDispatch<any>();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TypeInputs>()
    const [url, setUrl] = useState<string>('');
    const navigate = useNavigate();
    const {id} = useParams()

    useEffect(() => {
        const getOneProduct = async () => {
            const {data} = await read(id)
            // console.log(data)
            setUrl(data.img)
            reset(data)
        }
        getOneProduct()
    }, [])

    const onAdd: SubmitHandler<TypeInputs> = async (product: TypeInputs) => {
        try {
            product.img = url;
            console.log(url);
            await dispatch(updateProduct(product))
            alert("Edit Product thành công!")
            navigate("/")

        } catch (error) {
            console.log(error);

        }
    }

    const imgProduct = (event: EventChange) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jkbdphzy");

        axios({
            url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-formendcoded",
            },
            data: formData,
        }).then((res) => {
            //  reset({img: res.data.url});
            setUrl(res.data.url);
            console.log(formData);
        });
    }
    const imgField = register('img', { required: false });

    return (
        <div>
            <div className="container-xxl flex-grow-1 container-p-y">

                <div className="row">
                    <div className="col-xl">
                        <div className="card mb-4">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onAdd)}>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-fullname">Name</label>
                                        <input type="text" className="form-control" id="basic-default-fullname" placeholder="name" {...register('name', { required: true, minLength: 5 })} />
                                    </div>
                                    {Object.keys(errors).length !== 0 && (
                                        <ul className='text-red-500'>
                                            {errors.name?.type == 'required' && <li>Nhập</li>}
                                        </ul>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-fullname">Photo Product</label>
                                        {/* {console.log(url)} */}
                                        <input type="file" className="form-control" id="basic-default-fullname" {...register('img')}  {...imgField} onChange={(e) => { imgField.onChange(e); imgProduct(e) }} />
                                        {url && <img src={url} width='50px' />}
                                    </div>
                                    {Object.keys(errors).length !== 0 && (
                                        <ul className='text-red-500'>
                                            {errors.img?.type == 'required' && <li>Nhập</li>}
                                        </ul>
                                    )}

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="basic-default-email">Price</label>
                                        <div className="input-group input-group-merge">
                                            <input type="text" id="basic-default-email" className="form-control" placeholder="price" {...register('price', { required: true })} />
                                            {/* <span className="input-group-text" id="basic-default-email2">$</span> */}
                                        </div>
                                    </div>
                                    {Object.keys(errors).length !== 0 && (
                                        <ul className='text-red-500'>
                                            {errors.price?.type == 'required' && <li className='text-red-500'>Nhập</li>}
                                        </ul>
                                    )}

                                    {/* <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-message">desc</label>
                                    <textarea id="basic-default-message" className="form-control" placeholder="Hi, Do you have a moment to talk Joe?" defaultValue={""} />
                                </div> */}
                                    <button className="btn btn-primary">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
