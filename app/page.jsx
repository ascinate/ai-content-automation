import React from 'react'
import Image from 'next/image';
import Link from 'next/link';




function page() {
  return (
    <>
      <nav className='navbar py-4 '>
        <div className='mx-auto navbody'>
          <div className='d-flex align-items-center'>
            <Image
              src="/lo.png"
              alt="logo"
              width={40}
              height={20}
              className="img-fluid"

            />
            <h3 style={{ margin: 0 }}>AI Content</h3>
            <h4 className='mx-2' style={{ fontWeight: 100, margin: 0 }}>Autmation platfrom</h4>
          </div>


          <ul className='navBullet'>
            <li>Home</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>
              <div>
                <button className='button'>Get Started</button>
              </div>
            </li>
          </ul>
        </div>
      </nav>


      {/* hero */}
      <section
        style={{
          backgroundImage: "url('../asse/bgimage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh"
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-center w-100">
            <div className="col-6">
              <h2>Automate Your Content
                Creation & Posting with Al</h2>
              <p>Generate blogs, social media posts & more in seconds ...
                Automate scheduling across platforms. Track performance
                with easy-to-use analytics.</p>


              <div >
                <button className='button'>Get Started</button>
                <Link href="/about" style={{ marginLeft: 20 }}>See it in action</Link>
              </div>

            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <Image
                src="/dashboard.png"
                alt="dashboard"
                width={500}
                height={300}
                className="img-fluid"
                style={{ width: '100%', height: 'auto' }}
              />

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default page