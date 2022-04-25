"use strict";
class Matrix {
    constructor(rows, columns) {
        this._elements = [];
        this.initMatrix = () => {
            let arr = [];
            for (let i = 0; i < this._rows; i++) {
                arr[i] = [];
                for (let j = 0; j < this._columns; j++) {
                    arr[i][j] = 0;
                }
            }
            return arr;
        };
        this.sumMatrix = (matrix) => {
            if (matrix[0].length !== this._columns || matrix.length !== this._rows) {
                return "NOOP";
            }
            else {
                for (let i = 0; i < this._rows; i++) {
                    for (let j = 0; j < this._columns; j++) {
                        this._elements[i][j] += matrix[i][j];
                    }
                }
                return this._elements;
            }
        };
        this.multiplyMatrix = (matrix) => {
            if (this._columns !== matrix.length) {
                return "NOOP";
            }
            else {
                let res = [];
                let sumMatrixElement = 0;
                for (let i = 0; i < this._rows; i++) {
                    res[i] = [];
                    for (let j = 0; j < matrix[0].length; j++) {
                        for (let k = 0; k < this._columns; k++) {
                            sumMatrixElement += this._elements[i][k] * matrix[k][j];
                        }
                        res[i][j] = sumMatrixElement;
                        sumMatrixElement = 0;
                    }
                }
                this._elements = res;
                return res;
            }
        };
        this._rows = rows;
        this._columns = columns;
        this._elements = this.initMatrix();
    }
    get elements() {
        return this._elements;
    }
    get rows() {
        return this._rows;
    }
    get columns() {
        return this._columns;
    }
    setElement(row, column, value) {
        this._elements[row - 1][column - 1] = value;
    }
}
//matrices que se van a sumar
let matrixsum1 = new Matrix(3, 3);
let matrixsum2 = new Matrix(3, 3);
//matrices que se van multiplicar
let matrixmult3 = new Matrix(2, 3);
let matrixmult4 = new Matrix(3, 2);
//matrices para la suma
matrixsum1.setElement(1, 1, 9);
matrixsum1.setElement(1, 2, 8);
matrixsum1.setElement(1, 3, 7);
matrixsum1.setElement(2, 1, 6);
matrixsum1.setElement(2, 2, 5);
matrixsum1.setElement(2, 3, 4);
matrixsum1.setElement(3, 1, 3);
matrixsum1.setElement(3, 2, 2);
matrixsum1.setElement(3, 3, 1);
matrixsum2.setElement(1, 1, 1);
matrixsum2.setElement(1, 2, 2);
matrixsum2.setElement(1, 3, 3);
matrixsum2.setElement(2, 1, 4);
matrixsum2.setElement(2, 2, 5);
matrixsum2.setElement(2, 3, 6);
matrixsum2.setElement(3, 1, 7);
matrixsum2.setElement(3, 2, 8);
matrixsum2.setElement(3, 3, 9);
//matrices para la multiplicación
matrixmult3.setElement(1, 1, 9);
matrixmult3.setElement(1, 2, 8);
matrixmult3.setElement(1, 3, 7);
matrixmult3.setElement(2, 1, 6);
matrixmult3.setElement(2, 2, 5);
matrixmult3.setElement(2, 3, 4);
matrixmult4.setElement(1, 1, 1);
matrixmult4.setElement(1, 2, 2);
matrixmult4.setElement(2, 1, 3);
matrixmult4.setElement(2, 2, 4);
matrixmult4.setElement(3, 1, 5);
matrixmult4.setElement(3, 2, 6);
//Resultado de la suma de matrices
console.log(matrixsum1.sumMatrix(matrixsum2.elements));
//Resultado de la multiplicación de matrices
console.log(matrixmult3.multiplyMatrix(matrixmult4.elements));
