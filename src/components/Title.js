import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
function Header() {
    return(
        <Row>
            <Col sm="12" className="justify-content-center text-center">
                <Fade bottom>
                    <div className='title'>قائمة الطعام</div>
                    <div className='d-flex justify-content-center'><p className='underline'></p></div>
                </Fade>
            </Col>
        </Row>
    )
}
export default Header
