const search=()=>{
    const searchBox = document.getElementById("search_icon").value.toUpperCase();
    const storeItems = document.getElementById("product_list");
    const product = document.querySelectorAll(".product");
    const pname= storeItems.getElementsByTagName("h2");
    for(var i=0; i<pname.length; i++){
        let match=product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue=match.textContent|| match.innerHTML ;
            console.log(textvalue);
            if(textvalue.toUpperCase().indexOf(searchBox)>-1){
                product[i].style.display="";
            }
            else{
                product[i].style.display="none";

            }
        }
    }
}