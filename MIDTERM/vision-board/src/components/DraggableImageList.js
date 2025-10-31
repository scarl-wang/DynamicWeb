import DraggableImageItem from "./DraggableImageItem";

// mapping logic for draggable images
// added "index" for reordering within the array

const DraggableImageList = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center items-center m-2 gap-4">
      {images.map((img, index) => (
        <DraggableImageItem key={img.id} image={img} index={index} />
      ))}
    </div>
  );
};

export default DraggableImageList;
