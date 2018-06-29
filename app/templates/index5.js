function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let age01 = age1;
  let age02 = age2;
  let age03 = age3;
  let age04 = age4
  let age05 = age5;
  let age06 = age6;
  let age07 = age7;
  let age08 = age8;
  let sum = (age01*age01)+(age02*age02)+(age03*age03)+(age04*age04)+(age05*age05)+(age06*age06)+(age07*age07)+(age08*age08);
  let result = Math.floor(Math.sqrt(sum))/2;
  return result;
}
predictAge();