import 'bootstrap/dist/css/bootstrap.min.css';
import './info.css'
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Logo from './logo.svg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';



function Info(){
    return(
    <div>
      <Nav className=" m-4 brd justify-content-end">
       <Nav.Item>
         <Nav.Link className='home m-3' href="/home">خانه</Nav.Link>
       </Nav.Item>
      </Nav>
      <div className='container brd'>
      <Tab.Container id="right-tabs-example" defaultActiveKey="first">
      <Row className='flex-row-reverse'>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column align-content-end">
            <Nav.Item>
              <Nav.Link eventKey="first">جدول اطلاعات</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">لیست اطلاعات</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Table className=' brd' striped bordered hover  >
                 <thead>
                   <tr>
                     <th>#</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>1</td>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                   </tr>
                   <tr>
                     <td>2</td>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                   </tr>
                   <tr>
                     <td>3</td>
                     <td colSpan={2}>Larry the Bird</td>
                     <td>@twitter</td>
                   </tr>
                 </tbody>
               </Table>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className='d-flex justify-content-between'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Logo} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
 
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Logo}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Logo}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card>
          </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </div>
    </div>
  );
}

export default Info