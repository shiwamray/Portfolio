import Link from 'next/link'
import Image from "next/image";

const Header=()=>{
    return(
        <div className="main">

        {/* first-section */}

            <section>
                <div className="header">
                    <div className="text">
                        <h3>KRYPTO.</h3>
                    </div>
                    <div className="Link-div">
                        <Link href="#">About</Link>
                        <Link href="#">Pricing</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Bay Nifts</Link>
                    </div>
                </div>
            </section>
            
        {/* second-section */}

            <section>
                <div className="send-div">
                    <div>
                        <div className="hard-box">
                            <h1>Discover And Collect Rare NFTs</h1>
                            <p>The most secure markketplace for buying and selling crypto assets.</p>
                        </div>
                        <div className="btn">
                            <button>BUY NETS</button>
                            <button>SALE NETS</button>
                        </div>
                    </div>
                    <div>
                    <div className="new-div-img" style={{width: '450px', height: '450px', position: 'relative'}}>
                    <Image
                            alt='Mountains'
                            src='/image/Other 07.png'
                            fill
                        />
                    </div>
                    </div>
                </div>
            </section>

        {/* third-section */}

            <section>
                <div className="big-div">
                    <div className="nav-bar">
                    <h3>FETURED ON</h3>
                    <div className="small-img" style={{width: '1300px', height: '100px', position: 'relative'}}>
                        <h2>TechCrunch</h2>
                        <h2>FAsCOMPAnY</h2>
                        <h2>PIT</h2>
                        <h2>Forbes</h2>
                    </div>
                    </div>
                </div>
            </section>

        {/* forth-section */}

            <section>
                <div className="forth-box">
                    <div>
                    <div className="duble-img" style={{width: '450px', height: '450px', position: 'relative'}}>
                    <Image
                            alt='Mountains'
                            src='/image/Other 18.png'
                            fill
                        />
                    </div>
                    </div>
                    <div className="div-box">
                        <h3>ANALYTICS</h3>
                        <h1>Built-In Analytics To Track Your Nfts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorment enim nemo, voluptates facere optio quo maxime sunt temporibus?</p>
                        <button>VIEW OUR PRICING</button>
                    </div>
                </div>
            </section>

        {/* fifth-section */}

            <section>
                <div className='forth-box xyz'>
                    <div className="div-box">
                            <h3>GET OUR APP</h3>
                            <h1>Built-In Analytics To Track Your Nfts</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorm enim nemo, voluptates facered</p>
                            <button>DOWNLOAD ON IOS</button>
                    </div>
                    <div>
                        <div className="duble-img" style={{width: '450px', height: '450px', position: 'relative'}}>
                        <Image
                                alt='Mountains'
                                src='/image/Other 17.png'
                                fill
                            />
                        </div>
                    </div>
                </div>
            </section>

        {/* sixth-section */}

            <section>
                <div className="sixth-div">
                   <div>
                   <div className="div-box-text">
                        <div>
                        <h4>TESTIMONIALS</h4>
                        <h1>Read What Other Have To Say</h1>
                        </div>
                    </div>
                    <div className="very-impot-div">
                    <div className="text-img-box">
                        <div className="small-div">
                        <div className="big-img" style={{width: '120px', height: '120px', position: 'relative'}}>
                            <Image
                                alt='Mountains'
                                src='/image/Screen Shot 2022-05-09 at 10.28 (1).png'
                                fill
                            />
                        </div>
                        <h3>OLIVIA COLE</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum autem dignissimos reprehenderit nemo quidem! Voluptas, minima impedit.</p>
                        </div>
                    </div>
                    <div className="text-img-box">
                        <div className="small-div">
                        <div className="big-img" style={{width: '120px', height: '120px', position: 'relative'}}>
                            <Image
                                alt='Mountains'
                                src='/image/Screen Shot 2022-05-09 at 10.28 (2).png'
                                fill
                            />
                        </div>
                        <h3>OLIVIA COLE</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum autem dignissimos reprehenderit nemo quidem! Voluptas, minima impedit.</p>
                        </div>
                    </div>
                    <div className="text-img-box">
                        <div className="small-div">
                        <div className="big-img" style={{width: '120px', height: '120px', position: 'relative'}}>
                            <Image
                                alt='Mountains'
                                src='/image/Screen Shot 2022-05-09 at 10.28.png'
                                fill
                            />
                        </div>
                        <h3>OLIVIA COLE</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum autem dignissimos reprehenderit nemo quidem! Voluptas, minima impedit.</p>
                        </div>
                    </div>
                    </div>
                   </div>
                </div>
            </section>

        {/* seven-section */}

            <section>
                <div className="seven-section">
                    <div className="hiper-text">
                        <h4>ARE YOU READY?</h4>
                        <h1>Be A Part Of The Nwxt Big Thing</h1>
                        <button>GET STARTED</button>
                    </div>
                </div>
            </section>

        {/* eight-section */}

            <section>
                <div className="Eight-section">
                    <div>
                        <h3>KRYPTO</h3>
                    </div>
                    <div className="list-div">
                        <p>Krypto</p>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Buy NFTs</li>
                            <li>Sell NFTs</li>
                        </ul>
                    </div>
                    <div className="list-div">
                        <p>Market</p>
                        <ul>
                            <li>Browse NFTs</li>
                            <li>Buy NFTs</li>
                            <li>Sell NFTs</li>
                        </ul>
                    </div>
                    <div className="list-div">
                        <p>Contact</p>
                        <ul>
                            <li>Email</li>
                            <li>Linkedln</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Join Our Newsletter</h2>
                        <div className="low-div">
                            <p>Click Button</p>
                            <div>
                            <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Header;