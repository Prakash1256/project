import Image from "next/image";
import React from "react";

const Section: React.FC = () => {
  return (
    <div className="text-center">
      <div>
        <h1>
          Master your life <br />
          by mastering <br />
          emotions
        </h1>
        <div className="flex items-center space-x-4">
          <button className="button2">Download on the App Store</button>
          <p className="text-black">
            100+ Appstore <span className="text-yellow-500">★★★★★</span>
          </p>
        </div>
      </div>
      <div>
        <Image src="/phone.png" alt="App Interface" width={400} height={600} />
      </div>
    </div>
  );
};

export default Section;
