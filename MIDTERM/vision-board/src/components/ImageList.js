import ImageItem from "./ImageItem";

// mapping logic

const ImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center m-2 gap-4">
      {images.map((img) => (
        <ImageItem key={img.id} image={img} />
      ))}
    </div>
  );
};

export default ImageList;
