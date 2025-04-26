
//for profile

//localStorage.setItem("prfileDp", "images/profile.jpg");


let profile_pic = localStorage.getItem("prfileDp");
document.getElementById("home_prof").setAttribute("src", profile_pic);


let storyFi = {
  1: ["images/yoge.mp4"],
  2: ["images/samcurren.mp4"],
  3: ["images/ragu.mp4"],
  4: ["images/anand.mp4"],
  5: ["images/pragathi.mp4"],
  6: ["images/dhoni.mp4"],
  7: ["images/murugan.mp4"],
  8: ["images/pragathi.mp4"],
  9: ["images/bobby.mp4"],
  10: ["images/taylor.mp4"],
  11: ["images/rohit.mp4"],
};

let profileimg=JSON.parse(localStorage.getItem("profileimg"));
let userArr=JSON.parse(localStorage.getItem("userArr"));


// let profileimg = {
//   1: [profile_pic],
//   2: ["images/samcurren.jpeg"],
//   3: ["images/ragu.jpeg"],
//   4: ["images/anand.jpeg"],
//   5: ["images/pragathi.jpeg"],
//   6: ["images/dhoni.jpg"],
//   7: ["images/murugan.jpeg"],
//   8: ["images/sowmi.jpeg"],
//   9: ["images/dear.jpeg"],
//   10: ["images/taylor.jpeg"],
//   11: ["images/rohit.jpg"],
// };

// //localStorage.setItem("profileimg", JSON.stringify(profileimg));

// let userArr = {
//   1: ["Yogesh_07"],
//   2: ["SamCurren58"],
//   3: ["Thala_ragu"],
//   4: ["Ananth_sma"],
//   5: ["Pragathi_Cutie"],
//   6: ["mahi7781"],
//   7: ["Murugan_05"],
//   8: ["Sowmi_BTS"],
//   9: ["Dear_comrade"],
//   10: ["taylor_Swift"],
//   11: ["rohitsharma45"],
// };
// //localStorage.setItem("userArr", JSON.stringify(userArr));








//story
for (i = 1; i < 12; i++) {
  document.getElementById(i).src = profileimg[i];
}

var num;
const stor = document.querySelectorAll(".stories");
stor.forEach((stories) => {
  stories.addEventListener("click", function stor(event) {
    console.log("yoge");
    document.getElementById("home").style.display = "none";
    document.body.style.backgroundColor = "black";
    document.getElementById("story_pre").style.display = "block";
    num = event.target.id;
    storyChange(num);
  });
});

function storyChange(num) {
  console.log(num);
  document.getElementById("story_vid").setAttribute("src", storyFi[num]);
}

// function for counting property in object
function objLength(a) {
  let count = 0;
  for (var c in a) {
    count = count + 1;
  }
  return count;
}

//object of my post

let pos_myself = JSON.parse(localStorage.getItem("pos_myself"));
// let pos_myself = {
//     1: {
//         id: [1],
//         likcount: 120,
//         user: ["Yogesh_07"],
//         quote: [" AttroStart🤩"],
//         profile: [profile_pic],
//         posts: ["images/yogepost.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     2: {
//         id: [2],
//         likcount: 90,
//         user: ["Yogesh_07"],
//         quote: [" First Calligraphy🌟💖"],
//         profile: [profile_pic],
//         posts: ["images/yogepost2.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     3: {
//         id: [3],
//         likcount: 44,
//         user: ["Yogesh_07"],
//         quote: [" A frd in need is friend indeed😽"],
//         profile: [profile_pic],
//         posts: ["images/yogepost3.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     4: {
//         id: [4],
//         likcount: 48,
//         user: ["Yogesh_07"],
//         quote: [" Somepeople's are precious😽💎"],
//         profile: [profile_pic],
//         posts: ["images/yogepost4.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },

// }
// localStorage.setItem("pos_myself", JSON.stringify(pos_myself));

//post

//pos_myself[my_post]["id"];

//object of comment

let comments = JSON.parse(localStorage.getItem("comments"));
// console.log(comments);

//function for create post for myself
function create_post(my_post) {
  var inner = document.createElement("div");
  inner.setAttribute("class", "post");
  inner.setAttribute("id", "id" + pos_myself[my_post]["id"]);
  document.getElementById("post_bar").appendChild(inner);
  //post top
  var one = document.createElement("div");
  one.setAttribute("class", "post_top");
  one.setAttribute("id", "post_top" + pos_myself[my_post]["id"]);
  document.getElementById("id" + pos_myself[my_post]["id"]).appendChild(one);
  //postr image or video
  var two = document.createElement("div");
  two.setAttribute("class", "post_mid");
  two.setAttribute("id", "mid_pos" + pos_myself[my_post]["id"]);
  document.getElementById("id" + pos_myself[my_post]["id"]).appendChild(two);
  //profile pic in top
  var pro = document.createElement("div");
  pro.setAttribute("class", "pro_top");
  var pro_pic = document.createElement("img");
  pro_pic.setAttribute("class", "propic");
  pro_pic.setAttribute("src", pos_myself[my_post]["profile"]);
  pro.appendChild(pro_pic);
  document
    .getElementById("post_top" + pos_myself[my_post]["id"])
    .appendChild(pro);

  //porifle bottom
  var bot = document.createElement("div");
  bot.setAttribute("class", "post_bot");
  bot.setAttribute("id", "post_bot" + pos_myself[my_post]["id"]);
  bot.style.setProperty("padding-left", "7px");
  document.getElementById("id" + pos_myself[my_post]["id"]).appendChild(bot);

  //profile info
  var name_top = document.createElement("div");
  name_top.setAttribute("class", "pro_name");
  document
    .getElementById("post_top" + pos_myself[my_post]["id"])
    .appendChild(name_top);

  //name in profile
  var name_inf = document.createElement("h4");
  name_inf.innerText = pos_myself[my_post]["user"];
  document
    .querySelector("#post_top" + pos_myself[my_post]["id"] + " :nth-child(2)")
    .appendChild(name_inf);

  //post as image
  document.getElementById("mid_pos" + pos_myself[my_post]["id"]).innerHTML =
    "<img class='post_img' />";

  //post as video
  // document.getElementById("mid_pos1").innerHTML="<video class='post_vid'></video>";

  //profile source
  document
    .querySelector("#mid_pos" + pos_myself[my_post]["id"] + " :nth-child(1)")
    .setAttribute("src", pos_myself[my_post]["posts"]);

  //for is like?
  let hear_count = pos_myself[my_post]["isLike"];
  let hear_type;
  let hear_style;
  if (hear_count == 0) {
    hear_type = "regular";
    hear_style = "black";
  } else {
    hear_type = "solid";
    hear_style = "red";
  }

  //for bookmark?
  let book_mar = pos_myself[my_post]["isBook"];
  let book_type;
  if (book_mar == 0) {
    book_type = "regular";
  } else {
    book_type = "solid";
  }

  //lists below post
  document.getElementById("post_bot" + pos_myself[my_post]["id"]).innerHTML =
    "<ul class='ul_post'><li id=heart_id" +
    pos_myself[my_post]["id"] +
    "><i class='fa-" +
    hear_type +
    " fa-heart heart' style='color:" +
    hear_style +
    "'></i></li><li><i class='fa-regular fa-comment'></i></li> <li></li> <li><i class='fa-" +
    book_type +
    " fa-bookmark book' onclick='fbook(pos_myself," +
    pos_myself[my_post]["id"] +
    ")' id=book_id" +
    pos_myself[my_post]["id"] +
    "></i></li> </ul>";

  //info of post

  //like
  var lik_count = document.createElement("h4");
  lik_count.setAttribute("id", "like" + pos_myself[my_post]["id"]);
  lik_count.innerText = pos_myself[my_post]["likcount"] + " likes";

  document
    .getElementById("post_bot" + pos_myself[my_post]["id"])
    .appendChild(lik_count);
  var p_tag = document.createElement("p");

  //name with quote

  p_tag.innerHTML =
    "<b>" +
    pos_myself[my_post]["user"] +
    "</b>" +
    pos_myself[my_post]["quote"] +
    "<br><br>";
  document
    .getElementById("post_bot" + pos_myself[my_post]["id"])
    .appendChild(p_tag);

  let countShow = 0;

  var p_com = document.createElement("p");
  p_com.setAttribute(
    "onclick",
    "showComm(" + pos_myself[my_post]["id"] + "," + countShow + ")"
  );
  p_com.setAttribute("class","viewcom");
  p_com.innerText = "View all comments";
  p_com.style.setProperty("font-size", "14px");
  p_com.style.setProperty("color", "light-grey");
  document
    .getElementById("post_bot" + pos_myself[my_post]["id"])
    .appendChild(p_com);
  ////
  ///
  ////
  ////

  //for comment showing div

  var showCom = document.createElement("div");
  showCom.setAttribute("class", "showCom");
  //showCom.style.display = "none";
  showCom.setAttribute("id", "showCom" + pos_myself[my_post]["id"]);
  document
    .getElementById("post_bot" + pos_myself[my_post]["id"])
    .appendChild(showCom);

  ///
  ///
  //commentbox
  var com_in = document.createElement("input");
  com_in.setAttribute("placeholder", "Message");
  com_in.setAttribute("id", "comin" + pos_myself[my_post]["id"]);
  com_in.setAttribute(
    "onchange",
    "putComment(" + pos_myself[my_post]["id"] + "," + "this.value)"
  );
  com_in.className = "com_inp";
  var com_box = document.createElement("div");
  com_box.setAttribute("class", "comment_box");
  com_box.appendChild(com_in);
  document
    .getElementById("post_bot" + pos_myself[my_post]["id"])
    .appendChild(com_box);

  // //for comment onload

  let comArr = comments[my_post]["comm"];
  console.log(comArr);
  if (comArr.length != 0) {
    for (m = 0; m < comArr.length; m++) {
      var wholeDiv = document.createElement("div");
      wholeDiv.style.setProperty("margin-top", "10px");

      wholeDiv.setAttribute("class", "classForDivinpost");
      var comProfile = document.createElement("img");
      comProfile.setAttribute("class", "profileinPost");
      comProfile.src = profile_pic;

      var resultCom = document.createElement("p");
      resultCom.style.setProperty("margin-top", "10px");
      resultCom.style.setProperty("margin-left", "5px");
      resultCom.innerText = comArr[m];

      var dustPan = document.createElement("i");
      dustPan.setAttribute("class", "fa-regular fa-trash-can");
      dustPan.setAttribute(
        "onclick",
        "removeCom(" + my_post + "," + m + "," + "event)"
      );
      dustPan.classList.add("class", "lastChildOfcom");
      wholeDiv.appendChild(comProfile);
      wholeDiv.appendChild(resultCom);
      wholeDiv.appendChild(dustPan);
      showCom.appendChild(wholeDiv);
    }
  }
}

