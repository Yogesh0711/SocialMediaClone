function clr(pas) {
    var login = document.getElementById("login_but");
    if (pas.length >= 6) {
        console.log("color");
        document.getElementById("login_but").style.backgroundColor = "#0095F6";
        login.setAttribute("onclick", "checkPas()");
    }
    else {
        document.getElementById("login_but").style.backgroundColor = "rgba(164, 215, 247, 0.76)";
        login.removeAttribute("onclick", "checkPas()");
    }
}
function checkPas() {
    var user = document.getElementById("user_name").value;
    var pass = document.getElementById("pass_word").value;
    if (user == "Yogesh_07" && pass == "Instagram@12") {
        document.getElementById("a_log").setAttribute("href", "home.html");
    }
    else {
        document.getElementById("main_div").style.height = "483.98px";
        document.getElementById("login_img").style.height = "589px";
        document.getElementById("pass_err").style.display = "block";

    }
}





settingAllObj();



 function settingAllObj(){
  localStorage.setItem("prfileDp", "images/profile.jpg");
  let profile_pic = localStorage.getItem("prfileDp");


  let profileimg = {
  1: [profile_pic],
  2: ["images/samcurren.jpeg"],
  3: ["images/ragu.jpeg"],
  4: ["images/anand.jpeg"],
  5: ["images/pragathi.jpeg"],
  6: ["images/dhoni.jpg"],
  7: ["images/murugan.jpeg"],
  8: ["images/sowmi.jpeg"],
  9: ["images/dear.jpeg"],
  10: ["images/taylor.jpeg"],
  11: ["images/rohit.jpg"],
};

localStorage.setItem("profileimg", JSON.stringify(profileimg));

let userArr = {
  1: ["Yogesh_07"],
  2: ["SamCurren58"],
  3: ["Thala_ragu"],
  4: ["Ananth_sma"],
  5: ["Pragathi_Cutie"],
  6: ["mahi7781"],
  7: ["Murugan_05"],
  8: ["Sowmi_BTS"],
  9: ["Dear_comrade"],
  10: ["taylor_Swift"],
  11: ["rohitsharma45"],
};
localStorage.setItem("userArr", JSON.stringify(userArr));






let pos_myself = {
    1: {
        id: [1],
        likcount: 120,
        user: ["Yogesh_07"],
        quote: [" AttroStart🤩"],
        profile: [profile_pic],
        posts: ["images/yogepost.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    2: {
        id: [2],
        likcount: 90,
        user: ["Yogesh_07"],
        quote: [" First Calligraphy🌟💖"],
        profile: [profile_pic],
        posts: ["images/yogepost2.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    3: {
        id: [3],
        likcount: 44,
        user: ["Yogesh_07"],
        quote: [" A frd in need is friend indeed😽"],
        profile: [profile_pic],
        posts: ["images/yogepost3.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    4: {
        id: [4],
        likcount: 48,
        user: ["Yogesh_07"],
        quote: [" Somepeople's are precious😽💎"],
        profile: [profile_pic],
        posts: ["images/yogepost4.jpeg"],
        isLike: [0],
        isBook:[0],
    },

}
localStorage.setItem("pos_myself", JSON.stringify(pos_myself));






let post_others = {
    11: {
        id: [11],
        likcount: 124048,
        user: ["SamCurren58"],
        quote: [" World Champions" + "💖" + "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
        profile: ["images/samcurren.jpeg"],
        posts: ["images/sampost.jpeg"],
        isLike: [1],
    },
    12: {
        id: [12],
        likcount: 104048,
        user: ["SamCurren58"],
        quote: [" It's for us" + "&#x1F60D;"],
        profile: ["images/samcurren.jpeg"],
        posts: ["images/sampost1.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    13: {
        id: [13],
        likcount: 14048,
        user: ["SamCurren58"],
        quote: [" Isn't a dream" + "&#x1F60D;" + "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
        profile: ["images/samcurren.jpeg"],
        posts: ["images/sampost2.jpeg"],
        isLike: [1],
        isBook:[0],
    },
    14: {
        id: [14],
        likcount: 48,
        user: ["Thala_ragu"],
        quote: [" Fam_Love" + "&#x1F60D;"],
        profile: ["images/ragu.jpeg"],
        posts: ["images/ragupost.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    15: {
        id: [15],
        likcount: 68,
        user: ["Ananth_sma"],
        quote: [" Her place is irreplaceabale " + "❣️"],
        profile: ["images/anand.jpeg"],
        posts: ["images/anandpost.jpeg"],
        isLike: [1],
        isBook:[1],

    },
    16: {
        id: [16],
        likcount: 23,
        user: ["Pragathi_Cutie"],
        quote: [" Vibe with Sowmii " + "🫶"],
        profile: ["images/pragathi.jpeg"],
        posts: ["images/pragathipost.jpeg"],
        isLike: [1],
        isBook:[1],
    },
    17: {
        id: [17],
        likcount: 52,
        user: ["Sowmi_BTS"],
        quote: [" Vibe with Cutii " + "🥰"],
        profile: ["images/sowmi.jpeg"],
        posts: ["images/sowmipost.jpeg"],
        isLike: [0],
        isBook:[1],
    },
    18: {
        id: [18],
        likcount: 120034,
        user: ["mahi7781"],
        quote: [" Weekend Thereapy begin" + "🏞️"],
        profile: ["images/dhoni.jpg"],
        posts: ["images/dhonipost.jpg"],
        isLike: [1],
        isBook:[0],
    },
    19: {
        id: [19],
        likcount: 23456,
        user: ["mahi7781"],
        quote: [" My love, My miracle, My daughter" + "💛"],
        profile: ["images/dhoni.jpg"],
        posts: ["images/dhonipost.png"],
        isLike: [0],
        isBook:[0],
    },
    20: {
        id: [20],
        likcount: 29,
        user: ["Murugan_05"],
        quote: [" where lyf begins & love never ends" + "🥰"],
        profile: ["images/murugan.jpeg"],
        posts: ["images/muruganpost.jpeg"],
        isLike: [1],
        isBook:[0],
    },
    21: {
        id: [21],
        likcount: 1223567,
        user: ["taylor_Swift"],
        quote: [" were lyf begins" + "🎶"],
        profile: ["images/taylor.jpeg"],
        posts: ["images/taylorpost.jpeg"],
        isLike: [1],
        isBook:[1],
    },
    22: {
        id: [22],
        likcount: 223123,
        user: ["taylor_Swift"],
        quote: [" where word fails Music speaks" + "🎸🎶"],
        profile: ["images/taylor.jpeg"],
        posts: ["images/taylorpost1.jpeg"],
        isLike: [1],
        isBook:[1],
    },
    23: {
        id: [23],
        likcount: 65437,
        user: ["taylor_Swift"],
        quote: [" Make your own kind of music" + "🎹"],
        profile: ["images/taylor.jpeg"],
        posts: ["images/taylorpost2.jpeg"],
        isLike: [1],
        isBook:[1],
    },
    24: {
        id: [24],
        likcount: 56784,
        user: ["rohitsharma45"],
        quote: [" Wid u it's Different" + "😽"],
        profile: ["images/rohit.jpg"],
        posts: ["images/rohitpost.jpeg"],
        isLike: [0],
        isBook:[0],
    },
    25: {
        id: [25],
        likcount: 234876,
        user: ["rohitsharma45"],
        quote: [" Dis smyl is brought to u by famly Luv" + "🤗"],
        profile: ["images/rohit.jpg"],
        posts: ["images/rohitpost1.jpeg"],
        isLike: [0],
        isBook:[1],
    },
}
localStorage.setItem("post_others", JSON.stringify(post_others));



let foloObj = {
  2: {
    prof: profileimg[2],
    text1: userArr[2],
    text2: "1.4M Followers",
    foltest: 1,
  },
  3: {
    prof: profileimg[3],
    text1: userArr[3],
    text2: "300 Followers",
    foltest: 1,
  },
  4: {
    prof: profileimg[4],
    text1: userArr[4],
    text2: "239 Followers",
    foltest: 1,
  },
  5: {
    prof: profileimg[5],
    text1: userArr[5],
    text2: "455 Followers",
    foltest: 1,
  },
  6: {
    prof: profileimg[6],
    text1: userArr[6],
    text2: "40M Followers",
    foltest: 1,
  },
  7: {
    prof: profileimg[7],
    text1: userArr[7],
    text2: "190 Followers",
    foltest: 1,
  },
  8: {
    prof: profileimg[8],
    text1: userArr[8],
    text2: "106 Followers",
    foltest: 1,
  },
  9: {
    prof: profileimg[9],
    text1: userArr[9],
    text2: "143 Followers",
    foltest: 1,
  },
  10: {
    prof: profileimg[10],
    text1: userArr[10],
    text2: "233M Followers",
    foltest: 1,
  },
  11: {
    prof: profileimg[11],
    text1: userArr[11],
    text2: "25.9M Followers",
    foltest: 1,
  },
};
localStorage.setItem("foloObj", JSON.stringify(foloObj));


postCount = 5;

localStorage.setItem("postCount", postCount);




let sideOb = {
  2: {
    prof: "images/obama.jpeg",
    text1: "Obama",
    text2: "3.3M Followers",
    foltest: 0,
  },
  3: {
    prof: "images/sk.jpeg",
    text1: "SivaK",
    text2: "2.3M Followers",
    foltest: 0,
  },
  4: {
    prof: "images/virat.jpg",
    text1: "Virat_Anu",
    text2: "5.5M Followers",
    foltest:0,
  },
  5: {
    prof: "images/vjd.jpg",
    text1: "Vijay_DV",
    text2: "2.9M Followers",
    foltest: 0,
  },
};

localStorage.setItem("sideOb", JSON.stringify(sideOb));




let comments = {
1: {comm: ["Hello"]},
2: {comm: ["Hello"]},
3: {comm: ["hii"]},
4: {comm: ["hiii"]},
11: {comm: []},
12: {comm: ["hiii"]},
13: {comm: ["aeded"]},
14: {comm: ["sndkjas"]},
15: {comm: ["nasjda"]},
16: {comm: ["ajkac"]},
17: {comm: ["hiii"]},
18: {comm: ["hiiii"]},
19: {comm: ["Dhoni", "hello", "asdasd"]},
20: {comm: ["adsasd"]},
21: {comm: ["j\hiii"]},
22: {comm: ["dsaasd"]},
23: {comm: ["csaasd"]},
24: {comm: ["Rohit ahe", "hello", "Hello", "adqw"]},
25: {comm: ["ascjadncd"]},
};
localStorage.setItem("comments", JSON.stringify(comments));






let bookArr={};

localStorage.setItem("bookArr", JSON.stringify(bookArr));
bookArr[11]=post_others[11];
bookArr[15]=post_others[15];
bookArr[16]=post_others[16];
bookArr[17]=post_others[17];
bookArr[21]=post_others[21];
bookArr[22]=post_others[22];
bookArr[23]=post_others[23];
bookArr[25]=post_others[25];
localStorage.setItem("bookArr", JSON.stringify(bookArr));









 }