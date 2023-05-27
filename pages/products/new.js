import Layout from '@/components/Layout'
import { redirects } from '@/next.config';
import axios from 'axios';
import React, { useState } from 'react'
import {useRouter} from 'next/router'

const NewProudct = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [goToProducts , setgoToProducts] = useState(false);
    const  router = useRouter()
    async function createProduct (e) {
        e.preventDefault();
        const data = {title, description , price}
        await axios.post('/api/products' , data)
        setgoToProducts(true)
    }
    if(goToProducts) {
         router.push('/products')
    }
    return (
        <Layout>
            <form onSubmit={createProduct} >
                <h1 >New Product</h1>
                <label>Product Name</label>
                <input
                    type='text'
                    placeholder='product name'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea
                    placeholder='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Price (in USD)</label>
                <input
                    type='number'
                    placeholder='price'
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
                <button
                    className='btn-primary'
                    type='submit'
                >
                    Save
                </button>
            </form>
        </Layout>
    )
}

export default NewProudct
