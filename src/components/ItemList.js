import React from 'react'
import { Row,Col,Card,Image} from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
function ItemList({itemsData}) {
    return(
        <Row>
            {
                itemsData.length >=1 ?(itemsData.map((item)=>{
                    return(
                        <Col sm="12" className="mb-3">
                        <Zoom>
                            <Card key={item.id} className='d-flex flex-row' style={{backgroundColor:'#F8F8F8'}}>
                                <Image className='img-item' variant="top" src={item.imgUrl} />
                                <Card.Body>
                                    <Card.Title className='py-2 d-flex justify-content-between'>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price}</div>
                                    </Card.Title>
                                    <Card.Text>
                                        <div className='item-description'> {item.description}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Zoom>
                        </Col>
                    )
                })):<h3 className='text-center'> لا يوجد بيانات</h3>
            }
        </Row>
    )
}
export default ItemList