// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run amimation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];  
  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "-=1"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 .smiley",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 1.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )    
    .staggerFrom(
      ".wish-hbd",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )    
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .from(".message1", 0.7, ideaTextTrans)
    .to(".message1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message2", 0.7, ideaTextTrans)
    .to(".message2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message3", 0.7, ideaTextTrans)
    .to(".message3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message4", 0.7, ideaTextTrans)
    .to(".message4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message5", 0.7, ideaTextTrans)
    .to(".message5", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message6", 0.7, ideaTextTrans)
    .to(".message6", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message7", 0.7, ideaTextTrans)
    .to(".message7", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message8", 0.7, ideaTextTrans)
    .to(".message8", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message9", 0.7, ideaTextTrans)
    .to(".message9", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message10", 0.7, ideaTextTrans)
    .to(".message10", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message11", 0.7, ideaTextTrans)
    .to(".message11", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message12", 0.7, ideaTextTrans)
    .to(".message12", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message13", 0.7, ideaTextTrans)
    .to(".message13", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message14", 0.7, ideaTextTrans)
    .to(".message14", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message15", 0.7, ideaTextTrans)
    .to(".message15", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message16", 0.7, ideaTextTrans)
    .to(".message16", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message17", 0.7, ideaTextTrans)
    .to(".message17", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message18", 0.7, ideaTextTrans)
    .to(".message18", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message19", 0.7, ideaTextTrans)
    .to(".message19", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message20", 0.7, ideaTextTrans)
    .to(".message20", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message21", 0.7, ideaTextTrans)
    .to(".message21", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message22", 0.7, ideaTextTrans)
    .to(".message22", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message23", 0.7, ideaTextTrans)
    .to(".message23", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message24", 0.7, ideaTextTrans)
    .to(".message24", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message25", 0.7, ideaTextTrans)
    .to(".message25", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message26", 0.7, ideaTextTrans)
    .to(".message26", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message27", 0.7, ideaTextTrans)
    .to(".message27", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message28", 0.7, ideaTextTrans)
    .to(".message28", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message29", 0.7, ideaTextTrans)
    .to(".message29", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message30", 0.7, ideaTextTrans)
    .to(".message30", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".message31", 0.7, ideaTextTrans)
    .to(".message31", 0.7, ideaTextTransLeave, "+=1.5")
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};


// Run fetch and animation in sequence
fetchData();
