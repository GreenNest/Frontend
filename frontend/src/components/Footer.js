import React from 'react';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import playstore from '../assets/playstore.svg';

function Footer() {
    return (
        <footer class="bg-maingreen sm:h-64 auto pl-2 flex justify-center items-center flex-col w-full">
            <div class="grid sm:grid-cols-footer gap-x-4 w-full justify-center grid-cols-2 text-white">
                <div class="flex flex-col sm:ml-0 ml-8 gap-2">
                    <div class="text-xl font-bold ">Green Nest</div>
                    <div className="flex flex-col text-sm">
                        <div class="">Sewwandi Plant Nursery</div>
                        
                        <div>Kongahagedara</div>
                        <div> Kuliyapitiya</div>
                        <div>+94 776544342</div>
                        <div>greennest06@gmailcom</div>
                    </div>
                </div>
                <div class="flex flex-col sm:ml-0 ml-8 gap-2">
                    <div class="font-bold text-xl">Support</div>
                    <div className="flex flex-col gap-1 text-base">
                        <div>Contact</div>
                        <div>FAQs</div>
                        <div>Terms</div>
                        <div>Privacy</div>
                    </div>
                </div>
                <div class="flex flex-col sm:ml-0 ml-8 gap-2">
                   <div class="text-xl font-bold">The GreenNest App</div>
                   <div class="text-base">Order your favourite with your mobile</div>
                   <img class="w-10 max-h-6 mt-2" src={playstore} alt=""/>
                </div>
                <div class="flex flex-col sm:ml-0 ml-8 gap-2">
                   <div class="text-xl font-bold">Follow Us</div>
                   <div class="flex flex-row gap-4">
                       <img src={facebook} alt="" class="w-5 max-h-5"/>
                       <img src={instagram} alt="" class="w-5 max-h-5"/>
                   </div>
                   
                </div>
            </div>
            <div class="text-xs mt-8">Copyright @2021. All Rights Reserved.</div>
        </footer>
    )
}

export default Footer
