import Container from 'react-bootstrap/Container';
import axios from 'axios';
import React,  {useEffect, useState} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function ScheStudent() {
  const[session,setSession] =useState([]);
  // const []
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/session/').then(response => {
          setSession(response.data)
        }).catch(error =>{
            console.error(error)
        })
    },[])
  return (
  <div>

    <Row className='pt-3'>
      <Col><Card><CardText className="text-center" >THỨ HAI</CardText></Card></Col>
      <Col><Card><CardText className="text-center">THỨ BA</CardText></Card></Col>
      <Col><Card><CardText className="text-center">THỨ TƯ</CardText></Card></Col>
      <Col><Card><CardText className="text-center">THỨ NĂM</CardText></Card></Col>
      <Col><Card><CardText className="text-center">THỨ SÁU</CardText></Card></Col>
      <Col><Card><CardText className="text-center">THỨ BẢY</CardText></Card></Col>
      <Col><Card><CardText className="text-center">CHỦ NHẬT</CardText></Card></Col>
    </Row>
    <Row className='py-3'>
      {session.map(item =>{
        if(item.session ==1){
          return(<Col key={item.id} >
            <Card body >
              <CardTitle>CA SÁNG</CardTitle>
              <CardText>Đăng ký học ca sáng</CardText>
              <Button>Đăng ký</Button>
            </Card>
          </Col>)
        }
        return ''
      })}
      
    </Row>
    <Row className='py-3'>
      {session.map(item =>{
        if(item.session ==1){
          return(<Col key={item.id} >
            <Card body >
              <CardTitle>CA CHIEU</CardTitle>
              <CardText>Đăng ký học ca chieu</CardText>
              <Button>Đăng ký</Button>
            </Card>
          </Col>)
        }
        return ''
      })}
      
    </Row>
    <Row className='py-3'>
      {session.map(item =>{
        if(item.session ==1){
          return(<Col key={item.id} >
            <Card body >
              <CardTitle>CA TOI</CardTitle>
              <CardText>Đăng ký học ca toi</CardText>
              <Button>Đăng ký</Button>
            </Card>
          </Col>)
        }
        return ''
      })}
      
    </Row>
    

  </div>
  );
}

export default ScheStudent;