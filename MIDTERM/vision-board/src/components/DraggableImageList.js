import DraggableImageItem from "./DraggableImageItem";

// mapping logic for draggable images

const DraggableImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center m-2 gap-4">
      {images.map((img) => (
        <DraggableImageItem key={img.id} image={img} />
      ))}
    </div>
  );
};

export default DraggableImageList;
