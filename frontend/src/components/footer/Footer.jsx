import React from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import github from '../../assets/github1.png';
import tiktok from '../../assets/tik-tok.png'

const Footer = () => {
  return (
<footer class="bg-transparent rounded-lg shadow m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="flex flex-row gap-8 justify-between">
            <a href="" class="md:flex md:items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse hidden">
                <span class="self-center text-2xl font-semibold text-white">Thy Thy</span>
            </a>
            <ul class="grid grid-cols-8 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className='col-start-1 col-span-2'>
                    <a href="https://www.facebook.com/thy.thy.3597789?mibextid=ZbWKwL"><img src={facebook} className='w-1/3'/></a>
                </li>
                <li className='col-start-3 col-span-2'>
                    <a href="https://www.facebook.com/thy.thy.3597789?mibextid=ZbWKwL"><img src={instagram} className='w-1/3'/></a>
                </li>
                <li className='col-start-5 col-span-2'>
                    <a href="https://github.com/thythywork"><img src={github} className='w-1/3'/></a>
                </li>
                <li className='col-end-9 col-span-2'>
                    <a href="https://www.instagram.com/_double.tee_?igsh=MXN0Zm9jMGxqNzZkYw=="><img src={tiktok} className='w-1/3'/></a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
