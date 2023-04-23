import axios from 'axios';
import React,  {useEffect, useState} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function User(){
    const[data,setData] =useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/user/').then(response => {
            setData(response.data)
        })
       
        .catch(error =>{
            console.error(error)
        })
    },[])
    return(
        <div>
            <Row className='pt-3'>
            {data.map(item =>{
                if(!item.is_tutor) {

                return (<Card key={item.id} className='pt-3 py-3 mg-3 mt-3'>
                    <CardText>{item.first_name}</CardText>
                </Card>)
                }
                return ''
            })}
            </Row>
        </div>
    )
}
export default User