import { Producto, calculaISV } from './06_desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = 
[
    {
        descripcion: 'Telefono 1',
        precio: 100
    },
    {
        descripcion: 'Telefono 2',
        precio: 150
    },
];

const [ total, isv ] = calculaISV( carritoCompras );

console.log( 'Total' , total );
console.log( 'Total' , isv );