//object post for other

let post_others = JSON.parse(localStorage.getItem("post_others"));

// let post_others = {
//     11: {
//         id: [11],
//         likcount: 124048,
//         user: ["SamCurren58"],
//         quote: [" World Champions" + "💖" + "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
//         profile: ["images/samcurren.jpeg"],
//         posts: ["images/sampost.jpeg"],
//         isLike: [1],
//     },
//     12: {
//         id: [12],
//         likcount: 104048,
//         user: ["SamCurren58"],
//         quote: [" It's for us" + "&#x1F60D;"],
//         profile: ["images/samcurren.jpeg"],
//         posts: ["images/sampost1.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     13: {
//         id: [13],
//         likcount: 14048,
//         user: ["SamCurren58"],
//         quote: [" Isn't a dream" + "&#x1F60D;" + "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
//         profile: ["images/samcurren.jpeg"],
//         posts: ["images/sampost2.jpeg"],
//         isLike: [1],
//         isBook:[0],
//     },
//     14: {
//         id: [14],
//         likcount: 48,
//         user: ["Thala_ragu"],
//         quote: [" Fam_Love" + "&#x1F60D;"],
//         profile: ["images/ragu.jpeg"],
//         posts: ["images/ragupost.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     15: {
//         id: [15],
//         likcount: 68,
//         user: ["Ananth_sma"],
//         quote: [" A gud sis can b gud a frnd " + "❣️"],
//         profile: ["images/anand.jpeg"],
//         posts: ["images/anandpost.jpeg"],
//         isLike: [1],
//         isBook:[1],

