import React from 'react'
import Image from 'next/image'
import qrImage from '../media/qr-code.jpeg'

function ModalImage() {
  return (
    <div className="image-wrapper-horizontal">
        <br />
        <Image src={qrImage} alt='PI Planning QR Code image'/>
        <p>BOO! You&apos;ve been spooked.</p>
    </div>
  )
}

export default ModalImage