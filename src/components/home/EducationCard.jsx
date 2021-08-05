import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const EducationCard = ({data}) => {
    return ( 
        <Col lg="3">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3 img "  width="150" height="150" src={data.collegelogo} alt=""/>
                <div className="lead size1" id="thick">
                    {data.name}
                </div>
                <p className="size2" >
                    {data.degree}
                    <br/>
                    <em className="size3">{data.date}</em>
                </p>
            </div>
        </Col>
     );
}
 
export default EducationCard;