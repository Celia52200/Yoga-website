        // username
        const username = document.querySelector('[name=username]');
        // change事件
        username.addEventListener('change',verifyName);
        function verifyName(){
            // console.log(11);
            const span = username.nextElementSibling;
            // 正規表示式設定姓名數量、英文名字
            const reg = /^[a-zA-Z0-9_-]{3,5}$/;
            if(!reg.test(username.value)){
                span.innerText = '輸入有誤，請輸入姓名';
                return false;
            }
            
            span.innerText = '';
            return true;
            
        };


        // 設定手機號碼
        const phone = document.querySelector('[name=phone]');
        // 電話事件監聽
        phone.addEventListener('change',verifyPhone);

        // 正規表示式訂手機電話號碼
        function verifyPhone(){
            const span = phone.nextElementSibling;
            const reg = /^[0-9]{10}$/;

            if(!reg.test(phone.value)){
                span.innerText='輸入有誤，請輸入正確手機號碼';
                return false;
            }
            span.innerHTML = '';
            return true;
        };

        // 設定Email
        const email =document.querySelector('[name=email]');
        // Email事件監聽事件
        email.addEventListener('change',verifyEmail);
        // 正規表示式Email格式
        function verifyEmail(){
            const span = email.nextElementSibling;
            const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

            if(!reg.test(email.value)){
                span.innerHTML='輸入有誤，請輸入正確的Email地址';
                return false;
            }
            span.innerHTML='';
            return true;
        };


    //定義表單 
    const inputBox = document.querySelector('.input-box');
    // 當表格為空白時
    $(".send").on("click",function(){
        if(inputBox.value === ""){
            alert("您需要填寫一些資料");
        }
    });

