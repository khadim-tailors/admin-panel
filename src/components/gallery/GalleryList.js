import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonHeader from "../../common/ButtonHeader";
import CreateFolder from "./CreateFolder";

function GalleryList() {
  const [galleryFolders, setGalleryFolders] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5001/khadim-tailors/us-central1/gallery/fetchGallery"
      )
      .then((response) => {
        console.log(response.data);
        setGalleryFolders(response.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnCreateMode = () => setCreateMode(!createMode);

  return (
    <>
      <div className="galleryContainer">
        <ButtonHeader handleCreateMode={handleOnCreateMode} />
        {createMode ? (
          <CreateFolder handleCreateMode={handleOnCreateMode} />
        ) : (
          <div className="row gx-3 gy-3">
            {galleryFolders.map((item) => {
                return (
                  <div className="col-4 col-lg-3">
                    <Link to={"/gallery/" + item.folderName}>
                      <div className="galleryCard">
                        <div className="__image">
                          <img src={item.image.url} alt="" />
                        </div>
                        <div className="__heading">
                          <h5>{item.folderName}</h5>
                          <h5>({item.length})</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default GalleryList;
