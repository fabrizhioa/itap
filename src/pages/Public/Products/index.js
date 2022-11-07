import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ListaProductos } from "../../../data";

const Products = () => {
  const [displayed, setDisplayed] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  let { id } = useParams();

  useEffect(() => {
    if (typeof id === "string") {
      // eslint-disable-next-line
      id = id.replaceAll("-", " ");
    }
    for (let i = 0; i < ListaProductos.length; i++) {
      if (ListaProductos[i].title === id) {
        setDisplayed(i);
        break;
      } else {
        console.log("este no es", i);
      }
    }
  }, [id]);

  //recomendacion: no hacerse con title debido a la alta probabilidad de que se repita
  //se realizacion de esa forma debido a que el mockup dado lo realiza asi
  if (displayed === null) {
    return <div>Cargando...</div>;
  } else {
    return (
      <div className="bg-bc min-h-screen w-full">
        <div className="grid max-w-screen-lg m-auto p-2">
          <div className="flex flex-wrap justify-between font-thin">
            <div>
              <Link to="/">Inicio</Link> / <Link to="/shop">Productos</Link> /{" "}
              {ListaProductos[displayed].title}
            </div>
            <div className="flex gap-2 items-center text-black font-light">
              <Link
                to={
                  displayed === 0
                    ? "#"
                    : "/product-page/" +
                      ListaProductos[displayed - 1].title.replaceAll(" ", "-")
                }
                replace={true}
              >
                {"< Previo"}
              </Link>
              |
              <Link
                to={
                  displayed === ListaProductos.length - 1
                    ? "#"
                    : "/product-page/" +
                      ListaProductos[displayed + 1].title.replaceAll(" ", "-")
                }
                replace={true}
              >
                {"Proximo >"}
              </Link>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <img
              src={ListaProductos[displayed].images[displayedImage]}
              alt={ListaProductos[displayed].title}
              className="aspect-square w-full max-w-[500px] m-auto"
            />
            <div className="flex items-center justify-center gap-2">
              {ListaProductos[displayed].images.map((image, index) => {
                return (
                  <button
                    key={index}
                    className={`w-12  ${
                      index === displayedImage
                        ? "p-1 border-[1px] border-black border-separate"
                        : ""
                    }`}
                    onClick={() => setDisplayedImage(index)}
                  >
                    <img
                      className="aspect-square"
                      src={ListaProductos[displayed].images[index]}
                      alt={ListaProductos[displayed].title}
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap text-center justify-between text-2xl font-medium">
            <h2 className="">{ListaProductos[displayed].title}</h2>
            <div className="w-72 text-center  mx-auto">
              <p className="text-tg">
                {ListaProductos[displayed].discount.active === true ? (
                  <>
                    <span className="line-through">
                      ${ListaProductos[displayed].price}.00
                    </span>{" "}
                    ${ListaProductos[displayed].discount.price}.00
                  </>
                ) : (
                  <>${ListaProductos[displayed].price}.00</>
                )}
              </p>
              <form
                action=""
                className="text-base font-thin flex flex-col   gap-2  "
              >
                {ListaProductos[displayed].options.colors.length > 0 && (
                  <div className=" text-center  flex flex-col gap-1 p-2">
                    <p>
                      Color:{" "}
                      {ListaProductos[displayed].options.colors[selectedColor]}
                    </p>
                    <div className="flex justify-center gap-2">
                      {ListaProductos[displayed].options.colors.map(
                        (color, index) => {
                          return (
                            <label
                              htmlFor={"inputradio" + index}
                              className={`flex w-5 rounded-full aspect-square border-tg border-separate p-1 ${
                                index === selectedColor
                                  ? "border-[0.175rem]"
                                  : "border-none"
                              }`}
                              style={{
                                backgroundColor: color,
                              }}
                              key={index}
                            >
                              <input
                                type="radio"
                                name="color"
                                id={"inputradio" + index}
                                value={color}
                                key={index}
                                onChange={() => setSelectedColor(index)}
                                className="hidden"
                              />
                            </label>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}

                {ListaProductos[displayed].options.personalizable && (
                  <div className="flex flex-col gap-2  w-72">
                    <span className="w-auto">
                      Si deseas Personalizar este producto Favor de Escribir si
                      (opcional)
                    </span>
                    <textarea
                      name="personalizable"
                      id=""
                      maxLength={500}
                      className="p-2 bg-white border-none"
                      rows={4}
                    ></textarea>
                  </div>
                )}
                <div>
                  <p className="font-light">Cantidad</p>
                  <input type="number" className="p-2 bg-white border-none" />
                </div>

                {ListaProductos[displayed].options.subcriptions.length > 0 ? (
                  <div className="flex flex-col  gap-2">
                    <h3 className="text-center font-light"> Opciones</h3>
                    {ListaProductos[displayed].options.subcriptions.map(
                      (option, index) => (
                        <div
                          className="p-2 bg-white flex items-center gap-2 text-left"
                          key={index}
                        >
                          <input
                            type="radio"
                            className="w-max"
                            name="subcription"
                            value={index}
                            required
                          />

                          <div>
                            <p>{option.title}</p>
                            <span className="text-sm">{option.discount}</span>
                            <p>
                              ${option.price}{" "}
                              <span className="text-sm">{option.span}</span>
                            </p>
                          </div>
                        </div>
                      )
                    )}
                    <button className="p-2 bg-white">Suscribirse</button>
                  </div>
                ) : (
                  <button className="p-2 bg-tg font-light text-xl ">
                    Ordenar Ahora
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Products;
