import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAllComments, addComments } from "../redux/actions/index";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import Loader from 'react-loader-spinner'
import "./GetInTouch.css";


const GetInTouch = () => {
  const comments = useSelector((state) => state.comments.slice(0, 7));

  const dispatch = useDispatch();
  const history = useHistory()
  console.log(comments);
  const [form, setForm] = useState({
    email: "",
    comment: "",
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addComments(form));
    setForm({
      email: "",
      comments: ""
    })
  };

  const Loading = () => {
    return(
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs 
      />
    )
  }

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);
  console.log(comments.length);
  return (
    <Container fluid>
      <Row className="boss">
        <Col className="box-left">
          <p className="text-touch"> Find me On</p>
          <Row className="icon-holder">
            <a
              style={{ color: "#0077d9", margin: "0px 10px" }}
              target="blank"
              href="https://www.github.com/idhoramgg"
            >
              <i class="fab fa-github fa-9x"></i>
            </a>
            <a
              style={{ color: "#0077d9", margin: "0px 10px" }}
              target="blank"
              href="https://www.instagram.com/idhoramgg"
            >
              <i class="fab fa-instagram fa-9x"></i>
            </a>
            <a
              style={{ color: "#0077d9", margin: "0px 10px" }}
              target="blank"
              href="https://www.facebook.com/idhoram"
            >
              <i class="fab fa-facebook fa-9x"></i>
            </a>
          </Row>
          <Row className="form-holder">
            <Col>
            <p className="text-touch"> Or Drop you're message below !</p>
            </Col>
            <Col>
           
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="comments"
                  value={form.comments}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button type="submit" className="mb-2">
                Comments
              </Button>
            </Form> 
            </Col>
          </Row>
        </Col>

        <Col className="box-right">
          <Row className="comment-section">
            {comments.length === 0 ? <Loading/> : comments.map((item) => {
              return (
                <Row className="card-comment">
                  <img
                    src={item.avatar}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <Col>
                    <p className="text-emailUser">{item.email}</p>
                    <p className="text-commentUser">{item.comments}</p>
                  </Col>
                </Row>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default GetInTouch;
