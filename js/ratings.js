collect_ratings()
{
  let rating=0;
  var ratings
  {
    count: 0,
    sum: 0,
    average: 0
  };
  const elements=document.queryselectorall('.rating');
  elements.foreach(element => {
    rating=parseint(element.id.replace('star', ''));
    ratings.count +=parseint(element.value);
    ratings.sum +=parseint(element.value)* rating;

  });

  if (ratings.count !=0)
  {
    ratings.average=ratings.sum / ratings.count;
  }
  return ratings;

}
document.addeventlistner('change', () => {
  const ratings = collect_ratings();
  document.queryselector('#average').value=ratings.average.toFixed(2);
  
});
