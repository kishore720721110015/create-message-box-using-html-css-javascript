  
        let arr=['what is ur name','where are you from','what is your age','what is ur qualification','tell about your self','where are you from'];
        
        function ans(){
            let mes=document.getElementById("in").value;
            let inputval=mes.toLowerCase();
            let flag=0;
            for(let i=0;i<arr.length;i++){
                if(arr[i]==inputval){
                    flag=1;
                }
            }
        if(flag==1){
            alert("Accepted");
        }
        else{
            alert("Declined");
            }
        }
