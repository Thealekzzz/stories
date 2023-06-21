import React, { useEffect, useState } from 'react';

import styles from "./Main.module.css";
import closeIcon from "../../images/close.svg";

import stories from "../../data/stories";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from 'react-router-dom';

const Main = () => {
  const storyDimentions = [500, 700];
  const timeOnOneChapter = 5000;

  const { width } = useWindowDimensions();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [currentChapter, setCurrentChapter] = useState({});

  const [currentStoryNumber, setCurrentStoryNumber] = useState(null);
  const [currentChapterNumber, setCurrentChapterNumber] = useState(null);

  const [timerId, setTimerId] = useState(null);

  const currentStory = stories[currentStoryNumber];
  const currentChapter = currentStory?.chapters?.[currentChapterNumber];

  function handleStoryClick(story, storyNumber) {
    setCurrentStoryNumber(storyNumber);
    setCurrentChapterNumber(0);
    setIsPopupOpen(true);
  }

  function handlePopupClick(evt) {
    setIsPopupOpen(false);
  }

  function handlePopupContainerClick(evt) {
    evt.stopPropagation();
    const clickX = evt.clientX - (width - storyDimentions[0]) / 2;
    // const clickY = evt.clienty - (height - storyDimentions[1]) / 2;
    const numberOfChapters = currentStory?.chapters?.length;

    if (clickX > storyDimentions[0] / 2) {
      console.log("Следующая часть");
      if (currentChapterNumber < numberOfChapters - 1) {
        setCurrentChapterNumber(prev => ++prev);

      } else {
        if (currentStoryNumber < stories.length - 1) {
          setCurrentStoryNumber(prev => ++prev);
          setCurrentChapterNumber(0);

        } else {
          // Закрываю попап
          setIsPopupOpen(false);
        }
      }
    } else {
      console.log("Предыдущая часть");
      if (currentChapterNumber > 0) {
        setCurrentChapterNumber(prev => --prev);

      } else {
        if (currentStoryNumber > 0) {
          setCurrentStoryNumber(prev => --prev);
          setCurrentChapterNumber(stories[currentStoryNumber - 1].chapters.length - 1);

        }
      }

    }
  }

  function nextStory() {
    const numberOfChapters = currentStory?.chapters?.length;
    
    if (currentChapterNumber < numberOfChapters - 1) {
      setCurrentChapterNumber(prev => ++prev);

    } else {
      if (currentStoryNumber < stories.length - 1) {
        setCurrentStoryNumber(prev => ++prev);
        setCurrentChapterNumber(0);

      }
    }
  }

  useEffect(() => {
    function recursiveNextStory() {
      return setTimeout(() => {
        const numberOfChapters = currentStory?.chapters?.length;

        console.log(`История № ${currentStoryNumber}, Часть № ${currentChapterNumber}, всего частей ${numberOfChapters}`);
        if (currentChapterNumber < numberOfChapters - 1) {
          // Следующая часть
          setCurrentChapterNumber(prev => ++prev);
  
        } else {
          if (currentStoryNumber < stories.length - 1) {
            // Следующая новость
            setCurrentStoryNumber(prev => ++prev);
            setCurrentChapterNumber(0);
  
          } else {
            // Закрываю попап
            setIsPopupOpen(false);
          }
        }

        setTimerId(recursiveNextStory());
      }, timeOnOneChapter)
    }


    if (isPopupOpen) {
      if (timerId) {
        clearTimeout(timerId);
      }

      setTimerId(recursiveNextStory());
    } else {
      clearTimeout(timerId);
      setTimerId(null);
    }
  }, [isPopupOpen, currentChapter])

  return (
    <>
      <div className={styles['stories']}>
        <div className={styles['storiesHeader']}>
          <h2 className={styles['sectionTitle']}>Новости</h2>
        </div>
        <ul className={styles['storiesList']}>
          {stories.map((story, index) => {
            return (
              <li key={index} className={styles['story']} onClick={() => handleStoryClick(story, index)}>
                <img src={require("../../images/previewImages/" + story.image)} alt="" className={styles['storyImage']} />
                <p className={styles['storyName']}>{story.name}</p>
              </li>
            )
          })}

        </ul>
      </div>

      <div
        onClick={handlePopupClick}
        className={[
          styles['popup'], isPopupOpen ? "" : styles['popup_hidden']
        ].join(" ")}
      >
        <div
          className={styles['popupContainer']}
          onClick={handlePopupContainerClick}
          style={{
            backgroundSize: "cover",
            backgroundColor: currentChapter?.background?.type === "color"
              ? currentChapter?.background?.color
              : "",
            backgroundImage: currentChapter?.background?.type === "image"
              ? "url(" + currentChapter?.background?.url + ")"
              : "",
          }}
        >
          <div
            className={styles['popupOverlay']}
            style={{
              backgroundColor: `rgba(0,0,0,${currentChapter?.background?.overlayOpacity || 0})`
            }}
          ></div>
          <img src={closeIcon} alt="" className={styles['closeIcon']} onClick={() => setIsPopupOpen(false)} />

          <div className={styles['popupChaptersCounter']}>
            {currentStory?.chapters?.map((_, index) => {
              return (
                <div key={index} className={[
                  styles['popupChaptersCounterItem'],
                  currentChapterNumber > index ? styles['popupChaptersCounterItemActive'] : ""
                ].join(" ")}>
                  {currentChapterNumber === index && isPopupOpen && (
                    <div 
                      className={styles['popupChaptersCounterItemBar']}
                    ></div>

                  )}
                </div>
              )
            })}
          </div>

          <h2 className={styles['popupTitle']}>
            {currentStory?.name}
          </h2>

          <div className={styles['popupContent']}>
            {currentChapter?.texts?.map((text, index) => {
              return (
                <span
                  key={index}
                  className={styles['contentText']}
                  style={{
                    left: text.position[0],
                    top: text.position[1],
                    color: text.color,
                    fontSize: text.fontSize,
                    fontWeight: text.isBold ? 'bold' : '400',
                    width: text.width || 'auto',
                  }}
                >
                  {text.text}
                </span>
              )
            })}

            {currentChapter?.buttons?.map((button, index) => {
              return (
                <Link
                  key={index}
                  to={button.url}
                  className={styles['popupButton']}
                  style={{
                    color: button.textColor,
                    fontSize: button.fontSize,
                    fontWeight: button.isBold ? 'bold' : '400',
                    backgroundColor: button.bgColor,
                    top: button.position[0],
                    left: button.position[1],
                    width: button.size[0] || "initial",
                    height: button.size[1] || "initial",
                  }}
                >
                  {button.text}
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    </>
  );
};

export default Main;