import './App.css';
import { Row, Col, Table } from 'react-bootstrap';

function App() {
    return (
        <div>
            <p>here we go</p>
            <Row>
                <Col>
                    <Table responsive hover>
                        <tbody>
                            <tr className="unread">
                                <td width="10%">
                                    <h6 className="mb-1">Forgot Password</h6>
                                </td>
                                <td width="10%">
                                    <p className="m-0">ticketId: 123</p>
                                </td>
                                <td width="15%">
                                    <p className="m-0">userId: 1000000001</p>
                                </td>
                                <td width="40%">
                                    <p className="m-0">contact: I think this is a problem that I can't unregister my account. Do you have this service, because I do want to delete all my content. Thank you!</p>
                                </td>
                                <td width="15%">
                                    <h6 className="text-muted">
                                        11 MAY 12:56
                                    </h6>
                                </td>
                                <td width="10%">
                                    See Detail
                                </td>
                            </tr>
                            <tr className="unread">
                                <td>
                                    <h6 className="mb-1">Forgot Password</h6>
                                </td>
                                <td>
                                    <p className="m-0">ticketId: 456</p>
                                </td>
                                <td>
                                    <p className="m-0">userId: 1000000002</p>
                                </td>
                                <td>
                                    <p className="m-0">contact: I think this is a problem that I can't unregister my account.</p>
                                </td>
                                <td>
                                    <h6 className="text-muted">
                                        11 MAY 12:56
                                    </h6>
                                </td>
                                <td>
                                    See Detail
                                </td>
                            </tr>
                            <tr className="unread">
                                <td>
                                    <h6 className="mb-1">Forgot Password</h6>
                                </td>
                                <td>
                                    <p className="m-0">ticketId: 789</p>
                                </td>
                                <td>
                                    <p className="m-0">userId: 1000000003</p>
                                </td>
                                <td>
                                    <p className="m-0">contact: I think so.</p>
                                </td>
                                <td>
                                    <h6 className="text-muted">
                                        11 MAY 12:56
                                    </h6>
                                </td>
                                <td>
                                    See Detail
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}

export default App;