//     },
//     16: {
//         id: [16],
//         likcount: 23,
//         user: ["Pragathi_Cutie"],
//         quote: [" Vibe with Sowmii " + "🫶"],
//         profile: ["images/pragathi.jpeg"],
//         posts: ["images/pragathipost.jpeg"],
//         isLike: [1],
//         isBook:[1],
//     },
//     17: {
//         id: [17],
//         likcount: 52,
//         user: ["Sowmi_BTS"],
//         quote: [" Vibe with Cutii " + "🥰"],
//         profile: ["images/sowmi.jpeg"],
//         posts: ["images/sowmipost.jpeg"],
//         isLike: [0],
//         isBook:[1],
//     },
//     18: {
//         id: [18],
//         likcount: 120034,
//         user: ["mahi7781"],
//         quote: [" Weekend Thereapy begin" + "🏞️"],
//         profile: ["images/dhoni.jpg"],
//         posts: ["images/dhonipost.jpg"],
//         isLike: [1],
//         isBook:[0],
//     },
//     19: {
//         id: [19],
//         likcount: 23456,
//         user: ["mahi7781"],
//         quote: [" My love, My miracle, My daughter" + "💛"],
//         profile: ["images/dhoni.jpg"],
//         posts: ["images/dhonipost.png"],
//         isLike: [0],
//         isBook:[0],
//     },
//     20: {
//         id: [20],
//         likcount: 29,
//         user: ["Murugan_05"],
//         quote: [" where lyf begins & love never ends" + "🥰"],
//         profile: ["images/murugan.jpeg"],
//         posts: ["images/muruganpost.jpeg"],
//         isLike: [1],
//         isBook:[0],
//     },
//     21: {
//         id: [21],
//         likcount: 1223567,
//         user: ["taylor_Swift"],
//         quote: [" were lyf begins" + "🎶"],
//         profile: ["images/taylor.jpeg"],
//         posts: ["images/taylorpost.jpeg"],
//         isLike: [1],
//         isBook:[1],
//     },
//     22: {
//         id: [22],
//         likcount: 223123,
//         user: ["taylor_Swift"],
//         quote: [" where word fails Music speaks" + "🎸🎶"],
//         profile: ["images/taylor.jpeg"],
//         posts: ["images/taylorpost1.jpeg"],
//         isLike: [1],
//         isBook:[1],
//     },
//     23: {
//         id: [23],
//         likcount: 65437,
//         user: ["taylor_Swift"],
//         quote: [" Make your own kind of music" + "🎹"],
//         profile: ["images/taylor.jpeg"],
//         posts: ["images/taylorpost2.jpeg"],
//         isLike: [1],
//         isBook:[1],
//     },
//     24: {
//         id: [24],
//         likcount: 56784,
//         user: ["rohitsharma45"],
//         quote: [" Wid u it's Different" + "😽"],
//         profile: ["images/rohit.jpg"],
//         posts: ["images/rohitpost.jpeg"],
//         isLike: [0],
//         isBook:[0],
//     },
//     25: {
//         id: [25],
//         likcount: 234876,
//         user: ["rohitsharma45"],
//         quote: [" Dis smyl is brought to u by famly Luv" + "🤗"],
//         profile: ["images/rohit.jpg"],
//         posts: ["images/rohitpost1.jpeg"],
//         isLike: [0],
//         isBook:[1],
//     },
// }
// localStorage.setItem("post_others", JSON.stringify(post_others));

//post_others[my_post]["id"];
// function for create post for others as inbuilt

