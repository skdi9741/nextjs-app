import React from 'react';
import { Button, Header, Image } from 'semantic-ui-react';
import styles from './Item.module.css'


const Item = ({item}) => {
    const {
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link,
    } = item;
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <Image src={image_link} alt={name} width={250}/>
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>${price}</strong>
                    <span className={styles.txt_info}>
                    {category ? `${category}/` : ""}
                    {product_type}
                    </span>
                    <Header as="h3">Description</Header>
                    <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
                </div>    
            </div>
            <div className={styles.buy_item}>
                <Button color="yellow" style={{float:"right"}}>구매하기</Button>
                <Button color="yellow" style={{float:"right"}}>장바구니</Button>
            </div>
        </>
    );
};
/*
api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/495/original/open-uri20171223-4-9hrto4?1514063330"
brand: "maybelline"
category: null
created_at: "2016-10-01T18:36:15.012Z"
currency: null
description: "Maybelline Face Studio Master Hi-Light Light Boosting bronzer formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    "
id: 495
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/991799d3e70b8856686979f8ff6dcfe0_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Face Studio Master Hi-Light Light Booster Bronzer"
price: "14.99"
price_sign: null
product_api_url: "https://makeup-api.herokuapp.com/api/v1/products/495.json"
product_colors: []
product_link: "https://well.ca/products/maybelline-face-studio-master_88837.html"
product_type: "bronzer"
rating: 5
tag_list: []
updated_at: "2017-12-23T21:08:50.624Z"
website_link: "https://well.ca"
*/
export default Item;