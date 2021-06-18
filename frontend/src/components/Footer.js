import React from 'react';
import google from '../assets/google.png';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import playstore from '../assets/playstore.svg';

function Footer() {
    return (
        <footer class="bg-maingreen footer h-auto pt-6 pl-6 pr-6 flex justify-center items-center flex-col w-full fixed bottom-0">
            <div class="grid grid-cols-footer gap-x-3 w-full justify-center">
                <div class="flex flex-col ">
                   <div class="text-lg font-bold text-mainyellow">Green Nest</div>
                   <div class=" text-mainyellow text-sm ">NO 22, Uyandana, Kurunegala</div>
                   <div class="text-sm  text-mainyellow ">+94 776544342</div>
                   <div class="text-sm  text-mainyellow ">greennest@gmailcom</div>
                </div>
                <div class="flex flex-col ">
                   <div class="text-lg font-bold text-mainyellow">Support</div>
                   <div class="text-sm  text-mainyellow ">Contact</div>
                   <div class="text-sm  text-mainyellow ">FAQs</div>
                   <div class="text-sm  text-mainyellow ">Terms</div>
                   <div class="text-sm  text-mainyellow ">Privacy</div>
                </div>
                <div class="flex flex-col ">
                   <div class="text-lg font-bold text-mainyellow">The GreenNest App</div>
                   <div class="text-sm  text-mainyellow ">order your favourite with your mobile</div>
                   <img src={playstore} alt="" class="w-10 max-h-6"/>
                </div>
                 <div class="flex flex-col">
                   <div class="text-lg font-bold text-mainyellow">Follow Us</div>
                   <div class="flex flex-row mt-3">
                       <img src={facebook} alt="" class="w-4 max-h-4 mr-3"/>
                       <img src={instagram} alt="" class="w-4 max-h-4"/>
                   </div>
                   
                </div>
            </div>
            <div class="text-xs mt-4">Copyright @2021. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer
