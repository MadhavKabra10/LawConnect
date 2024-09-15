const Footer = () => {
    return (
      <div className="h-[200px] bg-[#1d506b] w-[100%] text-white p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 mt-12 grid grid-cols-2 md:mb-0">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p>Email: <a href="mailto:madhavkobra@gmail.com" className="text-blue-400">madhavkobra@gmail.com</a></p>
            <p>Phone: Madhav ka number</p>
            <p>Address: Madhav Ka ghar, Madhav topper</p>
          </div>
  
          <div className="mb-4 mt-12 md:mb-0">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <p>
              <a href="#" className="text-blue-400">Facebook</a> | 
              <a href="#" className="text-blue-400">Twitter</a> | 
              <a href="#" className="text-blue-400"   >LinkedIn</a>
            </p>
          </div>
  
          <div className="mb-4 mt-12 md:mb-0">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <p>
              <a href="#" className="text-blue-400">Home</a> | 
              <a href="#" className="text-blue-400">About Us</a> | 
              <a href="#" className="text-blue-400">InfoBot</a> | 
              <a href="#" className="text-blue-400">Chat</a> | 
            </p>
          </div>
        </div>
  
        <div className="text-center mt-4">
          <p className="text-sm">© 2024 LawConnect. All rights reserved.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  