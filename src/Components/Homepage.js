import { Card, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <div className="first-page">
            <div className="fprow">
                <Container>
                    <Row className="fpr1">
                        <div className="col-md-4 fpcard clock">
                            <center>
                                <img className="col-6 fpimg" src="Images/clock2.png" />
                                <br />
                                <h4 className="makeGreen">
                                    10am Sunday School
                                    <br />
                                    11am Worship
                                </h4>
                            </center>
                        </div>
                        <div className="col-md-4 fpimgMain">
                            <center>
                                <img className="col-6" src="Images/cal.png" />
                                <br />
                                <h4 className="makeGreen">
                                    Find community
                                </h4>
                            </center>
                        </div>
                        <div className="col-md-4 fpcard">
                            <center>
                                <a target="_blank" href="https://www.youtube.com/@pastordunn" className="ytLink">
                                    <img className="col-6 fpimg yt" src="Images/youtube.png" />
                                    <br />
                                    <h4 className="makeGreen">
                                        Watch now!
                                    </h4>
                                </a>
                            </center>
                        </div>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className="fpr2">
                    <center>
                        <div className="positioning1">
                            <p className="heading">
                                Get connected!
                            </p>
                        </div>
                    </center>
                </Row>
                {/* </Container> */}
                <Link to={"/kids"}>
                    <div className="fadein">
                        <img className="fphimg clock" src="Images/kids.png" />
                        <div className="text">
                            <center>
                                <h1>Kids!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youth"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youth.png" />
                        <div className="text">
                            <center>
                                <h1>Youth!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/youngadults"}>
                    <div className="fadein">
                        <img className="fphimg" src="Images/youngadults.png" />
                        <div className="text">
                            <center>
                                <h1>Young Adults!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                <Link to={"/foodpantry"}>
                    <div className="fadein">
                        <img wclassName="fphimg" src="Images/foodpantry.png" />
                        <div className="text">
                            <center>
                                <h1>Food Pantry!</h1>
                            </center>
                        </div>
                    </div>
                </Link>
                {/* <Container> */}
                <Row className="fpr4">
                    <center>
                        <div className="ytLink2">
                            <a target="_blank" href="https://www.youtube.com/@pastordunn" className="ytLink3">
                                Watch now!
                            </a>
                            <br />
                            <div className="ytLinkText">
                                We have streams every Sunday and Wednesday!
                            </div>
                        </div>
                    </center>
                </Row>
            </Container>
        </div>
    )
}
export default Homepage