import "./Footer.css"
import {Col , Row} from 'react-bootstrap'
const Footer = () =>{
    return <div className="footer">
        <Row className="dir">
            <Col lg={3} className='col'>
                <ul>
                    <li>
                    <h5>تماس بگیرید</h5>
                    </li>
                    <li>
                    <i className="fa fa-location-arrow"></i>
                    <p>تهران منطقه 22</p>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <p>091240540600</p>
                    </li>
                </ul>
            </Col>
            <Col lg={3} className='col'>
                    <ul>
                    <li>
                    <h5> پشتبانی</h5>
                    </li>
                    <li>
                    <i className="fa fa-location-arrow"></i>
                    <p>تهران منطقه 22</p>
                    </li>
                    </ul>
            </Col>
            <Col lg={3} className='col'>
            <ul>
                    <li>
                    <h5> دسترسی سریع</h5>
                    </li>
                    <li>
                    <p>درباره ما</p>
                    </li>
                    </ul>
            </Col>
        </Row>
    </div>
}
export default Footer