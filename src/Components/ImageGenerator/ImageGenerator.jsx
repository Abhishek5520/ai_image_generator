import React, {useRef, useState, useEffect} from 'react'
import './ImageGenerator.css'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import default_image from '../Assets/lm.jpg'

const ImageGenerator = () => {
    const [image_url, setImage_url] = useState([]);

    const [counter, setCounter] = useState(0);
    let inputRef = useRef(null);

    useEffect(() => {
        const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
        setImage_url(storedArray);
        setCounter(storedArray.length);
        console.log(storedArray);
      }, []);

    const slideLeft = () => {
        var element = document.getElementsByClassName("img-loading")[0];
        element.style.scrollBehavior = "smooth";
        element.scrollLeft -= 500;
    }

    const handleClearLocalStorage = () => {
        localStorage.clear();
        setImage_url([]);
        setCounter(0);
        // Optionally, you can update the state or perform any other actions after clearing local storage.
      };

    const saveBtn = (data) => {
        if(inputRef.current.value === "") return 0;
        if(counter === 10) return 0;
        var element = document.querySelector(".generator-btn");
        // element.style.width = "100px";
        element.innerHTML = "<div class='loader'></div>";
        query(data,element);
        
        
    }

    const slideRight = () => {
        var element = document.getElementsByClassName("img-loading")[0];
        element.style.scrollBehavior = "smooth";
        element.scrollLeft += 500;
    }

    async function query(data,element) {
        if(data === "") return 0;
        if (counter === 10) return 0;

        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: { 
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );

        let blob = await response.blob();
        console.log(blob);
        let mySrc;
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
            // result includes identifier 'data:image/png;base64,' plus the base64 data
            mySrc = reader.result;   
            setImage_url([...image_url, mySrc])
            localStorage.setItem('myArray', JSON.stringify([...image_url, mySrc])); 
            element.innerHTML = "Generate More";
        }
        setCounter(counter+1);
        
    }

  return (
    <div className='ai-image-generator'>
        <div class="bg-images"></div>

        <div className="big-img" id='big-img-box'>
            <img src={counter <= 0?default_image:image_url[0]} id='big-img' alt=''/>
            <span onClick={
                () => {
                    var element = document.getElementById("big-img-box");
                    element.style.display = "none";
                }
            }>X</span>
        </div>

        <div className="body">
            <div className="header">
                <span>Ai</span> Comic Creator
            </div>
            <div className="sub-header">
                <div className="left-arrow"><MdChevronLeft className='leftPtr' onClick={slideLeft} size={35}/></div>
                <div className="img-loading">
                    <div className="image"><img src={counter <= 0?default_image:image_url[0]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 0?default_image:image_url[0];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 1?default_image:image_url[1]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 1?default_image:image_url[1];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 2?default_image:image_url[2]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 2?default_image:image_url[2];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 3?default_image:image_url[3]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 3?default_image:image_url[3];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 4?default_image:image_url[4]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 4?default_image:image_url[4];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 5?default_image:image_url[5]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 5?default_image:image_url[5];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 6?default_image:image_url[6]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 6?default_image:image_url[6];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 7?default_image:image_url[7]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 7?default_image:image_url[7];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 8?default_image:image_url[8]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = counter <= 8?default_image:image_url[8];
                        }
                    }/></div>
                    <div className="image"><img src={counter <= 9?default_image:image_url[9]} alt='' onClick={
                        () => {
                            var element = document.getElementById("big-img-box");
                            element.style.display = "flex";
                            document.getElementById("big-img").src = image_url[9];
                        }
                    }/></div>
                </div>
                <div className="right-arrow"><MdChevronRight className='rightPtr' onClick={slideRight} size={35}/></div>
            </div>
            
            
            <div className="search-box">
                <button className="clear-btn" onClick={handleClearLocalStorage}>
                    Clear
                </button>
                <input type="text" ref = {inputRef} className='search-input' placeholder='Describe Comic Strip'/>
                <button className="generator-btn" onClick={()=>saveBtn({"inputs": `comic strip of ${inputRef.current.value}`})}>
                    {counter === 0? "Generate":"Generate More"}
                </button>
            </div>
        </div>
    </div>
  )

}

export default ImageGenerator