function postForOthers(my_post) {
  var inner = document.createElement("div");
  inner.setAttribute("class", "post");
  inner.setAttribute("id", "id" + post_others[my_post]["id"]);
  document.getElementById("post_bar").appendChild(inner);
  //post top
  var one = document.createElement("div");
  one.setAttribute("class", "post_top");
  one.setAttribute("id", "post_top" + post_others[my_post]["id"]);
  document.getElementById("id" + post_others[my_post]["id"]).appendChild(one);
  //postr image or video
  var two = document.createElement("div");
  two.setAttribute("class", "post_mid");
  two.setAttribute("id", "mid_pos" + post_others[my_post]["id"]);
  document.getElementById("id" + post_others[my_post]["id"]).appendChild(two);
  //profile pic in top
  var pro = document.createElement("div");
  pro.setAttribute("class", "pro_top");
  var pro_pic = document.createElement("img");
  pro_pic.setAttribute("class", "propic");
  pro_pic.setAttribute("src", post_others[my_post]["profile"]);
  pro.appendChild(pro_pic);
  document
    .getElementById("post_top" + post_others[my_post]["id"])
    .appendChild(pro);

  //porifle bottom
  var bot = document.createElement("div");
  bot.setAttribute("class", "post_bot");
  bot.setAttribute("id", "post_bot" + post_others[my_post]["id"]);
  bot.style.setProperty("padding-left", "7px");
  document.getElementById("id" + post_others[my_post]["id"]).appendChild(bot);

  //profile info
  var name_top = document.createElement("div");
  name_top.setAttribute("class", "pro_name");
  document
    .getElementById("post_top" + post_others[my_post]["id"])
    .appendChild(name_top);

  //name in profile
  var name_inf = document.createElement("h4");
  name_inf.innerText = post_others[my_post]["user"];
  document
    .querySelector("#post_top" + post_others[my_post]["id"] + " :nth-child(2)")
    .appendChild(name_inf);

  //post as image
  document.getElementById("mid_pos" + post_others[my_post]["id"]).innerHTML =
    "<img class='post_img' />";

  //post as video
  // document.getElementById("mid_pos1").innerHTML="<video class='post_vid'></video>";

  //profile source
  document
    .querySelector("#mid_pos" + post_others[my_post]["id"] + " :nth-child(1)")
    .setAttribute("src", post_others[my_post]["posts"]);

  //for liked?
  let hear_count = post_others[my_post]["isLike"];
  let hear_type;
  let hear_style;
  if (hear_count == 0) {
    hear_type = "regular";
    hear_style = "black";
  } else {
    hear_type = "solid";
    hear_style = "red";
  }

  //for bookmark?
  let book_mar = post_others[my_post]["isBook"];
  let book_type;
  if (book_mar == 0) {
    book_type = "regular";
  } else {
    book_type = "solid";
  }

  //lists below post
  document.getElementById("post_bot" + post_others[my_post]["id"]).innerHTML =
    "<ul class='ul_post'><li id=heart_id" +
    post_others[my_post]["id"] +
    "><i class='fa-" +
    hear_type +
    " fa-heart heartothe' style='color:" +
    hear_style +
    "'></i></li><li><i class='fa-regular fa-comment'></i></li> <li></li> <li ><i class='fa-" +
    book_type +
    " fa-bookmark book' onclick='fbook(post_others," +
    post_others[my_post]["id"] +
    ")' id=book_id" +
    post_others[my_post]["id"] +
    "></i></li> </ul>";

  //info of post

  //like
  var lik_count = document.createElement("h4");
  lik_count.setAttribute("id", "like" + post_others[my_post]["id"]);
  lik_count.innerText = post_others[my_post]["likcount"] + " likes";

  document
    .getElementById("post_bot" + post_others[my_post]["id"])
    .appendChild(lik_count);
  var p_tag = document.createElement("p");

  //name with quote

  p_tag.innerHTML =
    "<b>" +
    post_others[my_post]["user"] +
    "</b>" +
    post_others[my_post]["quote"] +
    "<br><br>";
  document
    .getElementById("post_bot" + post_others[my_post]["id"])
    .appendChild(p_tag);

  let countShow = 0;

  var p_com = document.createElement("p");
  p_com.setAttribute(
    "onclick",
    "showComm(" + post_others[my_post]["id"] + "," + countShow + ")"
  );

  p_com.innerText = "View all comments";

  p_com.style.setProperty("font-size", "14px");
  p_com.style.setProperty("color", "light-grey");
   p_com.setAttribute("class","viewcom");
  document
    .getElementById("post_bot" + post_others[my_post]["id"])
    .appendChild(p_com);
  ////
  ///
  ////
  ////

  //for comment showing div

  var showCom = document.createElement("div");
  showCom.setAttribute("class", "showCom");
  //showCom.style.display = "none";
  showCom.setAttribute("id", "showCom" + post_others[my_post]["id"]);
  document
    .getElementById("post_bot" + post_others[my_post]["id"])
    .appendChild(showCom);

  ///
  ///

  //commentbox
  var com_in = document.createElement("input");
  com_in.setAttribute("placeholder", "Message");
  com_in.className = "com_inp";
  com_in.setAttribute("id", "comin" + post_others[my_post]["id"]);
  com_in.setAttribute(
    "onchange",
    "putComment(" + post_others[my_post]["id"] + "," + "this.value)"
  );
  var com_box = document.createElement("div");
  com_box.setAttribute("class", "comment_box");
  com_box.appendChild(com_in);
  document
    .getElementById("post_bot" + post_others[my_post]["id"])
    .appendChild(com_box);

  // //for comment onload

  let comArr = comments[my_post]["comm"];
  console.log(comArr);
  if (comArr.length != 0) {
    for (m = 0; m < comArr.length; m++) {
      var wholeDiv = document.createElement("div");
      wholeDiv.style.setProperty("margin-top", "10px");

      wholeDiv.setAttribute("class", "classForDivinpost");
      var comProfile = document.createElement("img");
      comProfile.setAttribute("class", "profileinPost");
      comProfile.src = profile_pic;

      var resultCom = document.createElement("p");
      resultCom.style.setProperty("margin-top", "10px");
      resultCom.style.setProperty("margin-left", "5px");
      resultCom.innerText = comArr[m];

      var dustPan = document.createElement("i");
      dustPan.setAttribute("class", "fa-regular fa-trash-can");
      dustPan.setAttribute(
        "onclick",
        "removeCom(" + my_post + "," + m + "," + "event)"
      );
      dustPan.classList.add("class", "lastChildOfcom");
      wholeDiv.appendChild(comProfile);
      wholeDiv.appendChild(resultCom);
      wholeDiv.appendChild(dustPan);
      showCom.appendChild(wholeDiv);
    }
  }
}

