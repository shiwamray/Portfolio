import Link from "next/link";
import Image from "next/image";

import Carasol from './Carasol';

const Header=()=>{
    return (
        <div className="main">
            {/* start------ */}
            <section>
                <div className="header">
                  

                    <div className="img" style={{marginLeft:'20px', position: 'relative'}}>
                        <Image
                            alt='Mountains'
                            src='/image/Logo.png'
                            width={50}
                            height={30}
                        />
                        </div>

                    <div className="text-box">
                        <Link href="#">Menu</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Lab</Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="nav-div">
                    <div className="box1">
                    <Image
                            alt='Mountains'
                            src='/image/Me.png'
                            width={200}
                            height={202}
                        />
                    </div>
                    <div className="box2">
                        <p>Hello I Am <span>lbrahim Memon</span></p>
                            <Image className="heay-img"
                                    alt='Mountains'
                                    src='/image/Arrow.png'
                                    width={150}
                                    height={150}
                                />
                        <div>
                        <p className="banner-title">A Designer Who</p>
                        <h1 style={{fontFamily: 'Preahvihear'}}>Judges a book by its cover ...</h1>
                        <div className="box3">
                    <Image className="secund-img"
                            alt='Mountains'
                            src='/image/Ellipse 5.png'
                            width={160}
                            height={80}
                        />
                    </div>
                        <small>Because if the cover does not impress you what else can?</small>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="midil-div">
                    <div>
                        <h1 style={{fontFamily: 'Preahvihear'}}>I'm a Software Engineer.|</h1>
                        <h5>Currently I'm a Software Engineer at Facebook</h5>
                        <p>Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. Quaerat 
                            provident nam et iste ullam qui enim expedita
                            reiciendis, consequuntur veritatis. Hic 
                            praesentium tempora autem illum qui 
                            voluptates!</p>
                            </div>
                    </div>
            </section>

            <section>
                <div className="third-div">
                    <div>
                    <h1>Work Exprience</h1>
                    {/* <div className="style-box">
                        <div className="box4">
                           <div className="box6" style={{width: '100px', height: '100px', position: 'relative'}}>
                           <Image
                            alt='Mountains'
                            src='/image/Group 2.png'
                            fill
                        />
                           </div>
                           <div className="text-div">
                            <h2>CIB on the Mobile</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur et quae a perspiciatis itaque, facilis eos autem eius distinctio?</p>
                            <button>LEARN MORE</button>
                    </div>
                           </div>
                           <div className="box4">
                           <div className="box6" style={{width: '100px', height: '100px', position: 'relative'}}>
                           <Image
                            alt='Mountains'
                            src='/image/Group 1935.png'
                            fill
                        />
                           </div>
                           <div className="text-div">
                            <h2>CIB on the Mobile</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur et quae a perspiciatis itaque, facilis eos autem eius distinctio?</p>
                            <button>LEARN MORE</button>
                    </div>
                           </div>
                           <div className="box4">
                           <div className="box6" style={{width: '100px', height: '100px', position: 'relative'}}>
                           <Image
                            alt='Mountains'
                            src='/image/Group 1938.png'
                            fill
                        />
                            </div>
                           <div className="text-div">
                            <h2>CIB on the Mobile</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur et quae a perspiciatis itaque, facilis eos autem eius distinctio?</p>
                            <button>LEARN MORE</button>
                    </div>
                           </div>
                           <div className="box4">
                           <div className="box6"  style={{width: '100px', height: '100px', position: 'relative'}}>
                           <Image
                            alt='Mountains'
                            src='/image/icons.png'
                            fill
                        />
                           </div>
                           <div className="text-div">
                            <h2>CIB on the Mobile</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil tenetur et quae a perspiciatis itaque, facilis eos autem eius distinctio?</p>
                            <button>LEARN MORE</button>
                    </div>
                           </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section id="project-portfolio">
                <Carasol />
            </section>

            <section>
                <div className="fifth-div">
                    <div className="box-div">
                        <small>Featured Project</small>
                        <h2>Example Project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Quaerat, nisi nihil, magni neque,
                              nulla assumenda sunt sapiente harum
                               molestias quia aut quis perferendis 
                               natus mollitia! Vitae vel minima fugit
                                beatae quas. Perspiciatis quibusdam
                                 ipsam, corporis unde tempore.</p>
                    </div>
                    <div className="small-img" style={{width: '400px', height: '270px', position: 'relative'}}>
                    <Image
                            alt='Mountains'
                            src='/image/portfolio.png'
                            fill
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="hiper-div">
                <div className="div-imgs" style={{width: '400px', height: '270px', position: 'relative'}}>
                    <Image
                            alt='Mountains'
                            src='/image/Portfolio.png'
                            fill
                        />
                </div>
        
            <div className="box-div box11">
                        <small>Featured Project</small>
                        <h2>Example Project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing
                             elit. Quaerat, nisi nihil, magni neque,
                              nulla assumenda sunt sapiente harum
                               molestias quia aut quis perferendis 
                               natus mollitia! Vitae vel minima fugit
                                beatae quas. Perspiciatis quibusdam
                                 ipsam, corporis unde tempore.</p>
                </div>
                </div>
            </section>

            <section className="footer-div">
                <div className="room-text">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, harum! Quisquam eius officiis placeat, hic possimus, iure magni et nulla unde consequuntur, consequatur perferendis?</p>
                <span>ibrhabmemn930@gmail.com</span>
                </div>
            </section>

            {/* end -------- */}
        </div>
    )
}

export default Header;