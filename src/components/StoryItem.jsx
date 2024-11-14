const StoryItem = (props) => {
  const { username, image_url } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-1 w-16 h-20">
      <div className="rounded-full border-[#d301c5] border-2 p-[2px] w-16 h-16">
        <img
          className="w-full h-full object-cover rounded-full"
          src={image_url}
          alt=""
        />
      </div>
      <p className="text-xs font-medium ">{username}</p>
    </div>
  );
};

export default StoryItem;