// for creating post myself
let keyofMypost = Object.keys(pos_myself);

for (i = 0; i < keyofMypost.length; i++) {
  create_post(keyofMypost[i]);
}

postForOthers(12);
postForOthers(21);
postForOthers(17);
// create_post(4);
postForOthers(18);
postForOthers(14);
postForOthers(15);
postForOthers(25);
// create_post(2);
postForOthers(16);
postForOthers(23);
postForOthers(11);
postForOthers(19);
postForOthers(20);
// create_post(3);
postForOthers(22);
postForOthers(24);
postForOthers(13);

//passing bookmark to local storage
// let bookArr={};
// localStorage.setItem("bookArr", JSON.stringify(bookArr));

let bookArr = JSON.parse(localStorage.getItem("bookArr"));
// bookArr[11]=post_others[11];
// bookArr[15]=post_others[15];
// bookArr[16]=post_others[16];
// bookArr[17]=post_others[17];
// bookArr[21]=post_others[21];
// bookArr[22]=post_others[22];
// bookArr[23]=post_others[23];
// bookArr[25]=post_others[25];
// localStorage.setItem("bookArr", JSON.stringify(bookArr));
//delete bookArr[key];

//for like on my post
const like = document.querySelectorAll(".heart");
like.forEach((heart) => {
  heart.addEventListener("click", function flike(event) {
    let post_id = event.target.parentElement.id;
    console.log(post_id);
    let post_num = post_id[post_id.length - 1];
    console.log(post_num);

    let likecount = document.getElementById(
      "like" + pos_myself[post_num]["id"]
    );
    //console.log(event.target.className);
    if (event.target.className == "fa-solid fa-heart heart") {
      pos_myself[post_num]["likcount"] = pos_myself[post_num]["likcount"] - 1;
      event.target.style = "color:black";
      this.className = "fa-regular fa-heart heart";
      likecount.innerText = pos_myself[post_num]["likcount"] + " likes";
      pos_myself[post_num]["isLike"] = 0;
      localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    } else if (event.target.className == "fa-regular fa-heart heart") {
      pos_myself[post_num]["likcount"] = pos_myself[post_num]["likcount"] + 1;
      //console.log(pos_myself[my_post]["likcount"]);
      this.className = "fa-solid fa-heart heart";
      event.target.style = "color:red";
      likecount.innerText = pos_myself[post_num]["likcount"] + " likes";
      pos_myself[post_num]["isLike"] = 1;
      localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    }
  });
});

//for bookmark my post

function fbook(a, b) {
  let id = document.getElementById("book_id" + b);
  console.log("yogebook");
  // console.log(event.target.className);
  if (id.className == "fa-solid fa-bookmark book") {
    id.style = "color:black";
    id.className = "fa-regular fa-bookmark book";
    a[b]["isBook"] = 0;
    delete bookArr[b];
    localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    localStorage.setItem("post_others", JSON.stringify(post_others));
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
  } else if (id.className == "fa-regular fa-bookmark book") {
    id.className = "fa-solid fa-bookmark book";
    a[b]["isBook"] = 1;
    bookArr[b] = a[b];
    localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    localStorage.setItem("post_others", JSON.stringify(post_others));
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
  }
}

// post_others
//for like on others post

const like_other = document.querySelectorAll(".heartothe");
like_other.forEach((heartothe) => {
  heartothe.addEventListener("click", function flike_other(event) {
    let post_id = event.target.parentElement.id;
    console.log(post_id);
    let post_numOthers =
      post_id[post_id.length - 2] + post_id[post_id.length - 1];
    console.log(post_numOthers);

    let like_othercount = document.getElementById(
      "like" + post_others[post_numOthers]["id"]
    );
    //console.log(event.target.className);
    if (event.target.className == "fa-solid fa-heart heartothe") {
      post_others[post_numOthers]["likcount"] =
        post_others[post_numOthers]["likcount"] - 1;
      event.target.style = "color:black";
      this.className = "fa-regular fa-heart heartothe";
      like_othercount.innerText =
        post_others[post_numOthers]["likcount"] + " likes";
      post_others[post_numOthers]["isLike"] = 0;
      localStorage.setItem("post_others", JSON.stringify(post_others));
    } else if (event.target.className == "fa-regular fa-heart heartothe") {
      post_others[post_numOthers]["likcount"] =
        post_others[post_numOthers]["likcount"] + 1;
      //console.log(post_others[my_post]["likcount"]);
      this.className = "fa-solid fa-heart heartothe";
      event.target.style = "color:red";
      like_othercount.innerText =
        post_others[post_numOthers]["likcount"] + " likes";
      post_others[post_numOthers]["isLike"] = 1;
      localStorage.setItem("post_others", JSON.stringify(post_others));
    }
  });
});

