           var lis=document.getElementsByTagName('li');
           var dele=0;
           var modif=0;
           var a;
           var topp=0;
           var e = document.querySelectorAll("li");
           var pd=0;
           var fi=0;
           for(let n=0;n<36;n++){
            lis[n].index=n;
               e[n].innerHTML="";
           }
           var text;
           function addd(){ text = prompt("请输入", "");
           
                   e[pd].innerHTML=text;
                   pd++;
                   
        };
       
        function del(){ 
        dele=1;
        }; 
        function modi(){
            modif=1;
        }
        function toop(){
            topp=1;
        }
        function finished()
        {
            fi=1;
        }
        for(var n=0;n<lis.length;n++) 
        {
        lis[n].addEventListener("click",function(){
            a=this.index;
            if(dele==1){
                pd--;
            e[a].innerHTML="";
        dele =0;
        for(let i=a;i<lis.length-1;i++)
        {
            e[i].innerHTML=e[i+1].innerHTML;
        }
        }
        if(modif==1)
        if(a>=pd) {
            modif=0;
            alert("error");
        }
        else
        {
            text = prompt("请输入", "");
            e[a].innerHTML=text;
            modif=0;
        }
        if(topp==1)
        {
            if(a>=pd) {
                topp=0;
                alert("error");
            }
            else{
            text=e[a].innerHTML;
            for(let i=a-1;i>=0;i--) 
            {
                e[i+1].innerHTML=e[i].innerHTML;
            }
            e[0].innerHTML=text;
            topp=0;}
        }
        if(fi==1)
        if(a>=pd) {
            fi=0;
            alert("error");
        }
        else
        {
            var text=e[a].innerHTML;
            if(text[text.length-1]=="√"){fi=0;
            alert("该任务已完成，做点别的事吧");
        }
            else
            e[a].innerHTML=e[a].innerHTML+"√";
            fi=0;
            
        }
        })}