
const toggleSidebar = ()=> {
  
    if($(".sidebar").is(":visible")){
       //true
       //hide it 

      $(".sidebar").css("display","none"); 
      $(".content").css("margin-left","0%")
    }else{
        //false
        //to show it
        $(".sidebar").css("display","block");
        $(".content").css("margin-left","20%");
    }

};

const search = () => {
    let query = $("#search-input").val();

    if (query == "") {
        $(".search-result").hide();
    } else {
        let url = `http://localhost:8080/search/${query}`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let text = '<div class="list-group">';

                data.forEach((contact) => {
                    text += `<a href="/user/${contact.cId}/contact" class="list-group-item list-group-item-action">${contact.name}</a>`;
                });

                text += '</div>';

                $(".search-result").html(text);
                $(".search-result").show();
            });

        $(".search-result").show();
    }
};