//object for side

let sideOb = JSON.parse(localStorage.getItem("sideOb"));

let sideObArr = Object.keys(sideOb);

let foloObj = JSON.parse(localStorage.getItem("foloObj"));

// let sideOb = {
//   2: {
//     prof: "images/obama.jpeg",
//     text1: "Obama",
//     text2: "3.3M Followers",
//     foltest: foloObj[2]["foltest"],
//   },
//   3: {
//     prof: "images/sk.jpeg",
//     text1: "SivaK",
//     text2: "2.3M Followers",
//     foltest: foloObj[3]["foltest"],
//   },
//   4: {
//     prof: "images/virat.jpg",
//     text1: "Virat_Anu",
//     text2: "5.5M Followers",
//     foltest: foloObj[4]["foltest"],
//   },
//   5: {
//     prof: "images/vjd.jpg",
//     text1: "Vijay_DV",
//     text2: "2.9M Followers",
//     foltest: foloObj[5]["foltest"],
//   },
// };

//localStorage.setItem("sideOb", JSON.stringify(sideOb));
//function for side bar
let sideBar = document.getElementById("side_bar");
//localStorage.setItem("bookArr", JSON.stringify(bookArr));

//function for side post

//side profile
let sideProfile = {
  1: {
    prof: profile_pic,
    text1: "Yogesh_07",
    text2: "145 Followers",
    foltest: 0,
  },
};

function sideProfileFun(a) {
  //clone my tag
  let ownSide = document.createElement("div");
  ownSide.setAttribute("class", "side_clones");

  //profile tag sidebar
  let roundSide = document.createElement("div");
  roundSide.setAttribute("class", "side_circ");
  ownSide.appendChild(roundSide);

  let sid_profi = document.createElement("img");
  sid_profi.setAttribute("src", sideProfile[a]["prof"]);
  sid_profi.setAttribute("class", "sideProf");
  roundSide.appendChild(sid_profi);

  //side info
  let side_whole = document.createElement("div");
  side_whole.setAttribute("class", "sideWhole");
  ownSide.appendChild(side_whole);

  //side user
  let side_pro = document.createElement("h4");
  side_pro.innerText = sideProfile[a]["text1"];
  side_whole.appendChild(side_pro);

  //side nickname
  let side_info = document.createElement("h6");
  side_info.style.marginTop = "5px";
  side_info.style.fontSize = "normal";
  side_info.style.color = "grey";
  side_info.innerText = sideProfile[a]["text2"];
  side_whole.appendChild(side_info);

  sideBar.appendChild(ownSide);
}
sideProfileFun(1);

//function for cloning side suggestions
function side(a) {
  //clone my tag
  let ownSide = document.createElement("div");
  ownSide.setAttribute("class", "side_clones");

  //profile tag sidebar
  let roundSide = document.createElement("div");
  roundSide.setAttribute("class", "side_circ");
  ownSide.appendChild(roundSide);

  let sid_profi = document.createElement("img");
  sid_profi.setAttribute("src", sideOb[a]["prof"]);
  sid_profi.setAttribute("class", "sideProf");
  roundSide.appendChild(sid_profi);

  //side info
  let side_whole = document.createElement("div");
  side_whole.setAttribute("class", "sideWhole");
  ownSide.appendChild(side_whole);

  let divBut = document.createElement("div");
  divBut.setAttribute("class", "forflex");
  ownSide.appendChild(divBut);
  let folloBut = document.createElement("button");
  folloBut.setAttribute("id", "folo" + a);
  folloBut.setAttribute("onclick", "follow(" + a + ")");
  folloBut.setAttribute("class", "sideButton");
  if (sideOb[a]["foltest"] == 1) {
    folloBut.innerText = "Following";
  } else {
    folloBut.innerText = "Follow  + ";
  }

  divBut.appendChild(folloBut);

  //side user
  let side_pro = document.createElement("h4");
  side_pro.innerText = sideOb[a]["text1"];
  side_whole.appendChild(side_pro);

  //side nickname
  let side_info = document.createElement("h6");
  side_info.style.marginTop = "5px";
  side_info.style.fontSize = "normal";
  side_info.style.color = "grey";
  side_info.innerText = sideOb[a]["text2"];
  side_whole.appendChild(side_info);

  sideBar.appendChild(ownSide);
}

