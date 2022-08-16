import React from 'react'
import Image from 'next/image'
import qrImage from '../media/qr-code.jpeg'

function ModalImage() {
  return (
    <div className="image-wrapper-horizontal">
        <br />
        <Image src={qrImage}/>
        <p>BOO! You've been spooked.</p>
    </div>
  )
}

export default ModalImage