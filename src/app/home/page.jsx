import React from 'react'
import Image from 'next/image'
import landingPagePoster from "../../../public/landingPagePoster.png";

const NavBar=()=>
{
    return (
        <nav className='mx-32 mt-10 box-content flex justify-between items-center'>
            {/* Insert final logo svg inplace of dummy logo */}
            <svg width="123" height="40" viewBox="0 0 123 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.586648 39V2.63636H7.17401V18.0305H24.0241V2.63636H30.6293V39H24.0241V23.5526H7.17401V39H0.586648ZM37.5096 39V11.7273H43.9371V39H37.5096ZM40.7411 7.85653C39.7231 7.85653 38.8472 7.51918 38.1133 6.84446C37.3794 6.15791 37.0124 5.33523 37.0124 4.37642C37.0124 3.40578 37.3794 2.58309 38.1133 1.90838C38.8472 1.22183 39.7231 0.87855 40.7411 0.87855C41.771 0.87855 42.6469 1.22183 43.369 1.90838C44.1029 2.58309 44.4698 3.40578 44.4698 4.37642C44.4698 5.33523 44.1029 6.15791 43.369 6.84446C42.6469 7.51918 41.771 7.85653 40.7411 7.85653ZM64.1653 11.7273V16.6989H48.487V11.7273H64.1653ZM52.3578 5.19318H58.7853V30.7969C58.7853 31.661 58.9155 32.3239 59.176 32.7855C59.4482 33.2353 59.8033 33.5431 60.2413 33.7088C60.6793 33.8745 61.1646 33.9574 61.6973 33.9574C62.0997 33.9574 62.4667 33.9278 62.7981 33.8686C63.1414 33.8094 63.4018 33.7562 63.5794 33.7088L64.6625 38.7337C64.3192 38.852 63.8279 38.9822 63.1887 39.1243C62.5614 39.2663 61.792 39.3492 60.8805 39.3729C59.2707 39.4202 57.8206 39.1776 56.5304 38.6449C55.2401 38.1004 54.2162 37.2599 53.4586 36.1236C52.7129 34.9872 52.3459 33.5668 52.3578 31.8622V5.19318ZM81.1442 39.5327C78.4216 39.5327 76.0838 38.9349 74.1307 37.7393C72.1894 36.5438 70.692 34.8925 69.6385 32.7855C68.5968 30.6667 68.076 28.2282 68.076 25.4702C68.076 22.7003 68.6087 20.2559 69.674 18.1371C70.7393 16.0064 72.2427 14.3492 74.1839 13.1655C76.1371 11.9699 78.4453 11.3722 81.1087 11.3722C83.3222 11.3722 85.2813 11.7805 86.9858 12.5973C88.7022 13.4022 90.0694 14.5445 91.0874 16.0241C92.1054 17.492 92.6854 19.2083 92.8274 21.1733H86.6839C86.4354 19.8594 85.8435 18.7644 84.9084 17.8885C83.9851 17.0007 82.7481 16.5568 81.1974 16.5568C79.8835 16.5568 78.7294 16.9119 77.7351 17.6222C76.7408 18.3205 75.9654 19.3267 75.4091 20.6406C74.8646 21.9545 74.5923 23.5289 74.5923 25.3636C74.5923 27.2221 74.8646 28.8201 75.4091 30.1577C75.9536 31.4834 76.7171 32.5073 77.6996 33.2294C78.6939 33.9396 79.8598 34.2947 81.1974 34.2947C82.1444 34.2947 82.9908 34.1172 83.7365 33.7621C84.4941 33.3951 85.1274 32.8684 85.6364 32.1818C86.1454 31.4953 86.4946 30.6607 86.6839 29.6783H92.8274C92.6735 31.6077 92.1054 33.3182 91.1229 34.8097C90.1404 36.2893 88.8028 37.4493 87.1101 38.2898C85.4174 39.1184 83.4287 39.5327 81.1442 39.5327ZM104.533 23.0199V39H98.1053V2.63636H104.391V16.3615H104.71C105.35 14.8227 106.338 13.6094 107.676 12.7216C109.025 11.822 110.741 11.3722 112.825 11.3722C114.719 11.3722 116.37 11.7687 117.779 12.5618C119.187 13.3549 120.276 14.5149 121.046 16.0419C121.827 17.5689 122.218 19.4332 122.218 21.6349V39H115.79V22.6293C115.79 20.7945 115.316 19.3681 114.369 18.3501C113.434 17.3203 112.12 16.8054 110.428 16.8054C109.291 16.8054 108.273 17.054 107.374 17.5511C106.486 18.0365 105.788 18.7408 105.279 19.6641C104.781 20.5874 104.533 21.706 104.533 23.0199Z" fill="#390A75"/>
            </svg>

            <main className='flex-grow flex justify-end items-center space-x-10 mr-[10%]'>
                <span className='text-black text-lg font-medium hover:cursor-pointer hover:text-primary'>Home</span>
                <span className='text-text font-medium hover:cursor-pointer hover:text-primary'>Product</span>
                <span className='text-text font-medium hover:cursor-pointer hover:text-primary'>FAQ</span>
                <span className='text-text font-medium hover:cursor-pointer hover:text-primary'>Blog</span>
                <span className='text-text font-medium hover:cursor-pointer hover:text-primary'>About us</span>
            </main>

            <section className='text space-x-2'>
                <button className='text-text font-medium p-2 hover:text-primary'>Login</button>
                <button className='text-white bg-primary p-2 rounded-xl hover:shadow-md hover:shadow-primary-dark'>Sign Up</button>
            </section>
        </nav>
    )
}

export default function page () {
  return (
    <div className=''>
        <NavBar />
        <section className='flex mr-4 mt-32 ml-32'>
            <section className='flex flex-col z-10'>
                <p className='text-[80px] leading-[90px] font-bold'>Connecting Ideas, Powering Teamwork.</p>
                <svg className='mt-5' xmlns="http://www.w3.org/2000/svg" width="487" height="34" viewBox="0 0 487 34" fill="none">
                    <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#390A75" stroke-width="8" stroke-linecap="round"/>
                </svg>
                <p className='text-lg font-medium max-w-md mt-10'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
                <aside className='flex items-center mt-10 space-x-10'>
                    <button className='text-white text-lg font-medium bg-primary py-5 px-7 rounded-full hover:shadow-sm hover:shadow-primary-dark'>Try free trial</button>
                    <button className='flex items-center space-x-3 hover:text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.16666C25.7432 1.16666 32.8334 8.25525 32.8334 17C32.8334 25.7447 25.7432 32.8333 17 32.8333C8.25527 32.8333 1.16669 25.7447 1.16669 17C1.16669 8.25525 8.25527 1.16666 17 1.16666Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16.9919C22 15.64 15.0709 11.3152 14.2849 12.0928C13.4988 12.8705 13.4233 21.0401 14.2849 21.891C15.1465 22.7449 22 18.3438 22 16.9919Z" stroke="#191A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                        <span className='text-lg font-medium'>View Demo</span>
                        </button>
                </aside>
            </section>
            <Image src={landingPagePoster} alt="Hitch Overview" />
            

        </section>

    </div>
  )
}
