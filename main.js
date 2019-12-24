// [ユーザー登録]
const urlSignUp =  'https://teachapi.herokuapp.com/sign_up';
// [ユーザーログイン]
const urlSignIn =  'https://teachapi.herokuapp.com/sign_in';
// [投稿一覧]
const urlPosts =  'https://teachapi.herokuapp.com/posts';


// []　配列
// {} オブジェクト

//MDNからコピペしてきた関数
// function postData(url = ``, data = {}) {
const sendData = (url = ``, data = {},  _method="POST") => {
  // 既定のオプションには * が付いています
    return fetch(url, {
        method: _method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    .then(response => response.json()); // レスポンスの JSON を解析
}

// サインアップを押されたらフェッチを実行するミドルウェア
/**
 * 関数の説明をかくコメントスタイル。登録ボタン押下時の処理
 */
const onButtonClickSignUp = ( ) =>{
  // HTMLから値を取得する
const name = document.getElementById( 'signUpName' ).value;
const bio = document.getElementById( 'signUpBio' ).value;
const email = document.getElementById( 'signUpEmail' ).value;
const password = document.getElementById( 'signUpPassword' ).value;
const passwordConfirmation = document.getElementById( 'signUpPasswordConfirmation' ).value;

console.log(name, bio, email, password, passwordConfirmation);

  // 登録APIを呼び出す
}

onButtonClickSignUp( );

//ばーちーさんのスラックより
const data = {
	"sign_up_user_params": {
		"name": "名前を入れてね",
		"bio": "自己紹介を入れてね",
    "email": "email",
    "password": "password",
    "password_confirmation": "password"
	}
}// あとから書き換えられないように安全のためにconstでかこう！

// console.log( 'start' )

// //使ってみる
// sendData(urlSignUp, data)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// console.log( 'end' )



  // function OnButtonClick() {
  //   target = document.getElementById("output");
  //   target.innerHTML = "Penguin";
  // }

  // ボタンを押したらAPIがフェッチされるようにする
// ミドルウェア
// ボタンを押したらミドルウェアを呼び出す
// ボタン押されました
// 間の関数をつくる
// フェッチします
