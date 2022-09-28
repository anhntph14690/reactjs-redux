import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { read } from '../api/products'
import { IProduct } from '../models/products'
import { listProducts, readProduct } from '../redux/feature/productSlice'

type ProductEditProps = {
    onUpdate: (product: IProduct) => void
}

type FromInputs = {
    name: string,
    img: string,
    price: number
}
type EventChange = any

const Edit = (props: ProductEditProps) => {


    // const categorys = useSelector((state: any) => state.category.categorys)
    // const productx = useSelector((state: any) => state.product.product)
    // // const router = useRouter()
    // // const id = router.query.id
    // const dispatch = useDispatch<any>();
    // const { register, handleSubmit, formState: { errors }, reset } = useForm()
    // const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/hait-10/image/upload";
    // const CLOUDINARY_PRESET = "gsixsix";
    // const onAdd: SubmitHandler<any> = async (product: IProduct) => {
    //     try {
    //         product.img = url;

    //         await dispatch(updateProduct(product))
    //         alert("Thành công")
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // useEffect(() => {
    //     (async () => {
    //         const productz = await dispatch(listProducts(id))
    //         reset(productz.payload?.data)

    //         console.log("a", productz);

    //     })()


    //     dispatch(updateProduct())
    //     console.log(categorys);

    // }, [dispatch, reset])

    // let imageload = ""
    // const onSubmit: SubmitHandler<FromInputs> = async data => {
    //     // console.log(data)
    //     console.log(data.img[0]);
    //     if (data.img[0] != "h") {
    //         const file = data.img[0];
    //         const formData = new FormData();
    //         formData.append("file", file);
    //         formData.append("upload_preset", "jkbdphzy");

    //         const { data: newImage } = await axios({
    //             url: "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload",
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/x-www-formendcoded",
    //             },
    //             data: formData,
    //         })
    //         imageload = newImage.url
    //         data.img = imageload
    //         props.onUpdate(data);
    //         navigate("/")


    //     } else {
    //         navigate("/")
    //         console.log('abc')

    //     }

    // }

    return (
        <div>
            
        </div>
    )
}

export default Edit
