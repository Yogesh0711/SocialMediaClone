let imgTag = document.getElementById("imageForpreview");
let imgName;

let profile_pic = localStorage.getItem("prfileDp");
document.getElementById("post_prof").setAttribute("src", profile_pic);


//for comments object
let comments = JSON.parse(localStorage.getItem("comments"));


let postCount = localStorage.getItem("postCount");

let pos_myself = JSON.parse(localStorage.getItem("pos_myself"));

// for getting input
var inputFile1 = document.querySelector("#fileinput");
var NewImage = "";
inputFile1.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    NewImage = reader.result;
    console.log(NewImage);
    uploadImg(NewImage);
  });
  reader.readAsDataURL(this.files[0]);
});

function uploadImg(a) {
  // var NewImage = "";
  // document.getElementById("postButton").style.visibility = "visible";
  document.getElementById("imageForpreview").src = a;
  document.getElementById("post_forUpload").style.display = "none";
  document.getElementById("post_FordisplayImg").style.display = "block";

  // var reader = new FileReader();
  // reader.onload = function () {
  //   NewImage = reader.result;
  //   imgTag.src = reader.result;
  // };
  // console.log(NewImage);
  // reader.readAsDataURL(event.target.files[0]);

  imgTag.style.display = "block";
  imgTag.style.margin = "20px auto";
  let postFor = document.createElement("button");
  document.getElementById("headingP").innerText = "Preview";
  postFor.innerText = "post";
  postFor.setAttribute("class", "postBut");
  postFor.setAttribute("id", "postButton");
  postFor.setAttribute("onclick", "toPost()");
  document.getElementById("headingP").appendChild(postFor);
}


function toPost() {
  let textVal = document.getElementById("createPostText").value;
  console.log(textVal);

  document.getElementById("post_forUpload").style.display = "flex";
  document.getElementById("post_FordisplayImg").style.display = "none";
  let tempPost = {
    id: [Number(postCount)],
    likcount: 0,
    user: ["Yogesh_07"],
    quote: [textVal],
    profile: [localStorage.getItem("prfileDp")],
    posts: [NewImage],
    isLike: [0],
    isBook: [0],
  };
  pos_myself[postCount] = tempPost;

  let tempCom={
    comm:[],
  }
  comments[postCount]=tempCom;
  
  postCount++;
  if (postCount > 10) {
    postCount = 26;
  }
  
  
  document.getElementById("postButton").style.visibility = "hidden";
  localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
  localStorage.setItem("postCount", postCount);
  localStorage.setItem("comments", JSON.stringify(comments));
}

// postCount = 5;
// //delete pos_myself[5];
// //delete pos_myself[26];
// delete comments[6];
// localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
// localStorage.setItem("postCount", postCount);
// localStorage.setItem("comments", JSON.stringify(comments));
