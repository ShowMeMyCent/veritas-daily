import Background  from '../assets/footer_background.jpg';
import Logo from '../assets/veritas_logo_dark.png';

const Footer = () => {
  return (
    <footer 
    style={{
        // Add a subtle dark overlay on top of the image
        backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        width: "100%",
      }}
    className="py-12 mt-16" >
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center mb-8">
                <img src={Logo} alt="Veritas Logo" className=" h-32" />
                <p className='text-white mx-4 px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis nisi quam repudiandae nobis minima eveniet necessitatibus doloribus recusandae nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod accusantium in veniam. Beatae dolores, blanditiis similique sit iusto dolor vero excepturi, dolorum ipsam exercitationem quia veritatis? Amet, tenetur repudiandae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam ea expedita odio ullam blanditiis natus dolorum voluptas aperiam cum adipisci soluta repellendus molestias, qui sequi libero alias enim pariatur corporis!</p>
            </div>
          <div className="grid md:grid-cols-4 gap-8 pt-5 border-t border-white  ">
            <div>
              <h4 className="font-serif text-white text-lg font-bold mb-4 ">Sections</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="text-white">Politics</a></li>
                <li><a href="#" className="text-white">Business</a></li>
                <li><a href="#" className="text-white">Technology</a></li>
                <li><a href="#" className="text-white">Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-white font-bold mb-4">More</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="text-white">Opinion</a></li>
                <li><a href="#" className="text-white">Arts</a></li>
                <li><a href="#" className="text-white">Sports</a></li>
                <li><a href="#" className="text-white">Health</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-white font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="text-white">About Us</a></li>
                <li><a href="#" className="text-white">Contact</a></li>
                <li><a href="#" className="text-white">Careers</a></li>
                <li><a href="#" className="text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg text-white font-bold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm text-white">
                <li><a href="#" className="text-white">Twitter</a></li>
                <li><a href="#" className="text-white">Facebook</a></li>
                <li><a href="#" className="text-white">Instagram</a></li>
                <li><a href="#" className="text-white">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 mt-8">
            <div className="text-xs text-gray-500 space-y-2">
              <div className="font-medium tracking-widest uppercase text-white">
                Copyright ©2025 Veritas Daily. All Rights Reserved.
              </div>
              <div>
                Committed to Truth • Dedicated to Excellence • Serving Readers Worldwide
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};
export default Footer;