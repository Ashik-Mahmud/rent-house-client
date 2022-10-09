type Props = {
  gallery: any;
};

const Gallery = ({ gallery }: Props) => {
  return (
    <>
      {/* Gallery */}
      <div className="gallery bg-white p-10">
        <div className="title mb-6">
          <h3 className="text-2xl font-bold mt-3">Galleries</h3>
          <span className="w-10 h-1 bg-success block"></span>
        </div>
        <div className="images">
          <ul className="flex-col sm:flex-row flex gap-1 items-center">
            {gallery?.map((item: any, index: number) => (
              <li className="cursor-pointer" key={index}>
                <img
                  src={
                    item
                      ? "http://localhost:5000/gallery/" + item
                      : "https://placeimg.com/400/225/arch"
                  }
                  className="h-60"
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Gallery;
