import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';


const Carasol = () => {
  return (
    <div className='caro-main-div'>
          <Carousel>
          <div className='carosel-div' style={{display:'flex',flexDirection:'row',flex:100}}>
            <div style={{display:'flex',flex:50, height:'auto'}}>
               <Image src="/image/img 1.jpg" alt="" width={400}  height={400}/>
            </div>
            <div style={{display:'flex',flex:50}}>
              <div className='king-div'>
                <div>
                <div className='prog-text'>
                    <h3>Oota</h3>
                    <h1>Empowering home chefs with virturl restaurants</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nobis architecto nisi ullam, atque ipsa necessitatibus pariatur deserunt minima nam numquam, quidem tempore quod praesentium veniam non dolores dolorem in provident? Eaque ipsum veritatis, reiciendis laudantium unde quia. Pariatur, officiis.</p>
                </div>
                <div className='smart-btn'>
                  <button>VIEW PORTFOLIO</button>
                  <button>CONTACT US</button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carosel-div' style={{display:'flex',flexDirection:'row',flex:100}}>
            <div style={{display:'flex',flex:50, height:'auto'}}>
               <Image src="/image/img 1.jpg" alt="" width={400} height={400}/>
            </div>
            <div style={{display:'flex',flex:50}}>
              <div className='king-div'>
                <div>
                <div className='prog-text'>
                    <h3>Oota</h3>
                    <h1>Empowering home chefs with virturl restaurants</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nobis architecto nisi ullam, atque ipsa necessitatibus pariatur deserunt minima nam numquam, quidem tempore quod praesentium veniam non dolores dolorem in provident? Eaque ipsum veritatis, reiciendis laudantium unde quia. Pariatur, officiis.</p>
                </div>
                <div className='smart-btn'>
                  <button>VIEW PORTFOLIO</button>
                  <button>CONTACT US</button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carosel-div' style={{display:'flex',flexDirection:'row',flex:100}}>
            <div style={{display:'flex',flex:50, height:'auto'}}>
               <Image src="/image/img 1.jpg" alt="" width={400} height={400}/>
            </div>
            <div style={{display:'flex',flex:50}}>
              <div className='king-div'>
                <div>
                <div className='prog-text'>
                    <h3>Oota</h3>
                    <h1>Empowering home chefs with virturl restaurants</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nobis architecto nisi ullam, atque ipsa necessitatibus pariatur deserunt minima nam numquam, quidem tempore quod praesentium veniam non dolores dolorem in provident? Eaque ipsum veritatis, reiciendis laudantium unde quia. Pariatur, officiis.</p>
                </div>
                <div className='smart-btn'>
                  <button>VIEW PORTFOLIO</button>
                  <button>CONTACT US</button>
                </div>
                </div>
              </div>
            </div>
          </div>
                {/* <div className='carosel-div'>
                    <div className='hard-img' style={{width : '600px' , position : 'relative'}}>
                    <img src="image/img 1.jpg" />
                    </div>
                    <div className='allText-div'>
                      <div >
                        <h2>Oota</h2>
                        <h1>Setting up Fix coding guide</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit praesentium eveniet quasi soluta deleniti!</p>
                        <button>VIEW PORTFOLIO</button>
                        <button>CONTACT US</button>
                      </div>
                    </div>
                </div>
                <div className='carosel-div'>
                    <div className='hard-img' style={{width : '600px' , height : '480px' , position : 'relative'}}>
                    <img src="image/img 1.jpg" />
                    </div>
                    <div className='allText-div'>
                      <div className='box-div'>
                      <h1>Setting up Fix coding guide</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit praesentium eveniet quasi soluta deleniti!</p>
                      <button>GET IT TOUCH</button>
                      </div>
                    </div>
                </div>
                <div className='carosel-div'>
                    <div className='hard-img' style={{width : '600px' , height : '480px' , position : 'relative'}}>
                    <img src="image/img 1.jpg" />
                    </div>
                    <div className='allText-div'>
                      <div className='box-div'>
                      <h1>Setting up Fix coding guide</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit praesentium eveniet quasi soluta deleniti!</p>
                      <button>GET IT TOUCH</button>
                      </div>
                    </div>
                </div> */}
            </Carousel>
    </div>
  )
}

export default Carasol