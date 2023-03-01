import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { EventContext } from '../Contexts/EventContext'

function Schedule() {

    function list(events) {
        if (events === undefined) {
            return (
                <ListGroup.Item className='eItem' key={"error2"}>
                    <h3>Something went wrong with the Database</h3>
                </ListGroup.Item>
            )
        } else {
            return events.map((event) => {
                return (
                    <ListGroup.Item className='eItem' key={event.eventId}>
                        <h2>
                            {event.title}
                        </h2>
                        <div className='eventTime'>
                            {event.day} at {event.time}
                        </div>
                        <br/>
                        <div className='eventDes'>
                            {event.description}
                        </div>
                        <div className='eventAdd'>
                            Location: {event.address}
                        </div>
                        {/* <Link to={`/events/${event.eventId}`} key={event.eventId} className="eLink">
                            <Button className='eventButton'>
                                <div className='eventTitle'>{event.title}</div>
                            </Button>
                        </Link> */}
                    </ListGroup.Item>
                )
            }
            )
        }
    }

return (
    <>
        <Container>
            <Row>
                <center>
                <ListGroup className="align-self-start col-12">
                    <div className='vertical-menu'>
                        <EventContext.Consumer>
                            {({ events }) => (
                                list(events)
                            )}
                        </EventContext.Consumer>
                    </div>
                </ListGroup>
                </center>
            </Row>
        </Container>
    </>
)
    }

export default Schedule