//sugeestions
let sug_text = document.createElement("h4");
sug_text.innerText = "SUGGESTIONS";
sug_text.style.marginTop = "20px";
sideBar.appendChild(sug_text);

for (m = 0; m < sideObArr.length; m++) {
  side(sideObArr[m]);
  console.log("happened");
}

// let foloObj = JSON.parse(localStorage.getItem("foloObj"));

// delete foloObj[13];
// delete foloObj[14];
// delete foloObj[15];
// delete foloObj[16];
// for (x = 1; x < 6; x++) {
//   foloObj[x + 11] = sideOb[x];
// }
// localStorage.setItem("sideOb", JSON.stringify(sideOb));
// localStorage.setItem("foloObj", JSON.stringify(foloObj));
//localStorage.setItem("foloObj", JSON.stringify(foloObj));

function follow(x) {
  console.log("work");
  let temp = document.getElementById("folo" + x);
  // console.log(temp.innerText);
  if (sideOb[x]["foltest"] == 1) {
    temp.innerText = "Follow  + ";
    console.log("unfollow");
    sideOb[x]["foltest"] = 0;
    delete foloObj[x + 11];
    localStorage.setItem("foloObj", JSON.stringify(foloObj));
    localStorage.setItem("sideOb", JSON.stringify(sideOb));
  } else {
    temp.innerText = "Following";
    sideOb[x]["foltest"] = 1;
    console.log("follow");
    foloObj[x + 11] = sideOb[x];
    localStorage.setItem("foloObj", JSON.stringify(foloObj));
    localStorage.setItem("sideOb", JSON.stringify(sideOb));
  }
}

////
////
////
////
////
////
///for comment putting

// Object

// let comments = JSON.parse(localStorage.getItem("comments"));
function putComment(a, com) {
  console.log(com);

  //let tempArr=comments[a]["comm"]

  document.getElementById("comin" + a).value = " ";
  document.getElementById("comin" + a).setAttribute("placeholder", "Message");
  var wholeDiv = document.createElement("div");
  wholeDiv.style.setProperty("margin-top", "10px");

  wholeDiv.setAttribute("class", "classForDivinpost");
  var comProfile = document.createElement("img");
  comProfile.setAttribute("class", "profileinPost");
  comProfile.src = profile_pic;

  var resultCom = document.createElement("p");
  resultCom.style.setProperty("margin-top", "10px");
  resultCom.style.setProperty("margin-left", "5px");
  resultCom.innerText = com;

  var dustPan = document.createElement("i");
  dustPan.setAttribute("class", "fa-regular fa-trash-can");
  dustPan.setAttribute("onclick", "removeCom(" + a + "," + "event)");
  dustPan.classList.add("class", "lastChildOfcom");
  wholeDiv.appendChild(comProfile);
  wholeDiv.appendChild(resultCom);
  wholeDiv.appendChild(dustPan);
  document.getElementById("showCom" + a).appendChild(wholeDiv);

  if (Object.hasOwn(comments, a)) {
    comments[a]["comm"].push(com);
  } else {
    let tempCom = {
      comm: [com],
    };
    comments[a] = tempCom;
  }
  localStorage.setItem("comments", JSON.stringify(comments));
}

function showComm(a, b) {
  var element = document.getElementById("showCom" + a);
  element.classList.toggle("myPost");
}

//to remove comments

function removeCom(a, m, event) {
  let temComArr = comments[a]["comm"];
  let empArr = [];
  comments[a]["comm"][m] = "";
  console.log(temComArr[m]);
  for (i = 0; i < temComArr.length; i++) {
    if (temComArr[i] != null && temComArr[i] != "") {
      empArr.push(temComArr);
    }
  }
  comments[a]["comm"] = empArr;
  localStorage.setItem("comments", JSON.stringify(comments));
  let temElement = event.target.parentElement;
  document.getElementById("showCom" + a).removeChild(temElement);
}

























//localStorage.setItem("profileimg", JSON.stringify(profileimg));
//localStorage.setItem("userArr", JSON.stringify(userArr));


// for all local storage


