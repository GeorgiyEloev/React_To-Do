import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import good from "../../img/good.png";
import close from "../../img/close.png";
import "./EditNewPage.scss";

const EditNewPage = ({ setAllTasks, sortAndAddEditor }) => {
  const [item, setItem] = useState({
    _id: "",
    name: "",
    text: "",
    isCheck: false,
  });
  let history = useHistory();

  const { id } = useParams();

  useEffect(async () => {
    await axios.get(`http://localhost:8000/oneTask?_id=${id}`).then((res) => {
      setItem(res.data.data);
    });
  }, []);

  const { _id, name, text, isCheck } = item;

  const changeBDNew = async () => {
    const { _id, name, text, isCheck } = item;
    if (name.trim()) {
      await axios
        .patch("http://localhost:8000/updateTask", {
          _id,
          name: name.trim(),
          text: !text.trim() ? "Описание отсутствует" : text,
          isCheck,
        })
        .then((res) => {
          setAllTasks(sortAndAddEditor(res.data.data));
        });
      history.push("/main");
    } else {
      alert('Поле "Задача" пустое!!!');
    }
  };

  return (
    <div className="pageNew">
      <div className="editName">
        <h2>Change:</h2>
        <textarea
          rows="3"
          className="sizeName"
          value={name}
          onChange={(event) =>
            setItem({ _id, name: event.target.value, text, isCheck })
          }
        />
      </div>
      <p>Change description:</p>
      {text.trim() === "Описание отсутствует" ? (
        <textarea
          rows="10"
          className="editText"
          placeholder={text}
          onChange={(event) =>
            setItem({ _id, name, text: event.target.value, isCheck })
          }
        />
      ) : (
        <textarea
          rows="10"
          className="editText"
          value={text}
          onChange={(event) =>
            setItem({ _id, name, text: event.target.value, isCheck })
          }
        />
      )}

      <div className="edit">
        <img src={good} onClick={() => changeBDNew()} />
        <img src={close} onClick={() => history.push("/main")} />
      </div>
    </div>
  );
};

export default EditNewPage;
