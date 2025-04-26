
// profile page //



//profile

//localStorage.setItem("prfileDp", "images/profile.jpg");
let profile_pic = localStorage.getItem("prfileDp");
document.getElementById("home_prof").setAttribute("src", profile_pic);
document.getElementById("pr_dp").setAttribute("src", profile_pic);


// l

let bookArr = JSON.parse(localStorage.getItem("bookArr"));
let post_others = JSON.parse(localStorage.getItem("post_others"));
let postCount = localStorage.getItem("postCount");

// function for counting property in object
function objLength(a) {
  let count = 0;
  for (var c in a) {
    count = count + 1;
  }
  return count;
}

postGrid();
function postGrid() {
  document.getElementById("bookMarkProfile").style.fontWeight = "normal";
  document.getElementById("bookMarkProfile").style.borderBottom = "none";
  document.getElementById("pr_book").style.display = "none";
  document.getElementById("pr_posts").style.display = "grid";
  document.getElementById("postsProfile").style.fontWeight = "bold";
  document.getElementById("postsProfile").style.borderBottom =
    "2px solid black";
}
// to get object of my posts

let parentPost = document.getElementById("pr_posts");
let pos_myself = JSON.parse(localStorage.getItem("pos_myself"));
console.log(pos_myself);
console.log(objLength(pos_myself));

document.getElementById("postsProfile").style.fontWeight = "bold";
document.getElementById("postsProfile").style.borderBottom = "2px solid black";

let keyofMypost = Object.keys(pos_myself);
document.getElementById("span_post").innerText = keyofMypost.length;
for (i = 0; i < keyofMypost.length; i++) {
  let tempObj = keyofMypost[i];

  parentPost.style.setProperty(
    "grid-template-rows",
    "repeat(" + Math.ceil(keyofMypost.length / 3) + "," + 266 + "px)"
  );
  let forHeight =
    556 +
    Math.ceil(keyofMypost.length / 3) * 266 +
    (Math.ceil(keyofMypost.length / 3) - 1) * 58;
  document.getElementById("post_pop").style.height =
    (forHeight > 1050 ? forHeight : 1050) + 50 + "px";
  let posts = document.createElement("div");
  posts.setAttribute("class", "pro_posts");
  posts.setAttribute("id", "flexPost" + tempObj);
  let postImg = document.createElement("img");
  postImg.setAttribute("class", "postImg");
  postImg.setAttribute("src", pos_myself[tempObj]["posts"]);
  postImg.setAttribute("onclick", "create_post(" + tempObj + ")");
  posts.appendChild(postImg);
  parentPost.appendChild(posts);
}

let parentGrid = document.getElementById("pr_book");
let bookLength = Object.keys(bookArr);

for (m = 0; m < bookLength.length; m++) {
  let temp = bookLength[m];
  parentGrid.style.setProperty(
    "grid-template-rows",
    "repeat(" + Math.ceil(objLength(bookArr) / 3) + "," + 266 + "px)"
  );

  let posts = document.createElement("div");
  posts.setAttribute("class", "pro_posts");
  posts.setAttribute("id", "bookDiv" + temp);
  let postImg = document.createElement("img");
  postImg.setAttribute("class", "postImg");
  console.log(temp);
  postImg.setAttribute("src", bookArr[temp]["posts"]);
  postImg.setAttribute("onclick", "create_bookpost(" + temp + ")");
  posts.appendChild(postImg);
  parentGrid.appendChild(posts);
}

//object of comment
let comments = JSON.parse(localStorage.getItem("comments"));

//post
function create_post(my_post) {
  // document.getElementById("post_pop")
  var inner = document.createElement("div");
  inner.setAttribute("class", "post");
  inner.classList.add("open-popup");
  
  // document.getElementById("post_pop").classList.add("open-popup");
  document.getElementById("post_pop").style.visibility = "visible";
  inner.setAttribute("id", "id" + pos_myself[my_post]["id"]);
  document.getElementById("post_pop").appendChild(inner);
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

  //close button
  var close = document.createElement("div");
  close.setAttribute("class", "cls_div");
  var cloTag = document.createElement("i");
  cloTag.setAttribute("class", "fa-regular fa-circle-xmark");
  cloTag.setAttribute("onclick", "closePop(" + my_post + ")");
  cloTag.classList.add("closeMark");
  close.appendChild(cloTag);
  document
    .getElementById("post_top" + pos_myself[my_post]["id"])
    .appendChild(close);

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
    "<ul class='ul_post'><li ><i class='fa-" +
    hear_type +
    " fa-heart heart' style='color:" +
    hear_style +
    "' id=heart_id" +
    pos_myself[my_post]["id"] +
    " onclick='flike(pos_myself," +
    my_post +
    ")'></i></li><li><i class='fa-regular fa-comment'></i></li> <li><i class='fa-regular fa-trash-can' onclick='removePost(" +
    my_post +
    ")'></i></i></li> <li><i class='fa-" +
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
  var p_com = document.createElement("p");

  let countShow = 0;
  p_com.setAttribute(
    "onclick",
    "showComm(" + pos_myself[my_post]["id"] + "," + countShow + ")"
  );

  p_com.innerText = "View all comments";
  p_com.style.setProperty("font-size", "14px");
   p_com.setAttribute("class","viewcom");
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
  com_in.className = "com_inp";

  com_in.setAttribute("id", "comin" + pos_myself[my_post]["id"]);
  com_in.setAttribute(
    "onchange",
    "putComment(" + pos_myself[my_post]["id"] + "," + "this.value)"
  );

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

//for bookmark post
function create_bookpost(my_post) {
  let forHeight =
    556 +
    Math.ceil(bookLength.length / 3) * 266 +
    (Math.ceil(bookLength.length / 3) - 1) * 58;
  document.getElementById("post_pop").style.height =
    (forHeight > 1050 ? forHeight : 1050) + "px";

  // document.getElementById("post_pop")
  var inner = document.createElement("div");
  inner.setAttribute("class", "post");
  inner.classList.add("open-popup");
  // document.getElementById("post_pop").classList.add("open-popup");
  document.getElementById("post_pop").style.visibility = "visible";
  inner.setAttribute("id", "id" + bookArr[my_post]["id"]);
  document.getElementById("post_pop").appendChild(inner);
  //post top
  var one = document.createElement("div");
  one.setAttribute("class", "post_top");
  one.setAttribute("id", "post_top" + bookArr[my_post]["id"]);
  document.getElementById("id" + bookArr[my_post]["id"]).appendChild(one);
  //postr image or video
  var two = document.createElement("div");
  two.setAttribute("class", "post_mid");
  two.setAttribute("id", "mid_pos" + bookArr[my_post]["id"]);
  document.getElementById("id" + bookArr[my_post]["id"]).appendChild(two);
  //profile pic in top
  var pro = document.createElement("div");
  pro.setAttribute("class", "pro_top");
  var pro_pic = document.createElement("img");
  pro_pic.setAttribute("class", "propic");
  pro_pic.setAttribute("src", bookArr[my_post]["profile"]);
  pro.appendChild(pro_pic);
  document.getElementById("post_top" + bookArr[my_post]["id"]).appendChild(pro);

  //porifle bottom
  var bot = document.createElement("div");
  bot.setAttribute("class", "post_bot");
  bot.setAttribute("id", "post_bot" + bookArr[my_post]["id"]);
  bot.style.setProperty("padding-left", "7px");
  document.getElementById("id" + bookArr[my_post]["id"]).appendChild(bot);

  //profile info
  var name_top = document.createElement("div");
  name_top.setAttribute("class", "pro_name");
  document
    .getElementById("post_top" + bookArr[my_post]["id"])
    .appendChild(name_top);

  //close button
  var close = document.createElement("div");
  close.setAttribute("class", "cls_div");
  var cloTag = document.createElement("i");
  cloTag.setAttribute("class", "fa-regular fa-circle-xmark");
  cloTag.setAttribute("onclick", "closePop(" + my_post + ")");
  cloTag.classList.add("closeMark");
  close.appendChild(cloTag);
  document
    .getElementById("post_top" + bookArr[my_post]["id"])
    .appendChild(close);

  //name in profile
  var name_inf = document.createElement("h4");
  name_inf.innerText = bookArr[my_post]["user"];
  document
    .querySelector("#post_top" + bookArr[my_post]["id"] + " :nth-child(2)")
    .appendChild(name_inf);

  //post as image
  document.getElementById("mid_pos" + bookArr[my_post]["id"]).innerHTML =
    "<img class='post_img' />";

  //post as video
  // document.getElementById("mid_pos1").innerHTML="<video class='post_vid'></video>";

  //profile source
  document
    .querySelector("#mid_pos" + bookArr[my_post]["id"] + " :nth-child(1)")
    .setAttribute("src", bookArr[my_post]["posts"]);

  //for is like?
  let hear_count = bookArr[my_post]["isLike"];
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
  let book_mar = bookArr[my_post]["isBook"];
  let book_type;
  if (book_mar == 0) {
    book_type = "regular";
  } else {
    book_type = "solid";
  }

  //lists below post
  document.getElementById("post_bot" + bookArr[my_post]["id"]).innerHTML =
    "<ul class='ul_post'><li ><i class='fa-" +
    hear_type +
    " fa-heart heart' style='color:" +
    hear_style +
    "' id=heart_id" +
    bookArr[my_post]["id"] +
    " onclick='flike(bookArr," +
    my_post +
    ")'></i></li><li><i class='fa-regular fa-comment'></i></li> <li></li> <li><i class='fa-" +
    book_type +
    " fa-bookmark book' onclick='reBook(bookArr," +
    bookArr[my_post]["id"] +
    ")' id=book_id" +
    bookArr[my_post]["id"] +
    "></i></li> </ul>";

  //info of post

  //like
  var lik_count = document.createElement("h4");
  lik_count.setAttribute("id", "like" + bookArr[my_post]["id"]);
  lik_count.innerText = bookArr[my_post]["likcount"] + " likes";

  document
    .getElementById("post_bot" + bookArr[my_post]["id"])
    .appendChild(lik_count);
  var p_tag = document.createElement("p");

  //name with quote

  p_tag.innerHTML =
    "<b>" +
    bookArr[my_post]["user"] +
    "</b>" +
    bookArr[my_post]["quote"] +
    "<br><br>";
  document
    .getElementById("post_bot" + bookArr[my_post]["id"])
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
    .getElementById("post_bot" + bookArr[my_post]["id"])
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
  com_in.setAttribute("id", "comin" + bookArr[my_post]["id"]);
  com_in.setAttribute(
    "onchange",
    "putComment(" + bookArr[my_post]["id"] + "," + "this.value)"
  );

  var com_box = document.createElement("div");
  com_box.setAttribute("class", "comment_box");
  com_box.appendChild(com_in);
  document
    .getElementById("post_bot" + bookArr[my_post]["id"])
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
//closing pop up

function closePop(my_post) {
  document.getElementById("post_pop").innerHTML = "";
  document.getElementById("post_pop").style.visibility = "hidden";
}

//for like on my post

function flike(a, post_num) {
  // console.log(post_num);

  let likecount = document.getElementById("like" + a[post_num]["id"]);
  //console.log(event.target.className);
  let her_id = document.getElementById("heart_id" + a[post_num]["id"]);
  // console.log(her_id);
  if (her_id.className == "fa-solid fa-heart heart") {
    a[post_num]["likcount"] = a[post_num]["likcount"] - 1;
    console.log(a[post_num]["likcount"]);
    her_id.style = "color:black";
    her_id.className = "fa-regular fa-heart heart";
    likecount.innerText = a[post_num]["likcount"] + " likes";
    if (a == pos_myself) {
      a[post_num]["isLike"] = 0;
    } else {
      bookArr[post_num]["isLike"] = 0;
      post_others[post_num]["isLike"] = 0;
    }
    localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    localStorage.setItem("post_others", JSON.stringify(post_others));
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
  } else if (her_id.className == "fa-regular fa-heart heart") {
    a[post_num]["likcount"] = a[post_num]["likcount"] + 1;
    //console.log(a[post_num]["likcount"]);
    her_id.className = "fa-solid fa-heart heart";
    her_id.style = "color:red";
    likecount.innerText = a[post_num]["likcount"] + " likes";
    if (a == pos_myself) {
      a[post_num]["isLike"] = 1;
    } else {
      bookArr[post_num]["isLike"] = 1;
      post_others[post_num]["isLike"] = 1;
    }
    localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    localStorage.setItem("post_others", JSON.stringify(post_others));
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
  }
}

function bookGrid() {
  document.getElementById("pr_book").style.display = "grid";
  document.getElementById("postsProfile").style.fontWeight = "normal";
  document.getElementById("postsProfile").style.borderBottom = "none";
  document.getElementById("pr_posts").style.display = "none";
  document.getElementById("bookMarkProfile").style.fontWeight = "bold";
  document.getElementById("bookMarkProfile").style.borderBottom =
    "2px solid black";
  document.getElementById("post_pop").style.height =
    556 +
    Math.ceil(objLength(bookArr) / 3) * 266 +
    (Math.ceil(objLength(bookArr) / 3) - 1) * 58 +
    "px";
}

//for bookmark post
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

//for remove book
function reBook(a, b) {
  let id = document.getElementById("book_id" + b);
  console.log("yogebook");
  // console.log(event.target.className);
  if (id.className == "fa-solid fa-bookmark book") {
    id.style = "color:black";
    id.className = "fa-regular fa-bookmark book";
    // console.log(Object.hasOwn(post_others, b));
    if (Object.hasOwn(post_others, b)) {
      post_others[b]["isBook"] = 0;
    } else if (Object.hasOwn(pos_myself, b)) {
      pos_myself[b]["isBook"] = 0;
    }
    closePop();
    document
      .getElementById("bookDiv" + b)
      .parentNode.removeChild(document.getElementById("bookDiv" + b));
    delete bookArr[b];
    localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
    localStorage.setItem("post_others", JSON.stringify(post_others));
    localStorage.setItem("bookArr", JSON.stringify(bookArr));
  }
}

// for deleting post

function removePost(a) {
  closePop();
  delete pos_myself[a];
  delete comments[a];
  parentPost.removeChild(document.getElementById("flexPost" + a));
  localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
  //   postCount--;
  document.getElementById("span_post").innerText = keyofMypost.length;
  localStorage.setItem("postCount", postCount);
  localStorage.setItem("comments", JSON.stringify(comments));
}

//following div

//object for following tag

let userArr = JSON.parse(localStorage.getItem("userArr"));

let profileimg = JSON.parse(localStorage.getItem("profileimg"));

let foloObj = JSON.parse(localStorage.getItem("foloObj"));

// let foloObj = {
//   2: {
//     prof: profileimg[2],
//     text1: userArr[2],
//     text2: "1.4M Followers",
//     foltest: 1,
//   },
//   3: {
//     prof: profileimg[3],
//     text1: userArr[3],
//     text2: "300 Followers",
//     foltest: 1,
//   },
//   4: {
//     prof: profileimg[4],
//     text1: userArr[4],
//     text2: "239 Followers",
//     foltest: 1,
//   },
//   5: {
//     prof: profileimg[5],
//     text1: userArr[5],
//     text2: "455 Followers",
//     foltest: 1,
//   },
//   6: {
//     prof: profileimg[6],
//     text1: userArr[6],
//     text2: "40M Followers",
//     foltest: 1,
//   },
//   7: {
//     prof: profileimg[7],
//     text1: userArr[7],
//     text2: "190 Followers",
//     foltest: 1,
//   },
//   8: {
//     prof: profileimg[8],
//     text1: userArr[8],
//     text2: "106 Followers",
//     foltest: 1,
//   },
//   9: {
//     prof: profileimg[9],
//     text1: userArr[9],
//     text2: "143 Followers",
//     foltest: 1,
//   },
//   10: {
//     prof: profileimg[10],
//     text1: userArr[10],
//     text2: "233M Followers",
//     foltest: 1,
//   },
//   11: {
//     prof: profileimg[11],
//     text1: userArr[11],
//     text2: "25.9M Followers",
//     foltest: 1,
//   },
// };
// localStorage.setItem("foloObj", JSON.stringify(foloObj));

let foloArr = Object.keys(foloObj);

let sideOb = JSON.parse(localStorage.getItem("sideOb"));

//to set count of post in profile page
document.getElementById("span_folers").innerText = foloArr.length;

//change follow tag
let visiblefolo = 0;
function changeFollowTag() {
  console.log("active");
  let foloElement = document.getElementById("folowing_div");
  if (visiblefolo == 0) {
    foloElement.style.visibility = "visible";
    // foloElement.classList.toggle("follow_active");
    visiblefolo = 1;
  } else {
    foloElement.style.visibility = "hidden";
    visiblefolo = 0;
  }
}

// inner elements folloeing div
let foloElement = document.getElementById("folowing_div");
let divHead = document.createElement("div");
divHead.setAttribute("class", "headdivcls");
foloElement.appendChild(divHead);

var head = document.createElement("h4");
head.innerText = "Following";
divHead.appendChild(head);

for (let i = 0; i < foloArr.length; i++) {
  side(foloArr[i]);
}

function side(a) {
  //clone my tag

  let ownSide = document.createElement("div");
  ownSide.setAttribute("class", "folow_clones");

  //profile tag sidebar
  let roundSide = document.createElement("div");
  roundSide.setAttribute("class", "folow_circ");
  ownSide.appendChild(roundSide);

  let sid_profi = document.createElement("img");
  sid_profi.setAttribute("src", foloObj[a]["prof"]);
  sid_profi.setAttribute("class", "folowProf");
  roundSide.appendChild(sid_profi);

  //side info
  let side_whole = document.createElement("div");
  side_whole.setAttribute("class", "folowWhole");
  ownSide.appendChild(side_whole);

  let divBut = document.createElement("div");
  divBut.setAttribute("class", "forflex");
  ownSide.appendChild(divBut);
  let folloBut = document.createElement("button");
  folloBut.setAttribute("id", "folo" + a);
  folloBut.setAttribute("onclick", "follow(" + a + ")");
  folloBut.setAttribute("class", "folowButton");
  folloBut.innerText = "Following";
  divBut.appendChild(folloBut);

  //side user
  let side_pro = document.createElement("h4");
  side_pro.innerText = foloObj[a]["text1"];
  side_whole.appendChild(side_pro);

  //side nickname
  let side_info = document.createElement("h6");
  side_info.style.marginTop = "5px";
  side_info.style.fontSize = "normal";
  side_info.style.color = "grey";
  side_info.innerText = foloObj[a]["text2"];
  side_whole.appendChild(side_info);

  foloElement.appendChild(ownSide);
}

function follow(x) {
  console.log("work");

  let temp = document.getElementById("folo" + x);
  console.log(temp.innerText);
  if (foloObj[x]["foltest"] == 1) {
    temp.innerText = "Follow  + ";
    foloObj[x]["foltest"] = 0;
    if (x > 11) {
      console.log(x);
      sideOb[x - 11]["foltest"] = 0;
      // console.log(sideOb[x]["foltest"]);
      delete foloObj[x];
      localStorage.setItem("sideOb", JSON.stringify(sideOb));
      localStorage.setItem("foloObj", JSON.stringify(foloObj));
    }
  } else {
    temp.innerText = "Following";
    foloObj[x]["foltest"] = 1;
    if (x > 11) {
      sideOb[x - 11]["foltest"] = 1;
      foloObj[x] = sideOb[x];
      // console.log(sideOb[x]["foltest"]);
      localStorage.setItem("sideOb", JSON.stringify(sideOb));
      localStorage.setItem("foloObj", JSON.stringify(foloObj));
    }
  }
}

//function fo change dp

var inputFile1 = document.querySelector("#fileinput");
var NewImage = "";
inputFile1.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    NewImage = reader.result;
    //console.log(NewImage);
    uploadImg(NewImage);
  });
  reader.readAsDataURL(this.files[0]);
});
function uploadImg(NewImage) {
  localStorage.setItem("prfileDp", "");
  localStorage.setItem("prfileDp", NewImage);
  for (i = 0; i < keyofMypost.length; i++) {
    pos_myself[keyofMypost[i]]["profile"] = NewImage;
    console.log("active");
  }
  console.log(pos_myself);
  document.getElementById("home_prof").setAttribute("src", NewImage);
  document.getElementById("pr_dp").setAttribute("src", NewImage);
  localStorage.setItem("pos_myself", JSON.stringify(pos_myself));
}

////
////
////
////
////
////
///for comment putting

//let comments = {};
//localStorage.setItem("comments", JSON.stringify(comments));

//let comments = JSON.parse(localStorage.getItem("comments"));
// delete comments[1];
// localStorage.setItem("comments", JSON.stringify(comments));

function putComment(a, com) {
  console.log(com);
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

  wholeDiv.appendChild(comProfile);
  wholeDiv.appendChild(resultCom);
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

// comments[21]["comm"] = ["taylorrr"];
// localStorage.setItem("comments", JSON.stringify(comments));

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
