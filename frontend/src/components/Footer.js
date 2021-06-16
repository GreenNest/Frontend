import React from 'react';
import google from '../assets/google.png';

function Footer() {
    return (
        <footer class="bg-maingreen h-x p-6 flex justify-center">
            <div class="grid grid-cols-footer gap-5 mt-5">
                <div class=" bg-white flex flex-col">
                   <div class="text-lg font-bold text-mainyellow">Green Nest</div>
                   <div class=" text-mainyellow text-sm ">NO 22, Uyandana, Kurunegala</div>
                   <div class="text-sm  text-mainyellow ">+94 776544342</div>
                   <div class="text-sm  text-mainyellow ">greennest@gmailcom</div>
                </div>
                <div class="bg-white">
                  <div class="w-1 bg-mainyellow"></div>
                </div>
                <div class="bg-white flex flex-col">
                   <div class="text-lg font-bold text-mainyellow">Support</div>
                   <div class="text-sm  text-mainyellow ">Contact</div>
                   <div class="text-sm  text-mainyellow ">FAQs</div>
                   <div class="text-sm  text-mainyellow ">Terms</div>
                   <div class="text-sm  text-mainyellow ">Privacy</div>
                </div>
                <div class="bg-white flex flex-col">
                   <img src={google} alt="" class="w-40 h-20"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer
