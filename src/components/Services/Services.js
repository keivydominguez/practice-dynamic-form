import './Services.css'
import imgCoursel1 from '../../assets/img/hbo.jpeg'
import imgCoursel2 from '../../assets/img/prime.jpeg'
import imgCoursel3 from '../../assets/img/netflix.jpeg'
import {Col, Container, Row} from "react-bootstrap";
import CardServices from "./CardServices";

export default function Services() {
    const servicesArray = [
        {
            title: "Wordpress Course 0",
            subtitle: "Aliquam lobortis mollis ipsum, eget elementum ex feugiat vitae.",
            image: imgCoursel1,
            footer: 'Star to create ➡️',
            link: '#'
        },
        {
            title: "Wordpress Course 1",
            subtitle: "Aliquam lobortis mollis ipsum, eget elementum ex feugiat vitae.",
            image: imgCoursel2,
            footer: 'Star to create ➡️',
            link: '#'
        },
        {
            title: "Wordpress Course 2",
            subtitle: "Aliquam lobortis mollis ipsum, eget elementum ex feugiat vitae.",
            image: imgCoursel3,
            footer: 'Star to create ➡️',
            link: '#'
        }
    ]

    return (
        <div className="services p-4 mt-5">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h2 className='text-center'>Services</h2>
                        <h4 className='pb-3 text-center'>Cras at quam tempor, convallis dui sit amet, rhoncus dui. Donec
                            eget nibh sapien. Suspendisse potenti. Sed non suscipit massa, ut lacinia neque.
                            Pellentesque porta velit sapien, eget condimentum velit rutrum vitae.
                        </h4>
                        <Row xs={1} md={3} className='g-4 mt-4'>
                            {servicesArray.map((service, index) => (
                                <CardServices service={service} key={index}/>
                            ))}

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}