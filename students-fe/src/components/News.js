import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { Card, Button, CardTitle, CardText,CardImg, CardBody} from 'reactstrap';
import axios from 'axios';
import {useEffect, useState} from 'react';

function News(){
    const[data,setData] =useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/news/').then(response => {
            setData(response.data)
        })
       
        .catch(error =>{
            console.error(error)
        })
    },[])
    return (
        <div>
            <Row className='my-3 mx-3'>
            
            {data.map(item =>{if(item.id) {
                return (
                <Card className='my-3 py-3'>
                <div className="d-flex">
                  <CardImg style={{ width: 200, height: 200 }} src={item.image} alt='pic' />
                  <CardBody>
                    <CardTitle><h3>{item.title}</h3></CardTitle>
                    <CardText>{item.description}</CardText>
                    
                  </CardBody>
                </div>
              </Card>)}
})
                }
            
            </Row>
        </div>)
}
export default News