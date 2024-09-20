import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import images from '../assets/images';

export default function ItemCard({ item }) {

    const imageSrc = images[item.itemImageUrl] || '';
    return (
      <Card style={{ width: '18rem', margin: '1rem' }}>
        <Card.Img variant="top" src={imageSrc} alt={item.itemName}  style={{
                    height: '12rem', // Adjust the height as needed
                    objectFit: 'cover' // Ensures the image covers the area without distortion
                }}/>
        <Card.Body>
          <Card.Title>{item.itemName}</Card.Title>
          <Card.Text>
            {item.itemDescription}
          </Card.Text>
          <Card.Text>
            Price: ${item.itemPrice.toFixed(2)}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }