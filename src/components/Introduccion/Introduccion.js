import './Introduccion.css'
import {Button, Col, Container, Row} from "react-bootstrap";

export default function Introduccion() {
    return (
        <div className='introduccion p-3 p-lg-5 mt-5'>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>

                        <h1 className='pl-2 text-center'>
                            Welcome to Dynamic Form
                            <samp className='pt-2 pb-4'>that you will do everything that you want</samp>
                        </h1>

                        <h4 className='text-center pt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla tempor dui semper
                            euismod.In hendrerit elit orci, ac elementum justo porta at. Quisque ex erat, tincidunt
                            vitae mi in,
                            congue fringilla lectus. Curabitur lacinia commodo consectetur. Nunc et nulla in turpis
                            rutrum feugiat quis id nunc.
                            Maecenas varius leo a arcu imperdiet, in tempus ante dignissim. Sed sed mi nisi. Nam id
                            magna fermentum, varius magna sed, vestibulum arcu. Maecenas eu nisl mauris.
                        </h4>

                        <div className='d-flex container-actions mt-5'>
                            <div className='container-buttons'>
                                <Button className='p-3' onClick={() => console.log('Click')}>Get in touch</Button>
                                <Button className='p-3'>Get in touch</Button>
                            </div>
                            <div className='btn-start-create'>
                                <a href='#dymanic-form'>Star to create ➡️</a>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}