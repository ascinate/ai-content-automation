"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Circle, Quote, Star } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquareFacebookk } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';



function page() {
  return (
    <>





      {/* navbar */}
      <nav className="navbar navbar-expand-lg custom-navbar py-3">
        <div className="container">

          {/* Logo + Title */}
          <Link
            href="/"
            className="navbar-brand d-flex align-items-center text-white"
          >
            <Image
              src="/lo.png"
              alt="logo"
              width={40}
              height={20}
              className="img-fluid"
            />

            <h3 className="ms-2 mb-0">
              AI Content
            </h3>

            <h6
              className="ms-2 mb-0 fw-light"
            >
              Automation platform
            </h6>
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Items */}
          <div
            className=" navbar-collapse justify-content-end"
            id="mainNavbar"
          >

            <ul className="navbar-nav align-items-lg-center gap-lg-3">

              <li className="nav-item">
                <Link href="/" className="nav-link text-white">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/feature" className="nav-link text-white">
                  Feature
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/pricing" className="nav-link text-white">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/about" className="nav-link text-white">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/blog" className="nav-link text-white">
                  Blog
                </Link>
              </li>

              {/* Button */}
              <li className="nav-item">
                
                <button className='button'>Get Started</button>
              </li>

            </ul>

          </div>

        </div>
      </nav>








      <main>

        {/* hero */}
        <section
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M690.61 542.63a49.14 49.14 0 1 0 98.26-2.2z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M711.86 135.67L713.68 135.67L713.68 137.49L711.86 137.49z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M603.66 49.71 a45.99 45.99 0 1 0 91.98 0 a45.99 45.99 0 1 0 -91.98 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M178.88 549.62a22.77 22.77 0 1 0-24.61-38.32z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1421.85 55.97a2.88 2.88 0 1 0 5.56 1.5z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M208.61 356.67L228.52 356.67L228.52 376.58L208.61 376.58z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M365.7 439.31L371.87 439.31L371.87 490.62L365.7 490.62z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M326.24 487.2L346.55 487.2L346.55 531.5L326.24 531.5z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M1128.07 94.3L1168.24 94.3L1168.24 111.08L1128.07 111.08z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M860.54 518.76L880.9 518.76L880.9 565.63L860.54 565.63z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M1077.87 94.79L1108.34 94.79L1108.34 125.26L1077.87 125.26z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M139.47 147.5L142.89 147.5L142.89 150.92L139.47 150.92z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M766.48 4.53L776.17 4.53L776.17 59.36L766.48 59.36z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M1426.34 46.97 a2.78 2.78 0 1 0 5.56 0 a2.78 2.78 0 1 0 -5.56 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M443.63 171.93L453.85 171.93L453.85 182.15L443.63 182.15z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M447.73 93.07 a31.58 31.58 0 1 0 63.16 0 a31.58 31.58 0 1 0 -63.16 0z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M305.1 305.83L330.85 305.83L330.85 313.55L305.1 313.55z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M747.66 99.41a36.14 36.14 0 1 0-16.8 70.3z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M524.58 423.75a45.01 45.01 0 1 0 67.78-59.24z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M190.01 282.05 a14.04 14.04 0 1 0 28.08 0 a14.04 14.04 0 1 0 -28.08 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1348.1 133.83a33.61 33.61 0 1 0 27.26-61.45z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M399.9 210.66 a24.51 24.51 0 1 0 49.02 0 a24.51 24.51 0 1 0 -49.02 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M80.44 25.51L127.9 25.51L127.9 72.97L80.44 72.97z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M5.64 228.99L56.46 228.99L56.46 279.81L5.64 279.81z' fill='%23d3b714'%3e%3c/path%3e%3cpath d='M1220.45 411.24 a44.83 44.83 0 1 0 89.66 0 a44.83 44.83 0 1 0 -89.66 0z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M996.6 426.31a28.94 28.94 0 1 0-47.92 32.47z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M-26.68 189.5 a37.55 37.55 0 1 0 75.1 0 a37.55 37.55 0 1 0 -75.1 0z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M1028.24 200.28L1042.01 200.28L1042.01 214.05L1028.24 214.05z' stroke='%23e73635'%3e%3c/path%3e%3cpath d='M278.67 194.94L314.94 194.94L314.94 231.21L278.67 231.21z' stroke='%23d3b714'%3e%3c/path%3e%3cpath d='M811.95 144.1L844.51 144.1L844.51 174.76L811.95 174.76z' stroke='%23037b0b'%3e%3c/path%3e%3cpath d='M680.1 490.3a48.58 48.58 0 1 0 40.58-88.28z' fill='%23e73635'%3e%3c/path%3e%3cpath d='M663.83 406.86L719.12 406.86L719.12 451.2L663.83 451.2z' fill='%23037b0b'%3e%3c/path%3e%3cpath d='M567.29 51.44a13.43 13.43 0 1 0-7.99-25.65z' stroke='%23e73635'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px 0"
          }}
        >
          <div className="container">

            <div className="row align-items-center">

              {/* Text Column */}
              <div className="col-12 col-md-6 text-center text-md-start">

                <h2 className="colorWhite">
                  Automate Your Content
                  Creation & Posting with AI
                </h2>

                <p className="colorWhite">
                  Generate blogs, social media posts &
                  more in seconds. Automate scheduling
                  across platforms and track performance.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">

                  <button className="button">
                    Get Started
                  </button>

                  <Link
                    className="colorWhite"
                    href="/Features"
                  >
                    See it in action
                  </Link>

                </div>

              </div>

              {/* Image Column */}
              <div className="col-12 col-md-6 mt-4 mt-md-0 text-center">

                <Image
                  src="/dashboard.png"
                  alt="dashboard"
                  width={800}
                  height={400}
                  className="img-fluid heroImage"
                />

              </div>

            </div>

          </div>

        </section>





        {/* Why Choose Our AI */}
        <section className="mt-5">
          <div className="container">

            <h2 className="m-auto text-center themeColor">
              Why Choose Our AI Content Automation Platform?
            </h2>

            <div className="row g-3 mt-4 text-center">
              {/* col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="card cardStyle1" style={{ width: "18rem" }}  >
                  <figure style={{ position: "relative", width: "100%", height: "63px" }}>
                    <Image
                      src="/1st.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>
                  <div className="card-body">
                    <h6 className='themeColor'>Al-Powered Content Creation</h6>
                    <p className="card-text  " style={{ fontSize: "14px" }} >
                      Generate high-quality blogs, captions, and
                      emails in seconds using advanced A.
                    </p>
                  </div>
                </div>
              </div>

              {/* col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="card cardStyle1" style={{ width: "18rem" }}  >
                  <figure style={{ position: "relative", width: "100%", height: "66px" }}>
                    <Image
                      src="/2nd.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>
                  <div className="card-body">
                    <h6 className='themeColor'>1-Click Multi-Posting & Scheduling</h6>
                    <p className="card-text  " style={{ fontSize: "14px" }} >
                      Schedule content across platforms like
                      Instagram, Linkedin, Twitter, and Facebook
                      with a single click.
                    </p>
                  </div>
                </div>
              </div>

              {/* col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="card cardStyle1" style={{ width: "18rem" }}  >
                  <figure style={{ position: "relative", width: "100%", height: "70px" }}>
                    <Image
                      src="/3rd.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>
                  <div className="card-body">
                    <h6 className='themeColor'>Track Performance & Analytics</h6>
                    <p className="card-text  " style={{ fontSize: "14px" }} >
                      Monitor engagement, analyze traffic, and
                      gain insights to improve your content
                      strategy.
                    </p>
                  </div>
                </div>
              </div>





            </div>
          </div>
        </section>






        {/* See How It Works */}
        <section className="mt-5">
          <div className="container">
            <h2 className="m-auto text-center themeColor">See How It Works </h2>
            <div className="row g-3 mt-4 text-center">

              {/* Col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="card cardStyle2" style={{ width: "18rem" }}>
                  <div className="style2badge">
                    <p style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>    1  </p>
                  </div>
                  <div className="card-body pt-4 pb-2">
                    <h5 className="themeColor"> Generate AI Content </h5>
                    <p className="card-text" style={{ fontSize: "14px" }} >  Select content types, bios, captions, and   emails in seconds using advanced AI. </p>
                  </div>
                  <figure
                    style={{
                      position: "relative", width: "100%", height: "140px", overflow: "hidden", marginBottom: "10px",
                      padding: 18
                    }}
                  >
                    <Image
                      src="/card1.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>

                </div>

              </div>


              {/* Col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">

                <div className="card cardStyle2" style={{ width: "18rem" }}>

                  <div className="style2badge">
                    <p style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                      2
                    </p>
                  </div>

                  <div className="card-body pt-4 pb-2">

                    <h5 className="themeColor">
                      Auto-Post to Social Media
                    </h5>

                    <p
                      className="card-text"
                      style={{ fontSize: "14px" }}
                    >
                      Schedule content across platforms like
                      Instagram, Linkedin, Twitter, and Facebook.
                    </p>
                  </div>

                  <figure
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "140px",
                      overflow: "hidden",
                      marginBottom: "10px",
                      padding: 18
                    }}
                  >
                    <Image
                      src="/card2.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>

                </div>

              </div>


              {/* Col */}
              <div className="col-12 col-md-4 d-flex justify-content-center">

                <div className="card cardStyle2" style={{ width: "18rem" }}>

                  <div className="style2badge">
                    <p style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
                      3
                    </p>
                  </div>

                  <div className="card-body pt-4 pb-2">

                    <h5 className="themeColor">
                      Track Your Performance
                    </h5>

                    <p
                      className="card-text"
                      style={{ fontSize: "14px" }}
                    >
                      Monitor engagement, analyze traffic, and
                      gain insights to improve your content
                    </p>

                  </div>

                  <figure
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "140px",
                      overflow: "hidden",
                      marginBottom: "10px",
                      padding: 18
                    }}
                  >
                    <Image
                      src="/card3.png"
                      alt="feature image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </figure>

                </div>

              </div>

              <div className='text-center mb-5'>
                <h3 className='themeColor'>Loved by 10,000+ Businesses & Content Creators</h3>
                <div className="d-flex align-items-center justify-content-center gap-1">

                  <Star size={18} fill="#FFD700" color="#FFD700" />
                  <Star size={18} fill="#FFD700" color="#FFD700" />
                  <Star size={18} fill="#FFD700" color="#FFD700" />
                  <Star size={18} fill="#FFD700" color="#FFD700" />
                  <Star size={18} fill="#FFD700" color="#FFD700" />

                  <p className="mb-0 ms-2">4.8/5</p>

                </div>

              </div>

            </div>
          </div>
        </section >






        {/* testimonials */}
        <section className="mt-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1348%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(48%2c 100%2c 191%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c42 C 48%2c52 144%2c92.4 240%2c92 C 336%2c91.6 384%2c42.2 480%2c40 C 576%2c37.8 624%2c85 720%2c81 C 816%2c77 864%2c23.4 960%2c20 C 1056%2c16.6 1104%2c63.8 1200%2c64 C 1296%2c64.2 1392%2c29.6 1440%2c21L1440 560L0 560z' fill='rgba(67%2c 117%2c 204%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c215 C 16%2c199.8 48%2c144.8 80%2c139 C 112%2c133.2 128%2c183.6 160%2c186 C 192%2c188.4 208%2c148.8 240%2c151 C 272%2c153.2 288%2c199.4 320%2c197 C 352%2c194.6 368%2c141.6 400%2c139 C 432%2c136.4 448%2c182 480%2c184 C 512%2c186 528%2c143.6 560%2c149 C 592%2c154.4 608%2c208.4 640%2c211 C 672%2c213.6 688%2c170.4 720%2c162 C 752%2c153.6 768%2c169.6 800%2c169 C 832%2c168.4 848%2c149.2 880%2c159 C 912%2c168.8 928%2c221.6 960%2c218 C 992%2c214.4 1008%2c150.6 1040%2c141 C 1072%2c131.4 1088%2c170.8 1120%2c170 C 1152%2c169.2 1168%2c135.8 1200%2c137 C 1232%2c138.2 1248%2c176.8 1280%2c176 C 1312%2c175.2 1328%2c128.4 1360%2c133 C 1392%2c137.6 1424%2c185.8 1440%2c199L1440 560L0 560z' fill='rgba(67%2c 117%2c 204%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c262 C 96%2c273.2 288%2c316.2 480%2c318 C 672%2c319.8 768%2c272.4 960%2c271 C 1152%2c269.6 1344%2c303 1440%2c311L1440 560L0 560z' fill='rgba(83%2c 129%2c 209%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c442 C 57.6%2c428.4 172.8%2c375.6 288%2c374 C 403.2%2c372.4 460.8%2c436.6 576%2c434 C 691.2%2c431.4 748.8%2c364.6 864%2c361 C 979.2%2c357.4 1036.8%2c420.8 1152%2c416 C 1267.2%2c411.2 1382.4%2c352.8 1440%2c337L1440 560L0 560z' fill='rgba(117%2c 157%2c 228%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c518 C 96%2c515 288%2c500.2 480%2c503 C 672%2c505.8 768%2c534.6 960%2c532 C 1152%2c529.4 1344%2c498.4 1440%2c490L1440 560L0 560z' fill='rgba(144%2c 177%2c 240%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1348'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`

          }}

        >
          <div className="container">
            <div className="row g-5 pt-5 pb-5 align-items-center">

              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className='testimonials1'>
                  <div className='d-flex align-items-center mb-2'>
                    <Circle fill='#B1C4ED' color='#B1C4ED' />
                    <Circle fill='#B1C4ED' color='#B1C4ED' />
                  </div>
                  <div className='d-flex align-items-center gap-3'>
                    <figure
                      style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                      <Image
                        src="/dp.png"
                        alt="feature image"
                        fill
                        style={{
                          objectFit: "cover"
                        }}
                      />
                    </figure>
                    <p style={{ fontSize: '16px' }}>This platform beare reuolutionized our content
                      meketing. Hiihatto fiau clfick, are aer jnin quailty
                      Ung adees redial inedia grtonus ouet reports.
                      Itn a ganie thanger for product ility.</p>
                  </div>


                  <div className="d-flex justify-content-between  gap-1">


                    <div className="d-flex align-items-center  gap-1">
                      <Star size={18} fill="#FFD700" color="#FFD700" />
                      <Star size={18} fill="#FFD700" color="#FFD700" />
                      <Star size={18} fill="#FFD700" color="#FFD700" />
                      <Star size={18} fill="#FFD700" color="#FFD700" />
                      <Star size={18} fill="#FFD700" color="#FFD700" />

                      <p className="mb-0 ms-2" style={{ fontSize: '14px', fontWeight: 500 }}>Sarah kappor . Agency Owner</p>
                    </div>


                    <Quote
                      size={40}
                      fill="#90B1F0"
                      color="#90B1F0"
                    />



                  </div>


                </div>


              </div>


              <div className="col-12 col-md-6 justify-content-center">
                <h4 style={{ color: '#fff' }}>Get Started for Free Today!</h4>
                <p style={{ color: '#fff' }}>Join thousande of businesses automating their content marketing
                  with an powered loots.</p>
                <button className='button'>Get Started</button>
              </div>

            </div>
          </div>

        </section>

      </main>




      <footer className="footerStyle p-5">

        <div className="container">

          <div className="row gy-4">

            {/* Column 1 — Logo + Description */}
            <div className="col-12 col-md-3">

              <div className="d-flex align-items-center mb-2">

                <Image
                  src="/lo.png"
                  alt="logo"
                  width={35}
                  height={35}
                />

                <h5 className="ms-2 mb-0 fw-semibold">
                  AI Content Automation
                </h5>

              </div>

              <p className="footerText">
                AI Content Automation Platform by generating
                content, scheduling posts, and tracking results.
              </p>

            </div>

            {/* Product */}
            <div className="col-6 col-md-2">

              <h6 className="footerHeading">
                Product
              </h6>

              <ul className="list-unstyled footerLinks">

                <li>
                  <Link className='colorWhite' href="/features">Features</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/pricing">Pricing</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/integrations">Integrations</Link>
                </li>

              </ul>

            </div>

            {/* Features */}
            <div className="col-6 col-md-2">

              <h6 className="footerHeading">
                Features
              </h6>

              <ul className="list-unstyled footerLinks">

                <li>
                  <Link className='colorWhite' href="/automation">Automation</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/analytics">Analytics</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/scheduling">Scheduling</Link>
                </li>

              </ul>

            </div>

            {/* Company */}
            <div className="col-6 col-md-2">

              <h6 className="footerHeading">
                Company
              </h6>

              <ul className="list-unstyled footerLinks">

                <li>
                  <Link className='colorWhite' href="/about">About</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/careers">Careers</Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/contact">Contact</Link>
                </li>

              </ul>

            </div>

            {/* Resources */}
            <div className="col-6 col-md-2">

              <h6 className="footerHeading">
                Resources
              </h6>

              <ul className="list-unstyled footerLinks">

                <li>
                  <Link className='colorWhite' href="/help-center">
                    Help Center
                  </Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/blog">
                    Blog
                  </Link>
                </li>

                <li>
                  <Link className='colorWhite' href="/tutorials">
                    Tutorials
                  </Link>
                </li>

              </ul>

            </div>

            {/* Social Icons */}
            <div className="col-12 col-md-1 text-md-end">

              <div className="d-flex gap-2 justify-content-md-end mt-3 mt-md-0">

                <Link
                  className='colorWhite' href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} color="#fff" />
                </Link>

                <Link
                  className='colorWhite' href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook size={30} color="#fff" />
                </Link>

                <Link
                  className='colorWhite' href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={30} color="#fff" />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </footer>


    </>
  )
}

export default page