// Ascending  - Artan sıralama (ASC)
// Descending - Azalan Sıralama (DESC)
export const strSortAsc = (arr)=>{  
    return arr.sort(function(a, b){return a.localeCompare(b)});
}

export const strSortDesc = (arr)=>{
    return arr.sort(function(a, b){return b.localeCompare(a)});
}

export const nmbrSortAsc = (arr)=>{
    return arr.sort((a,b)=>a-b);
}

export const nmbrSortDesc = (arr)=>{
    return arr.sort((a,b)=>b-a);
}

const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
  };
  
export default message;