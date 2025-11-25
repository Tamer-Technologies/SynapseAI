import { useEffect, useState } from "react";
import AiChat from "../../assets/images/ai-chat.png";
import fetchRandomUsers from "../../utilities/fetchRandomUsers";

const Notification = ({
  src = null,
  avatarSrcs = null,
  label = "Notification",
  date = "1m ago",
  className,
}) => {
  const [images, setImages] = useState(avatarSrcs || null);

  useEffect(() => {
    const getImages = async () => {
      if (images) return;
      const users = await fetchRandomUsers(4);
      const receivedImages = users.map((user) => user.picture.medium);
      setImages(receivedImages);
    };
    getImages();
  }, [images]);

  return (
    <div
      className={`hidden absolute backdrop-blur-xs p-3 border-2 border-amber-100/20 bg-amber-100/5 rounded-xl gap-5 font-semibold lg:flex lg:items-center ${className}`}
    >
      <div className="h-15 aspect-square rounded-xl overflow-hidden">
        <img src={src ? src : AiChat} alt="notification profile picture" />
      </div>
      <div className="grid grid-rows-2 grid-cols-[1fr_auto] gap-x-10 items-center">
        <p className="text-sm col-span-full">{label}</p>
        <div className="flex items-center ml-3">
          {images ? (
            images.map((imgSrc) => (
              <div
                key={imgSrc}
                className={`w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 shadow-sm -ml-3`}
              >
                <img
                  src={imgSrc}
                  alt={`avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          ) : (
            <span className="text-xs opacity-50">Loading...</span>
          )}
        </div>
        <p className="text-xs opacity-30 text-white">{date}</p>
      </div>
    </div>
  );
};

export default Notification;
