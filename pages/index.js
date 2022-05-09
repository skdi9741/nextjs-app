import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import ItemList from '../src/component/ItemList';
import { Dimmer, Header, Loader, Segment } from 'semantic-ui-react';
import LoaderComponent from '../src/component/LoaderComponent';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

  function getData(){
    axios.get(API_URL).then(res => {
      console.log(res.data)
      setList(res.data)
      setIsLoading(false);
    }).catch(err => {
      console.log(err)
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Head>
        <title>Home - 코코딩</title>
      </Head>
      {isLoading && (
          <div style={{padding : '300px'}}>
          <LoaderComponent />
          </div>
      )}
      { !isLoading && (
        <>
          <Header as="h3" style={{paddingTop : 40}}>베스트 상품</Header>
          <hr/>
          <ItemList list={list.slice(0,9)} />
          <Header as="h3" style={{paddingTop : 40}}>신상품</Header>
          <hr/>
          <ItemList list={list.slice(9)} />
        </>
      )}
    </div>
  )
}
