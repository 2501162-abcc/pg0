//★ ローカルストレージに保存された情報を読み込む関数
function loadDate()
{
    let date = localStorage.getItem("subject-Info");
    //データがない場合は終了
    if(!date) return;

    let subjectDate = JSON.parse(date);

    let displaysubject = document.getElementById("subject");
    let displaysubjectDay = document.getElementById("subject-day");
    let displaysubjectTime = document.getElementById("subject-time");

    displaysubject.value = subjectDate.subject;
    displaysubjectDay.value = subjectDate.day;
    displaysubjectTime.value = subjectDate.time;
}
//★ テキストボックスに入力された情報をローカルストレージに保存する関数
function userSave()
{
    //入力情報
    let trainerInfo = {
        subject : document.getElementById("subject").value,
        day : document.getElementById("subject-day").value,
        time : document.getElementById("subject-time").value
    }
    //ローカルストレージに保存
    localStorage.setItem("subject-Info",JSON.stringify(trainerInfo));
    alert("学習情報が保存されました！");
}
//★ ローカルストレージ、テキストボックスを初期化する関数
function deleteInfo()
{
    if(confirm("本当にすべての学習情報情報を消去しますか？"))
    {
        localStorage.removeItem("subject-Info");
        document.getElementById("subject").value = "";
        document.getElementById("subject-day").value = "";
        document.getElementById("subject-time").value = "";
    }
    else
    {
        alert("キャンセルしました。");
    }
}

//保存クリックイベント
let keepBtn = document.getElementById("keepbtn");
keepBtn.addEventListener('click', function(){
    userSave();
});

//情報を削除するクリックイベント
let deleteBtn = document.getElementById("deletebtn");
deleteBtn.addEventListener('click,',function(){
    deleteInfo();
});

//読み込み関数
