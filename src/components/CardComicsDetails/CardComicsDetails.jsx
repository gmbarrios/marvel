import { useEffect, useState } from "react";
import styles from "./cardcomicsdetails.module.css";
import { useParams } from "react-router-dom";
import { getComicDetails } from "../../Utils/methods";
import { dateFormatter } from "../../Utils/formatters";

export const CardComicsDetails = ({
    
}) => {
    const {id} = useParams();
    console.log(id);

    const [comicDetails, setComicDetails] = useState();

    const urlImage = comicDetails&&`${comicDetails.thumbnail.path}.${comicDetails.thumbnail.extension}`;
    const title = comicDetails&&comicDetails.title;
    const description = comicDetails&&comicDetails.description;
    const writer = comicDetails&&comicDetails.creators.items.find(
      (item) => item.role === "writer"
      ).name;
      const penciler = comicDetails&&comicDetails.creators.items.find((item) => {
        if (item.role.includes("penciler")) return item;
      }).name;
      const cover = comicDetails&&comicDetails.creators.items.find((item) => {
        if (item.role.includes("penciler (cover)")) return item;
      }).name;
      
    const onsaleDate = comicDetails&&comicDetails.dates.find(
      (date) => date.type === "onsaleDate"
    ).date;

   const onSaleDateFormatted = dateFormatter(new Date(onsaleDate), 'en-US');

    async function fetchComicDetails(comicId) {
        const response = await getComicDetails(comicId);
        setComicDetails(response.data.results[0]);
      }
      useEffect(() => {
        fetchComicDetails(id)
      },[])

    return (
    
        <div className={styles.backgroundContainer}>
        <div
            className={styles.comicImage}
            style={{ backgroundImage: `url(${urlImage})` }}
            ></div>

        <div className={styles.comicInfo}>
            <h1 className={styles.title}
            >{title}</h1>

            <h3>
                Published: {onSaleDateFormatted} <br />
                Writer: {writer} <br />
                Penciler: {penciler} <br />
                Cover artist: {cover} <br />
            </h3>

            <h2>
                {description}
                </h2>
        </div>
        </div>
)}
