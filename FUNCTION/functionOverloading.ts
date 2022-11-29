function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

let add2 = (x: number, y: number): number => {
  return x + y;
};

/*let add2 = (x: string, y:string): string =>{  //=>Cannot redeclare block-scoped variable 'add2
    return x+y;
};
*/
