import React from 'react';
import Footer from './Footer';

const ReadMore2 = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-40 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        <img src="./Images/w1.WEBP" className="w-[60%] mb-2" alt="Laptop" />
        <h1 className="text-black font-bold text-3xl mt-3">
        Windows 11 That Will Actually Make Your Life Better.
        </h1>
        <hr className="text-gray-500 w-3/4 border-2 mt-5 mb-5" />
      </div>
      
      <div className="text-blue-600 font-semibold mt-8">
        <p>
          What one is that one word that pops up in your mind when you think about technology? Yes, you are right, it's innovation!
        </p>
        <p>
          And Windows has always been thrilled to be a phase for the world’s innovation as it has provided or established change by introducing new ideas and methods that make life easy. The web has its roots in Windows. It’s a place where many of us played our first PC game and wrote our first email. Windows is known as the backbone of global businesses, where start-ups have become renowned names. It has never failed to impress with its innovation.
        </p>
        <p>
          Windows is a platform for over a billion people who today rely on it. It’s a place where people come to connect, learn, achieve, and create something extraordinary. Recently, Windows launched its new operating system, Microsoft Windows 11.
        </p>
        <p>
          Previously, it was assumed that Windows 10 would be the last version of the operating system from Microsoft. But now, the wait is over, and the future has arrived. Microsoft has launched Windows 11. The new operating system started rolling out as an upgrade on October 5th, 2021, after nearly 6 years of Windows 10.
        </p>
        <p>
          Windows 11 is the most fruitful, collaborative, and secure version of Windows ever. It brings numerous features and design updates for a more simplified and smooth experience. With the latest version, security is tighter, games load faster, and the overall experience sounds better. Even though the goal is to make it feel familiar, there are plenty of new innovations and cool features to get excited about.
        </p>

        <h2 className="text-2xl font-semibold mt-6">What is Changing in Windows 11?</h2>
        <ul className="list-disc pl-6 mt-4">
          <li><span className="font-bold">The New Start Menu:</span> A new, smaller start menu that allows you to access apps easily, without the need to scroll.</li>
          <li><span className="font-bold">Widget:</span> A redesigned and more interactive widget panel that provides weather, sports, news, and more.</li>
          <li><span className="font-bold">Snap Layout:</span> Snap layouts let you choose window arrangements, and they are saved for quick access from the taskbar.</li>
          <li><span className="font-bold">Redesigned Settings App:</span> A redesigned app with a consistent left menu, making navigation faster.</li>
          <li><span className="font-bold">Multiple Desktop:</span> Set different backgrounds and layouts for each virtual desktop.</li>
          <li><span className="font-bold">Teams is Inherent:</span> Easy access to Teams for video conferencing and messaging, integrated directly into the taskbar.</li>
          <li><span className="font-bold">New Wallpaper & Theme:</span> New default wallpapers and 6 fresh themes with different color schemes.</li>
          <li><span className="font-bold">Search Menu:</span> Separated from the Start Menu for easier access and functionality.</li>
          <li><span className="font-bold">Voice Assistant:</span> New voice typing and Voice Access feature that controls the OS and improves efficiency.</li>
        </ul>

        <p className="mt-8">
          Imagine getting all these great features on refurbished laptops. YES! It’s possible! You can experience the latest Windows 11 features on certified refurbished laptops. Many companies in India offer these laptops at great prices, and you can buy them from our trusted store, where you’ll find a variety of refurbished laptops from top brands.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default ReadMore2;
