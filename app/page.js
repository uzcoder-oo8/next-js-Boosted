import Image from "next/image";
import Logo from "../public/logo.svg";
import User from "../public/user.svg";
import Card from "../public/cart.svg";
import electrek from "../public/electrek.png";
import Tech from "../public/tech.png";
import Popular from "../public/popular.png";
import Wired from "../public/wired.png";

export default function Home() {
  return (
    <>
      <section className="w-[100%] bg-[#000]">
        <p className="text-[#fff] text-center pt-[7px] pb-[7px]">
          Financing option available at checkout.
        </p>
      </section>
      <section className="w-[100%] bg-[#fff]">
        <div className="container max-w-[1480px] m-auto">
          <header className="flex">
            <li className="w-[182.5px] list-none mt-[15px] ml-[0px] mb-[15px">
              <Image
                src={Logo}
                width={160}
                height={36}
                alt="Picture of the author"
              />
            </li>
            <ul className="w-[736.25px] flex gap-[22px] mt-[25px] ml-[113px] mb-[20px]">
              <li className="font-[400] text-[14px] uppercase">
                Electric Skateboards
              </li>{" "}
              <li className="font-[400] text-[14px] uppercase">
                Electric Scooters
              </li>{" "}
              <li className="font-[400] text-[14px] uppercase">Accessories</li>{" "}
              <li className="font-[400] text-[14px] uppercase">Gift Card</li>
              <li className="font-[400] text-[14px] uppercase">More Info</li>
            </ul>
            <ul className="flex gap-[11px] mt-[20px] ml-[353px]">
              <li className="">
                <Image
                  src={User}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />{" "}
              </li>
              <li className="">
                <Image
                  src={Card}
                  width={25}
                  height={25}
                  alt="Picture of the author"
                />
              </li>
            </ul>
          </header>
        </div>
      </section>
      <section className="w-[100%] bg-[url('../public/hero.png')] bg-no-repeat bg-cover	bg-center">
        <div className="container max-w-[1480px] m-auto pt-[53px]">
          <h1 className="text-center text-[44px]">Welcome to Boosted USA</h1>
          <p className="text-center text-[15px] mt-[15px]">
            The Holy Grail of Electric Skateboards and One REVolutionary Scooter
          </p>
          <div className="flex w-[414px] m-auto gap-[12px] mt-[22px] ">
            <button className="w-[201px] h-[33px] bg-[#FF4A32] rounded-[35px] text-[#fff]">
              BOOSTED REVS
            </button>
            <button className="w-[201px] h-[33px] bg-[#FF4A32] rounded-[35px] text-[#fff] mb-[618px]">
              BOOSTED BOARDS
            </button>
          </div>
        </div>
      </section>
      <section className="w-[100%] bg-[#000]">
        <div className="max-w-[1480px] m-auto">
          <ul className="flex gap-[85px] pt-[30px] pb-[20px] w-[1200px] m-auto">
            <li>
              <Image
                src={electrek}
                width={280}
                height={31}
                alt="Picture of the author"
              />
            </li>
            <li>
              <Image
                src={Tech}
                width={206}
                height={48}
                alt="Picture of the author"
              />
            </li>{" "}
            <li>
              <Image
                src={Popular}
                width={150}
                height={41}
                alt="Picture of the author"
              />
            </li>{" "}
            <li>
              <Image
                src={Wired}
                width={206}
                height={48}
                alt="Picture of the author"
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="w-[100%] *:bg-[#fff]">
        <div className="max-w-[1480px] m-auto pt-[52px]">
          <h1 className="text-center text-[32px]">
            Looking for Boosted Boards, or Boosted Revs?
          </h1>
          <p className="w-[685px] text-center m-auto mt-[17px] mb-[25px]">
            Boosted USA acquired all of the remaining inventory directly from
            Boosted. This means we have the electric skateboards and scooter you
            all love and have been looking for. Get your hands on these highly
            sought after products while supplies last.
          </p>
          <div className="w-[70px] h-[2px] bg-[#CFCFCF] mb-[50px] m-auto"></div>
          <ul className="flex w-[1100px] m-auto gap-[20px] mb-[20px]">
            <li className="w-[580px] h-[580px] bg-[url('../public/images1.png')]">
              <h1 className="text-[#fff] text-center mt-[283px]">
                Shop Boosted Boards
              </h1>
              <p className="text-[#ffff] text-center">In Stock</p>
            </li>
            <li className="w-[580px] h-[580px] bg-[url('../public/images2.png')]">
              <h1 className="text-[#fff] text-center mt-[283px]">
                Shop Boosted Boards
              </h1>
              <p className="text-[#ffff] text-center">In Stock</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="w-[100%] bg-[url('../public/images3.png')]  bg-no-repeat bg-cover	bg-center">
        <p className="text-center ">High-performance</p>
        <h1 className="text-center text-[45px] font-[400]">Electric Skateboards</h1>
      </section>
    </>
  );
}
