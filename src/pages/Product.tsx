import React, { useEffect, useState } from 'react'
import "../components/css.css";
import "./"
import { IProduct } from '../types/product'
import { Footer, Header } from '../components'
interface IProps { // định nghĩa kiểu dữ liệu cho props truyền vào component
    products: IProduct[], // định nghĩa kiểu dữ liệu cho mảng products 
    onRemove: (id: number) => void // định nghĩa kiểu dữ liệu cho hàm onRemove
}

const ProductPage = (props: IProps) => { // khai báo kiểu dữ liệu cho props
    const [data, setData] = useState<IProduct[]>([]) //khởi taọ state data với kiểu dữ liệu của data là mảng IProduct
    useEffect(() => {
        setData(props.products)
    }, [props])

    function removeProduct(id: number) {
        // console.log(id);
        props.onRemove(id)
    }
    return (
        <div>
            <Header />

            <>
                <div className='search'>
                    <div className='input'>
                        <input
                            type="text"
                            placeholder="Search"
                            className=" rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                        />
                    </div>
                    <div>

                        <button
                            type="submit"
                            className=" mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium"> Sign Up </span>

                            <svg
                                className="h-5 w-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <h1 className='center'>GIAN HÀNG THÚ CƯNG</h1>
                <div className="box">
                    {data.map((value, index) => {
                        return (
                            <div key={value.id} style={{ marginBottom: '40px', }}>
                                <div className="card" style={{ width: "15rem", }}>
                                    <h4 className="card-title" style={{ textAlign: 'center', marginTop: '10px' }}>{value.name}</h4>

                                    <img style={{ height: "200px", width: '200px', margin: 'auto' }} src={value.image} className="card-img-top" alt="..." />
                                    <div className="card-body">

                                        <p className="card-text price" ><span style={{ color: 'gray', fontWeight: '400' }}>{value.price}đ</span></p>
                                        <p  ><span style={{}}>{value.desc}</span></p>

                                        <a href="#" className="btn btn-danger">Buy  </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
            <Footer />

        </div>
    )
}

export default ProductPage