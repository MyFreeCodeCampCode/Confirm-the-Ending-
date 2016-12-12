
function confirmEnding(str, target) {
  
  if (str.substring ((str.length - target.length), str.length) == target)
    return true;
    
    else
      return false;

  //return str.endsWithh(target);
}

//Test Case
//confirmEnding("Bastian", "n");
