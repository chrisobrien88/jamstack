import React from "react";
import {useRouter} from 'next/router';
import Product from '../../../components/Product'

export default function Pro({products}){
    const router = useRouter();
    const {Urltitle} = router.query;
    const p = products.find(product => product.title === Urltitle);
    return (
    
    )
}


