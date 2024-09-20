import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Modal, Form } from 'react-bootstrap';
import ItemCard from '../layout/ItemCard';
import { fetchItems, createItem } from '../services/ItemService';  // Assuming you have a service for item handling

export default function Menu() {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(false);
    const [newItem, setNewItem] = useState({
      itemName: '',
      itemCat: '',
      itemSize: '',
      itemPrice: '',
      itemDescription: '',
      itemImageUrl: ''
    });
  
    useEffect(() => {
      // Fetch items from the API using the fetchItems service
      fetchItems()
        .then(response => setItems(response)) // Ensure response is the array of items
        .catch(error => console.error('Error fetching items:', error));
    }, []);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    const handleChange = (e) => {
      setNewItem({ ...newItem, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Call createItem function from ItemService
      createItem(newItem)
        .then(() => {
          setItems([...items, newItem]);
          handleClose();
        })
        .catch(error => console.error('Error creating item:', error));
    };
  
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Tia's Delights</h1>
          <Row>
            {items.length > 0 ? (
              items.map((item, index) => (
                <Col key={index} md={4} className="mb-4">
                  <ItemCard item={item} />
                </Col>
              ))
            ) : (
              <div className="text-center mt-4">
                <Button variant="primary" onClick={handleShow}>+</Button>
              </div>
            )}
          </Row>
        </div>
  
        {/* Modal for creating a new item */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="itemName">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="itemName"
                  value={newItem.itemName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="itemCat">
                <Form.Label>Item Category</Form.Label>
                <Form.Control
                  type="text"
                  name="itemCat"
                  value={newItem.itemCat}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="itemSize">
                <Form.Label>Item Size</Form.Label>
                <Form.Control
                  type="text"
                  name="itemSize"
                  value={newItem.itemSize}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="itemPrice">
                <Form.Label>Item Price</Form.Label>
                <Form.Control
                  type="number"
                  name="itemPrice"
                  value={newItem.itemPrice}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="itemDescription">
                <Form.Label>Item Description</Form.Label>
                <Form.Control
                  type="text"
                  name="itemDescription"
                  value={newItem.itemDescription}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="itemImageUrl">
                <Form.Label>Item Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="itemImageUrl"
                  value={newItem.itemImageUrl}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }