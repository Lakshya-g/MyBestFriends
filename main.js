Name_Of_My_Besties = [];
function submit() {
  var name_1 = document.getElementById("Name_Of_My_Bestie_1").value;
  var name_2 = document.getElementById("Name_Of_My_Bestie_2").value;
  var name_3 = document.getElementById("Name_Of_My_Bestie_3").value;
  var name_4 = document.getElementById("Name_Of_My_Bestie_4").value;
  var name_5 = document.getElementById("Name_Of_My_Bestie_5").value;
  var name_6 = document.getElementById("Name_Of_My_Bestie_6").value;

  Name_Of_My_Besties.push(name_1);
  Name_Of_My_Besties.push(name_2);
  Name_Of_My_Besties.push(name_3);
  Name_Of_My_Besties.push(name_4);
  Name_Of_My_Besties.push(name_5);
  Name_Of_My_Besties.push(name_6);

  console.log(Name_Of_My_Besties);

  document.getElementById("display_name").innerHTML = Name_Of_My_Besties;

  document.getElementById("Submit_Button").style.display = "none";

  document.getElementById("Sort_Button").style.display = "inline-block";
}

function sorting() {
  Name_Of_My_Besties.sort();

  console.log(Name_Of_My_Besties);

  document.getElementById("display_name").innerHTML = Name_Of_My_Besties;
}
