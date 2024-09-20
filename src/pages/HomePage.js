import React from 'react'
import CarouselPage from '../CarouselPage'
import Footer from '../layout/Footer'

export default function HomePage() {
    //use axios to get info from databases using this link to http://localhost:8080/customer get customer info
  return (
    <div>
            <h1>Welcome to the Home Page</h1>
            {/* Include the carousel here */}
            <CarouselPage />

            {/* History */}
            {/* Restruant Experience */}
            {/* How Get to Restraunt */}
            {/* Footer */}

    </div>
  )
}
