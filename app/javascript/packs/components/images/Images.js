import React, {Component} from 'react'

export default class Images extends Component {

  chooseImage = () => {
    const imgurImages = [
      "https://i.imgur.com/aefq49k.jpg",
      "https://i.imgur.com/QtGk2Qf.jpg",
      "https://i.imgur.com/XSsWdRG.jpg",
      "https://i.imgur.com/uG8nX8u.jpg",
      "https://i.imgur.com/nJvy0ul.jpg",
      "https://i.imgur.com/sXoWuw9.jpg",
      "https://i.imgur.com/Hkrsv1z.jpg",
      "https://i.imgur.com/GGkq0oH.jpg",
      "https://i.imgur.com/lcdZS19.jpg",
      "https://i.imgur.com/XcsI06o.jpg",
      "https://i.imgur.com/GrqsxqH.jpg",
      "https://i.imgur.com/V9lafg2.jpg",
      "https://i.imgur.com/7kARoU6.jpg",
      "https://i.imgur.com/7TY3uvX.jpg",
      "https://i.imgur.com/yHU9UHY.jpg",
      "https://i.imgur.com/ui64hsg.jpg",
      "https://i.imgur.com/4k0BnHg.jpg",
      "https://i.imgur.com/j318yJv.jpg",
      "https://i.imgur.com/1wQJylr.jpg",
      "https://i.imgur.com/jm02GO3.jpg",
      "https://i.imgur.com/cx2OD0B.jpg",
      "https://i.imgur.com/54GiwHN.jpg",

    ]
    const random = Math.floor(Math.random() * imgurImages.length);
    return imgurImages[random]
  }

  render() {

    return (
          <div className="img-responsive embed-responsive embed-responsive-4by3">
            <img className ="embed-responsive-item" src={this.chooseImage()} />
          </div>
    )
  }
}
