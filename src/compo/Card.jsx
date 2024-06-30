export default function Card(props) {
    const {title,desc,src}=props;
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden" style={{width: "18rem"}}>
  <img src={src} className="w-full h-48 object-cover object-center" alt="Card Image" />
  <div className="p-4">
    <h5 className="text-xl font-bold">{title}</h5>
    <p className="text-gray-700">
      {desc}
    </p>
    <a href="#" className="relative top-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Go
    </a>
  </div>
</div>

    </>
  );
}
