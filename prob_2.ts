class Matrix{
  private _rows: number;
  private _columns: number;
  private _elements: number[][] = [];

  constructor(rows:number, columns: number){
      this._rows = rows;
      this._columns = columns;
      this._elements = this.initMatrix();
  }
  public get elements(): number[][] {
      return this._elements;
  }    
  public get rows(): number {
      return this._rows;
  }
  public get columns(): number {
      return this._columns;
  }
  
  public setElement(row:number, column: number,  value:number) {
      this._elements[row-1][column-1]= value;
  }

  private initMatrix = (): number[][] => {
      let arr: number[][] = [];
      for (let i = 0; i < this._rows; i++) {
          arr[i] = [];
          for (let j = 0; j < this._columns; j++) {
              arr[i][j] = 0;
          }
      }
      return arr;
  }
  public sumMatrix = (matrix: number[][]): string | number[][] => {
      if (matrix[0].length !== this._columns || matrix.length !== this._rows ) {
          return "NOOP"
      } else {
          for (let i = 0; i < this._rows; i++) {
              for (let j = 0; j < this._columns; j++) {
                  this._elements[i][j] += matrix[i][j];
              }
          }
          return this._elements;
      }
  }

  public multiplyMatrix = (matrix: number[][]) => {
      if (this._columns !== matrix.length) {
          return "NOOP"
      } else {
          let res: number[][] = [];
          let sumMatrixElement: number = 0;
          for (let i = 0; i < this._rows; i++) {
              res[i] = []
              for (let j = 0; j < matrix[0].length; j++) {
                  for (let k = 0; k < this._columns; k++) {
                      sumMatrixElement += this._elements[i][k]*matrix[k][j];
                  }
                  res[i][j] = sumMatrixElement;
                  sumMatrixElement = 0;
              }
          }
          this._elements = res
          return res;
      }
  }
}

//matrices que se van a sumar
let matrixsum1 = new Matrix(3,3)
let matrixsum2 = new Matrix(3,3)

//matrices que se van multiplicar
let matrixmult3 = new Matrix(2,3)
let matrixmult4 = new Matrix(3,2)

//matrices para la suma
matrixsum1.setElement(1,1, 9);
matrixsum1.setElement(1,2, 8);
matrixsum1.setElement(1,3, 7);
matrixsum1.setElement(2,1, 6);
matrixsum1.setElement(2,2, 5);
matrixsum1.setElement(2,3, 4);
matrixsum1.setElement(3,1, 3);
matrixsum1.setElement(3,2, 2);
matrixsum1.setElement(3,3, 1);

matrixsum2.setElement(1,1, 1);
matrixsum2.setElement(1,2, 2);
matrixsum2.setElement(1,3, 3);
matrixsum2.setElement(2,1, 4);
matrixsum2.setElement(2,2, 5);
matrixsum2.setElement(2,3, 6);
matrixsum2.setElement(3,1, 7);
matrixsum2.setElement(3,2, 8);
matrixsum2.setElement(3,3, 9);

//matrices para la multiplicación
matrixmult3.setElement(1,1, 9);
matrixmult3.setElement(1,2, 8);
matrixmult3.setElement(1,3, 7);
matrixmult3.setElement(2,1, 6);
matrixmult3.setElement(2,2, 5);
matrixmult3.setElement(2,3, 4);

matrixmult4.setElement(1,1, 1);
matrixmult4.setElement(1,2, 2);
matrixmult4.setElement(2,1, 3);
matrixmult4.setElement(2,2, 4);
matrixmult4.setElement(3,1, 5);
matrixmult4.setElement(3,2, 6);

//Resultado de la suma de matrices
console.log(matrixsum1.sumMatrix(matrixsum2.elements));

//Resultado de la multiplicación de matrices
console.log(matrixmult3.multiplyMatrix(matrixmult4.elements));