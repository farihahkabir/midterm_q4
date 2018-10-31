var plants= [
    {name:"Parsley", lastwatered:"Last watered: TODAY"},
    {name:"Coriander", lastwatered:"Last watered:"},
    {name:"Thyme", lastwatered:"Last watered: TODAY"},
    {name:"Basil", lastwatered:"Last watered:"},
    {name:"Cilantro", lastwatered:"Last watered: TODAY"},
    {name:"Sage", lastwatered:"Last watered: TODAY"},
    {name:"Mint", lastwatered:"Last watered:"},
    {name:"Oregano", lastwatered:"Last watered:"},
];

$(document).ready(function(){
  plants.forEach(function(product,index){
    var colDiv = $('<div>').addClass('col-md-4');
    var cardDiv = $('<div>').addClass('card');
    
    var cardBody = $('<div>').addClass('card-body');
    cardDiv.append(cardBody);
    
    var productTitle = $('<h2>').addClass('card-title').text(product.name);
    cardBody.append(productTitle);
    
    var waterButton = $('<button>').addClass('btn btn-primary').text('WATER').attr('id',index);
    waterButton.click(function(event){
     
    });
    cardBody.append(waterButton);
    
    colDiv.append(cardDiv);
    $('#plants-row').append(colDiv);
  });
});