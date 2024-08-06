import { FacebookIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { Building } from "lucide-react";
import { StretchVerticalIcon } from "lucide-react";
import { Globe } from "lucide-react";


const Contact = () => {
  return (
    <div className="bg-customlue  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-around">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-around w-full">
            <div className="flex flex-col mb-8 md:mb-0 md:mr-8">
              <p className="text-xl font-bold mb-4">Socials</p>
              <ul>
                <li className="mb-2 flex gap-2"><FacebookIcon className=' text-black mb-2' />FortressLegal</li>
                <li className="mb-2 flex gap-2"> <InstagramIcon className=' text-black mb-2' />FortressLegal</li>
                <li className='mb-2 flex gap-2'><TwitterIcon className=' text-black mb-2' />Fortress_legal</li>
              </ul>
            </div>
            <div className="flex flex-col mb-8 md:mb-0 md:mr-8">
              <p className="text-xl font-bold mb-4">Locate Us</p>
              <ul>
                <li className="mb-2 flex gap-2"><Building className=' text-black mb-2' />Fortress House</li>
                <li className="mb-2 flex gap-2"><StretchVerticalIcon className=' text-black mb-2' />State RD</li>
                <li className="mb-2 flex gap-2"><Globe className=' text-black mb-2' />Nairobi, Kenya</li>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-center">
              <p className="text-xl font-bold mb-4">Leave Us A Review</p>
              <textarea className="w-full p-2 mb-4 text-black" name="" id="" cols="30" rows="5" placeholder='Type your message here...'></textarea>
              <button className="bg-customyellow text-black px-10 py-2 rounded">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
