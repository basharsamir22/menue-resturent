import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Roll from 'react-reveal/Roll';
function Category({filterByCategory,allCategory}) {
    const onFilter=(cat)=>{
        filterByCategory(cat)
    }
    return(
        <Row className='my-2 mb-5'>
            <Col  sm="12" className="d-flex justify-content-center">
                {allCategory.length>=1 ?(allCategory.map((cat)=>{
                    return(
                    <Roll left>
                        <div key={cat.id}>
                            <button onClick={()=>onFilter(cat)} style={{border: "1px solid #b45b35"}} className='btn mx-2'>{cat}</button>
                        </div> 
                    </Roll>
                )
                })):<h4 className='px-2'>لا يوجد تصنيفات</h4>}
            </Col>
        </Row>
    )
}
export default Category