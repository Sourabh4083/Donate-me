"use client"
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session } = useSession();


  return (
    <>
      <div className="text-white flex flex-col justify-center text-center py-4" >
        <div className="flex justify-center items-center text-center text-3xl font-bold md:text-5xl " >Buy Me a Chai
          <span><img className="invertImg w-14 md:w-16 " src="/tea.gif" alt="" /></span>
        </div>
        <p className="text-xs md:text-xl">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>

        <div className="p-2" >
          <Link href={"/login"}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
          </Link>
        </div>

        {session && (
          <div>
            <Link href={`/${session.user.name}`}>
              <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold  rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-1/2 ">Donate with a greate Smile</button>
            </Link>
          </div>
        )}

      </div>


      <div className="bg-white h-1 opacity-10" ></div>


      <div className="text-white container mx-auto p-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-center text-2xl font-bold text-white my-9">How Buy Me a Chai Works</h1>

        <div className="text-white flex justify-around items-center space-x-4">
          <div className="flex flex-col items-center justify-center text-center gap-2" >
            <img
              className="bg-gray-500 rounded-full p-2 max-w-[64px] md:max-w-[100%]"
              src="/man.gif"
              width={90}
              alt="Creator Connection"
            />
            <p className="font-bold text-xs md:text-[18px] mt-3">Direct Creator Support</p>
            <p className="text-xs text-center md:text-[16px] px-2" >
            Engage with creators personally. Your contributions empower those who inspire and create, fostering genuine connections and meaningful support.            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2" >
            <img
              className="bg-gray-500 rounded-full p-2 max-w-[64px] md:max-w-[100%]"
              src="/coin.gif"
              width={90}
              alt="Transparent Transactions"
            />
            <p className="font-bold text-xs md:text-[18px] mt-3">Transparent Contributions</p>
            <p className="text-xs text-center md:text-[16px] px-2">
            Each chai purchase creates meaningful change. Monitor your contributions and witness the growth and success of the creators you support.            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-2" >
            <img
              className="bg-gray-500 rounded-full p-2 max-w-[64px] md:max-w-[100%]"
              src="/group.gif"
              width={90}
              alt="Community Support"
            />
            <p className="font-bold text-xs md:text-[18px] mt-3">Community Empowerment</p>
            <p className="text-xs text-center md:text-[16px] px-2">
            Become part of a vibrant community. Unite with others to bring creative visions to life and empower creators to thrive.            </p>
          </div>
        </div>
      </div>




      <div className="bg-white h-1 opacity-10" ></div>



      
    </>
  );
}
