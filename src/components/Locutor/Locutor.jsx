import { useEffect, useState } from "react";
import paraisoLogo from "../../assets/paraisoLogo.png";
import "./locutor.css";
import logoBaires from "../../assets/logo-baires.png";
import darioJara from "../../assets/darioJara.png";
import karinaLorre from "../../assets/karinaLorre.png";

const Locutor = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageToShow, setImageToShow] = useState("");
  const [titleToShow, setTitleToShow] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const daysOfWeek = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const dayOfWeekName = daysOfWeek[currentTime.getDay()];
    setCurrentDay(dayOfWeekName);
  }, [currentTime, currentDay]);

  useEffect(() => {
    const currentHour = currentTime.getHours();

    if (currentDay && currentDay !== "Sábado" && currentDay !== "Domingo") {
      switch (true) {
        case currentHour >= 9 && currentHour < 13:
          setImageToShow(darioJara);
          setTitleToShow("LA MAÑANA DE PARAÍSO");
          break;
        default:
          setImageToShow(logoBaires); //FALTA ASSET DE LA100
          setTitleToShow("LA100");
          break;
      }
    } else if (currentDay === "Sábado") {
      switch (true) {
        case currentHour >= 17 && currentHour < 22:
          setImageToShow(karinaLorre);
          setTitleToShow("LA GRAN MAÑANA");
          break;
        default:
          setImageToShow(logoBaires); //FALTA ASSET DE LA100
          setTitleToShow("LA100");
          break;
      }
    } else if (currentDay === "Domingo") {
      switch (true) {
        default:
          setImageToShow(logoBaires); //FALTA ASSET DE LA100
          setTitleToShow("LA100");
          break;
      }
    }
  }, [currentTime, currentDay]);

  return (
    <div className="locutor-container">
      <div className="radio-programa">
        <img src={paraisoLogo} alt="" />
        <h2>{titleToShow}</h2>
      </div>
      <img
        src={imageToShow}
        className="locutor-img"
        alt="locutor"
        style={{
          height:
            imageToShow.includes("logo")
              ? "65%"
              : "auto",
        }}
      />
    </div>
  );
};

export default Locutor;
