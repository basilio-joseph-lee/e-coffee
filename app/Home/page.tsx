import { IoMdHome } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import FeatureCard from "../components/FeatureCard";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
export default function HomePage(){

    return (
        <>
            <div className="bg-gradient-to-t text-white from-amber-800/80 to-amber-900/80 h-screen w-full p-7">
                {/* Header */}
                <div className="flex flex-row justify-evenly items-center">
                    <p className="text-2xl font-bold">BrewNest</p>
                    <div className="flex flex-row gap-5 font-semibold text-sm">
                        <span><a href="">Home</a></span>
                        <span><a href="">About</a></span>
                        <span><a href="">Menu</a></span>
                        <span><a href="">Speciality</a></span>
                        <span><a href="">Gallery</a></span>
                        <span><a href="">Contact</a></span>
                    </div>
                    <button className="bg-gray-300/30 border border-gray-400 px-4 py-2 rounded-xl text-[12px] font-semibold">
                        Order Now
                    </button>
                </div>
                {/* Header */}
                {/* Content */}
                <div className="flex flex-1 flex-row ps-18 ">
                    <div className="flex flex-[.80] flex-col justify-center p-7 gap-5 h-[88vh]">
                        <p className="text-5xl font-bold">
                            Freshly Brewed
                            <br />
                            Coffee, Made for
                            <br />
                            Every Mood
                        </p>

                        <p className="font-semibold">
                            Discover rich flavors, handcrafted beverages, and
                            <br />
                            warm cafe experience designed to brighten your day.
                        </p>
                        <div className="flex flex-row gap-5">
                            <button 
                            className="bg-white text-amber-800/80 px-4 py-3 rounded-lg text-sm font-semibold">
                                Explore Menu
                            </button>
                            <button className="border border-white px-4 py-3 rounded-lg text-sm font-semibold">
                                Book a Table
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex ms-10 items-center">
                        <img 
                        width={300}
                        height={150}
                        className="rounded-2xl"
                        src="https://i.pinimg.com/736x/04/c3/c8/04c3c8470a92b392c9f30b1130634651.jpg" alt="" />
                    </div>
                    {/* Image */}

                </div>
                {/* Content */}
            </div>

            {/* Content 2*/}
            <div className="flex flex-row bg-amber-900/10 px-20 py-10 gap-8 justify-center">

                <div className="flex flex-col gap-3 bg-white rounded-lg px-5 py-10">
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-amber-900/30 flex-shrink-0">
                        <FaFire size={22} className="text-amber-950" />
                    </div>
                    <h4 className="font-semibold text-amber-950">Fresh Roasted Beans</h4>
                    <p className="text-[12px] text-gray-700 font-normal leading-normal">
                        We source premium beans and roast
                        <br />
                        them carefully to bring out deep aroma
                        <br />
                        and bold flavor in every cup.
                    </p>
                </div>
                 <div className="flex flex-col gap-3 bg-white rounded-lg px-5 py-10">
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-amber-900/30">
                       <IoMdHome  size={25} className="text-amber-950 stoke-2 text-xl" />
                    </div>
                    <h4 className="font-semibold text-amber-950">Cozy Cafe Atmosphere</h4>
                    <p className="text-[12px] text-gray-700 font-normal leading-normal">
                        A welcoming space for meeting, quiet
                        <br />
                        moments, and catching up with friends 
                        <br />
                        over great coffee.
                    </p>
                </div>
                 <div className="flex flex-col gap-3 bg-white rounded-lg px-5 py-10">
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-amber-900/30">
                        <FaRegClock size={22} className="text-amber-950 stoke-2 text-xl" />

                    </div>
                    <h4 className="font-semibold text-amber-950">Fresh Roasted Beans</h4>
                    <p className="text-[12px] text-gray-700 font-normal leading-normal">
                        From the first order to the final sip, we
                        <br />
                        make every visit smooth, warm and
                        <br />
                        memorable.
                    </p>
                </div>

            </div>

            {/* Content 2*/}

            {/* Content 3*/}

            <div className="flex flex-col justify-center items-center p-20 gap-3">
                <p className="text-amber-950 text-4xl font-extrabold">Crafted Coffee Selections</p>
                <p className="text-gray-600/80 text-[13px]">From strong espresso shots to smooth creamy blends, explore coffee choices made for every taste</p>
           
             <div className="flex flex-row  px-20 mb-20 gap-8 justify-center mt-10">


                <FeatureCard
                    icon={<FaFire size={22} className="text-amber-950" />}
                    title="Espresso Classics"
                    description="Bold, rich and intense coffee options for those who love a strong  and authentic taste."
                />

                <FeatureCard
                    icon={<IoMdHome size={22} className="text-amber-950" />}
                    title="Creamy Favorites"
                    description="Smooth lattes and cappuccinos with silky milk texture and balanced flavor"
                />

                <FeatureCard
                    icon={<FaRegClock size={22} className="text-amber-950" />}
                    title="Signature Blends"
                    description="Special house-made recipes crafted to deliver a unique cafe experience in every sip."
                />

                </div>
            </div>

            {/* Content 3*/}


            {/* Content 4*/}

            <div className="bg-amber-950/20 h-[100vh] p-20">

                <div className=" flex flex-1 justify-center flex-row gap-5">
                    <div className="flex flex-col  justify-center flex-[.5] gap-5  w-screen h-[70vh]">
                         <p className="text-amber-950/20 font-bold tracking-[2px]">
                            Brewed with love
                         </p>
                         <p className="text-amber-950/90 text-4xl font-extrabold">
                            Why Start Your Day With Our Coffee?
                         </p>
                         <p className="text-gray-800 leading-relaxed text-[12px]">
                            Our Coffee is prepared with carefully beans, expert techniques, and passion
                            for quality, Whether you want energy, comfort, or a relaxing break, we serve
                            a cup that feels just right.
                         </p>
                           
                            <div className="flex flex-row gap-5">
                            <button 
                            className="bg-amber-950/90 text-white px-4 py-3 rounded-lg text-sm font-semibold">
                                Read More
                            </button>
                            <button className="text-amber-950/90 border border-amber-950/90 px-4 py-3 rounded-lg text-sm font-semibold">
                               View Menu
                            </button>
                        </div>
                    </div>
                    <div className="flex-[.5] rounded-lg bg-red-400 w-screen h-[70vh]">
                        <img 
                        className="w-full h-full object-cover  rounded-lg"
                        src="https://i.pinimg.com/736x/83/a9/59/83a95986bebdccb7ecc47af0f37d54cf.jpg" alt="" />
                    </div>
                    
                </div>

            </div>

            {/* Content 4*/}

            {/* Content 5*/}
           <div className="flex flex-col items-center py-15 px-15">

                {/* Header */}
                <p className="text-amber-950/20 font-bold tracking-[2px]">
                    Chosen by Coffee lover
                </p>

                <p className="text-amber-950/90 text-4xl font-extrabold text-center">
                    Our Signature Coffee Menu
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 w-full">

                    {/* Card 1 */}
                    <div className="flex bg-amber-950/10 rounded-lg p-5 gap-4 overflow-hidden">
                    <div className="w-28 h-28 flex-shrink-0">
                        <img className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/736x/f0/65/5f/f0655f2737da76be9b4ac435c65e3d9b.jpg" />
                    </div>

                    <div className="flex flex-col flex-1 gap-2 min-w-0">
                        <div className="flex justify-between">
                        <p className="font-bold text-amber-950">Caramel Latte</p>
                        <p className="font-bold text-amber-950">$3.99</p>
                        </div>

                        <span className="text-xs w-fit px-3 py-1 rounded-xl bg-amber-800/30 text-amber-950/60 font-bold">
                        Popular
                        </span>

                        <p className="text-xs text-amber-950/60 leading-snug">
                            A smooth espresso blended with steamed milk and rich caramel, creating a warm and comforting sweetness in every sip.
                        </p>
                    </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex bg-amber-950/10 rounded-lg p-5 gap-4 overflow-hidden">
                    <div className="w-28 h-28 flex-shrink-0">
                        <img className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/1200x/f8/56/d2/f856d2d30045e34f7a3d7438d81c5141.jpg" />
                    </div>

                    <div className="flex flex-col flex-1 gap-2 min-w-0">
                        <div className="flex justify-between">
                        <p className="font-bold text-amber-950">Cappuccino</p>
                        <p className="font-bold text-amber-950">$3.50</p>
                        </div>

                        <span className="text-xs w-fit px-3 py-1 rounded-xl bg-amber-800/30 text-amber-950/60 font-bold">
                        Classic
                        </span>

                        <p className="text-xs text-amber-950/60 leading-snug">
                            A bold espresso topped with velvety steamed milk foam, delivering a perfectly balanced and creamy coffee experience.
                        </p>
                    </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex bg-amber-950/10 rounded-lg p-5 gap-4 overflow-hidden">
                    <div className="w-28 h-28 flex-shrink-0">
                        <img className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/1200x/2f/53/13/2f53139ff4cb36a33ff4a9582b5be6a9.jpg" />
                    </div>

                    <div className="flex flex-col flex-1 gap-2 min-w-0">
                        <div className="flex justify-between">
                        <p className="font-bold text-amber-950">Espresso</p>
                        <p className="font-bold text-amber-950">$2.50</p>
                        </div>

                        <span className="text-xs w-fit px-3 py-1 rounded-xl bg-amber-800/30 text-amber-950/60 font-bold">
                        Strong
                        </span>

                        <p className="text-xs text-amber-950/60 leading-snug">
                            A strong and concentrated coffee shot with a deep aroma and intense flavor, perfect for a quick energy boost.
                        </p>
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex bg-amber-950/10 rounded-lg p-5 gap-4 overflow-hidden ">
                    <div className="w-28 h-28 flex-shrink-0">
                        <img className="w-full h-full rounded-lg object-cover"
                        src="https://i.pinimg.com/1200x/74/f3/6f/74f36f2ca43d24d39c4ce5ebeff34249.jpg" />
                    </div>

                    <div className="flex flex-col flex-1 gap-2 min-w-0">
                        <div className="flex justify-between">
                        <p className="font-bold text-amber-950">Mocha</p>
                        <p className="font-bold text-amber-950">$4.20</p>
                        </div>

                        <span className="text-xs w-fit px-3 py-1 rounded-xl bg-amber-800/30 text-amber-950/60 font-bold">
                        Sweet
                        </span>

                        <p className="text-xs text-amber-950/60 leading-snug">
                            A delicious blend of espresso, chocolate, and steamed milk, offering a rich and slightly sweet indulgent taste.
                        </p>
                    </div>
                    </div>

                </div>
                </div>
            {/* Content 5*/}

             {/* Content 6*/}
            <div className="flex items-center justify-center bg-amber-950/10 w-full h-95">

                <div className="flex flex-row gap-5 items-center">
                    <img 
                    className="w-45 h-65 rounded-lg"
                    src="https://i.pinimg.com/736x/5b/f6/3b/5bf63be8e9ef56f668b3e7b82bdc7352.jpg" alt="" />
                    <img 
                    className="w-50 h-50 rounded-lg"
                    src="https://i.pinimg.com/736x/60/ae/7c/60ae7c840ef9f2e95fc5ab8ca2348c0a.jpg" alt="" />
                    <img 
                    className="w-55 h-65 rounded-lg"
                    src="https://i.pinimg.com/736x/99/de/a2/99dea22c5ea7658525deea63abd63b34.jpg" alt="" />
                    <img 
                    className="w-50 h-60 rounded-lg"
                    src="https://i.pinimg.com/736x/54/c4/fe/54c4fecf885515e12b3ab635eb3e58db.jpg" alt="" />
                </div>
                
            </div>
            {/* Content 6*/}

            {/* Content 7*/}

            <div className="flex flex-col bg-amber-950/70 w-full h-105 px-10 py-2">
                <div className="flex flex-row w-full mt-30">
                    <div className="flex flex-col gap-5 ms-20">
                         <p className="text-2xl text-white font-bold">
                            BrewNest</p>
                        <p className="text-gray-100/70">
                            Serving handcrafted coffee, delicious
                            <br />
                             bites and cozy moments every day.
                        </p>
                    </div>
                     <div className="flex flex-col gap-5 ms-30">
                         <p className="text-lg text-amber-200 font-bold">
                           Opening Hours</p>
                        <p className="text-gray-100 leading-relaxed">
                            Mon - Fri: 9:00 AM - 8:00 PM
                            <br />
                            <br />
                            Sat && Sun: 9:00 AM - 5:00 PM
                        </p>
                    </div>
                     <div className="flex flex-col gap-5 ms-10">
                         <p className="text-lg text-amber-200 font-bold">
                           Contact Us</p>
                        <p className="text-gray-100 leading-relaxed ">
                            Example@gmail.com
                            <br />
                            <br />
                            +63 123 4567 890
                            <br />
                            <br />
                            153 Coffee Street, Mexico
                        </p>
                    </div>
                </div>
                
              <div className="border-t border-t-gray-100 mt-5 py-8 flex items-center justify-between">
    
                <p className="text-white font-semibold ">
                    Follow us
                </p>

                <div className="flex items-center gap-4 text-white ">
                    <a href="#" className="hover:text-pink-500 transition">
                        <FaInstagram size={20} />
                    </a>

                    <a href="#" className="hover:text-blue-600 transition">
                        <FaFacebook size={20} />
                    </a>

                    <a href="#" className="hover:text-sky-500 transition">
                        <FaTwitter size={20} />
                    </a>
                </div>

                </div>
                
            </div>
            

            {/* Content 7*/}

        </>
    )

}