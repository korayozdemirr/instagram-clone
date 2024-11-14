import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import StoryItem from "../components/StoryItem";
function Home() {
  const stories = [
    {
      username: "ahmet_yildiz",
      image_url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      likes: 120,
      comments: 18,
    },
    {
      username: "melisa_kaya",
      image_url: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
      likes: 200,
      comments: 35,
    },
    {
      username: "burak_turan",
      image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      likes: 340,
      comments: 50,
    },
    {
      username: "elif_dogan",
      image_url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 410,
      comments: 62,
    },
    {
      username: "zeynep_demir",
      image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      likes: 175,
      comments: 27,
    },
    {
      username: "mehmet_aksoy",
      image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      likes: 220,
      comments: 30,
    },
    {
      username: "ayse_kilic",
      image_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      likes: 145,
      comments: 22,
    },
    {
      username: "kerem_sahin",
      image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      likes: 390,
      comments: 44,
    },
    {
      username: "burcu_uzun",
      image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      likes: 275,
      comments: 37,
    },
    {
      username: "mert_durmaz",
      image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      likes: 330,
      comments: 48,
    },
    {
      username: "selin_guler",
      image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      likes: 245,
      comments: 33,
    },
    {
      username: "yusuf_ates",
      image_url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      likes: 180,
      comments: 28,
    },
    {
      username: "serkan_duman",
      image_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      likes: 400,
      comments: 55,
    },
    {
      username: "leyla_kilic",
      image_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      likes: 140,
      comments: 20,
    },
    {
      username: "enes_yilmaz",
      image_url: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8",
      likes: 310,
      comments: 40,
    },
    {
      username: "asli_turan",
      image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      likes: 295,
      comments: 43,
    },
    {
      username: "okan_celik",
      image_url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      likes: 170,
      comments: 26,
    },
    {
      username: "irem_demir",
      image_url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      likes: 265,
      comments: 35,
    },
    {
      username: "fatma_karaca",
      image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      likes: 355,
      comments: 52,
    },
    {
      username: "hakan_kaya",
      image_url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      likes: 130,
      comments: 19,
    },
  ];
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <Layout>
      <div className="ml-[248px] px-20 pt-8 w-full overflow-hidden">
        <div
          className={`flex gap-x-2 border-b-slate-300 border-b p-2 overflow-hidden ${
            isFixed ? "fixed" : "relative"
          }`}
        >
          <span className="font-bold">Senin için</span>
          <span className="font-bold text-gray-400">Takip Ettiklerin</span>
        </div>
        <div className="mt-8 flex gap-3 overflow-hidden pt-1 pb-1">
          {stories.map((story, index) => (
            <StoryItem
              username={story.username}
              image_url={story.image_url}
              key={index}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <p>username</p>
              </div>
              <div>
                icon
              </div>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              like
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
