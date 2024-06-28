export default function Card(props) {
    const {title,desc,src}=props;
  return (
    <>
      <div className="card" style={{width: "18rem" }}>
        <img src={src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {desc}
          </p>
          <a href="#" className="btn btn-primary">
            Go
          </a>
        </div>
      </div>
    </>
  );
}
